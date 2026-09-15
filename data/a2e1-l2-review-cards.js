(function () {
  const cards = [
    {
      id: "l2-review-spannend",
      group: "A2E1L2 · Julia",
      front: "spannend",
      zh: "精彩的；令人兴奋的",
      wordType: "Adjektiv",
      example: "Das letzte Jahr war echt spannend.",
      exampleCn: "去年真的很精彩。"
    },
    {
      id: "l2-review-augenoptikerin",
      group: "A2E1L2 · Julia",
      front: "die Augenoptikerin, -nen",
      zh: "女眼镜验光师；女眼镜技师",
      wordType: "Nomen",
      example: "Ich habe meine Ausbildung zur Augenoptikerin beendet.",
      exampleCn: "我完成了眼镜验光师的职业培训。"
    },
    {
      id: "l2-review-pruefung",
      group: "A2E1L2 · Julia",
      front: "die Prüfung, -en",
      zh: "考试",
      wordType: "Nomen",
      example: "Im Juni habe ich meine Prüfungen geschrieben.",
      exampleCn: "六月我参加了考试。"
    },
    {
      id: "l2-review-zum-glueck",
      group: "A2E1L2 · Julia",
      front: "zum Glück",
      zh: "幸运的是；幸好",
      wordType: "Adverbial",
      example: "Zum Glück habe ich gute Noten bekommen.",
      exampleCn: "幸运的是，我取得了好成绩。"
    },
    {
      id: "l2-review-noten-bekommen",
      group: "A2E1L2 · Julia",
      front: "gute / schlechte Noten bekommen",
      zh: "取得好／差的成绩",
      wordType: "Verbphrase",
      example: "Zum Glück habe ich gute Noten bekommen.",
      exampleCn: "幸运的是，我取得了好成绩。"
    },
    {
      id: "l2-review-mieten",
      group: "A2E1L2 · Julia",
      front: "mieten",
      zh: "租用；租赁",
      wordType: "Verb",
      example: "Wir haben ein Auto gemietet.",
      exampleCn: "我们租了一辆车。"
    },
    {
      id: "l2-review-durch-das-land-fahren",
      group: "A2E1L2 · Julia",
      front: "durch das Land fahren",
      zh: "驾车穿行全国；开车穿越这个国家",
      wordType: "Verbphrase",
      example: "Wir sind drei Wochen lang durch das Land gefahren.",
      exampleCn: "我们开车在这个国家旅行了三个星期。"
    },
    {
      id: "l2-review-heiraten",
      group: "A2E1L2 · Julia",
      front: "heiraten (+ j-n)",
      zh: "（和某人）结婚",
      wordType: "Verb",
      example: "Im August hat meine Schwester geheiratet.",
      exampleCn: "八月我姐姐结婚了。"
    },
    {
      id: "l2-review-organisieren",
      group: "A2E1L2 · Julia",
      front: "organisieren",
      zh: "组织；筹办",
      wordType: "Verb",
      example: "Ich habe mit ihr zusammen das Fest organisiert.",
      exampleCn: "我和她一起筹办了庆典。"
    },
    {
      id: "l2-review-hochzeit",
      group: "A2E1L2 · Julia",
      front: "die Hochzeit, -en",
      zh: "婚礼",
      wordType: "Nomen",
      example: "Die Hochzeit war wirklich romantisch.",
      exampleCn: "婚礼真的很浪漫。"
    },
    {
      id: "l2-review-romantisch",
      group: "A2E1L2 · Julia",
      front: "romantisch",
      zh: "浪漫的",
      wordType: "Adjektiv",
      example: "Die Hochzeit war wirklich romantisch.",
      exampleCn: "婚礼真的很浪漫。"
    },
    {
      id: "l2-review-verwandte",
      group: "A2E1L2 · Julia",
      front: "der / die Verwandte, -n",
      zh: "男／女亲属；亲戚",
      wordType: "Nominalisiertes Adjektiv",
      example: "Viele Freunde und Verwandte sind gekommen.",
      exampleCn: "许多朋友和亲戚都来了。"
    },
    {
      id: "l2-review-feiern",
      group: "A2E1L2 · Julia",
      front: "feiern",
      zh: "庆祝",
      wordType: "Verb",
      example: "Wir haben zusammen gefeiert.",
      exampleCn: "我们一起庆祝了。"
    },
    {
      id: "l2-review-umziehen",
      group: "A2E1L2 · Jonas",
      front: "umziehen (ist umgezogen)",
      zh: "搬家",
      wordType: "Verb",
      example: "Ich bin letztes Jahr umgezogen.",
      exampleCn: "我去年搬家了。"
    },
    {
      id: "l2-review-weitersuchen",
      group: "A2E1L2 · Jonas",
      front: "weitersuchen",
      zh: "继续寻找",
      wordType: "Verb",
      example: "Ich habe immer weitergesucht.",
      exampleCn: "我一直继续找。"
    },
    {
      id: "l2-review-apartment",
      group: "A2E1L2 · Jonas",
      front: "das Apartment, -s",
      zh: "（小）公寓",
      wordType: "Nomen",
      example: "Jetzt habe ich ein Apartment im Zentrum.",
      exampleCn: "现在我在市中心有了一套公寓。"
    },
    {
      id: "l2-review-aktiv",
      group: "A2E1L2 · Jonas",
      front: "aktiv",
      zh: "活跃的；积极的",
      wordType: "Adjektiv",
      example: "Wir sind sehr aktiv.",
      exampleCn: "我们非常活跃。"
    },
    {
      id: "l2-review-kennenlernen",
      group: "A2E1L2 · Jonas",
      front: "kennenlernen",
      zh: "认识；结识",
      wordType: "Verb",
      example: "Wir haben schon viele Leute kennengelernt.",
      exampleCn: "我们已经认识了很多人。"
    },
    {
      id: "l2-review-teilnehmen",
      group: "A2E1L2 · Jonas",
      front: "an + D teilnehmen (hat teilgenommen)",
      zh: "参加；参与",
      wordType: "Verbphrase",
      example: "Ich habe an einem Kurs teilgenommen.",
      exampleCn: "我参加了一门课程。"
    },
    {
      id: "l2-review-verein",
      group: "A2E1L2 · Jonas",
      front: "der Verein, -e",
      zh: "协会；俱乐部",
      wordType: "Nomen",
      example: "Vielleicht melde ich mich bald in einem Verein an.",
      exampleCn: "也许我很快会报名加入一个俱乐部。"
    },
    {
      id: "l2-review-sich-anmelden",
      group: "A2E1L2 · Jonas",
      front: "sich irgendwo anmelden",
      zh: "在某处报名；注册",
      wordType: "Reflexive Verbphrase",
      example: "Vielleicht melde ich mich bald in einem Verein an.",
      exampleCn: "也许我很快会报名加入一个俱乐部。"
    }
  ];

  const lessons = window.DEUTSCHSTADT_PREVIEW_LESSONS || [];
  const existingLesson = lessons.find((lesson) => lesson.id === "A2E1L2-review");
  const lesson = {
    id: "A2E1L2-review",
    title: "A2E1L2 复习卡牌",
    label: "A2E1L2 复习",
    subtitle: "Vergangenheit · Studium · Reise",
    packId: "A2E1L2-review-v0.1",
    cards
  };

  if (existingLesson) {
    Object.assign(existingLesson, lesson);
  } else {
    const l2PlaceholderIndex = lessons.findIndex((item) => item.id === "A2E1L2");
    lessons.splice(l2PlaceholderIndex >= 0 ? l2PlaceholderIndex + 1 : lessons.length, 0, lesson);
  }

  window.DEUTSCHSTADT_A2E1L2_REVIEW_CARDS = cards;
})();
