import React, { useState, useRef } from "react";
import styles from "./Contacts.module.css";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const [sender, setSender] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState({ text: "-", type: "" });
  const [messageState, setMessageState] = useState(false);

  const form = useRef();
  const handleSubmit = (e) => {
    if (sender.trim() && title.trim() && content.trim()) {
      e.preventDefault();
      emailjs
        .sendForm("greencheese.dev", "template_31wd04h", form.current, {
          publicKey: "6c151Fvasbmz0k3Wv",
        })
        .then(
          () => {
            console.log("Submitted:", { sender, title, content });
            setMessage({
              text: "작성하신 글이 정상적으로 전송되었습니다!",
              type: "success",
            });
            setMessageState(true);
            setTimeout(() => {
              setMessageState(false);
              setTimeout(() => {
                setMessage({
                  text: "-",
                  type: "",
                });
              }, 600);
            }, 3000);
            setSender("");
            setTitle("");
            setContent("");
          },
          (error) => {
            setMessage({
              text: "전송중에 문제가 발생했습니다.",
              type: "error",
            });
            console.log("FAILED...", error.text);
          }
        );
    } else {
      setMessage({
        text: "모든 내용을 작성해주세요.",
        type: "error",
      });
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles.form} ref={form}>
        <div className={styles.row}>
          <label htmlFor="title" className={styles.label}>
            Sender
          </label>
          <input
            type="text"
            id="sender"
            name="sender"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            className={styles.input}
            placeholder="연락처 또는 이메일을 작성해주세요."
            maxLength={50}
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
            placeholder="제목을 작성해주세요. (30자 이내)"
            maxLength={30}
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="content" className={styles.label}>
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.textarea}
            placeholder="여기에 문의하실 내용을 작성해주세요... (1000자 이내)"
            maxLength={1000}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          보내기
        </button>
      </form>
      {/* {message.text && ( */}
      <div
        className={`${styles.message} 
        ${message.type === "success" ? styles.success : styles.error}
        ${messageState ? "" : styles.none}
        `}
      >
        {message.text}
      </div>
      {/* )} */}
    </div>
  );
};

export default Contacts;
