import React, { useContext } from "react";
import { Todo } from "./Todo";
import { Title } from "./Title";
import { TodoContext } from "../App";
export const TodoList = () => {
  const todo = useContext(TodoContext);
  const removeTodo = (uid) => {
    console.log("clicked delete for:" + uid);
    const temp = [...todo.todoList];
    temp.splice(uid, 1);
    console.log(temp);
    todo.setTodoList(temp);
  };

  const items = todo.todoList.map((item, index) => (
    <Todo
      uid={index}
      key={index.toString()}
      title={item.title}
      note={item.note}
      date={item.date}
      remove={removeTodo}
    />
  ));

  return (
    <>
      <Title>All Items</Title>
      <div className="flex flex-col items-center -my-12 p-12 overflow-y-auto h-full">
        {items}
      </div>
    </>
  );
};
