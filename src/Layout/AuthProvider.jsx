import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {  signOut } from "firebase/auth";
import {  onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const googleProvider = new GoogleAuthProvider();

    // register
    const userRegister=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
    const userLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign in with google
    const userGoogle=()=>{
      return signInWithPopup(auth, googleProvider)
    }
    // sign out
    const userSignOut=()=>{
      return  signOut(auth)
    }
    // current user
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (currentUser) =>{
            if(currentUser){
                setUser(currentUser)
            }
        } )
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo={
        user,
        setUser,
        userRegister,
        userLogin,
        userSignOut,
        userGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;