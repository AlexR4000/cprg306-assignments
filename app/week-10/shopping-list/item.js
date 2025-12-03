"use client";

export default function Item({ item, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-100"
    >
      <div className="font-semibold">{item.name}</div>
      <div className="text-sm text-gray-600">
        Quantity: {item.quantity} | Category: {item.category}
      </div>
    </li>
  );
}
