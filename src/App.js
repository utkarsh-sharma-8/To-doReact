import { useState } from 'react';
import './App.css';
import AddTask from "./components/AddTask";
import AppName from "./components/AppName";
import TodoItems from './components/TodoItems';
import WelcomeMsg from './components/WelcomeMsg';

function App() {
  // const initialTodoItems = [
  //   {
  //     name:"Buy Milk",
  //     dueDate:"4/10/2023"
  //   },
  // ];
  const [todoItems,setTodoItems]=useState([]);
  const handleNewItem=(itemName,itemDueDate)=>{
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems=[...todoItems,{name: itemName,dueDate:itemDueDate}];
    setTodoItems(newTodoItems);
  }
  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems=todoItems.filter(item=>item.name!==todoItemName);
    setTodoItems(newTodoItems);
  }
  return (
    <center className="todo-container">
;
setTodoItem(newTodoItem);      <AppName />
      <AddTask onNewItem={handleNewItem}/>
      {
        todoItems.length===0?<WelcomeMsg taskName={todoItems}/>:null
      }
      
      <TodoItems taskName={todoItems} onDelete={handleDeleteItem}/>
    </center>
  );
}

export default App;
