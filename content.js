// 监听来自background的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getSelection") {
    const selectedText = window.getSelection().toString();
    if (selectedText && selectedText.length <= 500) {
      chrome.runtime.sendMessage({
        action: "showPopup",
        text: selectedText
      });
    }
  }
}); 