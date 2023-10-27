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
      pass += string;
    }
  }, [length, number, char, setpassword]);

  return (
    <>
      <h1 className="text-center text-4xl text-white">Password Generator</h1>
    </>
  );
}

export default App;
