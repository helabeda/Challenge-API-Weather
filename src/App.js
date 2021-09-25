import React from 'react';
import './App.css';
import { Switch, Route} from "react-router-dom";
import Weather from "./Components/Weather/Weather";

function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/" exact component={Weather}/>
    </Switch>
    </div>
  );
}

export default App;
