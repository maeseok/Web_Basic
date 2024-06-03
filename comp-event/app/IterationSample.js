'use client';
import React, {useState} from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        {id:1, text:"여름"},
        {id:2, text:"바다"},
        {id:3, text:"파도"},
        {id:4, text:"아이스크림"}
    ]);
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5);
    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
        id: nextId,         // nextId를 id로 설정
        text: inputText,
        });    
    setNextId(nextId + 1); // nextId 값을 1 더함
    setNames(nextNames);   // names 값을 갱신
    setInputText(""); 
    };
    const onRemove = (id) => {
        const nextNames = names.filter((name) => name.id !== id);
        setNames(nextNames);
    };
    const nameList = names.map((name)=> <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}</li>)
    return(
        <>
            <input type="text" value={inputText}
            onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    );

};
export default IterationSample;