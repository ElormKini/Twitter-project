import {closeSignupModal, openSignupModal } from "@/redux/modalSlice"
import Modal from "@mui/material/Modal"
import { useDispatch, useSelector } from "react-redux"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "@/firebase"
import { useEffect, useState } from "react"
import { setUser } from "@/redux/userSlice"
import Router, { useRouter } from "next/router"

export default function SignupModal() {
    const isOpen = useSelector(state => state.modals.signupModalOpen)
    const dispatch = useDispatch()
    
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()

async function handleSignUp() {
    
        const userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        await updateProfile(auth.currentUser, {
          displayName: name,
          photoUrl: `.assets/twitter-profile-images/pfp${Math.ceil(Math.random() * 9)}.png`
        })
        router.reload()

    }

    async function handleGuestSignin(email, password) {
      await signInWithEmailAndPassword (auth, "guest5643@gmail.com", "123456")
     }


    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      if(!currentUser) return
 console.log(currentUser)
 dispatch(
  setUser({
  username: currentUser.email.split("@")[0],
  name: currentUser.displayName,
  email: currentUser.email,
  uid: currentUser.uid, 
  photoUrl: currentUser.photoURL
 })
 );
    
});

    return unsubscribe


    }, [])

    return(
        <>
        <button className="bg-white text-black border rounded-full w-[200px] h-[44px] font-bold hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openSignupModal())}>
            Sign Up
            </button>

            <Modal
            open={isOpen}
            className="flex justify-center items-center"
            onClose={() => dispatch(closeSignupModal())}>
                <div className="w-[90%] h-[610px] bg-black text-white md:w-[500px] md:h-[600px] 
                border border-gray-700 rounded-lg
                flex justify-center">

                  
                    <div className="absolute top-25 mt-16">
                    <h1 className="text-3xl font-bold">
                   Join Twitter Today
                    </h1>
                    </div>


                  <div className="w-[90%] mt-8">
                    <button className="bg-white text-black w-full font-bold text-lg h-[44px] rounded-full mt-24  p-2"
                    onClick={handleGuestSignin}>
                    Sign in as Guest
                    </button>

                    <h1 className="text-center mt-4 font-bold text-lg">or</h1>

                    <h1 className="text-4xl font-bold mt-4">Create your account</h1>

                    <input
                        placeholder="Full Name"
                        className="h-10 rounded-md bg-transparent border w-full border-gray-700 p-6 mt-5
                        " type={"text"} required
                        onChange={e => setName(e.target.value)}/>


                    <input
                        placeholder="Email"
                        className="h-10 rounded-md bg-transparent border w-full border-gray-700 p-6 mt-5
                        " type={"email"}
                        onChange={e => setEmail(e.target.value)}
                        />

                        <input
                        placeholder="Password"
                        className="h-10 rounded-md bg-transparent border w-full border-gray-700 p-6 mt-5
                        " type={"password"} 
                        onChange={e => setPassword(e.target.value)}
                        />

                    <button className="bg-white text-black w-full font-bold text-lg h-[44px]
                     rounded-full mt-8  p-2"
                     onClick={handleSignUp}>
                    Create Account
                    </button>

                  </div>
                      
                    </div>
                  
            </Modal>
            </>
    )
}