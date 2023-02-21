import React, {ChangeEvent, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Status, Todo} from "./model/ToDo";
import axios from "axios";
import {ToDoBoardGallery} from "./component/ToDoBoardGallery";





function App() {

  const [todolist, setTodos] = useState<Todo[]>([]);
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    axios.get('/api/todo').then((response) => {

    // const cards:Todo[] = response.data.map((data:any) => { return data })
      setTodos(response.data)

    }).then((error) => {
      console.error(error)
    })
  }, [])

  function onChangeDesc(props: ChangeEvent<HTMLInputElement>){
    setDescription(props.currentTarget.value);
  }


  function addTodo(){

  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>Fancy cool Kanban-Board</h1>
        <form onSubmit={addTodo}>
          <input onChange={onChangeDesc}/>
          <button>ADD</button>
        </form>
        <ToDoBoardGallery todoList={todolist}/>
      </header>


    </div>
  );
}

export default App;
