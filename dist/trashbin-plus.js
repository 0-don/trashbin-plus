(async()=>{while(!Spicetify.React||!Spicetify.ReactDOM)await new Promise(r=>setTimeout(r,10));var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// ext:react
var require_react = __commonJS((exports, module) => {
  module.exports = Spicetify.React;
});

// ext:react-dom
var require_react_dom = __commonJS((exports, module) => {
  module.exports = Spicetify.ReactDOM;
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS((exports) => {
  var React4 = __toESM(require_react());
  (function() {
    function is(x, y) {
      return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
      didWarnOld18Alpha || React4.startTransition === undefined || (didWarnOld18Alpha = true, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var value = getSnapshot();
      if (!didWarnUncachedGetSnapshot) {
        var cachedValue = getSnapshot();
        objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = true);
      }
      cachedValue = useState2({
        inst: { value, getSnapshot }
      });
      var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
      useLayoutEffect2(function() {
        inst.value = value;
        inst.getSnapshot = getSnapshot;
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      }, [subscribe, value, getSnapshot]);
      useEffect2(function() {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        return subscribe(function() {
          checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        });
      }, [subscribe]);
      useDebugValue2(value);
      return value;
    }
    function checkIfSnapshotChanged(inst) {
      var latestGetSnapshot = inst.getSnapshot;
      inst = inst.value;
      try {
        var nextValue = latestGetSnapshot();
        return !objectIs(inst, nextValue);
      } catch (error) {
        return true;
      }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
      return getSnapshot();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var objectIs = typeof Object.is === "function" ? Object.is : is, useState2 = React4.useState, useEffect2 = React4.useEffect, useLayoutEffect2 = React4.useLayoutEffect, useDebugValue2 = React4.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined" ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = React4.useSyncExternalStore !== undefined ? React4.useSyncExternalStore : shim;
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS((exports, module) => {
  if (false) {} else {
    module.exports = require_use_sync_external_store_shim_development();
  }
});

// src/i18n/af.json
var require_af = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Asblik+",
    ACTION_THROW: "Plaas in asblik",
    ACTION_UNTHROW: "Verwyder uit asblik",
    ACTION_CLEAR: "Duidelik",
    ACTION_COPY: "Kopieer",
    ACTION_EXPORT: "Uitvoer",
    ACTION_IMPORT: "Invoer",
    MESSAGE_COPIED: "Gekopieer na knipbord",
    MESSAGE_CLEARED: "Asblik suksesvol skoongemaak!",
    MESSAGE_SONG_ADDED: "Liedjie by prullenmandjie gevoeg",
    MESSAGE_SONG_REMOVED: "Liedjie uit asblik verwyder",
    MESSAGE_ARTIST_ADDED: "Kunstenaar by prullenmandjie gevoeg",
    MESSAGE_ARTIST_REMOVED: "Kunstenaar verwyder uit asblik",
    BACKUP_SAVE_SUCCESS: "Back-up suksesvol gestoor.",
    BACKUP_SAVE_FAILED: "Kon nie rugsteunkopie stoor nie, probeer om inhoud van asblik na knipbord kopieer en 'n rugsteunkopie handmatig skep.",
    BACKUP_RESTORE_SUCCESS: "Back-up suksesvol herstel.",
    BACKUP_FILE_READ_FAILED: "Het nie die lêer kon lees nie, verseker asseblief dit is 'n geldige JSON-lêer.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Papiermandjie+ Instellings",
    SETTINGS_OPTIONS: "Opsies",
    SETTINGS_FEATURES: "Kenmerke",
    SETTINGS_STORAGE: "Berging",
    SETTINGS_ENABLED: "Aangetrek",
    SETTINGS_SHOW_WIDGET: "Wys Widgetikoon",
    SETTINGS_AUTOPLAY: "Speel outomaties af vanaf begin",
    SETTINGS_QUEUE_TRASHBIN: "Aktiveer Wachtrashblik",
    SETTINGS_TRACKLIST_TRASHBIN: "Aktiveer Tracklys-asblik",
    SETTINGS_PLAYLIST_MONITOR: "Afspeellys Monitor",
    ITEMS_TITLE: "Asblik+ Items",
    ITEMS_EMPTY_SONGS: "<strong>Geen verwyderde liedjies!</strong><br/>Liedjies wat jy na die asblik toe skuif, sal hier verskyn.",
    ITEMS_EMPTY_ARTISTS: "<strong>Geen afval gemaakte kunstenaars!</strong><br/>Kunstenaars wat jy by die asblik voeg, sal hier verskyn.",
    ITEMS_TAB_SONGS: "Liedjies",
    ITEMS_TAB_ARTISTS: "Kunstenaars",
    ITEMS_LOADED_COUNT: "{{loaded}} van {{total}} {{type}} gelaai",
    ITEMS_SEARCH_PLACEHOLDER: "Soek op naam, kunstenaar of URI...",
    DESCRIPTION_COPY: "Kopieer alle items in die asblik na die knipbord.",
    DESCRIPTION_EXPORT: "Stoor alle items in die asblik na 'n .json-lêer.",
    DESCRIPTION_IMPORT: "Oorskryf alle items in die asblik via .json-lêer.",
    DESCRIPTION_CLEAR: "Verwyder alle items uit die asblik (kan nie ongedaan gemaak word nie).",
    ITEMS_EMPTY_SONGS_TITLE: "Geen verwyderde liedjies nie!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Geen verwoeste kunstenaars nie!",
    DESCRIPTION_SETTINGS_ENABLED: "Hoofwisselaar om alle Trashbin+-funksies in- of uit te skakel",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Wys 'n asblikikoon in die afspeelbalk langs die huidige spoor vir vinnige toegang",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Begin outomaties met speel van musiek wanneer Spotify oopgaan of die uitbreiding laai",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Voeg asblik-ikone langs elke liedjie in jou komende ry toe vir maklike bestuur",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Voeg asblik-ikone langs liedjies by album- en afspeellys-uitsigte vir vinnige filtreer",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Herstel outomaties van Spotify-afspeelfoutjies deur jou laaste afspeellys te hervat",
    SETTINGS_SKIP_TRASHED_TRACKS: "Slaan Verwoeste Spore oor",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Slaan outomaties verwyderde liedjies oor en vind die volgende toegelate liedjie tydens afspeel",
    SETTINGS_AUTO_CLEAN_QUEUE: "Outomatiese Skoonmaakry",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Verwyder outomaties verwyderde liedjies uit jou Slim Aftjankrye",
    SETTINGS_REMOTE_CONTROL: "Afstandbeheer",
    SETTINGS_REMOTE_TOGGLE: "Aktiveer Verre Wisselaar",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Tik twee keer op speel/pouse vanaf mobiel om verwekte oorslaan aan/af te skakel. 'n Oorslaan van 'n snit bevestig die skakelaar.",
    SETTINGS_REMOTE_SKIPPING: "Afstandskipping Aan",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Wanneer dit geaktiveer is, werk die prullenbak-omseiling selfs wanneer Spotify vanaf 'n ander toestel beheer word (byvoorbeeld, selfoon)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Afstandskipping toegelaat",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Afstandskipping gedeaktiveer",
    MESSAGE_SONG_ADDED_REMOTE: "Lied verwoes via afstandbeheer",
    SETTINGS_TRASH_VIA_LIKE: "Afval via Soos",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: `Soos 'n liedjie vanaf mobiel na asblik. Verwyder outomaties die "like" en slaan oor na die volgende nommer.`,
    SETTINGS_AI_DETECTION: "Kunsmatige Intelligensie-opsporing",
    SETTINGS_AI_DETECTION_ENABLED: "AI-liedjie-opsporing",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Vind outomaties gegenereerde liedjies met behulp van die SONICS-model en toon 'n waarskynlikheidsaanduider. Laai ~50MB-model af tydens eerste aktivering.",
    AI_ASSETS_DOWNLOADING: "Aan die aflaai van KI-model...",
    AI_ASSETS_READY: "K.I.-model gereed",
    AI_ASSETS_NOT_READY: "KIE-model nie beskikbaar nie",
    SETTINGS_TRASH_AI_SONGS: "Afval AI-liewe",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Verwyder outomaties liedjies wat as deur kunsmatige intelligensie gegenereer opgespoor word (waarskynlikheid ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Wis alle gestoorde KI-klassifikasieresultate uit ({{count}} liedjies gestoor).",
    ACTION_CLEAR_AI_STORAGE: "Duidelik",
    MESSAGE_AI_STORAGE_CLEARED: "KI-resultate skoongemaak",
    AI_TIER_LIKELY_HUMAN: "Waarskynlik Menslik",
    AI_TIER_PROBABLY_HUMAN: "Waarskynlik Menslik",
    AI_TIER_UNCERTAIN: "Onseker",
    AI_TIER_PROBABLY_AI: "Waarskynlik KI",
    AI_TIER_LIKELY_AI: "Waarskynlike KI",
    ACTION_REMOVE_TRASHED: "Verwyder verwyderde liedjies",
    CONFIRM_REMOVE_TRASHED: "Verwyder {{count}} lied(ers) uit hierdie afspeellys? Dit kan nie ongedaan gemaak word nie.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "{{count}} verwyderde liedjies uit afspeellys verwyder",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Geen verwyderde liedjies gevind in hierdie speellys nie"
  };
});

// src/i18n/am.json
var require_am = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "ሳርጭ ሳጥን+",
    ACTION_THROW: "ውስጥ ወደ አብሮ ማጥመድ ሳጥን ያስገቡ",
    ACTION_UNTHROW: "ከዝተወረደው ቦታ ያስወግዱ",
    ACTION_CLEAR: "ጠራራ",
    ACTION_COPY: "ኮፒ አድርግ",
    ACTION_EXPORT: "ላወጥ ማድረግ",
    ACTION_IMPORT: "ማስገቢያ",
    MESSAGE_COPIED: "በክሊፕቦርድ ላይ ተቀናብሼስ ፡፡",
    MESSAGE_CLEARED: "የመጥፎ ምግብ ሳጥን በተሳካ ሁኔታ ተሰራ!",
    MESSAGE_SONG_ADDED: "አውድ ወደ ምጥ ሳጥን ተጨምሯል",
    MESSAGE_SONG_REMOVED: "አውድ ከቆሻሻው ሰርተዋል",
    MESSAGE_ARTIST_ADDED: "አርቲስት ወደ አፍንጫ ተጨምሯል",
    MESSAGE_ARTIST_REMOVED: "አርቲስት ከቆሻሻ ቦታ ተወግሶ ተሰርቶ ።",
    BACKUP_SAVE_SUCCESS: "ደህንነት ለማረጋገጥ በተሳካ ሁኔታ ተቀምጧል።",
    BACKUP_SAVE_FAILED: "ማስቀመጫ ስራ አልተሳካም፣ የሙስኩስ ሳጥን ውስጥ ያለውን ይቅር በክሊፕቦርድ ላይ እና በእጅ ማስቀመጫ ይሞክሩ።",
    BACKUP_RESTORE_SUCCESS: "ማስቀመጫው በተሳካ ሁኔታ ወደ ነበረበት ሁኔታ ተመልሷል።",
    BACKUP_FILE_READ_FAILED: "ማንኛውንም ፋይል ማንበብ አልተቻለም፣ እባክዎ እንደሚገባ የ JSON ፋይል መሆኑን ያረጋግጡ።",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "የመጥར ሳጥን+ ማስተካከያዎች",
    SETTINGS_OPTIONS: "አማራጮች",
    SETTINGS_FEATURES: "የተለያዩ ባህሪዎች",
    SETTINGS_STORAGE: "ማከማቻ",
    SETTINGS_ENABLED: "ተቋቋመ",
    SETTINGS_SHOW_WIDGET: "አይሮ ምልክት አሳይ",
    SETTINGS_AUTOPLAY: "ራስ ብራቁ መስራት በመጀመሪያ",
    SETTINGS_QUEUE_TRASHBIN: "የኩራተ ማዕከል ማጥመድ",
    SETTINGS_TRACKLIST_TRASHBIN: "የመተግበሪያ ዝርዝር ማዕከል ማጥፋት አንቃ አንቃ አንቃ",
    SETTINGS_PLAYLIST_MONITOR: "የፕሌሊስት ቅጣት",
    ITEMS_TITLE: "የመጥፎ ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነገር ነ",
    ITEMS_EMPTY_SONGS: "<strong>የተወረወሩ ድግስ የለም!</strong><br/>ወደ የፍርፍር ሳጥን የምትጨምሩት ድግስ እዚህ ይታያል።",
    ITEMS_EMPTY_ARTISTS: "<strong>ምንም የተወረወሩ አርቲስቶች የሉም!</strong><br/>ወደ መዋረድ ሳጥን የትዉ የአርቲስቶች ስሞች እዚህ ይታያሉ።",
    ITEMS_TAB_SONGS: "አሶች",
    ITEMS_TAB_ARTISTS: "አርቲስቶች",
    ITEMS_LOADED_COUNT: "{{ተጫነ}} ከ {{ጠቅላላ}} የ {{አይነት}} ተጫንቷል",
    ITEMS_SEARCH_PLACEHOLDER: "የምርመራ ስም፣ አርቲስት፣ ወይም URI...",
    DESCRIPTION_COPY: "ሁሉንም የተወገዙ የእቃዎች መዝገብ ወደ ክሊፕቦርድ ይቅዱ።",
    DESCRIPTION_EXPORT: "ሁሉንም የተወረወሩ ነገሮች ወደ .json ፋይል አስቀምጥ።",
    DESCRIPTION_IMPORT: "ሁሉንም የተወገዱ ነገሮች በ .json ፋይል ይተኩ።",
    DESCRIPTION_CLEAR: "ሁሉንም የተወገዱ ነገሮች ከቆሻሻ መያ ጠፍቷል (ማስመለስ አይቻልም)።",
    ITEMS_EMPTY_SONGS_TITLE: "የተወረደ ድግግሞሽ የለም!",
    ITEMS_EMPTY_ARTISTS_TITLE: "ምንም የተወረደ አርቲስቶች የሉም!",
    DESCRIPTION_SETTINGS_ENABLED: "ዋና የመርከብ ማብሪያ ለሁሉም የተሸጠ ሳጥን + ተግባር ማብሪያ ወይም ማጥፊያ",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "የመረት ፊደል ምልክት በተስተካከለ መዝሙር ባር ላይ በአሁኑ የሚጫወት መዝሙር ከጎን ለቀላል መዳረስ አሳይ።",
    DESCRIPTION_SETTINGS_AUTOPLAY: "ከስፖቲፋይ ተክል ወይም ልዩ ተጨማሪ ሲጫን አውቶማቲክ ማስተዋል ያስጀምሩ",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "የማጥፋት አይኮን ወደ እያንዳንዱ የሚመጣ ድምፅ ድረስ አክሉ ለቀላል አስተዳደር",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "የመዝሙር ማሳያዎች ውስጥ ለፍጥነት ማጣራት የመዝሙር ማሳያዎች ከጎ ምስል ያክሉ",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "በአውቶማቲክ ከስፖቲፋይ መዝሙር መቆራረጥ ይገለፁ በመጨረሻዎ የመዝሙር ዝርዝር መቀጠል አድርገው",
    SETTINGS_SKIP_TRASHED_TRACKS: "ዝተገደሉ ትራኮች አስቀድም",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "ከራስ በራሱ የተወረዱ ድግስ ድረ-ገፅ ያስገቡ እና በሚጫወትበት ጊዜ የሚፈቀደውን የሚቀጥለውን መዝሙር ያግኙ",
    SETTINGS_AUTO_CLEAN_QUEUE: "ራስ ግልጽ የሆነ የማረሚያ ድረስ",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "በራስ ተመርጧ የተወረዱ የሙዚቃ መዝሙራትን ከስማርት ሾፌል የሚያስቀምጡበት ዝርዝር ውስጥ ያስወግዱ",
    SETTINGS_REMOTE_CONTROL: "ሪሞት ኮንትሮል",
    SETTINGS_REMOTE_TOGGLE: "የተላላፊ መቀየሪያ አንቃል",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "ከሞባይል ላይ ያለውን መጫን/ማቆም ሁለት ጊዜ ይጫኑ እንዲያገለግል የርቀት ማስቀመጫ ይቀይሩ ወይም ይጥላው። የመዝሙር ማስቀመጫ ማውጫ ነው።",
    SETTINGS_REMOTE_SKIPPING: "የተላላዩ ብስክሌት ማውረድ አንድ ላይ ነው",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "በማንኛውም ሌላ መሣሪያ (ለምሳሌ ሞባይል) ከስፖቲፋይ በማቆጣጠር ጊዜ የመዋጮ ቦታ ማስቀመጫ ከተፈጠረ በኋላ ይሰራል",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "የተላላፊ የመዝለል ስርዓት አንቃቃል",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "የተገላቢጦሽ ማፈን አልተፈቀደም",
    MESSAGE_SONG_ADDED_REMOTE: "አሶንጎ ከራስ በር ተገፍቶ ተደምሶ ነው የተገፍተው",
    SETTINGS_TRASH_VIA_LIKE: "ዝርዝር በማይክ ማስገባት",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "እንደ ሞባይል የሚመጣ ድምፅ ማዕቀፍ ያደርገዋል። አውቶማቲክ ሁኔታ የማይወዷቸው ሲሆን ወደ የሚቀጥለው መዝሙር ይዝዋል።",
    SETTINGS_AI_DETECTION: "የአይ.አይ መለየት",
    SETTINGS_AI_DETECTION_ENABLED: "የአይአይ የሙዚቃ መለየያ",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "AI የፈጠረውን ጸሐይ ጸሐይ በSONICS ሞዴል ያውቁ እና ዕድል ጠቋሚ ያሳዩ። ለመጀመሪያ ጊዜ ሲፈጠር ~50MB ሞዴል ይጫናል።",
    AI_ASSETS_DOWNLOADING: "ማንኛውንም አርትፊሻል ኢንተሊጀንስ ሞዴል ማውረድ...",
    AI_ASSETS_READY: "የአይ ሞዴል ዝግጁ ነው",
    AI_ASSETS_NOT_READY: "የአይአይ ሞዴል የለም",
    SETTINGS_TRASH_AI_SONGS: "የጌጋ ኤአይ ጠባቂዎች",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "ከራስ-ሰር የሚወረሱ ድግስ የአርትፍሽያል ኢንተሊጀንስ ተፈጥሯል (ስיכוי ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "ሁሉንም የተቀመጡ የአ.ተ. የመለየት ውጤቶች ያጥፉ ({{count}} የተቀመጡ ግናኝዎች)።",
    ACTION_CLEAR_AI_STORAGE: "ጠቃሚ",
    MESSAGE_AI_STORAGE_CLEARED: "የአይአይ ውጤቶች ከተጠናቀቁ በኋላ",
    AI_TIER_LIKELY_HUMAN: "አስተዋይ ሰው የሆነ ሊሆን ይችላል",
    AI_TIER_PROBABLY_HUMAN: "አንድ ጊዜ ሰው ነው",
    AI_TIER_UNCERTAIN: "ያልተወሰነ",
    AI_TIER_PROBABLY_AI: "አሁን የመሆን የሚችለው አርትፊሻል ኢንተሊጀንስ ነው",
    AI_TIER_LIKELY_AI: "አይአይ",
    ACTION_REMOVE_TRASHED: "የተወረወሩ ድግስቶችን ያስወግዱ",
    CONFIRM_REMOVE_TRASHED: "መዝሙር {{count}} ከዝውር የተወሰዱ ከዚህ የመዝሙር ዝርዝር ማስወገድ ይፈልጋሉ? ይህ አይቻልም እንደገና ማስተካከል።",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "አልማ የተደረገውን {{count}} የሙዚቃ መዝሙር(ዎች) ከዝግ ጋር መዝሙር ዝርዝር ጥላ ሰርዝተዋል",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "የተወረደ ድምፆች ከዚህ የተለየ ዝርዝር የለም"
  };
});

// src/i18n/ar-EG.json
var require_ar_EG = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "سلة المهملات+",
    ACTION_THROW: "ضع في سلة المهملات",
    ACTION_UNTHROW: "اخرج من سلة المهملات",
    ACTION_CLEAR: "واضح",
    ACTION_COPY: "نسخ",
    ACTION_EXPORT: "تصدير",
    ACTION_IMPORT: "استيراد",
    MESSAGE_COPIED: "تم النسخ إلى الحافظة",
    MESSAGE_CLEARED: "اتمّت عمليّة تنظيف سلة المهملات بنجاح!",
    MESSAGE_SONG_ADDED: "اتضاف الأغنية للسلة المهملة",
    MESSAGE_SONG_REMOVED: "تمت إزالة الأغنية من سلة المهملات",
    MESSAGE_ARTIST_ADDED: "اتضاف الفنان للسلة المهملات",
    MESSAGE_ARTIST_REMOVED: "اتمسح الفنان من سلة المهملات",
    BACKUP_SAVE_SUCCESS: "اتحفظ البك اب بنجاح.",
    BACKUP_SAVE_FAILED: "فشل حفظ النسخة الاحتياطية، جرب نسخ محتويات سلة المهملات إلى الحافظة وإنشاء نسخة احتياطية يدويًا.",
    BACKUP_RESTORE_SUCCESS: "اتم استرجاع النسخة الاحتياطية بنجاح.",
    BACKUP_FILE_READ_FAILED: "فشلت قراءة الملف، يُرجى التأكد من أنه ملف JSON صالح.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "إعدادات سلة المهملات+",
    SETTINGS_OPTIONS: "خيارات",
    SETTINGS_FEATURES: "مميزات",
    SETTINGS_STORAGE: "التخزين",
    SETTINGS_ENABLED: "مُمَكَّن",
    SETTINGS_SHOW_WIDGET: "اعرض أيقونة الودجيت",
    SETTINGS_AUTOPLAY: "تشغيل تلقائي عند البدء",
    SETTINGS_QUEUE_TRASHBIN: "تفعيل سلة مهملات الطابور",
    SETTINGS_TRACKLIST_TRASHBIN: "تفعيل سلة مهملات قائمة المسارات",
    SETTINGS_PLAYLIST_MONITOR: "مُراقب التشغيل",
    ITEMS_TITLE: "عناصر سلة المهملات+",
    ITEMS_EMPTY_SONGS: "<strong>مفيش أغانى محذوفة!</strong><br/>الأغانى اللى تحطها فى سلة المهملات هتظهر هنا.",
    ITEMS_EMPTY_ARTISTS: "<strong>مفيش فنانين في سلة المهملات!</strong><br/>الفنانين اللي تحطهم في سلة المهملات هيظهروا هنا.",
    ITEMS_TAB_SONGS: "أغانى",
    ITEMS_TAB_ARTISTS: "الفنانين",
    ITEMS_LOADED_COUNT: "تم تحميل {{loaded}} من أصل {{total}} {{type}}",
    ITEMS_SEARCH_PLACEHOLDER: "ابحث بالاسم، أو الفنان، أو URI...",
    DESCRIPTION_COPY: "انسخ كل العناصر في سلة المهملات للحافظة.",
    DESCRIPTION_EXPORT: "احفظ كل العناصر في سلة المهملات في ملف .json.",
    DESCRIPTION_IMPORT: "اكتب فوق كل العناصر في سلة المهملات باستخدام ملف .json.",
    DESCRIPTION_CLEAR: "امسح كل العناصر من سلة المهملات (مفيش رجعة).",
    ITEMS_EMPTY_SONGS_TITLE: "مفيش أغانى تخريب!",
    ITEMS_EMPTY_ARTISTS_TITLE: "مفيش فنانين وحشين!",
    DESCRIPTION_SETTINGS_ENABLED: "زر رئيسي للتفعيل أو الإيقاف لكل وظائف سلة المهملات+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "اعرض أيقونة سلة المهملات في شريط التشغيل بجانب المسار اللي بتشتغل دلوقتي للوصول السريع",
    DESCRIPTION_SETTINGS_AUTOPLAY: "إبدأ تشغيل الموسيقى تلقائيًا لما يفتح سبوتيفاي أو لما يحمل الامتداد",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "أضف أيقونات سلة مهملات بجانب كل أغنية في قائمة الانتظار الخاصة بك للإدارة السهلة",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "أضف أيقونات سلة المهملات بجانب الأغاني في عروض الألبوم والقوائم علشان التصفية السريعة",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "استرجاع تلقائي من أعطال تشغيل سبوتيفاي باستئناف قائمت التشغيل الأخيرة بتاعتك",
    SETTINGS_SKIP_TRASHED_TRACKS: "تجاوز المسارات المحذوفة",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "تجاوز تلقائي للأغاني المحذوفة وإيجاد المسار المسموح به التالي أثناء التشغيل",
    SETTINGS_AUTO_CLEAN_QUEUE: "قائمة التنظيف التلقائي",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "امسح الأغاني المحذوفة من قائمة التشغيل العشوائية الذكية تلقائيًا",
    SETTINGS_REMOTE_CONTROL: "ريموت كنترول",
    SETTINGS_REMOTE_TOGGLE: "تفعيل التبديل عن بعد",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "اضغط مرتين على تشغيل/إيقاف من الموبايل علشان تشغل أو توقف تخطي التحكم عن بعد. تخطي الأغنية بيأكد التبديل.",
    SETTINGS_REMOTE_SKIPPING: "التخطي عن بعد فعال",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "لو تم تفعيله، يشتغل تخطي المحتوى غير المرغوب فيه حتى لو كنت بتحكّم في سبوتيفاي من جهاز تاني (زي الموبايل)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "تم تفعيل التخطي عن بعد",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "تم إيقاف التخطي عن بعد",
    MESSAGE_SONG_ADDED_REMOTE: "اتكسرت الأغنية عن بعد",
    SETTINGS_TRASH_VIA_LIKE: "زبالة عن طريق لايك",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "زي أغنية من الموبايل ترميها. يلغي الإعجاب تلقائيًا ويجوز للأغنية الجاية.",
    SETTINGS_AI_DETECTION: "كشف الذكاء الاصطناعي",
    SETTINGS_AI_DETECTION_ENABLED: "كشف أغنية الذكاء الاصطناعي",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "اكتشف الأغاني اللي اتعملت بالذكاء الاصطناعي باستخدام نموذج SONICS واعرض مؤشر احتمالية. بيحمل النموذج بحوالي 50 ميجابايت لما تُفعّله لأول مرة.",
    AI_ASSETS_DOWNLOADING: "جارٍ تنزيل نموذج الذكاء الاصطناعي...",
    AI_ASSETS_READY: "النموذج الاصطناعي جاهز",
    AI_ASSETS_NOT_READY: "النموذج الاصطناعي مش متاح",
    SETTINGS_TRASH_AI_SONGS: "أغاني الذكاء الاصطناعي السيئة",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "احذف تلقائيًا الأغاني اللي اتكتشفت إنها من إنشاء الذكاء الاصطناعي (احتمال ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "امسح كل نتائج التصنيف الاصطناعي المحفوظة ({{count}} أغانٍ محفوظة).",
    ACTION_CLEAR_AI_STORAGE: "واضح",
    MESSAGE_AI_STORAGE_CLEARED: "تمت إزالة نتائج الذكاء الاصطناعي",
    AI_TIER_LIKELY_HUMAN: "على الأرجح بشرية",
    AI_TIER_PROBABLY_HUMAN: "على الأرجح بشرية",
    AI_TIER_UNCERTAIN: "مش متأكد",
    AI_TIER_PROBABLY_AI: "على الأرجح ذكاء اصطناعي",
    AI_TIER_LIKELY_AI: "من المرجح الذكاء الاصطناعي",
    ACTION_REMOVE_TRASHED: "امسح الأغانى المحدوفة",
    CONFIRM_REMOVE_TRASHED: "تحذف {{count}} أغانٍ محذوفة من البلاي ليست ده؟ مش هينفع ترجعها تاني.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "تمت إزالة {{count}} أغنية محذوفة من قائمة التشغيل",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "مفيش أغانى محذوفة موجودة فى البلاى ليست دى"
  };
});

// src/i18n/ar-MA.json
var require_ar_MA = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "سلة المهملات+",
    ACTION_THROW: "ضع في سلة المهملات",
    ACTION_UNTHROW: "احذف من سلة المحذوفات",
    ACTION_CLEAR: "واضح",
    ACTION_COPY: "انسخ",
    ACTION_EXPORT: "صّدر",
    ACTION_IMPORT: "استيراد",
    MESSAGE_COPIED: "نُسخ للحافظة",
    MESSAGE_CLEARED: "تم مسح سلة المهملات بنجاح!",
    MESSAGE_SONG_ADDED: "تْزاد البلاصة فسلة المهملات",
    MESSAGE_SONG_REMOVED: "تّسناخت تّغريدة من صندوق لمحذوفات",
    MESSAGE_ARTIST_ADDED: "الفنان تزاد للسلة ديال اللخرق",
    MESSAGE_ARTIST_REMOVED: "الفنان تمسح من السلة",
    BACKUP_SAVE_SUCCESS: "تم حفظ النسخة الاحتياطية بنجاح.",
    BACKUP_SAVE_FAILED: "ما تقدرتش تحفض النسخة الاحتياطية، جرب تنقل محتويات سلة المهملات للحافظة وتحدد نسخة احتياطية يدويًا.",
    BACKUP_RESTORE_SUCCESS: "تم استرجاع النسخة الاحتياطية بنجاح.",
    BACKUP_FILE_READ_FAILED: "ما قدرش يقراء الملف، تأكد منين أنو ملف JSON سليم.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "الإعدادات+سلة المهملات",
    SETTINGS_OPTIONS: "خيارات",
    SETTINGS_FEATURES: "مميزات",
    SETTINGS_STORAGE: "الحِفظ",
    SETTINGS_ENABLED: "مُمَكَّن",
    SETTINGS_SHOW_WIDGET: "عرض أيقونة الودجيت",
    SETTINGS_AUTOPLAY: "التشغيل التلقائي ف البداية",
    SETTINGS_QUEUE_TRASHBIN: "دوز على سلة المحذوفات للطابور",
    SETTINGS_TRACKLIST_TRASHBIN: "دوز على سلة المهملات للقائمة التّشغيلية",
    SETTINGS_PLAYLIST_MONITOR: "مراقب اللائحة",
    ITEMS_TITLE: "عناصر سلة المهملات+",
    ITEMS_EMPTY_SONGS: "<strong>ماشي أغانٍ ممسوحة!</strong><br/>الأغانٍ اللي بغيتي تزيدها فالسلة غادي تظهر هنا.",
    ITEMS_EMPTY_ARTISTS: "<strong>ماشي فنانين في السلة!</strong><br/>الفنانين اللي تزيدهم في السلة غادي يظهرو هنا.",
    ITEMS_TAB_SONGS: "أغاني",
    ITEMS_TAB_ARTISTS: "فنانين",
    ITEMS_LOADED_COUNT: "{{loaded}} من أصل {{total}} {{type}} تحمّلوا",
    ITEMS_SEARCH_PLACEHOLDER: "ابحث بالاسم، الفنان، ولا الـ URI...",
    DESCRIPTION_COPY: "انسخ جميع العناصر اللي فالسلة للحافظة.",
    DESCRIPTION_EXPORT: "خزن جميع العناصر اللي فالسلة فملف .json.",
    DESCRIPTION_IMPORT: "اكتب فوق جميع العناصر في سلة المهملات عبر ملف .json.",
    DESCRIPTION_CLEAR: "امسح جميع العناصر من سلة المهملات (ما يقدرش يرجع للورا).",
    ITEMS_EMPTY_SONGS_TITLE: 'ماشي البلايص اللي تتحط فـ "trashed"!',
    ITEMS_EMPTY_ARTISTS_TITLE: "ماشي فنانين تيّسين!",
    DESCRIPTION_SETTINGS_ENABLED: "مفتاح رئيسي للتفعيل أو التعطيل جميع وظائف سلة المهملات+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "عرض أيقونة السلة في شريط التشغيل بجانب التسجيل اللي كيتم تشغيلو باش يسهل الوصول ليها",
    DESCRIPTION_SETTINGS_AUTOPLAY: "ابدأ بتشغيل الموسيقى أوتوماتيكيًا وقت ما يفتح فيه سبوتيفاي ولا ما يحمل فيه الامتداد",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "ضيف أيقونات الزبالة بجانب كل أغنية في قائمة الانتظار الخاصة بيك باش تديرو تدبيرها بسهولة",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "زيد أيقونات الزبالة بجانب الأغاني في عروض الألبومات والقوائم علشان ترشيح بسرعة",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "استرجاع تلقائي من أعطال التشغيل في سبوتيفاي بمواصلة آخر لائحة تشغيل عندك",
    SETTINGS_SKIP_TRASHED_TRACKS: "تخطى المسارات التالفة",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "تخطي تلقائي للاغاني الممسوحة وباحث على الاغنية اللي بعدها اللي مسموح بيها فاش تدوز",
    SETTINGS_AUTO_CLEAN_QUEUE: "طابور التنظيف التلقائي",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "احذف تلقائيا الأغاني الممسوحة من قائمة التشغيل العشوائية الذكية ديالك",
    SETTINGS_REMOTE_CONTROL: "الريموت كونترول",
    SETTINGS_REMOTE_TOGGLE: "شغّل التبديل عن بعد",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "اضغط مرتين على تشغيل/إيقاف من الجوال باش تبدّل تخطي التّحكم عن بعد على/إيقاف. تخطي التّسجيل بيؤكد التّبديل.",
    SETTINGS_REMOTE_SKIPPING: "التنقل البعيد متوقف شغال",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "حالما كيتم تفعيله، كيستمر تخطي التّدوير حتى فحال التحكّم في Spotify من جهاز آخر (مثلاً، جوّال)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "تمكين التخطي عن بعد",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "تم تعطيل التخطي عن بعد",
    MESSAGE_SONG_ADDED_REMOTE: "تَدَمَّر البلاصة بِالرِّيموت",
    SETTINGS_TRASH_VIA_LIKE: "الزبالة عبر اللآيك",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "بلاصة تغنية من الموبايل للسلة. يمسح الإعجاب تلقائياً ويتخطى للشيكة الجاية.",
    SETTINGS_AI_DETECTION: "كشف الذكاء الاصطناعي",
    SETTINGS_AI_DETECTION_ENABLED: "كاشفي الأغاني بالذكاء الاصطناعي",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "كشف على الأغاني اللي نتولدو بالذكاء الاصطناعي باستعمال نموذج SONICS وعرض مؤشر احتمال. التحميل ~50 ميغابت في أول تفعيل.",
    AI_ASSETS_DOWNLOADING: "التحميل نموذج الذكاء الاصطناعي...",
    AI_ASSETS_READY: "النموذج ديال الذكاء الاصطناعي جاهز",
    AI_ASSETS_NOT_READY: "النموذج ديال الذكاء الاصطناعي ماشي متاح",
    SETTINGS_TRASH_AI_SONGS: "أغاني الذكاء الاصطناعي الزبالة",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "احذف تلقائيا الأغاني ليتكتشف بأنها نتاج توليد بالذكاء الاصطناعي (احتمال ≥ 80٪)",
    DESCRIPTION_CLEAR_AI_STORAGE: "امسح جميع نتائج التصنيف الاصطناعي المخزنة ({{count}} أغانٍ مخزنة).",
    ACTION_CLEAR_AI_STORAGE: "واضح",
    MESSAGE_AI_STORAGE_CLEARED: "نتايج الذكاء الاصطناعي اتمسحت",
    AI_TIER_LIKELY_HUMAN: "بشري على الأرجح",
    AI_TIER_PROBABLY_HUMAN: "بلاش نسان",
    AI_TIER_UNCERTAIN: "ما يقدرتش نتأكد",
    AI_TIER_PROBABLY_AI: "غالباً الذكاء الاصطناعي",
    AI_TIER_LIKELY_AI: "الذكاء الاصطناعي المحتمل",
    ACTION_REMOVE_TRASHED: "احذف الأغاني الممحوكة",
    CONFIRM_REMOVE_TRASHED: "تمسح {{count}} أغنية أو أكثر من هاذ اللائحة؟ هاذ الشي مايمكنش يرجع.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "تمّ حذف {{count}} أغنية(أغاني) من القائمة",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "ما تلقاش أي أغنيات مزروبة في هاذ اللائحة"
  };
});

// src/i18n/ar-SA.json
var require_ar_SA = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "سلة المهملات+",
    ACTION_THROW: "ضع في سلة المهملات",
    ACTION_UNTHROW: "أزل من سلة المهملات",
    ACTION_CLEAR: "واضح",
    ACTION_COPY: "نسخ",
    ACTION_EXPORT: "تصدير",
    ACTION_IMPORT: "استيراد",
    MESSAGE_COPIED: "تم النسخ إلى الحافظة",
    MESSAGE_CLEARED: "تم مسح سلة المهملات بنجاح!",
    MESSAGE_SONG_ADDED: "أُضيفت الأغنية إلى سلة المهملات",
    MESSAGE_SONG_REMOVED: "أُزيلت الأغنية من سلة المهملات",
    MESSAGE_ARTIST_ADDED: "تمت إضافة الفنان إلى سلة المهملات",
    MESSAGE_ARTIST_REMOVED: "تمت إزالة الفنان من سلة المهملات",
    BACKUP_SAVE_SUCCESS: "تم حفظ النسخة الاحتياطية بنجاح.",
    BACKUP_SAVE_FAILED: "فشل حفظ النسخة الاحتياطية، جرّب نسخ محتويات سلة المهملات إلى الحافظة وإنشاء نسخة احتياطية يدويًا.",
    BACKUP_RESTORE_SUCCESS: "تم استعادة النسخة الاحتياطية بنجاح.",
    BACKUP_FILE_READ_FAILED: "فشل في قراءة الملف، يرجى التأكد من أنه ملف JSON صالح.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "إعدادات سلة المهملات+",
    SETTINGS_OPTIONS: "خيارات",
    SETTINGS_FEATURES: "الميزات",
    SETTINGS_STORAGE: "التخزين",
    SETTINGS_ENABLED: "مُمَكَّن",
    SETTINGS_SHOW_WIDGET: "إظهار أيقونة الأداة",
    SETTINGS_AUTOPLAY: "تشغيل تلقائي عند البدء",
    SETTINGS_QUEUE_TRASHBIN: "تمكين سلة مهملات الطابور",
    SETTINGS_TRACKLIST_TRASHBIN: "تمكين سلة مهملات قائمة المسارات",
    SETTINGS_PLAYLIST_MONITOR: "مُراقبة قائمة التشغيل",
    ITEMS_TITLE: "عناصر سلة المهملات+",
    ITEMS_EMPTY_SONGS: "<strong>ما فيش أغانٍ في سلة المهملات!</strong><br/>الأغانٍ اللي تضيفها لسلة المهملات تظهر هنا.",
    ITEMS_EMPTY_ARTISTS: "<strong>لا يوجد فنانين في سلة المهملات!</strong><br/>ستظهر الفنانين الذين تضيفهم إلى سلة المهملات هنا.",
    ITEMS_TAB_SONGS: "أغاني",
    ITEMS_TAB_ARTISTS: "الفنانين",
    ITEMS_LOADED_COUNT: "تم تحميل {{loaded}} من أصل {{total}} {{type}}",
    ITEMS_SEARCH_PLACEHOLDER: "ابحث بالاسم، الفنان، أو URI...",
    DESCRIPTION_COPY: "انسخ جميع العناصر في سلة المهملات إلى الحافظة.",
    DESCRIPTION_EXPORT: "احفظ جميع العناصر في سلة المهملات في ملف .json.",
    DESCRIPTION_IMPORT: "استبدال جميع العناصر في سلة المهملات عبر ملف .json.",
    DESCRIPTION_CLEAR: "امسح جميع العناصر من سلة المهملات (لا يمكن التراجع عن هذا الإجراء).",
    ITEMS_EMPTY_SONGS_TITLE: "ما فيش أغانٍ ممسوحة!",
    ITEMS_EMPTY_ARTISTS_TITLE: "لا فنانين مهملين!",
    DESCRIPTION_SETTINGS_ENABLED: "مفتاح رئيسي لتفعيل أو تعطيل جميع وظائف Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "عرض أيقونة سلة المهملات في شريط التشغيل بجانب المسار الذي يتم تشغيله حاليًا للوصول السريع",
    DESCRIPTION_SETTINGS_AUTOPLAY: "ابدأ تشغيل الموسيقى تلقائيًا عند فتح Spotify أو تحميل الامتداد",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "أضف أيقونات سلة المهملات بجانب كل أغنية في قائمة الانتظار الخاصة بك لإدارتها بسهولة",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "أضف أيقونات سلة المهملات بجانب الأغاني في عروض الألبومات وقوائم التشغيل لتصفية سريعة",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "استعادة تلقائية من أعطال تشغيل Spotify باستئناف قائمة التشغيل الأخيرة الخاصة بك",
    SETTINGS_SKIP_TRASHED_TRACKS: "تخطي المسارات المحذوفة",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "تخطي الأغاني المحذوفة تلقائيًا والبحث عن المسار المسموح به التالي أثناء التشغيل",
    SETTINGS_AUTO_CLEAN_QUEUE: "طابور التنظيف التلقائي",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "أزل تلقائيًا الأغاني المحذوفة من قائمة التشغيل العشوائية الذكية الخاصة بك",
    SETTINGS_REMOTE_CONTROL: "جهاز التحكم عن بعد",
    SETTINGS_REMOTE_TOGGLE: "تمكين التبديل عن بعد",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "انقر مرتين على تشغيل/إيقاف من الهاتف لتغيير تخطي التحكم عن بعد تشغيل/إيقاف. يؤكد تخطي المسار تغيير الحالة.",
    SETTINGS_REMOTE_SKIPPING: "التخطي عن بعد مفعل",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "عند التمكين، يعمل تخطي المهملات حتى عند التحكم في Spotify من جهاز آخر (مثلاً الهاتف المحمول)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "تمكين التخطي عن بعد",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "تم تعطيل التخطي عن بعد",
    MESSAGE_SONG_ADDED_REMOTE: "تم حذف الأغنية عن بعد",
    SETTINGS_TRASH_VIA_LIKE: "نفايات عبر لايك",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "مثل أغنية من الهاتف إلى سلة المهملات. يتم إزالة الإعجاب تلقائيًا والانتقال تلقائيًا إلى المسار التالي.",
    SETTINGS_AI_DETECTION: "كشف الذكاء الاصطناعي",
    SETTINGS_AI_DETECTION_ENABLED: "كشف أغنية الذكاء الاصطناعي",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "اكتشف الأغاني المُنشأة بواسطة الذكاء الاصطناعي باستخدام نموذج SONICS واعرض مؤشر احتمالية. يتم تنزيل النموذج بحجم ~50 ميجابايت عند التمكين لأول مرة.",
    AI_ASSETS_DOWNLOADING: "جاري تنزيل نموذج الذكاء الاصطناعي...",
    AI_ASSETS_READY: "نموذج الذكاء الاصطناعي جاهز",
    AI_ASSETS_NOT_READY: "النموذج الاصطناعي غير متوفر",
    SETTINGS_TRASH_AI_SONGS: "أغاني الذكاء الاصطناعي الرديئة",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "حذف الأغاني المكتشفة تلقائيًا بأنها مُولَّدة بواسطة الذكاء الاصطناعي (باحتمالية ≥ 80٪)",
    DESCRIPTION_CLEAR_AI_STORAGE: "امسح جميع نتائج التصنيف الاصطناعي المخزنة ({{count}} أغنيات مخزنة).",
    ACTION_CLEAR_AI_STORAGE: "واضح",
    MESSAGE_AI_STORAGE_CLEARED: "تمت إزالة نتائج الذكاء الاصطناعي",
    AI_TIER_LIKELY_HUMAN: "من المرجح أن يكون بشريًا",
    AI_TIER_PROBABLY_HUMAN: "على الأرجح بشرية",
    AI_TIER_UNCERTAIN: "غير مؤكد",
    AI_TIER_PROBABLY_AI: "على الأرجح الذكاء الاصطناعي",
    AI_TIER_LIKELY_AI: "الذكاء الاصطناعي المحتمل",
    ACTION_REMOVE_TRASHED: "إزالة الأغاني المحذوفة",
    CONFIRM_REMOVE_TRASHED: "هل ترغب في إزالة {{count}} أغنية محذوفة من هذه القائمة؟ لا يمكن التراجع عن هذا الإجراء.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "تمت إزالة {{count}} أغنية محذوفة من قائمة التشغيل",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "ما لقينا أي أغاني محذوفة في هالقائمة التشغيل"
  };
});

// src/i18n/ar.json
var require_ar = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "سلة المهملات+",
    ACTION_THROW: "ضع في سلة المهملات",
    ACTION_UNTHROW: "إزالة من سلة المهملات",
    ACTION_CLEAR: "واضح",
    ACTION_COPY: "نسخ",
    ACTION_EXPORT: "تصدير",
    ACTION_IMPORT: "استيراد",
    MESSAGE_COPIED: "تم النسخ إلى الحافظة",
    MESSAGE_CLEARED: "تم مسح سلة المهملات بنجاح!",
    MESSAGE_SONG_ADDED: "تمت إضافة الأغنية إلى سلة المهملات",
    MESSAGE_SONG_REMOVED: "تمت إزالة الأغنية من سلة المهملات",
    MESSAGE_ARTIST_ADDED: "تمت إضافة الفنان إلى سلة المهملات",
    MESSAGE_ARTIST_REMOVED: "تمت إزالة الفنان من سلة المهملات",
    BACKUP_SAVE_SUCCESS: "تم حفظ النسخة الاحتياطية بنجاح.",
    BACKUP_SAVE_FAILED: "فشل حفظ النسخة الاحتياطية، حاول نسخ محتويات سلة المهملات إلى الحافظة وإنشاء نسخة احتياطية يدويًا.",
    BACKUP_RESTORE_SUCCESS: "تم استعادة النسخة الاحتياطية بنجاح.",
    BACKUP_FILE_READ_FAILED: "فشل في قراءة الملف، يرجى التأكد من أنه ملف JSON صالح.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "إعدادات سلة المهملات+",
    SETTINGS_OPTIONS: "خيارات",
    SETTINGS_FEATURES: "الميزات",
    SETTINGS_STORAGE: "التخزين",
    SETTINGS_ENABLED: "مُمَكَّن",
    SETTINGS_SHOW_WIDGET: "عرض أيقونة الأداة",
    SETTINGS_AUTOPLAY: "تشغيل تلقائي عند البدء",
    SETTINGS_QUEUE_TRASHBIN: "تمكين سلة مهملات الطابور",
    SETTINGS_TRACKLIST_TRASHBIN: "تمكين سلة مهملات قائمة المسارات",
    SETTINGS_PLAYLIST_MONITOR: "مُراقب القوائم التشغيلية",
    ITEMS_TITLE: "عناصر سلة المهملات+",
    ITEMS_EMPTY_SONGS: "<strong>لا توجد أغانٍ في سلة المهملات!</strong><br/>ستظهر الأغانـي التي تضيفها إلى سلة المهملات هنا.",
    ITEMS_EMPTY_ARTISTS: "<strong>لا فنانين في سلة المهملات!</strong><br/>الفنانون الذين تضيفهم إلى سلة المهملات سيظهرون هنا.",
    ITEMS_TAB_SONGS: "أغاني",
    ITEMS_TAB_ARTISTS: "الفنانون",
    ITEMS_LOADED_COUNT: "تم تحميل {{loaded}} من أصل {{total}} {{type}}",
    ITEMS_SEARCH_PLACEHOLDER: "البحث بالاسم أو الفنان أو URI...",
    DESCRIPTION_COPY: "نسخ جميع العناصر في سلة المهملات إلى الحافظة.",
    DESCRIPTION_EXPORT: "احفظ جميع العناصر في سلة المهملات في ملف .json.",
    DESCRIPTION_IMPORT: "استبدال جميع العناصر في سلة المهملات عبر ملف .json",
    DESCRIPTION_CLEAR: "مسح جميع العناصر من سلة المهملات (لا يمكن التراجع عن هذا الإجراء).",
    ITEMS_EMPTY_SONGS_TITLE: "لا توجد أغانٍ محذوفة!",
    ITEMS_EMPTY_ARTISTS_TITLE: "لا فنانين محطمين!",
    DESCRIPTION_SETTINGS_ENABLED: "مفتاح رئيسي لتفعيل أو تعطيل جميع وظائف سلة المهملات+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "عرض أيقونة سلة المهملات في شريط التشغيل بجانب المسار الذي يتم تشغيله حاليًا للوصول السريع",
    DESCRIPTION_SETTINGS_AUTOPLAY: "تشغيل الموسيقى تلقائيًا عند فتح Spotify أو تحميل الإضافة",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "أضف أيقونات سلة المهملات بجانب كل أغنية في قائمة الانتظار الخاصة بك لإدارتها بسهولة",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "إضافة أيقونات سلة المهملات بجانب الأغاني في عروض الألبومات وقوائم التشغيل لتصفية سريعة",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "استعادة التشغيل تلقائيًا بعد حدوث أخطار في التشغيل على Spotify باستئناف قائمة التشغيل الأخيرة الخاصة بك",
    SETTINGS_SKIP_TRASHED_TRACKS: "تخطي المسارات المحذوفة",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "تخطي الأغاني المحذوفة تلقائيًا والبحث عن المسار المسموح به التالي أثناء التشغيل",
    SETTINGS_AUTO_CLEAN_QUEUE: "قائمة التنظيف التلقائي",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "قم تلقائيًا بإزالة الأغاني المحذوفة من قائمة التشغيل العشوائية الذكية الخاصة بك",
    SETTINGS_REMOTE_CONTROL: "جهاز التحكم عن بعد",
    SETTINGS_REMOTE_TOGGLE: "تمكين التبديل عن بُعد",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "انقر مرتين على تشغيل/إيقاف من الهاتف المحمول لتفعيل أو إيقاف تخطي التحكم عن بُعد. يؤكد تخطي المسار التبديل.",
    SETTINGS_REMOTE_SKIPPING: "التخطي عن بُعد نشط",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "عند التمكين، يعمل تخطي سلة المهملات حتى عند التحكم في Spotify من جهاز آخر (مثل الهاتف المحمول)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "تم تمكين التخطي عن بُعد",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "تم تعطيل التخطي عن بُعد",
    MESSAGE_SONG_ADDED_REMOTE: "تم حذف الأغنية عن بُعد",
    SETTINGS_TRASH_VIA_LIKE: "نفايات عبر الإعجاب",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "مثل أغنية من الهاتف إلى سلة المهملات. يتم إلغاء الإعجاب تلقائيًا والانتقال تلقائيًا إلى المسار التالي.",
    SETTINGS_AI_DETECTION: "كشف الذكاء الاصطناعي",
    SETTINGS_AI_DETECTION_ENABLED: "كشف أغنية الذكاء الاصطناعي",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "اكتشف الأغاني التي تم إنشاؤها بواسطة الذكاء الاصطناعي باستخدام نموذج SONICS واعرض مؤشر احتمالية. يتم تنزيل نموذج بحجم ~50 ميجابايت عند التمكين لأول مرة.",
    AI_ASSETS_DOWNLOADING: "جاري تنزيل نموذج الذكاء الاصطناعي...",
    AI_ASSETS_READY: "نموذج الذكاء الاصطناعي جاهز",
    AI_ASSETS_NOT_READY: "نموذج الذكاء الاصطناعي غير متوفر",
    SETTINGS_TRASH_AI_SONGS: "أغاني الذكاء الاصطناعي غير المفيدة",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "حذف الأغاني التي يتم اكتشافها تلقائيًا بأنها مُولَّدة بواسطة الذكاء الاصطناعي (باحتمالية ≥ 80٪)",
    DESCRIPTION_CLEAR_AI_STORAGE: "مسح جميع نتائج التصنيف الاصطناعي المخزنة ({{count}} أغنية مخزنة).",
    ACTION_CLEAR_AI_STORAGE: "واضح",
    MESSAGE_AI_STORAGE_CLEARED: "تمت إزالة نتائج الذكاء الاصطناعي",
    AI_TIER_LIKELY_HUMAN: "من المرجح أن يكون بشريًا",
    AI_TIER_PROBABLY_HUMAN: "ربما بشري",
    AI_TIER_UNCERTAIN: "غير مؤكد",
    AI_TIER_PROBABLY_AI: "على الأرجح الذكاء الاصطناعي",
    AI_TIER_LIKELY_AI: "الذكاء الاصطناعي المحتمل",
    ACTION_REMOVE_TRASHED: "إزالة الأغاني المحذوفة",
    CONFIRM_REMOVE_TRASHED: "هل تريد إزالة {{count}} أغنية محذوفة من هذه القائمة؟ لا يمكن التراجع عن هذا الإجراء.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "تمت إزالة {{count}} أغنية محذوفة من قائمة التشغيل",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "لم يتم العثور على أغانٍ محذوفة في هذه القائمة"
  };
});

// src/i18n/az.json
var require_az = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Tullantı qutusu+",
    ACTION_THROW: "Səbətkə yerləşdirin",
    ACTION_UNTHROW: "Səbətdən silin",
    ACTION_CLEAR: "Açıq",
    ACTION_COPY: "Kopyalamaq",
    ACTION_EXPORT: "İxracat",
    ACTION_IMPORT: "İdxal",
    MESSAGE_COPIED: "Mübadilə buferinə köçürülüb",
    MESSAGE_CLEARED: "Zibil qabı uğurla təmizləndi!",
    MESSAGE_SONG_ADDED: "Mahnı səbətə əlavə edildi",
    MESSAGE_SONG_REMOVED: "Mahnı səbətdən silindi",
    MESSAGE_ARTIST_ADDED: "Sənətçi tullantı qutusuna əlavə edildi",
    MESSAGE_ARTIST_REMOVED: "Sənətkar tullantı qutusundan silindi",
    BACKUP_SAVE_SUCCESS: "Ehtiyyat nüsxə uğurla saxlanıldı.",
    BACKUP_SAVE_FAILED: "Yedəkləmə yaddaşa yazılmağından imtina etdi, səbətdəki məlumatları mübadilə buferinə kopyalamağa və əl ilə yedəkləmə yaratmağa cəhd edin.",
    BACKUP_RESTORE_SUCCESS: "Ehtiyat nüsxə uğurla bərpa edildi.",
    BACKUP_FILE_READ_FAILED: "Fayl oxuna bilmədi, lütfən, düzgün JSON fayl olduğundan əmin olun.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Zibilqutusu+ Parametrləri",
    SETTINGS_OPTIONS: "Seçimlər",
    SETTINGS_FEATURES: "Xüsusiyyətlər",
    SETTINGS_STORAGE: "Yaddaş",
    SETTINGS_ENABLED: "Aktivləşdirildi",
    SETTINGS_SHOW_WIDGET: "Vidjet İkonunu Göstər",
    SETTINGS_AUTOPLAY: "Başlanğıcda avtomatik oynatma",
    SETTINGS_QUEUE_TRASHBIN: "Növbəni Açın Zibilqutusu",
    SETTINGS_TRACKLIST_TRASHBIN: "Treklərin siyahısının səbətini aktivləşdirin",
    SETTINGS_PLAYLIST_MONITOR: "Playlist Monitoru",
    ITEMS_TITLE: "Zibillik + Məhsullar",
    ITEMS_EMPTY_SONGS: "<strong>Çöpə atılmış mahnılar yoxdur!</strong><br/>Siz tullantı qutusuna əlavə etdiyiniz mahnılar burada görünəcək.",
    ITEMS_EMPTY_ARTISTS: "<strong>Çöpə atılmış ifaçılar yoxdur!</strong><br/>Siz çöp qutusuna əlavə etdiyiniz ifaçılar burada görünəcək.",
    ITEMS_TAB_SONGS: "Mahnılar",
    ITEMS_TAB_ARTISTS: "Sənətçilər",
    ITEMS_LOADED_COUNT: "Yüklənmiş {{loaded}}/{{total}} {{type}}",
    ITEMS_SEARCH_PLACEHOLDER: "Ada, ifaya və ya URI-ə görə axtarın...",
    DESCRIPTION_COPY: "Səbətdəki bütün elementləri mübadilə buferinə köçürün.",
    DESCRIPTION_EXPORT: "Səbətdəki bütün elementləri .json faylına yadda saxlayın.",
    DESCRIPTION_IMPORT: "Zibil qutusundakı bütün elementləri .json faylı ilə əvəz edin.",
    DESCRIPTION_CLEAR: "Səbətdəki bütün elementləri silin (geri qaytarıla bilməz).",
    ITEMS_EMPTY_SONGS_TITLE: "Heç bir səslənmiş mahnı yoxdur!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Heç bir sənətçi təhqir olunmamalıdır!",
    DESCRIPTION_SETTINGS_ENABLED: "Bütün Zibilqutusu+ funksiyalarını aktivləşdirmək və ya deaktivləşdirmək üçün əsas keçid",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Hazırda səsləndirilən mahnının yanında tez giriş üçün səs çubuğunda səpələnmiş ikonunu göstərin",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Spotify açılanda və ya uzantı yükləndikdə avtomatik olaraq musiqi oxumağa başlayın",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Növbəti növbənizdəki hər mahnının yanına asan idarəetmə üçün tullantı ikonları əlavə edin",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Albom və çalma siyahısı görünüşlərində tez filtrasiya üçün mahnıların yanına tullantı ikonları əlavə edin",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Son oynadığınız playlist-i davam etdirərək Spotify oynatma xətalarından avtomatik şəkildə bərpa edin",
    SETTINGS_SKIP_TRASHED_TRACKS: "Silinmiş Trekleri Keçin",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Səsləndirmə zamanı avtomatik olaraq səbətdə olan mahnıları keçin və növbəti icazə verilən mahnını tapın",
    SETTINGS_AUTO_CLEAN_QUEUE: "Avtomatik Təmizləmə Növbəsi",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Çöpə atılan mahnıları Smart Shuffle növbənizdən avtomatik olaraq çıxarın",
    SETTINGS_REMOTE_CONTROL: "Uzaqdan idarəetmə",
    SETTINGS_REMOTE_TOGGLE: "Uzaqdan Keçid Rejimini Aktivləşdirin",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Obyektin keçidini aktivləşdirmək/deaktivləşdirmək üçün mobil cihazda iki dəfə oynat/davam etdirmə düyməsinə toxunun. Mahnı keçidini təsdiqləmək üçün keçid.",
    SETTINGS_REMOTE_SKIPPING: "Uzaqdan Keçid Aktivdir",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Aktivləşdirildikdə, Spotify-ı digər cihazdan (mobil telefon kimi) idarə edərkən belə səbətə atmaq funksiyası işləyir",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Uzaqdan keçid etmə aktivdir",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Uzaqdan keçid etmək deaktiv edildi",
    MESSAGE_SONG_ADDED_REMOTE: "Mahnı uzaqdan pozuldu",
    SETTINGS_TRASH_VIA_LIKE: "Bəyənməklə tullantılar",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Mobil dən bir mahnı kimi onu ləğv edir. Avtomatik olaraq bəyənməni dayandırır və növbəti mahnıya keçir.",
    SETTINGS_AI_DETECTION: "İnsanı tələffüz etməyin aşkarlanması",
    SETTINGS_AI_DETECTION_ENABLED: "AI Mahnı Müəyyənləşdirməsi",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "SONICS modelindən istifadə edərək süni intellekt tərəfindən yaradılan mahnıları aşkar edin və ehtimal göstəricisini göstərin. Birinci dəfə aktiv edildikdə təxminən 50 MB model yükləyir.",
    AI_ASSETS_DOWNLOADING: "İS modeli yüklənir...",
    AI_ASSETS_READY: "AI modeli hazırdır",
    AI_ASSETS_NOT_READY: "AI modeli mövcud deyil",
    SETTINGS_TRASH_AI_SONGS: "Zibil AI Mahnıları",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "AI tərəfindən yaradılmış kimi aşkar edilən mahnıları avtomatik olaraq səbətə atın (ehtimal ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Bütün saxlanılan süni intellekt təsnifatı nəticələrini silin ({{count}} mahnı saxlanılıb).",
    ACTION_CLEAR_AI_STORAGE: "Açıq",
    MESSAGE_AI_STORAGE_CLEARED: "İnsanlar nəticələrini təmizlədi",
    AI_TIER_LIKELY_HUMAN: "Ehtimal ki, insan",
    AI_TIER_PROBABLY_HUMAN: "Ehtimal ki, İnsan",
    AI_TIER_UNCERTAIN: "Qeyri-müəyyən",
    AI_TIER_PROBABLY_AI: "Ehtimal ki, süni intellekt",
    AI_TIER_LIKELY_AI: "Ehtimal ki, süni intellekt",
    ACTION_REMOVE_TRASHED: "Çöpə atılmış mahnıları silin",
    CONFIRM_REMOVE_TRASHED: "Bu siyahıdan {{count}} səslənmiş mahnını silmək istəyirsiniz? Bu əməliyyatı geri qaytarmaq mümkün deyil.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Oxuma siyahısından {{count}} sənəd sənədləri silindi",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Bu çalğı siyahısında silinmiş mahnılar tapılmadı"
  };
});

// src/i18n/bg.json
var require_bg = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Кошче+",
    ACTION_THROW: "Постави в кошчето за боклук",
    ACTION_UNTHROW: "Премахни от кошчето",
    ACTION_CLEAR: "Ясно",
    ACTION_COPY: "Копиране",
    ACTION_EXPORT: "Експорт",
    ACTION_IMPORT: "Внос",
    MESSAGE_COPIED: "Копирано в клипборда",
    MESSAGE_CLEARED: "Кошчето беше изпразнено успешно!",
    MESSAGE_SONG_ADDED: "Песента е добавена в кошчето",
    MESSAGE_SONG_REMOVED: "Песента е премахната от кошчето",
    MESSAGE_ARTIST_ADDED: "Художникът е добавен в кошчето за боклук",
    MESSAGE_ARTIST_REMOVED: "Художникът е премахнат от кошчето за боклук",
    BACKUP_SAVE_SUCCESS: "Резервното копие е запазено успешно.",
    BACKUP_SAVE_FAILED: "Неуспешно запазване на резервно копие, опитайте да копирате съдържанието на кошчето в клипборда и създайте резервно копие ръчно.",
    BACKUP_RESTORE_SUCCESS: "Резервното копие беше възстановено успешно.",
    BACKUP_FILE_READ_FAILED: "Неуспешно прочитане на файла, моля, уверете се, че е валиден JSON файл.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Настройки на кошчето+",
    SETTINGS_OPTIONS: "Опции",
    SETTINGS_FEATURES: "Характеристики",
    SETTINGS_STORAGE: "Съхранение",
    SETTINGS_ENABLED: "Активирано",
    SETTINGS_SHOW_WIDGET: "Показване на иконата за джаджа",
    SETTINGS_AUTOPLAY: "Автоматично възпроизвеждане при стартиране",
    SETTINGS_QUEUE_TRASHBIN: "Активиране на кошче за опашка",
    SETTINGS_TRACKLIST_TRASHBIN: "Активиране на кошчето за списъка с песни",
    SETTINGS_PLAYLIST_MONITOR: "Плейлист Монитор",
    ITEMS_TITLE: "Елементи в кошчето+",
    ITEMS_EMPTY_SONGS: "<strong>Няма изтрити песни!</strong><br/>Песните, които добавяте в кошчето, ще се появят тук.",
    ITEMS_EMPTY_ARTISTS: "<strong>Без изтрити артисти!</strong><br/>Артистите, които добавите в кошчето за боклук, ще се появят тук.",
    ITEMS_TAB_SONGS: "Песни",
    ITEMS_TAB_ARTISTS: "Художници",
    ITEMS_LOADED_COUNT: "{{loaded}} от {{total}} {{type}} заредени",
    ITEMS_SEARCH_PLACEHOLDER: "Търсене по име, изпълнител или URI...",
    DESCRIPTION_COPY: "Копиране на всички елементи в кошчето в клипборда.",
    DESCRIPTION_EXPORT: "Запазване на всички елементи в кошчето в .json файл.",
    DESCRIPTION_IMPORT: "Презаписване на всички елементи в кошчето чрез .json файл.",
    DESCRIPTION_CLEAR: "Изчистване на всички елементи от кошчето (не може да бъде възстановено).",
    ITEMS_EMPTY_SONGS_TITLE: "Няма изтрити песни!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Никакви отхвърлени артисти!",
    DESCRIPTION_SETTINGS_ENABLED: "Главен превключвател за активиране или деактивиране на цялата функционалност на кошчето+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Показване на икона на кошче в лентата за възпроизвеждане до текущо възпроизвеждания трек за бърз достъп",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Автоматично стартиране на музиката при отваряне на Spotify или зареждане на разширението",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Добавете икони за кошче до всяка песен в предстоящата си опашка за лесно управление",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Добавяне на икони за кошче до песните в албумите и изгледите на плейлистите за бързо филтриране",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Автоматично възстановяване от проблеми с възпроизвеждането в Spotify чрез продължаване на последния ви плейлист",
    SETTINGS_SKIP_TRASHED_TRACKS: "Пропусни изтритите песни",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Автоматично пропускане на изтритите песни и намиране на следващия разрешен трек по време на възпроизвеждане",
    SETTINGS_AUTO_CLEAN_QUEUE: "Автоматично почистване на опашката",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Автоматично премахване на изтритите песни от опашката ви за смарт разбъркване",
    SETTINGS_REMOTE_CONTROL: "Дистанционно управление",
    SETTINGS_REMOTE_TOGGLE: "Активиране на дистанционно превключване",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Докоснете два пъти бутона за пускане/пауза от мобилното, за да включите/изключите пропускането на трекове от дистанционното. Пропускането на трек потвърждава превключването.",
    SETTINGS_REMOTE_SKIPPING: "Дистанционно пропускане активно",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Когато е активирана, функцията за пропускане на кошчето работи дори когато управлявате Spotify от друго устройство (например мобилен телефон)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Активирано е дистанционно пропускане",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Дистанционното пропускане е деактивирано",
    MESSAGE_SONG_ADDED_REMOTE: "Песента е унищожена чрез дистанционно",
    SETTINGS_TRASH_VIA_LIKE: "Смет за лайк",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Като песен от мобилно в кошчето. Автоматично премахва харесването и превърта към следващата песен.",
    SETTINGS_AI_DETECTION: "Засичане на изкуствен интелект",
    SETTINGS_AI_DETECTION_ENABLED: "Разпознаване на песни с изкуствен интелект",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Откриване на генерирани от изкуствен интелект песни с помощта на модела SONICS и показване на индикатор за вероятността. При първо включване се изтегля модел от около 50 МВ.",
    AI_ASSETS_DOWNLOADING: "Изтегляне на AI модел...",
    AI_ASSETS_READY: "AI моделът е готов",
    AI_ASSETS_NOT_READY: "AI моделът не е наличен",
    SETTINGS_TRASH_AI_SONGS: "Песни за боклук AI",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Автоматично изхвърляне на песни, идентифицирани като генерирани от изкуствен интелект (вероятност ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Изчистване на всички записани резултати от класификация с изкуствен интелект ({{count}} записани песни).",
    ACTION_CLEAR_AI_STORAGE: "Ясно",
    MESSAGE_AI_STORAGE_CLEARED: "Резултатите от ИИ са изчистени",
    AI_TIER_LIKELY_HUMAN: "Вероятно човешки",
    AI_TIER_PROBABLY_HUMAN: "Вероятно човешко",
    AI_TIER_UNCERTAIN: "Неизвестно",
    AI_TIER_PROBABLY_AI: "Вероятно изкуствен интелект",
    AI_TIER_LIKELY_AI: "Вероятен ИИ",
    ACTION_REMOVE_TRASHED: "Премахване на изтритите песни",
    CONFIRM_REMOVE_TRASHED: "Да се премахнат ли {{count}} изтрити песни от този плейлист? Това не може да бъде отменено.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Премахнати {{count}} изтрити песни от списъка с песни",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Не са намерени изтрити песни в този плейлист"
  };
});

// src/i18n/bho.json
var require_bho = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "कूड़ादान+",
    ACTION_THROW: "रद्दी के डिब्बा में रखें",
    ACTION_UNTHROW: "ट्रैशबिन लेले हटा दें",
    ACTION_CLEAR: "साफ़",
    ACTION_COPY: "कॉपी",
    ACTION_EXPORT: "निर्यात",
    ACTION_IMPORT: "आयात",
    MESSAGE_COPIED: "क्लिपबोर्ड पर कॉपी कइल गेल",
    MESSAGE_CLEARED: "ट्रैशबिन सफलतापूर्वक साफ कएल गेल!",
    MESSAGE_SONG_ADDED: "गाना ट्रैशबिन में जोड़ल गेलय",
    MESSAGE_SONG_REMOVED: "गाना कें रद्दी टोकरी लेल हटा देल गेलय",
    MESSAGE_ARTIST_ADDED: "कलाकार कें रद्दी डिब्बा में जोड़ल गेल",
    MESSAGE_ARTIST_REMOVED: "कलाकार कें ट्रैशबिन सँ हटा देल गेलय",
    BACKUP_SAVE_SUCCESS: "बैकअप सफलतापूर्वक सुरक्षित कएल गेल।",
    BACKUP_SAVE_FAILED: "बैकअप बचाए में असफल, ट्रैशबिन कें सामग्री कें क्लिपबोर्ड पर कॉपी करे आऊर मैन्युअल रूप सँ एगो बैकअप बनाए कें कोशिश करूं।",
    BACKUP_RESTORE_SUCCESS: "बैकअप सफलतापूर्वक बहाल कएल गेल।",
    BACKUP_FILE_READ_FAILED: "फाइल पढ़े में असफल, कृपया सुनिश्चित करं कि इ एगो वैध JSON फाइल हई।",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "ट्रैशबिन+ सेटिंग्स",
    SETTINGS_OPTIONS: "विकल्प",
    SETTINGS_FEATURES: "विशेषताएं",
    SETTINGS_STORAGE: "स्टोरेज",
    SETTINGS_ENABLED: "सक्षम",
    SETTINGS_SHOW_WIDGET: "विजेट आइकन देखाएं",
    SETTINGS_AUTOPLAY: "शुरू में ऑटोप्ले",
    SETTINGS_QUEUE_TRASHBIN: "कतार ट्रेशबिन सक्षम करूं",
    SETTINGS_TRACKLIST_TRASHBIN: "ट्रैकलिस्ट ट्रैशबिन सक्षम करूं",
    SETTINGS_PLAYLIST_MONITOR: "प्लेलिस्ट मॉनिटर",
    ITEMS_TITLE: "कचरा बाल्टी + आइटम",
    ITEMS_EMPTY_SONGS: "<strong>कोनो गाना कें रद्दी में ना डालीं!</strong><br/>गाना जे रद्दी में डालल जाईसि इ लेल देखाई देतय।",
    ITEMS_EMPTY_ARTISTS: "<strong>कोनो आर्टिस्ट कें फेंकल नीं!</strong><br/>कलाकार जेकरा अहां रद्दी डिब्बा में जोड़ैत हो इ लेल देखाई देत हई।",
    ITEMS_TAB_SONGS: "गाना",
    ITEMS_TAB_ARTISTS: "कलाकार",
    ITEMS_LOADED_COUNT: "{{total}} में से {{loaded}} {{type}} लोड कएल गेल",
    ITEMS_SEARCH_PLACEHOLDER: "नाम, कलाकार, या URI ल लेल खोज करू...",
    DESCRIPTION_COPY: "ट्रैशबिन में सभी आइटम कें क्लिपबोर्ड पर कॉपी करें।",
    DESCRIPTION_EXPORT: "ट्रैशबिन में सभी आइटम कें .json फाइल में सहेजल जाय।",
    DESCRIPTION_IMPORT: "ट्रैशबिन कें सभी आइटम कें .json फाइल कें माध्यम से ओवरराइट करंवाएं।",
    DESCRIPTION_CLEAR: "कचरा बाल्टी से सभ सामान हटा दें (पलट नहीं सकै छलई)।",
    ITEMS_EMPTY_SONGS_TITLE: "कोनो फेंकल गेल गाना नईं!",
    ITEMS_EMPTY_ARTISTS_TITLE: "कोनो फेकल गेल कलाकार नइं!",
    DESCRIPTION_SETTINGS_ENABLED: "सभ ट्रैशबिन+ कार्यक्षमता कें सक्षम या अक्षम करय कें मास्टर टॉगल",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "चलते ट्रैक कें बगल में प्लेबैक बार में त्वरित पहुंच कें लेल एक ट्रैश आइकन देखावल जाए",
    DESCRIPTION_SETTINGS_AUTOPLAY: "जब स्पॉटिफाई खुले या एक्सटेंशन लोड होए तब संगीत चलाबाक लगावत शुरू करीं",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "अपन आने वाला कतार में हर गीत कें बगल में कचरा आइकन जोड़ें आसान प्रबंधन कें लेल",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "एल्बम आ चलचित्र दृश्य में गाना कें बगल में कचरा आइकन जोड़ें ताकि त्वरित फ़िल्टरिंग हो सके",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "अपन पिछला प्लेलिस्ट कें पुनः शुरू करे कें द्वारा Spotify प्लेबैक गड़बड़ी सें स्वचालित रूप सँ ठीक करूं",
    SETTINGS_SKIP_TRASHED_TRACKS: "ट्रैश कएल गेल ट्रैक्स छोड़ें",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "स्वचालित रूप से खराब गानान कें छोड़ दें आऊर प्लेबैक के दौरान अगला अनुमत ट्रैक खोजें",
    SETTINGS_AUTO_CLEAN_QUEUE: "ऑटो क्लीन कतार",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "अपन Smart Shuffle कतार से अपमानजनक गीत कें स्वचालित रूप सँ हटा दें",
    SETTINGS_REMOTE_CONTROL: "रिमोट कंट्रोल",
    SETTINGS_REMOTE_TOGGLE: "रिमोट टॉगल सक्षम करंय",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "मोबाइल से रिमोट स्किपिंग चालू/बंद करे कें लेल डबल-टैप प्ले/पॉज करीं। एगो ट्रैक स्किप टॉगल कें पुष्टि करत हई।",
    SETTINGS_REMOTE_SKIPPING: "दूरस्थ छोड़नार सक्रिय",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "जब सक्षम कएल जाईत छल, तब अन्य डिवाइस (उदाहरण के तौर पर, मोबाइल) से स्पॉटिफाई कें नियंत्रित करे कें बेला में भी ट्रैश-छोड़े काम करत रहईत छल",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "दूरस्थ छलांग लगाएल गेलो हई",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "दूरस्थ छलांग अक्षम कइल गेलय हई",
    MESSAGE_SONG_ADDED_REMOTE: "गाना रिमोट कें द्वारा नष्ट कएल गेलय",
    SETTINGS_TRASH_VIA_LIKE: "लाइक कें माध्यम से कचरा",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "मोबाइल से ट्रैश कें लेल गाना कें तरह लाइक करू। स्वचालित रूप सँ अनलाइक करू आ अगला ट्रैक पर छोड़ देवू।",
    SETTINGS_AI_DETECTION: "एआई पता लगाएव",
    SETTINGS_AI_DETECTION_ENABLED: "एआई गीत पता लगाएमु",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "SONICS मॉडल कें उपयोग करि AI-जनित गानाक पहचान बरयाब आऊ एगो संभावना संकेतक देखाबयाब। पहिला सक्षम करे पर लगभग 50MB मॉडल डाउनलोड होइत बाय।",
    AI_ASSETS_DOWNLOADING: "एआई मॉडल डाउनलोड हो रहल छल...",
    AI_ASSETS_READY: "AI मॉडल तैयार",
    AI_ASSETS_NOT_READY: "AI मॉडल उपलब्ध नई हई",
    SETTINGS_TRASH_AI_SONGS: "कचरा एआई गाना",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "स्वचालित रूप से एआई द्वारा उत्पादित (संभावना ≥ 80%) के रूप में पता लगाल गेल गानामन कें ट्रैश करूं",
    DESCRIPTION_CLEAR_AI_STORAGE: "सभ भंडारित एआई वर्गीकरण परिणाम हटा दें ({{count}} गाना भंडारित कएल गेलय हई)।",
    ACTION_CLEAR_AI_STORAGE: "साफ़",
    MESSAGE_AI_STORAGE_CLEARED: "AI परिणाम साफ कएल गेल छलय",
    AI_TIER_LIKELY_HUMAN: "संभावित मानव",
    AI_TIER_PROBABLY_HUMAN: "संभवतः मानव",
    AI_TIER_UNCERTAIN: "अनिश्चित",
    AI_TIER_PROBABLY_AI: "शायद एआई",
    AI_TIER_LIKELY_AI: "संभावित एआई",
    ACTION_REMOVE_TRASHED: "हटाएं फेंकल गेल गाना",
    CONFIRM_REMOVE_TRASHED: "केया आप इ प्लेलिस्ट से {{count}} मिटाएल गेल गाना कें हटा देबै चाहत हो? इ में वापसी नइं हो सकैत हई।",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "प्लेलिस्ट सँ {{count}} गाना हटा देल गेल छलय",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "इ प्लेलिस्ट में कोनो गाना नीकालल नीं हईय।"
  };
});

// src/i18n/bn.json
var require_bn = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "ট্র্যাশবিন+",
    ACTION_THROW: "আবর্জনা বাক্সে রাখুন",
    ACTION_UNTHROW: "ট্রাশবিন থেকে সরান",
    ACTION_CLEAR: "স্পষ্ট",
    ACTION_COPY: "কপি",
    ACTION_EXPORT: "রপ্তানি",
    ACTION_IMPORT: "আমদানি করুন",
    MESSAGE_COPIED: "ক্লিপবোর্ডে কপি করা হয়েছে",
    MESSAGE_CLEARED: "ট্র্যাশবিন সফলভাবে খালি করা হয়েছে!",
    MESSAGE_SONG_ADDED: "গানটি ট্র্যাশবিনে যোগ করা হয়েছে",
    MESSAGE_SONG_REMOVED: "আবর্জনার ঝুড়ি থেকে গানটি সরানো হয়েছে",
    MESSAGE_ARTIST_ADDED: "শিল্পীকে আবর্জনা বাক্সে যোগ করা হয়েছে",
    MESSAGE_ARTIST_REMOVED: "শিল্পীকে আবর্জনা বাক্স থেকে সরানো হয়েছে",
    BACKUP_SAVE_SUCCESS: "ব্যাকআপ সফলভাবে সংরক্ষিত হয়েছে।",
    BACKUP_SAVE_FAILED: "ব্যাকআপ সংরক্ষণ করতে ব্যর্থ হয়েছে, ট্র্যাশবিনের বিষয়বস্তু ক্লিপবোর্ডে কপি করে ম্যানুয়ালি একটি ব্যাকআপ তৈরি করার চেষ্টা করুন।",
    BACKUP_RESTORE_SUCCESS: "ব্যাকআপ সফলভাবে পুনরুদ্ধার করা হয়েছে।",
    BACKUP_FILE_READ_FAILED: "ফাইলটি পড়তে ব্যর্থ হয়েছে, দয়া করে নিশ্চিত করুন যে এটি একটি বৈধ JSON ফাইল।",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "ট্র্যাশবিন+ সেটিংস",
    SETTINGS_OPTIONS: "বিকল্পগুলি",
    SETTINGS_FEATURES: "বৈশিষ্ট্যগুলি",
    SETTINGS_STORAGE: "স্টোরেজ",
    SETTINGS_ENABLED: "সক্ষম করা হয়েছে",
    SETTINGS_SHOW_WIDGET: "উইজেট আইকন দেখান",
    SETTINGS_AUTOPLAY: "শুরুতে অটোপ্লে চালু করুন",
    SETTINGS_QUEUE_TRASHBIN: "কিউ ট্র্যাশবিন সক্ষম করুন",
    SETTINGS_TRACKLIST_TRASHBIN: "ট্র‍্যাকলিস্ট ট্র‍্যাশবিন সক্ষম করুন",
    SETTINGS_PLAYLIST_MONITOR: "প্লেলিস্ট মনিটর",
    ITEMS_TITLE: "ট্র্যাশবিন+ আইটেমগুলি",
    ITEMS_EMPTY_SONGS: "<strong>কোন ফেলে দেওয়া গান নেই!</strong><br/>যে সমস্ত গান আপনি আবর্জনা বাক্সে যোগ করবেন সেগুলি এখানে দেখাবে।",
    ITEMS_EMPTY_ARTISTS: "<strong>কোন আর্টিস্ট নেই যাদের ফেলে দেওয়া হয়েছে!</strong><br/>যেসব আর্টিস্টদের আপনি আবর্জনা বাক্সে যোগ করবেন তারা এখানে দেখা যাবে।",
    ITEMS_TAB_SONGS: "গানগুলি",
    ITEMS_TAB_ARTISTS: "শিল্পীরা",
    ITEMS_LOADED_COUNT: "{{total}} এর {{loaded}} {{type}} লোড হয়েছে",
    ITEMS_SEARCH_PLACEHOLDER: "নাম, শিল্পী বা URI দ্বারা অনুসন্ধান করুন...",
    DESCRIPTION_COPY: "ট্র্যাশবিনের সমস্ত আইটেম ক্লিপবোর্ডে কপি করুন।",
    DESCRIPTION_EXPORT: "ট্র্যাশবিনে সমস্ত আইটেমগুলি .json ফাইলে সংরক্ষণ করুন।",
    DESCRIPTION_IMPORT: "ট্র্যাশবিনের সমস্ত আইটেম .json ফাইলের মাধ্যমে ওভাররাইট করুন।",
    DESCRIPTION_CLEAR: "ট্র্যাশবিন থেকে সমস্ত আইটেম মুছে ফেলুন (পূর্বাবস্থায় ফিরে যাওয়া যাবে না)।",
    ITEMS_EMPTY_SONGS_TITLE: "কোন ফেলে দেওয়া গান নেই!",
    ITEMS_EMPTY_ARTISTS_TITLE: "কোনো নিকৃষ্ট শিল্পী নয়!",
    DESCRIPTION_SETTINGS_ENABLED: "সমস্ত ট্র্যাশবিন+ কার্যকারিতা চালু বা বন্ধ করার জন্য মাস্টার টগল",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "বর্তমানে চলমান ট্র‍্যাকের পাশে প্লেব্যাক বারে একটি ট্র্যাশ আইকন প্রদর্শন করুন দ্রুত অ্যাক্সেসের জন্য",
    DESCRIPTION_SETTINGS_AUTOPLAY: "স্পটিফাই খোলার সময় বা এক্সটেনশন লোড হওয়ার সময় স্বয়ংক্রিয়ভাবে সংগীত চালু করুন",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "আপনার আসন্ন কিউতে প্রতিটি গানের পাশে ট্র্যাশ আইকন যোগ করুন সহজ ব্যবস্থাপনার জন্য",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "অ্যালবাম এবং প্লেলিস্ট ভিউতে দ্রুত ফিল্টারিংয়ের জন্য গানগুলির পাশে ট্র্যাশ আইকন যোগ করুন",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "স্পটিফাই প্লেব্যাকের ত্রুটি থেকে স্বয়ংক্রিয়ভাবে পুনরুদ্ধার করুন আপনার শেষ প্লেলিস্ট চালু করে",
    SETTINGS_SKIP_TRASHED_TRACKS: "মুছে ফেলা ট্র‍্যাকগুলি বাদ দিন",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "স্বয়ংক্রিয়ভাবে মুছে ফেলা গানগুলি এড়িয়ে যান এবং চলমান অবস্থায় পরবর্তী অনুমোদিত ট্র‍্যাকটি খুঁজে নিন",
    SETTINGS_AUTO_CLEAN_QUEUE: "অটো ক্লিন কিউ",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "আপনার স্মার্ট শাফল সারিতে থাকা আবর্জনা গানগুলি স্বয়ংক্রিয়ভাবে সরিয়ে ফেলুন",
    SETTINGS_REMOTE_CONTROL: "দূরবর্তী নিয়ন্ত্রণ",
    SETTINGS_REMOTE_TOGGLE: "দূরবর্তী টগল সক্ষম করুন",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "মোবাইল থেকে রিমোট স্কিপিং চালু/বন্ধ করতে প্লে/বিরতির জন্য দ্বিগুণ ট্যাপ করুন। একটি ট্র্যাক স্কিপ টগল নিশ্চিত করে।",
    SETTINGS_REMOTE_SKIPPING: "দূরবর্তী স্কিপিং সক্রিয়",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "যখন সক্ষম করা হয়, তখন অন্য ডিভাইস (যেমন, মোবাইল) থেকে স্পটিফাই নিয়ন্ত্রণ করার সময়ও ট্র্যাশ-স্কিপিং কাজ করে",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "দূরবর্তী স্কিপিং সক্ষম করা হয়েছে",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "দূরবর্তী স্কিপিং অক্ষম করা হয়েছে",
    MESSAGE_SONG_ADDED_REMOTE: "গানটি দূর থেকে নষ্ট করা হয়েছে",
    SETTINGS_TRASH_VIA_LIKE: "লাইকের মাধ্যমে আবর্জনা",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "মোবাইল থেকে ট্র্যাশে এটি নিক্ষেপ করার মতো একটি গান। স্বয়ংক্রিয়ভাবে অপছন্দ করে এবং পরবর্তী ট্র্যাকে চলে যায়।",
    SETTINGS_AI_DETECTION: "এআই ডিটেকশন",
    SETTINGS_AI_DETECTION_ENABLED: "এআই গান শনাক্তকরণ",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "SONICS মডেল ব্যবহার করে এআই-জেনারেটেড গান শনাক্ত করুন এবং একটি সম্ভাব্যতা সূচক দেখান। প্রথমবার সক্রিয় করার সময় ~৫০ এমবি মডেল ডাউনলোড করা হয়।",
    AI_ASSETS_DOWNLOADING: "AI মডেল ডাউনলোড করা হচ্ছে...",
    AI_ASSETS_READY: "AI মডেল প্রস্তুত",
    AI_ASSETS_NOT_READY: "AI মডেল পাওয়া যাচ্ছে না",
    SETTINGS_TRASH_AI_SONGS: "আবর্জনা এআই গান",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "স্বয়ংক্রিয়ভাবে এআই-উৎপাদিত হিসাবে শনাক্ত করা গানগুলি মুছে ফেলুন (সম্ভাব্যতা ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "সংরক্ষিত সমস্ত AI শ্রেণীবিভাগ ফলাফল সাফ করুন ({{count}} টি গান সংরক্ষিত)।",
    ACTION_CLEAR_AI_STORAGE: "স্পষ্ট",
    MESSAGE_AI_STORAGE_CLEARED: "এআই ফলাফল পরিষ্কার হয়েছে",
    AI_TIER_LIKELY_HUMAN: "সম্ভাব্য মানুষ",
    AI_TIER_PROBABLY_HUMAN: "সম্ভবত মানুষ",
    AI_TIER_UNCERTAIN: "অনিশ্চিত",
    AI_TIER_PROBABLY_AI: "সম্ভবত কৃত্রিম বুদ্ধিমত্তা",
    AI_TIER_LIKELY_AI: "সম্ভাব্য এআই",
    ACTION_REMOVE_TRASHED: "মুছে ফেলা গানগুলি সরান",
    CONFIRM_REMOVE_TRASHED: "এই প্লেলিস্ট থেকে {{count}} টি মুছে ফেলা গান সরানো হবে? এটি আর ফিরিয়ে আনা যাবে না।",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "প্লেলিস্ট থেকে {{count}} টি মুছে ফেলা গান সরানো হয়েছে",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "এই প্লেলিস্টে কোনো ট্র্যাশ করা গান পাওয়া যায়নি"
  };
});

// src/i18n/bs.json
var require_bs = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Smeće+",
    ACTION_THROW: "Stavi u kantu za otpatke",
    ACTION_UNTHROW: "Ukloni iz kante za otpatke",
    ACTION_CLEAR: "Jasno",
    ACTION_COPY: "Kopiraj",
    ACTION_EXPORT: "Izvoz",
    ACTION_IMPORT: "Uvoz",
    MESSAGE_COPIED: "Kopirano u međuspremnik",
    MESSAGE_CLEARED: "Smeće uspješno očišćeno!",
    MESSAGE_SONG_ADDED: "Pjesma dodana u kantu za otpatke",
    MESSAGE_SONG_REMOVED: "Pjesma uklonjena iz kante za otpatke",
    MESSAGE_ARTIST_ADDED: "Umjetnik dodan u kantu za otpatke",
    MESSAGE_ARTIST_REMOVED: "Umjetnik uklonjen iz kante za smeće",
    BACKUP_SAVE_SUCCESS: "Sigurnosna kopija je uspješno sačuvana.",
    BACKUP_SAVE_FAILED: "Nije uspjelo spremanje sigurnosne kopije, pokušajte kopirati sadržaj kante za otpatke u međuspremnik i ručno kreirati sigurnosnu kopiju.",
    BACKUP_RESTORE_SUCCESS: "Sigurnosna kopija je uspješno vraćena.",
    BACKUP_FILE_READ_FAILED: "Nije uspjelo čitanje datoteke, molimo provjerite da li je validna JSON datoteka.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Postavke kantu za otpatke+",
    SETTINGS_OPTIONS: "Opcije",
    SETTINGS_FEATURES: "Karakteristike",
    SETTINGS_STORAGE: "Skladištenje",
    SETTINGS_ENABLED: "Omogućeno",
    SETTINGS_SHOW_WIDGET: "Prikaži ikonu widgeta",
    SETTINGS_AUTOPLAY: "Automatsko pokretanje pri pokretanju",
    SETTINGS_QUEUE_TRASHBIN: "Omogući korpu za otpatke reda čekanja",
    SETTINGS_TRACKLIST_TRASHBIN: "Omogući korpu za trackliste",
    SETTINGS_PLAYLIST_MONITOR: "Plejlista Monitor",
    ITEMS_TITLE: "Stavke kantu za otpatke+",
    ITEMS_EMPTY_SONGS: "<strong>Nema pjesama u smeću!</strong><br/>Pjesme koje dodate u kantu za smeće pojaviti će se ovdje.",
    ITEMS_EMPTY_ARTISTS: "<strong>Nema odbačenih izvođača!</strong><br/>Izvođači koje dodate u kantu za otpatke pojaviti će se ovdje.",
    ITEMS_TAB_SONGS: "Pjesme",
    ITEMS_TAB_ARTISTS: "Umjetnici",
    ITEMS_LOADED_COUNT: "{{loaded}} od {{total}} {{type}} učitano",
    ITEMS_SEARCH_PLACEHOLDER: "Pretraži po imenu, izvođaču ili URI-u...",
    DESCRIPTION_COPY: "Kopiraj sve stavke u kantu za otpatke u međuspremnik.",
    DESCRIPTION_EXPORT: "Sačuvaj sve stavke u kanti za otpatke u .json datoteku.",
    DESCRIPTION_IMPORT: "Prepiši sve stavke u kantu za otpatke putem .json datoteke.",
    DESCRIPTION_CLEAR: "Obriši sve stavke iz kante za otpatke (ne može se poništiti).",
    ITEMS_EMPTY_SONGS_TITLE: "Nema odbačenih pjesama!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Nema odbačenih umjetnika!",
    DESCRIPTION_SETTINGS_ENABLED: "Glavni prekidač za omogućavanje ili onemogućavanje svih funkcija Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Prikaži ikonu kante za otpatke na traci za reprodukciju pored trenutno sviranog trajekta radi brzeg pristupa",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Automatski pokreni sviranje muzike kada se Spotify otvori ili proširenje učita",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Dodajte ikone za otpad pored svake pjesme u vašoj nadolazećoj redu za laku upravu",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Dodajte ikone za otpad pored pjesama u prikazima albuma i plejlista za brzo filtriranje",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Automatski se oporavite od kvarova pri reprodukciji na Spotifyju tako što ćete nastaviti sa svojom posljednjom plejlistom",
    SETTINGS_SKIP_TRASHED_TRACKS: "Preskoči odbačene pjesme",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Automatski preskoči obrisane pjesme i pronađi sljedeći dozvoljeni zapis tokom reprodukcije",
    SETTINGS_AUTO_CLEAN_QUEUE: "Red za automatsko čišćenje",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Automatski uklonite pjesme iz bačene iz reda za pametno miješanje",
    SETTINGS_REMOTE_CONTROL: "Daljinski upravljač",
    SETTINGS_REMOTE_TOGGLE: "Omogući daljinsko prebacivanje",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Dvaput dodirnite reprodukciju/pauzu sa mobilnog uređaja da biste uključili/isključili daljinsko preskakanje. Preskakanje numeracije potvrđuje uključivanje/isključivanje.",
    SETTINGS_REMOTE_SKIPPING: "Preskakanje na daljinu aktivno",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Kada je omogućeno, preskakanje otpada funkcioniše čak i kada upravljate Spotify-om sa drugog uređaja (npr. mobilnog telefona)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Udaljeno preskakanje omogućeno",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Daljinsko preskakanje onemogućeno",
    MESSAGE_SONG_ADDED_REMOTE: "Pjesma uništena putem daljinskog upravljača",
    SETTINGS_TRASH_VIA_LIKE: "Smeće putem Lajk",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Kao pjesma s mobilnog na otpad. Automatski uklanja lajk i prelazi na sljedeći numer.",
    SETTINGS_AI_DETECTION: "Otkrivanje veštačke inteligencije",
    SETTINGS_AI_DETECTION_ENABLED: "Otkrivanje pjesama umjetne inteligencije",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Otkrij AI-om generisane pjesme korištenjem SONICS modela i prikaži indikator vjerovatnoće. Preuzimanje ~50MB modela prilikom prvog omogućavanja.",
    AI_ASSETS_DOWNLOADING: "Preuzimanje AI modela...",
    AI_ASSETS_READY: "AI model je spreman",
    AI_ASSETS_NOT_READY: "AI model nije dostupan",
    SETTINGS_TRASH_AI_SONGS: "Pjesme Trash AI",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Automatski premjesti pjesme prepoznate kao generisane od strane vještačke inteligencije (vjerojatnost ≥ 80%) u otpad",
    DESCRIPTION_CLEAR_AI_STORAGE: "Obriši sve spremljene rezultate klasifikacije umjetne inteligencije ({{count}} pjesama spremljeno).",
    ACTION_CLEAR_AI_STORAGE: "Jasno",
    MESSAGE_AI_STORAGE_CLEARED: "Rezultati AI su očišćeni",
    AI_TIER_LIKELY_HUMAN: "Vjerojatno ljudsko",
    AI_TIER_PROBABLY_HUMAN: "Vjerojatno ljudski",
    AI_TIER_UNCERTAIN: "Nepouzdan",
    AI_TIER_PROBABLY_AI: "Vjerovatno AI",
    AI_TIER_LIKELY_AI: "Vjerovatna umjetna inteligencija",
    ACTION_REMOVE_TRASHED: "Ukloni pjesme iz korpe za otpatke",
    CONFIRM_REMOVE_TRASHED: "Ukloniti {{count}} pjesmu/pjesme iz ovog plejlista? Ovo ne može biti poništeno.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Uklonjeno {{count}} pjesama iz korpe iz liste pjesama",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Nije pronađena nijedna odbačena pjesma na ovoj listi za reprodukciju"
  };
});

// src/i18n/ca.json
var require_ca = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Paperera+",
    ACTION_THROW: "Posa a la paperera",
    ACTION_UNTHROW: "Eliminar de la paperera",
    ACTION_CLEAR: "Clar",
    ACTION_COPY: "Còpia",
    ACTION_EXPORT: "Exportar",
    ACTION_IMPORT: "Importar",
    MESSAGE_COPIED: "Copiat al porta-retalls",
    MESSAGE_CLEARED: "Paperera buidada correctament!",
    MESSAGE_SONG_ADDED: "Cançó afegida a la paperera",
    MESSAGE_SONG_REMOVED: "Cançó eliminada de la paperera",
    MESSAGE_ARTIST_ADDED: "Artista afegit a la paperera",
    MESSAGE_ARTIST_REMOVED: "Artista eliminat de la paperera",
    BACKUP_SAVE_SUCCESS: "Còpia de seguretat desada correctament.",
    BACKUP_SAVE_FAILED: "No s'ha pogut desar la còpia de seguretat, intenta copiar el contingut de la paperera al porta-retalls i crear una còpia de seguretat manualment.",
    BACKUP_RESTORE_SUCCESS: "Còpia de seguretat restaurada correctament.",
    BACKUP_FILE_READ_FAILED: "No s'ha pogut llegir el fitxer, assegureu-vos que és un fitxer JSON vàlid.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Configuració de la Paperera+",
    SETTINGS_OPTIONS: "Opcions",
    SETTINGS_FEATURES: "Característiques",
    SETTINGS_STORAGE: "Emmagatzematge",
    SETTINGS_ENABLED: "Habilitat",
    SETTINGS_SHOW_WIDGET: "Mostra la icona del giny",
    SETTINGS_AUTOPLAY: "Reproducció automàtica en iniciar",
    SETTINGS_QUEUE_TRASHBIN: "Habilita la safata de reciclatge de cues",
    SETTINGS_TRACKLIST_TRASHBIN: "Habilita la paperera de la llista de pistes",
    SETTINGS_PLAYLIST_MONITOR: "Monitor de llistes de reproducció",
    ITEMS_TITLE: "Elements de la paperera+",
    ITEMS_EMPTY_SONGS: "<strong>No hi ha cançons esborrades!</strong><br/>Les cançons que afegeixis a la paperera apareixeran aquí.",
    ITEMS_EMPTY_ARTISTS: "<strong>No hi ha artistes esborrats!</strong><br/>Els artistes que afegeixis a la paperera apareixeran aquí.",
    ITEMS_TAB_SONGS: "Cançons",
    ITEMS_TAB_ARTISTS: "Artistes",
    ITEMS_LOADED_COUNT: "{{loaded}} de {{total}} {{type}} carregats",
    ITEMS_SEARCH_PLACEHOLDER: "Cerca per nom, artista o URI...",
    DESCRIPTION_COPY: "Copia tots els elements de la paperera al porta-retalls.",
    DESCRIPTION_EXPORT: "Desa tots els elements de la paperera en un fitxer .json.",
    DESCRIPTION_IMPORT: "Sobreescriu tots els elements de la paperera mitjançant el fitxer .json.",
    DESCRIPTION_CLEAR: "Neteja tots els elements de la paperera (no es pot desfer).",
    ITEMS_EMPTY_SONGS_TITLE: "Cap cançó esborrada!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Cap artista escombrat!",
    DESCRIPTION_SETTINGS_ENABLED: "Commutador principal per habilitar o inhabilitar totes les funcionalitats de la Paperera+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Mostra una icona de paperera a la barra de reproducció al costat de la pista que s'està reproduint per accedir-hi ràpidament",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Inicia automàticament la reproducció de música quan s'obre el Spotify o es carrega l'extensió",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Afegeix icones de paperera al costat de cada cançó de la teva cua propera per gestionar-les fàcilment",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Afegeix icones de paperera al costat de les cançons en les vistes d'àlbum i llista de reproducció per a un filtrat ràpid",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Recupera't automàticament dels errors de reproducció de Spotify reprement la darrera llista de reproducció",
    SETTINGS_SKIP_TRASHED_TRACKS: "Omet els pistes esborrats",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Omet automàticament les cançons esborrades i troba la següent pista permesa durant la reproducció",
    SETTINGS_AUTO_CLEAN_QUEUE: "Cua de neteja automàtica",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Elimina automàticament les cançons esborrades de la teva cua de reproducció aleatòria intel·ligent",
    SETTINGS_REMOTE_CONTROL: "Control remot",
    SETTINGS_REMOTE_TOGGLE: "Habilita l'activació remota",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Toca dues vegades reproduir/pausar des del mòbil per activar o desactivar el salt de pista a distància. El salt d'una pista confirma l'activació.",
    SETTINGS_REMOTE_SKIPPING: "Omplert remot actiu",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Quan està activat, ometre la paperera funciona fins i tot quan es controla Spotify des d'un altre dispositiu (per exemple, mòbil)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Salt d'execució remot activat",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Omplert remot desactivat",
    MESSAGE_SONG_ADDED_REMOTE: "Cançó esborrada mitjançant control remot",
    SETTINGS_TRASH_VIA_LIKE: "Brossa mitjançant Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Com una cançó des de el mòbil fins a esborrar-la. La desmarca automàticament i passa a la següent pista.",
    SETTINGS_AI_DETECTION: "Detecció d'IA",
    SETTINGS_AI_DETECTION_ENABLED: "Detecció de cançons amb IA",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Detecta cançons generades per IA utilitzant el model SONICS i mostra un indicador de probabilitat. Descarrega un model d'uns 50 MB en activar-lo per primera vegada.",
    AI_ASSETS_DOWNLOADING: "Descarregant el model d'intel·ligència artificial...",
    AI_ASSETS_READY: "Model d'IA preparat",
    AI_ASSETS_NOT_READY: "Model d'IA no disponible",
    SETTINGS_TRASH_AI_SONGS: "Cançons d'IA de merda",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Elimina automàticament les cançons detectades com a generades per IA (probabilitat ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Neteja tots els resultats emmagatzemats de classificació amb IA ({{count}} cançons emmagatzemades).",
    ACTION_CLEAR_AI_STORAGE: "Clar",
    MESSAGE_AI_STORAGE_CLEARED: "Els resultats d'IA han estat esborrats",
    AI_TIER_LIKELY_HUMAN: "Probablement humà",
    AI_TIER_PROBABLY_HUMAN: "Probablement humà",
    AI_TIER_UNCERTAIN: "Incertain",
    AI_TIER_PROBABLY_AI: "Probablement IA",
    AI_TIER_LIKELY_AI: "IA probable",
    ACTION_REMOVE_TRASHED: "Elimina les cançons esborrades",
    CONFIRM_REMOVE_TRASHED: "Voleu suprimir {{count}} cançó(ns) esborrada(es) d'aquesta llista de reproducció? Aquesta acció no es pot desfer.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "S'han eliminat {{count}} cançó(ns) esborrada(es) de la llista de reproducció",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "No s'han trobat cançons esborrades en aquesta llista de reproducció"
  };
});

// src/i18n/cs.json
var require_cs = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Koš+",
    ACTION_THROW: "Umístit do koše",
    ACTION_UNTHROW: "Odstranit z koše",
    ACTION_CLEAR: "Jasné",
    ACTION_COPY: "Kopírovat",
    ACTION_EXPORT: "Export",
    ACTION_IMPORT: "Import",
    MESSAGE_COPIED: "Zkopírováno do schránky",
    MESSAGE_CLEARED: "Koš byl úspěšně vyprázdněn!",
    MESSAGE_SONG_ADDED: "Píseň přidána do koše",
    MESSAGE_SONG_REMOVED: "Píseň odstraněna z koše",
    MESSAGE_ARTIST_ADDED: "Umělec přidán do koše",
    MESSAGE_ARTIST_REMOVED: "Umělec odstraněn z koše",
    BACKUP_SAVE_SUCCESS: "Záloha byla úspěšně uložena.",
    BACKUP_SAVE_FAILED: "Nepodařilo se uložit zálohu, zkuste zkopírovat obsah koše do schránky a vytvořit zálohu ručně.",
    BACKUP_RESTORE_SUCCESS: "Záloha byla úspěšně obnovena.",
    BACKUP_FILE_READ_FAILED: "Nepodařilo se přečíst soubor, ujistěte se, že je platným souborem JSON.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Nastavení koše+",
    SETTINGS_OPTIONS: "Možnosti",
    SETTINGS_FEATURES: "Funkce",
    SETTINGS_STORAGE: "Úložiště",
    SETTINGS_ENABLED: "Povoleno",
    SETTINGS_SHOW_WIDGET: "Zobrazit ikonu widgetu",
    SETTINGS_AUTOPLAY: "Automatické spuštění po zapnutí",
    SETTINGS_QUEUE_TRASHBIN: "Povolit koš fronty",
    SETTINGS_TRACKLIST_TRASHBIN: "Povolit koš pro seznam stop",
    SETTINGS_PLAYLIST_MONITOR: "Monitor seznamu skladeb",
    ITEMS_TITLE: "Položky koše+",
    ITEMS_EMPTY_SONGS: "<strong>Žádné smazané skladby!</strong><br/>Skladby, které přidáte do koše, se objeví zde.",
    ITEMS_EMPTY_ARTISTS: "<strong>Žádní umělci ve koši!</strong><br/>Umělci, které přidáte do koše, se objeví zde.",
    ITEMS_TAB_SONGS: "Písně",
    ITEMS_TAB_ARTISTS: "Umělci",
    ITEMS_LOADED_COUNT: "Načteno {{loaded}} z {{total}} položek typu {{type}}",
    ITEMS_SEARCH_PLACEHOLDER: "Hledat podle názvu, interpreta nebo URI...",
    DESCRIPTION_COPY: "Zkopírovat všechny položky v koši do schránky.",
    DESCRIPTION_EXPORT: "Uložit všechny položky v koši do souboru .json.",
    DESCRIPTION_IMPORT: "Přepsat všechny položky v koši pomocí souboru .json.",
    DESCRIPTION_CLEAR: "Smazat všechny položky z koše (nelze vrátit zpět).",
    ITEMS_EMPTY_SONGS_TITLE: "Žádné smazané skladby!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Žádní zdiskreditovaní umělci!",
    DESCRIPTION_SETTINGS_ENABLED: "Hlavní přepínač pro povolení nebo zakázání veškeré funkce koše+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Zobrazit ikonu koše na liště přehrávání vedle právě přehrávané skladby pro rychlý přístup",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Automaticky spustit přehrávání hudby při otevření Spotify nebo načtení rozšíření",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Přidejte ikony koše vedle každé skladby ve vaší nadcházející frontě pro snadnou správu",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Přidejte ikony koše vedle skladeb v zobrazení alba a seznamu skladeb pro rychlé filtrování",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Automatické obnovení po chybách přehrávání ve Spotify obnovením poslední playlistu",
    SETTINGS_SKIP_TRASHED_TRACKS: "Přeskočit smazané stopy",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Automaticky přeskakovat smazané skladby a během přehrávání najít další povolenou skladbu",
    SETTINGS_AUTO_CLEAN_QUEUE: "Fronta čištění vozidla",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Automaticky odstraňuj smazané skladby ze své fronty náhodného přehrávání",
    SETTINGS_REMOTE_CONTROL: "Dálkové ovládání",
    SETTINGS_REMOTE_TOGGLE: "Povolit vzdálené přepínání",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Dvojitým klepnutím na přehrávání/pauzu z mobilního zařízení zapnete nebo vypnete vzdálené přeskakování. Přeskočení skladby potvrdí přepnutí.",
    SETTINGS_REMOTE_SKIPPING: "Vzdálené přeskočení aktivní",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Když je tato funkce povolená, přeskakování do koše funguje i při ovládání Spotify z jiného zařízení (např. mobilního telefonu).",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Vzdálené přeskakování povoleno",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Vzdálené přeskakování zakázáno",
    MESSAGE_SONG_ADDED_REMOTE: "Píseň smazána na dálku",
    SETTINGS_TRASH_VIA_LIKE: "Odpad přes Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Jako píseň z mobilu do koše. Automaticky odlajkne a přeskočí na další stopu.",
    SETTINGS_AI_DETECTION: "Detekce umělé inteligence",
    SETTINGS_AI_DETECTION_ENABLED: "Detekce písní umělé inteligencí",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Detekujte AI-generované skladby pomocí modelu SONICS a zobrazte indikátor pravděpodobnosti. Při prvním zapnutí stáhne model velikosti ~50 MB.",
    AI_ASSETS_DOWNLOADING: "Stahování AI modelu...",
    AI_ASSETS_READY: "Model AI je připraven",
    AI_ASSETS_NOT_READY: "AI model není k dispozici",
    SETTINGS_TRASH_AI_SONGS: "Nesmyslné písně umělé inteligence",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Automaticky přesunout do koše skladby rozpoznané jako vygenerované umělou inteligencí (pravděpodobnost ≥ 80 %)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Vymazat všechny uložené výsledky klasifikace umělé inteligence (uloženo {{count}} skladeb).",
    ACTION_CLEAR_AI_STORAGE: "Jasné",
    MESSAGE_AI_STORAGE_CLEARED: "Výsledky AI byly vyčištěny",
    AI_TIER_LIKELY_HUMAN: "Pravděpodobně člověk",
    AI_TIER_PROBABLY_HUMAN: "Pravděpodobně člověk",
    AI_TIER_UNCERTAIN: "Nejistý",
    AI_TIER_PROBABLY_AI: "Pravděpodobně umělá inteligence",
    AI_TIER_LIKELY_AI: "Pravděpodobná umělá inteligence",
    ACTION_REMOVE_TRASHED: "Odstranit smazané skladby",
    CONFIRM_REMOVE_TRASHED: "Opravdu chcete odstranit {{count}} smazanou píseň (písně) z tohoto seznamu? Tuto akci nelze vrátit zpět.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Odstraněno {{count}} smazaná(písní) z playlistu",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "V tomto seznamu skladeb nebyly nalezeny žádné smazané skladby"
  };
});

// src/i18n/da.json
var require_da = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Papirkurv+",
    ACTION_THROW: "Placer i papirkurven",
    ACTION_UNTHROW: "Fjern fra papirkurven",
    ACTION_CLEAR: "Klar",
    ACTION_COPY: "Kopiér",
    ACTION_EXPORT: "Eksport",
    ACTION_IMPORT: "Import",
    MESSAGE_COPIED: "Kopieret til udklipsholderen",
    MESSAGE_CLEARED: "Papirkurven er tømt!",
    MESSAGE_SONG_ADDED: "Sang tilføjet til papirkurven",
    MESSAGE_SONG_REMOVED: "Sang fjernet fra papirkurven",
    MESSAGE_ARTIST_ADDED: "Kunstner tilføjet til papirkurven",
    MESSAGE_ARTIST_REMOVED: "Kunstner fjernet fra papirkurven",
    BACKUP_SAVE_SUCCESS: "Sikkerhedskopien blev gemt succesfuldt.",
    BACKUP_SAVE_FAILED: "Kunne ikke gemme sikkerhedskopi, prøv at kopiere papirkassens indhold til udklipsholderen og opret en sikkerhedskopi manuelt.",
    BACKUP_RESTORE_SUCCESS: "Sikkerhedskopien blev gendannet succesfuldt.",
    BACKUP_FILE_READ_FAILED: "Kunne ikke læse filen, sørg venligst for, at det er en gyldig JSON-fil.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Trashbin+ Indstillinger",
    SETTINGS_OPTIONS: "Indstillinger",
    SETTINGS_FEATURES: "Funktioner",
    SETTINGS_STORAGE: "Opbevaring",
    SETTINGS_ENABLED: "Aktiveret",
    SETTINGS_SHOW_WIDGET: "Vis widget-ikon",
    SETTINGS_AUTOPLAY: "Automatisk afspilning ved start",
    SETTINGS_QUEUE_TRASHBIN: "Aktivér kø til papirkurv",
    SETTINGS_TRACKLIST_TRASHBIN: "Aktivér Sporliste Papirkurv",
    SETTINGS_PLAYLIST_MONITOR: "Aftaleskemaovervågning",
    ITEMS_TITLE: "Papirkurv+ emner",
    ITEMS_EMPTY_SONGS: "<strong>Ingen slettede sange!</strong><br/>Sange, du tilføjer til papirkurven, vises her.",
    ITEMS_EMPTY_ARTISTS: "<strong>Ingen slettet kunstnere!</strong><br/>Kunstnere, du lægger i papirkurven, vises her.",
    ITEMS_TAB_SONGS: "Sange",
    ITEMS_TAB_ARTISTS: "Kunstnere",
    ITEMS_LOADED_COUNT: "{{loaded}} af {{total}} {{type}} indlæst",
    ITEMS_SEARCH_PLACEHOLDER: "Søg efter navn, kunstner eller URI...",
    DESCRIPTION_COPY: "Kopier alle elementer i papirkurven til udklipsholderen.",
    DESCRIPTION_EXPORT: "Gem alle elementer i papirkurven i en .json-fil.",
    DESCRIPTION_IMPORT: "Overskriv alle elementer i papirkurven via .json-fil.",
    DESCRIPTION_CLEAR: "Ryd alle elementer fra papirkurven (kan ikke fortrydes).",
    ITEMS_EMPTY_SONGS_TITLE: "Ingen slettede sange!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Ingen kasseret kunstnere!",
    DESCRIPTION_SETTINGS_ENABLED: "Masterkontakt til at aktivere eller deaktivere al Papirkurv+-funktionalitet",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Vis et papirkurv-ikon i afspilningslinjen ved siden af den aktuelle sang for hurtig adgang",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Start automatisk afspilning af musik, når Spotify åbnes eller udvidelsen indlæses",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Tilføj papirkurv-ikoner ud for hver sang i din kommende kø for nem håndtering",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Tilføj papirkurv-ikoner ved siden af sange i album- og playlist-visninger til hurtig filtrering",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Gendan automatisk fra Spotify-afspilningsfejl ved at genoptage din sidste playliste",
    SETTINGS_SKIP_TRASHED_TRACKS: "Spring slettede spor over",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Spring automatisk over slettede sange og find det næste tilladte nummer under afspilning",
    SETTINGS_AUTO_CLEAN_QUEUE: "Automatisk rensning af kø",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Fjern automatisk slettede sange fra din Smart Shuffle-kø",
    SETTINGS_REMOTE_CONTROL: "Fjernbetjening",
    SETTINGS_REMOTE_TOGGLE: "Aktivér fjernbetjening",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Dobbelttryk på afspil/pause fra mobilen for at slå fjernhåndtering af spring til/fra. Et spring til næste nummer bekræfter ændringen.",
    SETTINGS_REMOTE_SKIPPING: "Fjernbetjeningsspring aktiv",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Når det er aktiveret, fungerer papirkurv-omgåelse, selv når Spotify styres fra en anden enhed (f.eks. mobil)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Fjernhåndtering af springer aktiveret",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Fjernhopping deaktiveret",
    MESSAGE_SONG_ADDED_REMOTE: "Sang slettet via fjernbetjening",
    SETTINGS_TRASH_VIA_LIKE: "Affald via Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: 'Som en sang fra mobil til papirkurven. Fjerner automatisk "like" og springer til næste nummer.',
    SETTINGS_AI_DETECTION: "AI-detektering",
    SETTINGS_AI_DETECTION_ENABLED: "AI-sangsgenkendelse",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Registrer AI-genererede sange ved hjælp af SONICS-modellen og vis en sandsynlighedsindikator. Henter en model på ~50 MB ved første aktivering.",
    AI_ASSETS_DOWNLOADING: "Downloaderer AI-model...",
    AI_ASSETS_READY: "AI-model klar",
    AI_ASSETS_NOT_READY: "AI-model ikke tilgængelig",
    SETTINGS_TRASH_AI_SONGS: "Snavs AI-sange",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Automatisk slet sange, der identificeres som AI-genererede (sandsynlighed ≥ 80 %)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Ryd alle gemte AI-klassificeringsresultater ({{count}} sange gemt).",
    ACTION_CLEAR_AI_STORAGE: "Klar",
    MESSAGE_AI_STORAGE_CLEARED: "AI-resultater godkendt",
    AI_TIER_LIKELY_HUMAN: "Sandsynligvis menneskelig",
    AI_TIER_PROBABLY_HUMAN: "Sandsynligvis menneskelig",
    AI_TIER_UNCERTAIN: "Usikker",
    AI_TIER_PROBABLY_AI: "Sandsynligvis AI",
    AI_TIER_LIKELY_AI: "Sandsynlig AI",
    ACTION_REMOVE_TRASHED: "Fjern slettede sange",
    CONFIRM_REMOVE_TRASHED: "Fjern {{count}} slettet(e) sang(e) fra denne playliste? Dette kan ikke fortrydes.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Fjernede {{count}} slettet(e) sang(e) fra afspilningsliste",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Ingen slettede sange fundet i denne playliste"
  };
});

// src/i18n/de.json
var require_de = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Papierkorb+",
    ACTION_THROW: "In den Papierkorb legen",
    ACTION_UNTHROW: "Aus dem Papierkorb entfernen",
    ACTION_CLEAR: "Klar",
    ACTION_COPY: "Kopieren",
    ACTION_EXPORT: "Export",
    ACTION_IMPORT: "Import",
    MESSAGE_COPIED: "In die Zwischenablage kopiert",
    MESSAGE_CLEARED: "Papierkorb erfolgreich geleert!",
    MESSAGE_SONG_ADDED: "Lied in den Papierkorb verschoben",
    MESSAGE_SONG_REMOVED: "Lied aus dem Papierkorb entfernt",
    MESSAGE_ARTIST_ADDED: "Künstler zur Mülltonne hinzugefügt",
    MESSAGE_ARTIST_REMOVED: "Künstler aus dem Papierkorb entfernt",
    BACKUP_SAVE_SUCCESS: "Sicherung erfolgreich gespeichert.",
    BACKUP_SAVE_FAILED: "Speichern der Sicherungskopie fehlgeschlagen, versuchen Sie, den Inhalt des Papierkorbs in die Zwischenablage zu kopieren und manuell eine Sicherungskopie zu erstellen.",
    BACKUP_RESTORE_SUCCESS: "Sicherung erfolgreich wiederhergestellt.",
    BACKUP_FILE_READ_FAILED: "Fehler beim Lesen der Datei, bitte stellen Sie sicher, dass es sich um eine gültige JSON-Datei handelt.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Papierkorb+ Einstellungen",
    SETTINGS_OPTIONS: "Optionen",
    SETTINGS_FEATURES: "Merkmale",
    SETTINGS_STORAGE: "Speicherung",
    SETTINGS_ENABLED: "Aktiviert",
    SETTINGS_SHOW_WIDGET: "Widget-Symbol anzeigen",
    SETTINGS_AUTOPLAY: "Automatisches Abspielen beim Start",
    SETTINGS_QUEUE_TRASHBIN: "Warteschlangen-Papierkorb aktivieren",
    SETTINGS_TRACKLIST_TRASHBIN: "Aktiviere Tracklist-Papierkorb",
    SETTINGS_PLAYLIST_MONITOR: "Playlist-Monitor",
    ITEMS_TITLE: "Papierkorb+ Elemente",
    ITEMS_EMPTY_SONGS: "<strong>Keine gelöschten Lieder!</strong><br/>Lieder, die du in den Papierkorb legst, werden hier angezeigt.",
    ITEMS_EMPTY_ARTISTS: "<strong>Keine gelöschten Künstler!</strong><br/>Künstler, die Sie in den Papierkorb verschieben, werden hier angezeigt.",
    ITEMS_TAB_SONGS: "Lieder",
    ITEMS_TAB_ARTISTS: "Künstler",
    ITEMS_LOADED_COUNT: "{{loaded}} von {{total}} {{type}} geladen",
    ITEMS_SEARCH_PLACEHOLDER: "Suche nach Name, Künstler oder URI...",
    DESCRIPTION_COPY: "Alle Elemente im Papierkorb in die Zwischenablage kopieren.",
    DESCRIPTION_EXPORT: "Alle Elemente im Papierkorb in einer .json-Datei speichern.",
    DESCRIPTION_IMPORT: "Alle Elemente im Papierkorb über die .json-Datei überschreiben.",
    DESCRIPTION_CLEAR: "Alle Elemente aus dem Papierkorb löschen (kann nicht rückgängig gemacht werden).",
    ITEMS_EMPTY_SONGS_TITLE: "Keine gelöschten Songs!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Keine abgewrackten Künstler!",
    DESCRIPTION_SETTINGS_ENABLED: "Hauptschalter zum Aktivieren oder Deaktivieren aller Papierkorb+-Funktionen",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Ein Papierkorb-Symbol in der Wiedergabeleiste neben dem gerade abgespielten Titel für schnellen Zugriff anzeigen",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Musik automatisch abspielen, wenn Spotify geöffnet wird oder die Erweiterung geladen wird",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Fügen Sie neben jedem Song in Ihrer Warteschlange Papierkorb-Symbole hinzu, um eine einfache Verwaltung zu ermöglichen",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Abfall-Icons neben Songs in den Ansichten „Album“ und „Wiedergabeliste“ hinzufügen, um eine schnelle Filterung zu ermöglichen",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Automatische Wiederherstellung bei Spotify-Wiedergabeproblemen durch Fortsetzung Ihrer letzten Wiedergabeliste",
    SETTINGS_SKIP_TRASHED_TRACKS: "Überspringe gelöschte Titel",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Überspringe automatisch gelöschte Songs und finde während der Wiedergabe den nächsten erlaubten Titel",
    SETTINGS_AUTO_CLEAN_QUEUE: "Auto-Reinigungs-Warteschlange",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Entferne automatisch gelöschte Songs aus deiner Smart-Shuffle-Warteschlange",
    SETTINGS_REMOTE_CONTROL: "Fernbedienung",
    SETTINGS_REMOTE_TOGGLE: "Fernumschaltung aktivieren",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Doppeltes Antippen von Wiedergabe/Pause auf dem Mobilgerät, um das Überspringen per Fernbedienung ein- und auszuschalten. Das Überspringen eines Titels bestätigt die Umschaltung.",
    SETTINGS_REMOTE_SKIPPING: "Ferngesteuertes Überspringen aktiv",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Wenn aktiviert, funktioniert das Überspringen von Titeln im Papierkorb auch dann, wenn Spotify von einem anderen Gerät (z. B. einem Mobiltelefon) aus gesteuert wird.",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Fernüberspringen aktiviert",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Fernüberspringen deaktiviert",
    MESSAGE_SONG_ADDED_REMOTE: "Lied über Fernbedienung zerstört",
    SETTINGS_TRASH_VIA_LIKE: "Müll über Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Wie ein Lied vom Handy in den Papierkorb. Automatisch entfernt die Like-Bewertung und springt zum nächsten Titel.",
    SETTINGS_AI_DETECTION: "KI-Erkennung",
    SETTINGS_AI_DETECTION_ENABLED: "KI-Song-Erkennung",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Erkennen Sie KI-generierte Songs mithilfe des SONICS-Modells und zeigen Sie einen Wahrscheinlichkeitsindikator an. Lädt beim ersten Aktivieren ein ca. 50 MB großes Modell herunter.",
    AI_ASSETS_DOWNLOADING: "Herunterladen des KI-Modells...",
    AI_ASSETS_READY: "KI-Modell bereit",
    AI_ASSETS_NOT_READY: "KI-Modell nicht verfügbar",
    SETTINGS_TRASH_AI_SONGS: "Müll-AI-Songs",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Lösche automatisch Songs, die als KI-generiert erkannt werden (Wahrscheinlichkeit ≥ 80 %)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Alle gespeicherten KI-Klassifizierungsergebnisse löschen ({{count}} gespeicherte Songs).",
    ACTION_CLEAR_AI_STORAGE: "Klar",
    MESSAGE_AI_STORAGE_CLEARED: "KI-Ergebnisse gelöscht",
    AI_TIER_LIKELY_HUMAN: "Wahrscheinlich menschlich",
    AI_TIER_PROBABLY_HUMAN: "Wahrscheinlich menschlich",
    AI_TIER_UNCERTAIN: "Unsicher",
    AI_TIER_PROBABLY_AI: "Wahrscheinlich KI",
    AI_TIER_LIKELY_AI: "Wahrscheinlich KI",
    ACTION_REMOVE_TRASHED: "Gelöschte Songs entfernen",
    CONFIRM_REMOVE_TRASHED: "{{count}} gelöschte Songs aus dieser Playlist entfernen? Dies kann nicht rückgängig gemacht werden.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "{{count}} gelöschte(r) Titel(e) aus der Wiedergabeliste entfernt",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Keine gelöschten Songs in dieser Playlist gefunden"
  };
});

// src/i18n/el.json
var require_el = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Κάδος απορριμμάτων+",
    ACTION_THROW: "Τοποθέτηση στον κάδο απορριμμάτων",
    ACTION_UNTHROW: "Αφαίρεση από τον κάδο απορριμμάτων",
    ACTION_CLEAR: "Ξεκάθαρο",
    ACTION_COPY: "Αντιγραφή",
    ACTION_EXPORT: "Εξαγωγή",
    ACTION_IMPORT: "Εισαγωγή",
    MESSAGE_COPIED: "Αντιγράφηκε στο πρόχειρο",
    MESSAGE_CLEARED: "Το καλάθι αχρήστων καθαρίστηκε επιτυχώς!",
    MESSAGE_SONG_ADDED: "Το τραγούδι προστέθηκε στον κάδο απορριμμάτων",
    MESSAGE_SONG_REMOVED: "Το τραγούδι αφαιρέθηκε από τον κάδο απορριμμάτων",
    MESSAGE_ARTIST_ADDED: "Ο καλλιτέχνης προστέθηκε στον κάδο απορριμμάτων",
    MESSAGE_ARTIST_REMOVED: "Ο καλλιτέχνης αφαιρέθηκε από τον κάδο απορριμμάτων",
    BACKUP_SAVE_SUCCESS: "Η αντίγραφο ασφαλείας αποθηκεύτηκε επιτυχώς.",
    BACKUP_SAVE_FAILED: "Αποτυχία αποθήκευσης αντιγράφου ασφαλείας, δοκιμάστε να αντιγράψετε τα περιεχόμενα του κάδου απορριμμάτων στο πρόχειρο και να δημιουργήσετε ένα αντίγραφο ασφαλείας χειροκίνητα.",
    BACKUP_RESTORE_SUCCESS: "Η δημιουργία αντιγράφου ασφαλείας επαναφέρθηκε επιτυχώς.",
    BACKUP_FILE_READ_FAILED: "Αποτυχία ανάγνωσης αρχείου, παρακαλώ βεβαιωθείτε ότι είναι ένα έγκυρο αρχείο JSON.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Ρυθμίσεις Κάδου Απορριμμάτων+",
    SETTINGS_OPTIONS: "Επιλογές",
    SETTINGS_FEATURES: "Χαρακτηριστικά",
    SETTINGS_STORAGE: "Αποθήκευση",
    SETTINGS_ENABLED: "Ενεργοποιημένο",
    SETTINGS_SHOW_WIDGET: "Εμφάνιση εικονιδίου γραφικού στοιχείου",
    SETTINGS_AUTOPLAY: "Αυτόματη έναρξη κατά την εκκίνηση",
    SETTINGS_QUEUE_TRASHBIN: "Ενεργοποίηση Κάδου Απορριμμάτων Ουράς",
    SETTINGS_TRACKLIST_TRASHBIN: "Ενεργοποίηση Κάδου Απορριμμάτων Λίστας Κομματιών",
    SETTINGS_PLAYLIST_MONITOR: "Παρακολούθηση λίστας αναπαραγωγής",
    ITEMS_TITLE: "Αντικείμενα κάδου απορριμμάτων+",
    ITEMS_EMPTY_SONGS: "<strong>Καμία διαγραμμένα τραγούδια!</strong><br/>Τα τραγούδια που προσθέτετε στον κάδο απορριμμάτων θα εμφανίζονται εδώ.",
    ITEMS_EMPTY_ARTISTS: "<strong>Κανένας καλλιτέχνης στα απορρίμματα!</strong><br/>Οι καλλιτέχνες που προσθέτετε στον κάδο απορριμμάτων θα εμφανίζονται εδώ.",
    ITEMS_TAB_SONGS: "Τραγούδια",
    ITEMS_TAB_ARTISTS: "Καλλιτέχνες",
    ITEMS_LOADED_COUNT: "{{loaded}} από {{total}} {{type}} φορτώθηκαν",
    ITEMS_SEARCH_PLACEHOLDER: "Αναζήτηση με όνομα, καλλιτέχνη ή URI...",
    DESCRIPTION_COPY: "Αντιγραφή όλων των αντικειμένων στον κάδο απορριμμάτων στο πρόχειρο.",
    DESCRIPTION_EXPORT: "Αποθηκεύστε όλα τα αντικείμενα στον κάδο απορριμμάτων σε ένα αρχείο .json.",
    DESCRIPTION_IMPORT: "Αντικατάσταση όλων των αντικειμένων στον κάδο απορριμμάτων μέσω αρχείου .json.",
    DESCRIPTION_CLEAR: "Διαγραφή όλων των αντικειμένων από τον κάδο απορριμμάτων (δεν μπορεί να αναιρεθεί).",
    ITEMS_EMPTY_SONGS_TITLE: "Κανένα τραγούδι στον κάδο!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Κανένας κατεστραμμένος καλλιτέχνης!",
    DESCRIPTION_SETTINGS_ENABLED: "Κύριος διακόπτης για ενεργοποίηση ή απενεργοποίηση όλων των λειτουργιών του Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Εμφάνιση εικονιδίου κάδου απορριμμάτων στη γραμμή αναπαραγωγής δίπλα στο τρέχον τραγούδι για γρήγορη πρόσβαση",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Εκκίνηση αναπαραγωγής μουσικής αυτόματα όταν ανοίγει το Spotify ή φορτώνει η επέκταση",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Προσθέστε εικονίδια απορριμμάτων δίπλα σε κάθε τραγούδι στην ουρά σας για εύκολη διαχείριση",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Προσθέστε εικονίδια απορριμμάτων δίπλα στα τραγούδια στις προβολές άλμπουμ και λίστας αναπαραγωγής για γρήγορη φιλτράρισμα",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Αυτόματη ανάκτηση από προβλήματα αναπαραγωγής στο Spotify με τη συνέχιση της τελευταίας λίστας αναπαραγωγής σας",
    SETTINGS_SKIP_TRASHED_TRACKS: "Παράλειψη Απορριμμένων Κομματιών",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Παράκαμψη αυτόματα των διαγραμμένων τραγουδιών και εύρεση του επόμενου επιτρεπόμενου κομματιού κατά τη διάρκεια αναπαραγωγής",
    SETTINGS_AUTO_CLEAN_QUEUE: "Ουρά αυτόματου καθαρισμού",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Αφαιρέστε αυτόματα τραγούδια από την ουρά Smart Shuffle που έχουν διαγραφεί",
    SETTINGS_REMOTE_CONTROL: "Τηλεχειριστήριο",
    SETTINGS_REMOTE_TOGGLE: "Ενεργοποίηση απομακρυσμένης εναλλαγής",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Πατήστε δύο φορές το πλήκτρο αναπαραγωγή/παύση από την κινητή συσκευή για να ενεργοποιήσετε/απενεργοποιήσετε τη λειτουργία παράκαμψης από απόσταση. Η παράκαμψη ενός κομματιού επιβεβαιώνει την εναλλαγή.",
    SETTINGS_REMOTE_SKIPPING: "Απομακρυσμένη Παράκαμψη Ενεργή",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Όταν ενεργοποιηθεί, η παράκαμψη του κάδου ανακύκλωσης λειτουργεί ακόμα και όταν ελέγχετε το Spotify από άλλη συσκευή (π.χ. κινητό)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Ενεργοποιημένη η απομακρυσμένη παράλειψη",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Η απομακρυσμένη παράλειψη απενεργοποιήθηκε",
    MESSAGE_SONG_ADDED_REMOTE: "Το τραγούδι καταστράφηκε μέσω τηλεχειριστηρίου",
    SETTINGS_TRASH_VIA_LIKE: "Αχρείαστα μέσω Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Όπως ένα τραγούδι από το κινητό για να το πετάξεις. Αποδέχεται αυτόματα και πηδάει στο επόμενο κομμάτι.",
    SETTINGS_AI_DETECTION: "Ανίχνευση Τεχνητής Νοημοσύνης",
    SETTINGS_AI_DETECTION_ENABLED: "Ανίχνευση Τραγουδιού Τεχνητής Νοημοσύνης",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Ανίχνευση τραγουδιών που δημιουργήθηκαν από τεχνητή νοημοσύνη χρησιμοποιώντας το μοντέλο SONICS και εμφάνιση δείκτη πιθανότητας. Λήψη μοντέλου ~50MB κατά την πρώτη ενεργοποίηση.",
    AI_ASSETS_DOWNLOADING: "Λήψη μοντέλου τεχνητής νοημοσύνης...",
    AI_ASSETS_READY: "Έτοιμο μοντέλο τεχνητής νοημοσύνης",
    AI_ASSETS_NOT_READY: "Το μοντέλο AI δεν είναι διαθέσιμο",
    SETTINGS_TRASH_AI_SONGS: "Άχρηστα τραγούδια AI",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Να απορρίπτονται αυτόματα τα τραγούδια που ανιχνεύονται ως δημιουργημένα από τεχνητή νοημοσύνη (πιθανότητα ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Διαγραφή όλων των αποθηκευμένων αποτελεσμάτων ταξινόμησης με τεχνητή νοημοσύνη ({{count}} τραγούδια αποθηκευμένα).",
    ACTION_CLEAR_AI_STORAGE: "Ξεκάθαρο",
    MESSAGE_AI_STORAGE_CLEARED: "Τα αποτελέσματα της τεχνητής νοημοσύνης εκκαθαρίστηκαν",
    AI_TIER_LIKELY_HUMAN: "Πιθανόν Ανθρώπινο",
    AI_TIER_PROBABLY_HUMAN: "Πιθανότατα Ανθρώπινο",
    AI_TIER_UNCERTAIN: "Αβέβαιος",
    AI_TIER_PROBABLY_AI: "Πιθανώς τεχνητή νοημοσύνη",
    AI_TIER_LIKELY_AI: "Πιθανή Τεχνητή Νοημοσύνη",
    ACTION_REMOVE_TRASHED: "Αφαίρεση τραγουδιών από τον κάδο απορριμμάτων",
    CONFIRM_REMOVE_TRASHED: "Αφαίρεση {{count}} τραγουδιού(ών) από την κάδο αυτής της λίστας αναπαραγωγής; Αυτή η ενέργεια δεν μπορεί να αναιρεθεί.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Αφαιρέθηκαν {{count}} τραγούδια από τη λίστα αναπαραγωγής",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Δεν βρέθηκαν τραγούδια στο καλάθι αυτής της λίστας αναπαραγωγής"
  };
});

// src/i18n/en-GB.json
var require_en_GB = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Bin+",
    ACTION_THROW: "Put in Trashbin",
    ACTION_UNTHROW: "Remove from Trash",
    ACTION_CLEAR: "Clear",
    ACTION_COPY: "Copy",
    ACTION_EXPORT: "Export",
    ACTION_IMPORT: "Import",
    MESSAGE_COPIED: "Copied to clipboard",
    MESSAGE_CLEARED: "Trashbin cleared successfully!",
    MESSAGE_SONG_ADDED: "Song added to bin",
    MESSAGE_SONG_REMOVED: "Song removed from trash",
    MESSAGE_ARTIST_ADDED: "Artist added to trash bin",
    MESSAGE_ARTIST_REMOVED: "Artist removed from rubbish bin",
    BACKUP_SAVE_SUCCESS: "Backup saved successfully.",
    BACKUP_SAVE_FAILED: "Failed to save backup; try copying trashbin contents to clipboard and creating a backup manually.",
    BACKUP_RESTORE_SUCCESS: "Backup restored successfully.",
    BACKUP_FILE_READ_FAILED: "Failed to read file; please ensure it is a valid JSON file.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Trashbin+ Settings",
    SETTINGS_OPTIONS: "Options",
    SETTINGS_FEATURES: "Features",
    SETTINGS_STORAGE: "Storage",
    SETTINGS_ENABLED: "Enabled",
    SETTINGS_SHOW_WIDGET: "Show Widget Icon",
    SETTINGS_AUTOPLAY: "Autoplay on Start",
    SETTINGS_QUEUE_TRASHBIN: "Enable Queue Trashbin",
    SETTINGS_TRACKLIST_TRASHBIN: "Enable Tracklist Trash Bin",
    SETTINGS_PLAYLIST_MONITOR: "Playlist Monitor",
    ITEMS_TITLE: "Trashbin+ Items",
    ITEMS_EMPTY_SONGS: "<strong>No deleted songs!</strong><br/>Songs you add to the bin will appear here.",
    ITEMS_EMPTY_ARTISTS: "<strong>No artists in the bin!</strong><br/>Artists you add to the trashbin will appear here.",
    ITEMS_TAB_SONGS: "Songs",
    ITEMS_TAB_ARTISTS: "Artists",
    ITEMS_LOADED_COUNT: "{{loaded}} of {{total}} {{type}} loaded",
    ITEMS_SEARCH_PLACEHOLDER: "Search by name, artist, or URI...",
    DESCRIPTION_COPY: "Copy all items in the bin to the clipboard.",
    DESCRIPTION_EXPORT: "Save all items in the trashbin to a .json file.",
    DESCRIPTION_IMPORT: "Overwrite all items in the bin via .json file.",
    DESCRIPTION_CLEAR: "Empty all items from the trash (cannot be undone).",
    ITEMS_EMPTY_SONGS_TITLE: "No deleted songs!",
    ITEMS_EMPTY_ARTISTS_TITLE: "No artists trashed!",
    DESCRIPTION_SETTINGS_ENABLED: "Master switch to enable or disable all Trashbin+ functionality",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Display a rubbish icon in the playback bar next to the currently playing track for quick access",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Automatically start playing music when Spotify opens or the extension loads",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Add bin icons next to each song in your upcoming queue for easy management",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Add bin icons next to songs in album and playlist views for quick filtering",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Automatically recover from Spotify playback glitches by resuming your last playlist",
    SETTINGS_SKIP_TRASHED_TRACKS: "Skip Trashed Tracks",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Automatically skip deleted songs and find the next available track during playback",
    SETTINGS_AUTO_CLEAN_QUEUE: "Auto Clean Queue",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Automatically remove deleted songs from your Smart Shuffle queue",
    SETTINGS_REMOTE_CONTROL: "Remote Control",
    SETTINGS_REMOTE_TOGGLE: "Enable Remote Toggle",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Double-tap play/pause on your mobile to toggle remote skipping on/off. A track skip confirms the toggle.",
    SETTINGS_REMOTE_SKIPPING: "Remote Skipping Active",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "When enabled, trash-skipping works even when controlling Spotify from another device (e.g. mobile)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Remote skipping enabled",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Remote skipping disabled",
    MESSAGE_SONG_ADDED_REMOTE: "Song trashed via remote",
    SETTINGS_TRASH_VIA_LIKE: "Rubbish via Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Like a song from mobile to trash it. Automatically unlikes and skips to the next track.",
    SETTINGS_AI_DETECTION: "AI Detection",
    SETTINGS_AI_DETECTION_ENABLED: "AI Song Detection",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Detect AI-generated songs using the SONICS model and display a probability indicator. Downloads a ~50MB model when first enabled.",
    AI_ASSETS_DOWNLOADING: "Downloading AI model...",
    AI_ASSETS_READY: "AI model ready",
    AI_ASSETS_NOT_READY: "AI model not available",
    SETTINGS_TRASH_AI_SONGS: "Trash AI Songs",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Automatically move songs detected as AI-generated (probability ≥ 80%) to trash",
    DESCRIPTION_CLEAR_AI_STORAGE: "Clear all stored AI classification results ({{count}} songs stored).",
    ACTION_CLEAR_AI_STORAGE: "Clear",
    MESSAGE_AI_STORAGE_CLEARED: "AI results cleared",
    AI_TIER_LIKELY_HUMAN: "Likely Human",
    AI_TIER_PROBABLY_HUMAN: "Probably Human",
    AI_TIER_UNCERTAIN: "Uncertain",
    AI_TIER_PROBABLY_AI: "Probably AI",
    AI_TIER_LIKELY_AI: "Likely AI",
    ACTION_REMOVE_TRASHED: "Remove deleted songs",
    CONFIRM_REMOVE_TRASHED: "Remove {{count}} trashed song(s) from this playlist? This cannot be undone.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Removed {{count}} trashed song(s) from playlist",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "No trashed songs found in this playlist"
  };
});

// src/i18n/en.json
var require_en = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Trashbin+",
    ACTION_THROW: "Place in Trashbin",
    ACTION_UNTHROW: "Remove from Trashbin",
    ACTION_CLEAR: "Clear",
    ACTION_COPY: "Copy",
    ACTION_EXPORT: "Export",
    ACTION_IMPORT: "Import",
    MESSAGE_COPIED: "Copied to clipboard",
    MESSAGE_CLEARED: "Trashbin cleared successfully!",
    MESSAGE_SONG_ADDED: "Song added to trashbin",
    MESSAGE_SONG_REMOVED: "Song removed from trashbin",
    MESSAGE_ARTIST_ADDED: "Artist added to trashbin",
    MESSAGE_ARTIST_REMOVED: "Artist removed from trashbin",
    BACKUP_SAVE_SUCCESS: "Backup saved successfully.",
    BACKUP_SAVE_FAILED: "Failed to save backup, try copying trashbin contents to clipboard and creating a backup manually.",
    BACKUP_RESTORE_SUCCESS: "Backup restored successfully.",
    BACKUP_FILE_READ_FAILED: "Failed to read file, please ensure it is a valid JSON file.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Trashbin+ Settings",
    SETTINGS_OPTIONS: "Options",
    SETTINGS_FEATURES: "Features",
    SETTINGS_STORAGE: "Storage",
    SETTINGS_ENABLED: "Enabled",
    SETTINGS_SHOW_WIDGET: "Show Widget Icon",
    SETTINGS_AUTOPLAY: "Autoplay on Start",
    SETTINGS_QUEUE_TRASHBIN: "Enable Queue Trashbin",
    SETTINGS_TRACKLIST_TRASHBIN: "Enable Tracklist Trashbin",
    SETTINGS_PLAYLIST_MONITOR: "Playlist Monitor",
    ITEMS_TITLE: "Trashbin+ Items",
    ITEMS_EMPTY_SONGS: "<strong>No trashed songs!</strong><br/>Songs you add to the trashbin will appear here.",
    ITEMS_EMPTY_ARTISTS: "<strong>No trashed artists!</strong><br/>Artists you add to the trashbin will appear here.",
    ITEMS_TAB_SONGS: "Songs",
    ITEMS_TAB_ARTISTS: "Artists",
    ITEMS_LOADED_COUNT: "{{loaded}} of {{total}} {{type}} loaded",
    ITEMS_SEARCH_PLACEHOLDER: "Search by name, artist, or URI...",
    DESCRIPTION_COPY: "Copy all items in trashbin to clipboard.",
    DESCRIPTION_EXPORT: "Save all items in trashbin to a .json file.",
    DESCRIPTION_IMPORT: "Overwrite all items in trashbin via .json file.",
    DESCRIPTION_CLEAR: "Clear all items from trashbin (cannot be reverted).",
    ITEMS_EMPTY_SONGS_TITLE: "No trashed songs!",
    ITEMS_EMPTY_ARTISTS_TITLE: "No trashed artists!",
    DESCRIPTION_SETTINGS_ENABLED: "Master toggle to enable or disable all Trashbin+ functionality",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Display a trash icon in the playback bar next to the currently playing track for quick access",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Automatically start playing music when Spotify opens or the extension loads",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Add trash icons next to each song in your upcoming queue for easy management",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Add trash icons next to songs in album and playlist views for quick filtering",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Automatically recover from Spotify playback glitches by resuming your last playlist",
    SETTINGS_SKIP_TRASHED_TRACKS: "Skip Trashed Tracks",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Automatically skip trashed songs and find the next allowed track during playback",
    SETTINGS_AUTO_CLEAN_QUEUE: "Auto Clean Queue",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Automatically remove trashed songs from your Smart Shuffle queue",
    SETTINGS_REMOTE_CONTROL: "Remote Control",
    SETTINGS_REMOTE_TOGGLE: "Enable Remote Toggle",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Double-tap play/pause from mobile to toggle remote skipping on/off. A track skip confirms the toggle.",
    SETTINGS_REMOTE_SKIPPING: "Remote Skipping Active",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "When enabled, trash-skipping works even when controlling Spotify from another device (e.g., mobile)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Remote skipping enabled",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Remote skipping disabled",
    MESSAGE_SONG_ADDED_REMOTE: "Song trashed via remote",
    SETTINGS_TRASH_VIA_LIKE: "Trash via Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Like a song from mobile to trash it. Automatically unlikes and skips to next track.",
    SETTINGS_AI_DETECTION: "AI Detection",
    SETTINGS_AI_DETECTION_ENABLED: "AI Song Detection",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Detect AI-generated songs using the SONICS model and show a probability indicator. Downloads ~50MB model on first enable.",
    AI_ASSETS_DOWNLOADING: "Downloading AI model...",
    AI_ASSETS_READY: "AI model ready",
    AI_ASSETS_NOT_READY: "AI model not available",
    SETTINGS_TRASH_AI_SONGS: "Trash AI Songs",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Automatically trash songs detected as AI-generated (probability ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Clear all stored AI classification results ({{count}} songs stored).",
    ACTION_CLEAR_AI_STORAGE: "Clear",
    MESSAGE_AI_STORAGE_CLEARED: "AI results cleared",
    AI_TIER_LIKELY_HUMAN: "Likely Human",
    AI_TIER_PROBABLY_HUMAN: "Probably Human",
    AI_TIER_UNCERTAIN: "Uncertain",
    AI_TIER_PROBABLY_AI: "Probably AI",
    AI_TIER_LIKELY_AI: "Likely AI",
    ACTION_REMOVE_TRASHED: "Remove trashed songs",
    CONFIRM_REMOVE_TRASHED: "Remove {{count}} trashed song(s) from this playlist? This cannot be undone.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Removed {{count}} trashed song(s) from playlist",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "No trashed songs found in this playlist",
    AI_WIDGET_LABEL: "AI Detection",
    AI_WIDGET_ANALYZING: "Analyzing...",
    AI_WIDGET_PERCENT: "{{pct}}% AI",
    ACTION_CANCEL: "Cancel",
    ACTION_REMOVE: "Remove",
    MESSAGE_REMOVE_TRASHED_FAILED: "Failed to remove trashed songs",
    TOOLTIP_COPY_URI: "Click to copy URI",
    TOOLTIP_REMOVE_TRASHBIN: "Remove from trashbin",
    TOOLTIP_AUTO_ADD: "Auto-add recommendations"
  };
});

// src/i18n/es-419.json
var require_es_419 = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Papelera+",
    ACTION_THROW: "Colocar en la papelera",
    ACTION_UNTHROW: "Eliminar de la Papelera",
    ACTION_CLEAR: "Claro",
    ACTION_COPY: "Copiar",
    ACTION_EXPORT: "Exportar",
    ACTION_IMPORT: "Importar",
    MESSAGE_COPIED: "Copiado al portapapeles",
    MESSAGE_CLEARED: "¡Papelera vaciada con éxito!",
    MESSAGE_SONG_ADDED: "Canción agregada a la papelera",
    MESSAGE_SONG_REMOVED: "Canción eliminada de la papelera",
    MESSAGE_ARTIST_ADDED: "Artista agregado a la papelera",
    MESSAGE_ARTIST_REMOVED: "Artista eliminado de la papelera",
    BACKUP_SAVE_SUCCESS: "Copia de seguridad guardada exitosamente.",
    BACKUP_SAVE_FAILED: "No se pudo guardar la copia de seguridad, intente copiar el contenido de la papelera al portapapeles y crear una copia de seguridad manualmente.",
    BACKUP_RESTORE_SUCCESS: "Copia de respaldo restaurada correctamente.",
    BACKUP_FILE_READ_FAILED: "No se pudo leer el archivo, asegúrese de que sea un archivo JSON válido.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-basurero.json",
    SETTINGS_TITLE: "Configuración de Trashbin+",
    SETTINGS_OPTIONS: "Opciones",
    SETTINGS_FEATURES: "Características",
    SETTINGS_STORAGE: "Almacenamiento",
    SETTINGS_ENABLED: "Habilitado",
    SETTINGS_SHOW_WIDGET: "Mostrar icono del widget",
    SETTINGS_AUTOPLAY: "Reproducción automática al iniciar",
    SETTINGS_QUEUE_TRASHBIN: "Habilitar la papelera de la cola",
    SETTINGS_TRACKLIST_TRASHBIN: "Habilitar Papelera de la Lista de Pistas",
    SETTINGS_PLAYLIST_MONITOR: "Monitor de listas de reproducción",
    ITEMS_TITLE: "Elementos de la papelera+",
    ITEMS_EMPTY_SONGS: "<strong>¡No hay canciones eliminadas!</strong><br/>Las canciones que agregues a la papelera aparecerán aquí.",
    ITEMS_EMPTY_ARTISTS: "<strong>¡Ningún artista en la basura!</strong><br/>Los artistas que agregues a la papelera aparecerán aquí.",
    ITEMS_TAB_SONGS: "Canciones",
    ITEMS_TAB_ARTISTS: "Artistas",
    ITEMS_LOADED_COUNT: "{{loaded}} de {{total}} {{type}} cargado",
    ITEMS_SEARCH_PLACEHOLDER: "Buscar por nombre, artista o URI...",
    DESCRIPTION_COPY: "Copiar todos los elementos de la papelera al portapapeles.",
    DESCRIPTION_EXPORT: "Guardar todos los elementos en la papelera en un archivo .json.",
    DESCRIPTION_IMPORT: "Sobrescribir todos los elementos en la papelera mediante el archivo .json.",
    DESCRIPTION_CLEAR: "Eliminar todos los elementos de la papelera (no se puede deshacer).",
    ITEMS_EMPTY_SONGS_TITLE: "¡Ninguna canción eliminada!",
    ITEMS_EMPTY_ARTISTS_TITLE: "¡Ningún artista eliminado!",
    DESCRIPTION_SETTINGS_ENABLED: "Conmutador principal para activar o desactivar todas las funciones de Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Mostrar un icono de papelera en la barra de reproducción junto a la pista que se está reproduciendo para un acceso rápido",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Iniciar automáticamente la reproducción de música cuando se abre Spotify o se carga la extensión",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Agrega íconos de basura junto a cada canción en tu cola próxima para una gestión fácil",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Agregar iconos de basura junto a las canciones en las vistas de álbum y lista de reproducción para filtrado rápido",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Recupérate automáticamente de errores en la reproducción de Spotify al reanudar tu última lista de reproducción",
    SETTINGS_SKIP_TRASHED_TRACKS: "Omitir pistas eliminadas",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Omitir automáticamente las canciones eliminadas y encontrar la siguiente pista permitida durante la reproducción",
    SETTINGS_AUTO_CLEAN_QUEUE: "Cola de limpieza automática",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Eliminar automáticamente canciones eliminadas de tu cola de reproducción aleatoria inteligente",
    SETTINGS_REMOTE_CONTROL: "Control remoto",
    SETTINGS_REMOTE_TOGGLE: "Habilitar conmutación remota",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Toca dos veces reproducir/pausa desde el móvil para activar o desactivar el salto remoto. Saltar una pista confirma el cambio.",
    SETTINGS_REMOTE_SKIPPING: "Omisión remota activa",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Cuando está activado, omitir la basura funciona incluso cuando se controla Spotify desde otro dispositivo (por ejemplo, móvil).",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Omisión remota habilitada",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Omisión remota desactivada",
    MESSAGE_SONG_ADDED_REMOTE: "Canción eliminada mediante control remoto",
    SETTINGS_TRASH_VIA_LIKE: "Basura mediante Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Como una canción desde el móvil hasta la papelera. Automáticamente deja de gustar y pasa a la siguiente pista.",
    SETTINGS_AI_DETECTION: "Detección de IA",
    SETTINGS_AI_DETECTION_ENABLED: "Detección de canciones con IA",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Detecta canciones generadas por IA usando el modelo SONICS y muestra un indicador de probabilidad. Descarga un modelo de ~50 MB al activarlo por primera vez.",
    AI_ASSETS_DOWNLOADING: "Descargando modelo de IA...",
    AI_ASSETS_READY: "Modelo de IA listo",
    AI_ASSETS_NOT_READY: "Modelo de IA no disponible",
    SETTINGS_TRASH_AI_SONGS: "Canciones de IA basura",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Eliminar automáticamente canciones detectadas como generadas por IA (probabilidad ≥ 80 %)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Borrar todos los resultados almacenados de clasificación de IA ({{count}} canciones almacenadas).",
    ACTION_CLEAR_AI_STORAGE: "Claro",
    MESSAGE_AI_STORAGE_CLEARED: "Los resultados de IA están despejados",
    AI_TIER_LIKELY_HUMAN: "Probablemente humano",
    AI_TIER_PROBABLY_HUMAN: "Probablemente humano",
    AI_TIER_UNCERTAIN: "Incierto",
    AI_TIER_PROBABLY_AI: "Probablemente IA",
    AI_TIER_LIKELY_AI: "Inteligencia Artificial probable",
    ACTION_REMOVE_TRASHED: "Eliminar canciones eliminadas",
    CONFIRM_REMOVE_TRASHED: "¿Eliminar {{count}} canción(es) eliminada(s) de esta lista de reproducción? Esta acción no se puede deshacer.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Se eliminaron {{count}} canción(es) de la papelera de la lista de reproducción",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "No se encontraron canciones eliminadas en esta lista de reproducción"
  };
});

// src/i18n/es-AR.json
var require_es_AR = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Papelera+",
    ACTION_THROW: "Colocar en la papelera",
    ACTION_UNTHROW: "Eliminar de la papelera",
    ACTION_CLEAR: "Claro",
    ACTION_COPY: "Copiar",
    ACTION_EXPORT: "Exportar",
    ACTION_IMPORT: "Importar",
    MESSAGE_COPIED: "Copiado al portapapeles",
    MESSAGE_CLEARED: "¡Papelera vaciada con éxito!",
    MESSAGE_SONG_ADDED: "Canción agregada a la papelera",
    MESSAGE_SONG_REMOVED: "Canción eliminada de la papelera",
    MESSAGE_ARTIST_ADDED: "Artista agregado a la papelera",
    MESSAGE_ARTIST_REMOVED: "Artista eliminado de la papelera",
    BACKUP_SAVE_SUCCESS: "Copia de seguridad guardada con éxito.",
    BACKUP_SAVE_FAILED: "No se pudo guardar la copia de seguridad, intente copiar el contenido de la papelera al portapapeles y crear una copia de seguridad manualmente.",
    BACKUP_RESTORE_SUCCESS: "Copia de seguridad restaurada con éxito.",
    BACKUP_FILE_READ_FAILED: "No se pudo leer el archivo, asegúrese de que sea un archivo JSON válido.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-basurero.json",
    SETTINGS_TITLE: "Configuración de Trashbin+",
    SETTINGS_OPTIONS: "Opciones",
    SETTINGS_FEATURES: "Características",
    SETTINGS_STORAGE: "Almacenamiento",
    SETTINGS_ENABLED: "Habilitado",
    SETTINGS_SHOW_WIDGET: "Mostrar ícono del widget",
    SETTINGS_AUTOPLAY: "Reproducción automática al iniciar",
    SETTINGS_QUEUE_TRASHBIN: "Habilitar la papelera de la cola",
    SETTINGS_TRACKLIST_TRASHBIN: "Habilitar Papelera de la Lista de Pistas",
    SETTINGS_PLAYLIST_MONITOR: "Monitor de listas de reproducción",
    ITEMS_TITLE: "Elementos de Papelera+",
    ITEMS_EMPTY_SONGS: "<strong>¡No hay canciones en la papelera!</strong><br/>Las canciones que agregues a la papelera aparecerán aquí.",
    ITEMS_EMPTY_ARTISTS: "<strong>¡Ningún artista en la basura!</strong><br/>Los artistas que agregues a la papelera aparecerán aquí.",
    ITEMS_TAB_SONGS: "Canciones",
    ITEMS_TAB_ARTISTS: "Artistas",
    ITEMS_LOADED_COUNT: "{{loaded}} de {{total}} {{type}} cargados",
    ITEMS_SEARCH_PLACEHOLDER: "Buscar por nombre, artista o URI...",
    DESCRIPTION_COPY: "Copiar todos los elementos de la papelera al portapapeles.",
    DESCRIPTION_EXPORT: "Guardar todos los elementos en la papelera en un archivo .json.",
    DESCRIPTION_IMPORT: "Sobrescribir todos los elementos en la papelera mediante archivo .json.",
    DESCRIPTION_CLEAR: "Eliminar todos los elementos de la papelera (no se puede deshacer).",
    ITEMS_EMPTY_SONGS_TITLE: "¡Ninguna canción eliminada!",
    ITEMS_EMPTY_ARTISTS_TITLE: "¡Nada de artistas basura!",
    DESCRIPTION_SETTINGS_ENABLED: "Conmutador principal para activar o desactivar todas las funciones de Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Mostrar un icono de papelera en la barra de reproducción junto a la pista que se está reproduciendo para un acceso rápido",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Iniciar automáticamente la reproducción de música cuando se abre Spotify o se carga la extensión",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Agregar íconos de basura al lado de cada canción en tu cola próxima para una gestión fácil",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Agregar íconos de basura junto a las canciones en las vistas de álbum y lista de reproducción para filtrar rápidamente",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Recupérate automáticamente de fallos en la reproducción de Spotify reanudando tu última lista de reproducción",
    SETTINGS_SKIP_TRASHED_TRACKS: "Omitir pistas eliminadas",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Omitir automáticamente las canciones eliminadas y encontrar la siguiente pista permitida durante la reproducción",
    SETTINGS_AUTO_CLEAN_QUEUE: "Cola de limpieza automática",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Eliminar automáticamente las canciones eliminadas de tu cola de reproducción aleatoria inteligente",
    SETTINGS_REMOTE_CONTROL: "Control remoto",
    SETTINGS_REMOTE_TOGGLE: "Habilitar conmutación remota",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Toca dos veces reproducir/pausa desde el móvil para activar o desactivar el salto remoto de pistas. Saltar una pista confirma el cambio.",
    SETTINGS_REMOTE_SKIPPING: "Omisión remota activa",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Cuando está activado, omitir la papelera funciona incluso cuando se controla Spotify desde otro dispositivo (por ejemplo, móvil)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Salto remoto habilitado",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Salto remoto desactivado",
    MESSAGE_SONG_ADDED_REMOTE: "Canción eliminada mediante control remoto",
    SETTINGS_TRASH_VIA_LIKE: "Basura a través de Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: 'Como una canción desde el móvil hasta la papelera. Automáticamente quita el "me gusta" y pasa a la siguiente pista.',
    SETTINGS_AI_DETECTION: "Detección de IA",
    SETTINGS_AI_DETECTION_ENABLED: "Detección de canciones con IA",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Detecta canciones generadas por IA usando el modelo SONICS y muestra un indicador de probabilidad. Descarga un modelo de ~50 MB al activarlo por primera vez.",
    AI_ASSETS_DOWNLOADING: "Descargando modelo de IA...",
    AI_ASSETS_READY: "Modelo de IA listo",
    AI_ASSETS_NOT_READY: "Modelo de IA no disponible",
    SETTINGS_TRASH_AI_SONGS: "Canciones de IA basura",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Eliminar automáticamente canciones detectadas como generadas por IA (probabilidad ≥ 80 %)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Borrar todos los resultados de clasificación de IA almacenados ({{count}} canciones almacenadas).",
    ACTION_CLEAR_AI_STORAGE: "Claro",
    MESSAGE_AI_STORAGE_CLEARED: "Los resultados de IA fueron aprobados",
    AI_TIER_LIKELY_HUMAN: "Probablemente humano",
    AI_TIER_PROBABLY_HUMAN: "Probablemente humano",
    AI_TIER_UNCERTAIN: "Incierto",
    AI_TIER_PROBABLY_AI: "Probablemente IA",
    AI_TIER_LIKELY_AI: "Inteligencia Artificial probable",
    ACTION_REMOVE_TRASHED: "Eliminar canciones eliminadas",
    CONFIRM_REMOVE_TRASHED: "¿Eliminar {{count}} canción(es) de la papelera de esta lista de reproducción? Esta acción no se puede deshacer.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Se eliminaron {{count}} canción(es) de la papelera de la lista de reproducción",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "No se encontraron canciones eliminadas en esta lista de reproducción"
  };
});

// src/i18n/es-MX.json
var require_es_MX = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Papelera+",
    ACTION_THROW: "Colocar en la papelera",
    ACTION_UNTHROW: "Eliminar de la Papelera",
    ACTION_CLEAR: "Claro",
    ACTION_COPY: "Copiar",
    ACTION_EXPORT: "Exportar",
    ACTION_IMPORT: "Importar",
    MESSAGE_COPIED: "Copiado al portapapeles",
    MESSAGE_CLEARED: "¡Papelera vaciada con éxito!",
    MESSAGE_SONG_ADDED: "Canción agregada a la papelera",
    MESSAGE_SONG_REMOVED: "Canción eliminada de la papelera",
    MESSAGE_ARTIST_ADDED: "Artista agregado a la papelera",
    MESSAGE_ARTIST_REMOVED: "Artista eliminado de la papelera",
    BACKUP_SAVE_SUCCESS: "Copia de seguridad guardada correctamente.",
    BACKUP_SAVE_FAILED: "No se pudo guardar la copia de seguridad, intenta copiar el contenido de la papelera al portapapeles y crear una copia de seguridad manualmente.",
    BACKUP_RESTORE_SUCCESS: "Copia de seguridad restaurada correctamente.",
    BACKUP_FILE_READ_FAILED: "No se pudo leer el archivo, asegúrese de que sea un archivo JSON válido.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-basurero.json",
    SETTINGS_TITLE: "Configuración de Trashbin+",
    SETTINGS_OPTIONS: "Opciones",
    SETTINGS_FEATURES: "Características",
    SETTINGS_STORAGE: "Almacenamiento",
    SETTINGS_ENABLED: "Habilitado",
    SETTINGS_SHOW_WIDGET: "Mostrar icono del widget",
    SETTINGS_AUTOPLAY: "Reproducción automática al iniciar",
    SETTINGS_QUEUE_TRASHBIN: "Habilitar la papelera de la cola",
    SETTINGS_TRACKLIST_TRASHBIN: "Habilitar la papelera de la lista de pistas",
    SETTINGS_PLAYLIST_MONITOR: "Monitor de listas de reproducción",
    ITEMS_TITLE: "Artículos de la papelera+",
    ITEMS_EMPTY_SONGS: "<strong>¡No hay canciones en la papelera!</strong><br/>Las canciones que agregues a la papelera aparecerán aquí.",
    ITEMS_EMPTY_ARTISTS: "<strong>¡Ningún artista en la basura!</strong><br/>Los artistas que agregues a la papelera aparecerán aquí.",
    ITEMS_TAB_SONGS: "Canciones",
    ITEMS_TAB_ARTISTS: "Artistas",
    ITEMS_LOADED_COUNT: "{{loaded}} de {{total}} {{type}} cargados",
    ITEMS_SEARCH_PLACEHOLDER: "Buscar por nombre, artista o URI...",
    DESCRIPTION_COPY: "Copiar todos los elementos de la papelera al portapapeles.",
    DESCRIPTION_EXPORT: "Guardar todos los elementos en la papelera en un archivo .json.",
    DESCRIPTION_IMPORT: "Sobrescribir todos los elementos en la papelera mediante el archivo .json.",
    DESCRIPTION_CLEAR: "Eliminar todos los elementos de la papelera (no se puede deshacer).",
    ITEMS_EMPTY_SONGS_TITLE: "¡No hay canciones eliminadas!",
    ITEMS_EMPTY_ARTISTS_TITLE: "¡Ningún artista eliminado!",
    DESCRIPTION_SETTINGS_ENABLED: "Conmutador principal para activar o desactivar todas las funciones de Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Mostrar un icono de papelera en la barra de reproducción junto a la pista que se está reproduciendo para un acceso rápido",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Iniciar automáticamente la reproducción de música cuando se abra Spotify o se cargue la extensión",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Agrega íconos de basura junto a cada canción en tu cola próxima para una gestión fácil",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Agregar iconos de basura junto a las canciones en las vistas de álbum y lista de reproducción para filtrado rápido",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Recupérate automáticamente de errores en la reproducción de Spotify al reanudar tu última lista de reproducción",
    SETTINGS_SKIP_TRASHED_TRACKS: "Omitir pistas eliminadas",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Omitir automáticamente las canciones eliminadas y encontrar la siguiente pista permitida durante la reproducción",
    SETTINGS_AUTO_CLEAN_QUEUE: "Cola de limpieza automática",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Eliminar automáticamente las canciones eliminadas de tu lista de reproducción inteligente",
    SETTINGS_REMOTE_CONTROL: "Control remoto",
    SETTINGS_REMOTE_TOGGLE: "Habilitar conmutación remota",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Toca dos veces reproducir/pausa desde el móvil para activar o desactivar el salto remoto de pistas. Saltar una pista confirma el cambio.",
    SETTINGS_REMOTE_SKIPPING: "Omisión remota activa",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Cuando está activado, omitir la papelera funciona incluso cuando se controla Spotify desde otro dispositivo (por ejemplo, móvil)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Omisión remota habilitada",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Salto remoto desactivado",
    MESSAGE_SONG_ADDED_REMOTE: "Canción eliminada mediante control remoto",
    SETTINGS_TRASH_VIA_LIKE: "Basura a través de Me gusta",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: 'Como una canción desde el móvil hasta la papelera. Automáticamente quita la marca de "me gusta" y pasa a la siguiente pista.',
    SETTINGS_AI_DETECTION: "Detección de IA",
    SETTINGS_AI_DETECTION_ENABLED: "Detección de canciones mediante IA",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Detecta canciones generadas por IA usando el modelo SONICS y muestra un indicador de probabilidad. Descarga un modelo de ~50 MB al activarlo por primera vez.",
    AI_ASSETS_DOWNLOADING: "Descargando modelo de IA...",
    AI_ASSETS_READY: "Modelo de IA listo",
    AI_ASSETS_NOT_READY: "Modelo de IA no disponible",
    SETTINGS_TRASH_AI_SONGS: "Canciones de IA basura",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Eliminar automáticamente canciones detectadas como generadas por IA (probabilidad ≥ 80 %)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Borrar todos los resultados almacenados de clasificación de IA ({{count}} canciones almacenadas).",
    ACTION_CLEAR_AI_STORAGE: "Claro",
    MESSAGE_AI_STORAGE_CLEARED: "Resultados de IA aprobados",
    AI_TIER_LIKELY_HUMAN: "Probablemente humano",
    AI_TIER_PROBABLY_HUMAN: "Probablemente humano",
    AI_TIER_UNCERTAIN: "Incierto",
    AI_TIER_PROBABLY_AI: "Probablemente IA",
    AI_TIER_LIKELY_AI: "IA probable",
    ACTION_REMOVE_TRASHED: "Eliminar canciones eliminadas",
    CONFIRM_REMOVE_TRASHED: "¿Eliminar {{count}} canción(es) de la papelera de esta lista de reproducción? Esta acción no se puede deshacer.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Se eliminaron {{count}} canción(es) de la lista de reproducción de la papelera",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "No se encontraron canciones eliminadas en esta lista de reproducción"
  };
});

// src/i18n/es.json
var require_es = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Papelera+",
    ACTION_THROW: "Colocar en la papelera",
    ACTION_UNTHROW: "Eliminar de la Papelera",
    ACTION_CLEAR: "Claro",
    ACTION_COPY: "Copiar",
    ACTION_EXPORT: "Exportar",
    ACTION_IMPORT: "Importar",
    MESSAGE_COPIED: "Copiado al portapapeles",
    MESSAGE_CLEARED: "¡Papelera vaciada con éxito!",
    MESSAGE_SONG_ADDED: "Canción agregada a la papelera",
    MESSAGE_SONG_REMOVED: "Canción eliminada de la papelera",
    MESSAGE_ARTIST_ADDED: "Artista agregado a la papelera",
    MESSAGE_ARTIST_REMOVED: "Artista eliminado de la papelera",
    BACKUP_SAVE_SUCCESS: "Copia de seguridad guardada correctamente.",
    BACKUP_SAVE_FAILED: "No se pudo guardar la copia de seguridad, intente copiar el contenido de la papelera al portapapeles y crear una copia de seguridad manualmente.",
    BACKUP_RESTORE_SUCCESS: "Copia de seguridad restaurada con éxito.",
    BACKUP_FILE_READ_FAILED: "No se pudo leer el archivo, asegúrese de que sea un archivo JSON válido.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Configuración de Trashbin+",
    SETTINGS_OPTIONS: "Opciones",
    SETTINGS_FEATURES: "Características",
    SETTINGS_STORAGE: "Almacenamiento",
    SETTINGS_ENABLED: "Habilitado",
    SETTINGS_SHOW_WIDGET: "Mostrar icono del widget",
    SETTINGS_AUTOPLAY: "Reproducción automática al iniciar",
    SETTINGS_QUEUE_TRASHBIN: "Habilitar la papelera de la cola",
    SETTINGS_TRACKLIST_TRASHBIN: "Habilitar la papelera de la lista de pistas",
    SETTINGS_PLAYLIST_MONITOR: "Monitor de lista de reproducción",
    ITEMS_TITLE: "Elementos de la papelera+",
    ITEMS_EMPTY_SONGS: "<strong>¡No hay canciones en la papelera!</strong><br/>Las canciones que agregues a la papelera aparecerán aquí.",
    ITEMS_EMPTY_ARTISTS: "<strong>¡Ningún artista en la papelera!</strong><br/>Los artistas que agregues a la papelera aparecerán aquí.",
    ITEMS_TAB_SONGS: "Canciones",
    ITEMS_TAB_ARTISTS: "Artistas",
    ITEMS_LOADED_COUNT: "{{loaded}} de {{total}} {{type}} cargados",
    ITEMS_SEARCH_PLACEHOLDER: "Buscar por nombre, artista o URI...",
    DESCRIPTION_COPY: "Copiar todos los elementos de la papelera al portapapeles.",
    DESCRIPTION_EXPORT: "Guardar todos los elementos en la papelera en un archivo .json.",
    DESCRIPTION_IMPORT: "Sobrescribir todos los elementos en la papelera mediante el archivo .json.",
    DESCRIPTION_CLEAR: "Eliminar todos los elementos de la papelera (no se puede deshacer).",
    ITEMS_EMPTY_SONGS_TITLE: "¡No hay canciones eliminadas!",
    ITEMS_EMPTY_ARTISTS_TITLE: "¡Nada de artistas eliminados!",
    DESCRIPTION_SETTINGS_ENABLED: "Conmutador principal para activar o desactivar todas las funciones de Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Mostrar un icono de papelera en la barra de reproducción junto a la pista que se está reproduciendo para un acceso rápido",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Iniciar automáticamente la reproducción de música cuando se abra Spotify o se cargue la extensión",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Agrega iconos de basura junto a cada canción en tu cola próxima para una gestión fácil",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Agregar iconos de papelera junto a las canciones en las vistas de álbum y lista de reproducción para filtrado rápido",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Recupérate automáticamente de los fallos de reproducción en Spotify reanudando tu última lista de reproducción",
    SETTINGS_SKIP_TRASHED_TRACKS: "Omitir pistas eliminadas",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Omitir automáticamente las canciones eliminadas y encontrar la siguiente pista permitida durante la reproducción",
    SETTINGS_AUTO_CLEAN_QUEUE: "Cola de limpieza automática",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Eliminar automáticamente las canciones eliminadas de tu cola de reproducción aleatoria inteligente",
    SETTINGS_REMOTE_CONTROL: "Control remoto",
    SETTINGS_REMOTE_TOGGLE: "Habilitar conmutación remota",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Toca dos veces en reproducir/pausa desde el móvil para activar o desactivar el salto remoto de pistas. Un salto de pista confirma el cambio.",
    SETTINGS_REMOTE_SKIPPING: "Omisión remota activa",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Cuando está activado, omitir la papelera funciona incluso cuando se controla Spotify desde otro dispositivo (por ejemplo, móvil)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Omisión remota habilitada",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Omisión remota desactivada",
    MESSAGE_SONG_ADDED_REMOTE: "Canción eliminada mediante control remoto",
    SETTINGS_TRASH_VIA_LIKE: "Basura a través de Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: 'Como una canción desde el móvil hasta la papelera. Automáticamente quita el "me gusta" y pasa a la siguiente pista.',
    SETTINGS_AI_DETECTION: "Detección de IA",
    SETTINGS_AI_DETECTION_ENABLED: "Detección de canciones mediante IA",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Detecta canciones generadas por IA usando el modelo SONICS y muestra un indicador de probabilidad. Descarga un modelo de ~50 MB al activarlo por primera vez.",
    AI_ASSETS_DOWNLOADING: "Descargando modelo de IA...",
    AI_ASSETS_READY: "Modelo de IA listo",
    AI_ASSETS_NOT_READY: "Modelo de IA no disponible",
    SETTINGS_TRASH_AI_SONGS: "Canciones de IA basura",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Eliminar automáticamente canciones detectadas como generadas por IA (probabilidad ≥ 80 %)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Borrar todos los resultados almacenados de clasificación de IA ({{count}} canciones almacenadas).",
    ACTION_CLEAR_AI_STORAGE: "Claro",
    MESSAGE_AI_STORAGE_CLEARED: "Resultados de IA aprobados",
    AI_TIER_LIKELY_HUMAN: "Probablemente humano",
    AI_TIER_PROBABLY_HUMAN: "Probablemente humano",
    AI_TIER_UNCERTAIN: "Incierto",
    AI_TIER_PROBABLY_AI: "Probablemente IA",
    AI_TIER_LIKELY_AI: "IA probable",
    ACTION_REMOVE_TRASHED: "Eliminar canciones eliminadas",
    CONFIRM_REMOVE_TRASHED: "¿Eliminar {{count}} canción(es) eliminada(s) de esta lista de reproducción? Esta acción no se puede deshacer.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Se eliminaron {{count}} canción(es) de la papelera de la lista de reproducción",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "No se encontraron canciones eliminadas en esta lista de reproducción"
  };
});

// src/i18n/et.json
var require_et = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Prügikast+",
    ACTION_THROW: "Aseta prügikasti",
    ACTION_UNTHROW: "Eemalda prügikastist",
    ACTION_CLEAR: "Selge",
    ACTION_COPY: "Kopeeri",
    ACTION_EXPORT: "Ekspordi",
    ACTION_IMPORT: "Import",
    MESSAGE_COPIED: "Kopeeritud lõikelauale",
    MESSAGE_CLEARED: "Prügikast on edukalt tühjendatud!",
    MESSAGE_SONG_ADDED: "Laul lisatud prügikasti",
    MESSAGE_SONG_REMOVED: "Laul eemaldati prügikastist",
    MESSAGE_ARTIST_ADDED: "Kunstnik lisatud prügikasti",
    MESSAGE_ARTIST_REMOVED: "Kunstnik eemaldati prügikastist",
    BACKUP_SAVE_SUCCESS: "Varundus edukalt salvestatud.",
    BACKUP_SAVE_FAILED: "Varunduse salvestamine ebaõnnestus, proovige prügikasti sisu kopeerimist lõikelauale ja varunduse käsitsi loomist.",
    BACKUP_RESTORE_SUCCESS: "Varundus taastati edukalt.",
    BACKUP_FILE_READ_FAILED: "Faili lugemine ebaõnnestus, veenduge, et see oleks sobiv JSON-fail.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Prügikasti+ seaded",
    SETTINGS_OPTIONS: "Valikud",
    SETTINGS_FEATURES: "Omadused",
    SETTINGS_STORAGE: "Hoiustamine",
    SETTINGS_ENABLED: "Lubatud",
    SETTINGS_SHOW_WIDGET: "Kuva vidina ikoon",
    SETTINGS_AUTOPLAY: "Automaatne esitus käivitamisel",
    SETTINGS_QUEUE_TRASHBIN: "Luba järjekorra prügikast",
    SETTINGS_TRACKLIST_TRASHBIN: "Luba trellide prügikast",
    SETTINGS_PLAYLIST_MONITOR: "Esitusloendi jälgija",
    ITEMS_TITLE: "Prügikasti+ üksused",
    ITEMS_EMPTY_SONGS: "<strong>Ühtegi prakist lood!</strong><br/>Lood, mida sa prakistisse lisad, ilmuvad siia.",
    ITEMS_EMPTY_ARTISTS: "<strong>Ära viska kunstnikke prügikasti!</strong><br/>Prügikasti lisatud kunstnikud ilmuvad siin.",
    ITEMS_TAB_SONGS: "Laulud",
    ITEMS_TAB_ARTISTS: "Kunstnikud",
    ITEMS_LOADED_COUNT: "{{loaded}} / {{total}} {{type}} laaditud",
    ITEMS_SEARCH_PLACEHOLDER: "Otsi nime, esitaja või URI järgi...",
    DESCRIPTION_COPY: "Kopeeri prügikasti kõik elemendid lõikepuhvrisse.",
    DESCRIPTION_EXPORT: "Salvesta kõik prügikasti asjad .json-faili.",
    DESCRIPTION_IMPORT: "Kirjuta kõik prügikasti üksused üle .json-faili kaudu.",
    DESCRIPTION_CLEAR: "Tühjenda prügikast täielikult (tegevust ei saa tagasi võtta).",
    ITEMS_EMPTY_SONGS_TITLE: "Mitte ühtegi prügiks tehtud laulu!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Mitte ühtegi rügatud kunstnikku!",
    DESCRIPTION_SETTINGS_ENABLED: "Lüliti kõigi prügikasti+ funktsioonide lubamiseks või keelamiseks",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Kuulamisribal kuvatakse praegu mängiva loo kõrval kiireks ligipääsuks prügikasti ikoon",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Alusta muusika esitamist automaatselt, kui Spotify avaneb või laiendus laaditakse",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Lisa igale järgmisele loosse kuulule prügikasti ikoonid mugava haldamise jaoks",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Lisa albumi ja esitusloendi vaadetes laulude kõrvale prügikasti ikoonid kiireks filtreerimiseks",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Taasta Spotify esitus automaatselt, jätkates viimast esitusloendit",
    SETTINGS_SKIP_TRASHED_TRACKS: "Jäta vahele prügikastis olevad lood",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Jäta automaatselt vahele kõrvale visatud lood ja leia esitamise ajal järgmine lubatud number",
    SETTINGS_AUTO_CLEAN_QUEUE: "Automaatne puhastusjärjekord",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Eemalda prügikasti visatud lood automaatselt oma nutikast juhuslikust esitusloendist",
    SETTINGS_REMOTE_CONTROL: "Kaugarvesti",
    SETTINGS_REMOTE_TOGGLE: "Luba kauglülitus",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Topeltklõpsa mobiilseadmes esitus/paus, et lülitada kaugsaltenne sisse/välja. Loovi järgmine lülitab selle sisse.",
    SETTINGS_REMOTE_SKIPPING: "Kaugarvatamine aktiivne",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Kui see on lubatud, töötab prügikasti vahelejätmine isegi siis, kui Spotifyd juhitakse teiselt seadmelt (nt mobiiltelefonist)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Kaugarvatamine lubatud",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Kaugarvuti vahelejätmise keelatud",
    MESSAGE_SONG_ADDED_REMOTE: "Lugu kustutati kaugjuhtimisel",
    SETTINGS_TRASH_VIA_LIKE: "Täht a la Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Nagu laul mobiilist prügikasti. Eemaldab meeldimise automaatselt ja liigub järgmisele loole.",
    SETTINGS_AI_DETECTION: "AI tuvastamine",
    SETTINGS_AI_DETECTION_ENABLED: "AI laulu tuvastamine",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Tuva tuvastama AI-generitud laule kasutades SONICS mudelit ja näidatakse tõenäosuse näitajat. Esimesel lubamisel allalaadimine ~50MB mudel.",
    AI_ASSETS_DOWNLOADING: "AI-mudeli allalaadimine...",
    AI_ASSETS_READY: "AI mudel on valmis",
    AI_ASSETS_NOT_READY: "AI mudel pole saadaval",
    SETTINGS_TRASH_AI_SONGS: "Prügi AI laulud",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Tühjenda automaatselt lood, millest tuvastatakse, et need on AI poolt loodud (tõenäosus ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Tühjenda kõik salvestatud AI klassifikatsioonitulemused (salvestatud {{count}} laulu).",
    ACTION_CLEAR_AI_STORAGE: "Selge",
    MESSAGE_AI_STORAGE_CLEARED: "AI tulemused kustutatud",
    AI_TIER_LIKELY_HUMAN: "Tõenäoliselt inimene",
    AI_TIER_PROBABLY_HUMAN: "Tõenäoliselt inimene",
    AI_TIER_UNCERTAIN: "Kindel",
    AI_TIER_PROBABLY_AI: "Tõenäoliselt AI",
    AI_TIER_LIKELY_AI: "Tõenäoline AI",
    ACTION_REMOVE_TRASHED: "Eemalda prügikasti visatud laulud",
    CONFIRM_REMOVE_TRASHED: "Kas eemaldada sellest esitusloetelust {{count}} prügikasti visatud laulu? Seda ei saa tagasi võtta.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Eemaldati {{count}} prügikasti visatud laulu esitusloetelust",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Selle nimekirjas ei leitud ühtegi prügikasti visatud laulu"
  };
});

// src/i18n/eu.json
var require_eu = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Trashbin+",
    ACTION_THROW: "Jarri zakarrontzian",
    ACTION_UNTHROW: "Ezabatu zakarrontzitik",
    ACTION_CLEAR: "Garbi",
    ACTION_COPY: "Kopiatu",
    ACTION_EXPORT: "Esportatu",
    ACTION_IMPORT: "Inportatu",
    MESSAGE_COPIED: "Arbelean kopiatua",
    MESSAGE_CLEARED: "Zakarrontzia ondo garbitu da!",
    MESSAGE_SONG_ADDED: "Abestia zakarrontzira gehitu da",
    MESSAGE_SONG_REMOVED: "Abestia zakarrontzitik kendu da",
    MESSAGE_ARTIST_ADDED: "Artist-a zakurtera gehituta",
    MESSAGE_ARTIST_REMOVED: "Artista zakarrontzitik kendua",
    BACKUP_SAVE_SUCCESS: "Gehiegizko kopia ondo gorde da.",
    BACKUP_SAVE_FAILED: "Ezin izan da babeskopia gorde, saiatu zakarrontziko edukia arbelera kopiatzen eta babeskopia eskuz sortzen.",
    BACKUP_RESTORE_SUCCESS: "Backupa ondo berreskuratu da.",
    BACKUP_FILE_READ_FAILED: "Ezin izan da fitxategia irakurri, ziurtatu baliozko JSON fitxategia dela.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Trashbin+ ezarpenak",
    SETTINGS_OPTIONS: "Aukerak",
    SETTINGS_FEATURES: "Ezaugarriak",
    SETTINGS_STORAGE: "Biltegiratzea",
    SETTINGS_ENABLED: "Gaituta",
    SETTINGS_SHOW_WIDGET: "Erakutsi widgetaren ikonoa",
    SETTINGS_AUTOPLAY: "Hasi ber automatikoki",
    SETTINGS_QUEUE_TRASHBIN: "Gaitu ilararen zakarrontzia",
    SETTINGS_TRACKLIST_TRASHBIN: "Gaitu erreprodukzio-zerrendaren zakarrontzia",
    SETTINGS_PLAYLIST_MONITOR: "Playlist Monitorra",
    ITEMS_TITLE: "Zakarrontzi+ elementuak",
    ITEMS_EMPTY_SONGS: "<strong>Ez da abesturik zakarrontzian!</strong><br/>Zakarrontzira gehitutako abestiak hemen agertuko dira.",
    ITEMS_EMPTY_ARTISTS: "<strong>Ez da artizarik zakarrontzira bota!</strong><br/>Zakarrontzira gehitutako artista guztiak hemen agertuko dira.",
    ITEMS_TAB_SONGS: "Abestiak",
    ITEMS_TAB_ARTISTS: "Artistak",
    ITEMS_LOADED_COUNT: "{{loaded}} {{total}}tik {{type}} kargatu da",
    ITEMS_SEARCH_PLACEHOLDER: "Bilatu izenaren, artista edo URIaren arabera...",
    DESCRIPTION_COPY: "Kopiatu zakarrontziko elementu guztiak arbelera.",
    DESCRIPTION_EXPORT: "Gordetutako elementu guztiak zakarrontzitik .json fitxategi batean.",
    DESCRIPTION_IMPORT: "Ordezkatu zaborrontziko elementu guztiak .json fitxategiaren bidez.",
    DESCRIPTION_CLEAR: "Ezabatu zaborrontziko elementu guztiak (ezin da desegin).",
    ITEMS_EMPTY_SONGS_TITLE: "Ez da abestirik ezabatu!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Ez zaborraturiko artista!",
    DESCRIPTION_SETTINGS_ENABLED: "Zakarrontzi+ funtzionamendu guztia aktibatzeko edo desaktibatzeko toggle nagusia",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Erakutsi zakarrontzi ikonoa erreproduzitzen ari den pista alboan dagoen erreproduzio-barran, lasterbide gisa",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Abiarazi automatikoki musika Spotify irekitzen denean edo luzapena kargatzen denean",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Gehitu zakarrontzi ikonoak zure hurrengo ilaran dauden abesti bakoitzaren ondoan kudeatzeko errazteko",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Gehitu zakarrontzi ikonoak albumen eta erreproduzio-zerrenden ikuspegietan abestien ondoan iragazketa azkarra egiteko",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Berreskuratu automatikoki Spotify-ko erreproduzitze arazoak zure azken erreproduzitze-zerrenda berriro abiaraziz",
    SETTINGS_SKIP_TRASHED_TRACKS: "Saltatu Ezabatutako Pista",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Ezabatutako abestiak automatikoki saltatu eta erreproduzitzean hurrengo baimendutako pista bilatu",
    SETTINGS_AUTO_CLEAN_QUEUE: "Auto Clean Queue",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Kendu automatikoki zaborrera bidalitako abestiak zure ausazko iragazkien ilaratik",
    SETTINGS_REMOTE_CONTROL: "Urruneko kontrola",
    SETTINGS_REMOTE_TOGGLE: "Gaitu urruneko alternatiba",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Ukitu bikoitza erreproduzitu/pausa botoia mugikorrean urruneko saltaketa aktibatzeko/desaktibatzeko. Pista bat saltatzeak saltaketa egoera berretsi egingo du.",
    SETTINGS_REMOTE_SKIPPING: "Urruneko saltatzea aktibatuta",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Gaituta dagoenean, zakarrerako salto egitea beste gailu batetik (adibidez, mugikorra) Spotify kudeatzen ari zaren bitartean ere funtzionatzen du",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Urruneko saltatzea gaituta",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Urruneko saltatzea desgaituta",
    MESSAGE_SONG_ADDED_REMOTE: "Kanta hondatua urruneko bidez",
    SETTINGS_TRASH_VIA_LIKE: "Zaborra nahi bezala",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Abestia bezala mugikidetik zaborra kendu. Bere kabuz ezabesten du eta hurrengo pista joaten du.",
    SETTINGS_AI_DETECTION: "AI detekzioa",
    SETTINGS_AI_DETECTION_ENABLED: "AI Abesti Detekzioa",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Erabili SONICS eredua abestiak nortzuk AI-k sortuak diren detektatzeko eta erakutsi probabilitate-adierazlea. Deskargatu ~50MB-ko eredua gaitzen den lehenengoan.",
    AI_ASSETS_DOWNLOADING: "AI eredua deskargatzen...",
    AI_ASSETS_READY: "AI eredua prest dago",
    AI_ASSETS_NOT_READY: "AI eredua ez dago eskuragarri",
    SETTINGS_TRASH_AI_SONGS: "Zaborrrezko AI Abestiak",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Automatikoki zakarrontzira bota AI-k sortutako gisa detektatutako abestiak (probabilitatea ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Ezabatu gorde diren AI sailkapen emaitzak ({{count}} abesti gorde dira).",
    ACTION_CLEAR_AI_STORAGE: "Garbi",
    MESSAGE_AI_STORAGE_CLEARED: "AI emaitzak garbitu dira",
    AI_TIER_LIKELY_HUMAN: "Likely Human",
    AI_TIER_PROBABLY_HUMAN: "Baliteke Giza izana",
    AI_TIER_UNCERTAIN: "Ziurabeko",
    AI_TIER_PROBABLY_AI: "Likidaz AI",
    AI_TIER_LIKELY_AI: "AI arriskutsua",
    ACTION_REMOVE_TRASHED: "Kendu zakarreratuak diren abestiak",
    CONFIRM_REMOVE_TRASHED: "Ezabatu {{count}} abesti ezabatuak playlist honetatik? Ezin da desegin.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "{{count}} abestu ezabatu dira erreproduzio-zerrendatik",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Ez da abestu ezabaturik aurkitu erreproduzio-zerrenda honetan"
  };
});

// src/i18n/fa.json
var require_fa = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "سطل آشغال+",
    ACTION_THROW: "در سطل زباله قرار دهید",
    ACTION_UNTHROW: "حذف از سطل زباله",
    ACTION_CLEAR: "شفاف",
    ACTION_COPY: "کپی",
    ACTION_EXPORT: "صادرات",
    ACTION_IMPORT: "وارد کردن",
    MESSAGE_COPIED: "کپی شده در کلیپ‌بورد",
    MESSAGE_CLEARED: "سطل آشغال با موفقیت خالی شد!",
    MESSAGE_SONG_ADDED: "آهنگ به سطل آشغال اضافه شد",
    MESSAGE_SONG_REMOVED: "آهنگ از زباله‌دان حذف شد",
    MESSAGE_ARTIST_ADDED: "هنرمند به سطل زباله اضافه شد",
    MESSAGE_ARTIST_REMOVED: "هنرمند از سطل زباله حذف شد",
    BACKUP_SAVE_SUCCESS: "پشتیبان با موفقیت ذخیره شد.",
    BACKUP_SAVE_FAILED: "ذخیره پشتیبان ناموفق بود، سعی کنید محتوای سطل زباله را کپی کرده و به صورت دستی یک پشتیبان ایجاد کنید.",
    BACKUP_RESTORE_SUCCESS: "پشتیبان با موفقیت بازیابی شد.",
    BACKUP_FILE_READ_FAILED: "خواندن فایل ناموفق بود، لطفاً مطمئن شوید که یک فایل JSON معتبر است.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "تنظیمات سطل زباله+",
    SETTINGS_OPTIONS: "گزینه‌ها",
    SETTINGS_FEATURES: "ویژگی‌ها",
    SETTINGS_STORAGE: "ذخیره‌سازی",
    SETTINGS_ENABLED: "فعال شد",
    SETTINGS_SHOW_WIDGET: "نمایش آیکون ویجت",
    SETTINGS_AUTOPLAY: "پخش خودکار هنگام شروع",
    SETTINGS_QUEUE_TRASHBIN: "فعال‌سازی سطل آشغال صف",
    SETTINGS_TRACKLIST_TRASHBIN: "فعال‌سازی سطل زباله لیست ترک",
    SETTINGS_PLAYLIST_MONITOR: "مانیتور لیست پخش",
    ITEMS_TITLE: "موارد سطل زباله+",
    ITEMS_EMPTY_SONGS: "<strongهیچ آهنگ حذف‌شده‌ای وجود ندارد!</strong><br/>آهنگ‌هایی که به سطل زباله اضافه می‌کنید اینجا نمایش داده می‌شوند.",
    ITEMS_EMPTY_ARTISTS: "<strong>هیچ هنرمند حذف شده‌ای وجود ندارد!</strong><br/>هنرمندانی که به سطل زباله اضافه می‌کنید اینجا نمایش داده می‌شوند.",
    ITEMS_TAB_SONGS: "ترانه‌ها",
    ITEMS_TAB_ARTISTS: "هنرمندان",
    ITEMS_LOADED_COUNT: "{{loaded}} از {{total}} {{type}} بارگذاری شد",
    ITEMS_SEARCH_PLACEHOLDER: "جستجو بر اساس نام، هنرمند یا URI...",
    DESCRIPTION_COPY: "همهٔ موارد موجود در سطل آشغال را به کلیپ‌بورد کپی کنید.",
    DESCRIPTION_EXPORT: "ذخیرهٔ تمام موارد در سطل آشغال به یک فایل .json",
    DESCRIPTION_IMPORT: "جایگزینی تمام موارد در سطل زباله از طریق فایل .json",
    DESCRIPTION_CLEAR: "تمام موارد را از سطل زباله حذف کنید (غیرقابل بازگشت).",
    ITEMS_EMPTY_SONGS_TITLE: "هیچ آهنگ حذف شدهای وجود ندارد!",
    ITEMS_EMPTY_ARTISTS_TITLE: "هیچ هنرمند حذف شدهای!",
    DESCRIPTION_SETTINGS_ENABLED: "کلید اصلی برای فعال یا غیرفعال کردن تمام عملکردهای Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "نمایش یک آیکون سطل آشغال در نوار پخش کنار قطعه‌ای که در حال پخش است، برای دسترسی سریع",
    DESCRIPTION_SETTINGS_AUTOPLAY: "پخش خودکار موسیقی هنگام باز شدن اسپاتیفای یا بارگذاری افزونه",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "آیکون‌های سطل آشغال را کنار هر آهنگ در صف آینده خود اضافه کنید تا مدیریت آسان‌تری داشته باشید",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "آیکون‌های سطل آشغال را کنار آهنگ‌ها در نمای آلبوم و فهرست پخش اضافه کنید تا فیلتر سریع امکان‌پذیر شود",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "به‌طور خودکار از مشکلات پخش اسپاتیفای با ادامه دادن به آخرین لیست پخش شما بازیابی کنید",
    SETTINGS_SKIP_TRASHED_TRACKS: "رد کردن مسیرهای حذف‌شده",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "به طور خودکار آهنگ‌های حذف شده را رد کنید و در حین پخش، موسیقی بعدی مجاز را پیدا کنید",
    SETTINGS_AUTO_CLEAN_QUEUE: "صف خالی سازی خودکار",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "حذف خودکار آهنگ‌های سطل آشغال از صف پخش تصادفی هوشمند شما",
    SETTINGS_REMOTE_CONTROL: "کنترل از راه دور",
    SETTINGS_REMOTE_TOGGLE: "فعال‌سازی تغییر از راه دور",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "دو بار لمس کردن دکمه پخش/مکث از موبایل برای فعال یا غیرفعال کردن رد کردن از راه دور. رد شدن از یک قطعه، تغییر حالت را تأیید می‌کند.",
    SETTINGS_REMOTE_SKIPPING: "پرش از راه دور فعال است",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "هنگامی که فعال است، رد کردن آهنگ‌ها بدون انتقال به سطل آشغال حتی هنگام کنترل اسپاتیفای از دستگاه دیگر (مثلاً تلفن همراه) نیز کار می‌کند",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "پرش از راه دور فعال شد",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "پرش از راه دور غیرفعال شد",
    MESSAGE_SONG_ADDED_REMOTE: "ترکیدن آهنگ از راه دور",
    SETTINGS_TRASH_VIA_LIKE: "زباله از طریق لایک",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "مثل یک آهنگ از موبایل به سطل آشغال. به طور خودکار دیسلایک می‌کند و به موزیک بعدی می‌رود.",
    SETTINGS_AI_DETECTION: "تشخیص هوش مصنوعی",
    SETTINGS_AI_DETECTION_ENABLED: "تشخیص آهنگ هوش مصنوعی",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "تشخیص آهنگ‌های تولیدشده توسط هوش مصنوعی با استفاده از مدل SONICS و نمایش نشانگر احتمال. در هنگام فعال‌سازی اولیه، مدلی به حجم حدود ۵۰ مگابایت دانلود می‌شود.",
    AI_ASSETS_DOWNLOADING: "در حال دانلود مدل هوش مصنوعی...",
    AI_ASSETS_READY: "مدل هوش مصنوعی آماده است",
    AI_ASSETS_NOT_READY: "مدل هوش مصنوعی موجود نیست",
    SETTINGS_TRASH_AI_SONGS: "ترش آی آی سانگز",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "به‌طور خودکار آهنگ‌های تشخیص داده شده به عنوان تولیدشده توسط هوش مصنوعی (احتمال ≥ 80٪) را حذف کنید",
    DESCRIPTION_CLEAR_AI_STORAGE: "تمام نتایج ذخیره‌شده طبقه‌بندی هوش مصنوعی را پاک کنید ({{count}} آهنگ ذخیره‌شده).",
    ACTION_CLEAR_AI_STORAGE: "شفاف",
    MESSAGE_AI_STORAGE_CLEARED: "نتایج هوش مصنوعی پاک شد",
    AI_TIER_LIKELY_HUMAN: "احتمالاً انسانی",
    AI_TIER_PROBABLY_HUMAN: "احتمالاً انسان",
    AI_TIER_UNCERTAIN: "نامشخص",
    AI_TIER_PROBABLY_AI: "احتمالاً هوش مصنوعی",
    AI_TIER_LIKELY_AI: "هوش مصنوعی احتمالی",
    ACTION_REMOVE_TRASHED: "حذف آهنگ‌های سطل آشغال",
    CONFIRM_REMOVE_TRASHED: "آیا می‌خواهید {{count}} آهنگ حذف شده را از این فهرست پخش حذف کنید؟ این عمل غیرقابل بازگشت است.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "{{count}} آهنگ حذف شده از لیست پخش حذف شدند",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "هیچ آهنگ حذف‌شده‌ای در این فهرست پیدا نشد"
  };
});

// src/i18n/fi.json
var require_fi = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Roskakori+",
    ACTION_THROW: "Laita roskakoriin",
    ACTION_UNTHROW: "Poista roskakorista",
    ACTION_CLEAR: "Selkeä",
    ACTION_COPY: "Kopioi",
    ACTION_EXPORT: "Vie",
    ACTION_IMPORT: "Tuo",
    MESSAGE_COPIED: "Kopioitu leikepöydälle",
    MESSAGE_CLEARED: "Roskakori tyhjennetty onnistuneesti!",
    MESSAGE_SONG_ADDED: "Kappale lisätty roskakoriin",
    MESSAGE_SONG_REMOVED: "Kappale poistettu roskakorista",
    MESSAGE_ARTIST_ADDED: "Taiteilija lisätty roskakoriin",
    MESSAGE_ARTIST_REMOVED: "Taiteilija poistettu roskakorista",
    BACKUP_SAVE_SUCCESS: "Varmuuskopio tallennettu onnistuneesti.",
    BACKUP_SAVE_FAILED: "Varmuuskopiota ei voitu tallentaa, yritä kopioida roskakorin sisältö leikepöydälle ja luo varmuuskopio manuaalisesti.",
    BACKUP_RESTORE_SUCCESS: "Varmuuskopio palautettu onnistuneesti.",
    BACKUP_FILE_READ_FAILED: "Tiedoston lukeminen epäonnistui, varmista että se on kelvollinen JSON-tiedosto.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Roskakori+ -asetukset",
    SETTINGS_OPTIONS: "Asetukset",
    SETTINGS_FEATURES: "Ominaisuudet",
    SETTINGS_STORAGE: "Säilytys",
    SETTINGS_ENABLED: "Käytössä",
    SETTINGS_SHOW_WIDGET: "Näytä widgetin kuvake",
    SETTINGS_AUTOPLAY: "Automaattikäynnistys käynnistettäessä",
    SETTINGS_QUEUE_TRASHBIN: "Ota käyttöön jonon roskakori",
    SETTINGS_TRACKLIST_TRASHBIN: "Ota käyttöön soittolistan roskakori",
    SETTINGS_PLAYLIST_MONITOR: "Soittolistan valvoja",
    ITEMS_TITLE: "Roskakori+ -kohteet",
    ITEMS_EMPTY_SONGS: "<strong>Ei roskikseen laitettuja kappaleita!</strong><br/>Kappaleet, jotka lisäät roskikseen, ilmestyvät tähän.",
    ITEMS_EMPTY_ARTISTS: "<strong>Ei roskakoriin laitettuja artisteja!</strong><br/>Roskakoriin lisäämäsi artistit ilmestyvät tähän.",
    ITEMS_TAB_SONGS: "Laulut",
    ITEMS_TAB_ARTISTS: "Taiteilijat",
    ITEMS_LOADED_COUNT: "{{loaded}} / {{total}} {{type}} ladattu",
    ITEMS_SEARCH_PLACEHOLDER: "Etsi nimellä, artistilla tai URI:lla...",
    DESCRIPTION_COPY: "Kopioi kaikki roskakorissa olevat kohteet leikepöydälle.",
    DESCRIPTION_EXPORT: "Tallenna kaikki roskakorissa olevat kohteet .json-tiedostoon.",
    DESCRIPTION_IMPORT: "Korvaa kaikki roskakorin kohteet .json-tiedostolla.",
    DESCRIPTION_CLEAR: "Tyhjennä kaikki kohteet roskakorista (toimintoa ei voi kumota).",
    ITEMS_EMPTY_SONGS_TITLE: "Ei hävitettyjä kappaleita!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Ei roskiksi heitettyjä taiteilijoita!",
    DESCRIPTION_SETTINGS_ENABLED: "Pääkytkin kaikkien Roskakori+-toimintojen käyttöön ottamiseksi tai poistamiseksi",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Näytä roskakorikuvake toistopalkissa parhaillaan soivan kappaleen vieressä nopeaa käyttöä varten",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Käynnistä musiikin toisto automaattisesti, kun Spotify avataan tai laajennus latautuu",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Lisää roskakorikuvakkeet jokaisen kappaleen viereen tulossa olevassa jonossasi helpottamaan hallintaa",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Lisää roskakori-kuvakkeet kappaleiden viereen albumi- ja soittolistanäkymissä nopeaa suodatusta varten",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Palautuu automaattisesti Spotify-soiton viiveistä jatkamalla viimeisintä soittolistaa",
    SETTINGS_SKIP_TRASHED_TRACKS: "Ohita poistetut kappaleet",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Ohita automaattisesti roskakoriin siirretyt kappaleet ja etsi seuraava sallittu kappale toiston aikana",
    SETTINGS_AUTO_CLEAN_QUEUE: "Automaattinen siivousjono",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Poista roskakoriin siirretyt kappaleet automaattisesti Smart Shuffle -jonostasi",
    SETTINGS_REMOTE_CONTROL: "Kauko-ohjain",
    SETTINGS_REMOTE_TOGGLE: "Ota etäkytkin käyttöön",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Kaksoisnapauta soittaminen/tauko mobiililaitteesta vaihtaaksesi etäohjauksen ohituksen päälle/pois. Kappaleen ohitus vahvistaa kytkennän.",
    SETTINGS_REMOTE_SKIPPING: "Etäohjattu ohitus aktiivinen",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Kun tämä on käytössä, roskakori ohitetaan, vaikka Spotifya ohjattaisiin toisella laitteella (esim. mobiililaitteella)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Etäohjauksen ohitus käytössä",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Etäohjauksen ohitus poistettu käytöstä",
    MESSAGE_SONG_ADDED_REMOTE: "Kappale tuhottiin etäkäytöllä",
    SETTINGS_TRASH_VIA_LIKE: "Roska via Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Kuten kappale, joka siirtyy soittimesta roskiin. Poistaa tykkäyksen automaattisesti ja siirtyy seuraavaan kappaleeseen.",
    SETTINGS_AI_DETECTION: "Tekoälyn tunnistus",
    SETTINGS_AI_DETECTION_ENABLED: "Teoälylaulujen tunnistus",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Tunnista tekoälyllä tuotetut kappaleet SONICS-mallin avulla ja näytä todennäköisyysindikaattori. Lataa ~50 Mt:n mallin käyttöönoton yhteydessä.",
    AI_ASSETS_DOWNLOADING: "Ladataan tekoälymallia...",
    AI_ASSETS_READY: "Teoälymalli valmis",
    AI_ASSETS_NOT_READY: "Tekoälymallia ei ole saatavilla",
    SETTINGS_TRASH_AI_SONGS: "Roska-AI-kappaleet",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Siirrä automaattisesti roskakoriin laulut, jotka tunnistetaan tekoälyllä tuotetuiksi (todennäköisyys ≥ 80 %)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Poista kaikki tallennetut tekoälyluokittelutulokset ({{count}} kappaletta tallennettu).",
    ACTION_CLEAR_AI_STORAGE: "Selkeä",
    MESSAGE_AI_STORAGE_CLEARED: "Teoälytulokset selvitettiin",
    AI_TIER_LIKELY_HUMAN: "Todennäköisesti ihminen",
    AI_TIER_PROBABLY_HUMAN: "Todennäköisesti ihminen",
    AI_TIER_UNCERTAIN: "Epävarma",
    AI_TIER_PROBABLY_AI: "Todennäköisesti tekoäly",
    AI_TIER_LIKELY_AI: "Todennäköisesti tekoäly",
    ACTION_REMOVE_TRASHED: "Poista roskakoriin siirretyt kappaleet",
    CONFIRM_REMOVE_TRASHED: "Poistetaanko {{count}} roskakoriin siirretty kappaletta tästä soittolistasta? Tätä toimintoa ei voi perua.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Poistettiin {{count}} roskakoriin siirretty kappaletta soittolistalta",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Ei roskakoriin siirrettyjä kappaleita löytynyt tästä soittolistasta"
  };
});

// src/i18n/fil.json
var require_fil = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Basurahan+",
    ACTION_THROW: "Ilagay sa Basurahan",
    ACTION_UNTHROW: "Alisin mula sa Basurahan",
    ACTION_CLEAR: "Malinaw",
    ACTION_COPY: "Kopyahin",
    ACTION_EXPORT: "I-export",
    ACTION_IMPORT: "I-import",
    MESSAGE_COPIED: "Kinopya sa clipboard",
    MESSAGE_CLEARED: "Matagumpay na inalis ang basura!",
    MESSAGE_SONG_ADDED: "Idinagdag ang kanta sa basurahan",
    MESSAGE_SONG_REMOVED: "Inalis ang kanta mula sa basurahan",
    MESSAGE_ARTIST_ADDED: "Idinagdag ang artista sa basurahan",
    MESSAGE_ARTIST_REMOVED: "Alisin ang artista mula sa basurahan",
    BACKUP_SAVE_SUCCESS: "Matagumpay na naisave ang backup.",
    BACKUP_SAVE_FAILED: "Hindi na-save ang backup, subukang kopyahin ang nilalaman ng trashbin sa clipboard at gumawa ng backup nang manu-mano.",
    BACKUP_RESTORE_SUCCESS: "Matagumpay na naibalik ang backup.",
    BACKUP_FILE_READ_FAILED: "Hindi mabasa ang file, mangyaring tiyakin na ito ay isang wastong JSON file.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Mga Setting ng Trashbin+",
    SETTINGS_OPTIONS: "Mga Pagpipilian",
    SETTINGS_FEATURES: "Mga Tampok",
    SETTINGS_STORAGE: "Imbakan",
    SETTINGS_ENABLED: "Naka-enable",
    SETTINGS_SHOW_WIDGET: "Ipakita ang Icon ng Widget",
    SETTINGS_AUTOPLAY: "I-automatikong i-play sa Pagbubukod",
    SETTINGS_QUEUE_TRASHBIN: "Paganahin ang Queue Trashbin",
    SETTINGS_TRACKLIST_TRASHBIN: "I-enable ang Tracklist Trashbin",
    SETTINGS_PLAYLIST_MONITOR: "Playlist Monitor",
    ITEMS_TITLE: "Mga Item sa Basurahan+",
    ITEMS_EMPTY_SONGS: "<strong>Walang mga itinapon na kanta!</strong><br/>Ang mga kantang idinagdag mo sa trashbin ay lilitaw dito.",
    ITEMS_EMPTY_ARTISTS: "<strong>Walang mga itinapon na artista!</strong><br/>Ang mga artista na idinagdag mo sa trashbin ay lilitaw dito.",
    ITEMS_TAB_SONGS: "Mga kanta",
    ITEMS_TAB_ARTISTS: "Mga Artista",
    ITEMS_LOADED_COUNT: "{{loaded}} ng {{total}} {{type}} na-load",
    ITEMS_SEARCH_PLACEHOLDER: "Maghanap ayon sa pangalan, artista, o URI...",
    DESCRIPTION_COPY: "Kopyahin ang lahat ng item sa trashbin patungo sa clipboard.",
    DESCRIPTION_EXPORT: "I-save ang lahat ng mga item sa trashbin sa isang .json file.",
    DESCRIPTION_IMPORT: "Isulat muli ang lahat ng mga item sa trashbin gamit ang .json file.",
    DESCRIPTION_CLEAR: "Alisin ang lahat ng item sa basurahan (hindi ito maibabalik).",
    ITEMS_EMPTY_SONGS_TITLE: "Walang mga itinapon na kanta!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Walang mga nasirang artista!",
    DESCRIPTION_SETTINGS_ENABLED: "Pangunahing toggle para paganahin o i-disable ang lahat ng mga tungkulin ng Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Ipakita ang icon ng basurahan sa playback bar sa tabi ng kasalukuyang nagpe-play na track para sa mabilis na pag-access",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Awtomatikong maglalaro ng musika kapag binuksan ang Spotify o nai-load ang extension",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Magdagdag ng mga icon ng basura sa tabi ng bawat kanta sa iyong susunod na queue para sa madaling pamamahala",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Magdagdag ng mga icon ng basura sa tabi ng mga kanta sa mga view ng album at playlist para sa mabilis na pag-filter",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Awtomatikong gumaling mula sa mga glitch sa pag-playback ng Spotify sa pamamagitan ng pagpapatuloy sa iyong huling playlist",
    SETTINGS_SKIP_TRASHED_TRACKS: "Laktawan ang mga Nasirang Track",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Awtomatikong laktawan ang mga itinapon na kanta at hanapin ang susunod na pinapayagang track habang nagpe-play",
    SETTINGS_AUTO_CLEAN_QUEUE: "Awtomatikong Linisin ang Queue",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Awtomatikong alisin ang mga itinapon na kanta mula sa iyong Smart Shuffle na pila",
    SETTINGS_REMOTE_CONTROL: "Remote Control",
    SETTINGS_REMOTE_TOGGLE: "Paganahin ang Remote Toggle",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "I-doble i-tap ang play/pause mula sa mobile para i-on/off ang remote skipping. Ang pag-skip ng track ay nagko-confirm sa toggle.",
    SETTINGS_REMOTE_SKIPPING: "Aktibong Pag-iwas sa Layo",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Kapag pinagana, gumagana ang pag-skip sa basura kahit na kinokontrol ang Spotify mula sa ibang device (hal., mobile)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Pinagana ang remote skipping",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Hindi pinagana ang remote skipping",
    MESSAGE_SONG_ADDED_REMOTE: "Sinira ang kanta sa pamamagitan ng remote",
    SETTINGS_TRASH_VIA_LIKE: "Basura sa pamamagitan ng Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Tulad ng isang kanta mula sa mobile papunta sa basura. Awtomatikong inu-unlike at lumilipat sa susunod na track.",
    SETTINGS_AI_DETECTION: "Pagtuklas sa AI",
    SETTINGS_AI_DETECTION_ENABLED: "Pagtuklas sa Kanta ng AI",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Tuklasin ang mga awiting nabuo ng AI gamit ang modelo ng SONICS at ipakita ang indicator ng posibilidad. Nagdo-download ng ~50MB na modelo sa unang pag-activate.",
    AI_ASSETS_DOWNLOADING: "Nagdo-download ng AI model...",
    AI_ASSETS_READY: "Handa na ang modelo ng AI",
    AI_ASSETS_NOT_READY: "Hindi available ang AI model",
    SETTINGS_TRASH_AI_SONGS: "Mga Awit ng Trash AI",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Awtomatikong itapon ang mga kantang nakita bilang AI-generated (posibilidad ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Tanggalin ang lahat ng naka-imbak na resulta ng AI classification ({{count}} kanta ang naka-imbak).",
    ACTION_CLEAR_AI_STORAGE: "Malinaw",
    MESSAGE_AI_STORAGE_CLEARED: "Na-clear na ang mga resulta ng AI",
    AI_TIER_LIKELY_HUMAN: "Malapet na Tao",
    AI_TIER_PROBABLY_HUMAN: "Marahil Tao",
    AI_TIER_UNCERTAIN: "Hindi sigurado",
    AI_TIER_PROBABLY_AI: "Marahil AI",
    AI_TIER_LIKELY_AI: "Malakas na AI",
    ACTION_REMOVE_TRASHED: "Alisin ang mga itinapon na kanta",
    CONFIRM_REMOVE_TRASHED: "Alisin ang {{count}} tinapon na kanta mula sa playlist na ito? Hindi ito maibabalik.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Inalis ang {{count}} tinapon na kanta mula sa playlist",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Walang natagpuang mga itinapon na kanta sa playlist na ito"
  };
});

// src/i18n/fr-CA.json
var require_fr_CA = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Corbeille+",
    ACTION_THROW: "Placer dans la corbeille",
    ACTION_UNTHROW: "Supprimer de la Corbeille",
    ACTION_CLEAR: "Clair",
    ACTION_COPY: "Copier",
    ACTION_EXPORT: "Exporter",
    ACTION_IMPORT: "Importer",
    MESSAGE_COPIED: "Copié dans le presse-papiers",
    MESSAGE_CLEARED: "Corbeille vidée avec succès !",
    MESSAGE_SONG_ADDED: "Chanson ajoutée à la corbeille",
    MESSAGE_SONG_REMOVED: "Chanson supprimée de la corbeille",
    MESSAGE_ARTIST_ADDED: "Artiste ajouté à la corbeille",
    MESSAGE_ARTIST_REMOVED: "Artiste retiré de la corbeille",
    BACKUP_SAVE_SUCCESS: "Sauvegarde effectuée avec succès.",
    BACKUP_SAVE_FAILED: "Échec de la sauvegarde. Essayez de copier le contenu de la corbeille dans le presse-papiers et de créer une sauvegarde manuellement.",
    BACKUP_RESTORE_SUCCESS: "Sauvegarde restaurée avec succès.",
    BACKUP_FILE_READ_FAILED: "Échec de la lecture du fichier, veuillez vous assurer qu'il s'agit d'un fichier JSON valide.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-corbeille.json",
    SETTINGS_TITLE: "Paramètres de la corbeille+",
    SETTINGS_OPTIONS: "Options",
    SETTINGS_FEATURES: "Fonctionnalités",
    SETTINGS_STORAGE: "Stockage",
    SETTINGS_ENABLED: "Activé",
    SETTINGS_SHOW_WIDGET: "Afficher l'icône du widget",
    SETTINGS_AUTOPLAY: "Lecture automatique au démarrage",
    SETTINGS_QUEUE_TRASHBIN: "Activer la corbeille de la file d'attente",
    SETTINGS_TRACKLIST_TRASHBIN: "Activer la corbeille de la liste de pistes",
    SETTINGS_PLAYLIST_MONITOR: "Moniteur de liste de lecture",
    ITEMS_TITLE: "Éléments de la Corbeille+",
    ITEMS_EMPTY_SONGS: "<strong>Aucune chanson dans la corbeille !</strong><br/>Les chansons que vous ajoutez à la corbeille apparaîtront ici.",
    ITEMS_EMPTY_ARTISTS: "<strong>Aucun artiste supprimé !</strong><br/>Les artistes que vous ajoutez à la corbeille apparaîtront ici.",
    ITEMS_TAB_SONGS: "Chansons",
    ITEMS_TAB_ARTISTS: "Artistes",
    ITEMS_LOADED_COUNT: "{{loaded}} sur {{total}} {{type}} chargé",
    ITEMS_SEARCH_PLACEHOLDER: "Rechercher par nom, artiste ou URI...",
    DESCRIPTION_COPY: "Copier tous les éléments de la corbeille dans le presse-papiers.",
    DESCRIPTION_EXPORT: "Enregistrer tous les éléments de la corbeille dans un fichier .json.",
    DESCRIPTION_IMPORT: "Remplacer tous les éléments de la corbeille via le fichier .json.",
    DESCRIPTION_CLEAR: "Effacer tous les éléments de la corbeille (impossible à annuler).",
    ITEMS_EMPTY_SONGS_TITLE: "Aucune chanson supprimée !",
    ITEMS_EMPTY_ARTISTS_TITLE: "Aucun artiste supprimé !",
    DESCRIPTION_SETTINGS_ENABLED: "Commande principale pour activer ou désactiver toutes les fonctionnalités de la corbeille+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Afficher une icône de corbeille dans la barre de lecture à côté de la piste en cours de lecture pour un accès rapide",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Lancer automatiquement la lecture de musique lorsque Spotify s'ouvre ou que l'extension se charge",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Ajoutez des icônes de corbeille à côté de chaque chanson dans votre file d'attente à venir pour une gestion facile",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Ajouter des icônes de corbeille à côté des chansons dans les vues d'album et de liste de lecture pour un filtrage rapide",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Récupérez automatiquement les anomalies de lecture de Spotify en reprenant votre dernière liste de lecture",
    SETTINGS_SKIP_TRASHED_TRACKS: "Ignorer les pistes supprimées",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Ignorer automatiquement les chansons supprimées et trouver la piste suivante autorisée pendant la lecture",
    SETTINGS_AUTO_CLEAN_QUEUE: "File de nettoyage automatique",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Supprimer automatiquement les chansons supprimées de votre file d'attente Smart Shuffle",
    SETTINGS_REMOTE_CONTROL: "Télécommande",
    SETTINGS_REMOTE_TOGGLE: "Activer la bascule à distance",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Appuyez deux fois sur lecture/pause depuis votre appareil mobile pour activer ou désactiver la fonction de saut de piste à distance. Le saut d'une piste confirme le changement d'état.",
    SETTINGS_REMOTE_SKIPPING: "Passage à distance activé",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Lorsqu'elle est activée, la fonction de saut de la corbeille fonctionne même lorsque vous contrôlez Spotify à partir d'un autre appareil (par exemple, un appareil mobile).",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Saut à distance activé",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Saut à distance désactivé",
    MESSAGE_SONG_ADDED_REMOTE: "Chanson supprimée à distance",
    SETTINGS_TRASH_VIA_LIKE: "Poubelle via Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Comme une chanson provenant d'un mobile à supprimer. Supprime automatiquement le « j'aime » et passe au morceau suivant.",
    SETTINGS_AI_DETECTION: "Détection de l'IA",
    SETTINGS_AI_DETECTION_ENABLED: "Détection de chansons par IA",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Détectez les chansons générées par IA à l'aide du modèle SONICS et affichez un indicateur de probabilité. Télécharge un modèle d'environ 50 Mo lors du premier activation.",
    AI_ASSETS_DOWNLOADING: "Téléchargement du modèle d'IA...",
    AI_ASSETS_READY: "Modèle d'IA prêt",
    AI_ASSETS_NOT_READY: "Modèle d'IA non disponible",
    SETTINGS_TRASH_AI_SONGS: "Chansons d'IA de mauvaise qualité",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Mettre à la corbeille automatiquement les chansons détectées comme étant générées par IA (probabilité ≥ 80 %)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Effacer tous les résultats de classification IA enregistrés ({{count}} chansons enregistrées).",
    ACTION_CLEAR_AI_STORAGE: "Clair",
    MESSAGE_AI_STORAGE_CLEARED: "Les résultats d'IA ont été effacés",
    AI_TIER_LIKELY_HUMAN: "Probablement humain",
    AI_TIER_PROBABLY_HUMAN: "Probablement humain",
    AI_TIER_UNCERTAIN: "Incertain",
    AI_TIER_PROBABLY_AI: "Probablement l'IA",
    AI_TIER_LIKELY_AI: "IA probable",
    ACTION_REMOVE_TRASHED: "Supprimer les chansons supprimées",
    CONFIRM_REMOVE_TRASHED: "Supprimer {{count}} chanson(s) mise(s) à la corbeille de cette liste de lecture ? Cette action est irréversible.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "{{count}} morceau(x) supprimé(s) de la corbeille de la liste de lecture",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Aucune chanson supprimée trouvée dans cette liste de lecture"
  };
});

// src/i18n/fr.json
var require_fr = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Corbeille+",
    ACTION_THROW: "Placer dans la corbeille",
    ACTION_UNTHROW: "Supprimer de la corbeille",
    ACTION_CLEAR: "Clair",
    ACTION_COPY: "Copier",
    ACTION_EXPORT: "Exporter",
    ACTION_IMPORT: "Importer",
    MESSAGE_COPIED: "Copié dans le presse-papiers",
    MESSAGE_CLEARED: "Corbeille vidée avec succès !",
    MESSAGE_SONG_ADDED: "Chanson ajoutée à la corbeille",
    MESSAGE_SONG_REMOVED: "Chanson supprimée de la corbeille",
    MESSAGE_ARTIST_ADDED: "Artiste ajouté à la corbeille",
    MESSAGE_ARTIST_REMOVED: "Artiste supprimé de la corbeille",
    BACKUP_SAVE_SUCCESS: "Sauvegarde effectuée avec succès.",
    BACKUP_SAVE_FAILED: "Échec de la sauvegarde, essayez de copier le contenu de la corbeille dans le presse-papiers et de créer une sauvegarde manuellement.",
    BACKUP_RESTORE_SUCCESS: "Sauvegarde restaurée avec succès.",
    BACKUP_FILE_READ_FAILED: "Échec de la lecture du fichier, veuillez vous assurer qu'il s'agit d'un fichier JSON valide.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Paramètres de Trashbin+",
    SETTINGS_OPTIONS: "Options",
    SETTINGS_FEATURES: "Fonctionnalités",
    SETTINGS_STORAGE: "Stockage",
    SETTINGS_ENABLED: "Activé",
    SETTINGS_SHOW_WIDGET: "Afficher l'icône du widget",
    SETTINGS_AUTOPLAY: "Lecture automatique au démarrage",
    SETTINGS_QUEUE_TRASHBIN: "Activer la corbeille de la file d'attente",
    SETTINGS_TRACKLIST_TRASHBIN: "Activer la corbeille de la liste de lecture",
    SETTINGS_PLAYLIST_MONITOR: "Moniteur de playlist",
    ITEMS_TITLE: "Éléments de la corbeille+",
    ITEMS_EMPTY_SONGS: "<strong>Aucune chanson à la corbeille !</strong><br/>Les chansons que vous ajoutez à la corbeille apparaîtront ici.",
    ITEMS_EMPTY_ARTISTS: "<strong>Aucun artiste mis à la corbeille !</strong><br/>Les artistes que vous ajoutez à la corbeille apparaîtront ici.",
    ITEMS_TAB_SONGS: "Chansons",
    ITEMS_TAB_ARTISTS: "Artistes",
    ITEMS_LOADED_COUNT: "{{loaded}} sur {{total}} {{type}} chargé",
    ITEMS_SEARCH_PLACEHOLDER: "Rechercher par nom, artiste ou URI...",
    DESCRIPTION_COPY: "Copier tous les éléments de la corbeille dans le presse-papiers.",
    DESCRIPTION_EXPORT: "Enregistrer tous les éléments de la corbeille dans un fichier .json.",
    DESCRIPTION_IMPORT: "Écraser tous les éléments de la corbeille via le fichier .json.",
    DESCRIPTION_CLEAR: "Supprimer tous les éléments de la corbeille (action irréversible).",
    ITEMS_EMPTY_SONGS_TITLE: "Pas de chansons supprimées !",
    ITEMS_EMPTY_ARTISTS_TITLE: "Pas d'artistes supprimés !",
    DESCRIPTION_SETTINGS_ENABLED: "Interrupteur principal pour activer ou désactiver toutes les fonctionnalités de Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Afficher une icône de corbeille dans la barre de lecture à côté de la piste en cours de lecture pour un accès rapide",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Lancer automatiquement la lecture de musique lorsque Spotify s'ouvre ou que l'extension se charge",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Ajoutez des icônes de corbeille à côté de chaque chanson dans votre file d'attente à venir pour une gestion facile",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Ajouter des icônes de corbeille à côté des chansons dans les vues album et playlist pour un filtrage rapide",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Récupérez automatiquement les anomalies de lecture sur Spotify en reprenant votre dernière playlist",
    SETTINGS_SKIP_TRASHED_TRACKS: "Ignorer les pistes supprimées",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Ignorer automatiquement les chansons supprimées et trouver la prochaine piste autorisée pendant la lecture",
    SETTINGS_AUTO_CLEAN_QUEUE: "File d'attente de nettoyage automatique",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Supprimer automatiquement les chansons supprimées de votre file d'attente Smart Shuffle",
    SETTINGS_REMOTE_CONTROL: "Télécommande",
    SETTINGS_REMOTE_TOGGLE: "Activer la bascule à distance",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Appuyez deux fois sur lecture/pause depuis le mobile pour activer ou désactiver la fonction de saut de piste à distance. Le saut d'une piste confirme le changement d'état.",
    SETTINGS_REMOTE_SKIPPING: "Saut à distance actif",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Lorsqu'elle est activée, la fonction de saut de la corbeille fonctionne même lorsque vous contrôlez Spotify à partir d'un autre appareil (par exemple, un téléphone mobile).",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Saut à distance activé",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Saut à distance désactivé",
    MESSAGE_SONG_ADDED_REMOTE: "Chanson supprimée à distance",
    SETTINGS_TRASH_VIA_LIKE: "Poubelle via Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Comme une chanson provenant du mobile, supprime-la. Supprime automatiquement le « j'aime » et passe au morceau suivant.",
    SETTINGS_AI_DETECTION: "Détection de l'IA",
    SETTINGS_AI_DETECTION_ENABLED: "Détection de chanson par IA",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Détecter les chansons générées par l'IA à l'aide du modèle SONICS et afficher un indicateur de probabilité. Télécharge un modèle d'environ 50 Mo lors du premier activation.",
    AI_ASSETS_DOWNLOADING: "Téléchargement du modèle d'intelligence artificielle...",
    AI_ASSETS_READY: "Modèle d'IA prêt",
    AI_ASSETS_NOT_READY: "Modèle d'IA non disponible",
    SETTINGS_TRASH_AI_SONGS: "Chansons d'IA de mauvaise qualité",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Mettre à la corbeille automatiquement les chansons détectées comme générées par IA (probabilité ≥ 80 %)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Effacer tous les résultats de classification IA enregistrés ({{count}} morceaux enregistrés).",
    ACTION_CLEAR_AI_STORAGE: "Clair",
    MESSAGE_AI_STORAGE_CLEARED: "Les résultats de l'IA ont été effacés",
    AI_TIER_LIKELY_HUMAN: "Probablement humain",
    AI_TIER_PROBABLY_HUMAN: "Probablement humain",
    AI_TIER_UNCERTAIN: "Incertain",
    AI_TIER_PROBABLY_AI: "Probablement l'IA",
    AI_TIER_LIKELY_AI: "IA probable",
    ACTION_REMOVE_TRASHED: "Supprimer les chansons supprimées",
    CONFIRM_REMOVE_TRASHED: "Supprimer {{count}} morceau(x) mis à la corbeille de cette playlist ? Cette action est irréversible.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "{{count}} morceau(x) supprimé(s) de la playlist ont été retirés",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Aucune chanson supprimée trouvée dans cette playlist"
  };
});

// src/i18n/gl.json
var require_gl = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Papeleira+",
    ACTION_THROW: "Colocar no lixo",
    ACTION_UNTHROW: "Eliminar da lixeira",
    ACTION_CLEAR: "Claro",
    ACTION_COPY: "Copiar",
    ACTION_EXPORT: "Exportar",
    ACTION_IMPORT: "Importar",
    MESSAGE_COPIED: "Copiado no portapapeis",
    MESSAGE_CLEARED: "Papeleira baleirada satisfactoriamente!",
    MESSAGE_SONG_ADDED: "Canción engadida ao lixo",
    MESSAGE_SONG_REMOVED: "Canción eliminada do lixo",
    MESSAGE_ARTIST_ADDED: "Artista engadido á lixeira",
    MESSAGE_ARTIST_REMOVED: "Artista eliminado do lixo",
    BACKUP_SAVE_SUCCESS: "Copia de seguridade gardada correctamente.",
    BACKUP_SAVE_FAILED: "Non foi posíbel gardar a copia de seguridade, probe copiar o contido do lixo no portapapeis e crear unha copia de seguridade manualmente.",
    BACKUP_RESTORE_SUCCESS: "Copia de seguridade restaurada correctamente.",
    BACKUP_FILE_READ_FAILED: "Non foi posíbel ler o ficheiro, asegúrese de que é un ficheiro JSON válido.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Configuración de Trashbin+",
    SETTINGS_OPTIONS: "Opcións",
    SETTINGS_FEATURES: "Características",
    SETTINGS_STORAGE: "Almacenamento",
    SETTINGS_ENABLED: "Activado",
    SETTINGS_SHOW_WIDGET: "Amosar icona do trebello",
    SETTINGS_AUTOPLAY: "Reprodución automática ao iniciar",
    SETTINGS_QUEUE_TRASHBIN: "Activar a lixeira da cola",
    SETTINGS_TRACKLIST_TRASHBIN: "Activar Lixo da Lista de Temas",
    SETTINGS_PLAYLIST_MONITOR: "Monitor de listas de reprodución",
    ITEMS_TITLE: "Elementos da lixeira+",
    ITEMS_EMPTY_SONGS: "<strong>Sen cancións no lixo!</strong><br/>As cancións que engadas ao lixo aparecerán aquí.",
    ITEMS_EMPTY_ARTISTS: "<strong>Sen artistas na lixeira!</strong><br/>Os artistas que engadas á lixeira aparecerán aquí.",
    ITEMS_TAB_SONGS: "Cancións",
    ITEMS_TAB_ARTISTS: "Artistas",
    ITEMS_LOADED_COUNT: "{{loaded}} de {{total}} {{type}} cargados",
    ITEMS_SEARCH_PLACEHOLDER: "Buscar por nome, artista ou URI...",
    DESCRIPTION_COPY: "Copiar todos os elementos do lixo ao portapapeis.",
    DESCRIPTION_EXPORT: "Gardar todos os elementos no lixo nun ficheiro .json.",
    DESCRIPTION_IMPORT: "Substituír todos os elementos no cesto da lixo mediante ficheiro .json.",
    DESCRIPTION_CLEAR: "Borrar todos os elementos do lixo (non se pode desfacer).",
    ITEMS_EMPTY_SONGS_TITLE: "Sen cancións eliminadas!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Sen artistas eliminados!",
    DESCRIPTION_SETTINGS_ENABLED: "Interruptor principal para activar ou desactivar todas as funcións de Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Amosar unha icona de lixo na barra de reprodución xunto á pista que se está reproducindo para un acceso rápido",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Iniciar automaticamente a reprodución de música cando se abra Spotify ou cargue a extensión",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Engadir iconas de lixo ao carón de cada canción na cola próxima para unha xestión sinxela",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Engadir iconas de lixo ao carón das cancións nas vistas de álbum e lista de reprodución para un filtrado rápido",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Recupera automaticamente dos fallos de reprodución de Spotify retomando a túa última lista de reprodución",
    SETTINGS_SKIP_TRASHED_TRACKS: "Omitir pistas eliminadas",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Saltar automaticamente as cancións eliminadas e atopar a seguinte pista permitida durante a reprodución",
    SETTINGS_AUTO_CLEAN_QUEUE: "Cola de limpeza automática",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Elimina automaticamente as cancións eliminadas da túa cola de reprodución aleatoria intelixente",
    SETTINGS_REMOTE_CONTROL: "Control remoto",
    SETTINGS_REMOTE_TOGGLE: "Activar alternancia remota",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Pulsa dúas veces reproducir/pausa desde o móbil para activar/desactivar o salto remoto. Un salto de pista confirma a activación/desactivación.",
    SETTINGS_REMOTE_SKIPPING: "Omitido remoto activo",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Cando está activado, omitir o lixo funciona incluso cando se controla Spotify desde outro dispositivo (por exemplo, móbil)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Activado o salto remoto",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "O salto remoto está desactivado",
    MESSAGE_SONG_ADDED_REMOTE: "Canción eliminada a distancia",
    SETTINGS_TRASH_VIA_LIKE: "Lixo vía Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: 'Como unha canción desde o móbil ata a lixeira. Automaticamente quita o "gústame" e pasa á seguinte pista.',
    SETTINGS_AI_DETECTION: "Detección de IA",
    SETTINGS_AI_DETECTION_ENABLED: "Detección de cancións de IA",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Detecta cancións xeradas por IA usando o modelo SONICS e amosa un indicador de probabilidade. Descarga un modelo de ~50MB ao activalo por primeira vez.",
    AI_ASSETS_DOWNLOADING: "Descargando modelo de IA...",
    AI_ASSETS_READY: "Modelo de IA listo",
    AI_ASSETS_NOT_READY: "Modelo de IA non dispoñible",
    SETTINGS_TRASH_AI_SONGS: "Cancións de lixo de IA",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Eliminar automaticamente as cancións detectadas como xeradas por IA (probabilidade ≥ 80 %)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Limpar todos os resultados almacenados de clasificación por IA ({{count}} cancións almacenadas).",
    ACTION_CLEAR_AI_STORAGE: "Claro",
    MESSAGE_AI_STORAGE_CLEARED: "Os resultados da IA foron limpos",
    AI_TIER_LIKELY_HUMAN: "Probablemente humano",
    AI_TIER_PROBABLY_HUMAN: "Probabelmente humano",
    AI_TIER_UNCERTAIN: "Inseguro",
    AI_TIER_PROBABLY_AI: "Probabelmente IA",
    AI_TIER_LIKELY_AI: "Inteligencia Artificial probable",
    ACTION_REMOVE_TRASHED: "Eliminar cancións eliminadas",
    CONFIRM_REMOVE_TRASHED: "Queres eliminar {{count}} canción(s) da lixeira desta lista de reprodución? Esta acción non se pode desfacer.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Eliminouse {{count}} canción(s) da lista de reprodución da lixeira",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Non se atoparon cancións eliminadas nesta lista de reprodución"
  };
});

// src/i18n/gu.json
var require_gu = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "ટ્રાશબિન+",
    ACTION_THROW: "ટ્રાશબિનમાં મૂકો",
    ACTION_UNTHROW: "ટ્રાશબિનમાંથી દૂર કરો",
    ACTION_CLEAR: "સ્પષ્ટ",
    ACTION_COPY: "નકલ",
    ACTION_EXPORT: "નિકાસ",
    ACTION_IMPORT: "આયાત",
    MESSAGE_COPIED: "ક્લિપબોર્ડ પર કૉપિ કર્યું",
    MESSAGE_CLEARED: "તબાકુની ડોકી સફળતાપૂર્વક સાફ કરવામાં આવી!",
    MESSAGE_SONG_ADDED: "ગીત કચરાપેટીમાં ઉમેરાયું",
    MESSAGE_SONG_REMOVED: "ગીત કચરાપેટીમાંથી દૂર કરાયું",
    MESSAGE_ARTIST_ADDED: "કલાકારને કચરાપેટીમાં ઉમેરાયો",
    MESSAGE_ARTIST_REMOVED: "કલાકારને કચરાપેટીમાંથી દૂર કરવામાં આવ્યો",
    BACKUP_SAVE_SUCCESS: "બેકઅપ સફળતાપૂર્વક સાચવાયું.",
    BACKUP_SAVE_FAILED: "બેકઅપ સાચવવામાં નિષ્ફળ, કચરાપેટીની સામગ્રીને ક્લિપબોર્ડ પર કૉપી કરીને અને મેન્યુઅલ રીતે બેકઅપ બનાવવાનો પ્રયત્ન કરો.",
    BACKUP_RESTORE_SUCCESS: "બેકઅપ સફળતાપૂર્વક પુનઃસ્થાપિત કરાયું.",
    BACKUP_FILE_READ_FAILED: "ફાઇલ વાંચવામાં નિષ્ફળ, કૃપા કરીને ખાતરી કરો કે તે માન્ય JSON ફાઇલ છે.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "ટ્રાશબિન+ સેટિંગ્સ",
    SETTINGS_OPTIONS: "વિકલ્પો",
    SETTINGS_FEATURES: "સુવિધાઓ",
    SETTINGS_STORAGE: "સ્ટોરેજ",
    SETTINGS_ENABLED: "સક્ષમ",
    SETTINGS_SHOW_WIDGET: "વિજેટ આઇકન બતાવો",
    SETTINGS_AUTOPLAY: "શરૂઆતમાં ઓટોપ્લે",
    SETTINGS_QUEUE_TRASHBIN: "ક્યૂ ટ્રેશબિન સક્ષમ કરો",
    SETTINGS_TRACKLIST_TRASHBIN: "ટ્રેકલિસ્ટ કચરાપેટી સક્ષમ કરો",
    SETTINGS_PLAYLIST_MONITOR: "પ્લેલિસ્ટ મોનિટર",
    ITEMS_TITLE: "ટ્રાશબિન+ આઇટમ્સ",
    ITEMS_EMPTY_SONGS: "<strong>કોઈ ફેંકાયેલા ગીત નથી!</strong><br/>તમે કચરાપેટીમાં ઉમેરેલા ગીતો અહીં દેખાશે.",
    ITEMS_EMPTY_ARTISTS: "<strong>કોઈ કચરો કલાકારો નહીં!</strong><br/>તમે કચરાપેટીમાં ઉમેરેલા કલાકારો અહીં દેખાશે.",
    ITEMS_TAB_SONGS: "ગીતો",
    ITEMS_TAB_ARTISTS: "કલાકારો",
    ITEMS_LOADED_COUNT: "{{total}} પૈકી {{loaded}} {{type}} લોડ થયેલ",
    ITEMS_SEARCH_PLACEHOLDER: "નામ, કલાકાર અથવા URI દ્વારા શોધો...",
    DESCRIPTION_COPY: "ટ્રાશબિનમાં બધી વસ્તુઓ ક્લિપબોર્ડ પર કૉપિ કરો.",
    DESCRIPTION_EXPORT: "ટ્રાશબિનમાં બધી વસ્તુઓને .json ફાઇલમાં સેવ કરો.",
    DESCRIPTION_IMPORT: "કચરાપેટીમાંની બધી વસ્તુઓને .json ફાઇલ દ્વારા ઓવરરાઇટ કરો.",
    DESCRIPTION_CLEAR: "બધી વસ્તુઓ કચરાપેટીમાંથી કાઢી નાખો (પાછી ખેંચી શકાય નહીં).",
    ITEMS_EMPTY_SONGS_TITLE: "કોઈ ફેંકાયેલા ગીતો નહીં!",
    ITEMS_EMPTY_ARTISTS_TITLE: "કોઈ ફેંકાયેલ કલાકાર નહીં!",
    DESCRIPTION_SETTINGS_ENABLED: "ટ્રાશબિન+ ની બધી કાર્યક્ષમતા સક્ષમ અથવા અક્ષમ કરવા માટર ટોગલ",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "વર્તમાનમાં ચાલી રહેલા ટ્રેકની બાજુમાં પ્લેબેક બારમાં કચરો આઇકોન પ્રદર્શિત કરો જેથી ઝડપી ઍક્સેસ મળી શકે",
    DESCRIPTION_SETTINGS_AUTOPLAY: "સ્પોટિફાય ખુલે અથવા એક્સટેન્શન લોડ થાય ત્યારે સ્વચાલિત રીતે સંગીત વગાડવાનું શરૂ કરો",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "તમારી આગામી ક્યૂમાં દરેક ગીત પાસે કચરો આઇકોન ઉમેરો સરળ સંચાલન માટે",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "એલ્બમ અને પ્લેલિસ્ટ દૃશ્યોમાં ગીતોની બાજુમાં કચરો આઇકોન ઉમેરો ઝડપી ફિલ્ટરિંગ માટે",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "સ્પોટિફાય પ્લેબેક ગેરબરાબરીઓમાંથી તમારી છેલ્લી પ્લેલિસ્ટ ફરીથી શરૂ કરીને આપમેળે રિકવર કરો",
    SETTINGS_SKIP_TRASHED_TRACKS: "ખામીયુક્ત ટ્રેક છોડો",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "આપમેળે કચરો ગીતો છોડી દો અને પ્લેબેક દરમિયાન આગળની મંજૂરી આપેલ ટ્રેક શોધો",
    SETTINGS_AUTO_CLEAN_QUEUE: "ઑટો ક્લીન કતાર",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "તમારી સ્માર્ટ શફલ કતારમાંથી કચરો ગીતો આપમેળે દૂર કરો",
    SETTINGS_REMOTE_CONTROL: "રિમોટ કંટ્રોલ",
    SETTINGS_REMOTE_TOGGLE: "રિમોટ ટૉગલ સક્ષમ કરો",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "મોબાઇલ પરથી પ્લે/પૉઝ પર બે વખત ટૅપ કરીને રિમોટ સ્કિપિંગ ચાલુ/બંધ કરો. ટ્રૅક સ્કિપ કરવાથી ટૉગલ પુષ્ટિ થશે.",
    SETTINGS_REMOTE_SKIPPING: "દૂરસ્થ સ્કિપિંગ સક્રિય",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "સક્ષમ હોય ત્યારે, ટ્રેશ-સ્કિપિંગ બીજા ઉપકરણ (ઉદાહરણ તરીકે, મોબાઇલ) માંથી સ્પોટિફાય નિયંત્રિત કરતી વખતે પણ કામ કરે છે",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "દૂરસ્થ સ્કિપિંગ સક્ષમ કરેલ છે",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "દૂરસ્થ સ્કિપિંગ અક્ષમ",
    MESSAGE_SONG_ADDED_REMOTE: "ગીત રિમોટ દ્વારા નષ્ટ કરાયું",
    SETTINGS_TRASH_VIA_LIKE: "લાઇક દ્વારા કચરો",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "મોબાઇલમાંથી તેને કચરામાં ફેંકવા જેવું ગીત. આપમેળે અનલાઇક કરે અને આગલા ટ્રેક પર જાય.",
    SETTINGS_AI_DETECTION: "એઆઈ ડિટેક્શન",
    SETTINGS_AI_DETECTION_ENABLED: "એઆઈ ગીત શોધ",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "SONICS મૉડેલનો ઉપયોગ કરીને એઆઈ-જનરેટેડ ગીતોની પહેચાન કરો અને સંભાવના સૂચક બતાવો. પ્રથમ વખત સક્ષમ કરતી વખતે ~50MB મૉડેલ ડાઉનલોડ થાય છે.",
    AI_ASSETS_DOWNLOADING: "એઆઈ મૉડલ ડાઉનલોડ થઈ રહ્યું છે...",
    AI_ASSETS_READY: "એઆઈ મોડેલ તૈયાર",
    AI_ASSETS_NOT_READY: "એઆઈ મોડેલ ઉપલબ્ધ નથી",
    SETTINGS_TRASH_AI_SONGS: "ટ્રેશ એઆઈ ગીતો",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "સ્વચાલિત રીતે આઈએ-ઉત્પન્ન તરીકે શોધાયેલા ગીતોને ત્રાશમાં મૂકો (સંભાવના ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "સંગ્રહિત કરેલા બધા AI વર્ગીકરણ પરિણામો સાફ કરો ({{count}} ગીતો સંગ્રહિત છે).",
    ACTION_CLEAR_AI_STORAGE: "સ્પષ્ટ",
    MESSAGE_AI_STORAGE_CLEARED: "એઆઈ પરિણામો સ્પષ્ટ થયા",
    AI_TIER_LIKELY_HUMAN: "સંભવિત માનવ",
    AI_TIER_PROBABLY_HUMAN: "સંભવતઃ માનવ",
    AI_TIER_UNCERTAIN: "અનિશ્ચિત",
    AI_TIER_PROBABLY_AI: "સંભવત: એઆઇ",
    AI_TIER_LIKELY_AI: "સંભવિત એઆઈ",
    ACTION_REMOVE_TRASHED: "કચરામાં નાખેલા ગીતો દૂર કરો",
    CONFIRM_REMOVE_TRASHED: "શું તમે આ પ્લેલિસ્ટમાંથી {{count}} કચરો કરેલા ગીત(ઓ) દૂર કરશો? આને પાછું કરી શકાશે નહીં.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "પ્લેલિસ્ટમાંથી {{count}} કચરો કરેલા ગીત(ઓ) દૂર કરાયા",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "આ પ્લેલિસ્ટમાં કોઈ ગીતો ફેંકાયેલા નથી"
  };
});

// src/i18n/he.json
var require_he = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "סל האשפה+",
    ACTION_THROW: "הצב באשפה",
    ACTION_UNTHROW: "הסר מהסל למחוק",
    ACTION_CLEAR: "ברור",
    ACTION_COPY: "העתק",
    ACTION_EXPORT: "ייצוא",
    ACTION_IMPORT: "ייבוא",
    MESSAGE_COPIED: "הועתק ללוח",
    MESSAGE_CLEARED: "אשפה נוקה בהצלחה!",
    MESSAGE_SONG_ADDED: "השיר נוסף לסל האשפה",
    MESSAGE_SONG_REMOVED: "השיר הוסר מהסל המנוקה",
    MESSAGE_ARTIST_ADDED: "אמן נוסף לסל האשפה",
    MESSAGE_ARTIST_REMOVED: "האמן הוסר מהפח האשפה",
    BACKUP_SAVE_SUCCESS: "הגיבוי נשמר בהצלחה",
    BACKUP_SAVE_FAILED: "שמירת הגיבוי נכשלה, נסה להעתיק את תוכן סל המיחזור ללוח העריכה וליצור גיבוי ידנית.",
    BACKUP_RESTORE_SUCCESS: "גיבוי שוחזר בהצלחה",
    BACKUP_FILE_READ_FAILED: "נכשל בקריאת הקובץ, אנא ודא שהוא קובץ JSON תקין.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "הגדרות סל האשפה+",
    SETTINGS_OPTIONS: "אפשרויות",
    SETTINGS_FEATURES: "תכונות",
    SETTINGS_STORAGE: "אחסון",
    SETTINGS_ENABLED: "מופעל",
    SETTINGS_SHOW_WIDGET: "הצג סמל ווידג'ט",
    SETTINGS_AUTOPLAY: "הפעלה אוטומטית בהתחלה",
    SETTINGS_QUEUE_TRASHBIN: "הפעלת אסלה של תור",
    SETTINGS_TRACKLIST_TRASHBIN: "הפעלת סל האשפה של רשימת הרצועות",
    SETTINGS_PLAYLIST_MONITOR: "מוניטור רשימת ניגון",
    ITEMS_TITLE: "פריטים של סל האשפה+",
    ITEMS_EMPTY_SONGS: "<strong>אין שירים באשפה!</strong><br/>שירים שתרימו לפח האשפה יופיעו כאן.",
    ITEMS_EMPTY_ARTISTS: "<strong>אין אמנים באשפה!</strong><br/>אמנים שתרימו לפח האשפה יופיעו כאן.",
    ITEMS_TAB_SONGS: "שירים",
    ITEMS_TAB_ARTISTS: "אמנים",
    ITEMS_LOADED_COUNT: "{{loaded}} מתוך {{total}} {{type}} נטענו",
    ITEMS_SEARCH_PLACEHOLDER: "חיפוש לפי שם, אמן או URI...",
    DESCRIPTION_COPY: "העתק את כל הפריטים באסלה ללוח.",
    DESCRIPTION_EXPORT: "שמור את כל הפריטים באשפה לקובץ .json.",
    DESCRIPTION_IMPORT: "החלף את כל הפריטים בסל המיחזור באמצעות קובץ .json.",
    DESCRIPTION_CLEAR: "לנקות את כל הפריטים מהפח (לא ניתן להחזיר)",
    ITEMS_EMPTY_SONGS_TITLE: "אין שירים באשפה!",
    ITEMS_EMPTY_ARTISTS_TITLE: "אין אמנים מושלכים!",
    DESCRIPTION_SETTINGS_ENABLED: "כיבוי/הפעלה מרכזי להפעלת או השבתת כל תכונות האשפה+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "הצגת סמל פח האשפה בסרגל השמעה ליד הרצועה הניגנת כרגע להגעה מהירה",
    DESCRIPTION_SETTINGS_AUTOPLAY: "הפעלת ניגון מוזיקה אוטומטית בעת פתיחת Spotify או טעינת ההרחבה",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "הוסיפו סמלי פח לאשפה ליד כל שיר בתור ההשמעה הבא לניהול קליל",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "הוספת סמלי אשפה ליד שירים בתצוגות של אלבום ורשימת נגינה לצורך סינון מהיר",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "שחזור אוטומטי מתקלות ניגון ב-Spotify על ידי המשך ניגון רשימת ההשמעה האחרונה שלך",
    SETTINGS_SKIP_TRASHED_TRACKS: "דלג על רצועות שנמחקו",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "דילוג אוטומטי על שירים שנמחקו ומציאת הרצועה המותרת הבאה במהלך הנגינה",
    SETTINGS_AUTO_CLEAN_QUEUE: "תור ניקוי אוטומטי",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "הסרה אוטומטית של שירים שנמחקו מהתור של הסדר המעורבב החכם שלך",
    SETTINGS_REMOTE_CONTROL: "שלט רחוק",
    SETTINGS_REMOTE_TOGGLE: "הפעלת החלפה מרחוק",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "הקשה פעמיתים על lecture/השהיה מהמכשיר הנייד כדי להחליף בין מצבים של דילוג מרחוק. דילוג על שיר יאמת את השינוי.",
    SETTINGS_REMOTE_SKIPPING: "דילוג מרחוק פעיל",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "כאשר מופעל, דילוג על מחוקים פועל גם כששולטים בספוטיפי ממכשיר אחר (למשל, סלולרי)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "דילוג מרחוק מופעל",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "דילוג מרחוק מבוטל",
    MESSAGE_SONG_ADDED_REMOTE: "שיר נהרס מרחוק",
    SETTINGS_TRASH_VIA_LIKE: "זבל דרך לייק",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "כמו שיר מהנייד לסל האשפה. מבטל לייק אוטומטית ומדלג לרצועה הבאה.",
    SETTINGS_AI_DETECTION: "זיהוי בינה מלאכותית",
    SETTINGS_AI_DETECTION_ENABLED: "זיהוי שירים באמצעות בינה מלאכותית",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: 'זיהוי שירים שנוצרו באמצעות בינה מלאכותית באמצעות מודל SONICS והצגת מדד הסתברות. מורד מודל בגודל של כ-50 מ"ב בהפעלה ראשונה.',
    AI_ASSETS_DOWNLOADING: "מוריד מודל בינה מלאכותית...",
    AI_ASSETS_READY: "מודל בינה מלאכותית מוכן",
    AI_ASSETS_NOT_READY: "מודל בינה מלאכותית אינו זמין",
    SETTINGS_TRASH_AI_SONGS: "שירי AI זבל",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "למחוק אוטומטית שירים שזוהו כמיוצרים באמצעות בינה מלאכותית (הסתברות ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "נקה את כל תוצאות המיון של בינה מלאכותית ({{count}} שירים נשמרו).",
    ACTION_CLEAR_AI_STORAGE: "ברור",
    MESSAGE_AI_STORAGE_CLEARED: "התוצאות של בינה מלאכותית נוקו",
    AI_TIER_LIKELY_HUMAN: "סביר להניח אנושי",
    AI_TIER_PROBABLY_HUMAN: "כנראה אנושי",
    AI_TIER_UNCERTAIN: "לא ודאי",
    AI_TIER_PROBABLY_AI: "כנראה בינה מלאכותית",
    AI_TIER_LIKELY_AI: "ב likelihood של בינה מלאכותית",
    ACTION_REMOVE_TRASHED: "הסר שירים שנמחקו לסל האשפה",
    CONFIRM_REMOVE_TRASHED: "להסיר {{count}} שירים שנמחקו מהרשימה הזו? לא ניתן לבטל פעולה זו.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "הוסרו {{count}} שירים מהפלייליסט🗑️",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "לא נמצאו שירים באשפה ברשימת השמע הזו"
  };
});

// src/i18n/hi.json
var require_hi = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "ट्रैशबिन+",
    ACTION_THROW: "ट्रैशबिन में रखें",
    ACTION_UNTHROW: "ट्रैशबिन से हटाएं",
    ACTION_CLEAR: "स्पष्ट",
    ACTION_COPY: "कॉपी",
    ACTION_EXPORT: "निर्यात",
    ACTION_IMPORT: "आयात",
    MESSAGE_COPIED: "क्लिपबोर्ड पर कॉपी किया गया",
    MESSAGE_CLEARED: "ट्रैशबिन सफलतापूर्वक साफ किया गया!",
    MESSAGE_SONG_ADDED: "गाना ट्रैशबिन में जोड़ा गया",
    MESSAGE_SONG_REMOVED: "गाना रद्दी के डिब्बे से हटा दिया गया",
    MESSAGE_ARTIST_ADDED: "कलाकार को रद्दी डिब्बे में जोड़ा गया",
    MESSAGE_ARTIST_REMOVED: "कलाकार को रद्दी डिब्बे से हटा दिया गया",
    BACKUP_SAVE_SUCCESS: "बैकअप सफलतापूर्वक सहेजा गया।",
    BACKUP_SAVE_FAILED: "बैकअप सहेजने में विफल, कृपया ट्रैशबिन की सामग्री को क्लिपबोर्ड पर कॉपी करने और मैन्युअल रूप से बैकअप बनाने का प्रयास करें।",
    BACKUP_RESTORE_SUCCESS: "बैकअप सफलतापूर्वक बहाल किया गया।",
    BACKUP_FILE_READ_FAILED: "फ़ाइल पढ़ने में विफल, कृपया सुनिश्चित करें कि यह एक मान्य JSON फ़ाइल है।",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "ट्रैशबिन+ सेटिंग्स",
    SETTINGS_OPTIONS: "विकल्प",
    SETTINGS_FEATURES: "विशेषताएँ",
    SETTINGS_STORAGE: "भंडारण",
    SETTINGS_ENABLED: "सक्षम",
    SETTINGS_SHOW_WIDGET: "विजेट आइकन दिखाएं",
    SETTINGS_AUTOPLAY: "प्रारंभ में स्वत: चलाएं",
    SETTINGS_QUEUE_TRASHBIN: "कतार रद्दी बक्सा सक्षम करें",
    SETTINGS_TRACKLIST_TRASHBIN: "ट्रैकलिस्ट ट्रैशबिन सक्षम करें",
    SETTINGS_PLAYLIST_MONITOR: "प्लेलिस्ट मॉनिटर",
    ITEMS_TITLE: "ट्रैशबिन+ आइटम",
    ITEMS_EMPTY_SONGS: "<strong>कोई फेंके हुए गाने नहीं!</strong><br/>गाने जिन्हें आप रद्दी डिब्बे में डालते हैं वे यहां दिखाई देंगे।",
    ITEMS_EMPTY_ARTISTS: "<strong>कोई अपशिष्ट कलाकार नहीं!</strong><br/>कलाकार जिन्हें आप ट्रैशबिन में डालते हैं वे यहां दिखाई देंगे।",
    ITEMS_TAB_SONGS: "गाने",
    ITEMS_TAB_ARTISTS: "कलाकार",
    ITEMS_LOADED_COUNT: "{{total}} में से {{loaded}} {{type}} लोड हुआ",
    ITEMS_SEARCH_PLACEHOLDER: "नाम, कलाकार या URI द्वारा खोजें...",
    DESCRIPTION_COPY: "ट्रेशबिन में सभी आइटम को क्लिपबोर्ड पर कॉपी करें।",
    DESCRIPTION_EXPORT: "ट्रैशबिन में सभी आइटम को एक .json फ़ाइल में सहेजें।",
    DESCRIPTION_IMPORT: "कचरा बक्से में सभी आइटम को .json फ़ाइल के माध्यम से ओवरराइट करें।",
    DESCRIPTION_CLEAR: "ट्रैशबिन से सभी आइटम हटाएं (पुनः प्राप्त नहीं किया जा सकता)।",
    ITEMS_EMPTY_SONGS_TITLE: "कोई हटाए गए गाने नहीं!",
    ITEMS_EMPTY_ARTISTS_TITLE: "कोई नष्ट कलाकार नहीं!",
    DESCRIPTION_SETTINGS_ENABLED: "सभी ट्रैशबिन+ कार्यक्षमता को सक्षम या अक्षम करने के लिए मास्टर टॉगल",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "प्लेबैक बार में वर्तमान में चल रहे ट्रैक के बगल में त्वरित पहुंच के लिए एक ट्रैश आइकन प्रदर्शित करें",
    DESCRIPTION_SETTINGS_AUTOPLAY: "स्पॉटिफाई खुलते ही या एक्सटेंशन लोड होते ही स्वचालित रूप से संगीत चलाना शुरू करें",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "अपने आगामी कतार में प्रत्येक गीत के बगल में ट्रैश आइकन जोड़ें ताकि आसान प्रबंधन हो सके",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "एल्बम और प्लेलिस्ट दृश्यों में गानों के बगल में ट्रैश आइकन जोड़ें ताकि त्वरित फ़िल्टरिंग की जा सके",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "स्पॉटिफाई प्लेबैक गड़बड़ी से अपनी अंतिम प्लेलिस्ट को फिर से शुरू करके स्वचालित रूप से ठीक करें",
    SETTINGS_SKIP_TRASHED_TRACKS: "हटाए गए ट्रैक्स को छोड़ें",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "अपवंचित गीतों को स्वचालित रूप से छोड़ें और प्रस्तुति के दौरान अगले अनुमत ट्रैक को ढूंढें",
    SETTINGS_AUTO_CLEAN_QUEUE: "स्वचालित सफाई कतार",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "स्मार्ट शफल कतार से अपने रद्द किए गए गाने स्वचालित रूप से हटाएं",
    SETTINGS_REMOTE_CONTROL: "रिमोट कंट्रोल",
    SETTINGS_REMOTE_TOGGLE: "दूरस्थ टॉगल सक्षम करें",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "मोबाइल से रिमोट स्किपिंग को चालू/बंद करने के लिए दो बार टैप करें। ट्रैक स्किप करने से टॉगल की पुष्टि होती है।",
    SETTINGS_REMOTE_SKIPPING: "दूरस्थ छोड़ना सक्रिय",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "जब सक्षम किया जाता है, तो कचरा छोड़ना अन्य उपकरण (उदाहरण के लिए, मोबाइल) से स्पॉटिफाई को नियंत्रित करते समय भी काम करता है",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "दूरस्थ छलांग लगाना सक्षम है",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "दूरस्थ छलांग अक्षम",
    MESSAGE_SONG_ADDED_REMOTE: "गाना रिमोट के माध्यम से नष्ट कर दिया गया",
    SETTINGS_TRASH_VIA_LIKE: "लाइक के माध्यम से कचरा",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "मोबाइल से ट्रैश करने के लिए एक गाने की तरह। स्वचालित रूप से अनलाइक करता है और अगले ट्रैक पर जाता है।",
    SETTINGS_AI_DETECTION: "एआई डिटेक्शन",
    SETTINGS_AI_DETECTION_ENABLED: "एआई गाना पता लगाने",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "SONICS मॉडल का उपयोग करके एआई-जनित गानों का पता लगाएं और एक संभावना संकेतक दिखाएं। पहली बार सक्षम करने पर ~50MB मॉडल डाउनलोड करें।",
    AI_ASSETS_DOWNLOADING: "एआई मॉडल डाउनलोड हो रहा है...",
    AI_ASSETS_READY: "एआई मॉडल तैयार है",
    AI_ASSETS_NOT_READY: "एआई मॉडल उपलब्ध नहीं है",
    SETTINGS_TRASH_AI_SONGS: "ट्रैश एआई गाने",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "स्वचालित रूप से उन गानों को ट्रैश करें जिन्हें एआई-उत्पन्न के रूप में पहचाना गया है (संभावना ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "सभी संग्रहीत एआई वर्गीकरण परिणाम स्पष्ट करें ({{count}} गाने संग्रहीत हैं)।",
    ACTION_CLEAR_AI_STORAGE: "स्पष्ट",
    MESSAGE_AI_STORAGE_CLEARED: "एआई परिणाम साफ हो गए",
    AI_TIER_LIKELY_HUMAN: "संभावित मानव",
    AI_TIER_PROBABLY_HUMAN: "शायद मानव",
    AI_TIER_UNCERTAIN: "अनिश्चित",
    AI_TIER_PROBABLY_AI: "शायद एआई",
    AI_TIER_LIKELY_AI: "संभावित एआई",
    ACTION_REMOVE_TRASHED: "मिटे हुए गाने हटाएं",
    CONFIRM_REMOVE_TRASHED: "क्या आप इस प्लेलिस्ट से {{count}} मिटाए गए गाने हटाना चाहते हैं? इसे वापस नहीं किया जा सकता।",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "प्लेलिस्ट से {{count}} मिटाए गए गाने हटा दिए गए",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "इस प्लेलिस्ट में कोई भी गाना नहीं मिला"
  };
});

// src/i18n/hr.json
var require_hr = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Smeće+",
    ACTION_THROW: "Stavi u kantu za smeće",
    ACTION_UNTHROW: "Ukloni iz kante za smeće",
    ACTION_CLEAR: "Jasno",
    ACTION_COPY: "Kopiraj",
    ACTION_EXPORT: "Izvoz",
    ACTION_IMPORT: "Uvoz",
    MESSAGE_COPIED: "Kopirano u međuspremnik",
    MESSAGE_CLEARED: "Smeće je uspješno očišćeno!",
    MESSAGE_SONG_ADDED: "Pjesma dodana u smeće",
    MESSAGE_SONG_REMOVED: "Pjesma uklonjena iz smeća",
    MESSAGE_ARTIST_ADDED: "Umjetnik dodan u smeće",
    MESSAGE_ARTIST_REMOVED: "Umjetnik uklonjen iz smeća",
    BACKUP_SAVE_SUCCESS: "Sigurnosna kopija uspješno spremljena.",
    BACKUP_SAVE_FAILED: "Nije uspjelo spremanje sigurnosne kopije, pokušajte kopirati sadržaj kante za smeće u međuspremnik i ručno napraviti sigurnosnu kopiju.",
    BACKUP_RESTORE_SUCCESS: "Sigurnosna kopija je uspješno vraćena.",
    BACKUP_FILE_READ_FAILED: "Neuspjelo čitanje datoteke, molimo provjerite je li ispravna JSON datoteka.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Postavke kantu za smeće+",
    SETTINGS_OPTIONS: "Mogućnosti",
    SETTINGS_FEATURES: "Značajke",
    SETTINGS_STORAGE: "Skladištenje",
    SETTINGS_ENABLED: "Omogućeno",
    SETTINGS_SHOW_WIDGET: "Prikaži ikonu widgeta",
    SETTINGS_AUTOPLAY: "Automatsko pokretanje pri pokretanju",
    SETTINGS_QUEUE_TRASHBIN: "Omogući red čekanja korpe za smeće",
    SETTINGS_TRACKLIST_TRASHBIN: "Omogući kantu za otpatke popisa pjesama",
    SETTINGS_PLAYLIST_MONITOR: "Playlist Monitor",
    ITEMS_TITLE: "Stavke kantu za smeće+",
    ITEMS_EMPTY_SONGS: "<strong>Nema pjesama u smeću!</strong><br/>Pjesme koje dodate u kantu za smeće pojaviti će se ovdje.",
    ITEMS_EMPTY_ARTISTS: "<strong>Nema umjetnika u smeću!</strong><br/>Umjetnici koje dodate u kantu za smeće pojaviti će se ovdje.",
    ITEMS_TAB_SONGS: "Pjesme",
    ITEMS_TAB_ARTISTS: "Umjetnici",
    ITEMS_LOADED_COUNT: "{{loaded}} od {{total}} {{type}} učitano",
    ITEMS_SEARCH_PLACEHOLDER: "Pretraži po imenu, izvođaču ili URI-ju...",
    DESCRIPTION_COPY: "Kopiraj sve stavke u otpadnoj kanti u međuspremnik.",
    DESCRIPTION_EXPORT: "Spremi sve stavke u kantu za smeće u .json datoteku.",
    DESCRIPTION_IMPORT: "Prepiši sve stavke u kantu za smeće putem .json datoteke.",
    DESCRIPTION_CLEAR: "Obriši sve stavke iz kante za smeće (ne može se poništiti).",
    ITEMS_EMPTY_SONGS_TITLE: "Nema odbačenih pjesama!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Nema odbačenih umjetnika!",
    DESCRIPTION_SETTINGS_ENABLED: "Glavni prekidač za omogućavanje ili onemogućavanje svih funkcija Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Prikaži ikonu kante za smeće na traci za reprodukciju pokraj trenutno sviranog zapisivanja radi brzog pristupa",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Automatski pokreni sviranje glazbe kada se Spotify otvori ili kada se proširenje učita",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Dodajte ikone za brisanje pored svake pjesme u vašem nadolazećem redu za reprodukciju kako biste olakšali upravljanje",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Dodajte ikone za brisanje pored pjesama u prikazima albuma i popisa pjesama za brzo filtriranje",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Automatski se oporavite od kvarova reprodukcije na Spotifyju tako da nastavite s posljednjom reprodukcijom",
    SETTINGS_SKIP_TRASHED_TRACKS: "Preskoči obrisane pjesme",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Automatski preskoči obrisane pjesme i pronađi sljedeću dopuštenu pjesmu tijekom reprodukcije",
    SETTINGS_AUTO_CLEAN_QUEUE: "Red za automatsko čišćenje",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Automatski uklonite pjesme u kantu za smeće iz svoje pametne redoslijed reprodukcije",
    SETTINGS_REMOTE_CONTROL: "Dalekovodno upravljanje",
    SETTINGS_REMOTE_TOGGLE: "Omogući daljinsko prebacivanje",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Dvaput dodirnite reprodukciju/pauzu s mobilnog uređaja da biste uključili/isključili preskakanje na daljinu. Preskakanje pjesme potvrđuje uključivanje/isključivanje.",
    SETTINGS_REMOTE_SKIPPING: "Udaljeno preskakanje aktivno",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Kada je omogućeno, preskakanje otpada funkcionira čak i kada upravljate Spotifyjem s drugog uređaja (npr. mobitela)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Udaljeno preskakanje omogućeno",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Presačkavanje na daljinu onemogućeno",
    MESSAGE_SONG_ADDED_REMOTE: "Pjesma uništena na daljinu",
    SETTINGS_TRASH_VIA_LIKE: "Smeće putem Lajk",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Poput pjesme s mobitela koju bacaš u smeće. Automatski uklanja lajk i prelazi na sljedeću pjesmu.",
    SETTINGS_AI_DETECTION: "Otkrivanje umjetne inteligencije",
    SETTINGS_AI_DETECTION_ENABLED: "Otkrivanje pjesama umjetne inteligencije",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Otkrij pjesme generirane umjetnom inteligencijom koristeći SONICS model i prikaži pokazatelj vjerojatnosti. Preuzima model od ~50 MB prilikom prvog omogućavanja.",
    AI_ASSETS_DOWNLOADING: "Preuzimanje AI modela...",
    AI_ASSETS_READY: "AI model spremna",
    AI_ASSETS_NOT_READY: "AI model nije dostupan",
    SETTINGS_TRASH_AI_SONGS: "Pjesme Trash AI",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Automatski premjesti pjesme prepoznate kao generirane umjetnom inteligencijom u smeće (vjerojatnost ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Obriši sve spremljene rezultate klasifikacije umjetne inteligencije ({{count}} pjesama spremljeno).",
    ACTION_CLEAR_AI_STORAGE: "Jasno",
    MESSAGE_AI_STORAGE_CLEARED: "Rezultati AI su očišćeni",
    AI_TIER_LIKELY_HUMAN: "Vjerojatno ljudski",
    AI_TIER_PROBABLY_HUMAN: "Vjerojatno ljudski",
    AI_TIER_UNCERTAIN: "Nepouzdano",
    AI_TIER_PROBABLY_AI: "Vjerojatno umjetna inteligencija",
    AI_TIER_LIKELY_AI: "Vjerojatna umjetna inteligencija",
    ACTION_REMOVE_TRASHED: "Ukloni pjesme u smeću",
    CONFIRM_REMOVE_TRASHED: "Želite li ukloniti {{count}} pjesmu/pjesme iz ovog popisa za reprodukciju? Ovo nije moguće poništiti.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Uklonjeno {{count}} pjesama iz mape za odlaganje s popisa pjesama",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Nije pronađena nijedna pjesma u kantu za smeće u ovom popisu za reprodukciju"
  };
});

// src/i18n/hu.json
var require_hu = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Kuka+",
    ACTION_THROW: "Helyezze a kukába",
    ACTION_UNTHROW: "Eltávolítás a Kukából",
    ACTION_CLEAR: "Tiszta",
    ACTION_COPY: "Másolás",
    ACTION_EXPORT: "Export",
    ACTION_IMPORT: "Importálás",
    MESSAGE_COPIED: "Másolva a vágólapra",
    MESSAGE_CLEARED: "A kukát sikeresen kiürítették!",
    MESSAGE_SONG_ADDED: "Dal a kukába helyezve",
    MESSAGE_SONG_REMOVED: "A dalat törölték a kukából",
    MESSAGE_ARTIST_ADDED: "Művész hozzáadva a kukához",
    MESSAGE_ARTIST_REMOVED: "A művészt eltávolították a kukából",
    BACKUP_SAVE_SUCCESS: "A biztonsági mentés sikeresen elmentve.",
    BACKUP_SAVE_FAILED: "Nem sikerült menteni a biztonsági másolatot, próbálja meg a kukában lévő tartalmat a vágólapra másolni, és manuálisan készíteni egy biztonsági másolatot.",
    BACKUP_RESTORE_SUCCESS: "A biztonsági mentés sikeresen visszaállítva.",
    BACKUP_FILE_READ_FAILED: "Nem sikerült beolvasni a fájlt, kérjük, győződjön meg róla, hogy érvényes JSON fájl.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-kukásdoboz.json",
    SETTINGS_TITLE: "Kuka+ beállítások",
    SETTINGS_OPTIONS: "Beállítások",
    SETTINGS_FEATURES: "Funkciók",
    SETTINGS_STORAGE: "Tárolás",
    SETTINGS_ENABLED: "Engedélyezve",
    SETTINGS_SHOW_WIDGET: "Widget ikon megjelenítése",
    SETTINGS_AUTOPLAY: "Automatikus lejátszás indításkor",
    SETTINGS_QUEUE_TRASHBIN: "Kukás sor engedélyezése",
    SETTINGS_TRACKLIST_TRASHBIN: "Tracklist-kuka engedélyezése",
    SETTINGS_PLAYLIST_MONITOR: "Lejátszáslista-figyelő",
    ITEMS_TITLE: "Kuka+ elemek",
    ITEMS_EMPTY_SONGS: "<strong>Nincsenek törölt dalok!</strong><br/>A törölthalmazba helyezett dalok itt jelennek meg.",
    ITEMS_EMPTY_ARTISTS: "<strong>Nincsenek törölt előadók!</strong><br/>Az előadók, amelyeket a kukába helyezel, itt jelennek meg.",
    ITEMS_TAB_SONGS: "Dalok",
    ITEMS_TAB_ARTISTS: "Művészek",
    ITEMS_LOADED_COUNT: "{{loaded}} / {{total}} {{type}} betöltve",
    ITEMS_SEARCH_PLACEHOLDER: "Keresés név, előadó vagy URI alapján...",
    DESCRIPTION_COPY: "Minden elem másolása a törölt elemek gyűjtőjéből a vágólapra.",
    DESCRIPTION_EXPORT: "Minden elem mentése a kukában egy .json fájlba.",
    DESCRIPTION_IMPORT: "Az összes elem felülírása a kukában .json fájllal.",
    DESCRIPTION_CLEAR: "Az összes elem törlése a kukából (nem vonható vissza).",
    ITEMS_EMPTY_SONGS_TITLE: "Nincsenek törölt dalok!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Nem kidobott művészek!",
    DESCRIPTION_SETTINGS_ENABLED: "Főkapcsoló a Kuka+ összes funkciójának engedélyezéséhez vagy letiltásához",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Kuka ikon megjelenítése a lejátszás sávjában a jelenleg játszó szám mellett gyors hozzáférés érdekében",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Automatikus zenelejátszás, amikor a Spotify megnyílik vagy a bővítmény betöltődik",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Kukával jelölje meg a következő lejátszólistájában szereplő dalok mellett, hogy könnyen kezelhető legyen",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Kukacikont adjon a számok mellett az album- és lejátszáslistanézetekben a gyors szűréshez",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Automatikus helyreállítás a Spotify lejátszási hibákból az utolsó lejátszáslista folytatásával",
    SETTINGS_SKIP_TRASHED_TRACKS: "Kihagyás a törölt számoknál",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "A törölt számok automatikus kihagyása és a következő engedélyezett szám keresése lejátszás közben",
    SETTINGS_AUTO_CLEAN_QUEUE: "Automatikus tisztítási sor",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "A törölt számok automatikus eltávolítása a Smart Shuffle-listáról",
    SETTINGS_REMOTE_CONTROL: "Távirányító",
    SETTINGS_REMOTE_TOGGLE: "Távoli kapcsoló engedélyezése",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Kétszeres érintés a lejátszás/szünet gombra a mobilról a távoli átugrás be-/kikapcsolásához. Az átugrott szám megerősíti a beállítást.",
    SETTINGS_REMOTE_SKIPPING: "Távoli kihagyás aktív",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Ha engedélyezve van, a kuka kihagyása akkor is működik, ha egy másik eszközről (például mobilról) irányítja a Spotify-ot",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Távoli kihagyás engedélyezve",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Távoli kihagyás letiltva",
    MESSAGE_SONG_ADDED_REMOTE: "Dal törölve távolról",
    SETTINGS_TRASH_VIA_LIKE: "Szemét Like-on keresztül",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Mint egy dalt, amit a telefonról a kukába küld. Automatikusan visszavonja a kedvelést, és a következő számra ugrik.",
    SETTINGS_AI_DETECTION: "AI-felismerés",
    SETTINGS_AI_DETECTION_ENABLED: "AI dalfelismerés",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "AI-generált dalok felismerése a SONICS modell segítségével, valószínűségi jelző megjelenítése. Letöltés: kb. 50 MB-os modell az első engedélyezéskor.",
    AI_ASSETS_DOWNLOADING: "AI modell letöltése...",
    AI_ASSETS_READY: "AI modell kész",
    AI_ASSETS_NOT_READY: "Az AI modell nem elérhető",
    SETTINGS_TRASH_AI_SONGS: "Szemét AI dalok",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Az AI által generáltnak észlelt dalok automatikus törlése (valószínűség ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Az összes tárolt MI-os besorolási eredmény törlése ({{count}} dal tárolva).",
    ACTION_CLEAR_AI_STORAGE: "Tiszta",
    MESSAGE_AI_STORAGE_CLEARED: "Az MI eredmények tisztázva",
    AI_TIER_LIKELY_HUMAN: "Valószínűleg emberi",
    AI_TIER_PROBABLY_HUMAN: "Valószínűleg ember",
    AI_TIER_UNCERTAIN: "Bizonytalan",
    AI_TIER_PROBABLY_AI: "Valószínűleg MI",
    AI_TIER_LIKELY_AI: "Valószínű MI",
    ACTION_REMOVE_TRASHED: "Törölt dalok eltávolítása",
    CONFIRM_REMOVE_TRASHED: "Eltávolítja a törölt {{count}} dalt ebből a lejátszáslistából? Ez nem vonható vissza.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "{{count}} törölt szám eltávolítva a lejátszáslistáról",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Nem található törölt szám ebben a lejátszólistában"
  };
});

// src/i18n/id.json
var require_id = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Tempat Sampah+",
    ACTION_THROW: "Masukkan ke Tempat Sampah",
    ACTION_UNTHROW: "Hapus dari Tempat Sampah",
    ACTION_CLEAR: "Jelas",
    ACTION_COPY: "Salin",
    ACTION_EXPORT: "Ekspor",
    ACTION_IMPORT: "Impor",
    MESSAGE_COPIED: "Disalin ke clipboard",
    MESSAGE_CLEARED: "Tempat sampah berhasil dikosongkan!",
    MESSAGE_SONG_ADDED: "Lagu ditambahkan ke tempat sampah",
    MESSAGE_SONG_REMOVED: "Lagu dihapus dari tempat sampah",
    MESSAGE_ARTIST_ADDED: "Artis ditambahkan ke tempat sampah",
    MESSAGE_ARTIST_REMOVED: "Artis dihapus dari tempat sampah",
    BACKUP_SAVE_SUCCESS: "Cadangan berhasil disimpan.",
    BACKUP_SAVE_FAILED: "Gagal menyimpan cadangan, coba salin isi tempat sampah ke clipboard dan buat cadangan secara manual.",
    BACKUP_RESTORE_SUCCESS: "Cadangan berhasil dipulihkan.",
    BACKUP_FILE_READ_FAILED: "Gagal membaca file, harap pastikan file tersebut adalah file JSON yang valid.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Pengaturan Trashbin+",
    SETTINGS_OPTIONS: "Opsi",
    SETTINGS_FEATURES: "Fitur",
    SETTINGS_STORAGE: "Penyimpanan",
    SETTINGS_ENABLED: "Diaktifkan",
    SETTINGS_SHOW_WIDGET: "Tampilkan Ikon Widget",
    SETTINGS_AUTOPLAY: "Putar otomatis saat Mulai",
    SETTINGS_QUEUE_TRASHBIN: "Aktifkan Tempat Sampah Antrian",
    SETTINGS_TRACKLIST_TRASHBIN: "Aktifkan Tempat Sampah Daftar Lagu",
    SETTINGS_PLAYLIST_MONITOR: "Pemantau Daftar Putar",
    ITEMS_TITLE: "Item Tempat Sampah+",
    ITEMS_EMPTY_SONGS: "<strong>Tidak ada lagu yang dihapus!</strong><br/>Lagu yang Anda masukkan ke tempat sampah akan muncul di sini.",
    ITEMS_EMPTY_ARTISTS: "<strong>Tidak ada artis yang dihapus!</strong><br/>Artis yang Anda tambahkan ke tempat sampah akan muncul di sini.",
    ITEMS_TAB_SONGS: "Lagu-lagu",
    ITEMS_TAB_ARTISTS: "Artis",
    ITEMS_LOADED_COUNT: "{{loaded}} dari {{total}} {{type}} telah dimuat",
    ITEMS_SEARCH_PLACEHOLDER: "Cari berdasarkan nama, artis, atau URI...",
    DESCRIPTION_COPY: "Salin semua item di tempat sampah ke papan klip.",
    DESCRIPTION_EXPORT: "Simpan semua item di tempat sampah ke file .json.",
    DESCRIPTION_IMPORT: "Timpa semua item di tempat sampah melalui file .json.",
    DESCRIPTION_CLEAR: "Hapus semua item dari tempat sampah (tidak dapat dikembalikan).",
    ITEMS_EMPTY_SONGS_TITLE: "Tidak ada lagu yang dihapus!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Tidak ada seniman yang dibuang!",
    DESCRIPTION_SETTINGS_ENABLED: "Sakelar utama untuk mengaktifkan atau menonaktifkan semua fungsi Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Tampilkan ikon tempat sampah di bilah pemutaran di sebelah trek yang sedang diputar untuk akses cepat",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Secara otomatis memutar musik saat Spotify dibuka atau ekstensi dimuat",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Tambahkan ikon tempat sampah di sebelah setiap lagu dalam antrian Anda yang akan datang untuk memudahkan pengelolaan",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Tambahkan ikon tempat sampah di sebelah lagu dalam tampilan album dan daftar putar untuk penyaringan cepat",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Pulihkan secara otomatis dari gangguan pemutaran Spotify dengan melanjutkan daftar putar terakhir Anda",
    SETTINGS_SKIP_TRASHED_TRACKS: "Lewati Lagu yang Dihapus",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Melewati lagu yang dihapus secara otomatis dan menemukan trek berikutnya yang diizinkan selama pemutaran",
    SETTINGS_AUTO_CLEAN_QUEUE: "Antrian Pembersihan Otomatis",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Hapus secara otomatis lagu yang dihapus dari antrian Smart Shuffle Anda",
    SETTINGS_REMOTE_CONTROL: "Kontrol Jarak Jauh",
    SETTINGS_REMOTE_TOGGLE: "Aktifkan Sakelar Jarak Jauh",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Ketuk dua kali tombol putar/jeda dari perangkat seluler untuk mengaktifkan/nonaktifkan lompatan jarak jauh. Melewatkan lagu mengonfirmasi pengaktifan.",
    SETTINGS_REMOTE_SKIPPING: "Melewati Jarak Jauh Aktif",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Ketika diaktifkan, lewati sampah tetap berfungsi meskipun mengendalikan Spotify dari perangkat lain (misalnya, ponsel)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Melompat jarak jauh diaktifkan",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Melompat jarak jauh dinonaktifkan",
    MESSAGE_SONG_ADDED_REMOTE: "Lagu dihapus melalui jarak jauh",
    SETTINGS_TRASH_VIA_LIKE: "Sampah melalui Suka",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Seperti lagu dari ponsel untuk menghapusnya. Secara otomatis menghapus suka dan melompat ke lagu berikutnya.",
    SETTINGS_AI_DETECTION: "Deteksi AI",
    SETTINGS_AI_DETECTION_ENABLED: "Deteksi Lagu AI",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Deteksi lagu yang dihasilkan oleh AI menggunakan model SONICS dan tampilkan indikator probabilitas. Mengunduh model ~50MB saat pertama kali diaktifkan.",
    AI_ASSETS_DOWNLOADING: "Mengunduh model AI...",
    AI_ASSETS_READY: "Model AI siap",
    AI_ASSETS_NOT_READY: "Model AI tidak tersedia",
    SETTINGS_TRASH_AI_SONGS: "Lagu AI Sampah",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Otomatis membuang lagu yang terdeteksi sebagai hasil generasi AI (probabilitas ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Hapus semua hasil klasifikasi AI yang tersimpan ({{count}} lagu tersimpan).",
    ACTION_CLEAR_AI_STORAGE: "Jelas",
    MESSAGE_AI_STORAGE_CLEARED: "Hasil AI telah dibersihkan",
    AI_TIER_LIKELY_HUMAN: "Kemungkinan Manusia",
    AI_TIER_PROBABLY_HUMAN: "Kemungkinan Manusia",
    AI_TIER_UNCERTAIN: "Tidak pasti",
    AI_TIER_PROBABLY_AI: "Kemungkinan AI",
    AI_TIER_LIKELY_AI: "Kemungkinan AI",
    ACTION_REMOVE_TRASHED: "Hapus lagu yang sudah dihapus",
    CONFIRM_REMOVE_TRASHED: "Hapus {{count}} lagu yang dihapus dari daftar putar ini? Tindakan ini tidak dapat dibatalkan.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Menghapus {{count}} lagu yang dihapus dari daftar putar",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Tidak ada lagu yang dihapus ditemukan dalam daftar putar ini"
  };
});

// src/i18n/is.json
var require_is = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Rusli+",
    ACTION_THROW: "Setja í ruslið",
    ACTION_UNTHROW: "Fjarlægja úr rusli",
    ACTION_CLEAR: "Klár",
    ACTION_COPY: "Afrita",
    ACTION_EXPORT: "Útflutningur",
    ACTION_IMPORT: "Innflutningur",
    MESSAGE_COPIED: "Afritað á klippispjald",
    MESSAGE_CLEARED: "Pappírskarfan tæmd!",
    MESSAGE_SONG_ADDED: "Lag bætt í ruslið",
    MESSAGE_SONG_REMOVED: "Lag fjarlægt úr rusli",
    MESSAGE_ARTIST_ADDED: "Listamaður bættur við ruslið",
    MESSAGE_ARTIST_REMOVED: "Listamaður fjarlægður úr rusli",
    BACKUP_SAVE_SUCCESS: "Afrit vistað vandanlega.",
    BACKUP_SAVE_FAILED: "Gat ekki vistað öryggisafrit, reyndu að afrita innihald rusliðarins á klippispjaldið og búa til öryggisafrit handvirkt.",
    BACKUP_RESTORE_SUCCESS: "Afurðarupplýsingar endurheimtar.",
    BACKUP_FILE_READ_FAILED: "Gat ekki lesið skrá, vinsamlegast gangtu úr skugga um að hún sé gild JSON skrá.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Stillingar rusliðna+",
    SETTINGS_OPTIONS: "Valkostir",
    SETTINGS_FEATURES: "Eiginleikar",
    SETTINGS_STORAGE: "Geymsla",
    SETTINGS_ENABLED: "Virkjað",
    SETTINGS_SHOW_WIDGET: "Sýna stikuhlutatákn",
    SETTINGS_AUTOPLAY: "Sjálfvirk spilun við rás",
    SETTINGS_QUEUE_TRASHBIN: "Virkja biðröð rusliðkarans",
    SETTINGS_TRACKLIST_TRASHBIN: "Virkja ruslið fyrir lagalista",
    SETTINGS_PLAYLIST_MONITOR: "Spilunarlistaforrit",
    ITEMS_TITLE: "Ruslið+ Vörur",
    ITEMS_EMPTY_SONGS: "<strong>Engar eyttar lög!</strong><br/>Lög sem þú bætir við ruslið eru birt hér.",
    ITEMS_EMPTY_ARTISTS: "<strong>Engir ruslaðir listamenn!</strong><br/>Listamenn sem þú bætir við rusliðið birtast hér.",
    ITEMS_TAB_SONGS: "Lög",
    ITEMS_TAB_ARTISTS: "Listarar",
    ITEMS_LOADED_COUNT: "{{loaded}} af {{total}} {{type}} hlaðið",
    ITEMS_SEARCH_PLACEHOLDER: "Leita eftir nafni, flytjanda eða URI...",
    DESCRIPTION_COPY: "Afritaðu öll atriði í ruslið á klippispjaldið.",
    DESCRIPTION_EXPORT: "Vista öll atriði í rusliði í .json skrá.",
    DESCRIPTION_IMPORT: "Skrifa yfir öllum atriðum í rusliði með .json skrá.",
    DESCRIPTION_CLEAR: "Hreinsa allar atriði úr rusli (getur ekki verið afturkallað).",
    ITEMS_EMPTY_SONGS_TITLE: "Engar ruslóttar lög!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Engir ruslsmunir!",
    DESCRIPTION_SETTINGS_ENABLED: "Aðalkippa til að virkja eða gera óvirkt öll virkni ruslafóts+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Birta ruslpípu í spilunarstikunni við hliðina við núverandi lag til fljótra aðganga",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Byrja að spila tónlist sjálfkrafa þegar Spotify er opnað eða viðbótin hleðst",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Bættu við ruslpunktum við hvern lagalista í biðröðinni til einfaldrar stjórnunar",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Bæta við rusliðkónum við lag í útgáfu- og spilunarlista sýn fyrir fljóta síun",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Endurlæsa síðustu spilunarlista sjálfkrafa til að endurheimta eftir Spotify spilunarvandamál",
    SETTINGS_SKIP_TRASHED_TRACKS: "Hoppa yfir ruslspor",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Sleppa sjálfkrafa eyddum lögu og finna næsta leyfða lagalista í spilun",
    SETTINGS_AUTO_CLEAN_QUEUE: "Hreinsunaraðgangur sjálfkrafa",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Fjarlægðu lag sem varða í ruslinu sjálfkrafa úr Smart Shuffle biðröðinni",
    SETTINGS_REMOTE_CONTROL: "Fjartakki",
    SETTINGS_REMOTE_TOGGLE: "Virkja fjarstýringu",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Tvísnertu á spilun/í biðstöðu frá símanum til að kveikja/slökkva á fjarstýrtu umsóun. Umflutningur laganna staðfestir breytinguna.",
    SETTINGS_REMOTE_SKIPPING: "Fjartengt slepping virkt",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Þegar virkt, virkar ruslið-perun áfram jafnvel þótt Spotify sé stjórnað frá öðrum tæki (t.d. síma)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Fjartakstýrt slepping virkjuð",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Fjartengt sleppingu óvirkjað",
    MESSAGE_SONG_ADDED_REMOTE: "Lag eytt á fjarvídd",
    SETTINGS_TRASH_VIA_LIKE: "Rusl í gegnum Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Eins og lag frá síma til að eyða því. Hættir við að meta og heldur áfram á næsta lag.",
    SETTINGS_AI_DETECTION: "Greining á AI",
    SETTINGS_AI_DETECTION_ENABLED: "Greining á AI-lögum",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Greindu hljóðfæraleik búinn til af AI með SONICS líkani og sýndu líkurnar. Hleður niður líkani (~50MB) við fyrstu virkjun.",
    AI_ASSETS_DOWNLOADING: "Sæki AI líkan...",
    AI_ASSETS_READY: "AI líkan tilbúið",
    AI_ASSETS_NOT_READY: "AI líkan ekki tiltækt",
    SETTINGS_TRASH_AI_SONGS: "Rusl AI-lög",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Flettu sjálfkrafa upp á lagum sem fundust vera búin til af AI (líkurnar ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Hreinsa allar vistuðar niðurstöður frá AI flokkun ({{count}} lög vistuð).",
    ACTION_CLEAR_AI_STORAGE: "Klár",
    MESSAGE_AI_STORAGE_CLEARED: "Niðurstöður AI hreinsuðu",
    AI_TIER_LIKELY_HUMAN: "Líklega manneskja",
    AI_TIER_PROBABLY_HUMAN: "Líklega manneskja",
    AI_TIER_UNCERTAIN: "Óvíst",
    AI_TIER_PROBABLY_AI: "Líklega AI",
    AI_TIER_LIKELY_AI: "Líklega AI",
    ACTION_REMOVE_TRASHED: "Fjarlægja lag sem er í rusli",
    CONFIRM_REMOVE_TRASHED: "Eyða {{count}} lag(i) í ruslinu úr þessum spilunarlista? Ekki er hægt að afturkalla.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Fjarlægði {{count}} lag sem var í rusli úr spilunarlista",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Engin ruslótt kvæði fundust í þessum spilunarlista"
  };
});

// src/i18n/it.json
var require_it = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Cestino+",
    ACTION_THROW: "Metti nel cestino",
    ACTION_UNTHROW: "Rimuovi dal Cestino",
    ACTION_CLEAR: "Chiaro",
    ACTION_COPY: "Copia",
    ACTION_EXPORT: "Esporta",
    ACTION_IMPORT: "Importa",
    MESSAGE_COPIED: "Copiato negli appunti",
    MESSAGE_CLEARED: "Cestino svuotato con successo!",
    MESSAGE_SONG_ADDED: "Canzone aggiunta al cestino",
    MESSAGE_SONG_REMOVED: "Canzone rimossa dal cestino",
    MESSAGE_ARTIST_ADDED: "Artista aggiunto al cestino",
    MESSAGE_ARTIST_REMOVED: "Artista rimosso dal cestino",
    BACKUP_SAVE_SUCCESS: "Backup salvato con successo.",
    BACKUP_SAVE_FAILED: "Impossibile salvare il backup, prova a copiare il contenuto del cestino negli appunti e crea un backup manualmente.",
    BACKUP_RESTORE_SUCCESS: "Backup ripristinato con successo.",
    BACKUP_FILE_READ_FAILED: "Impossibile leggere il file, assicurarsi che sia un file JSON valido.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Impostazioni di Trashbin+",
    SETTINGS_OPTIONS: "Opzioni",
    SETTINGS_FEATURES: "Caratteristiche",
    SETTINGS_STORAGE: "Archiviazione",
    SETTINGS_ENABLED: "Abilitato",
    SETTINGS_SHOW_WIDGET: "Mostra icona widget",
    SETTINGS_AUTOPLAY: "Riproduzione automatica all'avvio",
    SETTINGS_QUEUE_TRASHBIN: "Abilita il cestino della coda",
    SETTINGS_TRACKLIST_TRASHBIN: "Abilita Cestino della Playlist",
    SETTINGS_PLAYLIST_MONITOR: "Monitor della playlist",
    ITEMS_TITLE: "Elementi del Cestino+",
    ITEMS_EMPTY_SONGS: "<strong>Nessun brano nel cestino!</strong><br/>I brani che aggiungi nel cestino appariranno qui.",
    ITEMS_EMPTY_ARTISTS: "<strong>Nessun artista nel cestino!</strong><br/>Gli artisti che aggiungi nel cestino appariranno qui.",
    ITEMS_TAB_SONGS: "Canzoni",
    ITEMS_TAB_ARTISTS: "Artisti",
    ITEMS_LOADED_COUNT: "{{loaded}} di {{total}} {{type}} caricati",
    ITEMS_SEARCH_PLACEHOLDER: "Cerca per nome, artista o URI...",
    DESCRIPTION_COPY: "Copia tutti gli elementi nel cestino negli appunti.",
    DESCRIPTION_EXPORT: "Salva tutti gli elementi nel cestino in un file .json.",
    DESCRIPTION_IMPORT: "Sovrascrivi tutti gli elementi nel cestino tramite file .json.",
    DESCRIPTION_CLEAR: "Cancella tutti gli elementi dal cestino (operazione non reversibile).",
    ITEMS_EMPTY_SONGS_TITLE: "Nessuna canzone eliminata!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Nessun artista scartato!",
    DESCRIPTION_SETTINGS_ENABLED: "Interruttore principale per abilitare o disabilitare tutte le funzionalità di Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Visualizza un'icona del cestino nella barra di riproduzione accanto alla traccia in riproduzione per un accesso rapido",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Avvia automaticamente la riproduzione della musica quando Spotify si apre o l'estensione viene caricata",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Aggiungi icone del cestino accanto a ogni brano nella tua coda imminente per una gestione più semplice",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Aggiungi icone del cestino accanto alle canzoni nelle visualizzazioni di album e playlist per un filtraggio rapido",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Recupera automaticamente dai problemi di riproduzione di Spotify riprendendo l'ultima playlist",
    SETTINGS_SKIP_TRASHED_TRACKS: "Ignora le tracce eliminate",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Salta automaticamente le canzoni eliminate e trova la traccia successiva consentita durante la riproduzione",
    SETTINGS_AUTO_CLEAN_QUEUE: "Coda di pulizia automatica",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Rimuovi automaticamente le canzoni eliminate dalla tua coda di riproduzione casuale intelligente",
    SETTINGS_REMOTE_CONTROL: "Controllo remoto",
    SETTINGS_REMOTE_TOGGLE: "Abilita commutazione remota",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Tocca due volte play/pausa dal dispositivo mobile per attivare/disattivare il salto remoto dei brani. Il salto di un brano conferma l'operazione.",
    SETTINGS_REMOTE_SKIPPING: "Salto remoto attivo",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Quando abilitato, il salto dei brani funziona anche quando si controlla Spotify da un altro dispositivo (ad esempio, mobile)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Salto remoto abilitato",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Salto remoto disabilitato",
    MESSAGE_SONG_ADDED_REMOTE: "Canzone eliminata a distanza",
    SETTINGS_TRASH_VIA_LIKE: "Rifiuti tramite Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Come una canzone da mobile a cestinarla. Annulla automaticamente il like e passa alla traccia successiva.",
    SETTINGS_AI_DETECTION: "Rilevamento dell'IA",
    SETTINGS_AI_DETECTION_ENABLED: "Rilevamento di canzoni tramite intelligenza artificiale",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Rileva le canzoni generate dall'IA utilizzando il modello SONICS e mostra un indicatore di probabilità. Scarica un modello di ~50 MB alla prima attivazione.",
    AI_ASSETS_DOWNLOADING: "Download del modello di intelligenza artificiale in corso...",
    AI_ASSETS_READY: "Modello di intelligenza artificiale pronto",
    AI_ASSETS_NOT_READY: "Modello di intelligenza artificiale non disponibile",
    SETTINGS_TRASH_AI_SONGS: "Canzoni AI spazzatura",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Elimina automaticamente le canzoni rilevate come generate dall'intelligenza artificiale (probabilità ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Cancella tutti i risultati delle classificazioni AI memorizzati ({{count}} brani memorizzati).",
    ACTION_CLEAR_AI_STORAGE: "Chiaro",
    MESSAGE_AI_STORAGE_CLEARED: "Risultati dell'IA cancellati",
    AI_TIER_LIKELY_HUMAN: "Probabilmente umano",
    AI_TIER_PROBABLY_HUMAN: "Probabilmente umano",
    AI_TIER_UNCERTAIN: "Incertaino",
    AI_TIER_PROBABLY_AI: "Probabilmente intelligenza artificiale",
    AI_TIER_LIKELY_AI: "Probabile AI",
    ACTION_REMOVE_TRASHED: "Rimuovi le canzoni eliminate",
    CONFIRM_REMOVE_TRASHED: "Rimuovere {{count}} brano(i) cestinato(i) da questa playlist? L'operazione non può essere annullata.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Rimosso/i {{count}} brano/i cestinato/i dalla playlist",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Nessuna canzone eliminata trovata in questa playlist"
  };
});

// src/i18n/ja.json
var require_ja = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "ゴミ箱+",
    ACTION_THROW: "ゴミ箱に入れる",
    ACTION_UNTHROW: "ゴミ箱から削除",
    ACTION_CLEAR: "クリア",
    ACTION_COPY: "コピー",
    ACTION_EXPORT: "エクスポート",
    ACTION_IMPORT: "インポート",
    MESSAGE_COPIED: "クリップボードにコピーされました",
    MESSAGE_CLEARED: "ゴミ箱を正常に空にしました！",
    MESSAGE_SONG_ADDED: "曲がゴミ箱に追加されました",
    MESSAGE_SONG_REMOVED: "ゴミ箱から曲を削除しました",
    MESSAGE_ARTIST_ADDED: "アーティストがゴミ箱に追加されました",
    MESSAGE_ARTIST_REMOVED: "アーティストがゴミ箱から削除されました",
    BACKUP_SAVE_SUCCESS: "バックアップが正常に保存されました。",
    BACKUP_SAVE_FAILED: "バックアップの保存に失敗しました。ごみ箱の内容をクリップボードにコピーして、手動でバックアップを作成してみてください。",
    BACKUP_RESTORE_SUCCESS: "バックアップの復元が正常に完了しました。",
    BACKUP_FILE_READ_FAILED: "ファイルの読み取りに失敗しました。有効なJSONファイルであることを確認してください。",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "ごみ箱+ 設定",
    SETTINGS_OPTIONS: "オプション",
    SETTINGS_FEATURES: "機能",
    SETTINGS_STORAGE: "ストレージ",
    SETTINGS_ENABLED: "有効",
    SETTINGS_SHOW_WIDGET: "ウィジェットアイコンを表示",
    SETTINGS_AUTOPLAY: "起動時に自動再生",
    SETTINGS_QUEUE_TRASHBIN: "キューごみ箱を有効にする",
    SETTINGS_TRACKLIST_TRASHBIN: "トラックリストごみ箱を有効にする",
    SETTINGS_PLAYLIST_MONITOR: "プレイリストモニター",
    ITEMS_TITLE: "ゴミ箱+ アイテム",
    ITEMS_EMPTY_SONGS: "<strong>ゴミ箱の曲はありません！</strong><br/>ゴミ箱に入れた曲がここに表示されます。",
    ITEMS_EMPTY_ARTISTS: "<strong>ゴミ箱のアーティストはいません！</strong><br/>ゴミ箱に追加したアーティストはここに表示されます。",
    ITEMS_TAB_SONGS: "曲",
    ITEMS_TAB_ARTISTS: "アーティスト",
    ITEMS_LOADED_COUNT: "{{total}}中{{loaded}}個の{{type}}が読み込まれました",
    ITEMS_SEARCH_PLACEHOLDER: "名前、アーティスト、またはURIで検索...",
    DESCRIPTION_COPY: "ゴミ箱内のすべてのアイテムをクリップボードにコピーします。",
    DESCRIPTION_EXPORT: "ゴミ箱内のすべてのアイテムを.jsonファイルに保存します。",
    DESCRIPTION_IMPORT: "ゴミ箱内のすべての項目を.jsonファイルで上書きします。",
    DESCRIPTION_CLEAR: "ゴミ箱からすべてのアイテムを完全に削除します（元に戻せません）。",
    ITEMS_EMPTY_SONGS_TITLE: "削除された曲はありません！",
    ITEMS_EMPTY_ARTISTS_TITLE: "捨てられたアーティストはいらない！",
    DESCRIPTION_SETTINGS_ENABLED: "すべてのゴミ箱+機能を有効または無効にするためのマスタースイッチ",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "再生中のトラックの隣の再生バーにごみ箱アイコンを表示して、すぐにアクセスできるようにします",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Spotifyの起動時または拡張機能の読み込み時に自動的に音楽を再生開始します",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "次のキューにある各曲の横にゴミ箱アイコンを追加して、簡単に管理できるようにします",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "アルバムビューとプレイリストビューの曲の横にゴミ箱アイコンを追加して、素早いフィルタリングを可能にします",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Spotifyの再生エラーを自動的に回復し、最後のプレイリストを再開します",
    SETTINGS_SKIP_TRASHED_TRACKS: "削除済みトラックをスキップ",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "削除された曲を自動的にスキップし、再生中に次に許可されたトラックを検索します",
    SETTINGS_AUTO_CLEAN_QUEUE: "自動クリーンキュー",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "ゴミ箱に移動した曲をスマートシャッフルキューから自動的に削除します",
    SETTINGS_REMOTE_CONTROL: "リモートコントロール",
    SETTINGS_REMOTE_TOGGLE: "リモート切り替えを有効にする",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "モバイル端末で再生/一時停止を2回タップして、リモートスキップのオン/オフを切り替えます。曲のスキップ操作で切り替えが確定します。",
    SETTINGS_REMOTE_SKIPPING: "リモートスキップが有効",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "有効にすると、他のデバイス（例：スマートフォン）からSpotifyを操作している場合でも、ゴミ箱スキップ機能が動作します。",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "リモートスキップが有効になりました",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "リモートスキップは無効です",
    MESSAGE_SONG_ADDED_REMOTE: "リモートで楽曲が破壊された",
    SETTINGS_TRASH_VIA_LIKE: "いいね経由でゴミ",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "携帯からゴミ箱へと流れる曲のように、自動でいいねを解除し、次のトラックにスキップします。",
    SETTINGS_AI_DETECTION: "AI検出",
    SETTINGS_AI_DETECTION_ENABLED: "AIによる楽曲検出",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "SONICSモデルを使用してAI生成の楽曲を検出し、確率インジケーターを表示します。初回有効化時に約50MBのモデルをダウンロードします。",
    AI_ASSETS_DOWNLOADING: "AIモデルをダウンロード中...",
    AI_ASSETS_READY: "AIモデル準備完了",
    AI_ASSETS_NOT_READY: "AIモデルは利用できません",
    SETTINGS_TRASH_AI_SONGS: "ゴミAIソング",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "AI生成と判定された曲を自動的にゴミ箱に移動（確率80％以上）",
    DESCRIPTION_CLEAR_AI_STORAGE: "保存されたすべてのAI分類結果を消去します（{{count}}曲が保存されています）。",
    ACTION_CLEAR_AI_STORAGE: "クリア",
    MESSAGE_AI_STORAGE_CLEARED: "AIの結果がクリアされました",
    AI_TIER_LIKELY_HUMAN: "おそらく人間",
    AI_TIER_PROBABLY_HUMAN: "おそらく人間",
    AI_TIER_UNCERTAIN: "不確実",
    AI_TIER_PROBABLY_AI: "おそらくAI",
    AI_TIER_LIKELY_AI: "おそらくAI",
    ACTION_REMOVE_TRASHED: "ゴミ箱に入れた曲を削除する",
    CONFIRM_REMOVE_TRASHED: "このプレイリストから削除済みの曲{{count}}曲を完全に削除しますか？この操作は元に戻せません。",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "プレイリストからごみ箱に入れた曲 {{count}} 曲を削除しました",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "このプレイリストには削除された曲が見つかりません"
  };
});

// src/i18n/kn.json
var require_kn = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "ಟ್ರಾಶ್‌ಬಿನ್+",
    ACTION_THROW: "ಅಪಾಯಿಕ ಬುಟ್ಟಿಯಲ್ಲಿ ಇಡಿ",
    ACTION_UNTHROW: "ಅಳಿಸಿಹಾಕುದಾದ ಫೈಲ್‌ಗಳ ಪೆಟ್ಟಿಗೆಯಿಂದ ತೆಗೆದುಹಾಕು",
    ACTION_CLEAR: "ಸ್ಪಷ್ಟವಾಗಿ",
    ACTION_COPY: "ಪ್ರತಿರೂಪ",
    ACTION_EXPORT: "ರಫ್ತು",
    ACTION_IMPORT: "ಆಮದು",
    MESSAGE_COPIED: "ಕ್ಲಿಪ್ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಲಾಗಿದೆ",
    MESSAGE_CLEARED: "ಅವಶೇಷ ಪೆಟ್ಟಿಗೆ ಯಶಸ್ವಿಯಾಗಿ ಖಾಲಿ ಮಾಡಲಾಯಿತು!",
    MESSAGE_SONG_ADDED: "ಹಾಡನ್ನು ಅಸ್ತಿಪಂಜರಕ್ಕೆ ಸೇರಿಸಲಾಗಿದೆ",
    MESSAGE_SONG_REMOVED: "ಹಾಡನ್ನು ಅಸ್ತಿಪಂಜರದಿಂದ ತೆಗೆದುಹಾಕಲಾಗಿದೆ",
    MESSAGE_ARTIST_ADDED: "ಕಲಾವಿದನನ್ನು ಅಸ್ತಿಪಂಜರಕ್ಕೆ ಸೇರಿಸಲಾಗಿದೆ",
    MESSAGE_ARTIST_REMOVED: "ಕಲಾವಿದನನ್ನು ಅಪಾಯಿಂಟ್ ಬುಟ್ಟಿಯಿಂದ ತೆಗೆದುಹಾಕಲಾಗಿದೆ",
    BACKUP_SAVE_SUCCESS: "ಬ್ಯಾಕಪ್ ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲಾಗಿದೆ.",
    BACKUP_SAVE_FAILED: "ಬ್ಯಾಕಪ್ ಅನ್ನು ಉಳಿಸಲು ವಿಫಲವಾಯಿತು, ತ್ರಾಶ್ಬಿನ್ ವಿಷಯಗಳನ್ನು ಕ್ಲಿಪ್ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಿ ಮತ್ತು ಕೈಯಾರೆ ಬ್ಯಾಕಪ್ ಅನ್ನು ರಚಿಸಲು ಪ್ರಯತ್ನಿಸಿ.",
    BACKUP_RESTORE_SUCCESS: "ಬ್ಯಾಕಪ್ ಯಶಸ್ವಿಯಾಗಿ ಮರುಸ್ಥಾಪಿಸಲಾಗಿದೆ.",
    BACKUP_FILE_READ_FAILED: "ಫೈಲ್ ಅನ್ನು ಓದಲು ವಿಫಲವಾಯಿತು, ದಯವಿಟ್ಟು ಅದು ಮಾನ್ಯ JSON ಫೈಲ್ ಆಗಿದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "ಟ್ರಾಶ್‌ಬಿನ್+ ಸೆಟ್ಟಿಂಗ್ಸ್",
    SETTINGS_OPTIONS: "ಆಯ್ಕೆಗಳು",
    SETTINGS_FEATURES: "ವೈಶಿಷ್ಟ್ಯಗಳು",
    SETTINGS_STORAGE: "ಸಂಗ್ರಹಣೆ",
    SETTINGS_ENABLED: "ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ",
    SETTINGS_SHOW_WIDGET: "ವಿಜೆಟ್ ಐಕಾನ್ ಅನ್ನು ತೋರಿಸು",
    SETTINGS_AUTOPLAY: "ಪ್ರಾರಂಭದಲ್ಲಿ ಸ್ವಯಂ ಪ್ಲೇ",
    SETTINGS_QUEUE_TRASHBIN: "ಕ್ಯೂ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ",
    SETTINGS_TRACKLIST_TRASHBIN: "ಟ್ರಾಕ್‌ಲಿಸ್ಟ್ ಅಪಾಯಿತ ಪೆಟ್ಟಿಗೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ",
    SETTINGS_PLAYLIST_MONITOR: "ಪ್ಲೇಲಿಸ್ಟ್ ಮಾನಿಟರ್",
    ITEMS_TITLE: "ಟ್ರಾಶ್‌ಬಿನ್+ ಐಟಂಗಳು",
    ITEMS_EMPTY_SONGS: "<strong>ಅಳಿಸಿದ ಹಾಡುಗಳಿಲ್ಲ!</strong><br/>ನೀವು ಅಳಿಸುವ ಹಾಡುಗಳು ಇಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ.",
    ITEMS_EMPTY_ARTISTS: "<strong>ಅಸ್ತಿತ್ವವಿಲ್ಲದ ಕಲಾವಿದರು ಇಲ್ಲ!</strong><br/>ನೀವು ಅಸ್ತಿತ್ವವಿಲ್ಲದವರ ಬುಟ್ಟಿಗೆ ಸೇರಿಸಿದ ಕಲಾವಿದರು ಇಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತಾರೆ.",
    ITEMS_TAB_SONGS: "ಹಾಡುಗಳು",
    ITEMS_TAB_ARTISTS: "ಕಲಾವಿದರು",
    ITEMS_LOADED_COUNT: "{{total}} ರಲ್ಲಿ {{loaded}} {{type}} ಲೋಡ್ ಆಗಿದೆ",
    ITEMS_SEARCH_PLACEHOLDER: "ಹೆಸರು, ಕಲಾವಿದ, ಅಥವಾ URI ಮೂಲಕ ಹುಡುಕಿ...",
    DESCRIPTION_COPY: "ಅಳಿಸಿದ ಫೈಲ್‌ಗಳ ಪೆಟ್ಟಿಗೆಯಲ್ಲಿರುವ ಎಲ್ಲಾ ಅಂಶಗಳನ್ನು ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಿ.",
    DESCRIPTION_EXPORT: "ಅಳಿಸಿದ ಅಂಶಗಳನ್ನು .json ಫೈಲ್‌ಗೆ ಉಳಿಸಿ.",
    DESCRIPTION_IMPORT: "ಅನಾವಶ್ಯಕ ಫೈಲ್‌ಗಳ ಪೆಟ್ಟಿಗೆಯಲ್ಲಿನ ಎಲ್ಲಾ ಅಂಶಗಳನ್ನು .json ಫೈಲ್ ಮೂಲಕ ಬರೆಯಿರಿ.",
    DESCRIPTION_CLEAR: "ಅಳಿಸಿಹಾಕುವ ಬುಟ್ಟಿಯಿಂದ ಎಲ್ಲಾ ಅಂಶಗಳನ್ನು ತೆಗೆದುಹಾಕಿ (ಹಿಂತಿರುಗಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ).",
    ITEMS_EMPTY_SONGS_TITLE: "ಯಾವುದೇ ತ್ಯಾಜ್ಯ ಹಾಡುಗಳಿಲ್ಲ!",
    ITEMS_EMPTY_ARTISTS_TITLE: "ಯಾವುದೇ ಕಸದ ಕಲಾವಿದರಿಲ್ಲ!",
    DESCRIPTION_SETTINGS_ENABLED: "ಟ್ರಾಶ್‌ಬಿನ್+ ಕಾರ್ಯಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು ಅಥವಾ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲು ಮಾಸ್ಟರ್ ಟಾಗಲ್",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "ಪ್ರಸ್ತುತ ವೀಕ್ಷಿಸುತ್ತಿರುವ ಟ್ರ್ಯಾಕ್ ಪಕ್ಕೆ ಪುನಃ ಪ್ರಾಪ್ತಿಸುವಿಕೆಗಾಗಿ ಪ್ಲೇಬ್ಯಾಕ್ ಬಾರ್ ನಲ್ಲಿ ಅಪಾಯಿತ ಚಿಹ್ನೆಯನ್ನು ಪ್ರದರ್ಶಿಸಿ",
    DESCRIPTION_SETTINGS_AUTOPLAY: "ಸ್ಪಾಟಿಫೈ ತೆರೆಯುವಾಗ ಅಥವಾ ವಿಸ್ತರಣೆ ಲೋಡ್ ಆಗುವಾಗ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸಂಗೀತವನ್ನು ಪ್ಲೇ ಮಾಡಲು ಪ್ರಾರಂಭಿಸಿ",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "ನಿಮ್ಮ ಬರುವ ಸರದಿಯಲ್ಲಿರುವ ಪ್ರತಿ ಹಾಡಿನ ಪಕ್ಕದಲ್ಲಿ ಅಳಿಸುವಿಕೆ ಐಕಾನ್‌ಗಳನ್ನು ಸೇರಿಸಿ, ಸುಲಭ ನಿರ್ವಹಣೆಗಾಗಿ",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "ಆಲ್ಬಂ ಮತ್ತು ಪ್ಲೇಪಟ್ಟಿ ವೀಕ್ಷಣೆಗಳಲ್ಲಿ ಹಾಡುಗಳ ಪಕ್ಕದಲ್ಲಿ ಕಸದ ಐಕಾನ್‌ಗಳನ್ನು ಸೇರಿಸಿ ತ್ವರಿತ ಫಿಲ್ಟರಿಂಗ್ ಮಾಡಲು",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "ನಿಮ್ಮ ಕೊನೆಯ ಪ್ಲೇಲಿಸ್ಟ್ ಅನ್ನು ಮತ್ತೆ ಪ್ರಾರಂಭಿಸುವ ಮೂಲಕ ಸ್ಪಾಟಿಫೈ ಪ್ಲೇಬ್ಯಾಕ್ ದೋಷಗಳಿಂದ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಚೇತರಿಸಿಕೊಳ್ಳಿ",
    SETTINGS_SKIP_TRASHED_TRACKS: "ಅಳಿಸಿಹಾಕಿದ ಟ್ರ್ಯಾಕ್‌ಗಳನ್ನು ಬಿಟ್ಟುಬಿಡಿ",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "ಪ್ಲೇಬ್ಯಾಕ್ ಸಮಯದಲ್ಲಿ ಅಳಿಸಿಹಾಕಿದ ಹಾಡುಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ತಪ್ಪಿಸಿ ಮುಂದಿನ ಅನುಮತಿಸಿದ ಟ್ರ್ಯಾಕ್ ಅನ್ನು ಹುಡುಕಿ",
    SETTINGS_AUTO_CLEAN_QUEUE: "ಆಟೋ ಕ್ಲೀನ್ ಕ್ಯೂ",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "ನಿಮ್ಮ ಸ್ಮಾರ್ಟ್ ಶಫಲ್ ಸರದಿಯಿಂದ ಅಳಿಸಿಹಾಕಿದ ಹಾಡುಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ತೆಗೆದುಹಾಕಿ",
    SETTINGS_REMOTE_CONTROL: "ರಿಮೋಟ್ ಕಂಟ್ರೋಲ್",
    SETTINGS_REMOTE_TOGGLE: "ದೂರದ ಟಾಗಲ್ ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸು",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "ಮೊಬೈಲ್‌ನಿಂದ ಪ್ಲೇ/ಪಾಸ್ ಮಾಡಲು ಎರಡು ಬಾರಿ ಟ್ಯಾಪ್ ಮಾಡಿ ರಿಮೋಟ್ ಸ್ಕಿಪ್ಪಿಂಗ್ ಅನ್ನು ಆನ್/ಆಫ್ ಮಾಡಿ. ಟ್ರಾಕ್ ಸ್ಕಿಪ್ ಟಾಗಲ್ ಅನ್ನು ದೃಢೀಕರಿಸುತ್ತದೆ.",
    SETTINGS_REMOTE_SKIPPING: "ದೂರದ ಬೆಳಕಿನ ಕ್ರಿಯಾತ್ಮಕತೆ",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "ಸಕ್ರಿಯಗೊಳಿಸಿದಾಗ, ಇನ್ನೊಂದು ಸಾಧನದಿಂದ (ಉದಾಹರಣೆಗೆ, ಮೊಬೈಲ್) ಸ್ಪಾಟಿಫೈ ಅನ್ನು ನಿಯಂತ್ರಿಸುವಾಗಲೂ ಕಸವನ್ನು ತೆಗೆದುಹಾಕುವುದು ಕೆಲಸ ಮಾಡುತ್ತದೆ",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "ದೂರದಲ್ಲಿರುವ ಸ್ಕಿಪ್ಪಿಂಗ್ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "ದೂರದಲ್ಲಿರುವ ಕಿರಿಕಿರಿ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ",
    MESSAGE_SONG_ADDED_REMOTE: "ದೂರದಿಂದಲೇ ಹಾಡನ್ನು ನಾಶಪಡಿಸಲಾಯಿತು",
    SETTINGS_TRASH_VIA_LIKE: "ಲೈಕ್ ಮೂಲಕ ತ್ಯಾಜ್ಯ",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "ಮೊಬೈಲ್‌ನಿಂದ ಬರುವ ಹಾಡನ್ನು ತ್ಯಜಿಸುವಂತೆ. ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಅನ್‌ಲೈಕ್ ಮಾಡಿ ಮುಂದಿನ ಟ್ರ್ಯಾಕ್‌ಗೆ ಹಾದುಹೋಗುತ್ತದೆ.",
    SETTINGS_AI_DETECTION: "AI ಪತ್ತೆಮಾಡುವಿಕೆ",
    SETTINGS_AI_DETECTION_ENABLED: "AI ಹಾಡು ಪತ್ತೆಹಚ್ಚುವಿಕೆ",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "SONICS ಮಾದರಿಯನ್ನು ಬಳಸಿಕೊಂಡು ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆಯಿಂದ ರಚಿಸಲಾದ ಹಾಡುಗಳನ್ನು ಪತ್ತೆ ಹಚ್ಚಿ ಮತ್ತು ಸಂಭಾವ್ಯತೆಯ ಸೂಚಕವನ್ನು ತೋರಿಸಿ. ಮೊದಲ ಬಾರಿಗೆ ಸಕ್ರಿಯಗೊಳಿಸಿದಾಗ ~50MB ಮಾದರಿಯನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡುತ್ತದೆ.",
    AI_ASSETS_DOWNLOADING: "AI ಮಾದರಿಯನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡುವುದಾಗಿದೆ...",
    AI_ASSETS_READY: "ಎಐ ಮಾದರಿ ಸಿದ್ಧವಾಗಿದೆ",
    AI_ASSETS_NOT_READY: "ಎಐ ಮಾದರಿ ಲಭ್ಯವಿಲ್ಲ",
    SETTINGS_TRASH_AI_SONGS: "ಟ್ರಾಶ್ ಎಐ ಹಾಡುಗಳು",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆಯಿಂದ ಉತ್ಪಾದಿಸಲಾದ (ಸಂಭಾವ್ಯತೆ ≥ 80%) ಎಂದು ಪತ್ತೆಯಾದ ಹಾಡುಗಳನ್ನು ಅಳಿಸಿಹಾಕಿ",
    DESCRIPTION_CLEAR_AI_STORAGE: "ಸಂಗ್ರಹಿಸಲಾದ ಎಲ್ಲಾ AI ವರ್ಗೀಕರಣ ಫಲಿತಾಂಶಗಳನ್ನು ಅಳಿಸಿ ({{count}} ಹಾಡುಗಳು ಸಂಗ್ರಹಿಸಲಾಗಿದೆ).",
    ACTION_CLEAR_AI_STORAGE: "ಸ್ಪಷ್ಟವಾಗಿ",
    MESSAGE_AI_STORAGE_CLEARED: "AI ಫಲಿತಾಂಶಗಳು ಸ್ಪಷ್ಟವಾಗಿವೆ",
    AI_TIER_LIKELY_HUMAN: "ಸಾಧ್ಯತೆಯ ಮಾನವ",
    AI_TIER_PROBABLY_HUMAN: "ಸಬ್ಬಲಿ ಮಾನವ",
    AI_TIER_UNCERTAIN: "ಅನಿಶ್ಚಿತ",
    AI_TIER_PROBABLY_AI: "ಸಂಭವನೀಯವಾಗಿ ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ",
    AI_TIER_LIKELY_AI: "ಸಂಭಾವ್ಯ ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ",
    ACTION_REMOVE_TRASHED: "ಅಳಿಸಿಹಾಕಿದ ಹಾಡುಗಳನ್ನು ತೆಗೆದುಹಾಕಿ",
    CONFIRM_REMOVE_TRASHED: "ಈ ಪ್ಲೇಪಟ್ಟಿಯಿಂದ {{count}} ಅಳಿಸಿದ ಹಾಡು(ಗಳನ್ನು) ತೆಗೆದುಹಾಕುವುದೇ? ಇದನ್ನು ಮರುಪಡೆಯಲಾಗುವುದಿಲ್ಲ.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "ಪ್ಲೇಪಟ್ಟಿಯಿಂದ {{count}} ಅಳಿಸಿಹಾಕಿದ ಹಾಡು(ಗಳನ್ನು) ತೆಗೆದುಹಾಕಲಾಗಿದೆ",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "ಈ ಪ್ಲೇಲಿಸ್ಟ್‌ನಲ್ಲಿ ಯಾವುದೇ ತ್ರಾಶ್ ಮಾಡಿದ ಹಾಡುಗಳು ಕಂಡುಬಂದಿಲ್ಲ"
  };
});

// src/i18n/ko.json
var require_ko = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "쓰레기통+",
    ACTION_THROW: "휴지통에 넣기",
    ACTION_UNTHROW: "휴지통에서 제거",
    ACTION_CLEAR: "명확함",
    ACTION_COPY: "복사",
    ACTION_EXPORT: "내보내기",
    ACTION_IMPORT: "가져오기",
    MESSAGE_COPIED: "클립보드에 복사되었습니다",
    MESSAGE_CLEARED: "휴지통 비우기 성공!",
    MESSAGE_SONG_ADDED: "노래가 휴지통에 추가되었습니다",
    MESSAGE_SONG_REMOVED: "노래가 휴지통에서 삭제되었습니다",
    MESSAGE_ARTIST_ADDED: "아티스트가 휴지통에 추가되었습니다",
    MESSAGE_ARTIST_REMOVED: "휴지통에서 제거된 아티스트",
    BACKUP_SAVE_SUCCESS: "백업이 성공적으로 저장되었습니다.",
    BACKUP_SAVE_FAILED: "백업 저장에 실패했습니다. 휴지통 내용을 클립보드에 복사하여 수동으로 백업을 생성해 보세요.",
    BACKUP_RESTORE_SUCCESS: "백업이 성공적으로 복원되었습니다.",
    BACKUP_FILE_READ_FAILED: "파일을 읽지 못했습니다. 올바른 JSON 파일인지 확인하십시오.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "휴지통+ 설정",
    SETTINGS_OPTIONS: "옵션",
    SETTINGS_FEATURES: "기능",
    SETTINGS_STORAGE: "저장소",
    SETTINGS_ENABLED: "활성화됨",
    SETTINGS_SHOW_WIDGET: "위젯 아이콘 표시",
    SETTINGS_AUTOPLAY: "시작 시 자동 재생",
    SETTINGS_QUEUE_TRASHBIN: "큐 휴지통 사용 가능",
    SETTINGS_TRACKLIST_TRASHBIN: "트랙리스트 휴지통 활성화",
    SETTINGS_PLAYLIST_MONITOR: "재생 목록 모니터",
    ITEMS_TITLE: "휴지통+ 항목",
    ITEMS_EMPTY_SONGS: "<strong>휴지통에 있는 곡이 없습니다!</strong><br/>휴지통에 추가한 곡들이 여기에 표시됩니다.",
    ITEMS_EMPTY_ARTISTS: "<strong>휴지통에 있는 아티스트 없음!</strong><br/>휴지통에 추가한 아티스트가 여기에 표시됩니다.",
    ITEMS_TAB_SONGS: "노래들",
    ITEMS_TAB_ARTISTS: "아티스트",
    ITEMS_LOADED_COUNT: "{{total}}개 중 {{loaded}}개의 {{type}}이(가) 로드되었습니다",
    ITEMS_SEARCH_PLACEHOLDER: "이름, 아티스트 또는 URI로 검색...",
    DESCRIPTION_COPY: "휴지통의 모든 항목을 클립보드에 복사합니다.",
    DESCRIPTION_EXPORT: "휴지통의 모든 항목을 .json 파일로 저장합니다.",
    DESCRIPTION_IMPORT: ".json 파일을 통해 휴지통의 모든 항목을 덮어씁니다.",
    DESCRIPTION_CLEAR: "휴지통의 모든 항목을 삭제합니다(되돌릴 수 없음).",
    ITEMS_EMPTY_SONGS_TITLE: "삭제된 곡 없음!",
    ITEMS_EMPTY_ARTISTS_TITLE: "버려진 아티스트는 없음!",
    DESCRIPTION_SETTINGS_ENABLED: "모든 휴지통+ 기능을 사용하거나 비활성화하기 위한 메인 토글",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "재생 중인 곡 옆의 재생 바에 휴지통 아이콘을 표시하여 빠르게 접근할 수 있도록 함",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Spotify가 열리거나 확장 프로그램이 로드될 때 자동으로 음악 재생 시작",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "대기 중인 재생 목록의 각 곡 옆에 휴지통 아이콘을 추가하여 쉽게 관리할 수 있습니다",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "앨범 및 재생목록 보기에서 곡 옆에 휴지통 아이콘을 추가하여 빠른 필터링을 가능하게 함",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Spotify 재생 오류 시 마지막 재생 목록을 자동으로 이어 재생하여 복구",
    SETTINGS_SKIP_TRASHED_TRACKS: "삭제된 트랙 건너뛰기",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "삭제된 곡을 자동으로 건너뛰고 재생 중 다음에 재생 가능한 트랙을 찾습니다",
    SETTINGS_AUTO_CLEAN_QUEUE: "자동 정리 대기열",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "휴지통에 있는 곡을 스마트 셔플 큐에서 자동으로 제거합니다",
    SETTINGS_REMOTE_CONTROL: "리모컨",
    SETTINGS_REMOTE_TOGGLE: "원격 전환 활성화",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "모바일에서 재생/일시정지 버튼을 두 번 탭하여 원격 건너뛰기 켜기/끄기 전환. 곡 건너뛰기로 전환이 확인됨.",
    SETTINGS_REMOTE_SKIPPING: "원격 건너뛰기 활성화됨",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "활성화하면 다른 기기(예: 모바일)에서 Spotify를 제어할 때에도 휴지통 건너뛰기가 작동합니다.",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "원격 건너뛰기 활성화됨",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "원격 건너뛰기 비활성화됨",
    MESSAGE_SONG_ADDED_REMOTE: "원격으로 곡 폐기됨",
    SETTINGS_TRASH_VIA_LIKE: "좋아요를 통한 쓰레기",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "휴대폰에서 재생 중인 곡을 삭제하듯이 자동으로 좋아요를 취소하고 다음 곡으로 건너뜁니다.",
    SETTINGS_AI_DETECTION: "AI 탐지",
    SETTINGS_AI_DETECTION_ENABLED: "AI 노래 감지",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "SONICS 모델을 사용하여 AI 생성 곡을 탐지하고 확률 지표를 표시합니다. 처음 활성화 시 약 50MB 모델을 다운로드합니다.",
    AI_ASSETS_DOWNLOADING: "AI 모델을 다운로드하는 중...",
    AI_ASSETS_READY: "AI 모델 준비 완료",
    AI_ASSETS_NOT_READY: "사용 가능한 AI 모델이 없습니다",
    SETTINGS_TRASH_AI_SONGS: "쓰레기 AI 노래",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "AI가 생성한 것으로 감지된 곡을 자동으로 휴지통으로 이동(확률 ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "저장된 모든 AI 분류 결과 지우기 ({{count}}개의 곡 저장됨).",
    ACTION_CLEAR_AI_STORAGE: "명확한",
    MESSAGE_AI_STORAGE_CLEARED: "AI 결과 승인됨",
    AI_TIER_LIKELY_HUMAN: "아마도 인간",
    AI_TIER_PROBABLY_HUMAN: "아마도 인간",
    AI_TIER_UNCERTAIN: "불확실함",
    AI_TIER_PROBABLY_AI: "아마도 인공지능",
    AI_TIER_LIKELY_AI: "가장 유력한 AI",
    ACTION_REMOVE_TRASHED: "휴지통에 있는 노래 삭제",
    CONFIRM_REMOVE_TRASHED: "이 재생 목록에서 삭제된 곡 {{count}}개를 제거하시겠습니까? 이 작업은 되돌릴 수 없습니다.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "재생목록에서 휴지통으로 이동한 곡 {{count}}개를 삭제했습니다",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "이 재생목록에서 삭제된 곡을 찾을 수 없습니다"
  };
});

// src/i18n/lt.json
var require_lt = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Šiukšliadėžė+",
    ACTION_THROW: "Įdėti į šiukšlinę",
    ACTION_UNTHROW: "Pašalinti iš šiukšlinės",
    ACTION_CLEAR: "Aišku",
    ACTION_COPY: "Kopijuoti",
    ACTION_EXPORT: "Eksportuoti",
    ACTION_IMPORT: "Importuoti",
    MESSAGE_COPIED: "Nukopijuota į iškarpinę",
    MESSAGE_CLEARED: "Šiukšlinė ištuštinta sėkmingai!",
    MESSAGE_SONG_ADDED: "Daina pridėta į šiukšlinę",
    MESSAGE_SONG_REMOVED: "Daina pašalinta iš šiukšlinės",
    MESSAGE_ARTIST_ADDED: "Dailininkas pridėtas į šiukšlinę",
    MESSAGE_ARTIST_REMOVED: "Dailininkas pašalintas iš šiukšlinės",
    BACKUP_SAVE_SUCCESS: "Atsarginė kopija sėkmingai išsaugota.",
    BACKUP_SAVE_FAILED: "Nepavyko išsaugoti atsarginės kopijos, pabandykite nukopijuoti šiukšlinės turinį į iškarpinę ir rankiniu būdu sukurti atsarginę kopiją.",
    BACKUP_RESTORE_SUCCESS: "Atsarginė kopija sėkmingai atkurta.",
    BACKUP_FILE_READ_FAILED: "Nepavyko perskaityti failo, įsitikinkite, kad tai yra galiojantis JSON failas.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Šiukšlinės+ nustatymai",
    SETTINGS_OPTIONS: "Parinktys",
    SETTINGS_FEATURES: "Funkcijos",
    SETTINGS_STORAGE: "Sandėliavimas",
    SETTINGS_ENABLED: "Įjungta",
    SETTINGS_SHOW_WIDGET: "Rodyti valdiklio piktogramą",
    SETTINGS_AUTOPLAY: "Automatinis paleidimas paleidžiant",
    SETTINGS_QUEUE_TRASHBIN: "Įgalinti eilės šiukšlinę",
    SETTINGS_TRACKLIST_TRASHBIN: "Įgalinti takelių sąrašo šiukšlinę",
    SETTINGS_PLAYLIST_MONITOR: "Grojaraščių monitorius",
    ITEMS_TITLE: "Šiukšliadėžės+ elementai",
    ITEMS_EMPTY_SONGS: "<strong>Nėra ištrintų dainų!</strong><br/>Čia atsiras dainos, kurias sudėjote į šiukšlinę.",
    ITEMS_EMPTY_ARTISTS: "<strong>Jokių išmestų atlikėjų!</strong><br/>Čia atsiras atlikėjai, kuriuos sudėjote į šiukšlinę.",
    ITEMS_TAB_SONGS: "Dainos",
    ITEMS_TAB_ARTISTS: "Dailininkai",
    ITEMS_LOADED_COUNT: "{{loaded}} iš {{total}} {{type}} įkelta",
    ITEMS_SEARCH_PLACEHOLDER: "Ieškoti pagal pavadinimą, atlikėją arba URI...",
    DESCRIPTION_COPY: "Kopijuoti visus šiukšlinėje esančius elementus į iškarpinę.",
    DESCRIPTION_EXPORT: "Išsaugoti visus šiukšlinės elementus į .json failą.",
    DESCRIPTION_IMPORT: "Perrašyti visus elementus šiukšlinėje naudojant .json failą.",
    DESCRIPTION_CLEAR: "Išvalyti visus elementus iš šiukšlinės (negalima atšaukti).",
    ITEMS_EMPTY_SONGS_TITLE: "Nėra ištrintų dainų!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Jokių sugadintų dailininkų!",
    DESCRIPTION_SETTINGS_ENABLED: "Pagrindinis jungiklis įgalinti arba išjungti visą Šiukšlinės+ funkcionalumą",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Rodyti šiukšliadėžės piktogramą paleidimo juostoje šalia dabar grojamo takelio, kad būtų greitas priėjimas",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Automatiškai paleisti muziką, kai atsidaro „Spotify“ arba įkeliama plėtinys",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Pridėkite šiukšliadėžių piktogramas šalia kiekvieno dainos pavadinimo eilėje, kad būtų lengviau tvarkyti",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Pridėkite šiukšlių piktogramas šalia dainų albumų ir grojaraščių rodiniuose, kad būtų galima greitai filtruoti",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Automatiškai atkurkite „Spotify“ grojimą po gedimų, pratęsdami paskutinę grojaraštį",
    SETTINGS_SKIP_TRASHED_TRACKS: "Praleisti ištrintus takelius",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Automatiškai praleisti ištrintas dainas ir grojant rasti kitą leistiną takelį",
    SETTINGS_AUTO_CLEAN_QUEUE: "Automatinio valymo eilė",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Automatiškai šalinkite ištrintas dainas iš savo išmaniųjų maišymo eilės",
    SETTINGS_REMOTE_CONTROL: "Nuotolinis valdymas",
    SETTINGS_REMOTE_TOGGLE: "Įgalinti nuotolinį perjungimą",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Du kartus paspauskite paleisti / praleisti iš mobilaus įrenginio, kad įjungtumėte / išjungtumėte nuotolinį praleidimą. Takelio praleidimas patvirtina perjungimą.",
    SETTINGS_REMOTE_SKIPPING: "Nutolęs praleidimas aktyvus",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Įjungus šią funkciją, dainų praleidimas veikia net tada, kai „Spotify“ valdote iš kito įrenginio (pvz., iš mobilaus telefono)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Nuotolinis praleidimas įjungtas",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Nuotolinis praleidimas išjungtas",
    MESSAGE_SONG_ADDED_REMOTE: "Daina ištrinta iš toli",
    SETTINGS_TRASH_VIA_LIKE: "Šiukšlės per Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Kaip daina iš mobiliojo į šiukšlyną. Automatiškai pašalina patiktuką ir pereina prie kito takelio.",
    SETTINGS_AI_DETECTION: "Dirbtinio intelekto aptikimas",
    SETTINGS_AI_DETECTION_ENABLED: "Dirbtinio intelekto dainų aptikimas",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Naudokite SONICS modelį AI sukurtų dainų aptikimui ir tikimybės rodiklio rodymui. Pirmą kartą įjungus atsisiunčia ~50 MB modelį.",
    AI_ASSETS_DOWNLOADING: "Apskaičiuojama AI modelis...",
    AI_ASSETS_READY: "AI modelis paruoštas",
    AI_ASSETS_NOT_READY: "AI modelis neprieinamas",
    SETTINGS_TRASH_AI_SONGS: "Šiukšlių AI dainos",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Automatiškai ištrinti dainas, kurios nustatytos kaip dirbtinio intelekto sukurtos (tikimybė ≥ 80 %)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Išvalyti visus išsaugotus dirbtinio intelekto klasifikavimo rezultatus (išsaugota {{count}} dainų).",
    ACTION_CLEAR_AI_STORAGE: "Aišku",
    MESSAGE_AI_STORAGE_CLEARED: "AI rezultatai išvalyti",
    AI_TIER_LIKELY_HUMAN: "Tikėtina žmogaus veikla",
    AI_TIER_PROBABLY_HUMAN: "Tikriausiai žmogus",
    AI_TIER_UNCERTAIN: "Neaišku",
    AI_TIER_PROBABLY_AI: "Tikriausiai dirbtinis intelektas",
    AI_TIER_LIKELY_AI: "Tikėtinas dirbtinis intelektas",
    ACTION_REMOVE_TRASHED: "Pašalinti ištrintas dainas",
    CONFIRM_REMOVE_TRASHED: "Pašalinti {{count}} ištrintą (-as) dainą (-as) iš šio grojaraščio? Šio veiksmo atšaukti neįmanoma.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Iš grojaraščio pašalinta {{count}} daina (-os) iš šiukšlinės",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Šiame grojaraštyje nerasta ištrintų dainų"
  };
});

// src/i18n/lv.json
var require_lv = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Atkritumu tvertne+",
    ACTION_THROW: "Ievietot atkritnos",
    ACTION_UNTHROW: "Izņemt no miskastes",
    ACTION_CLEAR: "Skaidrs",
    ACTION_COPY: "Kopēt",
    ACTION_EXPORT: "Eksports",
    ACTION_IMPORT: "Importēt",
    MESSAGE_COPIED: "Kopēts starpliktuvē",
    MESSAGE_CLEARED: "Atkritni veiksmīgi iztīrīti!",
    MESSAGE_SONG_ADDED: "Dziesma pievienota miskastei",
    MESSAGE_SONG_REMOVED: "Dziesma noņemta no miskastes",
    MESSAGE_ARTIST_ADDED: "Mākslinieks pievienots atkritne",
    MESSAGE_ARTIST_REMOVED: "Mākslinieks noņemts no atkritumu kastes",
    BACKUP_SAVE_SUCCESS: "Rezerves kopija veiksmīgi saglabāta.",
    BACKUP_SAVE_FAILED: "Neizdevās saglabāt rezerves kopiju, mēģiniet kopēt miskastes saturu starpliktuvē un manuāli izveidot rezerves kopiju.",
    BACKUP_RESTORE_SUCCESS: "Rezerves kopija veiksmīgi atjaunota.",
    BACKUP_FILE_READ_FAILED: "Neizdevās nolasīt failu, lūdzu, pārliecinieties, ka tas ir derīgs JSON fails.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Trashbin+ iestatījumi",
    SETTINGS_OPTIONS: "Iespējas",
    SETTINGS_FEATURES: "Iezīmes",
    SETTINGS_STORAGE: "Uzglabāšana",
    SETTINGS_ENABLED: "Ieslēgts",
    SETTINGS_SHOW_WIDGET: "Rādīt logrīka ikonu",
    SETTINGS_AUTOPLAY: "Automātiska atskaņošana startējot",
    SETTINGS_QUEUE_TRASHBIN: "Iespējot rindas miskasti",
    SETTINGS_TRACKLIST_TRASHBIN: "Iespējot atskaņošanas saraksta miskasti",
    SETTINGS_PLAYLIST_MONITOR: "Reprodukcijas sarakstu pārvaldnieks",
    ITEMS_TITLE: "Atkritumu groza+ vienumi",
    ITEMS_EMPTY_SONGS: "<strong>Nav dzēstu dziesmu!</strong><br/>Dziesmas, kuras iemetīsiet atkritnos, parādīsies šeit.",
    ITEMS_EMPTY_ARTISTS: "<strong>Nav izmestu mākslinieku!</strong><br/>Mākslinieki, kurus jūs iemetīsiet atkritnos, parādīsies šeit.",
    ITEMS_TAB_SONGS: "Dziesmas",
    ITEMS_TAB_ARTISTS: "Mākslinieki",
    ITEMS_LOADED_COUNT: "Ielādēti {{loaded}} no {{total}} {{type}}",
    ITEMS_SEARCH_PLACEHOLDER: "Meklēt pēc nosaukuma, izpildītāja vai URI...",
    DESCRIPTION_COPY: "Kopēt visus atkritnumbā iekšējos vienumus starpliktuvē.",
    DESCRIPTION_EXPORT: "Saglabāt visus elementus atkritnes kastē .json failā.",
    DESCRIPTION_IMPORT: "Pārrakstīt visus elementus miskastē, izmantojot .json failu.",
    DESCRIPTION_CLEAR: "Notīrīt visus vienumus no miskastes (nevar atsaukt).",
    ITEMS_EMPTY_SONGS_TITLE: "Nav izdzēstu dziesmu!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Neizmesti mākslinieki!",
    DESCRIPTION_SETTINGS_ENABLED: "Pārslēdzējs, lai ieslēgtu vai izslēgtu visas Trashbin+ funkcijas",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Attēlot atkritumu ikonu atskaņošanas joslā blakus pašreiz atskaņotajam treniņam ātrai piekļuvei",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Automātiski sākt mūziku, kad atver Spotify vai ielādējas paplašinājums",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Pievienojiet atkritumu ikonas katram dziesmai jūsu nākamajā rindā, lai būtu vieglāk pārvaldīt",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Albumu un atskaņošanas sarakstu skatos pievienot mēslu ikonas dziesmām, lai ātri izfiltrētu",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Automātiski atgūstieties no Spotify atskaņošanas problēmām, atsākot pēdējo sarakstu",
    SETTINGS_SKIP_TRASHED_TRACKS: "Izlaidt izdzēstos treniņus",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Automātiski izlaist dziesmas, kas pārvietotas atkritnēs, un atrast nākamo atļauto kompozīciju atskaņošanas laikā",
    SETTINGS_AUTO_CLEAN_QUEUE: "Automātiskās tīrīšanas rinda",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Automātiski noņemt izdzēstās dziesmas no jūsu gudrās jaukto saraksta rindas",
    SETTINGS_REMOTE_CONTROL: "Tālvadības pulti",
    SETTINGS_REMOTE_TOGGLE: "Iespējot attālo pārslēgšanu",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Dubultklikšķiniet, lai atskaņotu/pauzētu no mobilā, lai ieslēgtu/izslēgtu attālinātu pārslēgšanu. Pāreja uz nākamo kompozīciju apstiprina pārslēgšanu.",
    SETTINGS_REMOTE_SKIPPING: "Attālināta izlaide aktīva",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Ieslēdzot, miskastē nelikšana darbojas pat tad, ja Spotify tiek vadīts no cita ierīces (piemēram, mobilā tālruņa)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Attālās izlaišanas iespējots",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Attālināta izlaišana atspējota",
    MESSAGE_SONG_ADDED_REMOTE: "Dziesma iznīcināta attālināti",
    SETTINGS_TRASH_VIA_LIKE: "Miskaste caur Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Kā dziesmu no mobilā, lai to izmestu. Automātiski atzīmē kā nepatīkamu un pāriet uz nākamo kompozīciju.",
    SETTINGS_AI_DETECTION: "AI noteikšana",
    SETTINGS_AI_DETECTION_ENABLED: "AI dziesmu noteikšana",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Izmantojiet SONICS modeli, lai noteiktu ar mākslīgo intelektu ģenerētas dziesmas, un parādiet varbūtības rādītāju. Pirmreiz ieslēdzot, lejupielādē ~50 MB lielu modeli.",
    AI_ASSETS_DOWNLOADING: "Lejupielādē AI modeli...",
    AI_ASSETS_READY: "AI modelis ir gatavs",
    AI_ASSETS_NOT_READY: "AI modelis nav pieejams",
    SETTINGS_TRASH_AI_SONGS: "Mēstās mākslīgā intelekta dziesmas",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Automātiski izmest dziesmas, kas noteiktas kā ar mākslīgo intelektu ģenerētas (varbūtība ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Notīrīt visus saglabātos mākslīgā intelekta klasifikācijas rezultātus (saglabātas {{count}} dziesmas).",
    ACTION_CLEAR_AI_STORAGE: "Skaidrs",
    MESSAGE_AI_STORAGE_CLEARED: "AI rezultāti ir skaidri",
    AI_TIER_LIKELY_HUMAN: "Iespējams, cilvēks",
    AI_TIER_PROBABLY_HUMAN: "Iespējams, cilvēks",
    AI_TIER_UNCERTAIN: "Nezināms",
    AI_TIER_PROBABLY_AI: "Iespējams, mākslīgais intelekts",
    AI_TIER_LIKELY_AI: "Iespējams, mākslīgais intelekts",
    ACTION_REMOVE_TRASHED: "Noņemt izdzēstās dziesmas",
    CONFIRM_REMOVE_TRASHED: "Vai tiešām no šī saraksta izņemt {{count}} dzēsto dziesmu(-as)? Šo darbību nevar atsaukt.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "No saraksta ir izņemtas {{count}} izdzēstās dziesmas",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Šajā sarakstā netika atrastas izdzēstas dziesmas"
  };
});

// src/i18n/mk.json
var require_mk = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Канчо за смет+",
    ACTION_THROW: "Стави во кош за отпад",
    ACTION_UNTHROW: "Отстрани од кофата за отпадоци",
    ACTION_CLEAR: "Јасно",
    ACTION_COPY: "Копирај",
    ACTION_EXPORT: "Извоз",
    ACTION_IMPORT: "Увоз",
    MESSAGE_COPIED: "Копирано во таблата",
    MESSAGE_CLEARED: "Канчето за отпадоци е успешно исчистено!",
    MESSAGE_SONG_ADDED: "Песната е додадена во кофата за отпад",
    MESSAGE_SONG_REMOVED: "Песната е отстранета од кофата за отпад",
    MESSAGE_ARTIST_ADDED: "Уметникот е додаден во корпата за отпадоци",
    MESSAGE_ARTIST_REMOVED: "Уметникот е отстранет од сандучето за отпадоци",
    BACKUP_SAVE_SUCCESS: "Резервното копирање е успешно зачувано.",
    BACKUP_SAVE_FAILED: "Неуспешно зачувување на резервната копија, обидете се со копирање на содржината на кофата за ѓубре во меморијата и рачно креирање на резервна копија.",
    BACKUP_RESTORE_SUCCESS: "Резервното копие е успешно вратено.",
    BACKUP_FILE_READ_FAILED: "Неуспешно прочитаја датотека, ве молиме осигурете се дека е валидна JSON датотека.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Поставувања за Trashbin+",
    SETTINGS_OPTIONS: "Опции",
    SETTINGS_FEATURES: "Карактеристики",
    SETTINGS_STORAGE: "Складирање",
    SETTINGS_ENABLED: "Овозможено",
    SETTINGS_SHOW_WIDGET: "Прикажи икона на додатокот",
    SETTINGS_AUTOPLAY: "Автоматско пуштање при старту",
    SETTINGS_QUEUE_TRASHBIN: "Овозможи кофа за отпадоци од редоследот",
    SETTINGS_TRACKLIST_TRASHBIN: "Овозможи кош за листата на нумери",
    SETTINGS_PLAYLIST_MONITOR: "Плејлист монитор",
    ITEMS_TITLE: "Ставки од кошчето за отпадоци+",
    ITEMS_EMPTY_SONGS: "<strong>Нема избришани песни!</strong><br/>Песните што ги додавате во кошчето за отпад ќе се појават овде.",
    ITEMS_EMPTY_ARTISTS: "<strong>Нема избришани уметници!</strong><br/>Уметниците што ги додавате во кошчето за отпад ќе се појават овде.",
    ITEMS_TAB_SONGS: "Песни",
    ITEMS_TAB_ARTISTS: "Уметници",
    ITEMS_LOADED_COUNT: "{{loaded}} од {{total}} {{type}} вчитани",
    ITEMS_SEARCH_PLACEHOLDER: "Пребарувај по име, изведувач или URI...",
    DESCRIPTION_COPY: "Копирај ги сите ставки во кошчето за отпад во таблата.",
    DESCRIPTION_EXPORT: "Зачувај ги сите ставки во кошчето за отпад во .json датотека.",
    DESCRIPTION_IMPORT: "Препиши ги сите ставки во кошчето преку .json датотека.",
    DESCRIPTION_CLEAR: "Исчисти ги сите ставки од кошчето за отпадоци (не може да се врати).",
    ITEMS_EMPTY_SONGS_TITLE: "Без уништени песни!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Без урнешени уметници!",
    DESCRIPTION_SETTINGS_ENABLED: "Главно преклопување за овозможување или оневозможување на сите функции на Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Прикажи икона за отпадоци на лентата за репродукција до трекот кој се пушта за брз пристап",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Автоматски започни со пуштање музика кога Спотифај ќе се отвори или кога екстензијата ќе се вчита",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Додај икони за браќе до секоја песна во редицата за следно пуштање за полесно управување",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Додај икони за бришење до песните во албумите и листите за свирење за брзо филтрирање",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Автоматско враќање од грешките при репродуцирањето на Spotify со продолжување на последната плејлиста",
    SETTINGS_SKIP_TRASHED_TRACKS: "Прескокни ја отфрлената песна",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Автоматски прескокни ги избришаните песни и пронајди ја следната дозволена песна во текот на репродукцијата",
    SETTINGS_AUTO_CLEAN_QUEUE: "Автоматска листа за чистење",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Автоматски отстрани ги избришаните песни од редицата за паметно мешање",
    SETTINGS_REMOTE_CONTROL: "Далечинско управување",
    SETTINGS_REMOTE_TOGGLE: "Овозможи додавање оддалечено",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Два пати допрете ја иконата за пуштање/пауза од мобилното за да вклучите или исклучите прескокнување на далечинска. Прескокнувањето на песната ја потврдува промената.",
    SETTINGS_REMOTE_SKIPPING: "Активно далечинско прескокнување",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Кога е овозможено, прескокнувањето на отпадоците функционира дури и кога управувате со Spotify од друг уред (на пр., мобилен)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Овозможено е прескокнување од далечина",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Оддалеченото прескокнување е оневозможено",
    MESSAGE_SONG_ADDED_REMOTE: "Песната уништена преку далечинско управување",
    SETTINGS_TRASH_VIA_LIKE: "Сметче преку Сакам",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Како песна од мобилен до корпа за отпад. Автоматски ја отстранува сакањето и преминува на следната песна.",
    SETTINGS_AI_DETECTION: "Детекција на вештачка интелигенција",
    SETTINGS_AI_DETECTION_ENABLED: "Детекција на песни со вештачка интелигенција",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Откриј ја употребата на АИ за генерирање песни со користење на SONICS моделот и прикажи индикатор на веројатноста. Преземање на модел од ~50 МБ при прво вклучување.",
    AI_ASSETS_DOWNLOADING: "Преземање на AI модел...",
    AI_ASSETS_READY: "AI моделот е готов",
    AI_ASSETS_NOT_READY: "AI моделот не е достапен",
    SETTINGS_TRASH_AI_SONGS: "Песни за џубре од вештачка интелигенција",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Автоматски отстрани ги песните кои се детектирани како направени од вештачка интелигенција (веројатност ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Исчисти ги сите зачувани резултати од класификација на вештачка интелигенција ({{count}} зачувани песни).",
    ACTION_CLEAR_AI_STORAGE: "Јасно",
    MESSAGE_AI_STORAGE_CLEARED: "Резултатите од вештачката интелигенција се испразени",
    AI_TIER_LIKELY_HUMAN: "Веројатно човечко",
    AI_TIER_PROBABLY_HUMAN: "Веројатно човек",
    AI_TIER_UNCERTAIN: "Неизвесно",
    AI_TIER_PROBABLY_AI: "Најверојатно вештачка интелигенција",
    AI_TIER_LIKELY_AI: "Веројатно ИИ",
    ACTION_REMOVE_TRASHED: "Отстрани ја забрањената музика",
    CONFIRM_REMOVE_TRASHED: "Да се отстрани {{count}} избришана песна(и) од оваа листа за репродукција? Ова не може да се врати.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Отстрани {{count}} избришана песна(и) од листата со песни",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Не се пронајдени избришани песни во оваа листа за репродукција"
  };
});

// src/i18n/ml.json
var require_ml = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "ട്രാഷ്ബിൻ+",
    ACTION_THROW: "ചവറ്റുകൊട്ടയിൽ ഇടുക",
    ACTION_UNTHROW: "ട്രഷ്ബിനിൽ നിന്ന് നീക്കം ചെയ്യുക",
    ACTION_CLEAR: "വ്യക്തമായ",
    ACTION_COPY: "പകർപ്പ്",
    ACTION_EXPORT: "കയറ്റുമതി ചെയ്യുക",
    ACTION_IMPORT: "ഇറക്കുമതി ചെയ്യുക",
    MESSAGE_COPIED: "ക്ലിപ്പ്ബോർഡിലേക്ക് പകർത്തി",
    MESSAGE_CLEARED: "അപശിഷ്ട ബിന്ദു വിജയകരമായി ശൂന്യമാക്കി!",
    MESSAGE_SONG_ADDED: "ഗാനം ചവറ്റുകൊട്ടയിലേക്ക് ചേർത്തു",
    MESSAGE_SONG_REMOVED: "പാട്ട് ചവറ്റുകൊട്ടയിൽ നിന്ന് നീക്കം ചെയ്തു",
    MESSAGE_ARTIST_ADDED: "അവഗണിക്കപ്പെട്ടവയിലേക്ക് കലാകാരനെ ചേർത്തു",
    MESSAGE_ARTIST_REMOVED: "അവശിഷ്ടങ്ങളുടെ പെട്ടിയിൽ നിന്ന് ആർട്ടിസ്റ്റിനെ നീക്കം ചെയ്തു",
    BACKUP_SAVE_SUCCESS: "ബാക്കപ്പ് വിജയകരമായി സേവ് ചെയ്തു.",
    BACKUP_SAVE_FAILED: "ബാക്കപ്പ് സംരക്ഷിക്കുന്നതിൽ പരാജയപ്പെട്ടു, ത്രാഷ്ബിനിലെ ഉള്ളടക്കങ്ങൾ ക്ലിപ്പ്ബോർഡിലേക്ക് പകർത്തി ഒരു ബാക്കപ്പ് കൈമാറായി സൃഷ്ടിക്കാൻ ശ്രമിക്കുക.",
    BACKUP_RESTORE_SUCCESS: "ബാക്കപ്പ് വിജയകരമായി പുനഃസ്ഥാപിച്ചു.",
    BACKUP_FILE_READ_FAILED: "ഫയൽ വായിക്കാൻ കഴിഞ്ഞില്ല, ദയവായി അത് ഒരു സാധുവായ JSON ഫയലാണെന്ന് ഉറപ്പാക്കുക.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "ട്രാഷ്ബിൻ+ ക്രമീകരണങ്ങൾ",
    SETTINGS_OPTIONS: "ഓപ്ഷനുകൾ",
    SETTINGS_FEATURES: "സവിശേഷതകൾ",
    SETTINGS_STORAGE: "സംഭരണം",
    SETTINGS_ENABLED: "സജീവമാക്കി",
    SETTINGS_SHOW_WIDGET: "വിദ്ഗെറ്റ് ഐക്കൺ കാണിക്കുക",
    SETTINGS_AUTOPLAY: "ആരംഭത്തിൽ ഓട്ടോപ്ലേ ചെയ്യുക",
    SETTINGS_QUEUE_TRASHBIN: "അടുക്കിവയ്ക്കുന്നതിന് ട്രാഷ്ബിൻ സജീവമാക്കുക",
    SETTINGS_TRACKLIST_TRASHBIN: "ട്രാക്ക് ലിസ്റ്റ് ട്രഷ്ബിൻ സജീവമാക്കുക",
    SETTINGS_PLAYLIST_MONITOR: "പ്ലേലിസ്റ്റ് മോണിറ്റർ",
    ITEMS_TITLE: "ട്രാഷ്ബിൻ+ ഇനങ്ങൾ",
    ITEMS_EMPTY_SONGS: "<strong>ഒന്നും നീക്കം ചെയ്തിട്ടില്ല!</strong><br/>നിങ്ങൾ നീക്കം ചെയ്ത ഗാനങ്ങൾ ഇവിടെ കാണിക്കും.",
    ITEMS_EMPTY_ARTISTS: "<strong>ഉപേക്ഷിക്കപ്പെട്ട കലാകാരന്മാർ ഇല്ല!</strong><br/>നിങ്ങൾ മാലിന്യബാലിത്തിലേക്ക് ചേർക്കുന്ന കലാകാരന്മാർ ഇവിടെ പ്രത്യക്ഷപ്പെടും.",
    ITEMS_TAB_SONGS: "ഗാനങ്ങൾ",
    ITEMS_TAB_ARTISTS: "കലാകാരന്മാർ",
    ITEMS_LOADED_COUNT: "{{total}} ൽ {{loaded}} {{type}} ലോഡ് ചെയ്തു",
    ITEMS_SEARCH_PLACEHOLDER: "പേര്, കലാകാരൻ അല്ലെങ്കിൽ URI ഉപയോഗിച്ച് തിരയുക...",
    DESCRIPTION_COPY: "അവശിഷ്ടങ്ങളുടെ പെട്ടിയിലെ എല്ലാ ഇനങ്ങളും ക്ലിപ്പ്ബോർഡിലേക്ക് പകർത്തുക.",
    DESCRIPTION_EXPORT: "ട്രാഷ്ബിനിലെ എല്ലാ ഇനങ്ങളും ഒരു .json ഫയലിൽ സംരക്ഷിക്കുക.",
    DESCRIPTION_IMPORT: "ജങ്ക് ബിനിലെ എല്ലാ ഇനങ്ങളും .json ഫയലിലൂടെ ഓവർറൈറ്റ് ചെയ്യുക.",
    DESCRIPTION_CLEAR: "ട്രാഷ്ബിനിൽ നിന്ന് എല്ലാ ഇനങ്ങളും നീക്കം ചെയ്യുക (തിരികെ പുനഃസ്ഥാപിക്കാൻ കഴിയില്ല).",
    ITEMS_EMPTY_SONGS_TITLE: "ഒരു നശിപ്പിച്ച പാട്ടുകളുമില്ല!",
    ITEMS_EMPTY_ARTISTS_TITLE: "ഒരു ത്രാഷ് ചെയ്ത കലാകാരനും ഇല്ല!",
    DESCRIPTION_SETTINGS_ENABLED: "എല്ലാ ത്രാഷ്ബിൻ+ പ്രവർത്തനങ്ങളും സജീവമാക്കുന്നതിനോ നിഷ്ക്രിയമാക്കുന്നതിനോ ഉള്ള മാസ്റ്റർ ടോഗിൾ",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "നിലവിൽ പ്ലേ ചെയ്യുന്ന ട്രാക്കിന് അടുത്തായി പ്ലേബാക്ക് ബാറിൽ ഒരു ട്രാഷ് ഐക്കൺ പ്രദർശിപ്പിക്കുക",
    DESCRIPTION_SETTINGS_AUTOPLAY: "സ്പോട്ടിഫൈ തുറക്കുമ്പോഴോ എക്സ്റ്റൻഷൻ ലോഡ് ചെയ്യുമ്പോഴോ സ്വയമേവ സംഗീതം പ്ലേ ചെയ്യാൻ ആരംഭിക്കുക",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "നിങ്ങളുടെ അടുത്ത ക്യൂവിലെ ഓരോ ഗാനത്തിനും അടുത്തായി ത്രാഷ് ഐക്കണുകൾ ചേർക്കുക, എളുപ്പത്തിൽ കൈകാര്യം ചെയ്യാൻ",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "ആൽബം, പ്ലേലിസ്റ്റ് കാഴ്ചകളിൽ പാട്ടുകൾക്ക് അടുത്ത് ത്രാഷ് ഐക്കണുകൾ ചേർക്കുക, വേഗത്തിലുള്ള ഫിൽട്ടറിംഗിനായി",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "അവസാന പ്ലേലിസ്റ്റ് പുനഃരാരംഭിക്കുന്നതിലൂടെ സ്പോട്ടിഫൈ പ്ലേബാക്ക് പ്രശ്നങ്ങളിൽ നിന്ന് സ്വയമേവ പുനഃസ്ഥാപിക്കുക",
    SETTINGS_SKIP_TRASHED_TRACKS: "ത്രാഷ് ചെയ്ത ട്രാക്കുകൾ ഒഴിവാക്കുക",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "താളമുടിഞ്ഞ ഗാനങ്ങൾ സ്വയമേവ ഒഴിവാക്കുകയും പ്ലേബാക്ക് സമയത്ത് അടുത്തതായി അനുവദിച്ച ട്രാക്ക് കണ്ടെത്തുകയും ചെയ്യുക",
    SETTINGS_AUTO_CLEAN_QUEUE: "ഓട്ടോ ക്ലീൻ ക്യൂ",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "നിങ്ങളുടെ സ്മാർട്ട് ഷഫിൾ ക്യൂവിൽ നിന്ന് ത്രാഷ് ചെയ്ത പാട്ടുകൾ സ്വയമേവ നീക്കം ചെയ്യുക",
    SETTINGS_REMOTE_CONTROL: "റിമോട്ട് കൺട്രോൾ",
    SETTINGS_REMOTE_TOGGLE: "റിമോട്ട് ടോഗിൾ സജ്ജമാക്കുക",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "മൊബൈലിൽ നിന്ന് പ്ലേ/പൗസ് റിമോട്ട് സ്കിപ്പിംഗ് ഓണാക്കാനും ഓഫാക്കാനും രണ്ട് തവണ ടാപ്പ് ചെയ്യുക. ഒരു ട്രാക്ക് സ്കിപ്പ് ടോഗിൾ സ്ഥിരീകരിക്കുന്നു.",
    SETTINGS_REMOTE_SKIPPING: "റിമോട്ട് സ്കിപ്പിംഗ് സജീവമാണ്",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "സക്രിയമാക്കിയാൽ, മറ്റൊരു ഉപകരണത്തിൽ നിന്ന് (ഉദാ: മൊബൈൽ) സ്പോട്ടിഫൈ നിയന്ത്രിക്കുമ്പോൾ പോലും ട്രാഷ് ഒഴിവാക്കൽ പ്രവർത്തിക്കുന്നു",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "ദൂരെ നിന്നുള്ള ഉപേക്ഷ സജീവമാക്കി",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "ദൂരെ നിന്നുള്ള ഉപേക്ഷനം അപ്രാപ്യമാക്കി",
    MESSAGE_SONG_ADDED_REMOTE: "റിമോട്ട് വഴി പാട്ട് നശിപ്പിച്ചു",
    SETTINGS_TRASH_VIA_LIKE: "ലൈക്കിലൂടെ ചവറ്",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "മൊബൈലിൽ നിന്ന് ഒരു പാട്ട് പോലെ അതിനെ നിരസിക്കുക. സ്വയമേവ നിരസിച്ച് അടുത്ത ട്രാക്കിലേക്ക് മാറുക.",
    SETTINGS_AI_DETECTION: "AI കണ്ടെത്തൽ",
    SETTINGS_AI_DETECTION_ENABLED: "എഐ പാട്ട് കണ്ടെത്തൽ",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "SONICS മാതൃക ഉപയോഗിച്ച് എഐ ഉത്പാദിത ഗാനങ്ങൾ കണ്ടെത്തുകയും സാധ്യതാ സൂചിക കാണിക്കുകയും ചെയ്യുക. ആദ്യത്തെ പ്രാപ്തമാക്കലിൽ ~50MB മാതൃക ഡൗൺലോഡ് ചെയ്യുന്നു.",
    AI_ASSETS_DOWNLOADING: "AI മോഡൽ ഡൗൺലോഡ് ചെയ്യുന്നു...",
    AI_ASSETS_READY: "AI മോഡൽ തയ്യാറാണ്",
    AI_ASSETS_NOT_READY: "AI മാതൃക ലഭ്യമല്ല",
    SETTINGS_TRASH_AI_SONGS: "ട്രാഷ് എഐ പാട്ടുകൾ",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "AI-ഉത്പാദിതമായി കണ്ടെത്തിയ (സാധ്യത ≥ 80%) ഗാനങ്ങൾ സ്വയമേവ നീക്കം ചെയ്യുക",
    DESCRIPTION_CLEAR_AI_STORAGE: "സംഭരിച്ചിരിക്കുന്ന എല്ലാ എഐ വർഗ്ഗീകരണ ഫലങ്ങളും മായ്‌ക്കുക ({{count}} പാട്ടുകൾ സംഭരിച്ചിരിക്കുന്നു).",
    ACTION_CLEAR_AI_STORAGE: "വ്യക്തമായ",
    MESSAGE_AI_STORAGE_CLEARED: "AI ഫലങ്ങൾ ക്ലിയർ ചെയ്തു",
    AI_TIER_LIKELY_HUMAN: "സാധ്യമായ മനുഷ്യൻ",
    AI_TIER_PROBABLY_HUMAN: "സാധാരണ മനുഷ്യൻ",
    AI_TIER_UNCERTAIN: "നിശ്ചയമില്ലാത്ത",
    AI_TIER_PROBABLY_AI: "സാധ്യത ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ് ആണ്",
    AI_TIER_LIKELY_AI: "സാധ്യതയുള്ള ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ്",
    ACTION_REMOVE_TRASHED: "ഡമ്പ് ചെയ്ത ഗാനങ്ങൾ നീക്കം ചെയ്യുക",
    CONFIRM_REMOVE_TRASHED: "ഈ പ്ലേലിസ്റ്റിൽ നിന്ന് {{count}} ഡമ്പ് ചെയ്ത ഗാനങ്ങൾ നീക്കം ചെയ്യണോ? ഇത് തിരികെ പുനഃസ്ഥാപിക്കാൻ കഴിയില്ല.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "പ്ലേലിസ്റ്റിൽ നിന്ന് ഒഴിവാക്കിയ {{count}} ഗാനങ്ങൾ നീക്കം ചെയ്തു",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "ഈ പ്ലേലിസ്റ്റിൽ ഒരു ത്രാഷ് ചെയ്ത ഗാനങ്ങളും കണ്ടെത്തിയില്ല"
  };
});

// src/i18n/mr.json
var require_mr = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "कचऱ्याची टोपली+",
    ACTION_THROW: "कचऱ्याच्या डब्यात ठेवा",
    ACTION_UNTHROW: "कचऱ्याच्या डब्यातून काढा",
    ACTION_CLEAR: "स्पष्ट",
    ACTION_COPY: "कॉपी",
    ACTION_EXPORT: "निर्यात",
    ACTION_IMPORT: "आयात",
    MESSAGE_COPIED: "क्लिपबोर्डवर कॉपी केले",
    MESSAGE_CLEARED: "ट्रॅशबिन यशस्वीरित्या साफ केले!",
    MESSAGE_SONG_ADDED: "गाणे ट्रॅशबिनमध्ये जोडले गेले",
    MESSAGE_SONG_REMOVED: "गाणे रद्द केलेल्या फाइल्सच्या फोल्डरमधून काढून टाकले",
    MESSAGE_ARTIST_ADDED: "कलाकाराला ट्रॅशबिनमध्ये जोडले",
    MESSAGE_ARTIST_REMOVED: "कलाकाराला ट्रॅशबिनमधून काढून टाकले",
    BACKUP_SAVE_SUCCESS: "बॅकअप यशस्वीरित्या जतन झाले.",
    BACKUP_SAVE_FAILED: "बॅकअप जतन करण्यात अयशस्वी, ट्रॅशबिनची सामग्री क्लिपबोर्डवर कॉपी करण्याचा प्रयत्न करा आणि मॅन्युअलपणे बॅकअप तयार करा.",
    BACKUP_RESTORE_SUCCESS: "बॅकअप यशस्वीरित्या पुन्हा स्थापित केले.",
    BACKUP_FILE_READ_FAILED: "फाइल वाचण्यात अयशस्वी, कृपया खात्री करा की ती वैध JSON फाइल आहे.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "ट्रॅशबिन+ सेटिंग्ज",
    SETTINGS_OPTIONS: "पर्याय",
    SETTINGS_FEATURES: "वैशिष्ट्ये",
    SETTINGS_STORAGE: "साठा",
    SETTINGS_ENABLED: "सक्षम केले",
    SETTINGS_SHOW_WIDGET: "विडगेट आयकॉन दाखवा",
    SETTINGS_AUTOPLAY: "सुरुवातीला स्वयंचलितपणे चालू करा",
    SETTINGS_QUEUE_TRASHBIN: "कतार ट्रॅशबिन सक्षम करा",
    SETTINGS_TRACKLIST_TRASHBIN: "ट्रॅकलिस्ट ट्रॅशबिन सक्षम करा",
    SETTINGS_PLAYLIST_MONITOR: "प्लेलिस्ट मॉनिटर",
    ITEMS_TITLE: "ट्रॅशबिन+ आयटम्स",
    ITEMS_EMPTY_SONGS: "<strong>कचऱ्यात टाकलेले गाणे नाहीत!</strong><br/>तुम्ही कचऱ्याच्या डब्यात जोडलेली गाणी येथे दिसतील.",
    ITEMS_EMPTY_ARTISTS: "<strong>कोणतेही कचऱ्यातील कलाकार नाहीत!</strong><br/>तुम्ही कचऱ्याच्या डब्यात जोडलेले कलाकार येथे दिसतील.",
    ITEMS_TAB_SONGS: "गाणी",
    ITEMS_TAB_ARTISTS: "कलाकार",
    ITEMS_LOADED_COUNT: "लोड झालेले {{total}} पैकी {{loaded}} {{type}}",
    ITEMS_SEARCH_PLACEHOLDER: "नाव, कलाकार किंवा URI नुसार शोधा...",
    DESCRIPTION_COPY: "ट्रॅशबिनमधील सर्व घटक क्लिपबोर्डवर कॉपी करा.",
    DESCRIPTION_EXPORT: "त्रष्टबिनमधील सर्व घटक .json फाइलमध्ये जतन करा.",
    DESCRIPTION_IMPORT: "ट्रॅशबिनमधील सर्व आयटम .json फाइलद्वारे ओव्हरराइट करा.",
    DESCRIPTION_CLEAR: "कचऱ्याच्या डब्यातून सर्व वस्तू स्पष्ट करा (परत करता येणार नाही).",
    ITEMS_EMPTY_SONGS_TITLE: "कोणत्याही गाण्यांची फेक नाही!",
    ITEMS_EMPTY_ARTISTS_TITLE: "कोणतेही फेकलेले कलाकार नाहीत!",
    DESCRIPTION_SETTINGS_ENABLED: "ट्रॅशबिन+ कार्यक्षमता सक्षम करण्यासाठी किंवा अक्षम करण्यासाठी मास्टर टॉगल",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "सध्या चालणाऱ्या ट्रॅकच्या जवळ प्लेबॅक बारमध्ये जलद प्रवेशासाठी ट्रॅश आयकॉन दाखवा",
    DESCRIPTION_SETTINGS_AUTOPLAY: "स्पॉटिफाई उघडल्यावर किंवा एक्सटेंशन लोड झाल्यावर स्वयंचलितपणे संगीत वाजवा",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "तुमच्या येणार्‍या रांगेतील प्रत्येक गाण्याजवळ सोप्या व्यवस्थापनासाठी ट्रॅश आयकॉन जोडा",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "अल्बम आणि वाजवणी यादीच्या दृश्यांमध्ये गाण्यांच्या जवळ घाण कचरा आयकॉन जोडा जलद फिल्टरिंगसाठी",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "तुमची शेवटची प्लेलिस्ट पुन्हा सुरू करून स्पॉटिफाई प्लेबॅक चुका स्वयंचलितपणे दुरुस्त करा",
    SETTINGS_SKIP_TRASHED_TRACKS: "तपकिरी ट्रॅक्स वर जा",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "स्वयंचलितपणे फेकलेले गाणे वगळा आणि वाजवताना पुढील परवानगी दिलेले ट्रॅक शोधा",
    SETTINGS_AUTO_CLEAN_QUEUE: "ऑटो क्लीन कतार",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "तुमच्या स्मार्ट शफल रांगेतून फेकलेल्या गाण्यांचे स्वयंचलितपणे काढून टाका",
    SETTINGS_REMOTE_CONTROL: "दूरस्थ नियंत्रण",
    SETTINGS_REMOTE_TOGGLE: "दूरस्थ टॉगल सक्षम करा",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "मोबाइलवरून रिमोट स्किपिंग चालू/बंद करण्यासाठी डबल-टॅप प्ले/पॉझ करा. ट्रॅक स्किप करणे हे टॉगल पुष्टी करते.",
    SETTINGS_REMOTE_SKIPPING: "दूरस्थ वगळणे सक्रिय",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "सक्षम असताना, ट्रॅश-स्किपिंग दुसऱ्या डिव्हाइसवरून (उदा., मोबाइल) स्पॉटिफाय नियंत्रित करतानाही कार्य करते",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "दूरस्थ वगळणे सक्षम आहे",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "दूरस्थ उद्धृत करणे अक्षम केले",
    MESSAGE_SONG_ADDED_REMOTE: "गाणे दूरस्थ पद्धतीने नष्ट केले",
    SETTINGS_TRASH_VIA_LIKE: "लायक करिता कचरा",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "मोबाईलमधून ते ट्रॅश करण्यासाठी एक गाण्याप्रमाणे. स्वयंचलितपणे आवड नाही आणि पुढील ट्रॅकवर जाते.",
    SETTINGS_AI_DETECTION: "एआय डिटेक्शन",
    SETTINGS_AI_DETECTION_ENABLED: "एआय गाणे शोधन",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "SONICS मॉडेलचा वापर करून एआय-निर्मित गाणी शोधा आणि संभाव्यता निर्देशक दाखवा. प्रथम सक्षम करताना ~50MB मॉडेल डाउनलोड करा.",
    AI_ASSETS_DOWNLOADING: "AI मॉडेल डाउनलोड करीत आहे...",
    AI_ASSETS_READY: "AI मॉडेल तयार",
    AI_ASSETS_NOT_READY: "AI मॉडेल उपलब्ध नाही",
    SETTINGS_TRASH_AI_SONGS: "कचरा एआय गाणी",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "स्वयंचलितपणे एआय-निर्मित म्हणून ओळखल्या गेलेल्या गाण्यांची ट्रॅश करा (संभाव्यता ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "संग्रहित केलेले सर्व AI वर्गीकरण निकाल स्पष्ट करा ({{count}} गाणी संग्रहित केलेली).",
    ACTION_CLEAR_AI_STORAGE: "स्पष्ट",
    MESSAGE_AI_STORAGE_CLEARED: "AI निकाल स्पष्ट झाले",
    AI_TIER_LIKELY_HUMAN: "संभाव्य मानव",
    AI_TIER_PROBABLY_HUMAN: "कदाचित मानव",
    AI_TIER_UNCERTAIN: "अनिश्चित",
    AI_TIER_PROBABLY_AI: "संभवतः एआय",
    AI_TIER_LIKELY_AI: "संभाव्य एआय",
    ACTION_REMOVE_TRASHED: "तोडणीत गेलेले गाणे काढून टाका",
    CONFIRM_REMOVE_TRASHED: "ही प्लेलिस्ट वरून {{count}} कचरा झालेले गाणे काढून टाकायचे? हे परत करता येणार नाही.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "प्लेलिस्टमधून {{count}} कचरा टाकलेले गाणे काढून टाकले",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "या यादीत कोणतेही फेकलेले गाणे आढळले नाहीत"
  };
});

// src/i18n/ms.json
var require_ms = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Tong sampah+",
    ACTION_THROW: "Letakkan dalam Tong Sampah",
    ACTION_UNTHROW: "Alih keluar dari Tong Sampah",
    ACTION_CLEAR: "Jelas",
    ACTION_COPY: "Salin",
    ACTION_EXPORT: "Eksport",
    ACTION_IMPORT: "Import",
    MESSAGE_COPIED: "Disalin ke papan keratan",
    MESSAGE_CLEARED: "Tong sampah berjaya dikosongkan!",
    MESSAGE_SONG_ADDED: "Lagu ditambah ke dalam tong sampah",
    MESSAGE_SONG_REMOVED: "Lagu dikeluarkan dari tong sampah",
    MESSAGE_ARTIST_ADDED: "Artis ditambah ke tong sampah",
    MESSAGE_ARTIST_REMOVED: "Artis dikeluarkan dari tong sampah",
    BACKUP_SAVE_SUCCESS: "Sandaran berjaya disimpan.",
    BACKUP_SAVE_FAILED: "Gagal menyimpan sandaran, cuba salin kandungan tong sampah ke papan keratan dan cipta sandaran secara manual.",
    BACKUP_RESTORE_SUCCESS: "Sandaran dipulihkan berjaya.",
    BACKUP_FILE_READ_FAILED: "Gagal membaca fail, sila pastikan ia adalah fail JSON yang sah.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Tetapan Tong Sampah+",
    SETTINGS_OPTIONS: "Pilihan",
    SETTINGS_FEATURES: "Ciri-ciri",
    SETTINGS_STORAGE: "Storan",
    SETTINGS_ENABLED: "Didayakan",
    SETTINGS_SHOW_WIDGET: "Tunjukkan Ikon Widget",
    SETTINGS_AUTOPLAY: "Main automatik pada permulaan",
    SETTINGS_QUEUE_TRASHBIN: "Dayakan Tong Sampah Barisan",
    SETTINGS_TRACKLIST_TRASHBIN: "Dayakan Tong Sampah Senarai Trek",
    SETTINGS_PLAYLIST_MONITOR: "Pemantau Senarai Main",
    ITEMS_TITLE: "Barangan Tong Sampah+",
    ITEMS_EMPTY_SONGS: "<strong>Tiada lagu yang dibuang!</strong><br/>Lagu yang anda tambah ke dalam tong sampah akan dipaparkan di sini.",
    ITEMS_EMPTY_ARTISTS: "<strong>Tiada artis yang dibuang!</strong><br/>Artis yang anda tambah ke dalam tong sampah akan muncul di sini.",
    ITEMS_TAB_SONGS: "Lagu-lagu",
    ITEMS_TAB_ARTISTS: "Artis",
    ITEMS_LOADED_COUNT: "{{loaded}} daripada {{total}} {{type}} dimuatkan",
    ITEMS_SEARCH_PLACEHOLDER: "Cari mengikut nama, artis, atau URI...",
    DESCRIPTION_COPY: "Salin semua item dalam tong sampah ke papan keratan.",
    DESCRIPTION_EXPORT: "Simpan semua item dalam tong sampah ke fail .json.",
    DESCRIPTION_IMPORT: "Timpa semua item dalam tong sampah melalui fail .json.",
    DESCRIPTION_CLEAR: "Padam semua item dari tong sampah (tidak boleh dikembalikan).",
    ITEMS_EMPTY_SONGS_TITLE: "Tiada lagu yang dibuang!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Tiada artis yang dibuang!",
    DESCRIPTION_SETTINGS_ENABLED: "Tog kelola untuk mengaktifkan atau mematikan semua fungsi Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Paparkan ikon tong sampah di bar pemainan bersebelahan trek yang sedang dimainkan untuk akses pantas",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Mainkan muzik secara automatik apabila Spotify dibuka atau sambungan dimuatkan",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Tambah ikon sampah di sebelah setiap lagu dalam barisan menunggu anda untuk pengurusan yang mudah",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Tambah ikon sampah di sebelah lagu dalam paparan album dan senarai main untuk penapisan pantas",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Pulih secara automatik daripada masalah pemain Spotify dengan meneruskan senarai main terakhir anda",
    SETTINGS_SKIP_TRASHED_TRACKS: "Langkau Trek yang Rosak",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Langkau lagu yang dibuang secara automatik dan cari trek seterusnya yang dibenarkan semasa pemainan",
    SETTINGS_AUTO_CLEAN_QUEUE: "Barisan Pembersihan Automatik",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Alih keluar secara automatik lagu yang dibuang dari barisan gilir pintar anda",
    SETTINGS_REMOTE_CONTROL: "Kawalan Jauh",
    SETTINGS_REMOTE_TOGGLE: "Dayakan Butang Togol Jauh",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Ketik dua kali play/jeda dari peranti mudah alih untuk menukar fungsi lompat jauh hidup/mati. Lompat trek mengesahkan pertukaran tersebut.",
    SETTINGS_REMOTE_SKIPPING: "Langkau Jauh Aktif",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Apabila didayakan, fungsi melangkau sampah berfungsi walaupun mengawal Spotify dari peranti lain (contohnya, telefon bimbit)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Langkau jauh diaktifkan",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Langkau jauh dilumpuhkan",
    MESSAGE_SONG_ADDED_REMOTE: "Lagu dimusnahkan melalui jarak jauh",
    SETTINGS_TRASH_VIA_LIKE: "Sampah melalui Suka",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Seperti lagu dari telefon bimbit ke tong sampah. Secara automatik batal suka dan terus ke trek seterusnya.",
    SETTINGS_AI_DETECTION: "Pengesanan AI",
    SETTINGS_AI_DETECTION_ENABLED: "Pengesanan Lagu AI",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Mengesan lagu yang dijana oleh AI menggunakan model SONICS dan memaparkan penunjuk kebarangkalian. Muat turun model ~50MB pada kali pertama diaktifkan.",
    AI_ASSETS_DOWNLOADING: "Memuat turun model AI...",
    AI_ASSETS_READY: "Model AI sedia",
    AI_ASSETS_NOT_READY: "Model AI tidak tersedia",
    SETTINGS_TRASH_AI_SONGS: "Lagu AI Sampah",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Buang secara automatik lagu yang dikesan dijana oleh AI (kebarangkalian ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Padamkan semua keputusan pengelasan AI yang disimpan ({{count}} lagu disimpan).",
    ACTION_CLEAR_AI_STORAGE: "Jelas",
    MESSAGE_AI_STORAGE_CLEARED: "Keputusan AI telah dibersihkan",
    AI_TIER_LIKELY_HUMAN: "Kemungkinan Manusia",
    AI_TIER_PROBABLY_HUMAN: "Kemungkinan manusia",
    AI_TIER_UNCERTAIN: "Tidak pasti",
    AI_TIER_PROBABLY_AI: "Kemungkinan besar AI",
    AI_TIER_LIKELY_AI: "AI yang berkemungkinan",
    ACTION_REMOVE_TRASHED: "Alih keluar lagu yang dibuang",
    CONFIRM_REMOVE_TRASHED: "Alih keluar {{count}} lagu yang dibuang dari senarai main ini? Tindakan ini tidak boleh diterbalikkan.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Dibuang {{count}} lagu(s) yang dibuang dari senarai main",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Tiada lagu yang dibuang dijumpai dalam senarai main ini"
  };
});

// src/i18n/nb.json
var require_nb = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Papirkurv+",
    ACTION_THROW: "Plasser i søppelbøtta",
    ACTION_UNTHROW: "Fjern fra søppelkassen",
    ACTION_CLEAR: "Klar",
    ACTION_COPY: "Kopier",
    ACTION_EXPORT: "Eksport",
    ACTION_IMPORT: "Import",
    MESSAGE_COPIED: "Kopiert til utklippstavlen",
    MESSAGE_CLEARED: "Papirkurven er tømt!",
    MESSAGE_SONG_ADDED: "Sang lagt til søppelbøtta",
    MESSAGE_SONG_REMOVED: "Sang fjernet fra søppelkurven",
    MESSAGE_ARTIST_ADDED: "Kunstner lagt til søppelkassen",
    MESSAGE_ARTIST_REMOVED: "Kunstner fjernet fra søppelkassen",
    BACKUP_SAVE_SUCCESS: "Sikkerhetskopi lagret vellykket.",
    BACKUP_SAVE_FAILED: "Kunne ikke lagre sikkerhetskopi, prøv å kopiere papirkurvinnholdet til utklippstavlen og lag en sikkerhetskopi manuelt.",
    BACKUP_RESTORE_SUCCESS: "Sikkerhetskopi gjenopprettet.",
    BACKUP_FILE_READ_FAILED: "Kunne ikke lese filen, vær vennlig å forsikre deg om at det er en gyldig JSON-fil.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-søppeldunk.json",
    SETTINGS_TITLE: "Innstillinger for søppelkorg+",
    SETTINGS_OPTIONS: "Alternativer",
    SETTINGS_FEATURES: "Funksjoner",
    SETTINGS_STORAGE: "Lagring",
    SETTINGS_ENABLED: "Aktivert",
    SETTINGS_SHOW_WIDGET: "Vis miniprogramikon",
    SETTINGS_AUTOPLAY: "Autospill ved oppstart",
    SETTINGS_QUEUE_TRASHBIN: "Aktiver kø-søppelkasse",
    SETTINGS_TRACKLIST_TRASHBIN: "Aktiver sporspillsøppelkasse",
    SETTINGS_PLAYLIST_MONITOR: "Spillelistemonitor",
    ITEMS_TITLE: "Papirkurv+ elementer",
    ITEMS_EMPTY_SONGS: "<strong>Ingen slettede sanger!</strong><br/>Sanger du legger i søppelbøtten vil vises her.",
    ITEMS_EMPTY_ARTISTS: "<strong>Ingen slettede artister!</strong><br/>Artister du legger i papirkurven vil vises her.",
    ITEMS_TAB_SONGS: "Sanger",
    ITEMS_TAB_ARTISTS: "Kunstnere",
    ITEMS_LOADED_COUNT: "{{loaded}} av {{total}} {{type}} lastet inn",
    ITEMS_SEARCH_PLACEHOLDER: "Søk etter navn, artist eller URI...",
    DESCRIPTION_COPY: "Kopier alle elementer i søppelkassen til utklippstavlen.",
    DESCRIPTION_EXPORT: "Lagre alle elementer i papirkurven til en .json-fil.",
    DESCRIPTION_IMPORT: "Overskriv alle elementer i søppelkassen via .json-fil.",
    DESCRIPTION_CLEAR: "Tøm alle elementer fra papirkurven (kan ikke angres).",
    ITEMS_EMPTY_SONGS_TITLE: "Ingen slettede sanger!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Ingen ødelagte artister!",
    DESCRIPTION_SETTINGS_ENABLED: "Hovedbryter for å aktivere eller deaktivere all papirkurv+-funksjonalitet",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Vis et søppelikon i avspillingslinjen ved siden av den nåværende sporene for rask tilgang",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Start automatisk å spille musikk når Spotify åpnes eller utvidelsen lastes",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Legg til søppelikoner ved siden av hver sang i køen din for enkel håndtering",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Legg til søppelikoner ved siden av sanger i album- og spillelistevyer for rask filtrering",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Gjenopprett automatisk fra Spotify-avspillingsproblemer ved å fortsette siste spillelisten din",
    SETTINGS_SKIP_TRASHED_TRACKS: "Hopp over ødelagte spor",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Hopp automatisk over slettede sanger og finn neste tillatte spor under avspilling",
    SETTINGS_AUTO_CLEAN_QUEUE: "Automatisk rengjøringskø",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Fjern automatisk slettede sanger fra din Smart Shuffle-kø",
    SETTINGS_REMOTE_CONTROL: "Fjernkontroll",
    SETTINGS_REMOTE_TOGGLE: "Aktiver fjernstyring",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Dobbelttrykk på spill/pause fra mobil for å slå fjernhopping av/på. Hopping til neste spor bekrefter valget.",
    SETTINGS_REMOTE_SKIPPING: "Fjernhopping aktiv",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Når det er aktivert, fungerer avvisning av spor selv når du styrer Spotify fra en annen enhet (for eksempel mobil)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Fjernhopping aktivert",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Fjernhopping deaktivert",
    MESSAGE_SONG_ADDED_REMOTE: "Sang slettet via fjernkontroll",
    SETTINGS_TRASH_VIA_LIKE: "Søppel via Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Som en sang fra mobil til papirkurv. Fjerner lik automatisk og hopper til neste spor.",
    SETTINGS_AI_DETECTION: "AI-gjenkjenning",
    SETTINGS_AI_DETECTION_ENABLED: "AI-sangdeteksjon",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Oppdag AI-genererte sanger ved hjelp av SONICS-modellen og vis en sannsynlighetsindikator. Laster ned ~50 MB modell ved første aktivering.",
    AI_ASSETS_DOWNLOADING: "Laster ned AI-modell...",
    AI_ASSETS_READY: "AI-modell klar",
    AI_ASSETS_NOT_READY: "AI-modell ikke tilgjengelig",
    SETTINGS_TRASH_AI_SONGS: "Søppel AI-sanger",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Automatisk slett sanger som er identifisert som AI-genererte (sannsynlighet ≥ 80 %)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Fjern alle lagrede AI-klassifiseringsresultater ({{count}} sanger lagret).",
    ACTION_CLEAR_AI_STORAGE: "Klar",
    MESSAGE_AI_STORAGE_CLEARED: "AI-resultater slettet",
    AI_TIER_LIKELY_HUMAN: "Sannsynligvis menneskelig",
    AI_TIER_PROBABLY_HUMAN: "Sannsynligvis menneskelig",
    AI_TIER_UNCERTAIN: "Usikker",
    AI_TIER_PROBABLY_AI: "Sannsynligvis kunstig intelligens",
    AI_TIER_LIKELY_AI: "Sannsynlig AI",
    ACTION_REMOVE_TRASHED: "Fjern slettede sanger",
    CONFIRM_REMOVE_TRASHED: "Fjern {{count}} slettet(e) sang(er) fra denne spillelisten? Dette kan ikke angres.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Fjernet {{count}} slettet(e) sang(er) fra spilleliste",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Ingen slettede sanger funnet i denne spillelisten"
  };
});

// src/i18n/ne.json
var require_ne = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "ट्र्याशबिन+",
    ACTION_THROW: "ट्र्यासबिनमा राख्नुहोस्",
    ACTION_UNTHROW: "ट्रासबिनबाट हटाउनुहोस्",
    ACTION_CLEAR: "स्पष्ट",
    ACTION_COPY: "प्रतिलिपि",
    ACTION_EXPORT: "निर्यात",
    ACTION_IMPORT: "आयात गर्नुहोस्",
    MESSAGE_COPIED: "क्लिपबोर्डमा प्रतिलिपि गरियो",
    MESSAGE_CLEARED: "ट्र्यासबिन सफलतापूर्वक खाली गरियो!",
    MESSAGE_SONG_ADDED: "गीत ट्र्यासबिनमा थपियो",
    MESSAGE_SONG_REMOVED: "ट्र्यासबिनबाट गीत हटाइयो",
    MESSAGE_ARTIST_ADDED: "कलाकारलाई ट्र्यास्बिनमा थपियो",
    MESSAGE_ARTIST_REMOVED: "कलाकारलाई फाल्तु डब्बाबाट हटाइयो",
    BACKUP_SAVE_SUCCESS: "ब्याकअप सफलतापूर्वक सुरक्षित भयो।",
    BACKUP_SAVE_FAILED: "ब्याकअप सेभ गर्न असफल, कृपया ट्र्यासबिनको सामग्री क्लिपबोर्डमा कपि गर्ने र म्यानुअल रूपमा ब्याकअप सिर्जना गर्ने प्रयास गर्नुहोस्।",
    BACKUP_RESTORE_SUCCESS: "ब्याकअप सफलतापूर्वक पुनर्स्थापित भयो।",
    BACKUP_FILE_READ_FAILED: "फाइल पढ्न असफल, कृपया सुनिश्चित गर्नुहोस् यो वैध जेसन फाइल हो।",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "ट्र्यास्बिन+ सेटिङ्हरू",
    SETTINGS_OPTIONS: "विकल्पहरू",
    SETTINGS_FEATURES: "विशेषताहरू",
    SETTINGS_STORAGE: "भण्डारण",
    SETTINGS_ENABLED: "सक्षम गरियो",
    SETTINGS_SHOW_WIDGET: "विजेट आइकन देखाउनुहोस्",
    SETTINGS_AUTOPLAY: "सुरुमा स्वत: चलाउनुहोस्",
    SETTINGS_QUEUE_TRASHBIN: "कतार ट्र्यास्बिन सक्षम पार्नुहोस्",
    SETTINGS_TRACKLIST_TRASHBIN: "ट्र्याकलिस्ट ट्र्यासबिन सक्षम पार्नुहोस्",
    SETTINGS_PLAYLIST_MONITOR: "प्लेलिस्ट मोनिटर",
    ITEMS_TITLE: "ट्र्याशबिन+ आइटमहरू",
    ITEMS_EMPTY_SONGS: "<strong>कुनै फालिएका गीतहरू छैनन्!</strong><br/>तपाईंले ट्र्यासबिनमा थप्नु भएका गीतहरू यहाँ देखा पर्नेछन्।",
    ITEMS_EMPTY_ARTISTS: "<strong>कुनै फाल्तू कलाकार छैनन्!</strong><br/>तपाईंले ट्र्यासबिनमा थप्नु भएका कलाकारहरू यहाँ देखा पर्नेछन्।",
    ITEMS_TAB_SONGS: "गीतहरू",
    ITEMS_TAB_ARTISTS: "कलाकारहरू",
    ITEMS_LOADED_COUNT: "{{total}} मध्ये {{loaded}} {{type}} लोड भयो",
    ITEMS_SEARCH_PLACEHOLDER: "नाम, कलाकार वा URI अनुसार खोज्नुहोस्...",
    DESCRIPTION_COPY: "ट्र्यासबिनमा रहेका सबै वस्तुहरू क्लिपबोर्डमा कपि गर्नुहोस्।",
    DESCRIPTION_EXPORT: "ट्र्यासबिनमा रहेका सबै आइटमहरूलाई .json फाइलमा सुरक्षित गर्नुहोस्।",
    DESCRIPTION_IMPORT: "ट्र्यासबिनमा रहेका सबै आइटमहरूलाई .json फाइलबाट ओभरराइट गर्नुहोस्।",
    DESCRIPTION_CLEAR: "ट्र्यासबिनबाट सबै आइटमहरू हटाउनुहोस् (फर्काउन सकिँदैन)।",
    ITEMS_EMPTY_SONGS_TITLE: "कुनै फालिएका गीतहरू छैनन्!",
    ITEMS_EMPTY_ARTISTS_TITLE: "कुनै फाल्तु कलाकार छैनन्!",
    DESCRIPTION_SETTINGS_ENABLED: "सबै ट्र्यास्बिन+ कार्यक्षमता सक्षम वा अक्षम गर्न मास्टर टगल",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "हाल चलिरहेको ट्र्याकको प्लेब्याक बारमा छिटो पहुँचका लागि ट्र्यास आइकन देखाउनुहोस्",
    DESCRIPTION_SETTINGS_AUTOPLAY: "स्पोटिफाइ खुल्दा वा एक्सटेन्सन लोड हुँदा स्वत: संगीत प्रस्तुत गर्न थाल्नुहोस्",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "तपाईंको आगामी कतारमा प्रत्येक गीतको बगलमा फाल्ने आइकन थप्नुहोस् ताकि सजिलो व्यवस्थापन गर्न सकौं",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "एल्बम र प्लेलिस्ट दृश्यमा गीतहरूको छेउमा ट्र्यास आइकनहरू थप्नुहोस् त्वरित फिल्टर गर्नका लागि",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "तपाईंको अन्तिम प्लेलिस्टलाई पुनः सुरु गरेर स्पटिफाइ प्लेब्याकको समस्याबाट स्वतः बरामद गर्नुहोस्",
    SETTINGS_SKIP_TRASHED_TRACKS: "ट्रास गरिएका ट्र्याकहरू छोड्नुहोस्",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "मेटिएका गीतहरूलाई स्वचालित रूपमा छोडेर प्लेब्याकको समयमा अर्को अनुमति प्राप्त ट्र्याक खोज्नुहोस्",
    SETTINGS_AUTO_CLEAN_QUEUE: "स्वतः सफा प्रतीक्षा लाइन",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "तपाईंको स्मार्ट शफल कतारबाट ट्र्यास गरिएका गीतहरू स्वत: हटाउनुहोस्",
    SETTINGS_REMOTE_CONTROL: "रिमोट कन्ट्रोल",
    SETTINGS_REMOTE_TOGGLE: "दूरस्थ टगल सक्षम पार्नुहोस्",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "मोबाइलबाट प्ले/पज दोहोरो ट्याप गरेर रिमोट स्किपिङ सुरू वा बन्द गर्नुहोस्। ट्र्याक स्किपले टगललाई पुष्टि गर्दछ।",
    SETTINGS_REMOTE_SKIPPING: "दूरस्थ छोड्न सक्रिय",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "सक्षम गर्दा, अर्को उपकरण (जस्तै, मोबाइल) बाट स्पटिफाइ नियन्त्रण गर्दा पनि ट्र्यास-छोड्ने काम गर्दछ",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "दूरस्थ छोड्ने सक्षम गरियो",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "दूरस्थ छोड्नु अक्षम गरियो",
    MESSAGE_SONG_ADDED_REMOTE: "गीत रिमोटबाट नष्ट गरियो",
    SETTINGS_TRASH_VIA_LIKE: "लाइक मार्फत कचरा",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "मोबाइलबाट ट्र्यासमा पठाउन कुनै गीत जस्तै। स्वचालित रूपमा अनलाइक गर्नुहोस् र अर्को ट्र्याकमा सार्नुहोस्।",
    SETTINGS_AI_DETECTION: "कृत्रिम बुद्धिमत्ता पत्ता लगाउने",
    SETTINGS_AI_DETECTION_ENABLED: "कृत्रिम बुद्धिमत्ता गीत पत्ता लगाउने",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "प्रथम पटक सक्षम गर्दा ~५०MB मोडेल डाउनलोड गर्नुहोस्। SONICS मोडेल प्रयोग गरेर एआई-उत्पादित गीतहरूको पत्ता लगाउनुहोस् र सम्भावना सूचक देखाउनुहोस्।",
    AI_ASSETS_DOWNLOADING: "AI मोडेल डाउनलोड गर्दै...",
    AI_ASSETS_READY: "AI मोडेल तयार छ",
    AI_ASSETS_NOT_READY: "एआई मोडेल उपलब्ध छैन",
    SETTINGS_TRASH_AI_SONGS: "ट्र्यास एआई गीतहरू",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "स्वचालित रूपमा एआई ले उत्पादित (सम्भावना ≥ 80%) को रूपमा पत्ता लगाइएका गीतहरू हटाउनुहोस्",
    DESCRIPTION_CLEAR_AI_STORAGE: "सबै भण्डार गरिएका AI वर्गीकरण परिणामहरू हटाउनुहोस् ({{count}} गीत भण्डार गरिएको)।",
    ACTION_CLEAR_AI_STORAGE: "स्पष्ट",
    MESSAGE_AI_STORAGE_CLEARED: "कृत्रिम बुद्धिमत्ताको परिणाम खाली भयो",
    AI_TIER_LIKELY_HUMAN: "सम्भावित मानव",
    AI_TIER_PROBABLY_HUMAN: "सम्भवतः मानव",
    AI_TIER_UNCERTAIN: "अनिश्चित",
    AI_TIER_PROBABLY_AI: "सम्भवतः एआई",
    AI_TIER_LIKELY_AI: "सम्भावित एआई",
    ACTION_REMOVE_TRASHED: "मेटिएका गीतहरू हटाउनुहोस्",
    CONFIRM_REMOVE_TRASHED: "के तपाईं यो प्लेलिस्टबाट {{count}} मेटिएका गीत(हरू) हटाउन चाहनुहुन्छ? यो पुनः प्राप्त गर्न सकिँदैन।",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "प्लेलिस्टबाट {{count}} मेटिएका गीत(हरू) हटाइयो",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "यस प्लेलिस्टमा हटाइएका गीतहरू फेला परेनन्"
  };
});

// src/i18n/nl.json
var require_nl = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Prullenbak+",
    ACTION_THROW: "Plaatsen in prullenbak",
    ACTION_UNTHROW: "Verwijderen uit prullenbak",
    ACTION_CLEAR: "Duidelijk",
    ACTION_COPY: "Kopieer",
    ACTION_EXPORT: "Exporteren",
    ACTION_IMPORT: "Importeren",
    MESSAGE_COPIED: "Gekopieerd naar klembord",
    MESSAGE_CLEARED: "Prullenbak succesvol geleegd!",
    MESSAGE_SONG_ADDED: "Nummer toegevoegd aan prullenbak",
    MESSAGE_SONG_REMOVED: "Nummer verwijderd uit prullenbak",
    MESSAGE_ARTIST_ADDED: "Artiest toegevoegd aan prullenbak",
    MESSAGE_ARTIST_REMOVED: "Artiest verwijderd uit prullenbak",
    BACKUP_SAVE_SUCCESS: "Back-up succesvol opgeslagen.",
    BACKUP_SAVE_FAILED: "Kon back-up niet opslaan, probeer de inhoud van de prullenbak naar het klembord te kopiëren en handmatig een back-up te maken.",
    BACKUP_RESTORE_SUCCESS: "Back-up succesvol hersteld.",
    BACKUP_FILE_READ_FAILED: "Kan het bestand niet lezen, zorg ervoor dat het een geldig JSON-bestand is.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-prullenbak.json",
    SETTINGS_TITLE: "Trashbin+ Instellingen",
    SETTINGS_OPTIONS: "Opties",
    SETTINGS_FEATURES: "Kenmerken",
    SETTINGS_STORAGE: "Opslag",
    SETTINGS_ENABLED: "Ingeschakeld",
    SETTINGS_SHOW_WIDGET: "Toon widgetpictogram",
    SETTINGS_AUTOPLAY: "Automatisch afspelen bij start",
    SETTINGS_QUEUE_TRASHBIN: "Schakel wachtrijprullenbak in",
    SETTINGS_TRACKLIST_TRASHBIN: "Schakel Tracklist Prullenbak in",
    SETTINGS_PLAYLIST_MONITOR: "Afspeellijstmonitor",
    ITEMS_TITLE: "Prullenbak+ items",
    ITEMS_EMPTY_SONGS: "<strong>Geen verwijderde nummers!</strong><br/>Nummers die je in de prullenbak plaatst, verschijnen hier.",
    ITEMS_EMPTY_ARTISTS: "<strong>Geen artiesten in de prullenbak!</strong><br/>Artiesten die u in de prullenbak plaatst, verschijnen hier.",
    ITEMS_TAB_SONGS: "Liedjes",
    ITEMS_TAB_ARTISTS: "Artiesten",
    ITEMS_LOADED_COUNT: "{{loaded}} van de {{total}} {{type}} geladen",
    ITEMS_SEARCH_PLACEHOLDER: "Zoeken op naam, artiest of URI...",
    DESCRIPTION_COPY: "Kopieer alle items in de prullenbak naar het klembord.",
    DESCRIPTION_EXPORT: "Sla alle items in de prullenbak op in een .json-bestand.",
    DESCRIPTION_IMPORT: "Alle items in de prullenbak overschrijven via .json-bestand.",
    DESCRIPTION_CLEAR: "Verwijder alle items uit de prullenbak (kan niet ongedaan worden gemaakt).",
    ITEMS_EMPTY_SONGS_TITLE: "Geen verwijderde nummers!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Geen verwijderde artiesten!",
    DESCRIPTION_SETTINGS_ENABLED: "Hoofdschakelaar om alle prullenbak+-functionaliteit in of uit te schakelen",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Toon een prullenbakpictogram in de afspeelbalk naast het momenteel afgespeelde nummer voor snelle toegang",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Automatisch muziek afspelen wanneer Spotify opent of de extensie wordt geladen",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Voeg prullenbakpictogrammen toe naast elk nummer in je aankomende wachtrij voor eenvoudig beheer",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Voeg prullenbakpictogrammen toe naast nummers in album- en afspeellijstweergaven voor snel filteren",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Herstel automatisch van Spotify-afspeelfouten door je laatste afspeellijst te hervatten",
    SETTINGS_SKIP_TRASHED_TRACKS: "Sla verwijderde nummers over",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Sla automatisch verwijderde nummers over en zoek tijdens het afspelen het volgende toegestane nummer",
    SETTINGS_AUTO_CLEAN_QUEUE: "Auto Schoonmaakwachtrij",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Verwijder automatisch verwijderde nummers uit je Smart Shuffle-wachtrij",
    SETTINGS_REMOTE_CONTROL: "Afstandsbediening",
    SETTINGS_REMOTE_TOGGLE: "Schakel externe schakelaar in",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Dubbel tik op afspelen/pauze vanaf de mobiele telefoon om overgaan op afstand in of uit te schakelen. Het overslaan van een nummer bevestigt de schakeling.",
    SETTINGS_REMOTE_SKIPPING: "Op afstand overslaan actief",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Wanneer ingeschakeld, werkt het overslaan van prullenbak zelfs wanneer Spotify wordt bediend vanaf een ander apparaat (bijvoorbeeld mobiel)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Afgelegen overslaan ingeschakeld",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Extern overslaan uitgeschakeld",
    MESSAGE_SONG_ADDED_REMOTE: "Nummer vernietigd via afstandsbediening",
    SETTINGS_TRASH_VIA_LIKE: "Afval via Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Net als een nummer van mobiel naar prullenbak. Verwijdert automatisch de like en springt naar het volgende nummer.",
    SETTINGS_AI_DETECTION: "AI-detectie",
    SETTINGS_AI_DETECTION_ENABLED: "AI-nummerdetectie",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Detecteer met het SONICS-model of nummers door AI zijn gegenereerd en toon een kansindicator. Downloadt een ~50 MB groot model bij eerste inschakeling.",
    AI_ASSETS_DOWNLOADING: "AI-model downloaden...",
    AI_ASSETS_READY: "AI-model gereed",
    AI_ASSETS_NOT_READY: "AI-model niet beschikbaar",
    SETTINGS_TRASH_AI_SONGS: "Trash AI-nummers",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Verwijder automatisch nummers die worden herkend als AI-gegenereerd (kans ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Wis alle opgeslagen AI-classificatieresultaten ({{count}} nummers opgeslagen).",
    ACTION_CLEAR_AI_STORAGE: "Duidelijk",
    MESSAGE_AI_STORAGE_CLEARED: "AI-resultaten gewist",
    AI_TIER_LIKELY_HUMAN: "Waarschijnlijk menselijk",
    AI_TIER_PROBABLY_HUMAN: "Waarschijnlijk menselijk",
    AI_TIER_UNCERTAIN: "Onzeker",
    AI_TIER_PROBABLY_AI: "Waarschijnlijk AI",
    AI_TIER_LIKELY_AI: "Waarschijnlijke AI",
    ACTION_REMOVE_TRASHED: "Verwijder verwijderde nummers",
    CONFIRM_REMOVE_TRASHED: "{{count}} verwijderde nummer(s) uit deze afspeellijst verwijderen? Dit kan niet ongedaan worden gemaakt.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "{{count}} verwijderd(e) nummer(s) uit afspeellijst verwijderd",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Geen verwijderde nummers gevonden in deze afspeellijst"
  };
});

// src/i18n/or.json
var require_or = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "ଟ୍ରାସ୍ବିନ୍+",
    ACTION_THROW: "ଟ୍ରାସ୍ ବିନରେ ରଖନ୍ତୁ",
    ACTION_UNTHROW: "ଟ୍ରାସ୍ବିନରୁ ଅପସାରଣ କରନ୍ତୁ",
    ACTION_CLEAR: "ସ୍ପଷ୍ଟ",
    ACTION_COPY: "କପି",
    ACTION_EXPORT: "ରପ୍ତାନି",
    ACTION_IMPORT: "ଆମଦାନୀ କରନ୍ତୁ",
    MESSAGE_COPIED: "କ୍ଲିପବୋର୍ଡକୁ କପି କରାଯାଇଛି",
    MESSAGE_CLEARED: "ଟ୍ରାସ୍ ବିନ୍ ସଫଳତାର ସହ ଖାଲି ହୋଇଗଲା!",
    MESSAGE_SONG_ADDED: "ଗୀତଟି କଚରାଦାନରେ ଯୋଗ କରାଯାଇଛି",
    MESSAGE_SONG_REMOVED: "ଟ୍ରାସ୍ବିନରୁ ଗୀତ ଅପସାରଣ କରାଯାଇଛି",
    MESSAGE_ARTIST_ADDED: "କଳାକାରଙ୍କୁ କଚରା ଡବାରେ ଯୋଗ କରାଯାଇଛି",
    MESSAGE_ARTIST_REMOVED: "କଳାକାରଙ୍କୁ କଚଡା ଝୁଡାରୁ ଅପସାରଣ କରାଯାଇଛି",
    BACKUP_SAVE_SUCCESS: "ସଫଳତାର ସହ ବ୍ୟାକଅପ୍ ସଂରକ୍ଷିତ ହୋଇଛି।",
    BACKUP_SAVE_FAILED: "ବ୍ୟାକଅପ୍ ସେଭ୍ କରିବାରେ ବିଫଳ ହୋଇଛି, ଟ୍ରାସ୍ ବିନ୍ ର ବିଷୟବସ୍ତୁକୁ କ୍ଲିପବୋର୍ଡକୁ କପି କରିବା ଏବଂ ଏକ ବ୍ୟାକଅପ୍ ମ୍ୟାନୁଆଲ୍ ଭାବରେ ତିଆରି କରିବାକୁ ଚେଷ୍ଟା କରନ୍ତୁ।",
    BACKUP_RESTORE_SUCCESS: "ସଫଳତାର ସହ ବ୍ୟାକଅପ ପୁନର୍ସ୍ଥାପନ କରାଯାଇଛି।",
    BACKUP_FILE_READ_FAILED: "ଫାଇଲ୍ ପଢ଼ିବାରେ ବିଫଳ ହୋଇଛି, ଦୟାକରି ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ଏହା ଏକ ବୈଧ JSON ଫାଇଲ୍।",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "ଟ୍ରାସ୍ବିନ୍+ ସେଟିଂସ୍",
    SETTINGS_OPTIONS: "ବିକଳ୍ପଗୁଡ଼ିକ",
    SETTINGS_FEATURES: "ବୈଶିଷ୍ଟ୍ୟଗୁଡ଼ିକ",
    SETTINGS_STORAGE: "ଭଣ୍ଡାର କରିବା",
    SETTINGS_ENABLED: "ସକ୍ଷମ କରାଯାଇଛି",
    SETTINGS_SHOW_WIDGET: "ଉଇଜ୍‌ଜେଟ୍ ଆଇକନ ଦର୍ଶାନ୍ତୁ",
    SETTINGS_AUTOPLAY: "ଆରମ୍ଭରେ ସ୍ୱତଃ ଚଳାଅ",
    SETTINGS_QUEUE_TRASHBIN: "ସ୍ଥଗିତ ରଖିବା ପାଇଁ କଚରା ଡବା ସକ୍ରିୟ କରନ୍ତୁ",
    SETTINGS_TRACKLIST_TRASHBIN: "ଟ୍ରାକ୍ଲିଷ୍ଟ କଚରାଦାନି ସକ୍ଷମ କରନ୍ତୁ",
    SETTINGS_PLAYLIST_MONITOR: "ପ୍ଲେଲିଷ୍ଟ ମନିଟର୍",
    ITEMS_TITLE: "ଟ୍ରାସ୍ବିନ୍+ ଆଇଟମ୍‌ଗୁଡ଼ିକ",
    ITEMS_EMPTY_SONGS: "<strong>କ no କ no ଗୀତ ନାହିଁ!</strong><br/>ଯେଉଁ ଗୀତଗୁଡ଼ିକୁ ଆପଣ କଚରାଦାନରେ ଯୋଗ କରିବେ ସେଗୁଡ଼ିକ ଏଠାରେ ଦେଖାଯିବ।",
    ITEMS_EMPTY_ARTISTS: "<strong>କୌଣସି କଳାକାର ଫୋପାଡ଼ିବା ନାହିଁ!</strong><br/>ଯେଉଁ କଳାକାରମାନଙ୍କୁ ଆପଣ କଚରା ଡବାରେ ଯୋଗ କରିବେ, ସେମାନେ ଏଠାରେ ଦେଖାଯିବେ।",
    ITEMS_TAB_SONGS: "ଗୀତମାନେ",
    ITEMS_TAB_ARTISTS: "କଳାକାରମାନେ",
    ITEMS_LOADED_COUNT: "{{total}} ମଧ୍ୟରୁ {{loaded}} {{type}} ଲୋଡ୍ ହୋଇଛି",
    ITEMS_SEARCH_PLACEHOLDER: "ନାମ, କଳାକାର କିମ୍ବା URI ଦ୍ୱାରା ଖୋଜନ୍ତୁ...",
    DESCRIPTION_COPY: "ଅପସାରଣ ପଟ୍ଟିକାରେ ଥିବା ସମସ୍ତ ଆଇଟମକୁ କ୍ଲିପବୋର୍ଡକୁ କପି କରନ୍ତୁ।",
    DESCRIPTION_EXPORT: "ଟ୍ରାସ୍ବିନରେ ଥିବା ସମସ୍ତ ଆଇଟମକୁ ଏକ .json ଫାଇଲରେ ସେଭ୍ କରନ୍ତୁ।",
    DESCRIPTION_IMPORT: "ଟ୍ରାସ୍ ବିନରେ ଥିବା ସମସ୍ତ ଆଇଟମକୁ .json ଫାଇଲ୍ ମାଧ୍ୟମରେ ଅଧିଲେଖନ କରନ୍ତୁ।",
    DESCRIPTION_CLEAR: "ଅପସାରଣ ବାକ୍ସରୁ ସମସ୍ତ ଆଇଟମକୁ ପରିଷ୍କାର କରନ୍ତୁ (ପୁନର୍ସ୍ଥାପନ କରାଯାଇପାରିବ ନାହିଁ)।",
    ITEMS_EMPTY_SONGS_TITLE: "କୌଣସି ନଷ୍ଟ ଗୀତ ନାହିଁ!",
    ITEMS_EMPTY_ARTISTS_TITLE: "କୌଣସି ନିର୍ଯ୍ୟାତନା କଳାକାର ନାହିଁ!",
    DESCRIPTION_SETTINGS_ENABLED: "ସମସ୍ତ ଟ୍ରାସ୍ବିନ୍ + କାର୍ଯ୍ୟକାରିତାକୁ ସକ୍ରିୟ କରିବା କିମ୍ବା ନିଷ୍କ୍ରିୟ କରିବା ପାଇଁ ମାଷ୍ଟର ଟଗଲ୍",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "ବର୍ତ୍ତମାନ ଚାଲିଥିବା ଟ୍ରାକ୍ ପାଖାପାଖି ପ୍ଲେବ୍ୟାକ୍ ବାରରେ ଏକ କଚରା ଆଇକନ୍ ପ୍ରଦର୍ଶନ କରନ୍ତୁ ଯାହା ଦ୍ରୁତ ପହଞ୍ଚ ପାଇଁ ଅଟେ",
    DESCRIPTION_SETTINGS_AUTOPLAY: "ସ୍ପଟିଫାଏ ଖୋଲିବା କିମ୍ବା ଏକ୍ସଟେନ୍ସନ୍ ଲୋଡ୍ ହେବା ସହିତ ସ୍ୱତଃ ସଙ୍ଗୀତ ଚଳାଇବା ଆରମ୍ଭ କରନ୍ତୁ",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "ନିମ୍ନସ୍ଥ ପାଇଁ ଆପଣଙ୍କ ପରବର୍ତ୍ତୀ ପାଇଁ ପ୍ରତ୍ୟେକ ଗୀତ ପାଖରେ କଚଡା ଆଇକନ ଯୋଗ କରନ୍ତୁ ସହଜ ପରିଚାଳନା ପାଇଁ",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "ଆଲବମ୍ ଏବଂ ପ୍ଲେଲିଷ୍ଟ ଦୃଶ୍ୟଗୁଡ଼ିକରେ ଗୀତ ପାଖରେ କଚରା ଆଇକନ ଯୋଗ କରନ୍ତୁ ଯାହା ଦ୍ରୁତ ଫିଲ୍ଟରିଂ ପାଇଁ ସାହାଯ୍ୟ କରିବ।",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "ଶେଷ ପ୍ଲେଲିଷ୍ଟକୁ ପୁନଃପ୍ରାରମ୍ଭ କରି ସ୍ପଟିଫାଏର ପ୍ଲେବ୍ୟାକ୍ ତ୍ରୁଟିରୁ ସ୍ୱତଃ ପୁନରୁଦ୍ଧାର କରନ୍ତୁ",
    SETTINGS_SKIP_TRASHED_TRACKS: "ଟ୍ରାଷ୍ ହୋଇଥିବା ଟ୍ରାକ୍‌ଗୁଡ଼ିକୁ ଛାଡ଼ନ୍ତୁ",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "ସ୍ୱତଃ ଫୋପାଡ଼ି ଦିଆଯାଇଥିବା ଗୀତଗୁଡ଼ିକୁ ଛାଡ଼ି ପାରିବା ଏବଂ ପ୍ଲେବ୍ୟାକ୍ ଚାଲିଥିବା ସମୟରେ ପରବର୍ତ୍ତୀ ଅନୁମତିପ୍ରାପ୍ତ ଟ୍ରାକ୍ ଖୋଜନ୍ତୁ",
    SETTINGS_AUTO_CLEAN_QUEUE: "ସ୍ୱଚାଳିତ ସଫା ପ୍ରତୀକ୍ଷାରେ ଥିବା ତାଲିକା",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "ସ୍ୱଚାଳିତ ଭାବରେ ଆପଣଙ୍କ ସ୍ମାର୍ଟ ଶଫଲ୍ ପାଇଁ ଟ୍ରାଶ୍ ହୋଇଥିବା ଗୀତକୁ ଅପସାରଣ କରନ୍ତୁ",
    SETTINGS_REMOTE_CONTROL: "ଦୂରବର୍ତ୍ତୀ ନିୟନ୍ତ୍ରଣ",
    SETTINGS_REMOTE_TOGGLE: "ଦୂରବର୍ତ୍ତୀ ଟଗଲ୍ ସକ୍ଷମ କରନ୍ତୁ",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "ମୋବାଇଲରୁ ରିମୋଟ ସ୍କିପିଂକୁ ଚାଲୁ କରିବା କିମ୍ବା ବନ୍ଦ କରିବା ପାଇଁ ପ୍ଲେ/ପଜ ଉପରେ ଦୁଇଥର ଟ୍ୟାପ କରନ୍ତୁ। ଏକ ଟ୍ରାକ୍ ସ୍କିପ୍ ଟଗଲ୍ ପାଇଁ ନିଶ୍ଚିତ କରେ।",
    SETTINGS_REMOTE_SKIPPING: "ଦୂରବର୍ତ୍ତୀ କ୍ରମଗତ କାର୍ଯ୍ୟକାରୀ",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "ସକ୍ଷମ ହେଲେ, ଅନ୍ୟ ଡିଭାଇସ୍ (ଉଦାହରଣସ୍ୱରୂପ, ମୋବାଇଲ୍) ରୁ Spotify କୁ ନିୟନ୍ତ୍ରଣ କରିବା ସମୟରେ ମଧ୍ୟ ଟ୍ରାସ୍-ସ୍କିପିଂ କାର୍ଯ୍ୟ କରେ।",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "ଦୂରବର୍ତ୍ତୀ ଛାଡ଼ିବା ସକ୍ଷମ ହୋଇଛି",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "ଦୂରବର୍ତ୍ତୀ ଅତିକ୍ରମଣ ଅକ୍ଷମ କରାଯାଇଛି",
    MESSAGE_SONG_ADDED_REMOTE: "ଦୂରବୀନ ମାଧ୍ୟମରେ ଗୀତ ନଷ୍ଟ ହୋଇଗଲା",
    SETTINGS_TRASH_VIA_LIKE: "ଲାଇକ୍ ମାଧ୍ୟମରେ କଚରା",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "ଏକ ଗୀତ ଭଳି ମୋବାଇଲରୁ ଏହାକୁ ଫୋପାଡ଼ନ୍ତୁ। ସ୍ୱତଃସ୍ଫୁର୍ତ୍ତ ଭାବରେ ଅଣଲାଇକ୍ କରି ପରବର୍ତ୍ତୀ ଟ୍ରାକ୍ କୁ ଯାଏ।",
    SETTINGS_AI_DETECTION: "AI ଚିହ୍ନଟ କରିବା",
    SETTINGS_AI_DETECTION_ENABLED: "AI ଗୀତ ଚିହ୍ନଟ କରିବା",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "SONICS ମଡେଲ ବ୍ୟବହାର କରି AI-ଉତ୍ପାଦିତ ଗୀତକୁ ଚିହ୍ନଟ କରନ୍ତୁ ଏବଂ ଏକ ସମ୍ଭାବ୍ୟତା ସୂଚକ ଦେଖାନ୍ତୁ। ପ୍ରଥମ ଥର ସକ୍ରିୟ କରିବା ସମୟରେ ~50MB ମଡେଲ ଡାଉନଲୋଡ କରନ୍ତୁ।",
    AI_ASSETS_DOWNLOADING: "AI ମଡେଲ ଡାଉନଲୋଡ୍ ହେଉଛି...",
    AI_ASSETS_READY: "AI ମଡେଲ୍ ପ୍ରସ୍ତୁତ ଅଛି",
    AI_ASSETS_NOT_READY: "ଏଆଇ ମଡେଲ୍ ଉପଲବ୍ଧ ନାହିଁ",
    SETTINGS_TRASH_AI_SONGS: "ଅପଚୟ କୃତ୍ରିମ ବୁଦ୍ଧିମତା ଗୀତମାନଙ୍କ",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "ସ୍ୱତଃ ଭାବରେ AI ଦ୍ୱାରା ଉତ୍ପାଦିତ ଭାବରେ ଚିହ୍ନଟ କରାଯାଇଥିବା ଗୀତଗୁଡ଼ିକୁ ଟ୍ରାସ୍ କରନ୍ତୁ (ସମ୍ଭାବ୍ୟତା ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "ସମସ୍ତ ସଂରକ୍ଷିତ AI ବର୍ଗୀକରଣ ଫଳାଫଳ ପରିଷ୍କାର କରନ୍ତୁ ({{count}} ଗୀତ ସଂରକ୍ଷିତ ଅଛି)।",
    ACTION_CLEAR_AI_STORAGE: "ସ୍ପଷ୍ଟ",
    MESSAGE_AI_STORAGE_CLEARED: "AI ଫଳାଫଳ ସଫା ହୋଇଛି",
    AI_TIER_LIKELY_HUMAN: "ସମ୍ଭାବ୍ୟ ମାନବ",
    AI_TIER_PROBABLY_HUMAN: "ସମ୍ଭବତଃ ମାନବ",
    AI_TIER_UNCERTAIN: "ଅନିଶ୍ଚିତ",
    AI_TIER_PROBABLY_AI: "ସମ୍ଭବତଃ AI",
    AI_TIER_LIKELY_AI: "ସମ୍ଭାବ୍ୟ ଏଆଇ",
    ACTION_REMOVE_TRASHED: "ରିମୁଭ୍ ଟ୍ରାସ୍ଡ୍ ଗୀତମାନେ",
    CONFIRM_REMOVE_TRASHED: "ଏହି ପ୍ଲେଲିଷ୍ଟରୁ {{count}} ଟୋ ଗୀତକୁ ଅପସାରଣ କରିବାକୁ ଚାହୁଁଛନ୍ତି କି? ଏହାକୁ ପୁନର୍ସ୍ଥାପନ କରାଯାଇପାରିବ ନାହିଁ।",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "ପ୍ଲେଲିଷ୍ଟରୁ {{count}} ଟୋପା ଗୀତ କାଢ଼ି ଦିଆଯାଇଛି",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "ଏହି ପ୍ଲେ-ଲିଷ୍ଟରେ କୌଣସି ଗୀତ ଖୋଜାଯାଇ ନାହିଁ"
  };
});

// src/i18n/pa-IN.json
var require_pa_IN = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "ਕਚਰਾ ਬਕਸਾ+",
    ACTION_THROW: "ਕੂੜੇਦਾਨ ਵਿੱਚ ਪਾਓ",
    ACTION_UNTHROW: "ਕੂੜੇਦਾਨ ਤੋਂ ਹਟਾਓ",
    ACTION_CLEAR: "ਸਪਸ਼ਟ",
    ACTION_COPY: "ਕਾਪੀ",
    ACTION_EXPORT: "ਨਿਰਯਾਤ",
    ACTION_IMPORT: "ਆਯਾਤ",
    MESSAGE_COPIED: "ਕਲਿੱਪਬੋਰਡ 'ਤੇ ਕਾਪੀ ਕੀਤਾ",
    MESSAGE_CLEARED: "ਕੂੜਾ ਦੀ ਟੋਕਰੀ ਸਫਲਤਾਪੂਰਵਕ ਖਾਲੀ ਕੀਤੀ ਗਈ!",
    MESSAGE_SONG_ADDED: "ਗੀਤ ਨੂੰ ਕੂੜੇਦਾਨ ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ",
    MESSAGE_SONG_REMOVED: "ਗੀਤ ਨੂੰ ਕੂੜੇਦਾਨ ਤੋਂ ਹਟਾ ਦਿੱਤਾ ਗਿਆ",
    MESSAGE_ARTIST_ADDED: "ਕਲਾਕਾਰ ਨੂੰ ਕੂੜੇਦਾਨ ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ",
    MESSAGE_ARTIST_REMOVED: "ਕਲਾਕਾਰ ਨੂੰ ਰੱਦੀ ਦੇ ਡੱਬੇ ਤੋਂ ਹਟਾ ਦਿੱਤਾ ਗਿਆ",
    BACKUP_SAVE_SUCCESS: "ਬੈਕਅੱਪ ਸਫਲਤਾਪੂਰਵਕ ਸੰਭਾਲਿਆ ਗਿਆ।",
    BACKUP_SAVE_FAILED: "ਬੈਕਅੱਪ ਸੇਵ ਕਰਨ ਵਿੱਚ ਅਸਫਲ, ਟਰੈਸ਼ਬਿਨ ਦੀ ਸਮੱਗਰੀ ਨੂੰ ਕਲਿੱਪਬੋਰਡ 'ਤੇ ਕਾਪੀ ਕਰਨ ਅਤੇ ਮੈਨੂਅਲ ਤੌਰ 'ਤੇ ਬੈਕਅੱਪ ਬਣਾਉਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
    BACKUP_RESTORE_SUCCESS: "ਬੈਕਅਪ ਸਫਲਤਾਪੂਰਵਕ ਮੁੜ ਪ੍ਰਾਪਤ ਕੀਤਾ ਗਿਆ।",
    BACKUP_FILE_READ_FAILED: "ਫਾਇਲ ਪੜ੍ਹਨ ਵਿੱਚ ਅਸਫਲ, ਕਿਰਪਾ ਕਰਕੇ ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਇਹ ਇੱਕ ਵੈਧ JSON ਫਾਇਲ ਹੈ।",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "ਟਰੈਸ਼ਬਿਨ+ ਸੈਟਿੰਗਸ",
    SETTINGS_OPTIONS: "ਚੋਣਾਂ",
    SETTINGS_FEATURES: "ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
    SETTINGS_STORAGE: "ਸਟੋਰੇਜ਼",
    SETTINGS_ENABLED: "ਸਮਰੱਥ ਕੀਤਾ",
    SETTINGS_SHOW_WIDGET: "ਵਿਜ਼ਟ ਆਈਕਾਨ ਵੇਖਾਓ",
    SETTINGS_AUTOPLAY: "ਸ਼ੁਰੂਆਤ 'ਤੇ ਆਟੋਪਲੇਅ",
    SETTINGS_QUEUE_TRASHBIN: "ਕਤਾਰ ਕੂੜਾ ਕਰਨ ਨੂੰ ਸਮਰੱਥ ਕਰੋ",
    SETTINGS_TRACKLIST_TRASHBIN: "ਟਰੈਕਲਿਸਟ ਟਰੈਸ਼ਬਿਨ ਨੂੰ ਸਮਰੱਥ ਕਰੋ",
    SETTINGS_PLAYLIST_MONITOR: "ਪਲੇਲਿਸਟ ਮਾਨੀਟਰ",
    ITEMS_TITLE: "ਕਚਰਾ ਬੰਦ+ ਆਈਟਮਾਂ",
    ITEMS_EMPTY_SONGS: "<strong>ਕੋਈ ਖਰਾਬ ਗੀਤ ਨਹੀਂ!</strong><br/>ਤੁਸੀਂ ਜੋ ਗੀਤ ਰੱਦੀ ਦੇ ਡੱਬੇ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰਦੇ ਹੋ ਉਹ ਇੱਥੇ ਦਿਖਾਈ ਦੇਣਗੇ।",
    ITEMS_EMPTY_ARTISTS: "<strong>ਕੋਈ ਫੇਕੇ ਹੋਏ ਕਲਾਕਾਰ ਨਹੀਂ!</strong><br/>ਤੁਸੀਂ ਕੂੜੇਦਾਨ ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤੇ ਕਲਾਕਾਰ ਇੱਥੇ ਦਿਖਾਈ ਦੇਣਗੇ।",
    ITEMS_TAB_SONGS: "ਗੀਤ",
    ITEMS_TAB_ARTISTS: "ਕਲਾਕਾਰ",
    ITEMS_LOADED_COUNT: "{{total}} ਵਿੱਚੋਂ {{loaded}} {{type}} ਲੋਡ ਹੋਇਆ",
    ITEMS_SEARCH_PLACEHOLDER: "ਨਾਮ, ਕਲਾਕਾਰ ਜਾਂ URI ਰਾਹੀਂ ਖੋਜੋ...",
    DESCRIPTION_COPY: "ਕੂੜਦਾਨ ਵਿੱਚ ਸਾਰੀਆਂ ਚੀਜ਼ਾਂ ਨੂੰ ਕਲਿੱਪਬੋਰਡ 'ਤੇ ਕਾਪੀ ਕਰੋ।",
    DESCRIPTION_EXPORT: "ਕੂੜੇਦਾਨ ਵਿੱਚ ਸਾਰੀਆਂ ਚੀਜ਼ਾਂ ਨੂੰ .json ਫਾਇਲ ਵਿੱਚ ਸੰਭਾਲੋ।",
    DESCRIPTION_IMPORT: "ਕੂੜੇਦਾਨ ਵਿੱਚ ਸਾਰੀਆਂ ਚੀਜ਼ਾਂ ਨੂੰ .json ਫਾਇਲ ਰਾਹੀਂ ਓਵਰਰਾਈਟ ਕਰੋ।",
    DESCRIPTION_CLEAR: "ਕੂੜੇਦਾਨ ਤੋਂ ਸਾਰੀਆਂ ਚੀਜ਼ਾਂ ਨੂੰ ਹਟਾਓ (ਵਾਪਸ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ)।",
    ITEMS_EMPTY_SONGS_TITLE: "ਕੋਈ ਖਰਾਬ ਗੀਤ ਨਹੀਂ!",
    ITEMS_EMPTY_ARTISTS_TITLE: "ਕੋਈ ਫੇਕੇ ਕਲਾਕਾਰ ਨਹੀਂ!",
    DESCRIPTION_SETTINGS_ENABLED: "ਸਭ ਕੁਝ ਬੰਦ/ਚਾਲੂ ਕਰਨ ਲਈ ਮਾਸਟਰ ਟੌਗਲ ਕਰੋ Trashbin+ ਕਾਰਜਕੁਸ਼ਲਤਾ",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "ਚਲ ਰਹੀ ਟਰੈਕ ਦੇ ਨਾਲ ਪਲਬੈਕ ਬਾਰ ਵਿੱਚ ਤੇਜ਼ ਪਹੁੰਚ ਲਈ ਇੱਕ ਕੂੜਾ ਆਈਕਾਨ ਵੇਖਾਓ",
    DESCRIPTION_SETTINGS_AUTOPLAY: "ਸਪੌਟੀਫਾਈ ਖੁੱਲ੍ਹਣ ਜਾਂ ਐਕਸਟੈਂਸ਼ਨ ਲੋਡ ਹੋਣ 'ਤੇ ਆਟੋਮੈਟਿਕ ਤੌਰ 'ਤੇ ਸੰਗੀਤ ਚਲਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "ਆਪਣੀ ਅਗਲੀ ਕਤਾਰ ਵਿੱਚ ਹਰੇਕ ਗੀਤ ਦੇ ਨਾਲ-ਨਾਲ ਆਸਾਨ ਪਰਬੰਧਨ ਲਈ ਕੂੜਾ ਆਈਕਨ ਸ਼ਾਮਲ ਕਰੋ",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "ਐਲਬਮ ਅਤੇ ਪਲੇਲਿਸਟ ਵਿਊਜ਼ ਵਿੱਚ ਗੀਤਾਂ ਦੇ ਨਾਲ-ਨਾਲ ਕਚਰਾ ਆਈਕਾਨ ਸ਼ਾਮਲ ਕਰੋ ਤਾਂ ਜੋ ਤੁਰੰਤ ਫਿਲਟਰਿੰਗ ਕੀਤੀ ਜਾ ਸਕੇ",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "ਆਪਣੀ ਆਖਰੀ ਪਲੇਲਿਸਟ ਨੂੰ ਦੁਬਾਰਾ ਸ਼ੁਰੂ ਕਰਕੇ ਸਪੌਟੀਫਾਈ ਪਲੇਬੈਕ ਦੀਆਂ ਗਲਤੀਆਂ ਤੋਂ ਆਟੋਮੈਟਿਕ ਤੌਰ 'ਤੇ ਠੀਕ ਹੋ ਜਾਓ",
    SETTINGS_SKIP_TRASHED_TRACKS: "ਖਾਰਾਬ ਟਰੈਕਾਂ ਨੂੰ ਛੱਡੋ",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "ਖ਼ਤਮ ਕੀਤੇ ਗੀਤਾਂ ਨੂੰ ਆਟੋਮੈਟਿਕ ਤੌਰ 'ਤੇ ਛੱਡ ਦਿਓ ਅਤੇ ਚਲ ਰਹੀ ਚਲਾਉਣ ਦੌਰਾਨ ਅਗਲੀ ਆਗਿਆ ਪ੍ਰਾਪਤ ਟਰੈਕ ਲੱਭੋ",
    SETTINGS_AUTO_CLEAN_QUEUE: "ਆਟੋ ਸਾਫ ਕਤਾਰ",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "ਆਪਣੀ ਸਮਾਰਟ ਸ਼ਫਲ ਕਤਾਰ ਵਿੱਚੋਂ ਕੂੜੇਦਾਨ ਵਿੱਚ ਪਏ ਗੀਤਾਂ ਨੂੰ ਆਪਮੇਈ ਤੌਰ 'ਤੇ ਹਟਾਓ",
    SETTINGS_REMOTE_CONTROL: "ਰਿਮੋਟ ਕੰਟਰੋਲ",
    SETTINGS_REMOTE_TOGGLE: "ਰਿਮੋਟ ਟੌਗਲ ਨੂੰ ਸਮਰੱਥ ਕਰੋ",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "ਮੋਬਾਈਲ ਤੋਂ ਰਿਮੋਟ ਸਕਿੱਪਿੰਗ ਨੂੰ ਚਾਲੂ/ਬੰਦ ਕਰਨ ਲਈ ਦੋ ਵਾਰ ਟੈਪ ਕਰੋ। ਇੱਕ ਟਰੈਕ ਸਕਿੱਪ ਟੌਗਲ ਨੂੰ ਪੁਸ਼ਟੀ ਕਰਦਾ ਹੈ।",
    SETTINGS_REMOTE_SKIPPING: "ਰਿਮੋਟ ਸਕਿੱਪਿੰਗ ਸਰਗਰਮ",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "ਜਦੋਂ ਚਾਲੂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਕਚਰਾ-ਛਾਲ ਵੀ ਕੰਮ ਕਰਦਾ ਹੈ ਜਦੋਂ ਕਿਸੇ ਹੋਰ ਡਿਵਾਈਸ (ਜਿਵੇਂ ਕਿ ਮੋਬਾਈਲ) ਤੋਂ ਸਪੌਟੀਫਾਈ ਨੂੰ ਨਿਯੰਤਰਿਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "ਦੂਰਦਰਾਜ਼ ਛਾਲ ਸਮਰੱਥ ਕੀਤਾ ਗਿਆ",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "ਰਿਮੋਟ ਸਕਿੱਪਿੰਗ ਅਯੋਗ ਕੀਤੀ ਗਈ",
    MESSAGE_SONG_ADDED_REMOTE: "ਗੀਤ ਰਿਮੋਟ ਰਾਹੀਂ ਖਰਾਬ ਕੀਤਾ ਗਿਆ",
    SETTINGS_TRASH_VIA_LIKE: "ਲਾਈਕ ਰਾਹੀਂ ਕਚਰਾ",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "ਮੋਬਾਈਲ ਤੋਂ ਟਰੈਸ਼ ਕਰਨ ਲਈ ਇੱਕ ਗੀਤ ਵਾਂਗ। ਆਪਣੇ ਆਪ ਅਣਲਾਈਕ ਕਰਦਾ ਹੈ ਅਤੇ ਅਗਲੇ ਟਰੈਕ 'ਤੇ ਛਾਲ ਮਾਰਦਾ ਹੈ।",
    SETTINGS_AI_DETECTION: "ਐਆਈ ਪਤਾ ਲਗਾਉਣਾ",
    SETTINGS_AI_DETECTION_ENABLED: "ਐਆਈ ਗੀਤ ਪਛਾਣ",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "ਐੱਸ.ਓ.ਐੱਨ.ਆਈ.ਸੀ.ਐੱਸ. ਮਾਡਲ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਐ.ਆਈ. ਨਾਲ ਬਣੀਆਂ ਗੀਤਾਂ ਨੂੰ ਪਛਾਣੋ ਅਤੇ ਇੱਕ ਸੰਭਾਵਨਾ ਸੂਚਕ ਦਿਖਾਓ। ਪਹਿਲੀ ਵਾਰ ਚਾਲੂ ਕਰਨ 'ਤੇ ~50MB ਮਾਡਲ ਡਾਊਨਲੋਡ ਕਰਦਾ ਹੈ।",
    AI_ASSETS_DOWNLOADING: "ਐਆਈ ਮਾਡਲ ਡਾਊਨਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    AI_ASSETS_READY: "AI ਮਾਡਲ ਤਿਆਰ ਹੈ",
    AI_ASSETS_NOT_READY: "ਐਆਈ ਮਾਡਲ ਉਪਲਬਧ ਨਹੀਂ ਹੈ",
    SETTINGS_TRASH_AI_SONGS: "ਕਚਰਾ ਏਆਈ ਗੀਤ",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "ਆਟੋਮੈਟਿਕ ਤੌਰ 'ਤੇ ਐ.ਆਈ. ਦੁਆਰਾ ਬਣਾਏ ਗਏ (ਸੰਭਾਵਨਾ ≥ 80%) ਗੀਤਾਂ ਨੂੰ ਟਰੈਸ਼ ਕਰੋ",
    DESCRIPTION_CLEAR_AI_STORAGE: "ਸਟੋਰ ਕੀਤੇ ਗਏ ਸਾਰੇ AI ਵਰਗੀਕਰਨ ਨਤੀਜੇ ਹਟਾਓ ({{count}} ਗੀਤ ਸਟੋਰ ਕੀਤੇ ਗਏ ਹਨ)।",
    ACTION_CLEAR_AI_STORAGE: "ਸਪਸ਼ਟ",
    MESSAGE_AI_STORAGE_CLEARED: "ਐਆਈ ਨਤੀਜੇ ਸਾਫ਼ ਕੀਤੇ ਗਏ",
    AI_TIER_LIKELY_HUMAN: "ਸੰਭਾਵਿਤ ਮਨੁੱਖ",
    AI_TIER_PROBABLY_HUMAN: "ਸ਼ਾਇਦ ਮਨੁੱਖ",
    AI_TIER_UNCERTAIN: "ਅਨਿਸ਼ਚਿਤ",
    AI_TIER_PROBABLY_AI: "ਸ਼ਾਇਦ ਐਆਈ",
    AI_TIER_LIKELY_AI: "ਸੰਭਾਵਿਤ ਐਆਈ",
    ACTION_REMOVE_TRASHED: "ਹਟਾਓ ਕੂੜੇਦਾਨ ਵਿੱਚ ਪਏ ਗੀਤ",
    CONFIRM_REMOVE_TRASHED: "ਕੀ ਤੁਸੀਂ ਇਸ ਪਲੇਲਿਸਟ ਵਿੱਚੋਂ {{count}} ਖਰਾਬ ਕੀਤੇ ਗਏ ਗੀਤ ਹਟਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ? ਇਸ ਨੂੰ ਵਾਪਸ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ।",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "ਪਲੇਲਿਸਟ ਤੋਂ {{count}} ਖਾਰਜ ਕੀਤਾ ਗੀਤ ਹਟਾਏ ਗਏ",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "ਇਸ ਪਲੇਲਿਸਟ ਵਿੱਚ ਕੋਈ ਖਰਾਬ ਗੀਤ ਨਹੀਂ ਮਿਲਿਆ"
  };
});

// src/i18n/pa-PK.json
var require_pa_PK = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "ਕੂੜਾਦਾਨ+",
    ACTION_THROW: "کوڑا دان وچ رکھو",
    ACTION_UNTHROW: "کوڑا دان توں ہٹاؤ",
    ACTION_CLEAR: "صاف",
    ACTION_COPY: "نقل کرو",
    ACTION_EXPORT: "برآمد کرو",
    ACTION_IMPORT: "درآمد کرو",
    MESSAGE_COPIED: "کاپی کیتی بورڈ تے",
    MESSAGE_CLEARED: "کوڑا دا ڈبہ کامیابی نال صاف کیتا گیا!",
    MESSAGE_SONG_ADDED: "گانا کوڑے دے ڈبے وچ شامل کیتا گیا",
    MESSAGE_SONG_REMOVED: "گانا کوڑے دے ڈبے توں ہٹا دتا گیا",
    MESSAGE_ARTIST_ADDED: "آرٹسٹ نوں کوڑا دان وچ شامل کیتا گیا",
    MESSAGE_ARTIST_REMOVED: "آرٹسٹ کو کوڑے دے ڈبے توں ہٹا دتا گیا",
    BACKUP_SAVE_SUCCESS: "بیک اپ کامیابی نال محفوظ ہو گیا۔",
    BACKUP_SAVE_FAILED: "بیک اپ محفوظ کرنے وچ ناکامی، کوڑا دان دے مواد نوں کلپ بورڈ تے کاپی کرن دی کوشش کرو تے خود بخود بیک اپ بناؤ۔",
    BACKUP_RESTORE_SUCCESS: "بیک اپ کامیابی نال بحال کیتا گیا۔",
    BACKUP_FILE_READ_FAILED: "فائل پڑھن چ فیل, کوئی یقینی بنائیں کہ ای جیسن فائل اے۔",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "ترشبن + سیٹنگز",
    SETTINGS_OPTIONS: "آپشنز",
    SETTINGS_FEATURES: "خوبیاں",
    SETTINGS_STORAGE: "سٹوریج",
    SETTINGS_ENABLED: "چالو",
    SETTINGS_SHOW_WIDGET: "ویجیٹ آئیکن دکھاویں",
    SETTINGS_AUTOPLAY: "شروع وچ خودکار چلانا",
    SETTINGS_QUEUE_TRASHBIN: "کueue ٹریش بین چالو کرو",
    SETTINGS_TRACKLIST_TRASHBIN: "ٹریک لسٹ دا کوڑا دا ڈبہ چالو کرو",
    SETTINGS_PLAYLIST_MONITOR: "پلی لسٹ مانیٹر",
    ITEMS_TITLE: "کوڑا دان + اشیاء",
    ITEMS_EMPTY_SONGS: "<Strong>کوئی کوڑا گھٹ نہیں!</Strong><br/> جو گاناں تساں کوڑے دے ڈبے وچ ڈالدے ہو، ایتھے دسدے نیں۔",
    ITEMS_EMPTY_ARTISTS: "<strong>کوئی تباہ شدہ آرٹسٹ نہیں!</strong><br/>آرٹسٹ جنہاں نوں تُسیں کوڑا دان وچ شامل کرو گے ایتھے دکھائی دیں گے۔",
    ITEMS_TAB_SONGS: "گیت",
    ITEMS_TAB_ARTISTS: "آرٹسٹس",
    ITEMS_LOADED_COUNT: "{{total}} وچوں {{loaded}} {{type}} لوڈ ہو گیا",
    ITEMS_SEARCH_PLACEHOLDER: "نام، آرٹسٹ، یا یو آر آئی توں تلاش کرو...",
    DESCRIPTION_COPY: "کوڑے دے ڈبے وچ ساریاں چیزاں نوں کلپ بورڈ تے کاپی کرو۔",
    DESCRIPTION_EXPORT: "کوڑا دان وچ تمام اشیاء نوں اک .json فائل وچ سیو کرو۔",
    DESCRIPTION_IMPORT: "کوڑے دے ڈبے وچ ساریاں چیزاں نوں .json فائل راہیں تبدیل کرو۔",
    DESCRIPTION_CLEAR: "کوڑا دان توں تمام شےیں نوں صاف کرو (واپس نہیں کیتا جا سکدا)۔",
    ITEMS_EMPTY_SONGS_TITLE: "کوئی کچرا والا گانا نہیں!",
    ITEMS_EMPTY_ARTISTS_TITLE: "ਕੋਈ ਖਰਾਬ ਕਲਾਕਾਰ ਨਹੀਂ!",
    DESCRIPTION_SETTINGS_ENABLED: "تمام ٹریش بین + کاروائیاں چالو یا بند کرن دا ماسٹر ٹوگل",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "موجودہ چل رہی ٹریک دے نال نال چلان والی بار وچ تیزی توں رسائی لئی اک کوڑا دا آئیکن دکھائیں",
    DESCRIPTION_SETTINGS_AUTOPLAY: "جدوں سپاٹیفائی کھلدا اے جاں ایکਸٹینشن لوڈ ہندا اے تاں خودکار طور تے میوزک چلاوݨا شروع کروؤ",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "اپݨی آؤندی قطار وچ ہر گانے دے نال کوڑا دا آئیکن شامل کرو تاکہ آسانی نال انتظام کیتا جا سکے",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "البم اتے پلی لسٹ ویوراں وچ گانویں دے نال کوڑا دے آئیکن شامل کرو تاکہ تیزی نال فلٹرنگ کیتی جا سکے",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "سپاٹیفائی پلی بیک دیاں خرابیاں توں آٹومیٹک طور تے بازیافت کرو، اپنی آخری پلی لسٹ نوں دوبارہ شروع کرکے",
    SETTINGS_SKIP_TRASHED_TRACKS: "تباہ شدہ ٹریکاں نوں چھڈو",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "خودکار طور تے کوڑے دے گیت چھڈ کے اگلا منظور شدہ ٹریک چلاؤ",
    SETTINGS_AUTO_CLEAN_QUEUE: "آٹو صفائی دا نمبر ترتیب",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "سمارٹ شفل کی قطار توں کوڑے دے گیت آٹو میٹک طریقے نال ہٹا دیؤ",
    SETTINGS_REMOTE_CONTROL: "دور دراز کنٹرول",
    SETTINGS_REMOTE_TOGGLE: "دور دراز ٹوگل نوں چالو کرو",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "موبائل توں پلے/روکن دی دو وار ٹوچ کروؤ تاں ریموٹ اُتے اگلی ٹریک تبدیل کرنا آن/آف ہو جاوے گا۔ اگلی ٹریک تبدیل کرنا اس گل دی تصدیق کردا اے۔",
    SETTINGS_REMOTE_SKIPPING: "دور درمیانہ چھلانگ چالو",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "جب چالو ہووے تاں کوڑا کرکٹ چھڈݨ دا کم کسے ہور ڈیوائس توں سپاٹیفائی نوں کنٹرول کردے ہوئے وی کم کردا ہے (مثلاً، موبائل)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "دور دراز تون چھلانگ دی اجازت دتی گئی",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "دور درازی چھڈݨ غیر فعال کیتی گئی ہے",
    MESSAGE_SONG_ADDED_REMOTE: "گانا دور درشن توں خراب کر دتا گیا",
    SETTINGS_TRASH_VIA_LIKE: "لائیک دے ذریعے کوڑا کرکٹ",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "موبائل توں ٹریش تک اک گانا وانگ جیوہ۔ خودکار طور تے ناپسند کر دے اتے اگلا ٹریک چلا دے۔",
    SETTINGS_AI_DETECTION: "AI ڈیٹیکشن",
    SETTINGS_AI_DETECTION_ENABLED: "AI گانا کھوج",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "سونکس ماڈل دی ورتوں کر کے اے آئی توں بنائے گئے گانے ڈھونڈو تے احتمال دا اشارہ دکھاؤ۔ پہلی وار چالو کرن تے تقریبن 50MB دا ماڈل ڈاؤن لوڈ کرو۔",
    AI_ASSETS_DOWNLOADING: "ای آئی ماڈل ڈاؤن لوڈ ہو رہیا اے...",
    AI_ASSETS_READY: "AI ماڈل تیار ہے",
    AI_ASSETS_NOT_READY: "اي آئی ماڈل دستیاب نہیں ہے",
    SETTINGS_TRASH_AI_SONGS: "کوڑا اے آئی گانے",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "خودکار طور تے ای آئی توں بنائے گئے گانے نوں ٹریش کرو (احتمال ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "تمام محفوظ شدہ AI ورگیکرن نتیجے صاف کرو ({{count}} گیت محفوظ کیتے گئے)۔",
    ACTION_CLEAR_AI_STORAGE: "صاف",
    MESSAGE_AI_STORAGE_CLEARED: "AI نتیجے کلیئر ہو گئے",
    AI_TIER_LIKELY_HUMAN: "مذکورہ انسان",
    AI_TIER_PROBABLY_HUMAN: "شائد انسان",
    AI_TIER_UNCERTAIN: "ਅਨਿਸ਼ਚਿਤ",
    AI_TIER_PROBABLY_AI: "شائد اے آئی ہووے",
    AI_TIER_LIKELY_AI: "مذکورہ اے آئی",
    ACTION_REMOVE_TRASHED: "مسروفي ہوئی گیت ہٹا دو",
    CONFIRM_REMOVE_TRASHED: "کی اس پلے لسٹ توں {{count}} مٹائے ہوئے گانے ہٹا دتے جاݨ؟ ایہ واپس نہیں کیتا جا سکدا۔",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "پلی لسٹ توں {{count}} کوڑے دا ڈبہ والے گیت ہٹا دتے گئے ہن",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "اس پلے لسٹ وچ کوئی مٹیا ہويا گانا نہیں ملیا"
  };
});

// src/i18n/pl.json
var require_pl = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Kosz+",
    ACTION_THROW: "Umieść w koszu na śmieci",
    ACTION_UNTHROW: "Usuń z kosza na śmieci",
    ACTION_CLEAR: "Wyczyść",
    ACTION_COPY: "Kopiuj",
    ACTION_EXPORT: "Eksport",
    ACTION_IMPORT: "Import",
    MESSAGE_COPIED: "Skopiowano do schowka",
    MESSAGE_CLEARED: "Kosz został pomyślnie opróżniony!",
    MESSAGE_SONG_ADDED: "Piosenka dodana do kosza",
    MESSAGE_SONG_REMOVED: "Piosenka usunięta z kosza",
    MESSAGE_ARTIST_ADDED: "Artysta dodany do kosza",
    MESSAGE_ARTIST_REMOVED: "Artysta usunięty z kosza na śmieci",
    BACKUP_SAVE_SUCCESS: "Kopia zapasowa została pomyślnie zapisana.",
    BACKUP_SAVE_FAILED: "Nie udało się zapisać kopii zapasowej, spróbuj skopiować zawartość kosza do schowka i ręcznie utworzyć kopię zapasową.",
    BACKUP_RESTORE_SUCCESS: "Kopia zapasowa została pomyślnie przywrócona.",
    BACKUP_FILE_READ_FAILED: "Nie udało się odczytać pliku, upewnij się, że jest to poprawny plik JSON.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Ustawienia kosza+",
    SETTINGS_OPTIONS: "Opcje",
    SETTINGS_FEATURES: "Funkcje",
    SETTINGS_STORAGE: "Magazynowanie",
    SETTINGS_ENABLED: "Włączone",
    SETTINGS_SHOW_WIDGET: "Pokaż ikonę widżetu",
    SETTINGS_AUTOPLAY: "Automatyczne odtwarzanie przy uruchamianiu",
    SETTINGS_QUEUE_TRASHBIN: "Włącz kosz kolejki",
    SETTINGS_TRACKLIST_TRASHBIN: "Włącz kosz na listę utworów",
    SETTINGS_PLAYLIST_MONITOR: "Monitor playlist",
    ITEMS_TITLE: "Przedmioty w koszu+",
    ITEMS_EMPTY_SONGS: "<strong>Brak usuniętych utworów!</strong><br/>Utwory, które dodasz do kosza, pojawią się tutaj.",
    ITEMS_EMPTY_ARTISTS: "<strong>Brak artystów w koszu!</strong><br/>Artyści, których dodasz do kosza, pojawią się tutaj.",
    ITEMS_TAB_SONGS: "Piosenki",
    ITEMS_TAB_ARTISTS: "Artyści",
    ITEMS_LOADED_COUNT: "{{loaded}} z {{total}} {{type}} załadowane",
    ITEMS_SEARCH_PLACEHOLDER: "Wyszukaj po nazwie, artyście lub URI...",
    DESCRIPTION_COPY: "Skopiuj wszystkie elementy w koszu do schowka.",
    DESCRIPTION_EXPORT: "Zapisz wszystkie elementy w koszu do pliku .json.",
    DESCRIPTION_IMPORT: "Zastąp wszystkie elementy w koszu plikiem .json.",
    DESCRIPTION_CLEAR: "Wyczyść wszystkie elementy z kosza (nie można cofnąć).",
    ITEMS_EMPTY_SONGS_TITLE: "Brak usuniętych utworów!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Bez wyrzuconych artystów!",
    DESCRIPTION_SETTINGS_ENABLED: "Przełącznik główny umożliwiający włączenie lub wyłączenie całej funkcjonalności kosza+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Wyświetl ikonę kosza na pasku odtwarzania obok aktualnie odtwarzanego utworu w celu szybkiego dostępu",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Automatycznie uruchamiaj odtwarzanie muzyki po otwarciu Spotify lub załadowaniu rozszerzenia",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Dodaj ikony kosza obok każdej piosenki w kolejce odtwarzania, aby ułatwić zarządzanie",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Dodaj ikony kosza obok utworów w widokach albumów i list odtwarzania w celu szybkiego filtrowania",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Automatycznie odzyskuj po wystąpieniu błędów odtwarzania w Spotify, wznawiając ostatnią playlistę",
    SETTINGS_SKIP_TRASHED_TRACKS: "Pomiń usunięte utwory",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Automatycznie pomijaj usunięte utwory i znajdź następny dozwolony utwór podczas odtwarzania",
    SETTINGS_AUTO_CLEAN_QUEUE: "Kolejka automatycznego czyszczenia",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Automatycznie usuwaj usunięte utwory z kolejki inteligentnego odtwarzania w losowej kolejności",
    SETTINGS_REMOTE_CONTROL: "Zdalne sterowanie",
    SETTINGS_REMOTE_TOGGLE: "Włącz zdalne przełączanie",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Dotknij dwukrotnie odtwarzanie/pauza z urządzenia mobilnego, aby włączyć/wyłączyć zdalne pomijanie. Pominięcie utworu potwierdza przełączenie.",
    SETTINGS_REMOTE_SKIPPING: "Zdalne pomijanie aktywne",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Gdy włączone, pomijanie kosza działa nawet podczas sterowania Spotify z innego urządzenia (np. telefonu komórkowego)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Włączono zdalne pomijanie",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Pomijanie zdalne wyłączone",
    MESSAGE_SONG_ADDED_REMOTE: "Piosenka zniszczona zdalnie",
    SETTINGS_TRASH_VIA_LIKE: "Śmieci przez Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Jak utwór z telefonu do kosza. Automatycznie usuwa polubienie i przechodzi do następnego utworu.",
    SETTINGS_AI_DETECTION: "Wykrywanie sztucznej inteligencji",
    SETTINGS_AI_DETECTION_ENABLED: "Wykrywanie piosenek AI",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Wykrywaj piosenki wygenerowane przez sztuczną inteligencję za pomocą modelu SONICS i wyświetlaj wskaźnik prawdopodobieństwa. Przy pierwszym włączeniu pobierany jest model o rozmiarze ok. 50 MB.",
    AI_ASSETS_DOWNLOADING: "Pobieranie modelu AI...",
    AI_ASSETS_READY: "Model AI gotowy",
    AI_ASSETS_NOT_READY: "Model AI niedostępny",
    SETTINGS_TRASH_AI_SONGS: "Śmieciowe piosenki AI",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Automatycznie przenoś do kosza utwory wykryte jako wygenerowane przez sztuczną inteligencję (prawdopodobieństwo ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Wyczyść wszystkie zapisane wyniki klasyfikacji sztucznej inteligencji (zapisano {{count}} utworów).",
    ACTION_CLEAR_AI_STORAGE: "Jasne",
    MESSAGE_AI_STORAGE_CLEARED: "Wyniki AI zostały usunięte",
    AI_TIER_LIKELY_HUMAN: "Prawdopodobnie człowiek",
    AI_TIER_PROBABLY_HUMAN: "Prawdopodobnie człowiek",
    AI_TIER_UNCERTAIN: "Niepewny",
    AI_TIER_PROBABLY_AI: "Prawdopodobnie sztuczna inteligencja",
    AI_TIER_LIKELY_AI: "Prawdopodobnie sztuczna inteligencja",
    ACTION_REMOVE_TRASHED: "Usuń usunięte utwory",
    CONFIRM_REMOVE_TRASHED: "Usunąć {{count}} usuniętych utworów z tej listy odtwarzania? Tej operacji nie można cofnąć.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Usunięto {{count}} usuniętych utworów z listy odtwarzania",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Nie znaleziono usuniętych utworów na tej liście odtwarzania"
  };
});

// src/i18n/pt-BR.json
var require_pt_BR = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Lixeira+",
    ACTION_THROW: "Colocar na lixeira",
    ACTION_UNTHROW: "Remover da Lixeira",
    ACTION_CLEAR: "Claro",
    ACTION_COPY: "Copiar",
    ACTION_EXPORT: "Exportar",
    ACTION_IMPORT: "Importar",
    MESSAGE_COPIED: "Copiado para a área de transferência",
    MESSAGE_CLEARED: "Lixeira esvaziada com sucesso!",
    MESSAGE_SONG_ADDED: "Música adicionada à lixeira",
    MESSAGE_SONG_REMOVED: "Música removida da lixeira",
    MESSAGE_ARTIST_ADDED: "Artista adicionado à lixeira",
    MESSAGE_ARTIST_REMOVED: "Artista removido da lixeira",
    BACKUP_SAVE_SUCCESS: "Backup salvo com sucesso.",
    BACKUP_SAVE_FAILED: "Falha ao salvar o backup, tente copiar o conteúdo da lixeira para a área de transferência e criar um backup manualmente.",
    BACKUP_RESTORE_SUCCESS: "Backup restaurado com sucesso.",
    BACKUP_FILE_READ_FAILED: "Falha ao ler o arquivo, por favor, certifique-se de que é um arquivo JSON válido.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-lixeira.json",
    SETTINGS_TITLE: "Configurações do Trashbin+",
    SETTINGS_OPTIONS: "Opções",
    SETTINGS_FEATURES: "Recursos",
    SETTINGS_STORAGE: "Armazenamento",
    SETTINGS_ENABLED: "Habilitado",
    SETTINGS_SHOW_WIDGET: "Mostrar Ícone do Widget",
    SETTINGS_AUTOPLAY: "Reprodução automática ao iniciar",
    SETTINGS_QUEUE_TRASHBIN: "Habilitar Lixeira da Fila",
    SETTINGS_TRACKLIST_TRASHBIN: "Habilitar Lixeira da Lista de Faixas",
    SETTINGS_PLAYLIST_MONITOR: "Monitor de Playlist",
    ITEMS_TITLE: "Itens da Lixeira+",
    ITEMS_EMPTY_SONGS: "<strong>Nenhuma música na lixeira!</strong><br/>As músicas que você adicionar à lixeira aparecerão aqui.",
    ITEMS_EMPTY_ARTISTS: "<strong>Nenhum artista na lixeira!</strong><br/>Artistas que você adicionar à lixeira aparecerão aqui.",
    ITEMS_TAB_SONGS: "Músicas",
    ITEMS_TAB_ARTISTS: "Artistas",
    ITEMS_LOADED_COUNT: "{{loaded}} de {{total}} {{type}} carregados",
    ITEMS_SEARCH_PLACEHOLDER: "Pesquisar por nome, artista ou URI...",
    DESCRIPTION_COPY: "Copiar todos os itens na lixeira para a área de transferência.",
    DESCRIPTION_EXPORT: "Salvar todos os itens da lixeira em um arquivo .json.",
    DESCRIPTION_IMPORT: "Substituir todos os itens na lixeira por meio do arquivo .json.",
    DESCRIPTION_CLEAR: "Limpar todos os itens da lixeira (não pode ser desfeito).",
    ITEMS_EMPTY_SONGS_TITLE: "Nenhuma música excluída!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Nenhum artista excluído!",
    DESCRIPTION_SETTINGS_ENABLED: "Alternar para ativar ou desativar todas as funcionalidades do Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Exibir um ícone de lixeira na barra de reprodução ao lado da faixa que está sendo reproduzida para acesso rápido",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Iniciar automaticamente a reprodução de músicas quando o Spotify for aberto ou a extensão for carregada",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Adicione ícones de lixeira ao lado de cada música na sua fila de reprodução para facilitar o gerenciamento",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Adicionar ícones de lixo ao lado das músicas nas visualizações de álbum e playlist para filtragem rápida",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Recupere-se automaticamente de falhas na reprodução do Spotify retomando sua última playlist",
    SETTINGS_SKIP_TRASHED_TRACKS: "Ignorar faixas descartadas",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Pular automaticamente músicas excluídas e encontrar a próxima faixa permitida durante a reprodução",
    SETTINGS_AUTO_CLEAN_QUEUE: "Fila de Limpeza Automática",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Remova automaticamente músicas excluídas da sua fila de Reprodução Inteligente",
    SETTINGS_REMOTE_CONTROL: "Controle Remoto",
    SETTINGS_REMOTE_TOGGLE: "Habilitar Alternância Remota",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Toque duas vezes no play/pause no celular para ativar ou desativar o pulo remoto. Pular uma faixa confirma a alteração.",
    SETTINGS_REMOTE_SKIPPING: "Pular remotamente Ativo",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Quando ativado, pular lixo funciona mesmo ao controlar o Spotify de outro dispositivo (por exemplo, celular)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Pular remoto habilitado",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Pular remoto desativado",
    MESSAGE_SONG_ADDED_REMOTE: "Música excluída à distância",
    SETTINGS_TRASH_VIA_LIKE: "Lixo via Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Como uma música do celular para descartá-la. Automaticamente descurte e pula para a próxima faixa.",
    SETTINGS_AI_DETECTION: "Detecção de IA",
    SETTINGS_AI_DETECTION_ENABLED: "Detecção de Música por IA",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Detecte músicas geradas por IA usando o modelo SONICS e mostre um indicador de probabilidade. Faz o download de um modelo de ~50MB na primeira ativação.",
    AI_ASSETS_DOWNLOADING: "Baixando modelo de IA...",
    AI_ASSETS_READY: "Modelo de IA pronto",
    AI_ASSETS_NOT_READY: "Modelo de IA não disponível",
    SETTINGS_TRASH_AI_SONGS: "Músicas de IA de Lixo",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Enviar automaticamente para a lixeira músicas detectadas como geradas por IA (probabilidade ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Limpar todos os resultados de classificação de IA armazenados ({{count}} músicas armazenadas).",
    ACTION_CLEAR_AI_STORAGE: "Claro",
    MESSAGE_AI_STORAGE_CLEARED: "Resultados de IA limpos",
    AI_TIER_LIKELY_HUMAN: "Provavelmente Humano",
    AI_TIER_PROBABLY_HUMAN: "Provavelmente Humano",
    AI_TIER_UNCERTAIN: "Incerto",
    AI_TIER_PROBABLY_AI: "Provavelmente IA",
    AI_TIER_LIKELY_AI: "Inteligência Artificial Provável",
    ACTION_REMOVE_TRASHED: "Remover músicas na lixeira",
    CONFIRM_REMOVE_TRASHED: "Remover {{count}} música(s) excluída(s) desta playlist? Isso não pode ser desfeito.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Removido(s) {{count}} música(s) excluída(s) da playlist",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Nenhuma música na lixeira encontrada nesta playlist"
  };
});

// src/i18n/pt-PT.json
var require_pt_PT = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Lixo+",
    ACTION_THROW: "Colocar na Lixeira",
    ACTION_UNTHROW: "Remover da Reciclagem",
    ACTION_CLEAR: "Claro",
    ACTION_COPY: "Copiar",
    ACTION_EXPORT: "Exportar",
    ACTION_IMPORT: "Importar",
    MESSAGE_COPIED: "Copiado para a área de transferência",
    MESSAGE_CLEARED: "Lixeira esvaziada com sucesso!",
    MESSAGE_SONG_ADDED: "Música adicionada ao lixo",
    MESSAGE_SONG_REMOVED: "Música removida da lixeira",
    MESSAGE_ARTIST_ADDED: "Artista adicionado ao lixo",
    MESSAGE_ARTIST_REMOVED: "Artista removido da lixeira",
    BACKUP_SAVE_SUCCESS: "Cópia de segurança guardada com sucesso.",
    BACKUP_SAVE_FAILED: "Falha ao guardar a cópia de segurança, tente copiar o conteúdo da lixeira para a área de transferência e criar uma cópia de segurança manualmente.",
    BACKUP_RESTORE_SUCCESS: "Cópia de segurança restaurada com sucesso.",
    BACKUP_FILE_READ_FAILED: "Falha ao ler o ficheiro, certifique-se de que é um ficheiro JSON válido.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-lixeira.json",
    SETTINGS_TITLE: "Definições da Lixeira+",
    SETTINGS_OPTIONS: "Opções",
    SETTINGS_FEATURES: "Funcionalidades",
    SETTINGS_STORAGE: "Armazenamento",
    SETTINGS_ENABLED: "Ativado",
    SETTINGS_SHOW_WIDGET: "Mostrar Ícone do Widget",
    SETTINGS_AUTOPLAY: "Reprodução automática ao iniciar",
    SETTINGS_QUEUE_TRASHBIN: "Ativar a lixeira da fila",
    SETTINGS_TRACKLIST_TRASHBIN: "Ativar a lixeira da lista de faixas",
    SETTINGS_PLAYLIST_MONITOR: "Monitor de Playlist",
    ITEMS_TITLE: "Itens da Lixeira+",
    ITEMS_EMPTY_SONGS: "<strong>Sem músicas na lixeira!</strong><br/>As músicas que você adicionar à lixeira aparecerão aqui.",
    ITEMS_EMPTY_ARTISTS: "<strong>Sem artistas na lixeira!</strong><br/>Os artistas que adicionar à lixeira aparecerão aqui.",
    ITEMS_TAB_SONGS: "Canções",
    ITEMS_TAB_ARTISTS: "Artistas",
    ITEMS_LOADED_COUNT: "{{loaded}} de {{total}} {{type}} carregado",
    ITEMS_SEARCH_PLACEHOLDER: "Pesquisar por nome, artista ou URI...",
    DESCRIPTION_COPY: "Copiar todos os itens na lixeira para a área de transferência.",
    DESCRIPTION_EXPORT: "Guardar todos os itens na lixeira num ficheiro .json.",
    DESCRIPTION_IMPORT: "Substituir todos os itens na lixeira através do ficheiro .json.",
    DESCRIPTION_CLEAR: "Limpar todos os itens da lixeira (não pode ser revertido).",
    ITEMS_EMPTY_SONGS_TITLE: "Sem músicas eliminadas!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Nenhum artista eliminado!",
    DESCRIPTION_SETTINGS_ENABLED: "Alternar principal para ativar ou desativar todas as funcionalidades do Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Exibir um ícone de lixeira na barra de reprodução ao lado da faixa que está a tocar para acesso rápido",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Iniciar automaticamente a reprodução de música quando o Spotify for aberto ou a extensão for carregada",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Adicione ícones de lixo junto a cada música na sua fila de reprodução para facilitar a gestão",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Adicionar ícones de lixo junto às músicas nas visualizações de álbuns e playlists para filtragem rápida",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Recupere automaticamente de falhas na reprodução do Spotify retomando a sua última playlist",
    SETTINGS_SKIP_TRASHED_TRACKS: "Ignorar faixas eliminadas",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Ignorar automaticamente músicas eliminadas e encontrar a próxima faixa permitida durante a reprodução",
    SETTINGS_AUTO_CLEAN_QUEUE: "Fila de Limpeza Automática",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Remova automaticamente músicas eliminadas da sua fila de reprodução inteligente",
    SETTINGS_REMOTE_CONTROL: "Controlo Remoto",
    SETTINGS_REMOTE_TOGGLE: "Ativar Alternância Remota",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Toque duas vezes em reproduzir/pausa a partir do dispositivo móvel para ativar/desativar a passagem de faixas remota. A passagem de uma faixa confirma a alteração.",
    SETTINGS_REMOTE_SKIPPING: "Pulsação remota ativa",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Quando ativado, a função de ignorar faixas funciona mesmo ao controlar o Spotify a partir de outro dispositivo (por exemplo, telemóvel)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Pulsação remota ativada",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "A passagem remota foi desativada",
    MESSAGE_SONG_ADDED_REMOTE: "Música eliminada à distância",
    SETTINGS_TRASH_VIA_LIKE: "Lixo via Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Como uma música do telemóvel para a lixeira. Descurte automaticamente e passa para a faixa seguinte.",
    SETTINGS_AI_DETECTION: "Detecção de IA",
    SETTINGS_AI_DETECTION_ENABLED: "Detecção de Música por IA",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Detete músicas geradas por IA usando o modelo SONICS e mostre um indicador de probabilidade. Descarrega um modelo de ~50 MB na primeira ativação.",
    AI_ASSETS_DOWNLOADING: "A descarregar o modelo de IA...",
    AI_ASSETS_READY: "Modelo de IA pronto",
    AI_ASSETS_NOT_READY: "Modelo de IA não disponível",
    SETTINGS_TRASH_AI_SONGS: "Canções de IA de lixo",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Eliminar automaticamente músicas detetadas como geradas por IA (probabilidade ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Limpar todos os resultados de classificação de IA armazenados ({{count}} músicas armazenadas).",
    ACTION_CLEAR_AI_STORAGE: "Claro",
    MESSAGE_AI_STORAGE_CLEARED: "Resultados de IA limpos",
    AI_TIER_LIKELY_HUMAN: "Provavelmente Humano",
    AI_TIER_PROBABLY_HUMAN: "Provavelmente humano",
    AI_TIER_UNCERTAIN: "Incerto",
    AI_TIER_PROBABLY_AI: "Provavelmente IA",
    AI_TIER_LIKELY_AI: "IA provável",
    ACTION_REMOVE_TRASHED: "Remover músicas eliminadas",
    CONFIRM_REMOVE_TRASHED: "Remover {{count}} música(s) eliminada(s) desta lista de reprodução? Isto não pode ser desfeito.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Removido(s) {{count}} música(s) eliminada(s) da lista de reprodução",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Nenhuma música eliminada encontrada nesta playlist"
  };
});

// src/i18n/ro.json
var require_ro = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Coș de gunoi+",
    ACTION_THROW: "Pune în coșul de gunoi",
    ACTION_UNTHROW: "Elimină din coșul de gunoi",
    ACTION_CLEAR: "Clar",
    ACTION_COPY: "Copiați",
    ACTION_EXPORT: "Export",
    ACTION_IMPORT: "Import",
    MESSAGE_COPIED: "Copiat în clipboard",
    MESSAGE_CLEARED: "Coșul de gunoi a fost golit cu succes!",
    MESSAGE_SONG_ADDED: "Cântec adăugat în coșul de gunoi",
    MESSAGE_SONG_REMOVED: "Melodia a fost eliminată din coșul de gunoi",
    MESSAGE_ARTIST_ADDED: "Artist adăugat în coșul de gunoi",
    MESSAGE_ARTIST_REMOVED: "Artistul a fost eliminat din coșul de gunoi",
    BACKUP_SAVE_SUCCESS: "Backup salvat cu succes.",
    BACKUP_SAVE_FAILED: "Nu s-a reușit salvarea copiei de rezervă, încercați să copiați conținutul coșului de gunoi în clipboard și să creați o copie de rezervă manual.",
    BACKUP_RESTORE_SUCCESS: "Backup restaurat cu succes.",
    BACKUP_FILE_READ_FAILED: "Eșec la citirea fișierului, vă rugăm să vă asigurați că este un fișier JSON valid.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Setări coș de gunoi+",
    SETTINGS_OPTIONS: "Opțiuni",
    SETTINGS_FEATURES: "Caracteristici",
    SETTINGS_STORAGE: "Stocare",
    SETTINGS_ENABLED: "Activat",
    SETTINGS_SHOW_WIDGET: "Afișați pictograma widgetului",
    SETTINGS_AUTOPLAY: "Redare automată la pornire",
    SETTINGS_QUEUE_TRASHBIN: "Activați coșul de gunoi pentru coadă",
    SETTINGS_TRACKLIST_TRASHBIN: "Activați coșul de gunoi pentru listă de piese",
    SETTINGS_PLAYLIST_MONITOR: "Monitorul playlistului",
    ITEMS_TITLE: "Elemente din coșul de gunoi+",
    ITEMS_EMPTY_SONGS: "<strong>Niciun cântec tras la gunoi!</strong><br/>Cântecele pe care le adaugi în coșul de gunoi vor apărea aici.",
    ITEMS_EMPTY_ARTISTS: "<strong>Niciun artist eliminat!</strong><br/>Artiștii pe care îi adăugați la coșul de gunoi vor apărea aici.",
    ITEMS_TAB_SONGS: "Cântece",
    ITEMS_TAB_ARTISTS: "Artiști",
    ITEMS_LOADED_COUNT: "{{loaded}} din {{total}} {{type}} încărcate",
    ITEMS_SEARCH_PLACEHOLDER: "Caută după nume, artist sau URI...",
    DESCRIPTION_COPY: "Copiați toate elementele din coșul de gunoi în clipboard.",
    DESCRIPTION_EXPORT: "Salvați toate elementele din coșul de gunoi într-un fișier .json.",
    DESCRIPTION_IMPORT: "Suprascrie toate elementele din coșul de gunoi prin fișierul .json.",
    DESCRIPTION_CLEAR: "Ștergeți toate elementele din coșul de gunoi (acțiunea nu poate fi anulată).",
    ITEMS_EMPTY_SONGS_TITLE: "Nicio melodie ștearsă!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Niciun artist abandonat!",
    DESCRIPTION_SETTINGS_ENABLED: "Comutare principală pentru activarea sau dezactivarea tuturor funcțiilor Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Afișează o pictogramă de coș de gunoi în bara de redare, lângă piesa care se redă în prezent, pentru acces rapid",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Pornește automat redarea muzicii când Spotify se deschide sau extensia se încarcă",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Adăugați pictograme de coș de gunoi lângă fiecare melodie din coada viitoare pentru o gestionare ușoară",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Adăugați iconițe de coș de gunoi lângă melodii în vizualizările de album și playlist pentru filtrare rapidă",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Recuperează automat erorile de redare de pe Spotify reluând ultima ta listă de redare",
    SETTINGS_SKIP_TRASHED_TRACKS: "Sari peste piesele șterse",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Sări automat peste cântecele eliminate și găsește următorul cântec permis în timpul redării",
    SETTINGS_AUTO_CLEAN_QUEUE: "Coada de curățare automată",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Eliminați automat piesele șterse din coada dvs. Smart Shuffle",
    SETTINGS_REMOTE_CONTROL: "Control la distanță",
    SETTINGS_REMOTE_TOGGLE: "Activați comutarea la distanță",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Apăsați de două ori pe redare/pauză de pe mobil pentru a activa/dezactiva săritul de la distanță. Săritul unui titlu confirmă comutarea.",
    SETTINGS_REMOTE_SKIPPING: "Săritul la distanță activ",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Când este activată, omitearea coșului de gunoi funcționează chiar și atunci când controlați Spotify de pe un alt dispozitiv (de exemplu, mobil)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Săritul de la distanță activat",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Săritul la distanță dezactivat",
    MESSAGE_SONG_ADDED_REMOTE: "Melodia distrusă la distanță",
    SETTINGS_TRASH_VIA_LIKE: "Gunoi prin Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Ca un cântec de la mobil la coșul de gunoi. Dezapreciază automat și trece la următorul cântec.",
    SETTINGS_AI_DETECTION: "Detectarea AI",
    SETTINGS_AI_DETECTION_ENABLED: "Detectarea cântecelor AI",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Detectează piesele generate de AI folosind modelul SONICS și afișează un indicator de probabilitate. Descarcă un model de ~50 MB la prima activare.",
    AI_ASSETS_DOWNLOADING: "Se descarcă modelul AI...",
    AI_ASSETS_READY: "Modelul AI este gata",
    AI_ASSETS_NOT_READY: "Modelul AI nu este disponibil",
    SETTINGS_TRASH_AI_SONGS: "Cântece AI deșeurilor",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Elimină automat piesele muzicale detectate ca fiind generate de IA (probabilitate ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Ștergeți toate rezultatele stocate ale clasificării AI ({{count}} melodii stocate).",
    ACTION_CLEAR_AI_STORAGE: "Clar",
    MESSAGE_AI_STORAGE_CLEARED: "Rezultatele AI au fost verificate",
    AI_TIER_LIKELY_HUMAN: "Probabil uman",
    AI_TIER_PROBABLY_HUMAN: "Probabil uman",
    AI_TIER_UNCERTAIN: "Nesigur",
    AI_TIER_PROBABLY_AI: "Probabil inteligență artificială",
    AI_TIER_LIKELY_AI: "Inteligentă Artificială probabilă",
    ACTION_REMOVE_TRASHED: "Eliminați cântecele din coșul de gunoi",
    CONFIRM_REMOVE_TRASHED: "Eliminați {{count}} melodie(i) ștearsă(e) din această listă de redare? Această acțiune nu poate fi anulată.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Eliminat(e) {{count}} melodie(i) șterse din listă",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Nu s-au găsit melodii șterse în această listă de redare"
  };
});

// src/i18n/ru.json
var require_ru = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Корзина+",
    ACTION_THROW: "Поместить в корзину",
    ACTION_UNTHROW: "Удалить из корзины",
    ACTION_CLEAR: "Ясно",
    ACTION_COPY: "Копировать",
    ACTION_EXPORT: "Экспорт",
    ACTION_IMPORT: "Импорт",
    MESSAGE_COPIED: "Скопировано в буфер обмена",
    MESSAGE_CLEARED: "Корзина успешно очищена!",
    MESSAGE_SONG_ADDED: "Песня добавлена в корзину",
    MESSAGE_SONG_REMOVED: "Песня удалена из корзины",
    MESSAGE_ARTIST_ADDED: "Художник добавлен в корзину",
    MESSAGE_ARTIST_REMOVED: "Художник удалён из корзины",
    BACKUP_SAVE_SUCCESS: "Резервная копия успешно сохранена.",
    BACKUP_SAVE_FAILED: "Не удалось сохранить резервную копию, попробуйте скопировать содержимое корзины в буфер обмена и создать резервную копию вручную.",
    BACKUP_RESTORE_SUCCESS: "Резервная копия успешно восстановлена.",
    BACKUP_FILE_READ_FAILED: "Не удалось прочитать файл, убедитесь, что это корректный файл JSON.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Настройки корзины+",
    SETTINGS_OPTIONS: "Опции",
    SETTINGS_FEATURES: "Особенности",
    SETTINGS_STORAGE: "Хранилище",
    SETTINGS_ENABLED: "Включено",
    SETTINGS_SHOW_WIDGET: "Показать значок виджета",
    SETTINGS_AUTOPLAY: "Автовоспроизведение при запуске",
    SETTINGS_QUEUE_TRASHBIN: "Включить корзину очереди",
    SETTINGS_TRACKLIST_TRASHBIN: "Включить корзину для списков дорожек",
    SETTINGS_PLAYLIST_MONITOR: "Монитор плейлиста",
    ITEMS_TITLE: "Элементы корзины+",
    ITEMS_EMPTY_SONGS: "<strong>Нет песен в корзине!</strong><br/>Песни, которые вы добавили в корзину, появятся здесь.",
    ITEMS_EMPTY_ARTISTS: "<strong>Нет артистов в корзине!</strong><br/>Артисты, которых вы добавите в корзину, появятся здесь.",
    ITEMS_TAB_SONGS: "Песни",
    ITEMS_TAB_ARTISTS: "Художники",
    ITEMS_LOADED_COUNT: "Загружено {{loaded}} из {{total}} {{type}}",
    ITEMS_SEARCH_PLACEHOLDER: "Поиск по названию, исполнителю или URI...",
    DESCRIPTION_COPY: "Копировать все элементы в корзине в буфер обмена.",
    DESCRIPTION_EXPORT: "Сохранить все элементы в корзине в файл .json.",
    DESCRIPTION_IMPORT: "Перезаписать все элементы в корзине с помощью файла .json.",
    DESCRIPTION_CLEAR: "Очистить все элементы из корзины (невозможно отменить).",
    ITEMS_EMPTY_SONGS_TITLE: "Нет удалённых песен!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Никаких выкинутых художников!",
    DESCRIPTION_SETTINGS_ENABLED: "Главный переключатель для включения или отключения всех функций корзины+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Отображать значок корзины на панели воспроизведения рядом с текущим треком для быстрого доступа",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Автоматически начинать воспроизведение музыки при открытии Spotify или загрузке расширения",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Добавьте значки корзины рядом с каждой песней в очереди для удобного управления",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Добавить значки корзины рядом с песнями в альбомах и плейлистах для быстрой фильтрации",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Автоматическое восстановление после сбоев воспроизведения в Spotify путем возобновления последнего плейлиста",
    SETTINGS_SKIP_TRASHED_TRACKS: "Пропустить удалённые треки",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Автоматически пропускать удалённые песни и находить следующий доступный трек во время воспроизведения",
    SETTINGS_AUTO_CLEAN_QUEUE: "Автоматическая очистка очереди",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Автоматически удалять удалённые песни из очереди умного перемешивания",
    SETTINGS_REMOTE_CONTROL: "Пульт дистанционного управления",
    SETTINGS_REMOTE_TOGGLE: "Включить удалённое переключение",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Дважды коснитесь кнопки воспроизведения/паузы на мобильном устройстве, чтобы включить или выключить пропуск дистанционного управления. Пропуск трека подтверждает переключение.",
    SETTINGS_REMOTE_SKIPPING: "Удаленное пропускание активно",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "При включении функция пропуска в корзину работает даже при управлении Spotify с другого устройства (например, мобильного)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Удаленное пропускание включено",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Пропуск на расстоянии отключен",
    MESSAGE_SONG_ADDED_REMOTE: "Песня удалена на расстоянии",
    SETTINGS_TRASH_VIA_LIKE: "Мусор через Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: 'Как песня с мобильного в корзину. Автоматически убирает отметку "Нравится" и переходит к следующему треку.',
    SETTINGS_AI_DETECTION: "Обнаружение ИИ",
    SETTINGS_AI_DETECTION_ENABLED: "Обнаружение песен ИИ",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Обнаружение песен, созданных с помощью ИИ, с использованием модели SONICS, и отображение индикатора вероятности. При первом включении загружается модель объёмом ~50 МБ.",
    AI_ASSETS_DOWNLOADING: "Загрузка модели ИИ...",
    AI_ASSETS_READY: "Модель ИИ готова",
    AI_ASSETS_NOT_READY: "Модель ИИ недоступна",
    SETTINGS_TRASH_AI_SONGS: "Песни про мусорный ИИ",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Автоматически перемещать песни, определённые как созданные ИИ (вероятность ≥ 80 %), в корзину",
    DESCRIPTION_CLEAR_AI_STORAGE: "Очистить все сохраненные результаты классификации ИИ (сохранено {{count}} песен).",
    ACTION_CLEAR_AI_STORAGE: "Ясно",
    MESSAGE_AI_STORAGE_CLEARED: "Результаты ИИ очищены",
    AI_TIER_LIKELY_HUMAN: "Вероятно, человек",
    AI_TIER_PROBABLY_HUMAN: "Вероятно, человек",
    AI_TIER_UNCERTAIN: "Неуверенный",
    AI_TIER_PROBABLY_AI: "Вероятно, ИИ",
    AI_TIER_LIKELY_AI: "Вероятно, ИИ",
    ACTION_REMOVE_TRASHED: "Удалить песни в корзине",
    CONFIRM_REMOVE_TRASHED: "Удалить {{count}} песню(песни) из этого плейлиста? Это действие нельзя отменить.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Удалено {{count}} трек(ов) из плейлиста из корзины",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "В этом плейлисте не найдено удалённых песен"
  };
});

// src/i18n/sk.json
var require_sk = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Kôš+",
    ACTION_THROW: "Umiestniť do koša",
    ACTION_UNTHROW: "Odstrániť z koša",
    ACTION_CLEAR: "Jasné",
    ACTION_COPY: "Kopírovať",
    ACTION_EXPORT: "Export",
    ACTION_IMPORT: "Import",
    MESSAGE_COPIED: "Skopírované do schránky",
    MESSAGE_CLEARED: "Kôš bol úspešne vyprázdnený!",
    MESSAGE_SONG_ADDED: "Skomponovaná pieseň odstránená",
    MESSAGE_SONG_REMOVED: "Skomponovaná skladba odstránená z koša",
    MESSAGE_ARTIST_ADDED: "Umelca pridaného do koša",
    MESSAGE_ARTIST_REMOVED: "Umenkár odstránený z koša",
    BACKUP_SAVE_SUCCESS: "Záloha bola úspešne uložená.",
    BACKUP_SAVE_FAILED: "Zálohovanie sa nepodarilo, skúste skopírovať obsah koša do schránky a vytvoriť zálohu ručne.",
    BACKUP_RESTORE_SUCCESS: "Záloha bola úspešne obnovená.",
    BACKUP_FILE_READ_FAILED: "Nepodarilo sa prečítať súbor, uistite sa, že ide o platný súbor JSON.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Nastavenia koša+",
    SETTINGS_OPTIONS: "Možnosti",
    SETTINGS_FEATURES: "Funkcie",
    SETTINGS_STORAGE: "Úložisko",
    SETTINGS_ENABLED: "Povolené",
    SETTINGS_SHOW_WIDGET: "Zobraziť ikonu widgetu",
    SETTINGS_AUTOPLAY: "Automatické prehrávanie pri štarte",
    SETTINGS_QUEUE_TRASHBIN: "Povoliť koš fronty",
    SETTINGS_TRACKLIST_TRASHBIN: "Povoliť kôš pre zoznam skladieb",
    SETTINGS_PLAYLIST_MONITOR: "Monitor zoznamu skladieb",
    ITEMS_TITLE: "Položky koša+",
    ITEMS_EMPTY_SONGS: "<strong>Žiadne zmazané skladby!</strong><br/>Skladby, ktoré pridáte do koša, sa objavia tu.",
    ITEMS_EMPTY_ARTISTS: "<strong>Žiadni umelci v koši!</strong><br/>Umelci, ktorých pridáte do koša, sa objavia tu.",
    ITEMS_TAB_SONGS: "Pesničky",
    ITEMS_TAB_ARTISTS: "Umelci",
    ITEMS_LOADED_COUNT: "Načítaných {{loaded}} z {{total}} {{type}}",
    ITEMS_SEARCH_PLACEHOLDER: "Hľadať podľa názvu, umelca alebo URI...",
    DESCRIPTION_COPY: "Skopírovať všetky položky v koši do schránky.",
    DESCRIPTION_EXPORT: "Uložiť všetky položky v koši do súboru .json.",
    DESCRIPTION_IMPORT: "Prepísať všetky položky v koši pomocou súboru .json.",
    DESCRIPTION_CLEAR: "Odstrániť všetky položky z koša (nie je možné vrátiť späť).",
    ITEMS_EMPTY_SONGS_TITLE: "Žiadne zmazané skladby!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Žiadni zahodení umelci!",
    DESCRIPTION_SETTINGS_ENABLED: "Hlavné prepínanie na povolenie alebo zakázanie všetkých funkcií koša+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Zobraziť ikonu koša v lište prehrávania vedľa práve prehrávanej skladby pre rýchly prístup",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Automaticky spustiť prehrávanie hudby pri otvorení Spotify alebo pri načítaní rozšírenia",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Pridajte ikony koša vedľa každej skladby vo vašej nadchádzajúcej fronte pre jednoduchú správu",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Pridať ikony koša vedľa skladieb v zobrazeniach albumov a playlistov pre rýchle filtrovanie",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Automaticky obnoviť prehrávanie v Spotify po chybách tým, že obnovíte posledný zoznam skladieb",
    SETTINGS_SKIP_TRASHED_TRACKS: "Preskočiť odstránené skladby",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Automaticky preskočiť odstránené skladby a nájsť ďalšiu povolenú skladbu počas prehrávania",
    SETTINGS_AUTO_CLEAN_QUEUE: "Fronta automatického čistenia",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Automaticky odstraňujte skladby v koši z vašej chytrej náhodnej zostavy",
    SETTINGS_REMOTE_CONTROL: "Diaľkové ovládanie",
    SETTINGS_REMOTE_TOGGLE: "Povoliť diaľkové prepínanie",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Dvojitým klepnutím na prehrávanie/pauzu z mobilu zapnete alebo vypnete diaľkové preskakovanie. Preskočenie skladby potvrdí prepínanie.",
    SETTINGS_REMOTE_SKIPPING: "Vzdialené preskakovanie aktívne",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Ak je táto funkcia povolená, preskakovanie kôša funguje aj pri ovládaní Spotify z iného zariadenia (napr. mobilného).",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Vzdialené preskakovanie povolené",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Vzdialené preskakovanie je zakázané",
    MESSAGE_SONG_ADDED_REMOTE: "Skomolenie skladby na diaľku",
    SETTINGS_TRASH_VIA_LIKE: "Odpad cez Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Ako skladba z mobilu do koša. Automaticky odstráni lajk a preskočí na ďalšiu skladbu.",
    SETTINGS_AI_DETECTION: "Detekcia umelej inteligencie",
    SETTINGS_AI_DETECTION_ENABLED: "Detekcia piesne umelou inteligenciou",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Detekujte piesne vygenerované umelou inteligenciou pomocou modelu SONICS a zobrazte indikátor pravdepodobnosti. Po prvom zapnutí sa stiahne model približne 50 MB.",
    AI_ASSETS_DOWNLOADING: "Sťahovanie AI modelu...",
    AI_ASSETS_READY: "AI model je pripravený",
    AI_ASSETS_NOT_READY: "AI model nie je k dispozícii",
    SETTINGS_TRASH_AI_SONGS: "Skladby Trash AI",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Automaticky odstrániť skladby rozpoznané ako vygenerované umelou inteligenciou (pravdepodobnosť ≥ 80 %)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Vymazať všetky uložené výsledky klasifikácie umelou inteligenciou (uložené {{count}} skladby).",
    ACTION_CLEAR_AI_STORAGE: "Jasné",
    MESSAGE_AI_STORAGE_CLEARED: "Výsledky AI boli vyčistené",
    AI_TIER_LIKELY_HUMAN: "Pravdepodobne človek",
    AI_TIER_PROBABLY_HUMAN: "Pravdepodobne ľudský",
    AI_TIER_UNCERTAIN: "Neistý",
    AI_TIER_PROBABLY_AI: "Pravdepodobne umelá inteligencia",
    AI_TIER_LIKELY_AI: "Pravdepodobná umelá inteligencia",
    ACTION_REMOVE_TRASHED: "Odstrániť zmazané skladby",
    CONFIRM_REMOVE_TRASHED: "Odstrániť {{count}} odstránenú(e) skladbu(y) z tohto zoznamu? Túto akciu nie je možné vrátiť späť.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Odstránených {{count}} zmazaných skladieb zo zoznamu skladieb",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "V tomto zozname skladieb neboli nájdené žiadne odstránené skladby"
  };
});

// src/i18n/sl.json
var require_sl = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Smetnjak+",
    ACTION_THROW: "Postavi v koš za smeti",
    ACTION_UNTHROW: "Odstrani iz koša",
    ACTION_CLEAR: "Jasno",
    ACTION_COPY: "Kopiraj",
    ACTION_EXPORT: "Izvoz",
    ACTION_IMPORT: "Uvoz",
    MESSAGE_COPIED: "Kopirano v odložišče",
    MESSAGE_CLEARED: "Smetnjak uspešno izpraznjen!",
    MESSAGE_SONG_ADDED: "Pesem dodana v koš za smeti",
    MESSAGE_SONG_REMOVED: "Pesem odstranjena iz koša",
    MESSAGE_ARTIST_ADDED: "Umetnik dodan v koš za smeti",
    MESSAGE_ARTIST_REMOVED: "Umetnik odstranjen iz koša za smeti",
    BACKUP_SAVE_SUCCESS: "Varnostna kopija je bila uspešno shranjena.",
    BACKUP_SAVE_FAILED: "Shranjevanje varnostne kopije ni uspelo, poskusite kopirati vsebino koša v odložišče in ročno ustvariti varnostno kopijo.",
    BACKUP_RESTORE_SUCCESS: "Varnostna kopija je bila uspešno obnovljena.",
    BACKUP_FILE_READ_FAILED: "Ni bilo mogoče prebrati datoteke, preverite, ali je veljavna datoteka JSON.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Nastavitve koša za smeti+",
    SETTINGS_OPTIONS: "Možnosti",
    SETTINGS_FEATURES: "Značilnosti",
    SETTINGS_STORAGE: "Shranjevanje",
    SETTINGS_ENABLED: "Omogočeno",
    SETTINGS_SHOW_WIDGET: "Prikaži ikono gradnika",
    SETTINGS_AUTOPLAY: "Samodejno predvajanje ob zagonu",
    SETTINGS_QUEUE_TRASHBIN: "Omogoči vrsto za smetnjak",
    SETTINGS_TRACKLIST_TRASHBIN: "Omogoči koš za seznam skladb",
    SETTINGS_PLAYLIST_MONITOR: "Sledilnik predvajalnega seznama",
    ITEMS_TITLE: "Predmeti v košu+",
    ITEMS_EMPTY_SONGS: "<strong>Ni izbrisanih pesmi!</strong><br/>Pesmi, ki jih dodate v koš za smeti, bodo prikazane tukaj.",
    ITEMS_EMPTY_ARTISTS: "<strong>Ni umazanih umetnikov!</strong><br/>Umetniki, ki jih dodate v koš za smeti, bodo prikazani tukaj.",
    ITEMS_TAB_SONGS: "Pesmi",
    ITEMS_TAB_ARTISTS: "Umjetnici",
    ITEMS_LOADED_COUNT: "{{loaded}} od {{total}} {{type}} naloženih",
    ITEMS_SEARCH_PLACEHOLDER: "Iskanje po imenu, umetniku ali URI-ju...",
    DESCRIPTION_COPY: "Kopiraj vse predmete v košu v odložišče.",
    DESCRIPTION_EXPORT: "Shrani vse elemente v košu v datoteko .json.",
    DESCRIPTION_IMPORT: "Prepiši vse predmete v košu prek datoteke .json.",
    DESCRIPTION_CLEAR: "Izprazni vse predmete iz koša (ni mogoče razveljaviti).",
    ITEMS_EMPTY_SONGS_TITLE: "Brez zabrisanih pesmi!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Brez zavrženih umetnikov!",
    DESCRIPTION_SETTINGS_ENABLED: "Glavni stikalo za omogočanje ali onemogočanje vseh funkcij koša+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Prikaži ikono koša v vrstici predvajanja poleg trenutno predvajane skladbe za hitri dostop",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Samodejno začni predvajati glasbo, ko se odpre Spotify ali ko se razširitev naloži",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Dodajte ikone za smetnjak poleg vsake pesmi v vaši prihodnji vrstni red za enostavno upravljanje",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Dodaj ikone za smetnjak poleg pesmi v pogledih albumov in predvajalnih seznamov za hitro filtriranje",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Samodejno obnovite predvajanje v Spotifyju po težavah tako, da znova zaženete zadnji seznam predvajanja",
    SETTINGS_SKIP_TRASHED_TRACKS: "Preskoči izbrisane skladbe",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Samodejno preskoči izbrisane pesmi in med predvajanjem poišči naslednjo dovoljeno skladbo",
    SETTINGS_AUTO_CLEAN_QUEUE: "Čakalna vrsta za samodejno čiščenje",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Samodejno odstrani izbrisane pesmi iz čakalne vrste za pametno mešanje",
    SETTINGS_REMOTE_CONTROL: "Oddaljeni krmilnik",
    SETTINGS_REMOTE_TOGGLE: "Omogoči oddaljeni preklop",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Dvakrat tapnite predvajaj/pavza iz mobilnega naprave, da vklopite/izklopite oddaljeno preskakovanie. Preskočitev skladbe potrdi preklop.",
    SETTINGS_REMOTE_SKIPPING: "Oddaljeno preskakovnje je aktivno",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Ko je omogočeno, se preskakovanie smetnjaka izvaja tudi ob upravljanju s Spotifyjem z druge naprave (npr. mobilne).",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Oddaljeno preskakljanje omogočeno",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Oddaljeno preskakovanie onemogočeno",
    MESSAGE_SONG_ADDED_REMOTE: "Pesem uničena na daljavo",
    SETTINGS_TRASH_VIA_LIKE: "Smeti prek Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Kot pesem iz mobilnega v smeti. Samodejno odstrani všeček in preklopi na naslednjo skladbo.",
    SETTINGS_AI_DETECTION: "Zaznavanje umetne inteligence",
    SETTINGS_AI_DETECTION_ENABLED: "Zaznavanje pesmi z umetno inteligenco",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Zaznaj pesmi, ustvarjene z umetno inteligenco, s pomočjo modela SONICS, in prikaži indikator verjetnosti. Ob prvem omogočanju prenese model velikosti približno 50 MB.",
    AI_ASSETS_DOWNLOADING: "Prenašam AI model...",
    AI_ASSETS_READY: "AI model je pripravljen",
    AI_ASSETS_NOT_READY: "AI model ni na voljo",
    SETTINGS_TRASH_AI_SONGS: "Pesmi umetne inteligence o smeteh",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Samodejno premakni v koš pesmi, ki so prepoznane kot izdelane z umetno inteligenco (verjetnost ≥ 80 %)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Počisti vse shranjene rezultate razvrščanja z umetno inteligenco (shranjeno {{count}} pesmi).",
    ACTION_CLEAR_AI_STORAGE: "Jasno",
    MESSAGE_AI_STORAGE_CLEARED: "Rezultati umetne inteligence so bili izbrisani",
    AI_TIER_LIKELY_HUMAN: "Verjetno človek",
    AI_TIER_PROBABLY_HUMAN: "Verjetno človek",
    AI_TIER_UNCERTAIN: "Nedoločeno",
    AI_TIER_PROBABLY_AI: "Verjetno umetna inteligenca",
    AI_TIER_LIKELY_AI: "Verjetno umetna inteligenca",
    ACTION_REMOVE_TRASHED: "Odstrani izbrisane pesmi",
    CONFIRM_REMOVE_TRASHED: "Ali želite odstraniti {{count}} izbrisano(e) skladbo(e) iz tega seznama predvajanja? Tega dejanja ni mogoče razveljaviti.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Odstranjena je bila {{count}} izbrisana pesem (pesmi) s seznama predvajanja",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "V tem predvajanju ni najdenih izbrisanih skladb"
  };
});

// src/i18n/sr.json
var require_sr = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Корпа за смеће+",
    ACTION_THROW: "Смести у сандуче за отпатке",
    ACTION_UNTHROW: "Уклони из корпе за смеће",
    ACTION_CLEAR: "Јасно",
    ACTION_COPY: "Копирај",
    ACTION_EXPORT: "Извоз",
    ACTION_IMPORT: "Увоз",
    MESSAGE_COPIED: "Копирано у оставу",
    MESSAGE_CLEARED: "Смеће успешно очишћено!",
    MESSAGE_SONG_ADDED: "Песма је додата у корпу за смеће",
    MESSAGE_SONG_REMOVED: "Песма је уклоњена из корпе за смеће",
    MESSAGE_ARTIST_ADDED: "Уметник додат у корпу за смеће",
    MESSAGE_ARTIST_REMOVED: "Уметник је уклоњен из корпе за смеће",
    BACKUP_SAVE_SUCCESS: "Резервна копија је успешно сачувана.",
    BACKUP_SAVE_FAILED: "Није успело чување резервне копије, покушајте да копирате садржај корпе за смеће у оставу и да ручно направите резервну копију.",
    BACKUP_RESTORE_SUCCESS: "Резервна копија је успешно враћена.",
    BACKUP_FILE_READ_FAILED: "Није успело читање датотеке, молимо проверите да ли је исправна JSON датотека.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Подешавања корпе за отпатак+",
    SETTINGS_OPTIONS: "Опције",
    SETTINGS_FEATURES: "Каркаcterистике",
    SETTINGS_STORAGE: "Складиштење",
    SETTINGS_ENABLED: "Омогућено",
    SETTINGS_SHOW_WIDGET: "Прикажи икону виджета",
    SETTINGS_AUTOPLAY: "Аутоматско пуштање при покретању",
    SETTINGS_QUEUE_TRASHBIN: "Омогући корпу за отпатке реда чекања",
    SETTINGS_TRACKLIST_TRASHBIN: "Омогући корпу за отпатке листе нумера",
    SETTINGS_PLAYLIST_MONITOR: "Плејлиста монитор",
    ITEMS_TITLE: "Ставке корпе за отпатке+",
    ITEMS_EMPTY_SONGS: "<strong>Нема избрисаних песама!</strong><br/>Песме које додате у корпу за смеће појавиће се овде.",
    ITEMS_EMPTY_ARTISTS: "<strong>Нема избрисаних извођача!</strong><br/>Извођачи које додате у корпу за смеће појавиће се овде.",
    ITEMS_TAB_SONGS: "Песме",
    ITEMS_TAB_ARTISTS: "Уметници",
    ITEMS_LOADED_COUNT: "Учитано {{loaded}} од {{total}} {{type}}",
    ITEMS_SEARCH_PLACEHOLDER: "Претражи по имену, извођачу или URI...",
    DESCRIPTION_COPY: "Копирај све ставке у отпаду у оставу.",
    DESCRIPTION_EXPORT: "Сачувај све ставке у корпи за смеће у .json датотеку.",
    DESCRIPTION_IMPORT: "Преписивање свих ставки у корпи за отпад преко .json датотеке.",
    DESCRIPTION_CLEAR: "Обриши све ставке из корпе за смеће (не може се опозвати).",
    ITEMS_EMPTY_SONGS_TITLE: "Нема избрисаних песама!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Никакви занемарени уметници!",
    DESCRIPTION_SETTINGS_ENABLED: "Главни прекидач за активирање или деактивирање свих функција Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Прикажи икону корпе за отпад у траци за репродукцију поред тренутно репродукованог нумере за брз приступ",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Аутоматско покретање репродукције музике када се отвори Спотифај или када се проширење учита",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Додајте иконице за отпад поред сваке песме у вашој редоследној листи за једноставније управљање",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Додајте иконице за отпад поред песама у прегледима албума и листе пуштања ради брзог филтрирања",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Аутоматско опорављање од грешака у пуштању на Спотифају наставком ваше последње листе песама",
    SETTINGS_SKIP_TRASHED_TRACKS: "Прескочи оне избрисане",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Аутоматско прескачење отпадних песама и проналажење следеће дозвољене нумере током репродукције",
    SETTINGS_AUTO_CLEAN_QUEUE: "Ред за аутоматско чишћење",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Аутоматско уклањање избрисаних песама из реда чувања случајног редоследа",
    SETTINGS_REMOTE_CONTROL: "Даљинско управљање",
    SETTINGS_REMOTE_TOGGLE: "Омогући удаљено пребацивање",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Додирните двапут за пуштање/паузу са мобилног уређаја да бисте укључили искључивање прескакања на даљинско. Прескакање нумере потврђује укључивање.",
    SETTINGS_REMOTE_SKIPPING: "Удаљено прескачање активно",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Када је омогућено, прескакање отпада функционише чак и када управљате Спотифајом са другог уређаја (нпр. мобилног телефона)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Удаљено прескачање укључено",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Даљинско прескачање онемогућено",
    MESSAGE_SONG_ADDED_REMOTE: "Песма уништена на даљинско",
    SETTINGS_TRASH_VIA_LIKE: "Смеће преко лајкова",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Као песма са мобилног, баци је. Аутоматски престаје да се свиђа и прелази на следећу нумеру.",
    SETTINGS_AI_DETECTION: "Откривање вештачке интелигенције",
    SETTINGS_AI_DETECTION_ENABLED: "Откривање песме вештачком интелигенцијом",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Откривање песама које је генерисао вештачки интелект коришћењем SONICS модела и приказ индикатора вероватноће. Преузима ~50MB модел при првом омогућавању.",
    AI_ASSETS_DOWNLOADING: "Преузимање АИ модела...",
    AI_ASSETS_READY: "АИ модел је спреман",
    AI_ASSETS_NOT_READY: "AI модел није доступан",
    SETTINGS_TRASH_AI_SONGS: "Песме Треш АИ",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Аутоматски у бацу песме које су препознате као AI-генерисане (вероватноћа ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Обриши све сачуване резултате класификације вештачке интелигенције ({{count}} сачуваних песама).",
    ACTION_CLEAR_AI_STORAGE: "Јасно",
    MESSAGE_AI_STORAGE_CLEARED: "Резултати вештачке интелигенције су очишћени",
    AI_TIER_LIKELY_HUMAN: "Вероватно људско",
    AI_TIER_PROBABLY_HUMAN: "Вероватно људски",
    AI_TIER_UNCERTAIN: "Несигурно",
    AI_TIER_PROBABLY_AI: "Вероватно вештачка интелигенција",
    AI_TIER_LIKELY_AI: "Вероватна вештачка интелигенција",
    ACTION_REMOVE_TRASHED: "Уклони отпадне песме",
    CONFIRM_REMOVE_TRASHED: "Желите ли да уклоните {{count}} отпевану песму из ове листе за репродукцију? Ово није могуће опозвати.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Уклоњено је {{count}} избачена(их) нумера(е) са листе пуштања",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Није пронађена ниједна отпуштена песма на овој листи песама"
  };
});

// src/i18n/sv.json
var require_sv = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Papperskorg+",
    ACTION_THROW: "Placera i papperskorgen",
    ACTION_UNTHROW: "Ta bort från papperskorgen",
    ACTION_CLEAR: "Klart",
    ACTION_COPY: "Kopiera",
    ACTION_EXPORT: "Exportera",
    ACTION_IMPORT: "Importera",
    MESSAGE_COPIED: "Kopierat till urklipp",
    MESSAGE_CLEARED: "Papperskorgen har tömts!",
    MESSAGE_SONG_ADDED: "Låt tillagd i papperskorgen",
    MESSAGE_SONG_REMOVED: "Låt borttagen från papperskorgen",
    MESSAGE_ARTIST_ADDED: "Konstnär tillagd i papperskorgen",
    MESSAGE_ARTIST_REMOVED: "Konstnär borttagen från papperskorgen",
    BACKUP_SAVE_SUCCESS: "Säkerhetskopia sparades framgångsrikt.",
    BACKUP_SAVE_FAILED: "Det gick inte att spara säkerhetskopia, försök att kopiera papperskorgens innehåll till urklipp och skapa en säkerhetskopia manuellt.",
    BACKUP_RESTORE_SUCCESS: "Säkerhetskopian återställdes framgångsrikt.",
    BACKUP_FILE_READ_FAILED: "Det gick inte att läsa filen, se till att det är en giltig JSON-fil.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Inställningar för papperskorg+",
    SETTINGS_OPTIONS: "Alternativ",
    SETTINGS_FEATURES: "Funktioner",
    SETTINGS_STORAGE: "Förvaring",
    SETTINGS_ENABLED: "Aktiverad",
    SETTINGS_SHOW_WIDGET: "Visa widgetikon",
    SETTINGS_AUTOPLAY: "Automatisk uppspelning vid start",
    SETTINGS_QUEUE_TRASHBIN: "Aktivera Kö-papperskorg",
    SETTINGS_TRACKLIST_TRASHBIN: "Aktivera spårlistans papperskorg",
    SETTINGS_PLAYLIST_MONITOR: "Spellistsmonitor",
    ITEMS_TITLE: "Papperskorg+ objekt",
    ITEMS_EMPTY_SONGS: "<strong>Inga sånger i papperskorgen!</strong><br/>Sånger du lägger i papperskorgen kommer att visas här.",
    ITEMS_EMPTY_ARTISTS: "<strong>Inga artister i papperskorgen!</strong><br/>Artister du lägger i papperskorgen kommer att visas här.",
    ITEMS_TAB_SONGS: "Låtar",
    ITEMS_TAB_ARTISTS: "Konstnärer",
    ITEMS_LOADED_COUNT: "{{loaded}} av {{total}} {{type}} inladdade",
    ITEMS_SEARCH_PLACEHOLDER: "Sök efter namn, artist eller URI...",
    DESCRIPTION_COPY: "Kopiera alla objekt i papperskorgen till urklipp.",
    DESCRIPTION_EXPORT: "Spara alla objekt i papperskorgen till en .json-fil.",
    DESCRIPTION_IMPORT: "Skriv över alla objekt i papperskorgen via .json-fil.",
    DESCRIPTION_CLEAR: "Rensa alla objekt från papperskorgen (kan inte ångras).",
    ITEMS_EMPTY_SONGS_TITLE: "Inga borttagna låtar!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Inga förstörda artister!",
    DESCRIPTION_SETTINGS_ENABLED: "Huvudbrytare för att aktivera eller inaktivera all funktionalitet i Papperskorg+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Visa en papperskorgsikon i uppspelningsfältet bredvid den spelande låten för snabb åtkomst",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Starta automatiskt att spela musik när Spotify öppnas eller tillägget läses in",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Lägg till papperskorgsikoner bredvid varje låt i din kommande kö för enkel hantering",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Lägg till papperskorgsikoner bredvid låtar i album- och spellistsvyn för snabb filtrering",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Återställ automatiskt från Spotify-uppspelningsfel genom att återuppta din senaste spellista",
    SETTINGS_SKIP_TRASHED_TRACKS: "Hoppa över borttagna spår",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Hoppa automatiskt över borttagna låtar och hitta nästa tillåtna spår under uppspelning",
    SETTINGS_AUTO_CLEAN_QUEUE: "Automatisk rensning av kö",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Ta automatiskt bort borttagna låtar från din Smarta Blanda-kö",
    SETTINGS_REMOTE_CONTROL: "Fjärrkontroll",
    SETTINGS_REMOTE_TOGGLE: "Aktivera fjärrväxling",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Dubbeltryck på play/paus från mobilen för att aktivera/inaktivera fjärrhoppning. Ett spårhopp bekräftar inställningen.",
    SETTINGS_REMOTE_SKIPPING: "Fjärrhoppning Aktiv",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "När det är aktiverat fungerar bortskippning även när Spotify styrs från en annan enhet (t.ex. mobil)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Fjärrhoppning aktiverad",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Fjärröversprångning inaktiverad",
    MESSAGE_SONG_ADDED_REMOTE: "Låt förstörd via fjärrkontroll",
    SETTINGS_TRASH_VIA_LIKE: "Skräp via Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Som en låt från mobil till papperskorg. Tar automatiskt bort gillandet och hoppar till nästa spår.",
    SETTINGS_AI_DETECTION: "AI-detektering",
    SETTINGS_AI_DETECTION_ENABLED: "AI-låtdetektering",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Identifiera AI-genererade låtar med SONICS-modellen och visa en sannolikhetsindikator. Laddar ner ~50 MB modell vid första aktiveringen.",
    AI_ASSETS_DOWNLOADING: "Laddar ner AI-modell...",
    AI_ASSETS_READY: "AI-modell redo",
    AI_ASSETS_NOT_READY: "AI-modell inte tillgänglig",
    SETTINGS_TRASH_AI_SONGS: "Skräp-AI-låtar",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Flytta automatiskt sånger som identifieras som AI-genererade (sannolikhet ≥ 80 %) till papperskorgen",
    DESCRIPTION_CLEAR_AI_STORAGE: "Rensa alla lagrade AI-klassificeringsresultat ({{count}} låtar lagrade).",
    ACTION_CLEAR_AI_STORAGE: "Klart",
    MESSAGE_AI_STORAGE_CLEARED: "AI-resultat godkända",
    AI_TIER_LIKELY_HUMAN: "Troligen människa",
    AI_TIER_PROBABLY_HUMAN: "Troligen människa",
    AI_TIER_UNCERTAIN: "Osäker",
    AI_TIER_PROBABLY_AI: "Troligen AI",
    AI_TIER_LIKELY_AI: "Troligen AI",
    ACTION_REMOVE_TRASHED: "Ta bort borttagna låtar",
    CONFIRM_REMOVE_TRASHED: "Ta bort {{count}} sång(er) från papperskorgen från denna spellista? Detta kan inte ångras.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Tog bort {{count}} sång(er) från papperskorgen i spellistan",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Inga borttagna låtar hittades i denna spellista"
  };
});

// src/i18n/sw.json
var require_sw = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Kisanduku cha taka+",
    ACTION_THROW: "Weka kwenye kikapu cha taka",
    ACTION_UNTHROW: "Ondoa kutoka kwenye Kikapu cha Takataka",
    ACTION_CLEAR: "Wazi",
    ACTION_COPY: "Nakili",
    ACTION_EXPORT: "Uuzaji wa nje",
    ACTION_IMPORT: "Kuletea",
    MESSAGE_COPIED: "Imekopishwa kwenye ubao wa kunakili",
    MESSAGE_CLEARED: "Kisanduku cha taka kimesafishwa kikweli!",
    MESSAGE_SONG_ADDED: "Wimbo umeweka kwenye kikapu cha taka",
    MESSAGE_SONG_REMOVED: "Wimbo umefutwa kutoka kwenye kisanduku cha taka",
    MESSAGE_ARTIST_ADDED: "Mchezaji amewekwa kwenye kikapu cha taka",
    MESSAGE_ARTIST_REMOVED: "Mchezaji wa sanaa ameondolewa kutoka kwenye kisanduku cha taka",
    BACKUP_SAVE_SUCCESS: "Usimamizi umehifadhiwa kikamilifu.",
    BACKUP_SAVE_FAILED: "Imeshindwa kuhifadhi nakala, jaribu kunakili maudhui ya kisanduku cha taka kwenye ubao wa kunakili na kuunda nakala kwa mkono.",
    BACKUP_RESTORE_SUCCESS: "Usalama umerekishiwa kikamilifu.",
    BACKUP_FILE_READ_FAILED: "Imeshindwa kusoma faili, tafadhali hakikisha kwamba ni faili halali ya JSON.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Mipangilio ya Kipande cha Taka+",
    SETTINGS_OPTIONS: "Chaguzi",
    SETTINGS_FEATURES: "Vipengele",
    SETTINGS_STORAGE: "Usafirishaji",
    SETTINGS_ENABLED: "Imewezeshwa",
    SETTINGS_SHOW_WIDGET: "Onyesha Ikoni ya Kiolezo",
    SETTINGS_AUTOPLAY: "Kucheza kiotomatiki kuanzia",
    SETTINGS_QUEUE_TRASHBIN: "Washa Kisebe cha Kuchakata",
    SETTINGS_TRACKLIST_TRASHBIN: "Washa Kikapu cha Kuchakata Orodha ya Nyimbo",
    SETTINGS_PLAYLIST_MONITOR: "Ombombo la kusanyiko la nyimbo",
    ITEMS_TITLE: "Vitulizo+ Vya kisanduku cha takataka",
    ITEMS_EMPTY_SONGS: "<strong>Hakuna wimbo uliopotoshwa!</strong><br/>Wimbo unaoongeza kwenye kikapu cha taka kitatokea hapa.",
    ITEMS_EMPTY_ARTISTS: "<strong>Hakuna wasanii wamepoteza!</strong><br/>Wasanii ambao utawaweka kwenye kisanduku cha taka kitaratibu hapa.",
    ITEMS_TAB_SONGS: "Nyimbo",
    ITEMS_TAB_ARTISTS: "Watu wa sanaa",
    ITEMS_LOADED_COUNT: "{{loaded}} ya {{total}} {{type}} imepakia",
    ITEMS_SEARCH_PLACEHOLDER: "Tafuta kwa jina, mchezaji, au URI...",
    DESCRIPTION_COPY: "Nakili vitu vyote kwenye kisanduku cha kuchakata kwenda kwenye ubao wa kunakili.",
    DESCRIPTION_EXPORT: "Hifadhi vitu vyote kwenye kisanduku cha kuchakata kwenye faili ya .json.",
    DESCRIPTION_IMPORT: "Andika upya vitu vyote kwenye kisanduku cha kuchakata kupitia faili ya .json.",
    DESCRIPTION_CLEAR: "Futa vitu vyote kutoka kwenye kisanduku cha taka (haiwezi kurudiwa).",
    ITEMS_EMPTY_SONGS_TITLE: "Hakuna nyimbo zilizotupwa!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Hakuna wasanii wamechakazwa!",
    DESCRIPTION_SETTINGS_ENABLED: "Bofya kuu kuwezesha au kuzima uwezo wote wa Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Onyesha ikoni ya kisanduku cha taka kwenye mbari ya kucheza karibu na kipande kinachotamasha kwa urahisi",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Anza kucheza muziki kiotomatiki unapofungua Spotify au unapofungua extension",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Ongeza alama za kahawa kila wimbo kwenye mkondo wako ujao kwa usimamizi rahisi",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Ongeza alama za kuchakata nyara kando ya nyimbo katika maonyesho ya kikapu na orodha ya kikapu kwa ajili ya kuchuja kwa haraka",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Rekodi otomatiki kutoka kwa hitilafu za kucheza Spotify kwa kuendeleza orodha ya nyimbo yako ya mwisho",
    SETTINGS_SKIP_TRASHED_TRACKS: "Rukusisha Nyimbo Zilizoharibiwa",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Rukusisha otomatiki nyimbo zilizotupwa na kupata kipande kifuatacho kinachoruhusiwa wakati wa kucheza",
    SETTINGS_AUTO_CLEAN_QUEUE: "Ondoa Otomatiki Mlango",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Ondoa kiotomatiki nyimbo zilizotupwa kwenye safu yako ya Smart Shuffle",
    SETTINGS_REMOTE_CONTROL: "Kiwiko cha Umbizo",
    SETTINGS_REMOTE_TOGGLE: "Washa Mbadiliko ya Mbali",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Bonyeza mara mbili kucheza/kukataza kutoka kwa simu ili uweze kugeuza ukwepo wa mbali. Kukwisha kipande kinauthisha ugeuzi.",
    SETTINGS_REMOTE_SKIPPING: "Ulemavu wa mbali Umewezeshwa",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Unapowasha, kupitia kisasa kinafanya kazi hata unapowadilisha Spotify kutoka kifaa kingine (k.m., simu ya mkononi)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Ukomo wa mbali umewezeshwa",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Kupunguza mbali kumefutwa",
    MESSAGE_SONG_ADDED_REMOTE: "Wimbo umefukuzwa kwa mbali",
    SETTINGS_TRASH_VIA_LIKE: "Taka kupitia Kama",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Kama wimbo kutoka kigeni kwa kuchakata. Inatua kama wimbo na kuenda moja kwa moja kwenye kanda inayofuata.",
    SETTINGS_AI_DETECTION: "Onesha AI",
    SETTINGS_AI_DETECTION_ENABLED: "Onesha Wimbo wa AI",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Gundua nyimbo zilizotengenezwa kwa AI kwa kutumia mfumo wa SONICS na kuonyesha kitu cha kuonesha uwezekano. Pakua mfumo wa takriban 50MB mara ya kwanza unapotumia.",
    AI_ASSETS_DOWNLOADING: "Inapakia mfumo wa AI...",
    AI_ASSETS_READY: "Mfano wa AI unatayarishwa",
    AI_ASSETS_NOT_READY: "Mfumo wa AI hautapatikani",
    SETTINGS_TRASH_AI_SONGS: "Nyimbo za Trash AI",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Ondoa kiotomatiki nyimbo zilizotambuliwa kuwa zimeundwa na AI (uzito ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Futa vitambulisho vyote vya AI vilivyoohifadhiwa (nyimbo {{count}} zimehifadhiwa).",
    ACTION_CLEAR_AI_STORAGE: "Wazi",
    MESSAGE_AI_STORAGE_CLEARED: "Matokeo ya AI yamefutwa",
    AI_TIER_LIKELY_HUMAN: "Mtu wa Wakati",
    AI_TIER_PROBABLY_HUMAN: "Likely Human",
    AI_TIER_UNCERTAIN: "Haijathibitika",
    AI_TIER_PROBABLY_AI: "Likely AI",
    AI_TIER_LIKELY_AI: "AI inayoweza kutokea",
    ACTION_REMOVE_TRASHED: "Ondoa nyimbo zilizotupwa",
    CONFIRM_REMOVE_TRASHED: "Ondoa wimbo {{count}} uliopewa kwenye kisanduku cha kusaka kutoka kwenye orodha hii ya nyimbo? Hii haiwezi kurekebishwa.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Ondoa wimbo {{count}} uliopotoshwa kutoka kwenye orkestra",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Hakuna nyimbo zilizotupwa katika orodha hii ya nyimbo"
  };
});

// src/i18n/ta.json
var require_ta = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "குப்பைத் தொட்டி+",
    ACTION_THROW: "குப்பைத் தொட்டியில் போடுக",
    ACTION_UNTHROW: "குப்பைத் தொட்டியிலிருந்து நீக்கு",
    ACTION_CLEAR: "தெளிவான",
    ACTION_COPY: "நகலெடுக்கவும்",
    ACTION_EXPORT: "ஏற்றுமதி",
    ACTION_IMPORT: "இறக்குமதி",
    MESSAGE_COPIED: "கிளிப்போர்டுக்கு நகலெடுக்கப்பட்டது",
    MESSAGE_CLEARED: "நெடுவரிசை வெற்றிகரமாக அழிக்கப்பட்டது!",
    MESSAGE_SONG_ADDED: "பாடல் குப்பைத் தொட்டியில் சேர்க்கப்பட்டது",
    MESSAGE_SONG_REMOVED: "பாடல் குப்பைத் தொட்டியிலிருந்து நீக்கப்பட்டது",
    MESSAGE_ARTIST_ADDED: "கலைஞர் குப்பைத் தொட்டியில் சேர்க்கப்பட்டார்",
    MESSAGE_ARTIST_REMOVED: "கலைஞர் குப்பைத் தொட்டியிலிருந்து நீக்கப்பட்டார்",
    BACKUP_SAVE_SUCCESS: "காப்பு நகல் வெற்றிகரமாகச் சேமிக்கப்பட்டது.",
    BACKUP_SAVE_FAILED: "காப்பு நகலைச் சேமிக்க முடியவில்லை, குப்பைத் தொட்டியின் உள்ளடக்கங்களை கிளிப்போர்டுக்கு நகலெடுத்து கையேடாக ஒரு காப்பு நகலை உருவாக்க முயற்சிக்கவும்.",
    BACKUP_RESTORE_SUCCESS: "காப்பு நிலை வெற்றிகரமாக மீட்டெடுக்கப்பட்டது.",
    BACKUP_FILE_READ_FAILED: "கோப்பைப் படிக்க முடியவில்லை, தயவுசெய்து அது செல்லுபடியான JSON கோப்பா என்பதை உறுதிப்படுத்திக் கொள்ளுங்கள்.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "குப்பைத் தொட்டி+ அமைப்புகள்",
    SETTINGS_OPTIONS: "விருப்பங்கள்",
    SETTINGS_FEATURES: "அம்சங்கள்",
    SETTINGS_STORAGE: "சேமிப்பு",
    SETTINGS_ENABLED: "செயல்படுத்தப்பட்டது",
    SETTINGS_SHOW_WIDGET: "விட்ஜெட் ஐகானைக் காட்டு",
    SETTINGS_AUTOPLAY: "தொடக்கத்தில் தானியங்கி இயக்கம்",
    SETTINGS_QUEUE_TRASHBIN: "கியூ குப்பைத் தொட்டியை இயக்கு",
    SETTINGS_TRACKLIST_TRASHBIN: "டிராக்லிஸ்ட் குப்பைத் தொட்டியை இயக்குக",
    SETTINGS_PLAYLIST_MONITOR: "பிளேலிஸ்ட் கண்காணிப்பு",
    ITEMS_TITLE: "குப்பைத் தொட்டி+ பொருட்கள்",
    ITEMS_EMPTY_SONGS: "<strong>நீக்கப்பட்ட பாடல்கள் இல்லை!</strong><br/>நீங்கள் குப்பைத் தொட்டியில் சேர்த்த பாடல்கள் இங்கே தோன்றும்.",
    ITEMS_EMPTY_ARTISTS: "<strong>நீக்கப்பட்ட கலைஞர்கள் இல்லை!</strong><br/>நீங்கள் குப்பைத் தொட்டியில் சேர்த்த கலைஞர்கள் இங்கே தோன்றும்.",
    ITEMS_TAB_SONGS: "பாடல்கள்",
    ITEMS_TAB_ARTISTS: "கலைஞர்கள்",
    ITEMS_LOADED_COUNT: "{{total}} இல் {{loaded}} {{type}} ஏற்றப்பட்டது",
    ITEMS_SEARCH_PLACEHOLDER: "பெயர், கலைஞர் அல்லது URI ஆல் தேடு...",
    DESCRIPTION_COPY: "குப்பைத் தொட்டியில் உள்ள அனைத்து உருப்படிகளையும் கிளிப்போர்டுக்கு நகலெடுக்கவும்.",
    DESCRIPTION_EXPORT: "குப்பைத் தொட்டியில் உள்ள அனைத்து பொருட்களையும் .json கோப்பில் சேமிக்கவும்.",
    DESCRIPTION_IMPORT: "குப்பைத் தொட்டியில் உள்ள அனைத்து உருப்படிகளையும் .json கோப்பு மூலம் மேலெழுதுக.",
    DESCRIPTION_CLEAR: "அழிக்கப்பட்டவை குப்பைத் தொட்டியிலிருந்து அனைத்து பொருட்களையும் நீக்கு (மீட்டெடுக்க முடியாது).",
    ITEMS_EMPTY_SONGS_TITLE: "நீக்கப்பட்ட பாடல்கள் ஏதும் இல்லை!",
    ITEMS_EMPTY_ARTISTS_TITLE: "நொறுக்கப்பட்ட கலைஞர்கள் இல்லை!",
    DESCRIPTION_SETTINGS_ENABLED: "அனைத்து குப்பைத் தொட்டி+ செயல்பாடுகளையும் இயக்க அல்லது முடக்க முதன்மை மாற்றி",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "தற்போது இசைக்கப்படும் தடத்திற்கு அருகில் இசைப்பு பட்டியில் குப்பை ஐகானை காட்டி, விரைவான அணுகலை வழங்குங்கள்",
    DESCRIPTION_SETTINGS_AUTOPLAY: "ஸ்பாடிபை திறக்கும் போது அல்லது நீட்டிப்பு ஏற்றப்படும் போது தானியங்கியாக இசையை இயக்கவும்",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "உங்கள் அடுத்தடுத்த வரிசையில் உள்ள ஒவ்வொரு பாடலுக்கும் அருகில் குப்பைத் தொட்டி ஐகான்களைச் சேர்த்து, எளிதாக நிர்வகிக்கவும்",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "ஆல்பம் மற்றும் பிளேலிஸ்ட் காட்சிகளில் பாடல்களுக்கு அருகில் குப்பைத் தொட்டி ஐகான்களைச் சேர்த்து, விரைவான வடிகட்டலுக்காக அணுகவும்",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "ஸ்பாடிபை மீண்டும் இயக்குவதில் ஏற்படும் குறைபாடுகளிலிருந்து உங்கள் கடைசி பிளேலிஸ்ட்டை மீண்டும் தொடங்குவதன் மூலம் தானியங்கி மீட்பு",
    SETTINGS_SKIP_TRASHED_TRACKS: "நீக்கப்பட்ட தடங்களைத் தவிர்",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "அழிக்கப்பட்ட பாடல்களை தானியங்கியாக தவிர்த்து, இசைப்பதின்போது அடுத்து இசைக்க அனுமதிக்கப்பட்ட தடத்தை கண்டறியுங்கள்",
    SETTINGS_AUTO_CLEAN_QUEUE: "ஆட்டோ கிளீன் கியூ",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "உங்கள் ஸ்மார்ட் ஷஃபுல் குவியலிலிருந்து தவறான பாடல்களை தானியங்கியாக நீக்கவும்",
    SETTINGS_REMOTE_CONTROL: "தொலை கட்டுப்பாடு",
    SETTINGS_REMOTE_TOGGLE: "தொலை நிலை மாற்றுதலை இயக்கு",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "மொபைலிலிருந்து இருமுறை தட்டி இயக்கு/நிறுத்து என அழுத்தி தொலைதூர தாவலை இயல்பாக்க/அணைக்க மாற்றவும். ஒரு தடத்தைத் தாவுவது இம்மாற்றத்தை உறுதிப்படுத்தும்.",
    SETTINGS_REMOTE_SKIPPING: "தொலைநிலை தவிர்ப்பு செயலில் உள்ளது",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "இது இயக்கப்பட்டால், மற்றொரு சாதனத்திலிருந்து (எ.கா., மொபைல்) ஸ்பாடிஃபையைக் கட்டுப்படுத்தும்போது கூட குப்பைத் தூர தாண்டுதல் வேலை செய்யும்",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "தொலைநிலை தவிர்ப்பு இயக்கப்பட்டுள்ளது",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "தொலைநிலை தவிர்ப்பு முடக்கப்பட்டது",
    MESSAGE_SONG_ADDED_REMOTE: "பாடல் தொலைதூரத்திலிருந்தே அழிக்கப்பட்டது",
    SETTINGS_TRASH_VIA_LIKE: "லைக் மூலம் குப்பை",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "மொபைலிலிருந்து தூக்கி எறியப்படும் பாடலைப் போல. தானாகவே பிடிக்கவில்லை எனக் குறித்து அடுத்த பாடலுக்கு மாறும்.",
    SETTINGS_AI_DETECTION: "AI கண்டறிதல்",
    SETTINGS_AI_DETECTION_ENABLED: "AI பாடல் கண்டறிதல்",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "SONICS மாதிரியைப் பயன்படுத்தி ஏஐ உருவாக்கிய பாடல்களைக் கண்டறிந்து, நிகழ்தகவு குறியீட்டைக் காட்டவும். முதல் முறை இயக்கும்போது ~50MB மாதிரியை பதிவிறக்கம் செய்யும்.",
    AI_ASSETS_DOWNLOADING: "AI மாதிரியை பதிவிறக்கம் செய்கிறது...",
    AI_ASSETS_READY: "AI மாதிரி தயாராக உள்ளது",
    AI_ASSETS_NOT_READY: "AI மாதிரி கிடைக்கவில்லை",
    SETTINGS_TRASH_AI_SONGS: "குப்பை எய் பாடல்கள்",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "AI உருவாக்கியதாகக் கண்டறியப்பட்ட (நிகழ்தகவு ≥ 80%) பாடல்களை தானியங்கியாக குப்பையில் போடுங்கள்",
    DESCRIPTION_CLEAR_AI_STORAGE: "சேமிக்கப்பட்ட அனைத்து AI வகைப்பாட்டு முடிவுகளையும் அழி ({{count}} பாடல்கள் சேமிக்கப்பட்டுள்ளன).",
    ACTION_CLEAR_AI_STORAGE: "தெளிவான",
    MESSAGE_AI_STORAGE_CLEARED: "AI முடிவுகள் தெளிவாக்கப்பட்டன",
    AI_TIER_LIKELY_HUMAN: "உண்மையான மனிதர்",
    AI_TIER_PROBABLY_HUMAN: "ஒருவேளை மனிதன்",
    AI_TIER_UNCERTAIN: "உறுதியற்ற",
    AI_TIER_PROBABLY_AI: "ஒருவேளை செயற்கை நுண்ணறிவு",
    AI_TIER_LIKELY_AI: "சாத்தியமான செயற்கை நுண்ணறிவு",
    ACTION_REMOVE_TRASHED: "நீக்கப்பட்ட பாடல்களை நீக்கு",
    CONFIRM_REMOVE_TRASHED: "இந்த பிளேலிஸ்டிலிருந்து {{count}} நீக்கப்பட்ட பாடல்களை நீக்கவா? இதை மீட்டெடுக்க முடியாது.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "குழுப்பட்டியலிலிருந்து {{count}} நீக்கப்பட்ட பாடல்கள் நீக்கப்பட்டன",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "இந்த பிளேலிஸ்டில் நீக்கப்பட்ட பாடல்கள் எதுவும் காணப்படவில்லை"
  };
});

// src/i18n/te.json
var require_te = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "చెత్తబుట్ట+",
    ACTION_THROW: "చెత్తబుట్టలో ఉంచండి",
    ACTION_UNTHROW: "చెత్తబుట్ట నుండి తొలగించు",
    ACTION_CLEAR: "స్పష్టంగా",
    ACTION_COPY: "కాపీ",
    ACTION_EXPORT: "ఎగుమతి",
    ACTION_IMPORT: "దిగుమతి",
    MESSAGE_COPIED: "క్లిప్‌బోర్డుకు కాపీ చేయబడింది",
    MESSAGE_CLEARED: "ట్రాష్ బిన్ విజయవంతంగా క్లియర్ చేయబడింది!",
    MESSAGE_SONG_ADDED: "పాట చెత్తబుట్టలో జోడించబడింది",
    MESSAGE_SONG_REMOVED: "పాటను చెత్తబుట్ట నుండి తీసివేయడం జరిగింది",
    MESSAGE_ARTIST_ADDED: "చెత్తబుట్టలో కళాకారుడు జోడించబడ్డాడు",
    MESSAGE_ARTIST_REMOVED: "చెత్తబుట్ట నుండి ఆర్టిస్ట్ తొలగించబడింది",
    BACKUP_SAVE_SUCCESS: "బ్యాకప్ విజయవంతంగా సేవ్ చేయబడింది.",
    BACKUP_SAVE_FAILED: "బ్యాకప్ ను సేవ్ చేయడం విఫలమైంది, ట్రాష్ బిన్ కంటెంట్స్ ను క్లిప్ బోర్డుకు కాపీ చేసి మరియు బ్యాకప్ ను మ్యాన్యువల్ గా సృష్టించడానికి ప్రయత్నించండి.",
    BACKUP_RESTORE_SUCCESS: "బ్యాకప్ విజయవంతంగా పునరుద్ధరించబడింది.",
    BACKUP_FILE_READ_FAILED: "ఫైల్‌ను చదవడం విఫలమైంది, దయచేసి అది చెల్లుబాటయ్యే JSON ఫైల్ అయ్యేలా నిర్ధారించుకోండి.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "ట్రాష్‌బిన్+ సెట్టింగ్స్",
    SETTINGS_OPTIONS: "ఎంపికలు",
    SETTINGS_FEATURES: "లక్షణాలు",
    SETTINGS_STORAGE: "స్టోరేజ్",
    SETTINGS_ENABLED: "సక్రియం చేయబడింది",
    SETTINGS_SHOW_WIDGET: "విడ్జెట్ ఐకాన్‌ను చూపించండి",
    SETTINGS_AUTOPLAY: "ప్రారంభంలో ఆటోప్లే",
    SETTINGS_QUEUE_TRASHBIN: "క్యూ ట్రాష్‌బిన్‌ని సక్రియం చేయండి",
    SETTINGS_TRACKLIST_TRASHBIN: "ట్రాక్ లిస్ట్ చెత్తబుట్టను సక్రియం చేయండి",
    SETTINGS_PLAYLIST_MONITOR: "ప్లేలిస్ట్ మానిటర్",
    ITEMS_TITLE: "ట్రాష్‌బిన్+ అంశాలు",
    ITEMS_EMPTY_SONGS: "<strong>ఏ పాడలేదు పాటలు లేవు!</strong><br/>మీరు చెత్తబుట్టలో చేర్చిన పాటలు ఇక్కడ కనిపిస్తాయి.",
    ITEMS_EMPTY_ARTISTS: "<strong>ఏ కార్టు చేసిన కళాకారులు లేరు!</strong><br/>మీరు చెత్తబుట్టలో చేర్చిన కళాకారులు ఇక్కడ కనిపిస్తారు.",
    ITEMS_TAB_SONGS: "పాటలు",
    ITEMS_TAB_ARTISTS: "కళాకారులు",
    ITEMS_LOADED_COUNT: "{{total}}లోని {{loaded}} {{type}} లోడ్ చేయబడింది",
    ITEMS_SEARCH_PLACEHOLDER: "పేరు, కళాకారుడు లేదా URI ద్వారా వెతకండి...",
    DESCRIPTION_COPY: "ట్రాష్ బిన్ లోని అన్ని అంశాలను క్లిప్ బోర్డుకు కాపీ చేయండి.",
    DESCRIPTION_EXPORT: "పారవేసిన అన్ని అంశాలను .json ఫైల్‌లో సేవ్ చేయండి.",
    DESCRIPTION_IMPORT: "ట్రాష్ బిన్ లోని అన్ని అంశాలను .json ఫైల్ ద్వారా ఓవర్ రైట్ చేయండి.",
    DESCRIPTION_CLEAR: "పాతపళ్ళెం నుండి అన్ని అంశాలను తొలగించండి (తిరిగి చేయలేరు).",
    ITEMS_EMPTY_SONGS_TITLE: "ఏ పాటలు పాడకూడదు!",
    ITEMS_EMPTY_ARTISTS_TITLE: "ఎవరినీ త్రోసిపుచ్చకండి!",
    DESCRIPTION_SETTINGS_ENABLED: "అన్ని ట్రాష్‌బిన్+ పనితీరును ప్రారంభించడానికి లేదా ఆపడానికి మాస్టర్ టాగుల్ చేయండి",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "ప్రస్తుతం ప్లే అవుతున్న ట్రాక్ పక్కన ప్లేబ్యాక్ బార్‌లో త్వరిత ప్రాప్యత కోసం చెత్త ఐకాన్‌ను చూపించండి",
    DESCRIPTION_SETTINGS_AUTOPLAY: "స్పాటిఫై తెరిచినప్పుడు లేదా ఎక్స్టెన్షన్ లోడ్ అయినప్పుడు స్వయంచాలకంగా సంగీతాన్ని ప్లే చేయడం ప్రారంభించండి",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "మీ త్వరలో వచ్చే క్యూలోని ప్రతి పాటకు సులభ నిర్వహణ కోసం ట్రాష్ ఐకాన్లను చేర్చండి",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "ఆల్బమ్ మరియు ప్లేలిస్ట్ వీక్షణలలో పాటల పక్కన త్వరిత ఫిల్టరింగ్ కోసం చెత్త ఐకాన్లను జోడించండి",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "మీ చివరి ప్లేలిస్ట్‌ను తిరిగి ప్రారంభించడం ద్వారా స్పాటిఫై ప్లేబ్యాక్ లోపాల నుండి స్వయంచాలకంగా కోలుకోండి",
    SETTINGS_SKIP_TRASHED_TRACKS: "త్రోసిపుచ్చిన ట్రాక్‌లను తప్పించుకోండి",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "ప్లేబ్యాక్ సమయంలో తొలగించబడిన పాటలను స్వయంచాలకంగా దాటి, తదుపరి అనుమతించబడిన ట్రాక్‌ను కనుగొనండి",
    SETTINGS_AUTO_CLEAN_QUEUE: "ఆటో క్లీన్ క్యూ",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "మీ స్మార్ట్ షఫుల్ క్యూ నుండి పాడిన పాటలను స్వయంచాలకంగా తొలగించండి",
    SETTINGS_REMOTE_CONTROL: "రిమోట్ కంట్రోల్",
    SETTINGS_REMOTE_TOGGLE: "రిమోట్ టాగుల్ ని సక్రియం చేయండి",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "మొబైల్ నుండి ప్లే/పాజ్ కు డబుల్-ట్యాప్ చేసి రిమోట్ స్కిప్పింగ్ ఆన్/ఆఫ్ చేయండి. ట్రాక్ స్కిప్ టాగుల్ ను నిర్ధారిస్తుంది.",
    SETTINGS_REMOTE_SKIPPING: "రిమోట్ స్కిప్పింగ్ చురుకుగా ఉంది",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "సక్రియం చేసినప్పుడు, మరొక పరికరం (ఉదా: మొబైల్) నుండి స్పాటిఫైని నియంత్రించినప్పటికీ ట్రాష్-స్కిప్పింగ్ పనిచేస్తుంది",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "దూరంగా ఉండి తప్పించుకోవడం సక్రియం చేయబడింది",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "రిమోట్ స్కిప్పింగ్ నిరోధించబడింది",
    MESSAGE_SONG_ADDED_REMOTE: "రిమోట్ ద్వారా పాటను పాడాడు",
    SETTINGS_TRASH_VIA_LIKE: "లైక్ ద్వారా చెత్త",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "మొబైల్ నుండి ట్రాష్ కు ఒక పాట లాగా. స్వయంచాలకంగా డిస్లైక్ చేసి తదుపరి ట్రాక్ కు దూకుతుంది.",
    SETTINGS_AI_DETECTION: "AI డిటెక్షన్",
    SETTINGS_AI_DETECTION_ENABLED: "AI పాట గుర్తింపు",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "SONICS మోడల్‌ను ఉపయోగించి ఎఐ ద్వారా సృష్టించబడిన పాటలను గుర్తించండి మరియు సంభావ్యత సూచికను చూపండి. మొదటిసారి ప్రారంభించినప్పుడు ~50MB మోడల్‌ను డౌన్‌లోడ్ చేస్తుంది.",
    AI_ASSETS_DOWNLOADING: "AI మోడల్‌ను డౌన్‌లోడ్ చేస్తోంది...",
    AI_ASSETS_READY: "ఎఐ మోడల్ సిద్ధంగా ఉంది",
    AI_ASSETS_NOT_READY: "ఎఐ మోడల్ అందుబాటులో లేదు",
    SETTINGS_TRASH_AI_SONGS: "ట్రాష్ ఐ పాటలు",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "AI ద్వారా ఉత్పత్తి చేయబడినట్లు గుర్తించబడిన పాటలను (సంభావ్యత ≥ 80%) స్వయంచాలకంగా పారవేయండి",
    DESCRIPTION_CLEAR_AI_STORAGE: "అన్ని నిల్వ చేయబడిన AI వర్గీకరణ ఫలితాలను తొలగించండి ({{count}} పాటలు నిల్వ చేయబడ్డాయి).",
    ACTION_CLEAR_AI_STORAGE: "స్పష్టంగా",
    MESSAGE_AI_STORAGE_CLEARED: "AI ఫలితాలు క్లియర్ అయ్యాయి",
    AI_TIER_LIKELY_HUMAN: "సంభావ్య మానవుడు",
    AI_TIER_PROBABLY_HUMAN: "బహుశా మానవుడు",
    AI_TIER_UNCERTAIN: "అనిశ్చితం",
    AI_TIER_PROBABLY_AI: "సంభవతు AI",
    AI_TIER_LIKELY_AI: "సంభావ్య కృత్రిమ మేధస్సు",
    ACTION_REMOVE_TRASHED: "పాడిన పాటలను తొలగించు",
    CONFIRM_REMOVE_TRASHED: "ఈ ప్లే జాబితా నుండి {{count}} పాట(ల)ను తొలగించాలా? ఇది తిరిగి చేయలేరు.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "ప్లే జాబితా నుండి {{count}} పాట(లు) పారవేయబడింది(లు)",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "ఈ ప్లేలిస్ట్ లో ఏవీ పాడుచేసిన పాటలు కనుగొనబడలేదు"
  };
});

// src/i18n/th.json
var require_th = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "ถังขยะ+",
    ACTION_THROW: "วางในถังขยะ",
    ACTION_UNTHROW: "ลบออกจากถังขยะ",
    ACTION_CLEAR: "ชัดเจน",
    ACTION_COPY: "คัดลอก",
    ACTION_EXPORT: "ส่งออก",
    ACTION_IMPORT: "นำเข้า",
    MESSAGE_COPIED: "คัดลอกไปยังคลิปบอร์ดแล้ว",
    MESSAGE_CLEARED: "ล้างถังขยะเรียบร้อยแล้ว!",
    MESSAGE_SONG_ADDED: "เพลงถูกเพิ่มไปยังถังขยะ",
    MESSAGE_SONG_REMOVED: "ลบเพลงออกจากถังขยะแล้ว",
    MESSAGE_ARTIST_ADDED: "ศิลปินถูกลบลงถังขยะ",
    MESSAGE_ARTIST_REMOVED: "ศิลปินถูกลบออกจากถังขยะ",
    BACKUP_SAVE_SUCCESS: "สำรองข้อมูลเรียบร้อยแล้ว",
    BACKUP_SAVE_FAILED: "ไม่สามารถบันทึกการสำรองข้อมูลได้ โปรดลองคัดลอกเนื้อหาในถังขยะไปยังคลิปบอร์ดและสร้างการสำรองข้อมูลด้วยตนเอง",
    BACKUP_RESTORE_SUCCESS: "กู้คืนข้อมูลสำรองเรียบร้อยแล้ว",
    BACKUP_FILE_READ_FAILED: "ไม่สามารถอ่านไฟล์ได้ กรุณาตรวจสอบว่าเป็นไฟล์ JSON ที่ถูกต้อง",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "การตั้งค่า Trashbin+",
    SETTINGS_OPTIONS: "ตัวเลือก",
    SETTINGS_FEATURES: "คุณสมบัติ",
    SETTINGS_STORAGE: "ที่จัดเก็บ",
    SETTINGS_ENABLED: "เปิดใช้งาน",
    SETTINGS_SHOW_WIDGET: "แสดงไอคอนวิดเจ็ต",
    SETTINGS_AUTOPLAY: "เปิดใช้งานการเล่นอัตโนมัติเมื่อเริ่มต้น",
    SETTINGS_QUEUE_TRASHBIN: "เปิดใช้งานถังขยะคิว",
    SETTINGS_TRACKLIST_TRASHBIN: "เปิดใช้งานถังขยะรายการแทร็ก",
    SETTINGS_PLAYLIST_MONITOR: "ตัวตรวจสอบเพลย์ลิสต์",
    ITEMS_TITLE: "รายการถังขยะ+",
    ITEMS_EMPTY_SONGS: "<strong>ไม่มีเพลงที่ถังขยะ!</strong><br/>เพลงที่คุณเพิ่มไปยังถังขยะจะแสดงที่นี่",
    ITEMS_EMPTY_ARTISTS: "<strong>ไม่มีศิลปินที่ถูกลบ!</strong><br/>ศิลปินที่คุณเพิ่มไปยังถังขยะจะแสดงที่นี่",
    ITEMS_TAB_SONGS: "เพลง",
    ITEMS_TAB_ARTISTS: "ศิลปิน",
    ITEMS_LOADED_COUNT: "โหลดแล้ว {{loaded}} จากทั้งหมด {{total}} {{type}}",
    ITEMS_SEARCH_PLACEHOLDER: "ค้นหาตามชื่อ ศิลปิน หรือ URI...",
    DESCRIPTION_COPY: "คัดลอกรายการทั้งหมดในถังขยะไปยังคลิปบอร์ด",
    DESCRIPTION_EXPORT: "บันทึกรายการทั้งหมดในถังขยะเป็นไฟล์ .json",
    DESCRIPTION_IMPORT: "เขียนทับรายการทั้งหมดในถังขยะผ่านไฟล์ .json",
    DESCRIPTION_CLEAR: "ลบทุกรายการออกจากถังขยะ (ไม่สามารถย้อนกลับได้)",
    ITEMS_EMPTY_SONGS_TITLE: "ไม่มีเพลงที่ถูกลบ!",
    ITEMS_EMPTY_ARTISTS_TITLE: "ไม่มีศิลปินที่แย่!",
    DESCRIPTION_SETTINGS_ENABLED: "ตัวควบคุมหลักเพื่อเปิดหรือปิดการใช้งานฟังก์ชันทั้งหมดของ Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "แสดงไอคอนถังขยะในแถบการเล่น ถัดจากแทร็กที่กำลังเล่นอยู่ เพื่อเข้าถึงได้อย่างรวดเร็ว",
    DESCRIPTION_SETTINGS_AUTOPLAY: "เริ่มเล่นเพลงโดยอัตโนมัติเมื่อเปิด Spotify หรือเมื่อส่วนขยายโหลดเสร็จ",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "เพิ่มไอคอนถังขยะถัดจากแต่ละเพลงในคิวที่กำลังจะเล่นของคุณเพื่อจัดการได้ง่าย",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "เพิ่มไอคอนถังขยะถัดจากเพลงในมุมมองอัลบั้มและเพลย์ลิสต์เพื่อการกรองอย่างรวดเร็ว",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "กู้คืนอัตโนมัติจากปัญหาการเล่นเพลงบน Spotify โดยการกลับมาเล่นเพลย์ลิสต์ล่าสุดของคุณอีกครั้ง",
    SETTINGS_SKIP_TRASHED_TRACKS: "ข้ามแทร็กที่ถูกลบแล้ว",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "ข้ามเพลงที่ถูกลบโดยอัตโนมัติ และค้นหาแทร็กถัดไปที่อนุญาตระหว่างการเล่น",
    SETTINGS_AUTO_CLEAN_QUEUE: "คิวทำความสะอาดอัตโนมัติ",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "ลบเพลงที่ถังขยะออกจากคิวสุ่มอัจฉริยะของคุณโดยอัตโนมัติ",
    SETTINGS_REMOTE_CONTROL: "รีโมทคอนโทรล",
    SETTINGS_REMOTE_TOGGLE: "เปิดใช้งานการสลับระยะไกล",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "แตะสองครั้งที่ปุ่มเล่น/หยุดชั่วคราวจากมือถือเพื่อเปิดหรือปิดการข้ามแทร็กจากระยะไกล การข้ามแทร็กหนึ่งครั้งจะยืนยันการเปลี่ยนสถานะนี้",
    SETTINGS_REMOTE_SKIPPING: "การข้ามระยะไกลใช้งานอยู่",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "เมื่อเปิดใช้งาน ฟีเจอร์ข้ามถังขยะจะทำงานแม้คุณกำลังควบคุม Spotify จากอุปกรณ์อื่น (เช่น มือถือ)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "เปิดใช้งานการข้ามระยะไกลแล้ว",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "ปิดการข้ามระยะไกลแล้ว",
    MESSAGE_SONG_ADDED_REMOTE: "เพลงถูกลบผ่านระยะไกล",
    SETTINGS_TRASH_VIA_LIKE: "ขยะผ่านไลค์",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "เหมือนเพลงจากมือถือไปยังถังขยะ โดยอัตโนมัติจะเลิกถูกใจและข้ามไปยังแทร็กถัดไป",
    SETTINGS_AI_DETECTION: "การตรวจจับปัญญาประดิษฐ์",
    SETTINGS_AI_DETECTION_ENABLED: "การตรวจจับเพลงด้วยปัญญาประดิษฐ์",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "ตรวจจับเพลงที่สร้างด้วยปัญญาประดิษฐ์โดยใช้โมเดล SONICS และแสดงตัวชี้วัดความน่าจะเป็น ดาวน์โหลดโมเดลขนาดประมาณ 50MB เมื่อเปิดใช้งานครั้งแรก",
    AI_ASSETS_DOWNLOADING: "กำลังดาวน์โหลดโมเดลปัญญาประดิษฐ์...",
    AI_ASSETS_READY: "โมเดลปัญญาประดิษฐ์พร้อมใช้งาน",
    AI_ASSETS_NOT_READY: "ไม่มีโมเดล AI ใช้งานได้",
    SETTINGS_TRASH_AI_SONGS: "เพลง AI ขยะ",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "ลบเพลงที่ตรวจพบว่าสร้างโดยปัญญาประดิษฐ์โดยอัตโนมัติ (ความน่าจะเป็น ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "ล้างผลการจัดประเภท AI ทั้งหมดที่จัดเก็บไว้ (มีเพลงจำนวน {{count}} เพลงที่จัดเก็บไว้)",
    ACTION_CLEAR_AI_STORAGE: "ชัดเจน",
    MESSAGE_AI_STORAGE_CLEARED: "ผลลัพธ์ของ AI ได้รับการยืนยันแล้ว",
    AI_TIER_LIKELY_HUMAN: "มนุษย์อย่างมีแนวโน้ม",
    AI_TIER_PROBABLY_HUMAN: "น่าจะเป็นมนุษย์",
    AI_TIER_UNCERTAIN: "ไม่แน่นอน",
    AI_TIER_PROBABLY_AI: "น่าจะเป็นปัญญาประดิษฐ์",
    AI_TIER_LIKELY_AI: "ปัญญาประดิษฐ์ที่เป็นไปได้",
    ACTION_REMOVE_TRASHED: "ลบเพลงที่ถูกลบแล้วออกจากถังขยะ",
    CONFIRM_REMOVE_TRASHED: "ต้องการลบเพลงที่ถังขยะจำนวน {{count}} เพลง ออกจากเพลย์ลิสต์นี้หรือไม่? การกระทำนี้ไม่สามารถย้อนกลับได้",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "ลบเพลงที่ถังขยะจำนวน {{count}} เพลงออกจากรายการเล่นแล้ว",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "ไม่พบเพลงที่ถูกลบในเพลย์ลิสต์นี้"
  };
});

// src/i18n/tr.json
var require_tr = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Çöp Kutusu+",
    ACTION_THROW: "Çöp kutusuna yerleştirin",
    ACTION_UNTHROW: "Çöp Kutusundan Kaldır",
    ACTION_CLEAR: "Açık",
    ACTION_COPY: "Kopyala",
    ACTION_EXPORT: "Dışa aktar",
    ACTION_IMPORT: "İçe aktar",
    MESSAGE_COPIED: "Panoya kopyalandı",
    MESSAGE_CLEARED: "Çöp kutusu başarıyla temizlendi!",
    MESSAGE_SONG_ADDED: "Şarkı çöp kutusuna eklendi",
    MESSAGE_SONG_REMOVED: "Şarkı çöp kutusundan kaldırıldı",
    MESSAGE_ARTIST_ADDED: "Sanatçı çöp kutusuna eklendi",
    MESSAGE_ARTIST_REMOVED: "Sanatçı çöp kutusundan kaldırıldı",
    BACKUP_SAVE_SUCCESS: "Yedek başarıyla kaydedildi.",
    BACKUP_SAVE_FAILED: "Yedek kaydedilemedi, çöp kutusu içeriğini panoya kopyalayıp yedeği elle oluşturmayı deneyin.",
    BACKUP_RESTORE_SUCCESS: "Yedek başarıyla geri yüklendi.",
    BACKUP_FILE_READ_FAILED: "Dosya okunamadı, lütfen geçerli bir JSON dosyası olduğundan emin olun.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Çöp Kutusu+ Ayarları",
    SETTINGS_OPTIONS: "Seçenekler",
    SETTINGS_FEATURES: "Özellikler",
    SETTINGS_STORAGE: "Depolama",
    SETTINGS_ENABLED: "Etkinleştirildi",
    SETTINGS_SHOW_WIDGET: "Widget Simgesini Göster",
    SETTINGS_AUTOPLAY: "Başlangıçta Otomatik Oynatma",
    SETTINGS_QUEUE_TRASHBIN: "Kuyruk Çöp Kutusunu Etkinleştir",
    SETTINGS_TRACKLIST_TRASHBIN: "Parça Listesi Çöp Kutusunu Etkinleştir",
    SETTINGS_PLAYLIST_MONITOR: "Oynatma Listesi İzleyicisi",
    ITEMS_TITLE: "Çöp Kutusu+ Öğeleri",
    ITEMS_EMPTY_SONGS: "<strong>Çöpe atılmış şarkı yok!</strong><br/>Çöp kutusuna eklediğiniz şarkılar burada görünecek.",
    ITEMS_EMPTY_ARTISTS: "<strong>Çöpe atılmış sanatçı yok!</strong><br/>Çöp kutusuna eklediğiniz sanatçılar burada görünecektir.",
    ITEMS_TAB_SONGS: "Şarkılar",
    ITEMS_TAB_ARTISTS: "Sanatçılar",
    ITEMS_LOADED_COUNT: "{{total}} öğeden {{loaded}} {{type}} yüklendi",
    ITEMS_SEARCH_PLACEHOLDER: "Ada, sanatçıya veya URI'ye göre ara...",
    DESCRIPTION_COPY: "Çöp kutusundaki tüm öğeleri panoya kopyala.",
    DESCRIPTION_EXPORT: "Çöp kutusundaki tüm öğeleri bir .json dosyasına kaydedin.",
    DESCRIPTION_IMPORT: "Çöp kutusundaki tüm öğeleri .json dosyası ile değiştirin.",
    DESCRIPTION_CLEAR: "Çöp kutusundaki tüm öğeleri silin (geri alınamaz).",
    ITEMS_EMPTY_SONGS_TITLE: "Hiçbir şarkı çöpe atılmadı!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Hiçbir sanatçıyı çöpe atmayın!",
    DESCRIPTION_SETTINGS_ENABLED: "Tüm Çöp Kutusu+ işlevselliğini etkinleştirmek veya devre dışı bırakmak için ana anahtar",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Çabuk erişim için çalan parça yanında oynatma çubuğunda bir çöp ikonu görüntüleyin",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Spotify açıldığında veya eklenti yüklendiğinde otomatik olarak müzik çalmaya başlayın",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Sıradaki çalma listesindeki her şarkıya kolay yönetim için çöp ikonları ekleyin",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Albüm ve çalma listesi görünümlerinde hızlı filtreleme için şarkıların yanına çöp ikonları ekleyin",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Spotify oynatma hatalarından son çalan listenizi devam ettirerek otomatik olarak kurtarın",
    SETTINGS_SKIP_TRASHED_TRACKS: "Çöpe Atılan Parçaları Atla",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Çöpe atılan şarkıları otomatik olarak atlayarak çalma sırasında izin verilen bir sonraki parçaya geçin",
    SETTINGS_AUTO_CLEAN_QUEUE: "Otomatik Temizleme Sırası",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Çöpe atılmış şarkıları akıllı karışık çalma listenizden otomatik olarak kaldırın",
    SETTINGS_REMOTE_CONTROL: "Uzaktan Kumanda",
    SETTINGS_REMOTE_TOGGLE: "Uzaktan Geçişi Etkinleştir",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Mobil cihazdan oynat/duraklat düğmesine iki kez dokunarak uzaktan atlama özelliğini aç/kapat. Bir parça atlaması, geçişin onaylandığını gösterir.",
    SETTINGS_REMOTE_SKIPPING: "Uzaktan Atlama Etkin",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Etkinleştirildiğinde çöp atlaması, Spotify'ı başka bir cihazdan (örneğin mobil cihaz) kontrol ederken bile çalışır",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Uzaktan atlama etkinleştirildi",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Uzaktan atlama devre dışı",
    MESSAGE_SONG_ADDED_REMOTE: "Şarkı uzaktan yok edildi",
    SETTINGS_TRASH_VIA_LIKE: "Like üzerinden çöp",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Cihazdan çöp kutusuna bir şarkı gibi. Otomatik olarak beğenisini kaldırır ve bir sonraki parçaya geçer.",
    SETTINGS_AI_DETECTION: "Yapay Zeka Tespiti",
    SETTINGS_AI_DETECTION_ENABLED: "Yapay Zeka Şarkı Tespiti",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "SONICS modelini kullanarak yapay zekâ tarafından oluşturulan şarkıları tespit edin ve bir olasılık göstergesi gösterin. İlk etkinleştirme sırasında yaklaşık 50 MB boyutunda model indirilir.",
    AI_ASSETS_DOWNLOADING: "Yapay zeka modeli indiriliyor...",
    AI_ASSETS_READY: "AI modeli hazır",
    AI_ASSETS_NOT_READY: "AI modeli mevcut değil",
    SETTINGS_TRASH_AI_SONGS: "Çöp AI Şarkıları",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Yapay zeka tarafından oluşturulduğu tespit edilen şarkıları otomatik olarak çöpe at (olasılık ≥ %80)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Tüm saklı AI sınıflandırma sonuçlarını temizle ({{count}} şarkı saklı).",
    ACTION_CLEAR_AI_STORAGE: "Açık",
    MESSAGE_AI_STORAGE_CLEARED: "AI sonuçları temizlendi",
    AI_TIER_LIKELY_HUMAN: "Muhtemelen İnsan",
    AI_TIER_PROBABLY_HUMAN: "Muhtemelen İnsan",
    AI_TIER_UNCERTAIN: "Belirsiz",
    AI_TIER_PROBABLY_AI: "Muhtemelen yapay zeka",
    AI_TIER_LIKELY_AI: "Muhtemel AI",
    ACTION_REMOVE_TRASHED: "Çöpe atılmış şarkıları kaldır",
    CONFIRM_REMOVE_TRASHED: "Bu çalma listesinden {{count}} silinmiş şarkıyı kaldırmak istiyor musunuz? Bu işlem geri alınamaz.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "{{count}} çöpe atılmış şarkı çalma listesinden kaldırıldı",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Bu çalma listesinde silinmiş şarkı bulunamadı"
  };
});

// src/i18n/uk.json
var require_uk = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Смітник+",
    ACTION_THROW: "Помістити в кошик для сміття",
    ACTION_UNTHROW: "Видалити з кошика",
    ACTION_CLEAR: "Чітко",
    ACTION_COPY: "Копіювати",
    ACTION_EXPORT: "Експорт",
    ACTION_IMPORT: "Імпорт",
    MESSAGE_COPIED: "Скопійовано в буфер обміну",
    MESSAGE_CLEARED: "Смітник успішно очищено!",
    MESSAGE_SONG_ADDED: "Пісню додано до кошика для сміття",
    MESSAGE_SONG_REMOVED: "Пісню видалено з кошика",
    MESSAGE_ARTIST_ADDED: "Художника додано до кошика для сміття",
    MESSAGE_ARTIST_REMOVED: "Художника видалено з кошика для сміття",
    BACKUP_SAVE_SUCCESS: "Резервну копію успішно збережено.",
    BACKUP_SAVE_FAILED: "Не вдалося зберегти резервну копію, спробуйте скопіювати вміст кошика у буфер обміну та створити резервну копію вручну.",
    BACKUP_RESTORE_SUCCESS: "Резервну копію успішно відновлено.",
    BACKUP_FILE_READ_FAILED: "Не вдалося прочитати файл, переконайтеся, що це дійсний файл JSON.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Налаштування кошика+",
    SETTINGS_OPTIONS: "Параметри",
    SETTINGS_FEATURES: "Особливості",
    SETTINGS_STORAGE: "Сховище",
    SETTINGS_ENABLED: "Увімкнено",
    SETTINGS_SHOW_WIDGET: "Показати значок віджета",
    SETTINGS_AUTOPLAY: "Автозапуск при старті",
    SETTINGS_QUEUE_TRASHBIN: "Увімкнути кошик для черги",
    SETTINGS_TRACKLIST_TRASHBIN: "Увімкнути кошик для треклістів",
    SETTINGS_PLAYLIST_MONITOR: "Монітор плейлистів",
    ITEMS_TITLE: "Предмети смітника+",
    ITEMS_EMPTY_SONGS: "<strong>Немає пісень у кошику!</strong><br/>Пісні, які ви додали до кошика, з’являться тут.",
    ITEMS_EMPTY_ARTISTS: "<strong>Немає вилучених виконавців!</strong><br/>Виконавці, яких ви додали у кошик для сміття, з’являться тут.",
    ITEMS_TAB_SONGS: "Пісні",
    ITEMS_TAB_ARTISTS: "Художники",
    ITEMS_LOADED_COUNT: "Завантажено {{loaded}} із {{total}} {{type}}",
    ITEMS_SEARCH_PLACEHOLDER: "Пошук за назвою, виконавцем або URI...",
    DESCRIPTION_COPY: "Копіювати всі елементи в кошику до буфера обміну.",
    DESCRIPTION_EXPORT: "Зберегти всі елементи в кошику у файл .json.",
    DESCRIPTION_IMPORT: "Перезаписати всі елементи в кошику за допомогою файлу .json.",
    DESCRIPTION_CLEAR: "Очистити кошик від усіх елементів (не можна скасувати).",
    ITEMS_EMPTY_SONGS_TITLE: "Жодної видаленої пісні!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Жодного зіпсованого мистецтва!",
    DESCRIPTION_SETTINGS_ENABLED: "Головний перемикач для ввімкнення або вимкнення всієї функціональності смітника+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Показувати значок смітника на панелі відтворення поруч із поточним треком для швидкого доступу",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Автоматичне відтворення музики при відкритті Spotify або завантаженні розширення",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Додайте значки сміття поруч із кожною піснею у вашому майбутньому черзі для простого управління",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Додати значки смітника біля пісень у перегляді альбомів і плейлистів для швидкого фільтрування",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Автоматичне відновлення після збоїв відтворення в Spotify шляхом відновлення останнього плейлиста",
    SETTINGS_SKIP_TRASHED_TRACKS: "Пропустити видалені треки",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Автоматично пропускати видалені пісні та знаходити наступний дозволений трек під час відтворення",
    SETTINGS_AUTO_CLEAN_QUEUE: "Черга автоматичного очищення",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Автоматично видаляти видалені пісні з черги розумного перемішування",
    SETTINGS_REMOTE_CONTROL: "Пульт дистанційного керування",
    SETTINGS_REMOTE_TOGGLE: "Увімкнути віддалене перемикання",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Двічі торкніться кнопки відтворення/паузи на мобільному пристрої, щоб увімкнути або вимкнути дистанційне пропускання. Пропускання треку підтверджує перемикання.",
    SETTINGS_REMOTE_SKIPPING: "Пропуск здалеку активний",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Коли ця функція увімкнена, пропуск треків працює навіть при керуванні Spotify з іншого пристрою (наприклад, мобільного телефону)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Увімкнено віддалене пропускання",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Пропуск на відстані вимкнено",
    MESSAGE_SONG_ADDED_REMOTE: "Пісню видалено на відстані",
    SETTINGS_TRASH_VIA_LIKE: "Сміття через Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Як пісня з мобільного до смітника. Автоматично відміняє вподобання та переходить до наступного треку.",
    SETTINGS_AI_DETECTION: "Виявлення штучного інтелекту",
    SETTINGS_AI_DETECTION_ENABLED: "Виявлення пісень штучним інтелектом",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Виявляйте пісні, створені штучним інтелектом, за допомогою моделі SONICS, та показуйте показник імовірності. Під час першого ввімкнення завантажується модель обсягом близько 50 МБ.",
    AI_ASSETS_DOWNLOADING: "Завантаження моделі ШІ...",
    AI_ASSETS_READY: "Модель штучного інтелекту готова",
    AI_ASSETS_NOT_READY: "Модель ШІ недоступна",
    SETTINGS_TRASH_AI_SONGS: "Пісні про сміття з ШІ",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Автоматично видаляти пісні, визначені як створені штучним інтелектом (ймовірність ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Очистити всі збережені результати класифікації ШІ (збережено {{count}} пісень).",
    ACTION_CLEAR_AI_STORAGE: "Чітко",
    MESSAGE_AI_STORAGE_CLEARED: "Результати ШІ очищено",
    AI_TIER_LIKELY_HUMAN: "Ймовірно людський",
    AI_TIER_PROBABLY_HUMAN: "Мабуть, людина",
    AI_TIER_UNCERTAIN: "Невизначений",
    AI_TIER_PROBABLY_AI: "Мабуть, штучний інтелект",
    AI_TIER_LIKELY_AI: "Ймовірно, штучний інтелект",
    ACTION_REMOVE_TRASHED: "Видалити пісні, що перебувають у кошику",
    CONFIRM_REMOVE_TRASHED: "Видалити {{count}} пісень(і) із кошика з цього плейлисту? Цю дію не можна буде скасувати.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Вилучено {{count}} пісень(і) із кошика з плейлисту",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "У цьому плейлисті не знайдено видалених пісень"
  };
});

// src/i18n/ur.json
var require_ur = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "کوڑا دان+",
    ACTION_THROW: "کوڑے دان میں ڈالیں",
    ACTION_UNTHROW: "کوڑے دان سے ہٹائیں",
    ACTION_CLEAR: "صاف",
    ACTION_COPY: "نقل کریں",
    ACTION_EXPORT: "برآمد کریں",
    ACTION_IMPORT: "درآمد",
    MESSAGE_COPIED: "کلپ بورڈ پر کاپی کر دیا گیا",
    MESSAGE_CLEARED: "کوڑا دان کامیابی سے خالی کر دیا گیا!",
    MESSAGE_SONG_ADDED: "گانا کو صفائی کے ڈبے میں شامل کر دیا گیا",
    MESSAGE_SONG_REMOVED: "گانا کو صاف کرنے والے ڈبے سے ہٹا دیا گیا",
    MESSAGE_ARTIST_ADDED: "آرٹسٹ کو کوڑے دان میں شامل کیا گیا",
    MESSAGE_ARTIST_REMOVED: "آرٹسٹ کو کچرے کے ڈبے سے ہٹا دیا گیا",
    BACKUP_SAVE_SUCCESS: "بیک اپ کامیابی سے محفوظ ہو گیا۔",
    BACKUP_SAVE_FAILED: "بیک اپ محفوظ کرنے میں ناکامی، کچر دان کے مواد کو کلپ بورڈ پر کاپی کرنے اور دستی طور پر بیک اپ بنانے کی کوشش کریں۔",
    BACKUP_RESTORE_SUCCESS: "بیک اپ کامیابی سے بحال کر دیا گیا۔",
    BACKUP_FILE_READ_FAILED: "فائل پڑھنے میں ناکام، براہ کرم یقینی بنائیں کہ یہ ایک درست JSON فائل ہے۔",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "ٹریش بین + سیٹنگز",
    SETTINGS_OPTIONS: "اختیارات",
    SETTINGS_FEATURES: "خصوصیات",
    SETTINGS_STORAGE: "اسٹوریج",
    SETTINGS_ENABLED: "چالو",
    SETTINGS_SHOW_WIDGET: "ویجیٹ آئیکن دکھائیں",
    SETTINGS_AUTOPLAY: "شروع میں خودکار چلائیں",
    SETTINGS_QUEUE_TRASHBIN: "کیو ٹریش بین کو فعال کریں",
    SETTINGS_TRACKLIST_TRASHBIN: "ٹریک لسٹ کوڑا دان کو فعال کریں",
    SETTINGS_PLAYLIST_MONITOR: "پلے لسٹ مانیٹر",
    ITEMS_TITLE: "ٹریش بین + اشیاء",
    ITEMS_EMPTY_SONGS: "<strong>کوئی حذف شدہ گانے نہیں!</strong><br/>جتنے گانے آپ فاختہ میں ڈالیں گے وہ یہاں نظر آئیں گے۔",
    ITEMS_EMPTY_ARTISTS: "<strong>کوئی فنکار کو ردی میں نہیں!</strong><br/>فنکار جنہیں آپ ردی میں ڈالتے ہیں وہ یہاں ظاہر ہوں گے۔",
    ITEMS_TAB_SONGS: "گانے",
    ITEMS_TAB_ARTISTS: "فنکار",
    ITEMS_LOADED_COUNT: "{{total}} میں سے {{loaded}} {{type}} لوڈ ہو چکا ہے",
    ITEMS_SEARCH_PLACEHOLDER: "نام، آرٹسٹ یا یو آر آئی کے ذریعے تلاش کریں...",
    DESCRIPTION_COPY: "کوڑا دان میں تمام اشیاء کو کلپ بورڈ پر کاپی کریں۔",
    DESCRIPTION_EXPORT: "تمام اشیاء کو کوڑے دان میں .json فائل میں محفوظ کریں۔",
    DESCRIPTION_IMPORT: "کچرے کے ڈبے میں تمام اشیاء کو .json فائل کے ذریعے اوور رائٹ کریں۔",
    DESCRIPTION_CLEAR: "کچرے کے ڈبے سے تمام اشیاء کو صاف کریں (واپس نہیں کیا جا سکتا)۔",
    ITEMS_EMPTY_SONGS_TITLE: "کوئی خراب شدہ گانے نہیں!",
    ITEMS_EMPTY_ARTISTS_TITLE: "کوئی تباہ شدہ فنکار نہیں!",
    DESCRIPTION_SETTINGS_ENABLED: "تمام ٹریش بین + فعالیت کو چالو یا بند کرنے کے لیے ماسٹر ٹوگل",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "موجودہ چل رہی ٹریک کے قریب پلے بیک بار میں تیزی سے رسائی کے لیے ایک کوڑا دان آئیکن ظاہر کریں",
    DESCRIPTION_SETTINGS_AUTOPLAY: "جیسے ہی اسپاٹیفی کھلے یا توسیع لوڈ ہو، خود بخود موسیقی چلانا شروع کریں",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "اپنی آنے والی قطار میں ہر گانے کے ساتھ آسان انتظام کے لیے کوڑا دان کے آئیکن شامل کریں",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "البم اور پلے لسٹ کے مناظر میں گانوں کے ساتھ فوری فلٹرنگ کے لیے کوڑا دان کے آئیکن شامل کریں",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "اسپاٹی فائی کی چل رہی چیزوں کی خرابیوں سے خودکار طور پر بحال ہو جائیں، اپنی آخری پلے لسٹ کو دوبارہ شروع کر کے",
    SETTINGS_SKIP_TRASHED_TRACKS: "کھربے ہوئے ٹریکس کو چھوڑ دیں",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "خود بخود حذف شدہ گانوں کو چھوڑ دیں اور چل رہی چلائی کے دوران اگلی اجازت شدہ ٹریک تلاش کریں",
    SETTINGS_AUTO_CLEAN_QUEUE: "خودکار صفائی کی قطار",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "اپنی اسمارٹ شفل کی قطار سے خودکار طریقے سے تباہ شدہ گانے ہٹا دیں",
    SETTINGS_REMOTE_CONTROL: "دور دراز کنٹرول",
    SETTINGS_REMOTE_TOGGLE: "دور دراز سوئچ کو فعال کریں",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "موبائل سے پلے/روک تھام کو ٹوگل کرنے کے لیے ڈبل ٹیپ کریں۔ ٹریک چھوڑ دینا ٹوگل کی تصدیق کرتا ہے۔",
    SETTINGS_REMOTE_SKIPPING: "دور دراز مقام سے سکپ کرنا فعال ہے",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "جب چالو ہو، تو ٹریش کو چھوڑنا دوسرے ڈیوائس (مثلاً موبائل) سے سپاٹیفائی کو کنٹرول کرتے وقت بھی کام کرتا ہے۔",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "دور دراز سے سکپ کرنا فعال ہے",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "دور دراز سے چھلانگ لگانا غیر فعال",
    MESSAGE_SONG_ADDED_REMOTE: "گانا دور دراز کے ذریعے تباہ کر دیا گیا",
    SETTINGS_TRASH_VIA_LIKE: "لائک کے ذریعے کوڑا کرکٹ",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "موبائل سے تراش کے لیے ایک گانا کی طرح۔ خود بخود ناپسند کرتا ہے اور اگلے ٹریک پر جا تا ہے۔",
    SETTINGS_AI_DETECTION: "AI کا پتہ لگانا",
    SETTINGS_AI_DETECTION_ENABLED: "AI گانا تشخیص",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "ایس او این آئی سی ایس ماڈل کا استعمال کرتے ہوئے اے آئی جنریٹڈ گانوں کا پتہ لگائیں اور ایک احتمال کا اشاریہ دکھائیں۔ پہلی بار چالو کرنے پر تقریباً 50MB ماڈل ڈاؤن لوڈ ہوتا ہے۔",
    AI_ASSETS_DOWNLOADING: "مصنوعی ذہانت ماڈل ڈاؤن لوڈ ہو رہا ہے...",
    AI_ASSETS_READY: "AI ماڈل تیار ہے",
    AI_ASSETS_NOT_READY: "AI ماڈل دستیاب نہیں ہے",
    SETTINGS_TRASH_AI_SONGS: "ٹریش اے آئی گانے",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "خود بخود وہ گانے تلف کر دیں جو AI جنریٹڈ ہونے کا پتہ چلتا ہو (احتمال ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "تمام محفوظ شدہ AI درجہ بندی کے نتائج کو صاف کریں ({{count}} گانے محفوظ ہیں)۔",
    ACTION_CLEAR_AI_STORAGE: "صاف",
    MESSAGE_AI_STORAGE_CLEARED: "ای آئی کے نتائج صاف کر دیے گئے",
    AI_TIER_LIKELY_HUMAN: "ممکنہ انسانی",
    AI_TIER_PROBABLY_HUMAN: "شاید انسان",
    AI_TIER_UNCERTAIN: "غیر یقینی",
    AI_TIER_PROBABLY_AI: "شاید مصنوعی ذہانت",
    AI_TIER_LIKELY_AI: "ممکنہ طور پر مصنوعی ذہانت",
    ACTION_REMOVE_TRASHED: "کچرے والے گانے ہٹا دیں",
    CONFIRM_REMOVE_TRASHED: "کیا آپ اس پلے لسٹ سے {{count}} حذف شدہ گانے ہٹانا چاہتے ہیں؟ اسے واپس نہیں کیا جا سکتا۔",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "پلے لسٹ سے {{count}} حذف شدہ گانے نکال دیے گئے",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "اس پلے لسٹ میں کوئی حذف شدہ گانے نہیں ملے"
  };
});

// src/i18n/vi.json
var require_vi = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Thùng rác+",
    ACTION_THROW: "Đặt vào thùng rác",
    ACTION_UNTHROW: "Xóa khỏi Thùng rác",
    ACTION_CLEAR: "Rõ ràng",
    ACTION_COPY: "Sao chép",
    ACTION_EXPORT: "Xuất khẩu",
    ACTION_IMPORT: "Nhập khẩu",
    MESSAGE_COPIED: "Đã sao chép vào bộ nhớ tạm",
    MESSAGE_CLEARED: "Đã xóa thùng rác thành công!",
    MESSAGE_SONG_ADDED: "Bài hát đã được thêm vào thùng rác",
    MESSAGE_SONG_REMOVED: "Bài hát đã được xóa khỏi thùng rác",
    MESSAGE_ARTIST_ADDED: "Nghệ sĩ đã được thêm vào thùng rác",
    MESSAGE_ARTIST_REMOVED: "Nghệ sĩ đã bị xóa khỏi thùng rác",
    BACKUP_SAVE_SUCCESS: "Sao lưu đã được lưu thành công.",
    BACKUP_SAVE_FAILED: "Lưu bản sao lưu thất bại, hãy thử sao chép nội dung thùng rác vào bộ nhớ tạm và tạo bản sao lưu thủ công.",
    BACKUP_RESTORE_SUCCESS: "Sao lưu đã được khôi phục thành công.",
    BACKUP_FILE_READ_FAILED: "Không thể đọc tệp, vui lòng đảm bảo rằng đây là tệp JSON hợp lệ.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Cài đặt Trashbin+",
    SETTINGS_OPTIONS: "Tùy chọn",
    SETTINGS_FEATURES: "Tính năng",
    SETTINGS_STORAGE: "Lưu trữ",
    SETTINGS_ENABLED: "Đã bật",
    SETTINGS_SHOW_WIDGET: "Hiển thị biểu tượng tiện ích",
    SETTINGS_AUTOPLAY: "Tự động phát khi khởi động",
    SETTINGS_QUEUE_TRASHBIN: "Bật thùng rác hàng đợi",
    SETTINGS_TRACKLIST_TRASHBIN: "Bật thùng rác danh sách phát",
    SETTINGS_PLAYLIST_MONITOR: "Trình giám sát danh sách phát",
    ITEMS_TITLE: "Các mục trong Thùng rác+",
    ITEMS_EMPTY_SONGS: "<strong>Không có bài hát nào bị xóa!</strong><br/>Các bài hát bạn thêm vào thùng rác sẽ hiển thị ở đây.",
    ITEMS_EMPTY_ARTISTS: "<strong>Không có nghệ sĩ nào bị xóa!</strong><br/>Các nghệ sĩ bạn thêm vào thùng rác sẽ hiển thị ở đây.",
    ITEMS_TAB_SONGS: "Bài hát",
    ITEMS_TAB_ARTISTS: "Nghệ sĩ",
    ITEMS_LOADED_COUNT: "{{loaded}} trong số {{total}} {{type}} đã được tải",
    ITEMS_SEARCH_PLACEHOLDER: "Tìm kiếm theo tên, nghệ sĩ hoặc URI...",
    DESCRIPTION_COPY: "Sao chép tất cả các mục trong thùng rác vào bộ nhớ tạm.",
    DESCRIPTION_EXPORT: "Lưu tất cả các mục trong thùng rác vào một tệp .json.",
    DESCRIPTION_IMPORT: "Ghi đè tất cả các mục trong thùng rác thông qua tệp .json.",
    DESCRIPTION_CLEAR: "Xóa tất cả các mục khỏi thùng rác (không thể hoàn tác).",
    ITEMS_EMPTY_SONGS_TITLE: "Không có bài hát nào bị xóa!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Không có nghệ sĩ nào bị vứt bỏ!",
    DESCRIPTION_SETTINGS_ENABLED: "Công tắc chính để bật hoặc tắt mọi chức năng của Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Hiển thị biểu tượng thùng rác trên thanh phát nhạc, bên cạnh bản nhạc đang phát để truy cập nhanh",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Tự động phát nhạc khi Spotify mở hoặc tiện ích mở rộng được tải",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Thêm biểu tượng thùng rác bên cạnh mỗi bài hát trong hàng đợi sắp tới của bạn để dễ quản lý",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Thêm biểu tượng thùng rác bên cạnh các bài hát trong chế độ xem album và danh sách phát để lọc nhanh",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Tự động khôi phục từ lỗi phát lại của Spotify bằng cách tiếp tục phát lại danh sách phát cuối cùng của bạn",
    SETTINGS_SKIP_TRASHED_TRACKS: "Bỏ qua các bản nhạc đã xóa",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Tự động bỏ qua các bài hát đã xóa và tìm bài hát tiếp theo được phép phát trong quá trình phát nhạc",
    SETTINGS_AUTO_CLEAN_QUEUE: "Hàng đợi làm sạch tự động",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Tự động xóa các bài hát đã xóa khỏi hàng đợi phát ngẫu nhiên thông minh của bạn",
    SETTINGS_REMOTE_CONTROL: "Điều khiển từ xa",
    SETTINGS_REMOTE_TOGGLE: "Bật tắt từ xa",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Nhấn đúp vào nút phát/tạm dừng trên thiết bị di động để bật/tắt tính năng bỏ qua từ xa. Việc bỏ qua một bản nhạc sẽ xác nhận thao tác bật/tắt.",
    SETTINGS_REMOTE_SKIPPING: "Bỏ qua từ xa đang hoạt động",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Khi được bật, tính năng bỏ qua bài hát trong thùng rác sẽ hoạt động ngay cả khi điều khiển Spotify từ thiết bị khác (ví dụ: điện thoại di động)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Đã bật bỏ qua từ xa",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Đã tắt bỏ qua từ xa",
    MESSAGE_SONG_ADDED_REMOTE: "Bài hát bị xóa từ xa",
    SETTINGS_TRASH_VIA_LIKE: "Rác qua Like",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Giống như một bài hát từ điện thoại chuyển sang thùng rác. Tự động bỏ thích và chuyển sang bài tiếp theo.",
    SETTINGS_AI_DETECTION: "Phát hiện AI",
    SETTINGS_AI_DETECTION_ENABLED: "Phát hiện bài hát AI",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Phát hiện bài hát do AI tạo ra bằng mô hình SONICS và hiển thị chỉ báo xác suất. Tải xuống mô hình khoảng 50MB khi bật lần đầu.",
    AI_ASSETS_DOWNLOADING: "Đang tải xuống mô hình AI...",
    AI_ASSETS_READY: "Mô hình AI đã sẵn sàng",
    AI_ASSETS_NOT_READY: "Mô hình AI không khả dụng",
    SETTINGS_TRASH_AI_SONGS: "Bài hát rác của AI",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Tự động chuyển các bài hát được phát hiện là do AI tạo ra (xác suất ≥ 80%) vào thùng rác",
    DESCRIPTION_CLEAR_AI_STORAGE: "Xóa tất cả kết quả phân loại AI đã lưu ({{count}} bài hát đã lưu).",
    ACTION_CLEAR_AI_STORAGE: "Rõ ràng",
    MESSAGE_AI_STORAGE_CLEARED: "Kết quả AI đã được làm rõ",
    AI_TIER_LIKELY_HUMAN: "Có khả năng là con người",
    AI_TIER_PROBABLY_HUMAN: "Có lẽ là con người",
    AI_TIER_UNCERTAIN: "Không chắc chắn",
    AI_TIER_PROBABLY_AI: "Có lẽ là trí tuệ nhân tạo",
    AI_TIER_LIKELY_AI: "Có khả năng là AI",
    ACTION_REMOVE_TRASHED: "Xóa các bài hát đã xóa",
    CONFIRM_REMOVE_TRASHED: "Xóa {{count}} bài hát đã xóa khỏi danh sách phát này? Hành động này không thể hoàn tác.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Đã xóa {{count}} bài hát đã xóa khỏi danh sách phát",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Không tìm thấy bài hát nào đã xóa trong danh sách phát này"
  };
});

// src/i18n/zh-CN.json
var require_zh_CN = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "回收站+",
    ACTION_THROW: "放入回收站",
    ACTION_UNTHROW: "从回收站移除",
    ACTION_CLEAR: "清晰",
    ACTION_COPY: "复制",
    ACTION_EXPORT: "导出",
    ACTION_IMPORT: "导入",
    MESSAGE_COPIED: "已复制到剪贴板",
    MESSAGE_CLEARED: "垃圾桶已成功清空！",
    MESSAGE_SONG_ADDED: "歌曲已添加到回收站",
    MESSAGE_SONG_REMOVED: "歌曲已从回收站移除",
    MESSAGE_ARTIST_ADDED: "艺术家已添加到回收站",
    MESSAGE_ARTIST_REMOVED: "艺术家已从回收站移除",
    BACKUP_SAVE_SUCCESS: "备份保存成功。",
    BACKUP_SAVE_FAILED: "备份保存失败，请尝试将回收站内容复制到剪贴板并手动创建备份。",
    BACKUP_RESTORE_SUCCESS: "备份恢复成功。",
    BACKUP_FILE_READ_FAILED: "读取文件失败，请确保它是一个有效的JSON文件。",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "垃圾桶+ 设置",
    SETTINGS_OPTIONS: "选项",
    SETTINGS_FEATURES: "功能",
    SETTINGS_STORAGE: "存储",
    SETTINGS_ENABLED: "已启用",
    SETTINGS_SHOW_WIDGET: "显示小部件图标",
    SETTINGS_AUTOPLAY: "启动时自动播放",
    SETTINGS_QUEUE_TRASHBIN: "启用队列回收站",
    SETTINGS_TRACKLIST_TRASHBIN: "启用播放列表回收站",
    SETTINGS_PLAYLIST_MONITOR: "播放列表监控",
    ITEMS_TITLE: "垃圾桶+ 项目",
    ITEMS_EMPTY_SONGS: "<strong>没有已删除的歌曲！</strong><br/>您添加到回收站的歌曲将显示在这里。",
    ITEMS_EMPTY_ARTISTS: "<strong>没有已删除的艺术家！</strong><br/>您添加到回收站的艺术家将显示在这里。",
    ITEMS_TAB_SONGS: "歌曲",
    ITEMS_TAB_ARTISTS: "艺术家",
    ITEMS_LOADED_COUNT: "已加载 {{loaded}} / {{total}} 个{{type}}",
    ITEMS_SEARCH_PLACEHOLDER: "按名称、艺术家或URI搜索...",
    DESCRIPTION_COPY: "将回收站中的所有项目复制到剪贴板。",
    DESCRIPTION_EXPORT: "将回收站中的所有项目保存到 .json 文件中。",
    DESCRIPTION_IMPORT: "通过.json文件覆盖回收站中的所有项目。",
    DESCRIPTION_CLEAR: "清空回收站中的所有项目（无法恢复）。",
    ITEMS_EMPTY_SONGS_TITLE: "没有被删除的歌曲！",
    ITEMS_EMPTY_ARTISTS_TITLE: "没有被贬低的艺术家！",
    DESCRIPTION_SETTINGS_ENABLED: "主开关，用于启用或禁用所有回收站+功能",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "在播放栏中当前播放曲目旁边显示一个垃圾桶图标，以便快速访问",
    DESCRIPTION_SETTINGS_AUTOPLAY: "当 Spotify 打开或扩展程序加载时自动开始播放音乐",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "在即将播放的队列中每首歌曲旁边添加删除图标，方便管理",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "在专辑和播放列表视图中的歌曲旁边添加垃圾箱图标，以便快速筛选",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "通过恢复上一个播放列表，自动修复 Spotify 播放故障",
    SETTINGS_SKIP_TRASHED_TRACKS: "跳过已删除的曲目",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "自动跳过已删除的歌曲，并在播放期间查找下一首允许播放的曲目",
    SETTINGS_AUTO_CLEAN_QUEUE: "自动清理队列",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "自动从智能随机播放队列中移除已删除的歌曲",
    SETTINGS_REMOTE_CONTROL: "遥控器",
    SETTINGS_REMOTE_TOGGLE: "启用远程切换",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "从手机上双击播放/暂停以切换远程跳过功能的开启/关闭状态。跳过一首歌曲即可确认切换。",
    SETTINGS_REMOTE_SKIPPING: "远程跳过已激活",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "启用后，即使从其他设备（例如手机）控制 Spotify，跳过垃圾功能仍然有效。",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "已启用远程跳过",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "已禁用远程跳过",
    MESSAGE_SONG_ADDED_REMOTE: "歌曲被远程删除",
    SETTINGS_TRASH_VIA_LIKE: "通过点赞清理垃圾",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "就像一首从手机传到垃圾桶的歌。自动取消喜欢并跳到下一首。",
    SETTINGS_AI_DETECTION: "AI检测",
    SETTINGS_AI_DETECTION_ENABLED: "AI歌曲检测",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "使用SONICS模型检测AI生成的歌曲，并显示概率指示器。首次启用时下载约50MB的模型。",
    AI_ASSETS_DOWNLOADING: "正在下载AI模型...",
    AI_ASSETS_READY: "AI模型已就绪",
    AI_ASSETS_NOT_READY: "AI 模型不可用",
    SETTINGS_TRASH_AI_SONGS: "垃圾AI歌曲",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "自动将检测为AI生成的歌曲（概率≥80%）移入回收站",
    DESCRIPTION_CLEAR_AI_STORAGE: "清除所有存储的AI分类结果（已存储{{count}}首歌曲）。",
    ACTION_CLEAR_AI_STORAGE: "清晰",
    MESSAGE_AI_STORAGE_CLEARED: "AI结果已清除",
    AI_TIER_LIKELY_HUMAN: "可能的人类",
    AI_TIER_PROBABLY_HUMAN: "可能是人类",
    AI_TIER_UNCERTAIN: "不确定",
    AI_TIER_PROBABLY_AI: "可能是人工智能",
    AI_TIER_LIKELY_AI: "可能的人工智能",
    ACTION_REMOVE_TRASHED: "删除已删除的歌曲",
    CONFIRM_REMOVE_TRASHED: "从该播放列表中删除 {{count}} 首已放入回收站的歌曲？此操作无法撤销。",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "已从播放列表中移除 {{count}} 首已删除的歌曲",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "此播放列表中未找到已删除的歌曲"
  };
});

// src/i18n/zh-HK.json
var require_zh_HK = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "垃圾桶+",
    ACTION_THROW: "放入垃圾桶",
    ACTION_UNTHROW: "從垃圾桶移除",
    ACTION_CLEAR: "清除",
    ACTION_COPY: "複製",
    ACTION_EXPORT: "出口",
    ACTION_IMPORT: "匯入",
    MESSAGE_COPIED: "已複製到剪貼簿",
    MESSAGE_CLEARED: "垃圾桶已成功清空！",
    MESSAGE_SONG_ADDED: "歌曲已加入垃圾桶",
    MESSAGE_SONG_REMOVED: "歌曲已從垃圾桶移除",
    MESSAGE_ARTIST_ADDED: "藝術家已加入垃圾桶",
    MESSAGE_ARTIST_REMOVED: "藝術家已從垃圾桶中移除",
    BACKUP_SAVE_SUCCESS: "備份已成功儲存。",
    BACKUP_SAVE_FAILED: "未能儲存備份，請嘗試將垃圾桶內容複製到剪貼簿並手動建立備份。",
    BACKUP_RESTORE_SUCCESS: "備份已成功還原。",
    BACKUP_FILE_READ_FAILED: "無法讀取檔案，請確保它是有效的 JSON 檔案。",
    BACKUP_SUGGESTED_FILENAME: "spicetify-垃圾桶.json",
    SETTINGS_TITLE: "垃圾桶+ 設定",
    SETTINGS_OPTIONS: "選項",
    SETTINGS_FEATURES: "功能",
    SETTINGS_STORAGE: "儲存",
    SETTINGS_ENABLED: "已啟用",
    SETTINGS_SHOW_WIDGET: "顯示小工具圖示",
    SETTINGS_AUTOPLAY: "啟動時自動播放",
    SETTINGS_QUEUE_TRASHBIN: "啟用佇列回收箱",
    SETTINGS_TRACKLIST_TRASHBIN: "啟用播放清單回收筒",
    SETTINGS_PLAYLIST_MONITOR: "播放清單監控",
    ITEMS_TITLE: "垃圾桶+ 項目",
    ITEMS_EMPTY_SONGS: "<strong>沒有已刪除的歌曲！</strong><br/>你加入垃圾桶的歌曲將會出現在這裡。",
    ITEMS_EMPTY_ARTISTS: "<strong>沒有已刪除的藝術家！</strong><br/>你加入回收箱的藝術家將會出現在這裡。",
    ITEMS_TAB_SONGS: "歌曲",
    ITEMS_TAB_ARTISTS: "藝術家",
    ITEMS_LOADED_COUNT: "已載入 {{loaded}} 個中的 {{total}} 個 {{type}}",
    ITEMS_SEARCH_PLACEHOLDER: "按名稱、藝術家或 URI 搜尋...",
    DESCRIPTION_COPY: "將回收筒內的所有項目複製到剪貼簿。",
    DESCRIPTION_EXPORT: "將回收箱中的所有項目儲存至 .json 檔案。",
    DESCRIPTION_IMPORT: "透過 .json 檔案覆蓋回收箱中的所有項目。",
    DESCRIPTION_CLEAR: "清除回收箱中的所有項目（無法復原）。",
    ITEMS_EMPTY_SONGS_TITLE: "沒有被刪除的歌曲！",
    ITEMS_EMPTY_ARTISTS_TITLE: "不要有被批評的藝術家！",
    DESCRIPTION_SETTINGS_ENABLED: "主切換以啟用或停用所有回收桶+功能",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "在播放列中，於正在播放的項目旁顯示垃圾桶圖示，以便快速存取",
    DESCRIPTION_SETTINGS_AUTOPLAY: "當 Spotify 開啟或擴充功能載入時，自動開始播放音樂",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "在即將播放的歌曲旁邊加入垃圾桶圖示，方便管理",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "在專輯和播放清單檢視中，於歌曲旁邊加入垃圾桶圖示，以便快速篩選",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "自動從 Spotify 播放故障中恢復，繼續播放你最後的播放清單",
    SETTINGS_SKIP_TRASHED_TRACKS: "跳過已刪除的音軌",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "自動跳過已刪除的歌曲，並在播放期間尋找下一首允許的音軌",
    SETTINGS_AUTO_CLEAN_QUEUE: "自動清除隊列",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "自動從你的智能隨機播放隊列中移除已刪除的歌曲",
    SETTINGS_REMOTE_CONTROL: "遙控器",
    SETTINGS_REMOTE_TOGGLE: "啟用遠端切換",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "從流動裝置雙擊播放/暫停以切換遠端跳過功能的開關。跳過一首歌曲即可確認切換。",
    SETTINGS_REMOTE_SKIPPING: "遠端跳過已啟用",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "啟用後，即使從其他裝置（例如流動裝置）控制 Spotify，亦可跳過垃圾桶",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "已啟用遠端跳過",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "已停用遠端跳過功能",
    MESSAGE_SONG_ADDED_REMOTE: "歌曲被遠程刪除",
    SETTINGS_TRASH_VIA_LIKE: "透過讚好回收垃圾",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "就像一首歌從手機傳送到垃圾桶一樣，自動取消喜歡並跳到下一首。",
    SETTINGS_AI_DETECTION: "人工智能偵測",
    SETTINGS_AI_DETECTION_ENABLED: "AI 歌曲偵測",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "使用 SONICS 模型偵測 AI 生成的歌曲，並顯示概率指標。首次啟用時會下載約 50MB 的模型。",
    AI_ASSETS_DOWNLOADING: "正在下載AI模型...",
    AI_ASSETS_READY: "AI 模型已準備就緒",
    AI_ASSETS_NOT_READY: "AI 模型不可用",
    SETTINGS_TRASH_AI_SONGS: "垃圾AI歌曲",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "自動將被偵測為由人工智能生成的歌曲（機率 ≥ 80%）放入回收桶",
    DESCRIPTION_CLEAR_AI_STORAGE: "清除所有儲存的AI分類結果（已儲存{{count}}首歌曲）。",
    ACTION_CLEAR_AI_STORAGE: "清除",
    MESSAGE_AI_STORAGE_CLEARED: "AI結果已清除",
    AI_TIER_LIKELY_HUMAN: "可能人類",
    AI_TIER_PROBABLY_HUMAN: "可能是人類",
    AI_TIER_UNCERTAIN: "不確定",
    AI_TIER_PROBABLY_AI: "可能是人工智能",
    AI_TIER_LIKELY_AI: "可能的人工智能",
    ACTION_REMOVE_TRASHED: "移除已刪除的歌曲",
    CONFIRM_REMOVE_TRASHED: "從此播放清單中移除 {{count}} 首已刪除的歌曲？此操作不能還原。",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "已從播放清單中移除 {{count}} 首已刪除的歌曲",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "此播放清單中找不到已刪除的歌曲"
  };
});

// src/i18n/zh-TW.json
var require_zh_TW = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "垃圾桶+",
    ACTION_THROW: "放入回收桶",
    ACTION_UNTHROW: "從垃圾桶中移除",
    ACTION_CLEAR: "清楚",
    ACTION_COPY: "複製",
    ACTION_EXPORT: "匯出",
    ACTION_IMPORT: "匯入",
    MESSAGE_COPIED: "已複製到剪貼簿",
    MESSAGE_CLEARED: "垃圾桶已成功清除！",
    MESSAGE_SONG_ADDED: "歌曲已加入垃圾桶",
    MESSAGE_SONG_REMOVED: "歌曲已從垃圾桶移除",
    MESSAGE_ARTIST_ADDED: "藝術家已加入垃圾桶",
    MESSAGE_ARTIST_REMOVED: "藝術家已從垃圾桶中移除",
    BACKUP_SAVE_SUCCESS: "備份已成功儲存。",
    BACKUP_SAVE_FAILED: "無法儲存備份，請嘗試將垃圾桶內容複製到剪貼簿並手動建立備份。",
    BACKUP_RESTORE_SUCCESS: "備份還原成功。",
    BACKUP_FILE_READ_FAILED: "讀取檔案失敗，請確保它是一個有效的 JSON 檔案。",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "垃圾桶+ 設定",
    SETTINGS_OPTIONS: "選項",
    SETTINGS_FEATURES: "功能",
    SETTINGS_STORAGE: "儲存",
    SETTINGS_ENABLED: "已啟用",
    SETTINGS_SHOW_WIDGET: "顯示小工具圖示",
    SETTINGS_AUTOPLAY: "啟動時自動播放",
    SETTINGS_QUEUE_TRASHBIN: "啟用佇列回收桶",
    SETTINGS_TRACKLIST_TRASHBIN: "啟用曲目垃圾桶",
    SETTINGS_PLAYLIST_MONITOR: "播放清單監控",
    ITEMS_TITLE: "垃圾桶+ 項目",
    ITEMS_EMPTY_SONGS: "<strong>沒有已刪除的歌曲！</strong><br/>您加入垃圾桶的歌曲將會出現在這裡。",
    ITEMS_EMPTY_ARTISTS: "<strong>沒有已刪除的藝術家！</strong><br/>您加入回收筒的藝術家將會出現在這裡。",
    ITEMS_TAB_SONGS: "歌曲",
    ITEMS_TAB_ARTISTS: "藝術家",
    ITEMS_LOADED_COUNT: "已載入 {{loaded}} / {{total}} 個 {{type}}",
    ITEMS_SEARCH_PLACEHOLDER: "按名稱、藝術家或 URI 搜尋...",
    DESCRIPTION_COPY: "將回收筒中的所有項目複製到剪貼簿。",
    DESCRIPTION_EXPORT: "將回收筒中的所有項目儲存到 .json 檔案中。",
    DESCRIPTION_IMPORT: "透過 .json 檔案覆蓋垃圾桶中的所有項目。",
    DESCRIPTION_CLEAR: "清空回收筒中的所有項目（無法復原）。",
    ITEMS_EMPTY_SONGS_TITLE: "沒有被刪除的歌曲！",
    ITEMS_EMPTY_ARTISTS_TITLE: "沒有被糟蹋的藝術家！",
    DESCRIPTION_SETTINGS_ENABLED: "主要切換開關，用於啟用或停用所有垃圾桶+功能",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "在播放列中，於正在播放的歌曲旁顯示垃圾桶圖示，以便快速存取",
    DESCRIPTION_SETTINGS_AUTOPLAY: "當 Spotify 開啟或擴充功能載入時，自動開始播放音樂",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "在您即將播放的歌曲隊列中，於每首歌曲旁新增垃圾桶圖示，以便輕鬆管理",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "在專輯和播放清單視圖中的歌曲旁邊添加垃圾桶圖示，以便快速篩選",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "自動從 Spotify 播放故障中恢復，繼續播放您最後的播放清單",
    SETTINGS_SKIP_TRASHED_TRACKS: "跳過已刪除的音軌",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "自動跳過已刪除的歌曲，並在播放期間尋找下一首可播放的曲目",
    SETTINGS_AUTO_CLEAN_QUEUE: "自動清潔隊列",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "自動從您的智慧隨機播放佇列中移除已刪除的歌曲",
    SETTINGS_REMOTE_CONTROL: "遙控器",
    SETTINGS_REMOTE_TOGGLE: "啟用遠端切換",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "從手機上連按兩下播放/暫停以切換遠端跳過功能的開關。跳過一首歌曲即可確認切換。",
    SETTINGS_REMOTE_SKIPPING: "遠端跳過已啟用",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "啟用後，即使從其他裝置（例如手機）控制 Spotify，也能跳過垃圾桶。",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "已啟用遠端跳過",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "已停用遠端跳過功能",
    MESSAGE_SONG_ADDED_REMOTE: "歌曲透過遠端被刪除",
    SETTINGS_TRASH_VIA_LIKE: "按讚即可丟垃圾",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "就像一首從手機傳送到垃圾桶的歌。自動取消喜歡並跳到下一首。",
    SETTINGS_AI_DETECTION: "人工智慧偵測",
    SETTINGS_AI_DETECTION_ENABLED: "AI 歌曲偵測",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "使用 SONICS 模型偵測 AI 生成的歌曲，並顯示機率指標。首次啟用時會下載約 50MB 的模型。",
    AI_ASSETS_DOWNLOADING: "正在下載AI模型...",
    AI_ASSETS_READY: "AI 模型已準備就緒",
    AI_ASSETS_NOT_READY: "AI 模型不可用",
    SETTINGS_TRASH_AI_SONGS: "垃圾AI歌曲",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "自動將被偵測為人工智慧生成的歌曲（機率 ≥ 80%）移至垃圾桶",
    DESCRIPTION_CLEAR_AI_STORAGE: "清除所有儲存的AI分類結果（已儲存{{count}}首歌曲）。",
    ACTION_CLEAR_AI_STORAGE: "清楚",
    MESSAGE_AI_STORAGE_CLEARED: "AI 結果已清除",
    AI_TIER_LIKELY_HUMAN: "可能為人類",
    AI_TIER_PROBABLY_HUMAN: "可能是人類",
    AI_TIER_UNCERTAIN: "不確定",
    AI_TIER_PROBABLY_AI: "可能是人工智慧",
    AI_TIER_LIKELY_AI: "可能的人工智慧",
    ACTION_REMOVE_TRASHED: "移除已刪除的歌曲",
    CONFIRM_REMOVE_TRASHED: "從此播放清單中移除 {{count}} 首已刪除的歌曲？此操作無法復原。",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "已從播放清單中移除 {{count}} 首已刪除的歌曲",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "此播放清單中未找到已刪除的歌曲"
  };
});

// src/i18n/zu.json
var require_zu = __commonJS((exports, module) => {
  module.exports = {
    TRASHBIN_NAME: "Trashbin+",
    ACTION_THROW: "Faka esikhwini sengcambu",
    ACTION_UNTHROW: "Susa kusindvothi",
    ACTION_CLEAR: "Vula",
    ACTION_COPY: "Kopisha",
    ACTION_EXPORT: "Thumela kuwande",
    ACTION_IMPORT: "Ngenisa",
    MESSAGE_COPIED: "Kukhuphike ku-clipboard",
    MESSAGE_CLEARED: "Inkunkuma yaqoshelwe kahle!",
    MESSAGE_SONG_ADDED: "Umbhali wengeziwe kususini",
    MESSAGE_SONG_REMOVED: "Umvuzo ususwe kususa",
    MESSAGE_ARTIST_ADDED: "Umculo wengezwe kususini",
    MESSAGE_ARTIST_REMOVED: "Umdlali wususwe kususini",
    BACKUP_SAVE_SUCCESS: "Gcwaliswe kwehlatyelwe kwehlatyelwe.",
    BACKUP_SAVE_FAILED: "Ayikwazanga ukugcina kopi yokuphinda, uzame ukukopisha okhuthazekile ku-trashbin kwi-clipboard bese wakha ikhophi yokuphinda ngendlela yokuphawula.",
    BACKUP_RESTORE_SUCCESS: "Isibuyekezo sikhuphukile ngempumelelo.",
    BACKUP_FILE_READ_FAILED: "Ayikwazanga ukufunda ifayela, sicela uqiniseke ukuthi yifayela efanayo ye-JSON.",
    BACKUP_SUGGESTED_FILENAME: "spicetify-trashbin.json",
    SETTINGS_TITLE: "Izilungiselelo zeTrashbin+",
    SETTINGS_OPTIONS: "Izinketho",
    SETTINGS_FEATURES: "Izinto ezikhethekileyo",
    SETTINGS_STORAGE: "Inqwelo",
    SETTINGS_ENABLED: "Kuvulwe",
    SETTINGS_SHOW_WIDGET: "Bonisa Isithonjana Sekhodi",
    SETTINGS_AUTOPLAY: "Ukudlala ngokuzenzakalela kuqala",
    SETTINGS_QUEUE_TRASHBIN: "Vula Isiqhamo se-Trashbin",
    SETTINGS_TRACKLIST_TRASHBIN: "Vula Ithrawashi yesilayisithi yesithwala",
    SETTINGS_PLAYLIST_MONITOR: "Hlola uhlu lomculo",
    ITEMS_TITLE: "Izinto ze-Trashbin+",
    ITEMS_EMPTY_SONGS: "<strong>Azikho izindima ezilahlekile!</strong><br/>Izindima uzodinga kuthaka kuzovela lapha.",
    ITEMS_EMPTY_ARTISTS: "<strong>Azikho izikrwelethi ezithunyelwe esidumbini!</strong><br/>Izikrwelethi ozayithunyela esidumbini zizakubonakala lapha.",
    ITEMS_TAB_SONGS: "Izindima",
    ITEMS_TAB_ARTISTS: "Omanyazi",
    ITEMS_LOADED_COUNT: "{{loaded}} ya {{total}} {{type}} elayiwe",
    ITEMS_SEARCH_PLACEHOLDER: "Sesha ngegama, umculo, noma i-URI...",
    DESCRIPTION_COPY: "Kopisha zonke izinto ebinjini yokususa kubhodi.",
    DESCRIPTION_EXPORT: "Londoloza konke okwakhiweni okulahlekile ku fayela .json.",
    DESCRIPTION_IMPORT: "Bechanjela zonke izinto kwi-trashbin ngendlela ya .json.",
    DESCRIPTION_CLEAR: "Susa konke kususini (akukwenzakala ukubuyisela).",
    ITEMS_EMPTY_SONGS_TITLE: "Akukho lolizo elidotiwe!",
    ITEMS_EMPTY_ARTISTS_TITLE: "Akukho zokwakha izithombe ezithunyaziwe!",
    DESCRIPTION_SETTINGS_ENABLED: "Isilungiso esigcwele sokuvula noma kuvimba konke okusebenza kwe-Trashbin+",
    DESCRIPTION_SETTINGS_SHOW_WIDGET: "Bonisa ikhona yekhanda ngaphandle kwebhakethe yokuqhubeka ngasendaweni yesiGaba esiqhubekayo ngokushesha",
    DESCRIPTION_SETTINGS_AUTOPLAY: "Qala ukudlala imiziki ngokuzenzekelayo uma i-Spotify ivulwe noma isiphindezelo sifaka",
    DESCRIPTION_SETTINGS_QUEUE_TRASHBIN: "Faka izithombe zedolobha ezinguqulini lakho elizofika ngasinye songuqu ezinguqu ngokulawula kakhulu",
    DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN: "Faka izithombe zedolobha ezinguqu ezindaweni zezindima ezifananayo kumabhokisi nezinhlobo zomculo ukuze kuthuluzwe ngokushesha",
    DESCRIPTION_SETTINGS_PLAYLIST_MONITOR: "Phinda uzive ngokuzenzakalelayo kusiphazamiso seSpotify ngokubuyisela kwi-playlist yakho yokugcina",
    SETTINGS_SKIP_TRASHED_TRACKS: "Yekela Imilayezo Eshonile",
    DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS: "Hhayi ngokuzenzakalelayo izindima ezithunyelwe kususini futhi uthole indima engavumelekile ekulandelayo ngexesha lokudlala",
    SETTINGS_AUTO_CLEAN_QUEUE: "Uthuba Lwesivinini Se-Auto",
    DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE: "Susa ngokuzenzakalelayo izindima ezithunyelwe ku-queue yakho ye-Smart Shuffle",
    SETTINGS_REMOTE_CONTROL: "Isivumelwano esingaphandle",
    SETTINGS_REMOTE_TOGGLE: "Vula Ukuguqulwa Kude",
    DESCRIPTION_SETTINGS_REMOTE_TOGGLE: "Cindeza kabili ukudelela/ukumisa ukumisa ukuthinta kumobile ukuze uguqule ukuthinta kude kuvule/ukuvula. Ukuthinta kude kuvumela uguquko.",
    SETTINGS_REMOTE_SKIPPING: "Ukungahleki Kude Kusebenza",
    DESCRIPTION_SETTINGS_REMOTE_SKIPPING: "Xa kusekelwe, ukubuyisa kususwa kusebenza noma kube ngaphandle kokuphatha i-Spotify kusihlangothi esinye (umz. gceleni)",
    MESSAGE_REMOTE_SKIPPING_ENABLED: "Ukungena kude kuvunyelwe",
    MESSAGE_REMOTE_SKIPPING_DISABLED: "Ukungena kude kumiswa",
    MESSAGE_SONG_ADDED_REMOTE: "Umusi wadiliselwe ngokugcwele",
    SETTINGS_TRASH_VIA_LIKE: "Trash ngaphandle kukaLike",
    DESCRIPTION_SETTINGS_TRASH_VIA_LIKE: "Njengomculo ukusuka kumobile ukususula. Kulungela ngokuzenzakalela futhi kuqukatha kumculo ongemuva.",
    SETTINGS_AI_DETECTION: "Ukuthola Kwesingeniso",
    SETTINGS_AI_DETECTION_ENABLED: "Ukuthola Kwe-Song ye-AI",
    DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED: "Lethola izihasho ezigcinwe kwi-AI zisebenzisa i-SONICS fokosa umkhakha wokhothazwa. Liphakamise imodeli ye-~50MB ngokuqala kokuvula.",
    AI_ASSETS_DOWNLOADING: "Iphakelwa muduli we-AI...",
    AI_ASSETS_READY: "IModeli ye-AI iyamukeleke",
    AI_ASSETS_NOT_READY: "Imodeli ye-AI ayitholakala",
    SETTINGS_TRASH_AI_SONGS: "Izindima ze-AI zethashi",
    DESCRIPTION_SETTINGS_TRASH_AI_SONGS: "Cima ngokuzenzakalelayo izihasho ezitholwe njenge-AI (imiphikiswano ≥ 80%)",
    DESCRIPTION_CLEAR_AI_STORAGE: "Sula wonke amaphethelo akhiwe kakhulu (izindima ezingu-{{count}} ezigcinwe).",
    ACTION_CLEAR_AI_STORAGE: "Vula",
    MESSAGE_AI_STORAGE_CLEARED: "Iziphawulo ze-AI zicinywe",
    AI_TIER_LIKELY_HUMAN: "Umntu Ozinzile",
    AI_TIER_PROBABLY_HUMAN: "Kusangelwa umuntu",
    AI_TIER_UNCERTAIN: "Angazi",
    AI_TIER_PROBABLY_AI: "Kusindiso AI",
    AI_TIER_LIKELY_AI: "I-AI esizenzakalo",
    ACTION_REMOVE_TRASHED: "Susa izindima ezithunyelwe kususini",
    CONFIRM_REMOVE_TRASHED: "Susa i{{count}} ngamahala esindisiwe kulesi hala? Lokhu akukwenzekanga ukubuyisela.",
    MESSAGE_REMOVE_TRASHED_SUCCESS: "Kususwe i-{{count}} engcoliswa kusihlakalakahle",
    MESSAGE_NO_TRASHED_IN_PLAYLIST: "Akukho lolizo elidoti ku-plethilisti le"
  };
});

// src/app.tsx
var import_react26 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// src/components/features/ai-detection-widget.tsx
var import_react9 = __toESM(require_react(), 1);

// node_modules/react-icons/lib/iconBase.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/react-icons/lib/iconContext.mjs
var import_react = __toESM(require_react(), 1);
var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = import_react.default.createContext && /* @__PURE__ */ import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/iconBase.mjs
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0;i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1;i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1;r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive(t, r) {
  if (typeof t != "object" || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (e !== undefined) {
    var i = e.call(t, r || "default");
    if (typeof i != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ import_react2.default.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ import_react2.default.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /* @__PURE__ */ import_react2.default.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}

// node_modules/react-icons/cg/index.mjs
function CgSpinner(props) {
  return GenIcon({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none" }, child: [{ tag: "path", attr: { opacity: "0.2", fillRule: "evenodd", clipRule: "evenodd", d: "M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "currentColor" }, child: [] }, { tag: "path", attr: { d: "M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z", fill: "currentColor" }, child: [] }] })(props);
}

// node_modules/zustand/esm/vanilla.mjs
var createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set;
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
var createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

// node_modules/zustand/esm/react.mjs
var import_react3 = __toESM(require_react(), 1);
var identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = import_react3.default.useSyncExternalStore(api.subscribe, import_react3.default.useCallback(() => selector(api.getState()), [api, selector]), import_react3.default.useCallback(() => selector(api.getInitialState()), [api, selector]));
  import_react3.default.useDebugValue(slice);
  return slice;
}
var createImpl = (createState) => {
  const api = createStore(createState);
  const useBoundStore = (selector) => useStore(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
var create = (createState) => createState ? createImpl(createState) : createImpl;

// src/lib/ai-blocklist.ts
var BLOCKLIST_URL = "https://raw.githubusercontent.com/xoundbyte/soul-over-ai/main/dist/artists.json";
var LS_CACHE_KEY = "trashbin-ai-blocklist:data";
var LS_TIME_KEY = "trashbin-ai-blocklist:ts";
var TTL = 86400000;
var artistIds = new Set;
var initialized = false;
var refreshTimer = null;
function extractArtistId(value) {
  if (!value)
    return null;
  const trimmed = value.trim();
  const directMatch = trimmed.match(/^[a-zA-Z0-9]{22}$/);
  if (directMatch)
    return directMatch[0];
  const uriMatch = trimmed.match(/artist[\/:]([a-zA-Z0-9]+)/);
  return uriMatch ? uriMatch[1] : null;
}
function buildSet(data) {
  artistIds.clear();
  for (const entry of data) {
    if (typeof entry !== "object" || !entry.spotify)
      continue;
    const id = extractArtistId(entry.spotify);
    if (id)
      artistIds.add(id);
  }
}
async function initBlocklist() {
  if (initialized)
    return;
  initialized = true;
  const now = Date.now();
  const lastFetchStr = Spicetify.LocalStorage.get(LS_TIME_KEY);
  const lastFetch = lastFetchStr ? parseInt(lastFetchStr) : 0;
  const cached = Spicetify.LocalStorage.get(LS_CACHE_KEY);
  let data = [];
  if (cached) {
    try {
      data = JSON.parse(cached);
    } catch {}
  }
  if (data.length > 0) {
    buildSet(data);
  }
  if (now - lastFetch > TTL || data.length === 0) {
    try {
      const res = await fetch(BLOCKLIST_URL);
      if (res.ok) {
        const fetched = await res.json();
        if (Array.isArray(fetched) && fetched.length > 0) {
          data = fetched;
          Spicetify.LocalStorage.set(LS_CACHE_KEY, JSON.stringify(data));
          Spicetify.LocalStorage.set(LS_TIME_KEY, now.toString());
          buildSet(data);
        }
      }
    } catch {}
  }
  if (!refreshTimer) {
    refreshTimer = setInterval(() => {
      initialized = false;
      initBlocklist();
    }, TTL);
  }
}
function isBlocklistedArtist(artistId) {
  return artistIds.has(artistId);
}
function disposeBlocklist() {
  if (refreshTimer) {
    clearInterval(refreshTimer);
    refreshTimer = null;
  }
  artistIds.clear();
  initialized = false;
}

// ort-worker:virtual:ort-worker-wasm
var ORT_WASM_CODE = `/*!
 * ONNX Runtime Web v1.24.1
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var Jt=Object.defineProperty;var Za=Object.getOwnPropertyDescriptor;var Qa=Object.getOwnPropertyNames;var Ka=Object.prototype.hasOwnProperty;var qt=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(t,a)=>(typeof require<"u"?require:t)[a]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var N=(n,t)=>()=>(n&&(t=n(n=0)),t);var it=(n,t)=>{for(var a in t)Jt(n,a,{get:t[a],enumerable:!0})},es=(n,t,a,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Qa(t))!Ka.call(n,o)&&o!==a&&Jt(n,o,{get:()=>t[o],enumerable:!(u=Za(t,o))||u.enumerable});return n};var Xt=n=>es(Jt({},"__esModule",{value:!0}),n);var ut,Be,Je,ts,dr,Zt=N(()=>{"use strict";ut=new Map,Be=[],Je=(n,t,a)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let u=ut.get(n);if(u===void 0)ut.set(n,{backend:t,priority:a});else{if(u.priority>a)return;if(u.priority===a&&u.backend!==t)throw new Error(\`cannot register backend "\${n}" using priority \${a}\`)}if(a>=0){let o=Be.indexOf(n);o!==-1&&Be.splice(o,1);for(let d=0;d<Be.length;d++)if(ut.get(Be[d]).priority<=a){Be.splice(d,0,n);return}Be.push(n)}return}throw new TypeError("not a valid backend")},ts=async n=>{let t=ut.get(n);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let a=!!t.initPromise;try{return a||(t.initPromise=t.backend.init(n)),await t.initPromise,t.initialized=!0,t.backend}catch(u){return a||(t.error=\`\${u}\`,t.aborted=!0),t.error}finally{delete t.initPromise}}},dr=async n=>{let t=n.executionProviders||[],a=t.map(m=>typeof m=="string"?m:m.name),u=a.length===0?Be:a,o,d=[],c=new Set;for(let m of u){let h=await ts(m);typeof h=="string"?d.push({name:m,err:h}):(o||(o=h),o===h&&c.add(m))}if(!o)throw new Error(\`no available backend found. ERR: \${d.map(m=>\`[\${m.name}] \${m.err}\`).join(", ")}\`);for(let{name:m,err:h}of d)a.includes(m)&&console.warn(\`removing requested execution provider "\${m}" from session options because it is not available: \${h}\`);let l=t.filter(m=>c.has(typeof m=="string"?m:m.name));return[o,new Proxy(n,{get:(m,h)=>h==="executionProviders"?l:Reflect.get(m,h)})]}});var pr=N(()=>{"use strict";Zt()});var mr,hr=N(()=>{"use strict";mr="1.24.1"});var wr,J,Qt=N(()=>{"use strict";hr();wr="warning",J={wasm:{},webgl:{},webgpu:{},versions:{common:mr},set logLevel(n){if(n!==void 0){if(typeof n!="string"||["verbose","info","warning","error","fatal"].indexOf(n)===-1)throw new Error(\`Unsupported logging level: \${n}\`);wr=n}},get logLevel(){return wr}};Object.defineProperty(J,"logLevel",{enumerable:!0})});var Y,br=N(()=>{"use strict";Qt();Y=J});var yr,gr,Er=N(()=>{"use strict";yr=(n,t)=>{let a=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);a.width=n.dims[3],a.height=n.dims[2];let u=a.getContext("2d");if(u!=null){let o,d;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(o=n.dims[2],d=n.dims[3]):(o=n.dims[3],d=n.dims[2]);let c=t?.format!==void 0?t.format:"RGB",l=t?.norm,m,h;l===void 0||l.mean===void 0?m=[255,255,255,255]:typeof l.mean=="number"?m=[l.mean,l.mean,l.mean,l.mean]:(m=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(m[3]=l.mean[3])),l===void 0||l.bias===void 0?h=[0,0,0,0]:typeof l.bias=="number"?h=[l.bias,l.bias,l.bias,l.bias]:(h=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(h[3]=l.bias[3]));let g=d*o,b=0,y=g,T=g*2,O=-1;c==="RGBA"?(b=0,y=g,T=g*2,O=g*3):c==="RGB"?(b=0,y=g,T=g*2):c==="RBG"&&(b=0,T=g,y=g*2);for(let U=0;U<d;U++)for(let z=0;z<o;z++){let A=(n.data[b++]-h[0])*m[0],I=(n.data[y++]-h[1])*m[1],F=(n.data[T++]-h[2])*m[2],D=O===-1?255:(n.data[O++]-h[3])*m[3];u.fillStyle="rgba("+A+","+I+","+F+","+D+")",u.fillRect(z,U,1,1)}if("toDataURL"in a)return a.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},gr=(n,t)=>{let a=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),u;if(a!=null){let o,d,c;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(o=n.dims[2],d=n.dims[1],c=n.dims[3]):(o=n.dims[3],d=n.dims[2],c=n.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",m=t?.norm,h,g;m===void 0||m.mean===void 0?h=[255,255,255,255]:typeof m.mean=="number"?h=[m.mean,m.mean,m.mean,m.mean]:(h=[m.mean[0],m.mean[1],m.mean[2],255],m.mean[3]!==void 0&&(h[3]=m.mean[3])),m===void 0||m.bias===void 0?g=[0,0,0,0]:typeof m.bias=="number"?g=[m.bias,m.bias,m.bias,m.bias]:(g=[m.bias[0],m.bias[1],m.bias[2],0],m.bias[3]!==void 0&&(g[3]=m.bias[3]));let b=d*o;if(t!==void 0&&(t.format!==void 0&&c===4&&t.format!=="RGBA"||c===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let y=4,T=0,O=1,U=2,z=3,A=0,I=b,F=b*2,D=-1;l==="RGBA"?(A=0,I=b,F=b*2,D=b*3):l==="RGB"?(A=0,I=b,F=b*2):l==="RBG"&&(A=0,F=b,I=b*2),u=a.createImageData(o,d);for(let k=0;k<d*o;T+=y,O+=y,U+=y,z+=y,k++)u.data[T]=(n.data[A++]-g[0])*h[0],u.data[O]=(n.data[I++]-g[1])*h[1],u.data[U]=(n.data[F++]-g[2])*h[2],u.data[z]=D===-1?255:(n.data[D++]-g[3])*h[3]}else throw new Error("Can not access image data");return u}});var Kt,Tr,Sr,vr,Or,Ar,Ir=N(()=>{"use strict";ft();Kt=(n,t)=>{if(n===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:a,width:u}=t,o=t.norm??{mean:255,bias:0},d,c;typeof o.mean=="number"?d=[o.mean,o.mean,o.mean,o.mean]:d=[o.mean[0],o.mean[1],o.mean[2],o.mean[3]??255],typeof o.bias=="number"?c=[o.bias,o.bias,o.bias,o.bias]:c=[o.bias[0],o.bias[1],o.bias[2],o.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",m=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",h=a*u,g=m==="RGBA"?new Float32Array(h*4):new Float32Array(h*3),b=4,y=0,T=1,O=2,U=3,z=0,A=h,I=h*2,F=-1;l==="RGB"&&(b=3,y=0,T=1,O=2,U=-1),m==="RGBA"?F=h*3:m==="RBG"?(z=0,I=h,A=h*2):m==="BGR"&&(I=0,A=h,z=h*2);for(let k=0;k<h;k++,y+=b,O+=b,T+=b,U+=b)g[z++]=(n[y]+c[0])/d[0],g[A++]=(n[T]+c[1])/d[1],g[I++]=(n[O]+c[2])/d[2],F!==-1&&U!==-1&&(g[F++]=(n[U]+c[3])/d[3]);return m==="RGBA"?new Z("float32",g,[1,4,a,u]):new Z("float32",g,[1,3,a,u])},Tr=async(n,t)=>{let a=typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement,u=typeof ImageData<"u"&&n instanceof ImageData,o=typeof ImageBitmap<"u"&&n instanceof ImageBitmap,d=typeof n=="string",c,l=t??{},m=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},h=g=>typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||g instanceof OffscreenCanvas?g.getContext("2d"):null;if(a){let g=m();g.width=n.width,g.height=n.height;let b=h(g);if(b!=null){let y=n.height,T=n.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(y=t.resizedHeight,T=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=y,l.width=T}else l.tensorFormat="RGBA",l.height=y,l.width=T;b.drawImage(n,0,0),c=b.getImageData(0,0,T,y).data}else throw new Error("Can not access image data")}else if(u){let g,b;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(g=t.resizedHeight,b=t.resizedWidth):(g=n.height,b=n.width),t!==void 0&&(l=t),l.format="RGBA",l.height=g,l.width=b,t!==void 0){let y=m();y.width=b,y.height=g;let T=h(y);if(T!=null)T.putImageData(n,0,0),c=T.getImageData(0,0,b,g).data;else throw new Error("Can not access image data")}else c=n.data}else if(o){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let g=m();g.width=n.width,g.height=n.height;let b=h(g);if(b!=null){let y=n.height,T=n.width;return b.drawImage(n,0,0,T,y),c=b.getImageData(0,0,T,y).data,l.height=y,l.width=T,Kt(c,l)}else throw new Error("Can not access image data")}else{if(d)return new Promise((g,b)=>{let y=m(),T=h(y);if(!n||!T)return b();let O=new Image;O.crossOrigin="Anonymous",O.src=n,O.onload=()=>{y.width=O.width,y.height=O.height,T.drawImage(O,0,0,y.width,y.height);let U=T.getImageData(0,0,y.width,y.height);l.height=y.height,l.width=y.width,g(Kt(U.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(c!==void 0)return Kt(c,l);throw new Error("Input data provided is not supported - aborted tensor creation")},Sr=(n,t)=>{let{width:a,height:u,download:o,dispose:d}=t,c=[1,u,a,4];return new Z({location:"texture",type:"float32",texture:n,dims:c,download:o,dispose:d})},vr=(n,t)=>{let{dataType:a,dims:u,download:o,dispose:d}=t;return new Z({location:"gpu-buffer",type:a??"float32",gpuBuffer:n,dims:u,download:o,dispose:d})},Or=(n,t)=>{let{dataType:a,dims:u,download:o,dispose:d}=t;return new Z({location:"ml-tensor",type:a??"float32",mlTensor:n,dims:u,download:o,dispose:d})},Ar=(n,t,a)=>new Z({location:"cpu-pinned",type:n,data:t,dims:a??[t.length]})});var Le,qe,Br,Lr,Pr=N(()=>{"use strict";Le=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),qe=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Br=!1,Lr=()=>{if(!Br){Br=!0;let n=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,a=globalThis.Float16Array,u=typeof a<"u"&&a.from;n&&(Le.set("int64",BigInt64Array),qe.set(BigInt64Array,"int64")),t&&(Le.set("uint64",BigUint64Array),qe.set(BigUint64Array,"uint64")),u?(Le.set("float16",a),qe.set(a,"float16")):Le.set("float16",Uint16Array)}}});var Dr,_r,Ur=N(()=>{"use strict";ft();Dr=n=>{let t=1;for(let a=0;a<n.length;a++){let u=n[a];if(typeof u!="number"||!Number.isSafeInteger(u))throw new TypeError(\`dims[\${a}] must be an integer, got: \${u}\`);if(u<0)throw new RangeError(\`dims[\${a}] must be a non-negative integer, got: \${u}\`);t*=u}return t},_r=(n,t)=>{switch(n.location){case"cpu":return new Z(n.type,n.data,t);case"cpu-pinned":return new Z({location:"cpu-pinned",data:n.data,type:n.type,dims:t});case"texture":return new Z({location:"texture",texture:n.texture,type:n.type,dims:t});case"gpu-buffer":return new Z({location:"gpu-buffer",gpuBuffer:n.gpuBuffer,type:n.type,dims:t});case"ml-tensor":return new Z({location:"ml-tensor",mlTensor:n.mlTensor,type:n.type,dims:t});default:throw new Error(\`tensorReshape: tensor location \${n.location} is not supported\`)}}});var Z,ft=N(()=>{"use strict";Er();Ir();Pr();Ur();Z=class{constructor(t,a,u){Lr();let o,d;if(typeof t=="object"&&"location"in t)switch(this.dataLocation=t.location,o=t.type,d=t.dims,t.location){case"cpu-pinned":{let l=Le.get(o);if(!l)throw new TypeError(\`unsupported type "\${o}" to create tensor from pinned buffer\`);if(!(t.data instanceof l))throw new TypeError(\`buffer should be of type \${l.name}\`);this.cpuData=t.data;break}case"texture":{if(o!=="float32")throw new TypeError(\`unsupported type "\${o}" to create tensor from texture\`);this.gpuTextureData=t.texture,this.downloader=t.download,this.disposer=t.dispose;break}case"gpu-buffer":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint8"&&o!=="bool"&&o!=="uint4"&&o!=="int4")throw new TypeError(\`unsupported type "\${o}" to create tensor from gpu buffer\`);this.gpuBufferData=t.gpuBuffer,this.downloader=t.download,this.disposer=t.dispose;break}case"ml-tensor":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint64"&&o!=="int8"&&o!=="uint8"&&o!=="bool"&&o!=="uint4"&&o!=="int4")throw new TypeError(\`unsupported type "\${o}" to create tensor from MLTensor\`);this.mlTensorData=t.mlTensor,this.downloader=t.download,this.disposer=t.dispose;break}default:throw new Error(\`Tensor constructor: unsupported location '\${this.dataLocation}'\`)}else{let l,m;if(typeof t=="string")if(o=t,m=u,t==="string"){if(!Array.isArray(a))throw new TypeError("A string tensor's data must be a string array.");l=a}else{let h=Le.get(t);if(h===void 0)throw new TypeError(\`Unsupported tensor type: \${t}.\`);if(Array.isArray(a)){if(t==="float16"&&h===Uint16Array||t==="uint4"||t==="int4")throw new TypeError(\`Creating a \${t} tensor from number array is not supported. Please use \${h.name} as data.\`);t==="uint64"||t==="int64"?l=h.from(a,BigInt):l=h.from(a)}else if(a instanceof h)l=a;else if(a instanceof Uint8ClampedArray)if(t==="uint8")l=Uint8Array.from(a);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(t==="float16"&&a instanceof Uint16Array&&h!==Uint16Array)l=new globalThis.Float16Array(a.buffer,a.byteOffset,a.length);else throw new TypeError(\`A \${o} tensor's data must be type of \${h}\`)}else if(m=a,Array.isArray(t)){if(t.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let h=typeof t[0];if(h==="string")o="string",l=t;else if(h==="boolean")o="bool",l=Uint8Array.from(t);else throw new TypeError(\`Invalid element type of data array: \${h}.\`)}else if(t instanceof Uint8ClampedArray)o="uint8",l=Uint8Array.from(t);else{let h=qe.get(t.constructor);if(h===void 0)throw new TypeError(\`Unsupported type for tensor data: \${t.constructor}.\`);o=h,l=t}if(m===void 0)m=[l.length];else if(!Array.isArray(m))throw new TypeError("A tensor's dims must be a number array");d=m,this.cpuData=l,this.dataLocation="cpu"}let c=Dr(d);if(this.cpuData&&c!==this.cpuData.length&&!((o==="uint4"||o==="int4")&&Math.ceil(c/2)===this.cpuData.length))throw new Error(\`Tensor's size(\${c}) does not match data length(\${this.cpuData.length}).\`);this.type=o,this.dims=d,this.size=c}static async fromImage(t,a){return Tr(t,a)}static fromTexture(t,a){return Sr(t,a)}static fromGpuBuffer(t,a){return vr(t,a)}static fromMLTensor(t,a){return Or(t,a)}static fromPinnedBuffer(t,a,u){return Ar(t,a,u)}toDataURL(t){return yr(this,t)}toImageData(t){return gr(this,t)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use \`getData()\` to download GPU data to CPU, or use \`texture\` or \`gpuBuffer\` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(t){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let a=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=a,t&&this.disposer&&(this.disposer(),this.disposer=void 0),a}finally{this.isDownloading=!1}}default:throw new Error(\`cannot get data from location: \${this.dataLocation}\`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(t){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return _r(this,t)}}});var de,en=N(()=>{"use strict";ft();de=Z});var xr,Mr,Pe,De,_e,Ue,tn=N(()=>{"use strict";Qt();xr=(n,t)=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||console.timeStamp(\`\${n}::ORT::\${t}\`)},Mr=(n,t)=>{let a=new Error().stack?.split(/\\r\\n|\\r|\\n/g)||[],u=!1;for(let o=0;o<a.length;o++){if(u&&!a[o].includes("TRACE_FUNC")){let d=\`FUNC_\${n}::\${a[o].trim().split(" ")[1]}\`;t&&(d+=\`::\${t}\`),xr("CPU",d);return}a[o].includes("TRACE_FUNC")&&(u=!0)}},Pe=n=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||Mr("BEGIN",n)},De=n=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||Mr("END",n)},_e=n=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||console.time(\`ORT::\${n}\`)},Ue=n=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||console.timeEnd(\`ORT::\${n}\`)}});var ct,Cr=N(()=>{"use strict";Zt();en();tn();ct=class n{constructor(t){this.handler=t}async run(t,a,u){Pe(),_e("InferenceSession.run");let o={},d={};if(typeof t!="object"||t===null||t instanceof de||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let c=!0;if(typeof a=="object"){if(a===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(a instanceof de)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(a)){if(a.length===0)throw new TypeError("'fetches' cannot be an empty array.");c=!1;for(let h of a){if(typeof h!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(h)===-1)throw new RangeError(\`'fetches' contains invalid output name: \${h}.\`);o[h]=null}if(typeof u=="object"&&u!==null)d=u;else if(typeof u<"u")throw new TypeError("'options' must be an object.")}else{let h=!1,g=Object.getOwnPropertyNames(a);for(let b of this.outputNames)if(g.indexOf(b)!==-1){let y=a[b];(y===null||y instanceof de)&&(h=!0,c=!1,o[b]=y)}if(h){if(typeof u=="object"&&u!==null)d=u;else if(typeof u<"u")throw new TypeError("'options' must be an object.")}else d=a}}else if(typeof a<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let h of this.inputNames)if(typeof t[h]>"u")throw new Error(\`input '\${h}' is missing in 'feeds'.\`);if(c)for(let h of this.outputNames)o[h]=null;let l=await this.handler.run(t,o,d),m={};for(let h in l)if(Object.hasOwnProperty.call(l,h)){let g=l[h];g instanceof de?m[h]=g:m[h]=new de(g.type,g.data,g.dims)}return Ue("InferenceSession.run"),De(),m}async release(){return this.handler.dispose()}static async create(t,a,u,o){Pe(),_e("InferenceSession.create");let d,c={};if(typeof t=="string"){if(d=t,typeof a=="object"&&a!==null)c=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(d=t,typeof a=="object"&&a!==null)c=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let g=t,b=0,y=t.byteLength;if(typeof a=="object"&&a!==null)c=a;else if(typeof a=="number"){if(b=a,!Number.isSafeInteger(b))throw new RangeError("'byteOffset' must be an integer.");if(b<0||b>=g.byteLength)throw new RangeError(\`'byteOffset' is out of range [0, \${g.byteLength}).\`);if(y=t.byteLength-b,typeof u=="number"){if(y=u,!Number.isSafeInteger(y))throw new RangeError("'byteLength' must be an integer.");if(y<=0||b+y>g.byteLength)throw new RangeError(\`'byteLength' is out of range (0, \${g.byteLength-b}].\`);if(typeof o=="object"&&o!==null)c=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else if(typeof u<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof a<"u")throw new TypeError("'options' must be an object.");d=new Uint8Array(g,b,y)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,m]=await dr(c),h=await l.createInferenceSessionHandler(d,m);return Ue("InferenceSession.create"),De(),new n(h)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}});var ns,Rr=N(()=>{"use strict";Cr();ns=ct});var Fr=N(()=>{"use strict"});var Nr=N(()=>{"use strict"});var kr=N(()=>{"use strict"});var Wr=N(()=>{"use strict"});var nn={};it(nn,{InferenceSession:()=>ns,TRACE:()=>xr,TRACE_EVENT_BEGIN:()=>_e,TRACE_EVENT_END:()=>Ue,TRACE_FUNC_BEGIN:()=>Pe,TRACE_FUNC_END:()=>De,Tensor:()=>de,env:()=>Y,registerBackend:()=>Je});var Te=N(()=>{"use strict";pr();br();Rr();en();Fr();Nr();tn();kr();Wr()});var lt=N(()=>{"use strict"});var Hr={};it(Hr,{default:()=>rs});var $r,zr,rs,jr=N(()=>{"use strict";rn();xe();dt();$r="ort-wasm-proxy-worker",zr=globalThis.self?.name===$r;zr&&(self.onmessage=n=>{let{type:t,in:a}=n.data;try{switch(t){case"init-wasm":pt(a.wasm).then(()=>{mt(a).then(()=>{postMessage({type:t})},u=>{postMessage({type:t,err:u})})},u=>{postMessage({type:t,err:u})});break;case"init-ep":{let{epName:u,env:o}=a;ht(o,u).then(()=>{postMessage({type:t})},d=>{postMessage({type:t,err:d})});break}case"copy-from":{let{buffer:u}=a,o=Xe(u);postMessage({type:t,out:o});break}case"create":{let{model:u,options:o}=a;wt(u,o).then(d=>{postMessage({type:t,out:d})},d=>{postMessage({type:t,err:d})});break}case"release":bt(a),postMessage({type:t});break;case"run":{let{sessionId:u,inputIndices:o,inputs:d,outputIndices:c,options:l}=a;yt(u,o,d,c,new Array(c.length).fill(null),l).then(m=>{m.some(h=>h[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:m},Et([...d,...m]))},m=>{postMessage({type:t,err:m})});break}case"end-profiling":gt(a),postMessage({type:t});break;default:}}catch(u){postMessage({type:t,err:u})}});rs=zr?null:n=>new Worker(n??oe,{type:"module",name:$r})});var Yr={};it(Yr,{default:()=>os});async function Vr(n={}){var t=n,a=!!globalThis.window,u=!!globalThis.WorkerGlobalScope,o=u&&self.name?.startsWith("em-pthread");t.mountExternalData=(e,r)=>{e.startsWith("./")&&(e=e.substring(2)),(t.Sb||(t.Sb=new Map)).set(e,r)},t.unmountExternalData=()=>{delete t.Sb},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,kc:!0}).buffer.constructor;var d,c,l=(e,r)=>{throw r},m=self.location.href,h="";if(a||u){try{h=new URL(".",m).href}catch{}u&&(c=e=>{var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}),d=async e=>{if(k(e))return new Promise((i,s)=>{var f=new XMLHttpRequest;f.open("GET",e,!0),f.responseType="arraybuffer",f.onload=()=>{f.status==200||f.status==0&&f.response?i(f.response):s(f.status)},f.onerror=s,f.send(null)});var r=await fetch(e,{credentials:"same-origin"});if(r.ok)return r.arrayBuffer();throw Error(r.status+" : "+r.url)}}var g,b,y,T,O,U,z=console.log.bind(console),A=console.error.bind(console),I=z,F=A,D=!1,k=e=>e.startsWith("file://");function w(){ge.buffer!=j.buffer&&ee()}if(o){let e=function(r){try{var i=r.data,s=i.Qb;if(s==="load"){let f=[];self.onmessage=p=>f.push(p),U=()=>{postMessage({Qb:"loaded"});for(let p of f)e(p);self.onmessage=e};for(let p of i.$b)t[p]&&!t[p].proxy||(t[p]=(...E)=>{postMessage({Qb:"callHandler",Zb:p,args:E})},p=="print"&&(I=t[p]),p=="printErr"&&(F=t[p]));ge=i.ec,ee(),b=i.fc,Ut(),st()}else if(s==="run"){(function(f){var p=(w(),W)[f+52>>>2>>>0];f=(w(),W)[f+56>>>2>>>0],sr(p,p-f),P(p)})(i.Pb),zt(i.Pb,0,0,1,0,0),wn(),Ft(i.Pb),Q||=!0;try{Ao(i.cc,i.Ub)}catch(f){if(f!="unwind")throw f}}else i.target!=="setimmediate"&&(s==="checkMailbox"?Q&&nt():s&&(F(\`worker: received unknown command \${s}\`),F(i)))}catch(f){throw tr(),f}};var vs=e,Q=!1;self.onunhandledrejection=r=>{throw r.reason||r},self.onmessage=e}var j,ne,pe,B,W,re,me,v,K,He=!1;function ee(){var e=ge.buffer;t.HEAP8=j=new Int8Array(e),pe=new Int16Array(e),t.HEAPU8=ne=new Uint8Array(e),new Uint16Array(e),t.HEAP32=B=new Int32Array(e),t.HEAPU32=W=new Uint32Array(e),re=new Float32Array(e),me=new Float64Array(e),v=new BigInt64Array(e),new BigUint64Array(e)}function he(){He=!0,o?U():Ee.Ua()}function H(e){throw F(e="Aborted("+e+")"),D=!0,e=new WebAssembly.RuntimeError(e+". Build with -sASSERTIONS for more info."),O?.(e),e}function q(){return{a:{S:fa,f:Io,w:Bo,e:Lo,j:Po,g:Do,T:_o,b:Uo,G:xo,ua:vn,k:Mo,K:In,Ka:Bn,qa:Ln,sa:Pn,La:Dn,Ia:_n,Ba:Un,Ha:xn,Z:Mn,ra:Cn,oa:Rn,Ja:Fn,pa:Nn,Qa:Co,Ea:Ro,ma:No,va:ko,ja:Wo,U:Go,Da:Ft,Na:$o,ya:zo,za:Ho,Aa:jo,wa:$n,xa:zn,ka:Hn,Sa:Yo,Pa:Xo,W:Zo,V:Qo,Oa:Jo,F:Ko,Ma:ea,na:ta,u:Vo,H:na,R:ot,la:oa,da:ra,Ta:aa,Fa:Yn,Ga:Jn,ta:ye,L:qn,Y:Xn,Ca:Zn,X:Qn,$:Va,M:ka,aa:ja,N:Na,v:Pa,c:pa,m:la,n:ca,r:va,ea:Ca,x:Ia,o:ha,O:Ra,D:Wa,I:Ma,ba:Ha,ca:za,Q:Da,P:xa,fa:_a,z:Ba,E:Fa,d:ma,q:wa,i:da,_:Ya,l:ya,p:ga,s:ba,t:Ea,y:Oa,ga:La,B:Ga,J:Aa,C:$a,ha:Sa,ia:Ta,A:Ua,h:ia,a:ge,Ra:V}}}async function Ut(){function e(s,f){return Ee=s.exports,Ee=function(){var p=Ee,E=M=>()=>M()>>>0,S=M=>R=>M(R)>>>0;return(p=Object.assign({},p)).tb=E(p.tb),p.vb=S(p.vb),p.Jb=S(p.Jb),p.Kb=E(p.Kb),p.Ob=S(p.Ob),p}(),mn.push(Ee.wb),s=Ee,t._OrtInit=s.Va,t._OrtGetLastError=s.Wa,t._OrtCreateSessionOptions=s.Xa,t._OrtAppendExecutionProvider=s.Ya,t._OrtAddFreeDimensionOverride=s.Za,t._OrtAddSessionConfigEntry=s._a,t._OrtReleaseSessionOptions=s.$a,t._OrtCreateSession=s.ab,t._OrtReleaseSession=s.bb,t._OrtGetInputOutputCount=s.cb,t._OrtGetInputOutputMetadata=s.db,t._OrtFree=s.eb,t._OrtCreateTensor=s.fb,t._OrtGetTensorData=s.gb,t._OrtReleaseTensor=s.hb,t._OrtCreateRunOptions=s.ib,t._OrtAddRunConfigEntry=s.jb,t._OrtReleaseRunOptions=s.kb,t._OrtCreateBinding=s.lb,t._OrtBindInput=s.mb,t._OrtBindOutput=s.nb,t._OrtClearBoundOutputs=s.ob,t._OrtReleaseBinding=s.pb,t._OrtRunWithBinding=s.qb,t._OrtRun=s.rb,t._OrtEndProfiling=s.sb,at=s.tb,Kn=t._free=s.ub,er=t._malloc=s.vb,zt=s.yb,tr=s.zb,nr=s.Ab,rr=s.Bb,Ht=s.Cb,or=s.Db,ar=s.Eb,x=s.Fb,Ye=s.Gb,sr=s.Hb,P=s.Ib,jt=s.Jb,_=s.Kb,ir=s.Lb,Vt=s.Mb,ur=s.Nb,fr=s.Ob,cr=s.xb,b=f,Ee}var r,i=q();return t.instantiateWasm?new Promise(s=>{t.instantiateWasm(i,(f,p)=>{s(e(f,p))})}):o?e(new WebAssembly.Instance(b,q()),b):(K??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.wasm",h):h+"ort-wasm-simd-threaded.wasm":"",r=await async function(s){var f=K;if(!g&&!k(f))try{var p=fetch(f,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(p,s)}catch(E){F(\`wasm streaming compile failed: \${E}\`),F("falling back to ArrayBuffer instantiation")}return async function(E,S){try{var M=await async function(R){if(!g)try{var X=await d(R);return new Uint8Array(X)}catch{}if(R==K&&g)R=new Uint8Array(g);else{if(!c)throw"both async and sync fetching of the wasm failed";R=c(R)}return R}(E);return await WebAssembly.instantiate(M,S)}catch(R){F(\`failed to asynchronously prepare wasm: \${R}\`),H(R)}}(f,s)}(i),e(r.instance,r.module))}class Se{name="ExitStatus";constructor(r){this.message=\`Program terminated with exit(\${r})\`,this.status=r}}var ve=e=>{e.terminate(),e.onmessage=()=>{}},je=[],Re=0,te=null,ue=e=>{ce.length==0&&(yn(),bn(ce[0]));var r=ce.pop();if(!r)return 6;Fe.push(r),Oe[e.Pb]=r,r.Pb=e.Pb;var i={Qb:"run",cc:e.bc,Ub:e.Ub,Pb:e.Pb};return r.postMessage(i,e.Yb),0},se=0,L=(e,r,...i)=>{var s,f=16*i.length,p=_(),E=jt(f),S=E>>>3;for(s of i)typeof s=="bigint"?((w(),v)[S++>>>0]=1n,(w(),v)[S++>>>0]=s):((w(),v)[S++>>>0]=0n,(w(),me)[S++>>>0]=s);return e=nr(e,0,f,E,r),P(p),e};function V(e){if(o)return L(0,1,e);if(y=e,!(0<se)){for(var r of Fe)ve(r);for(r of ce)ve(r);ce=[],Fe=[],Oe={},D=!0}l(0,new Se(e))}function fe(e){if(o)return L(1,0,e);ye(e)}var ye=e=>{if(y=e,o)throw fe(e),"unwind";V(e)},ce=[],Fe=[],mn=[],Oe={},hn=e=>{var r=e.Pb;delete Oe[r],ce.push(e),Fe.splice(Fe.indexOf(e),1),e.Pb=0,rr(r)};function wn(){mn.forEach(e=>e())}var bn=e=>new Promise(r=>{e.onmessage=f=>{var p=f.data;if(f=p.Qb,p.Tb&&p.Tb!=at()){var E=Oe[p.Tb];E?E.postMessage(p,p.Yb):F(\`Internal error! Worker sent a message "\${f}" to target pthread \${p.Tb}, but that thread no longer exists!\`)}else f==="checkMailbox"?nt():f==="spawnThread"?ue(p):f==="cleanupThread"?Rt(()=>{hn(Oe[p.dc])}):f==="loaded"?(e.loaded=!0,r(e)):p.target==="setimmediate"?e.postMessage(p):f==="uncaughtException"?e.onerror(p.error):f==="callHandler"?t[p.Zb](...p.args):f&&F(\`worker sent an unknown command \${f}\`)},e.onerror=f=>{throw F(\`worker sent an error! \${f.filename}:\${f.lineno}: \${f.message}\`),f};var i,s=[];for(i of[])t.propertyIsEnumerable(i)&&s.push(i);e.postMessage({Qb:"load",$b:s,ec:ge,fc:b})});function yn(){var e=new Worker((()=>{let r=URL;return self.location.href>"file:"&&self.location.href<"file;"?new r("ort.wasm.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});ce.push(e)}var ge,gn=[],C=e=>{var r=gn[e];return r||(gn[e]=r=cr.get(e)),r},Ao=(e,r)=>{se=0,e=C(e)(r),0<se?y=e:Ht(e)},et=[],tt=0;function Io(e){var r=new xt(e>>>=0);return(w(),j)[r.Rb+12>>>0]==0&&(En(r,!0),tt--),Tn(r,!1),et.push(r),fr(e)}var Ne=0,Bo=()=>{x(0,0);var e=et.pop();ir(e.Vb),Ne=0};function En(e,r){r=r?1:0,(w(),j)[e.Rb+12>>>0]=r}function Tn(e,r){r=r?1:0,(w(),j)[e.Rb+13>>>0]=r}class xt{constructor(r){this.Vb=r,this.Rb=r-24}}var Mt=e=>{var r=Ne;if(!r)return Ye(0),0;var i=new xt(r);(w(),W)[i.Rb+16>>>2>>>0]=r;var s=(w(),W)[i.Rb+4>>>2>>>0];if(!s)return Ye(0),r;for(var f of e){if(f===0||f===s)break;if(ur(f,s,i.Rb+16))return Ye(f),r}return Ye(s),r};function Lo(){return Mt([])}function Po(e){return Mt([e>>>0])}function Do(e,r,i,s){return Mt([e>>>0,r>>>0,i>>>0,s>>>0])}var _o=()=>{var e=et.pop();e||H("no exception to throw");var r=e.Vb;throw(w(),j)[e.Rb+13>>>0]==0&&(et.push(e),Tn(e,!0),En(e,!1),tt++),Vt(r),Ne=r};function Uo(e,r,i){var s=new xt(e>>>=0);throw r>>>=0,i>>>=0,(w(),W)[s.Rb+16>>>2>>>0]=0,(w(),W)[s.Rb+4>>>2>>>0]=r,(w(),W)[s.Rb+8>>>2>>>0]=i,Vt(e),tt++,Ne=e}var xo=()=>tt;function Sn(e,r,i,s){return o?L(2,1,e,r,i,s):vn(e,r,i,s)}function vn(e,r,i,s){if(e>>>=0,r>>>=0,i>>>=0,s>>>=0,!globalThis.SharedArrayBuffer)return 6;var f=[];return o&&f.length===0?Sn(e,r,i,s):(e={bc:i,Pb:e,Ub:s,Yb:f},o?(e.Qb="spawnThread",postMessage(e,f),0):ue(e))}function Mo(e){throw Ne||=e>>>0,Ne}var On=globalThis.TextDecoder&&new TextDecoder,An=(e,r=0,i,s)=>{var f=r>>>=0;if(i=f+i,s)s=i;else{for(;e[f]&&!(f>=i);)++f;s=f}if(16<s-r&&e.buffer&&On)return On.decode(e.buffer instanceof ArrayBuffer?e.subarray(r,s):e.slice(r,s));for(f="";r<s;)if(128&(i=e[r++])){var p=63&e[r++];if((224&i)==192)f+=String.fromCharCode((31&i)<<6|p);else{var E=63&e[r++];65536>(i=(240&i)==224?(15&i)<<12|p<<6|E:(7&i)<<18|p<<12|E<<6|63&e[r++])?f+=String.fromCharCode(i):(i-=65536,f+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else f+=String.fromCharCode(i);return f},Ct=(e,r,i)=>(e>>>=0)?An((w(),ne),e,r,i):"";function In(e,r,i){return o?L(3,1,e,r,i):0}function Bn(e,r){if(o)return L(4,1,e,r)}function Ln(e,r){if(o)return L(5,1,e,r)}function Pn(e,r,i){if(o)return L(6,1,e,r,i)}function Dn(e,r,i){return o?L(7,1,e,r,i):0}function _n(e,r){if(o)return L(8,1,e,r)}function Un(e,r,i){if(o)return L(9,1,e,r,i)}function xn(e,r,i,s){if(o)return L(10,1,e,r,i,s)}function Mn(e,r,i,s){if(o)return L(11,1,e,r,i,s)}function Cn(e,r,i,s){if(o)return L(12,1,e,r,i,s)}function Rn(e){if(o)return L(13,1,e)}function Fn(e,r){if(o)return L(14,1,e,r)}function Nn(e,r,i){if(o)return L(15,1,e,r,i)}var Co=()=>H("");function Ro(e){zt(e>>>0,!u,1,!a,131072,!1),wn()}var Rt=e=>{if(!D)try{if(e(),!(0<se))try{o?at()&&Ht(y):ye(y)}catch(r){r instanceof Se||r=="unwind"||l(0,r)}}catch(r){r instanceof Se||r=="unwind"||l(0,r)}},Fo=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\\/([0-9]+)\\./)||[])[2]);function Ft(e){e>>>=0,Fo||(Atomics.waitAsync((w(),B),e>>>2,e).value.then(nt),e+=128,Atomics.store((w(),B),e>>>2,1))}var nt=()=>Rt(()=>{var e=at();e&&(Ft(e),ar())});function No(e,r){(e>>>=0)==r>>>0?setTimeout(nt):o?postMessage({Tb:e,Qb:"checkMailbox"}):(e=Oe[e])&&e.postMessage({Qb:"checkMailbox"})}var Nt=[];function ko(e,r,i,s,f){for(r>>>=0,f>>>=0,Nt.length=0,i=f>>>3,s=f+s>>>3;i<s;){var p;p=(w(),v)[i++>>>0]?(w(),v)[i++>>>0]:(w(),me)[i++>>>0],Nt.push(p)}return(r?lr[r]:ua[e])(...Nt)}var Wo=()=>{se=0};function Go(e){e>>>=0,o?postMessage({Qb:"cleanupThread",dc:e}):hn(Oe[e])}function $o(e){}function zo(e,r){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),r>>>=0,e=new Date(1e3*e),(w(),B)[r>>>2>>>0]=e.getUTCSeconds(),(w(),B)[r+4>>>2>>>0]=e.getUTCMinutes(),(w(),B)[r+8>>>2>>>0]=e.getUTCHours(),(w(),B)[r+12>>>2>>>0]=e.getUTCDate(),(w(),B)[r+16>>>2>>>0]=e.getUTCMonth(),(w(),B)[r+20>>>2>>>0]=e.getUTCFullYear()-1900,(w(),B)[r+24>>>2>>>0]=e.getUTCDay(),e=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(w(),B)[r+28>>>2>>>0]=e}var kn=e=>e%4==0&&(e%100!=0||e%400==0),Wn=[0,31,60,91,121,152,182,213,244,274,305,335],Gn=[0,31,59,90,120,151,181,212,243,273,304,334];function Ho(e,r){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),r>>>=0,e=new Date(1e3*e),(w(),B)[r>>>2>>>0]=e.getSeconds(),(w(),B)[r+4>>>2>>>0]=e.getMinutes(),(w(),B)[r+8>>>2>>>0]=e.getHours(),(w(),B)[r+12>>>2>>>0]=e.getDate(),(w(),B)[r+16>>>2>>>0]=e.getMonth(),(w(),B)[r+20>>>2>>>0]=e.getFullYear()-1900,(w(),B)[r+24>>>2>>>0]=e.getDay();var i=(kn(e.getFullYear())?Wn:Gn)[e.getMonth()]+e.getDate()-1|0;(w(),B)[r+28>>>2>>>0]=i,(w(),B)[r+36>>>2>>>0]=-60*e.getTimezoneOffset(),i=new Date(e.getFullYear(),6,1).getTimezoneOffset();var s=new Date(e.getFullYear(),0,1).getTimezoneOffset();e=0|(i!=s&&e.getTimezoneOffset()==Math.min(s,i)),(w(),B)[r+32>>>2>>>0]=e}function jo(e){e>>>=0;var r=new Date((w(),B)[e+20>>>2>>>0]+1900,(w(),B)[e+16>>>2>>>0],(w(),B)[e+12>>>2>>>0],(w(),B)[e+8>>>2>>>0],(w(),B)[e+4>>>2>>>0],(w(),B)[e>>>2>>>0],0),i=(w(),B)[e+32>>>2>>>0],s=r.getTimezoneOffset(),f=new Date(r.getFullYear(),6,1).getTimezoneOffset(),p=new Date(r.getFullYear(),0,1).getTimezoneOffset(),E=Math.min(p,f);return 0>i?(w(),B)[e+32>>>2>>>0]=+(f!=p&&E==s):0<i!=(E==s)&&(f=Math.max(p,f),r.setTime(r.getTime()+6e4*((0<i?E:f)-s))),(w(),B)[e+24>>>2>>>0]=r.getDay(),i=(kn(r.getFullYear())?Wn:Gn)[r.getMonth()]+r.getDate()-1|0,(w(),B)[e+28>>>2>>>0]=i,(w(),B)[e>>>2>>>0]=r.getSeconds(),(w(),B)[e+4>>>2>>>0]=r.getMinutes(),(w(),B)[e+8>>>2>>>0]=r.getHours(),(w(),B)[e+12>>>2>>>0]=r.getDate(),(w(),B)[e+16>>>2>>>0]=r.getMonth(),(w(),B)[e+20>>>2>>>0]=r.getYear(),e=r.getTime(),BigInt(isNaN(e)?-1:e/1e3)}function $n(e,r,i,s,f,p,E){return o?L(16,1,e,r,i,s,f,p,E):-52}function zn(e,r,i,s,f,p){if(o)return L(17,1,e,r,i,s,f,p)}var Ve={},Vo=()=>performance.timeOrigin+performance.now();function Hn(e,r){if(o)return L(18,1,e,r);if(Ve[e]&&(clearTimeout(Ve[e].id),delete Ve[e]),!r)return 0;var i=setTimeout(()=>{delete Ve[e],Rt(()=>or(e,performance.timeOrigin+performance.now()))},r);return Ve[e]={id:i,lc:r},0}var Ae=(e,r,i)=>{var s=(w(),ne);if(r>>>=0,0<i){var f=r;i=r+i-1;for(var p=0;p<e.length;++p){var E=e.codePointAt(p);if(127>=E){if(r>=i)break;s[r++>>>0]=E}else if(2047>=E){if(r+1>=i)break;s[r++>>>0]=192|E>>6,s[r++>>>0]=128|63&E}else if(65535>=E){if(r+2>=i)break;s[r++>>>0]=224|E>>12,s[r++>>>0]=128|E>>6&63,s[r++>>>0]=128|63&E}else{if(r+3>=i)break;s[r++>>>0]=240|E>>18,s[r++>>>0]=128|E>>12&63,s[r++>>>0]=128|E>>6&63,s[r++>>>0]=128|63&E,p++}}s[r>>>0]=0,e=r-f}else e=0;return e};function Yo(e,r,i,s){e>>>=0,r>>>=0,i>>>=0,s>>>=0;var f=new Date().getFullYear(),p=new Date(f,0,1).getTimezoneOffset();f=new Date(f,6,1).getTimezoneOffset();var E=Math.max(p,f);(w(),W)[e>>>2>>>0]=60*E,(w(),B)[r>>>2>>>0]=+(p!=f),e=(r=S=>{var M=Math.abs(S);return\`UTC\${0<=S?"-":"+"}\${String(Math.floor(M/60)).padStart(2,"0")}\${String(M%60).padStart(2,"0")}\`})(p),r=r(f),f<p?(Ae(e,i,17),Ae(r,s,17)):(Ae(e,s,17),Ae(r,i,17))}var Jo=()=>Date.now(),qo=1;function Xo(e,r,i){if(i>>>=0,!(0<=e&&3>=e))return 28;if(e===0)e=Date.now();else{if(!qo)return 52;e=performance.timeOrigin+performance.now()}return e=Math.round(1e6*e),(w(),v)[i>>>3>>>0]=BigInt(e),0}var kt=[];function Zo(e,r,i){e>>>=0,r>>>=0,i>>>=0,kt.length=0;for(var s;s=(w(),ne)[r++>>>0];){var f=s!=105;i+=(f&=s!=112)&&i%8?4:0,kt.push(s==112?(w(),W)[i>>>2>>>0]:s==106?(w(),v)[i>>>3>>>0]:s==105?(w(),B)[i>>>2>>>0]:(w(),me)[i>>>3>>>0]),i+=f?8:4}return lr[e](...kt)}var Qo=()=>{};function Ko(e,r){return F(Ct(e>>>0,r>>>0))}var ea=()=>{throw se+=1,"unwind"};function ta(){return 4294901760}var na=()=>navigator.hardwareConcurrency,Ie={},Wt=e=>{for(var r=0,i=0;i<e.length;++i){var s=e.charCodeAt(i);127>=s?r++:2047>=s?r+=2:55296<=s&&57343>=s?(r+=4,++i):r+=3}return r},rt=e=>{var r;return(r=/\\bwasm-function\\[\\d+\\]:(0x[0-9a-f]+)/.exec(e))?+r[1]:(r=/:(\\d+):\\d+(?:\\)|$)/.exec(e))?2147483648|+r[1]:0},jn=e=>{for(var r of e)(e=rt(r))&&(Ie[e]=r)};function ra(){var e=Error().stack.toString().split(\`
\`);return e[0]=="Error"&&e.shift(),jn(e),Ie.Wb=rt(e[3]),Ie.ac=e,Ie.Wb}function ot(e){if(!(e=Ie[e>>>0]))return 0;var r;if(r=/^\\s+at .*\\.wasm\\.(.*) \\(.*\\)$/.exec(e))e=r[1];else if(r=/^\\s+at (.*) \\(.*\\)$/.exec(e))e=r[1];else{if(!(r=/^(.+?)@/.exec(e)))return 0;e=r[1]}Kn(ot.Xb??0),r=Wt(e)+1;var i=er(r);return i&&Ae(e,i,r),ot.Xb=i,ot.Xb}function oa(e){e>>>=0;var r=(w(),ne).length;if(e<=r||4294901760<e)return!1;for(var i=1;4>=i;i*=2){var s=r*(1+.2/i);s=Math.min(s,e+100663296);e:{s=(Math.min(4294901760,65536*Math.ceil(Math.max(e,s)/65536))-ge.buffer.byteLength+65535)/65536|0;try{ge.grow(s),ee();var f=1;break e}catch{}f=void 0}if(f)return!0}return!1}function aa(e,r,i){if(e>>>=0,r>>>=0,Ie.Wb==e)var s=Ie.ac;else(s=Error().stack.toString().split(\`
\`))[0]=="Error"&&s.shift(),jn(s);for(var f=3;s[f]&&rt(s[f])!=e;)++f;for(e=0;e<i&&s[e+f];++e)(w(),B)[r+4*e>>>2>>>0]=rt(s[e+f]);return e}var Gt,$t={},Vn=()=>{if(!Gt){var e,r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(e in $t)$t[e]===void 0?delete r[e]:r[e]=$t[e];var i=[];for(e in r)i.push(\`\${e}=\${r[e]}\`);Gt=i}return Gt};function Yn(e,r){if(o)return L(19,1,e,r);e>>>=0,r>>>=0;var i,s=0,f=0;for(i of Vn()){var p=r+s;(w(),W)[e+f>>>2>>>0]=p,s+=Ae(i,p,1/0)+1,f+=4}return 0}function Jn(e,r){if(o)return L(20,1,e,r);e>>>=0,r>>>=0;var i=Vn();for(var s of((w(),W)[e>>>2>>>0]=i.length,e=0,i))e+=Wt(s)+1;return(w(),W)[r>>>2>>>0]=e,0}function qn(e){return o?L(21,1,e):52}function Xn(e,r,i,s){return o?L(22,1,e,r,i,s):52}function Zn(e,r,i,s){return o?L(23,1,e,r,i,s):70}var sa=[null,[],[]];function Qn(e,r,i,s){if(o)return L(24,1,e,r,i,s);r>>>=0,i>>>=0,s>>>=0;for(var f=0,p=0;p<i;p++){var E=(w(),W)[r>>>2>>>0],S=(w(),W)[r+4>>>2>>>0];r+=8;for(var M=0;M<S;M++){var R=e,X=(w(),ne)[E+M>>>0],le=sa[R];X===0||X===10?((R===1?I:F)(An(le)),le.length=0):le.push(X)}f+=S}return(w(),W)[s>>>2>>>0]=f,0}function ia(e){return e>>>0}o||function(){for(var e=t.numThreads-1;e--;)yn();je.push(async()=>{var r=async function(){if(!o)return Promise.all(ce.map(bn))}();Re++,await r,--Re==0&&te&&(r=te,te=null,r())})}(),o||(ge=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),ee()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>_(),t.stackRestore=e=>P(e),t.stackAlloc=e=>jt(e),t.setValue=function(e,r,i="i8"){switch(i.endsWith("*")&&(i="*"),i){case"i1":case"i8":(w(),j)[e>>>0]=r;break;case"i16":(w(),pe)[e>>>1>>>0]=r;break;case"i32":(w(),B)[e>>>2>>>0]=r;break;case"i64":(w(),v)[e>>>3>>>0]=BigInt(r);break;case"float":(w(),re)[e>>>2>>>0]=r;break;case"double":(w(),me)[e>>>3>>>0]=r;break;case"*":(w(),W)[e>>>2>>>0]=r;break;default:H(\`invalid type for setValue: \${i}\`)}},t.getValue=function(e,r="i8"){switch(r.endsWith("*")&&(r="*"),r){case"i1":case"i8":return(w(),j)[e>>>0];case"i16":return(w(),pe)[e>>>1>>>0];case"i32":return(w(),B)[e>>>2>>>0];case"i64":return(w(),v)[e>>>3>>>0];case"float":return(w(),re)[e>>>2>>>0];case"double":return(w(),me)[e>>>3>>>0];case"*":return(w(),W)[e>>>2>>>0];default:H(\`invalid type for getValue: \${r}\`)}},t.UTF8ToString=Ct,t.stringToUTF8=Ae,t.lengthBytesUTF8=Wt;var at,Kn,er,zt,tr,nr,rr,Ht,or,ar,x,Ye,sr,P,jt,_,ir,Vt,ur,fr,cr,Ee,ua=[V,fe,Sn,In,Bn,Ln,Pn,Dn,_n,Un,xn,Mn,Cn,Rn,Fn,Nn,$n,zn,Hn,Yn,Jn,qn,Xn,Zn,Qn],lr={885788:(e,r,i,s,f)=>{if(t===void 0||!t.Sb)return 1;if((e=Ct(Number(e>>>0))).startsWith("./")&&(e=e.substring(2)),!(e=t.Sb.get(e)))return 2;if(r=Number(r>>>0),i=Number(i>>>0),s=Number(s>>>0),r+i>e.byteLength)return 3;try{let p=e.subarray(r,r+i);switch(f){case 0:(w(),ne).set(p,s>>>0);break;case 1:t.hc?t.hc(s,p):t.jc(s,p);break;default:return 4}return 0}catch{return 4}},886612:()=>typeof wasmOffsetConverter<"u"};function fa(){return typeof wasmOffsetConverter<"u"}function ca(e,r,i,s){var f=_();try{return C(e)(r,i,s)}catch(p){if(P(f),p!==p+0)throw p;x(1,0)}}function la(e,r,i){var s=_();try{return C(e)(r,i)}catch(f){if(P(s),f!==f+0)throw f;x(1,0)}}function da(e,r,i){var s=_();try{C(e)(r,i)}catch(f){if(P(s),f!==f+0)throw f;x(1,0)}}function pa(e,r){var i=_();try{return C(e)(r)}catch(s){if(P(i),s!==s+0)throw s;x(1,0)}}function ma(e){var r=_();try{C(e)()}catch(i){if(P(r),i!==i+0)throw i;x(1,0)}}function ha(e,r,i,s,f,p,E){var S=_();try{return C(e)(r,i,s,f,p,E)}catch(M){if(P(S),M!==M+0)throw M;x(1,0)}}function wa(e,r){var i=_();try{C(e)(r)}catch(s){if(P(i),s!==s+0)throw s;x(1,0)}}function ba(e,r,i,s,f,p){var E=_();try{C(e)(r,i,s,f,p)}catch(S){if(P(E),S!==S+0)throw S;x(1,0)}}function ya(e,r,i,s){var f=_();try{C(e)(r,i,s)}catch(p){if(P(f),p!==p+0)throw p;x(1,0)}}function ga(e,r,i,s,f){var p=_();try{C(e)(r,i,s,f)}catch(E){if(P(p),E!==E+0)throw E;x(1,0)}}function Ea(e,r,i,s,f,p,E){var S=_();try{C(e)(r,i,s,f,p,E)}catch(M){if(P(S),M!==M+0)throw M;x(1,0)}}function Ta(e,r,i,s,f,p,E){var S=_();try{C(e)(r,i,s,f,p,E)}catch(M){if(P(S),M!==M+0)throw M;x(1,0)}}function Sa(e,r,i,s,f,p,E,S){var M=_();try{C(e)(r,i,s,f,p,E,S)}catch(R){if(P(M),R!==R+0)throw R;x(1,0)}}function va(e,r,i,s,f){var p=_();try{return C(e)(r,i,s,f)}catch(E){if(P(p),E!==E+0)throw E;x(1,0)}}function Oa(e,r,i,s,f,p,E,S){var M=_();try{C(e)(r,i,s,f,p,E,S)}catch(R){if(P(M),R!==R+0)throw R;x(1,0)}}function Aa(e,r,i,s,f,p,E,S,M,R,X,le){var we=_();try{C(e)(r,i,s,f,p,E,S,M,R,X,le)}catch(be){if(P(we),be!==be+0)throw be;x(1,0)}}function Ia(e,r,i,s,f,p){var E=_();try{return C(e)(r,i,s,f,p)}catch(S){if(P(E),S!==S+0)throw S;x(1,0)}}function Ba(e,r,i){var s=_();try{return C(e)(r,i)}catch(f){if(P(s),f!==f+0)throw f;return x(1,0),0n}}function La(e,r,i,s,f,p,E,S,M){var R=_();try{C(e)(r,i,s,f,p,E,S,M)}catch(X){if(P(R),X!==X+0)throw X;x(1,0)}}function Pa(e){var r=_();try{return C(e)()}catch(i){if(P(r),i!==i+0)throw i;x(1,0)}}function Da(e,r,i){var s=_();try{return C(e)(r,i)}catch(f){if(P(s),f!==f+0)throw f;x(1,0)}}function _a(e,r){var i=_();try{return C(e)(r)}catch(s){if(P(i),s!==s+0)throw s;return x(1,0),0n}}function Ua(e,r,i,s,f){var p=_();try{C(e)(r,i,s,f)}catch(E){if(P(p),E!==E+0)throw E;x(1,0)}}function xa(e){var r=_();try{return C(e)()}catch(i){if(P(r),i!==i+0)throw i;return x(1,0),0n}}function Ma(e,r,i,s,f,p){var E=_();try{return C(e)(r,i,s,f,p)}catch(S){if(P(E),S!==S+0)throw S;x(1,0)}}function Ca(e,r,i,s,f,p){var E=_();try{return C(e)(r,i,s,f,p)}catch(S){if(P(E),S!==S+0)throw S;x(1,0)}}function Ra(e,r,i,s,f,p,E,S){var M=_();try{return C(e)(r,i,s,f,p,E,S)}catch(R){if(P(M),R!==R+0)throw R;x(1,0)}}function Fa(e,r,i,s,f){var p=_();try{return C(e)(r,i,s,f)}catch(E){if(P(p),E!==E+0)throw E;return x(1,0),0n}}function Na(e,r,i,s){var f=_();try{return C(e)(r,i,s)}catch(p){if(P(f),p!==p+0)throw p;x(1,0)}}function ka(e,r,i,s){var f=_();try{return C(e)(r,i,s)}catch(p){if(P(f),p!==p+0)throw p;x(1,0)}}function Wa(e,r,i,s,f,p,E,S,M,R,X,le){var we=_();try{return C(e)(r,i,s,f,p,E,S,M,R,X,le)}catch(be){if(P(we),be!==be+0)throw be;x(1,0)}}function Ga(e,r,i,s,f,p,E,S,M,R,X){var le=_();try{C(e)(r,i,s,f,p,E,S,M,R,X)}catch(we){if(P(le),we!==we+0)throw we;x(1,0)}}function $a(e,r,i,s,f,p,E,S,M,R,X,le,we,be,Ja,qa){var Xa=_();try{C(e)(r,i,s,f,p,E,S,M,R,X,le,we,be,Ja,qa)}catch(Yt){if(P(Xa),Yt!==Yt+0)throw Yt;x(1,0)}}function za(e,r,i,s){var f=_();try{return C(e)(r,i,s)}catch(p){if(P(f),p!==p+0)throw p;x(1,0)}}function Ha(e,r,i,s,f){var p=_();try{return C(e)(r,i,s,f)}catch(E){if(P(p),E!==E+0)throw E;x(1,0)}}function ja(e,r,i){var s=_();try{return C(e)(r,i)}catch(f){if(P(s),f!==f+0)throw f;x(1,0)}}function Va(e,r,i){var s=_();try{return C(e)(r,i)}catch(f){if(P(s),f!==f+0)throw f;x(1,0)}}function Ya(e,r,i,s){var f=_();try{C(e)(r,i,s)}catch(p){if(P(f),p!==p+0)throw p;x(1,0)}}function st(){if(0<Re)te=st;else if(o)T?.(t),he();else{for(var e=je;0<e.length;)e.shift()(t);0<Re?te=st:(t.calledRun=!0,D||(he(),T?.(t)))}}return o||(Ee=await Ut(),st()),t.PTR_SIZE=4,He?t:new Promise((e,r)=>{T=e,O=r})}var os,as,Jr=N(()=>{"use strict";os=Vr,as=globalThis.self?.name?.startsWith("em-pthread");as&&Vr()});var Zr,an,ss,oe,Qr,on,is,us,Kr,fs,qr,eo,Xr,to,dt=N(()=>{"use strict";lt();Zr=typeof location>"u"?void 0:location.origin,an=self.location.href>"file:"&&self.location.href<"file;",ss=()=>{if(!!1){if(an){let n=URL;return new URL(new n("ort.wasm.bundle.min.mjs",self.location.href).href,Zr).href}return self.location.href}},oe=ss(),Qr=()=>{if(oe&&!oe.startsWith("blob:"))return oe.substring(0,oe.lastIndexOf("/")+1)},on=(n,t)=>{try{let a=t??oe;return(a?new URL(n,a):new URL(n)).origin===Zr}catch{return!1}},is=(n,t)=>{let a=t??oe;try{return(a?new URL(n,a):new URL(n)).href}catch{return}},us=(n,t)=>\`\${t??"./"}\${n}\`,Kr=async n=>{let a=await(await fetch(n,{credentials:"same-origin"})).blob();return URL.createObjectURL(a)},fs=async n=>(await import(/*webpackIgnore:true*/ /*@vite-ignore*/n)).default,qr=(jr(),Xt(Hr)).default,eo=async()=>{if(!oe)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(on(oe))return[void 0,qr()];let n=await Kr(oe);return[n,qr(n)]},Xr=(Jr(),Xt(Yr)).default,to=async(n,t,a,u)=>{let o=Xr&&!(n||t);if(o)if(oe)o=on(oe);else if(u&&!a)o=!0;else throw new Error("cannot determine the script source URL.");if(o)return[void 0,Xr];{let d="ort-wasm-simd-threaded.mjs",c=n??is(d,t),l=!!1&&a&&c&&!on(c,t),m=l?await Kr(c):c??us(d,t);return[l?m:void 0,await fs(m)]}}});var sn,un,Tt,no,cs,ls,ds,pt,$,xe=N(()=>{"use strict";dt();un=!1,Tt=!1,no=!1,cs=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ls=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ds=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},pt=async n=>{if(un)return Promise.resolve();if(Tt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(no)throw new Error("previous call to 'initializeWebAssembly()' failed.");Tt=!0;let t=n.initTimeout,a=n.numThreads;if(n.simd!==!1){if(n.simd==="relaxed"){if(!ds())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!ls())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let u=cs();a>1&&!u&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+a+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),n.numThreads=a=1);let o=n.wasmPaths,d=typeof o=="string"?o:void 0,c=o?.mjs,l=c?.href??c,m=o?.wasm,h=m?.href??m,g=n.wasmBinary,[b,y]=await to(l,d,a>1,!!g||!!h),T=!1,O=[];if(t>0&&O.push(new Promise(U=>{setTimeout(()=>{T=!0,U()},t)})),O.push(new Promise((U,z)=>{let A={numThreads:a};if(g)A.wasmBinary=g;else if(h||d)A.locateFile=I=>h??d+I;else if(l&&l.indexOf("blob:")!==0)A.locateFile=I=>new URL(I,l).href;else if(b){let I=Qr();I&&(A.locateFile=F=>I+F)}y(A).then(I=>{Tt=!1,un=!0,sn=I,U(),b&&URL.revokeObjectURL(b)},I=>{Tt=!1,no=!0,z(I)})})),await Promise.race(O),T)throw new Error(\`WebAssembly backend initializing failed due to timeout: \${t}ms\`)},$=()=>{if(un&&sn)return sn;throw new Error("WebAssembly is not initialized yet.")}});var ae,Ze,G,St=N(()=>{"use strict";xe();ae=(n,t)=>{let a=$(),u=a.lengthBytesUTF8(n)+1,o=a._malloc(u);return a.stringToUTF8(n,o,u),t.push(o),o},Ze=(n,t,a,u)=>{if(typeof n=="object"&&n!==null){if(a.has(n))throw new Error("Circular reference in options");a.add(n)}Object.entries(n).forEach(([o,d])=>{let c=t?t+o:o;if(typeof d=="object")Ze(d,c+".",a,u);else if(typeof d=="string"||typeof d=="number")u(c,d.toString());else if(typeof d=="boolean")u(c,d?"1":"0");else throw new Error(\`Can't handle extra config type: \${typeof d}\`)})},G=n=>{let t=$(),a=t.stackSave();try{let u=t.PTR_SIZE,o=t.stackAlloc(2*u);t._OrtGetLastError(o,o+u);let d=Number(t.getValue(o,u===4?"i32":"i64")),c=t.getValue(o+u,"*"),l=c?t.UTF8ToString(c):"";throw new Error(\`\${n} ERROR_CODE: \${d}, ERROR_MESSAGE: \${l}\`)}finally{t.stackRestore(a)}}});var ro,oo=N(()=>{"use strict";xe();St();ro=n=>{let t=$(),a=0,u=[],o=n||{};try{if(n?.logSeverityLevel===void 0)o.logSeverityLevel=2;else if(typeof n.logSeverityLevel!="number"||!Number.isInteger(n.logSeverityLevel)||n.logSeverityLevel<0||n.logSeverityLevel>4)throw new Error(\`log severity level is not valid: \${n.logSeverityLevel}\`);if(n?.logVerbosityLevel===void 0)o.logVerbosityLevel=0;else if(typeof n.logVerbosityLevel!="number"||!Number.isInteger(n.logVerbosityLevel))throw new Error(\`log verbosity level is not valid: \${n.logVerbosityLevel}\`);n?.terminate===void 0&&(o.terminate=!1);let d=0;return n?.tag!==void 0&&(d=ae(n.tag,u)),a=t._OrtCreateRunOptions(o.logSeverityLevel,o.logVerbosityLevel,!!o.terminate,d),a===0&&G("Can't create run options."),n?.extra!==void 0&&Ze(n.extra,"",new WeakSet,(c,l)=>{let m=ae(c,u),h=ae(l,u);t._OrtAddRunConfigEntry(a,m,h)!==0&&G(\`Can't set a run config entry: \${c} - \${l}.\`)}),[a,u]}catch(d){throw a!==0&&t._OrtReleaseRunOptions(a),u.forEach(c=>t._free(c)),d}}});var ps,ms,hs,vt,ws,ao,so=N(()=>{"use strict";xe();St();ps=n=>{switch(n){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(\`unsupported graph optimization level: \${n}\`)}},ms=n=>{switch(n){case"sequential":return 0;case"parallel":return 1;default:throw new Error(\`unsupported execution mode: \${n}\`)}},hs=n=>{n.extra||(n.extra={}),n.extra.session||(n.extra.session={});let t=n.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),n.executionProviders&&n.executionProviders.some(a=>(typeof a=="string"?a:a.name)==="webgpu")&&(n.enableMemPattern=!1)},vt=(n,t,a,u)=>{let o=ae(t,u),d=ae(a,u);$()._OrtAddSessionConfigEntry(n,o,d)!==0&&G(\`Can't set a session config entry: \${t} - \${a}.\`)},ws=async(n,t,a)=>{let u=t.executionProviders;for(let o of u){let d=typeof o=="string"?o:o.name,c=[];switch(d){case"webnn":if(d="WEBNN",typeof o!="string"){let y=o?.deviceType;y&&vt(n,"deviceType",y,a)}break;case"webgpu":if(d="JS",typeof o!="string"){let b=o;if(b?.preferredLayout){if(b.preferredLayout!=="NCHW"&&b.preferredLayout!=="NHWC")throw new Error(\`preferredLayout must be either 'NCHW' or 'NHWC': \${b.preferredLayout}\`);vt(n,"preferredLayout",b.preferredLayout,a)}}break;case"wasm":case"cpu":continue;default:throw new Error(\`not supported execution provider: \${d}\`)}let l=ae(d,a),m=c.length,h=0,g=0;if(m>0){h=$()._malloc(m*$().PTR_SIZE),a.push(h),g=$()._malloc(m*$().PTR_SIZE),a.push(g);for(let b=0;b<m;b++)$().setValue(h+b*$().PTR_SIZE,c[b][0],"*"),$().setValue(g+b*$().PTR_SIZE,c[b][1],"*")}await $()._OrtAppendExecutionProvider(n,l,h,g,m)!==0&&G(\`Can't append execution provider: \${d}.\`)}},ao=async n=>{let t=$(),a=0,u=[],o=n||{};hs(o);try{let d=ps(o.graphOptimizationLevel??"all"),c=ms(o.executionMode??"sequential"),l=typeof o.logId=="string"?ae(o.logId,u):0,m=o.logSeverityLevel??2;if(!Number.isInteger(m)||m<0||m>4)throw new Error(\`log severity level is not valid: \${m}\`);let h=o.logVerbosityLevel??0;if(!Number.isInteger(h)||h<0||h>4)throw new Error(\`log verbosity level is not valid: \${h}\`);let g=typeof o.optimizedModelFilePath=="string"?ae(o.optimizedModelFilePath,u):0;if(a=t._OrtCreateSessionOptions(d,!!o.enableCpuMemArena,!!o.enableMemPattern,c,!!o.enableProfiling,0,l,m,h,g),a===0&&G("Can't create session options."),o.executionProviders&&await ws(a,o,u),o.enableGraphCapture!==void 0){if(typeof o.enableGraphCapture!="boolean")throw new Error(\`enableGraphCapture must be a boolean value: \${o.enableGraphCapture}\`);vt(a,"enableGraphCapture",o.enableGraphCapture.toString(),u)}if(o.freeDimensionOverrides)for(let[b,y]of Object.entries(o.freeDimensionOverrides)){if(typeof b!="string")throw new Error(\`free dimension override name must be a string: \${b}\`);if(typeof y!="number"||!Number.isInteger(y)||y<0)throw new Error(\`free dimension override value must be a non-negative integer: \${y}\`);let T=ae(b,u);t._OrtAddFreeDimensionOverride(a,T,y)!==0&&G(\`Can't set a free dimension override: \${b} - \${y}.\`)}return o.extra!==void 0&&Ze(o.extra,"",new WeakSet,(b,y)=>{vt(a,b,y,u)}),[a,u]}catch(d){throw a!==0&&t._OrtReleaseSessionOptions(a)!==0&&G("Can't release session options."),u.forEach(c=>t._free(c)),d}}});var ke,Ot,We,io,uo,At,It,fo,fn=N(()=>{"use strict";ke=n=>{switch(n){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(\`unsupported data type: \${n}\`)}},Ot=n=>{switch(n){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(\`unsupported data type: \${n}\`)}},We=(n,t)=>{let a=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][n],u=typeof t=="number"?t:t.reduce((o,d)=>o*d,1);return a>0?Math.ceil(u*a):void 0},io=n=>{switch(n){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(\`unsupported type: \${n}\`)}},uo=n=>{switch(n){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(\`unsupported logging level: \${n}\`)}},At=n=>n==="float32"||n==="float16"||n==="int32"||n==="int64"||n==="uint32"||n==="uint8"||n==="bool"||n==="uint4"||n==="int4",It=n=>n==="float32"||n==="float16"||n==="int32"||n==="int64"||n==="uint32"||n==="uint64"||n==="int8"||n==="uint8"||n==="bool"||n==="uint4"||n==="int4",fo=n=>{switch(n){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(\`unsupported data location: \${n}\`)}}});var Qe,cn=N(()=>{"use strict";lt();Qe=async n=>{if(typeof n=="string")if(!1)try{let{readFile:t}=qt("node:fs/promises");return new Uint8Array(await t(n))}catch(t){if(t.code==="ERR_FS_FILE_TOO_LARGE"){let{createReadStream:a}=qt("node:fs"),u=a(n),o=[];for await(let d of u)o.push(d);return new Uint8Array(Buffer.concat(o))}throw t}else{let t=await fetch(n);if(!t.ok)throw new Error(\`failed to load external data file: \${n}\`);let a=t.headers.get("Content-Length"),u=a?parseInt(a,10):0;if(u<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(\`failed to load external data file: \${n}, no response body.\`);let o=t.body.getReader(),d;try{d=new ArrayBuffer(u)}catch(l){if(l instanceof RangeError){let m=Math.ceil(u/65536);d=new WebAssembly.Memory({initial:m,maximum:m}).buffer}else throw l}let c=0;for(;;){let{done:l,value:m}=await o.read();if(l)break;let h=m.byteLength;new Uint8Array(d,c,h).set(m),c+=h}return new Uint8Array(d,0,u)}}else return n instanceof Blob?new Uint8Array(await n.arrayBuffer()):n instanceof Uint8Array?n:new Uint8Array(n)}});var bs,mt,ht,Ge,ys,co,Xe,wt,bt,lo,yt,gt,Et,rn=N(()=>{"use strict";Te();oo();so();fn();xe();St();cn();bs=(n,t)=>{$()._OrtInit(n,t)!==0&&G("Can't initialize onnxruntime.")},mt=async n=>{bs(n.wasm.numThreads,uo(n.logLevel))},ht=async(n,t)=>{$().asyncInit?.();let a=n.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in \`env.webgpu.adapter\`. It must be a GPUAdapter object.")}else{let u=n.webgpu.powerPreference;if(u!==void 0&&u!=="low-power"&&u!=="high-performance")throw new Error(\`Invalid powerPreference setting: "\${u}"\`);let o=n.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(\`Invalid forceFallbackAdapter setting: "\${o}"\`);if(a=await navigator.gpu.requestAdapter({powerPreference:u,forceFallbackAdapter:o}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment")},Ge=new Map,ys=n=>{let t=$(),a=t.stackSave();try{let u=t.PTR_SIZE,o=t.stackAlloc(2*u);t._OrtGetInputOutputCount(n,o,o+u)!==0&&G("Can't get session input/output count.");let c=u===4?"i32":"i64";return[Number(t.getValue(o,c)),Number(t.getValue(o+u,c))]}finally{t.stackRestore(a)}},co=(n,t)=>{let a=$(),u=a.stackSave(),o=0;try{let d=a.PTR_SIZE,c=a.stackAlloc(2*d);a._OrtGetInputOutputMetadata(n,t,c,c+d)!==0&&G("Can't get session input/output metadata.");let m=Number(a.getValue(c,"*"));o=Number(a.getValue(c+d,"*"));let h=a.HEAP32[o/4];if(h===0)return[m,0];let g=a.HEAPU32[o/4+1],b=[];for(let y=0;y<g;y++){let T=Number(a.getValue(o+8+y*d,"*"));b.push(T!==0?a.UTF8ToString(T):Number(a.getValue(o+8+(y+g)*d,"*")))}return[m,h,b]}finally{a.stackRestore(u),o!==0&&a._OrtFree(o)}},Xe=n=>{let t=$(),a=t._malloc(n.byteLength);if(a===0)throw new Error(\`Can't create a session. failed to allocate a buffer of size \${n.byteLength}.\`);return t.HEAPU8.set(n,a),[a,n.byteLength]},wt=async(n,t)=>{let a,u,o=$();Array.isArray(n)?[a,u]=n:n.buffer===o.HEAPU8.buffer?[a,u]=[n.byteOffset,n.byteLength]:[a,u]=Xe(n);let d=0,c=0,l=0,m=[],h=[],g=[];try{if([c,m]=await ao(t),t?.externalData&&o.mountExternalData){let D=[];for(let k of t.externalData){let w=typeof k=="string"?k:k.path;D.push(Qe(typeof k=="string"?k:k.data).then(Q=>{o.mountExternalData(w,Q)}))}await Promise.all(D)}for(let D of t?.executionProviders??[])if((typeof D=="string"?D:D.name)==="webnn"){if(o.shouldTransferToMLTensor=!1,typeof D!="string"){let w=D,Q=w?.context,j=w?.gpuDevice,ne=w?.deviceType,pe=w?.powerPreference;Q?o.currentContext=Q:j?o.currentContext=await o.webnnCreateMLContext(j):o.currentContext=await o.webnnCreateMLContext({deviceType:ne,powerPreference:pe})}else o.currentContext=await o.webnnCreateMLContext();break}d=await o._OrtCreateSession(a,u,c),o.webgpuOnCreateSession?.(d),d===0&&G("Can't create a session."),o.jsepOnCreateSession?.(),o.currentContext&&(o.webnnRegisterMLContext(d,o.currentContext),o.currentContext=void 0,o.shouldTransferToMLTensor=!0);let[b,y]=ys(d),T=!!t?.enableGraphCapture,O=[],U=[],z=[],A=[],I=[];for(let D=0;D<b;D++){let[k,w,Q]=co(d,D);k===0&&G("Can't get an input name."),h.push(k);let j=o.UTF8ToString(k);O.push(j),z.push(w===0?{name:j,isTensor:!1}:{name:j,isTensor:!0,type:Ot(w),shape:Q})}for(let D=0;D<y;D++){let[k,w,Q]=co(d,D+b);k===0&&G("Can't get an output name."),g.push(k);let j=o.UTF8ToString(k);U.push(j),A.push(w===0?{name:j,isTensor:!1}:{name:j,isTensor:!0,type:Ot(w),shape:Q})}return Ge.set(d,[d,h,g,null,T,!1]),[d,O,U,z,A]}catch(b){throw h.forEach(y=>o._OrtFree(y)),g.forEach(y=>o._OrtFree(y)),l!==0&&o._OrtReleaseBinding(l)!==0&&G("Can't release IO binding."),d!==0&&o._OrtReleaseSession(d)!==0&&G("Can't release session."),b}finally{o._free(a),c!==0&&o._OrtReleaseSessionOptions(c)!==0&&G("Can't release session options."),m.forEach(b=>o._free(b)),o.unmountExternalData?.()}},bt=n=>{let t=$(),a=Ge.get(n);if(!a)throw new Error(\`cannot release session. invalid session id: \${n}\`);let[u,o,d,c,l]=a;c&&(l&&t._OrtClearBoundOutputs(c.handle)!==0&&G("Can't clear bound outputs."),t._OrtReleaseBinding(c.handle)!==0&&G("Can't release IO binding.")),t.jsepOnReleaseSession?.(n),t.webnnOnReleaseSession?.(n),t.webgpuOnReleaseSession?.(n),o.forEach(m=>t._OrtFree(m)),d.forEach(m=>t._OrtFree(m)),t._OrtReleaseSession(u)!==0&&G("Can't release session."),Ge.delete(n)},lo=async(n,t,a,u,o,d,c=!1)=>{if(!n){t.push(0);return}let l=$(),m=l.PTR_SIZE,h=n[0],g=n[1],b=n[3],y=b,T,O;if(h==="string"&&(b==="gpu-buffer"||b==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(c&&b!=="gpu-buffer")throw new Error(\`External buffer must be provided for input/output index \${d} when enableGraphCapture is true.\`);if(b==="gpu-buffer"){let A=n[2].gpuBuffer;O=We(ke(h),g);{let I=l.jsepRegisterBuffer;if(!I)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');T=I(u,d,A,O)}}else if(b==="ml-tensor"){let A=n[2].mlTensor;O=We(ke(h),g);let I=l.webnnRegisterMLTensor;if(!I)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');T=I(u,A,ke(h),g)}else{let A=n[2];if(Array.isArray(A)){O=m*A.length,T=l._malloc(O),a.push(T);for(let I=0;I<A.length;I++){if(typeof A[I]!="string")throw new TypeError(\`tensor data at index \${I} is not a string\`);l.setValue(T+I*m,ae(A[I],a),"*")}}else{let I=l.webnnIsGraphInput,F=l.webnnIsGraphOutput;if(h!=="string"&&I&&F){let D=l.UTF8ToString(o);if(I(u,D)||F(u,D)){let k=ke(h);O=We(k,g),y="ml-tensor";let w=l.webnnCreateTemporaryTensor,Q=l.webnnUploadTensor;if(!w||!Q)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let j=await w(u,k,g);Q(j,new Uint8Array(A.buffer,A.byteOffset,A.byteLength)),T=j}else O=A.byteLength,T=l._malloc(O),a.push(T),l.HEAPU8.set(new Uint8Array(A.buffer,A.byteOffset,O),T)}else O=A.byteLength,T=l._malloc(O),a.push(T),l.HEAPU8.set(new Uint8Array(A.buffer,A.byteOffset,O),T)}}let U=l.stackSave(),z=l.stackAlloc(4*g.length);try{g.forEach((I,F)=>l.setValue(z+F*m,I,m===4?"i32":"i64"));let A=l._OrtCreateTensor(ke(h),T,O,z,g.length,fo(y));A===0&&G(\`Can't create tensor for input/output. session=\${u}, index=\${d}.\`),t.push(A)}finally{l.stackRestore(U)}},yt=async(n,t,a,u,o,d)=>{let c=$(),l=c.PTR_SIZE,m=Ge.get(n);if(!m)throw new Error(\`cannot run inference. invalid session id: \${n}\`);let h=m[0],g=m[1],b=m[2],y=m[3],T=m[4],O=m[5],U=t.length,z=u.length,A=0,I=[],F=[],D=[],k=[],w=[],Q=c.stackSave(),j=c.stackAlloc(U*l),ne=c.stackAlloc(U*l),pe=c.stackAlloc(z*l),B=c.stackAlloc(z*l);try{[A,I]=ro(d),_e("wasm prepareInputOutputTensor");for(let v=0;v<U;v++)await lo(a[v],F,k,n,g[t[v]],t[v],T);for(let v=0;v<z;v++)await lo(o[v],D,k,n,b[u[v]],U+u[v],T);Ue("wasm prepareInputOutputTensor");for(let v=0;v<U;v++)c.setValue(j+v*l,F[v],"*"),c.setValue(ne+v*l,g[t[v]],"*");for(let v=0;v<z;v++)c.setValue(pe+v*l,D[v],"*"),c.setValue(B+v*l,b[u[v]],"*");c.jsepOnRunStart?.(h),c.webnnOnRunStart?.(h);let W;W=await c._OrtRun(h,ne,j,U,B,z,pe,A),W!==0&&G("failed to call OrtRun().");let re=[],me=[];_e("wasm ProcessOutputTensor");for(let v=0;v<z;v++){let K=Number(c.getValue(pe+v*l,"*"));if(K===D[v]||w.includes(D[v])){re.push(o[v]),K!==D[v]&&c._OrtReleaseTensor(K)!==0&&G("Can't release tensor.");continue}let He=c.stackSave(),ee=c.stackAlloc(4*l),he=!1,H,q=0;try{c._OrtGetTensorData(K,ee,ee+l,ee+2*l,ee+3*l)!==0&&G(\`Can't access output tensor data on index \${v}.\`);let Se=l===4?"i32":"i64",ve=Number(c.getValue(ee,Se));q=c.getValue(ee+l,"*");let je=c.getValue(ee+l*2,"*"),Re=Number(c.getValue(ee+l*3,Se)),te=[];for(let L=0;L<Re;L++)te.push(Number(c.getValue(je+L*l,Se)));c._OrtFree(je)!==0&&G("Can't free memory for tensor dims.");let ue=te.reduce((L,V)=>L*V,1);H=Ot(ve);let se=y?.outputPreferredLocations[u[v]];if(H==="string"){if(se==="gpu-buffer"||se==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let L=[];for(let V=0;V<ue;V++){let fe=c.getValue(q+V*l,"*"),ye=c.getValue(q+(V+1)*l,"*"),ce=V===ue-1?void 0:ye-fe;L.push(c.UTF8ToString(fe,ce))}re.push([H,te,L,"cpu"])}else if(se==="gpu-buffer"&&ue>0){let L=c.jsepGetBuffer;if(!L)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let V=L(q),fe=We(ve,ue);if(fe===void 0||!At(H))throw new Error(\`Unsupported data type: \${H}\`);he=!0,re.push([H,te,{gpuBuffer:V,download:c.jsepCreateDownloader(V,fe,H),dispose:()=>{c._OrtReleaseTensor(K)!==0&&G("Can't release tensor.")}},"gpu-buffer"])}else if(se==="ml-tensor"&&ue>0){let L=c.webnnEnsureTensor,V=c.webnnIsGraphInputOutputTypeSupported;if(!L||!V)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(We(ve,ue)===void 0||!It(H))throw new Error(\`Unsupported data type: \${H}\`);if(!V(n,H,!1))throw new Error(\`preferredLocation "ml-tensor" for \${H} output is not supported by current WebNN Context.\`);let ye=await L(n,q,ve,te,!1);he=!0,re.push([H,te,{mlTensor:ye,download:c.webnnCreateMLTensorDownloader(q,H),dispose:()=>{c.webnnReleaseTensorId(q),c._OrtReleaseTensor(K)}},"ml-tensor"])}else if(se==="ml-tensor-cpu-output"&&ue>0){let L=c.webnnCreateMLTensorDownloader(q,H)(),V=re.length;he=!0,me.push((async()=>{let fe=[V,await L];return c.webnnReleaseTensorId(q),c._OrtReleaseTensor(K),fe})()),re.push([H,te,[],"cpu"])}else{let L=io(H),V=new L(ue);new Uint8Array(V.buffer,V.byteOffset,V.byteLength).set(c.HEAPU8.subarray(q,q+V.byteLength)),re.push([H,te,V,"cpu"])}}finally{c.stackRestore(He),H==="string"&&q&&c._free(q),he||c._OrtReleaseTensor(K)}}y&&!T&&(c._OrtClearBoundOutputs(y.handle)!==0&&G("Can't clear bound outputs."),Ge.set(n,[h,g,b,y,T,!1]));for(let[v,K]of await Promise.all(me))re[v][2]=K;return Ue("wasm ProcessOutputTensor"),re}finally{c.webnnOnRunEnd?.(h),c.stackRestore(Q),F.forEach(W=>c._OrtReleaseTensor(W)),D.forEach(W=>c._OrtReleaseTensor(W)),k.forEach(W=>c._free(W)),A!==0&&c._OrtReleaseRunOptions(A),I.forEach(W=>c._free(W))}},gt=n=>{let t=$(),a=Ge.get(n);if(!a)throw new Error("invalid session id");let u=a[0],o=t._OrtEndProfiling(u);o===0&&G("Can't get an profile file name."),t._OrtFree(o)},Et=n=>{let t=[];for(let a of n){let u=a[2];!Array.isArray(u)&&"buffer"in u&&t.push(u.buffer)}return t}});var Ce,ie,Ke,Lt,Pt,Bt,ln,dn,$e,ze,Es,po,mo,ho,wo,bo,yo,go,pn=N(()=>{"use strict";Te();rn();xe();dt();Ce=()=>!!Y.wasm.proxy&&typeof document<"u",Ke=!1,Lt=!1,Pt=!1,dn=new Map,$e=(n,t)=>{let a=dn.get(n);a?a.push(t):dn.set(n,[t])},ze=()=>{if(Ke||!Lt||Pt||!ie)throw new Error("worker not ready")},Es=n=>{switch(n.data.type){case"init-wasm":Ke=!1,n.data.err?(Pt=!0,ln[1](n.data.err)):(Lt=!0,ln[0]()),Bt&&(URL.revokeObjectURL(Bt),Bt=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=dn.get(n.data.type);n.data.err?t.shift()[1](n.data.err):t.shift()[0](n.data.out);break}default:}},po=async()=>{if(!Lt){if(Ke)throw new Error("multiple calls to 'initWasm()' detected.");if(Pt)throw new Error("previous call to 'initWasm()' failed.");if(Ke=!0,Ce())return new Promise((n,t)=>{ie?.terminate(),eo().then(([a,u])=>{try{ie=u,ie.onerror=d=>t(d),ie.onmessage=Es,ln=[n,t];let o={type:"init-wasm",in:Y};!o.in.wasm.wasmPaths&&(a||an)&&(o.in.wasm.wasmPaths={wasm:""}),ie.postMessage(o),Bt=a}catch(o){t(o)}},t)});try{await pt(Y.wasm),await mt(Y),Lt=!0}catch(n){throw Pt=!0,n}finally{Ke=!1}}},mo=async n=>{if(Ce())return ze(),new Promise((t,a)=>{$e("init-ep",[t,a]);let u={type:"init-ep",in:{epName:n,env:Y}};ie.postMessage(u)});await ht(Y,n)},ho=async n=>Ce()?(ze(),new Promise((t,a)=>{$e("copy-from",[t,a]);let u={type:"copy-from",in:{buffer:n}};ie.postMessage(u,[n.buffer])})):Xe(n),wo=async(n,t)=>{if(Ce()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return ze(),new Promise((a,u)=>{$e("create",[a,u]);let o={type:"create",in:{model:n,options:{...t}}},d=[];n instanceof Uint8Array&&d.push(n.buffer),ie.postMessage(o,d)})}else return wt(n,t)},bo=async n=>{if(Ce())return ze(),new Promise((t,a)=>{$e("release",[t,a]);let u={type:"release",in:n};ie.postMessage(u)});bt(n)},yo=async(n,t,a,u,o,d)=>{if(Ce()){if(a.some(c=>c[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(o.some(c=>c))throw new Error("pre-allocated output tensor is not supported for proxy.");return ze(),new Promise((c,l)=>{$e("run",[c,l]);let m=a,h={type:"run",in:{sessionId:n,inputIndices:t,inputs:m,outputIndices:u,options:d}};ie.postMessage(h,Et(m))})}else return yt(n,t,a,u,o,d)},go=async n=>{if(Ce())return ze(),new Promise((t,a)=>{$e("end-profiling",[t,a]);let u={type:"end-profiling",in:n};ie.postMessage(u)});gt(n)}});var Eo,Ts,Dt,To=N(()=>{"use strict";Te();pn();fn();lt();cn();Eo=(n,t)=>{switch(n.location){case"cpu":return[n.type,n.dims,n.data,"cpu"];case"gpu-buffer":return[n.type,n.dims,{gpuBuffer:n.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[n.type,n.dims,{mlTensor:n.mlTensor},"ml-tensor"];default:throw new Error(\`invalid data location: \${n.location} for \${t()}\`)}},Ts=n=>{switch(n[3]){case"cpu":return new de(n[0],n[2],n[1]);case"gpu-buffer":{let t=n[0];if(!At(t))throw new Error(\`not supported data type: \${t} for deserializing GPU tensor\`);let{gpuBuffer:a,download:u,dispose:o}=n[2];return de.fromGpuBuffer(a,{dataType:t,dims:n[1],download:u,dispose:o})}case"ml-tensor":{let t=n[0];if(!It(t))throw new Error(\`not supported data type: \${t} for deserializing MLTensor tensor\`);let{mlTensor:a,download:u,dispose:o}=n[2];return de.fromMLTensor(a,{dataType:t,dims:n[1],download:u,dispose:o})}default:throw new Error(\`invalid data location: \${n[3]}\`)}},Dt=class{async fetchModelAndCopyToWasmMemory(t){return ho(await Qe(t))}async loadModel(t,a){Pe();let u;typeof t=="string"?u=await this.fetchModelAndCopyToWasmMemory(t):u=t,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await wo(u,a),De()}async dispose(){return bo(this.sessionId)}async run(t,a,u){Pe();let o=[],d=[];Object.entries(t).forEach(y=>{let T=y[0],O=y[1],U=this.inputNames.indexOf(T);if(U===-1)throw new Error(\`invalid input '\${T}'\`);o.push(O),d.push(U)});let c=[],l=[];Object.entries(a).forEach(y=>{let T=y[0],O=y[1],U=this.outputNames.indexOf(T);if(U===-1)throw new Error(\`invalid output '\${T}'\`);c.push(O),l.push(U)});let m=o.map((y,T)=>Eo(y,()=>\`input "\${this.inputNames[d[T]]}"\`)),h=c.map((y,T)=>y?Eo(y,()=>\`output "\${this.outputNames[l[T]]}"\`):null),g=await yo(this.sessionId,d,m,l,h,u),b={};for(let y=0;y<g.length;y++)b[this.outputNames[l[y]]]=c[y]??Ts(g[y]);return De(),b}startProfiling(){}endProfiling(){go(this.sessionId)}}});var vo={};it(vo,{OnnxruntimeWebAssemblyBackend:()=>_t,initializeFlags:()=>So,wasmBackend:()=>Ss});var So,_t,Ss,Oo=N(()=>{"use strict";Te();pn();To();So=()=>{(typeof Y.wasm.initTimeout!="number"||Y.wasm.initTimeout<0)&&(Y.wasm.initTimeout=0);let n=Y.wasm.simd;if(typeof n!="boolean"&&n!==void 0&&n!=="fixed"&&n!=="relaxed"&&(console.warn(\`Property "env.wasm.simd" is set to unknown value "\${n}". Reset it to \\\`false\\\` and ignore SIMD feature checking.\`),Y.wasm.simd=!1),typeof Y.wasm.proxy!="boolean"&&(Y.wasm.proxy=!1),typeof Y.wasm.trace!="boolean"&&(Y.wasm.trace=!1),typeof Y.wasm.numThreads!="number"||!Number.isInteger(Y.wasm.numThreads)||Y.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Y.wasm.numThreads=1;else{let t=typeof navigator>"u"?qt("node:os").cpus().length:navigator.hardwareConcurrency;Y.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},_t=class{async init(t){So(),await po(),await mo(t)}async createInferenceSessionHandler(t,a){let u=new Dt;return await u.loadModel(t,a),u}},Ss=new _t});Te();Te();Te();var Gr="1.24.1";var su=nn;{let n=(Oo(),Xt(vo)).wasmBackend;Je("cpu",n,10),Je("wasm",n,10)}Object.defineProperty(Y.versions,"web",{value:Gr,enumerable:!0});self.ort={InferenceSession:ns,TRACE:xr,TRACE_EVENT_BEGIN:_e,TRACE_EVENT_END:Ue,TRACE_FUNC_BEGIN:Pe,TRACE_FUNC_END:De,Tensor:de,default:su,env:Y,registerBackend:Je};
//# sourceMappingURL=ort.wasm.bundle.min.mjs.map
`;

// src/lib/ai-engine.ts
var DEFAULT_MODEL = "sonics-5s";
var MODELS = {
  "sonics-5s": {
    label: "SONICS SpecTTTra 5s",
    assetName: "sonics_5s.onnx",
    inputLength: 220500
  },
  "sonics-120s": {
    label: "SONICS SpecTTTra 120s",
    assetName: "sonics_120s.onnx",
    inputLength: 5292000
  }
};
var WASM_BINARY = "ort-wasm-simd-threaded.wasm";
var STORE_NAME = "assets";
var VERSION_KEY = "trashbin-ai-assets-version";
var HF_BASE = "https://huggingface.co/0don/trashbin-plus-ai/resolve/main";
var dbPromise = null;
function getDB() {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open("trashbin-ai", 1);
      req.onupgradeneeded = () => {
        if (!req.result.objectStoreNames.contains(STORE_NAME))
          req.result.createObjectStore(STORE_NAME, { keyPath: "name" });
      };
      req.onsuccess = () => {
        req.result.onversionchange = () => {
          req.result.close();
          dbPromise = null;
        };
        resolve(req.result);
      };
      req.onerror = () => reject(req.error);
    });
  }
  return dbPromise;
}
async function idbGet(name) {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const req = db.transaction(STORE_NAME, "readonly").objectStore(STORE_NAME).get(name);
    req.onsuccess = () => resolve(req.result?.data ?? null);
    req.onerror = () => reject(req.error);
  });
}
async function idbPut(name, data) {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const req = db.transaction(STORE_NAME, "readwrite").objectStore(STORE_NAME).put({ name, data });
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}
async function downloadAsset(name) {
  const response = await fetch(`${HF_BASE}/${name}`);
  if (!response.ok)
    throw new Error(`Failed to download ${name}: ${response.status}`);
  return response.arrayBuffer();
}
async function ensureAssets(modelId, onProgress) {
  try {
    const model = MODELS[modelId];
    const wasmName = WASM_BINARY;
    let remoteVersion = null;
    try {
      const versionRes = await fetch(`${HF_BASE}/version.json`);
      if (versionRes.ok) {
        remoteVersion = (await versionRes.json()).version;
      }
    } catch {}
    const localVersion = Spicetify.LocalStorage.get(VERSION_KEY);
    const versionMatch = remoteVersion !== null && localVersion === remoteVersion;
    const [wasmExists, modelExists] = await Promise.all([
      idbGet(wasmName),
      idbGet(model.assetName)
    ]);
    if (versionMatch && wasmExists && modelExists) {
      onProgress?.("Assets up to date");
      return true;
    }
    if (remoteVersion === null && wasmExists && modelExists) {
      onProgress?.("Using cached assets (offline)");
      return true;
    }
    if (remoteVersion === null)
      return false;
    const downloads = [];
    if (!wasmExists || !versionMatch) {
      onProgress?.("Downloading WASM runtime...");
      downloads.push(downloadAsset(wasmName).then((d) => idbPut(wasmName, d)));
    }
    if (!modelExists || !versionMatch) {
      onProgress?.(`Downloading ${model.label}...`);
      downloads.push(downloadAsset(model.assetName).then((d) => idbPut(model.assetName, d)));
    }
    await Promise.all(downloads);
    Spicetify.LocalStorage.set(VERSION_KEY, remoteVersion);
    onProgress?.("Assets ready");
    return true;
  } catch (error) {
    console.error("[trashbin+] ensureAssets failed:", error);
    return false;
  }
}
var WORKER_LOGIC = `
var STORE_NAME = "assets";
var dbPromise = null;

function getDB() {
  if (!dbPromise) {
    dbPromise = new Promise(function(resolve, reject) {
      var req = indexedDB.open("trashbin-ai", 1);
      req.onupgradeneeded = function() {
        if (!req.result.objectStoreNames.contains(STORE_NAME))
          req.result.createObjectStore(STORE_NAME, { keyPath: "name" });
      };
      req.onsuccess = function() { resolve(req.result); };
      req.onerror = function() { reject(req.error); };
    });
  }
  return dbPromise;
}

function idbGet(name) {
  return getDB().then(function(db) {
    return new Promise(function(resolve, reject) {
      var req = db.transaction(STORE_NAME, "readonly").objectStore(STORE_NAME).get(name);
      req.onsuccess = function() { resolve(req.result ? req.result.data : null); };
      req.onerror = function() { reject(req.error); };
    });
  });
}

var MAX_CHUNKS = 3;

function splitChunks(waveform, chunkLen) {
  var chunks = [];
  var full = Math.min(Math.floor(waveform.length / chunkLen), MAX_CHUNKS);
  for (var i = 0; i < full; i++) chunks.push(waveform.slice(i * chunkLen, (i + 1) * chunkLen));
  if (chunks.length < MAX_CHUNKS) {
    var rem = waveform.length % chunkLen;
    if (rem > 0 && rem >= chunkLen / 2) {
      var padded = new Float32Array(chunkLen);
      padded.set(waveform.slice(Math.floor(waveform.length / chunkLen) * chunkLen));
      chunks.push(padded);
    }
  }
  if (chunks.length === 0) {
    var p = new Float32Array(chunkLen);
    p.set(waveform, Math.floor((chunkLen - waveform.length) / 2));
    chunks.push(p);
  }
  return chunks;
}

var session = null;
var inputLength = 0;

self.onmessage = function(e) {
  var msg = e.data;

  if (msg.type === "init") {
    inputLength = msg.inputLength;
    var ep = msg.executionProvider || "wasm";
    Promise.all([idbGet(msg.modelAssetName), idbGet(msg.wasmName)])
      .then(function(buffers) {
        if (!buffers[0] || !buffers[1]) {
          self.postMessage({ type: "init-error", error: "Assets not found in IndexedDB" });
          return;
        }
        ort.env.wasm.numThreads = 1;
        ort.env.wasm.wasmBinary = buffers[1];
        return ort.InferenceSession.create(buffers[0], {
          executionProviders: [ep],
        }).then(function(s) {
          session = s;
          console.log("[trashbin+] worker: ready (" + ep + ")");
          self.postMessage({ type: "init-done", ep: ep });
        });
      })
      .catch(function(err) {
        console.error("[trashbin+] worker: init failed (" + ep + "):", err);
        self.postMessage({ type: "init-error", error: String(err), ep: ep });
      });
  }

  else if (msg.type === "classify") {
    if (!session) {
      self.postMessage({ type: "classify-done", id: msg.id, prob: null });
      return;
    }
    var t0 = performance.now();
    var chunks = splitChunks(msg.waveform, inputLength);
    var chain = Promise.resolve();
    var probs = [];
    chunks.forEach(function(chunk) {
      chain = chain.then(function() {
        var tensor = new ort.Tensor("float32", chunk, [1, chunk.length]);
        return session.run({ audio: tensor }).then(function(r) {
          probs.push(r["prob"].data[0]);
        });
      });
    });
    chain.then(function() {
      if (probs.length === 0) return null;
      var sum = 0;
      for (var i = 0; i < probs.length; i++) sum += probs[i];
      return sum / probs.length;
    })
    .then(function(prob) {
      var ms = (performance.now() - t0).toFixed(0);
      console.log("[trashbin+] " + (msg.trackId || "?") + ": " + chunks.length + " chunks, " + ms + "ms, prob=" + (prob !== null ? prob.toFixed(4) : "null"));
      self.postMessage({ type: "classify-done", id: msg.id, prob: prob });
    })
    .catch(function() {
      self.postMessage({ type: "classify-done", id: msg.id, prob: null });
    });
  }

  else if (msg.type === "dispose") {
    if (session) { session.release(); session = null; }
    self.close();
  }
};
`;
var worker = null;
var workerBlobUrl = null;
var activeModelId = null;
var nextId = 0;
var pending = new Map;
window.addEventListener("beforeunload", () => disposeEngine());
function createWorker(ortCode) {
  const script = ortCode + `
` + WORKER_LOGIC;
  const blob = new Blob([script], { type: "application/javascript" });
  workerBlobUrl = URL.createObjectURL(blob);
  return new Worker(workerBlobUrl);
}
function setupWorker(w) {
  w.onmessage = (e) => {
    const msg = e.data;
    if (msg.type === "classify-done") {
      const resolve = pending.get(msg.id);
      if (resolve) {
        pending.delete(msg.id);
        resolve(msg.prob);
      }
    }
  };
  w.onerror = () => {
    for (const resolve of pending.values())
      resolve(null);
    pending.clear();
  };
}
function sendInit(w, model, wasmName, ep) {
  return new Promise((resolve) => {
    const handler = (e) => {
      if (e.data.type === "init-done" || e.data.type === "init-error") {
        w.removeEventListener("message", handler);
        resolve(e.data.type === "init-done");
      }
    };
    w.addEventListener("message", handler);
    w.postMessage({
      type: "init",
      modelAssetName: model.assetName,
      wasmName,
      inputLength: model.inputLength,
      executionProvider: ep
    });
  });
}
async function initEngine(modelId) {
  try {
    const model = MODELS[modelId];
    const [modelExists, wasmExists] = await Promise.all([
      idbGet(model.assetName),
      idbGet(WASM_BINARY)
    ]);
    if (!modelExists || !wasmExists)
      return false;
    worker = createWorker(ORT_WASM_CODE);
    setupWorker(worker);
    const ok = await sendInit(worker, model, WASM_BINARY, "wasm");
    if (ok) {
      activeModelId = modelId;
      return true;
    }
    disposeEngine();
    return false;
  } catch (error) {
    console.error("[trashbin+] initEngine failed:", error);
    disposeEngine();
    return false;
  }
}
function classifyAudio(waveform, trackId) {
  if (!worker || !activeModelId)
    return Promise.resolve(null);
  const id = nextId++;
  const copy = new Float32Array(waveform);
  return new Promise((resolve) => {
    pending.set(id, resolve);
    worker.postMessage({ type: "classify", id, waveform: copy, trackId }, [copy.buffer]);
  });
}
function disposeEngine() {
  if (worker) {
    worker.postMessage({ type: "dispose" });
    worker.terminate();
    worker = null;
  }
  if (workerBlobUrl) {
    URL.revokeObjectURL(workerBlobUrl);
    workerBlobUrl = null;
  }
  activeModelId = null;
  for (const resolve of pending.values())
    resolve(null);
  pending.clear();
  nextId = 0;
}

// src/lib/metadata-utils.ts
var BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function toHex(id) {
  let n = BigInt(0);
  for (const c of id) {
    const i = BASE62.indexOf(c);
    if (i === -1)
      return "0".repeat(32);
    n = n * 62n + BigInt(i);
  }
  return n.toString(16).padStart(32, "0");
}
function hexToBase62(hex) {
  let n = BigInt("0x" + hex);
  if (n === 0n)
    return "0".padStart(22, "0");
  let result = "";
  while (n > 0n) {
    result = BASE62[Number(n % 62n)] + result;
    n = n / 62n;
  }
  return result.padStart(22, "0");
}
async function fetchMetadata(type, id) {
  const token = (await Spicetify.Platform.AuthorizationAPI.getState()).token.accessToken;
  const res = await fetch(`https://spclient.wg.spotify.com/metadata/4/${type}/${toHex(id)}?market=from_token`, {
    headers: { Accept: "application/json", Authorization: `Bearer ${token}` }
  });
  return res.json();
}
async function fetchTracksMetadata(uris) {
  return Promise.all(uris.map(async (uri) => {
    const id = uri.split(":")[2];
    try {
      const r = await fetchMetadata("track", id);
      return {
        uri,
        name: r?.name || "Unknown Track",
        artist: r?.artist?.map((a) => a.name).join(", ") || "Unknown Artist",
        imageUrl: r?.album?.cover_group?.image?.[0]?.file_id ? `https://i.scdn.co/image/${r.album.cover_group.image[0].file_id}` : undefined
      };
    } catch {
      return { uri, name: "Error loading track", artist: "Failed to load" };
    }
  }));
}
async function fetchArtistsMetadata(uris) {
  return Promise.all(uris.map(async (uri) => {
    const id = uri.split(":")[2];
    try {
      const r = await fetchMetadata("artist", id);
      return {
        uri,
        name: r?.name || "Unknown Artist",
        type: "artist",
        imageUrl: r?.portrait_group?.image?.[0]?.file_id ? `https://i.scdn.co/image/${r.portrait_group.image[0].file_id}` : undefined,
        secondaryText: "Artist"
      };
    } catch {
      return {
        uri,
        name: "Error loading artist",
        type: "artist",
        secondaryText: "Failed to load"
      };
    }
  }));
}

// src/lib/ai-classifier.ts
var CORS_PROXY = "https://cors-proxy.spicetify.app";
var SAMPLE_RATE = 44100;
var audioCtx = null;
function getAudioCtx() {
  if (!audioCtx || audioCtx.state === "closed")
    audioCtx = new AudioContext({ sampleRate: SAMPLE_RATE });
  return audioCtx;
}
async function getTrackArtistIds(trackUri) {
  try {
    const currentTrack = Spicetify.Player.data?.item;
    if (currentTrack && currentTrack.uri === trackUri && currentTrack.artists) {
      const ids2 = [];
      for (const artist of currentTrack.artists) {
        const artistId = artist.uri?.split(":")[2];
        if (artistId)
          ids2.push(artistId);
      }
      if (ids2.length > 0)
        return ids2;
    }
    const trackId = trackUri.split(":")[2];
    if (!trackId)
      return [];
    const data = await fetchMetadata("track", trackId);
    const ids = [];
    if (Array.isArray(data.artist)) {
      for (const a of data.artist) {
        if (a.gid)
          ids.push(hexToBase62(a.gid));
      }
    }
    return ids;
  } catch {
    return [];
  }
}
async function fetchPreviewUrl(trackUri) {
  const id = trackUri.split(":")[2];
  if (!id)
    return null;
  try {
    const res = await fetch(`${CORS_PROXY}/https://open.spotify.com/embed/track/${id}`);
    if (!res.ok) {
      console.log(`[trashbin+] ${id}: embed fetch ${res.status}`);
      return null;
    }
    const html = await res.text();
    const match = html.match(/"audioPreview":\s*\{\s*"url":\s*"([^"]+)"/);
    if (!match)
      console.log(`[trashbin+] ${id}: no audioPreview in embed`);
    return match?.[1] ?? null;
  } catch {
    return null;
  }
}
async function classifyTrack(trackUri, queuePos, queueRemaining) {
  const trackId = trackUri.split(":")[2] ?? trackUri;
  const queueTag = queuePos != null ? `[${queuePos}/${queuePos + queueRemaining}] ` : "";
  const artistIds2 = await getTrackArtistIds(trackUri);
  for (const artistId of artistIds2) {
    if (isBlocklistedArtist(artistId)) {
      console.log(`[trashbin+] ${queueTag}${trackId}: blocklisted`);
      return 1;
    }
  }
  if (!activeModelId)
    return null;
  const previewUrl = await fetchPreviewUrl(trackUri);
  if (!previewUrl) {
    console.log(`[trashbin+] ${queueTag}${trackId}: no preview`);
    return null;
  }
  const response = await fetch(previewUrl);
  if (!response.ok)
    return null;
  const buffer = await response.arrayBuffer();
  const decoded = await getAudioCtx().decodeAudioData(buffer);
  const waveform = decoded.getChannelData(0);
  return classifyAudio(waveform, queueTag + trackId);
}
async function initClassifier(modelId, onProgress) {
  onProgress?.("Checking assets...");
  const ready = await ensureAssets(modelId, onProgress);
  if (!ready)
    return false;
  onProgress?.(`Initializing ${MODELS[modelId].label}...`);
  return initEngine(modelId);
}
function disposeClassifier() {
  disposeEngine();
  if (audioCtx && audioCtx.state !== "closed") {
    audioCtx.close();
    audioCtx = null;
  }
}

// src/lib/constants.ts
var SELECTORS = {
  SKIP_BACK_BUTTON: ".main-skipBackButton-button",
  SKIP_BACK_BUTTON_ALT: ".player-controls__left > button[data-encore-id='buttonTertiary']",
  ARTIST_LINK: 'a[href*="/artist/"]',
  TRACK_CREDITS_MODAL: ".main-trackCreditsModal-mainSection",
  TRACK_CREDITS_MODAL_CONTAINER: ".main-trackCreditsModal-container",
  SMART_SHUFFLE_BUTTON: 'button svg path[d^="M4.502 0a.637"]'
};
var TRACKLIST_CONFIG = {
  containerSelector: "main",
  buttonSelector: ".trashbin-tracklist-btn",
  rowSelector: ".main-trackList-trackListRow",
  moreButtonSelector: "button[aria-haspopup='menu'], button[data-testid='add-to-playlist-button']",
  buttonClassName: "trashbin-tracklist-btn"
};
var QUEUELIST_CONFIG = {
  containerSelector: "#Desktop_PanelContainer_Id",
  buttonSelector: ".trashbin-queue-btn",
  rowSelector: '[role="row"]',
  moreButtonSelector: 'button[aria-haspopup="menu"]',
  buttonClassName: "trashbin-queue-btn"
};
var AUTO_ADD_CONFIG = {
  gridSelector: '[aria-label^="Recommended based on"]',
  rowSelector: '[role="row"]',
  trashButtonSelector: ".trashbin-tracklist-btn",
  addButtonSelector: 'button[data-testid="add-to-playlist-button"]',
  autoAddButtonClassName: "trashbin-auto-add-btn"
};
var AI_INDICATOR_CLASS = "trashbin-ai-indicator";
var AI_SPINNER_CLASS = "trashbin-ai-spinner";

// node_modules/i18next/dist/esm/i18next.js
var isString = (obj) => typeof obj === "string";
var defer = () => {
  let res;
  let rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
};
var makeString = (object) => {
  if (object == null)
    return "";
  return "" + object;
};
var copy = (a, s, t) => {
  a.forEach((m) => {
    if (s[m])
      t[m] = s[m];
  });
};
var lastOfPathSeparatorRegExp = /###/g;
var cleanKey = (key) => key && key.indexOf("###") > -1 ? key.replace(lastOfPathSeparatorRegExp, ".") : key;
var canNotTraverseDeeper = (object) => !object || isString(object);
var getLastOfPath = (object, path, Empty) => {
  const stack = !isString(path) ? path : path.split(".");
  let stackIndex = 0;
  while (stackIndex < stack.length - 1) {
    if (canNotTraverseDeeper(object))
      return {};
    const key = cleanKey(stack[stackIndex]);
    if (!object[key] && Empty)
      object[key] = new Empty;
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
    ++stackIndex;
  }
  if (canNotTraverseDeeper(object))
    return {};
  return {
    obj: object,
    k: cleanKey(stack[stackIndex])
  };
};
var setPath = (object, path, newValue) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  if (obj !== undefined || path.length === 1) {
    obj[k] = newValue;
    return;
  }
  let e = path[path.length - 1];
  let p = path.slice(0, path.length - 1);
  let last = getLastOfPath(object, p, Object);
  while (last.obj === undefined && p.length) {
    e = `${p[p.length - 1]}.${e}`;
    p = p.slice(0, p.length - 1);
    last = getLastOfPath(object, p, Object);
    if (last?.obj && typeof last.obj[`${last.k}.${e}`] !== "undefined") {
      last.obj = undefined;
    }
  }
  last.obj[`${last.k}.${e}`] = newValue;
};
var pushPath = (object, path, newValue, concat) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  obj[k] = obj[k] || [];
  obj[k].push(newValue);
};
var getPath = (object, path) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path);
  if (!obj)
    return;
  if (!Object.prototype.hasOwnProperty.call(obj, k))
    return;
  return obj[k];
};
var getPathWithDefaults = (data, defaultData, key) => {
  const value = getPath(data, key);
  if (value !== undefined) {
    return value;
  }
  return getPath(defaultData, key);
};
var deepExtend = (target, source, overwrite) => {
  for (const prop in source) {
    if (prop !== "__proto__" && prop !== "constructor") {
      if (prop in target) {
        if (isString(target[prop]) || target[prop] instanceof String || isString(source[prop]) || source[prop] instanceof String) {
          if (overwrite)
            target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
};
var regexEscape = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
var escape = (data) => {
  if (isString(data)) {
    return data.replace(/[&<>"'\/]/g, (s) => _entityMap[s]);
  }
  return data;
};

class RegExpCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.regExpMap = new Map;
    this.regExpQueue = [];
  }
  getRegExp(pattern) {
    const regExpFromCache = this.regExpMap.get(pattern);
    if (regExpFromCache !== undefined) {
      return regExpFromCache;
    }
    const regExpNew = new RegExp(pattern);
    if (this.regExpQueue.length === this.capacity) {
      this.regExpMap.delete(this.regExpQueue.shift());
    }
    this.regExpMap.set(pattern, regExpNew);
    this.regExpQueue.push(pattern);
    return regExpNew;
  }
}
var chars = [" ", ",", "?", "!", ";"];
var looksLikeObjectPathRegExpCache = new RegExpCache(20);
var looksLikeObjectPath = (key, nsSeparator, keySeparator) => {
  nsSeparator = nsSeparator || "";
  keySeparator = keySeparator || "";
  const possibleChars = chars.filter((c) => nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0);
  if (possibleChars.length === 0)
    return true;
  const r = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map((c) => c === "?" ? "\\?" : c).join("|")})`);
  let matched = !r.test(key);
  if (!matched) {
    const ki = key.indexOf(keySeparator);
    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
};
var deepFind = (obj, path, keySeparator = ".") => {
  if (!obj)
    return;
  if (obj[path]) {
    if (!Object.prototype.hasOwnProperty.call(obj, path))
      return;
    return obj[path];
  }
  const tokens = path.split(keySeparator);
  let current = obj;
  for (let i = 0;i < tokens.length; ) {
    if (!current || typeof current !== "object") {
      return;
    }
    let next;
    let nextPath = "";
    for (let j = i;j < tokens.length; ++j) {
      if (j !== i) {
        nextPath += keySeparator;
      }
      nextPath += tokens[j];
      next = current[nextPath];
      if (next !== undefined) {
        if (["string", "number", "boolean"].indexOf(typeof next) > -1 && j < tokens.length - 1) {
          continue;
        }
        i += j - i + 1;
        break;
      }
    }
    current = next;
  }
  return current;
};
var getCleanedCode = (code) => code?.replace("_", "-");
var consoleLogger = {
  type: "logger",
  log(args) {
    this.output("log", args);
  },
  warn(args) {
    this.output("warn", args);
  },
  error(args) {
    this.output("error", args);
  },
  output(type, args) {
    console?.[type]?.apply?.(console, args);
  }
};

class Logger {
  constructor(concreteLogger, options = {}) {
    this.init(concreteLogger, options);
  }
  init(concreteLogger, options = {}) {
    this.prefix = options.prefix || "i18next:";
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  }
  log(...args) {
    return this.forward(args, "log", "", true);
  }
  warn(...args) {
    return this.forward(args, "warn", "", true);
  }
  error(...args) {
    return this.forward(args, "error", "");
  }
  deprecate(...args) {
    return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
  }
  forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug)
      return null;
    if (isString(args[0]))
      args[0] = `${prefix}${this.prefix} ${args[0]}`;
    return this.logger[lvl](args);
  }
  create(moduleName) {
    return new Logger(this.logger, {
      ...{
        prefix: `${this.prefix}:${moduleName}:`
      },
      ...this.options
    });
  }
  clone(options) {
    options = options || this.options;
    options.prefix = options.prefix || this.prefix;
    return new Logger(this.logger, options);
  }
}
var baseLogger = new Logger;

class EventEmitter {
  constructor() {
    this.observers = {};
  }
  on(events, listener) {
    events.split(" ").forEach((event) => {
      if (!this.observers[event])
        this.observers[event] = new Map;
      const numListeners = this.observers[event].get(listener) || 0;
      this.observers[event].set(listener, numListeners + 1);
    });
    return this;
  }
  off(event, listener) {
    if (!this.observers[event])
      return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event].delete(listener);
  }
  emit(event, ...args) {
    if (this.observers[event]) {
      const cloned = Array.from(this.observers[event].entries());
      cloned.forEach(([observer, numTimesAdded]) => {
        for (let i = 0;i < numTimesAdded; i++) {
          observer(...args);
        }
      });
    }
    if (this.observers["*"]) {
      const cloned = Array.from(this.observers["*"].entries());
      cloned.forEach(([observer, numTimesAdded]) => {
        for (let i = 0;i < numTimesAdded; i++) {
          observer.apply(observer, [event, ...args]);
        }
      });
    }
  }
}

class ResourceStore extends EventEmitter {
  constructor(data, options = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super();
    this.data = data || {};
    this.options = options;
    if (this.options.keySeparator === undefined) {
      this.options.keySeparator = ".";
    }
    if (this.options.ignoreJSONStructure === undefined) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  }
  removeNamespaces(ns) {
    const index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  }
  getResource(lng, ns, key, options = {}) {
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    const ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let path;
    if (lng.indexOf(".") > -1) {
      path = lng.split(".");
    } else {
      path = [lng, ns];
      if (key) {
        if (Array.isArray(key)) {
          path.push(...key);
        } else if (isString(key) && keySeparator) {
          path.push(...key.split(keySeparator));
        } else {
          path.push(key);
        }
      }
    }
    const result = getPath(this.data, path);
    if (!result && !ns && !key && lng.indexOf(".") > -1) {
      lng = path[0];
      ns = path[1];
      key = path.slice(2).join(".");
    }
    if (result || !ignoreJSONStructure || !isString(key))
      return result;
    return deepFind(this.data?.[lng]?.[ns], key, keySeparator);
  }
  addResource(lng, ns, key, value, options = {
    silent: false
  }) {
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    let path = [lng, ns];
    if (key)
      path = path.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf(".") > -1) {
      path = lng.split(".");
      value = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path, value);
    if (!options.silent)
      this.emit("added", lng, ns, key, value);
  }
  addResources(lng, ns, resources, options = {
    silent: false
  }) {
    for (const m in resources) {
      if (isString(resources[m]) || Array.isArray(resources[m]))
        this.addResource(lng, ns, m, resources[m], {
          silent: true
        });
    }
    if (!options.silent)
      this.emit("added", lng, ns, resources);
  }
  addResourceBundle(lng, ns, resources, deep, overwrite, options = {
    silent: false,
    skipCopy: false
  }) {
    let path = [lng, ns];
    if (lng.indexOf(".") > -1) {
      path = lng.split(".");
      deep = resources;
      resources = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    let pack = getPath(this.data, path) || {};
    if (!options.skipCopy)
      resources = JSON.parse(JSON.stringify(resources));
    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = {
        ...pack,
        ...resources
      };
    }
    setPath(this.data, path, pack);
    if (!options.silent)
      this.emit("added", lng, ns, resources);
  }
  removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit("removed", lng, ns);
  }
  hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== undefined;
  }
  getResourceBundle(lng, ns) {
    if (!ns)
      ns = this.options.defaultNS;
    return this.getResource(lng, ns);
  }
  getDataByLanguage(lng) {
    return this.data[lng];
  }
  hasLanguageSomeTranslations(lng) {
    const data = this.getDataByLanguage(lng);
    const n = data && Object.keys(data) || [];
    return !!n.find((v) => data[v] && Object.keys(data[v]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var postProcessor = {
  processors: {},
  addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle(processors, value, key, options, translator) {
    processors.forEach((processor) => {
      value = this.processors[processor]?.process(value, key, options, translator) ?? value;
    });
    return value;
  }
};
var PATH_KEY = Symbol("i18next/PATH_KEY");
function createProxy() {
  const state = [];
  const handler = Object.create(null);
  let proxy;
  handler.get = (target, key) => {
    proxy?.revoke?.();
    if (key === PATH_KEY)
      return state;
    state.push(key);
    proxy = Proxy.revocable(target, handler);
    return proxy.proxy;
  };
  return Proxy.revocable(Object.create(null), handler).proxy;
}
function keysFromSelector(selector, opts) {
  const {
    [PATH_KEY]: path
  } = selector(createProxy());
  return path.join(opts?.keySeparator ?? ".");
}
var checkedLoadedFor = {};
var shouldHandleAsObject = (res) => !isString(res) && typeof res !== "boolean" && typeof res !== "number";

class Translator extends EventEmitter {
  constructor(services, options = {}) {
    super();
    copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, this);
    this.options = options;
    if (this.options.keySeparator === undefined) {
      this.options.keySeparator = ".";
    }
    this.logger = baseLogger.create("translator");
  }
  changeLanguage(lng) {
    if (lng)
      this.language = lng;
  }
  exists(key, o = {
    interpolation: {}
  }) {
    const opt = {
      ...o
    };
    if (key == null)
      return false;
    const resolved = this.resolve(key, opt);
    if (resolved?.res === undefined)
      return false;
    const isObject = shouldHandleAsObject(resolved.res);
    if (opt.returnObjects === false && isObject) {
      return false;
    }
    return true;
  }
  extractFromKey(key, opt) {
    let nsSeparator = opt.nsSeparator !== undefined ? opt.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === undefined)
      nsSeparator = ":";
    const keySeparator = opt.keySeparator !== undefined ? opt.keySeparator : this.options.keySeparator;
    let namespaces = opt.ns || this.options.defaultNS || [];
    const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !opt.keySeparator && !this.options.userDefinedNsSeparator && !opt.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      const m = key.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) {
        return {
          key,
          namespaces: isString(namespaces) ? [namespaces] : namespaces
        };
      }
      const parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1)
        namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    return {
      key,
      namespaces: isString(namespaces) ? [namespaces] : namespaces
    };
  }
  translate(keys, o, lastKey) {
    let opt = typeof o === "object" ? {
      ...o
    } : o;
    if (typeof opt !== "object" && this.options.overloadTranslationOptionHandler) {
      opt = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof opt === "object")
      opt = {
        ...opt
      };
    if (!opt)
      opt = {};
    if (keys == null)
      return "";
    if (typeof keys === "function")
      keys = keysFromSelector(keys, {
        ...this.options,
        ...opt
      });
    if (!Array.isArray(keys))
      keys = [String(keys)];
    const returnDetails = opt.returnDetails !== undefined ? opt.returnDetails : this.options.returnDetails;
    const keySeparator = opt.keySeparator !== undefined ? opt.keySeparator : this.options.keySeparator;
    const {
      key,
      namespaces
    } = this.extractFromKey(keys[keys.length - 1], opt);
    const namespace = namespaces[namespaces.length - 1];
    let nsSeparator = opt.nsSeparator !== undefined ? opt.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === undefined)
      nsSeparator = ":";
    const lng = opt.lng || this.language;
    const appendNamespaceToCIMode = opt.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng?.toLowerCase() === "cimode") {
      if (appendNamespaceToCIMode) {
        if (returnDetails) {
          return {
            res: `${namespace}${nsSeparator}${key}`,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(opt)
          };
        }
        return `${namespace}${nsSeparator}${key}`;
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace,
          usedParams: this.getUsedParamsDetails(opt)
        };
      }
      return key;
    }
    const resolved = this.resolve(keys, opt);
    let res = resolved?.res;
    const resUsedKey = resolved?.usedKey || key;
    const resExactUsedKey = resolved?.exactUsedKey || key;
    const noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
    const joinArrays = opt.joinArrays !== undefined ? opt.joinArrays : this.options.joinArrays;
    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    const needsPluralHandling = opt.count !== undefined && !isString(opt.count);
    const hasDefaultValue = Translator.hasDefaultValue(opt);
    const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, opt) : "";
    const defaultValueSuffixOrdinalFallback = opt.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, {
      ordinal: false
    }) : "";
    const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
    const defaultValue = needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] || opt[`defaultValue${defaultValueSuffix}`] || opt[`defaultValue${defaultValueSuffixOrdinalFallback}`] || opt.defaultValue;
    let resForObjHndl = res;
    if (handleAsObjectInI18nFormat && !res && hasDefaultValue) {
      resForObjHndl = defaultValue;
    }
    const handleAsObject = shouldHandleAsObject(resForObjHndl);
    const resType = Object.prototype.toString.apply(resForObjHndl);
    if (handleAsObjectInI18nFormat && resForObjHndl && handleAsObject && noObject.indexOf(resType) < 0 && !(isString(joinArrays) && Array.isArray(resForObjHndl))) {
      if (!opt.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        }
        const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, resForObjHndl, {
          ...opt,
          ns: namespaces
        }) : `key '${key} (${this.language})' returned an object instead of string.`;
        if (returnDetails) {
          resolved.res = r;
          resolved.usedParams = this.getUsedParamsDetails(opt);
          return resolved;
        }
        return r;
      }
      if (keySeparator) {
        const resTypeIsArray = Array.isArray(resForObjHndl);
        const copy2 = resTypeIsArray ? [] : {};
        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (const m in resForObjHndl) {
          if (Object.prototype.hasOwnProperty.call(resForObjHndl, m)) {
            const deepKey = `${newKeyToUse}${keySeparator}${m}`;
            if (hasDefaultValue && !res) {
              copy2[m] = this.translate(deepKey, {
                ...opt,
                defaultValue: shouldHandleAsObject(defaultValue) ? defaultValue[m] : undefined,
                ...{
                  joinArrays: false,
                  ns: namespaces
                }
              });
            } else {
              copy2[m] = this.translate(deepKey, {
                ...opt,
                ...{
                  joinArrays: false,
                  ns: namespaces
                }
              });
            }
            if (copy2[m] === deepKey)
              copy2[m] = resForObjHndl[m];
          }
        }
        res = copy2;
      }
    } else if (handleAsObjectInI18nFormat && isString(joinArrays) && Array.isArray(res)) {
      res = res.join(joinArrays);
      if (res)
        res = this.extendTranslation(res, keys, opt, lastKey);
    } else {
      let usedDefault = false;
      let usedKey = false;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      const missingKeyNoValueFallbackToKey = opt.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          const fk = this.resolve(key, {
            ...opt,
            keySeparator: false
          });
          if (fk && fk.res)
            this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let lngs = [];
        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, opt.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
          for (let i = 0;i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === "all") {
          lngs = this.languageUtils.toResolveHierarchy(opt.lng || this.language);
        } else {
          lngs.push(opt.lng || this.language);
        }
        const send = (l, k, specificDefaultValue) => {
          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, opt);
          } else if (this.backendConnector?.saveMissing) {
            this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, opt);
          }
          this.emit("missingKey", l, namespace, k, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach((language) => {
              const suffixes = this.pluralResolver.getSuffixes(language, opt);
              if (needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
                suffixes.push(`${this.options.pluralSeparator}zero`);
              }
              suffixes.forEach((suffix) => {
                send([language], key + suffix, opt[`defaultValue${suffix}`] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, opt, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey) {
        res = `${namespace}${nsSeparator}${key}`;
      }
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}${nsSeparator}${key}` : key, usedDefault ? res : undefined, opt);
      }
    }
    if (returnDetails) {
      resolved.res = res;
      resolved.usedParams = this.getUsedParamsDetails(opt);
      return resolved;
    }
    return res;
  }
  extendTranslation(res, key, opt, resolved, lastKey) {
    if (this.i18nFormat?.parse) {
      res = this.i18nFormat.parse(res, {
        ...this.options.interpolation.defaultVariables,
        ...opt
      }, opt.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved
      });
    } else if (!opt.skipInterpolation) {
      if (opt.interpolation)
        this.interpolator.init({
          ...opt,
          ...{
            interpolation: {
              ...this.options.interpolation,
              ...opt.interpolation
            }
          }
        });
      const skipOnVariables = isString(res) && (opt?.interpolation?.skipOnVariables !== undefined ? opt.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let nestBef;
      if (skipOnVariables) {
        const nb = res.match(this.interpolator.nestingRegexp);
        nestBef = nb && nb.length;
      }
      let data = opt.replace && !isString(opt.replace) ? opt.replace : opt;
      if (this.options.interpolation.defaultVariables)
        data = {
          ...this.options.interpolation.defaultVariables,
          ...data
        };
      res = this.interpolator.interpolate(res, data, opt.lng || this.language || resolved.usedLng, opt);
      if (skipOnVariables) {
        const na = res.match(this.interpolator.nestingRegexp);
        const nestAft = na && na.length;
        if (nestBef < nestAft)
          opt.nest = false;
      }
      if (!opt.lng && resolved && resolved.res)
        opt.lng = this.language || resolved.usedLng;
      if (opt.nest !== false)
        res = this.interpolator.nest(res, (...args) => {
          if (lastKey?.[0] === args[0] && !opt.context) {
            this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
            return null;
          }
          return this.translate(...args, key);
        }, opt);
      if (opt.interpolation)
        this.interpolator.reset();
    }
    const postProcess = opt.postProcess || this.options.postProcess;
    const postProcessorNames = isString(postProcess) ? [postProcess] : postProcess;
    if (res != null && postProcessorNames?.length && opt.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: {
          ...resolved,
          usedParams: this.getUsedParamsDetails(opt)
        },
        ...opt
      } : opt, this);
    }
    return res;
  }
  resolve(keys, opt = {}) {
    let found;
    let usedKey;
    let exactUsedKey;
    let usedLng;
    let usedNS;
    if (isString(keys))
      keys = [keys];
    keys.forEach((k) => {
      if (this.isValidLookup(found))
        return;
      const extracted = this.extractFromKey(k, opt);
      const key = extracted.key;
      usedKey = key;
      let namespaces = extracted.namespaces;
      if (this.options.fallbackNS)
        namespaces = namespaces.concat(this.options.fallbackNS);
      const needsPluralHandling = opt.count !== undefined && !isString(opt.count);
      const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
      const needsContextHandling = opt.context !== undefined && (isString(opt.context) || typeof opt.context === "number") && opt.context !== "";
      const codes = opt.lngs ? opt.lngs : this.languageUtils.toResolveHierarchy(opt.lng || this.language, opt.fallbackLng);
      namespaces.forEach((ns) => {
        if (this.isValidLookup(found))
          return;
        usedNS = ns;
        if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(usedNS)) {
          checkedLoadedFor[`${codes[0]}-${ns}`] = true;
          this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        }
        codes.forEach((code) => {
          if (this.isValidLookup(found))
            return;
          usedLng = code;
          const finalKeys = [key];
          if (this.i18nFormat?.addLookupKeys) {
            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, opt);
          } else {
            let pluralSuffix;
            if (needsPluralHandling)
              pluralSuffix = this.pluralResolver.getSuffix(code, opt.count, opt);
            const zeroSuffix = `${this.options.pluralSeparator}zero`;
            const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (needsPluralHandling) {
              if (opt.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
              }
              finalKeys.push(key + pluralSuffix);
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              const contextKey = `${key}${this.options.contextSeparator || "_"}${opt.context}`;
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                if (opt.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                finalKeys.push(contextKey + pluralSuffix);
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          let possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!this.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = this.getResource(code, ns, possibleKey, opt);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey,
      exactUsedKey,
      usedLng,
      usedNS
    };
  }
  isValidLookup(res) {
    return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
  }
  getResource(code, ns, key, options = {}) {
    if (this.i18nFormat?.getResource)
      return this.i18nFormat.getResource(code, ns, key, options);
    return this.resourceStore.getResource(code, ns, key, options);
  }
  getUsedParamsDetails(options = {}) {
    const optionsKeys = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"];
    const useOptionsReplaceForData = options.replace && !isString(options.replace);
    let data = useOptionsReplaceForData ? options.replace : options;
    if (useOptionsReplaceForData && typeof options.count !== "undefined") {
      data.count = options.count;
    }
    if (this.options.interpolation.defaultVariables) {
      data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
    }
    if (!useOptionsReplaceForData) {
      data = {
        ...data
      };
      for (const key of optionsKeys) {
        delete data[key];
      }
    }
    return data;
  }
  static hasDefaultValue(options) {
    const prefix = "defaultValue";
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && options[option] !== undefined) {
        return true;
      }
    }
    return false;
  }
}

class LanguageUtil {
  constructor(options) {
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create("languageUtils");
  }
  getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0)
      return null;
    const p = code.split("-");
    if (p.length === 2)
      return null;
    p.pop();
    if (p[p.length - 1].toLowerCase() === "x")
      return null;
    return this.formatLanguageCode(p.join("-"));
  }
  getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0)
      return code;
    const p = code.split("-");
    return this.formatLanguageCode(p[0]);
  }
  formatLanguageCode(code) {
    if (isString(code) && code.indexOf("-") > -1) {
      let formattedCode;
      try {
        formattedCode = Intl.getCanonicalLocales(code)[0];
      } catch (e) {}
      if (formattedCode && this.options.lowerCaseLng) {
        formattedCode = formattedCode.toLowerCase();
      }
      if (formattedCode)
        return formattedCode;
      if (this.options.lowerCaseLng) {
        return code.toLowerCase();
      }
      return code;
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  }
  isSupportedCode(code) {
    if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
  }
  getBestMatchFromCodes(codes) {
    if (!codes)
      return null;
    let found;
    codes.forEach((code) => {
      if (found)
        return;
      const cleanedLng = this.formatLanguageCode(code);
      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng))
        found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach((code) => {
        if (found)
          return;
        const lngScOnly = this.getScriptPartFromCode(code);
        if (this.isSupportedCode(lngScOnly))
          return found = lngScOnly;
        const lngOnly = this.getLanguagePartFromCode(code);
        if (this.isSupportedCode(lngOnly))
          return found = lngOnly;
        found = this.options.supportedLngs.find((supportedLng) => {
          if (supportedLng === lngOnly)
            return supportedLng;
          if (supportedLng.indexOf("-") < 0 && lngOnly.indexOf("-") < 0)
            return;
          if (supportedLng.indexOf("-") > 0 && lngOnly.indexOf("-") < 0 && supportedLng.substring(0, supportedLng.indexOf("-")) === lngOnly)
            return supportedLng;
          if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1)
            return supportedLng;
        });
      });
    }
    if (!found)
      found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  }
  getFallbackCodes(fallbacks, code) {
    if (!fallbacks)
      return [];
    if (typeof fallbacks === "function")
      fallbacks = fallbacks(code);
    if (isString(fallbacks))
      fallbacks = [fallbacks];
    if (Array.isArray(fallbacks))
      return fallbacks;
    if (!code)
      return fallbacks.default || [];
    let found = fallbacks[code];
    if (!found)
      found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found)
      found = fallbacks[this.formatLanguageCode(code)];
    if (!found)
      found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found)
      found = fallbacks.default;
    return found || [];
  }
  toResolveHierarchy(code, fallbackCode) {
    const fallbackCodes = this.getFallbackCodes((fallbackCode === false ? [] : fallbackCode) || this.options.fallbackLng || [], code);
    const codes = [];
    const addCode = (c) => {
      if (!c)
        return;
      if (this.isSupportedCode(c)) {
        codes.push(c);
      } else {
        this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
      }
    };
    if (isString(code) && (code.indexOf("-") > -1 || code.indexOf("_") > -1)) {
      if (this.options.load !== "languageOnly")
        addCode(this.formatLanguageCode(code));
      if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly")
        addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== "currentOnly")
        addCode(this.getLanguagePartFromCode(code));
    } else if (isString(code)) {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach((fc) => {
      if (codes.indexOf(fc) < 0)
        addCode(this.formatLanguageCode(fc));
    });
    return codes;
  }
}
var suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
var dummyRule = {
  select: (count) => count === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};

class PluralResolver {
  constructor(languageUtils, options = {}) {
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create("pluralResolver");
    this.pluralRulesCache = {};
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(code, options = {}) {
    const cleanedCode = getCleanedCode(code === "dev" ? "en" : code);
    const type = options.ordinal ? "ordinal" : "cardinal";
    const cacheKey = JSON.stringify({
      cleanedCode,
      type
    });
    if (cacheKey in this.pluralRulesCache) {
      return this.pluralRulesCache[cacheKey];
    }
    let rule;
    try {
      rule = new Intl.PluralRules(cleanedCode, {
        type
      });
    } catch (err) {
      if (!Intl) {
        this.logger.error("No Intl support, please use an Intl polyfill!");
        return dummyRule;
      }
      if (!code.match(/-|_/))
        return dummyRule;
      const lngPart = this.languageUtils.getLanguagePartFromCode(code);
      rule = this.getRule(lngPart, options);
    }
    this.pluralRulesCache[cacheKey] = rule;
    return rule;
  }
  needsPlural(code, options = {}) {
    let rule = this.getRule(code, options);
    if (!rule)
      rule = this.getRule("dev", options);
    return rule?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(code, key, options = {}) {
    return this.getSuffixes(code, options).map((suffix) => `${key}${suffix}`);
  }
  getSuffixes(code, options = {}) {
    let rule = this.getRule(code, options);
    if (!rule)
      rule = this.getRule("dev", options);
    if (!rule)
      return [];
    return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
  }
  getSuffix(code, count, options = {}) {
    const rule = this.getRule(code, options);
    if (rule) {
      return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count)}`;
    }
    this.logger.warn(`no plural rule found for: ${code}`);
    return this.getSuffix("dev", count, options);
  }
}
var deepFindWithDefaults = (data, defaultData, key, keySeparator = ".", ignoreJSONStructure = true) => {
  let path = getPathWithDefaults(data, defaultData, key);
  if (!path && ignoreJSONStructure && isString(key)) {
    path = deepFind(data, key, keySeparator);
    if (path === undefined)
      path = deepFind(defaultData, key, keySeparator);
  }
  return path;
};
var regexSafe = (val) => val.replace(/\$/g, "$$$$");

class Interpolator {
  constructor(options = {}) {
    this.logger = baseLogger.create("interpolator");
    this.options = options;
    this.format = options?.interpolation?.format || ((value) => value);
    this.init(options);
  }
  init(options = {}) {
    if (!options.interpolation)
      options.interpolation = {
        escapeValue: true
      };
    const {
      escape: escape$1,
      escapeValue,
      useRawValueToEscape,
      prefix,
      prefixEscaped,
      suffix,
      suffixEscaped,
      formatSeparator,
      unescapeSuffix,
      unescapePrefix,
      nestingPrefix,
      nestingPrefixEscaped,
      nestingSuffix,
      nestingSuffixEscaped,
      nestingOptionsSeparator,
      maxReplaces,
      alwaysFormat
    } = options.interpolation;
    this.escape = escape$1 !== undefined ? escape$1 : escape;
    this.escapeValue = escapeValue !== undefined ? escapeValue : true;
    this.useRawValueToEscape = useRawValueToEscape !== undefined ? useRawValueToEscape : false;
    this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || "{{";
    this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || "}}";
    this.formatSeparator = formatSeparator || ",";
    this.unescapePrefix = unescapeSuffix ? "" : unescapePrefix || "-";
    this.unescapeSuffix = this.unescapePrefix ? "" : unescapeSuffix || "";
    this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape("$t(");
    this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(")");
    this.nestingOptionsSeparator = nestingOptionsSeparator || ",";
    this.maxReplaces = maxReplaces || 1000;
    this.alwaysFormat = alwaysFormat !== undefined ? alwaysFormat : false;
    this.resetRegExp();
  }
  reset() {
    if (this.options)
      this.init(this.options);
  }
  resetRegExp() {
    const getOrResetRegExp = (existingRegExp, pattern) => {
      if (existingRegExp?.source === pattern) {
        existingRegExp.lastIndex = 0;
        return existingRegExp;
      }
      return new RegExp(pattern, "g");
    };
    this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
    this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
    this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(str, data, lng, options) {
    let match;
    let value;
    let replaces;
    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    const handleFormat = (key) => {
      if (key.indexOf(this.formatSeparator) < 0) {
        const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(path, undefined, lng, {
          ...options,
          ...data,
          interpolationkey: key
        }) : path;
      }
      const p = key.split(this.formatSeparator);
      const k = p.shift().trim();
      const f = p.join(this.formatSeparator).trim();
      return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
        ...options,
        ...data,
        interpolationkey: k
      });
    };
    this.resetRegExp();
    const missingInterpolationHandler = options?.missingInterpolationHandler || this.options.missingInterpolationHandler;
    const skipOnVariables = options?.interpolation?.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    const todos = [{
      regex: this.regexpUnescape,
      safeValue: (val) => regexSafe(val)
    }, {
      regex: this.regexp,
      safeValue: (val) => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
    }];
    todos.forEach((todo) => {
      replaces = 0;
      while (match = todo.regex.exec(str)) {
        const matchedVar = match[1].trim();
        value = handleFormat(matchedVar);
        if (value === undefined) {
          if (typeof missingInterpolationHandler === "function") {
            const temp = missingInterpolationHandler(str, match, options);
            value = isString(temp) ? temp : "";
          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
            value = "";
          } else if (skipOnVariables) {
            value = match[0];
            continue;
          } else {
            this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
            value = "";
          }
        } else if (!isString(value) && !this.useRawValueToEscape) {
          value = makeString(value);
        }
        const safeValue = todo.safeValue(value);
        str = str.replace(match[0], safeValue);
        if (skipOnVariables) {
          todo.regex.lastIndex += value.length;
          todo.regex.lastIndex -= match[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= this.maxReplaces) {
          break;
        }
      }
    });
    return str;
  }
  nest(str, fc, options = {}) {
    let match;
    let value;
    let clonedOptions;
    const handleHasOptions = (key, inheritedOptions) => {
      const sep = this.nestingOptionsSeparator;
      if (key.indexOf(sep) < 0)
        return key;
      const c = key.split(new RegExp(`${sep}[ ]*{`));
      let optionsString = `{${c[1]}`;
      key = c[0];
      optionsString = this.interpolate(optionsString, clonedOptions);
      const matchedSingleQuotes = optionsString.match(/'/g);
      const matchedDoubleQuotes = optionsString.match(/"/g);
      if ((matchedSingleQuotes?.length ?? 0) % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions)
          clonedOptions = {
            ...inheritedOptions,
            ...clonedOptions
          };
      } catch (e) {
        this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
        return `${key}${sep}${optionsString}`;
      }
      if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(this.prefix) > -1)
        delete clonedOptions.defaultValue;
      return key;
    };
    while (match = this.nestingRegexp.exec(str)) {
      let formatters = [];
      clonedOptions = {
        ...options
      };
      clonedOptions = clonedOptions.replace && !isString(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      const keyEndIndex = /{.*}/.test(match[1]) ? match[1].lastIndexOf("}") + 1 : match[1].indexOf(this.formatSeparator);
      if (keyEndIndex !== -1) {
        formatters = match[1].slice(keyEndIndex).split(this.formatSeparator).map((elem) => elem.trim()).filter(Boolean);
        match[1] = match[1].slice(0, keyEndIndex);
      }
      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
      if (value && match[0] === str && !isString(value))
        return value;
      if (!isString(value))
        value = makeString(value);
      if (!value) {
        this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
        value = "";
      }
      if (formatters.length) {
        value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
          ...options,
          interpolationkey: match[1].trim()
        }), value.trim());
      }
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  }
}
var parseFormatStr = (formatStr) => {
  let formatName = formatStr.toLowerCase().trim();
  const formatOptions = {};
  if (formatStr.indexOf("(") > -1) {
    const p = formatStr.split("(");
    formatName = p[0].toLowerCase().trim();
    const optStr = p[1].substring(0, p[1].length - 1);
    if (formatName === "currency" && optStr.indexOf(":") < 0) {
      if (!formatOptions.currency)
        formatOptions.currency = optStr.trim();
    } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
      if (!formatOptions.range)
        formatOptions.range = optStr.trim();
    } else {
      const opts = optStr.split(";");
      opts.forEach((opt) => {
        if (opt) {
          const [key, ...rest] = opt.split(":");
          const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
          const trimmedKey = key.trim();
          if (!formatOptions[trimmedKey])
            formatOptions[trimmedKey] = val;
          if (val === "false")
            formatOptions[trimmedKey] = false;
          if (val === "true")
            formatOptions[trimmedKey] = true;
          if (!isNaN(val))
            formatOptions[trimmedKey] = parseInt(val, 10);
        }
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
};
var createCachedFormatter = (fn) => {
  const cache = {};
  return (v, l, o) => {
    let optForCache = o;
    if (o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey]) {
      optForCache = {
        ...optForCache,
        [o.interpolationkey]: undefined
      };
    }
    const key = l + JSON.stringify(optForCache);
    let frm = cache[key];
    if (!frm) {
      frm = fn(getCleanedCode(l), o);
      cache[key] = frm;
    }
    return frm(v);
  };
};
var createNonCachedFormatter = (fn) => (v, l, o) => fn(getCleanedCode(l), o)(v);

class Formatter {
  constructor(options = {}) {
    this.logger = baseLogger.create("formatter");
    this.options = options;
    this.init(options);
  }
  init(services, options = {
    interpolation: {}
  }) {
    this.formatSeparator = options.interpolation.formatSeparator || ",";
    const cf = options.cacheInBuiltFormats ? createCachedFormatter : createNonCachedFormatter;
    this.formats = {
      number: cf((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      currency: cf((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt,
          style: "currency"
        });
        return (val) => formatter.format(val);
      }),
      datetime: cf((lng, opt) => {
        const formatter = new Intl.DateTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      relativetime: cf((lng, opt) => {
        const formatter = new Intl.RelativeTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val, opt.range || "day");
      }),
      list: cf((lng, opt) => {
        const formatter = new Intl.ListFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      })
    };
  }
  add(name, fc) {
    this.formats[name.toLowerCase().trim()] = fc;
  }
  addCached(name, fc) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
  }
  format(value, format, lng, options = {}) {
    const formats = format.split(this.formatSeparator);
    if (formats.length > 1 && formats[0].indexOf("(") > 1 && formats[0].indexOf(")") < 0 && formats.find((f) => f.indexOf(")") > -1)) {
      const lastIndex = formats.findIndex((f) => f.indexOf(")") > -1);
      formats[0] = [formats[0], ...formats.splice(1, lastIndex)].join(this.formatSeparator);
    }
    const result = formats.reduce((mem, f) => {
      const {
        formatName,
        formatOptions
      } = parseFormatStr(f);
      if (this.formats[formatName]) {
        let formatted = mem;
        try {
          const valOptions = options?.formatParams?.[options.interpolationkey] || {};
          const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
          formatted = this.formats[formatName](mem, l, {
            ...formatOptions,
            ...options,
            ...valOptions
          });
        } catch (error) {
          this.logger.warn(error);
        }
        return formatted;
      } else {
        this.logger.warn(`there was no format function for ${formatName}`);
      }
      return mem;
    }, value);
    return result;
  }
}
var removePending = (q, name) => {
  if (q.pending[name] !== undefined) {
    delete q.pending[name];
    q.pendingCount--;
  }
};

class Connector extends EventEmitter {
  constructor(backend, store, services, options = {}) {
    super();
    this.backend = backend;
    this.store = store;
    this.services = services;
    this.languageUtils = services.languageUtils;
    this.options = options;
    this.logger = baseLogger.create("backendConnector");
    this.waitingReads = [];
    this.maxParallelReads = options.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    this.backend?.init?.(services, options.backend, options);
  }
  queueLoad(languages, namespaces, options, callback) {
    const toLoad = {};
    const pending2 = {};
    const toLoadLanguages = {};
    const toLoadNamespaces = {};
    languages.forEach((lng) => {
      let hasAllNamespaces = true;
      namespaces.forEach((ns) => {
        const name = `${lng}|${ns}`;
        if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
          this.state[name] = 2;
        } else if (this.state[name] < 0)
          ;
        else if (this.state[name] === 1) {
          if (pending2[name] === undefined)
            pending2[name] = true;
        } else {
          this.state[name] = 1;
          hasAllNamespaces = false;
          if (pending2[name] === undefined)
            pending2[name] = true;
          if (toLoad[name] === undefined)
            toLoad[name] = true;
          if (toLoadNamespaces[ns] === undefined)
            toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces)
        toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending2).length) {
      this.queue.push({
        pending: pending2,
        pendingCount: Object.keys(pending2).length,
        loaded: {},
        errors: [],
        callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending2),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  }
  loaded(name, err, data) {
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    if (err)
      this.emit("failedLoading", lng, ns, err);
    if (!err && data) {
      this.store.addResourceBundle(lng, ns, data, undefined, undefined, {
        skipCopy: true
      });
    }
    this.state[name] = err ? -1 : 2;
    if (err && data)
      this.state[name] = 0;
    const loaded = {};
    this.queue.forEach((q) => {
      pushPath(q.loaded, [lng], ns);
      removePending(q, name);
      if (err)
        q.errors.push(err);
      if (q.pendingCount === 0 && !q.done) {
        Object.keys(q.loaded).forEach((l) => {
          if (!loaded[l])
            loaded[l] = {};
          const loadedKeys = q.loaded[l];
          if (loadedKeys.length) {
            loadedKeys.forEach((n) => {
              if (loaded[l][n] === undefined)
                loaded[l][n] = true;
            });
          }
        });
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });
    this.emit("loaded", loaded);
    this.queue = this.queue.filter((q) => !q.done);
  }
  read(lng, ns, fcName, tried = 0, wait = this.retryTimeout, callback) {
    if (!lng.length)
      return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng,
        ns,
        fcName,
        tried,
        wait,
        callback
      });
      return;
    }
    this.readingCalls++;
    const resolver = (err, data) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        const next = this.waitingReads.shift();
        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data && tried < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    };
    const fc = this.backend[fcName].bind(this.backend);
    if (fc.length === 2) {
      try {
        const r = fc(lng, ns);
        if (r && typeof r.then === "function") {
          r.then((data) => resolver(null, data)).catch(resolver);
        } else {
          resolver(null, r);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc(lng, ns, resolver);
  }
  prepareLoading(languages, namespaces, options = {}, callback) {
    if (!this.backend) {
      this.logger.warn("No backend was added via i18next.use. Will not load resources.");
      return callback && callback();
    }
    if (isString(languages))
      languages = this.languageUtils.toResolveHierarchy(languages);
    if (isString(namespaces))
      namespaces = [namespaces];
    const toLoad = this.queueLoad(languages, namespaces, options, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length)
        callback();
      return null;
    }
    toLoad.toLoad.forEach((name) => {
      this.loadOne(name);
    });
  }
  load(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {}, callback);
  }
  reload(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {
      reload: true
    }, callback);
  }
  loadOne(name, prefix = "") {
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    this.read(lng, ns, "read", undefined, undefined, (err, data) => {
      if (err)
        this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
      if (!err && data)
        this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
      this.loaded(name, err, data);
    });
  }
  saveMissing(languages, namespace, key, fallbackValue, isUpdate, options = {}, clb = () => {}) {
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(namespace)) {
      this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (key === undefined || key === null || key === "")
      return;
    if (this.backend?.create) {
      const opts = {
        ...options,
        isUpdate
      };
      const fc = this.backend.create.bind(this.backend);
      if (fc.length < 6) {
        try {
          let r;
          if (fc.length === 5) {
            r = fc(languages, namespace, key, fallbackValue, opts);
          } else {
            r = fc(languages, namespace, key, fallbackValue);
          }
          if (r && typeof r.then === "function") {
            r.then((data) => clb(null, data)).catch(clb);
          } else {
            clb(null, r);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc(languages, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages || !languages[0])
      return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  }
}
var get = () => ({
  debug: false,
  initAsync: true,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: false,
  supportedLngs: false,
  nonExplicitSupportedLngs: false,
  load: "all",
  preload: false,
  simplifyPluralSuffix: true,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: false,
  saveMissing: false,
  updateMissing: false,
  saveMissingTo: "fallback",
  saveMissingPlurals: true,
  missingKeyHandler: false,
  missingInterpolationHandler: false,
  postProcess: false,
  postProcessPassResolved: false,
  returnNull: false,
  returnEmptyString: true,
  returnObjects: false,
  joinArrays: false,
  returnedObjectHandler: false,
  parseMissingKeyHandler: false,
  appendNamespaceToMissingKey: false,
  appendNamespaceToCIMode: false,
  overloadTranslationOptionHandler: (args) => {
    let ret = {};
    if (typeof args[1] === "object")
      ret = args[1];
    if (isString(args[1]))
      ret.defaultValue = args[1];
    if (isString(args[2]))
      ret.tDescription = args[2];
    if (typeof args[2] === "object" || typeof args[3] === "object") {
      const options = args[3] || args[2];
      Object.keys(options).forEach((key) => {
        ret[key] = options[key];
      });
    }
    return ret;
  },
  interpolation: {
    escapeValue: true,
    format: (value) => value,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1000,
    skipOnVariables: true
  },
  cacheInBuiltFormats: true
});
var transformOptions = (options) => {
  if (isString(options.ns))
    options.ns = [options.ns];
  if (isString(options.fallbackLng))
    options.fallbackLng = [options.fallbackLng];
  if (isString(options.fallbackNS))
    options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs?.indexOf?.("cimode") < 0) {
    options.supportedLngs = options.supportedLngs.concat(["cimode"]);
  }
  if (typeof options.initImmediate === "boolean")
    options.initAsync = options.initImmediate;
  return options;
};
var noop = () => {};
var bindMemberFunctions = (inst) => {
  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach((mem) => {
    if (typeof inst[mem] === "function") {
      inst[mem] = inst[mem].bind(inst);
    }
  });
};
var usesLocize = (inst) => {
  if (inst?.modules?.backend?.name?.indexOf("Locize") > 0)
    return true;
  if (inst?.modules?.backend?.constructor?.name?.indexOf("Locize") > 0)
    return true;
  if (inst?.options?.backend?.backends) {
    if (inst.options.backend.backends.some((b) => b?.name?.indexOf("Locize") > 0 || b?.constructor?.name?.indexOf("Locize") > 0))
      return true;
  }
  return false;
};

class I18n extends EventEmitter {
  constructor(options = {}, callback) {
    super();
    this.options = transformOptions(options);
    this.services = {};
    this.logger = baseLogger;
    this.modules = {
      external: []
    };
    bindMemberFunctions(this);
    if (callback && !this.isInitialized && !options.isClone) {
      if (!this.options.initAsync) {
        this.init(options, callback);
        return this;
      }
      setTimeout(() => {
        this.init(options, callback);
      }, 0);
    }
  }
  init(options = {}, callback) {
    this.isInitializing = true;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (options.defaultNS == null && options.ns) {
      if (isString(options.ns)) {
        options.defaultNS = options.ns;
      } else if (options.ns.indexOf("translation") < 0) {
        options.defaultNS = options.ns[0];
      }
    }
    const defOpts = get();
    this.options = {
      ...defOpts,
      ...this.options,
      ...transformOptions(options)
    };
    this.options.interpolation = {
      ...defOpts.interpolation,
      ...this.options.interpolation
    };
    if (options.keySeparator !== undefined) {
      this.options.userDefinedKeySeparator = options.keySeparator;
    }
    if (options.nsSeparator !== undefined) {
      this.options.userDefinedNsSeparator = options.nsSeparator;
    }
    if (typeof this.options.overloadTranslationOptionHandler !== "function") {
      this.options.overloadTranslationOptionHandler = defOpts.overloadTranslationOptionHandler;
    }
    if (this.options.showSupportNotice !== false && !usesLocize(this)) {
      if (typeof console !== "undefined" && typeof console.info !== "undefined")
        console.info("\uD83C\uDF10 i18next is maintained with support from locize.com — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com \uD83D\uDC99");
    }
    const createClassOnDemand = (ClassOrObject) => {
      if (!ClassOrObject)
        return null;
      if (typeof ClassOrObject === "function")
        return new ClassOrObject;
      return ClassOrObject;
    };
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      let formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else {
        formatter = Formatter;
      }
      const lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      const s = this.services;
      s.logger = baseLogger;
      s.resourceStore = this.store;
      s.languageUtils = lu;
      s.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      const usingLegacyFormatFunction = this.options.interpolation.format && this.options.interpolation.format !== defOpts.interpolation.format;
      if (usingLegacyFormatFunction) {
        this.logger.deprecate(`init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting`);
      }
      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
        s.formatter = createClassOnDemand(formatter);
        if (s.formatter.init)
          s.formatter.init(s, this.options);
        this.options.interpolation.format = s.formatter.format.bind(s.formatter);
      }
      s.interpolator = new Interpolator(this.options);
      s.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      s.backendConnector.on("*", (event, ...args) => {
        this.emit(event, ...args);
      });
      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        if (s.languageDetector.init)
          s.languageDetector.init(s, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s.i18nFormat.init)
          s.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on("*", (event, ...args) => {
        this.emit(event, ...args);
      });
      this.modules.external.forEach((m) => {
        if (m.init)
          m.init(this);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback)
      callback = noop;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== "dev")
        this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn("init: no languageDetector is used and no lng is defined");
    }
    const storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
    storeApi.forEach((fcName) => {
      this[fcName] = (...args) => this.store[fcName](...args);
    });
    const storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
    storeApiChained.forEach((fcName) => {
      this[fcName] = (...args) => {
        this.store[fcName](...args);
        return this;
      };
    });
    const deferred = defer();
    const load = () => {
      const finish = (err, t) => {
        this.isInitializing = false;
        if (this.isInitialized && !this.initializedStoreOnce)
          this.logger.warn("init: i18next is already initialized. You should call init just once!");
        this.isInitialized = true;
        if (!this.options.isClone)
          this.logger.log("initialized", this.options);
        this.emit("initialized", this.options);
        deferred.resolve(t);
        callback(err, t);
      };
      if (this.languages && !this.isInitialized)
        return finish(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, finish);
    };
    if (this.options.resources || !this.options.initAsync) {
      load();
    } else {
      setTimeout(load, 0);
    }
    return deferred;
  }
  loadResources(language, callback = noop) {
    let usedCallback = callback;
    const usedLng = isString(language) ? language : this.language;
    if (typeof language === "function")
      usedCallback = language;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if (usedLng?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return usedCallback();
      const toLoad = [];
      const append = (lng) => {
        if (!lng)
          return;
        if (lng === "cimode")
          return;
        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach((l) => {
          if (l === "cimode")
            return;
          if (toLoad.indexOf(l) < 0)
            toLoad.push(l);
        });
      };
      if (!usedLng) {
        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach((l) => append(l));
      } else {
        append(usedLng);
      }
      this.options.preload?.forEach?.((l) => append(l));
      this.services.backendConnector.load(toLoad, this.options.ns, (e) => {
        if (!e && !this.resolvedLanguage && this.language)
          this.setResolvedLanguage(this.language);
        usedCallback(e);
      });
    } else {
      usedCallback(null);
    }
  }
  reloadResources(lngs, ns, callback) {
    const deferred = defer();
    if (typeof lngs === "function") {
      callback = lngs;
      lngs = undefined;
    }
    if (typeof ns === "function") {
      callback = ns;
      ns = undefined;
    }
    if (!lngs)
      lngs = this.languages;
    if (!ns)
      ns = this.options.ns;
    if (!callback)
      callback = noop;
    this.services.backendConnector.reload(lngs, ns, (err) => {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  }
  use(module) {
    if (!module)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!module.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    if (module.type === "backend") {
      this.modules.backend = module;
    }
    if (module.type === "logger" || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }
    if (module.type === "languageDetector") {
      this.modules.languageDetector = module;
    }
    if (module.type === "i18nFormat") {
      this.modules.i18nFormat = module;
    }
    if (module.type === "postProcessor") {
      postProcessor.addPostProcessor(module);
    }
    if (module.type === "formatter") {
      this.modules.formatter = module;
    }
    if (module.type === "3rdParty") {
      this.modules.external.push(module);
    }
    return this;
  }
  setResolvedLanguage(l) {
    if (!l || !this.languages)
      return;
    if (["cimode", "dev"].indexOf(l) > -1)
      return;
    for (let li = 0;li < this.languages.length; li++) {
      const lngInLngs = this.languages[li];
      if (["cimode", "dev"].indexOf(lngInLngs) > -1)
        continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
    if (!this.resolvedLanguage && this.languages.indexOf(l) < 0 && this.store.hasLanguageSomeTranslations(l)) {
      this.resolvedLanguage = l;
      this.languages.unshift(l);
    }
  }
  changeLanguage(lng, callback) {
    this.isLanguageChangingTo = lng;
    const deferred = defer();
    this.emit("languageChanging", lng);
    const setLngProps = (l) => {
      this.language = l;
      this.languages = this.services.languageUtils.toResolveHierarchy(l);
      this.resolvedLanguage = undefined;
      this.setResolvedLanguage(l);
    };
    const done = (err, l) => {
      if (l) {
        if (this.isLanguageChangingTo === lng) {
          setLngProps(l);
          this.translator.changeLanguage(l);
          this.isLanguageChangingTo = undefined;
          this.emit("languageChanged", l);
          this.logger.log("languageChanged", l);
        }
      } else {
        this.isLanguageChangingTo = undefined;
      }
      deferred.resolve((...args) => this.t(...args));
      if (callback)
        callback(err, (...args) => this.t(...args));
    };
    const setLng = (lngs) => {
      if (!lng && !lngs && this.services.languageDetector)
        lngs = [];
      const fl = isString(lngs) ? lngs : lngs && lngs[0];
      const l = this.store.hasLanguageSomeTranslations(fl) ? fl : this.services.languageUtils.getBestMatchFromCodes(isString(lngs) ? [lngs] : lngs);
      if (l) {
        if (!this.language) {
          setLngProps(l);
        }
        if (!this.translator.language)
          this.translator.changeLanguage(l);
        this.services.languageDetector?.cacheUserLanguage?.(l);
      }
      this.loadResources(l, (err) => {
        done(err, l);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  }
  getFixedT(lng, ns, keyPrefix) {
    const fixedT = (key, opts, ...rest) => {
      let o;
      if (typeof opts !== "object") {
        o = this.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        o = {
          ...opts
        };
      }
      o.lng = o.lng || fixedT.lng;
      o.lngs = o.lngs || fixedT.lngs;
      o.ns = o.ns || fixedT.ns;
      if (o.keyPrefix !== "")
        o.keyPrefix = o.keyPrefix || keyPrefix || fixedT.keyPrefix;
      const keySeparator = this.options.keySeparator || ".";
      let resultKey;
      if (o.keyPrefix && Array.isArray(key)) {
        resultKey = key.map((k) => {
          if (typeof k === "function")
            k = keysFromSelector(k, {
              ...this.options,
              ...opts
            });
          return `${o.keyPrefix}${keySeparator}${k}`;
        });
      } else {
        if (typeof key === "function")
          key = keysFromSelector(key, {
            ...this.options,
            ...opts
          });
        resultKey = o.keyPrefix ? `${o.keyPrefix}${keySeparator}${key}` : key;
      }
      return this.t(resultKey, o);
    };
    if (isString(lng)) {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  }
  t(...args) {
    return this.translator?.translate(...args);
  }
  exists(...args) {
    return this.translator?.exists(...args);
  }
  setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  }
  hasLoadedNamespace(ns, options = {}) {
    if (!this.isInitialized) {
      this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
      return false;
    }
    const lng = options.lng || this.resolvedLanguage || this.languages[0];
    const fallbackLng = this.options ? this.options.fallbackLng : false;
    const lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === "cimode")
      return true;
    const loadNotPending = (l, n) => {
      const loadState = this.services.backendConnector.state[`${l}|${n}`];
      return loadState === -1 || loadState === 0 || loadState === 2;
    };
    if (options.precheck) {
      const preResult = options.precheck(this, loadNotPending);
      if (preResult !== undefined)
        return preResult;
    }
    if (this.hasResourceBundle(lng, ns))
      return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages)
      return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns)))
      return true;
    return false;
  }
  loadNamespaces(ns, callback) {
    const deferred = defer();
    if (!this.options.ns) {
      if (callback)
        callback();
      return Promise.resolve();
    }
    if (isString(ns))
      ns = [ns];
    ns.forEach((n) => {
      if (this.options.ns.indexOf(n) < 0)
        this.options.ns.push(n);
    });
    this.loadResources((err) => {
      deferred.resolve();
      if (callback)
        callback(err);
    });
    return deferred;
  }
  loadLanguages(lngs, callback) {
    const deferred = defer();
    if (isString(lngs))
      lngs = [lngs];
    const preloaded = this.options.preload || [];
    const newLngs = lngs.filter((lng) => preloaded.indexOf(lng) < 0 && this.services.languageUtils.isSupportedCode(lng));
    if (!newLngs.length) {
      if (callback)
        callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources((err) => {
      deferred.resolve();
      if (callback)
        callback(err);
    });
    return deferred;
  }
  dir(lng) {
    if (!lng)
      lng = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language);
    if (!lng)
      return "rtl";
    try {
      const l = new Intl.Locale(lng);
      if (l && l.getTextInfo) {
        const ti = l.getTextInfo();
        if (ti && ti.direction)
          return ti.direction;
      }
    } catch (e) {}
    const rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
    const languageUtils = this.services?.languageUtils || new LanguageUtil(get());
    if (lng.toLowerCase().indexOf("-latn") > 1)
      return "ltr";
    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(options = {}, callback) {
    const instance = new I18n(options, callback);
    instance.createInstance = I18n.createInstance;
    return instance;
  }
  cloneInstance(options = {}, callback = noop) {
    const forkResourceStore = options.forkResourceStore;
    if (forkResourceStore)
      delete options.forkResourceStore;
    const mergedOptions = {
      ...this.options,
      ...options,
      ...{
        isClone: true
      }
    };
    const clone = new I18n(mergedOptions);
    if (options.debug !== undefined || options.prefix !== undefined) {
      clone.logger = clone.logger.clone(options);
    }
    const membersToCopy = ["store", "services", "language"];
    membersToCopy.forEach((m) => {
      clone[m] = this[m];
    });
    clone.services = {
      ...this.services
    };
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      const clonedData = Object.keys(this.store.data).reduce((prev, l) => {
        prev[l] = {
          ...this.store.data[l]
        };
        prev[l] = Object.keys(prev[l]).reduce((acc, n) => {
          acc[n] = {
            ...prev[l][n]
          };
          return acc;
        }, prev[l]);
        return prev;
      }, {});
      clone.store = new ResourceStore(clonedData, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    if (options.interpolation) {
      const defOpts = get();
      const mergedInterpolation = {
        ...defOpts.interpolation,
        ...this.options.interpolation,
        ...options.interpolation
      };
      const mergedForInterpolator = {
        ...mergedOptions,
        interpolation: mergedInterpolation
      };
      clone.services.interpolator = new Interpolator(mergedForInterpolator);
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on("*", (event, ...args) => {
      clone.emit(event, ...args);
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
var instance = I18n.createInstance();
var createInstance = instance.createInstance;
var dir = instance.dir;
var init = instance.init;
var loadResources = instance.loadResources;
var reloadResources = instance.reloadResources;
var use = instance.use;
var changeLanguage = instance.changeLanguage;
var getFixedT = instance.getFixedT;
var t = instance.t;
var exists = instance.exists;
var setDefaultNamespace = instance.setDefaultNamespace;
var hasLoadedNamespace = instance.hasLoadedNamespace;
var loadNamespaces = instance.loadNamespaces;
var loadLanguages = instance.loadLanguages;

// src/components/providers/providers.tsx
var import_react7 = __toESM(require_react(), 1);

// node_modules/react-i18next/dist/es/utils.js
var warn = (i18n, code, msg, rest) => {
  const args = [msg, {
    code,
    ...rest || {}
  }];
  if (i18n?.services?.logger?.forward) {
    return i18n.services.logger.forward(args, "warn", "react-i18next::", true);
  }
  if (isString2(args[0]))
    args[0] = `react-i18next:: ${args[0]}`;
  if (i18n?.services?.logger?.warn) {
    i18n.services.logger.warn(...args);
  } else if (console?.warn) {
    console.warn(...args);
  }
};
var alreadyWarned = {};
var warnOnce = (i18n, code, msg, rest) => {
  if (isString2(msg) && alreadyWarned[msg])
    return;
  if (isString2(msg))
    alreadyWarned[msg] = new Date;
  warn(i18n, code, msg, rest);
};
var loadedClb = (i18n, cb) => () => {
  if (i18n.isInitialized) {
    cb();
  } else {
    const initialized2 = () => {
      setTimeout(() => {
        i18n.off("initialized", initialized2);
      }, 0);
      cb();
    };
    i18n.on("initialized", initialized2);
  }
};
var loadNamespaces2 = (i18n, ns, cb) => {
  i18n.loadNamespaces(ns, loadedClb(i18n, cb));
};
var loadLanguages2 = (i18n, lng, ns, cb) => {
  if (isString2(ns))
    ns = [ns];
  if (i18n.options.preload && i18n.options.preload.indexOf(lng) > -1)
    return loadNamespaces2(i18n, ns, cb);
  ns.forEach((n) => {
    if (i18n.options.ns.indexOf(n) < 0)
      i18n.options.ns.push(n);
  });
  i18n.loadLanguages(lng, loadedClb(i18n, cb));
};
var hasLoadedNamespace2 = (ns, i18n, options = {}) => {
  if (!i18n.languages || !i18n.languages.length) {
    warnOnce(i18n, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
      languages: i18n.languages
    });
    return true;
  }
  return i18n.hasLoadedNamespace(ns, {
    lng: options.lng,
    precheck: (i18nInstance, loadNotPending) => {
      if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns))
        return false;
    }
  });
};
var isString2 = (obj) => typeof obj === "string";
var isObject = (obj) => typeof obj === "object" && obj !== null;

// node_modules/react-i18next/dist/es/unescape.js
var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
var htmlEntities = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
};
var unescapeHtmlEntity = (m) => htmlEntities[m];
var unescape = (text) => text.replace(matchHtmlEntity, unescapeHtmlEntity);

// node_modules/react-i18next/dist/es/defaults.js
var defaultOptions = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: true,
  unescape,
  transDefaultProps: undefined
};
var setDefaults = (options = {}) => {
  defaultOptions = {
    ...defaultOptions,
    ...options
  };
};
var getDefaults = () => defaultOptions;

// node_modules/react-i18next/dist/es/i18nInstance.js
var i18nInstance;
var setI18n = (instance2) => {
  i18nInstance = instance2;
};
var getI18n = () => i18nInstance;

// node_modules/react-i18next/dist/es/context.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/react-i18next/dist/es/initReactI18next.js
var initReactI18next = {
  type: "3rdParty",
  init(instance2) {
    setDefaults(instance2.options.react);
    setI18n(instance2);
  }
};

// node_modules/react-i18next/dist/es/context.js
var I18nContext = import_react4.createContext();

class ReportNamespaces {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(namespaces) {
    namespaces.forEach((ns) => {
      if (!this.usedNamespaces[ns])
        this.usedNamespaces[ns] = true;
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}

// node_modules/react-i18next/dist/es/useTranslation.js
var import_react5 = __toESM(require_react(), 1);
var import_shim = __toESM(require_shim(), 1);
var notReadyT = (k, optsOrDefaultValue) => {
  if (isString2(optsOrDefaultValue))
    return optsOrDefaultValue;
  if (isObject(optsOrDefaultValue) && isString2(optsOrDefaultValue.defaultValue))
    return optsOrDefaultValue.defaultValue;
  return Array.isArray(k) ? k[k.length - 1] : k;
};
var notReadySnapshot = {
  t: notReadyT,
  ready: false
};
var dummySubscribe = () => () => {};
var useTranslation = (ns, props = {}) => {
  const {
    i18n: i18nFromProps
  } = props;
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = import_react5.useContext(I18nContext) || {};
  const i18n = i18nFromProps || i18nFromContext || getI18n();
  if (i18n && !i18n.reportNamespaces)
    i18n.reportNamespaces = new ReportNamespaces;
  if (!i18n) {
    warnOnce(i18n, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
  }
  const i18nOptions = import_react5.useMemo(() => ({
    ...getDefaults(),
    ...i18n?.options?.react,
    ...props
  }), [i18n, props]);
  const {
    useSuspense,
    keyPrefix
  } = i18nOptions;
  const nsOrContext = ns || defaultNSFromContext || i18n?.options?.defaultNS;
  const unstableNamespaces = isString2(nsOrContext) ? [nsOrContext] : nsOrContext || ["translation"];
  const namespaces = import_react5.useMemo(() => unstableNamespaces, unstableNamespaces);
  i18n?.reportNamespaces?.addUsedNamespaces?.(namespaces);
  const revisionRef = import_react5.useRef(0);
  const subscribe = import_react5.useCallback((callback) => {
    if (!i18n)
      return dummySubscribe;
    const {
      bindI18n,
      bindI18nStore
    } = i18nOptions;
    const wrappedCallback = () => {
      revisionRef.current += 1;
      callback();
    };
    if (bindI18n)
      i18n.on(bindI18n, wrappedCallback);
    if (bindI18nStore)
      i18n.store.on(bindI18nStore, wrappedCallback);
    return () => {
      if (bindI18n)
        bindI18n.split(" ").forEach((e) => i18n.off(e, wrappedCallback));
      if (bindI18nStore)
        bindI18nStore.split(" ").forEach((e) => i18n.store.off(e, wrappedCallback));
    };
  }, [i18n, i18nOptions]);
  const snapshotRef = import_react5.useRef();
  const getSnapshot = import_react5.useCallback(() => {
    if (!i18n) {
      return notReadySnapshot;
    }
    const calculatedReady = !!(i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every((n) => hasLoadedNamespace2(n, i18n, i18nOptions));
    const currentLng = props.lng || i18n.language;
    const currentRevision = revisionRef.current;
    const lastSnapshot = snapshotRef.current;
    if (lastSnapshot && lastSnapshot.ready === calculatedReady && lastSnapshot.lng === currentLng && lastSnapshot.keyPrefix === keyPrefix && lastSnapshot.revision === currentRevision) {
      return lastSnapshot;
    }
    const calculatedT = i18n.getFixedT(currentLng, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix);
    const newSnapshot = {
      t: calculatedT,
      ready: calculatedReady,
      lng: currentLng,
      keyPrefix,
      revision: currentRevision
    };
    snapshotRef.current = newSnapshot;
    return newSnapshot;
  }, [i18n, namespaces, keyPrefix, i18nOptions, props.lng]);
  const [loadCount, setLoadCount] = import_react5.useState(0);
  const {
    t: t2,
    ready
  } = import_shim.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  import_react5.useEffect(() => {
    if (i18n && !ready && !useSuspense) {
      const onLoaded = () => setLoadCount((c) => c + 1);
      if (props.lng) {
        loadLanguages2(i18n, props.lng, namespaces, onLoaded);
      } else {
        loadNamespaces2(i18n, namespaces, onLoaded);
      }
    }
  }, [i18n, props.lng, namespaces, ready, useSuspense, loadCount]);
  const finalI18n = i18n || {};
  const wrapperRef = import_react5.useRef(null);
  const wrapperLangRef = import_react5.useRef();
  const createI18nWrapper = (original) => {
    const descriptors = Object.getOwnPropertyDescriptors(original);
    if (descriptors.__original)
      delete descriptors.__original;
    const wrapper = Object.create(Object.getPrototypeOf(original), descriptors);
    if (!Object.prototype.hasOwnProperty.call(wrapper, "__original")) {
      try {
        Object.defineProperty(wrapper, "__original", {
          value: original,
          writable: false,
          enumerable: false,
          configurable: false
        });
      } catch (_) {}
    }
    return wrapper;
  };
  const ret = import_react5.useMemo(() => {
    const original = finalI18n;
    const lang = original?.language;
    let i18nWrapper = original;
    if (original) {
      if (wrapperRef.current && wrapperRef.current.__original === original) {
        if (wrapperLangRef.current !== lang) {
          i18nWrapper = createI18nWrapper(original);
          wrapperRef.current = i18nWrapper;
          wrapperLangRef.current = lang;
        } else {
          i18nWrapper = wrapperRef.current;
        }
      } else {
        i18nWrapper = createI18nWrapper(original);
        wrapperRef.current = i18nWrapper;
        wrapperLangRef.current = lang;
      }
    }
    const arr = [t2, i18nWrapper, ready];
    arr.t = t2;
    arr.i18n = i18nWrapper;
    arr.ready = ready;
    return arr;
  }, [t2, finalI18n, ready, finalI18n.resolvedLanguage, finalI18n.language, finalI18n.languages]);
  if (i18n && useSuspense && !ready) {
    throw new Promise((resolve) => {
      const onLoaded = () => resolve();
      if (props.lng) {
        loadLanguages2(i18n, props.lng, namespaces, onLoaded);
      } else {
        loadNamespaces2(i18n, namespaces, onLoaded);
      }
    });
  }
  return ret;
};
// node_modules/react-i18next/dist/es/I18nextProvider.js
var import_react6 = __toESM(require_react(), 1);
function I18nextProvider({
  i18n,
  defaultNS,
  children
}) {
  const value = import_react6.useMemo(() => ({
    i18n,
    defaultNS
  }), [i18n, defaultNS]);
  return import_react6.createElement(I18nContext.Provider, {
    value
  }, children);
}
// src/components/providers/providers.tsx
var messages = {
  af: () => Promise.resolve().then(() => __toESM(require_af(), 1)),
  am: () => Promise.resolve().then(() => __toESM(require_am(), 1)),
  "ar-EG": () => Promise.resolve().then(() => __toESM(require_ar_EG(), 1)),
  "ar-MA": () => Promise.resolve().then(() => __toESM(require_ar_MA(), 1)),
  "ar-SA": () => Promise.resolve().then(() => __toESM(require_ar_SA(), 1)),
  ar: () => Promise.resolve().then(() => __toESM(require_ar(), 1)),
  az: () => Promise.resolve().then(() => __toESM(require_az(), 1)),
  bg: () => Promise.resolve().then(() => __toESM(require_bg(), 1)),
  bho: () => Promise.resolve().then(() => __toESM(require_bho(), 1)),
  bn: () => Promise.resolve().then(() => __toESM(require_bn(), 1)),
  bs: () => Promise.resolve().then(() => __toESM(require_bs(), 1)),
  ca: () => Promise.resolve().then(() => __toESM(require_ca(), 1)),
  cs: () => Promise.resolve().then(() => __toESM(require_cs(), 1)),
  da: () => Promise.resolve().then(() => __toESM(require_da(), 1)),
  de: () => Promise.resolve().then(() => __toESM(require_de(), 1)),
  el: () => Promise.resolve().then(() => __toESM(require_el(), 1)),
  "en-GB": () => Promise.resolve().then(() => __toESM(require_en_GB(), 1)),
  en: () => Promise.resolve().then(() => __toESM(require_en(), 1)),
  "es-419": () => Promise.resolve().then(() => __toESM(require_es_419(), 1)),
  "es-AR": () => Promise.resolve().then(() => __toESM(require_es_AR(), 1)),
  "es-MX": () => Promise.resolve().then(() => __toESM(require_es_MX(), 1)),
  es: () => Promise.resolve().then(() => __toESM(require_es(), 1)),
  et: () => Promise.resolve().then(() => __toESM(require_et(), 1)),
  eu: () => Promise.resolve().then(() => __toESM(require_eu(), 1)),
  fa: () => Promise.resolve().then(() => __toESM(require_fa(), 1)),
  fi: () => Promise.resolve().then(() => __toESM(require_fi(), 1)),
  fil: () => Promise.resolve().then(() => __toESM(require_fil(), 1)),
  "fr-CA": () => Promise.resolve().then(() => __toESM(require_fr_CA(), 1)),
  fr: () => Promise.resolve().then(() => __toESM(require_fr(), 1)),
  gl: () => Promise.resolve().then(() => __toESM(require_gl(), 1)),
  gu: () => Promise.resolve().then(() => __toESM(require_gu(), 1)),
  he: () => Promise.resolve().then(() => __toESM(require_he(), 1)),
  hi: () => Promise.resolve().then(() => __toESM(require_hi(), 1)),
  hr: () => Promise.resolve().then(() => __toESM(require_hr(), 1)),
  hu: () => Promise.resolve().then(() => __toESM(require_hu(), 1)),
  id: () => Promise.resolve().then(() => __toESM(require_id(), 1)),
  is: () => Promise.resolve().then(() => __toESM(require_is(), 1)),
  it: () => Promise.resolve().then(() => __toESM(require_it(), 1)),
  ja: () => Promise.resolve().then(() => __toESM(require_ja(), 1)),
  kn: () => Promise.resolve().then(() => __toESM(require_kn(), 1)),
  ko: () => Promise.resolve().then(() => __toESM(require_ko(), 1)),
  lt: () => Promise.resolve().then(() => __toESM(require_lt(), 1)),
  lv: () => Promise.resolve().then(() => __toESM(require_lv(), 1)),
  mk: () => Promise.resolve().then(() => __toESM(require_mk(), 1)),
  ml: () => Promise.resolve().then(() => __toESM(require_ml(), 1)),
  mr: () => Promise.resolve().then(() => __toESM(require_mr(), 1)),
  ms: () => Promise.resolve().then(() => __toESM(require_ms(), 1)),
  nb: () => Promise.resolve().then(() => __toESM(require_nb(), 1)),
  ne: () => Promise.resolve().then(() => __toESM(require_ne(), 1)),
  nl: () => Promise.resolve().then(() => __toESM(require_nl(), 1)),
  or: () => Promise.resolve().then(() => __toESM(require_or(), 1)),
  "pa-IN": () => Promise.resolve().then(() => __toESM(require_pa_IN(), 1)),
  "pa-PK": () => Promise.resolve().then(() => __toESM(require_pa_PK(), 1)),
  pl: () => Promise.resolve().then(() => __toESM(require_pl(), 1)),
  "pt-BR": () => Promise.resolve().then(() => __toESM(require_pt_BR(), 1)),
  "pt-PT": () => Promise.resolve().then(() => __toESM(require_pt_PT(), 1)),
  ro: () => Promise.resolve().then(() => __toESM(require_ro(), 1)),
  ru: () => Promise.resolve().then(() => __toESM(require_ru(), 1)),
  sk: () => Promise.resolve().then(() => __toESM(require_sk(), 1)),
  sl: () => Promise.resolve().then(() => __toESM(require_sl(), 1)),
  sr: () => Promise.resolve().then(() => __toESM(require_sr(), 1)),
  sv: () => Promise.resolve().then(() => __toESM(require_sv(), 1)),
  sw: () => Promise.resolve().then(() => __toESM(require_sw(), 1)),
  ta: () => Promise.resolve().then(() => __toESM(require_ta(), 1)),
  te: () => Promise.resolve().then(() => __toESM(require_te(), 1)),
  th: () => Promise.resolve().then(() => __toESM(require_th(), 1)),
  tr: () => Promise.resolve().then(() => __toESM(require_tr(), 1)),
  uk: () => Promise.resolve().then(() => __toESM(require_uk(), 1)),
  ur: () => Promise.resolve().then(() => __toESM(require_ur(), 1)),
  vi: () => Promise.resolve().then(() => __toESM(require_vi(), 1)),
  "zh-CN": () => Promise.resolve().then(() => __toESM(require_zh_CN(), 1)),
  "zh-HK": () => Promise.resolve().then(() => __toESM(require_zh_HK(), 1)),
  "zh-TW": () => Promise.resolve().then(() => __toESM(require_zh_TW(), 1)),
  zu: () => Promise.resolve().then(() => __toESM(require_zu(), 1))
};
var Providers = (props) => {
  const [locale, setLocale] = import_react7.useState(Spicetify.Locale.getLocale());
  const [i18nReady, setI18nReady] = import_react7.useState(false);
  import_react7.useEffect(() => {
    const currentLocale = Spicetify.Locale.getLocale();
    setLocale(currentLocale);
    const loadMessages = async () => {
      const resources = {};
      for (const [lang, loader] of Object.entries(messages)) {
        const module = await loader();
        resources[lang] = { translation: module.default };
      }
      await instance.use(initReactI18next).init({
        resources,
        lng: currentLocale,
        fallbackLng: "en",
        interpolation: { escapeValue: false }
      });
      setI18nReady(true);
    };
    loadMessages();
  }, [Spicetify.Platform.Session.locale, Spicetify.Locale._locale]);
  if (!i18nReady)
    return null;
  return /* @__PURE__ */ import_react7.default.createElement(I18nextProvider, {
    i18n: instance
  }, props.children);
};

// src/lib/track-utils.ts
var ENHANCED_RECOMMENDATION_REGEX = /enhanced_recommendation/;
function findTrackUriInProps(obj, depth = 0, maxDepth = 10) {
  if (depth > maxDepth || !obj || typeof obj !== "object")
    return null;
  if (typeof obj.uri === "string" && obj.uri.startsWith("spotify:track:")) {
    return obj.uri;
  }
  if (obj.props?.uri && typeof obj.props.uri === "string" && obj.props.uri.startsWith("spotify:track:")) {
    return obj.props.uri;
  }
  if (Array.isArray(obj.children)) {
    for (const child of obj.children) {
      const found = findTrackUriInProps(child, depth + 1, maxDepth);
      if (found)
        return found;
    }
  }
  if (obj.children && typeof obj.children === "object" && !Array.isArray(obj.children)) {
    const found = findTrackUriInProps(obj.children, depth + 1, maxDepth);
    if (found)
      return found;
  }
  if (obj.props?.children) {
    const found = findTrackUriInProps(obj.props.children, depth + 1, maxDepth);
    if (found)
      return found;
  }
  return null;
}
function getQueueTracks() {
  return (Spicetify?.Queue?.nextTracks || []).filter((track) => track.contextTrack.uri.includes("track"));
}
function extractTrackData(element) {
  let trackURI = null;
  let isEnhancedRecommendation = false;
  const elementWithFiber = element;
  const reactKey = Object.keys(elementWithFiber).find((k) => k.toLowerCase().includes("reactFiber".toLowerCase()));
  if (reactKey) {
    let fiber = elementWithFiber[reactKey];
    while (fiber) {
      try {
        const props = fiber.memoizedProps ?? fiber.pendingProps ?? fiber.props ?? {};
        if (props.item && typeof props.item === "object") {
          const item = props.item;
          if (item.uri && typeof item.uri === "string" && item.uri.startsWith("spotify:track:")) {
            trackURI = item.uri;
          }
          if (item.metadata && typeof item.metadata === "object") {
            const metadataString = JSON.stringify(item.metadata);
            if (ENHANCED_RECOMMENDATION_REGEX.test(metadataString)) {
              isEnhancedRecommendation = true;
            }
          }
          if (trackURI) {
            break;
          }
        }
        if (!trackURI) {
          const foundUri = findTrackUriInProps(props);
          if (foundUri) {
            trackURI = foundUri;
            break;
          }
        }
        fiber = fiber.return;
      } catch {
        break;
      }
    }
  }
  const artistURIs = Array.from(element.querySelectorAll(SELECTORS.ARTIST_LINK)).map((a) => a.href.match(/\/artist\/([a-zA-Z0-9]+)/)?.[1]).filter((id) => Boolean(id)).map((id) => `spotify:artist:${id}`);
  return { trackURI, artistURIs, isEnhancedRecommendation };
}
function isTrackEffectivelyTrashed(track) {
  const state = useTrashbinStore.getState();
  if (!track || !track.uri)
    return true;
  if (state.trashSongList[track.uri])
    return true;
  const artistUris = new Set;
  const playerTrack = track;
  for (const artist of playerTrack?.artists || []) {
    if (artist && artist.uri)
      artistUris.add(artist.uri);
  }
  if (track.metadata?.artist_uri)
    artistUris.add(track.metadata.artist_uri);
  let metaIndex = 1;
  while (track.metadata?.[`artist_uri:${metaIndex}`]) {
    artistUris.add(track.metadata[`artist_uri:${metaIndex}`]);
    metaIndex++;
  }
  for (const artistUri of artistUris) {
    if (state.trashArtistList[artistUri])
      return true;
  }
  return false;
}
async function skipToNextAllowedTrack() {
  const currentPlayerState = Spicetify.Player.data;
  if (!currentPlayerState?.context?.uri) {
    Spicetify.Player.next();
    return;
  }
  const currentContextUri = currentPlayerState.context.uri;
  for (const nextTrack of getQueueTracks()) {
    if (!isTrackEffectivelyTrashed(nextTrack.contextTrack)) {
      try {
        return await Spicetify.Player.playUri(currentContextUri, { featureIdentifier: "playlist" }, { skipTo: { uri: nextTrack.contextTrack.uri } });
      } catch (err) {}
    }
  }
  Spicetify.Player.next();
}
function shouldSkipTrack(uri, type) {
  const currentTrack = Spicetify.Player.data?.item;
  if (!currentTrack)
    return false;
  if (type === Spicetify.URI.Type.TRACK) {
    return uri === currentTrack.uri;
  }
  if (type === Spicetify.URI.Type.ARTIST) {
    let count = 0;
    let artUri = currentTrack.metadata?.artist_uri;
    while (artUri) {
      if (uri === artUri)
        return true;
      count++;
      artUri = currentTrack.metadata?.[`artist_uri:${count}`];
    }
  }
  return false;
}
async function manageSmartShuffleQueue() {
  if (!document.querySelector(SELECTORS.SMART_SHUFFLE_BUTTON))
    return;
  const queueTracks = getQueueTracks();
  if (queueTracks.length === 0)
    return;
  const enhancedRecommendations = queueTracks.filter((track) => track?.contextTrack.metadata?.provider === "enhanced_recommendation");
  if (queueTracks.length > 4 && queueTracks.length > enhancedRecommendations.length) {
    const tracksToRemove = queueTracks.filter((track) => track.contextTrack.uri && !(track.contextTrack.metadata?.provider === "enhanced_recommendation") && useTrashbinStore.getState().getTrashStatus(track.contextTrack.uri).isTrashed).map((track) => ({
      uri: track.contextTrack.uri,
      uid: track.contextTrack.uid
    }));
    if (tracksToRemove.length === 0)
      return;
    await Spicetify.removeFromQueue(tracksToRemove);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

// src/store/trashbin-store.ts
var STORAGE_KEYS = {
  ENABLED: "trashbin-enabled",
  WIDGET: "TrashbinWidgetIcon",
  SONGS: "TrashSongList",
  ARTISTS: "TrashArtistList",
  AUTOPLAY_ON_START: "trashbin-autoplay-on-start",
  QUEUE_TRASHBIN: "trashbin-queue-enabled",
  TRACKLIST_TRASHBIN: "trashbin-tracklist-enabled",
  SKIP_TRASHED_TRACKS: "trashbin-skip-trashed-tracks",
  AUTO_CLEAN_QUEUE: "trashbin-auto-clean-queue",
  PLAYLIST_MONITOR: "trashbin-playlist-monitor",
  REMOTE_TOGGLE_ENABLED: "trashbin-remote-toggle-enabled",
  REMOTE_SKIPPING_ENABLED: "trashbin-remote-skipping-enabled",
  TRASH_VIA_LIKE: "trashbin-trash-via-like",
  AI_DETECTION: "trashbin-ai-detection",
  TRASH_AI_SONGS: "trashbin-trash-ai-songs"
};
function initValue(item, defaultValue) {
  try {
    const value = Spicetify.LocalStorage.get(item);
    return value ? JSON.parse(value) ?? defaultValue : defaultValue;
  } catch {
    return defaultValue;
  }
}
var useTrashbinStore = create((set, get2) => ({
  trashbinEnabled: true,
  widgetEnabled: true,
  autoplayOnStart: false,
  queueTrashbinEnabled: true,
  tracklistTrashbinEnabled: true,
  skipTrashedTracks: true,
  autoCleanQueue: false,
  playlistMonitorEnabled: true,
  trashSongList: {},
  trashArtistList: {},
  userHitBack: false,
  remoteToggleEnabled: false,
  remoteSkippingEnabled: false,
  trashViaLikeEnabled: false,
  aiDetectionEnabled: false,
  aiAssetsReady: false,
  aiAssetsDownloading: false,
  trashAiSongs: false,
  initializeFromStorage: () => {
    set({
      trashbinEnabled: initValue(STORAGE_KEYS.ENABLED, true),
      widgetEnabled: initValue(STORAGE_KEYS.WIDGET, true),
      trashSongList: initValue(STORAGE_KEYS.SONGS, {}),
      trashArtistList: initValue(STORAGE_KEYS.ARTISTS, {}),
      autoplayOnStart: initValue(STORAGE_KEYS.AUTOPLAY_ON_START, false),
      queueTrashbinEnabled: initValue(STORAGE_KEYS.QUEUE_TRASHBIN, true),
      tracklistTrashbinEnabled: initValue(STORAGE_KEYS.TRACKLIST_TRASHBIN, true),
      skipTrashedTracks: initValue(STORAGE_KEYS.SKIP_TRASHED_TRACKS, true),
      autoCleanQueue: initValue(STORAGE_KEYS.AUTO_CLEAN_QUEUE, false),
      playlistMonitorEnabled: initValue(STORAGE_KEYS.PLAYLIST_MONITOR, true),
      remoteToggleEnabled: initValue(STORAGE_KEYS.REMOTE_TOGGLE_ENABLED, false),
      remoteSkippingEnabled: initValue(STORAGE_KEYS.REMOTE_SKIPPING_ENABLED, false),
      trashViaLikeEnabled: initValue(STORAGE_KEYS.TRASH_VIA_LIKE, false),
      aiDetectionEnabled: initValue(STORAGE_KEYS.AI_DETECTION, false),
      trashAiSongs: initValue(STORAGE_KEYS.TRASH_AI_SONGS, false)
    });
  },
  setTrashbinEnabled: (enabled) => {
    set({ trashbinEnabled: enabled });
    Spicetify.LocalStorage.set(STORAGE_KEYS.ENABLED, JSON.stringify(enabled));
  },
  setWidgetEnabled: (enabled) => {
    set({ widgetEnabled: enabled });
    Spicetify.LocalStorage.set(STORAGE_KEYS.WIDGET, JSON.stringify(enabled));
  },
  setAutoplayOnStart: (enabled) => {
    set({ autoplayOnStart: enabled });
    Spicetify.LocalStorage.set(STORAGE_KEYS.AUTOPLAY_ON_START, JSON.stringify(enabled));
  },
  setQueueTrashbinEnabled: (enabled) => {
    set({ queueTrashbinEnabled: enabled });
    Spicetify.LocalStorage.set(STORAGE_KEYS.QUEUE_TRASHBIN, JSON.stringify(enabled));
  },
  setTracklistTrashbinEnabled: (enabled) => {
    set({ tracklistTrashbinEnabled: enabled });
    Spicetify.LocalStorage.set(STORAGE_KEYS.TRACKLIST_TRASHBIN, JSON.stringify(enabled));
  },
  setSkipTrashedTracks: (enabled) => {
    set({ skipTrashedTracks: enabled });
    Spicetify.LocalStorage.set(STORAGE_KEYS.SKIP_TRASHED_TRACKS, JSON.stringify(enabled));
  },
  setAutoCleanQueue: (enabled) => {
    set({ autoCleanQueue: enabled });
    Spicetify.LocalStorage.set(STORAGE_KEYS.AUTO_CLEAN_QUEUE, JSON.stringify(enabled));
  },
  setPlaylistMonitorEnabled: (enabled) => {
    set({ playlistMonitorEnabled: enabled });
    Spicetify.LocalStorage.set(STORAGE_KEYS.PLAYLIST_MONITOR, JSON.stringify(enabled));
  },
  setUserHitBack: (hitBack) => set({ userHitBack: hitBack }),
  setRemoteToggleEnabled: (enabled) => {
    set({ remoteToggleEnabled: enabled });
    Spicetify.LocalStorage.set(STORAGE_KEYS.REMOTE_TOGGLE_ENABLED, JSON.stringify(enabled));
  },
  setRemoteSkippingEnabled: (enabled) => {
    set({ remoteSkippingEnabled: enabled });
    Spicetify.LocalStorage.set(STORAGE_KEYS.REMOTE_SKIPPING_ENABLED, JSON.stringify(enabled));
  },
  toggleRemoteSkipping: () => {
    const state = get2();
    const newValue = !state.remoteSkippingEnabled;
    set({ remoteSkippingEnabled: newValue });
    Spicetify.LocalStorage.set(STORAGE_KEYS.REMOTE_SKIPPING_ENABLED, JSON.stringify(newValue));
  },
  setTrashViaLikeEnabled: (enabled) => {
    set({ trashViaLikeEnabled: enabled });
    Spicetify.LocalStorage.set(STORAGE_KEYS.TRASH_VIA_LIKE, JSON.stringify(enabled));
  },
  setAiDetectionEnabled: (enabled) => {
    set({ aiDetectionEnabled: enabled });
    Spicetify.LocalStorage.set(STORAGE_KEYS.AI_DETECTION, JSON.stringify(enabled));
  },
  setAiAssetsReady: (ready) => set({ aiAssetsReady: ready }),
  setAiAssetsDownloading: (downloading) => set({ aiAssetsDownloading: downloading }),
  setTrashAiSongs: (enabled) => {
    set({ trashAiSongs: enabled });
    Spicetify.LocalStorage.set(STORAGE_KEYS.TRASH_AI_SONGS, JSON.stringify(enabled));
  },
  toggleSongTrash: (uri, showNotification = true) => {
    const state = get2();
    const isTrashed = !!state.trashSongList[uri];
    const newList = { ...state.trashSongList };
    if (isTrashed) {
      delete newList[uri];
      if (showNotification) {
        Spicetify.showNotification(instance.t("MESSAGE_SONG_REMOVED"));
      }
    } else {
      newList[uri] = true;
      if (showNotification) {
        Spicetify.showNotification(instance.t("MESSAGE_SONG_ADDED"));
      }
      const currentSpotifyTrack = Spicetify.Player.data?.item;
      if (state.trashbinEnabled && currentSpotifyTrack && shouldSkipTrack(uri, Spicetify.URI.Type.TRACK)) {
        Spicetify.Player.next();
      }
    }
    set({ trashSongList: newList });
    Spicetify.LocalStorage.set(STORAGE_KEYS.SONGS, JSON.stringify(newList));
  },
  toggleArtistTrash: (uri, showNotification = true) => {
    const state = get2();
    const isTrashed = !!state.trashArtistList[uri];
    const newList = { ...state.trashArtistList };
    if (isTrashed) {
      delete newList[uri];
      if (showNotification) {
        Spicetify.showNotification(instance.t("MESSAGE_ARTIST_REMOVED"));
      }
    } else {
      newList[uri] = true;
      if (showNotification) {
        Spicetify.showNotification(instance.t("MESSAGE_ARTIST_ADDED"));
      }
      const currentSpotifyTrack = Spicetify.Player.data?.item;
      if (state.trashbinEnabled && currentSpotifyTrack && shouldSkipTrack(uri, Spicetify.URI.Type.ARTIST)) {
        Spicetify.Player.next();
      }
    }
    set({ trashArtistList: newList });
    Spicetify.LocalStorage.set(STORAGE_KEYS.ARTISTS, JSON.stringify(newList));
  },
  getTrashStatus: (uri) => {
    const state = get2();
    const uriObj = Spicetify.URI.fromString(uri);
    const isTrashed = uriObj.type === Spicetify.URI.Type.TRACK ? !!state.trashSongList[uri] : !!state.trashArtistList[uri];
    return { isTrashed, type: uriObj.type };
  },
  importTrashData: (songs, artists) => {
    set({ trashSongList: songs, trashArtistList: artists });
    Spicetify.LocalStorage.set(STORAGE_KEYS.SONGS, JSON.stringify(songs));
    Spicetify.LocalStorage.set(STORAGE_KEYS.ARTISTS, JSON.stringify(artists));
  },
  clearTrashbin: () => {
    const emptyList = {};
    set({ trashSongList: emptyList, trashArtistList: emptyList });
    Spicetify.LocalStorage.set(STORAGE_KEYS.SONGS, JSON.stringify(emptyList));
    Spicetify.LocalStorage.set(STORAGE_KEYS.ARTISTS, JSON.stringify(emptyList));
  },
  exportData: () => {
    const state = get2();
    return { songs: state.trashSongList, artists: state.trashArtistList };
  }
}));

// src/store/ai-store.ts
var LS_KEY_PREFIX = "trashbin-ai-results:";
var POLL_INTERVAL = 2000;
var AI_TRASH_THRESHOLD = 0.8;
var MAX_RETRIES = 2;
var queue = new Set;
var retries = new Map;
var processing = false;
var intervalId = null;
function autoTrashIfNeeded(uri, probability) {
  const state = useTrashbinStore.getState();
  if (state.trashAiSongs && probability >= AI_TRASH_THRESHOLD && !state.trashSongList[uri]) {
    state.toggleSongTrash(uri, false);
  }
}
function setResult(uri, probability) {
  const state = useAiStore.getState();
  const results = { ...state.results, [uri]: probability };
  useAiStore.setState({ results });
  if (state.lsKey && probability >= 0) {
    Spicetify.LocalStorage.set(state.lsKey, JSON.stringify(Object.fromEntries(Object.entries(results).filter(([, v]) => v >= 0))));
  }
}
var processedCount = 0;
async function processNext() {
  if (processing || queue.size === 0)
    return;
  const uri = queue.values().next().value;
  queue.delete(uri);
  if (useAiStore.getState().results[uri] !== undefined)
    return;
  processing = true;
  processedCount++;
  const pos = processedCount;
  const remaining = queue.size;
  try {
    const probability = await classifyTrack(uri, pos, remaining);
    if (probability !== null) {
      setResult(uri, probability);
      autoTrashIfNeeded(uri, probability);
      retries.delete(uri);
    } else {
      const count = (retries.get(uri) ?? 0) + 1;
      if (count < MAX_RETRIES) {
        retries.set(uri, count);
        queue.add(uri);
      } else {
        setResult(uri, -1);
        retries.delete(uri);
      }
    }
  } catch (error) {
    const count = (retries.get(uri) ?? 0) + 1;
    if (count < MAX_RETRIES) {
      retries.set(uri, count);
      queue.add(uri);
    } else {
      setResult(uri, -1);
      retries.delete(uri);
    }
  } finally {
    processing = false;
  }
}
function startQueue() {
  if (intervalId)
    return;
  intervalId = setInterval(processNext, POLL_INTERVAL);
}
function stopQueue() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  queue.clear();
  retries.clear();
  processing = false;
}
var useAiStore = create(() => ({
  results: {},
  lsKey: null,
  enqueue: (trackUri) => {
    if (useAiStore.getState().results[trackUri] !== undefined)
      return;
    queue.add(trackUri);
  },
  clearStorage: () => {
    const state = useAiStore.getState();
    if (state.lsKey) {
      Spicetify.LocalStorage.remove(state.lsKey);
    }
    queue.clear();
    useAiStore.setState({ results: {} });
    document.querySelectorAll(`.${AI_INDICATOR_CLASS}`).forEach((el) => el.remove());
  },
  initialize: async (modelId, onProgress) => {
    try {
      initBlocklist();
      const lsKey = `${LS_KEY_PREFIX}${modelId}`;
      let results = {};
      try {
        const raw = Spicetify.LocalStorage.get(lsKey);
        results = raw ? JSON.parse(raw) : {};
      } catch {
        results = {};
      }
      useAiStore.setState({ lsKey, results });
      const initialized2 = await initClassifier(modelId, onProgress);
      if (initialized2) {
        onProgress?.("Ready");
        startQueue();
      }
      return initialized2;
    } catch (error) {
      console.error("[trashbin+] ai-store initialize failed:", error);
      return false;
    }
  },
  cleanup: () => {
    stopQueue();
    disposeClassifier();
    disposeBlocklist();
    useAiStore.setState({ results: {}, lsKey: null });
  }
}));

// src/components/features/ai-probability-indicator.tsx
var import_react8 = __toESM(require_react(), 1);

// node_modules/react-icons/bs/index.mjs
function BsFillPauseFill(props) {
  return GenIcon({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5" }, child: [] }] })(props);
}
function BsFillPlayFill(props) {
  return GenIcon({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" }, child: [] }] })(props);
}
function BsCpuFill(props) {
  return GenIcon({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" }, child: [] }, { tag: "path", attr: { d: "M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5" }, child: [] }] })(props);
}
function BsMusicNote(props) {
  return GenIcon({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2" }, child: [] }, { tag: "path", attr: { fillRule: "evenodd", d: "M9 3v10H8V3z" }, child: [] }, { tag: "path", attr: { d: "M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z" }, child: [] }] })(props);
}
function BsPersonCheck(props) {
  return GenIcon({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }, child: [] }, { tag: "path", attr: { d: "M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" }, child: [] }] })(props);
}
function BsPersonFill(props) {
  return GenIcon({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" }, child: [] }] })(props);
}
function BsPerson(props) {
  return GenIcon({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" }, child: [] }] })(props);
}
function BsQuestionCircle(props) {
  return GenIcon({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" }, child: [] }, { tag: "path", attr: { d: "M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" }, child: [] }] })(props);
}
function BsRobot(props) {
  return GenIcon({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" }, child: [] }, { tag: "path", attr: { d: "M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" }, child: [] }] })(props);
}
function BsTrash3(props) {
  return GenIcon({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" }, child: [] }] })(props);
}

// src/components/features/ai-probability-indicator.tsx
var TIERS = [
  {
    max: 0.2,
    Icon: BsPersonCheck,
    color: "#22c55e",
    labelKey: "AI_TIER_LIKELY_HUMAN"
  },
  {
    max: 0.4,
    Icon: BsPersonFill,
    color: "#4ade80",
    labelKey: "AI_TIER_PROBABLY_HUMAN"
  },
  {
    max: 0.6,
    Icon: BsQuestionCircle,
    color: "#eab308",
    labelKey: "AI_TIER_UNCERTAIN"
  },
  {
    max: 0.8,
    Icon: BsCpuFill,
    color: "#f97316",
    labelKey: "AI_TIER_PROBABLY_AI"
  },
  {
    max: 1,
    Icon: BsRobot,
    color: "#ef4444",
    labelKey: "AI_TIER_LIKELY_AI"
  }
];
var AiIndicator = (props) => {
  const { t: t2 } = useTranslation();
  const tier = TIERS.find((t3) => props.probability <= t3.max) ?? TIERS[TIERS.length - 1];
  const pct = Math.round(props.probability * 100);
  const label = t2(tier.labelKey);
  return /* @__PURE__ */ import_react8.default.createElement("span", {
    title: `${pct}% AI — ${label}`,
    className: "inline-flex cursor-default leading-none",
    style: { color: tier.color }
  }, /* @__PURE__ */ import_react8.default.createElement(tier.Icon, {
    size: props.size ?? 14
  }));
};

// src/components/features/ai-detection-widget.tsx
var widgetIcon = (prob) => Spicetify.ReactDOMServer.renderToString(/* @__PURE__ */ import_react9.default.createElement("span", {
  className: "ml-1.25"
}, /* @__PURE__ */ import_react9.default.createElement(AiIndicator, {
  probability: prob,
  size: 20
})));
var widgetSpinner = () => Spicetify.ReactDOMServer.renderToString(/* @__PURE__ */ import_react9.default.createElement("span", {
  className: "ml-1.25 inline-flex animate-spin",
  style: { color: "rgba(255,255,255,0.6)" }
}, /* @__PURE__ */ import_react9.default.createElement(CgSpinner, {
  size: 20
})));
var AiDetectionWidget = () => {
  const store = useTrashbinStore();
  const widgetRef = import_react9.useRef(null);
  const enabled = store.aiDetectionEnabled && store.aiAssetsReady;
  import_react9.useEffect(() => {
    if (!enabled)
      return;
    const widget = new Spicetify.Playbar.Widget(instance.t("AI_WIDGET_LABEL"), widgetIcon(0.5), () => {}, false, false, true);
    widgetRef.current = widget;
    const updateWidget = () => {
      const track = Spicetify.Player.data?.item;
      if (!track?.uri || !track.uri.startsWith("spotify:track:")) {
        widget.icon = widgetIcon(0.5);
        widget.label = instance.t("AI_WIDGET_LABEL");
        return;
      }
      const prob = useAiStore.getState().results[track.uri];
      if (prob !== undefined) {
        if (prob >= 0) {
          widget.icon = widgetIcon(prob);
          widget.label = instance.t("AI_WIDGET_PERCENT", { pct: Math.round(prob * 100) });
        } else {
          widget.icon = widgetIcon(0.5);
          widget.label = instance.t("AI_WIDGET_LABEL");
        }
      } else {
        widget.icon = widgetSpinner();
        widget.label = instance.t("AI_WIDGET_ANALYZING");
        useAiStore.getState().enqueue(track.uri);
      }
    };
    const unsub = useAiStore.subscribe(updateWidget);
    updateWidget();
    Spicetify.Player.addEventListener("songchange", updateWidget);
    return () => {
      unsub();
      Spicetify.Player.removeEventListener("songchange", updateWidget);
      widget.deregister();
      widgetRef.current = null;
    };
  }, [enabled]);
  return null;
};

// src/hooks/use-auto-add-recommendations.tsx
var import_react11 = __toESM(require_react(), 1);

// src/components/icons.tsx
var import_react10 = __toESM(require_react(), 1);
var TRASH_ICON = (size, className) => Spicetify.ReactDOMServer.renderToString(/* @__PURE__ */ import_react10.default.createElement(BsTrash3, {
  size,
  className
}));
var PLAY_ICON = (size = 26) => Spicetify.ReactDOMServer.renderToString(/* @__PURE__ */ import_react10.default.createElement(BsFillPlayFill, {
  size
}));
var PAUSE_ICON = (size = 26) => Spicetify.ReactDOMServer.renderToString(/* @__PURE__ */ import_react10.default.createElement(BsFillPauseFill, {
  size
}));

// src/hooks/use-auto-add-recommendations.tsx
var DELAY_BETWEEN_ADDS = 800;
var DELAY_AFTER_REFRESH = 3000;
var DELAY_BETWEEN_CYCLES = 1500;
var INJECT_CHECK_INTERVAL = 2000;
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function findRefreshButton() {
  const grid = document.querySelector(AUTO_ADD_CONFIG.gridSelector);
  if (!grid)
    return null;
  let container = grid.parentElement;
  while (container && container.tagName !== "MAIN") {
    const buttons = container.querySelectorAll("button");
    for (const btn of buttons) {
      if (btn.textContent?.trim() === "Refresh") {
        return btn;
      }
    }
    container = container.parentElement;
  }
  return null;
}
var useAutoAddRecommendations = () => {
  const store = useTrashbinStore();
  const { t: t2 } = useTranslation();
  const isRunningRef = import_react11.useRef(false);
  const abortRef = import_react11.useRef(false);
  const buttonRef = import_react11.useRef(null);
  const updateButtonIcon = () => {
    if (buttonRef.current) {
      buttonRef.current.innerHTML = isRunningRef.current ? PAUSE_ICON() : PLAY_ICON();
    }
  };
  const runLoop = async () => {
    while (isRunningRef.current && !abortRef.current) {
      const grid = document.querySelector(AUTO_ADD_CONFIG.gridSelector);
      if (!grid) {
        isRunningRef.current = false;
        updateButtonIcon();
        return;
      }
      const rows = grid.querySelectorAll(AUTO_ADD_CONFIG.rowSelector);
      if (rows.length === 0) {
        await wait(DELAY_BETWEEN_CYCLES);
        continue;
      }
      const nonTrashedRows = [];
      let allHaveTrashButtons = true;
      for (const row of rows) {
        const trashBtn = row.querySelector(AUTO_ADD_CONFIG.trashButtonSelector);
        if (!trashBtn) {
          allHaveTrashButtons = false;
          continue;
        }
        const isTrashed = trashBtn.dataset.visuallyTrashed === "true";
        if (!isTrashed) {
          nonTrashedRows.push(row);
        }
      }
      if (!allHaveTrashButtons && nonTrashedRows.length === 0) {
        await wait(DELAY_BETWEEN_CYCLES);
        continue;
      }
      if (nonTrashedRows.length > 0) {
        for (const row of nonTrashedRows) {
          if (!isRunningRef.current || abortRef.current)
            return;
          const addBtn = row.querySelector(AUTO_ADD_CONFIG.addButtonSelector);
          if (addBtn) {
            addBtn.click();
            await wait(DELAY_BETWEEN_ADDS);
          }
        }
        await wait(DELAY_BETWEEN_CYCLES);
      } else {
        const refreshBtn = findRefreshButton();
        if (refreshBtn) {
          refreshBtn.click();
          await wait(DELAY_AFTER_REFRESH);
        } else {
          isRunningRef.current = false;
          updateButtonIcon();
          return;
        }
      }
    }
  };
  const startLoop = () => {
    isRunningRef.current = true;
    abortRef.current = false;
    updateButtonIcon();
    runLoop();
  };
  const stopLoop = () => {
    isRunningRef.current = false;
    updateButtonIcon();
  };
  const cleanupButton = () => {
    const wrapper = document.querySelector(`.${AUTO_ADD_CONFIG.autoAddButtonClassName}-wrapper`);
    if (wrapper) {
      const refreshBtn = wrapper.querySelector(`button:not(.${AUTO_ADD_CONFIG.autoAddButtonClassName})`);
      if (refreshBtn) {
        wrapper.parentElement?.insertBefore(refreshBtn, wrapper);
      }
      wrapper.remove();
    }
    buttonRef.current = null;
  };
  const injectAutoAddButton = () => {
    if (!store.trashbinEnabled) {
      cleanupButton();
      return;
    }
    if (buttonRef.current?.isConnected)
      return;
    const refreshBtn = findRefreshButton();
    if (!refreshBtn)
      return;
    const btn = document.createElement("button");
    btn.className = `${refreshBtn.className} ${AUTO_ADD_CONFIG.autoAddButtonClassName}`;
    btn.title = t2("TOOLTIP_AUTO_ADD");
    btn.innerHTML = isRunningRef.current ? PAUSE_ICON() : PLAY_ICON();
    btn.setAttribute("data-encore-id", refreshBtn.getAttribute("data-encore-id") || "buttonTertiary");
    btn.onclick = (e) => {
      e.stopPropagation();
      if (isRunningRef.current) {
        stopLoop();
      } else {
        startLoop();
      }
    };
    buttonRef.current = btn;
    const wrapper = document.createElement("div");
    wrapper.className = `${AUTO_ADD_CONFIG.autoAddButtonClassName}-wrapper flex items-center justify-between w-full`;
    refreshBtn.parentElement?.insertBefore(wrapper, refreshBtn);
    wrapper.appendChild(btn);
    wrapper.appendChild(refreshBtn);
  };
  import_react11.useEffect(() => {
    if (!store.trashbinEnabled) {
      abortRef.current = true;
      isRunningRef.current = false;
      cleanupButton();
      return;
    }
    injectAutoAddButton();
    const interval = setInterval(injectAutoAddButton, INJECT_CHECK_INTERVAL);
    return () => {
      clearInterval(interval);
    };
  }, [store.trashbinEnabled]);
  import_react11.useEffect(() => {
    return () => {
      abortRef.current = true;
      isRunningRef.current = false;
      cleanupButton();
    };
  }, []);
};

// src/components/features/injections/auto-add-recommendations.tsx
var AutoAddRecommendations = () => {
  useAutoAddRecommendations();
  return null;
};

// src/hooks/use-trash-button-injection.tsx
var import_react13 = __toESM(require_react(), 1);

// src/hooks/use-mutation-observer.ts
var import_react12 = __toESM(require_react(), 1);
var useMutationObserver = (callback, shouldTrigger, options = {}) => {
  const { enabled = true } = options;
  import_react12.useEffect(() => {
    if (!enabled)
      return;
    const observer = new MutationObserver((mutations) => {
      if (shouldTrigger(mutations)) {
        callback();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    return () => observer.disconnect();
  }, [enabled, callback, shouldTrigger]);
};

// src/hooks/use-trash-button-injection.tsx
var WRAPPER_CLASS = "trashbin-injected-group";
var useTrashButtonInjection = (config, enabled = true) => {
  const store = useTrashbinStore();
  const aiEnabled = store.aiDetectionEnabled && store.aiAssetsReady;
  const removeInjected = () => {
    const container = document.querySelector(config.containerSelector);
    if (!container)
      return;
    container.querySelectorAll(`.${WRAPPER_CLASS}`).forEach((el) => el.remove());
  };
  const inject = () => {
    removeInjected();
    if (!enabled || !store.trashbinEnabled)
      return;
    const container = document.querySelector(config.containerSelector);
    if (!container)
      return;
    container.querySelectorAll(config.moreButtonSelector).forEach((moreBtn) => {
      const row = moreBtn.closest(config.rowSelector);
      if (!row)
        return;
      const trackData = extractTrackData(moreBtn.parentElement || row);
      if (!trackData.trackURI || row.querySelector(config.buttonSelector))
        return;
      const wrapper = document.createElement("div");
      wrapper.className = WRAPPER_CLASS;
      wrapper.style.display = "inline-flex";
      wrapper.style.alignItems = "center";
      wrapper.style.gap = "0";
      wrapper.style.margin = "0";
      if (aiEnabled) {
        const aiState = useAiStore.getState();
        const stored = aiState.results[trackData.trackURI];
        if (stored !== undefined) {
          if (stored >= 0)
            wrapper.appendChild(createIndicatorElement(stored));
        } else {
          wrapper.appendChild(createSpinnerElement());
          aiState.enqueue(trackData.trackURI);
        }
      }
      const isTrashed = !!store.trashSongList[trackData.trackURI];
      const btn = document.createElement("button");
      btn.className = `${config.buttonClassName} bg-transparent border-none p-2 opacity-70 cursor-pointer hover:opacity-100 transition-opacity m-0!`;
      btn.innerHTML = TRASH_ICON(16, isTrashed ? "fill-[#22c55e]" : "");
      btn.dataset.visuallyTrashed = isTrashed.toString();
      btn.onclick = (e) => {
        e.stopPropagation();
        const newState = btn.dataset.visuallyTrashed !== "true";
        btn.innerHTML = TRASH_ICON(16, newState ? "fill-[#22c55e]" : "");
        btn.dataset.visuallyTrashed = newState.toString();
        store.toggleSongTrash(trackData.trackURI);
      };
      wrapper.appendChild(btn);
      moreBtn.parentElement?.insertBefore(wrapper, moreBtn);
    });
  };
  import_react13.useEffect(() => {
    if (!aiEnabled)
      return;
    let prev = useAiStore.getState().results;
    return useAiStore.subscribe((state) => {
      const next = state.results;
      if (next === prev)
        return;
      const container = document.querySelector(config.containerSelector);
      if (container) {
        for (const uri in next) {
          if (prev[uri] !== undefined)
            continue;
          container.querySelectorAll(config.buttonSelector).forEach((trashBtn) => {
            const wrapper = trashBtn.closest(`.${WRAPPER_CLASS}`);
            if (!wrapper || wrapper.querySelector(`.${AI_INDICATOR_CLASS}`))
              return;
            const row = wrapper.closest(config.rowSelector);
            if (!row)
              return;
            if (extractTrackData(row).trackURI === uri) {
              const spinner = wrapper.querySelector(`.${AI_SPINNER_CLASS}`);
              if (spinner)
                spinner.remove();
              if (next[uri] >= 0) {
                wrapper.insertBefore(createIndicatorElement(next[uri]), trashBtn);
              }
            }
          });
        }
      }
      prev = next;
    });
  }, [aiEnabled]);
  import_react13.useEffect(() => {
    if (!enabled || !store.trashbinEnabled) {
      removeInjected();
    } else {
      inject();
    }
  }, [enabled, store.trashbinEnabled, aiEnabled]);
  const shouldTrigger = (mutations) => mutations.some((mutation) => Array.from(mutation.addedNodes).some((node) => {
    if (node.nodeType !== Node.ELEMENT_NODE)
      return false;
    const element = node;
    if (element.classList?.contains(WRAPPER_CLASS))
      return false;
    return element.closest?.(config.containerSelector) || element.querySelector?.(config.containerSelector);
  }));
  useMutationObserver(inject, shouldTrigger, {
    enabled: store.trashbinEnabled && enabled
  });
};
function createSpinnerElement() {
  const spinner = document.createElement("span");
  spinner.className = AI_SPINNER_CLASS;
  spinner.innerHTML = Spicetify.ReactDOMServer.renderToString(/* @__PURE__ */ import_react13.default.createElement("span", {
    className: "inline-flex animate-spin",
    style: { color: "rgba(255,255,255,0.4)" }
  }, /* @__PURE__ */ import_react13.default.createElement(CgSpinner, {
    size: 14
  })));
  return spinner;
}
function createIndicatorElement(probability) {
  const indicator = document.createElement("span");
  indicator.innerHTML = Spicetify.ReactDOMServer.renderToString(/* @__PURE__ */ import_react13.default.createElement(AiIndicator, {
    probability,
    size: 16
  }));
  indicator.className = AI_INDICATOR_CLASS;
  indicator.style.pointerEvents = "auto";
  return indicator;
}

// src/components/features/injections/trashbin-queuelist.tsx
var TrashbinQueuelist = () => {
  const queueTrashbinEnabled = useTrashbinStore((state) => state.queueTrashbinEnabled);
  useTrashButtonInjection(QUEUELIST_CONFIG, queueTrashbinEnabled);
  return null;
};

// src/components/features/injections/trashbin-tracklist.tsx
var TrashbinTracklist = () => {
  const tracklistTrashbinEnabled = useTrashbinStore((state) => state.tracklistTrashbinEnabled);
  useTrashButtonInjection(TRACKLIST_CONFIG, tracklistTrashbinEnabled);
  return null;
};

// src/components/features/playlist-cleanup-context-menu.tsx
var import_react14 = __toESM(require_react(), 1);

// src/lib/playlist-utils.ts
function isPlaylistItemTrashed(item) {
  const state = useTrashbinStore.getState();
  if (!item.uri || !item.uri.startsWith("spotify:track:"))
    return false;
  if (state.trashSongList[item.uri])
    return true;
  const artistUris = new Set;
  if (item.artists) {
    for (const artist of item.artists) {
      if (artist?.uri)
        artistUris.add(artist.uri);
    }
  }
  if (item.metadata?.artist_uri)
    artistUris.add(item.metadata.artist_uri);
  let metaIndex = 1;
  while (item.metadata?.[`artist_uri:${metaIndex}`]) {
    artistUris.add(item.metadata[`artist_uri:${metaIndex}`]);
    metaIndex++;
  }
  for (const artistUri of artistUris) {
    if (state.trashArtistList[artistUri])
      return true;
  }
  return false;
}
async function getPlaylistContents(playlistUri) {
  const contents = await Spicetify.Platform.PlaylistAPI.getContents(playlistUri);
  return contents.items || [];
}
async function removeTrashedFromPlaylist(playlistUri, t2) {
  try {
    const items = await getPlaylistContents(playlistUri);
    const trashedItems = items.filter(isPlaylistItemTrashed);
    if (trashedItems.length === 0) {
      Spicetify.showNotification(t2("MESSAGE_NO_TRASHED_IN_PLAYLIST"));
      return;
    }
    const confirmed = await new Promise((resolve) => {
      Spicetify.PopupModal.display({
        title: t2("ACTION_REMOVE_TRASHED"),
        content: (() => {
          const container = document.createElement("div");
          container.style.padding = "16px";
          const message = document.createElement("p");
          message.style.marginBottom = "16px";
          message.textContent = t2("CONFIRM_REMOVE_TRASHED", {
            count: trashedItems.length
          });
          container.appendChild(message);
          const buttonRow = document.createElement("div");
          buttonRow.style.display = "flex";
          buttonRow.style.justifyContent = "flex-end";
          buttonRow.style.gap = "8px";
          const cancelBtn = document.createElement("button");
          cancelBtn.textContent = t2("ACTION_CANCEL");
          cancelBtn.style.cssText = "padding: 8px 16px; border-radius: 9999px; border: 1px solid #727272; background: transparent; color: var(--spice-text); cursor: pointer; font-weight: bold;";
          cancelBtn.onclick = () => {
            Spicetify.PopupModal.hide();
            resolve(false);
          };
          const confirmBtn = document.createElement("button");
          confirmBtn.textContent = t2("ACTION_REMOVE");
          confirmBtn.style.cssText = "padding: 8px 16px; border-radius: 9999px; border: none; background: #e74c3c; color: white; cursor: pointer; font-weight: bold;";
          confirmBtn.onclick = () => {
            Spicetify.PopupModal.hide();
            resolve(true);
          };
          buttonRow.appendChild(cancelBtn);
          buttonRow.appendChild(confirmBtn);
          container.appendChild(buttonRow);
          return container;
        })()
      });
    });
    if (!confirmed)
      return;
    await Spicetify.Platform.PlaylistAPI.remove(playlistUri, trashedItems.map((item) => ({ uri: item.uri, uid: item.uid })));
    Spicetify.showNotification(t2("MESSAGE_REMOVE_TRASHED_SUCCESS", { count: trashedItems.length }));
  } catch (err) {
    Spicetify.showNotification(t2("MESSAGE_REMOVE_TRASHED_FAILED"), true);
  }
}

// src/components/features/playlist-cleanup-context-menu.tsx
function PlaylistCleanupContextMenu() {
  const { t: t2 } = useTranslation();
  const trashbinEnabled = useTrashbinStore((s) => s.trashbinEnabled);
  import_react14.useEffect(() => {
    const shouldAdd = (uris) => {
      if (!useTrashbinStore.getState().trashbinEnabled)
        return false;
      if (uris.length !== 1)
        return false;
      return Spicetify.URI.isPlaylistV1OrV2(uris[0]);
    };
    const onClick = (uris) => {
      removeTrashedFromPlaylist(uris[0], t2);
    };
    const contextMenuItem = new Spicetify.ContextMenu.Item(t2("ACTION_REMOVE_TRASHED"), onClick, shouldAdd, TRASH_ICON(15));
    contextMenuItem.register();
    const observer = new MutationObserver(() => {
      const menu = document.querySelector("[data-tippy-root] ul, #context-menu ul");
      if (!menu)
        return;
      const items = Array.from(menu.querySelectorAll(":scope > li"));
      const label = t2("ACTION_REMOVE_TRASHED");
      const trashItem = items.find((li) => li.textContent?.trim() === label);
      const deleteItem = items.find((li) => li.querySelector("button")?.textContent?.trim() === "Delete");
      if (trashItem && deleteItem) {
        deleteItem.after(trashItem);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      contextMenuItem.deregister();
      observer.disconnect();
    };
  }, [trashbinEnabled, t2]);
  return null;
}

// src/components/features/trashbin-context-menu.tsx
var import_react15 = __toESM(require_react(), 1);

// src/hooks/use-trash-operations.ts
var useTrashOperations = () => {
  const { t: t2 } = useTranslation();
  const store = useTrashbinStore();
  const handleTrashToggle = (uris) => {
    const uri = uris[0];
    const uriObj = Spicetify.URI.fromString(uri);
    if (uriObj.type === Spicetify.URI.Type.TRACK) {
      store.toggleSongTrash(uri);
    } else if (uriObj.type === Spicetify.URI.Type.ARTIST) {
      store.toggleArtistTrash(uri);
    }
  };
  const shouldAddContextMenu = (uris) => {
    if (uris.length > 1 || !store.trashbinEnabled)
      return false;
    const { type } = store.getTrashStatus(uris[0]);
    return type === Spicetify.URI.Type.TRACK || type === Spicetify.URI.Type.ARTIST;
  };
  const getContextMenuLabel = (uri) => {
    const { isTrashed } = store.getTrashStatus(uri);
    return isTrashed ? t2("ACTION_UNTHROW") : t2("ACTION_THROW");
  };
  return {
    handleTrashToggle,
    shouldAddContextMenu,
    getContextMenuLabel
  };
};

// src/components/features/trashbin-context-menu.tsx
function TrashbinContextMenu() {
  const { t: t2 } = useTranslation();
  const trashOperations = useTrashOperations();
  const contextMenuItemRef = import_react15.useRef(null);
  const shouldAddContextMenuWithUpdate = (uris) => {
    const shouldAdd = trashOperations.shouldAddContextMenu(uris);
    if (shouldAdd && contextMenuItemRef.current) {
      contextMenuItemRef.current.name = trashOperations.getContextMenuLabel(uris[0]);
    }
    return shouldAdd;
  };
  import_react15.useEffect(() => {
    const contextMenuItem = new Spicetify.ContextMenu.Item(t2("ACTION_THROW"), trashOperations.handleTrashToggle, shouldAddContextMenuWithUpdate, TRASH_ICON(15));
    contextMenuItemRef.current = contextMenuItem;
    contextMenuItem.register();
    return () => contextMenuItem.deregister();
  }, [trashOperations.handleTrashToggle, shouldAddContextMenuWithUpdate]);
  return null;
}

// src/components/features/trashbin-widget.tsx
var import_react16 = __toESM(require_react(), 1);
var TrashbinWidget = import_react16.default.memo(() => {
  const { t: t2 } = useTranslation();
  const store = useTrashbinStore();
  const widgetRef = import_react16.useRef(null);
  import_react16.useEffect(() => {
    const updateWidgetState = (widget2) => {
      const currentTrack = Spicetify.Player.data?.item;
      if (!currentTrack)
        return;
      const isTrack = Spicetify.URI.fromString(currentTrack.uri).type === Spicetify.URI.Type.TRACK;
      const isTrashed = !!useTrashbinStore.getState().trashSongList[currentTrack.uri];
      if (isTrack) {
        widget2.active = isTrashed;
        widget2.label = isTrashed ? t2("ACTION_UNTHROW") : t2("ACTION_THROW");
        widget2.icon = TRASH_ICON(20, isTrashed ? "fill-[#22c55e]" : "");
      } else {
        widget2.deregister();
      }
    };
    const widget = new Spicetify.Playbar.Widget(t2("ACTION_THROW"), TRASH_ICON(20), () => {
      const currentTrack = Spicetify.Player.data?.item;
      if (currentTrack)
        store.toggleSongTrash(currentTrack.uri);
    }, false, false, store.widgetEnabled && store.trashbinEnabled);
    widgetRef.current = widget;
    updateWidgetState(widget);
    const handleSongChange = () => updateWidgetState(widget);
    Spicetify.Player.addEventListener("songchange", handleSongChange);
    const unsubscribe = useTrashbinStore.subscribe(() => updateWidgetState(widget));
    return () => {
      unsubscribe();
      Spicetify.Player.removeEventListener("songchange", handleSongChange);
      widget.deregister();
    };
  }, [store.trashbinEnabled, store.widgetEnabled]);
  return null;
});

// src/components/ui/settings-modal.tsx
var import_react17 = __toESM(require_react(), 1);

// node_modules/react-icons/hi2/index.mjs
function HiOutlineQuestionMarkCircle(props) {
  return GenIcon({ tag: "svg", attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" }, child: [] }] })(props);
}

// src/lib/utils.ts
function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

// src/components/ui/settings-modal.tsx
var Tooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = import_react17.useState(false);
  const [position, setPosition] = import_react17.useState({ x: 0, y: 0 });
  const timeoutRef = import_react17.useRef();
  const handleMouseEnter = (e) => {
    clearTimeout(timeoutRef.current);
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 8
    });
    setIsVisible(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 100);
  };
  import_react17.useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);
  return /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement("span", {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, children), isVisible && /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full rounded bg-black px-2 py-1 text-xs text-white shadow-lg max-w-50 wrap-break-word",
    style: {
      left: position.x,
      top: position.y
    }
  }, content, /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"
  })));
};
var Toggle = ({ label, enabled, onChange, description, disabled }) => /* @__PURE__ */ import_react17.default.createElement("div", {
  className: cn("flex items-center justify-between gap-2.5! py-2.5!", disabled && "opacity-50!")
}, /* @__PURE__ */ import_react17.default.createElement("label", {
  className: "flex w-full items-center gap-1.5! pr-4"
}, label, description && /* @__PURE__ */ import_react17.default.createElement(Tooltip, {
  content: description
}, /* @__PURE__ */ import_react17.default.createElement("span", {
  className: "inline-flex! cursor-help! text-[rgba(var(--spice-rgb-text),0.5)]! transition-colors! hover:text-(--spice-text)!"
}, /* @__PURE__ */ import_react17.default.createElement(HiOutlineQuestionMarkCircle, {
  size: 14
})))), /* @__PURE__ */ import_react17.default.createElement("div", {
  className: "text-right"
}, /* @__PURE__ */ import_react17.default.createElement("button", {
  className: cn("flex! items-center! rounded-full! border-0!", "ml-3! p-2! transition-colors!", "bg-[rgba(var(--spice-rgb-shadow),0.7)]! text-(--spice-text)!", !enabled && "text-[rgba(var(--spice-rgb-text),0.3)]!", disabled ? "cursor-not-allowed!" : "cursor-pointer!"),
  type: "button",
  disabled,
  onClick: (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!disabled)
      onChange(!enabled);
  }
}, /* @__PURE__ */ import_react17.default.createElement("svg", {
  height: "16",
  width: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, enabled && /* @__PURE__ */ import_react17.default.createElement("path", {
  d: "M8.797 2.5a.5.5 0 0 0-.594 0L2.5 6.5v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-7l-5.703-4z"
})))));
var ActionButton = ({ label, description, onClick }) => /* @__PURE__ */ import_react17.default.createElement("div", {
  className: "flex items-center justify-between gap-2.5! py-2.5!"
}, /* @__PURE__ */ import_react17.default.createElement("label", {
  className: "w-full pr-4"
}, description), /* @__PURE__ */ import_react17.default.createElement("div", {
  className: "text-right"
}, /* @__PURE__ */ import_react17.default.createElement("button", {
  className: cn("rounded-full! bg-transparent! font-bold! transition-transform!", "border! border-[#727272]! px-3.75! duration-33!", "min-h-8! cursor-pointer! text-(--spice-text)!", "hover:scale-[1.04]! hover:border-(--spice-text)!"),
  onClick
}, label)));
var SettingsModal = () => {
  const { t: t2 } = useTranslation();
  const store = useTrashbinStore();
  const handleFileImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = e.target.files?.[0];
      if (!file)
        return;
      const reader = new FileReader;
      reader.onload = (e2) => {
        try {
          const data = JSON.parse(e2.target?.result);
          store.importTrashData(data.songs || {}, data.artists || {});
          Spicetify.showNotification(t2("BACKUP_RESTORE_SUCCESS"));
        } catch {
          Spicetify.showNotification(t2("BACKUP_FILE_READ_FAILED"), true);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };
  const handleExport = async () => {
    try {
      const handle = await window.showSaveFilePicker?.({
        suggestedName: t2("BACKUP_SUGGESTED_FILENAME"),
        types: [{ accept: { "application/json": [".json"] } }]
      });
      const writable = await handle?.createWritable();
      await writable?.write(JSON.stringify(store.exportData()));
      await writable?.close();
      Spicetify.showNotification(t2("BACKUP_SAVE_SUCCESS"));
    } catch {
      Spicetify.showNotification(t2("BACKUP_SAVE_FAILED"));
    }
  };
  const handleCopy = () => {
    Spicetify.Platform.ClipboardAPI.copy(JSON.stringify(store.exportData()));
    Spicetify.showNotification(t2("MESSAGE_COPIED"));
  };
  const handleClear = () => {
    store.clearTrashbin();
    Spicetify.showNotification(t2("MESSAGE_CLEARED"));
  };
  return /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ import_react17.default.createElement("h2", {
    className: "my-2.5! text-lg font-bold text-(--spice-text) first-of-type:mt-0"
  }, t2("SETTINGS_OPTIONS")), /* @__PURE__ */ import_react17.default.createElement(Toggle, {
    label: t2("SETTINGS_ENABLED"),
    enabled: store.trashbinEnabled,
    onChange: store.setTrashbinEnabled,
    description: t2("DESCRIPTION_SETTINGS_ENABLED")
  }), /* @__PURE__ */ import_react17.default.createElement(Toggle, {
    label: t2("SETTINGS_SHOW_WIDGET"),
    enabled: store.widgetEnabled,
    onChange: store.setWidgetEnabled,
    description: t2("DESCRIPTION_SETTINGS_SHOW_WIDGET")
  }), /* @__PURE__ */ import_react17.default.createElement("h2", {
    className: "my-2.5! text-lg font-bold text-(--spice-text) first-of-type:mt-0"
  }, t2("SETTINGS_FEATURES")), /* @__PURE__ */ import_react17.default.createElement(Toggle, {
    label: t2("SETTINGS_AUTOPLAY"),
    enabled: store.autoplayOnStart,
    onChange: store.setAutoplayOnStart,
    description: t2("DESCRIPTION_SETTINGS_AUTOPLAY")
  }), /* @__PURE__ */ import_react17.default.createElement(Toggle, {
    label: t2("SETTINGS_QUEUE_TRASHBIN"),
    enabled: store.queueTrashbinEnabled,
    onChange: store.setQueueTrashbinEnabled,
    description: t2("DESCRIPTION_SETTINGS_QUEUE_TRASHBIN")
  }), /* @__PURE__ */ import_react17.default.createElement(Toggle, {
    label: t2("SETTINGS_TRACKLIST_TRASHBIN"),
    enabled: store.tracklistTrashbinEnabled,
    onChange: store.setTracklistTrashbinEnabled,
    description: t2("DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN")
  }), /* @__PURE__ */ import_react17.default.createElement(Toggle, {
    label: t2("SETTINGS_SKIP_TRASHED_TRACKS"),
    enabled: store.skipTrashedTracks,
    onChange: store.setSkipTrashedTracks,
    description: t2("DESCRIPTION_SETTINGS_SKIP_TRASHED_TRACKS")
  }), /* @__PURE__ */ import_react17.default.createElement(Toggle, {
    label: t2("SETTINGS_AUTO_CLEAN_QUEUE"),
    enabled: store.autoCleanQueue,
    onChange: store.setAutoCleanQueue,
    description: t2("DESCRIPTION_SETTINGS_AUTO_CLEAN_QUEUE")
  }), /* @__PURE__ */ import_react17.default.createElement(Toggle, {
    label: t2("SETTINGS_PLAYLIST_MONITOR"),
    enabled: store.playlistMonitorEnabled,
    onChange: store.setPlaylistMonitorEnabled,
    description: t2("DESCRIPTION_SETTINGS_PLAYLIST_MONITOR")
  }), /* @__PURE__ */ import_react17.default.createElement("h2", {
    className: "my-2.5! text-lg font-bold text-(--spice-text) first-of-type:mt-0"
  }, t2("SETTINGS_REMOTE_CONTROL")), /* @__PURE__ */ import_react17.default.createElement(Toggle, {
    label: t2("SETTINGS_REMOTE_TOGGLE"),
    enabled: store.remoteToggleEnabled,
    onChange: store.setRemoteToggleEnabled,
    description: t2("DESCRIPTION_SETTINGS_REMOTE_TOGGLE")
  }), /* @__PURE__ */ import_react17.default.createElement(Toggle, {
    label: t2("SETTINGS_REMOTE_SKIPPING"),
    enabled: store.remoteSkippingEnabled,
    onChange: store.setRemoteSkippingEnabled,
    description: t2("DESCRIPTION_SETTINGS_REMOTE_SKIPPING"),
    disabled: !store.remoteToggleEnabled
  }), /* @__PURE__ */ import_react17.default.createElement(Toggle, {
    label: t2("SETTINGS_TRASH_VIA_LIKE"),
    enabled: store.trashViaLikeEnabled,
    onChange: store.setTrashViaLikeEnabled,
    description: t2("DESCRIPTION_SETTINGS_TRASH_VIA_LIKE"),
    disabled: !store.remoteToggleEnabled
  }), /* @__PURE__ */ import_react17.default.createElement("h2", {
    className: "my-2.5! text-lg font-bold text-(--spice-text) first-of-type:mt-0"
  }, t2("SETTINGS_AI_DETECTION")), /* @__PURE__ */ import_react17.default.createElement(Toggle, {
    label: t2("SETTINGS_AI_DETECTION_ENABLED"),
    enabled: store.aiDetectionEnabled,
    onChange: store.setAiDetectionEnabled,
    description: t2("DESCRIPTION_SETTINGS_AI_DETECTION_ENABLED")
  }), /* @__PURE__ */ import_react17.default.createElement(Toggle, {
    label: t2("SETTINGS_TRASH_AI_SONGS"),
    enabled: store.trashAiSongs,
    onChange: store.setTrashAiSongs,
    description: t2("DESCRIPTION_SETTINGS_TRASH_AI_SONGS"),
    disabled: !store.aiDetectionEnabled
  }), store.aiDetectionEnabled && /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "py-1! text-xs! text-[rgba(var(--spice-rgb-text),0.5)]!"
  }, store.aiAssetsDownloading ? t2("AI_ASSETS_DOWNLOADING") : store.aiAssetsReady ? t2("AI_ASSETS_READY") : t2("AI_ASSETS_NOT_READY")), /* @__PURE__ */ import_react17.default.createElement(ActionButton, {
    label: t2("ACTION_CLEAR_AI_STORAGE"),
    description: t2("DESCRIPTION_CLEAR_AI_STORAGE", { count: Object.values(useAiStore((s) => s.results)).filter((v) => v >= 0).length }),
    onClick: () => {
      useAiStore.getState().clearStorage();
      Spicetify.showNotification(t2("MESSAGE_AI_STORAGE_CLEARED"));
    }
  }), /* @__PURE__ */ import_react17.default.createElement("h2", {
    className: "my-2.5! text-lg font-bold text-(--spice-text) first-of-type:mt-0"
  }, t2("SETTINGS_STORAGE")), /* @__PURE__ */ import_react17.default.createElement(ActionButton, {
    label: t2("ACTION_COPY"),
    description: t2("DESCRIPTION_COPY"),
    onClick: handleCopy
  }), /* @__PURE__ */ import_react17.default.createElement(ActionButton, {
    label: t2("ACTION_EXPORT"),
    description: t2("DESCRIPTION_EXPORT"),
    onClick: handleExport
  }), /* @__PURE__ */ import_react17.default.createElement(ActionButton, {
    label: t2("ACTION_IMPORT"),
    description: t2("DESCRIPTION_IMPORT"),
    onClick: handleFileImport
  }), /* @__PURE__ */ import_react17.default.createElement(ActionButton, {
    label: t2("ACTION_CLEAR"),
    description: t2("DESCRIPTION_CLEAR"),
    onClick: handleClear
  }));
};
function TrashbinSettings() {
  const { t: t2 } = useTranslation();
  const [isOpen, setIsOpen] = import_react17.useState(false);
  import_react17.useEffect(() => {
    const menuItem = new Spicetify.Menu.Item(t2("TRASHBIN_NAME"), false, () => setIsOpen(true), TRASH_ICON(15));
    menuItem.register();
    return () => menuItem.deregister();
  }, []);
  import_react17.useEffect(() => {
    if (!isOpen)
      return;
    Spicetify.PopupModal.display({
      title: t2("SETTINGS_TITLE"),
      content: /* @__PURE__ */ import_react17.default.createElement(SettingsModal, null)
    });
    const observer = new MutationObserver(() => {
      if (!document.querySelector(SELECTORS.TRACK_CREDITS_MODAL_CONTAINER)) {
        setIsOpen(false);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
    };
  }, [isOpen]);
  return null;
}

// src/components/ui/trashed-items-modal.tsx
var import_react21 = __toESM(require_react(), 1);

// src/components/views/trashed-items/index.tsx
var import_react20 = __toESM(require_react(), 1);

// src/components/views/trashed-items/ui-components.tsx
var import_react18 = __toESM(require_react(), 1);

// node_modules/react-icons/io5/index.mjs
function IoClose(props) {
  return GenIcon({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z" }, child: [] }] })(props);
}

// src/components/views/trashed-items/ui-components.tsx
var ItemRow = ({ item, onUntrash }) => {
  const { t: t2 } = useTranslation();
  const isArtist = "type" in item && item.type === "artist";
  const imageClass = isArtist ? "rounded-full" : "rounded";
  const Icon = isArtist ? BsPerson : BsMusicNote;
  const secondaryText = isArtist ? item.secondaryText : item.artist;
  const store = useTrashbinStore();
  const aiEnabled = store.aiDetectionEnabled && store.aiAssetsReady;
  const aiProbability = useAiStore((s) => !isArtist && aiEnabled ? s.results[item.uri] : undefined);
  return /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "flex items-center justify-between rounded-md bg-transparent! p-3 transition-colors hover:bg-white/5!"
  }, /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "flex min-w-0 flex-1 items-center gap-3"
  }, item.imageUrl ? /* @__PURE__ */ import_react18.default.createElement("img", {
    src: item.imageUrl,
    alt: item.name,
    className: `h-12 w-12 ${imageClass} object-cover`
  }) : /* @__PURE__ */ import_react18.default.createElement("div", {
    className: `flex h-12 w-12 items-center justify-center bg-white/10 ${imageClass}`
  }, /* @__PURE__ */ import_react18.default.createElement(Icon, {
    className: "h-6 w-6 text-white/70"
  })), /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "min-w-0 flex-1"
  }, /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "flex items-center gap-1.5 truncate font-medium text-white"
  }, aiProbability !== undefined && aiProbability >= 0 && /* @__PURE__ */ import_react18.default.createElement(AiIndicator, {
    probability: aiProbability,
    size: 14
  }), item.name), /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "truncate text-sm text-white/60"
  }, secondaryText))), /* @__PURE__ */ import_react18.default.createElement("button", {
    onClick: () => navigator.clipboard.writeText(item.uri),
    className: "shrink-0 cursor-pointer border-none! bg-transparent! text-xs text-white/40! transition-colors hover:text-white/60!",
    title: t2("TOOLTIP_COPY_URI")
  }, item.uri), /* @__PURE__ */ import_react18.default.createElement("button", {
    onClick: (e) => {
      e.stopPropagation();
      e.preventDefault();
      onUntrash(item.uri);
    },
    className: "mx-2! cursor-pointer rounded-full border-none! bg-transparent! p-2! transition-colors hover:bg-red-500/20! [&_svg]:text-white/70! [&:hover_svg]:text-red-400!",
    title: t2("TOOLTIP_REMOVE_TRASHBIN")
  }, /* @__PURE__ */ import_react18.default.createElement(IoClose, {
    className: "h-5 w-5 transition-colors"
  })));
};
var EmptyState = (props) => {
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "p-8 text-center"
  }, /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "flex flex-col items-center gap-6 py-12"
  }, /* @__PURE__ */ import_react18.default.createElement(BsTrash3, {
    className: "h-20 w-20 text-white/20"
  }), /* @__PURE__ */ import_react18.default.createElement("div", null, /* @__PURE__ */ import_react18.default.createElement("h3", {
    className: "mb-2 text-xl font-semibold text-white"
  }, props.type === "songs" ? t2("ITEMS_EMPTY_SONGS_TITLE") : t2("ITEMS_EMPTY_ARTISTS_TITLE")), /* @__PURE__ */ import_react18.default.createElement("p", {
    className: "text-white/60",
    dangerouslySetInnerHTML: {
      __html: props.type === "songs" ? t2("ITEMS_EMPTY_SONGS") : t2("ITEMS_EMPTY_ARTISTS")
    }
  }))));
};
var TabButton = (props) => /* @__PURE__ */ import_react18.default.createElement("button", {
  onClick: props.onClick,
  className: cn("relative border-b-2 px-4! py-2! text-lg font-medium transition-colors", "border-transparent! bg-transparent! text-white/60! hover:text-white/80!", props.isActive && "text-white! border-green-500! hover:text-white!")
}, props.label, /* @__PURE__ */ import_react18.default.createElement("span", {
  className: "mx-1! text-xs text-white/60!"
}, "(", props.count, ")"), props.isActive && /* @__PURE__ */ import_react18.default.createElement("div", {
  className: "absolute right-0 bottom-0 left-0 h-0.5 bg-green-500!"
}));

// src/components/views/trashed-items/virtual-list.tsx
var import_react19 = __toESM(require_react(), 1);
var ITEM_HEIGHT = 60;
var OVERSCAN = 5;
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = import_react19.useState(value);
  import_react19.useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}
var VirtualList = (props) => {
  const { t: t2 } = useTranslation();
  const store = useTrashbinStore();
  const containerRef = import_react19.useRef(null);
  const [scrollTop, setScrollTop] = import_react19.useState(0);
  const [containerHeight, setContainerHeight] = import_react19.useState(0);
  const [itemCache, setItemCache] = import_react19.useState(new Map);
  const [loadingBatches, setLoadingBatches] = import_react19.useState(new Set);
  const [searchQuery, setSearchQuery] = import_react19.useState("");
  const debouncedSearch = useDebounce(searchQuery, 300);
  const aiResults = useAiStore((s) => s.results);
  const aiEnabled = store.aiDetectionEnabled && store.aiAssetsReady;
  const getFilteredItems = () => {
    if (!debouncedSearch.trim()) {
      return props.items.map((uri, index) => ({ uri, originalIndex: index }));
    }
    const query = debouncedSearch.toLowerCase();
    return props.items.map((uri, index) => ({ uri, originalIndex: index })).filter(({ uri, originalIndex }) => {
      const cachedData = itemCache.get(originalIndex);
      if (cachedData) {
        const nameMatch = cachedData.name.toLowerCase().includes(query);
        const secondaryMatch = "artist" in cachedData ? cachedData.artist.toLowerCase().includes(query) : cachedData.secondaryText.toLowerCase().includes(query);
        return nameMatch || secondaryMatch || uri.toLowerCase().includes(query);
      }
      return uri.toLowerCase().includes(query);
    });
  };
  const filteredItems = getFilteredItems();
  const totalHeight = filteredItems.length * ITEM_HEIGHT;
  const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - OVERSCAN);
  const visibleCount = Math.ceil(containerHeight / ITEM_HEIGHT) + OVERSCAN * 2;
  const endIndex = Math.min(filteredItems.length, startIndex + visibleCount);
  const visibleItems = filteredItems.slice(startIndex, endIndex).map((item, i) => ({
    ...item,
    virtualIndex: startIndex + i
  }));
  const handleScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };
  import_react19.useEffect(() => {
    const container = containerRef.current;
    if (!container)
      return;
    const observer = new ResizeObserver((entries) => {
      setContainerHeight(entries[0]?.contentRect.height ?? 0);
    });
    observer.observe(container);
    setContainerHeight(container.clientHeight);
    return () => observer.disconnect();
  }, []);
  const loadBatch = async (batchIndex) => {
    const batchKey = `${props.activeTab}-${batchIndex}`;
    if (loadingBatches.has(batchKey))
      return;
    const BATCH_SIZE = 50;
    const startIdx = batchIndex * BATCH_SIZE;
    const endIdx = Math.min(startIdx + BATCH_SIZE, props.items.length);
    setLoadingBatches((prev) => new Set(prev).add(batchKey));
    try {
      const urisSlice = props.items.slice(startIdx, endIdx);
      const data = props.activeTab === "songs" ? await fetchTracksMetadata(urisSlice) : await fetchArtistsMetadata(urisSlice);
      setItemCache((prev) => {
        const newCache = new Map(prev);
        data.forEach((item, i) => newCache.set(startIdx + i, item));
        return newCache;
      });
    } catch (error) {} finally {
      setLoadingBatches((prev) => {
        const newSet = new Set(prev);
        newSet.delete(batchKey);
        return newSet;
      });
    }
  };
  import_react19.useEffect(() => {
    const BATCH_SIZE = 50;
    const batchesToLoad = new Set;
    visibleItems.forEach((item) => {
      if (!itemCache.has(item.originalIndex)) {
        batchesToLoad.add(Math.floor(item.originalIndex / BATCH_SIZE));
      }
    });
    batchesToLoad.forEach(loadBatch);
  }, [startIndex, endIndex, itemCache]);
  import_react19.useEffect(() => {
    setItemCache(new Map);
    setLoadingBatches(new Set);
  }, [props.activeTab, props.items]);
  import_react19.useEffect(() => {
    if (!aiEnabled || props.activeTab !== "songs")
      return;
    for (const item of visibleItems) {
      if (aiResults[item.uri] === undefined) {
        useAiStore.getState().enqueue(item.uri);
      }
    }
  }, [aiEnabled, props.activeTab, startIndex, endIndex]);
  return /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, /* @__PURE__ */ import_react19.default.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ import_react19.default.createElement("input", {
    type: "text",
    value: searchQuery,
    onChange: (e) => setSearchQuery(e.target.value),
    placeholder: t2("ITEMS_SEARCH_PLACEHOLDER"),
    className: "w-full rounded-lg border border-white/10! bg-black/30! px-4 py-2 text-sm text-white! outline-none placeholder:text-white/40! focus:border-white/30!"
  })), /* @__PURE__ */ import_react19.default.createElement("div", {
    ref: containerRef,
    onScroll: handleScroll,
    className: "h-100 overflow-auto rounded-lg border border-white/10! bg-black/20!"
  }, /* @__PURE__ */ import_react19.default.createElement("div", {
    className: "relative",
    style: { height: totalHeight }
  }, visibleItems.map((item) => {
    const data = itemCache.get(item.originalIndex);
    return /* @__PURE__ */ import_react19.default.createElement("div", {
      key: item.uri,
      className: "absolute inset-x-0",
      style: {
        top: item.virtualIndex * ITEM_HEIGHT,
        height: ITEM_HEIGHT
      }
    }, data ? /* @__PURE__ */ import_react19.default.createElement(ItemRow, {
      item: data,
      onUntrash: props.onUntrash
    }) : /* @__PURE__ */ import_react19.default.createElement("div", {
      className: "flex h-full items-center justify-center"
    }, /* @__PURE__ */ import_react19.default.createElement("div", {
      className: "h-6 w-6 animate-spin rounded-full border-2 border-white/20! border-t-white/60!"
    })));
  }))), /* @__PURE__ */ import_react19.default.createElement("div", {
    className: "py-4! text-center"
  }, /* @__PURE__ */ import_react19.default.createElement("p", {
    className: "text-sm text-white/40!"
  }, t2("ITEMS_LOADED_COUNT", {
    loaded: itemCache.size,
    total: props.items.length,
    type: props.activeTab
  }))));
};

// src/components/views/trashed-items/index.tsx
var TrashedItemsView = () => {
  const { t: t2 } = useTranslation();
  const store = useTrashbinStore();
  const [activeTab, setActiveTab] = import_react20.useState("songs");
  const trashedSongUris = import_react20.useMemo(() => Object.keys(store.trashSongList), [store.trashSongList]);
  const trashedArtistUris = import_react20.useMemo(() => Object.keys(store.trashArtistList), [store.trashArtistList]);
  const tabs = [
    {
      key: "songs",
      label: t2("ITEMS_TAB_SONGS"),
      count: trashedSongUris.length,
      uris: trashedSongUris
    },
    {
      key: "artists",
      label: t2("ITEMS_TAB_ARTISTS"),
      count: trashedArtistUris.length,
      uris: trashedArtistUris
    }
  ];
  const currentTab = tabs.find((tab) => tab.key === activeTab);
  const handleUntrash = (uri) => {
    if (activeTab === "songs") {
      store.toggleSongTrash(uri, false);
    } else {
      store.toggleArtistTrash(uri, false);
    }
  };
  const hasItems = trashedSongUris.length > 0 || trashedArtistUris.length > 0;
  if (!hasItems)
    return /* @__PURE__ */ import_react20.default.createElement(EmptyState, {
      type: activeTab
    });
  return /* @__PURE__ */ import_react20.default.createElement(import_react20.default.Fragment, null, /* @__PURE__ */ import_react20.default.createElement("style", null, `${SELECTORS.TRACK_CREDITS_MODAL} {overflow-y: hidden !important;}`), /* @__PURE__ */ import_react20.default.createElement("div", {
    className: "mb-4! flex border-b border-white/10"
  }, tabs.map((tab) => /* @__PURE__ */ import_react20.default.createElement(TabButton, {
    key: tab.key,
    label: tab.label,
    count: tab.count,
    isActive: activeTab === tab.key,
    onClick: () => setActiveTab(tab.key)
  }))), currentTab.uris.length === 0 ? /* @__PURE__ */ import_react20.default.createElement(EmptyState, {
    type: activeTab
  }) : /* @__PURE__ */ import_react20.default.createElement(VirtualList, {
    items: currentTab.uris,
    activeTab,
    onUntrash: handleUntrash
  }));
};

// src/components/ui/trashed-items-modal.tsx
function TrashedItemsModal() {
  const { t: t2 } = useTranslation();
  const [isOpen, setIsOpen] = import_react21.useState(false);
  import_react21.useEffect(() => {
    const menuItem = new Spicetify.Menu.Item(t2("ITEMS_TITLE"), false, () => setIsOpen(true), TRASH_ICON(15));
    menuItem.register();
    return () => menuItem.deregister();
  }, []);
  import_react21.useEffect(() => {
    if (!isOpen)
      return;
    Spicetify.PopupModal.display({
      title: t2("ITEMS_TITLE"),
      content: /* @__PURE__ */ import_react21.default.createElement(TrashedItemsView, null),
      isLarge: true
    });
    const observer = new MutationObserver(() => {
      if (!document.querySelector(SELECTORS.TRACK_CREDITS_MODAL_CONTAINER)) {
        setIsOpen(false);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
    };
  }, [isOpen]);
  return null;
}

// src/hooks/use-ai-detection.ts
var import_react22 = __toESM(require_react(), 1);
var useAiDetection = () => {
  const store = useTrashbinStore();
  import_react22.useEffect(() => {
    initBlocklist();
    return () => {
      disposeBlocklist();
    };
  }, []);
  import_react22.useEffect(() => {
    if (!store.aiDetectionEnabled)
      return;
    let cancelled = false;
    const aiStore = useAiStore.getState();
    const init2 = async () => {
      store.setAiAssetsDownloading(true);
      const ready = await aiStore.initialize(DEFAULT_MODEL);
      if (!cancelled) {
        store.setAiAssetsReady(ready);
        store.setAiAssetsDownloading(false);
      }
    };
    init2();
    return () => {
      cancelled = true;
      aiStore.cleanup();
    };
  }, [store.aiDetectionEnabled]);
};

// src/hooks/use-playlist-monitor.ts
var import_react23 = __toESM(require_react(), 1);
var MONITOR_INTERVAL = 3000;
var STORAGE_KEY = "trashbin-playlist-monitor";
function usePlaylistMonitor() {
  const trashbinStore = useTrashbinStore();
  const intervalRef = import_react23.useRef(null);
  const stateRef = import_react23.useRef({ currentPlaylistUri: null });
  const loadState = import_react23.useCallback(() => {
    try {
      const stored = Spicetify.LocalStorage.get(STORAGE_KEY);
      if (stored) {
        const parsedState = JSON.parse(stored);
        stateRef.current.currentPlaylistUri = parsedState.currentPlaylistUri;
      }
    } catch (error) {}
  }, []);
  const saveState = import_react23.useCallback(() => {
    try {
      Spicetify.LocalStorage.set(STORAGE_KEY, JSON.stringify({
        currentPlaylistUri: stateRef.current.currentPlaylistUri
      }));
    } catch (error) {}
  }, []);
  const handleSongChange = import_react23.useCallback(() => {
    const contextUri = Spicetify.Player.data?.context?.uri;
    if (contextUri && Spicetify.URI.isPlaylistV1OrV2(contextUri)) {
      stateRef.current.currentPlaylistUri = contextUri;
      saveState();
    }
  }, [saveState]);
  const resumeLastPlaylist = import_react23.useCallback(async () => {
    if (!stateRef.current.currentPlaylistUri)
      return;
    try {
      await Spicetify.Player.playUri(stateRef.current.currentPlaylistUri);
    } catch (error) {}
  }, []);
  const checkPlaybackStatus = import_react23.useCallback(() => {
    const playerData = Spicetify.Player.data;
    const isPlaying = Spicetify.Player.isPlaying();
    const hasContext = !!playerData?.context?.uri;
    const hasItem = !!playerData?.item;
    if (stateRef.current.currentPlaylistUri && isPlaying && !hasContext && !hasItem) {
      resumeLastPlaylist();
    }
  }, [resumeLastPlaylist]);
  const startMonitoring = import_react23.useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(checkPlaybackStatus, MONITOR_INTERVAL);
  }, [checkPlaybackStatus]);
  const stopMonitoring = import_react23.useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);
  import_react23.useEffect(() => {
    loadState();
  }, [loadState]);
  import_react23.useEffect(() => {
    if (!trashbinStore.playlistMonitorEnabled) {
      stopMonitoring();
      Spicetify.Player.removeEventListener("songchange", handleSongChange);
      return;
    }
    Spicetify.Player.addEventListener("songchange", handleSongChange);
    startMonitoring();
    return () => {
      stopMonitoring();
      Spicetify.Player.removeEventListener("songchange", handleSongChange);
    };
  }, [
    trashbinStore.playlistMonitorEnabled,
    handleSongChange,
    startMonitoring,
    stopMonitoring
  ]);
}

// src/hooks/use-recommendation-monitor.ts
var import_react24 = __toESM(require_react(), 1);
var useRecommendationMonitor = () => {
  const store = useTrashbinStore();
  const { t: t2 } = useTranslation();
  const lastHeart = import_react24.useRef(false);
  const lastUri = import_react24.useRef(null);
  const processing2 = import_react24.useRef(false);
  import_react24.useEffect(() => {
    if (!store.trashbinEnabled || !store.remoteToggleEnabled || !store.trashViaLikeEnabled)
      return;
    const interval = setInterval(async () => {
      if (processing2.current)
        return;
      if (Spicetify.Platform.ConnectAPI.state.activeDevice.id === "local_device")
        return;
      const track = Spicetify.Player.data?.item;
      if (!track?.uri)
        return;
      const heart = Spicetify.Player.getHeart();
      if (track.uri !== lastUri.current) {
        lastUri.current = track.uri;
        lastHeart.current = heart;
        return;
      }
      if (!lastHeart.current && heart) {
        processing2.current = true;
        try {
          const trackId = track.uri.split(":")[2];
          await Spicetify.CosmosAsync.del(`https://api.spotify.com/v1/me/tracks?ids=${trackId}`);
          if (!store.getTrashStatus(track.uri).isTrashed) {
            store.toggleSongTrash(track.uri, false);
            Spicetify.showNotification(t2("MESSAGE_SONG_ADDED_REMOTE"));
            Spicetify.Player.next();
          }
        } catch (e) {}
        processing2.current = false;
      }
      lastHeart.current = heart;
    }, 2000);
    return () => clearInterval(interval);
  }, [
    store.trashbinEnabled,
    store.remoteToggleEnabled,
    store.trashViaLikeEnabled,
    store.getTrashStatus,
    store.toggleSongTrash
  ]);
};

// src/hooks/use-remote-toggle.ts
var import_react25 = __toESM(require_react(), 1);
var useRemoteToggle = () => {
  const store = useTrashbinStore();
  const { t: t2 } = useTranslation();
  const lastPause = import_react25.useRef(0);
  const cooldown = import_react25.useRef(false);
  import_react25.useEffect(() => {
    if (!store.trashbinEnabled || !store.remoteToggleEnabled)
      return;
    const handler = (event) => {
      if (Spicetify.Platform.ConnectAPI.state.activeDevice.id === "local_device")
        return;
      if (cooldown.current)
        return;
      const isPaused = event?.data?.isPaused;
      const now = Date.now();
      if (isPaused) {
        lastPause.current = now;
      } else if (lastPause.current > 0 && now - lastPause.current < 3000) {
        cooldown.current = true;
        const wasEnabled = useTrashbinStore.getState().remoteSkippingEnabled;
        store.toggleRemoteSkipping();
        Spicetify.showNotification(t2(wasEnabled ? "MESSAGE_REMOTE_SKIPPING_DISABLED" : "MESSAGE_REMOTE_SKIPPING_ENABLED"));
        Spicetify.Player.next();
        lastPause.current = 0;
        setTimeout(() => {
          cooldown.current = false;
        }, 3000);
      }
    };
    Spicetify.Player.addEventListener("onplaypause", handler);
    return () => Spicetify.Player.removeEventListener("onplaypause", handler);
  }, [
    store.trashbinEnabled,
    store.remoteToggleEnabled,
    store.toggleRemoteSkipping
  ]);
};

// src/app.tsx
function App() {
  console.log("trashbin+ loaded v1.1.7!");
  const trashbinStore = useTrashbinStore();
  usePlaylistMonitor();
  useRemoteToggle();
  useRecommendationMonitor();
  useAiDetection();
  import_react26.useEffect(() => {
    trashbinStore.initializeFromStorage();
  }, [trashbinStore.initializeFromStorage]);
  import_react26.useEffect(() => {
    if (trashbinStore.autoplayOnStart && !Spicetify.Player.isPlaying()) {
      setTimeout(Spicetify.Player.play, 5000);
      setTimeout(Spicetify.Player.play, 60000);
    }
  }, [trashbinStore.autoplayOnStart]);
  import_react26.useEffect(() => {
    if (!trashbinStore.trashbinEnabled)
      return;
    const skipBackBtn = document.querySelector(SELECTORS.SKIP_BACK_BUTTON) ?? document.querySelector(SELECTORS.SKIP_BACK_BUTTON_ALT);
    const eventListener = () => trashbinStore.setUserHitBack(true);
    const handleSongChange = async () => {
      const track = Spicetify.Player.data?.item;
      const state = useTrashbinStore.getState();
      const isLocalDevice = Spicetify.Platform.ConnectAPI.state.activeDevice.id === "local_device";
      if (!isLocalDevice && !state.remoteSkippingEnabled) {
        return;
      }
      if (state.userHitBack) {
        trashbinStore.setUserHitBack(false);
        return;
      }
      if (state.autoCleanQueue) {
        manageSmartShuffleQueue();
      }
      if (state.skipTrashedTracks && isTrackEffectivelyTrashed(track)) {
        skipToNextAllowedTrack();
      }
    };
    skipBackBtn?.addEventListener("click", eventListener);
    Spicetify.Player.addEventListener("songchange", handleSongChange);
    return () => {
      skipBackBtn?.removeEventListener("click", eventListener);
      Spicetify.Player.removeEventListener("songchange", handleSongChange);
    };
  }, [trashbinStore.trashbinEnabled]);
  return /* @__PURE__ */ import_react26.default.createElement(import_react26.default.Fragment, null, /* @__PURE__ */ import_react26.default.createElement(Providers, null, /* @__PURE__ */ import_react26.default.createElement(AiDetectionWidget, null), /* @__PURE__ */ import_react26.default.createElement(TrashbinWidget, null), /* @__PURE__ */ import_react26.default.createElement(TrashbinSettings, null), /* @__PURE__ */ import_react26.default.createElement(TrashedItemsModal, null), /* @__PURE__ */ import_react26.default.createElement(TrashbinContextMenu, null), /* @__PURE__ */ import_react26.default.createElement(PlaylistCleanupContextMenu, null), /* @__PURE__ */ import_react26.default.createElement(TrashbinTracklist, null), /* @__PURE__ */ import_react26.default.createElement(TrashbinQueuelist, null), /* @__PURE__ */ import_react26.default.createElement(AutoAddRecommendations, null)));
}
async function main() {
  const appRoot = document.createElement("div");
  appRoot.id = "trashbin-plus-root";
  appRoot.className = "fixed top-0 left-0 z-50 pointer-events-none";
  document.body.appendChild(appRoot);
  import_react_dom.default.render(/* @__PURE__ */ import_react26.default.createElement(App, null), appRoot);
  return () => {
    import_react_dom.default.unmountComponentAtNode(appRoot);
    appRoot.remove();
  };
}
var app_default = main;

// ../../../../../tmp/trashbin-plus/entry.ts
(async () => {
  await app_default();
})();

;(()=>{if(!document.getElementById("trashbinDplus")){const s=document.createElement("style");s.id="trashbinDplus";s.textContent=String.raw`/* src/global.css */
/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme;

@layer theme {
  :root, :host {
    --color-red-400: oklch(70.4% .191 22.216);
    --color-red-500: oklch(63.7% .237 25.331);
    --color-green-500: oklch(72.3% .219 149.579);
    --color-black: #000;
    --color-white: #fff;
    --spacing: .25rem;
    --text-xs: .75rem;
    --text-xs--line-height: calc(1 / .75);
    --text-sm: .875rem;
    --text-sm--line-height: calc(1.25 / .875);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --radius-md: .375rem;
    --radius-lg: .5rem;
    --ease-out: cubic-bezier(0, 0, .2, 1);
    --animate-spin: spin 1s linear infinite;
    --default-transition-duration: .15s;
    --default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  }
}

.pointer-events-auto {
  pointer-events: auto;
}

.pointer-events-none {
  pointer-events: none;
}

.visible {
  visibility: visible;
}

.absolute {
  position: absolute;
}

.fixed {
  position: fixed;
}

.relative {
  position: relative;
}

.static {
  position: static;
}

.inset-x-0 {
  inset-inline: calc(var(--spacing) * 0);
}

.top-0 {
  top: calc(var(--spacing) * 0);
}

.top-full {
  top: 100%;
}

.right-0 {
  right: calc(var(--spacing) * 0);
}

.bottom-0 {
  bottom: calc(var(--spacing) * 0);
}

.left-0 {
  left: calc(var(--spacing) * 0);
}

.left-1 {
  left: calc(var(--spacing) * 1);
}

.left-1\/2 {
  left: 50%;
}

.z-50 {
  z-index: 50;
}

.container {
  width: 100%;
}

@media (min-width: 40rem) {
  .container {
    max-width: 40rem;
  }
}

@media (min-width: 48rem) {
  .container {
    max-width: 48rem;
  }
}

@media (min-width: 64rem) {
  .container {
    max-width: 64rem;
  }
}

@media (min-width: 80rem) {
  .container {
    max-width: 80rem;
  }
}

@media (min-width: 96rem) {
  .container {
    max-width: 96rem;
  }
}

.m-0 {
  margin: calc(var(--spacing) * 0);
}

.m-0\! {
  margin: calc(var(--spacing) * 0) !important;
}

.mx-1 {
  margin-inline: calc(var(--spacing) * 1);
}

.mx-1\! {
  margin-inline: calc(var(--spacing) * 1) !important;
}

.mx-2 {
  margin-inline: calc(var(--spacing) * 2);
}

.mx-2\! {
  margin-inline: calc(var(--spacing) * 2) !important;
}

.my-2 {
  margin-block: calc(var(--spacing) * 2);
}

.my-2\.5\! {
  margin-block: calc(var(--spacing) * 2.5) !important;
}

.mb-2 {
  margin-bottom: calc(var(--spacing) * 2);
}

.mb-3 {
  margin-bottom: calc(var(--spacing) * 3);
}

.mb-4 {
  margin-bottom: calc(var(--spacing) * 4);
}

.mb-4\! {
  margin-bottom: calc(var(--spacing) * 4) !important;
}

.ml-1 {
  margin-left: calc(var(--spacing) * 1);
}

.ml-1\.25 {
  margin-left: calc(var(--spacing) * 1.25);
}

.ml-3 {
  margin-left: calc(var(--spacing) * 3);
}

.ml-3\! {
  margin-left: calc(var(--spacing) * 3) !important;
}

.block {
  display: block;
}

.contents {
  display: contents;
}

.flex {
  display: flex;
}

.flex\! {
  display: flex !important;
}

.grid {
  display: grid;
}

.hidden {
  display: none;
}

.inline {
  display: inline;
}

.inline-block {
  display: inline-block;
}

.inline-flex {
  display: inline-flex;
}

.inline-flex\! {
  display: inline-flex !important;
}

.table {
  display: table;
}

.h-0 {
  height: calc(var(--spacing) * 0);
}

.h-0\.5 {
  height: calc(var(--spacing) * .5);
}

.h-2 {
  height: calc(var(--spacing) * 2);
}

.h-5 {
  height: calc(var(--spacing) * 5);
}

.h-6 {
  height: calc(var(--spacing) * 6);
}

.h-12 {
  height: calc(var(--spacing) * 12);
}

.h-20 {
  height: calc(var(--spacing) * 20);
}

.h-100 {
  height: calc(var(--spacing) * 100);
}

.h-full {
  height: 100%;
}

.min-h-8 {
  min-height: calc(var(--spacing) * 8);
}

.min-h-8\! {
  min-height: calc(var(--spacing) * 8) !important;
}

.w-5 {
  width: calc(var(--spacing) * 5);
}

.w-6 {
  width: calc(var(--spacing) * 6);
}

.w-12 {
  width: calc(var(--spacing) * 12);
}

.w-20 {
  width: calc(var(--spacing) * 20);
}

.w-full {
  width: 100%;
}

.max-w-50 {
  max-width: calc(var(--spacing) * 50);
}

.min-w-0 {
  min-width: calc(var(--spacing) * 0);
}

.flex-1 {
  flex: 1;
}

.flex-shrink {
  flex-shrink: 1;
}

.shrink-0 {
  flex-shrink: 0;
}

.-translate-x-1 {
  --tw-translate-x: calc(var(--spacing) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
}

.-translate-x-1\/2 {
  --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
}

.-translate-y-full {
  --tw-translate-y: -100%;
  translate: var(--tw-translate-x) var(--tw-translate-y);
}

.transform {
  transform: var(--tw-rotate-x, ) var(--tw-rotate-y, ) var(--tw-rotate-z, ) var(--tw-skew-x, ) var(--tw-skew-y, );
}

.animate-spin {
  animation: var(--animate-spin);
}

.cursor-default {
  cursor: default;
}

.cursor-help {
  cursor: help;
}

.cursor-help\! {
  cursor: help !important;
}

.cursor-not-allowed {
  cursor: not-allowed;
}

.cursor-not-allowed\! {
  cursor: not-allowed !important;
}

.cursor-pointer {
  cursor: pointer;
}

.cursor-pointer\! {
  cursor: pointer !important;
}

.resize {
  resize: both;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items:  center;
}

.items-center\! {
  align-items:  center !important;
}

.justify-between {
  justify-content: space-between;
}

.justify-center {
  justify-content: center;
}

.gap-0 {
  gap: calc(var(--spacing) * 0);
}

.gap-1 {
  gap: calc(var(--spacing) * 1);
}

.gap-1\.5 {
  gap: calc(var(--spacing) * 1.5);
}

.gap-1\.5\! {
  gap: calc(var(--spacing) * 1.5) !important;
}

.gap-2 {
  gap: calc(var(--spacing) * 2);
}

.gap-2\.5\! {
  gap: calc(var(--spacing) * 2.5) !important;
}

.gap-3 {
  gap: calc(var(--spacing) * 3);
}

.gap-6 {
  gap: calc(var(--spacing) * 6);
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.overflow-auto {
  overflow: auto;
}

.overflow-hidden {
  overflow: hidden;
}

.rounded {
  border-radius: .25rem;
}

.rounded-full {
  border-radius: 3.40282e38px;
}

.rounded-full\! {
  border-radius: 3.40282e38px !important;
}

.rounded-lg {
  border-radius: var(--radius-lg);
}

.rounded-md {
  border-radius: var(--radius-md);
}

.border {
  border-style: var(--tw-border-style);
  border-width: 1px;
}

.border\! {
  border-style: var(--tw-border-style) !important;
  border-width: 1px !important;
}

.border-0 {
  border-style: var(--tw-border-style);
  border-width: 0;
}

.border-0\! {
  border-style: var(--tw-border-style) !important;
  border-width: 0 !important;
}

.border-2 {
  border-style: var(--tw-border-style);
  border-width: 2px;
}

.border-4 {
  border-style: var(--tw-border-style);
  border-width: 4px;
}

.border-b {
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
}

.border-b-2 {
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 2px;
}

.border-none {
  --tw-border-style: none;
  border-style: none;
}

.border-none\! {
  --tw-border-style: none !important;
  border-style: none !important;
}

.border-\[\#727272\]\! {
  border-color: #727272 !important;
}

.border-green-500 {
  border-color: var(--color-green-500);
}

.border-green-500\! {
  border-color: var(--color-green-500) !important;
}

.border-transparent {
  border-color: #0000;
}

.border-transparent\! {
  border-color: #0000 !important;
}

.border-white {
  border-color: var(--color-white);
}

.border-white\/10 {
  border-color: #ffffff1a;
}

@supports (color: color-mix(in lab, red, red)) {
  .border-white\/10 {
    border-color: color-mix(in oklab, var(--color-white) 10%, transparent);
  }
}

.border-white\/10\! {
  border-color: #ffffff1a !important;
}

@supports (color: color-mix(in lab, red, red)) {
  .border-white\/10\! {
    border-color: color-mix(in oklab, var(--color-white) 10%, transparent) !important;
  }
}

.border-white\/20\! {
  border-color: #fff3 !important;
}

@supports (color: color-mix(in lab, red, red)) {
  .border-white\/20\! {
    border-color: color-mix(in oklab, var(--color-white) 20%, transparent) !important;
  }
}

.border-t-black {
  border-top-color: var(--color-black);
}

.border-t-white {
  border-top-color: var(--color-white);
}

.border-t-white\/60\! {
  border-top-color: #fff9 !important;
}

@supports (color: color-mix(in lab, red, red)) {
  .border-t-white\/60\! {
    border-top-color: color-mix(in oklab, var(--color-white) 60%, transparent) !important;
  }
}

.bg-\[rgba\(var\(--spice-rgb-shadow\)\,0\.7\)\]\! {
  background-color: rgba(var(--spice-rgb-shadow), .7) !important;
}

.bg-black {
  background-color: var(--color-black);
}

.bg-black\/20\! {
  background-color: #0003 !important;
}

@supports (color: color-mix(in lab, red, red)) {
  .bg-black\/20\! {
    background-color: color-mix(in oklab, var(--color-black) 20%, transparent) !important;
  }
}

.bg-black\/30\! {
  background-color: #0000004d !important;
}

@supports (color: color-mix(in lab, red, red)) {
  .bg-black\/30\! {
    background-color: color-mix(in oklab, var(--color-black) 30%, transparent) !important;
  }
}

.bg-green-500 {
  background-color: var(--color-green-500);
}

.bg-green-500\! {
  background-color: var(--color-green-500) !important;
}

.bg-transparent {
  background-color: #0000;
}

.bg-transparent\! {
  background-color: #0000 !important;
}

.bg-white {
  background-color: var(--color-white);
}

.bg-white\/10 {
  background-color: #ffffff1a;
}

@supports (color: color-mix(in lab, red, red)) {
  .bg-white\/10 {
    background-color: color-mix(in oklab, var(--color-white) 10%, transparent);
  }
}

.fill-\[\#22c55e\] {
  fill: #22c55e;
}

.object-cover {
  object-fit: cover;
}

.p-2 {
  padding: calc(var(--spacing) * 2);
}

.p-2\! {
  padding: calc(var(--spacing) * 2) !important;
}

.p-3 {
  padding: calc(var(--spacing) * 3);
}

.p-4 {
  padding: calc(var(--spacing) * 4);
}

.p-8 {
  padding: calc(var(--spacing) * 8);
}

.px-2 {
  padding-inline: calc(var(--spacing) * 2);
}

.px-3 {
  padding-inline: calc(var(--spacing) * 3);
}

.px-3\.75\! {
  padding-inline: calc(var(--spacing) * 3.75) !important;
}

.px-4 {
  padding-inline: calc(var(--spacing) * 4);
}

.px-4\! {
  padding-inline: calc(var(--spacing) * 4) !important;
}

.py-1 {
  padding-block: calc(var(--spacing) * 1);
}

.py-1\! {
  padding-block: calc(var(--spacing) * 1) !important;
}

.py-2 {
  padding-block: calc(var(--spacing) * 2);
}

.py-2\! {
  padding-block: calc(var(--spacing) * 2) !important;
}

.py-2\.5\! {
  padding-block: calc(var(--spacing) * 2.5) !important;
}

.py-4 {
  padding-block: calc(var(--spacing) * 4);
}

.py-4\! {
  padding-block: calc(var(--spacing) * 4) !important;
}

.py-12 {
  padding-block: calc(var(--spacing) * 12);
}

.pr-4 {
  padding-right: calc(var(--spacing) * 4);
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-lg {
  font-size: var(--text-lg);
  line-height: var(--tw-leading, var(--text-lg--line-height));
}

.text-sm {
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
}

.text-xl {
  font-size: var(--text-xl);
  line-height: var(--tw-leading, var(--text-xl--line-height));
}

.text-xs {
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
}

.text-xs\! {
  font-size: var(--text-xs) !important;
  line-height: var(--tw-leading, var(--text-xs--line-height)) !important;
}

.leading-none {
  --tw-leading: 1;
  line-height: 1;
}

.font-bold {
  --tw-font-weight: var(--font-weight-bold);
  font-weight: var(--font-weight-bold);
}

.font-bold\! {
  --tw-font-weight: var(--font-weight-bold) !important;
  font-weight: var(--font-weight-bold) !important;
}

.font-medium {
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
}

.font-semibold {
  --tw-font-weight: var(--font-weight-semibold);
  font-weight: var(--font-weight-semibold);
}

.wrap-break-word {
  overflow-wrap: break-word;
}

.whitespace-nowrap {
  white-space: nowrap;
}

.text-\(--spice-text\) {
  color: var(--spice-text);
}

.text-\(--spice-text\)\! {
  color: var(--spice-text) !important;
}

.text-\[rgba\(var\(--spice-rgb-text\)\,0\.3\)\]\! {
  color: rgba(var(--spice-rgb-text), .3) !important;
}

.text-\[rgba\(var\(--spice-rgb-text\)\,0\.5\)\]\! {
  color: rgba(var(--spice-rgb-text), .5) !important;
}

.text-green-500 {
  color: var(--color-green-500);
}

.text-white {
  color: var(--color-white);
}

.text-white\! {
  color: var(--color-white) !important;
}

.text-white\/20 {
  color: #fff3;
}

@supports (color: color-mix(in lab, red, red)) {
  .text-white\/20 {
    color: color-mix(in oklab, var(--color-white) 20%, transparent);
  }
}

.text-white\/40\! {
  color: #fff6 !important;
}

@supports (color: color-mix(in lab, red, red)) {
  .text-white\/40\! {
    color: color-mix(in oklab, var(--color-white) 40%, transparent) !important;
  }
}

.text-white\/60 {
  color: #fff9;
}

@supports (color: color-mix(in lab, red, red)) {
  .text-white\/60 {
    color: color-mix(in oklab, var(--color-white) 60%, transparent);
  }
}

.text-white\/60\! {
  color: #fff9 !important;
}

@supports (color: color-mix(in lab, red, red)) {
  .text-white\/60\! {
    color: color-mix(in oklab, var(--color-white) 60%, transparent) !important;
  }
}

.text-white\/70 {
  color: #ffffffb3;
}

@supports (color: color-mix(in lab, red, red)) {
  .text-white\/70 {
    color: color-mix(in oklab, var(--color-white) 70%, transparent);
  }
}

.lowercase {
  text-transform: lowercase;
}

.uppercase {
  text-transform: uppercase;
}

.ordinal {
  --tw-ordinal: ordinal;
  font-variant-numeric: var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, );
}

.opacity-50 {
  opacity: .5;
}

.opacity-50\! {
  opacity: .5 !important;
}

.opacity-70 {
  opacity: .7;
}

.shadow-lg {
  --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

.filter {
  filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
}

.transition {
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}

.transition-colors {
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}

.transition-colors\! {
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to !important;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function)) !important;
  transition-duration: var(--tw-duration, var(--default-transition-duration)) !important;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}

.transition-transform {
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}

.transition-transform\! {
  transition-property: transform, translate, scale, rotate !important;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function)) !important;
  transition-duration: var(--tw-duration, var(--default-transition-duration)) !important;
}

.duration-33 {
  --tw-duration: 33ms;
  transition-duration: 33ms;
}

.duration-33\! {
  --tw-duration: 33ms !important;
  transition-duration: 33ms !important;
}

.ease-out {
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
}

.outline-none {
  --tw-outline-style: none;
  outline-style: none;
}

.placeholder\:text-white\/40\!::placeholder {
  color: #fff6 !important;
}

@supports (color: color-mix(in lab, red, red)) {
  .placeholder\:text-white\/40\!::placeholder {
    color: color-mix(in oklab, var(--color-white) 40%, transparent) !important;
  }
}

.first-of-type\:mt-0:first-of-type {
  margin-top: calc(var(--spacing) * 0);
}

@media (hover: hover) {
  .hover\:scale-\[1\.04\]\!:hover {
    scale: 1.04 !important;
  }
}

@media (hover: hover) {
  .hover\:border-\(--spice-text\)\!:hover {
    border-color: var(--spice-text) !important;
  }
}

@media (hover: hover) {
  .hover\:bg-red-500\/20\!:hover {
    background-color: #fb2c3633 !important;
  }

  @supports (color: color-mix(in lab, red, red)) {
    .hover\:bg-red-500\/20\!:hover {
      background-color: color-mix(in oklab, var(--color-red-500) 20%, transparent) !important;
    }
  }
}

@media (hover: hover) {
  .hover\:bg-white\/5\!:hover {
    background-color: #ffffff0d !important;
  }

  @supports (color: color-mix(in lab, red, red)) {
    .hover\:bg-white\/5\!:hover {
      background-color: color-mix(in oklab, var(--color-white) 5%, transparent) !important;
    }
  }
}

@media (hover: hover) {
  .hover\:text-\(--spice-text\)\!:hover {
    color: var(--spice-text) !important;
  }
}

@media (hover: hover) {
  .hover\:text-white\!:hover {
    color: var(--color-white) !important;
  }
}

@media (hover: hover) {
  .hover\:text-white\/60\!:hover {
    color: #fff9 !important;
  }

  @supports (color: color-mix(in lab, red, red)) {
    .hover\:text-white\/60\!:hover {
      color: color-mix(in oklab, var(--color-white) 60%, transparent) !important;
    }
  }
}

@media (hover: hover) {
  .hover\:text-white\/80\!:hover {
    color: #fffc !important;
  }

  @supports (color: color-mix(in lab, red, red)) {
    .hover\:text-white\/80\!:hover {
      color: color-mix(in oklab, var(--color-white) 80%, transparent) !important;
    }
  }
}

@media (hover: hover) {
  .hover\:opacity-100:hover {
    opacity: 1;
  }
}

.focus\:border-white\/30\!:focus {
  border-color: #ffffff4d !important;
}

@supports (color: color-mix(in lab, red, red)) {
  .focus\:border-white\/30\!:focus {
    border-color: color-mix(in oklab, var(--color-white) 30%, transparent) !important;
  }
}

.\[\&_svg\]\:text-white\/70\! svg {
  color: #ffffffb3 !important;
}

@supports (color: color-mix(in lab, red, red)) {
  .\[\&_svg\]\:text-white\/70\! svg {
    color: color-mix(in oklab, var(--color-white) 70%, transparent) !important;
  }
}

.\[\&\:hover_svg\]\:text-red-400\!:hover svg {
  color: var(--color-red-400) !important;
}

.main-trackCreditsModal-mainSection {
  overflow-y: auto !important;
  max-height: 70vh !important;
}

.main-trackCreditsModal-mainSection button, .main-addButton-button {
  background-color: #0000 !important;
  border: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

.main-addButton-button {
  padding-top: 4px !important;
  padding-left: 3px !important;
}

@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}

@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}

@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}

@property --tw-rotate-x {
  syntax: "*";
  inherits: false
}

@property --tw-rotate-y {
  syntax: "*";
  inherits: false
}

@property --tw-rotate-z {
  syntax: "*";
  inherits: false
}

@property --tw-skew-x {
  syntax: "*";
  inherits: false
}

@property --tw-skew-y {
  syntax: "*";
  inherits: false
}

@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}

@property --tw-leading {
  syntax: "*";
  inherits: false
}

@property --tw-font-weight {
  syntax: "*";
  inherits: false
}

@property --tw-ordinal {
  syntax: "*";
  inherits: false
}

@property --tw-slashed-zero {
  syntax: "*";
  inherits: false
}

@property --tw-numeric-figure {
  syntax: "*";
  inherits: false
}

@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false
}

@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false
}

@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}

@property --tw-shadow-color {
  syntax: "*";
  inherits: false
}

@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}

@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}

@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false
}

@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}

@property --tw-ring-color {
  syntax: "*";
  inherits: false
}

@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}

@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false
}

@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}

@property --tw-ring-inset {
  syntax: "*";
  inherits: false
}

@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0;
}

@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}

@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}

@property --tw-blur {
  syntax: "*";
  inherits: false
}

@property --tw-brightness {
  syntax: "*";
  inherits: false
}

@property --tw-contrast {
  syntax: "*";
  inherits: false
}

@property --tw-grayscale {
  syntax: "*";
  inherits: false
}

@property --tw-hue-rotate {
  syntax: "*";
  inherits: false
}

@property --tw-invert {
  syntax: "*";
  inherits: false
}

@property --tw-opacity {
  syntax: "*";
  inherits: false
}

@property --tw-saturate {
  syntax: "*";
  inherits: false
}

@property --tw-sepia {
  syntax: "*";
  inherits: false
}

@property --tw-drop-shadow {
  syntax: "*";
  inherits: false
}

@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false
}

@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}

@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false
}

@property --tw-duration {
  syntax: "*";
  inherits: false
}

@property --tw-ease {
  syntax: "*";
  inherits: false
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@layer properties {
  @supports ((-webkit-hyphens: none) and ( not (margin-trim: inline))) or ((-moz-orient: inline) and ( not (color:rgb(from red r g b)))) {
    *, :before, :after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-duration: initial;
      --tw-ease: initial;
    }
  }
}
`.trim();document.head.appendChild(s)}})()})()