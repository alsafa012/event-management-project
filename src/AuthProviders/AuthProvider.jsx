import React, { createContext, useEffect, useState } from "react";
import {
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     getAuth,
     onAuthStateChanged,
     signInWithEmailAndPassword,
     signInWithPopup,
     signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loader, setLoader] = useState(true);
     // google sign in
    const googleSignIn = (value)=>{
     return signInWithPopup(auth,provider);
    }

     // create user
     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password);
     };
     // sign in user
     const signIn = (email, password) => {
          setLoader(true);
          return signInWithEmailAndPassword(auth, email, password);
     };
     // sign out user
     const signOutUser = () => {
          setLoader(true);
          return signOut(auth);
     };

     useEffect(() => {
          const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
               console.log(currentUser);
               setUser(currentUser);
               setLoader(false);
          });
          return () => {
               unsubscribed();
          };
     }, []);

     const authInfo = {
          user,
          createUser,
          googleSignIn,
          signIn,
          signOutUser,
          loader,
     };
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;
