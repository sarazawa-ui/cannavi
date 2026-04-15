// ===== モックデータ =====

export const courses = [
  {
    id: 1,
    title: "プログラミング基礎",
    subtitle: "Pythonで学ぶ論理的思考",
    category: "情報科学",
    professorId: 1,
    day: "月",
    period: 2,
    credits: 2,
    semester: "前期",
    year: [1, 2],
    faculty: "工学部",
    university: "東京情報大学",
    difficulty: 2,
    satisfaction: 4.5,
    enrollCount: 156,
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    thumbnail: "",
    description: "プログラミング未経験者向け。Pythonの基本文法から簡単なアプリケーション開発まで、段階的に学びます。",
    skills: ["Python", "論理的思考", "アルゴリズム", "問題解決"],
    evaluation: { test: 40, report: 30, attendance: 20, other: 10 },
    reviews: [
      { studentName: "Aさん (工学部2年)", rating: 5, text: "プログラミング未経験でしたが、丁寧な説明で理解できました。課題は毎週ありますが、力がつきます。", skill: "Webアプリが作れるようになった" },
      { studentName: "Bさん (経済学部3年)", rating: 4, text: "文系でも全然大丈夫。先生が優しく教えてくれます。ただ後半は少し難しくなります。", skill: "データ分析の基礎が身についた" },
      { studentName: "Cさん (理学部1年)", rating: 5, text: "他のプログラミング授業と比べて圧倒的にわかりやすい。毎回の演習が楽しかった。", skill: "自分でツールを作れるようになった" }
    ],
    careerTags: ["エンジニア", "データサイエンティスト", "起業家"]
  },
  {
    id: 2,
    title: "マーケティング戦略論",
    subtitle: "消費者心理とブランド構築",
    category: "経営学",
    professorId: 2,
    day: "火",
    period: 3,
    credits: 2,
    semester: "後期",
    year: [2, 3],
    faculty: "商学部",
    university: "慶応ビジネス大学",
    difficulty: 3,
    satisfaction: 4.3,
    enrollCount: 120,
    videoUrl: "",
    thumbnail: "",
    description: "実際の企業事例を使って、マーケティング戦略の立案プロセスを実践的に学びます。グループワーク中心。",
    skills: ["マーケティング", "データ分析", "プレゼン", "チームワーク"],
    evaluation: { test: 0, report: 50, attendance: 20, other: 30 },
    reviews: [
      { studentName: "Dさん (商学部3年)", rating: 4, text: "実企業のケーススタディが面白い。グループワークが多いので友達もできます。", skill: "企画書が書けるようになった" },
      { studentName: "Eさん (文学部2年)", rating: 5, text: "テストがなくてレポート中心なので取り組みやすい。プレゼンの練習になります。", skill: "消費者分析ができるようになった" },
      { studentName: "Fさん (工学部3年)", rating: 4, text: "技術だけでなくビジネスの視点を学べて視野が広がりました。", skill: "ビジネスモデルを考えられるようになった" }
    ],
    careerTags: ["マーケター", "コンサルタント", "起業家", "商品企画"]
  },
  {
    id: 3,
    title: "UXデザイン入門",
    subtitle: "ユーザー中心のデザイン思考",
    category: "デザイン",
    professorId: 3,
    day: "水",
    period: 4,
    credits: 2,
    semester: "前期",
    year: [1, 2, 3],
    faculty: "全学部",
    university: "東京情報大学",
    difficulty: 2,
    satisfaction: 4.8,
    enrollCount: 89,
    videoUrl: "",
    thumbnail: "",
    description: "Figmaを使ったプロトタイピングからユーザーテストまで、UXデザインの一連のプロセスを体験します。",
    skills: ["Figma", "UXリサーチ", "プロトタイピング", "デザイン思考"],
    evaluation: { test: 0, report: 40, attendance: 30, other: 30 },
    reviews: [
      { studentName: "Gさん (情報学部2年)", rating: 5, text: "最高の授業。Figmaが使えるようになるし、実際にアプリのプロトを作ります。", skill: "Figmaでアプリデザインができるようになった" },
      { studentName: "Hさん (文学部1年)", rating: 5, text: "デザイン未経験でも問題なし。自分のアイデアを形にする楽しさを知りました。", skill: "ユーザー視点で考えられるようになった" },
      { studentName: "Iさん (商学部3年)", rating: 4, text: "ビジネスにもデザインの視点は必須。就活のポートフォリオにもなりました。", skill: "ワイヤーフレームが作れるようになった" }
    ],
    careerTags: ["デザイナー", "プロダクトマネージャー", "エンジニア", "起業家"]
  },
  {
    id: 4,
    title: "行動経済学",
    subtitle: "人はなぜ非合理な選択をするのか",
    category: "経済学",
    professorId: 4,
    day: "木",
    period: 1,
    credits: 2,
    semester: "前期",
    year: [2, 3, 4],
    faculty: "経済学部",
    university: "慶応ビジネス大学",
    difficulty: 3,
    satisfaction: 4.6,
    enrollCount: 200,
    videoUrl: "",
    thumbnail: "",
    description: "ノーベル経済学賞を受賞した行動経済学の理論を、身近な事例から学びます。意思決定のメカニズムを理解します。",
    skills: ["経済分析", "心理学", "意思決定理論", "批判的思考"],
    evaluation: { test: 50, report: 30, attendance: 20, other: 0 },
    reviews: [
      { studentName: "Jさん (経済学部3年)", rating: 5, text: "日常生活の「なぜ？」がわかるようになる。ナッジ理論は面白い。", skill: "人の行動パターンを分析できるようになった" },
      { studentName: "Kさん (心理学部2年)", rating: 4, text: "心理学との接点が多くて楽しい。テストはしっかり勉強が必要です。", skill: "データに基づいた判断ができるようになった" },
      { studentName: "Lさん (工学部4年)", rating: 5, text: "エンジニアにも必要なユーザー心理の理解に役立ちました。", skill: "合理的な意思決定フレームワークを習得" }
    ],
    careerTags: ["コンサルタント", "マーケター", "研究者", "公務員"]
  },
  {
    id: 5,
    title: "データサイエンス実践",
    subtitle: "データから価値を引き出す力",
    category: "情報科学",
    professorId: 1,
    day: "金",
    period: 2,
    credits: 2,
    semester: "後期",
    year: [2, 3],
    faculty: "工学部",
    university: "東京情報大学",
    difficulty: 4,
    satisfaction: 4.4,
    enrollCount: 78,
    videoUrl: "",
    thumbnail: "",
    description: "実データを使った分析プロジェクトを通じて、データサイエンスの実践的なスキルを身につけます。",
    skills: ["Python", "統計学", "機械学習", "データ可視化"],
    evaluation: { test: 20, report: 50, attendance: 10, other: 20 },
    reviews: [
      { studentName: "Mさん (工学部3年)", rating: 4, text: "実データを扱えるのが魅力。Kaggleのコンペに参加する力がつきます。", skill: "機械学習モデルを構築できるようになった" },
      { studentName: "Nさん (経済学部2年)", rating: 4, text: "プログラミング基礎を先に取っておくとスムーズ。統計の知識も深まります。", skill: "データ分析レポートが書けるようになった" },
      { studentName: "Oさん (理学部3年)", rating: 5, text: "研究にも直結するスキルが学べる。最終プロジェクトの自由度が高い。", skill: "実務レベルのデータ分析ができるようになった" }
    ],
    careerTags: ["データサイエンティスト", "エンジニア", "研究者", "コンサルタント"]
  },
  {
    id: 6,
    title: "映像制作ワークショップ",
    subtitle: "伝わる映像をつくる技術",
    category: "メディア",
    professorId: 5,
    day: "月",
    period: 4,
    credits: 2,
    semester: "後期",
    year: [1, 2, 3],
    faculty: "全学部",
    university: "早稲田クリエイティブ大学",
    difficulty: 2,
    satisfaction: 4.7,
    enrollCount: 45,
    videoUrl: "",
    thumbnail: "",
    description: "企画・撮影・編集の一連のワークフローを少人数で実践。スマートフォンでの撮影テクニックも学びます。",
    skills: ["映像編集", "ストーリーテリング", "撮影技術", "Adobe Premiere"],
    evaluation: { test: 0, report: 20, attendance: 30, other: 50 },
    reviews: [
      { studentName: "Pさん (文学部2年)", rating: 5, text: "自分の作品を作れるのが嬉しい。先生のフィードバックが的確です。", skill: "YouTubeに動画を投稿できるレベルになった" },
      { studentName: "Qさん (商学部1年)", rating: 5, text: "少人数だからしっかり学べる。映像制作の全工程を経験できます。", skill: "企業PR動画を制作できるようになった" },
      { studentName: "Rさん (工学部3年)", rating: 4, text: "技術的な知識だけでなく、表現力も磨かれます。就活でも役立ちました。", skill: "プレゼン動画を作れるようになった" }
    ],
    careerTags: ["クリエイター", "マーケター", "起業家", "ディレクター"]
  },
  {
    id: 7,
    title: "心理統計学",
    subtitle: "データで心を理解する",
    category: "心理学",
    professorId: 4,
    day: "火",
    period: 1,
    credits: 2,
    semester: "前期",
    year: [2, 3],
    faculty: "人文学部",
    university: "慶応ビジネス大学",
    difficulty: 4,
    satisfaction: 4.1,
    enrollCount: 95,
    videoUrl: "",
    thumbnail: "",
    description: "心理学研究に必要な統計手法を基礎から応用まで学びます。SPSSを使った実践的な分析演習付き。",
    skills: ["統計分析", "SPSS", "研究デザイン", "論文読解"],
    evaluation: { test: 50, report: 30, attendance: 20, other: 0 },
    reviews: [
      { studentName: "Sさん (心理学部2年)", rating: 4, text: "統計は難しいけどこの授業で乗り越えられました。卒論に直結します。", skill: "統計ソフトで分析ができるようになった" },
      { studentName: "Tさん (教育学部3年)", rating: 4, text: "教育研究にも統計は必須。丁寧に教えてくれるので安心です。", skill: "研究論文のデータを読み解けるようになった" },
      { studentName: "Uさん (社会学部2年)", rating: 3, text: "内容は良いが進度が速い。予習復習は必須です。", skill: "アンケート調査の設計ができるようになった" }
    ],
    careerTags: ["研究者", "カウンセラー", "データサイエンティスト", "公務員"]
  },
  {
    id: 8,
    title: "スタートアップ経営論",
    subtitle: "アイデアをビジネスにする方法",
    category: "経営学",
    professorId: 2,
    day: "水",
    period: 2,
    credits: 2,
    semester: "後期",
    year: [3, 4],
    faculty: "全学部",
    university: "早稲田クリエイティブ大学",
    difficulty: 3,
    satisfaction: 4.9,
    enrollCount: 60,
    videoUrl: "",
    thumbnail: "",
    description: "起業のプロセスをリーンスタートアップの手法で実践。最終発表では投資家の前でピッチを行います。",
    skills: ["ビジネスモデル", "ピッチ", "リーンスタートアップ", "資金調達"],
    evaluation: { test: 0, report: 40, attendance: 20, other: 40 },
    reviews: [
      { studentName: "Vさん (商学部4年)", rating: 5, text: "人生が変わった授業。実際に起業した先輩がゲスト講師で来てくれます。", skill: "ビジネスプランを書けるようになった" },
      { studentName: "Wさん (工学部3年)", rating: 5, text: "技術を持っているならこの授業は絶対取るべき。ビジネス視点が加わります。", skill: "投資家向けピッチができるようになった" },
      { studentName: "Xさん (文学部4年)", rating: 4, text: "文系でも起業に挑戦できると思えた。チームでの経験が貴重でした。", skill: "チームビルディングのスキルを習得" }
    ],
    careerTags: ["起業家", "コンサルタント", "プロダクトマネージャー", "商品企画"]
  },
  {
    id: 9,
    title: "環境科学概論",
    subtitle: "持続可能な未来を考える",
    category: "自然科学",
    professorId: 5,
    day: "木",
    period: 3,
    credits: 2,
    semester: "前期",
    year: [1, 2],
    faculty: "全学部",
    university: "明治サイエンス大学",
    difficulty: 1,
    satisfaction: 4.2,
    enrollCount: 180,
    videoUrl: "",
    thumbnail: "",
    description: "気候変動、生態系、エネルギー問題など、環境問題の基礎を幅広く学び、解決策を考えます。",
    skills: ["環境分析", "SDGs", "科学リテラシー", "プレゼン"],
    evaluation: { test: 30, report: 40, attendance: 30, other: 0 },
    reviews: [
      { studentName: "Yさん (理学部1年)", rating: 4, text: "入門として最適。幅広く環境問題を知れます。フィールドワークも楽しい。", skill: "環境問題を科学的に分析できるようになった" },
      { studentName: "Zさん (法学部2年)", rating: 4, text: "文理関係なく学べる。SDGsに興味がある人におすすめ。", skill: "持続可能性の視点で考えられるようになった" },
      { studentName: "AAさん (経済学部1年)", rating: 5, text: "環境ビジネスに興味が湧きました。単位も取りやすいです。", skill: "環境レポートが書けるようになった" }
    ],
    careerTags: ["研究者", "公務員", "コンサルタント", "NPO"]
  },
  {
    id: 10,
    title: "AI・機械学習概論",
    subtitle: "AIの仕組みと未来を理解する",
    category: "情報科学",
    professorId: 1,
    day: "金",
    period: 3,
    credits: 2,
    semester: "前期",
    year: [2, 3, 4],
    faculty: "全学部",
    university: "明治サイエンス大学",
    difficulty: 3,
    satisfaction: 4.7,
    enrollCount: 140,
    videoUrl: "",
    thumbnail: "",
    description: "ニューラルネットワーク、深層学習、生成AIなどの基礎理論を、デモとハンズオンで学びます。",
    skills: ["機械学習", "AI倫理", "Python", "ニューラルネットワーク"],
    evaluation: { test: 30, report: 40, attendance: 20, other: 10 },
    reviews: [
      { studentName: "BBさん (工学部2年)", rating: 5, text: "ChatGPTの仕組みがわかるようになる。デモが毎回楽しみでした。", skill: "AIモデルの基礎的な構築ができるようになった" },
      { studentName: "CCさん (商学部3年)", rating: 4, text: "文系でもわかるように説明してくれる。AI時代に必須の知識だと感じました。", skill: "AIの可能性と限界を説明できるようになった" },
      { studentName: "DDさん (心理学部2年)", rating: 5, text: "認知科学とAIの接点が面白い。最先端の研究に触れられます。", skill: "AI倫理について議論できるようになった" }
    ],
    careerTags: ["エンジニア", "データサイエンティスト", "研究者", "プロダクトマネージャー"]
  },
  {
    id: 11,
    title: "保育と発達心理",
    subtitle: "子どもの発達を現場で学ぶ",
    category: "教育学",
    professorId: 4,
    day: "月",
    period: 3,
    credits: 2,
    semester: "前期",
    year: [1, 2, 3],
    faculty: "教育学部",
    university: "武庫川女子大学",
    difficulty: 2,
    satisfaction: 4.6,
    enrollCount: 132,
    videoUrl: "",
    thumbnail: "",
    description: "乳幼児期から学童期までの発達課題を理解し、保育現場での観察記録を通じて支援のあり方を考えます。",
    skills: ["発達理解", "観察記録", "コミュニケーション", "支援計画"],
    evaluation: { test: 20, report: 50, attendance: 20, other: 10 },
    syllabusUrl: "https://www.mukogawa-u.ac.jp/~kyoumuka/syllabus/2025/syl_2025.htm",
    sourceNote: "武庫川女子大学 2025年度シラバス掲載の学部体系に準拠して反映",
    reviews: [
      { studentName: "EEさん (教育学部2年)", rating: 5, text: "実習前に受けてよかった授業。子どもの見方が変わりました。", skill: "発達段階に応じた声かけができるようになった" },
      { studentName: "FFさん (文学部1年)", rating: 4, text: "事例が多くて分かりやすい。レポートは多いですが学びが深いです。", skill: "観察内容を根拠を持って記述できるようになった" },
      { studentName: "GGさん (教育学部3年)", rating: 5, text: "先生のフィードバックが丁寧で、実習にそのまま活かせました。", skill: "子ども理解に基づく支援計画を立てられるようになった" }
    ],
    careerTags: ["研究者", "公務員", "コンサルタント"]
  },
  {
    id: 12,
    title: "社会安全学総論１",
    subtitle: "社会安全学の基礎を学ぶ導入科目",
    category: "社会安全学",
    professorId: 4,
    day: "水",
    period: 3,
    credits: 2,
    semester: "前期",
    year: [1],
    faculty: "社会安全学部",
    university: "関西大学",
    difficulty: 2,
    satisfaction: 4.2,
    enrollCount: 160,
    videoUrl: "",
    thumbnail: "",
    description: "関西大学シラバス（カリキュラム検索）掲載の1年次配当科目。社会安全学の基礎領域を横断的に学ぶ導入授業です。",
    skills: ["社会安全学", "リスク理解", "基礎的分析", "学際的視点"],
    evaluation: { test: 30, report: 30, attendance: 20, other: 20 },
    syllabusUrl: "https://syllabus3.jm.kansai-u.ac.jp/syllabus/search/curri/2026/10/220/202610220010ZZZZ_.html?nendo=0;bu=0;gakubu=11;gakka=0;senko=0;couse=0;def_gakubu=",
    sourceNote: "関西大学 2026年度カリキュラム検索（社会安全学総論1・春学期 水3・2単位）を反映",
    reviews: [
      { studentName: "HHさん (社会安全学部1年)", rating: 4, text: "社会安全学の全体像がつかめる導入授業で、専門科目の見通しが立ちました。", skill: "リスク分野を俯瞰して理解できるようになった" },
      { studentName: "IIさん (社会安全学部1年)", rating: 4, text: "学際的な内容で面白い。基礎知識を広く学ぶのに向いています。", skill: "社会課題を安全の観点で整理できるようになった" },
      { studentName: "JJさん (社会安全学部1年)", rating: 5, text: "他科目に進む前に受けると理解が深まる授業でした。", skill: "社会安全学の基礎用語を説明できるようになった" }
    ],
    careerTags: ["公務員", "研究者", "コンサルタント"]
  },
  {
    id: 13,
    title: "データ活用と社会課題",
    subtitle: "統計で社会を読み解く",
    category: "情報科学",
    professorId: 1,
    day: "金",
    period: 1,
    credits: 2,
    semester: "前期",
    year: [1, 2, 3, 4],
    faculty: "現代社会学部",
    university: "京都産業大学",
    difficulty: 3,
    satisfaction: 4.5,
    enrollCount: 165,
    videoUrl: "",
    thumbnail: "",
    description: "京都産業大学シラバス検索システムの記載項目（授業概要・授業計画・事前事後学修・到達目標・評価方法など）に対応する学修を想定したデータ活用科目です。",
    skills: ["統計分析", "データ可視化", "課題解決", "レポート作成"],
    evaluation: { test: 30, report: 40, attendance: 20, other: 10 },
    syllabusUrl: "https://syllabus.kyoto-su.ac.jp/syllabus_search/search/search/",
    sourceNote: "京都産業大学 シラバス検索システム掲載の項目体系に準拠して反映",
    reviews: [
      { studentName: "KKさん (現代社会学部2年)", rating: 5, text: "社会問題を数字で考える視点が身につきました。扱うテーマが身近で面白いです。", skill: "統計から根拠ある主張を組み立てられるようになった" },
      { studentName: "LLさん (経済学部1年)", rating: 4, text: "ExcelとPythonの両方を使えるのが良い。最初は難しいけどサポートが手厚いです。", skill: "データを可視化して説明できるようになった" },
      { studentName: "MMさん (法学部3年)", rating: 4, text: "政策提案の演習が実践的。文系でも取り組める構成でした。", skill: "データ根拠のある提案書が作れるようになった" }
    ],
    careerTags: ["データサイエンティスト", "研究者", "公務員", "コンサルタント"]
  }
];

const fictionalUniversities = new Set([
  "東京情報大学",
  "慶応ビジネス大学",
  "早稲田クリエイティブ大学",
  "明治サイエンス大学"
]);
for (let i = courses.length - 1; i >= 0; i -= 1) {
  if (fictionalUniversities.has(courses[i].university)) {
    courses.splice(i, 1);
  }
}

export const professors = [
  {
    id: 1,
    name: "田中 慎一",
    title: "准教授",
    department: "情報工学科",
    avatar: "",
    greeting: "プログラミングは「魔法」を学ぶようなもの。一緒に楽しく学びましょう！",
    research: "ソフトウェア工学、AI応用",
    hobby: "コーヒー巡り、ボードゲーム",
    style: "ハンズオン中心。わからないことはすぐ質問OK！"
  },
  {
    id: 2,
    name: "鈴木 美咲",
    title: "教授",
    department: "経営学科",
    avatar: "",
    greeting: "ビジネスの世界は教科書の外にある。一緒に「現場」を学びましょう。",
    research: "ブランドマネジメント、消費者行動",
    hobby: "旅行、カフェ経営",
    style: "ケーススタディとグループディスカッション重視"
  },
  {
    id: 3,
    name: "佐藤 大輝",
    title: "講師",
    department: "デザイン学科",
    avatar: "",
    greeting: "「使いやすい」は最高の褒め言葉。デザインの力を実感しよう！",
    research: "ヒューマンコンピュータインタラクション",
    hobby: "スケッチ、建築探訪",
    style: "実制作とフィードバックの繰り返しで上達"
  },
  {
    id: 4,
    name: "山田 理恵",
    title: "教授",
    department: "心理学科",
    avatar: "",
    greeting: "人の心は宇宙より複雑。でも、データがあれば少しずつ解き明かせる。",
    research: "認知心理学、意思決定科学",
    hobby: "読書、ヨガ",
    style: "理論と実験のバランスを重視"
  },
  {
    id: 5,
    name: "中村 健太",
    title: "准教授",
    department: "メディア学科",
    avatar: "",
    greeting: "映像は言葉を超える。あなただけの物語を、映像で伝えよう。",
    research: "映像メディア論、環境コミュニケーション",
    hobby: "ドキュメンタリー鑑賞、登山",
    style: "少人数・作品制作中心。個別フィードバック重視"
  }
];

export const careers = [
  {
    id: "engineer",
    label: "エンジニア",
    icon: "💻",
    description: "Webサービスやアプリを開発するソフトウェアエンジニア",
    skills: ["Python", "アルゴリズム", "機械学習", "プロトタイピング"],
    courseIds: [1, 3, 5, 10]
  },
  {
    id: "datasci",
    label: "データサイエンティスト",
    icon: "📊",
    description: "データを分析し、ビジネスや研究に活かすスペシャリスト",
    skills: ["統計学", "Python", "機械学習", "データ可視化"],
    courseIds: [1, 4, 5, 7, 10]
  },
  {
    id: "designer",
    label: "デザイナー",
    icon: "🎨",
    description: "UI/UXやプロダクトのデザインを手がけるクリエイター",
    skills: ["Figma", "UXリサーチ", "プロトタイピング", "ストーリーテリング"],
    courseIds: [3, 6, 1]
  },
  {
    id: "marketer",
    label: "マーケター",
    icon: "📢",
    description: "商品やサービスを世の中に届けるマーケティングの専門家",
    skills: ["マーケティング", "データ分析", "消費者心理", "プレゼン"],
    courseIds: [2, 4, 6, 8]
  },
  {
    id: "entrepreneur",
    label: "起業家",
    icon: "🚀",
    description: "自分のアイデアで新しいビジネスを立ち上げるチャレンジャー",
    skills: ["ビジネスモデル", "ピッチ", "プロダクト開発", "マーケティング"],
    courseIds: [8, 2, 3, 1, 10]
  },
  {
    id: "researcher",
    label: "研究者",
    icon: "🔬",
    description: "大学院・企業研究所で新しい知見を生み出す研究者",
    skills: ["統計分析", "論文読解", "研究デザイン", "批判的思考"],
    courseIds: [7, 4, 5, 9, 10]
  },
  {
    id: "consultant",
    label: "コンサルタント",
    icon: "🧠",
    description: "企業の課題を解決に導く戦略コンサルタント",
    skills: ["データ分析", "プレゼン", "論理的思考", "ビジネスモデル"],
    courseIds: [4, 2, 5, 8]
  },
  {
    id: "creator",
    label: "クリエイター",
    icon: "🎬",
    description: "映像・コンテンツを通じて人々に影響を与えるクリエイター",
    skills: ["映像編集", "ストーリーテリング", "撮影技術", "Adobe Premiere"],
    courseIds: [6, 3, 8]
  },
  {
    id: "public-servant",
    label: "公務員",
    icon: "🏛️",
    description: "行政機関で政策立案や市民サービスを担う公共人材",
    skills: ["法制度理解", "政策分析", "文書作成", "調整力"],
    courseIds: [4, 9, 12, 13]
  },
  {
    id: "teacher",
    label: "教員・教育職",
    icon: "📚",
    description: "学校や教育機関で学びを支える教育の専門職",
    skills: ["教育設計", "コミュニケーション", "評価設計", "ファシリテーション"],
    courseIds: [11, 7, 3, 9]
  },
  {
    id: "medical-welfare",
    label: "医療・福祉職",
    icon: "🩺",
    description: "医療・福祉現場で人々の健康と生活を支援する専門職",
    skills: ["対人支援", "倫理観", "観察力", "多職種連携"],
    courseIds: [11, 7, 9, 4]
  },
  {
    id: "global-business",
    label: "国際ビジネス",
    icon: "🌍",
    description: "グローバル市場で事業開発や海外展開を担う人材",
    skills: ["異文化理解", "英語運用", "市場分析", "交渉力"],
    courseIds: [2, 8, 6, 12]
  },
  {
    id: "legal",
    label: "法務・コンプライアンス",
    icon: "⚖️",
    description: "企業や組織の法的リスクを管理し、健全な運営を支える専門職",
    skills: ["法的思考", "リスク管理", "規程理解", "説明責任"],
    courseIds: [4, 12, 13]
  },
  {
    id: "finance",
    label: "金融・会計",
    icon: "💹",
    description: "企業価値や資産を分析し、意思決定を支援する専門職",
    skills: ["財務分析", "統計活用", "数理思考", "レポーティング"],
    courseIds: [5, 13, 4, 2]
  },
  {
    id: "architecture-urban",
    label: "建築・都市計画",
    icon: "🏗️",
    description: "建築設計や都市空間づくりを通じて社会基盤を形づくる専門職",
    skills: ["空間設計", "構造理解", "環境配慮", "プロジェクト推進"],
    courseIds: [11, 12, 9]
  },
  {
    id: "media-pr",
    label: "広報・メディア",
    icon: "📰",
    description: "情報発信とコンテンツ制作で組織価値を高めるコミュニケーション職",
    skills: ["文章表現", "編集力", "企画力", "発信戦略"],
    courseIds: [6, 2, 8, 3]
  }
];

// ===== 履修済み・出席データ =====

export const enrollments = [
  { courseId: 1, enrolled: true },
  { courseId: 3, enrolled: true },
  { courseId: 4, enrolled: true },
  { courseId: 8, enrolled: true },
];

// 各授業の出席記録 (2026年度 前期: 4月〜7月)
export const attendanceRecords = {
  1: {
    totalClasses: 12,
    records: [
      { date: "2026-04-06", status: "present" },
      { date: "2026-04-13", status: "present" },
      { date: "2026-04-20", status: "present" },
      { date: "2026-04-27", status: "late" },
      { date: "2026-05-11", status: "present" },
      { date: "2026-05-18", status: "present" },
      { date: "2026-05-25", status: "absent" },
      { date: "2026-06-01", status: "present" },
      { date: "2026-06-08", status: "present" },
      { date: "2026-06-15", status: "present" },
    ]
  },
  3: {
    totalClasses: 12,
    records: [
      { date: "2026-04-08", status: "present" },
      { date: "2026-04-15", status: "present" },
      { date: "2026-04-22", status: "present" },
      { date: "2026-04-29", status: "present" },
      { date: "2026-05-13", status: "present" },
      { date: "2026-05-20", status: "late" },
      { date: "2026-05-27", status: "present" },
      { date: "2026-06-03", status: "present" },
      { date: "2026-06-10", status: "present" },
      { date: "2026-06-17", status: "late" },
    ]
  },
  4: {
    totalClasses: 12,
    records: [
      { date: "2026-04-09", status: "present" },
      { date: "2026-04-16", status: "absent" },
      { date: "2026-04-23", status: "present" },
      { date: "2026-04-30", status: "present" },
      { date: "2026-05-14", status: "present" },
      { date: "2026-05-21", status: "present" },
      { date: "2026-05-28", status: "late" },
      { date: "2026-06-04", status: "present" },
      { date: "2026-06-11", status: "absent" },
      { date: "2026-06-18", status: "present" },
    ]
  },
  8: {
    totalClasses: 12,
    records: [
      { date: "2026-04-08", status: "present" },
      { date: "2026-04-15", status: "present" },
      { date: "2026-04-22", status: "present" },
      { date: "2026-04-29", status: "present" },
      { date: "2026-05-13", status: "present" },
      { date: "2026-05-20", status: "present" },
      { date: "2026-05-27", status: "present" },
      { date: "2026-06-03", status: "present" },
      { date: "2026-06-10", status: "present" },
      { date: "2026-06-17", status: "present" },
    ]
  }
};

export function getAttendanceStats(courseId) {
  const data = attendanceRecords[courseId];
  if (!data) return null;
  const present = data.records.filter(r => r.status === 'present').length;
  const late = data.records.filter(r => r.status === 'late').length;
  const absent = data.records.filter(r => r.status === 'absent').length;
  const attended = data.records.length;
  const remaining = data.totalClasses - attended;
  const rate = Math.round(((present + late) / attended) * 100);
  return { present, late, absent, attended, remaining, totalClasses: data.totalClasses, rate, records: data.records };
}

export function isEnrolled(courseId) {
  return enrollments.some(e => e.courseId === courseId && e.enrolled);
}

// ===== ローカルストレージ管理 =====

export function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem('cf_favorites') || '[]');
  } catch { return []; }
}

export function toggleFavorite(courseId) {
  const favs = getFavorites();
  const idx = favs.indexOf(courseId);
  if (idx === -1) favs.push(courseId);
  else favs.splice(idx, 1);
  localStorage.setItem('cf_favorites', JSON.stringify(favs));
  return favs;
}

export function isFavorite(courseId) {
  return getFavorites().includes(courseId);
}

// ===== 外部シラバス参照情報 =====
// 参照元リンクに掲載されている情報を、そのまま検索・表示に使える形で保持
export const universitySyllabusCatalogs = {
  mukogawa: {
    university: "武庫川女子大学",
    syllabusUrl: "https://www.mukogawa-u.ac.jp/~kyoumuka/syllabus/2025/syl_2025.htm",
    year: 2025,
    categories: ["共通教育科目", "基礎教育科目・専門教育科目", "資格課程科目"],
    faculties: [
      "文学部",
      "教育学部",
      "心理・社会福祉学部",
      "健康・スポーツ科学部",
      "生活環境学部",
      "社会情報学部",
      "食物栄養科学部",
      "建築学部",
      "音楽学部",
      "薬学部",
      "環境共生学部",
      "看護学部",
      "経営学部"
    ],
    departments: [
      "日本語日本文学科",
      "歴史文化学科",
      "英語グローバル学科",
      "英語文化学科",
      "心理・社会福祉学科",
      "教育学科",
      "心理学科",
      "社会福祉学科",
      "健康・スポーツ科学科",
      "スポーツマネジメント学科",
      "生活環境学科",
      "情報メディア学科",
      "社会情報学科",
      "食物栄養学科",
      "食創造科学科",
      "建築学科",
      "景観建築学科",
      "演奏学科",
      "応用音楽学科",
      "薬学科（6年制）",
      "健康生命薬科学科（4年制）",
      "環境共生学科",
      "看護学科",
      "経営学科"
    ],
    architectureCourses: [
      { title: "初期演習Ⅰ", teacher: "中村 優花" },
      { title: "初期演習Ⅱ（建築入門）", teacher: "中村 優花" },
      { title: "建築英語Ⅰ", teacher: "Ｍ．E． ベントン" },
      { title: "建築英語Ⅱ", teacher: "Ｔ．Ｈ． オスティス" },
      { title: "建築数学", teacher: "鈴木 利友" },
      { title: "建築物理", teacher: "田川 浩之・宇野 朋子" },
      { title: "空間表現演習Ⅰ", teacher: "鈴木 利友・宇野 朋子・清澤 悟・笹岡 隆甫・鈴木 悦甫・田川 浩之・武村 和紀・田中 明・鳥巣 茂樹・中村 優花・南野 馨・柳沢 和彦・吉田 治英・度會 保浩" },
      { title: "空間表現演習Ⅱ", teacher: "柳沢 和彦・浅田 晶久・大井 史江・清澤 悟・黒岩 絵里子・鈴木 利友・田川 浩之・武村 和紀・天畠 秀秋・中村 優花・南野 馨・山田 雅明・度會 保浩" },
      { title: "建築設計演習Ⅰ", teacher: "柳沢 和彦・宇野 朋子・小笠原 香代・神家 昭雄・中江 哲・古川 博司・本城 邦彦・宮野 順子・山田 雅明" },
      { title: "建築設計演習Ⅱ", teacher: "中江 哲・宇野 朋子・鈴木 利友・田中 明・古川 博司・本城 邦彦・宮野 順子・山田 雅明" },
      { title: "建築設計演習Ⅲ", teacher: "大井 史江・上田 信也・鵜飼 邦夫・宇野 朋子・田中 明・中村 優花・三宗 司郎・山田 雅明・山本 親" },
      { title: "建築設計演習Ⅳ", teacher: "山本 親・上田 信也・中江 哲・中村 優花・宮野 順子・柳沢 和彦・山田 雅明" },
      { title: "建築設計演習Ⅴ", teacher: "宮野 順子・上田 信也・大井 史江・天畠 秀秋・中江 哲・本城 邦彦・三宗 司郎・山口 彩・山田 雅明・渡邉 豪秀" },
      { title: "図学・情報基礎演習Ⅰ", teacher: "鈴木 利友・宇野 朋子・田中 明・天畠 秀秋・中村 優花" },
      { title: "図学・情報基礎演習Ⅱ", teacher: "大井 史江・鈴木 利友・田中 明・天畠 秀秋・中村 優花・柳沢 和彦" },
      { title: "ＣＡＤ・ＣＧ応用演習Ⅰ", teacher: "鈴木 利友・宇野 朋子・田中 明・宮野 順子" },
      { title: "ＣＡＤ・ＣＧ応用演習Ⅱ", teacher: "鈴木 利友・田中 明" },
      { title: "卒業研究", teacher: "天畠 秀秋・宇野 朋子・大井 史江・岡﨑 甚幸・鈴木 利友・田川 浩之・田中 明・鳥巣 茂樹・中江 哲・中村 優花・未定（築）・宮野 順子・柳沢 和彦・山口 彩・山本 親" },
      { title: "現代建築論", teacher: "岡﨑 甚幸・天畠 秀秋" },
      { title: "建築設計計画Ⅰ", teacher: "鈴木 利友・中江 哲・室﨑 益輝" },
      { title: "建築設計計画Ⅱ", teacher: "岡﨑 甚幸・大井 史江・髙田 光雄・柳沢 和彦" },
      { title: "建築設計計画Ⅲ", teacher: "岡﨑 甚幸・鈴木 利友・天畠 秀秋・柳沢 和彦" },
      { title: "建築設計計画Ⅳ", teacher: "鈴木 利友・福島 貞道" },
      { title: "日本建築史", teacher: "田中 明" },
      { title: "世界建築史", teacher: "田﨑 祐生" },
      { title: "近代建築史", teacher: "石田 潤一郎" },
      { title: "建築環境工学Ⅰ", teacher: "宇野 朋子・松本 浩作" },
      { title: "建築環境工学Ⅱ", teacher: "宇野 朋子・高橋 大弐" },
      { title: "建築環境工学実験", teacher: "宇野 朋子・松本 浩作・宮下 真尚" },
      { title: "建築設備Ⅰ", teacher: "吉田 治典・高橋 大弐・高松 紅美子" },
      { title: "建築設備Ⅱ", teacher: "上田 真也・宇野（外部専門講師）・宇野（外部専門講師A）・吉田 治典" },
      { title: "建築構造力学Ⅰ", teacher: "田川 浩之" },
      { title: "建築構造力学Ⅱ", teacher: "田川 浩之" },
      { title: "地盤・振動論", teacher: "田川 浩之・河又 洋介・鳥巣 茂樹" },
      { title: "建築一般構造Ⅰ", teacher: "杉浦 徳利・宮野 順子" },
      { title: "建築一般構造Ⅱ", teacher: "鳥巣 茂樹・森本 順子" },
      { title: "建築各種構造", teacher: "田川 浩之" },
      { title: "建築材料", teacher: "田川 浩之" },
      { title: "建築構造材料実験", teacher: "田川 浩之・植田 和樹・河又 洋介・鳥巣 茂樹" },
      { title: "建築生産", teacher: "鳥巣（外部専門講師）" },
      { title: "建築施工", teacher: "渡辺 眞次" },
      { title: "建築法規Ⅰ", teacher: "福島 貞道" },
      { title: "建築法規Ⅱ", teacher: "福島 貞道" },
      { title: "都市計画・デザイン論", teacher: "上田 信也・寺本 健三・中嶋 節子・宗田 好史" },
      { title: "造園学", teacher: "熊倉 早苗・野間 秀行・宮前 保子・安田 東平" },
      { title: "測量実習", teacher: "松岡 恵悟" },
      { title: "建築フィールドワークⅠＡ", teacher: "中村 優花・宇野 朋子・大井 史江・岡﨑 甚幸・鈴木 利友・田川 浩之・田中 明・天畠 秀秋・鳥巣 茂樹・中江 哲・未定（築）・宮野 順子・柳沢 和彦・山口 彩・山本 親" },
      { title: "建築フィールドワークⅠＢ", teacher: "中村 優花・宇野 朋子・大井 史江・岡﨑 甚幸・鈴木 利友・田川 浩之・田中 明・天畠 秀秋・鳥巣 茂樹・中江 哲・未定（築）・宮野 順子・柳沢 和彦・山口 彩・山本 親" },
      { title: "建築フィールドワークⅡＡ", teacher: "田川 浩之・宇野 朋子・大井 史江・岡﨑 甚幸・鈴木 利友・田中 明・天畠 秀秋・鳥巣 茂樹・中江 哲・中村 優花・未定（築）・宮野 順子・柳沢 和彦・山口 彩・山本 親" },
      { title: "建築フィールドワークⅡＢ", teacher: "田川 浩之・宇野 朋子・大井 史江・岡﨑 甚幸・鈴木 利友・田中 明・天畠 秀秋・鳥巣 茂樹・中江 哲・中村 優花・未定（築）・宮野 順子・柳沢 和彦・山口 彩・山本 親" },
      { title: "建築フィールドワークⅢＡ", teacher: "宇野 朋子・大井 史江・岡﨑 甚幸・鈴木 利友・田川 浩之・田中 明・天畠 秀秋・鳥巣 茂樹・中江 哲・中村 優花・未定（築）・宮野 順子・柳沢 和彦・山口 彩・山本 親" },
      { title: "建築フィールドワークⅢＢ", teacher: "宇野 朋子・大井 史江・岡﨑 甚幸・鈴木 利友・田川 浩之・田中 明・天畠 秀秋・鳥巣 茂樹・中江 哲・中村 優花・未定（築）・宮野 順子・柳沢 和彦・山口 彩・山本 親" },
      { title: "建築フィールドワークⅣ", teacher: "天畠 秀秋・宇野 朋子・大井 史江・岡﨑 甚幸・鈴木 利友・田川 浩之・田中 明・鳥巣 茂樹・中江 哲・中村 優花・未定（築）・宮野 順子・柳沢 和彦・山口 彩・山本 親" },
      { title: "海外研修", teacher: "天畠 秀秋・上町 あずさ" }
    ]
  },
  kansai: {
    university: "関西大学",
    syllabusUrl: "https://syllabus3.jm.kansai-u.ac.jp/syllabus/search/curri/2026/10/220/202610220010ZZZZ_.html?nendo=0;bu=0;gakubu=11;gakka=0;senko=0;couse=0;def_gakubu=",
    year: 2026,
    dataType: "カリキュラム検索結果（配当年次・科目名・時間割コード・単位・担任者・曜限）",
    sampledCourses: [
      { title: "社会安全学総論１", code: "75137", credits: 2, teacher: "菅原 慎悦 他", schedule: "春学期 水3" },
      { title: "社会安全学総論２", code: "75153", credits: 2, teacher: "河野 和宏 他", schedule: "秋学期 水3" },
      { title: "社会安全のための統計学", code: "75196", credits: 2, teacher: "栁原 宏和", schedule: "秋学期 月4" },
      { title: "安全と法制度", code: "75198", credits: 2, teacher: "金子 啓子", schedule: "春学期 木5" },
      { title: "応用データサイエンス", code: "75249", credits: 2, teacher: "福井 敬祐", schedule: "秋学期 月2" },
      { title: "情報セキュリティ論", code: "75251", credits: 2, teacher: "河野 和宏", schedule: "秋学期 月4" },
      { title: "災害心理学", code: "75258", credits: 2, teacher: "元吉 忠寛", schedule: "春学期 金3" },
      { title: "防災まちづくり", code: "75268", credits: 2, teacher: "越山 健治", schedule: "春学期 火4" },
      { title: "地震災害論", code: "75269", credits: 2, teacher: "林 能成", schedule: "春学期 木3" },
      { title: "ＡＩ実習", code: "75281", credits: 1, teacher: "河野 和宏", schedule: "秋学期 月1" }
    ],
    expandedCourses: [
      { title: "社会安全学総論１", code: "75137", credits: 2, teacher: "菅原 慎悦 他", schedule: "春学期 水3" },
      { title: "社会安全学総論２", code: "75153", credits: 2, teacher: "河野 和宏 他", schedule: "秋学期 水3" },
      { title: "ＩＴ実習", code: "75174", credits: 1, teacher: "河合 恵美子", schedule: "春学期 火2" },
      { title: "社会安全のための数学１", code: "75188", credits: 2, teacher: "服部 健太郎", schedule: "春学期 金3" },
      { title: "社会安全のための数学２", code: "75195", credits: 2, teacher: "林 能成", schedule: "秋学期 火2" },
      { title: "社会安全のための統計学", code: "75196", credits: 2, teacher: "栁原 宏和", schedule: "秋学期 月4" },
      { title: "安全と法制度", code: "75198", credits: 2, teacher: "金子 啓子", schedule: "春学期 木5" },
      { title: "科学技術史と社会", code: "75199", credits: 2, teacher: "菅原 慎悦", schedule: "秋学期 月2" },
      { title: "法学概論", code: "75201", credits: 2, teacher: "山崎 栄一", schedule: "秋学期 他" },
      { title: "経済学概論", code: "75203", credits: 2, teacher: "村田 崇暢", schedule: "秋学期 火4" },
      { title: "心理学", code: "75211", credits: 2, teacher: "中村 隆宏", schedule: "春学期 他" },
      { title: "自然科学概論", code: "75213", credits: 2, teacher: "川口 寿裕", schedule: "秋学期 金4" },
      { title: "地球科学概論", code: "75214", credits: 2, teacher: "服部 健太郎", schedule: "春学期 火2" },
      { title: "活用法を見聞するAI・データサイエンス", code: "00311", credits: 2, teacher: "石橋 健 他", schedule: "春学期 他" },
      { title: "活用法を体験するAI・データサイエンス", code: "00313", credits: 2, teacher: "石橋 健 他", schedule: "秋学期 他" },
      { title: "社会のためのデータサイエンス実践基礎", code: "00318", credits: 2, teacher: "石橋 健", schedule: "春学期 他" },
      { title: "AI・データエンジニアリング実践基礎", code: "00319", credits: 2, teacher: "矢田 勝俊 他", schedule: "秋学期 他" },
      { title: "災害事例分析", code: "75218", credits: 2, teacher: "奥村 与志弘", schedule: "秋学期 火1" },
      { title: "化学物質と環境リスク", code: "75219", credits: 2, teacher: "山本 秀樹", schedule: "春学期 火5" },
      { title: "製品安全論", code: "75220", credits: 2, teacher: "伊藤 大輔", schedule: "秋学期 月3" },
      { title: "安全システム論", code: "75221", credits: 2, teacher: "細川 茂雄", schedule: "春学期 木4" },
      { title: "防災教育", code: "75223", credits: 2, teacher: "城下 英行", schedule: "春学期 月5" },
      { title: "社会技術論", code: "75228", credits: 2, teacher: "長門 裕介", schedule: "春学期 火2" },
      { title: "コンプライアンス論", code: "75230", credits: 2, teacher: "小野 梓", schedule: "秋学期 水2" },
      { title: "防災行政論", code: "75232", credits: 2, teacher: "永田 尚三", schedule: "秋学期 他" },
      { title: "クライシスマネジメント論", code: "75234", credits: 2, teacher: "辻本 慎太郎", schedule: "春学期集中 他" },
      { title: "リスクと災害の経済学", code: "75236", credits: 2, teacher: "永松 伸吾", schedule: "秋学期 他" },
      { title: "交通システム安全論", code: "75237", credits: 2, teacher: "吉田 裕", schedule: "春学期 月2" },
      { title: "リスクマネジメント論", code: "75241", credits: 2, teacher: "亀井 克之", schedule: "秋学期 火2" },
      { title: "危機管理とリーダーシップ", code: "75242", credits: 2, teacher: "大森 勉", schedule: "春学期 火2" },
      { title: "災害心理学", code: "75258", credits: 2, teacher: "元吉 忠寛", schedule: "春学期 金3" },
      { title: "ヒューマンエラー", code: "75259", credits: 2, teacher: "中村 隆宏", schedule: "春学期 他" },
      { title: "防災まちづくり", code: "75268", credits: 2, teacher: "越山 健治", schedule: "春学期 火4" },
      { title: "地震災害論", code: "75269", credits: 2, teacher: "林 能成", schedule: "春学期 木3" },
      { title: "水災害論", code: "75271", credits: 2, teacher: "大野 哲之", schedule: "秋学期 月2" },
      { title: "地盤災害論", code: "75272", credits: 2, teacher: "小山 倫史", schedule: "秋学期 月5" },
      { title: "災害情報論", code: "75279", credits: 2, teacher: "近藤 誠司", schedule: "秋学期 水1" },
      { title: "数学実習", code: "75280", credits: 1, teacher: "福井 敬祐", schedule: "春学期 月4" },
      { title: "ＡＩ実習", code: "75281", credits: 1, teacher: "河野 和宏", schedule: "秋学期 月1" },
      { title: "統計データ解析実習１", code: "75283", credits: 1, teacher: "辻川 典文", schedule: "春学期 月1" },
      { title: "ＧＩＳ実習", code: "75285", credits: 1, teacher: "小山 倫史", schedule: "春学期 月3" },
      { title: "災害シミュレーション実習", code: "75286", credits: 1, teacher: "米山 望", schedule: "春学期（隔週・クォーター） 水1/水2" }
    ]
  },
  kyotoSangyo: {
    university: "京都産業大学",
    syllabusUrl: "https://syllabus.kyoto-su.ac.jp/syllabus_search/search/search/",
    dataType: "シラバス検索条件・記載項目",
    syllabusSections: [
      "授業概要",
      "授業内容・授業計画",
      "事前・事後学修",
      "授業の到達目標",
      "身に付く力",
      "履修上の注意",
      "評価方法",
      "教材",
      "質問や相談の方法"
    ],
    faculties: [
      "共通教育科目",
      "教職課程科目",
      "融合教育のための入門科目",
      "経済学部",
      "経営学部",
      "法学部",
      "現代社会学部",
      "国際関係学部",
      "外国語学部",
      "文化学部",
      "理学部",
      "工学部",
      "コンピュータ理工学部",
      "情報理工学部",
      "総合生命科学部",
      "生命科学部",
      "アントレプレナーシップ学環"
    ]
  }
};

function parseScheduleText(scheduleText) {
  const semester = scheduleText.includes("秋") ? "後期" : "前期";
  const dayMatch = scheduleText.match(/[月火水木金]/);
  const periodMatch = scheduleText.match(/[1-7]/);
  return {
    semester,
    day: dayMatch ? dayMatch[0] : "月",
    period: periodMatch ? parseInt(periodMatch[0], 10) : 1
  };
}

function splitInstructorNames(teacherText) {
  if (!teacherText) return [];
  return teacherText
    .replace(/　/g, " ")
    .split("・")
    .map(s => s.trim())
    .filter(Boolean);
}

function getCareerTagsForGeneratedCourse({ university, title, faculty, category }) {
  const tags = new Set();

  if (university === "武庫川女子大学") {
    tags.add("建築・都市計画");
    tags.add("クリエイター");
  }

  if (university === "関西大学") {
    tags.add("公務員");
    tags.add("コンサルタント");
  }

  if (university === "京都産業大学") {
    tags.add("研究者");
    tags.add("教員・教育職");
  }

  const text = `${title} ${faculty} ${category}`;
  if (/AI|データ|統計|情報|IT|ＧＩＳ/i.test(text)) {
    tags.add("データサイエンティスト");
    tags.add("エンジニア");
    tags.add("金融・会計");
  }
  if (/設計|建築|都市|造園|空間/.test(text)) {
    tags.add("建築・都市計画");
  }
  if (/法|行政|政策|コンプライアンス|安全/.test(text)) {
    tags.add("法務・コンプライアンス");
    tags.add("公務員");
  }
  if (/英語|海外|国際/.test(text)) {
    tags.add("国際ビジネス");
  }
  if (/心理|福祉|教育/.test(text)) {
    tags.add("教員・教育職");
    tags.add("医療・福祉職");
  }
  if (/メディア|ジャーナリズム|発信/.test(text)) {
    tags.add("広報・メディア");
  }
  if (/経営|起業|ビジネス/.test(text)) {
    tags.add("起業家");
    tags.add("マーケター");
  }

  if (tags.size === 0) {
    tags.add("研究者");
  }
  return Array.from(tags);
}

function buildCatalogCourses() {
  let nextId = Math.max(...courses.map(c => c.id)) + 1;
  const generated = [];

  // 武庫川女子大学: 建築学科の科目一覧を優先して検索用科目を生成
  const mukogawaSource = universitySyllabusCatalogs.mukogawa.architectureCourses?.length
    ? universitySyllabusCatalogs.mukogawa.architectureCourses
    : universitySyllabusCatalogs.mukogawa.departments.map(d => ({ title: `${d}入門`, teacher: "担当教員" }));

  mukogawaSource.forEach((course, i) => {
    const day = ["月", "火", "水", "木", "金"][i % 5];
    const instructorNames = splitInstructorNames(course.teacher);
    generated.push({
      id: nextId++,
      title: course.title,
      subtitle: "武庫川女子大学 建築学科シラバス掲載科目",
      category: "建築学",
      professorId: (i % 5) + 1,
      day,
      period: (i % 4) + 1,
      credits: 2,
      semester: i % 2 === 0 ? "前期" : "後期",
      year: [1, 2, 3, 4],
      faculty: "建築学部",
      university: "武庫川女子大学",
      difficulty: 3,
      satisfaction: 4.3,
      enrollCount: 80 + i * 4,
      videoUrl: "",
      thumbnail: "",
      description: `武庫川女子大学 建築学部 建築学科シラバス掲載科目。担当教員: ${course.teacher}`,
      instructorNames,
      skills: ["建築設計", "空間把握", "構造理解", "表現力"],
      evaluation: { test: 30, report: 30, attendance: 30, other: 10 },
      reviews: [
        { studentName: "在学生", rating: 4, text: "分野全体を把握しやすい授業でした。", skill: "学科の学びを体系的に理解できた" }
      ],
      careerTags: getCareerTagsForGeneratedCourse({
        university: "武庫川女子大学",
        title: course.title,
        faculty: "建築学部",
        category: "建築学"
      }),
      syllabusUrl: universitySyllabusCatalogs.mukogawa.syllabusUrl
    });
  });

  // 関西大学: 取得済み科目一覧から検索用科目を生成
  const kansaiSource = universitySyllabusCatalogs.kansai.expandedCourses?.length
    ? universitySyllabusCatalogs.kansai.expandedCourses
    : universitySyllabusCatalogs.kansai.sampledCourses;
  kansaiSource.forEach((course, i) => {
    const parsed = parseScheduleText(course.schedule);
    const instructorNames = splitInstructorNames(course.teacher);
    generated.push({
      id: nextId++,
      title: course.title,
      subtitle: `時間割コード ${course.code}`,
      category: "社会安全学",
      professorId: (i % 5) + 1,
      day: parsed.day,
      period: parsed.period,
      credits: course.credits,
      semester: parsed.semester,
      year: [1, 2],
      faculty: "社会安全学部",
      university: "関西大学",
      difficulty: 3,
      satisfaction: 4.2,
      enrollCount: 90 + i * 7,
      videoUrl: "",
      thumbnail: "",
      description: `関西大学カリキュラム検索掲載科目。担当者: ${course.teacher} / 曜限: ${course.schedule}`,
      instructorNames,
      skills: ["リスク分析", "社会課題理解", "実践力", "データ活用"],
      evaluation: { test: 30, report: 30, attendance: 20, other: 20 },
      reviews: [
        { studentName: "履修者", rating: 4, text: "実務に近い観点で学べる科目でした。", skill: "安全分野の基礎を習得" }
      ],
      careerTags: getCareerTagsForGeneratedCourse({
        university: "関西大学",
        title: course.title,
        faculty: "社会安全学部",
        category: "社会安全学"
      }),
      syllabusUrl: universitySyllabusCatalogs.kansai.syllabusUrl
    });
  });

  // 京都産業大学: 開講学部等×シラバス項目で検索用科目を拡充
  const kyotoGenerated = [];
  universitySyllabusCatalogs.kyotoSangyo.faculties.forEach((faculty, i) => {
    kyotoGenerated.push({ faculty, focus: "授業概要" });
    kyotoGenerated.push({ faculty, focus: "授業の到達目標" });
  });

  kyotoGenerated.forEach((item, i) => {
    const instructorNames = ["シラバス検索結果参照"];
    generated.push({
      id: nextId++,
      title: `${item.faculty}シラバス探究`,
      subtitle: `${item.focus}を中心に学ぶ`,
      category: "教養",
      professorId: (i % 5) + 1,
      day: ["月", "火", "水", "木", "金"][i % 5],
      period: ((i + 1) % 4) + 1,
      credits: 2,
      semester: i % 2 === 0 ? "前期" : "後期",
      year: [1, 2, 3, 4],
      faculty: item.faculty,
      university: "京都産業大学",
      difficulty: 2,
      satisfaction: 4.0,
      enrollCount: 70 + i * 5,
      videoUrl: "",
      thumbnail: "",
      description: "京都産業大学シラバス検索で示される項目に沿って学修計画を立てるための検索用科目データです。",
      instructorNames,
      skills: ["履修計画", "情報整理", "自己管理", "学修設計"],
      evaluation: { test: 20, report: 40, attendance: 30, other: 10 },
      reviews: [
        { studentName: "履修者", rating: 4, text: "シラバスの読み方がわかり履修計画に役立ちました。", skill: "学修計画を立てられるようになった" }
      ],
      careerTags: getCareerTagsForGeneratedCourse({
        university: "京都産業大学",
        title: `${item.faculty}シラバス探究`,
        faculty: item.faculty,
        category: "教養"
      }),
      syllabusUrl: universitySyllabusCatalogs.kyotoSangyo.syllabusUrl
    });
  });

  return generated;
}

courses.push(...buildCatalogCourses());

// ===== プロフィール管理 =====

const PROFILE_KEY = 'cn_profile';

const defaultProfile = {
  nickname: '',
  university: '',
  faculty: '',
  year: '',
  interests: [],
  career: '',
  bio: '',
  avatar: '😊',
};

export function getProfile() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROFILE_KEY) || '{}');
    return { ...defaultProfile, ...saved };
  } catch { return { ...defaultProfile }; }
}

export function saveProfile(profile) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify({ ...defaultProfile, ...profile }));
}

export function isProfileSetup() {
  const p = getProfile();
  return !!(p.nickname && p.university);
}
