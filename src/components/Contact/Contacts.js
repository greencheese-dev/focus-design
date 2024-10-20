import React, { useState } from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
  const [title, setTitle] = useState("");
  const [sender, setSender] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      console.log("Submitted:", { title, content });
      setMessage({ text: "Your writing has been sent!", type: "success" });
      setTitle("");
      setContent("");
    } else {
      setMessage({
        text: "Please fill in both the title and content.",
        type: "error",
      });
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="title" className={styles.label}>
            Sender
          </label>
          <input
            type="text"
            id="sender"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            className={styles.input}
            placeholder="연락처 또는 이메일을 작성해주세요."
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
            placeholder="제목을 작성해주세요."
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="content" className={styles.label}>
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.textarea}
            placeholder="여기에 문의하실 내용을 작성해주세요..."
          />
        </div>
        <button type="submit" className={styles.button}>
          보내기
        </button>
      </form>
      {message.text && (
        <div
          className={`${styles.message} ${
            message.type === "success" ? styles.success : styles.error
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default Contacts;
