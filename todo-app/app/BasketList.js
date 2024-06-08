import React from 'react';
import BasketListItem from './BasketListItem';
import './BasketList.scss';

const BasketList = ({ baskets, onRemove, onToggle }) => {
  return (
    <div className="BasketList">
      {baskets.map(basket => (
        <BasketListItem
          basket={basket}
          key={basket.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default BasketList;
