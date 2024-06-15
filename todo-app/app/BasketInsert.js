'use client';
import React, { useState, useCallback } from 'react';
import { TbSquareRoundedPlus } from "react-icons/tb";
import './BasketInsert.scss';

const BasketInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue(''); // value 값 초기화

      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="BasketInsert" onSubmit={onSubmit}>
      <input
        placeholder="사고 싶은 물건을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <TbSquareRoundedPlus />
      </button>
    </form>
  );
};

export default BasketInsert;
