// 存储状态
const state = {
  selectedText: '',
  isReady: false
};

// 初始化
chrome.runtime.onInstalled.addListener(() => {
  // 创建右键菜单
  chrome.contextMenus.create({
    id: "generateQuote",
    title: "生成金句图片",
    contexts: ["selection"]
  });
  
  // 初始化存储
  chrome.storage.local.set({ selectedText: '' });
});

// 处理右键菜单点击
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "generateQuote" && info.selectionText) {
    // 保存选中的文本
    chrome.storage.local.set({ 
      selectedText: info.selectionText.slice(0, 500)
    });
  }
}); 