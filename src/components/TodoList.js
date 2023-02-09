import React, { useContext } from "react";
import { Todo } from "./Todo";
import { Title } from "./Title";
import { TodoContext } from "../App";
export const TodoList = () => {
  const todo = useContext(TodoContext);
  const items = todo.todoList.map((item,index)=><Todo
        key={index.toString()}
        title={item.title}
        note={item.note}
        date={item.date}
      />
  );

  return (
    <>
      <Title>All Items</Title>
      <div className="flex flex-col items-center -my-12 p-12 overflow-y-auto h-screen">
        {items}
      </div>
    </>
  );
};
