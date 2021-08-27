import React, { Component } from "react";
import "../styles/App.less";

class App extends Component {
  render() {
    return (
      <div className="header">
        <h1>My React App!</h1>
        <button>hi</button>
        <ul>
          <li>Чебурашка</li>
          <li>Крокодил Гена</li>
          <li>Шапокляк</li>
        </ul>
        <div className="class">my name is Vika</div>
        <a href="/"> visit it</a>
        <div className="button">press me</div>
        <div className="page">
          <div className="val">ich liebe Deutch gern</div>
        </div>
      </div>
    );
  }
}

export default App;
