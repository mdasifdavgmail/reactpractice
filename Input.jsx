import React, { useState } from "react";

const Input = () => {
    const [left, setLeft] = useState([]);
    const [right, setRight] = useState([]);
    const [text, setText] = useState('');

    const addRight = () => {
        setRight(t => [...t, text]);
        setText('')
    }

    const addLeft = () => {
        setLeft(pre => [...pre, text]);
        setText('')
    }

    return ( 
        <div className="">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={addRight}>submit</button>
            <button onClick={addLeft}>receive</button>
            <div className="s1">
            {
              
                right.map((val, index) => (
                    <h3 key={index}>{val}</h3>
                ))
                
            }</div>

            {
                left.map((val, index) => (
                    <h1 key={index}>{val}</h1>
                ))
            }
        </div>
    );
}
 
export default Input;
