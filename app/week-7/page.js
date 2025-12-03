"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  // State for all items
  const [items, setItems] = useState(itemsData);

  // Add new item
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); // append new item
  };

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      
      {/* Form */}
      <NewItem onAddItem={handleAddItem} />

      {/* List below the form */}
      <ItemList items={items} />
    </main>
  );
}
