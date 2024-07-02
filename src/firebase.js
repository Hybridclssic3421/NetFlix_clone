import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyB992p9_dv5CD6Ugg8At8IusXT5pQ2KYmE",
  authDomain: "netflix-clone-4cc5a.firebaseapp.com",
  projectId: "netflix-clone-4cc5a",
  storageBucket: "netflix-clone-4cc5a.appspot.com",
  messagingSenderId: "162367489507",
  appId: "1:162367489507:web:fdafc22e018e42186eccd6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password );
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const login = async(email, password)=>{
    try{
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const logout = async()=>{
    signOut(auth);
}

export{auth, db, login, signup, logout}