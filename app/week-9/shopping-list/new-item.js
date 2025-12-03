"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      id: crypto.randomUUID(),
      name,
      quantity,
      category,
    };
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-lg w-80 mx-auto mb-8"
    >
      <div className="flex flex-col">
        <label className="mb-1 font-semibold text-gray-700">Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter item name"
          className="border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-semibold text-gray-700">Quantity</label>
        <div className="flex items-center gap-3">
          <span className="text-xl font-semibold">{quantity}</span>
          <div className="flex gap-2 ml-auto">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className={`px-3 py-1 rounded text-white ${
                quantity === 1 ? "bg-gray-400" : "bg-blue-500"
              }`}
            >
              −
            </button>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className={`px-3 py-1 rounded text-white ${
                quantity === 20 ? "bg-gray-400" : "bg-blue-500"
              }`}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-semibold text-gray-700">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white p-3 rounded font-semibold"
      >
        Add Item
      </button>
    </form>
  );
}
