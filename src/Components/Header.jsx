import React, { useState } from "react";
import { addTodo } from "../Features/Todo/TodoSlice";
import { useDispatch } from "react-redux";
import profilePic from '../assets/DP.jpg';

function Header() {
  const dispatch = useDispatch(); // Call useDispatch at the top level

  //Popup component for add todo//
  const [isTextBoxVisible, setIsTextBoxVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    setIsTextBoxVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        text: inputValue,
        completed: false,
      })
    );
    setInputValue("");
    setIsTextBoxVisible(false);
  };

  const user = useState("Avinash")[0];
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {/* //Popup handler for add todo start// */}
      {isTextBoxVisible && (
        <form onSubmit={handleInputSubmit} className="relative  flex">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="px-4 py-2 border border-gray-300 rounded w-full"
            placeholder="Enter your todo"
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
          >
            Submit
          </button>
        </form>
      )}

      {/* //Popup handler for add todo end// */}

      <div className="w-full h-full flex flex-row justify-center p">
        <div className="h-36 w-1/2 bg-indigo-200 m-10 min-w-96 rounded-3xl items-center ">
          <div className="flex flex-row justify-start">
            <img
              src={profilePic}
              className="self-center size-20 rounded-full mx-3 block md:size-28 md:mx-6"
            ></img>

            <div className="my-8 border-slate-950 border rounded-lg p-4 md:my-6">
              <div className="text-2xl max-h-80 md:text-3xl">Hey,{user}</div>
              <div className="text-sm md:text-xl ">{formattedDate}</div>
            </div>
            <div className="w-full flex justify-center md:justify-end md:m-6">
              <button
                onClick={handleButtonClick}
                className="text-white text-4xl shadow-md shadow-gray-900  size-16 self-center rounded-2xl bg-indigo-800 hover:bg-indigo-500"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
