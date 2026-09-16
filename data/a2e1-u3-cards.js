(function () {
  const makeCard = (id, front, zh, wordType, example, exampleCn, group = "A2E1 U3 · Treffen & Essen", exampleSource = "deutschstadt_original") => ({
    id: `a2e1-${id}`,
    group,
    front,
    zh,
    wordType,
    example,
    exampleCn,
    exampleSource,
    image: ""
  });

  // Example priority: exact course-text sentence, confirmed course sentence,
  // then a Deutschstadt-original context sentence.
  const reviewCards = [
    makeCard("zum-essen-einladen", "j-n zum Essen einladen", "邀请某人吃饭", "Verbphrase", "Ich lade Nina am Samstag zum Essen ein.", "我邀请 Nina 周六一起吃饭。"),
    makeCard("plan-aendern", "einen Plan ändern", "改变计划", "Verbphrase", "Wir müssen unseren Plan ändern.", "我们得改变计划。"),
    makeCard("termin-vereinbaren", "einen Termin vereinbaren", "约定时间", "Verbphrase", "Wir vereinbaren einen Termin für Samstag.", "我们约定周六见面。"),
    makeCard("sich-anmelden", "sich anmelden", "报名；登记", "Reflexive Verbphrase", "Ich melde mich für den Kochkurs an.", "我报名参加烹饪课。"),
    makeCard("sich-verabreden", "sich verabreden", "相约；约好见面", "Reflexives Verb", "Wir verabreden uns für Samstagabend.", "我们约好周六晚上见面。"),
    makeCard("teilnehmen", "an + D teilnehmen", "参加；参与", "Verbphrase", "Nina nimmt an dem Treffen teil.", "Nina 参加这次聚会。"),
    makeCard("vorschlagen", "etwas vorschlagen", "提议；建议", "Verbphrase", "Lea schlägt einen anderen Termin vor.", "Lea 建议了另一个时间。"),
    makeCard("gemeinsam", "gemeinsam", "共同地；一起", "Adverb", "Wir essen heute gemeinsam.", "我们今天一起吃饭。"),
    makeCard("absagen", "absagen", "取消；拒绝", "Verb", "Leider muss ich den Termin absagen.", "很遗憾，我得取消约会。"),
    makeCard("organisieren", "organisieren", "组织；筹办", "Verb", "Anna organisiert das Treffen.", "Anna 筹办这次聚会。"),
    makeCard("einverstanden", "einverstanden", "同意的；赞成的", "Adjektiv", "Ja, ich bin einverstanden.", "好的，我同意。"),
    makeCard("zusagen", "zusagen", "答应；接受邀请", "Verb", "Nina sagt der Einladung zu.", "Nina 接受了邀请。"),
    makeCard("speisekarte", "die Speisekarte, -n", "菜单", "Nomen", "Der Kellner bringt die Speisekarte.", "服务员拿来了菜单。"),
    makeCard("tisch-reservieren", "einen Tisch reservieren", "预订餐桌", "Verbphrase", "Ich möchte einen Tisch für vier Personen reservieren.", "我想预订一张四人桌。"),
    makeCard("menue", "das Menü, -s", "套餐；菜单", "Nomen", "Heute gibt es ein vegetarisches Menü.", "今天有一份素食套餐。"),
    makeCard("reservierung", "die Reservierung, -en", "预订；预约", "Nomen", "Die Reservierung ist für acht Uhr.", "预订时间是八点。"),
    makeCard("vorspeise", "die Vorspeise, -n", "前菜", "Nomen", "Als Vorspeise nehme ich eine Suppe.", "前菜我要一份汤。"),
    makeCard("rezeption", "die Rezeption, -en", "接待处；前台", "Nomen", "Bitte fragen Sie an der Rezeption.", "请到前台询问。"),
    makeCard("hauptspeise", "die Hauptspeise, -n / das Hauptgericht, -e", "主菜", "Nomen", "Als Hauptspeise bestelle ich Fisch.", "主菜我点鱼。"),
    makeCard("empfangen", "empfangen (er empfängt, hat empfangen)", "接待；迎接", "Verb", "Der Chef empfängt die Gäste persönlich.", "老板亲自接待客人。"),
    makeCard("platz", "der Platz, ¨-e", "座位；位置", "Nomen", "Ist dieser Platz noch frei?", "这个座位有人吗？"),
    makeCard("nachspeise", "die Nachspeise, -n / der Nachtisch, -e", "餐后甜点", "Nomen", "Zum Nachtisch nehme ich Eis.", "甜点我要冰淇淋。"),
    makeCard("stammtisch", "der Stammtisch, -e", "常客桌；固定聚会", "Nomen", "Am Freitag trifft sich der Stammtisch.", "固定聚会周五见面。"),
    makeCard("bestellen", "bestellen", "点餐；订购", "Verb", "Was möchten Sie bestellen?", "您想点什么？"),
    makeCard("gericht", "das Gericht, -e", "菜肴", "Nomen", "Welches Gericht können Sie empfehlen?", "您能推荐哪道菜？"),
    makeCard("auswaehlen", "auswählen", "选择", "Verb", "Ich kann mich noch nicht entscheiden und wähle später aus.", "我还没决定，稍后再选。"),
    makeCard("bitter", "bitter", "苦的", "Adjektiv", "Der Kaffee ist mir zu bitter.", "这杯咖啡对我来说太苦了。"),
    makeCard("sich-informieren", "sich über + A informieren", "了解；询问有关……的信息", "Reflexive Verbphrase", "Wir informieren uns über das Menü.", "我们了解一下套餐。"),
    makeCard("salzig", "salzig", "咸的", "Adjektiv", "Die Suppe ist etwas zu salzig.", "这汤有点太咸了。"),
    makeCard("bezahlen", "bezahlen", "支付；付款", "Verb", "Ich möchte mit Karte bezahlen.", "我想刷卡付款。"),
    makeCard("sauer", "sauer", "酸的", "Adjektiv", "Die Zitrone schmeckt sauer.", "柠檬尝起来很酸。"),
    makeCard("rechnung", "die Rechnung, -en", "账单", "Nomen", "Können wir bitte die Rechnung bekommen?", "可以给我们账单吗？"),
    makeCard("scharf", "scharf", "辣的", "Adjektiv", "Ist das Gericht sehr scharf?", "这道菜很辣吗？"),
    makeCard("zusammen-oder-getrennt", "Zusammen oder getrennt?", "一起付还是分开付？", "Redemittel", "Zusammen oder getrennt?", "一起付还是分开付？"),

    // L3 · Lea und Ben vereinbaren einen Termin
    makeCard("viel-zu-kurz", "viel zu kurz", "太短了", "Redemittel", "Schön, aber viel zu kurz, leider.", "不错，但可惜太短了。", "A2E1 L3 · Termin", "course_text"),
    makeCard("von-etwas-erzaehlen", "von + D erzählen", "讲述某事", "Verbphrase", "Dann musst du mir von deinem Urlaub erzählen.", "那你得给我讲讲你的假期。", "A2E1 L3 · Termin", "course_text"),
    makeCard("schade", "schade", "可惜的；遗憾", "Adjektiv", "Schade, da geht es leider nicht, weil ich zu einem Konzert gehe.", "可惜，那时不行，因为我要去听音乐会。", "A2E1 L3 · Termin", "course_text"),
    makeCard("zum-brunch-gehen", "zum Brunch gehen", "去吃早午餐", "Verbphrase", "Wir können zum Brunch gehen, ins „Central“ am Karlsplatz.", "我们可以去 Karlsplatz 的“Central”吃早午餐。", "A2E1 L3 · Termin", "course_text"),
    makeCard("lust-haben", "Lust haben", "有兴趣；想做", "Verbphrase", "Hast du Lust?", "你有兴趣吗？", "A2E1 L3 · Termin", "course_text"),
    makeCard("sich-freuen", "sich auf + A freuen", "期待", "Reflexive Verbphrase", "Ich freue mich.", "我很期待。", "A2E1 L3 · Termin", "course_text"),

    // L4 · Essen ohne Licht / FAQ
    makeCard("vorstadt", "die Vorstadt, ¨-e", "市郊", "Nomen", "In der Vorstadt gibt es ein neues Lokal, das „lichtlos“.", "市郊有一家叫“lichtlos”的新餐馆。", "A2E1 L4 · Essen ohne Licht", "course_text"),
    makeCard("lokal", "das Lokal, -e", "餐馆", "Nomen", "In der Vorstadt gibt es ein neues Lokal, das „lichtlos“.", "市郊有一家叫“lichtlos”的新餐馆。", "A2E1 L4 · Essen ohne Licht", "course_text"),
    makeCard("lichtlos", "lichtlos", "无光的", "Adjektiv", "Aber es ist total dunkel, ohne Licht, eben lichtlos.", "但那里完全漆黑，没有光，也就是无光。", "A2E1 L4 · Essen ohne Licht", "course_text"),
    makeCard("hingehen", "hingehen (ist hingegangen)", "去那里", "Verb", "Ich möchte da auch gern mal hingehen.", "我也很想去那里一次。", "A2E1 L4 · Essen ohne Licht", "course_text"),
    makeCard("ploetzlich", "plötzlich", "突然", "Adverb", "Plötzlich ist das Licht aus.", "灯突然灭了。", "A2E1 L4 · Essen ohne Licht", "course_text"),
    makeCard("an-der-hand-nehmen", "j-n an der Hand nehmen", "牵着某人的手", "Verbphrase", "Die Kellnerinnen und Kellner nehmen dich an der Hand und bringen dich zum Tisch.", "服务员牵着你的手，把你带到桌边。", "A2E1 L4 · Essen ohne Licht", "course_text"),
    makeCard("zum-tisch-bringen", "j-n zum Tisch bringen", "把某人带到桌边", "Verbphrase", "Die Kellnerinnen und Kellner nehmen dich an der Hand und bringen dich zum Tisch.", "服务员牵着你的手，把你带到桌边。", "A2E1 L4 · Essen ohne Licht", "course_text"),
    makeCard("aufpassen", "aufpassen (auf + A)", "留意；注意", "Verb", "Man muss da ganz anders aufpassen.", "在那里必须用完全不同的方式留意。", "A2E1 L4 · Essen ohne Licht", "course_text"),
    makeCard("erleben", "erleben + A", "体验某事", "Verb", "Das möchte ich erleben.", "我想体验一下。", "A2E1 L4 · Essen ohne Licht", "course_text"),
    makeCard("besonders", "besonders", "尤其；特别地", "Adverb", "Was macht Essen in einem Restaurant ohne Licht so besonders?", "在无光餐厅用餐有什么特别之处？", "A2E1 L4 · FAQ", "course_text"),
    makeCard("nichts", "nichts", "什么也没有", "Pronomen", "Man kann nichts sehen.", "什么也看不见。", "A2E1 L4 · FAQ", "course_text"),
    makeCard("sinn", "der Sinn, -e", "感官；感觉", "Nomen", "Dafür sind die anderen Sinne sehr aktiv.", "其他感官因此非常活跃。", "A2E1 L4 · FAQ", "course_text"),
    makeCard("riechen", "das Riechen", "嗅觉", "Nomen", "Hören, Schmecken, Riechen und Fühlen werden wichtig.", "听觉、味觉、嗅觉和触觉变得重要。", "A2E1 L4 · FAQ", "course_text"),
    makeCard("fuehlen", "das Fühlen", "触觉；感觉", "Nomen", "Hören, Schmecken, Riechen und Fühlen werden wichtig.", "听觉、味觉、嗅觉和触觉变得重要。", "A2E1 L4 · FAQ", "course_text"),
    makeCard("mitnehmen", "mitnehmen", "携带；带去", "Verb", "Was darf man ins Restaurant mitnehmen?", "可以带什么进餐厅？", "A2E1 L4 · FAQ", "course_text"),
    makeCard("mitbringen", "mitbringen", "带来", "Verb", "Sie können fast alles mitbringen.", "您几乎可以带任何东西。", "A2E1 L4 · FAQ", "course_text"),
    makeCard("verboten", "verboten", "被禁止的", "Adjektiv", "Telefonieren und Fotografieren ist bei uns verboten.", "我们这里禁止打电话和拍照。", "A2E1 L4 · FAQ", "course_text"),
    makeCard("alle", "alle-", "所有的", "Pronomen", "Zigaretten rauchen ist wie in allen anderen Restaurants auch verboten.", "和所有其他餐厅一样，这里也禁止吸烟。", "A2E1 L4 · FAQ", "course_text"),
    makeCard("rufen", "rufen", "呼叫；喊叫", "Verb", "Rufen Sie.", "请呼叫他/她。", "A2E1 L4 · FAQ", "course_text"),
    makeCard("spaetestens", "spätestens", "最迟", "Adverb", "Sie bekommen spätestens drei Tage vor dem Termin eine Nachricht.", "您最迟会在预约前三天收到通知。", "A2E1 L4 · FAQ", "course_text"),
    makeCard("nachricht", "die Nachricht, -en", "消息；通知", "Nomen", "Sie bekommen spätestens drei Tage vor dem Termin eine Nachricht.", "您最迟会在预约前三天收到通知。", "A2E1 L4 · FAQ", "course_text")
  ];

  const courseExamples = {
    "a2e1-speisekarte": ["Man kann ja keine Speisekarte lesen.", "人们没法看菜单。", "A2E1 L4 · Essen ohne Licht"],
    "a2e1-tisch-reservieren": ["Ich reserviere uns gleich mal einen Tisch.", "我马上给我们订一张桌子。", "A2E1 L4 · Essen ohne Licht"],
    "a2e1-reservierung": ["Reservieren Sie Ihre Plätze ca. eine Woche vor Ihrem Besuch.", "请在到访前约一周预订座位。", "A2E1 L4 · FAQ"],
    "a2e1-rezeption": ["Das macht man beim Eingang, an der Rezeption.", "这要在入口处的接待台办理。", "A2E1 L4 · Essen ohne Licht"],
    "a2e1-empfangen": ["Wir empfangen Sie am Eingang.", "我们在入口处接待您。", "A2E1 L4 · FAQ"],
    "a2e1-bestellen": ["Und wie bestellt man?", "那怎么点餐呢？", "A2E1 L4 · Essen ohne Licht"],
    "a2e1-auswaehlen": ["Wie kann ich mein Essen auswählen?", "我该怎样选择餐食？", "A2E1 L4 · FAQ"],
    "a2e1-bezahlen": ["Dort bezahlt man auch nach dem Essen.", "吃完饭也在那里付款。", "A2E1 L4 · Essen ohne Licht"],
    "a2e1-rechnung": ["Hier bekommen Sie nach dem Essen auch Ihre Rechnung.", "您饭后也会在这里拿到账单。", "A2E1 L4 · FAQ"]
  };
  reviewCards.forEach((card) => {
    const replacement = courseExamples[card.id];
    if (!replacement) return;
    [card.example, card.exampleCn, card.group] = replacement;
    card.exampleSource = "course_text";
  });

  const preparationIds = new Set([
    "a2e1-zum-essen-einladen",
    "a2e1-termin-vereinbaren",
    "a2e1-sich-verabreden",
    "a2e1-vorschlagen",
    "a2e1-absagen",
    "a2e1-zusagen",
    "a2e1-einverstanden",
    "a2e1-gemeinsam",
    "a2e1-speisekarte",
    "a2e1-gericht",
    "a2e1-hauptspeise",
    "a2e1-bestellen",
    "a2e1-bezahlen",
    "a2e1-zusammen-oder-getrennt"
  ]);
  const preparationCards = reviewCards.filter((card) => preparationIds.has(card.id));
  const lessons = window.DEUTSCHSTADT_PREVIEW_LESSONS || [];

  const upsertLesson = (lesson) => {
    const existing = lessons.find((item) => item.id === lesson.id);
    if (existing) Object.assign(existing, lesson);
    else lessons.push(lesson);
  };

  upsertLesson({
    id: "A2E1U3-preparation",
    title: "A2E1 U3 预习卡牌",
    label: "U3 预习",
    subtitle: "Treffen · Verabredung · Essen",
    packId: "A2E1U3-preparation-v0.1",
    cards: preparationCards
  });
  upsertLesson({
    id: "A2E1U3-review",
    title: "A2E1 U3 复习卡牌",
    label: "U3 复习",
    subtitle: "Aktiv-Wortschatz · Treffen & Restaurant",
    packId: "A2E1U3-review-v0.1",
    cards: reviewCards
  });

  window.DEUTSCHSTADT_A2E1U3_PREPARATION_CARDS = preparationCards;
  window.DEUTSCHSTADT_A2E1U3_REVIEW_CARDS = reviewCards;
})();
