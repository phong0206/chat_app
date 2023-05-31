import { db } from "./firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  getDocs,
} from "firebase/firestore";

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

export const compareUid = async (currentUID, currentUser) => {
  // Lấy danh sách người dùng từ Firestore
  const q = query(collection(db, "users"));
  const querySnapshot = await getDocs(q);
  let count = 0;
  querySnapshot.forEach((doc) => {
    const userEmail = doc.data().email; // Lấy UID từ document ID trong Firestore
    if (currentUID === userEmail) {
      console.log("UID của người dùng hiện tại tồn tại trong Firestore.");
      count++;
      // Tiếp tục với xử lý cho người dùng hiện tại
    } else {
    }
  });
  if (count === 0) {
    addDocument("users", {
      displayName: currentUser.displayName,
      email: currentUser.email,
      photoURL: currentUser.photoURL,
      uid: currentUser.uid,
      providerId: currentUser.reloadUserInfo.providerUserInfo[0].providerId,
    });
    console.log("UID của người dùng hiện tại chưa tồn tại trong Firestore.");
  } else {
    console.log("UID của người dùng hiện tại tồn tại trong Firestore.");
  }
};
