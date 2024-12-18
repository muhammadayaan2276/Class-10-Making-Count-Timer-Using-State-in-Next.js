// useState in Next.js
"use client";
import { useState } from "react";

function State() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-900 via-purple-700 to-pink-500">
      <div className="text-center p-8 bg-white rounded-xl shadow-2xl border-4 border-yellow-300  w-96 transition-transform transform hover:scale-105">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Count: {count}</h1>

        <div className="flex justify-around mb-6">
          {/* Increment Button */}
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Increment
          </button>

          {/* Decrement Button */}
          <button
            onClick={() => setCount(count - 1)}
            className="bg-purple-400 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Decrement
          </button>
        </div>

        {/* Reset Button */}
        <button
          onClick={() => setCount(0)}
          className="bg-yellow-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default State;
