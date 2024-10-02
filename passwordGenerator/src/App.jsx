import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!~`@#$%^&*[]{}-=_+?";

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const passwordRef = useRef(null);

  const copyPassToClipBoard = useCallback(() =>{
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  },
    [length, numberAllowed, characterAllowed, passwordGenerator]
  )

  return (
    <>
      <div className="w-full bg-gray-800 mx-auto max-w-md shadow-md px-4 my-8 py-3 text-orange-500 rounded-xl font-bold">
        <h1 className="text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPassToClipBoard}
           className=" bg-black outline-none px-3 py-1 shrink-0">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label> label:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked= {numberAllowed}
            id="numberInput"
            onChange={() => 
              {setNumberAllowed((prev) => !prev)}}
            />
            <label htmlFor="numberInput"> Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked= {characterAllowed}
            id="numberInput"
            onChange={() => 
              {setCharacterAllowed((prev) => !prev)}}
            />
            <label htmlFor="characterInput"> Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
