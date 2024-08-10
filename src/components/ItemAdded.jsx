const ItemAdded = () => {
    let taskName='Buy Milk';
    let taskDate='14/08/2024';
  return (
      <div class="container">
        <div class="row kg-row">
          <div class="col-6">{taskName}</div>
          <div class="col-4">{taskDate}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
      </div>
  );
};

export default ItemAdded;
