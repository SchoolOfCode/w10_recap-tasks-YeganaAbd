import styles from "./Button.module.css";
import { Button } from "antd";

function Btn({ text }) {
  return (
    <Button type="primary" className={styles.likeButton}>
      {text}
    </Button>
  );
}
export default Btn;
