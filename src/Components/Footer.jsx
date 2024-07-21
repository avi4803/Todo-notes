import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  completedTodo,
  removeTodo,
  updateTodoText,
} from "../Features/Todo/TodoSlice";

//configuring edit button//

//Template for notes
const BasicNote = ({ text, noteId, creationTime }) => {
  const dispatch = useDispatch();

  //configuring checkbox
  const [isChecked, setIsChecked] = useState(false);
  const todos = useSelector((state) => state.todos);

  const handleComplete = () => {
    setIsChecked(!isChecked);
    dispatch(completedTodo(noteId));
  };
  //configuring checkbox end

  //configuring edit button//
  //configuring edit button//

  const handleEdit = (noteId) => {
    const note = document.getElementById(noteId);
    if (note) {
      const text = note.innerText;
      note.innerHTML = `
            <input
                type="text"
                value="${text}"
                class="outline-none bg-orange-200 rounded-lg px-2 py-1 max-w-full"
            />
        `;
      const input = note.querySelector("input");
      input.focus();
      input.addEventListener("blur", () => {
        const updatedText = input.value;
        dispatch(updateTodoText({ id: noteId, updatedText }));
        // Dispatch an action to update the todo text in the Redux store
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          input.blur();
        }
      });
    }
  };

  //configuring edit button end//
  //configuring edit button end//

  //function for breakthrough of notes
  const handleFade = () => {
    const doneEffects = (note) => {
      note.style.textDecoration = "line-through";
      note.style.opacity = 0.6;
    };

    const restoreEffects = (note) => {
      note.style.textDecoration = "none";
      note.style.opacity = 1;
    };

    todos.forEach((todo) => {
      const note = document.getElementById(todo.id);
      if (note) {
        if (todo.completed) {
          doneEffects(note);
        } else {
          restoreEffects(note);
        }
      }
    });
  };

  useEffect(() => {
    handleFade();
  }, [todos]);
  //function for breakthrough of notes end

  return (
    <>
      <div className="lg:self-center ">
        <div className=" bg-orange-200  rounded-2xl p-6 mx-10 text-sm flex justify-evenly  hover:shadow-lg  lg:min-w-[950px] ">
          <input
            type="checkbox"
            id="custom-checkbox"
            className="cursor-pointer mr-4 self-center  size-10"
            checked={isChecked}
            onChange={handleComplete}
          />
          <div className="w-3/5">
            {creationTime}
            <div id={noteId} className="text-2xl break-words">
              {text}
            </div>
          </div>
          <div className="flex">
            <button
              onClick={() => handleEdit(noteId)}
              className="border border-gray-500 hover:border-none min-h-10 place-self-center cursor-pointer px-2 m-2 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(removeTodo(noteId))}
              className="border border-gray-500 hover:border-none min-h-10 place-self-center cursor-pointer px-2 m-2 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
//Template for notes end

function Footer() {
  const todos = useSelector((style) => style.todos);
  console.log(todos);

  return (
    <>
      <div className="flex flex-col w-full min-h-[24.7em] my-6 rounded-t-[50px] md:rounded-t-[100px] gap-4">
        {todos.map((todo) => (
          <BasicNote
            key={todo.id}
            text={todo.text}
            noteId={todo.id}
            creationTime={todo.createdTime}
          />
        ))}
      </div>
    </>
  );
}
export default Footer;
