"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [view, setView] = useState("name"); // "name", "category", "grouped"

  // Flat sorted items for name or category view
  const sortedItems = [...itemsData].sort((a, b) => {
    if (view === "name") return a.name.localeCompare(b.name);
    if (view === "category") return a.category.localeCompare(b.category);
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
          onClick={() => setView("name")}
          className={`px-3 py-1 rounded ${view === "name" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setView("category")}
          className={`px-3 py-1 rounded ${view === "category" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Sort by Category
        </button>

        <button
          onClick={() => setView("grouped")}
          className={`px-3 py-1 rounded ${view === "grouped" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Grouped by Category
        </button>
      </div>

      {/* Render Items */}
      {view === "grouped" ? (
        // Grouped by Category view
        Object.keys(groupedItems)
          .sort() // Alphabetically sort categories
          .map((category) => (
            <div key={category} className="mb-6">
              <h2 className="text-xl font-bold capitalize mb-2">{category}</h2>
              <ul className="border rounded-md divide-y divide-gray-300">
                {groupedItems[category]
                  .sort((a, b) => a.name.localeCompare(b.name)) // Alphabetically sort items
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
