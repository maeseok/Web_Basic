import React from 'react';
import { IoCheckmarkDone } from "react-icons/io5";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";

import cn from 'classnames';
import './BasketListItem.scss';

const BasketListItem = ({ basket, onRemove, onToggle }) => {
  const { id, text, checked } = basket;

  return (
    <div className="BasketListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <IoCheckmarkDone/> : <RiCheckboxBlankCircleLine />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdOutlineCancel />
      </div>
    </div>
  );
};

export default BasketListItem;
