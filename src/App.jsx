import { useCallback, useEffect, useState } from "react";
import "./App.css";
import GenerateButton from "./components/Button";
import LengthInput from "./components/LengthInput";
import DisplayString from "./components/DisplayString";
import generateString from "./utilityfunction/generatestring";

function App() {
  const [length, setLength] = useState(0);
  const [randomString, setRandomstring] = useState("");

  const handleGenerate = useCallback(() => {
    const generatedString = generateString(length);
    setRandomstring(generatedString);
  }, [length]);

  useEffect(() => {
    handleGenerate();
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <div className="text-container bg-gray-100 shadow-lg rounded-2xl p-6 h-[450px] w-[550px]" style={{ backgroundColor: "oklch(70.5% 0.213 47.604)" }}>
        <h1 className="text-3xl font-bold text-center mb-4 ">
          String Generator
        </h1>
        <LengthInput length={length} setLength={setLength} />
        <GenerateButton onClick={handleGenerate} />
        <DisplayString
          randomString={randomString}
          setRandomstring={setRandomstring}
        />
      </div>
    </div>
  );
}

export default App;
