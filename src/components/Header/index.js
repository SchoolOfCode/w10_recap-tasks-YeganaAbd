import styles from "./Header.module.css";
function Header({ htext }) {
  return (
    <div className={styles.header}>
      <h1>{htext}</h1>
    </div>
  );
}

export default Header;
