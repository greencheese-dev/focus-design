import styles from "./Item.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Item = ({ text, link, state = true }) => {
  return (
    <div>
      {state ? (
        <Link to={link}>
          <Div className={styles.item}>
            <span>{text}</span>
            <span>{text}</span>
            <span>{text}</span>
            <span>{text}</span>
            <span>{text}</span>
            <span>{text}</span>
          </Div>
        </Link>
      ) : (
        <a href={link}>
          <Div className={styles.item}>
            <span>{text}</span>
            <span>{text}</span>
            <span>{text}</span>
            <span>{text}</span>
            <span>{text}</span>
            <span>{text}</span>
          </Div>
        </a>
      )}
    </div>
  );
};

const Div = styled.div`
  padding: 0.08vw 0px 0.4vw 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.8vw;
  font-family: "Noto Sans KR", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 2.3vw;
  white-space: nowrap;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  &:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
`;

export default Item;
