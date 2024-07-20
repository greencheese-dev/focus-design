import styled from "styled-components";
import text_naver from "../../assets/test_naver.svg";
import text_instagram from "../../assets/text_instagram.svg";
import text_youtube from "../../assets/test_youtube.svg";
import { useState } from "react";

const Footer = () => {
  const [naver, setNaver] = useState(true);
  const [instagram, setInstagram] = useState(true);
  const [youtube, setYoutube] = useState(true);

  const onHover = (el) => {
    switch (el.target.id) {
      case "naver":
        setNaver(true);
        setInstagram(false);
        setYoutube(false);
        break;
      case "instagram":
        setNaver(false);
        setInstagram(true);
        setYoutube(false);
        break;
      case "youtube":
        setNaver(false);
        setInstagram(false);
        setYoutube(true);
        break;
    }
  };

  const outHover = () => {
    setNaver(true);
    setInstagram(true);
    setYoutube(true);
  };

  const goToSite = (el) => {
    switch (el.target.id) {
      case "naver":
        window.location.href = "https://www.naver.com";
        break;
      case "instagram":
        window.location.href = "https://www.instagram.com";
        break;
      case "youtube":
        window.location.href = "https://www.youtube.com";
        break;
    }
  };

  return (
    <Wrapper>
      <LinkContainer>
        {/* <Link href={"https://www.naver.com"}>NAVER BLOG↗</Link>
        <Link href={"https://www.youtube.com"}>YOUTUBE↗</Link>
        <Link href={"https://www.instagram.com"}>INSTAGRAM↗</Link> */}
        <div
          id="naver"
          onClick={goToSite}
          onMouseEnter={onHover}
          onMouseOut={outHover}
        >
          <LinkImg src={text_naver} alt="text naver" $state={naver} />
        </div>
        <div
          id="instagram"
          onClick={goToSite}
          onMouseEnter={onHover}
          onMouseOut={outHover}
        >
          <LinkImg src={text_instagram} alt="text naver" $state={instagram} />
        </div>
        <div
          id="youtube"
          onClick={goToSite}
          onMouseEnter={onHover}
          onMouseOut={outHover}
        >
          <LinkImg src={text_youtube} alt="text naver" $state={youtube} />
        </div>
      </LinkContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Link = styled.a`
  text-align: left;
  font-family: "Noto Sans KR", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 6vh;
  line-height: 1.1;
  white-space: nowrap;
`;

const LinkImg = styled.img`
  display: inline-block;
  height: 8vh;
  pointer-events: none;
  transition: all cubic-bezier(0.36, 0, 0.22, 1.17) 0.3s;
  opacity: ${(props) => (props.$state ? 1 : 0.5)};
  transform: scale(${(props) => (props.$state ? 1 : 0.9)});
`;

export default Footer;
