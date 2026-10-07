(function () {
  const lessons = window.DEUTSCHSTADT_PREVIEW_LESSONS;
  const originals = lessons.flatMap(l => l.cards || []);
  const texts = window.DEUTSCHSTADT_A2E2_READING_TASKS || [];
  const definitions = {
    L1: `die Schulzeit|学校时期;die Schule|学校;der Unterricht|课堂;das Fach|科目;das Lieblingsfach|最喜欢的科目;die Prüfung|考试;die Note|成绩;die Schule abschließen|中学毕业;Spaß machen|有趣;streng|严格的;Freunde treffen|见朋友;ausschlafen|睡到自然醒;der Schulabschluss|毕业资格;das Abitur|德国高中毕业资格;das Abitur machen|取得高中毕业资格;der Abschluss|毕业资格;einen Abschluss machen / schaffen|取得毕业资格;erwachsen|成年的;erst|才;der Riesenspaß|极大的乐趣;die Hauptsache|最重要的事;wütend|生气的;zum Glück|幸好;der Direktor|校长;Kontakt haben mit + D|与某人保持联系;wenigstens|至少;lustig|有趣的;witzig|风趣的;die Cafeteria|自助餐厅;furchtbar|糟糕的;alle paar Wochen|每隔几周;der Vokabeltest|词汇测验;die Hausaufgabe|家庭作业;unvergessbar|难忘的;die Schule wechseln|转学;Ich musste …|我当时必须……;Ich konnte …|我当时能够……;Ich durfte …|我当时获准……;Ich wollte …|我当时想……;Ich sollte …|我当时应该……;Ich mochte …|我当时喜欢……;Mein Lieblingsfach war …|我最喜欢的科目是……;Besonders schön war …|特别美好的是……;Besonders stressig war …|特别有压力的是……;Ich fand … interessant.|我觉得……有趣。;Ich fand … langweilig.|我觉得……无聊。;Ich fand … schwierig.|我觉得……困难。`,
    L2: `studieren|上大学;das Studium|大学学习;die Ausbildung|职业培训;eine Ausbildung machen|接受职业培训;eine Ausbildung anfangen|开始职业培训;das Praktikum|实习;ein Praktikum machen|实习;als … arbeiten|从事……工作;der Studienplatz|大学入学名额;einen Studienplatz bekommen|获得入学名额;jobben|打零工;das Au-pair|互惠生;als Au-pair arbeiten|做互惠生;das Freiwillige Soziale Jahr (FSJ)|志愿社会服务年;ein FSJ machen|参加志愿社会服务年;das Auslandssemester|海外交换学期;Geld verdienen|挣钱;sich für + A entscheiden|决定选择……;die Entscheidung|决定;die Erfahrung|经验;Erfahrung sammeln|积累经验;die Wahl|选择;passen zu + D|适合……;praktisch|实用的;anstrengend|费力的;spannend|精彩的;Zeit verlieren|浪费时间;Erfahrung bekommen / sammeln|获得／积累经验;finanzieren|提供资金;etwas Kreatives|有创造性的事物;die Werbeagentur|广告公司;die Grafik-Abteilung|平面设计部门;die Grafikerin|女平面设计师;die Zeitschrift|杂志;die Messe|展会;der Altenpfleger|养老护理员;die Informatik|计算机科学;gut in + D sein|擅长……;ohne + A geht da gar nichts|没有……就完全不行;deshalb|因此;etwas anderes|别的事情;der Hotelkaufmann|酒店商务人员;klasse|很棒的;Wie schade!|真可惜！;das Richtige|合适的事情;aus|结束了;präsentieren|介绍／展示;die Gärtnerin|女园艺师;erstens|首先;zweitens|其次;draußen|在外面;der Grund|原因;betreuen|照料;der Rollstuhl|轮椅;sich gut verstehen|相处融洽;Kroatien|克罗地亚;das Recht|法律;Jura|法学;unterstützen|支持;das Studentenleben|大学生活;überlegen|考虑;mit der Schule fertig sein|结束学校学习;der Schulstress|学校压力;sowieso|反正;die Alternative|另一种选择;traurig|难过的;unzufrieden|不满意的;Das stört mich nicht.|我不介意。;Ich finde … gut / schlecht / toll.|我觉得……好／不好／很棒。;Das ist meine Meinung.|这是我的看法。;…, denke ich.|……，我认为。;…, finde ich.|……，我觉得。;Für mich ist … gut, weil …|对我来说……很好，因为……;Ich finde … besser, weil …|我觉得……更好，因为……;Das stimmt.|对。;Das ist richtig.|这是正确的。;Genau!|正是！;Das stimmt nicht.|不对。;So einfach ist das nicht.|没有那么简单。;Das sehe ich anders.|我的看法不同。;etwas Neues|新的事物;nichts Interessantes|没有有趣的事物`,
    L3: `die Grundschule|小学;die Hauptschule|主体中学;die Realschule|实科中学;das Gymnasium|文理中学;die Gesamtschule|综合中学;das Abitur|高中毕业资格;der Schulabschluss|毕业资格;die Ausbildung|职业培训;die Universität|大学;die Schule|学校;der Kindergarten|幼儿园;der Abschluss|毕业资格;die Hochschule|高等学校;die Mittelschule|初中;die Oberschule|高中;die allgemeinbildende Oberschule|普通高中;die berufsbildende Mittelschule|职业初中;die berufliche Oberschule|职业高中;die technische Berufsschule|技工学校;das Bachelorstudium|本科学习;der Bachelorabschluss|学士学位;das Masterstudium|硕士学习;der Masterabschluss|硕士学位;die Promotion|博士研究;die dreijährige Hochschulausbildung|三年制高等教育;vom dreijährigen Hochschulstudium ins Bachelorstudium wechseln|专升本;der Physiotherapeut|物理治疗师;die Arbeitswelt|工作世界;der Azubi|职业培训学员;die Arztpraxis|诊所;die Arzthelferin|女诊所助理;das Berufsleben|职业生活;die Physik|物理;die Chemie|化学;stressig|压力大的;die Lehre|职业学徒培训;der Bankkaufmann|银行职员;der Realschulabschluss|实科中学毕业资格;der Hauptschulabschluss|主体中学毕业资格;das Praktikum|实习;eine Ausbildung machen|接受职业培训;eine Lehre anfangen|开始学徒培训;das Fach|科目;die Fremdsprache|外语`
  };
  const preparationCounts = { L1: 12, L2: 21, L3: 9 };
  const titles = { L1: 'Meine Schulzeit', L2: 'Nach der Schule – was dann?', L3: 'Schule in Deutschland' };
  const normalize = s => s.toLowerCase().replace(/^(der|die|das) ([^,]+),.*$/, '$1 $2').replace(/^(der|die|das) /, '').replace(/\s+/g, ' ').trim();
  const canonical = new Map();
  const all = {};
  Object.entries(definitions).forEach(([lesson, raw]) => {
    const sentences = texts.filter(t => t.lessonId === `A2E2${lesson}`).flatMap(t => t.lines.map(l => l.de));
    const cards = raw.split(';').map((entry, index) => {
      const [front, zh] = entry.split('|');
      const key = normalize(front);
      const reused = originals.find(c => normalize(c.front) === key);
      const id = reused?.id || canonical.get(key) || `a2e2-${lesson.toLowerCase()}-${index + 1}`;
      canonical.set(key, id);
      const needle = key.replace(/\s*\+.*$/, '');
      const example = sentences.find(s => s.toLowerCase().includes(needle)) || '';
      const type = front.includes('…') ? (lesson === 'L1' ? 'GRAMMATIK' : 'REDEMITTEL') : /^(Das |Genau|Wie schade|So einfach)/.test(front) ? 'REDEMITTEL' : front.includes(' ') && !/^(der|die|das) \S+$/.test(front) ? 'CHUNK' : 'WORT';
      return { ...reused, id, front: reused?.front || front, zh, group: `${lesson} · ${type}`, wordType: type, image: reused?.image || '', example: example || reused?.example || '', exampleCn: example ? '' : reused?.exampleCn || '', source: example ? ['course-list', 'text'] : ['course-list'], stage: index < preparationCounts[lesson] ? ['preparation', 'review'] : ['review'] };
    });
    all[lesson] = cards;
    ['preparation', 'review'].forEach(stage => lessons.push({ id: `A2E2${lesson}-${stage}`, title: `A2E2${lesson} ${stage === 'review' ? '复习' : '预习'}卡牌`, label: `E2 ${lesson} ${stage === 'review' ? '复习' : '预习'}`, subtitle: titles[lesson], packId: `A2E2${lesson}-${stage}-v01`, cards: cards.filter(c => c.stage.includes(stage)) }));
  });
  const source437 = window.A2E1_VIDEO_TASKS['nach-der-schule-eg437'].source;
  const video = (id, title, source, promptDe, promptZh) => ({ videoId: id, title, source, watchLabel: '完整观看 · 不需要听懂每一句', promptDe, promptZh, submission: { text: '带着你听到的信息进入课堂。' } });
  Object.assign(window.A2E1_VIDEO_TASKS, {
    'a2e2-l1-schule': video('a2e2-l1-schule', 'Schule – was kennst du schon? · Deutschlandlabor 01', {}, 'Welche Schulfächer hörst du? Was machen die Schüler in der Schule?', ['Sport · Englisch · Kunst · Physik · Politik · Mathematik', '视频观看入口待老师确认。']),
    'a2e2-l2-weg': video('a2e2-l2-weg', 'Kennst du das Video noch? · Easy German 437', source437, 'Welchen Weg haben die Personen gewählt? Welchen Weg findest du interessant?', ['你在 E1 看过这个视频，现在换一个观察角度。', 'Studium · Ausbildung · Reisen · Arbeiten / Jobben · etwas anderes']),
    'a2e2-l3-schule': video('a2e2-l3-schule', 'Kennst du das noch? · Deutschlandlabor 01', {}, 'Was ist an dieser Schule interessant? Was ist ähnlich wie in China? Was ist anders?', ['In Deutschland … · In China … · Das ist ähnlich. · Das ist anders.', '视频观看入口待老师确认。'])
  });
  window.A2E2_CARDS = all;
  ['a2e2-l1-schule', 'a2e2-l3-schule'].forEach(id => {
    window.A2E1_VIDEO_TASKS[id].source.bilibiliUrl = 'https://www.bilibili.com/video/BV1Ys411C7xc/';
    window.A2E1_VIDEO_TASKS[id].source.bilibiliEmbedUrl = 'https://player.bilibili.com/player.html?bvid=BV1Ys411C7xc&page=1&high_quality=1&autoplay=0';
    window.A2E1_VIDEO_TASKS[id].source.originalUrl = 'https://www.goethe.de/de/spr/ueb/dlb/sch.html';
    window.A2E1_VIDEO_TASKS[id].promptZh = window.A2E1_VIDEO_TASKS[id].promptZh.filter(s => !s.includes('待老师确认'));
  });
  window.A2E1_VIDEO_TASKS['a2e2-l1-schule'].choices = ['Sport', 'Englisch', 'Kunst', 'Physik', 'Politik', 'Mathematik'];
  window.A2E1_VIDEO_TASKS['a2e2-l2-weg'].choices = ['Studium', 'Ausbildung', 'Reisen', 'Arbeiten / Jobben', 'etwas anderes'];
  window.A2E2_CANDIDATE_INPUTS = [{ id: 'goethe-schule-in-deutschland', status: 'not_approved', title: 'Schule in Deutschland' }];
  window.A2E2_ROUTE_UNITS = Object.keys(all).flatMap(lesson => [{
    title: `A2E2 ${lesson} Vorbereitung｜${titles[lesson]}`, status: 'Gesehen reicht!', steps: [
      { type: 'cards', icon: '1', title: 'Wortschatz', text: lesson === 'L2' ? 'Kennst du diese Wörter noch? 然后认识新的 Bildungsweg 词块。' : 'Diese Wörter und Ausdrücke brauchst du bald. Gesehen reicht!', action: '打开预习卡牌', lessonId: `A2E2${lesson}-preparation` },
      { type: 'video', icon: '2', title: 'Themen-Input', text: '看视频，抓关键词；不做听力考试。', action: '打开视频任务', videoId: `a2e2-${lesson.toLowerCase()}-${lesson === 'L2' ? 'weg' : 'schule'}` }
    ]
  }, {
    title: `A2E2 ${lesson} Wiederholung｜${titles[lesson]}`, status: 'Noch unsicher → Kann ich verwenden', steps: [
      { type: 'cards', icon: '1', title: 'Karten｜复习', text: 'Aktiv-Wortschatz · Text-Wortschatz · Chunks · Redemittel', action: '打开复习卡牌', lessonId: `A2E2${lesson}-review` },
      { type: 'nachsprechen', icon: '2', title: 'Nachsprechen', text: '完整讲义原文；逐句音频仍待审核，L3 音频待补。', action: '打开课文', url: `nachsprechen-e2.html?lesson=${lesson}` },
      ...(lesson === 'L3' ? [{ type: 'video', icon: '3', title: 'Deutschlandlabor｜再次观看', text: '比较德国和中国的学校。', action: '打开视频任务', videoId: 'a2e2-l3-schule' }, { type: 'nachsprechen', icon: '4', title: 'Bildungsweg Builder', text: '连接教育路径，带着自己的比较回到课堂。', action: '开始', url: 'bildungsweg.html' }] : [])
    ]
  }]).concat([{ title: 'A2E2 Abschluss｜Mein Lernnetz', status: 'Was kannst du schon?', steps: [{ type: 'nachsprechen', icon: 'N', title: 'Mein Lernnetz', text: '按主题回顾已会使用和仍不确定的词卡。', action: '打开个人复盘', url: 'lernnetz-e2.html' }] }]);
})();
