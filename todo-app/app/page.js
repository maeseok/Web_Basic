//이형석/60191956/기초웹 과제 #5
'use client';
import React, { useState, useRef, useCallback } from 'react';
import BasketTemplate from './BasketTemplate';
import BasketInsert from './BasketInsert';
import BasketList from './BasketList';

const App = () => {
  const [baskets, setBaskets] = useState([
    {
      id: 1,
      text: 'RTX 4070',
      checked: false,
    },
    {
      id: 2,
      text: 'i5-12400F',
      checked: true,
    },
    {
      id: 3,
      text: 'DDR4 PC4-25600',
      checked: false,
    },
    {
      id: 4,
      text: 'GTX 1060',
      checked: false,
    },
  ]);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(5);

  const onInsert = useCallback(
    (text) => {
      const basket = {
        id: nextId.current,
        text,
        checked: false,
      };
      setBaskets(baskets.concat(basket));
      nextId.current += 1; // nextId 1 씩 더하기
    },
    [baskets],
  );

  const onRemove = useCallback(
    (id) => {
      setBaskets(baskets.filter((basket) => basket.id !== id));
    },
    [baskets],
  );

  const onToggle = useCallback(
    (id) => {
      setBaskets(
        baskets.map(basket =>
          basket.id === id ? { ...basket, checked: !basket.checked } : basket,
        ),
      );
    },
    [baskets],
  );

  return (
    <BasketTemplate>
      <BasketInsert onInsert={onInsert} />
      <BasketList baskets={baskets} onRemove={onRemove} onToggle={onToggle} />
    </BasketTemplate>
  );
};

export default App;
