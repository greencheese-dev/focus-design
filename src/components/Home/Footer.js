import styled from "styled-components";
import text_naver from "../../assets/text_naver.svg";
import text_instagram from "../../assets/text_instagram.svg";
import text_kakaobiz from "../../assets/text_kakaobiz.png";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { outLinkState } from "../../recoil_state";

const Footer = () => {
  const outLink = useRecoilValue(outLinkState);

  const [naver, setNaver] = useState(true);
  const [instagram, setInstagram] = useState(true);
  const [kakaobiz, setKakaobiz] = useState(true);

  const onHover = (el) => {
    switch (el.target.id) {
      case "naver":
        setNaver(true);
        setInstagram(false);
        setKakaobiz(false);
        break;
      case "instagram":
        setNaver(false);
        setInstagram(true);
        setKakaobiz(false);
        break;
      case "kakaobiz":
        setNaver(false);
        setInstagram(false);
        setKakaobiz(true);
        break;
    }
  };

  const outHover = () => {
    setNaver(true);
    setInstagram(true);
    setKakaobiz(true);
  };

  const goToSite = (el) => {
    switch (el.target.id) {
      case "naver":
        window.location.href = outLink.naver;
        break;
      case "instagram":
        window.location.href = outLink.instagram;
        break;
      case "kakaobiz":
        window.location.href = outLink.kakaobiz;
        break;
    }
  };

  return (
    <Wrapper>
      <LinkContainer>
        {/* <Link href={"https://www.naver.com"}>Naver Blog↗</Link>
        <Link href={"https://www.youtube.com"}>Instagram↗</Link>
        <Link href={"https://www.instagram.com"}>Kakao Biz↗↗</Link> */}
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
          id="kakaobiz"
          onClick={goToSite}
          onMouseEnter={onHover}
          onMouseOut={outHover}
        >
          <LinkImg
            src={text_kakaobiz}
            alt="text naver"
            $state={kakaobiz}
            style={{ marginLeft: "-4x" }}
          />
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
  font-family: "Montserrat", sans-serif;
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
