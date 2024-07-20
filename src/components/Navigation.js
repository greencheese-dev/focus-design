import { useState, useEffect } from "react";
import styled from "styled-components";
import styles from "./Navigation.module.css";
import Item from "./Navigation/Item";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { outLinkState } from "../recoil_state";

const Navigation = () => {
  const [projects, setProjects] = useState([{}]);
  const outLink = useRecoilValue(outLinkState);

  useEffect(() => {
    setProjects([
      { title: "백야", id: "temp" },
      { title: "파인애플 동산", id: "temp" },
      { title: "오늘 우리집 커피", id: "temp" },
      { title: "몬스테라 우산을 썼더니 옷이 다 젖었어", id: "temp" },
      { title: "오늘 우리집 커피", id: "temp" },
      { title: "백야", id: "temp" },
      { title: "파인애플 동산", id: "temp" },
      { title: "오늘 우리집 커피", id: "temp" },
      { title: "몬스테라 우산을 썼더니 옷이 다 젖었어", id: "temp" },
      { title: "오늘 우리집 커피", id: "temp" },
      { title: "백야", id: "temp" },
      { title: "파인애플 동산", id: "temp" },
      { title: "오늘 우리집 커피", id: "temp" },
      { title: "몬스테라 우산을 썼더니 옷이 다 젖었어", id: "temp" },
      { title: "오늘 우리집 커피", id: "temp" },
      { title: "백야", id: "temp" },
      { title: "파인애플 동산", id: "temp" },
      { title: "오늘 우리집 커피", id: "temp" },
      { title: "몬스테라 우산을 썼더니 옷이 다 젖었어", id: "temp" },
      { title: "오늘 우리집 커피", id: "temp" },
    ]);
  }, []);

  return (
    <Wrapper className={styles.wrapper}>
      <NavUl className={styles.nav_ul}>
        <NavLi key={"home"} className={styles.nav_li}>
          <NavTitle className={styles.nav_title} to={"/"}>
            <Link to={"/"}>
              <p>MENU</p>
            </Link>
          </NavTitle>
          <NavContents className={styles.nav_contents}>
            <Item text={"HOME"} link={"/"} />
            <Item text={"PROJECT"} link={"/projects"} />
            <Item text={"ABOUT"} link={"/about"} />
            <Item text={"CONTECT"} link={"/contect"} />
            <Item text={"NAVER BLOG↗"} link={outLink.naver} state={false} />
            <Item text={"YOUTUBE↗"} link={outLink.youtube} state={false} />
            <Item text={"INSTAGRAM↗"} link={outLink.instagram} state={false} />
          </NavContents>
          {/* 확장 메뉴 영역 */}
        </NavLi>
        <NavLi key={"project"} className={styles.nav_li}>
          <NavTitle className={styles.nav_title}>
            <Link to={"/projects"}>
              <p>PROJECT</p>
            </Link>
          </NavTitle>
          <NavContents className={styles.nav_contents}>
            {projects.map((project, index) => (
              <Item
                key={index}
                text={project.title}
                link={`/project/${project.id}`}
              />
            ))}
          </NavContents>
          {/* 확장 메뉴 영역 */}
        </NavLi>
        <NavLi key={"about"} className={styles.nav_li}>
          <NavTitle className={styles.nav_title}>
            <Link to={"/about"}>
              <p>ABOUT</p>
            </Link>
          </NavTitle>
        </NavLi>
        <NavLi key={"contect"} className={styles.nav_li}>
          <NavTitle className={styles.nav_title}>
            <Link to={"/contect"}>
              <p>CONTECT</p>
            </Link>
          </NavTitle>
        </NavLi>
      </NavUl>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
`;
const NavUl = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100vw;
  list-style-type: none;
`;
const NavLi = styled.li`
  width: 25%;
  font-family: "Oswald", sans-serif;
  overflow: hidden;
  font-size: 16px;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
`;
const NavTitle = styled.div`
  padding: 16px;
`;
const NavContents = styled.div`
  display: flex;
  flex-direction: column;
  visibility: hidden;
  width: 100%;
  height: 0vh;
  overflow-x: hidden;
  overflow-y: auto;
  opacity: 0;
`;

export default Navigation;
