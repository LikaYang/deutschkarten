(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.DeutschstadtPreviewExport = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  const KEYS = Object.freeze({
    progress: "deutschstadt.preview.lessons.v01",
    legacy: "deutschstadt.preview.a2e1l1.v01",
    rueckblick: "deutschstadt.rueckblick.a2e1l2.v01"
  });
  function object(value, label) {
    if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error(label + " 格式异常，未生成迁移码；原存档未修改。");
    return value;
  }
  function string(value, label) {
    if (typeof value !== "string" || value.length > 10000) throw new Error(label + " 内容异常，未生成迁移码。");
    return value;
  }
  function strings(value, label) {
    if (!Array.isArray(value) || value.length > 1000) throw new Error(label + " 格式异常。");
    return value.map(item => string(item, label));
  }
  function entries(value, label) {
    const result = Object.entries(object(value, label));
    if (result.length > 10000) throw new Error(label + " 记录过多，未生成迁移码。");
    return result;
  }
  function read(storage, key) {
    let raw;
    try { raw = storage.getItem(key); }
    catch (_) { throw new Error("无法读取浏览器学习存档；请保留当前浏览器，不要清除网站数据。"); }
    if (raw === null) return null;
    if (raw.length > 2000000) throw new Error("学习存档过大，未生成迁移码。");
    try { return object(JSON.parse(raw), key); }
    catch (_) { throw new Error(key + " 存档无法解析，未生成迁移码；原存档未修改。"); }
  }
  function numbers(value, label, maximum) {
    return Object.fromEntries(entries(value === undefined ? {} : value, label).map(([id, number]) => {
      if (!id || id.length > 200 || typeof number !== "number" || !Number.isFinite(number) || number < 0 || number > maximum) throw new Error(label + " 数值异常，未生成迁移码。");
      return [id, number];
    }));
  }
  function cardState(value) {
    object(value, "卡牌进度");
    return {
      known: numbers(value.known, "已认识标记", Number.MAX_SAFE_INTEGER),
      review: numbers(value.review, "待复习标记", Number.MAX_SAFE_INTEGER),
      xp: numbers(value.xp, "卡牌 XP", 100),
      updatedAt: value.updatedAt === undefined ? "" : string(value.updatedAt, "更新时间")
    };
  }
  function boolean(value, label) {
    if (typeof value !== "boolean") throw new Error(label + " 格式异常。");
    return value;
  }
  function build(storage, catalog, now) {
    // Read only explicit learning stores, never enumerate storage or copy sessions.
    const saved = read(storage, KEYS.progress);
    const legacy = read(storage, KEYS.legacy);
    const reflection = read(storage, KEYS.rueckblick);
    const warnings = [
      "仅包含当前浏览器、当前网址已保存的记录；其他设备或网址的进度需分别导出。",
      "旧版 Nachsprechen 跟读及 Bildungsweg 操作未持久化，不能恢复；这不代表你没有做过。",
      "此码用于学习进度迁移，不是账号凭证；导出不会自动导入主游戏或获得课程权限。"
    ];
    const lessonRecords = entries(saved?.lessons ?? {}, "课时进度").map(([lessonId, value]) => {
      string(lessonId, "课时 ID");
      const lesson = catalog.find(item => item.id === lessonId);
      if (!lesson) warnings.push("保留了当前目录未列出的课时记录：" + lessonId);
      const progress = cardState(value);
      const ids = new Set([...Object.keys(progress.known), ...Object.keys(progress.review), ...Object.keys(progress.xp)]);
      if (lesson && [...ids].some(id => !lesson.cards.some(card => card.id === id))) warnings.push("保留了课时 " + lessonId + " 中当前目录未列出的卡牌记录。");
      return { lessonId, packId: lesson?.packId || null, progress };
    });
    const videos = entries(saved?.inputs ?? {}, "视频进度").map(([inputId, value]) => {
      object(value, "视频进度");
      return {
        inputId: string(inputId, "视频 ID"),
        completed: boolean(value.completed, "视频完成状态"),
        choices: strings(value.choices ?? [], "视频选择"),
        updatedAt: string(value.updatedAt ?? "", "视频更新时间")
      };
    });
    const rueckblick = reflection === null ? null : {
      lessonId: "A2E1L2",
      completedScenes: strings(reflection.completedScenes ?? [], "回顾场景"),
      reflectionKeywords: strings(reflection.reflectionKeywords ?? [], "回顾关键词"),
      reflectionAnswers: strings(reflection.reflectionAnswers ?? [], "回顾回答"),
      completed: boolean(reflection.completed ?? false, "回顾完成状态"),
      xpClaimed: boolean(reflection.xpClaimed ?? false, "旧版奖励标记")
    };
    const legacyRecord = legacy === null ? null : { lessonId: "A2E1L1", progress: cardState(legacy) };
    if (legacyRecord) warnings.push("已保留旧版 A2E1L1 存档；与新版并存时供导入预览核对，不重复累加 XP。");
    const payload = {
      type: "deutschstadt-preview-progress-bundle", schemaVersion: 2,
      exportedAt: now || new Date().toISOString(),
      lessons: lessonRecords, legacy: legacyRecord, videos, rueckblick,
      unavailable: ["nachsprechen-history", "bildungsweg-history"]
    };
    const states = lessonRecords.map(item => item.progress);
    if (legacyRecord) states.push(legacyRecord.progress);
    const touched = new Set(), masters = new Set();
    states.forEach(progress => {
      Object.keys(progress.known).forEach(id => touched.add(id));
      Object.keys(progress.review).forEach(id => touched.add(id));
      Object.entries(progress.xp).forEach(([id, xp]) => {
        if (xp > 0) touched.add(id);
        if (xp >= 100) masters.add(id);
      });
    });
    return { payload, warnings, summary: {
      savedLessons: lessonRecords.length, legacyPresent: Boolean(legacyRecord),
      touchedCards: touched.size, masterCards: masters.size,
      savedVideos: videos.length, completedVideos: videos.filter(item => item.completed).length,
      rueckblickPresent: Boolean(rueckblick), rueckblickCompleted: Boolean(rueckblick?.completed)
    } };
  }
  function encode(payload) {
    const bytes = new TextEncoder().encode(JSON.stringify(payload));
    let binary = "";
    for (const byte of bytes) binary += String.fromCharCode(byte);
    return "DS-PREVIEW-ALL-V2:" + btoa(binary);
  }
  return Object.freeze({ KEYS, build, encode });
});
