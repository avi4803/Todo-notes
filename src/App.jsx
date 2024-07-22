import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Mid from "./Components/Mid";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import Button from "./Components/Button";

function App() {
  //dark mode //
  const [darkMode, setDarkMode] = useState(true);
  console.log(darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };
  ///dark mode end//
  

  return (
    <>
    {/* Toogle bar for dark mode  */}
     <label className="flex relative inset-y-3 mx-2.5 sm:mx-4 ">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={darkMode}
          onChange={handleToggle}
        />
        <div className="absolute inset-0 w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>

    {/* Toogle bar for dark mode  end*/}

      <div className=" dark:bg-indigo-950 duration-300 bg-indigo-400 h-screen flex flex-col">
        <div>
          <Header />
        </div>
        <div className=" flex justify-center">
          <Mid />
        </div>
        {/* <input type='text' className='h-10 w-1/3 bg-slate-800 my-24 min-w-80 rounded-lg p-6 text-white'>
</input> */}

        <div className="flex w-full justify-evenly  my-10  bg-indigo-200 rounded-t-[50px] md:rounded-t-[100px] ">
          <Footer />
          
        </div>

        <div>



          
        </div>
      </div>
    </>
  );
}

export default App;
