import React from "react";
import ErrorBoundry from "./ErrorBoundary";
import Person from "./Person";
import ClickCounter from "./ClickCounter";
import {ErrorBoundary} from 'react-error-boundary'
import "./App.css";
import Fallback from "./Fallback";

const App = () => {
  const person = {
    firstName: "Ashish",
    lastName: "Pandey",
  };

  const errorHandler =(error,errorInfo)=>{

    console.log(error, errorInfo)

  }
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent ={Fallback} onError ={errorHandler}>
        <Person person={person} />
        {/* <Person person={{}} /> */}

        <ClickCounter />
      </ErrorBoundary >
    </div>
  );
};

export default App;
