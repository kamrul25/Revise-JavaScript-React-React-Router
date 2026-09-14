// Destructuring in React Componenets

import { useState } from "react";

// Destructuring is particularly in react for working with 
// props, hooks, API responses

// It helps make your code more concise and easier to read

function Greting({name, age}){
    return <h1> Hello, {name}! You are {age} years old.</h1>;
}

// Not using destructuring 
function greeting (props){
    return <h1> Hello, {props.name}! You are {props.age} years old.</h1>;
}

function Counter(){
    const  [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}