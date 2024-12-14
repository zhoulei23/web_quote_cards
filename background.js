// 创建右键菜单
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "generateQuote",
    title: "生成金句图片",
    contexts: ["selection"]
  });
});

// 处理右键菜单点击
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "generateQuote") {
    chrome.tabs.sendMessage(tab.id, {
      action: "getSelection"
    });
  }
}); 