import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAbl5xJ3eBPCFF1i4QkgRA7_4aW4rTLsYk",
  authDomain: "pushtogrow-b87b9.firebaseapp.com",
  projectId: "pushtogrow-b87b9",
  storageBucket: "pushtogrow-b87b9.appspot.com",
  messagingSenderId: "215939700125",
  appId: "1:215939700125:web:55f15755701d32dc27cb74",
  measurementId: "G-3VWXDM3ZQZ",
};

const app = initializeApp(firebaseConfig);

// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
