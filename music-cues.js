/* BGM on scene entry includes both configured PalanAR events and the
   original controller's coaching-screen tap. Music changes follow the
   visited route so a resumed refusal or wrong answer keeps its own cue. */
(() => {
  const initialTrack = {
    zbwe9e4: "BGM01", fjzef86: "BGM01", kuf47ne: "BGM01", fjalg332: "BGM01",
    ppgn4ri: null, pk95ywe: null, "5ey3se2": null, fryi3j5: null,
    r7xnwci: "BGM01", "74ngv74": "BGM01", yddnar9: "BGM01", "82ezfsx": "BGM01",
    bkucguk: "BGM01", sad97sf: "BGM01", b7f11f61526a7f98: "BGM01",
  };
  const cues = {
    AR1_1_31: "BGM02",
    AR1_2_22: "BGM02", AR1_2_23: "BGM02",
    AR1_3_67: "BGM02",
    AR2_1_02: "BGM01", AR2_1_27: "BGM02",
    AR2_2_03: "BGM01", AR2_2_32: "BGM02",
    AR2_3_02: "BGM01", AR2_3_16: "BGM02",
    AR2_4_04: "BGM01", AR2_4_17: null, AR2_4_24: "BGM02",
    AR3_1_37: "BGM02", AR3_1_70: "BGM03", AR3_1_71: "BGM03",
    AR3_2_31: "BGM02", AR3_2_55: null,
    AR3_3_17: "BGM02", AR3_4_20_1: null,
    // These short story-mode passages replace the source's map prompts.
    FULL_STORY_2_1: "BGM02", DEMO_STORY_2_2_CLOSE: "BGM02",
  };
  function at(sceneId, recordId, visitedIds = []) {
    if (Object.hasOwn(cues, recordId)) return cues[recordId];
    for (let i = visitedIds.length - 1; i >= 0; i--) {
      const id = visitedIds[i];
      if (Object.hasOwn(cues, id)) return cues[id];
    }
    return initialTrack[sceneId] || null;
  }
  window.KarkinosMusic = { at };
})();
