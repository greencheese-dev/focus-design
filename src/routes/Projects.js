import getImageURL from "../utils/getImageURL";
import styles from "./Projects.module.css";
import Masonry from "../components/Project/Masonry";
import { useState } from "react";

const Projects = () => {
  const [masonry, setMasonry] = useState([
    {
      title: "title",
      desc: "desc",
      media: "",
    },
  ]);

  return (
    <div className={`flex flex-col content-start ${styles.wrapper}`}>
      <h1
        className={`border-t-2 border-b border-black text-left pb-2 ${styles.header}`}
      >
        Projects.
      </h1>
      <Masonry />
    </div>
  );
};

export default Projects;
