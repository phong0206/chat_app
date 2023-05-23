import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const addDocument = async (collectionName, documentData) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...documentData,
      createdAt: serverTimestamp(),
    });
    console.log("Document added with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

