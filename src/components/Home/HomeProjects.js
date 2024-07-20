import { useEffect, useState } from "react";
import styled from "styled-components";
import * as images from "../../recoil_db";
import { useRecoilValue } from "recoil";
import getImageURL from "../../utils/getImageURL";

const HomeProjects = () => {
  const [lefts, setLefts] = useState([{}]);
  const [centers, setCenters] = useState([{}]);
  const [rights, setRights] = useState([{}]);

  const projectsLeft = useRecoilValue(images.projectsLeftState);
  const projectsCenter = useRecoilValue(images.projectsCenterState);
  const projectsRight = useRecoilValue(images.projectsRightState);

  return (
    <Wrapper>
      <WrapA>
        {projectsLeft.map((item, index) => (
          <Item key={index} $height={"15vw"} $media={item.media}>
            <Title>{item.title}</Title>
            <Addr>{item.desc}</Addr>
          </Item>
        ))}
      </WrapA>
      <WrapA>
        {projectsCenter.map((item, index) => (
          <Item key={index} $height={item.height} $media={item.media}>
            <Title>{item.title}</Title>
            <Addr>{item.desc}</Addr>
          </Item>
        ))}
      </WrapA>
      <WrapB>
        {projectsRight.map((item, index) => (
          <Item key={index} $height={item.height} $media={item.media}>
            <Title>{item.title}</Title>
            <Addr>{item.desc}</Addr>
          </Item>
        ))}
      </WrapB>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 3.9vh;
  border-top: 1px solid black;
  border-bottom: 2px solid black;
  width: 100vw;
`;

const WrapA = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(230, 230, 230);
  width: 25%;
`;
const WrapB = styled.div`
  display: flex;
  flex-direction: column;

  background-color: rgba(230, 230, 230);
  width: 50%;
`;
const Item = styled.div.attrs((props) => ({
  style: {
    height: props.$height,
    backgroundImage: `URL(${props.$media})`,
  },
}))`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  font-family: "Nanum Gothic Coding", monospace;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid black;
  background-size: cover;
  background-position: center;
`;

const Title = styled.span.attrs((props) => ({}))`
  padding: 1rem 0 0 1rem;
  line-height: 1.2;
`;
const Addr = styled.span.attrs((props) => ({}))`
  padding: 0 0 0 1rem;
`;
export default HomeProjects;
