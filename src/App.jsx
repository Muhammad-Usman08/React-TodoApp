import { useState } from "react";


function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  function addTodo(event) {
    event.preventDefault();
    todo.push(text);
    setTodo([...todo]);
    setText('')
  }

  function deleteAll(){
    todo.splice(text);
    setTodo([...todo])
  }


  return (
    <>
      <h1>Todo App </h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Enter text" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Add</button>
      </form> 
        <button onClick={deleteAll}>Delete All</button>
      <ul>
        {todo.map((item, index) => {
          return <div>
            <li>{item}</li>
          </div>
        })}
      </ul>
    </>
  )
}

export default App