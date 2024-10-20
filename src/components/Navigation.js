import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import styles from "./Navigation.module.css";
import Item from "./Navigation/Item";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { outLinkState } from "../recoil_state";

const Navigation = () => {
  const [projects, setProjects] = useState([{}]);
  const outLink = useRecoilValue(outLinkState);

  const [isMenuHovered, setIsMenuHoverd] = useState(false);
  const [isProjectHovered, setIsProjectHoverd] = useState(false);
  const [isAboutHovered, setIsAboutHoverd] = useState(false);
  const [isContectHovered, setIsContectHoverd] = useState(false);
  const handleMouseOver = useCallback((target) => {
    switch (target) {
      case "menu":
        setIsMenuHoverd(true);
        break;
      case "project":
        setIsProjectHoverd(true);
        break;
      case "about":
        setIsAboutHoverd(true);
        break;
      case "contact":
        setIsContectHoverd(true);
        break;
      default:
        console.log("error: Invalid navigation key.");
        break;
    }
  }, []);
  const handleMouseOut = useCallback((target) => {
    switch (target) {
      case "menu":
        setIsMenuHoverd(false);
        break;
      case "project":
        setIsProjectHoverd(false);
        break;
      case "about":
        setIsAboutHoverd(false);
        break;
      case "contact":
        setIsContectHoverd(false);
        break;
      default:
        console.log("error: Invalid navigation key.");
        break;
    }
  }, []);
  const handleClick = useCallback(() => {
    setIsMenuHoverd(false);
    setIsProjectHoverd(false);
    setIsAboutHoverd(false);
    setIsContectHoverd(false);
  }, []);

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
          <NavTitle
            onMouseOver={() => handleMouseOver("menu")}
            onMouseOut={() => handleMouseOut("menu")}
            onClick={handleClick}
            className={`${styles.nav_title} ${
              isMenuHovered ? styles.nav_title_hover : ""
            }`}
            to={"/"}
          >
            <Link to={"/"}>
              <p>MENU</p>
            </Link>
          </NavTitle>
          <NavContents
            onMouseOver={() => handleMouseOver("menu")}
            onMouseOut={() => handleMouseOut("menu")}
            onClick={handleClick}
            className={`${styles.nav_contents} ${
              isMenuHovered ? styles.nav_contents_hover : ""
            }`}
          >
            <Item text={"HOME"} link={"/"} />
            <Item text={"PROJECT"} link={"/projects"} />
            <Item text={"ABOUT"} link={"/about"} />
            <Item text={"CONTECT"} link={"/contect"} />
            <Item text={"NAVER BLOG↗"} link={outLink.naver} state={false} />
            <Item text={"INSTAGRAM↗"} link={outLink.instagram} state={false} />
            <Item text={"KAKAO Biz↗"} link={outLink.kakaobiz} state={false} />
          </NavContents>
          {/* 확장 메뉴 영역 */}
        </NavLi>
        <NavLi key={"project"} className={styles.nav_li}>
          <NavTitle
            onMouseOver={() => handleMouseOver("project")}
            onMouseOut={() => handleMouseOut("project")}
            onClick={handleClick}
            className={`${styles.nav_title} ${
              isProjectHovered ? styles.nav_title_hover : ""
            }`}
          >
            <Link to={"/projects"}>
              <p>PROJECT</p>
            </Link>
          </NavTitle>
          <NavContents
            onMouseOver={() => handleMouseOver("project")}
            onMouseOut={() => handleMouseOut("project")}
            onClick={handleClick}
            className={`${styles.nav_contents} ${
              isProjectHovered ? styles.nav_contents_hover : ""
            }`}
          >
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
        <NavLi
          key={"about"}
          onMouseOver={() => handleMouseOver("about")}
          onMouseOut={() => handleMouseOut("about")}
          onClick={handleClick}
          className={`${styles.nav_li} ${
            isAboutHovered ? styled.nav_title_hover : ""
          }`}
        >
          <NavTitle
            onMouseOver={() => handleMouseOver("about")}
            onMouseOut={() => handleMouseOut("about")}
            onClick={handleClick}
            className={`${styles.nav_contents} ${
              isAboutHovered ? styled.nav_contents_hover : ""
            }`}
          >
            <Link to={"/about"}>
              <p>ABOUT</p>
            </Link>
          </NavTitle>
        </NavLi>
        <NavLi
          key={"contect"}
          onMouseOver={() => handleMouseOver("contact")}
          onMouseOut={() => handleMouseOut("contact")}
          onClick={handleClick}
          className={`${styles.nav_li} ${
            isContectHovered ? styled.nav_title_hover : ""
          }`}
        >
          <NavTitle
            onMouseOver={() => handleMouseOver("contact")}
            onMouseOut={() => handleMouseOut("contact")}
            onClick={handleClick}
            className={`${styles.nav_contents} ${
              isContectHovered ? styled.nav_contents_hover : ""
            }`}
          >
            <Link to={"/contact"}>
              <p>CONTACT</p>
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
