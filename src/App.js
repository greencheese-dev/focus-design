import "./App.css";
import { useEffect, Suspense, lazy } from "react";
import { useSetRecoilState } from "recoil";
import { scrollYState, delayedScrollYState } from "./recoil_state";
import logo from "./assets/logo.svg";
import styled from "styled-components";

// static component
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";

// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import ScrollToTop from "./utils/ScrollToTop";

//component
import Email from "./components/Home/Email";
import Footer from "./components/Home/Footer";

//lazy-loading 적용
const Project = lazy(() => import("./routes/Project"));
const Projects = lazy(() => import("./routes/Projects"));
const About = lazy(() => import("./routes/About"));
const Contact = lazy(() => import("./routes/Contact"));

let scrollY = 0;
let delayedScrollY = 0;
let acc = 0.1;
let rafId = null;
let rafState = false;

const App = () => {
  // 부드러운 감속 관련 변수
  const setScrollY = useSetRecoilState(scrollYState);
  const setDelayedScrollY = useSetRecoilState(delayedScrollYState);

  const loop = () => {
    delayedScrollY = delayedScrollY + (scrollY - delayedScrollY) * acc;
    setDelayedScrollY(delayedScrollY);
    rafId = requestAnimationFrame(loop);
    if (Math.abs(scrollY - delayedScrollY) < 1) {
      cancelAnimationFrame(rafId);
      rafState = false;
    }
  };
  // useEffect 등록을 위함
  // const onScroll = () => {
  //   scrollY = window.scrollY;
  //   setScrollY(scrollY);
  // };

  // 부드러운 스크롤을 위한 감속기능(delayScrollY)
  useEffect(() => {
    const handleScroll = () => {
      // onScroll();
      scrollY = window.scrollY;
      setScrollY(scrollY);
      if (!rafState) {
        rafId = requestAnimationFrame(loop);
        rafState = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loading />}>
          <Logo
            src={logo}
            alt="logo"
            style={{ display: "block", zIndex: "100" }}
          />
          <ScrollToTop />
          <Navigation />
          <header>
            <a className="App-header" href="https://www.focusdesign.co.kr">
              Focus Design
            </a>
          </header>
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/project/:id">
              <Project />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Email text={"focusDesign@gmail.com"} />
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
};

const Logo = styled.img`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 8vw;
  height: 8vw;
  pointer-events: none;
`;

export default App;
