import { useState } from 'react';
import './App.css';
import AddTask from "./components/AddTask";
import AppName from "./components/AppName";
import TodoItems from './components/TodoItems';

function App() {
  const initialTodoItems = [
    {
      name:"Buy Milk",
      dueDate:"4/10/2023"
    },
  ];
  const [todoItems,setTodoItems]=useState(initialTodoItems);
  const handleNewItem=(itemName,itemDueDate)=>{
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems=[...todoItems,{name: itemName,dueDate:itemDueDate}];
    setTodoItems(newTodoItems);
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTask onNewItem={handleNewItem}/>
      <div className="itemcontainer">
        <TodoItems taskName={todoItems}/>
      </div>
    </center>
  );
}

export default App;
