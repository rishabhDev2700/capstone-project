import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { GrAdd, GrClose } from "react-icons/gr";
import { useState, useContext } from "react";
import { TodoContext } from "../App";
export const Topbar = () => {
  const todo = useContext(TodoContext);
  const [toggle, setToggle] = useState(false);
  const [list,setList] = useState([]);
  const handleForm = (e)=>{
    e.preventDefault();
    setToggle(!toggle);
    const target = e.target;
    const data = {title:target.title.value, note: target.note.value,date:target.dateAdded.value,checked:false};
    setList([...list,data])
  }
  console.log(todo.todoList)
  useEffect(()=>{
    todo.setTodoList(list);
    console.log("topbar effect");
  },[todo,list])  
  return (
    <header className="w-full bg-violet-700 text-white flex justify-evenly items-center p-4 shadow-sm shadow-purple-800 sticky top-0">
      <div className="text-3xl font-bold">Do-Too</div>
      <nav>
        <Link className="px-2 py-1 mx-2 my-1 hover:text-slate-400" to="/">
          All Items
        </Link>
        <Link
          className="px-2 py-1 mx-2 my-1 hover:text-slate-400"
          to="/completed"
        >
          Completed
        </Link>
        <Link
          className="px-2 py-1 mx-2 my-1 hover:text-slate-400"
          to="/incomplete"
        >
          Incomplete
        </Link>
      </nav>
      {!toggle?<div
        className="rounded-full bg-white hover:bg-violet-200 ease-in-out duration-200 hover:scale-150 scale-125 p-2 cursor-pointer"
        onClick={(e) => setToggle(true)}
      >
        <GrAdd />
      </div>:<div></div>}
      <div
        className={
          toggle
            ? "translate-y-full ease-in duration-200 fixed z-50"
            : "-translate-y-96 ease-in duration-300 fixed z-50"
        }
      >
        <form className="flex flex-col p-4 bg-white text-black border-2 border-violet-400 rounded-md shadow-lg shadow-blue-900" onSubmit={e=>handleForm(e)}>
          <div className="flex justify-between items-center">
            <label className="text-center py-2 text-3xl font-light">
              New To do
            </label>
            <span
              className="mx-5 scale-150 rounded-full hover:bg-violet-600 p-2 ease-in-out duration-200"
              onClick={(e) => setToggle(false)}
            >
              <GrClose />
            </span>
          </div>
          <input
            name="title"
            className="m-2 rounded-sm focus:scale-105 ease-out duration-300"
            placeholder="Title"
            type="text"
          />
          <input
            name="dateAdded"
            className="m-2 rounded-sm focus:scale-105 ease-out duration-300"
            placeholder="Date"
            type="date"
          />
          <textarea
            name="note"
            className="m-2 rounded-sm focus:scale-105 ease-out duration-300"
            rows="8"
            cols="30"
            placeholder="Note"
          ></textarea>
          <input className="bg-violet-500 text-white border-2 border-violet-500 hover:bg-white hover:text-violet-500 p-4 m-4 ease-in-out duration-300" type="submit" value="Create"/>
        </form>
      </div>
    </header>
  );
};
