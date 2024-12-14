class QuoteGenerator {
  constructor() {
    this.textContent = document.getElementById("textContent");
    this.saveButton = document.getElementById("save");
    this.init();
  }

  async init() {
    try {
      // 获取存储的文本
      const data = await chrome.storage.local.get('selectedText');
      if (data.selectedText) {
        this.textContent.textContent = data.selectedText;
      } else {
        // 如果存储中没有，尝试从当前页面获取
        const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
        if (tab?.id) {
          try {
            const response = await chrome.tabs.sendMessage(tab.id, {
              action: "getSelection"
            });
            if (response?.text) {
              this.textContent.textContent = response.text;
            }
          } catch (err) {
            console.log('No selection available');
          }
        }
      }

      // 绑定事件
      this.saveButton.addEventListener('click', () => this.generateImage());
    } catch (err) {
      console.error('Initialization failed:', err);
    }
  }

  async generateImage() {
    try {
      const preview = document.getElementById("preview");
      if (!preview) throw new Error('Preview element not found');

      const canvas = await html2canvas(preview);
      const link = document.createElement("a");
      link.download = "quote.png";
      link.href = canvas.toDataURL();
      link.click();
    } catch (err) {
      console.error('Failed to generate image:', err);
    }
  }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  new QuoteGenerator();
}); 