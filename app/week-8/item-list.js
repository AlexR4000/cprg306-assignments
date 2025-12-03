"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [view, setView] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (view === "name") return a.name.localeCompare(b.name);
    if (view === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  const groupedItems = items.reduce((groups, item) => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
    return groups;
  }, {});

  return (
    <div>
      {/* Sorting buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {["name", "category", "grouped"].map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`px-3 py-1 rounded ${
              view === v ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {v === "name"
              ? "Sort by Name"
              : v === "category"
              ? "Sort by Category"
              : "Grouped by Category"}
          </button>
        ))}
      </div>

      {/* Render items */}
      {view === "grouped" ? (
        Object.keys(groupedItems)
          .sort()
          .map((category) => (
            <div key={category} className="mb-6">
              <h2 className="text-xl font-bold capitalize mb-2">{category}</h2>
              <ul className="border rounded-md divide-y divide-gray-300">
                {[...groupedItems[category]]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => (
                    <Item
                      key={item.id}
                      item={item}
                      onSelect={() => onItemSelect(item)}
                    />
                  ))}
              </ul>
            </div>
          ))
      ) : (
        <ul className="border rounded-md divide-y divide-gray-300">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onSelect={() => onItemSelect(item)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
