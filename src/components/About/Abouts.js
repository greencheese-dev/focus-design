import { useEffect, useState } from "react";
import styled from "styled-components";

const Projects = () => {
  const [lefts, setLefts] = useState([{}]);
  const [centers, setCenters] = useState([{}]);
  const [rights, setRights] = useState([{}]);

  useEffect(() => {
    setLefts([
      {
        title: "타코",
        addr: "동명동",
        media:
          "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRuFK3SavTtXFR_6zEeljHWYn5aqxV95egJ6yzgPEUeO3zLf9lq1_urz1Zn5ChOF-Jb",
      },
      {
        title: "타코",
        addr: "동명동",
        media:
          "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRuFK3SavTtXFR_6zEeljHWYn5aqxV95egJ6yzgPEUeO3zLf9lq1_urz1Zn5ChOF-Jb",
      },
      {
        title: "타코",
        addr: "동명동",
        media:
          "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRuFK3SavTtXFR_6zEeljHWYn5aqxV95egJ6yzgPEUeO3zLf9lq1_urz1Zn5ChOF-Jb",
      },
      {
        title: "타코",
        addr: "동명동",
        media:
          "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRuFK3SavTtXFR_6zEeljHWYn5aqxV95egJ6yzgPEUeO3zLf9lq1_urz1Zn5ChOF-Jb",
      },
    ]);
    setCenters([
      {
        title: "타코",
        addr: "동명동",
        media:
          "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRuFK3SavTtXFR_6zEeljHWYn5aqxV95egJ6yzgPEUeO3zLf9lq1_urz1Zn5ChOF-Jb",
      },
      {
        title: "타코",
        addr: "동명동",
        media:
          "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRuFK3SavTtXFR_6zEeljHWYn5aqxV95egJ6yzgPEUeO3zLf9lq1_urz1Zn5ChOF-Jb",
      },
      {
        title: "타코",
        addr: "동명동",
        media:
          "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRuFK3SavTtXFR_6zEeljHWYn5aqxV95egJ6yzgPEUeO3zLf9lq1_urz1Zn5ChOF-Jb",
      },
    ]);
    setRights([
      {
        title: "타코",
        addr: "동명동",
        media:
          "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRuFK3SavTtXFR_6zEeljHWYn5aqxV95egJ6yzgPEUeO3zLf9lq1_urz1Zn5ChOF-Jb",
      },
      {
        title: "타코",
        addr: "동명동",
        media:
          "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRuFK3SavTtXFR_6zEeljHWYn5aqxV95egJ6yzgPEUeO3zLf9lq1_urz1Zn5ChOF-Jb",
      },
    ]);
  }, []);

  return (
    <Wrapper>
      <WrapA>
        {lefts.map((item, index) => (
          <Item key={index} $height={"40vw"} $media={item.media}>
            <Title>{item.title}</Title>
            <Addr>{item.addr}</Addr>
          </Item>
        ))}
      </WrapA>
      <WrapA>
        {centers.map((item, index) => (
          <Item key={index} $height={"30vw"} $media={item.media}>
            <Title>{item.title}</Title>
            <Addr>{item.addr}</Addr>
          </Item>
        ))}
      </WrapA>
      <WrapB>
        {rights.map((item, index) => (
          <Item key={index} $height={"50vw"} $media={item.media}>
            <Title>{item.title}</Title>
            <Addr>{item.addr}</Addr>
          </Item>
        ))}
      </WrapB>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 3.9vh;
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

  border-top: 1px solid black;
  border-right: 2px solid black;
  border-left: 2px solid black;
  border-bottom: 1px solid black;

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
export default Projects;
