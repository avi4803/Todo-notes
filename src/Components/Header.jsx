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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleInputSubmit(e);
    }
  };

  return (
    <>
      {/* //Popup handler for add todo start// */}
      {isTextBoxVisible && (
        <form
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm"
          onKeyDown={handleKeyPress}
        >
          <div className="bg-indigo-200 p-6 rounded-2xl shadow-lg shadow-gray-700  min-w-[20vw]">
            <div className="flex justify-between">
              <h1 className="my-2 text-xl font-light">Add your note</h1>
              <button
                onClick={() => setIsTextBoxVisible(false)}
                className="hover:ring-2 hover:ring-gray-500 size-6 text-center  place-self-center rounded-sm"
              >
                x
              </button>
            </div>

            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <div className="flex justify-end">
              <button
                onClick={handleInputSubmit}
                type="submit"
                className="mt-3 px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400"
              >
                Ok
              </button>
            </div>
          </div>
        </form>
      )}

      {/* //Popup handler for add todo end// */}

      <div className="w-full h-full flex flex-row justify-center p">
        <div className="h-36 w-1/2 bg-indigo-300 m-10 min-w-96 rounded-3xl items-center ">
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
