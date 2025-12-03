"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems((prev) => [...prev, item]);
  };

  const handleItemSelect = (item) => {
    // Remove quantity & emojis for API
    const cleanName = item.name
      .split(",")[0] // remove quantity/extra
      .replace(
        /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}]/gu,
        ""
      )
      .trim();
    setSelectedItemName(cleanName);
  };

  return (
    <main className="p-4 flex flex-col lg:flex-row gap-8">
      <div className="flex flex-col gap-6 flex-1">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  );
}
