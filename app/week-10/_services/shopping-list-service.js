import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

// Get all items for a specific user
export const getItems = async (userId) => {
  const itemsRef = collection(db, "users", userId, "items");
  const snapshot = await getDocs(itemsRef);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Add a new item for a specific user
export const addItem = async (userId, item) => {
  const itemsRef = collection(db, "users", userId, "items");

  // Only the fields allowed by rules
  const cleanItem = {
    name: item.name,
    quantity: item.quantity,
    category: item.category
  };

  const docRef = await addDoc(itemsRef, cleanItem);
  return docRef.id;
};
