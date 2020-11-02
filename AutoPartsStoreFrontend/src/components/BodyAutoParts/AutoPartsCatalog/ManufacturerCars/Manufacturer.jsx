import React from 'react';
import { NavLink } from 'react-router-dom';
import ManufacturerDelete from './ManufacturerDelete/ManufacturerDelete';

const Manufacturer = (props) => {
  let path = '/manufacturer/' + props.id;

  return (
    <div className="autoParts">
      <NavLink key={props.id} to={path}>
        {props.modelAuto + ' '}
      </NavLink>
      <NavLink to={`/manufacturerUpdate/${props.id}`}>Update</NavLink>
      <ManufacturerDelete
        {...props}
        manufacturerId = {props.id}
        deleteAutoPartsCatalogManufacturer={props.deleteAutoPartsCatalogManufacturer}
      />
    </div>
  );
};

export default Manufacturer;
