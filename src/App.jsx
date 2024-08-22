import React, { useState, useRef } from "react";
import Button from "./components/Button";

function App(props) {
  const [todo, update_todo] = useState("");
  const [todoos, set_todoos_arr] = useState([]);
  let inp_todo = useRef();


  const manage_add = () => {
    console.log(todo);
    set_todoos_arr([...todoos, todo]);
    console.log(todoos);
    console.log(inp_todo);
    inp_todo.value = update_todo("");
  };

  const handle_edit = (index) => {
    const updatedTodos = [...todoos];
    let update = prompt("plz enter your todo : ");

    updatedTodos[index] = update ? update : todoos[index];

    set_todoos_arr(updatedTodos);

    console.log(updatedTodos);
    console.log(updatedTodos[index]);
  };

  const handle_delete = (index) => {
    const updatedTodos = [...todoos];

    updatedTodos.splice(index, 1);

    set_todoos_arr(updatedTodos);

    console.log(updatedTodos);
  };
  return (
    <>
<h1 className="text-red-600 bg-blue-400 m-6 p-6 rounded-xl text-blue-300 font-bold transition-colors hover:bg-blue-500 duration-2000">
Todo App        <span className="text-white"><p>The best Experience for user</p></span></h1>
      <div className="flex gap-2 bg-blue-100 justify-around p-5 ">
        <input
          ref={inp_todo}
          type="text"
          className="bg-slate-400 text-white p-1/4 w-3/4 rounded outline-none p-1"
          value={todo}
          onChange={(e) => update_todo(e.target.value)}
        />
        <Button title="Add me" onClick={manage_add} />
      </div>
      <div className="m-4">
        {todoos.map((ele, index) => {
          return (
            <div
              key={index}
              className="post bg-blue-200  flex  justify-around p-4 items-center m-2 rounded border-2 border-solid border-black"
            >
              <p>{ele}</p>
              <Button title="edit" onClick={() => handle_edit(index)} />
              <Button title="delete" onClick={() => handle_delete(index)} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
