import styles from "./Loading.module.css";
import logo from "../assets/logo.svg";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <span></span>
        <span></span>
        <img
          src={logo}
          alt="logo"
          style={{
            display: "block",
            padding: "20px",
          }}
        />
      </div>
    </div>
  );
};

export default Loading;
