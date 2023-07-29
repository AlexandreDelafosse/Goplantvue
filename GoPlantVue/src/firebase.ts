import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-pKD6uQCYCDQFCzU3IeVPyPES0WKYE9M",
    authDomain: "devlab-camat.firebaseapp.com",
    projectId: "devlab-camat",
    storageBucket: "devlab-camat.appspot.com",
    messagingSenderId: "40000683500",
    appId: "1:40000683500:web:1635efad99bad4283614c9",
    measurementId: "G-Z0ND4CDSBG"
}; //ma

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

// export const useLoadUsers =  () => {
//     const usersCollection = await getDocs(collection(db, 'users'));
//
//     const users = ref([]);
//     usersCollection.onSnapshot(snapshot => {
//         users.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
//     });
//     return users;
// }
// export const getAllUsers = async () => {
//     const user = await usersCollection.doc().get();
//     return user.exists ? user.data() : null;
// }
// export const getUser = async id => {
//     const user = await usersCollection.doc(id).get();
//     return user.exists ? user.data() : null;
// }
