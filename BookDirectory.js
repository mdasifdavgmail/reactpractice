import React, { useState } from 'react';

const BookDirectory = () => {
    const [books, setBooks] = useState('');
    const [searchTerm, setSearchTerm] = useState([]);
    const [history, setHistory] = useState([]);
    const [b,setb]=useState([]);

    const submit = () => {
        setSearchTerm(t => ([...t, books]));
        setHistory(pre => ([...pre, books]));  
        setBooks('');  
    }

    const a = history.filter(x => x.includes(books)); 
    const add=(ind)=>{
        const selectedValue = a.filter((_, index) => index === ind);
        setb(pre=>[...pre,selectedValue]);


    }

    return (
        <div>
            <input 
                type="text" 
                placeholder='enter' 
                value={books}
                onChange={(e) => setBooks(e.target.value)}
            />
            <button onClick={submit}>click me</button>
           
            {
                a.map((value, index) => (
                   
                    
                    <h1 key={index} onClick={() => add(index)}>{value}</h1>
                    
                   
                    
                ))
            }
            {
                b.map(val=>
                <h2>{val}</h2>
                )
            }
        </div>
    )
};

export default BookDirectory;
