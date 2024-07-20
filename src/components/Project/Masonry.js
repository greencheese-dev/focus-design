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
              <span>{item.title}</span>
              <span>{item.desc}</span>
            </div>
            <img src={item.media} alt={`${item.title}: ${item.desc}`} />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Masonry;
