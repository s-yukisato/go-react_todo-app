import React from 'react';
import './App.css';
import {Header} from './components/Header'
import { TodoList } from './components/TodoList';

const todos = [
  {title: "Do dishes", description: "$8", isConpleted: true},
  {title: "Homework", description: "History project", isConpleted: false}
]

function App() {
  return (
    <div className="App">
        <Header />
        <TodoList todos={todos} />
    </div>
  );
}

export default App;
