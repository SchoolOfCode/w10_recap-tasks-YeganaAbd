import "./App.css";
import Articles from "../Articles";
import Header from "../Header";
import LoginButton from "../Login";
function App() {
  return (
    <div className="App">
      <LoginButton />
      <Header htext="WikiPigeon" />
      <article className="post">
        <Articles />
      </article>
    </div>
  );
}

export default App;
