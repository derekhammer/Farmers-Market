import React from 'react';

function Item(props) {
  return (
    <li className="list-group-item py-2">{props.name}</li>
  );
}

export default Item;