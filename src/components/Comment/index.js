import styles from "./Comment.module.css";
function Comment({ comment }) {
  return (
    <div>
      {" "}
      <div className={styles.comment}>
        <h4>{comment.name} says:</h4>
        <p>{comment.text}</p>
      </div>
    </div>
  );
}
export default Comment;
