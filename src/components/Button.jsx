import React from "react"; 

const Button = (props) => {
  return (
    <button onClick={props.onClick} className="bg-red-400 rounded p-2 text-red-900 font-bold">
      {props.title ? props.title : "hello guys"} 
    </button>
  );
};

export default Button;
