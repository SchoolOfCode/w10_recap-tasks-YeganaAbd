import articles from "../../libs/articles";
import Btn from "../Button";
import Comment from "../Comment";
import styles from "./Articles.module.css";

function Articles() {
  return (
    <div>
      {articles.map((item) => {
        return (
          <section className={styles.commentSection}>
            <h3>{item.title}</h3>
            <p>{item.paragraphs}</p>
            <Btn text="Like 👍" />
            {item.comments.map((comment) => {
              return <Comment comment={comment} />;
            })}
          </section>
        );
      })}
    </div>
  );
}

export default Articles;
