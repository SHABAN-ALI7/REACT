import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}>
          <div className="fixed flex justify-center flex-wrap items-center bottom-12 inset-x-0 ">
            <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white rounded-3xl">

              <button
              onClick={() => setColor("red")}
               className=" outline-none 
               px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
              <button
              onClick={() => {setColor("black")}}
              className=" outline-none 
               px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
              <button onClick={() => {setColor("blue")}} className=" outline-none 
               px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
              <button onClick={() => {setColor("green")}} className=" outline-none 
               px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Green"}}>Green</button>
              <button onClick={() => {setColor("olive")}} className=" outline-none 
               px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Olive"}}>Olive</button>
              <button onClick={() => {setColor("orange")}} className=" outline-none 
               px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "orange"}}>Orange</button>
              <button onClick={() => {setColor("white")}} className=" outline-none 
               px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "white"}}>White</button>

            </div>
            
          </div>
        </div>
    </>
  );
}

export default App;
