import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [password, setpassword] = useState("");
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [char, setchar] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) string += "0123456789";
    if (char) string += "!#$%&'()*+,-./:;<>=?@[]{}|^_~...∞©®™€¥£¢µ°²×÷§±∑";

    for (let i = 1; i <= length; i++) {
      let cha = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(cha);
    }
    setpassword(pass);
  }, [length, number, char, setpassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-slate-700">
        <h1 className="text-center my-3 text-3xl text-white">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 text-xl">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className=" outline-none w-full py-1 px-3"
          />
          <button className="outline-none bg-blue-700 hover:bg-blue-600 px-3 py-0.5 shrink-0 text-white">
            Copy
          </button>
        </div>
        <div className="flex text-xl gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
