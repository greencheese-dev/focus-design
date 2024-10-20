import styled from "styled-components";
import styles from "./About.module.css";

import Abouts from "../components/About/Abouts";
import Email from "../components/Home/Email";
import Footer from "../components/Home/Footer";

const About = () => {
  return (
    <div className={`flex flex-col content-start ${styles.wrapper}`}>
      <h1
        className={`border-t-2 border-b border-black text-left pb-2 ${styles.header}`}
      >
        About.
      </h1>
      <Abouts />
      <Email text={"focusDesign@gmail.com"} />
      <Footer />
    </div>
  );
};

export default About;
