import { useState } from "react";
import "./App.css";

function App() {
  let [count, setcount] = useState(0);
  const addvalue = () => {
    if (count != 20) {
      setcount(count + 1);
      console.log(count);
    } else {
      return 0;
    }
  };
  const removevalue = () => {
    if (count != 0) {
      setcount(count - 1);
      console.log(count);
    } else {
      return 0;
    }
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter value {count}</h2>
      <button onClick={addvalue}>Add count</button>
      <button onClick={removevalue}>remove count</button>
    </>
  );
}

export default App;
