import "./App.css";
import Articles from "../Articles";
import Header from "../Header";

function App() {
  return (
    <div className="App">
      <Header htext="WikiPigeon" />
      <article className="post">
        <Articles />
      </article>
    </div>
  );
}

export default App;
