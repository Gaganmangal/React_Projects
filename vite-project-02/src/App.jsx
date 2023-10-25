import Card from "./components/Card";
import "./App.css";

function App() {
  let myObj = {
    name: "Jain Sir",
    age: 50,
  };
  let myArray = ["Deven", "Rohit", "Mohit"];
  return (
    <>
      {/* <h1 className="bg-green-100 text-black p-4 rounded-md mb-2">Gagan</h1> */}
      <Card username="Gagan" name={myArray[0]} obj={myObj.name} />
      <Card username="Gagan" name={myArray[1]} obj={myObj.name} />
      <Card username="Gagan" name={myArray[2]} obj={myObj.name} />
      <Card username="Gagan" obj={myObj.name} />
    </>
  );
}

export default App;
