import React from "react";
import ErrorBoundry from "./ErrorBoundary";
import Person from "./Person";
import ClickCounter from "./ClickCounter";
import "./App.css";

const App = () => {
  const person = {
    firstName: "Ashish",
    lastName: "Pandey",
  };
  return (
    <div className="App">
      <ErrorBoundry>
        <Person person={person} />
        {/* <Person person={{}} /> */}

        <ClickCounter />
      </ErrorBoundry>
    </div>
  );
};

export default App;
