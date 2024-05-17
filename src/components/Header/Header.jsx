import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.wrapper}>
      <h1>Playing in React</h1>
      <h2>State, Effect & Redux</h2>
    </div>
  );
}

export default Header;
