import { useEffect, useState } from "react";
import initializeFirebaseApp from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged  } from "firebase/auth";


initializeFirebaseApp()

const useFirebase=()=>{
   const [user, setUser] = useState({})
   const [isLoading, setIsLoading] =useState(true)
   const [error, setError] = useState('')


   const auth = getAuth();

   // Register with email
      const handleRegister=(email, password, name, history)=>{
         setIsLoading(true)
         createUserWithEmailAndPassword(auth, email, password)
         .then(result=>{
            const newUser = {email, displayName: name}
            setUser(newUser)
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
               displayName: name
           }).then(() => {
           }).catch((error) => {
           });
            history.replace('/')
            setError('')
         })
         .catch((error)=>{
            setError(error.message)
         })
         .finally(()=> setIsLoading(false))
   }

   // Login with email
   const loginUser =(email, password, location, history)=>{
      setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
         const destination = location?.state?.from || '/';
                history.replace(destination);
         setError('')
      })
      .catch((error) => {
         setError(error.message);
      })
      .finally(()=> setIsLoading(false));
   }

useEffect( () =>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
    });
    return () => unsubscribe;
}, [])

 const logout=()=>{
    setIsLoading(true)
   signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
    .finally(()=> setIsLoading(false));
    
}

   return{
      user,
      handleRegister,
      logout,
      loginUser,
      isLoading,
      error

   }
}

export default useFirebase;