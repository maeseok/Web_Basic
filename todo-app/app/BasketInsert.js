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

      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위하여 이 함수를 호출합니다.
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
