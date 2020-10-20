import React, {useState, useEffect} from 'react';
import Todo from './Todo';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  // state is similiar to the brains capacity to hold short term memories.
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  console.log('🇵🇷', input); 

  // when the app loads, we need to listen to the database and fetch new todos as they get added or removed
  useEffect(() => {
    // when applicationCache.js loads this code runs 
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = (event) => {
    // everytime the button is clicked this function is called
    event.preventDefault(); // stop refresh

    db.collection('todos').add({
      todo: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })

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
