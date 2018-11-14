import React from 'react';
import Item from './Item';

function Fruit(props) {
  var fruitList = props.list;

  return (
    <div>
      <h3>Fruits</h3>
      <ul className="list-group mb-3">
        {fruitList.map((fruit, index) =>
          <Item name={fruit} key={index}/>
        )}
      </ul>
    </div>
  );
}

export default Fruit;