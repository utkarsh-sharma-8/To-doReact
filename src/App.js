import './App.css';
import AddTask from "./components/AddTask";
import AppName from "./components/AppName";
import ItemAdded from "./components/ItemAdded";

function App() {
  return (
    <center class="todo-container">
      <AppName/>
      <AddTask/>
      <div className="itemcontainer">
        <ItemAdded/>
      </div>
    </center>
  );
}

export default App;
