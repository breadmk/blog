import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import CardBar from "./components/CardBar";
import Footer from "./components/Footer";
import JoinForm from "./components/JoinForm";
import LoginForm from "./components/LoginForm";
import NaviBar from "./components/NaviBar";
import { Call } from "../src/ApiService";
import WriteForm from "./components/WriteForm";

function App() {
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("/blog/api/hello")
  //     .then((response) => response.text())
  //     .then((message) => {
  //       console.log(message);
  //       setMessage(message);
  //     });
  // }, []);
  // console.log(Call("/"));

  return (
    <div className="App">
      {/* <RichTextEditor></RichTextEditor> */}
      <Route component={NaviBar}></Route>
      <Route path="/" exact={true} component={CardBar} />
      <Route path="/auth/loginForm" exact={true} component={LoginForm} />
      <Route path="/auth/joinForm" exact={true} component={JoinForm} />
      <Route path="/board/form" exact={true} component={WriteForm} />
      <Footer></Footer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{message}</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p> */}
    </div>
  );
}

export default App;
