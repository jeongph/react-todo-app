// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div>

//     </div>
//   );
// }

// export default App;

import React, {Component} from "react";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="container"> 
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
        </div>
      </div>
    )
  }
}