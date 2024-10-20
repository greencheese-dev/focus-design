import styles from "./Contact.module.css";

import Contacts from "../components/Contact/Contacts";

const contact = () => {
  return (
    <div className={`flex flex-col content-start ${styles.wrapper}`}>
      <h1
        className={`border-t-2 border-b border-black text-left pb-2 ${styles.header}`}
      >
        contact.
      </h1>
      <Contacts />
    </div>
  );
};

export default contact;
