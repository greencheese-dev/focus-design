import styles from "./Home.module.css";
import NameBox from "../components/Home/NameBox";
import HomeProjects from "../components/Home/HomeProjects";

const Home = () => {
  return (
    <div className={styles.wrap}>
      <NameBox text={"FOCUS"} acc={15} />
      <NameBox text={"DESIGN"} acc={5} />

      <HomeProjects />
    </div>
  );
};

export default Home;
