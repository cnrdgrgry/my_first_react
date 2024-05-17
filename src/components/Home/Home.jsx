import styles from "./Home.module.css";
import Form from "../Form/Form";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3>An Example of using state, logic handlers, props with forms:</h3>
        <Form className={styles.form} />
      </div>
    </div>
  );
}
