// 获取选中的文本并显示
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "showPopup") {
    document.getElementById("textContent").textContent = request.text;
  }
});

// 保存图片
document.getElementById("save").addEventListener("click", () => {
  // 使用html2canvas将内容转换为图片
  const preview = document.getElementById("preview");
  html2canvas(preview).then(canvas => {
    const link = document.createElement("a");
    link.download = "quote.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}); 