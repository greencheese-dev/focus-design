import { atom } from "recoil";

const scrollYState = atom({
  key: "scrollY",
  default: 0,
});

const delayedScrollYState = atom({
  key: "delayedScrollY",
  default: 0,
});

const outLinkState = atom({
  key: "outLink",
  default: {
    naver: "https://blog.naver.com/casebycase_?tab=1",
    youtube: "https://www.youtube.com",
    instagram: "https://www.instagram.com/focus_design_/",
  },
});

export { scrollYState, delayedScrollYState, outLinkState };
