import { useState } from "react";

const AddTask = ({onNewItem}) => {
  const [data,setData]=useState("");
  const [date,setDate]=useState("");
  
  const handleInputChange=(event)=>{
    console.log(event.target.value);
    setData(event.target.value);
  }
  const handleDateChange=(event)=>{
    console.log(event.target.value);
    setDate(event.target.value);
  }
  const addButtonClicked=()=>{
    onNewItem(data,date);
    setData("");
    setDate("");
  }
  return (
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" value={data} placeholder="Enter todo here" onChange={handleInputChange}/>
          </div>
          <div className="col-4">
            <input type="date" value={date} onChange={handleDateChange} />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button" onClick={data.length!==0 ? addButtonClicked : null}>
              Add
            </button>
          </div>
        </div>
      </div>
  );
};

export default AddTask;
