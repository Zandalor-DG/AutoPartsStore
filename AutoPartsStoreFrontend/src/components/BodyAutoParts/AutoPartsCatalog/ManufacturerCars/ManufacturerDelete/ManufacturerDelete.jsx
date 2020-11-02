import React from 'react';

const ManufacturerDelete = (props) => {

  let manufacturerId = props.manufacturerId;

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
