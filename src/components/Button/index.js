import styles from "./Button.module.css";
import { Button } from "antd";

function Btn({ text }) {
  return (
    <div>
      <Button type="primary" className={styles.likeButton}>
        {text}
      </Button>
    </div>
  );
}
export default Btn;
