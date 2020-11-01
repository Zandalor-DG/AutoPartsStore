import React from 'react';
import { NavLink } from 'react-router-dom';
import ManufacturerDelete from './ManufacturerDelete/ManufacturerDelete';

const Manufacturer = (props) => {
  let path = '/manufacturer/' + props.id;

  return (
    <div className="autoParts">
      <NavLink to={path}>{props.modelAuto + ' '}</NavLink>
      <NavLink to={`/manufacturerUpdate/${props.id}`}>Update</NavLink>
      <ManufacturerDelete
        deleteAutoPartsCatalogManufacturer={props.deleteAutoPartsCatalogManufacturer}
      />
    </div>
  );
};

export default Manufacturer;
