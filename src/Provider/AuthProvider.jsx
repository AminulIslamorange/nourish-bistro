import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider , signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";



export const AuthContext = createContext(null);
const auth = getAuth(app);










export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic=useAxiosPublic();
   const googleProvider=new GoogleAuthProvider();

    const googleSignIn=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)

    }


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile=(name,photo)=>{
        setLoading(true)
       return updateProfile(auth.currentUser, {
            displayName:name, photoURL: photo
          })
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }







    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if(currentUser){
                // get Token and store
                const userInfo={
                    email:currentUser.email
                }
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                        setLoading(false)
                    }
                })

            }
            else{
                // Remove token if token store in client site
                localStorage.removeItem('access-token');
                setLoading(false)
            }
            
        })
        return () => {
            return unsubscribe();
        }

    }, [axiosPublic])




    const authInfo = {
        user,
        loading, 
        createUser,
        loginUser, 
        logOut,updateUserProfile,googleSignIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }

        </AuthContext.Provider>
    );
};

export default AuthProvider;