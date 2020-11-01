import React from 'react';

const ManufacturerDelete = (props) => {
  debugger;
  let manufacturerId = Number(props.match.params.manufacturerId);

  const onClickDeleteManufacturer = () => {
    props.deleteAutoPartsCatalogManufacturer(manufacturerId);
  };

  return (
    <div className="autoParts">
      <button onClick={onClickDeleteManufacturer}>Delete</button>
    </div>
  );
};

export default ManufacturerDelete;
