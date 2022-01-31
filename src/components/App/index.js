import "./App.css";
import Articles from "../Articles";
import Header from "../Header";
import LoginButton from "../Login";
import LogoutButton from "../Logout";
import Profile from "../Profile";

function App() {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
      <Header htext="WikiPigeon" />
      <article className="post">
        <Articles />
      </article>
    </div>
  );
}

export default App;
