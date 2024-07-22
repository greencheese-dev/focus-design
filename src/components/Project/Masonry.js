import { useRecoilState } from "recoil";
import { projectsState } from "../../recoil_db";
import styles from "./Masonry.module.css";

const Masonry = () => {
  const [projects, setProjects] = useRecoilState(projectsState);

  return (
    <div>
      <div className={styles.wrapper}>
        {projects.map((item, index) => (
          <figure className={styles.item} key={index}>
            <div className={styles.textwrapper}>
              <div data-hover={item.title}>
                <span className={styles.title}>{item.title}</span>
              </div>
              <div data-hover={item.desc}>
                <span className={styles.desc}>{item.desc}</span>
              </div>
            </div>
            <img
              className={styles.bgimg}
              src={item.media}
              alt={`${item.title}: ${item.desc}`}
            />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Masonry;
