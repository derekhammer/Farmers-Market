import React from 'react';
import Item from './Item';

function Vegetable(props) {
  var vegetableList = props.list;
  
  return (
    <div>
      <h3>Vegetable</h3>
      <ul className="list-group mb-3">
        {vegetableList.map((vegetable, index) =>
          <Item name={vegetable} key={index}/>
        )}
      </ul>
    </div>
  );
}

export default Vegetable;