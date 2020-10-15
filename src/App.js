import React, {useState} from 'react';
import './App.css';

function App() {
  // state is similiar to the brains capacity to hold short term memories.
  const [toDo, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>Hello World 🚀 </h1>
      <input />
      <button>Add Todo</button>

      <ul>
        <li>Make food 🥫 </li>
        <li>Feed the fish 🐠 </li>
      </ul>

    </div>
  );
}

export default App;
