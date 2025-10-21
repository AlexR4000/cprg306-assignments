"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./item-list.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name"); // "name" or "category" (flat)
  const [grouped, setGrouped] = useState(false); // grouped by category view

  // Flat sorted items
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  // Group items by category
  const groupedItems = itemsData.reduce((groups, item) => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
    return groups;
  }, {});

  return (
    <div>
      {/* Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => { setGrouped(false); setSortBy("name"); }}
          className={`px-3 py-1 rounded ${!grouped && sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => { setGrouped(false); setSortBy("category"); }}
          className={`px-3 py-1 rounded ${!grouped && sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Sort by Category
        </button>

        <button
          onClick={() => setGrouped(!grouped)}
          className={`px-3 py-1 rounded ${grouped ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Grouped Category
        </button>
      </div>

      {/* Render Items */}
      {grouped ? (
        // Grouped by Category
        Object.keys(groupedItems)
          .sort()
          .map((category) => (
            <div key={category} className="mb-6">
              <h2 className="text-xl font-bold capitalize mb-2">{category}</h2>
              <ul className="border rounded-md divide-y divide-gray-300">
                {groupedItems[category]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => (
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
              </ul>
            </div>
          ))
      ) : (
        // Flat sorted list
        <ul className="border rounded-md divide-y divide-gray-300">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
