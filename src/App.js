import React from "react";
import './App.css';
import UserData from "./components/userData";
import UserDestination from "./components/local";

function App() {



  return (
    <div className="App">

      <div className="container">
        <UserData></UserData>
        <UserDestination></UserDestination>

        <button>ENVIAR</button>
      </div>

    </div>
  );
}

export default App;
