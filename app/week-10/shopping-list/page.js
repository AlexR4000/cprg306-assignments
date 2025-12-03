"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  // State hooks
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [loading, setLoading] = useState(true);

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      router.push("/week-10"); // landing page
    }
  }, [user, router]);

  // Load items from Firestore on mount
  useEffect(() => {
    const loadItems = async () => {
      if (!user) return;
      try {
        const firestoreItems = await getItems(user.uid);
        setItems(firestoreItems);
      } catch (error) {
        console.error("Failed to load items:", error);
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, [user]);

  // Don't render until user is known
  if (!user || loading) return null;

  // Add new item
  const handleAddItem = async (item) => {
    try {
      // Prepare item to follow Firestore rules
      const validItem = {
        name: item.name.trim().substring(0, 50),
        quantity: parseInt(item.quantity),
        category: item.category,
      };

      const id = await addItem(user.uid, validItem);
      setItems((prev) => [...prev, { id, ...validItem }]);
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  // Select item for meal ideas
  const handleItemSelect = (item) => {
    const cleanName = item.name
      .split(",")[0]
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
