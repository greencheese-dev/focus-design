import styled from "styled-components";

import Abouts from "../components/About/Abouts";
import Email from "../components/Home/Email";
import Footer from "../components/Home/Footer";

const About = () => {
  return (
    <Wrapper>
      <Abouts />
      <Email text={"focusDesign@gmail.com"} />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-x: hidden;
  margin-top: 2vh;
`;

export default About;
