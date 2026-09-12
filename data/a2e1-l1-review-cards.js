(function () {
  const reviewCards = [
    ["die Geburt", "出生", "Nomen"], ["der Geburtstag", "生日", "Nomen"], ["das Geburtsdatum", "出生日期", "Nomen"],
    ["der Geburtsort", "出生地", "Nomen"], ["geboren sein", "出生于", "Verbphrase"], ["gebären", "生育；分娩", "Verb"],
    ["ledig", "未婚的", "Adjektiv"], ["verheiratet", "已婚的", "Adjektiv"], ["der Single", "单身人士", "Nomen"], ["geschieden", "离婚的", "Adjektiv"],
    ["Deutschland", "德国", "Land"], ["Österreich", "奥地利", "Land"], ["die Schweiz", "瑞士", "Land"], ["Frankreich", "法国", "Land"],
    ["Italien", "意大利", "Land"], ["Spanien", "西班牙", "Land"], ["China", "中国", "Land"], ["die Muttersprache", "母语", "Nomen"],
    ["die Fremdsprache", "外语", "Nomen"], ["Deutsch", "德语", "Sprache"], ["Französisch", "法语", "Sprache"], ["Italienisch", "意大利语", "Sprache"],
    ["Spanisch", "西班牙语", "Sprache"], ["Chinesisch", "中文；汉语", "Sprache"], ["allein leben", "独自生活", "Verbphrase"],
    ["sprechen", "说；讲（语言）", "Verb"], ["mit jemandem zusammenleben", "与某人共同生活", "Verbphrase"], ["lernen", "学习", "Verb"],
    ["im Stadtzentrum", "在市中心", "Adverbial"], ["in der Stadt", "在城里", "Adverbial"], ["auf dem Land", "在乡下", "Adverbial"],
    ["die Wohnung", "公寓；住宅", "Nomen"], ["das Haus", "房子", "Nomen"], ["renovieren", "翻修", "Verb"], ["mieten", "租住", "Verb"],
    ["der Vater", "父亲", "Nomen"], ["der Papa", "爸爸（口语）", "Nomen"], ["die Mutter", "母亲", "Nomen"], ["die Mama", "妈妈（口语）", "Nomen"],
    ["die Eltern", "父母", "Nomen"], ["der Bruder", "兄弟", "Nomen"], ["die Schwester", "姐妹", "Nomen"], ["das Geschwister", "兄弟姐妹", "Nomen"],
    ["der Großvater", "祖父；外祖父", "Nomen"], ["der Opa", "爷爷；姥爷（口语）", "Nomen"], ["die Großmutter", "祖母；外祖母", "Nomen"],
    ["die Oma", "奶奶；姥姥（口语）", "Nomen"], ["der Partner", "伴侣；同伴", "Nomen"], ["die Partnerin", "女伴侣；同伴", "Nomen"],
    ["der Ehemann", "丈夫", "Nomen"], ["die Ehefrau", "妻子", "Nomen"], ["das Paar", "夫妻；一双", "Nomen"], ["das Ehepaar", "夫妻", "Nomen"],
    ["das Kind", "孩子", "Nomen"], ["der Sohn", "儿子", "Nomen"], ["die Tochter", "女儿", "Nomen"], ["das Enkelkind", "孙子女；外孙子女", "Nomen"],
    ["das Studium", "大学学习", "Nomen"], ["die Arbeit", "工作", "Nomen"], ["das Fach", "专业", "Nomen"], ["der Beruf", "职业", "Nomen"],
    ["studieren", "上大学；学习专业", "Verb"], ["als ... arbeiten", "从事……工作", "Verbphrase"], ["von Beruf ... sein", "职业是……", "Verbphrase"],
    ["ein Studium beginnen", "开始上大学", "Verbphrase"], ["abschließen", "结束；毕业", "Verb"], ["die Universität", "大学", "Nomen"],
    ["die Ausbildung", "职业培训", "Nomen"], ["eine Ausbildung machen", "接受职业培训", "Verbphrase"], ["das Praktikum", "实习", "Nomen"],
    ["ein Praktikum machen", "实习", "Verbphrase"], ["das Hobby", "爱好", "Nomen"], ["die Freizeit", "空闲时间", "Nomen"],
    ["in der Freizeit", "在空闲时间", "Adverbial"], ["sich mit Freunden treffen", "和朋友见面", "Verbphrase"], ["Sport machen", "做运动", "Verbphrase"],
    ["zusammen kochen", "一起做饭", "Verbphrase"], ["Basketball spielen", "打篮球", "Verbphrase"], ["Musik hören", "听音乐", "Verbphrase"],
    ["wandern", "徒步", "Verb"], ["fernsehen", "看电视", "Verb"], ["spazieren gehen", "散步", "Verbphrase"], ["Computerspiele spielen", "玩电脑游戏", "Verbphrase"],
    ["ein Buch lesen", "读书", "Verbphrase"], ["auf dem Sofa liegen", "躺在沙发上", "Verbphrase"], ["ins Restaurant gehen", "去餐厅", "Verbphrase"],
    ["ins Kino gehen", "去电影院", "Verbphrase"], ["reite", "骑马（ich）", "Verbform"], ["das Pferd", "马", "Nomen"],
    ["der Rentner", "退休人员", "Nomen"], ["total", "非常；完全", "Adverb"], ["die Bankkauffrau", "银行女职员", "Nomen"],
    ["mal sehen", "到时看看", "Redemittel"], ["fließend", "流利地", "Adverb"], ["renoviert", "翻修过的", "Adjektiv"], ["stressig", "压力大的", "Adjektiv"]
  ].map(([front, meaning, wordType], index) => ({
    id: `review-${index + 1}`,
    group: "A2E1L1 · Wiederholung",
    front,
    zh: meaning,
    example: "Siehe Kontext und Unterricht.",
    exampleCn: "结合课文和课堂语境复习。",
    wordType
  }));

  const preparationLesson = (window.DEUTSCHSTADT_PREVIEW_LESSONS || []).find((lesson) => lesson.id === "A2E1L1");
  const normalize = (value) => String(value || "")
    .toLowerCase()
    .replace(/[.,/()¨*-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const aliases = {
    "der partner": "der partner, - / die partnerin, -nen",
    "die partnerin": "der partner, - / die partnerin, -nen",
    "die eltern": "die eltern (pl.)",
    "das kind": "das kind, -er",
    "der bruder": "der bruder, ¨-",
    "die schwester": "die schwester, -n",
    "das geschwister": "das geschwister, -",
    "das haus": "das haus, ¨-er",
    "die wohnung": "die wohnung, -en",
    "das studium": "das studium, studien",
    "die ausbildung": "die ausbildung, -en",
    "das praktikum": "das praktikum, praktika",
    "die muttersprache": "die muttersprache, -n",
    "die freizeit": "die freizeit, -en",
    "lesen": "lesen",
    "kochen": "kochen",
    "beginnen": "beginnen",
    "abschließen": "beenden / abschließen"
  };
  if (preparationLesson) {
    const preparationByFront = new Map(preparationLesson.cards.map((card) => [normalize(card.front), card]));
    reviewCards.forEach((card) => {
      const key = normalize(card.front);
      const preparationCard = preparationByFront.get(normalize(aliases[key] || key));
      if (preparationCard) {
        card.image = preparationCard.image;
        card.example = preparationCard.example;
        card.exampleCn = preparationCard.exampleCn;
      }
    });
  }

  const reviewLesson = (window.DEUTSCHSTADT_PREVIEW_LESSONS || []).find((lesson) => lesson.id === "A2E1L1-review");
  if (reviewLesson) {
    reviewLesson.cards = reviewCards;
    reviewLesson.disabled = false;
    reviewLesson.subtitle = "Persönliche Daten · Familie · Arbeit · Freizeit";
  }
  window.DEUTSCHSTADT_A2E1L1_REVIEW_CARDS = reviewCards;
})();
