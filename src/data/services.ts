// 掲載文 確定版 2026-10-19
export type Service = {
  slug: string;
  no: string;
  name: string;
  category: string;
  catch: string;
  heroLead: [string, string];
  heroText: string;
  tags: string[];
  image: string;
  siteUrl?: string;
  /** true のとき TOP カードは siteUrl へ。詳細ページは生成しない */
  skipDetailPage?: boolean;
  about: { label: string; heading: [string, string]; lead: string; text: string };
  concepts: { title: string; text: string; icon: "Flag" | "Sparkles" | "BookOpen" | "MessageCircle" | "ShieldCheck" | "Home" | "Video" | "Clock" | "Send" }[];
  featuresHeading: string;
  features: { label: string; title: string; text: string; note: string; icon: "Sparkles" | "Goal" | "MessageCircle" | "ShieldCheck" | "Home" | "Video" | "Send" }[];
};

export const services: Service[] = [
  {
    slug: "hatake",
    no: "01",
    name: "hatake",
    category: "学習管理システム",
    catch: "AIでカリキュラム生成。ゴールへ導く学習管理システム(LMS)",
    heroLead: ["AIでカリキュラム生成。", "ゴールへ導く、学びを。"],
    heroText:
      "AIによるカリキュラム生成と、ゴールを見据えた学習管理。hatakeは、人材育成のための学びを支える学習管理システム（LMS）です。",
    tags: ["学習管理システム（LMS）", "人材育成"],
    image: "/images/service-hatake.png",
    siteUrl: "https://lp.hatake.ai/",
    about: {
      label: "ABOUT HATAKE",
      heading: ["学びを、", "ゴールにつなげる。"],
      lead: "カリキュラムづくりと学習管理を、ひとつの目的へ。",
      text: "人材育成では、「何を学ぶか」だけでなく、「何のために学ぶか」が大切です。hatakeは、AIによるカリキュラム生成を入り口に、ゴールへ向かう学習を支えます。",
    },
    featuresHeading: "AIの力と、ゴール志向の学習管理。",
    concepts: [
      { title: "目指すゴール", text: "どのような人材を育てたいか。学びの先にある目的を起点に考えます。", icon: "Flag" },
      { title: "AIでカリキュラム生成", text: "学ぶ内容をカリキュラムへ。AIを活用して、学びの道筋づくりを支えます。", icon: "Sparkles" },
      { title: "ゴールへ向かう学習管理", text: "カリキュラムの生成から学習管理へ。目的を見失わない学びにつなげます。", icon: "BookOpen" },
    ],
    features: [
      {
        label: "AI × カリキュラム",
        title: "学びの道筋を、AIとつくる。",
        text: "カリキュラムの生成にAIを活用。動画・PDF・マークダウンなど、貴社に合った形式の教材で、人材育成に向けた学びを組み立てられます。",
        note: "カリキュラムづくりから、学習の第一歩へ。",
        icon: "Sparkles",
      },
      {
        label: "LMS × ゴール",
        title: "目指す姿を、学びの軸に。",
        text: "進捗管理や修了証の発行まで、学習をしっかり管理。目指すゴールと日々の学びをつなぐ学習管理システムとして、人材育成を支えます。",
        note: "学ぶこと自体を目的にせず、ゴールに向かう学習へ。",
        icon: "Goal",
      },
    ],
  },
  {
    slug: "sumapochi",
    no: "02",
    name: "住まぽち",
    category: "住宅会社紹介サービス",
    catch: "LINEで完結。住宅会社を中立な立場で無料紹介するサービス。",
    heroLead: ["LINEで完結。", "家づくりの会社選びを、もっと気軽に。"],
    heroText:
      "住まぽちは、LINEで質問に答えるだけで、希望に合った住宅会社を中立な立場で無料紹介するサービスです。営業電話なしで、自宅にいながら複数の会社を比較できます。",
    tags: ["住宅会社紹介", "LINE"],
    image: "/images/service-sumapochi.png", // ※ Figma TOP のカード画像を書き出し
    siteUrl: "https://sma-pochi.com/",
    about: {
      label: "ABOUT SUMAPOCHI",
      heading: ["営業なしで、", "自分に合う会社と出会う。"],
      lead: "住宅会社選びのストレスを、LINEひとつで解消。",
      text: "注文住宅を考えはじめた方にとって、会社選びは最初の大きな悩みです。住まぽちは、中立なスタッフが希望に合う会社を厳選してご紹介し、お断りの連絡まで代行します。",
    },
    featuresHeading: "LINEで、中立に、無料で。",
    concepts: [
      { title: "LINEで完結", text: "質問に答えるだけで、希望に合った住宅会社を提案します。", icon: "MessageCircle" },
      { title: "中立な立場で紹介", text: "特定の会社に偏らず、スタッフが厳選してご紹介します。", icon: "ShieldCheck" },
      { title: "すべて無料", text: "相談から紹介まで無料。営業電話もありません。", icon: "Home" },
    ],
    features: [
      {
        label: "LINE × 比較",
        title: "自宅で、まとめて比較。",
        text: "LINEで質問に答えるだけで、提携する住宅会社の中から合う会社を自動で提案。忙しい方でも、すき間時間で家づくりの第一歩を踏み出せます。",
        note: "簡単1分。複数社を、営業なしで。",
        icon: "MessageCircle",
      },
      {
        label: "相談 × サポート",
        title: "会社選びの先まで、寄り添う。",
        text: "家づくり計画書の無料作成や土地の相談、見学の日程調整まで対応。お断りの連絡も代行するので、気兼ねなく比較できます。",
        note: "中立な立場で、納得の会社選びを。",
        icon: "ShieldCheck",
      },
    ],
  },
  {
    slug: "ikuiku",
    no: "03",
    name: "IKU IKU",
    category: "オンライン診療",
    catch: "話しにくい性の悩みを、LINEから気軽に相談できるオンライン診療。",
    heroLead: ["話しにくい悩みを、", "もっと気軽に相談できる場所へ。"],
    heroText:
      "IKU IKUは、病院では相談しにくい性の悩みに特化したオンライン診療サービスです。LINEから相談・予約ができ、診察からお薬の配送まで自宅で完結します。",
    tags: ["オンライン診療", "LINE"],
    image: "/images/service-ikuiku.png", // ※ Figma TOP のカード画像を書き出し
    siteUrl: "https://ikuiku.clinic/",
    about: {
      label: "ABOUT IKU IKU",
      heading: ["性のアレコレ、", "話していい。"],
      lead: "ひとりで抱えがちな悩みに、オンラインで寄り添う。",
      text: "性に関する悩みは、身近な人にも病院にも相談しづらいものです。IKU IKUは、オンライン診療とLINEでのやりとりで、気軽に専門家へ相談できる環境をつくります。",
    },
    featuresHeading: "話しにくい悩みを、気軽に相談できる場所に。",
    concepts: [
      { title: "LINEで相談・予約", text: "いつものLINEから、気軽に相談や予約ができます。", icon: "MessageCircle" },
      { title: "オンラインで完結", text: "診察からお薬の配送まで、自宅で受けられます。", icon: "Send" },
      { title: "わかりやすい料金", text: "お薬ごとの価格を事前に確認できます。", icon: "ShieldCheck" },
    ],
    features: [
      {
        label: "オンライン × 診療",
        title: "通院せずに、専門家へ。",
        text: "スマートフォンから医師の診察を受けられるオンライン診療。人目を気にせず、自分のタイミングで相談できます。",
        note: "誰にも知られず、自宅で相談。",
        icon: "Send",
      },
      {
        label: "LINE × 相談",
        title: "はじめの一歩を、軽くする。",
        text: "LINEで相談・予約ができ、セルフチェックで自分の状態を知ることもできます。悩みを話すハードルを下げる仕組みを用意しています。",
        note: "話していい、と思える場所に。",
        icon: "MessageCircle",
      },
    ],
  },
  {
    slug: "short-movie",
    no: "04",
    name: "ショート動画制作",
    category: "SNS動画制作",
    catch: "AIで効率化された動画制作でコスパの良いSNS運用をサポート。",
    heroLead: ["AIで効率化。", "続けられるSNS運用を。"],
    heroText:
      "AIを活用して効率化した制作体制で、ショート動画を手軽に制作します。コストを抑えながら、継続的なSNS運用をサポートします。",
    tags: ["ショート動画", "SNS運用"],
    image: "/images/service-shortmovie.png",
    // siteUrl なし → サービスサイト系の表示は出さない
    about: {
      label: "ABOUT SHORT MOVIE",
      heading: ["動画づくりを、", "もっと身近に。"],
      lead: "制作の手間とコストを抑えて、発信を止めない。",
      text: "SNSでの発信には、ショート動画の継続的な投稿が欠かせません。YASAIはAIを活用した制作フローで、コストを抑えながら質の高いショート動画をお届けします。",
    },
    featuresHeading: "AIで、早く、手頃に、続けられる。",
    concepts: [
      { title: "AIで効率化", text: "台本づくりから編集まで、AIを活用して制作を効率化します。", icon: "Sparkles" },
      { title: "コストを抑えて", text: "効率化した分、続けやすい価格での制作を目指します。", icon: "ShieldCheck" },
      { title: "継続的な運用へ", text: "単発で終わらせず、SNS運用を続けられる体制をつくります。", icon: "Video" },
    ],
    features: [
      {
        label: "AI × 制作",
        title: "早く、手軽に、ショート動画を。",
        text: "AIを取り入れた制作フローで、ショート動画を効率よく制作。SNSのトレンドに合わせたスピード感のある発信を支えます。",
        note: "制作の負担を減らして、発信に集中。",
        icon: "Sparkles",
      },
      {
        label: "SNS × 運用",
        title: "続けることで、成果につなげる。",
        text: "YouTube Shorts、TikTok、Instagram Reels など、各SNSでの継続的な運用をサポート。コスパの良い運用で、認知拡大につなげます。",
        note: "続けやすい動画運用を、YASAIと。",
        icon: "Video",
      },
    ],
  },
  {
    slug: "ikkatsu",
    no: "05",
    name: "IKKATSU ショート",
    category: "ショート動画一括投稿",
    catch:
      "YouTube Shorts・TikTok・Instagram Reels に一括で予約・定期投稿でき、動画制作も依頼できるツール。",
    heroLead: ["ショート動画の投稿を、", "まとめて、自動で。"],
    heroText:
      "IKKATSU ショートは、YASAIが運営するショート動画の一括投稿・制作サービスです。3つのプラットフォームへの同時投稿や、ストックから自動で選ぶ定期投稿に対応。動画制作の依頼もでき、無料プランから始められます。",
    tags: ["ショート動画", "SNS一括投稿"],
    image: "/images/service-ikkatsu.png", // Figma TOP node 690:246（356-2043）
    siteUrl: "https://ikkatsu.yas-ai.io/",
    skipDetailPage: true,
    about: {
      label: "ABOUT IKKATSU SHORT",
      heading: ["ショート動画を3つのSNSへ", "一括投稿できる。"],
      lead: "投稿・制作・運用を、ひとつのツールで。",
      text: "IKKATSU ショートは、YASAIが運営するショート動画の一括投稿・制作サービスです。",
    },
    featuresHeading: "投稿をまとめて、続けやすく。",
    concepts: [
      {
        title: "3プラットフォームへ一括投稿",
        text: "YouTube Shorts、TikTok、Instagram Reelsへ同時に投稿できます。",
        icon: "Send",
      },
      {
        title: "予約・定期投稿",
        text: "好きな日時の予約や、ストックからの自動投稿に対応します。",
        icon: "Clock",
      },
      {
        title: "動画制作も依頼可能",
        text: "動画がない場合は制作依頼も。完成後そのまま投稿できます。",
        icon: "Video",
      },
    ],
    features: [
      {
        label: "投稿 × 自動化",
        title: "ショート動画の投稿を、まとめて、自動で。",
        text: "3つのプラットフォームへの同時投稿や、ストックから自動で選ぶ定期投稿に対応します。",
        note: "投稿作業を減らして、制作に集中。",
        icon: "Send",
      },
      {
        label: "制作 × 運用",
        title: "動画制作から投稿まで、ワンストップ。",
        text: "切り抜き動画の制作依頼やAI動画制作にも対応。無料プランから始められます。",
        note: "続けやすいショート動画運用を。",
        icon: "Video",
      },
    ],
  },
];
