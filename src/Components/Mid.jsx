import React, { useState } from "react";
import { useSelector } from "react-redux";

function Mid() {
  const todos = useSelector((state) => state.todos);
  const tasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed).length;

  return (
    <div className="min-w-96 w-1/2 h-20 flex justify-evenly  gap-8 md:h-36">
      <div className="w-2/3 h-full  rounded-2xl bg-red-200 items-center border flex justify-start ">
        <div className=" hidden h-1/2 w-20 mx-5 bg-red-800 rounded-2xl md:grid md:grid-rows-2 ">
          <div className="text-4xl text-center p-2">{new Date().getDate()}</div>
          <div className="text-md text-center p-2">
            {new Date().toLocaleString("default", { month: "long" })}
          </div>
        </div>
        <div className="hidden text-center  font- p-2 text-3xl md:block ">
          You have {tasks - completedTasks} task left for today
        </div>
        <div className="flex flex-col justify-evenly m-4 md:hidden">
          <div className=" ">Tasks left today</div>
          <div className="text-3xl">{tasks - completedTasks}</div>
        </div>
      </div>
      <div className="w-2/3 h-full rounded-2xl bg-red-200 items-center flex justify-start  border">
        <div className=" hidden h-1/2 w-20 mx-5 bg-red-800 rounded-2xl md:grid md:grid-rows-2 ">
          <div className="text-4xl text-center p-4">{completedTasks}</div>
        </div>
        <div className="hidden text-center  font- p-2 text-3xl md:block">
          Well done! {completedTasks} task completed
        </div>
        <div className="flex flex-col justify-evenly m-4 md:hidden">
          <div className=" ">Tasks completed</div>
          <div className="text-3xl">{completedTasks}</div>
        </div>
      </div>
    </div>
  );
}

export default Mid;
