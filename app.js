// ===== 数据配置 =====
const VIDEOS = [
  {
    id: 1,
    bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    author: '@全球热点资讯',
    desc: '中东局势持续紧张，多方势力角力 #国际新闻 #中东局势',
    music: '原声 - 全球热点资讯',
    likes: '12.8w',
    comments: '3421',
    avatarBg: 'linear-gradient(135deg, #667eea, #764ba2)',
    discBg: 'linear-gradient(135deg, #1a1a2e, #16213e)',
  },
  {
    id: 2,
    bg: 'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
    author: '@美食探店王',
    desc: '这家隐藏在巷子里的面馆，排队2小时也值得！ #美食 #探店',
    music: '好吃到飞起 - 美食BGM',
    likes: '8.6w',
    comments: '5230',
    avatarBg: 'linear-gradient(135deg, #f093fb, #f5576c)',
    discBg: 'linear-gradient(135deg, #2d1b69, #11998e)',
  },
  {
    id: 3,
    bg: 'linear-gradient(135deg, #a8385d 0%, #75003e 50%, #1a0011 100%)',
    author: '@穿搭达人Lisa',
    desc: '秋冬必备！这件大衣真的绝了 谁穿谁好看 #穿搭 #时尚 #好物推荐',
    music: 'Fashion Queen - Lisa',
    likes: '23.1w',
    comments: '8902',
    avatarBg: 'linear-gradient(135deg, #ff9a9e, #fecfef)',
    discBg: 'linear-gradient(135deg, #a8385d, #75003e)',
  },
  {
    id: 4,
    bg: 'linear-gradient(135deg, #0c0c1d 0%, #1b2838 50%, #2a4066 100%)',
    author: '@科技前沿说',
    desc: 'AI 技术最新突破！这个应用改变了一切 #科技 #AI #未来',
    music: '电子律动 - TechBeat',
    likes: '15.3w',
    comments: '6100',
    avatarBg: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    discBg: 'linear-gradient(135deg, #0c0c1d, #1b2838)',
  },
];

// 预设语音场景
const VOICE_SCENARIOS = [
  {
    id: 'video_search',
    query: '我想看美伊战争最新进展',
    resultType: 'video',
    hint: '场景1：语音搜视频',
  },
  {
    id: 'lbs',
    query: '找附近的面馆',
    resultType: 'lbs',
    hint: '场景2：LBS 商家推荐',
  },
  {
    id: 'product',
    query: '我想找视频里这件衣服',
    resultType: 'product',
    hint: '场景3：视频内商品识别',
  },
  {
    id: 'qa',
    query: '这个视频讲的什么',
    resultType: 'qa',
    hint: '场景4：通用 AI 问答',
  },
];

// 视频搜索结果模拟数据
const VIDEO_RESULTS = [
  { title: '突发！美伊局势重大变化，多国紧急回应', views: '328w', bg: 'linear-gradient(135deg, #1a1a2e, #16213e)' },
  { title: '美伊冲突最新进展：联合国紧急召开会议', views: '156w', bg: 'linear-gradient(135deg, #2c3e50, #3498db)' },
  { title: '中东战事升级 各方立场全面解读', views: '89w', bg: 'linear-gradient(135deg, #0f3460, #533483)' },
  { title: '前线记者实拍：战区最新画面曝光', views: '245w', bg: 'linear-gradient(135deg, #1a0011, #3d0c02)' },
  { title: '专家深度分析：美伊冲突走向何方', views: '67w', bg: 'linear-gradient(135deg, #141e30, #243b55)' },
  { title: '一分钟看懂美伊战争来龙去脉', views: '512w', bg: 'linear-gradient(135deg, #0f0c29, #302b63)' },
];

// LBS 商家结果模拟数据
const LBS_RESULTS = [
  {
    name: '老张手工拉面',
    rating: 4.8,
    reviews: 2386,
    distance: '320m',
    tags: ['手工拉面', '牛肉面'],
    emoji: '\uD83C\uDF5C',
    bg: 'linear-gradient(135deg, #f5af19, #f12711)',
    hasVideo: true,
    videoCount: 128,
  },
  {
    name: '面道一绝 (万达店)',
    rating: 4.6,
    reviews: 1853,
    distance: '580m',
    tags: ['刀削面', '炸酱面'],
    emoji: '\uD83C\uDF72',
    bg: 'linear-gradient(135deg, #11998e, #38ef7d)',
    hasVideo: true,
    videoCount: 86,
  },
  {
    name: '一碗面的温暖',
    rating: 4.9,
    reviews: 3102,
    distance: '1.2km',
    tags: ['日式拉面', '豚骨'],
    emoji: '\uD83C\uDF75',
    bg: 'linear-gradient(135deg, #667eea, #764ba2)',
    hasVideo: false,
    videoCount: 0,
  },
];

// 商品结果模拟数据
const PRODUCT_RESULTS = [
  {
    name: '2024秋冬新款羊毛双面呢大衣 中长款系带收腰',
    price: 899,
    originalPrice: 1599,
    shop: '时尚女装旗舰店',
    emoji: '\uD83E\uDDE5',
    bg: 'linear-gradient(135deg, #a8385d, #c94b4b)',
    isSame: true,
  },
  {
    name: '赫本风经典款双排扣大衣 高端品质',
    price: 1299,
    originalPrice: 2380,
    shop: 'ZARA 官方旗舰店',
    emoji: '\uD83E\uDDE5',
    bg: 'linear-gradient(135deg, #667eea, #764ba2)',
    isSame: false,
  },
  {
    name: '韩版宽松中长款毛呢外套 百搭显瘦',
    price: 659,
    originalPrice: 999,
    shop: '韩都衣舍旗舰店',
    emoji: '\uD83E\uDDE5',
    bg: 'linear-gradient(135deg, #f5af19, #f12711)',
    isSame: false,
  },
];

// QA 回答
const QA_ANSWER = '这个视频主要介绍了当前中东地区的紧张局势：\n\n1. 美伊双方在多个战略要地发生了军事冲突\n2. 联合国安理会已紧急召开特别会议讨论局势\n3. 多个国家和地区呼吁双方保持克制，通过外交渠道解决分歧\n4. 国际油价受此影响出现大幅波动\n\n视频还采访了多位国际关系专家，对后续走势进行了深入分析。';

// ===== 状态管理 =====
let currentVideoIndex = 0;
let currentScenarioIndex = 0;
let isRecording = false;
let touchStartY = 0;
let touchStartTime = 0;
let feedTouchStartY = 0;
let isSwiping = false;
let voiceBtnTimeout = null;
let transcriptionInterval = null;

// ===== 初始化 =====
function init() {
  createVideoPages();
  updateVideoInfo(0);
  setupVoiceButton();
  setupFeedSwipe();
  showDemoHint('长按右下角语音按钮体验');
}

// 创建视频页面
function createVideoPages() {
  const feed = document.getElementById('videoFeed');
  VIDEOS.forEach((video, index) => {
    const page = document.createElement('div');
    page.className = 'video-page';
    page.style.transform = `translateY(${index * 100}%)`;
    page.innerHTML = `<div class="video-bg" style="background:${video.bg}"></div>`;
    feed.appendChild(page);
  });
}

// 更新视频信息
function updateVideoInfo(index) {
  const video = VIDEOS[index];
  document.getElementById('authorName').textContent = video.author;
  document.getElementById('videoDesc').textContent = video.desc;
  document.getElementById('musicName').textContent = video.music;
  document.getElementById('likeCount').textContent = video.likes;
  document.getElementById('commentCount').textContent = video.comments;
  document.getElementById('currentAvatar').style.background = video.avatarBg;
  document.getElementById('discCover').style.background = video.discBg;
}

// ===== 视频 Feed 上下滑动 =====
function setupFeedSwipe() {
  const feed = document.getElementById('videoFeed');

  feed.addEventListener('touchstart', (e) => {
    if (isRecording) return;
    feedTouchStartY = e.touches[0].clientY;
    isSwiping = false;
  }, { passive: true });

  feed.addEventListener('touchmove', (e) => {
    if (isRecording) return;
    const deltaY = e.touches[0].clientY - feedTouchStartY;
    if (Math.abs(deltaY) > 10) {
      isSwiping = true;
    }
  }, { passive: true });

  feed.addEventListener('touchend', (e) => {
    if (isRecording) return;
    const deltaY = e.changedTouches[0].clientY - feedTouchStartY;
    if (Math.abs(deltaY) > 80) {
      if (deltaY < 0 && currentVideoIndex < VIDEOS.length - 1) {
        switchVideo(currentVideoIndex + 1);
      } else if (deltaY > 0 && currentVideoIndex > 0) {
        switchVideo(currentVideoIndex - 1);
      }
    }
  }, { passive: true });

  // 鼠标滚轮支持 (桌面端)
  let wheelLocked = false;
  feed.addEventListener('wheel', (e) => {
    if (isRecording || wheelLocked) return;
    e.preventDefault();
    wheelLocked = true;
    if (e.deltaY > 30 && currentVideoIndex < VIDEOS.length - 1) {
      switchVideo(currentVideoIndex + 1);
    } else if (e.deltaY < -30 && currentVideoIndex > 0) {
      switchVideo(currentVideoIndex - 1);
    }
    setTimeout(() => { wheelLocked = false; }, 500);
  }, { passive: false });
}

function switchVideo(newIndex) {
  currentVideoIndex = newIndex;
  const pages = document.querySelectorAll('.video-page');
  pages.forEach((page, i) => {
    page.style.transform = `translateY(${(i - newIndex) * 100}%)`;
    page.style.transition = 'transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)';
  });
  updateVideoInfo(newIndex);
}

// ===== 语音按钮交互 =====
function setupVoiceButton() {
  const btn = document.getElementById('voiceBtn');
  let longPressTimer = null;
  let startY = 0;

  // Touch events (移动端)
  btn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    e.stopPropagation();
    startY = e.touches[0].clientY;
    longPressTimer = setTimeout(() => {
      startRecording();
    }, 200);
  });

  btn.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (!isRecording) return;
    const deltaY = startY - e.touches[0].clientY;
    if (deltaY > 80) {
      document.getElementById('voiceTip').textContent = '松开取消';
      document.getElementById('voiceTip').classList.add('cancel-mode');
    } else {
      document.getElementById('voiceTip').textContent = '松开发送，上滑取消';
      document.getElementById('voiceTip').classList.remove('cancel-mode');
    }
  });

  btn.addEventListener('touchend', (e) => {
    e.preventDefault();
    clearTimeout(longPressTimer);
    const deltaY = startY - e.changedTouches[0].clientY;
    if (isRecording) {
      if (deltaY > 80) {
        cancelRecording();
      } else {
        stopRecording();
      }
    }
  });

  // Mouse events (桌面端)
  btn.addEventListener('mousedown', (e) => {
    e.preventDefault();
    startY = e.clientY;
    longPressTimer = setTimeout(() => {
      startRecording();
    }, 200);
  });

  document.addEventListener('mouseup', (e) => {
    clearTimeout(longPressTimer);
    if (isRecording) {
      const deltaY = startY - e.clientY;
      if (deltaY > 80) {
        cancelRecording();
      } else {
        stopRecording();
      }
    }
  });

  document.addEventListener('mousemove', (e) => {
    if (!isRecording) return;
    const deltaY = startY - e.clientY;
    if (deltaY > 80) {
      document.getElementById('voiceTip').textContent = '松开取消';
      document.getElementById('voiceTip').classList.add('cancel-mode');
    } else {
      document.getElementById('voiceTip').textContent = '松开发送，上滑取消';
      document.getElementById('voiceTip').classList.remove('cancel-mode');
    }
  });
}

// 开始录音
function startRecording() {
  isRecording = true;
  const overlay = document.getElementById('voiceOverlay');
  overlay.classList.remove('hidden');

  const scenario = VOICE_SCENARIOS[currentScenarioIndex];
  showDemoHint(scenario.hint);

  const transcription = document.getElementById('transcription');
  transcription.textContent = '';

  // 模拟逐字显示
  let charIndex = 0;
  transcriptionInterval = setInterval(() => {
    if (charIndex < scenario.query.length) {
      transcription.textContent = scenario.query.substring(0, charIndex + 1);
      charIndex++;
    } else {
      clearInterval(transcriptionInterval);
    }
  }, 120);
}

// 取消录音
function cancelRecording() {
  isRecording = false;
  clearInterval(transcriptionInterval);
  document.getElementById('voiceOverlay').classList.add('hidden');
  document.getElementById('voiceTip').textContent = '松开发送，上滑取消';
  document.getElementById('voiceTip').classList.remove('cancel-mode');
}

// 停止录音 → 处理
function stopRecording() {
  isRecording = false;
  clearInterval(transcriptionInterval);
  document.getElementById('voiceOverlay').classList.add('hidden');
  document.getElementById('voiceTip').textContent = '松开发送，上滑取消';
  document.getElementById('voiceTip').classList.remove('cancel-mode');

  const scenario = VOICE_SCENARIOS[currentScenarioIndex];

  // 显示处理中
  showProcessing(scenario.query);

  // 1.2 秒后显示结果
  setTimeout(() => {
    hideProcessing();
    showResult(scenario);
    // 切换到下一个场景
    currentScenarioIndex = (currentScenarioIndex + 1) % VOICE_SCENARIOS.length;
  }, 1200);
}

// ===== 意图理解中 =====
function showProcessing(query) {
  const overlay = document.getElementById('processingOverlay');
  document.getElementById('processingQuery').textContent = `"${query}"`;
  overlay.classList.remove('hidden');
}

function hideProcessing() {
  document.getElementById('processingOverlay').classList.add('hidden');
}

// ===== 结果展示 =====
function showResult(scenario) {
  switch (scenario.resultType) {
    case 'video':
      showVideoResults(scenario.query);
      break;
    case 'lbs':
      showLBSResults(scenario.query);
      break;
    case 'product':
      showProductResults();
      break;
    case 'qa':
      showQAResult(scenario.query);
      break;
  }
}

// P4a: 视频搜索结果
function showVideoResults(query) {
  document.getElementById('videoQueryText').textContent = query;
  document.getElementById('videoResultCount').textContent = `约 ${VIDEO_RESULTS.length * 1000}+ 个结果`;

  const grid = document.getElementById('videoResultsGrid');
  grid.innerHTML = VIDEO_RESULTS.map((v) => `
    <div class="video-result-card">
      <div class="video-result-thumb-bg" style="background:${v.bg}">
        <div class="video-play-icon"></div>
      </div>
      <div class="video-result-info">
        <div class="video-result-title">${v.title}</div>
        <div class="video-result-meta">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="rgba(255,255,255,0.6)"><path d="M8 5v14l11-7z"/></svg>
          ${v.views}播放
        </div>
      </div>
    </div>
  `).join('');

  document.getElementById('resultVideo').classList.remove('hidden');
}

// P4b: LBS 商家推荐
function showLBSResults(query) {
  document.getElementById('lbsQueryText').textContent = query;

  const list = document.getElementById('lbsList');
  list.innerHTML = LBS_RESULTS.map((shop, i) => `
    <div class="lbs-card">
      <div class="lbs-card-img" style="background:${shop.bg}">${shop.emoji}</div>
      <div class="lbs-card-info">
        <div class="lbs-card-name">${shop.name}</div>
        <div class="lbs-card-rating">
          <span class="stars">${'★'.repeat(Math.floor(shop.rating))}${shop.rating % 1 >= 0.5 ? '☆' : ''}</span>
          <span class="score">${shop.rating}</span>
          <span class="count">(${shop.reviews})</span>
        </div>
        <div class="lbs-card-tags">
          ${shop.tags.map(t => `<span class="lbs-tag">${t}</span>`).join('')}
          ${shop.hasVideo ? `<span class="lbs-video-badge"><svg viewBox="0 0 24 24" width="10" height="10" fill="#fe2c55"><path d="M8 5v14l11-7z"/></svg>${shop.videoCount}条视频</span>` : ''}
        </div>
        <div class="lbs-card-distance">${shop.distance}</div>
      </div>
    </div>
  `).join('');

  document.getElementById('resultLBS').classList.remove('hidden');
}

// P4c: 商品识别
function showProductResults() {
  const list = document.getElementById('productList');
  list.innerHTML = PRODUCT_RESULTS.map((p, i) => `
    ${i === 1 ? '<div class="product-similar-label">相似商品</div>' : ''}
    <div class="product-card">
      <div class="product-img" style="background:${p.bg}">${p.emoji}</div>
      <div class="product-info">
        <div class="product-name">${p.isSame ? '<span style="color:#fe2c55;font-weight:700">[同款] </span>' : ''}${p.name}</div>
        <div class="product-price">
          ¥${p.price}
          <span class="original">¥${p.originalPrice}</span>
        </div>
        <div class="product-shop">${p.shop}</div>
        <button class="product-buy-btn">${p.isSame ? '找同款' : '去看看'}</button>
      </div>
    </div>
  `).join('');

  document.getElementById('resultProduct').classList.remove('hidden');
}

// P4d: AI 问答
function showQAResult(query) {
  document.getElementById('qaQuestion').textContent = query;
  const answerEl = document.getElementById('qaAnswer');
  answerEl.innerHTML = '<span class="qa-text"></span><span class="qa-cursor"></span>';

  const textSpan = answerEl.querySelector('.qa-text');
  const cursor = answerEl.querySelector('.qa-cursor');

  // 打字机效果
  const text = QA_ANSWER;
  let idx = 0;
  const typeInterval = setInterval(() => {
    if (idx < text.length) {
      const char = text[idx];
      if (char === '\n') {
        textSpan.innerHTML += '<br>';
      } else {
        textSpan.innerHTML += char;
      }
      idx++;
      // 自动滚动
      const sheet = answerEl.closest('.result-sheet');
      if (sheet) sheet.scrollTop = sheet.scrollHeight;
    } else {
      clearInterval(typeInterval);
      if (cursor) cursor.remove();
    }
  }, 30);

  document.getElementById('resultQA').classList.remove('hidden');
}

// 关闭所有结果面板
function closeAllPanels() {
  document.getElementById('resultVideo').classList.add('hidden');
  document.getElementById('resultLBS').classList.add('hidden');
  document.getElementById('resultProduct').classList.add('hidden');
  document.getElementById('resultQA').classList.add('hidden');
}

// 演示提示
function showDemoHint(text) {
  const hint = document.getElementById('demoHint');
  document.getElementById('demoHintText').textContent = text;
  hint.classList.remove('hidden');
  setTimeout(() => {
    hint.classList.add('hidden');
  }, 3000);
}

// 结果面板下拉关闭
function setupPanelSwipe() {
  const sheets = document.querySelectorAll('.result-sheet');
  sheets.forEach(sheet => {
    let startY = 0;
    let currentY = 0;

    sheet.addEventListener('touchstart', (e) => {
      if (sheet.scrollTop <= 0) {
        startY = e.touches[0].clientY;
      }
    }, { passive: true });

    sheet.addEventListener('touchmove', (e) => {
      if (sheet.scrollTop <= 0) {
        currentY = e.touches[0].clientY;
        const deltaY = currentY - startY;
        if (deltaY > 0) {
          sheet.style.transform = `translateY(${deltaY}px)`;
          sheet.style.transition = 'none';
        }
      }
    }, { passive: true });

    sheet.addEventListener('touchend', () => {
      const deltaY = currentY - startY;
      sheet.style.transition = 'transform 0.3s ease';
      if (deltaY > 100) {
        closeAllPanels();
      }
      sheet.style.transform = '';
      currentY = 0;
      startY = 0;
    }, { passive: true });
  });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  init();
  // 稍后设置面板滑动（等 DOM 就绪）
  setTimeout(setupPanelSwipe, 100);
});
