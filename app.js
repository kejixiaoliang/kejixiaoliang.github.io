const works = [
  {
    title: "DeepSeek识图模式实测，它终于睁眼了！",
    category: "model",
    tag: "模型观察室",
    symbol: "眼",
    cover: "./public/images/covers/deepseek-vision.png",
    url: "https://mp.weixin.qq.com/s/6dHWZyevtnrcxvctST_ONw",
  },
  {
    title: "实测千问Qwen3.5，这就是开源的神！",
    category: "model",
    tag: "模型观察室",
    symbol: "模",
    cover: "./public/images/covers/qwen35.png",
    url: "https://mp.weixin.qq.com/s/hsTZ0C-4RuLy1au6J3uMXg",
  },
  {
    title: "实测微信读书Skill，我给到夯！",
    category: "product",
    tag: "产品拆解台",
    symbol: "拆",
    cover: "./public/images/covers/weread-skill.png",
    url: "https://mp.weixin.qq.com/s/JNZ5WbMPk1Q12rc-cgYApg",
  },
  {
    title: "我给龙虾装上好用的PPT Skill",
    category: "product",
    tag: "产品拆解台",
    symbol: "PPT",
    cover: "./public/images/covers/ppt-skill.png",
    url: "https://mp.weixin.qq.com/s/t0zYp0IENKDiPGXq8-0vqw",
  },
  {
    title: "字节版 Manus，出海产品 AnyGen深度测评。",
    category: "product",
    tag: "产品拆解台",
    symbol: "测",
    cover: "./public/images/covers/anygen.png",
    url: "https://mp.weixin.qq.com/s/3ZVuzOmxOSHKG71UWwE8Cg",
  },
  {
    title: "万物皆可蒸馏，我目睹了这场同事skill狂欢。",
    category: "story",
    tag: "热点故事板",
    symbol: "热",
    cover: "./public/images/covers/skill-carnival.png",
    url: "https://mp.weixin.qq.com/s/6v1-QlEaaO147Z4s_ZxVag",
  },
  {
    title: "Obsidian+ClaudeSkills，AI时代知识管理与内容创作的终极秘诀。",
    category: "tool",
    tag: "工具教程架",
    symbol: "知",
    cover: "./public/images/covers/obsidian-claude.png",
    url: "https://mp.weixin.qq.com/s/CzT5PavWrkJ9FO8M6NNNzA",
  },
  {
    title: "用ClaudeSkills在obsidian中画手绘图，内容创作更爽了！",
    category: "tool",
    tag: "工具教程架",
    symbol: "画",
    cover: "./public/images/covers/handdraw-obsidian.png",
    url: "https://mp.weixin.qq.com/s/E5APP5UNF6B_wn_LHnfmkw",
  },
  {
    title: "低成本搞定 AI 配音，自媒体创作必备",
    category: "open",
    tag: "开源实践区",
    symbol: "声",
    cover: "./public/images/covers/ai-voice.png",
    url: "https://mp.weixin.qq.com/s/w5tmiy3r_qVJnYstG-cDKg",
  },
  {
    title: "OpenClaw正式接入微信，一键安装龙虾管理面板",
    category: "open",
    tag: "开源实践区",
    symbol: "开",
    cover: "./public/images/covers/openclaw-wechat.png",
    url: "https://mp.weixin.qq.com/s/PAZE_YKmNdpSO5e1-KcbuA",
  },
];

const grid = document.querySelector("#workGrid");
const filterButtons = document.querySelectorAll(".filter-button");

function createWorkCard(work) {
  const article = document.createElement("article");
  article.className = "work-card paper-card";
  article.dataset.category = work.category;

  article.innerHTML = `
    <div class="work-cover image-slot" data-image="${work.cover}">
      <span class="cover-symbol">${work.symbol}</span>
    </div>
    <div class="work-meta">
      <span class="work-tag">${work.tag}</span>
      <span>公众号</span>
    </div>
    <h3>${work.title}</h3>
    <a class="text-link" href="${work.url}" target="_blank" rel="noreferrer">阅读原文</a>
  `;

  return article;
}

function loadOptionalImage(slot) {
  const imagePath = slot.dataset.image;
  if (!imagePath) return;

  const image = new Image();
  image.onload = () => {
    slot.classList.add("has-image");
    slot.style.backgroundImage = `url("${imagePath}")`;
  };
  image.src = imagePath;
}

function renderWorks() {
  grid.append(...works.map(createWorkCard));
  document.querySelectorAll(".image-slot").forEach(loadOptionalImage);
}

function filterWorks(category) {
  document.querySelectorAll(".work-card").forEach((card) => {
    card.classList.toggle("is-hidden", category !== "all" && card.dataset.category !== category);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    filterWorks(button.dataset.filter);
  });
});

renderWorks();
