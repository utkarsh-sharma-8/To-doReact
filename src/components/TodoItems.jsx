import ItemAdded from "./ItemAdded";
import styles from "./TodoItems.module.css";

const TodoItems = ({ taskName ,onDelete}) => {
  return (
    <div className={styles.itemsContainer}>
      {taskName.map((item) => (
        <ItemAdded todoDate={item.dueDate} todoName={item.name} onDelete={onDelete}></ItemAdded>
      ))}
    </div>
  );
};

export default TodoItems;