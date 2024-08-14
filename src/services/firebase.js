// services/firebase.js
import { getStorage, ref, uploadBytes } from 'firebase/storage';
// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'; // Import getAuth
import { getFirestore } from 'firebase/firestore'; // Import getFirestore correctly

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjqEK-uCtKu3CaWDDFtu8R5XcpU10s_KU",
  authDomain: "xambitech-37118.firebaseapp.com",
  projectId: "xambitech-37118",
  storageBucket: "xambitech-37118.appspot.com",
  messagingSenderId: "989827010834",
  appId: "1:989827010834:web:ec4efd67aa292b5a8063cb",
  measurementId: "G-VN8QF7T7TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase services
const auth = getAuth(app); // For authentication
const firestore = getFirestore(app); // For Firestore
const storage = getStorage(app); // For Storage

const analytics = getAnalytics(app);

export const uploadFile = async (file) => {
  const storageRef = ref(storage, `uploads/${file.name}`);
  
  try {
    const snapshot = await uploadBytes(storageRef, file);
    console.log('Uploaded a blob or file!', snapshot);
    return snapshot.ref.getDownloadURL(); // Returns the download URL of the uploaded file
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error; // Rethrow the error for further handling
  }
};



// Export the services for use in your app
export { auth, firestore, storage };