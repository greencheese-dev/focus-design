import getImageURL from "../utils/getImageURL";
import styles from "./Project.module.css";
import styled from "styled-components";

const Project = () => {
  return (
    <div className={`flex flex-col ${styles.wrapper}`}>
      <h1 className={`mt-16 border-t border-black ${styles.header}`}>
        Project
      </h1>
    </div>
  );
};

export default Project;
