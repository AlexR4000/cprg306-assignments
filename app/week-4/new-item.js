// app/week-4/new-item.js
"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  // Increment quantity (max 20)
  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  // Decrement quantity (min 1)
  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="flex flex-col items-start gap-6 bg-white p-8 rounded-lg shadow-lg w-80 mx-auto">
      <h2 className="text-lg font-semibold text-gray-700">
        Select Quantity
      </h2>

      <div className="flex items-center justify-between w-full">
        {/* Quantity Display */}
        <span className="text-2xl font-semibold text-gray-800">
          {quantity}
        </span>

        {/* Buttons on the right */}
        <div className="flex gap-3">
          <button
            onClick={decrement}
            disabled={quantity === 1}
            className={`px-4 py-2 rounded-lg text-white font-bold ${
              quantity === 1 ? "bg-gray-400" : "bg-blue-500"
            }`}
          >
            −
          </button>

          <button
            onClick={increment}
            disabled={quantity === 20}
            className={`px-4 py-2 rounded-lg text-white font-bold ${
              quantity === 20 ? "bg-gray-400" : "bg-blue-500"
            }`}
          >
            +
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-500">
        Quantity must be between 1 and 20.
      </p>
    </div>
  );
}
