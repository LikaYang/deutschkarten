(function () {
  const IMG = "assets/art/a2e1-l1-preparation/";
  const A2E1L1_CARDS = [

  // =========================
  // Persönliche Daten / Familie
  // =========================

  {
    id: "geboren-sein",
    group: "Persönliche Daten / Familie",
    front: "geboren sein",
    zh: "出生",
    example: "Ich bin in Berlin geboren.",
    exampleCn: "我出生在柏林。",
    image: IMG + "card-geboren-sein.png"
  },

  {
    id: "allein-leben",
    group: "Persönliche Daten / Familie",
    front: "allein leben",
    zh: "独自生活",
    example: "Nina lebt allein.",
    exampleCn: "Nina 独自生活。",
    image: IMG + "card-allein-leben.png"
  },

  {
    id: "ledig",
    group: "Persönliche Daten / Familie",
    front: "ledig",
    zh: "未婚的",
    example: "Sie ist ledig.",
    exampleCn: "她未婚。",
    image: IMG + "card-ledig.png"
  },

  {
    id: "verheiratet",
    group: "Persönliche Daten / Familie",
    front: "verheiratet",
    zh: "已婚的",
    example: "Er ist verheiratet.",
    exampleCn: "他已婚。",
    image: IMG + "card-verheiratet.png"
  },

  {
    id: "geschieden",
    group: "Persönliche Daten / Familie",
    front: "geschieden",
    zh: "离婚的",
    example: "Sie ist geschieden.",
    exampleCn: "她离婚了。",
    image: IMG + "card-geschieden.png"
  },

  {
    id: "partner-partnerin",
    group: "Persönliche Daten / Familie",
    front: "der Partner, - / die Partnerin, -nen",
    zh: "伴侣",
    example: "Das ist meine Partnerin.",
    exampleCn: "这是我的伴侣。",
    image: IMG + "card-Partner.png"
  },

  {
    id: "eltern",
    group: "Persönliche Daten / Familie",
    front: "die Eltern (Pl.)",
    zh: "父母",
    example: "Meine Eltern wohnen auf dem Land.",
    exampleCn: "我的父母住在乡下。",
    image: IMG + "card-eltern.png"
  },

  {
    id: "kind",
    group: "Persönliche Daten / Familie",
    front: "das Kind, -er",
    zh: "孩子",
    example: "Das Kind schläft.",
    exampleCn: "孩子在睡觉。",
    image: IMG + "card-Kind.png"
  },

  {
    id: "bruder",
    group: "Persönliche Daten / Familie",
    front: "der Bruder, ¨-",
    zh: "兄弟；哥哥；弟弟",
    example: "Leo ist Ninas Bruder.",
    exampleCn: "Leo 是 Nina 的弟弟。",
    image: IMG + "card-bruder.png"
  },

  {
    id: "zusammenleben",
    group: "Persönliche Daten / Familie",
    front: "zusammenleben",
    zh: "共同生活，住在一起",
    example: "Tobias und Amir leben zusammen.",
    exampleCn: "Tobias 和 Amir 住在一起。",
    image: IMG + "card-zusammenleben.png"
  },

  {
  id: "schwester",
  group: "Persönliche Daten / Familie",
  front: "die Schwester, -n",
  zh: "姐妹；姐姐；妹妹",
  example: "Nina ist Leos Schwester.",
  exampleCn: "Nina 是 Leo 的姐姐。",
  image: IMG + "card-schwester.png"
},

{
  id: "geschwister",
  group: "Persönliche Daten / Familie",
  front: "das Geschwister, -",
  zh: "兄弟姐妹",
  example: "Nina und Leo sind Geschwister.",
  exampleCn: "Nina 和 Leo 是兄妹。",
  image: IMG + "card-geschwister.png"
},

{
  id: "auf-dem-land",
  group: "Wohnen",
  front: "auf dem Land",
  zh: "在乡下；在农村",
  example: "Meine Eltern wohnen auf dem Land.",
  exampleCn: "我的父母住在乡下。",
  image: IMG + "card-auf-dem-Land.png"
},

{
  id: "in-der-stadt",
  group: "Wohnen",
  front: "in der Stadt",
  zh: "在城市里",
  example: "Nina wohnt in der Stadt.",
  exampleCn: "Nina 住在城里。",
  image: IMG + "card-in-der-Stadt.png"
},
  // =========================
  // Wohnen
  // =========================

  {
    id: "haus",
    group: "Wohnen",
    front: "das Haus, ¨-er",
    zh: "房子",
    example: "Das Haus ist auf dem Land.",
    exampleCn: "这栋房子在乡下。",
    image: IMG + "card-haus.png"
  },

  {
    id: "wohnung",
    group: "Wohnen",
    front: "die Wohnung, -en",
    zh: "公寓，住房",
    example: "Die Wohnung ist hell.",
    exampleCn: "这套公寓很明亮。",
    image: IMG + "card-wohnung.png"
  },

  // =========================
  // Studium & Arbeit
  // =========================

  {
    id: "studium",
    group: "Studium & Arbeit",
    front: "das Studium, Studien",
    zh: "大学学业；大学学习",
    example: "Das Studium ist interessant.",
    exampleCn: "大学学习很有意思。",
    image: IMG + "card-studium.png"
  },

  {
    id: "studieren",
    group: "Studium & Arbeit",
    front: "studieren",
    zh: "上大学；攻读",
    example: "Nina studiert in Berlin.",
    exampleCn: "Nina 在柏林上大学。",
    image: IMG + "card-studieren.png"
  },

  {
    id: "ausbildung",
    group: "Studium & Arbeit",
    front: "die Ausbildung, -en",
    zh: "职业培训",
    example: "Lea macht eine Ausbildung.",
    exampleCn: "Lea 在接受职业培训。",
    image: IMG + "card-ausbildung-pflege.png"
  },

  {
    id: "ausbildung-machen",
    group: "Studium & Arbeit",
    front: "eine Ausbildung machen",
    zh: "接受职业培训",
    example: "Sie macht eine Ausbildung im Krankenhaus.",
    exampleCn: "她在医院接受职业培训。",
    image: IMG + "card-ausbildung-pflege.png"
  },

  {
    id: "beruf",
    group: "Studium & Arbeit",
    front: "der Beruf, -e",
    zh: "职业",
    example: "Was sind Sie von Beruf?",
    exampleCn: "您的职业是什么？",
    image: IMG + "card-Beruf.png"
  },

  {
    id: "als-arbeiten",
    group: "Studium & Arbeit",
    front: "als ... arbeiten",
    zh: "作为……工作；从事……职业",
    example: "Etzel arbeitet als Lehrerin.",
    exampleCn: "Etzel 是老师。",
    image: IMG + "card-als-arbeiten.png"
  },

  {
    id: "bei-arbeiten",
    group: "Studium & Arbeit",
    front: "bei ... arbeiten",
    zh: "在……工作",
    example: "Samira arbeitet bei einer Firma.",
    exampleCn: "Samira 在一家公司工作。",
    image: IMG + "card-bei-arbeiten.png"
  },

  {
    id: "praktikum",
    group: "Studium & Arbeit",
    front: "das Praktikum, Praktika",
    zh: "实习",
    example: "Das Praktikum beginnt im Mai.",
    exampleCn: "实习五月开始。",
    image: IMG + "card-Praktikum.png"
  },

  {
    id: "praktikum-machen",
    group: "Studium & Arbeit",
    front: "ein Praktikum machen",
    zh: "做实习",
    example: "Felix macht ein Praktikum.",
    exampleCn: "Felix 在做实习。",
    image: IMG + "card-ein-Praktikum-machen.png"
  },

  // =========================
  // Sprachen
  // =========================

  {
    id: "muttersprache",
    group: "Sprachen",
    front: "die Muttersprache, -n",
    zh: "母语",
    example: "Meine Muttersprache ist Chinesisch.",
    exampleCn: "我的母语是中文。",
    image: IMG + "card-muttersprache.png"
  },

  {
    id: "sprache-lernen",
    group: "Sprachen",
    front: "eine Sprache lernen",
    zh: "学习一门语言",
    example: "Nina lernt eine Sprache.",
    exampleCn: "Nina 在学习一门语言。",
    image: IMG + "card-sprache-lernen.png"
  },

  {
    id: "chinesisch-sprechen",
    group: "Sprachen",
    front: "Chinesisch sprechen",
    zh: "说中文",
    example: "Etzel spricht ein bisschen Chinesisch.",
    exampleCn: "Etzel 会说一点中文。",
    image: IMG + "card-chinesisch-deutsch-sprechen.png"
  },

  {
    id: "deutsch-sprechen",
    group: "Sprachen",
    front: "Deutsch sprechen",
    zh: "说德语",
    example: "Ich spreche Deutsch.",
    exampleCn: "我说德语。",
    image: IMG + "card-chinesisch-deutsch-sprechen.png"
  },

  {
    id: "englisch-sprechen",
    group: "Sprachen",
    front: "Englisch sprechen",
    zh: "说英语",
    example: "Ich spreche Englisch.",
    exampleCn: "我说英语。",
    image: IMG + "card-chinesisch-deutsch-sprechen.png"
  },

  {
    id: "fliessend",
    group: "Sprachen",
    front: "fließend",
    zh: "流利地",
    example: "Sofia spricht fließend Deutsch.",
    exampleCn: "Sofia 德语说得很流利。",
    image: IMG + "card-fliessend.png"
  },

  {
    id: "ein-bisschen",
    group: "Sprachen",
    front: "ein bisschen",
    zh: "一点儿",
    example: "Ich spreche ein bisschen Deutsch.",
    exampleCn: "我会说一点德语。",
    image: IMG + "card-ein-bisschen.png"
  },

  // =========================
  // Freizeit
  // =========================

  {
    id: "freizeit",
    group: "Freizeit",
    front: "die Freizeit, -en",
    zh: "空闲时间",
    example: "Was machst du in der Freizeit?",
    exampleCn: "你空闲时间做什么？",
    image: IMG + "card-Freizeit.png"
  },

  {
    id: "in-der-freizeit",
    group: "Freizeit",
    front: "in der Freizeit",
    zh: "在空闲时间",
    example: "In der Freizeit lese ich gern.",
    exampleCn: "空闲时间我喜欢阅读。",
    image: IMG + "card-in-der-Freizeit.png"
  },

  {
    id: "freunde-treffen",
    group: "Freizeit",
    front: "sich mit Freunden treffen",
    zh: "和朋友见面",
    example: "Ich treffe mich mit Freunden.",
    exampleCn: "我和朋友见面。",
    image: IMG + "card-freunde-treffen.png"
  },

  {
    id: "sport-machen",
    group: "Freizeit",
    front: "Sport machen",
    zh: "做运动",
    example: "Ich mache gern Sport.",
    exampleCn: "我喜欢运动。",
    image: IMG + "card-Sport-machen.png"
  },

  {
    id: "musik-hoeren",
    group: "Freizeit",
    front: "Musik hören",
    zh: "听音乐",
    example: "Am Abend höre ich Musik.",
    exampleCn: "晚上我听音乐。",
    image: IMG + "card-Musik-hoeren.png"
  },

  {
    id: "lesen",
    group: "Freizeit",
    front: "lesen",
    zh: "阅读",
    example: "Nina liest gern.",
    exampleCn: "Nina 喜欢阅读。",
    image: IMG + "card-lesen.png"
  },

  {
    id: "kochen",
    group: "Freizeit",
    front: "kochen",
    zh: "做饭",
    example: "Am Wochenende koche ich.",
    exampleCn: "周末我做饭。",
    image: IMG + "card-kochen.png"
  },

  {
    id: "spazieren-gehen",
    group: "Freizeit",
    front: "spazieren gehen",
    zh: "散步",
    example: "Wir gehen spazieren.",
    exampleCn: "我们去散步。",
    image: IMG + "card-spazieren-gehen.png"
  },

  {
    id: "ins-kino-gehen",
    group: "Freizeit",
    front: "ins Kino gehen",
    zh: "去电影院",
    example: "Sie gehen ins Kino.",
    exampleCn: "他们去电影院。",
    image: IMG + "card-ins-Kino-gehen.png"
  },

  {
    id: "ins-restaurant-gehen",
    group: "Freizeit",
    front: "ins Restaurant gehen",
    zh: "去餐厅",
    example: "Wir gehen ins Restaurant.",
    exampleCn: "我们去餐厅。",
    image: IMG + "card-ins-Restaurant-gehen.png"
  },

  // =========================
  // Vergangenheit vorbereiten
  // =========================

  {
    id: "beginnen",
    group: "Vergangenheit vorbereiten",
    front: "beginnen",
    zh: "开始",
    example: "Der Kurs beginnt um neun.",
    exampleCn: "课程九点开始。",
    image: IMG + "card-beginnen.png"
  },

  {
    id: "beenden-abschliessen",
    group: "Vergangenheit vorbereiten",
    front: "beenden / abschließen",
    zh: "结束；完成",
    example: "Ich schließe die Ausbildung ab.",
    exampleCn: "我完成职业培训。",
    image: IMG + "card-abschliessen.png"
  }
  ];

  window.DEUTSCHSTADT_PREVIEW_LESSONS = [
    {
      id: "A1-review",
      title: "A1 复习卡牌",
      label: "A1 复习",
      subtitle: "预留 · 高频难词",
      packId: "A1-review-placeholder-v0.1",
      cards: [],
      disabled: true
    },
    {
      id: "A2E1L1",
      title: "A2E1L1 预习卡牌",
      label: "A2E1L1",
      subtitle: "个人信息 · 学习生活",
      packId: "A2E1L1-preparation-v0.1",
      cards: A2E1L1_CARDS
    },
    {
      id: "A2E1L1-review",
      title: "A2E1L1 复习卡牌",
      label: "A2E1L1 复习",
      subtitle: "预留 · 课后难词",
      packId: "A2E1L1-review-placeholder-v0.1",
      cards: [],
      disabled: true
    },
    {
      id: "A2E1L2",
      title: "A2E1L2 预习卡牌",
      label: "A2E1L2",
      subtitle: "预留 · 下个课时",
      packId: "A2E1L2-preparation-placeholder-v0.1",
      cards: [],
      disabled: true
    }
  ];
})();
