// 掲載文 確定版 2026-10-19
export type WorkCategory = "Webサイト制作" | "システム開発";
export type Work = {
  slug: string;
  name: string;
  category: WorkCategory;
  summary: string;
  lead: [string, string]; // 詳細ページ上部・右側の大きいリード（2行）
  caption: string;        // 詳細のメイン画像キャプション
  tags: string[];
  image: string;
  url: string;
  overviewHeading: [string, string];
  overviewText: string[];
  showOnTop?: boolean;
};

export const works: Work[] = [
  {
    slug: "baseroom",
    name: "BASEROOM",
    category: "Webサイト制作",
    summary: "現役インフルエンサーが経営する、キャスティング・制作・マーケティング会社のコーポレートサイト。",
    lead: ["現役インフルエンサーの会社を、", "熱量あるビジュアルで。"],
    caption: "BASEROOM｜コーポレートサイト",
    tags: ["コーポレートサイト", "WordPress"],
    image: "/images/works/baseroom.png",
    url: "https://baseroom.jp/",
    overviewHeading: [
      "インフルエンサーのキャスティング・",
      "マーケティング会社のコーポレートサイト制作。",
    ],
    overviewText: [
      "株式会社BASEROOMは、現役インフルエンサーが経営する、キャスティング・制作・マーケティングの会社です。",
      "炎のグラデーションと手書き風のロゴを大きく使ったビジュアルで、所属タレントや事例を紹介するコーポレートサイトを制作しました。",
    ],
    showOnTop: true,
  },
  {
    slug: "wataberu",
    name: "WATABERU",
    category: "Webサイト制作",
    summary: "美食家・渡部氏がプロデュースする食品の公式オンラインショップ。「家で、一流。」の世界観を届けます。",
    lead: ["家で、一流。", "本物の味を届けるECサイト。"],
    caption: "WATABERU｜公式オンラインショップ",
    tags: ["ECサイト", "Shopify"],
    image: "/images/works/wataberu.png",
    url: "https://wataberu.com/",
    overviewHeading: ["美食家・渡部氏がプロデュースする", "食品ECサイトの構築。"],
    overviewText: [
      "WATABERUは、美食家・渡部氏がプロデュースする食品の公式オンラインショップです。",
      "写真とイラストを組み合わせたコラージュ風のビジュアルで、「家で、一流。わたべる。」のコンセプトを表現したECサイトを制作しました。",
    ],
    showOnTop: true,
  },
  {
    slug: "increa",
    name: "INCRÉA.tokyo",
    category: "Webサイト制作",
    summary: "次世代メイク技術「インクレア」を学ぶ、美容師・アイリスト向けの施術者募集・講習サイト。",
    lead: ["次世代メイク技術の", "担い手を集めるサイト。"],
    caption: "INCRÉA.tokyo｜施術者募集・講習サイト",
    tags: ["採用・募集サイト", "美容"],
    image: "/images/works/increa.png",
    url: "https://artist.increa.tokyo/",
    overviewHeading: ["次世代メイク技術「インクレア」の", "施術者募集・講習サイト制作。"],
    overviewText: [
      "INCRÉA.tokyoは、アートメイクとは異なる新しいメイク技術「インクレア」の施術者を募集する講習サイトです。",
      "スマートフォンでの閲覧を軸にしたレイアウトで、コンセプトや受講メニュー、受講者の声を紹介し、LINEからの応募につなげています。",
    ],
  },
  {
    slug: "fairy-select",
    name: "妖精診断",
    category: "システム開発",
    summary: "全10問に答えるだけで、職務経歴書や面談に使える「自分の説明書」が作れる無料の診断コンテンツ。",
    lead: ["10問の診断で、", "自分の説明書をつくる。"],
    caption: "妖精診断｜キャリア診断コンテンツ",
    tags: ["診断コンテンツ", "人材紹介"],
    image: "/images/works/fairy-select.png",
    url: "https://fairy-select.jp/",
    overviewHeading: ["全10問で「自分の説明書」がつくれる", "診断コンテンツの開発。"],
    overviewText: [
      "妖精診断は、キャリアを考える人に向けた無料の診断コンテンツです。",
      "回答からタイプを判定して妖精のキャラクターで表現し、職務経歴書や面談に使えるスキルシートを作成。人材紹介サービスへの登録につなげる仕組みを開発しました。",
    ],
    showOnTop: true,
  },
  {
    slug: "baron-beauty",
    name: "BARON Beauty",
    category: "システム開発",
    summary: "池袋の完全個室美容室の公式サイト。スタイリストごとの紹介と指名予約の導線をつくりました。",
    lead: ["完全個室の美容室を、", "指名予約までつなぐ。"],
    caption: "BARON Beauty｜美容室公式サイト",
    tags: ["美容室", "予約連携"],
    image: "/images/works/baron-beauty.png",
    url: "https://baronbeauty.tokyo/",
    overviewHeading: ["池袋の完全個室美容室の", "公式サイトと指名予約導線の構築。"],
    overviewText: [
      "BARON Beautyは、池袋駅東口から徒歩5分、5つの完全個室でマンツーマン施術を行う美容室です。",
      "スタイリストのプロフィールや得意なスタイルを紹介し、そのまま指名予約へ進める仕組みを開発しました。",
    ],
  },
  {
    slug: "canvas",
    name: "CANVAS",
    category: "システム開発",
    summary: "Web2とWeb3をつなぎ、日本ブランドの海外展開を支援する会社のコーポレートサイト。",
    lead: ["Web2とWeb3を、", "つなぐ会社のサイト。"],
    caption: "CANVAS｜コーポレートサイト",
    tags: ["コーポレートサイト", "Web3"],
    image: "/images/works/canvas.png",
    url: "https://canva3.jp/",
    overviewHeading: ["Web2とWeb3をつなぐ支援会社の", "コーポレートサイト制作。"],
    overviewText: [
      "CANVAS INC.は、Web3コンサルティングとグローバルマーケティングで、日本ブランドの海外展開や新しい事業モデルを支援する会社です。",
      "事業内容やニュースを発信するコーポレートサイトを開発しました。",
    ],
  },
  {
    slug: "lunage-clinic",
    name: "ルナージュクリニック",
    category: "システム開発",
    summary: "表参道の美容皮膚科・歯科クリニックの公式サイト。施術メニューと料金をわかりやすく届けます。",
    lead: ["大人の肌悩みに、", "わかりやすく応える。"],
    caption: "ルナージュクリニック｜クリニック公式サイト",
    tags: ["クリニック", "CMS"],
    image: "/images/works/lunage-clinic.png",
    url: "https://lunage-clinic.com/",
    overviewHeading: ["表参道の美容皮膚科・歯科クリニックの", "公式サイト制作。"],
    overviewText: [
      "medical and dental LUNAGE CLINICは、シミ・しわ・たるみなど大人の肌悩みを「切らずに」解消する、表参道の美容クリニックです。",
      "施術メニューと料金をカテゴリごとに管理・更新できる仕組みと、LINE予約への導線を備えたサイトを開発しました。",
    ],
  },
];
