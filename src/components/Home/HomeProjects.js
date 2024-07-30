import { useEffect, useState } from "react";
import styled from "styled-components";
import * as images from "../../recoil_db";
import { useRecoilValue } from "recoil";
import getImageURL from "../../utils/getImageURL";
import styles from "./HomeProjects.module.css";

const HomeProjects = () => {
  const [lefts, setLefts] = useState([{}]);
  const [centers, setCenters] = useState([{}]);
  const [rights, setRights] = useState([{}]);

  const projectsLeft = useRecoilValue(images.projectsLeftState);
  const projectsCenter = useRecoilValue(images.projectsCenterState);
  const projectsRight = useRecoilValue(images.projectsRightState);

  return (
    <Wrapper>
      <WrapA className={styles.wrapper}>
        {projectsLeft.map((item, index) => (
          <Item
            className={styles.item}
            key={index}
            $height={"15vw"}
            $media={item.media}
          >
            <div className={styles.textwrapper}>
              <div data-hover={item.title}>
                <span className={styles.title}>{item.title}</span>
              </div>
              <div data-hover={item.desc}>
                <span className={styles.desc}>{item.desc}</span>
              </div>
            </div>
            <img src={item.media} alt={`${item.title}: ${item.desc}`} />
          </Item>
        ))}
      </WrapA>
      <WrapA className={styles.wrapper}>
        {projectsCenter.map((item, index) => (
          <Item
            className={styles.item}
            key={index}
            $height={item.height}
            $media={item.media}
          >
            <div className={styles.textwrapper}>
              <div data-hover={item.title}>
                <span className={styles.title}>{item.title}</span>
              </div>
              <div data-hover={item.desc}>
                <span className={styles.desc}>{item.desc}</span>
              </div>
            </div>
            <img src={item.media} alt={`${item.title}: ${item.desc}`} />
          </Item>
        ))}
      </WrapA>
      <WrapB className={styles.wrapper}>
        {projectsRight.map((item, index) => (
          <Item
            className={styles.item}
            key={index}
            $height={item.height}
            $media={item.media}
          >
            <div className={styles.textwrapper}>
              <div data-hover={item.title}>
                <span className={styles.title}>{item.title}</span>
              </div>
              <div data-hover={item.desc}>
                <span className={styles.desc}>{item.desc}</span>
              </div>
            </div>
            <img src={item.media} alt={`${item.title}: ${item.desc}`} />
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
export default HomeProjects;
