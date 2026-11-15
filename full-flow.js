/* Reimplemented from static readings of all 15 preserved scene controllers.
 * Original platform bundles are never imported or executed. */
(function (root) {
  const order = [
    "zbwe9e4",
    "fjzef86",
    "kuf47ne",
    "fjalg332",
    "ppgn4ri",
    "pk95ywe",
    "5ey3se2",
    "fryi3j5",
    "r7xnwci",
    "74ngv74",
    "yddnar9",
    "82ezfsx",
  ];
  const branch1 = ["AR1_1_26", "AR1_1_28", "AR1_1_29_1", "AR1_1_30_1"];
  const branch3 = [
    "AR3_3_15_1",
    "AR3_3_15_No1_1",
    "AR3_3_15_No2_1",
    "AR3_3_15_EXbtn",
  ];
  const scenes = {
    zbwe9e4: {
      next: "fjzef86",
      input: {
        id: "AR1_1_50",
        question: 7,
        fail: "AR1_1_51",
        success: "AR1_1_52",
        max: 6,
      },
      memory: { AR1_1_36: "AR1_1_38" },
      skip: { AR1_1_35: "AR1_1_36", AR1_1_37: "AR1_1_38" },
      timers: { AR1_1_42: ["AR1_1_43", 4000] },
      end: "AR1_1_52",
      storyEndAfter: "AR1_1_48",
      bridge: "DEMO_STORY_1_1_CLOSE",
    },
    fjzef86: {
      next: "kuf47ne",
      input: {
        id: "AR1_2_29",
        question: 7,
        fail: "AR1_2_29_FAI",
        success: "AR1_2_29_CORa",
        max: 5,
      },
      memory: { AR1_2_23: "AR1_2_25" },
      skip: { AR1_2_22: "AR1_2_23", AR1_2_24: "AR1_2_25" },
      end: "AR1_2_29_CORa",
      storyEndAfter: "AR1_2_27",
      bridge: "FULL_STORY_1_2",
      tools: "pair-memory",
    },
    kuf47ne: {
      next: "fjalg332",
      memory: { AR1_3_67: "AR1_3_70" },
      skip: { AR1_3_44: "AR1_3_45", AR1_3_73: "AR1_3_74" },
      timers: {
        AR1_3_04: ["AR1_3_05", 9000],
        AR1_3_17: ["AR1_3_18", 6000],
        AR1_3_81_1: ["AR1_3_82", 5000],
      },
      actions: {
        AR1_3_10: { label: "搜索 / 検索", ui: "search", target: "AR1_3_11" },
      },
      puzzles: {
        AR1_3_79: {
          event: "delete-noise",
          target: "AR1_3_81",
          story: "FULL_STORY_NOISE",
        },
        AR1_3_83: {
          event: "delete-howling",
          target: "AR1_3_86",
          story: "FULL_STORY_HOWLING",
        },
        AR1_3_87_1: {
          event: "gear-memory",
          delay: 3000,
          end: true,
          story: "FULL_STORY_GEAR",
        },
      },
      jump: { AR1_3_81: "AR1_3_81_1", AR1_3_86: "AR1_3_87" },
    },
    fjalg332: {
      next: "ppgn4ri",
      skip: { AR1_4_05: "AR1_4_06", AR1_4_13: "AR1_4_14" },
      timers: { AR1_4_12_1: ["AR1_4_14", 3000], AR1_4_22: ["AR1_4_23", 1000] },
      end: "AR1_4_32",
      clear: true,
    },
    ppgn4ri: {
      next: "pk95ywe",
      storyStart: "AR2_1_02",
      end: "AR2_1_27",
      map: true,
      storyEndAfter: "AR2_1_26",
      bridge: "FULL_STORY_2_1",
    },
    pk95ywe: {
      next: "5ey3se2",
      input: {
        id: "AR2_2_01",
        question: 1,
        fail: "AR2_2_01-outsider",
        success: "AR2_2_02",
        max: 6,
        entry: true,
        poster: true,
      },
      storyStart: "AR2_2_03",
      memory: { AR2_2_08: "AR2_2_09" },
      skip: { AR2_2_04: "AR2_2_05" },
      end: "AR2_2_32",
      map: true,
      storyEndAfter: "AR2_2_31",
      bridge: "DEMO_STORY_2_2_CLOSE",
    },
    "5ey3se2": {
      next: "fryi3j5",
      input: {
        id: "AR2_3_01_ent",
        question: 1,
        fail: "AR2_3_01_1",
        success: "AR2_3_01",
        entry: true,
        max: 20,
      },
      storyStart: "AR2_3_02",
      memory: { AR2_3_16: "AR2_3_18" },
      end: "AR2_3_19",
      map: true,
      storyEndAfter: "AR2_3_18",
      bridge: "FULL_STORY_2_3",
    },
    fryi3j5: {
      next: "r7xnwci",
      storyStart: "AR2_4_02",
      puzzles: { AR2_4_0_2: { event: "marker-box", target: "AR2_4_02" } },
      skip: { AR2_4_01: "AR2_4_0_2" },
      timers: {
        AR2_4_05: ["AR2_4_06", 1500],
        AR2_4_18: ["AR2_4_19", 2500],
        AR2_4_19: ["AR2_4_20", 5000],
        AR2_4_23_0: ["AR2_4_23", 5000],
        AR2_4_23: ["AR2_4_24", 2000],
      },
      endAfter: "AR2_4_27",
      clear: true,
    },
    r7xnwci: {
      next: "bkucguk",
      storyNext: "74ngv74",
      skip: { AR3_1_70: "AR3_1_71" },
      memory: { AR3_1_71: "AR3_1_73" },
      timers: { AR3_1_37: ["AR3_1_38", 6000], AR3_1_41: ["AR3_1_42", 5000] },
      end: "AR3_1_75",
      map: true,
      storyEndAfter: "AR3_1_74",
      bridge: "FULL_STORY_3_1",
    },
    bkucguk: { next: "sad97sf", extra: "ex1" },
    sad97sf: { next: "74ngv74", extra: "ex2" },
    "74ngv74": {
      next: "yddnar9",
      skip: { AR3_2_27: "AR3_2_28" },
      timers: { AR3_2_30: ["AR3_2_31", 5000] },
      endAfter: "AR3_2_56",
      holdEnd: 5000,
    },
    yddnar9: {
      next: "82ezfsx",
      skip: { AR3_3_01: "AR3_3_02" },
      puzzles: {
        AR3_3_27: {
          event: "delete-okabe",
          delay: 3000,
          end: true,
          story: "FULL_STORY_DELETE",
        },
      },
    },
    "82ezfsx": {
      skip: { AR3_4_11: "AR3_4_12", AR3_4_15: "AR3_4_16" },
      puzzles: {
        AR3_4_03: {
          event: "ending-switch",
          target: "AR3_4_05",
          switchIndex: 0,
          delay: 2000,
        },
        AR3_4_09: {
          event: "ending-switch",
          target: "AR3_4_10",
          switchIndex: 1,
          delay: 2000,
        },
        AR3_4_18: {
          event: "ending-switch",
          target: "AR3_4_19",
          switchIndex: 2,
          delay: 2000,
        },
      },
      credits: "AR3_4_20_1",
      end: "AR3_4_23",
      clear: true,
    },
    b7f11f61526a7f98: {
      trial: true,
      memory: { AR1_1_36: "AR1_1_38" },
      skip: { AR1_1_35: "AR1_1_36", AR1_1_37: "AR1_1_38" },
      timers: { AR1_1_42: ["AR1_1_43", 4000] },
      endAfter: "AR1_1_48",
    },
  };
  const bridgeText = {
    DEMO_STORY_1_1_CLOSE: [
      "最后一张纸滑了出来。你把这几页摊在手机旁。沿着箭头读出那几个字，你试着把它们输了进去。",
      "最後の一枚がプリンターから出てきた。スマートフォンの横に紙を広げ、矢印をたどる。読み取れた文字を、そのまま入力してみた。",
    ],
    DEMO_STORY_2_2_CLOSE: [
      "你把梅花和黑桃给出的答案填进空格，再按数字依次读下去。最后拼出来的词是……「世界线」？",
      "クラブとスペードで得た答えを空欄に入れ、数字の順に文字を拾っていく。最後に出てきた言葉は……「せかいせん」？",
    ],
    FULL_STORY_1_2: [
      "还是刚才那几张题卡，两两配在一起，竟拼出了新题。你顺着箭头读到最后，才发现那是个名字。",
      "さっきと同じ問題なのに、二枚ずつ組み合わせると別の問題が現れた。矢印を最後までたどって、ようやく気づく。これは誰かの名前だ。",
    ],
    FULL_STORY_NOISE: [
      "既然都交给你了……你打开DELETE模式，认出那串代表噪音的字符，试着把它们抹去。",
      "任されたのだから、やってみるしかない。DELETEモードの中に、ノイズを表す文字列が見つかった。これを消してみよう。",
    ],
    FULL_STORY_HOWLING: [
      "你把圆环往剪影上一挪。原先看不明白的几笔，在环孔里竟然连成了字母。",
      "リングを影に重ねてみる。さっきまで何だかわからなかった線が、穴の中では文字に見えた。",
    ],
    FULL_STORY_GEAR: [
      "铃声响了。你盯着齿轮，等着下一声。又是那个记号转到正下方的时候！这回，你看清了指针底下的字。",
      "鈴が鳴った。歯車を見ながら、次の音を待つ。また、あの印が真下に来た瞬間だ！　今度は矢印の先の文字がはっきり読めた。",
    ],
    FULL_STORY_2_1: [
      "你和比屋定小姐把沿路得来的线索填进格子，读出了「蓝色的爱心」。再翻开地图，一眼就认出了那个标记。",
      "比屋定さんと道々拾った手掛かりでクロスワードを埋めると、「青いハート」と読めた。もう一度地図を開くと、その印はすぐに見つかった。",
    ],
    FULL_STORY_2_3: [
      "新暗号里的「格子」似曾相识。你翻回刚才的填字题，把该涂的格子一一涂黑，再看向手机屏幕。",
      "新しい暗号に出てきた「マス」には見覚えがある。さっきのクロスワードを開き直し、指示どおりにマスを塗ってから、スマートフォンの画面に目を戻した。",
    ],
    FULL_STORY_3_1: [
      "你把暗号片叠在解读片上，拼起两半线索。最后读出来的只有两个字。你把它们输进手机，等冈部开口。",
      "暗号シートを解読シートに重ね、半分ずつ手に入れた手掛かりをつなぐ。最後に読み取れたのは、たった二文字だった。スマートフォンに入力して、岡部の言葉を待った。",
    ],
    FULL_STORY_DELETE: [
      "这一次，你在DELETE模式里选中了冈部伦太郎的名字。最后一道暗号也解开了。冈部还在屏幕里，看着你。",
      "今度はDELETEモードで、岡部倫太郎の名前を選んだ。最後の暗号も解けた。画面の中では、まだ岡部がこちらを見ている。",
    ],
  };
  const api = { order, scenes, branch1, branch3, bridgeText };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.KarkinosFlow = api;
})(typeof window === "undefined" ? globalThis : window);
