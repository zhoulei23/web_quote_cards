# 网页金句生成器

一个简单的 Chrome 扩展，可以将网页中选中的文字内容转换为精美的图片。

## 功能特性

- 支持选中网页任意文字内容（限制500字以内）
- 右键菜单快速触发
- 预览窗口实时编辑
- 一键保存为图片
- 使用本地存储保存选中内容

## 安装方法

1. 下载项目代码
2. 打开 Chrome 浏览器，进入扩展程序页面 (chrome://extensions/)
3. 开启右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择项目文件夹

## 使用说明

1. 在网页中选中想要生成图片的文字
2. 点击右键，选择"生成金句图片"
3. 在弹出的预览窗口中查看效果
4. 点击"保存图片"将内容保存为图片

## 技术实现

- 使用 Chrome Extension Manifest V3
- 核心功能：
  - background.js: 处理右键菜单和状态管理
  - content.js: 获取选中文本
  - popup.js: 处理图片生成和保存
  - html2canvas: 实现网页内容转图片

## 项目结构 

├── manifest.json # 扩展配置文件
├── background.js # 后台脚本
├── content.js # 内容脚本
├── popup.html # 弹出窗口HTML
├── popup.js # 弹出窗口脚本
├── styles.css # 样式文件
└── html2canvas.min.js # HTML转图片库

## 未来计划

- [ ] 添加多种图片模板
- [ ] 支持自定义样式
- [ ] 添加图片滤镜效果
- [ ] 支持一键分享功能
- [ ] 添加历史记录功能