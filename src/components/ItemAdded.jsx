// const ItemAdded = ({taskName,taskDate}) => {
//   return (
//       <div className="container">
//         <div className="row kg-row">
//           <div className="col-6">{taskName}</div>
//           <div className="col-4">{taskDate}</div>
//           <div className="col-2">
//             <button type="button" className="btn btn-danger kg-button">
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//   );
// };
// export default ItemAdded;
function ItemAdded({ todoName,todoDate,onDelete }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDelete(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemAdded;