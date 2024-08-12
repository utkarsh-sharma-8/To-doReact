import ItemAdded from "./ItemAdded";
import styles from "./TodoItems.module.css";

const TodoItems = ({ taskName }) => {
  return (
    <div className={styles.itemsContainer}>
      {taskName.map((item) => (
        <ItemAdded todoDate={item.dueDate} todoName={item.name}></ItemAdded>
      ))}
    </div>
  );
};

export default TodoItems;