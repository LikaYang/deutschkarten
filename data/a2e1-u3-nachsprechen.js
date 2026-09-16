(function () {
  const segment = (text, start, end) => ({ text, start, end, status: "approved", method: "whisper_alignment_reviewed" });

  window.DEUTSCHSTADT_A2E1U3_READING_TASKS = [
    {
      id: "l3-termin",
      name: "L3 · Lea & Ben",
      image: "",
      audio: "assets/audio/a2/e1/u3/source/A2E1-L3-Termin.mp3",
      text: "Hallo Lea! Hi Ben. Wie war dein Urlaub? Schön, aber viel zu kurz, leider. Und wie geht's deinem Vater? Er war richtig krank. Aber jetzt geht es ihm wieder ein bisschen besser. Das ist gut. Und wie geht's dir? Alles okay. Du, ich möchte dich mal wieder sehen. Dann musst du mir von deinem Urlaub erzählen. Gehen wir zusammen essen? Vielleicht am Wochenende? Oh ja, gern. Hast du am Samstagabend Zeit? Schade, da geht es leider nicht, weil ich zu einem Konzert gehe. Ich habe Tickets für Felix Jaehn in der Tonhalle. Cool! Und am Sonntag? Geht es da? Wir können zum Brunch gehen, ins „Central“ am Karlsplatz. Hast du Lust? Das ist eine gute Idee. Wann möchtest du dort sein? So um elf, geht das? Geht es auch ein bisschen später? Dann kann ich am Vormittag noch schwimmen. Ist zwölf Uhr gut? Ja, das passt. Dann sehen wir uns am Sonntag im „Central“. Ja, genau, am Sonntag um 12. Das ist doch super. Ich freue mich. Ciao, Lea. Ciao.",
      segments: [
        segment("Hallo Lea!", 0, 2), segment("Hi Ben.", 2, 4), segment("Wie war dein Urlaub?", 4, 6),
        segment("Schön, aber viel zu kurz, leider.", 6, 9), segment("Und wie geht's deinem Vater?", 9, 12),
        segment("Er war richtig krank.", 12, 14), segment("Aber jetzt geht es ihm wieder ein bisschen besser.", 14, 17),
        segment("Das ist gut.", 17, 18), segment("Und wie geht's dir?", 18, 20), segment("Alles okay.", 20, 21),
        segment("Du, ich möchte dich mal wieder sehen.", 21, 24), segment("Dann musst du mir von deinem Urlaub erzählen.", 24, 27),
        segment("Gehen wir zusammen essen?", 27, 29), segment("Vielleicht am Wochenende?", 29, 31), segment("Oh ja, gern.", 31, 33),
        segment("Hast du am Samstagabend Zeit?", 33, 35), segment("Schade, da geht es leider nicht, weil ich zu einem Konzert gehe.", 35, 40),
        segment("Ich habe Tickets für Felix Jaehn in der Tonhalle.", 40, 43), segment("Cool!", 43, 44),
        segment("Und am Sonntag?", 44, 46), segment("Geht es da?", 46, 48),
        segment("Wir können zum Brunch gehen, ins „Central“ am Karlsplatz.", 48, 52), segment("Hast du Lust?", 52, 53),
        segment("Das ist eine gute Idee.", 53, 55), segment("Wann möchtest du dort sein?", 55, 57), segment("So um elf, geht das?", 57, 59),
        segment("Geht es auch ein bisschen später?", 59, 61), segment("Dann kann ich am Vormittag noch schwimmen.", 61, 64),
        segment("Ist zwölf Uhr gut?", 64, 65), segment("Ja, das passt.", 65, 67),
        segment("Dann sehen wir uns am Sonntag im „Central“.", 67, 69), segment("Ja, genau, am Sonntag um 12.", 69, 72),
        segment("Das ist doch super.", 72, 74), segment("Ich freue mich.", 74, 75), segment("Ciao, Lea.", 75, 76), segment("Ciao.", 76, 77)
      ]
    },
    {
      id: "l4-essen-ohne-licht",
      name: "L4 · Gloria & Nele",
      image: "",
      audio: "assets/audio/a2/e1/u3/source/A2E1-L4-Essen-ohne-Licht.mp3",
      text: "Hast du es auch schon gehört, Gloria? In der Vorstadt gibt es ein neues Lokal, das „lichtlos“. Man kann dort Kaffee trinken und auch essen, aber es ist total dunkel, ohne Licht, eben lichtlos. Warst du schon dort, Nele? Nein, aber ein paar Freunde von mir. Es hat ihnen super gefallen. Man isst und trinkt, aber man sieht nichts dabei, gar nichts. Ich möchte da auch gern mal hingehen. Kommst du mit? Ich weiß nicht, ich finde das ziemlich komisch: Plötzlich ist das Licht aus. Nein, nein, da ist es immer dunkel. Komm, das wird spannend! Und wie findet man seinen Platz? Die Kellnerinnen und Kellner nehmen dich an der Hand und bringen dich zum Tisch. Und wie bestellt man? Man kann ja keine Speisekarte lesen. Das macht man beim Eingang, an der Rezeption. Dort bezahlt man auch nach dem Essen. Aber Essen ohne Licht, das ist schon komisch. Da kann man das Essen auf dem Teller gar nicht finden. Das sieht bestimmt dumm aus. Das macht doch nichts, du siehst nichts, aber alle anderen sehen auch nichts. Ich finde das interessant. Man muss da ganz anders aufpassen. Das möchte ich erleben. Wann willst du denn da hin? Vielleicht am Freitag in zwei Wochen. Hast du am 22. Zeit? Moment, am Freitag, am 22., ja, das geht. Wir können auch Ole und Simon fragen. Vielleicht kommen sie auch mit. Das ist eine gute Idee. Ich reserviere uns gleich mal einen Tisch.",
      segments: [
        segment("Hast du es auch schon gehört, Gloria?", 0, 3), segment("In der Vorstadt gibt es ein neues Lokal, das „lichtlos“.", 3, 7),
        segment("Man kann dort Kaffee trinken und auch essen, aber es ist total dunkel, ohne Licht, eben lichtlos.", 7, 18),
        segment("Warst du schon dort, Nele?", 16, 18), segment("Nein, aber ein paar Freunde von mir.", 18, 21),
        segment("Es hat ihnen super gefallen.", 21, 23), segment("Man isst und trinkt, aber man sieht nichts dabei, gar nichts.", 23, 28),
        segment("Ich möchte da auch gern mal hingehen.", 28, 31), segment("Kommst du mit?", 31, 32),
        segment("Ich weiß nicht, ich finde das ziemlich komisch: Plötzlich ist das Licht aus.", 32, 38),
        segment("Nein, nein, da ist es immer dunkel.", 38, 41), segment("Komm, das wird spannend!", 41, 44),
        segment("Und wie findet man seinen Platz?", 44, 46), segment("Die Kellnerinnen und Kellner nehmen dich an der Hand und bringen dich zum Tisch.", 46, 51),
        segment("Und wie bestellt man?", 51, 53), segment("Man kann ja keine Speisekarte lesen.", 53, 55),
        segment("Das macht man beim Eingang, an der Rezeption.", 55, 58), segment("Dort bezahlt man auch nach dem Essen.", 58, 60),
        segment("Aber Essen ohne Licht, das ist schon komisch.", 60, 64), segment("Da kann man das Essen auf dem Teller gar nicht finden.", 64, 67),
        segment("Das sieht bestimmt dumm aus.", 67, 70), segment("Das macht doch nichts, du siehst nichts, aber alle anderen sehen auch nichts.", 70, 75),
        segment("Ich finde das interessant.", 75, 77), segment("Man muss da ganz anders aufpassen.", 77, 80), segment("Das möchte ich erleben.", 80, 82),
        segment("Wann willst du denn da hin?", 82, 85), segment("Vielleicht am Freitag in zwei Wochen.", 85, 87), segment("Hast du am 22. Zeit?", 87, 89),
        segment("Moment, am Freitag, am 22., ja, das geht.", 89, 98), segment("Wir können auch Ole und Simon fragen.", 98, 100),
        segment("Vielleicht kommen sie auch mit.", 100, 102), segment("Das ist eine gute Idee.", 102, 104), segment("Ich reserviere uns gleich mal einen Tisch.", 104, 106)
      ]
    }
  ];
})();
