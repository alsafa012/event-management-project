import React, { createContext, useEffect, useState } from "react";
import {
     createUserWithEmailAndPassword,
     getAuth,
     onAuthStateChanged,
     signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loader, setLoader] = useState(true);

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
     const signOut = () => {
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
          signIn,
          signOut,
          loader,
     };
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;
