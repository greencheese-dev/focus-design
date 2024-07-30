import { atom } from "recoil";
import left_1 from "./assets/images/left_1.jpeg";
import left_2 from "./assets/images/left_2.jpeg";
import left_3 from "./assets/images/left_3.jpeg";
import left_4 from "./assets/images/left_4.jpeg";
import left_5 from "./assets/images/left_5.jpeg";
import left_6 from "./assets/images/left_6.jpeg";
import center_1 from "./assets/images/center_1.jpeg";
import center_2 from "./assets/images/center_2.jpeg";
import right_1 from "./assets/images/right_1.jpeg";
import right_2 from "./assets/images/right_2.jpeg";
import right_3 from "./assets/images/right_3.jpeg";

const projectsState = atom({
  key: "projects",
  default: [
    { title: "ROTM", desc: "stencil", media: left_1 },
    {
      title: "KIA",
      desc: "blind",
      media: left_2,
    },
    {
      title: "도깨비마을",
      desc: "wall light",
      media: left_3,
    },
    { title: "TACO", desc: "signboard", media: left_4 },
    { title: "수수굉", desc: "signboard", media: left_5 },
    { title: "미미참치", desc: "wall painting", media: left_6 },
    { title: "OPEN", desc: "ceramic", media: right_1, height: "40vw" },
    {
      title: "SMILE DINING",
      desc: "signboard",
      media: right_2,
      height: "20vw",
    },
    {
      title: "TACO",
      desc: "wall painting",
      media: right_3,
      height: "20vw",
    },
    {
      title: "SMILE DINING",
      desc: "signboard",
      media: center_1,
      height: "50vw",
    },
    {
      title: "CARAVAN GARAGE",
      desc: "wall painting",
      media: center_2,
      height: "40vw",
    },
  ],
});

const projectsLeftState = atom({
  key: "projectsLeft",
  default: [
    { title: "ROTM", desc: "stencil", media: left_1 },
    {
      title: "KIA",
      desc: "blind",
      media: left_2,
    },
    {
      title: "도깨비마을",
      desc: "wall light",
      media: left_3,
    },
    { title: "TACO", desc: "signboard", media: left_4 },
    { title: "수수굉", desc: "signboard", media: left_5 },
    { title: "미미참치", desc: "wall painting", media: left_6 },
  ],
});
const projectsCenterState = atom({
  key: "projectsCenter",
  default: [
    {
      title: "SMILE DINING",
      desc: "signboard",
      media: center_1,
      height: "50vw",
    },
    {
      title: "CARAVAN GARAGE",
      desc: "wall painting",
      media: center_2,
      height: "40vw",
    },
  ],
});
const projectsRightState = atom({
  key: "projectsRight",
  default: [
    { title: "OPEN", desc: "ceramic", media: right_1, height: "40vw" },
    {
      title: "SMILE DINING",
      desc: "signboard",
      media: right_2,
      height: "20vw",
    },
    {
      title: "TACO",
      desc: "wall painting",
      media: right_3,
      height: "40vw",
    },
  ],
});

(() => {})();
export {
  projectsLeftState,
  projectsCenterState,
  projectsRightState,
  projectsState,
};
