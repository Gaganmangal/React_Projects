import { useState } from "react";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";
function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/17130110/pexels-photo-17130110/free-photo-of-panorama-of-the-seaside-modern-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              convert();
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                currencyOptions={options}
                onCurrencyChange={(amount) => setAmount(amount)}
                seletCurrency={to}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
                amount={amount}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 
                -translate-x-1/2 
                -translate-y-1/2 
                border-white rounded-md 
                bg-blue-600 text-white px-2 
                py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4 ">
              <InputBox
                label="To"
                currencyOptions={options}
                onCurrencyChange={(amount) => setAmount(amount)}
                seletCurrency={from}
                amount={convertedAmount}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
