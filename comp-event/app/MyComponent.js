import React from 'react';
import PropTypes from 'prop-types';

const MyComponent=({name,favoriteNumber,children}) =>{
    return (
        <div>
            나의 첫번째 멋진 컴포넌트 {name}
            <br />
            children 값은 {children}입니다.
            <br />
            숫자는 {favoriteNumber}입니다.
        </div>
    );
};

MyComponent.defaultProps={
    name:PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent