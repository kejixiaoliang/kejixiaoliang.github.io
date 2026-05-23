# 科技小亮AGI个人主页

这是“科技小亮AGI”的个人品牌主页，用于集中展示社媒平台、代表作品、开源项目和联系方式。

主页风格是“AI 内容实验室”：暖色纸张背景、线条卡通卡片、手账贴纸感，避免常见的冷色蓝紫 AI 模板。

线上地址：

https://kejixiaoliang.github.io

## 页面内容

当前主页包含这些板块：

- 首屏个人品牌展示
- 公众号 / 小红书 / 抖音平台入口
- 代表作品列表
- 开源项目展示
- 联系方式与个人微信二维码

## 目录结构

```txt
.
├── index.html              # 页面结构与固定内容
├── styles.css              # 页面样式
├── app.js                  # 代表作品数据与筛选逻辑
├── public/
│   └── images/
│       ├── avatar.png
│       ├── qrcode-wechat.png
│       ├── qrcode-xiaohongshu.png
│       ├── qrcode-douyin.png
│       ├── qrcode-mywechat.png
│       └── covers/
│           └── *.png
└── README.md
```

## 更新图片

直接替换同名图片即可。

```txt
public/images/avatar.png              # 首屏头像
public/images/qrcode-wechat.png       # 公众号二维码
public/images/qrcode-xiaohongshu.png  # 小红书二维码
public/images/qrcode-douyin.png       # 抖音二维码
public/images/qrcode-mywechat.png     # 个人微信二维码
```

文章封面放在：

```txt
public/images/covers/
```

公众号文章封面建议使用 `2.35:1` 横图比例，例如：

```txt
900x383
1200x511
```

## 增加代表作品

代表作品数据在 `app.js` 的 `works` 数组中维护。

新增作品时复制一项并修改内容：

```js
{
  title: "文章标题",
  category: "tool",
  tag: "工具教程架",
  symbol: "教",
  cover: "./public/images/covers/your-cover.png",
  url: "文章链接",
}
```

可用分类：

```txt
model    模型观察室
product  产品拆解台
story    热点故事板
tool     工具教程架
open     开源实践区
```

## 增加开源项目

开源项目在 `index.html` 中维护。

找到：

```html
<section id="projects" class="section-band projects">
```

在 `.project-grid` 里面复制一个 `.project-card`，然后修改项目名称、简介和 GitHub 链接。

## 本地预览

这是纯静态页面，直接用浏览器打开 `index.html` 即可。

也可以在项目根目录启动一个本地服务：

```bash
python -m http.server 4173
```

然后访问：

```txt
http://localhost:4173
```

## 发布到 GitHub Pages

修改完成后提交并推送：

```bash
git add -A
git commit -m "Update homepage"
git push
```

仓库是用户主页仓库：

```txt
kejixiaoliang/kejixiaoliang.github.io
```

推送到 `main` 分支后，GitHub Pages 会自动更新：

```txt
https://kejixiaoliang.github.io
```
