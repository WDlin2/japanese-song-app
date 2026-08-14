const STORE_KEY = "tabi30-state-v1";

const HIRAGANA = [
  ["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"],
  ["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"],
  ["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"],
  ["た", "ta"], ["ち", "chi"], ["つ", "tsu"], ["て", "te"], ["と", "to"],
  ["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"],
  ["は", "ha"], ["ひ", "hi"], ["ふ", "fu"], ["へ", "he"], ["ほ", "ho"],
  ["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"],
  ["や", "ya"], ["ゆ", "yu"], ["よ", "yo"],
  ["ら", "ra"], ["り", "ri"], ["る", "ru"], ["れ", "re"], ["ろ", "ro"],
  ["わ", "wa"], ["を", "wo"], ["ん", "n"]
];

const KATAKANA = [
  ["ア", "a"], ["イ", "i"], ["ウ", "u"], ["エ", "e"], ["オ", "o"],
  ["カ", "ka"], ["キ", "ki"], ["ク", "ku"], ["ケ", "ke"], ["コ", "ko"],
  ["サ", "sa"], ["シ", "shi"], ["ス", "su"], ["セ", "se"], ["ソ", "so"],
  ["タ", "ta"], ["チ", "chi"], ["ツ", "tsu"], ["テ", "te"], ["ト", "to"],
  ["ナ", "na"], ["ニ", "ni"], ["ヌ", "nu"], ["ネ", "ne"], ["ノ", "no"],
  ["ハ", "ha"], ["ヒ", "hi"], ["フ", "fu"], ["ヘ", "he"], ["ホ", "ho"],
  ["マ", "ma"], ["ミ", "mi"], ["ム", "mu"], ["メ", "me"], ["モ", "mo"],
  ["ヤ", "ya"], ["ユ", "yu"], ["ヨ", "yo"],
  ["ラ", "ra"], ["リ", "ri"], ["ル", "ru"], ["レ", "re"], ["ロ", "ro"],
  ["ワ", "wa"], ["ヲ", "wo"], ["ン", "n"]
];

const PLAN_TEMPLATES = [
  { day: 1, title: "启动：先会看假名", theme: "假名 · 目标", minutes: 35, media: "动漫问候短句：こんにちは", tasks: ["认识 10 个平假名：あいうえお かきくけこ", "听读音 3 遍，并跟着读", "用本 App 的假名测验做 10 题"] },
  { day: 2, title: "片假名与外来语", theme: "假名 · 外来语", minutes: 40, media: "歌曲里的外来语：アイドル", tasks: ["认识 10 个片假名：アイウエオ カキクケコ", "记住 3 个常见外来语：コーヒー / タクシー / ホテル", "朗读菜单上的片假名词"] },
  { day: 3, title: "自我介绍", theme: "会话 · 基础", minutes: 35, media: "动画开场：私は〜です", tasks: ["学会：私は___です / 中国から来ました", "练习问候：はじめまして、よろしくお願いします", "对镜子说一遍完整自我介绍"] },
  { day: 4, title: "问候与礼貌语", theme: "会话 · 礼貌", minutes: 30, media: "歌曲尾音：ありがとう", tasks: ["分清 こんにちは / こんばんは / ありがとう", "学会万能句：すみません", "在短语手册里收藏 6 条问候"] },
  { day: 5, title: "数字 1-100", theme: "词汇 · 数字", minutes: 40, media: "点餐歌：ハンバーガー", tasks: ["数清 1-20，再看懂 30-100", "练习价格：いくらですか", "用“数字 + 円”造 5 个句子"] },
  { day: 6, title: "点餐基本句", theme: "餐饮 · 生存句", minutes: 40, media: "美食番：いただきます", tasks: ["学会：メニューをください", "学会：これをください", "练习点餐三步：招呼→点单→结账"] },
  { day: 7, title: "第一周小测", theme: "复习 · 检验", minutes: 35, media: "动漫片段回放", tasks: ["假名测验连续答对 20 题", "复习 15 张单词卡", "给自己模拟一次 1 分钟自我介绍"] },
  { day: 8, title: "机场通关", theme: "交通 · 入境", minutes: 40, media: "机场广播：搭乗口", tasks: ["认识：パスポート / 搭乗口 / 荷物", "学会：日本語が少しわかります", "练习回答：旅行ですか？→ はい、観光です"] },
  { day: 9, title: "交通卡与新干线", theme: "交通 · 移动", minutes: 40, media: "歌词：夜に駆ける", tasks: ["学会：切符はどこで買えますか", "听懂：次は〜駅です", "记住：IC 卡、新幹線、特急"] },
  { day: 10, title: "方向与问路", theme: "交通 · 问路", minutes: 45, media: "动漫：右に行って", tasks: ["学会：〜はどこですか", "记住：右 / 左 / まっすぐ / ここ / そこ", "练习完整问路：駅はどこですか？"] },
  { day: 11, title: "酒店入住", theme: "酒店 · 办理", minutes: 40, media: "旅馆场景：チェックイン", tasks: ["学会：予約しています", "学会：部屋を一つお願いします", "练习：Wi-Fi 密码怎么问"] },
  { day: 12, title: "购物与结账", theme: "购物 · 结账", minutes: 40, media: "商店街：これください", tasks: ["学会：いくらですか", "学会：袋をもらえますか", "练习：可以刷卡吗？"] },
  { day: 13, title: "点餐进阶", theme: "餐饮 · 进阶", minutes: 40, media: "歌曲：打上花火", tasks: ["学会：おすすめは何ですか", "学会：アレルギーがあるので〜は食べられません", "练习：不要葱 / 不要辣"] },
  { day: 14, title: "第二周复习", theme: "复习 · 场景串联", minutes: 45, media: "自选一首本周歌曲", tasks: ["把机场、交通、酒店、购物四组词过一遍", "重做 3 道场景选择题", "把不会的词加入复习队列"] },
  { day: 15, title: "动词ます形", theme: "语法 · 动词", minutes: 45, media: "歌词中的：行きます", tasks: ["看懂：行く → 行きます", "记住 5 个旅行动词：行く/食べる/見る/買う/聞く", "用ます形造 3 个句子"] },
  { day: 16, title: "て形连接", theme: "语法 · て形", minutes: 45, media: "动漫：待って", tasks: ["认识 てください / てくださいませんか", "练习：ちょっと待ってください", "把两个动作连成一句话"] },
  { day: 17, title: "请求句：ください", theme: "语法 · 请求", minutes: 40, media: "购物：これをください", tasks: ["学会：___をください", "学会更礼貌：___をお願いします", "造 5 个旅行请求句"] },
  { day: 18, title: "愿望句：たいです", theme: "语法 · 愿望", minutes: 40, media: "歌曲：見たい / 行きたい", tasks: ["看懂：〜たいです = 我想做〜", "练习：日本食を食べたいです", "和同行者各说一个旅行愿望"] },
  { day: 19, title: "歌曲听力：歌词填空", theme: "听力 · 歌曲", minutes: 45, media: "Lemon / 夜に駆ける", tasks: ["选一首歌，先盲听 2 遍", "不看字幕完成歌词填空", "对照翻译拆 2 个语法点"] },
  { day: 20, title: "动漫听力：长句切分", theme: "听力 · 动漫", minutes: 45, media: "动漫场景片段", tasks: ["把一句话切成 3-4 个意群", "跟着角色语气重复 5 遍", "找出 3 个听懂的关键词"] },
  { day: 21, title: "听力盲测", theme: "听力 · 检验", minutes: 45, media: "本周歌曲混合", tasks: ["不看字幕，写听到的假名", "再听一遍补齐漏掉的词", "统计听懂率，标出薄弱词"] },
  { day: 22, title: "形容词与评价", theme: "语法 · 形容", minutes: 45, media: "歌曲：可愛い / 美味しい", tasks: ["学会：おいしい / たかい / やすい / いい", "练习：これはおいしいです", "在餐厅说出评价句"] },
  { day: 23, title: "时间与预约", theme: "会话 · 时间", minutes: 45, media: "动漫：何時？", tasks: ["学会：何時からですか", "练习预约：予約したいです", "记住：午前 / 午後 / 明日 / 今日"] },
  { day: 24, title: "道歉与感谢", theme: "会话 · 情感", minutes: 40, media: "动漫：ごめん / ありがとう", tasks: ["分清：すみません / ごめんなさい", "学会：本当にありがとうございます", "练习被帮助后的完整回应"] },
  { day: 25, title: "紧急情况", theme: "安全 · 应急", minutes: 45, media: "动漫：助けて！", tasks: ["学会：助けてください", "学会：警察を呼んでください", "记住护照丢失的说法和重要号码"] },
  { day: 26, title: "闲聊与搭话", theme: "会话 · 闲聊", minutes: 40, media: "歌曲：好き / すごい", tasks: ["学会：どこから来ましたか", "学会：これは何ですか", "准备 3 个问得出口的问题"] },
  { day: 27, title: "车站广播实战", theme: "听力 · 广播", minutes: 45, media: "駅アナウンス", tasks: ["听懂：まもなく、2番線に到着します", "记住：降りる / 乗り換え / 遅れています", "模拟在终点站下车"] },
  { day: 28, title: "出发前打包会话", theme: "综合 · 打包", minutes: 45, media: "自选动漫场景", tasks: ["用日语列 5 件随身物品", "模拟点餐、问路、入住三段对话", "检查手机里的离线翻译和单词卡"] },
  { day: 29, title: "模拟旅行日", theme: "综合 · 模拟", minutes: 60, media: "全程日语挑战", tasks: ["早上 8 点起只说日语 30 分钟", "完成：早餐→乘车→买票→问路", "晚上把卡住的地方记下来补练"] },
  { day: 30, title: "心态与检查单", theme: "出发 · 收尾", minutes: 30, media: "再听一遍最喜欢的歌", tasks: ["复习 10 个最高频生存句", "把单词卡剩余词快速过一遍", "打印或截图短语手册，准备出发"] }
];

const SONGS = [
  {
    id: "lemon",
    title: "Lemon",
    artist: "米津玄師",
    search: "米津玄師 Lemon",
    neteaseId: 536622304,
    lyric: "夢ならばどれほどよかったでしょう。",
    romaji: "Yume naraba dorehodo yokatta deshou.",
    zh: "如果这只是一场梦，该有多好。",
    lines: [
      {
        ja: "夢ならばどれほどよかったでしょう。",
        romaji: "Yume naraba dorehodo yokatta deshou.",
        zh: "如果这只是一场梦，该有多好。",
        words: [
          { surface: "夢", kana: "ゆめ", zh: "梦" },
          { surface: "ならば", kana: "ならば", zh: "如果是…的话" },
          { surface: "よかった", kana: "よかった", zh: "太好了（过去式）" }
        ]
      },
      {
        ja: "未だにあなたのことを夢にみる。",
        romaji: "Imada ni anata no koto o yume ni miru.",
        zh: "至今，我仍会在梦里见到你。",
        words: [
          { surface: "未だに", kana: "いまだに", zh: "至今仍然" },
          { surface: "あなた", kana: "あなた", zh: "你" },
          { surface: "夢にみる", kana: "ゆめにみる", zh: "在梦中看到" }
        ]
      }
    ],
    vocab: [
      { ja: "夢", kana: "ゆめ", zh: "梦" },
      { ja: "ならば", kana: "ならば", zh: "如果是…的话" },
      { ja: "よかった", kana: "よかった", zh: "（いい 的过去式）曾很好" }
    ],
    grammar: "〜ならば 表示假设；よかった 是 いい 的过去式，和 どれほど 搭配时表达“要是…该多好”的感叹。",
    grammarPointIds: ["naraba", "yokatta"],
    quizLine: "____ならばどれほどよかったでしょう。",
    options: ["夢", "雨", "雲", "海"],
    answer: "夢"
  },
  {
    id: "hanabi",
    title: "打上花火",
    artist: "DAOKO × 米津玄師",
    search: "DAOKO 打上花火",
    neteaseId: 496869422,
    lyric: "あの日見渡した渚を 今も思い出すんだ。",
    romaji: "Ano hi miwatashita nagisa o ima mo omoidasu nda.",
    zh: "那一天眺望过的海滨，直到现在还会想起。",
    lines: [
      {
        ja: "あの日見渡した渚を 今も思い出すんだ。",
        romaji: "Ano hi miwatashita nagisa o ima mo omoidasu nda.",
        zh: "那一天眺望过的海滨，直到现在还会想起。",
        words: [
          { surface: "あの日", kana: "あのひ", zh: "那一天" },
          { surface: "見渡した", kana: "みわたした", zh: "眺望过" },
          { surface: "渚", kana: "なぎさ", zh: "海滨" },
          { surface: "思い出す", kana: "おもいだす", zh: "想起" }
        ]
      }
    ],
    vocab: [
      { ja: "あの日", kana: "あのひ", zh: "那一天" },
      { ja: "見渡した", kana: "みわたした", zh: "眺望、环视" },
      { ja: "思い出す", kana: "おもいだす", zh: "想起" }
    ],
    grammar: "見渡した 是过去式，修饰 渚；今も思い出すんだ 的 んだ 给句子加上说明、感叹的语气。",
    grammarPointIds: ["past-modifier", "nda"],
    quizLine: "あの日____渚を 今も思い出すんだ。",
    options: ["見渡した", "歩いた", "歌った", "描いた"],
    answer: "見渡した"
  },
  {
    id: "yoru",
    title: "夜に駆ける",
    artist: "YOASOBI",
    search: "YOASOBI 夜に駆ける",
    neteaseId: 1409311773,
    lyric: "沈むように溶けてゆくように。",
    romaji: "Shizumu you ni tokete yuku you ni.",
    zh: "像要沉没一样，像要融化一样。",
    lines: [
      {
        ja: "沈むように溶けてゆくように。",
        romaji: "Shizumu you ni tokete yuku you ni.",
        zh: "像要沉没一样，像要融化一样。",
        words: [
          { surface: "沈む", kana: "しずむ", zh: "下沉" },
          { surface: "ように", kana: "ように", zh: "像…一样" },
          { surface: "溶けてゆく", kana: "とけてゆく", zh: "逐渐融化" }
        ]
      }
    ],
    vocab: [
      { ja: "沈む", kana: "しずむ", zh: "下沉" },
      { ja: "溶ける", kana: "とける", zh: "融化" },
      { ja: "ように", kana: "ように", zh: "像…一样" }
    ],
    grammar: "ように 表示比喻“像…那样”，-てゆく 表示动作逐渐、持续地发展。",
    grammarPointIds: ["youni", "teyuku"],
    quizLine: "____ように溶けてゆくように。",
    options: ["沈む", "飛ぶ", "泣く", "走る"],
    answer: "沈む"
  },
  {
    id: "idol",
    title: "アイドル",
    artist: "YOASOBI",
    search: "YOASOBI アイドル",
    neteaseId: null,
    lyric: "君は完璧で究極のアイドル。",
    romaji: "Kimi wa kanpeki de kyuukyoku no aidoru.",
    zh: "你是完美又终极的偶像。",
    lines: [
      {
        ja: "君は完璧で究極のアイドル。",
        romaji: "Kimi wa kanpeki de kyuukyoku no aidoru.",
        zh: "你是完美又终极的偶像。",
        words: [
          { surface: "君", kana: "きみ", zh: "你" },
          { surface: "完璧", kana: "かんぺき", zh: "完美" },
          { surface: "究極", kana: "きゅうきょく", zh: "终极" }
        ]
      },
      {
        ja: "その笑顔でみんなを虜にしていく。",
        romaji: "Sono egao de minna o toriko ni shite iku.",
        zh: "你用那笑容，让所有人都逐渐着迷。",
        words: [
          { surface: "その", kana: "その", zh: "那个" },
          { surface: "笑顔", kana: "えがお", zh: "笑容" },
          { surface: "虜", kana: "とりこ", zh: "俘虏、着迷的人" }
        ]
      }
    ],
    vocab: [
      { ja: "君", kana: "きみ", zh: "你" },
      { ja: "完璧", kana: "かんぺき", zh: "完美" },
      { ja: "究極", kana: "きゅうきょく", zh: "终极" }
    ],
    grammar: "〜は 提示主题；で 在这里连接两个形容词性名词，后面的 の 把整段变成名词修饰语。",
    grammarPointIds: ["de-connection", "no-modifier"],
    quizLine: "君は____で究極のアイドル。",
    options: ["完璧", "天才", "最高", "最強"],
    answer: "完璧"
  },
  {
    id: "pretender",
    title: "Pretender",
    artist: "Official髭男dism",
    search: "Official髭男dism Pretender",
    neteaseId: 1365924378,
    lyric: "君のいない世界にも慣れたはずなのに。",
    romaji: "Kimi no inai sekai ni mo nareta hazu na noni.",
    zh: "明明应该已经习惯了没有你的世界。",
    lines: [
      {
        ja: "君のいない世界にも慣れたはずなのに。",
        romaji: "Kimi no inai sekai ni mo nareta hazu na noni.",
        zh: "明明应该已经习惯了没有你的世界。",
        words: [
          { surface: "いない", kana: "いない", zh: "不存在" },
          { surface: "世界", kana: "せかい", zh: "世界" },
          { surface: "慣れた", kana: "なれた", zh: "习惯了" },
          { surface: "はず", kana: "はず", zh: "应该" },
          { surface: "のに", kana: "のに", zh: "明明…却" }
        ]
      }
    ],
    vocab: [
      { ja: "いない", kana: "いない", zh: "不在" },
      { ja: "慣れた", kana: "なれた", zh: "习惯了" },
      { ja: "のに", kana: "のに", zh: "明明…却" }
    ],
    grammar: "はず 表示按道理推测；のに 表示“明明…却”，带遗憾或意外的语气。",
    grammarPointIds: ["hazu", "noni"],
    quizLine: "君のいない世界にも慣れた____なのに。",
    options: ["はず", "つもり", "ため", "まま"],
    answer: "はず"
  },
  {
    id: "gunjo",
    title: "群青",
    artist: "YOASOBI",
    search: "YOASOBI 群青",
    neteaseId: 1472480890,
    lyric: "あの日踏み出した一歩が、今の僕を作っている。",
    romaji: "Ano hi fumidashita ippo ga, ima no boku o tsukutte iru.",
    zh: "那一天迈出的一步，构成了现在的我。",
    lines: [
      {
        ja: "あの日踏み出した一歩が、今の僕を作っている。",
        romaji: "Ano hi fumidashita ippo ga, ima no boku o tsukutte iru.",
        zh: "那一天迈出的一步，构成了现在的我。",
        words: [
          { surface: "踏み出した", kana: "ふみだした", zh: "迈出了" },
          { surface: "一歩", kana: "いっぽ", zh: "一步" },
          { surface: "今の僕", kana: "いまのぼく", zh: "现在的我" },
          { surface: "作っている", kana: "つくっている", zh: "正在创造" }
        ]
      }
    ],
    vocab: [
      { ja: "踏み出した", kana: "ふみだした", zh: "迈出" },
      { ja: "一歩", kana: "いっぽ", zh: "一步" },
      { ja: "作っている", kana: "つくっている", zh: "正在创造" }
    ],
    grammar: "踏み出した 是过去式，修饰 一歩；作っている 用 ている 表示状态的持续或当前进行。",
    grammarPointIds: ["past-modifier", "iru-continuation"],
    quizLine: "あの日____一歩が、今の僕を作っている。",
    options: ["踏み出した", "忘れた", "止めた", "壊した"],
    answer: "踏み出した"
  }
];

const GRAMMAR_POINTS = [
  {
    id: "naraba",
    pattern: "〜ならば",
    title: "如果…的话",
    level: "N4",
    song: "Lemon",
    songId: "lemon",
    explain: "名词、动词或句子后接 ならば，表示“如果…的话”。它比日常口语里的 なら 更正式、更像歌词或书面语。",
    examples: [
      { ja: "晴れならば、海に行きます。", romaji: "Hare naraba, umi ni ikimasu.", zh: "如果天晴，我就去海边。" },
      { ja: "時間があるならば、ゆっくり話しましょう。", romaji: "Jikan ga aru naraba, yukkuri hanashimashou.", zh: "如果有时间，我们慢慢聊吧。" }
    ]
  },
  {
    id: "yokatta",
    pattern: "〜よかった",
    title: "太好了 / 幸好",
    level: "N5",
    song: "Lemon",
    songId: "lemon",
    explain: "よかった 是 いい 的过去式。可以表达“幸好做了某事”，也可以配合 どれほど、〜ば 表达“要是…该多好”。",
    examples: [
      { ja: "来てよかった。", romaji: "Kite yokatta.", zh: "来了真好。" },
      { ja: "あの時あきらめなくてよかった。", romaji: "Ano toki akiramenakute yokatta.", zh: "幸好那时没有放弃。" }
    ]
  },
  {
    id: "past-modifier",
    pattern: "〜た + 名词",
    title: "过去式修饰名词",
    level: "N5",
    song: "打上花火 / 群青",
    songId: "hanabi",
    explain: "动词变成た形后，可以直接放在名词前修饰名词，表示“曾经做过的…”或“已经完成的…”。",
    examples: [
      { ja: "あの日見た映画", romaji: "Ano hi mita eiga", zh: "那天看过的电影" },
      { ja: "昨日買った本", romaji: "Kinou katta hon", zh: "昨天买的书" }
    ]
  },
  {
    id: "nda",
    pattern: "〜んだ",
    title: "说明与强调语气",
    level: "N4",
    song: "打上花火",
    songId: "hanabi",
    explain: "んだ 是口语里常见的句尾，给句子加上“解释、说明、强调”的语气。写成书面语时是 のだ。",
    examples: [
      { ja: "明日は休むんだ。", romaji: "Ashita wa yasumu n da.", zh: "我明天要休息。" },
      { ja: "どうして泣いているんだ。", romaji: "Doushite naite iru n da.", zh: "你为什么在哭啊。" }
    ]
  },
  {
    id: "youni",
    pattern: "〜ように",
    title: "像…一样",
    level: "N4",
    song: "夜に駆ける",
    songId: "yoru",
    explain: "ように 表示比喻“像…那样”，也可以表示目的或方式，例如“为了能够…”。",
    examples: [
      { ja: "鳥のように飛びたい。", romaji: "Tori no you ni tobitai.", zh: "我想像鸟一样飞。" },
      { ja: "早く着くように走った。", romaji: "Hayaku tsuku you ni hashitta.", zh: "为了早点到，我跑了。" }
    ]
  },
  {
    id: "teyuku",
    pattern: "〜ていく",
    title: "逐渐地…下去",
    level: "N4",
    song: "夜に駆ける",
    songId: "yoru",
    explain: "て形 + いく 表示动作继续发展、逐渐变化，或从眼前向远方移动。",
    examples: [
      { ja: "花が散っていく。", romaji: "Hana ga chitte iku.", zh: "花渐渐凋落。" },
      { ja: "だんだん慣れていく。", romaji: "Dandan narete iku.", zh: "会慢慢习惯的。" }
    ]
  },
  {
    id: "de-connection",
    pattern: "〜で + 名词",
    title: "用“而且”连接",
    level: "N4",
    song: "アイドル",
    songId: "idol",
    explain: "形容动词词干接 で，可以连接两个性质，表示“又…又…”。这里 完璧で究極 就是“完美又终极”。",
    examples: [
      { ja: "彼は優しくて、かっこいい。", romaji: "Kare wa yasashikute, kakkoii.", zh: "他又温柔又帅。" },
      { ja: "静かで、きれいな町。", romaji: "Shizuka de, kirei na machi.", zh: "又安静又漂亮的小镇。" }
    ]
  },
  {
    id: "no-modifier",
    pattern: "〜の + 名词",
    title: "名词修饰名词",
    level: "N5",
    song: "アイドル",
    songId: "idol",
    explain: "名词 + の + 名词 表示“的”。整段 完璧で究極のアイドル 可以看成“完美又终极的偶像”。",
    examples: [
      { ja: "私の友達", romaji: "Watashi no tomodachi", zh: "我的朋友" },
      { ja: "これは私の大切な本です。", romaji: "Kore wa watashi no taisetsu na hon desu.", zh: "这是我很重要的书。" }
    ]
  },
  {
    id: "hazu",
    pattern: "〜はず",
    title: "按道理应该…",
    level: "N4",
    song: "Pretender",
    songId: "pretender",
    explain: "はず 表示基于常识、计划或已知信息做出的推断，意思是“应该、按理说”。",
    examples: [
      { ja: "彼はもう知っているはずだ。", romaji: "Kare wa mou shitte iru hazu da.", zh: "他应该已经知道了。" },
      { ja: "電車はすぐ来るはずだ。", romaji: "Densha wa sugu kuru hazu da.", zh: "电车应该马上就来。" }
    ]
  },
  {
    id: "noni",
    pattern: "〜のに",
    title: "明明…却",
    level: "N4",
    song: "Pretender",
    songId: "pretender",
    explain: "のに 连接前后两个相反的内容，表达意外、遗憾或抱怨，意思是“明明…却…”。",
    examples: [
      { ja: "勉強したのに、忘れた。", romaji: "Benkyou shita noni, wasureta.", zh: "明明学了，却忘了。" },
      { ja: "雨が降っているのに、出かけた。", romaji: "Ame ga futte iru noni, dekaketa.", zh: "明明在下雨，还是出门了。" }
    ]
  },
  {
    id: "iru-continuation",
    pattern: "〜ている",
    title: "正在 / 持续状态",
    level: "N5",
    song: "群青",
    songId: "gunjo",
    explain: "动词て形 + いる 表示正在进行的动作，或者动作完成后的持续状态。",
    examples: [
      { ja: "今、音楽を聴いている。", romaji: "Ima, ongaku o kiite iru.", zh: "我正在听音乐。" },
      { ja: "ドアが開いている。", romaji: "Doa ga aite iru.", zh: "门开着。" }
    ]
  },
  {
    id: "tai",
    pattern: "〜たい",
    title: "想做…",
    level: "N5",
    song: "歌词常见",
    songId: "lemon",
    explain: "动词ます形去掉ます，再接 たい，表示“我想做…”。",
    examples: [
      { ja: "日本食を食べたいです。", romaji: "Nihonshoku o tabetai desu.", zh: "我想吃日本料理。" },
      { ja: "もう一度会いたい。", romaji: "Mou ichido aitai.", zh: "还想再见一次。" }
    ]
  }
];

const ANIME_SCENES = [
  {
    id: "morning",
    title: "清晨教室",
    show: "校园日常番",
    line: "おはようございます！",
    romaji: "Ohayou gozaimasu!",
    zh: "早上好！",
    vocab: [
      { ja: "おはよう", zh: "早上好（随意）" },
      { ja: "ございます", zh: "让语气更礼貌" }
    ],
    tip: "对朋友可以说 おはよう，对店员、老师、陌生人用 おはようございます。",
    question: "早上进便利店，应该怎么说？",
    options: ["おはようございます", "いただきます", "さようなら"],
    answer: 0
  },
  {
    id: "invite",
    title: "朋友相邀",
    show: "青春成长番",
    line: "行こう！",
    romaji: "Ikou!",
    zh: "走吧！",
    vocab: [
      { ja: "行く", zh: "去" },
      { ja: "行こう", zh: "去吧（邀请、提议）" }
    ],
    tip: "行こう 是 行く 的意志形，表示“一起去吧”。旅行中很适合用来招呼同伴。",
    question: "想对朋友说“一起去吃拉面吧”，用哪个最自然？",
    options: ["ラーメンを食べに行こう", "ラーメンを食べます", "ラーメンください"],
    answer: 0
  },
  {
    id: "apology",
    title: "认真道歉",
    show: "剧情番",
    line: "ごめん、本当にごめん。",
    romaji: "Gomen, hontou ni gomen.",
    zh: "对不起，真的对不起。",
    vocab: [
      { ja: "ごめん", zh: "对不起（随意）" },
      { ja: "本当に", zh: "真的" }
    ],
    tip: "对不熟的人或正式场合用 ごめんなさい / 申し訳ございません；旅行中 すみません 最万能。",
    question: "不小心踩到别人，第一句说什么？",
    options: ["すみません", "おかえりなさい", "いただきます"],
    answer: 0
  },
  {
    id: "challenge",
    title: "战斗宣言",
    show: "热血战斗番",
    line: "覚悟しろ！",
    romaji: "Kakugo shiro!",
    zh: "做好觉悟吧！",
    vocab: [
      { ja: "覚悟", zh: "觉悟" },
      { ja: "しろ", zh: "する 的命令形" }
    ],
    tip: "这是很有气势的命令形，现实旅行中不要对人用。理解它，是为了听懂动漫里角色情绪最强的一刻。",
    question: "覚悟しろ 在现实旅行中适合用吗？",
    options: ["不适合，命令形太强硬", "适合，对店员说很有用", "适合，对警察说很礼貌"],
    answer: 0
  },
  {
    id: "thanks",
    title: "郑重感谢",
    show: "治愈番",
    line: "ありがとう、あなたに出会えてよかった。",
    romaji: "Arigatou, anata ni deaete yokatta.",
    zh: "谢谢你，能遇见你真好。",
    vocab: [
      { ja: "出会えて", zh: "能够相遇（出会う 的て形）" },
      { ja: "よかった", zh: "太好了" }
    ],
    tip: "あなた 在现实对话中要谨慎使用，称呼对方常用名字或 そちら。歌词里出现则是艺术表达。",
    question: "日本餐厅里说谢谢，最常用哪句？",
    options: ["ありがとうございます", "あなたに出会えてよかった", "おやすみなさい"],
    answer: 0
  },
  {
    id: "encourage",
    title: "继续加油",
    show: "运动番",
    line: "まだまだこれからだ！",
    romaji: "Mada mada kore kara da!",
    zh: "还早着呢，现在才开始！",
    vocab: [
      { ja: "まだまだ", zh: "还远远不够" },
      { ja: "これから", zh: "从现在起" }
    ],
    tip: "这句话特别适合学习心态：别急着否定自己，旅途中的每次开口都是 これから。",
    question: "想说“我现在开始学日语”，怎么说？",
    options: ["これから日本語を勉強します", "日本語を忘れました", "日本語をやめます"],
    answer: 0
  }
];

const WORDS = [
  { ja: "私", kana: "わたし", romaji: "watashi", zh: "我", cat: "基础", example: "私は中国から来ました。" },
  { ja: "ありがとう", kana: "ありがとう", romaji: "arigatou", zh: "谢谢", cat: "基础", example: "ありがとうございます。" },
  { ja: "すみません", kana: "すみません", romaji: "sumimasen", zh: "对不起 / 请问", cat: "基础", example: "すみません、駅はどこですか。" },
  { ja: "はい", kana: "はい", romaji: "hai", zh: "是 / 好的", cat: "基础", example: "はい、わかりました。" },
  { ja: "いいえ", kana: "いいえ", romaji: "iie", zh: "不是 / 不", cat: "基础", example: "いいえ、大丈夫です。" },
  { ja: "お願いします", kana: "おねがいします", romaji: "onegaishimasu", zh: "拜托了", cat: "基础", example: "会計をお願いします。" },
  { ja: "大丈夫", kana: "だいじょうぶ", romaji: "daijoubu", zh: "没关系 / 没问题", cat: "基础", example: "大丈夫ですか？" },
  { ja: "駅", kana: "えき", romaji: "eki", zh: "车站", cat: "交通", example: "駅はどこですか。" },
  { ja: "電車", kana: "でんしゃ", romaji: "densha", zh: "电车", cat: "交通", example: "電車は何時ですか。" },
  { ja: "新幹線", kana: "しんかんせん", romaji: "shinkansen", zh: "新干线", cat: "交通", example: "新幹線で京都へ行きます。" },
  { ja: "バス", kana: "バス", romaji: "basu", zh: "公交车", cat: "交通", example: "次のバスは何時ですか。" },
  { ja: "切符", kana: "きっぷ", romaji: "kippu", zh: "车票", cat: "交通", example: "切符はどこで買えますか。" },
  { ja: "出口", kana: "でぐち", romaji: "deguchi", zh: "出口", cat: "交通", example: "出口はあちらです。" },
  { ja: "改札", kana: "かいさつ", romaji: "kaisatsu", zh: "检票口", cat: "交通", example: "改札で待ち合わせましょう。" },
  { ja: "何番線", kana: "なんばんせん", romaji: "nanbansen", zh: "几号站台", cat: "交通", example: "何番線ですか。" },
  { ja: "水", kana: "みず", romaji: "mizu", zh: "水", cat: "餐饮", example: "お水をください。" },
  { ja: "お茶", kana: "おちゃ", romaji: "ocha", zh: "茶", cat: "餐饮", example: "お茶をお願いします。" },
  { ja: "ビール", kana: "ビール", romaji: "biiru", zh: "啤酒", cat: "餐饮", example: "ビールを一つください。" },
  { ja: "メニュー", kana: "メニュー", romaji: "menyuu", zh: "菜单", cat: "餐饮", example: "メニューをください。" },
  { ja: "注文", kana: "ちゅうもん", romaji: "chuumon", zh: "点单", cat: "餐饮", example: "注文をお願いします。" },
  { ja: "会計", kana: "かいけい", romaji: "kaikei", zh: "结账", cat: "餐饮", example: "会計をお願いします。" },
  { ja: "美味しい", kana: "おいしい", romaji: "oishii", zh: "好吃", cat: "餐饮", example: "とても美味しいです。" },
  { ja: "おすすめ", kana: "おすすめ", romaji: "osusume", zh: "推荐", cat: "餐饮", example: "おすすめは何ですか。" },
  { ja: "いくら", kana: "いくら", romaji: "ikura", zh: "多少钱", cat: "购物", example: "これはいくらですか。" },
  { ja: "高い", kana: "たかい", romaji: "takai", zh: "贵 / 高", cat: "购物", example: "ちょっと高いですね。" },
  { ja: "安い", kana: "やすい", romaji: "yasui", zh: "便宜", cat: "购物", example: "安くて嬉しいです。" },
  { ja: "これ", kana: "これ", romaji: "kore", zh: "这个", cat: "购物", example: "これをください。" },
  { ja: "試着", kana: "しちゃく", romaji: "shichaku", zh: "试穿", cat: "购物", example: "試着してもいいですか。" },
  { ja: "袋", kana: "ふくろ", romaji: "fukuro", zh: "袋子", cat: "购物", example: "袋をもらえますか。" },
  { ja: "カード", kana: "カード", romaji: "kaado", zh: "卡", cat: "购物", example: "カードで払えますか。" },
  { ja: "予約", kana: "よやく", romaji: "yoyaku", zh: "预约", cat: "酒店", example: "予約しています。" },
  { ja: "部屋", kana: "へや", romaji: "heya", zh: "房间", cat: "酒店", example: "部屋を一つお願いします。" },
  { ja: "鍵", kana: "かぎ", romaji: "kagi", zh: "钥匙", cat: "酒店", example: "鍵をなくしました。" },
  { ja: "荷物", kana: "にもつ", romaji: "nimotsu", zh: "行李", cat: "酒店", example: "荷物を預かってもらえますか。" },
  { ja: "朝食", kana: "ちょうしょく", romaji: "choushoku", zh: "早餐", cat: "酒店", example: "朝食は何時からですか。" },
  { ja: "チェックイン", kana: "チェックイン", romaji: "chekkuin", zh: "入住", cat: "酒店", example: "チェックインをお願いします。" },
  { ja: "チェックアウト", kana: "チェックアウト", romaji: "chekkuauto", zh: "退房", cat: "酒店", example: "チェックアウトは明日です。" },
  { ja: "無料", kana: "むりょう", romaji: "muryou", zh: "免费", cat: "酒店", example: "Wi-Fiは無料ですか。" },
  { ja: "助けて", kana: "たすけて", romaji: "tasukete", zh: "救命 / 帮帮我", cat: "紧急", example: "助けてください！" },
  { ja: "警察", kana: "けいさつ", romaji: "keisatsu", zh: "警察", cat: "紧急", example: "警察を呼んでください。" },
  { ja: "病院", kana: "びょういん", romaji: "byouin", zh: "医院", cat: "紧急", example: "病院はどこですか。" },
  { ja: "トイレ", kana: "トイレ", romaji: "toire", zh: "厕所", cat: "紧急", example: "トイレはどこですか。" },
  { ja: "大丈夫ですか", kana: "だいじょうぶですか", romaji: "daijoubudesuka", zh: "你没事吧", cat: "紧急", example: "大丈夫ですか。" },
  { ja: "迷った", kana: "まよった", romaji: "mayotta", zh: "迷路了", cat: "紧急", example: "道に迷いました。" },
  { ja: "紛失", kana: "ふんしつ", romaji: "funshitsu", zh: "丢失", cat: "紧急", example: "パスポートを紛失しました。" },
  { ja: "日本語がわかりません", kana: "にほんごがわかりません", romaji: "nihongo ga wakarimasen", zh: "我不懂日语", cat: "紧急", example: "日本語がわかりません。英語は大丈夫ですか。" },
  { ja: "見る", kana: "みる", romaji: "miru", zh: "看", cat: "基础", example: "写真を見てもいいですか。" },
  { ja: "食べる", kana: "たべる", romaji: "taberu", zh: "吃", cat: "餐饮", example: "日本食を食べたいです。" }
];

const PHRASES = [
  { ja: "おはようございます", romaji: "ohayou gozaimasu", zh: "早上好", cat: "问候" },
  { ja: "こんにちは", romaji: "konnichiwa", zh: "你好（白天）", cat: "问候" },
  { ja: "こんばんは", romaji: "konbanwa", zh: "晚上好", cat: "问候" },
  { ja: "ありがとうございます", romaji: "arigatou gozaimasu", zh: "谢谢", cat: "问候" },
  { ja: "すみません", romaji: "sumimasen", zh: "不好意思 / 请问", cat: "问候" },
  { ja: "お願いします", romaji: "onegaishimasu", zh: "拜托了", cat: "请求" },
  { ja: "〜をください", romaji: "~ o kudasai", zh: "请给我〜", cat: "请求" },
  { ja: "もう一度お願いします", romaji: "mou ichido onegaishimasu", zh: "请再说一遍", cat: "请求" },
  { ja: "ゆっくり話してください", romaji: "yukkuri hanashite kudasai", zh: "请说慢一点", cat: "请求" },
  { ja: "ちょっと待ってください", romaji: "chotto matte kudasai", zh: "请稍等", cat: "请求" },
  { ja: "日本語が少しわかります", romaji: "nihongo ga sukoshi wakarimasu", zh: "我懂一点日语", cat: "请求" },
  { ja: "駅はどこですか", romaji: "eki wa doko desu ka", zh: "车站在哪里", cat: "交通" },
  { ja: "電車は何時ですか", romaji: "densha wa nanji desu ka", zh: "电车几点来", cat: "交通" },
  { ja: "切符はどこで買えますか", romaji: "kippu wa doko de kaemasu ka", zh: "在哪里买票", cat: "交通" },
  { ja: "ここで降ります", romaji: "koko de orimasu", zh: "我在这里下车", cat: "交通" },
  { ja: "何番線ですか", romaji: "nanbansen desu ka", zh: "是几号站台", cat: "交通" },
  { ja: "右に行ってください", romaji: "migi ni itte kudasai", zh: "请往右走", cat: "交通" },
  { ja: "まっすぐ行きます", romaji: "massugu ikimasu", zh: "一直往前走", cat: "交通" },
  { ja: "トイレはどこですか", romaji: "toire wa doko desu ka", zh: "厕所在哪里", cat: "交通" },
  { ja: "メニューをください", romaji: "menyuu o kudasai", zh: "请给我菜单", cat: "餐饮" },
  { ja: "おすすめは何ですか", romaji: "osusume wa nan desu ka", zh: "有什么推荐", cat: "餐饮" },
  { ja: "これをください", romaji: "kore o kudasai", zh: "我要这个", cat: "餐饮" },
  { ja: "お水をください", romaji: "omizu o kudasai", zh: "请给我水", cat: "餐饮" },
  { ja: "会計をお願いします", romaji: "kaikei o onegaishimasu", zh: "请结账", cat: "餐饮" },
  { ja: "いただきます", romaji: "itadakimasu", zh: "我开动了（饭前）", cat: "餐饮" },
  { ja: "ごちそうさまでした", romaji: "gochisousama deshita", zh: "我吃好了（饭后）", cat: "餐饮" },
  { ja: "いくらですか", romaji: "ikura desu ka", zh: "多少钱", cat: "购物" },
  { ja: "これを試着してもいいですか", romaji: "kore o shichaku shite mo ii desu ka", zh: "可以试穿吗", cat: "购物" },
  { ja: "袋をもらえますか", romaji: "fukuro o moraemasu ka", zh: "可以给我袋子吗", cat: "购物" },
  { ja: "カードで払えますか", romaji: "kaado de haraemasu ka", zh: "可以刷卡吗", cat: "购物" },
  { ja: "予約しています", romaji: "yoyaku shite imasu", zh: "我有预约", cat: "酒店" },
  { ja: "チェックインをお願いします", romaji: "chekkuin o onegaishimasu", zh: "我要办理入住", cat: "酒店" },
  { ja: "部屋を一つお願いします", romaji: "heya o hitotsu onegaishimasu", zh: "请给我一间房", cat: "酒店" },
  { ja: "荷物を預かってもらえますか", romaji: "nimotsu o azukatte moraemasu ka", zh: "可以寄存行李吗", cat: "酒店" },
  { ja: "Wi-Fiのパスワードは何ですか", romaji: "wai-fai no pasuwaado wa nan desu ka", zh: "Wi-Fi 密码是多少", cat: "酒店" },
  { ja: "朝食は何時からですか", romaji: "choushoku wa nanji kara desu ka", zh: "早餐几点开始", cat: "酒店" },
  { ja: "助けてください", romaji: "tasukete kudasai", zh: "请帮帮我", cat: "紧急" },
  { ja: "警察を呼んでください", romaji: "keisatsu o yonde kudasai", zh: "请叫警察", cat: "紧急" },
  { ja: "病院はどこですか", romaji: "byouin wa doko desu ka", zh: "医院在哪里", cat: "紧急" },
  { ja: "気分が悪いです", romaji: "kibun ga warui desu", zh: "我不舒服", cat: "紧急" },
  { ja: "パスポートをなくしました", romaji: "pasupooto o nakushimashita", zh: "护照丢了", cat: "紧急" },
  { ja: "大丈夫ですか", romaji: "daijoubu desu ka", zh: "你没事吧", cat: "紧急" },
  { ja: "どこから来ましたか", romaji: "doko kara kimashita ka", zh: "你从哪里来", cat: "闲聊" },
  { ja: "これは何ですか", romaji: "kore wa nan desu ka", zh: "这是什么", cat: "闲聊" },
  { ja: "おいしかったです", romaji: "oishikatta desu", zh: "很好吃", cat: "闲聊" },
  { ja: "また会いましょう", romaji: "mata aimashou", zh: "下次再见", cat: "闲聊" }
];

const WEEKDAYS = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

let activeSong = null;
let activeAnime = null;
let reviewQueue = [];
let reviewIndex = 0;
let reviewFlipped = false;
let currentKana = null;
let currentKanaMode = "hira";
let kanaAnswered = false;
let lyricIndex = 0;
let deferredInstallPrompt = null;
let lastSyncedTracks = [];
let editingCustomId = null;
let lastSearchResults = [];

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function defaultTripDate() {
  const d = new Date();
  d.setDate(d.getDate() + 29);
  return toDateKey(d);
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const merged = Object.assign({
        tripDate: defaultTripDate(),
        completedDays: {},
        knownWords: [],
        customSongs: [],
        wordCache: {},
        kanaStats: { correct: 0, streak: 0, best: 0 },
        currentView: "songs"
      }, JSON.parse(raw));
      if (merged.currentView === "dashboard") merged.currentView = "songs";
      return merged;
    }
  } catch (e) {
    console.warn("state load failed", e);
  }
  return {
    tripDate: defaultTripDate(),
    completedDays: {},
    knownWords: [],
    customSongs: [],
    wordCache: {},
    kanaStats: { correct: 0, streak: 0, best: 0 },
    currentView: "songs"
  };
}

const state = loadState();

function saveState() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("state save failed", e);
  }
}

function toDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function parseDateKey(key) {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function addDays(key, days) {
  const d = parseDateKey(key);
  d.setDate(d.getDate() + days);
  return toDateKey(d);
}

function todayKey() {
  return toDateKey(new Date());
}

function daysUntil(key) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = parseDateKey(key);
  return Math.round((target - today) / 86400000);
}

function formatDateKey(key) {
  const d = parseDateKey(key);
  return `${d.getMonth() + 1}月${d.getDate()}日 ${WEEKDAYS[d.getDay()]}`;
}

function buildPlan() {
  const start = addDays(state.tripDate, -29);
  return PLAN_TEMPLATES.map((template, index) => {
    const dateKey = addDays(start, index);
    return {
      ...template,
      dateKey,
      isToday: dateKey === todayKey(),
      isPast: dateKey < todayKey(),
      done: Boolean(state.completedDays[String(template.day)])
    };
  });
}

function todayPlanIndex(plan) {
  const found = plan.findIndex(item => item.dateKey === todayKey());
  if (found >= 0) return found;
  return plan[0].dateKey > todayKey() ? 0 : plan.length - 1;
}

function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function toast(message) {
  const node = $("#toast");
  node.textContent = message;
  node.classList.remove("hidden");
  window.clearTimeout(toast.timer);
  toast.timer = window.setTimeout(() => node.classList.add("hidden"), 2400);
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    toast("当前浏览器不支持语音朗读");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = 0.78;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function switchView(view) {
  state.currentView = view;
  saveState();
  $$(".tab-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.view === view));
  $$(".view").forEach(section => section.classList.toggle("active", section.id === `view-${view}`));
  renderView(view);
}

function renderView(view) {
  if (view === "dashboard") renderDashboard();
  if (view === "plan") renderPlan();
  if (view === "songs") renderSongs();
  if (view === "grammar") renderGrammar();
  if (view === "sync") renderSync();
  if (view === "anime") renderAnime();
  if (view === "words") renderWords();
  if (view === "kana") renderKana();
  if (view === "phrases") renderPhrases();
}

function renderAll() {
  renderView("dashboard");
  renderView("plan");
  renderView("songs");
  renderView("grammar");
  renderView("sync");
  renderView("anime");
  renderView("words");
  renderView("kana");
  renderView("phrases");
}

function renderDashboard() {
  const plan = buildPlan();
  const index = todayPlanIndex(plan);
  const entry = plan[index];
  const daysLeft = Math.max(daysUntil(state.tripDate), 0);
  const completedCount = Object.keys(state.completedDays).length;
  const percent = Math.round((completedCount / PLAN_TEMPLATES.length) * 100);
  const knownCount = state.knownWords.length;

  $("#tripDate").value = state.tripDate;
  $("#countdownDays").textContent = daysLeft;
  $("#todayTitle").textContent = `Day ${entry.day} · ${entry.title}`;
  $("#todaySummary").textContent = entry.tasks[0];
  $("#statToday").textContent = `Day ${entry.day}`;
  $("#statTodaySub").textContent = `${entry.minutes} 分钟 · ${entry.theme}`;
  $("#statPlan").textContent = `${completedCount}`;
  $("#statPlanSub").textContent = `${percent}% 已完成`;
  $("#statWords").textContent = `${knownCount}`;
  $("#statWordsSub").textContent = `${WORDS.length} 个核心词`;
  $("#statKana").textContent = state.kanaStats.best;
  $("#statKanaSub").textContent = `共答对 ${state.kanaStats.correct} 题`;

  const media = index % 2 === 0 ? SONGS[index % SONGS.length] : ANIME_SCENES[index % ANIME_SCENES.length];
  const isSong = Boolean(media.lyric);
  $("#todayMedia").innerHTML = `
    <div class="media-body">
      <span class="media-disc">${isSong ? "♪" : "語"}</span>
      <div class="media-meta">
        <span class="kicker">${isSong ? "歌曲" : "动漫"} · ${isSong ? media.artist : media.show}</span>
        <h4>${media.title}</h4>
        <p>${isSong ? media.lyric : media.line} —— ${media.zh}</p>
        <button class="speak-btn speak-inline" data-speak="${isSong ? media.lyric : media.line}">听发音</button>
      </div>
    </div>`;

  const phrase = PHRASES[(index * 3 + 4) % PHRASES.length];
  $("#dailyPhrase").innerHTML = `
    <div class="phrase-focus">
      <span class="eyebrow" style="background:var(--teal-soft);color:var(--teal);border-color:transparent">${phrase.cat}</span>
      <p class="jp-line">${phrase.ja}</p>
      <p class="romaji">${phrase.romaji}</p>
      <p class="zh-line">${phrase.zh}</p>
      <div class="mini-actions">
        <button class="speak-btn" data-speak="${phrase.ja}">听发音</button>
        <button class="ghost-btn" data-jump="phrases">看更多</button>
      </div>
    </div>`;
}

function renderPlan() {
  const plan = buildPlan();
  const completedCount = plan.filter(item => item.done).length;
  const percent = Math.round((completedCount / plan.length) * 100);
  $("#planPercent").textContent = `${percent}%`;
  $("#planBar").style.width = `${percent}%`;
  $("#planProgressText").textContent = `${completedCount} / ${plan.length} 天完成`;

  $("#planList").innerHTML = plan.map(item => `
    <article class="plan-day ${item.done ? "done" : ""} ${item.isToday ? "today" : ""}">
      <div class="plan-date">
        <span class="day-badge">Day ${item.day}</span>
        <strong>${formatDateKey(item.dateKey)}</strong>
        <span>${item.isToday ? "今天" : item.isPast ? "待补" : ""}</span>
      </div>
      <div class="plan-main">
        <span class="theme">${item.theme}</span>
        <h4>${item.title}</h4>
        <ul class="tasks">
          ${item.tasks.map(task => `<li>${task}</li>`).join("")}
        </ul>
      </div>
      <div class="plan-side">
        <span class="minutes">${item.minutes} 分钟</span>
        <span class="media-tag">${item.media}</span>
        <button class="complete-btn" data-day="${item.day}">${item.done ? "已完成" : "标记完成"}</button>
      </div>
    </article>
  `).join("");
}

function renderSongLesson() {
  if (!activeSong) return;
  $("#songLessonTitle").textContent = `${activeSong.title} · ${activeSong.artist}`;
  const lines = activeSong.lines || [];
  if (lyricIndex >= lines.length) lyricIndex = 0;
  const grammarPoints = (activeSong.grammarPointIds || [])
    .map(id => GRAMMAR_POINTS.find(point => point.id === id))
    .filter(Boolean);

  if (!lines.length) {
    $("#songLessonBody").innerHTML = `
      <div class="lesson-line">
        <blockquote>还没有导入歌词</blockquote>
        <div>
          <p class="trans">这首歌已加入学习列表，补上歌词后就能开始逐句学习。</p>
          <button class="secondary-btn" data-jump="sync">去导入歌词</button>
        </div>
      </div>
    `;
    return;
  }

  $("#songLessonBody").innerHTML = `
    <div class="lyric-stepper">
      <div class="lyric-toolbar">
        <button class="ghost-btn" data-line-step="-1" id="prevLine">上一句</button>
        <span id="lineCounter">1 / ${lines.length || 1}</span>
        <button class="ghost-btn" data-line-step="1" id="nextLine">下一句</button>
      </div>
      <div class="lyric-stage">
        <blockquote id="activeLineJa">${activeSong.lyric}</blockquote>
        <p class="romaji" id="activeLineRomaji">${activeSong.romaji}</p>
        <p class="trans" id="activeLineZh">${activeSong.zh}</p>
        <div class="word-chips" id="activeLineWords"></div>
        <button class="speak-btn" data-line-speak>朗读这句</button>
      </div>
    </div>
    <div class="lesson-grid">
      <div class="lesson-box">
        <h5>单词</h5>
        ${activeSong.vocab && activeSong.vocab.length ? activeSong.vocab.map(v => `
          <div class="vocab-row"><strong>${v.ja}</strong><span>${v.kana}</span><span>${v.zh}</span></div>
        `).join("") : `<p>暂无自动词卡，歌词里的重点词会在你补充学习笔记后逐步积累。</p>`}
      </div>
      <div class="lesson-box">
        <h5>语法讲解与例句</h5>
        ${grammarPoints.length ? grammarPoints.map(point => `
          <div class="mini-grammar">
            <span class="pattern">${point.pattern}</span>
            <h6>${point.title}</h6>
            <p>${point.explain}</p>
            <div class="example-list compact">
              ${point.examples.map(example => `
                <div class="example-row">
                  <div><strong>${example.ja}</strong><span>${example.romaji}</span></div>
                  <small>${example.zh}</small>
                  <button class="speak-btn" data-speak="${example.ja}">朗读</button>
                </div>
              `).join("")}
            </div>
          </div>
        `).join("") : `<p>${activeSong.grammar || "还没有语法笔记，可以到导入页补充学习重点。"}</p>`}
      </div>
    </div>
    ${activeSong.quizLine && activeSong.options && activeSong.options.length ? `
      <div class="quiz-box">
        <h5>歌词填空</h5>
        <p class="quiz-line">${activeSong.quizLine}</p>
        <div class="quiz-options">
          ${activeSong.options.map(option => `<button data-answer="${option}" data-type="song">${option}</button>`).join("")}
        </div>
        <p class="quiz-feedback" data-feedback="song">选一个词补全歌词</p>
      </div>
    ` : `
      <div class="quiz-box">
        <h5>跟读练习</h5>
        <p class="quiz-line">先跟读 3 遍，再试着盖住中文翻译复述。</p>
        <button class="speak-btn" data-line-speak>朗读当前句</button>
      </div>
    `}
  `;
  renderActiveLyricLine();
}

function renderActiveLyricLine() {
  const lines = activeSong.lines || [];
  if (!lines.length) return;
  if (lyricIndex < 0) lyricIndex = 0;
  if (lyricIndex >= lines.length) lyricIndex = lines.length - 1;
  const line = lines[lyricIndex];
  $("#activeLineJa").textContent = line.ja;
  $("#activeLineRomaji").textContent = line.romaji;
  $("#activeLineZh").textContent = line.zh;
  $("#lineCounter").textContent = `${lyricIndex + 1} / ${lines.length}`;
  $("#activeLineWords").innerHTML = (line.words || []).map(word => `
    <span class="word-chip">
      <strong>${word.surface}</strong>
      <small>${word.kana} · ${word.zh}</small>
    </span>
  `).join("");
  $("#prevLine").disabled = lines.length < 2;
  $("#nextLine").disabled = lines.length < 2;
}

function renderSongs() {
  const allSongs = [...SONGS, ...state.customSongs];
  if (!activeSong || !allSongs.some(song => song.id === activeSong.id)) {
    activeSong = SONGS[0];
    lyricIndex = 0;
  }
  $("#songGrid").innerHTML = allSongs.map(song => `
    <button class="media-card ${activeSong.id === song.id ? "active" : ""}" data-song-id="${song.id}">
      <div class="card-top">
        <span class="card-type">${song.isCustom ? "我的导入" : "J-POP"}</span>
        <span class="card-icon">♪</span>
      </div>
      <h3>${song.title}</h3>
      <p class="artist">${song.artist}</p>
      <blockquote>${song.lyric || (song.lines && song.lines[0] ? song.lines[0].ja : "等待导入歌词")}</blockquote>
    </button>
  `).join("");
  renderSongLesson();
}

function renderGrammar() {
  const filter = $("#grammarFilter").value || "all";
  const filtered = GRAMMAR_POINTS.filter(point => filter === "all" || point.level === filter);
  $("#grammarList").innerHTML = filtered.map(point => `
    <article class="grammar-card">
      <div class="grammar-head">
        <span class="level-badge">${point.level}</span>
        <span class="song-source">出自 ${point.song}</span>
      </div>
      <h3><span class="pattern">${point.pattern}</span>${point.title}</h3>
      <p class="grammar-explain">${point.explain}</p>
      <div class="example-list">
        ${point.examples.map(example => `
          <div class="example-row">
            <div><strong>${example.ja}</strong><span>${example.romaji}</span></div>
            <small>${example.zh}</small>
            <button class="speak-btn" data-speak="${example.ja}">朗读</button>
          </div>
        `).join("")}
      </div>
      <button class="ghost-btn grammar-song-link" data-song-target="${point.songId}">去歌词里再看一遍</button>
    </article>
  `).join("");
}

const NETEASE_DEFAULT_PROXY = "https://api.allorigins.win/raw?url=";
const NETEASE_PROXY_FALLBACKS = [
  "https://api.allorigins.win/raw?url=",
  "https://api.allorigins.win/get?url=",
  "https://corsproxy.io/?url=",
  "https://api.codetabs.com/v1/proxy?quest="
];

function isJapaneseText(text) {
  return /[\u3040-\u30ff\u3400-\u9fff]/.test(text || "");
}

function extractPlaylistId(input) {
  const match = String(input || "").match(/(?:playlist\/|playlist\?id=|playlist\/detail\/)(\d+)/) || String(input || "").match(/^\d+$/);
  return match ? (match[1] || match[0]) : "";
}

function normalizeTrackName(value) {
  return String(value || "").toLowerCase().replace(/[\s・·×\u3000]/g, "");
}

function findBuiltInSong(track) {
  const title = normalizeTrackName(track.title);
  const artist = normalizeTrackName(track.artist);
  return SONGS.find(song => {
    const songTitle = normalizeTrackName(song.title);
    const songArtist = normalizeTrackName(song.artist);
    const titleMatch = title.includes(songTitle) || songTitle.includes(title);
    const artistMatch = !songArtist || artist.includes(songArtist) || songArtist.includes(artist);
    return titleMatch && artistMatch;
  });
}

function renderSyncTracks() {
  const container = $("#syncResults");
  if (!lastSyncedTracks.length) {
    container.classList.add("hidden");
    container.innerHTML = "";
    return;
  }
  container.classList.remove("hidden");
  container.innerHTML = `
    <div class="sync-result-head">
      <h3>识别结果</h3>
      <small>${lastSyncedTracks.length} 首歌曲</small>
    </div>
    ${lastSyncedTracks.map((track, index) => {
      const builtIn = findBuiltInSong(track);
      const japanese = isJapaneseText(`${track.title} ${track.artist}`);
      return `
        <div class="sync-track">
          <div>
            <h4>${track.title}</h4>
            <p>${track.artist || "未知歌手"}</p>
            <div class="track-tags">
              ${japanese ? `<span class="track-tag">日语歌</span>` : ""}
              ${builtIn ? `<span class="track-tag match">曲库已有</span>` : `<span class="track-tag">需要导入</span>`}
            </div>
          </div>
          <div class="track-actions">
            ${builtIn ? `<button class="primary-btn" data-song-target="${builtIn.id}">学习</button>` : `<button class="secondary-btn" data-queue-track="${index}">加入学习列表</button>`}
            ${!builtIn && track.id ? `<button class="ghost-btn" data-fetch-lyrics="${index}">获取歌词</button>` : ""}
            ${track.id ? `<button class="ghost-btn" data-netease-open="${track.id}">网易云</button>` : ""}
          </div>
        </div>
      `;
    }).join("")}
  `;
}

function renderCustomSongs() {
  const container = $("#customSongList");
  if (!state.customSongs.length) {
    container.innerHTML = "";
    return;
  }
  container.innerHTML = `
    <h3>我的学习列表</h3>
    ${state.customSongs.map(song => `
      <div class="custom-song">
        <div>
          <h4>${song.title}</h4>
          <p>${song.artist} · ${song.lines && song.lines.length ? `${song.lines.length} 句歌词` : "还没有歌词"}</p>
        </div>
        <div class="custom-actions">
          <button class="primary-btn" data-custom-open="${song.id}">开始学习</button>
          <button class="ghost-btn" data-edit-custom="${song.id}">补歌词</button>
          <button class="danger-btn" data-remove-custom="${song.id}">删除</button>
        </div>
      </div>
    `).join("")}
  `;
}

function renderSync() {
  renderSyncTracks();
  renderCustomSongs();
}

async function syncPlaylist() {
  const input = $("#playlistInput").value.trim();
  const id = extractPlaylistId(input);
  const status = $("#playlistStatus");
  if (!id) {
    status.textContent = "没有识别到歌单 ID，请粘贴完整歌单链接或纯数字 ID。";
    return;
  }
  status.textContent = "正在同步歌单，请稍候…";
  const data = await fetchNeteaseJson(`/playlist/detail?id=${id}&n=1000`);
  const playlist = data && data.playlist;
  if (!playlist || !Array.isArray(playlist.tracks)) {
    status.textContent = "同步失败。网易云公开接口经常限制访问，可以换代理地址，或使用下方的文本导入。";
    return;
  }
  lastSyncedTracks = playlist.tracks.map(track => ({
    id: track.id,
    title: track.name,
    artist: (track.ar || []).map(artist => artist.name).join(" / ")
  }));
  const japaneseTracks = lastSyncedTracks.filter(track => isJapaneseText(`${track.title} ${track.artist}`));
  renderSyncTracks();
  status.textContent = `已同步“${playlist.name}”，共 ${lastSyncedTracks.length} 首，识别出 ${japaneseTracks.length} 首日语歌。`;
}

function importSongListText() {
  const raw = $("#songListInput").value.trim();
  const status = $("#playlistStatus");
  if (!raw) {
    status.textContent = "请先粘贴歌单文本，例如：Lemon - 米津玄師";
    return;
  }
  lastSyncedTracks = raw.split("\n").map(line => {
    const parts = line.split(/\s*[-—|]\s*/);
    return {
      id: null,
      title: (parts[0] || "").trim(),
      artist: (parts[1] || "").trim() || "未知歌手"
    };
  }).filter(track => track.title);
  const japaneseTracks = lastSyncedTracks.filter(track => isJapaneseText(`${track.title} ${track.artist}`));
  renderSyncTracks();
  status.textContent = `已识别 ${lastSyncedTracks.length} 首，其中 ${japaneseTracks.length} 首可能是日语歌。`;
}

function addTrackToCustom(index) {
  const track = lastSyncedTracks[index];
  if (!track) return;
  const builtIn = findBuiltInSong(track);
  if (builtIn) {
    activeSong = builtIn;
    lyricIndex = 0;
    switchView("songs");
    renderSongs();
    return;
  }
  if (state.customSongs.some(song => song.title === track.title && song.artist === track.artist)) {
    toast("这首歌已经在学习列表里");
    return;
  }
  const customSong = {
    id: `custom-${Date.now()}`,
    title: track.title,
    artist: track.artist || "未知歌手",
    search: `${track.title} ${track.artist}`,
    neteaseId: track.id || null,
    lyric: "",
    romaji: "",
    zh: "",
    lines: [],
    vocab: [],
    grammar: "还没有学习笔记，请到导入页补充。",
    grammarPointIds: [],
    quizLine: null,
    options: [],
    answer: null,
    isCustom: true
  };
  state.customSongs.push(customSong);
  saveState();
  renderSync();
  toast("已加入学习列表，接下来补歌词");
}

async function fetchLyricsForTrack(index) {
  const track = lastSyncedTracks[index];
  const status = $("#playlistStatus");
  if (!track || !track.id) {
    status.textContent = "这首歌没有网易云歌曲 ID，请手动粘贴歌词。";
    return;
  }
  status.textContent = `正在获取 ${track.title} 的歌词…`;
  const data = await fetchNeteaseJson(`/lyric?id=${track.id}&lv=-1&kv=-1&tv=-1`);
  const parsedLines = parseLyricResponse(data);
  if (!parsedLines.length) {
    status.textContent = "歌词获取失败，请手动粘贴歌词。";
    return;
  }
  const enriched = await enrichLyricLines(parsedLines);
  const lines = enriched.lines;
  const existing = state.customSongs.find(song => song.neteaseId === String(track.id) || (song.title === track.title && song.artist === track.artist));
  const songData = {
    id: existing ? existing.id : `custom-${Date.now()}`,
    title: track.title,
    artist: track.artist || "未知歌手",
    search: `${track.title} ${track.artist}`,
    neteaseId: track.id || null,
    lyric: lines[0].ja,
    romaji: "",
    zh: "",
    lines,
    vocab: enriched.vocab,
    grammar: "已自动匹配歌词中出现的语法点。",
    grammarPointIds: enriched.grammarPointIds,
    quizLine: null,
    options: [],
    answer: null,
    isCustom: true
  };
  if (existing) {
    Object.assign(existing, songData);
  } else {
    state.customSongs.push(songData);
  }
  saveState();
  renderSync();
  renderSongs();
  status.textContent = `已获取 ${track.title} 的 ${lines.length} 句歌词，可以开始学习了。`;
}

function importLyricsFromForm() {
  const title = $("#newSongTitle").value.trim();
  const artist = $("#newSongArtist").value.trim() || "未知歌手";
  const neteaseId = $("#newSongNeteaseId").value.trim();
  const grammarNote = $("#grammarNote").value.trim();
  const rawLines = $("#lyricImportInput").value.split("\n").map(line => line.trim()).filter(Boolean);
  if (!rawLines.length) {
    toast("请至少粘贴一行歌词");
    return;
  }
  const lines = rawLines.map(line => {
    const parts = line.split("|").map(part => part.trim());
    return {
      ja: parts[0] || "",
      romaji: parts[1] || "",
      zh: parts[2] || "",
      words: []
    };
  }).filter(line => line.ja);
  const firstLine = lines[0].ja;
  const songData = {
    id: `custom-${Date.now()}`,
    title: title || firstLine.slice(0, 20),
    artist,
    search: `${title || firstLine} ${artist}`,
    neteaseId: neteaseId || null,
    lyric: firstLine,
    romaji: lines[0].romaji || "",
    zh: lines[0].zh || "",
    lines,
    vocab: [],
    grammar: grammarNote || "还没有学习笔记，可以在这里写下想掌握的语法点。",
    grammarPointIds: [],
    quizLine: null,
    options: [],
    answer: null,
    isCustom: true
  };
  let customSong;
  const existingIndex = state.customSongs.findIndex(song => song.id === editingCustomId);
  if (existingIndex >= 0) {
    customSong = Object.assign(state.customSongs[existingIndex], songData, {
      id: state.customSongs[existingIndex].id
    });
    state.customSongs[existingIndex] = customSong;
  } else {
    customSong = songData;
    state.customSongs.push(customSong);
  }
  editingCustomId = null;
  saveState();
  activeSong = customSong;
  lyricIndex = 0;
  renderSync();
  renderSongs();
  switchView("songs");
  toast("歌词已保存，开始学习吧");
}

async function fetchWithTimeout(url, timeout = 8000, options = {}) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeout);
  try {
    return await fetch(url, Object.assign({}, options, { signal: controller.signal }));
  } finally {
    window.clearTimeout(timer);
  }
}

async function fetchNeteaseJson(path) {
  const publicBases = ["https://music.mcseekeri.com", "https://zm.wwoyun.cn"];
  for (const base of publicBases) {
    try {
      const response = await fetchWithTimeout(base + path);
      if (!response.ok) continue;
      const data = await response.json();
      if (data && (data.result || data.playlist || data.lrc || data.songs)) {
        return data;
      }
    } catch (error) {
      continue;
    }
  }
  return fetchJsonViaProxies(`https://music.163.com${path}`);
}

async function fetchJsonViaProxies(target) {
  const userProxy = $("#proxyInput").value.trim();
  const proxies = userProxy ? [userProxy] : NETEASE_PROXY_FALLBACKS;
  for (const proxy of proxies) {
    try {
      const response = await fetchWithTimeout(proxy + encodeURIComponent(target));
      const text = await response.text();
      const parsed = JSON.parse(text);
      if (proxy.includes("allorigins.win/get")) {
        return JSON.parse(parsed.contents || "{}");
      }
      return parsed;
    } catch (error) {
      continue;
    }
  }
  return null;
}

function parseLrcToEntries(lrcText) {
  const metadataPattern = /(作词|作曲|编曲|制作人|演唱|混音|母带|录音|监制|吉他|贝斯|鼓|键盘|弦乐|翻译|OP|SP|配唱|人声|和声)/;
  return String(lrcText || "").split("\n").map(line => {
    const match = line.match(/\[(\d{2}):(\d{2})(?:\.(\d+))?\](.*)/);
    if (!match) return null;
    const text = (match[4] || "").trim();
    if (!text || metadataPattern.test(text)) return null;
    const time = Number(match[1]) * 60 + Number(match[2]) + Number((match[3] || "0").padEnd(3, "0")) / 1000;
    return { time, text };
  }).filter(Boolean);
}

function parseLyricResponse(data) {
  const original = parseLrcToEntries(data && data.lrc && data.lrc.lyric);
  const translated = parseLrcToEntries(data && data.tlyric && data.tlyric.lyric);
  const translationMap = new Map(translated.map(item => [Math.round(item.time * 10), item.text]));
  return original.map(item => ({
    ja: item.text,
    romaji: "",
    zh: translationMap.get(Math.round(item.time * 10)) || "",
    words: []
  }));
}

function tokenizeJapanese(text) {
  const cleaned = String(text || "").replace(/[「」『』（）()・、。，．！？!?…\s]/g, " ").trim();
  if (window.Intl && window.Intl.Segmenter) {
    const segmenter = new Intl.Segmenter("ja", { granularity: "word" });
    return Array.from(segmenter.segment(cleaned))
      .map(item => item.segment.trim())
      .filter(token => /[\u3040-\u30ff\u3400-\u9fff]/.test(token));
  }
  return cleaned.match(/[\u3040-\u30ff]+|[\u3400-\u9fff]+/g) || [];
}

function lookupLocalWord(token) {
  const local = WORDS.find(word => word.ja === token || word.kana === token);
  if (local) {
    return { ja: token, kana: local.kana || "", zh: local.zh };
  }
  if (state.wordCache[token]) {
    return { ja: token, kana: state.wordCache[token].kana || "", zh: state.wordCache[token].zh || "" };
  }
  return null;
}

async function lookupJishoWord(token) {
  try {
    const response = await fetchWithTimeout("https://jotoba.de/api/search/words", 6000, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: token, language: "English", no_english: false })
    });
    if (!response.ok) return null;
    const data = await response.json();
    const first = data && data.words && data.words[0];
    if (!first) return null;
    return {
      ja: token,
      kana: (first.reading && first.reading.kana) || "",
      zh: (first.senses && first.senses[0] && first.senses[0].glosses || []).slice(0, 2).join(" / ")
    };
  } catch (error) {
    return null;
  }
}

function detectGrammarIds(text) {
  const detectors = [
    ["naraba", /ならば/],
    ["yokatta", /よかった/],
    ["youni", /ように/],
    ["teyuku", /て(い|ゆ)く/],
    ["nda", /んだ/],
    ["hazu", /はず/],
    ["noni", /のに/],
    ["iru-continuation", /ている/],
    ["tai", /たい/]
  ];
  return detectors.filter(([, pattern]) => pattern.test(text || "")).map(([id]) => id);
}

async function enrichLyricLines(lines) {
  const uniqueTokens = [];
  const tokenSet = new Set();
  lines.forEach(line => {
    line.words = tokenizeJapanese(line.ja).map(surface => ({ surface, kana: "", zh: "" }));
    line.words.forEach(word => {
      if (!tokenSet.has(word.surface)) {
        tokenSet.add(word.surface);
        uniqueTokens.push(word.surface);
      }
    });
  });

  const limit = 60;
  const lookups = uniqueTokens.slice(0, limit);
  const results = new Array(lookups.length);
  let cursor = 0;
  async function worker() {
    while (cursor < lookups.length) {
      const index = cursor++;
      const token = lookups[index];
      results[index] = lookupLocalWord(token) || await lookupJishoWord(token) || { ja: token, kana: "", zh: "未收录" };
      if (results[index].zh && results[index].zh !== "未收录") {
        state.wordCache[token] = results[index];
      }
    }
  }
  await Promise.all(Array.from({ length: 4 }, worker));
  uniqueTokens.slice(limit).forEach(token => results.push({ ja: token, kana: "", zh: "未收录" }));

  const wordMap = new Map(uniqueTokens.map((token, index) => [token, results[index]]));
  const vocabMap = new Map();
  const grammarSet = new Set();
  lines.forEach(line => {
    line.words.forEach(word => {
      const info = wordMap.get(word.surface) || { ja: word.surface, kana: "", zh: "" };
      word.kana = info.kana || "";
      word.zh = info.zh || "";
      if (info.zh && info.zh !== "未收录" && !vocabMap.has(word.surface)) {
        vocabMap.set(word.surface, { ja: word.surface, kana: info.kana || "", zh: info.zh });
      }
    });
    detectGrammarIds(line.ja).forEach(id => grammarSet.add(id));
  });
  return {
    lines,
    vocab: Array.from(vocabMap.values()).slice(0, 40),
    grammarPointIds: Array.from(grammarSet)
  };
}

async function fetchAndParseSongLyrics(song) {
  const data = await fetchNeteaseJson(`/lyric?id=${song.id}&lv=-1&kv=-1&tv=-1`);
  const lines = parseLyricResponse(data);
  if (!lines.length) return null;
  return enrichLyricLines(lines);
}

async function searchSongs() {
  const query = $("#songSearchInput").value.trim();
  const artist = $("#songSearchArtist").value.trim();
  const status = $("#songSearchStatus");
  if (!query) {
    status.textContent = "请先输入歌名。";
    return;
  }
  status.textContent = "正在搜索网易云歌曲…";
  const searchQuery = artist ? `${query} ${artist}` : query;
  const data = await fetchNeteaseJson(`/search?keywords=${encodeURIComponent(searchQuery)}&limit=10`);
  const songs = data && data.result && data.result.songs ? data.result.songs : [];
  lastSearchResults = songs.map(song => ({
    id: song.id,
    title: song.name,
    artist: (song.artists || []).map(item => item.name).join(" / "),
    album: (song.album && song.album.name) || ""
  }));
  renderSongSearchResults();
  status.textContent = lastSearchResults.length ? `找到 ${lastSearchResults.length} 首，选择一首获取完整歌词。` : "没有搜到结果，请换一个歌名。";
}

function renderSongSearchResults() {
  $("#songSearchResults").innerHTML = lastSearchResults.map((song, index) => `
    <div class="search-result">
      <div>
        <h4>${song.title}</h4>
        <p>${song.artist}${song.album ? ` · ${song.album}` : ""}</p>
      </div>
      <button class="secondary-btn" data-search-song="${index}">获取歌词并解析</button>
    </div>
  `).join("");
}

async function handleSearchSong(index) {
  const song = lastSearchResults[index];
  const status = $("#songSearchStatus");
  if (!song) return;
  status.textContent = `正在获取《${song.title}》的完整歌词并解析…`;
  const parsed = await fetchAndParseSongLyrics(song);
  if (!parsed) {
    status.textContent = "获取失败，网易云接口或代理不可用。";
    return;
  }
  const existing = state.customSongs.find(item => item.neteaseId === String(song.id) || (item.title === song.title && item.artist === song.artist));
  const songData = {
    id: existing ? existing.id : `custom-${Date.now()}`,
    title: song.title,
    artist: song.artist || "未知歌手",
    search: `${song.title} ${song.artist}`,
    neteaseId: song.id,
    lyric: parsed.lines[0].ja,
    romaji: parsed.lines[0].romaji || "",
    zh: parsed.lines[0].zh || "",
    lines: parsed.lines,
    vocab: parsed.vocab,
    grammar: "已自动匹配歌词中出现的语法点。",
    grammarPointIds: parsed.grammarPointIds,
    quizLine: null,
    options: [],
    answer: null,
    isCustom: true
  };
  if (existing) {
    Object.assign(existing, songData);
    activeSong = existing;
  } else {
    state.customSongs.push(songData);
    activeSong = songData;
  }
  lyricIndex = 0;
  saveState();
  renderSync();
  renderSongs();
  switchView("songs");
  toast(`已解析《${song.title}》，共 ${parsed.lines.length} 句歌词`);
}

function renderAnimeLesson() {
  if (!activeAnime) return;
  $("#animeLessonTitle").textContent = `${activeAnime.title} · ${activeAnime.show}`;
  $("#animeLessonBody").innerHTML = `
    <div class="lesson-line">
      <blockquote>${activeAnime.line}</blockquote>
      <div>
        <p class="romaji">${activeAnime.romaji}</p>
        <p class="trans">${activeAnime.zh}</p>
        <button class="speak-btn" data-speak="${activeAnime.line}">跟读这句</button>
      </div>
    </div>
    <div class="lesson-grid">
      <div class="lesson-box">
        <h5>词意</h5>
        ${activeAnime.vocab.map(v => `
          <div class="vocab-row"><strong>${v.ja}</strong><span>${v.zh}</span></div>
        `).join("")}
      </div>
      <div class="lesson-box">
        <h5>语气提示</h5>
        <p>${activeAnime.tip}</p>
      </div>
    </div>
    <div class="quiz-box">
      <h5>场景小测</h5>
      <p class="quiz-line">${activeAnime.question}</p>
      <div class="quiz-options">
        ${activeAnime.options.map((option, index) => `<button data-answer="${index}" data-type="anime">${option}</button>`).join("")}
      </div>
      <p class="quiz-feedback" data-feedback="anime">选一个最自然的说法</p>
    </div>
  `;
}

function renderAnime() {
  if (!activeAnime || !ANIME_SCENES.some(scene => scene.id === activeAnime.id)) {
    activeAnime = ANIME_SCENES[0];
  }
  $("#animeGrid").innerHTML = ANIME_SCENES.map(scene => `
    <button class="media-card ${activeAnime.id === scene.id ? "active" : ""}" data-anime-id="${scene.id}">
      <div class="card-top">
        <span class="card-type">场景</span>
        <span class="card-icon">語</span>
      </div>
      <h3>${scene.title}</h3>
      <p class="artist">${scene.show}</p>
      <blockquote>${scene.line}</blockquote>
    </button>
  `).join("");
  renderAnimeLesson();
}

function renderWords() {
  const search = $("#wordSearch").value.trim().toLowerCase();
  const filter = $("#wordFilter").value;
  const categories = Array.from(new Set(WORDS.map(word => word.cat)));
  $("#wordFilter").innerHTML = `<option value="all">全部分类</option>${categories.map(cat => `<option value="${cat}">${cat}</option>`).join("")}`;
  $("#wordFilter").value = filter;

  const filtered = WORDS.filter(word => {
    const matchCat = filter === "all" || word.cat === filter;
    const haystack = `${word.ja} ${word.kana} ${word.romaji} ${word.zh} ${word.cat}`.toLowerCase();
    return matchCat && (!search || haystack.includes(search));
  });

  $("#wordGrid").innerHTML = filtered.map(word => {
    const known = state.knownWords.includes(word.ja);
    return `
      <article class="word-card ${known ? "known" : ""}">
        <span class="word-cat">${word.cat}</span>
        ${known ? `<span class="known-mark">✓</span>` : ""}
        <h3>${word.ja}</h3>
        <p class="kana">${word.kana}</p>
        <p class="meaning">${word.zh}</p>
        <p class="example">${word.example}</p>
        <button class="mark-btn" data-word="${word.ja}">${known ? "取消掌握" : "标记掌握"}</button>
      </article>
    `;
  }).join("");

  if (!filtered.length) {
    $("#wordGrid").innerHTML = `<p class="empty-state">没有找到匹配的单词</p>`;
  }
}

function startReview() {
  const unknown = WORDS.filter(word => !state.knownWords.includes(word.ja));
  const known = WORDS.filter(word => state.knownWords.includes(word.ja));
  reviewQueue = [...shuffle(unknown), ...shuffle(known)].slice(0, 10);
  reviewIndex = 0;
  reviewFlipped = false;
  $("#reviewPanel").classList.remove("hidden");
  $("#reviewPanel").classList.add("review-panel");
  $("#closeReview").classList.remove("hidden");
  $("#flipCard").classList.remove("hidden");
  $("#againCard").classList.add("hidden");
  $("#knowCard").classList.add("hidden");
  if (!reviewQueue.length) {
    toast("单词卡已经是空的");
    closeReview();
    return;
  }
  renderReviewCard();
}

function renderReviewCard() {
  const word = reviewQueue[reviewIndex];
  if (!word) {
    toast("这一轮复习完成");
    closeReview();
    return;
  }
  $("#reviewProgress").textContent = `${reviewIndex + 1} / ${reviewQueue.length}`;
  $("#cardCategory").textContent = word.cat;
  $("#cardJa").textContent = word.ja;
  $("#cardKana").textContent = word.kana;
  $("#cardRomaji").textContent = word.romaji;
  $("#cardZh").textContent = word.zh;
  $("#cardExample").textContent = word.example;
  $(".flashcard-back").classList.add("hidden");
  $(".flashcard-front").classList.remove("hidden");
  $("#flipCard").classList.remove("hidden");
  $("#againCard").classList.add("hidden");
  $("#knowCard").classList.add("hidden");
  reviewFlipped = false;
}

function flipReviewCard() {
  reviewFlipped = true;
  $(".flashcard-front").classList.add("hidden");
  $(".flashcard-back").classList.remove("hidden");
  $("#flipCard").classList.add("hidden");
  $("#againCard").classList.remove("hidden");
  $("#knowCard").classList.remove("hidden");
}

function advanceReview(known) {
  const word = reviewQueue[reviewIndex];
  if (known && !state.knownWords.includes(word.ja)) {
    state.knownWords.push(word.ja);
  }
  if (!known) {
    state.knownWords = state.knownWords.filter(id => id !== word.ja);
  }
  saveState();
  reviewIndex += 1;
  renderReviewCard();
  renderWords();
}

function closeReview() {
  $("#reviewPanel").classList.add("hidden");
  reviewQueue = [];
}

function renderKanaChart() {
  $("#kanaChart").innerHTML = `
    <h5>平假名</h5>
    <div class="kana-table">
      ${HIRAGANA.map(([char, reading]) => `<button class="kana-cell" data-speak="${char}">${char}<small>${reading}</small></button>`).join("")}
    </div>
    <h5>片假名</h5>
    <div class="kana-table">
      ${KATAKANA.map(([char, reading]) => `<button class="kana-cell" data-speak="${char}">${char}<small>${reading}</small></button>`).join("")}
    </div>
  `;
}

function kanaPool(mode) {
  if (mode === "hira") return HIRAGANA;
  if (mode === "kata") return KATAKANA;
  return [...HIRAGANA, ...KATAKANA];
}

function pickKana() {
  const pool = kanaPool(currentKanaMode);
  currentKana = pool[Math.floor(Math.random() * pool.length)];
  kanaAnswered = false;
  const [char, reading] = currentKana;
  $("#kanaChar").textContent = char;
  const wrong = shuffle(pool).filter(item => item[1] !== reading).slice(0, 3).map(item => item[1]);
  const options = shuffle([reading, ...wrong]);
  $("#kanaOptions").innerHTML = options.map(option => `<button data-reading="${option}">${option}</button>`).join("");
  $("#kanaFeedback").textContent = "点击读音选项开始";
  $("#quizScore").textContent = `答对 ${state.kanaStats.correct} 题 · 连胜 ${state.kanaStats.streak}`;
}

function renderKana() {
  renderKanaChart();
  const mode = $("#kanaMode .seg-btn.active").dataset.mode || currentKanaMode;
  currentKanaMode = mode;
  if (!currentKana || currentKanaMode !== mode) {
    pickKana();
  }
}

function renderPhrases() {
  const search = $("#phraseSearch").value.trim().toLowerCase();
  const filter = $("#phraseFilter").value;
  const categories = Array.from(new Set(PHRASES.map(phrase => phrase.cat)));
  $("#phraseFilter").innerHTML = `<option value="all">全部场景</option>${categories.map(cat => `<option value="${cat}">${cat}</option>`).join("")}`;
  $("#phraseFilter").value = filter;

  const filtered = PHRASES.filter(phrase => {
    const matchCat = filter === "all" || phrase.cat === filter;
    const haystack = `${phrase.ja} ${phrase.romaji} ${phrase.zh} ${phrase.cat}`.toLowerCase();
    return matchCat && (!search || haystack.includes(search));
  });

  $("#phraseList").innerHTML = filtered.map(phrase => `
    <div class="phrase-row">
      <div class="jp">
        <strong>${phrase.ja}</strong>
        <span>${phrase.romaji}</span>
      </div>
      <div class="zh">${phrase.zh}<span class="tag">${phrase.cat}</span></div>
      <button class="speak-btn" data-speak="${phrase.ja}">播放</button>
    </div>
  `).join("");

  if (!filtered.length) {
    $("#phraseList").innerHTML = `<p class="empty-state">没有找到匹配的短语</p>`;
  }
}

function handleQuizClick(button, type) {
  if (button.disabled) return;
  const feedback = $(`[data-feedback="${type}"]`);
  const selected = type === "song" ? button.dataset.answer : Number(button.dataset.answer);
  const isCorrect = type === "song" ? selected === activeSong.answer : activeAnime.answer === selected;

  const options = button.closest(".quiz-options").querySelectorAll("button");
  options.forEach(option => option.disabled = true);
  button.classList.add(isCorrect ? "correct" : "wrong");
  if (!isCorrect) {
    const rightButton = Array.from(options).find(option => (type === "song" ? option.dataset.answer === activeSong.answer : Number(option.dataset.answer) === activeAnime.answer));
    if (rightButton) rightButton.classList.add("correct");
  }
  feedback.textContent = isCorrect ? "正确。这句话的意思你已经掌握了。" : "再想一下：答案已经在提示里标出来，多听两遍。";
}

document.addEventListener("click", event => {
  const lineStepButton = event.target.closest("[data-line-step]");
  if (lineStepButton && activeSong) {
    lyricIndex += Number(lineStepButton.dataset.lineStep);
    renderActiveLyricLine();
    return;
  }

  const lineSpeakButton = event.target.closest("[data-line-speak]");
  if (lineSpeakButton && activeSong) {
    const lines = activeSong.lines || [];
    if (lines[lyricIndex]) speak(lines[lyricIndex].ja);
    return;
  }

  const jumpButton = event.target.closest("[data-jump]");
  if (jumpButton) {
    switchView(jumpButton.dataset.jump);
    return;
  }

  const speakButton = event.target.closest("[data-speak]");
  if (speakButton) {
    speak(speakButton.dataset.speak);
    return;
  }

  const songTargetButton = event.target.closest("[data-song-target]");
  if (songTargetButton) {
    const target = SONGS.find(song => song.id === songTargetButton.dataset.songTarget);
    if (target) {
      activeSong = target;
      lyricIndex = 0;
      switchView("songs");
      renderSongs();
    }
    return;
  }

  const queueButton = event.target.closest("[data-queue-track]");
  if (queueButton) {
    addTrackToCustom(Number(queueButton.dataset.queueTrack));
    return;
  }

  const fetchLyricsButton = event.target.closest("[data-fetch-lyrics]");
  if (fetchLyricsButton) {
    fetchLyricsForTrack(Number(fetchLyricsButton.dataset.fetchLyrics));
    return;
  }

  const searchSongButton = event.target.closest("[data-search-song]");
  if (searchSongButton) {
    handleSearchSong(Number(searchSongButton.dataset.searchSong));
    return;
  }

  const neteaseOpenButton = event.target.closest("[data-netease-open]");
  if (neteaseOpenButton) {
    const id = neteaseOpenButton.dataset.neteaseOpen;
    if (id) window.location.href = `orpheus://song/${id}?autoplay=1`;
    return;
  }

  const customOpenButton = event.target.closest("[data-custom-open]");
  if (customOpenButton) {
    const song = state.customSongs.find(item => item.id === customOpenButton.dataset.customOpen);
    if (song) {
      activeSong = song;
      lyricIndex = 0;
      switchView("songs");
      renderSongs();
    }
    return;
  }

  const editCustomButton = event.target.closest("[data-edit-custom]");
  if (editCustomButton) {
    const song = state.customSongs.find(item => item.id === editCustomButton.dataset.editCustom);
    if (song) {
      editingCustomId = song.id;
      $("#newSongTitle").value = song.title;
      $("#newSongArtist").value = song.artist;
      $("#newSongNeteaseId").value = song.neteaseId || "";
      $("#lyricImportInput").value = (song.lines || []).map(line => [line.ja, line.romaji, line.zh].join(" | ")).join("\n");
      $("#grammarNote").value = song.grammar && !song.grammar.startsWith("还没有学习笔记") ? song.grammar : "";
      switchView("sync");
      const importPanel = document.querySelector(".import-panel");
      if (importPanel) importPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  }

  const removeCustomButton = event.target.closest("[data-remove-custom]");
  if (removeCustomButton) {
    const id = removeCustomButton.dataset.removeCustom;
    if (window.confirm("确定删除这首导入歌曲吗？")) {
      state.customSongs = state.customSongs.filter(song => song.id !== id);
      if (activeSong && activeSong.id === id) activeSong = null;
      saveState();
      renderSync();
      renderSongs();
      toast("已删除");
    }
    return;
  }

  const songCard = event.target.closest("[data-song-id]");
  if (songCard) {
    activeSong = SONGS.find(song => song.id === songCard.dataset.songId);
    lyricIndex = 0;
    renderSongs();
    return;
  }

  const animeCard = event.target.closest("[data-anime-id]");
  if (animeCard) {
    activeAnime = ANIME_SCENES.find(scene => scene.id === animeCard.dataset.animeId);
    renderAnime();
    return;
  }

  const completeButton = event.target.closest("[data-day]");
  if (completeButton) {
    const day = completeButton.dataset.day;
    state.completedDays[day] = !state.completedDays[day];
    saveState();
    renderPlan();
    renderDashboard();
    toast(state.completedDays[day] ? `Day ${day} 已标记完成` : `已取消 Day ${day}`);
    return;
  }

  const markButton = event.target.closest("[data-word]");
  if (markButton) {
    const word = markButton.dataset.word;
    if (state.knownWords.includes(word)) {
      state.knownWords = state.knownWords.filter(id => id !== word);
    } else {
      state.knownWords.push(word);
    }
    saveState();
    renderWords();
    renderDashboard();
    toast(state.knownWords.includes(word) ? `${word} 已标记掌握` : `已把 ${word} 放回待复习`);
    return;
  }

  const quizButton = event.target.closest(".quiz-options button");
  if (quizButton) {
    const type = quizButton.dataset.type;
    handleQuizClick(quizButton, type);
    return;
  }

  const kanaCell = event.target.closest(".kana-cell");
  if (kanaCell) {
    speak(kanaCell.dataset.speak);
    return;
  }

  const kanaOption = event.target.closest("#kanaOptions button");
  if (kanaOption && !kanaAnswered) {
    kanaAnswered = true;
    const correct = kanaOption.dataset.reading === currentKana[1];
    const options = $$("#kanaOptions button");
    options.forEach(option => option.disabled = true);
    if (correct) {
      kanaOption.classList.add("correct");
      state.kanaStats.correct += 1;
      state.kanaStats.streak += 1;
      state.kanaStats.best = Math.max(state.kanaStats.best, state.kanaStats.streak);
      $("#kanaFeedback").textContent = "正确！继续下一题。";
      speak(currentKana[0]);
    } else {
      kanaOption.classList.add("wrong");
      state.kanaStats.streak = 0;
      $("#kanaFeedback").textContent = `这是 ${currentKana[0]}（${currentKana[1]}），再听一次。`;
      const right = options.find(option => option.dataset.reading === currentKana[1]);
      if (right) right.classList.add("correct");
    }
    saveState();
    $("#quizScore").textContent = `答对 ${state.kanaStats.correct} 题 · 连胜 ${state.kanaStats.streak}`;
    return;
  }
});

$("#tripDate").addEventListener("change", event => {
  if (event.target.value) {
    state.tripDate = event.target.value;
    saveState();
    renderAll();
    toast("出发日期已更新，计划已重新生成");
  }
});

$$(".tab-btn").forEach(button => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

$("#todayCta").addEventListener("click", () => {
  const plan = buildPlan();
  const entry = plan[todayPlanIndex(plan)];
  switchView(entry.done ? "songs" : "plan");
});

$("#playSongAudio").addEventListener("click", () => {
  if (!activeSong) return;
  const lines = activeSong.lines || [];
  const line = lines[lyricIndex] || { ja: activeSong.lyric };
  speak(line.ja);
});

$("#openYoutube").addEventListener("click", () => {
  if (!activeSong) return;
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(activeSong.search)}`;
  window.open(url, "_blank", "noopener");
});

$("#openNeteaseApp").addEventListener("click", () => {
  if (!activeSong) return;
  if (activeSong.neteaseId) {
    window.location.href = `orpheus://song/${activeSong.neteaseId}?autoplay=1`;
  } else {
    window.location.href = "orpheus://";
    toast("网易云已打开，请手动搜索这首歌");
  }
});

$("#openNeteaseWeb").addEventListener("click", () => {
  if (!activeSong) return;
  const url = `https://music.163.com/#/search/m/?s=${encodeURIComponent(activeSong.search)}&type=1`;
  window.open(url, "_blank", "noopener");
});

$("#grammarFilter").addEventListener("change", renderGrammar);

$("#newSongTitle").addEventListener("input", () => {
  editingCustomId = null;
});

$("#syncPlaylist").addEventListener("click", syncPlaylist);
$("#importSongList").addEventListener("click", importSongListText);
$("#importLyrics").addEventListener("click", importLyricsFromForm);
$("#searchSong").addEventListener("click", searchSongs);
$("#songSearchInput").addEventListener("keydown", event => {
  if (event.key === "Enter") searchSongs();
});
$("#clearSync").addEventListener("click", () => {
  lastSyncedTracks = [];
  renderSyncTracks();
  $("#playlistStatus").textContent = "结果已清空。";
});

$("#startAnimeQuiz").addEventListener("click", () => {
  switchView("anime");
  renderAnimeLesson();
});

$("#startReview").addEventListener("click", startReview);

$("#closeReview").addEventListener("click", closeReview);
$("#flipCard").addEventListener("click", flipReviewCard);
$("#againCard").addEventListener("click", () => advanceReview(false));
$("#knowCard").addEventListener("click", () => advanceReview(true));

$("#wordSearch").addEventListener("input", renderWords);
$("#wordFilter").addEventListener("change", renderWords);
$("#resetWords").addEventListener("click", () => {
  if (window.confirm("确定清空所有单词掌握标记吗？")) {
    state.knownWords = [];
    saveState();
    renderWords();
    renderDashboard();
    toast("单词进度已重置");
  }
});

$("#kanaMode").addEventListener("click", event => {
  const button = event.target.closest(".seg-btn");
  if (!button) return;
  $$(".seg-btn").forEach(btn => btn.classList.toggle("active", btn === button));
  currentKanaMode = button.dataset.mode;
  pickKana();
});

$("#nextKana").addEventListener("click", pickKana);

$("#playAllKana").addEventListener("click", () => {
  const text = HIRAGANA.map(item => item[0]).join(" ") + " " + KATAKANA.map(item => item[0]).join(" ");
  speak(text);
});

$("#phraseSearch").addEventListener("input", renderPhrases);
$("#phraseFilter").addEventListener("change", renderPhrases);

$("#installApp").addEventListener("click", async () => {
  if (!deferredInstallPrompt) {
    toast("请在浏览器菜单中选择“添加到主屏幕”");
    return;
  }
  deferredInstallPrompt.prompt();
  const result = await deferredInstallPrompt.userChoice;
  if (result.outcome === "accepted") {
    $("#installApp").classList.add("hidden");
    toast("App 已安装");
  }
  deferredInstallPrompt = null;
});

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  $("#installApp").classList.remove("hidden");
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  $("#installApp").classList.add("hidden");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

window.addEventListener("beforeunload", saveState);

$("#tripDate").value = state.tripDate;
renderAll();
switchView(state.currentView || "songs");
