import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBVp1MMebN9cF9JFywcfMAKFPKLG8ImUO8",
  authDomain: "cnpm-data.firebaseapp.com",
  databaseURL: "https://cnpm-data.firebaseio.com",
  projectId: "cnpm-data",
  storageBucket: "cnpm-data.appspot.com",
  messagingSenderId: "25061685335",
  appId: "1:25061685335:web:28d919afe9ac0aaad04b12",
  measurementId: "G-6PTKNYCFMJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
 const storage = firebase.storage()
 export  {
  storage, as default
}

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, photoURL } = user;
    try {
      await userRef.set({
        email,
        photoURL,
        ...additionalData 
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
export const db = firebase.firestore();


export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
