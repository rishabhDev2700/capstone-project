import React from "react";
import { Todo } from "./Todo";
import { Title } from "./Title";
export const TodoList = () => {
  const list = [
    {
      title: "Complete Todo",
      note: "Complete the capstone project",
      date: new Date("12 January 2023"),
      done: false,
    },
    {
      title: "Complete Todo",
      note: "Complete the capstone project",
      date: new Date("12 January 2023"),
      done: true,
    },
  ];
  const items = list.map((item, index) => (
    <Todo
      key={index.toString()}
      title={item.title}
      note={item.note}
      date={item.date}
      done={item.done}
    />
  ));
  return (
    <>
      <Title>All Items</Title>
      <div className="flex flex-col items-center -my-12 p-12 overflow-y-auto h-screen">
        {items}
      </div>
    </>
  );
};
