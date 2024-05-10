import styles from "./Home.module.css";
import Form from "../Form/Form";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3>An Example of using Hooks and Forms:</h3>
        <Form />
      </div>
    </div>
  );
}
