// 监听消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getSelection") {
    const selectedText = window.getSelection().toString().slice(0, 500);
    sendResponse({ text: selectedText });
  }
  return true;
}); 