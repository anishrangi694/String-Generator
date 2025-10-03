import { useState } from "react";

function LengthInput({ length, setLength }) {
  return (
    <div className="mb-4 flex flex-col items-center">
      <label
        className="block text-black-800 font-bold text-xl   mb-2 mt-2"
      >Length:

      </label>
      <br />
      <input
        type="number"
        max="32"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        className="border-black bg-gray-400 rounded w-[200px] text-center p-2 mt-0"
        onInput={(e) => {
          if (e.target.value > 32) e.target.value = 32;
        }}
      />
    </div>
  );
}

export default LengthInput;
