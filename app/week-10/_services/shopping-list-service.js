import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, doc, setDoc } from "firebase/firestore";

// Get all items for a specific user
export const getItems = async (userId) => {
  const userDocRef = doc(db, "users", userId);
  await setDoc(userDocRef, {}, { merge: true }); // create if missing

  const itemsRef = collection(userDocRef, "items");
  const snapshot = await getDocs(itemsRef);

  const items = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return items;
};

// Add a new item for a specific user
export const addItem = async (userId, item) => {
  const userDocRef = doc(db, "users", userId);
  await setDoc(userDocRef, {}, { merge: true }); // ensure user doc exists

  const itemsRef = collection(userDocRef, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
};
