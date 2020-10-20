import React, {useState} from 'react';
import Todo from './Todo';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';

function App() {
  // state is similiar to the brains capacity to hold short term memories.
  const [todos, setTodos] = useState(['Make food 🥫', 'Feed the fish 🐠', 'test 🧦 ']);
  const [input, setInput] = useState('');
  console.log('🇵🇷', input);  

  const addTodo = (event) => {
    // everytime the button is clicked this function is called
    event.preventDefault(); // stop refresh
    console.log('👾')

    setTodos([...todos, input]);
    setInput(''); // clear the input after submit
  }

  return (
    <div className="App">
      <h1>Hello World 🚀 </h1>

      <form>
        
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled={!input} type='submit' onClick={addTodo}  variant="contained" color="primary">
          Add Todo
        </Button>
        
      </form>

      <ul>
        {/* loop through the state and render new items  */}
        {todos.map(todo => (
          <Todo text={todo} />      
        ))}  
      </ul>
    </div>
  );
}

export default App;
