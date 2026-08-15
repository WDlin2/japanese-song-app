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
  },
  {
    id: "kudasai",
    pattern: "〜てください",
    title: "请（做）…",
    level: "N5",
    song: "歌词常见",
    songId: "lemon",
    explain: "动词て形 + ください，表示礼貌地请求对方“请做…”。歌词和旅行中都高频出现。",
    examples: [
      { ja: "ちょっと待ってください。", romaji: "Chotto matte kudasai.", zh: "请稍等。" },
      { ja: "ここに座ってください。", romaji: "Koko ni suwatte kudasai.", zh: "请坐在这里。" }
    ]
  },
  {
    id: "teimasu",
    pattern: "〜ています",
    title: "正在… / 一直…",
    level: "N5",
    song: "歌词常见",
    songId: "lemon",
    explain: "动词て形 + います 表示动作正在进行，或某种状态持续到现在。",
    examples: [
      { ja: "今、音楽を聴いています。", romaji: "Ima, ongaku o kiite imasu.", zh: "我正在听音乐。" },
      { ja: "ずっと待っています。", romaji: "Zutto matte imasu.", zh: "一直在等。" }
    ]
  },
  {
    id: "masenka",
    pattern: "〜ませんか",
    title: "要不要…？",
    level: "N5",
    song: "歌词常见",
    songId: "lemon",
    explain: "动词ます形 + ませんか，是日语里自然的“邀请/提议”方式，比ましょう更口语。",
    examples: [
      { ja: "一緒に帰りませんか。", romaji: "Issho ni kaerimasen ka.", zh: "要不要一起回去？" },
      { ja: "コーヒーを飲みませんか。", romaji: "Kouhii o nomimasen ka.", zh: "要不要喝杯咖啡？" }
    ]
  },
  {
    id: "mashou",
    pattern: "〜ましょう",
    title: "一起…吧",
    level: "N5",
    song: "歌词常见",
    songId: "lemon",
    explain: "动词ます形 + ましょう，表示“我们…吧”，用于提议一起做某事，语气积极。",
    examples: [
      { ja: "さあ、行きましょう。", romaji: "Saa, ikimashou.", zh: "好，走吧。" },
      { ja: "明日もう一度考えましょう。", romaji: "Ashita mou ichido kangaemashou.", zh: "明天再想一次吧。" }
    ]
  },
  {
    id: "kara",
    pattern: "〜から",
    title: "因为… / 从…",
    level: "N5",
    song: "歌词常见",
    songId: "lemon",
    explain: "から 有两个常用意思：接在句尾表示“因为、所以”，接在名词后表示起点“从…”。歌词里两种都很常见。",
    examples: [
      { ja: "疲れたから、休みます。", romaji: "Tsukareta kara, yasumimasu.", zh: "因为累了，所以要休息。" },
      { ja: "東京から来ました。", romaji: "Toukyou kara kimashita.", zh: "我从东京来。" }
    ]
  },
  {
    id: "made",
    pattern: "〜まで",
    title: "到…为止",
    level: "N5",
    song: "歌词常见",
    songId: "lemon",
    explain: "まで 表示时间或地点的终点，“到…为止”，常和 から 搭配成“从…到…”。",
    examples: [
      { ja: "駅まで歩きましょう。", romaji: "Eki made arukimashou.", zh: "走到车站吧。" },
      { ja: "7時まで待ちます。", romaji: "Shichiji made machimasu.", zh: "等到 7 点。" }
    ]
  },
  {
    id: "keredo",
    pattern: "〜けど",
    title: "虽然…但是",
    level: "N5",
    song: "歌词常见",
    songId: "lemon",
    explain: "けど（けれど）连接两个相反或转折的内容，意思是“虽然…但是…”，口语里也常用来软化和结尾。",
    examples: [
      { ja: "行きたいけど、時間がない。", romaji: "Ikitai kedo, jikan ga nai.", zh: "想去，但是没时间。" },
      { ja: "高いけど、買いました。", romaji: "Takai kedo, kaimashita.", zh: "虽然贵，但还是买了。" }
    ]
  },
  {
    id: "node",
    pattern: "〜ので",
    title: "因为…（客观）",
    level: "N4",
    song: "歌词常见",
    songId: "lemon",
    explain: "ので 也表示“因为”，但语气更客观、更礼貌，常用在解释原因、说明情况时。",
    examples: [
      { ja: "雨が降っているので、家にいます。", romaji: "Ame ga futte iru node, ie ni imasu.", zh: "因为在下雨，所以待在家里。" },
      { ja: "時間がないので、急ぎます。", romaji: "Jikan ga nai node, isogimasu.", zh: "因为没时间，所以要赶。" }
    ]
  },
  {
    id: "nara",
    pattern: "〜なら",
    title: "如果…的话",
    level: "N5",
    song: "歌词常见",
    songId: "lemon",
    explain: "なら 接在名词或句子后表示假设“如果…的话”，比 ならば 更口语，日常对话里更常用。",
    examples: [
      { ja: "行くなら、私も行く。", romaji: "Iku nara, watashi mo iku.", zh: "如果你去，我也去。" },
      { ja: "安いなら、買います。", romaji: "Yasui nara, kaimasu.", zh: "如果便宜的话就买。" }
    ]
  },
  {
    id: "kamoshirenai",
    pattern: "〜かもしれない",
    title: "也许…",
    level: "N4",
    song: "歌词常见",
    songId: "lemon",
    explain: "かもしれない 表示不确定的推测“也许、可能”，比 でしょう 更没把握，常带不安或担忧。",
    examples: [
      { ja: "明日は雨かもしれない。", romaji: "Ashita wa ame kamo shirenai.", zh: "明天也许会下雨。" },
      { ja: "彼は来ないかもしれない。", romaji: "Kare wa konai kamo shirenai.", zh: "他也许不来了。" }
    ]
  },
  {
    id: "dake",
    pattern: "〜だけ",
    title: "只…",
    level: "N5",
    song: "歌词常见",
    songId: "lemon",
    explain: "だけ 表示限定“只有…、只做…”，歌词里常用来表达“只为你”这类专一的情感。",
    examples: [
      { ja: "少しだけ話しました。", romaji: "Sukoshi dake hanashimashita.", zh: "只聊了一点点。" },
      { ja: "君だけを見つめる。", romaji: "Kimi dake o mitsumeru.", zh: "只注视着你。" }
    ]
  },
  {
    id: "shika",
    pattern: "〜しか（ない）",
    title: "只（有）…",
    level: "N4",
    song: "歌词常见",
    songId: "lemon",
    explain: "しか 后面必须搭配否定，表示“只有…”，强调数量极少或别无选择。",
    examples: [
      { ja: "10円しかない。", romaji: "Juu en shika nai.", zh: "只有 10 日元。" },
      { ja: "君しかいない。", romaji: "Kimi shika inai.", zh: "我只有你。" }
    ]
  },
  {
    id: "yori",
    pattern: "〜より",
    title: "比…",
    level: "N5",
    song: "歌词常见",
    songId: "lemon",
    explain: "より 表示比较“比…更…”，也可以接在“比自己”这类对象后强调程度。",
    examples: [
      { ja: "電車よりバスのほうが速い。", romaji: "Densha yori basu no hou ga hayai.", zh: "比电车，巴士更快。" },
      { ja: "昨日より寒い。", romaji: "Kinou yori samui.", zh: "比昨天冷。" }
    ]
  },
  {
    id: "hodo",
    pattern: "〜ほど",
    title: "…的程度 / 越…",
    level: "N4",
    song: "歌词常见",
    songId: "lemon",
    explain: "ほど 表示程度“像…那样”或“越…越…”，歌词里 どれほど 是高频表达“多么、到什么程度”。",
    examples: [
      { ja: "どれほど好きか。", romaji: "Dorehodo suki ka.", zh: "有多喜欢呢。" },
      { ja: "泣きたいほど嬉しい。", romaji: "Nakitai hodo ureshii.", zh: "高兴到想哭。" }
    ]
  },
  {
    id: "tumori",
    pattern: "〜つもり",
    title: "打算…",
    level: "N5",
    song: "歌词常见",
    songId: "lemon",
    explain: "つもり 表示自己的打算、计划“打算…”，否定形式 つもりはない 表示“没打算…”。",
    examples: [
      { ja: "留学するつもりです。", romaji: "Ryuugaku suru tsumori desu.", zh: "我打算去留学。" },
      { ja: "帰るつもりはない。", romaji: "Kaeru tsumori wa nai.", zh: "不打算回去。" }
    ]
  },
  {
    id: "darou",
    pattern: "〜だろう / でしょう",
    title: "大概…吧",
    level: "N4",
    song: "歌词常见",
    songId: "lemon",
    explain: "だろう（でしょう）表示推测“大概…吧”，歌词里常用来表达对未来的期待或不安。",
    examples: [
      { ja: "明日は晴れるだろう。", romaji: "Ashita wa hareru darou.", zh: "明天应该会晴吧。" },
      { ja: "大丈夫でしょう。", romaji: "Daijoubu deshou.", zh: "应该没问题吧。" }
    ]
  },
  {
    id: "rashii",
    pattern: "〜らしい",
    title: "好像… / 据说…",
    level: "N4",
    song: "歌词常见",
    songId: "lemon",
    explain: "らしい 表示“好像、据说、看样子”，也可以接名词表示“很有…的样子”。",
    examples: [
      { ja: "彼は優しいらしい。", romaji: "Kare wa yasashii rashii.", zh: "他好像很温柔。" },
      { ja: "春らしい天気だ。", romaji: "Haru rashii tenki da.", zh: "很有春天气息的好天气。" }
    ]
  },
  {
    id: "mitai",
    pattern: "〜みたい",
    title: "像…一样",
    level: "N4",
    song: "歌词常见",
    songId: "lemon",
    explain: "みたい 是口语里的比喻“像…一样”，比 ように 更随意，常出现在歌词和动漫台词里。",
    examples: [
      { ja: "夢みたいだ。", romaji: "Yume mitai da.", zh: "像做梦一样。" },
      { ja: "子どもみたいに笑う。", romaji: "Kodomo mitai ni warau.", zh: "像孩子一样笑。" }
    ]
  },
  {
    id: "nagara",
    pattern: "〜ながら",
    title: "一边…一边…",
    level: "N4",
    song: "歌词常见",
    songId: "lemon",
    explain: "动词ます形去掉ます + ながら，表示两个动作同时进行，“一边…一边…”。",
    examples: [
      { ja: "歌いながら歩く。", romaji: "Utainagara aruku.", zh: "一边唱歌一边走。" },
      { ja: "テレビを見ながら食べる。", romaji: "Terebi o minagara taberu.", zh: "边看电视边吃。" }
    ]
  },
  {
    id: "teageru",
    pattern: "〜てあげる",
    title: "为（别人）做…",
    level: "N4",
    song: "歌词常见",
    songId: "lemon",
    explain: "动词て形 + あげる，表示“（我）为别人做…”，是授受关系动词之一。",
    examples: [
      { ja: "手伝ってあげる。", romaji: "Tetsudatte ageru.", zh: "我来帮你。" },
      { ja: "駅まで送ってあげる。", romaji: "Eki made okutte ageru.", zh: "我送你到车站。" }
    ]
  },
  {
    id: "temorau",
    pattern: "〜てもらう",
    title: "请（别人）为我做…",
    level: "N4",
    song: "歌词常见",
    songId: "lemon",
    explain: "动词て形 + もらう，表示“请别人为我做…”或“得到别人为我做的事”。",
    examples: [
      { ja: "先生に教えてもらう。", romaji: "Sensei ni oshiete morau.", zh: "请老师教我。" },
      { ja: "友達に直してもらった。", romaji: "Tomodachi ni naoshite moratta.", zh: "请朋友帮我修好了。" }
    ]
  },
  {
    id: "tekureru",
    pattern: "〜てくれる",
    title: "（别人）为我做…",
    level: "N4",
    song: "歌词常见",
    songId: "lemon",
    explain: "动词て形 + くれる，表示“别人（为我）做…”，强调对方的好意，歌词里常用于感谢。",
    examples: [
      { ja: "友達が助けてくれた。", romaji: "Tomodachi ga tasukete kureta.", zh: "朋友帮了我。" },
      { ja: "君が歌を歌ってくれる。", romaji: "Kimi ga uta o utatte kureru.", zh: "你为我唱歌。" }
    ]
  },
  {
    id: "teoku",
    pattern: "〜ておく",
    title: "事先做好…",
    level: "N4",
    song: "歌词常见",
    songId: "lemon",
    explain: "动词て形 + おく，表示“事先准备好…”，或做完动作后保持结果不变。",
    examples: [
      { ja: "予約しておきます。", romaji: "Yoyaku shite okimasu.", zh: "我事先预约好。" },
      { ja: "メモしておく。", romaji: "Memo shite oku.", zh: "先记下来。" }
    ]
  },
  {
    id: "teshimau",
    pattern: "〜てしまう",
    title: "不知不觉… / 遗憾",
    level: "N4",
    song: "歌词常见",
    songId: "lemon",
    explain: "动词て形 + しまう，表示动作彻底完成，常带“不知不觉就…”或“遗憾、后悔”的语气。",
    examples: [
      { ja: "ケーキを全部食べてしまった。", romaji: "Keeki o zenbu tabete shimatta.", zh: "不小心把蛋糕全吃完了。" },
      { ja: "約束を忘れてしまった。", romaji: "Yakusoku o wasurete shimatta.", zh: "不小心把约定忘了。" }
    ]
  },
  {
    id: "youninaru",
    pattern: "〜ようになる",
    title: "变得能…",
    level: "N4",
    song: "歌词常见",
    songId: "lemon",
    explain: "动词原形/可能形 + ようになる，表示状态的变化“变得能…、开始…”，强调渐进的过程。",
    examples: [
      { ja: "日本語が話せるようになった。", romaji: "Nihongo ga hanaseru you ni natta.", zh: "变得会说日语了。" },
      { ja: "早起きするようになった。", romaji: "Hayaoki suru you ni natta.", zh: "开始早起了。" }
    ]
  },
  {
    id: "tameni",
    pattern: "〜ために",
    title: "为了…",
    level: "N4",
    song: "歌词常见",
    songId: "lemon",
    explain: "ために 表示目的“为了…”，也可以表示原因（书面）。歌词里常出现“为了你、为了梦想”这类句子。",
    examples: [
      { ja: "日本に行くために勉強する。", romaji: "Nihon ni iku tame ni benkyou suru.", zh: "为了去日本而学习。" },
      { ja: "健康のために走る。", romaji: "Kenkou no tame ni hashiru.", zh: "为了健康而跑步。" }
    ]
  },
  {
    id: "dekiru",
    pattern: "〜できる",
    title: "能够…",
    level: "N5",
    song: "歌词常见",
    songId: "lemon",
    explain: "できる 表示“能够、可以、做得到”，也可以直接指“（东西）做好了、完成了”。",
    examples: [
      { ja: "一人でできる。", romaji: "Hitori de dekiru.", zh: "一个人就能做到。" },
      { ja: "泳ぐことができます。", romaji: "Oyogu koto ga dekimasu.", zh: "我会游泳。" }
    ]
  },
  {
    id: "zuni",
    pattern: "〜ずに",
    title: "不…就…",
    level: "N4",
    song: "歌词常见",
    songId: "lemon",
    explain: "动词ない形去掉ない + ずに，表示“不…就（做另一件事）”，书面、歌词常用，语气比 なくて 轻。",
    examples: [
      { ja: "言わずに帰った。", romaji: "Iwazu ni kaetta.", zh: "没说就回去了。" },
      { ja: "見ずに買った。", romaji: "Mizu ni katta.", zh: "没看就买了。" }
    ]
  },
  {
    id: "tara",
    pattern: "〜たら",
    title: "如果…的话（假设）",
    level: "N5",
    song: "歌词常见",
    songId: "lemon",
    explain: "动词た形 + ら 表示假设“如果…的话”，比 なら 更强调动作完成后的条件。",
    examples: [
      { ja: "時間があったら行く。", romaji: "Jikan ga attara iku.", zh: "有时间就去。" },
      { ja: "終わったら知らせて。", romaji: "Owattara shirasete.", zh: "结束后告诉我。" }
    ]
  },
  {
    id: "teii",
    pattern: "〜てもいい",
    title: "可以…",
    level: "N5",
    song: "歌词常见",
    songId: "lemon",
    explain: "动词て形 + もいい 表示许可“可以做…”，疑问句 てもいいですか 是礼貌的请求。",
    examples: [
      { ja: "写真を撮ってもいいですか。", romaji: "Shashin o totte mo ii desu ka.", zh: "可以拍照吗？" },
      { ja: "ここで休んでもいい。", romaji: "Koko de yasunde mo ii.", zh: "可以在这里休息。" }
    ]
  },
  {
    id: "nakereba",
    pattern: "〜なければ（ならない）",
    title: "必须… / 不…的话",
    level: "N4",
    song: "歌词常见",
    songId: "lemon",
    explain: "なければならない 表示“必须…”，なければ 单独用则表示“如果不…（就不行）”。",
    examples: [
      { ja: "早く起きなければ。", romaji: "Hayaku okinakereba.", zh: "不早起不行。" },
      { ja: "行かなければならない。", romaji: "Ikanakereba naranai.", zh: "非去不可。" }
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

const FUNCTION_WORDS = new Set([
  "を", "は", "が", "に", "で", "と", "も", "の", "へ", "や", "か", "よ", "ね", "な",
  "わ", "ぞ", "ぜ", "し", "って", "ん", "だ", "です", "ます", "けど", "けれど",
  "そして", "それで", "だから", "でも", "まで", "から", "だけ", "より", "ほど",
  "ば", "たら", "なら", "に", "の", "が", "で", "も", "と", "を", "は", "へ"
]);
const COMMON_GLOSS = {
  "私": { kana: "わたし", zh: "我" },
  "僕": { kana: "ぼく", zh: "我（男性）" },
  "俺": { kana: "おれ", zh: "我（男性·随意）" },
  "君": { kana: "きみ", zh: "你" },
  "あなた": { kana: "あなた", zh: "你" },
  "彼": { kana: "かれ", zh: "他" },
  "彼女": { kana: "かのじょ", zh: "她 / 女朋友" },
  "世界": { kana: "せかい", zh: "世界" },
  "心": { kana: "こころ", zh: "心" },
  "夢": { kana: "ゆめ", zh: "梦" },
  "愛": { kana: "あい", zh: "爱" },
  "光": { kana: "ひかり", zh: "光" },
  "夜": { kana: "よる", zh: "夜晚" },
  "空": { kana: "そら", zh: "天空" },
  "星": { kana: "ほし", zh: "星星" },
  "月": { kana: "つき", zh: "月亮 / 月份" },
  "海": { kana: "うみ", zh: "大海" },
  "風": { kana: "かぜ", zh: "风" },
  "雨": { kana: "あめ", zh: "雨" },
  "涙": { kana: "なみだ", zh: "眼泪" },
  "声": { kana: "こえ", zh: "声音" },
  "歌": { kana: "うた", zh: "歌" },
  "言葉": { kana: "ことば", zh: "语言 / 话语" },
  "時間": { kana: "じかん", zh: "时间" },
  "今": { kana: "いま", zh: "现在" },
  "今日": { kana: "きょう", zh: "今天" },
  "明日": { kana: "あした", zh: "明天" },
  "昨日": { kana: "きのう", zh: "昨天" },
  "未来": { kana: "みらい", zh: "未来" },
  "永遠": { kana: "えいえん", zh: "永远" },
  "二人": { kana: "ふたり", zh: "两个人" },
  "一人": { kana: "ひとり", zh: "一个人" },
  "出会い": { kana: "であい", zh: "相遇" },
  "別れ": { kana: "わかれ", zh: "离别" },
  "思い出": { kana: "おもいで", zh: "回忆" },
  "思い出して": { kana: "おもいだして", zh: "想起（思い出す 的て形）" },
  "思い出す": { kana: "おもいだす", zh: "想起" },
  "想い": { kana: "おもい", zh: "思念" },
  "記憶": { kana: "きおく", zh: "记忆" },
  "笑顔": { kana: "えがお", zh: "笑容" },
  "瞳": { kana: "ひとみ", zh: "眼眸" },
  "命": { kana: "いのち", zh: "生命" },
  "手": { kana: "て", zh: "手" },
  "目": { kana: "め", zh: "眼睛" },
  "胸": { kana: "むね", zh: "胸口" },
  "体": { kana: "からだ", zh: "身体" },
  "顔": { kana: "かお", zh: "脸" },
  "頭": { kana: "あたま", zh: "头" },
  "名前": { kana: "なまえ", zh: "名字" },
  "場所": { kana: "ばしょ", zh: "地方" },
  "道": { kana: "みち", zh: "道路" },
  "街": { kana: "まち", zh: "街道 / 城镇" },
  "町": { kana: "まち", zh: "城镇" },
  "家": { kana: "いえ", zh: "家" },
  "景色": { kana: "けしき", zh: "景色" },
  "花": { kana: "はな", zh: "花" },
  "太陽": { kana: "たいよう", zh: "太阳" },
  "雲": { kana: "くも", zh: "云" },
  "雪": { kana: "ゆき", zh: "雪" },
  "春": { kana: "はる", zh: "春天" },
  "夏": { kana: "なつ", zh: "夏天" },
  "秋": { kana: "あき", zh: "秋天" },
  "冬": { kana: "ふゆ", zh: "冬天" },
  "朝": { kana: "あさ", zh: "早晨" },
  "夕方": { kana: "ゆうがた", zh: "傍晚" },
  "始まり": { kana: "はじまり", zh: "开始" },
  "終わり": { kana: "おわり", zh: "结束" },
  "最後": { kana: "さいご", zh: "最后" },
  "最初": { kana: "さいしょ", zh: "最初" },
  "自分": { kana: "じぶん", zh: "自己" },
  "友達": { kana: "ともだち", zh: "朋友" },
  "家族": { kana: "かぞく", zh: "家人" },
  "母": { kana: "はは", zh: "妈妈" },
  "父": { kana: "ちち", zh: "爸爸" },
  "子供": { kana: "こども", zh: "孩子" },
  "大人": { kana: "おとな", zh: "大人" },
  "人": { kana: "ひと", zh: "人" },
  "人生": { kana: "じんせい", zh: "人生" },
  "毎日": { kana: "まいにち", zh: "每天" },
  "一瞬": { kana: "いっしゅん", zh: "一瞬间" },
  "瞬間": { kana: "しゅんかん", zh: "瞬间" },
  "少し": { kana: "すこし", zh: "一点" },
  "全部": { kana: "ぜんぶ", zh: "全部" },
  "何": { kana: "なに", zh: "什么" },
  "誰": { kana: "だれ", zh: "谁" },
  "どこ": { kana: "どこ", zh: "哪里" },
  "いつ": { kana: "いつ", zh: "什么时候" },
  "なぜ": { kana: "なぜ", zh: "为什么" },
  "どうして": { kana: "どうして", zh: "为什么" },
  "ずっと": { kana: "ずっと", zh: "一直" },
  "もっと": { kana: "もっと", zh: "更加" },
  "きっと": { kana: "きっと", zh: "一定" },
  "たぶん": { kana: "たぶん", zh: "大概" },
  "絶対": { kana: "ぜったい", zh: "绝对" },
  "本当に": { kana: "ほんとうに", zh: "真的" },
  "とても": { kana: "とても", zh: "非常" },
  "すごい": { kana: "すごい", zh: "厉害" },
  "素敵": { kana: "すてき", zh: "很棒" },
  "優しい": { kana: "やさしい", zh: "温柔" },
  "強い": { kana: "つよい", zh: "强壮 / 强" },
  "弱い": { kana: "よわい", zh: "弱" },
  "高い": { kana: "たかい", zh: "高 / 贵" },
  "低い": { kana: "ひくい", zh: "低" },
  "広い": { kana: "ひろい", zh: "宽广" },
  "新しい": { kana: "あたらしい", zh: "新的" },
  "古い": { kana: "ふるい", zh: "旧的" },
  "白い": { kana: "しろい", zh: "白色" },
  "黒い": { kana: "くろい", zh: "黑色" },
  "赤い": { kana: "あかい", zh: "红色" },
  "青い": { kana: "あおい", zh: "蓝色" },
  "楽しい": { kana: "たのしい", zh: "开心" },
  "悲しい": { kana: "かなしい", zh: "悲伤" },
  "嬉しい": { kana: "うれしい", zh: "高兴" },
  "寂しい": { kana: "さびしい", zh: "寂寞" },
  "怖い": { kana: "こわい", zh: "可怕" },
  "暑い": { kana: "あつい", zh: "（天气）热" },
  "寒い": { kana: "さむい", zh: "冷" },
  "冷たい": { kana: "つめたい", zh: "（物体）冰冷" },
  "美味しい": { kana: "おいしい", zh: "好吃" },
  "早い": { kana: "はやい", zh: "早" },
  "遅い": { kana: "おそい", zh: "晚 / 慢" },
  "大きい": { kana: "おおきい", zh: "大" },
  "小さい": { kana: "ちいさい", zh: "小" },
  "長い": { kana: "ながい", zh: "长" },
  "短い": { kana: "みじかい", zh: "短" },
  "好き": { kana: "すき", zh: "喜欢" },
  "嫌い": { kana: "きらい", zh: "讨厌" },
  "大切": { kana: "たいせつ", zh: "重要" },
  "大丈夫": { kana: "だいじょうぶ", zh: "没关系 / 没问题" },
  "元気": { kana: "げんき", zh: "精神 / 健康" },
  "一緒に": { kana: "いっしょに", zh: "一起" },
  "気持ち": { kana: "きもち", zh: "心情" },
  "気分": { kana: "きぶん", zh: "心情 / 气氛" },
  "頑張る": { kana: "がんばる", zh: "加油 / 努力" },
  "アイドル": { kana: "アイドル", zh: "偶像" },
  "ハート": { kana: "ハート", zh: "心" },
  "ラブ": { kana: "ラブ", zh: "爱" },
  "ドリーム": { kana: "ドリーム", zh: "梦想" },
  "ストーリー": { kana: "ストーリー", zh: "故事" },
  "ステージ": { kana: "ステージ", zh: "舞台" },
  "メッセージ": { kana: "メッセージ", zh: "信息" },
  "セカイ": { kana: "セカイ", zh: "世界" },
  "ある": { kana: "ある", zh: "有（物）" },
  "あった": { kana: "あった", zh: "有过（ある 的过去式）" },
  "いる": { kana: "いる", zh: "有（人） / 在" },
  "いて": { kana: "いて", zh: "在（いる 的て形）" },
  "いた": { kana: "いた", zh: "在过（いる 的过去式）" },
  "いない": { kana: "いない", zh: "不在" },
  "する": { kana: "する", zh: "做" },
  "して": { kana: "して", zh: "做（する 的て形）" },
  "した": { kana: "した", zh: "做了（する 的过去式）" },
  "しよう": { kana: "しよう", zh: "做吧（する 的意志形）" },
  "なる": { kana: "なる", zh: "成为" },
  "なって": { kana: "なって", zh: "成为（なる 的て形）" },
  "なった": { kana: "なった", zh: "成为了（なる 的过去式）" },
  "行く": { kana: "いく", zh: "去" },
  "行って": { kana: "いって", zh: "去（行く 的て形）" },
  "行った": { kana: "いった", zh: "去了（行く 的过去式）" },
  "来る": { kana: "くる", zh: "来" },
  "来て": { kana: "きて", zh: "来（来る 的て形）" },
  "来た": { kana: "きた", zh: "来了（来る 的过去式）" },
  "見る": { kana: "みる", zh: "看" },
  "見て": { kana: "みて", zh: "看（見る 的て形）" },
  "見た": { kana: "みた", zh: "看了（見る 的过去式）" },
  "見える": { kana: "みえる", zh: "看得见" },
  "聞く": { kana: "きく", zh: "听 / 问" },
  "聞いて": { kana: "きいて", zh: "听（聞く 的て形）" },
  "聞いた": { kana: "きいた", zh: "听了（聞く 的过去式）" },
  "聞こえる": { kana: "きこえる", zh: "听得见" },
  "言う": { kana: "いう", zh: "说" },
  "言って": { kana: "いって", zh: "说（言う 的て形）" },
  "言った": { kana: "いった", zh: "说了（言う 的过去式）" },
  "思う": { kana: "おもう", zh: "想 / 觉得" },
  "思って": { kana: "おもって", zh: "想着（思う 的て形）" },
  "思った": { kana: "おもった", zh: "想了（思う 的过去式）" },
  "泣く": { kana: "なく", zh: "哭" },
  "泣いて": { kana: "ないて", zh: "哭（泣く 的て形）" },
  "泣いた": { kana: "ないた", zh: "哭了（泣く 的过去式）" },
  "笑う": { kana: "わらう", zh: "笑" },
  "笑って": { kana: "わらって", zh: "笑（笑う 的て形）" },
  "笑った": { kana: "わらった", zh: "笑了（笑う 的过去式）" },
  "歌う": { kana: "うたう", zh: "唱歌" },
  "歌って": { kana: "うたって", zh: "唱（歌う 的て形）" },
  "歌った": { kana: "うたった", zh: "唱了（歌う 的过去式）" },
  "待つ": { kana: "まつ", zh: "等待" },
  "待って": { kana: "まって", zh: "等（待つ 的て形）" },
  "待った": { kana: "まった", zh: "等了（待つ 的过去式）" },
  "帰る": { kana: "かえる", zh: "回去 / 回家" },
  "帰って": { kana: "かえって", zh: "回（帰る 的て形）" },
  "帰った": { kana: "かえった", zh: "回去了（帰る 的过去式）" },
  "忘れる": { kana: "わすれる", zh: "忘记" },
  "忘れて": { kana: "わすれて", zh: "忘（忘れる 的て形）" },
  "忘れた": { kana: "わすれた", zh: "忘了（忘れる 的过去式）" },
  "忘れない": { kana: "わすれない", zh: "不忘（忘れる 的否定）" },
  "覚える": { kana: "おぼえる", zh: "记住" },
  "覚えて": { kana: "おぼえて", zh: "记住（覚える 的て形）" },
  "覚えた": { kana: "おぼえた", zh: "记住了（覚える 的过去式）" },
  "会う": { kana: "あう", zh: "见面" },
  "会って": { kana: "あって", zh: "见面（会う 的て形）" },
  "会った": { kana: "あった", zh: "见面了（会う 的过去式）" },
  "出会う": { kana: "であう", zh: "相遇" },
  "出会って": { kana: "であって", zh: "相遇（出会う 的て形）" },
  "食べる": { kana: "たべる", zh: "吃" },
  "食べて": { kana: "たべて", zh: "吃（食べる 的て形）" },
  "食べた": { kana: "たべた", zh: "吃了（食べる 的过去式）" },
  "飲む": { kana: "のむ", zh: "喝" },
  "飲んで": { kana: "のんで", zh: "喝（飲む 的て形）" },
  "飲んだ": { kana: "のんだ", zh: "喝了（飲む 的过去式）" },
  "買う": { kana: "かう", zh: "买" },
  "買って": { kana: "かって", zh: "买（買う 的て形）" },
  "買った": { kana: "かった", zh: "买了（買う 的过去式）" },
  "作る": { kana: "つくる", zh: "制作 / 做" },
  "作って": { kana: "つくって", zh: "做（作る 的て形）" },
  "作った": { kana: "つくった", zh: "做了（作る 的过去式）" },
  "生きる": { kana: "いきる", zh: "活着" },
  "信じる": { kana: "しんじる", zh: "相信" },
  "伝える": { kana: "つたえる", zh: "传达" },
  "守る": { kana: "まもる", zh: "守护" },
  "輝く": { kana: "かがやく", zh: "闪耀" },
  "光る": { kana: "ひかる", zh: "发光" },
  "揺れる": { kana: "ゆれる", zh: "摇曳" },
  "流れる": { kana: "ながれる", zh: "流淌" },
  "溢れる": { kana: "あふれる", zh: "溢出" },
  "咲く": { kana: "さく", zh: "（花）开" },
  "浮かぶ": { kana: "うかぶ", zh: "浮现" },
  "落ちる": { kana: "おちる", zh: "坠落 / 落下" },
  "消える": { kana: "きえる", zh: "消失" },
  "変わる": { kana: "かわる", zh: "变化" },
  "戻る": { kana: "もどる", zh: "返回" },
  "別れる": { kana: "わかれる", zh: "分别" },
  "踊る": { kana: "おどる", zh: "跳舞" },
  "走る": { kana: "はしる", zh: "跑" },
  "飛ぶ": { kana: "とぶ", zh: "飞" },
  "歩く": { kana: "あるく", zh: "步行" },
  "探す": { kana: "さがす", zh: "寻找" },
  "考える": { kana: "かんがえる", zh: "思考" },
  "感じる": { kana: "かんじる", zh: "感受" },
  "届く": { kana: "とどく", zh: "到达 / 送达" },
  "届ける": { kana: "とどける", zh: "送到" },
  "抱きしめる": { kana: "だきしめる", zh: "拥抱" },
  "続ける": { kana: "つづける", zh: "继续" },
  "やめる": { kana: "やめる", zh: "放弃 / 停止" },
  "始める": { kana: "はじめる", zh: "开始（动作）" },
  "終わる": { kana: "おわる", zh: "结束" },
  "決める": { kana: "きめる", zh: "决定" },
  "選ぶ": { kana: "えらぶ", zh: "选择" },
  "見つける": { kana: "みつける", zh: "找到" },
  "呼ぶ": { kana: "よぶ", zh: "叫" },
  "答える": { kana: "こたえる", zh: "回答" },
  "わかる": { kana: "わかる", zh: "明白 / 懂" },
  "できる": { kana: "できる", zh: "能 / 会" },
  "欲しい": { kana: "ほしい", zh: "想要" },
  "必要": { kana: "ひつよう", zh: "必要" },
  "いっぱい": { kana: "いっぱい", zh: "满满的 / 很多" },
  "たくさん": { kana: "たくさん", zh: "很多" },
  "もう一度": { kana: "もういちど", zh: "再一次" },
  "ならば": { kana: "ならば", zh: "如果是…的话" },
  "こと": { kana: "こと", zh: "事情 /（名词化）" },
  "もの": { kana: "もの", zh: "东西 / 事物" },
  "とき": { kana: "とき", zh: "时候" },
  "ため": { kana: "ため", zh: "为了 / 因为" },
  "よう": { kana: "よう", zh: "样子 / 好像" },
  "まま": { kana: "まま", zh: "保持原样" },
  "くらい": { kana: "くらい", zh: "大约 / 程度" },
  "ぐらい": { kana: "ぐらい", zh: "大约 / 程度" }
};

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
let utatenFetching = false;
let busyCount = 0;

function setBusy(active) {
  busyCount = Math.max(0, busyCount + (active ? 1 : -1));
  const bar = document.getElementById("busyBar");
  if (bar) bar.classList.toggle("active", busyCount > 0);
}

function escapeHtml(text) {
  return String(text == null ? "" : text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function cacheWord(token, info) {
  state.wordCache[token] = info;
  const keys = Object.keys(state.wordCache);
  if (keys.length > 1500) {
    keys.slice(0, keys.length - 1500).forEach(key => delete state.wordCache[key]);
  }
}

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
  const proofreadTitle = $("#proofreadTitle");
  if (proofreadTitle) proofreadTitle.textContent = activeSong.proofread
    ? `《${activeSong.title}》已校对 ${activeSong.lines ? activeSong.lines.filter(line => line.proofread).length : 0}/${activeSong.lines ? activeSong.lines.length : 0} 行，可重复校对`
    : `为《${activeSong.title}》校对发音`;
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
        <p class="romaji" id="activeLineRomaji"></p>
        <div class="badge-row" id="lineBadge"></div>
        <p class="trans" id="activeLineZh">${activeSong.zh}</p>
        <div class="word-chips" id="activeLineWords"></div>
        <div class="line-grammar" id="lineGrammar"></div>
        <button class="speak-btn" data-line-speak>朗读这句</button>
      </div>
    </div>
    <div class="lesson-grid">
      <div class="lesson-box">
        <h5>单词${activeSong.vocab && activeSong.vocab.length ? `（${activeSong.vocab.filter(v => v.verified !== false).length}/${activeSong.vocab.length} 已确认读音）` : ""}</h5>
        ${activeSong.vocab && activeSong.vocab.length ? activeSong.vocab.map(v => `
          <div class="vocab-row">
            <strong>${escapeHtml(v.ja)}</strong>
            <span>${escapeHtml(v.kana || "…")}${v.verified === false ? " ?" : ""}</span>
            <span>${escapeHtml(v.zh)}</span>
            ${activeSong.isCustom ? `<button class="kana-edit-btn" data-edit-kana="${escapeHtml(v.ja)}" title="手动修正假名">✎</button>` : ""}
          </div>
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
  maybeAutoFetchUtaTen();
}

function renderActiveLyricLine() {
  const lines = activeSong.lines || [];
  if (!lines.length) return;
  if (lyricIndex < 0) lyricIndex = 0;
  if (lyricIndex >= lines.length) lyricIndex = lines.length - 1;
  const line = lines[lyricIndex];
  const isCustom = Boolean(activeSong && activeSong.isCustom);
  $("#activeLineJa").textContent = line.ja;
  $("#activeLineRomaji").textContent = line.romaji || "";
  $("#activeLineZh").textContent = line.zh || "（暂无中文翻译，可在导入页补全）";
  $("#lineCounter").textContent = `${lyricIndex + 1} / ${lines.length}`;
  const hasUnverified = (line.words || []).some(word => word.surface && !FUNCTION_WORDS.has(word.surface) && word.verified === false);
  const badge = line.proofread
    ? `<span class="verify-badge ok">✔ 已校对</span>`
    : (line.romajiFrom === "utaten"
      ? `<span class="verify-badge ok">✔ utaten 注音</span>`
      : (line.romajiFrom === "klyric"
        ? `<span class="verify-badge">原曲罗马音</span>`
        : (isCustom && hasUnverified
          ? `<span class="verify-badge warn">读音未校对</span>`
          : "")));
  $("#lineBadge").innerHTML = badge;
  const chips = (line.words || []).filter(word => !FUNCTION_WORDS.has(word.surface)).map(word => `
    <button class="word-chip ${word.verified === false ? "uncertain" : ""}" data-speak="${(word.kana || word.surface).replace(/"/g, "")}" title="${word.verified === false ? "读音未经确认：可点单词卡上的 ✎ 手动修正，或用下方校对面板粘贴带注音的歌词" : ""}">
      <strong>${escapeHtml(word.surface)}</strong>
      <small>${word.kana || "…"}${word.verified === false ? " ?" : ""} · ${(word.zh && word.zh !== "未收录") ? escapeHtml(word.zh) : "…"}</small>
    </button>
  `).join("");
  $("#activeLineWords").innerHTML = chips || `<span class="word-chip"><strong>${line.ja}</strong><small>点右上角播放听原句</small></span>`;
  const lineGrammar = detectGrammarIds(line.ja)
    .map(id => GRAMMAR_POINTS.find(point => point.id === id))
    .filter(Boolean);
  $("#lineGrammar").innerHTML = lineGrammar.length
    ? lineGrammar.map(point => `<button class="grammar-chip" data-grammar-id="${point.id}">${point.pattern} ${point.title}</button>`).join("")
    : `<span class="grammar-chip muted">本句暂未匹配到已收录语法点</span>`;
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
      <h3>${escapeHtml(song.title)}</h3>
      <p class="artist">${escapeHtml(song.artist)}</p>
      <blockquote>${escapeHtml(song.lyric || (song.lines && song.lines[0] ? song.lines[0].ja : "等待导入歌词"))}</blockquote>
    </button>
  `).join("");
  renderSongLesson();
}

function renderGrammar() {
  const filter = $("#grammarFilter").value || "all";
  const filtered = GRAMMAR_POINTS.filter(point => filter === "all" || point.level === filter);
  $("#grammarList").innerHTML = filtered.map(point => `
    <article class="grammar-card" data-grammar-id="${point.id}">
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
      ${point.songId ? `<button class="ghost-btn grammar-song-link" data-song-target="${point.songId}">去歌词里再看一遍</button>` : ""}
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
            <h4>${escapeHtml(track.title)}</h4>
            <p>${escapeHtml(track.artist || "未知歌手")}</p>
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
          <h4>${escapeHtml(song.title)}</h4>
          <p>${escapeHtml(song.artist)} · ${song.lines && song.lines.length ? `${song.lines.length} 句歌词` : "还没有歌词"}${song.proofread ? `<span class="track-tag match">已校对</span>` : ""}</p>
        </div>
        <div class="custom-actions">
          <button class="primary-btn" data-custom-open="${song.id}">开始学习</button>
          <button class="ghost-btn" data-reparse="${song.id}">重新解析</button>
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
  const existing = state.customSongs.find(song => song.neteaseId === String(track.id) || (song.title === track.title && song.artist === track.artist));
  const songData = {
    id: existing ? existing.id : `custom-${Date.now()}`,
    title: track.title,
    artist: track.artist || "未知歌手",
    search: `${track.title} ${track.artist}`,
    neteaseId: track.id || null,
    lyric: parsedLines[0].ja,
    romaji: parsedLines[0].romaji || "",
    zh: parsedLines[0].zh || "",
    lines: parsedLines,
    vocab: [],
    grammar: "已自动匹配歌词中出现的语法点。",
    grammarPointIds: [],
    quizLine: null,
    options: [],
    answer: null,
    enriched: false,
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
  status.textContent = `已获取 ${track.title} 的 ${parsedLines.length} 句歌词，正在解析…`;
  finishEnrichInBackground(existing || songData, {
    onDone: enriched => {
      status.textContent = `已获取 ${track.title} 的 ${parsedLines.length} 句歌词：${enriched.vocab.length} 个生词 · ${enriched.grammarPointIds.length} 个语法点`;
      autoVerifyReadings(existing || songData);
    }
  });
}

async function finishEnrichInBackground(song, options = {}) {
  if (!song || !song.lines || !song.lines.length) return null;
  setBusy(true);
  try {
    const keptWords = song.lines.map(line => ({
      words: (line.words || []).filter(word => word.verified && word.kana).map(word => ({ ...word }))
    }));
    const enriched = await enrichLyricLines(song.lines);
    enriched.lines.forEach((line, lineIndex) => {
      const kept = keptWords[lineIndex] ? keptWords[lineIndex].words : [];
      if (!kept.length) return;
      line.words.forEach(word => {
        const hit = kept.find(item => item.surface === word.surface);
        if (hit) {
          word.kana = hit.kana;
          word.zh = hit.zh || word.zh;
          word.verified = true;
          word.source = hit.source || "proofread";
        }
      });
    });
    song.lyric = enriched.lines[0] ? enriched.lines[0].ja : song.lyric;
    song.romaji = enriched.lines[0] && enriched.lines[0].romaji ? enriched.lines[0].romaji : song.romaji;
    song.zh = enriched.lines[0] && enriched.lines[0].zh ? enriched.lines[0].zh : song.zh;
    song.lines = enriched.lines;
    song.vocab = enriched.vocab;
    song.grammarPointIds = enriched.grammarPointIds;
    song.quizLine = (enriched.quiz && enriched.quiz.quizLine) || null;
    song.options = (enriched.quiz && enriched.quiz.options) || [];
    song.answer = (enriched.quiz && enriched.quiz.answer) || null;
    song.enriched = true;
    saveState();
    renderSync();
    renderSongs();
    if (options.onDone) options.onDone(enriched);
    return enriched;
  } catch (error) {
    song.enriched = true;
    saveState();
    return null;
  } finally {
    setBusy(false);
  }
}

async function importLyricsFromForm() {
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
  const statusEl = $("#importStatus");
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
    grammar: grammarNote || "已自动匹配歌词中出现的语法点。",
    grammarPointIds: [],
    quizLine: null,
    options: [],
    answer: null,
    enriched: false,
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
  if (statusEl) statusEl.textContent = "已保存，正在后台解析单词与语法…";
  toast("歌词已保存，正在解析中");
  finishEnrichInBackground(customSong, {
    onDone: enriched => {
      if (statusEl) statusEl.textContent = `解析完成：${enriched.vocab.length} 个生词 · ${enriched.grammarPointIds.length} 个语法点`;
      toast(`解析完成：${enriched.vocab.length} 个生词 · ${enriched.grammarPointIds.length} 个语法点`);
      autoVerifyReadings(customSong);
    }
  });
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
      const response = await fetchWithTimeout(base + path, 5000);
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
      const response = await fetchWithTimeout(proxy + encodeURIComponent(target), 20000);
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
  const karaoke = parseLrcToEntries(data && data.klyric && data.klyric.lyric);
  const translationMap = new Map(translated.map(item => [Math.round(item.time * 10), item.text]));
  const karaokeMap = new Map(karaoke.map(item => [Math.round(item.time * 10), item.text]));
  return original.map(item => {
    const timeKey = Math.round(item.time * 10);
    const klyricText = karaokeMap.get(timeKey) || "";
    return {
      ja: item.text,
      romaji: klyricText || "",
      romajiFrom: klyricText ? "klyric" : "",
      zh: translationMap.get(timeKey) || "",
      words: []
    };
  });
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

const STEM_SUFFIXES = [
  "っていた", "ている", "ています", "てしまう", "てもら", "てあげ",
  "ましょう", "ました", "ませんか", "ません", "ながら", "ように",
  "られた", "そして", "だから", "ないで", "ない",
  "して", "きたい", "いた", "って", "った", "れて", "した",
  "たい", "てる", "ます", "です", "けど", "たら", "なら", "から", "まで",
  "だ", "た", "て", "る"
];

function stemJapaneseToken(token) {
  if (!token) return "";
  const candidates = [token];
  for (const suffix of STEM_SUFFIXES) {
    if (token.length > suffix.length && token.endsWith(suffix)) {
      candidates.push(token.slice(0, -suffix.length));
    }
  }
  for (const candidate of candidates) {
    if (COMMON_GLOSS[candidate]) return candidate;
    if (WORDS.some(word => word.ja === candidate || word.kana === candidate)) return candidate;
  }
  return "";
}

function lookupLocalWord(token) {
  const exactWord = WORDS.find(word => word.ja === token || word.kana === token);
  if (exactWord) {
    return { ja: token, kana: exactWord.kana || "", zh: exactWord.zh, source: "dict", verified: true };
  }
  const exactGloss = COMMON_GLOSS[token];
  if (exactGloss) {
    return { ja: token, kana: exactGloss.kana, zh: exactGloss.zh, source: "dict", verified: true };
  }
  const stem = stemJapaneseToken(token);
  const stemGloss = COMMON_GLOSS[stem];
  if (stemGloss) {
    return { ja: token, kana: stemGloss.kana, zh: stemGloss.zh, source: "stem", verified: false };
  }
  if (state.wordCache[token]) {
    return { ja: token, kana: state.wordCache[token].kana || "", zh: state.wordCache[token].zh || "", source: state.wordCache[token].source || "cache", verified: Boolean(state.wordCache[token].verified) };
  }
  return null;
}

const KANA_TO_ROMAJI = (() => {
  const map = new Map();
  HIRAGANA.forEach(([char, reading]) => map.set(char, reading));
  KATAKANA.forEach(([char, reading]) => map.set(char, reading));
  const voiced = {
    "が": "ga", "ぎ": "gi", "ぐ": "gu", "げ": "ge", "ご": "go",
    "ざ": "za", "じ": "ji", "ず": "zu", "ぜ": "ze", "ぞ": "zo",
    "だ": "da", "ぢ": "ji", "づ": "zu", "で": "de", "ど": "do",
    "ば": "ba", "び": "bi", "ぶ": "bu", "べ": "be", "ぼ": "bo",
    "ぱ": "pa", "ぴ": "pi", "ぷ": "pu", "ぺ": "pe", "ぽ": "po",
    "ゔ": "vu",
    "ガ": "ga", "ギ": "gi", "グ": "gu", "ゲ": "ge", "ゴ": "go",
    "ザ": "za", "ジ": "ji", "ズ": "zu", "ゼ": "ze", "ゾ": "zo",
    "ダ": "da", "ヂ": "ji", "ヅ": "zu", "デ": "de", "ド": "do",
    "バ": "ba", "ビ": "bi", "ブ": "bu", "ベ": "be", "ボ": "bo",
    "パ": "pa", "ピ": "pi", "プ": "pu", "ペ": "pe", "ポ": "po",
    "ヴ": "vu"
  };
  Object.keys(voiced).forEach(char => map.set(char, voiced[char]));
  map.set("ー", "");
  return map;
})();

const SMALL_VOWEL = {
  "ぁ": "a", "ぃ": "i", "ぅ": "u", "ぇ": "e", "ぉ": "o",
  "ァ": "a", "ィ": "i", "ゥ": "u", "ェ": "e", "ォ": "o"
};

const SMALL_Y = {
  "ゃ": "a", "ゅ": "u", "ょ": "o",
  "ャ": "a", "ュ": "u", "ョ": "o"
};

const PARTICLE_ROMAJI = { "は": "wa", "へ": "e", "を": "o" };

function combineKanaWithSmall(base, small) {
  const baseRomaji = KANA_TO_ROMAJI.get(base) || "";
  const cons = baseRomaji.replace(/[aeiou]$/, "");
  if (SMALL_Y[small]) {
    if (!cons) return SMALL_Y[small];
    return ["sh", "ch", "j"].includes(cons) ? cons + SMALL_Y[small] : cons + "y" + SMALL_Y[small];
  }
  return cons + SMALL_VOWEL[small];
}

function kanaToHiragana(text) {
  return String(text || "").replace(/[\u30a1-\u30f6]/g, char => String.fromCharCode(char.charCodeAt(0) - 0x60));
}

function kanaToRomaji(text) {
  const chars = Array.from(String(text || "").trim());
  let out = "";
  let doubleNext = false;
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    let chunk = "";
    if (ch === "っ" || ch === "ッ") {
      doubleNext = true;
      continue;
    }
    if (ch === "ん" || ch === "ン") {
      const next = chars[i + 1] || "";
      chunk = /[ばぱまぶぷむぼぽもバパマブプムボポモ]/.test(next) ? "m" : "n";
    } else if (SMALL_Y[ch] || SMALL_VOWEL[ch]) {
      const prev = chars[i - 1] || "";
      chunk = combineKanaWithSmall(prev, ch);
    } else {
      const next = chars[i + 1] || "";
      if (SMALL_Y[next] || SMALL_VOWEL[next]) {
        chunk = combineKanaWithSmall(ch, next);
        i += 1;
      } else {
        chunk = KANA_TO_ROMAJI.get(ch) || "";
      }
    }
    if (doubleNext && chunk) {
      chunk = chunk[0] + chunk;
      doubleNext = false;
    }
    out += chunk;
  }
  return out;
}

function buildLineRomaji(line) {
  if (line.romaji) return line.romaji;
  if (!line.ja) return "";
  const tokens = line.words && line.words.length ? line.words : tokenizeJapanese(line.ja).map(surface => ({ surface, kana: "" }));
  const covered = tokens.filter(word => !FUNCTION_WORDS.has(word.surface));
  const allKana = !/[\u3400-\u9fff]/.test(line.ja);
  if (allKana) {
    return tokens.map(word => {
      if (FUNCTION_WORDS.has(word.surface) && PARTICLE_ROMAJI[word.surface]) return PARTICLE_ROMAJI[word.surface];
      const kana = word.kana || word.surface;
      return kanaToRomaji(kana);
    }).filter(Boolean).join(" ");
  }
  if (covered.length && covered.every(word => word.kana)) {
    return tokens.map(word => {
      if (FUNCTION_WORDS.has(word.surface) && PARTICLE_ROMAJI[word.surface]) return PARTICLE_ROMAJI[word.surface];
      return kanaToRomaji(word.kana || "");
    }).filter(Boolean).join(" ");
  }
  return "";
}

async function lookupJishoWord(token) {
  try {
    const response = await fetchWithTimeout("https://jotoba.de/api/search/words", 3500, {
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
    ["iru-continuation", /ている|てる/],
    ["tai", /たい/],
    ["kudasai", /てください/],
    ["teimasu", /ています|てます/],
    ["masenka", /ませんか/],
    ["mashou", /ましょう/],
    ["kara", /から/],
    ["made", /まで/],
    ["keredo", /けど|けれど/],
    ["node", /ので/],
    ["nara", /なら(?!ば)/],
    ["kamoshirenai", /かも(しれない)?/],
    ["dake", /だけ(?!ど)/],
    ["shika", /しか(?!し)/],
    ["yori", /より/],
    ["hodo", /ほど/],
    ["tumori", /つもり/],
    ["darou", /だろう|でしょう/],
    ["rashii", /らしい/],
    ["mitai", /みたい/],
    ["nagara", /ながら/],
    ["teageru", /てあげ/],
    ["temorau", /てもら/],
    ["tekureru", /てくれ/],
    ["teoku", /ておく/],
    ["teshimau", /てしまう/],
    ["youninaru", /ようになる/],
    ["tameni", /ために/],
    ["dekiru", /できる/],
    ["zuni", /ずに/],
    ["tara", /たら/],
    ["teii", /てもいい|てよい/],
    ["nakereba", /なければ|なきゃ/]
  ];
  return detectors.filter(([, pattern]) => pattern.test(text || "")).map(([id]) => id);
}

function buildAutoQuiz(lines, vocab) {
  const candidates = (vocab || []).filter(word => word.zh && word.kana && word.ja && !FUNCTION_WORDS.has(word.ja));
  if (candidates.length < 4) return null;
  const answer = candidates[Math.floor(Math.random() * candidates.length)];
  const distractors = shuffle(candidates.filter(word => word.ja !== answer.ja)).slice(0, 3).map(word => word.ja);
  const line = lines.find(item => item.ja && item.ja.includes(answer.ja));
  if (!line) return null;
  return {
    quizLine: line.ja.replace(answer.ja, "____"),
    options: shuffle([answer.ja, ...distractors]),
    answer: answer.ja
  };
}

async function enrichLyricLines(lines) {
  const uniqueTokens = [];
  const tokenSet = new Set();
  lines.forEach(line => {
    line.words = tokenizeJapanese(line.ja).map(surface => ({ surface, kana: "", zh: "" }));
    line.words.forEach(word => {
      if (FUNCTION_WORDS.has(word.surface)) return;
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
  let consecutiveFails = 0;
  async function worker() {
    while (cursor < lookups.length) {
      const index = cursor++;
      const token = lookups[index];
      const local = lookupLocalWord(token);
      if (local) {
        results[index] = local;
        consecutiveFails = 0;
        continue;
      }
      if (consecutiveFails >= 3) {
        results[index] = { ja: token, kana: "", zh: "未收录" };
        continue;
      }
      const remote = await lookupJishoWord(token);
      if (remote) {
        results[index] = Object.assign(remote, { source: "jotoba", verified: false });
        cacheWord(token, results[index]);
        consecutiveFails = 0;
      } else {
        results[index] = { ja: token, kana: "", zh: "未收录" };
        consecutiveFails += 1;
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
      if (FUNCTION_WORDS.has(word.surface)) {
        word.kana = word.surface;
        word.zh = "";
        word.verified = true;
        word.source = "kana";
        return;
      }
      const info = wordMap.get(word.surface) || { ja: word.surface, kana: "", zh: "" };
      word.kana = info.kana || "";
      word.zh = info.zh || "";
      word.verified = Boolean(info.verified) && Boolean(info.kana);
      word.source = info.source || "unknown";
      if (!/[\u3400-\u9fff]/.test(word.surface) && !FUNCTION_WORDS.has(word.surface)) {
        word.kana = word.surface;
        word.verified = true;
        word.source = "kana";
      }
      if (info.zh && info.zh !== "未收录" && !vocabMap.has(word.surface)) {
        vocabMap.set(word.surface, { ja: word.surface, kana: info.kana || "", zh: info.zh, source: info.source || "unknown", verified: word.verified });
      }
    });
    if (!line.romaji) line.romaji = buildLineRomaji(line);
    detectGrammarIds(line.ja).forEach(id => grammarSet.add(id));
  });
  const vocab = Array.from(vocabMap.values()).slice(0, 40);
  return {
    lines,
    vocab,
    grammarPointIds: Array.from(grammarSet),
    quiz: buildAutoQuiz(lines, vocab)
  };
}

async function fetchAndParseSongLyrics(song) {
  const data = await fetchNeteaseJson(`/lyric?id=${song.id}&lv=-1&kv=-1&tv=-1`);
  const lines = parseLyricResponse(data);
  if (!lines.length) return null;
  return enrichLyricLines(lines);
}

let kuromojiPromise = null;
let kuromojiTokenizer = null;

let kuromojiFailed = false;
let kuromojiLoadTimer = null;

function loadKuromoji() {
  if (kuromojiPromise) return kuromojiPromise;
  if (kuromojiFailed) return Promise.resolve(null);
  if (typeof document === "undefined") return Promise.resolve(null);
  kuromojiPromise = new Promise(resolve => {
    const finish = (tokenizer, failed) => {
      window.clearTimeout(kuromojiLoadTimer);
      if (failed) kuromojiFailed = true;
      kuromojiPromise = null;
      if (tokenizer) kuromojiTokenizer = tokenizer;
      resolve(tokenizer);
    };
    kuromojiLoadTimer = window.setTimeout(() => finish(null, true), 25000);
    const bases = [
      "https://cdn.jsdelivr.net/npm/kuromoji@0.1.2",
      "https://unpkg.com/kuromoji@0.1.2"
    ];
    let index = 0;
    function tryBase() {
      if (index >= bases.length) {
        finish(null, true);
        return;
      }
      const base = bases[index++];
      const script = document.createElement("script");
      script.src = `${base}/build/kuromoji.js`;
      script.onload = () => {
        try {
          kuromoji.builder({ dicPath: `${base}/dict` }).build((error, tokenizer) => {
            if (error || !tokenizer) {
              finish(null, true);
            } else {
              finish(tokenizer, false);
            }
          });
        } catch (error) {
          finish(null, true);
        }
      };
      script.onerror = () => {
        script.remove();
        tryBase();
      };
      document.head.appendChild(script);
    }
    tryBase();
  });
  return kuromojiPromise;
}

function applyKuromojiReadings(lines) {
  if (!kuromojiTokenizer) return 0;
  let applied = 0;
  lines.forEach(line => {
    if (!line.ja) return;
    let kuromojiTokens;
    try {
      kuromojiTokens = kuromojiTokenizer.tokenize(line.ja);
    } catch (error) {
      return;
    }
    let offset = 0;
    const positioned = kuromojiTokens.map(token => {
      const index = line.ja.indexOf(token.surface_form, offset);
      const start = index < 0 ? offset : index;
      offset = Math.max(offset, start + token.surface_form.length);
      return {
        start,
        end: offset,
        reading: token.reading ? kanaToHiragana(token.reading) : token.surface_form
      };
    });
    let pointer = 0;
    let pos = 0;
    line.words.forEach(word => {
      if (word.verified) {
        const found = line.ja.indexOf(word.surface, pos);
        if (found >= 0) pos = found + word.surface.length;
        return;
      }
      const start = line.ja.indexOf(word.surface, pos);
      if (start < 0) return;
      const end = start + word.surface.length;
      pos = end;
      while (pointer < positioned.length && positioned[pointer].end <= start) pointer += 1;
      const covering = [];
      let probe = pointer;
      while (probe < positioned.length && positioned[probe].start < end) {
        covering.push(positioned[probe]);
        probe += 1;
      }
      if (covering.length && covering[0].start <= start && covering[covering.length - 1].end >= end) {
        const joined = covering.map(item => item.reading).join("");
        if (joined && !/[\u3400-\u9fff]/.test(joined)) {
          word.kana = joined;
          word.verified = true;
          word.source = "kuromoji";
          applied += 1;
        }
      }
    });
  });
  return applied;
}

function syncVocabFromLines(song) {
  if (!song || !song.lines) return;
  (song.vocab || []).forEach(entry => {
    let found = null;
    song.lines.some(line => {
      const word = (line.words || []).find(item => item.surface === entry.ja);
      if (word && word.kana) {
        found = word;
        return true;
      }
      return false;
    });
    if (found) {
      entry.kana = found.kana;
      entry.verified = found.verified;
      entry.source = found.source;
    }
  });
}

async function autoVerifyReadings(song) {
  if (!song || !song.isCustom || !song.lines || !song.lines.length) return;
  const tokenizer = await loadKuromoji();
  if (!tokenizer) return;
  const applied = applyKuromojiReadings(song.lines);
  if (!applied) return;
  syncVocabFromLines(song);
  saveState();
  renderSongLesson();
}

function normalizeLyric(text) {
  return String(text || "")
    .replace(/[（(][\u3040-\u30ffー～〜]+[)）]/g, "")
    .replace(/[\s\u3000、。，．,\.！？!?…「」『』()（）]/g, "")
    .toLowerCase();
}

function parseFuriganaLine(text) {
  const runs = [];
  let plain = "";
  const regex = /([\u3400-\u9fff][\u3400-\u9fff\u3040-\u30ff]*?)\s*[（(]([\u3040-\u30ffー～〜]+)[)）]/g;
  let last = 0;
  let match;
  let plainPos = 0;
  while ((match = regex.exec(text)) !== null) {
    plain += text.slice(last, match.index);
    plainPos += match.index - last;
    const start = plainPos;
    plain += match[1];
    plainPos += match[1].length;
    runs.push({
      kanji: match[1],
      kana: kanaToHiragana(match[2]),
      start,
      end: plainPos
    });
    last = regex.lastIndex;
  }
  plain += text.slice(last);
  return { plain, runs, norm: normalizeLyric(plain) };
}

function applyProofreadToSong(song, pastedText, romajiLines) {
  const allLines = String(pastedText || "").split("\n").map(line => parseFuriganaLine(line));
  const pasted = [];
  const romajiMap = [];
  allLines.forEach((line, index) => {
    if (!line.norm) return;
    pasted.push(line);
    romajiMap.push(romajiLines && romajiLines[index] ? romajiLines[index] : null);
  });
  if (!pasted.length) {
    return { matchedLines: 0, appliedWords: 0, skippedLines: 0, error: "没有识别到 漢字(かな) 格式的注音，请检查粘贴内容" };
  }
  let matchedLines = 0;
  let appliedWords = 0;
  let skippedLines = 0;
  song.lines.forEach(songLine => {
    const norm = normalizeLyric(songLine.ja);
    if (!norm) return;
    const hit = pasted.find(line => line.norm === norm) || pasted.find(line => {
      if (Math.abs(line.norm.length - norm.length) > 3) return false;
      let same = 0;
      for (let i = 0; i < Math.min(line.norm.length, norm.length); i += 1) {
        if (line.norm[i] === norm[i]) same += 1;
      }
      return same >= Math.min(line.norm.length, norm.length) * 0.8;
    });
    if (!hit) {
      skippedLines += 1;
      return;
    }
    matchedLines += 1;
    songLine.proofread = true;
    const hitIndex = pasted.indexOf(hit);
    const utatenRomaji = romajiMap[hitIndex];
    const { plain: rawPlain, runs } = hit;
    if (runs.length) {
      songLine.words.forEach(word => {
        if (FUNCTION_WORDS.has(word.surface)) {
          word.kana = word.surface;
          word.verified = true;
          word.source = "kana";
          return;
        }
        const start = rawPlain.indexOf(word.surface);
        if (start < 0) return;
        const end = start + word.surface.length;
        const fullRun = runs.find(run => run.start <= start && run.end >= end);
        if (fullRun) {
          word.kana = fullRun.kana;
          word.verified = true;
          word.source = "proofread";
          appliedWords += 1;
          return;
        }
        const headRun = runs.find(run => run.start <= start && run.end > start);
        if (headRun && headRun.end < end) {
          const rest = word.surface.slice(headRun.end - start);
          if (rest && !/[\u3400-\u9fff]/.test(rest)) {
            word.kana = headRun.kana.endsWith(rest) ? headRun.kana : headRun.kana + rest;
            word.verified = true;
            word.source = "proofread";
            appliedWords += 1;
          }
        }
      });
    }
    if (utatenRomaji) {
      songLine.romaji = utatenRomaji;
      songLine.romajiFrom = "utaten";
    } else if (runs.length) {
      let lineKana = "";
      let cursor = 0;
      runs.forEach(run => {
        lineKana += rawPlain.slice(cursor, run.start);
        lineKana += run.kana;
        cursor = run.end;
      });
      lineKana += rawPlain.slice(cursor);
      if (!/[\u3400-\u9fff]/.test(lineKana)) {
        songLine.kana = lineKana;
        const nonFunction = songLine.words.filter(word => !FUNCTION_WORDS.has(word.surface));
        const wordsRomaji = nonFunction.length && nonFunction.every(word => word.kana)
          ? songLine.words.map(word => kanaToRomaji(word.kana || "")).filter(Boolean).join(" ")
          : kanaToRomaji(lineKana);
        songLine.romaji = wordsRomaji;
        songLine.romajiFrom = "proofread";
      }
    }
  });
  if (matchedLines) {
    song.proofread = true;
    syncVocabFromLines(song);
  }
  return { matchedLines, appliedWords, skippedLines };
}

async function fetchHtmlViaChain(target) {
  try {
    const direct = await fetchWithTimeout(target, 5000);
    if (direct.ok) {
      const text = await direct.text();
      if (text && text.length > 2000) return text;
    }
  } catch (error) {
    // CORS 或网络错误，走代理
  }
  const proxies = [
    { url: encoded => `https://api.allorigins.win/raw?url=${encoded}`, mode: "raw" },
    { url: encoded => `https://api.allorigins.win/get?url=${encoded}`, mode: "get" }
  ];
  for (const proxy of proxies) {
    try {
      const encoded = encodeURIComponent(target);
      const response = await fetchWithTimeout(proxy.url(encoded), 25000);
      const text = await response.text();
      if (proxy.mode === "get") {
        try {
          const parsed = JSON.parse(text);
          if (parsed && parsed.contents && parsed.contents.length > 2000) return parsed.contents;
        } catch (error) {
          // 继续下一个代理
        }
      } else if (text && text.length > 2000 && !/captcha|cloudflare|Just a moment|アクセスが集中/i.test(text)) {
        return text;
      }
    } catch (error) {
      // 继续下一个代理
    }
  }
  return "";
}

function extractUtaTenResults(html) {
  const results = [];
  const blocks = String(html || "").match(/<article class="list__item">[\s\S]*?<\/article>/g) || [];
  blocks.forEach(block => {
    const linkMatch = block.match(/href="\/lyric\/([a-z0-9]+)\/"/);
    const titleMatch = block.match(/class="list__link">\s*([^<]+?)\s*<\/span>/);
    if (!linkMatch || !titleMatch) return;
    const bodyMatch = block.match(/class="list__body">([\s\S]*?)<\/div>/);
    let artist = bodyMatch ? bodyMatch[1].replace(/<[^>]+>/g, " ") : "";
    artist = artist.split(/\s*(?:作詞|作曲)/)[0].trim();
    results.push({ id: linkMatch[1], title: titleMatch[1].trim(), artist });
  });
  return results;
}

function pickBestUtaTenResult(results, song) {
  const songTitle = normalizeTrackName(song.title);
  const songArtist = normalizeTrackName(song.artist || "");
  let best = null;
  let bestScore = 0;
  results.forEach(result => {
    const title = normalizeTrackName(result.title);
    let score = 0;
    if (title === songTitle) score += 100;
    else if (title.includes(songTitle) || songTitle.includes(title)) score += 60;
    if (songArtist) {
      const artist = normalizeTrackName(result.artist);
      if (artist === songArtist) score += 30;
      else if (artist.includes(songArtist) || songArtist.includes(artist)) score += 15;
    }
    if (score > bestScore) {
      bestScore = score;
      best = result;
    }
  });
  return bestScore >= 60 ? best : null;
}

function extractUtaTenLyric(html) {
  const source = String(html || "");
  const furiganaLines = [];
  const romajiLines = [];
  const rubyPattern = /<span class="ruby"><span class="rb">([^<]*)<\/span><span class="rt">([^<]*)<\/span><\/span>/g;
  const hiraMatch = source.match(/<div class="hiragana"[^>]*>([\s\S]*?)<div class="romaji"/);
  const romMatch = source.match(/<div class="romaji"[^>]*>([\s\S]*?)<\/div>/);
  if (hiraMatch) {
    const body = hiraMatch[1].replace(/<br\s*\/?\s*>/gi, "\n");
    const converted = body.replace(rubyPattern, (match, rb, rt) => `${rb}(${rt})`);
    converted.replace(/<[^>]+>/g, "").split("\n").forEach(line => {
      const clean = line.trim();
      if (clean && clean.length > 1) furiganaLines.push(clean);
    });
  }
  if (romMatch) {
    const body = romMatch[1].replace(/<br\s*\/?\s*>/gi, "\n");
    const converted = body.replace(rubyPattern, (match, rb, rt) => rt);
    converted.replace(/<[^>]+>/g, "").split("\n").forEach(line => {
      let clean = line.trim();
      if (!clean) return;
      clean = clean.replace(/[\u3040-\u30ff]+/g, kana => kanaToRomaji(kana));
      clean = clean.replace(/\s+/g, " ").trim();
      if (clean.length > 1) romajiLines.push(clean);
    });
  }
  return { furiganaLines, romajiLines };
}

async function fetchUtaTenReadings(song) {
  const statusEl = $("#proofreadStatus");
  const setStatus = message => {
    if (statusEl) statusEl.textContent = message;
  };
  if (!song || !song.title) {
    return { error: "当前没有可校对的歌曲" };
  }
  if (!song.isCustom) {
    return { error: "内置歌曲的读音已由人工校对，无需抓取" };
  }
  if (utatenFetching) {
    return { error: "正在抓取另一首歌的注音，请稍候" };
  }
  utatenFetching = true;
  setBusy(true);
  try {
    setStatus(`正在 utaten 搜索《${song.title}》…（约需十几秒）`);
    const searchUrl = `https://utaten.com/search?title=${encodeURIComponent(song.title)}&artist_name=${encodeURIComponent(song.artist || "")}`;
    const searchHtml = await fetchHtmlViaChain(searchUrl);
    const results = extractUtaTenResults(searchHtml);
    if (!results.length) {
      return { error: "utaten 上没有搜到这首歌，可尝试手动粘贴注音" };
    }
    const best = pickBestUtaTenResult(results, song);
    if (!best) {
      return { error: "搜索结果与歌曲不匹配，可尝试手动粘贴注音" };
    }
    setStatus(`找到《${best.title}》，正在获取注音歌词…`);
    const lyricHtml = await fetchHtmlViaChain(`https://utaten.com/lyric/${best.id}/`);
    const parsed = extractUtaTenLyric(lyricHtml);
    if (!parsed.furiganaLines.length) {
      return { error: "歌词页没有取到注音内容" };
    }
    setStatus("正在逐行应用 utaten 注音…");
    const result = applyProofreadToSong(song, parsed.furiganaLines.join("\n"), parsed.romajiLines);
    if (result.error) return result;
    song.utatenSource = `${best.title} (utaten)`;
    saveState();
    renderSync();
    renderSongs();
    renderSongLesson();
    return Object.assign(result, { source: `utaten · ${best.title}` });
  } catch (error) {
    return { error: "抓取失败，网络或代理不可用" };
  } finally {
    utatenFetching = false;
    setBusy(false);
  }
}

function maybeAutoFetchUtaTen() {
  if (!activeSong || !activeSong.isCustom || activeSong.utatenAttempted) return;
  if (utatenFetching) return;
  if (typeof navigator !== "undefined" && navigator.onLine === false) return;
  if (!activeSong.lines || !activeSong.lines.length) return;
  const hasUnverified = activeSong.lines.some(line => (line.words || []).some(word => word.surface && !FUNCTION_WORDS.has(word.surface) && word.verified === false));
  if (!hasUnverified) return;
  activeSong.utatenAttempted = true;
  fetchUtaTenReadings(activeSong);
}

async function upgradeStoredSongs() {
  if (typeof navigator !== "undefined" && navigator.onLine === false) return;
  const pending = state.customSongs.filter(song => song.lines && song.lines.length && !song.enriched).slice(0, 3);
  for (const song of pending) {
    await finishEnrichInBackground(song);
    await new Promise(resolve => window.setTimeout(resolve, 800));
  }
  if (pending.length) {
    renderSync();
    renderSongs();
    toast(`已自动为 ${pending.length} 首旧歌补上单词和语法解析`);
  }
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
    artist: (song.artists || song.ar || []).map(item => item.name).join(" / "),
    album: (song.album && song.album.name) || (song.al && song.al.name) || ""
  }));
  renderSongSearchResults();
  status.textContent = lastSearchResults.length ? `找到 ${lastSearchResults.length} 首，选择一首获取完整歌词。` : "没有搜到结果，请换一个歌名。";
}

function renderSongSearchResults() {
  $("#songSearchResults").innerHTML = lastSearchResults.map((song, index) => `
    <div class="search-result">
      <div>
        <h4>${escapeHtml(song.title)}</h4>
        <p>${escapeHtml(song.artist)}${song.album ? ` · ${escapeHtml(song.album)}` : ""}</p>
      </div>
      <button class="secondary-btn" data-search-song="${index}">获取歌词并解析</button>
    </div>
  `).join("");
}

async function handleSearchSong(index) {
  const song = lastSearchResults[index];
  const status = $("#songSearchStatus");
  if (!song) return;
  status.textContent = `正在获取《${song.title}》的完整歌词…`;
  const data = await fetchNeteaseJson(`/lyric?id=${song.id}&lv=-1&kv=-1&tv=-1`);
  const parsedLines = parseLyricResponse(data);
  if (!parsedLines.length) {
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
    lyric: parsedLines[0].ja,
    romaji: parsedLines[0].romaji || "",
    zh: parsedLines[0].zh || "",
    lines: parsedLines,
    vocab: [],
    grammar: "已自动匹配歌词中出现的语法点。",
    grammarPointIds: [],
    quizLine: null,
    options: [],
    answer: null,
    enriched: false,
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
  status.textContent = `已获取《${song.title}》${parsedLines.length} 句歌词，正在解析单词与语法…`;
  finishEnrichInBackground(activeSong, {
    onDone: enriched => {
      status.textContent = `已解析《${song.title}》：${enriched.vocab.length} 个生词 · ${enriched.grammarPointIds.length} 个语法点`;
      toast(`已解析《${song.title}》，共 ${parsedLines.length} 句歌词`);
      autoVerifyReadings(activeSong);
    }
  });
}

async function reparseCustomSong(id) {
  const song = state.customSongs.find(item => item.id === id);
  if (!song || !song.lines || !song.lines.length) return;
  toast(`正在重新解析《${song.title}》…`);
  song.lines.forEach(line => {
    line.words = [];
  });
  const enriched = await finishEnrichInBackground(song);
  if (enriched) {
    renderSync();
    renderSongs();
    toast(`已重新解析：${enriched.vocab.length} 个生词 · ${enriched.grammarPointIds.length} 个语法点`);
    autoVerifyReadings(song);
  } else {
    toast("重新解析失败，请检查网络");
  }
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

  const grammarChip = event.target.closest(".grammar-chip[data-grammar-id]");
  if (grammarChip) {
    switchView("grammar");
    const filter = $("#grammarFilter");
    if (filter) filter.value = "all";
    renderGrammar();
    const card = document.querySelector(`.grammar-card[data-grammar-id="${grammarChip.dataset.grammarId}"]`);
    if (card && card.scrollIntoView) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.classList.add("grammar-highlight");
      window.setTimeout(() => card.classList.remove("grammar-highlight"), 1800);
    }
    return;
  }

  const editKanaButton = event.target.closest("[data-edit-kana]");
  if (editKanaButton) {
    const surface = editKanaButton.dataset.editKana;
    const current = (activeSong.vocab || []).find(entry => entry.ja === surface);
    const currentKana = current && current.kana ? current.kana : "";
    const corrected = window.prompt(`修正「${surface}」的假名：`, currentKana);
    if (corrected === null) return;
    const kana = corrected.trim().replace(/[\u3400-\u9fff\s]/g, "");
    if (!kana) {
      toast("假名不能为空");
      return;
    }
    activeSong.lines.forEach(line => {
      (line.words || []).forEach(word => {
        if (word.surface === surface) {
          word.kana = kana;
          word.verified = true;
          word.source = "manual";
        }
      });
    });
    (activeSong.vocab || []).forEach(entry => {
      if (entry.ja === surface) {
        entry.kana = kana;
        entry.verified = true;
        entry.source = "manual";
      }
    });
    cacheWord(surface, { ja: surface, kana, zh: current ? current.zh : "", source: "manual", verified: true });
    activeSong.lines.forEach(line => {
      if (line.romajiFrom !== "proofread") line.romaji = buildLineRomaji(line);
    });
    saveState();
    renderSongLesson();
    toast(`已保存「${surface}」的假名：${kana}`);
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

  const reparseButton = event.target.closest("[data-reparse]");
  if (reparseButton) {
    reparseCustomSong(reparseButton.dataset.reparse);
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
      if (importPanel && importPanel.scrollIntoView) importPanel.scrollIntoView({ behavior: "smooth", block: "start" });
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
    activeSong = [...SONGS, ...state.customSongs].find(song => song.id === songCard.dataset.songId) || activeSong;
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

$("#applyProofread").addEventListener("click", () => {
  if (!activeSong) return;
  const result = applyProofreadToSong(activeSong, $("#proofreadInput").value);
  const status = $("#proofreadStatus");
  if (!status) return;
  if (result.error) {
    status.textContent = result.error;
    return;
  }
  if (!result.matchedLines) {
    status.textContent = `没有匹配到任何一行。已跳过 ${result.skippedLines} 行。请检查粘贴内容是否与歌词一致（可含标点，会自动忽略）。`;
    return;
  }
  saveState();
  renderSync();
  renderSongs();
  renderSongLesson();
  status.textContent = `校对完成：匹配 ${result.matchedLines} 行，修正 ${result.appliedWords} 个词的读音${result.skippedLines ? `，跳过 ${result.skippedLines} 行（歌词不一致）` : ""}。`;
  toast(`已应用注音校对：${result.appliedWords} 个词`);
});

$("#autoProofread").addEventListener("click", async () => {
  if (!activeSong) return;
  const button = $("#autoProofread");
  button.disabled = true;
  try {
    const result = await fetchUtaTenReadings(activeSong);
    const status = $("#proofreadStatus");
    if (!status) return;
    if (result.error) {
      status.textContent = result.error;
      return;
    }
    status.textContent = `已完成（${result.source}）：匹配 ${result.matchedLines} 行，修正 ${result.appliedWords} 个词的读音${result.skippedLines ? `，跳过 ${result.skippedLines} 行` : ""}。`;
    toast(`已从 utaten 应用注音：${result.appliedWords} 个词`);
  } finally {
    button.disabled = false;
  }
});
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
upgradeStoredSongs();
