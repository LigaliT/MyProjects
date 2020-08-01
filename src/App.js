import React, {Fragment} from 'react';
import './App.css';

//components

import InputTodo from "./Components/inputTodo";
import ListTodos from "./Components/ListTodos";
import EditTodo from "./Components/EditTodo";

function App() {
  return (
      <Fragment>
        <div className="container">
            <InputTodo/>
            <ListTodos/>
        </div>
      </Fragment>
  );
}

export default App;
