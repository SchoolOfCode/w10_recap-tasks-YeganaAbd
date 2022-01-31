import articles from "../../libs/articles";
import Button from "../Button";

function Articles() {
  return (
    <div>
      {articles.map((item) => {
        return (
          <section className="comment-section">
            <h3>{item.title}</h3>
            <p>{item.paragraphs}</p>
            <Button text="Like 👍" />
            {item.comments.map((comment) => {
              return (
                <div className="comment">
                  <h4>{comment.name} says:</h4>
                  <p>{comment.text}</p>
                </div>
              );
            })}
          </section>
        );
      })}
    </div>
  );
}

export default Articles;
