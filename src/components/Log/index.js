import LoginButton from "../Login";
import LogoutButton from "../Logout";
import Profile from "../Profile";
import styles from "./Log.module.css";

function Log() {
  return (
    <div className={styles.log}>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default Log;
