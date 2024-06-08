import React from 'react';
import './BasketTemplate.scss';

const BasketTemplate = ({ children }) => {
  return (
    <div className="BasketTemplate">
      <div className="app-title">장바구니</div>
      <div className="content">{children}</div>
      <footer className="footer">
        <p>이형석/60191956/기초웹 과제 #5</p>
      </footer>
    </div>
  );
};

export default BasketTemplate;
