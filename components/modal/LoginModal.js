import { auth } from "@/firebase"
import {closeLoginModal, openLoginModal } from "@/redux/modalSlice"
import Modal from "@mui/material/Modal"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function LoginModal() {
    const isOpen = useSelector(state => state.modals.loginModalOpen)
    const dispatch = useDispatch()
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    async function handleSignIn() {
       await signInWithEmailAndPassword(auth, email, password)
    }

    async function handleGuestSignin(email, password) {
     await signInWithEmailAndPassword (auth, "guest5643@gmail.com", "123456")
    }


    return(
        <>
        <button className="bg-transparent border rounded-full w-[200px] text-white h-[44px] sm:w-[150px] font-bold hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openLoginModal())}>
            Log In
            </button>

            <Modal
            open={isOpen}
            className="flex justify-center items-center"
            onClose={() => dispatch(closeLoginModal())}>
                <div className="w-[90%] h-[610px] bg-black text-white md:w-[500px] md:h[600px] 
                border border-gray-700 rounded-lg
                flex justify-center">

                    
                    <div className="absolute top-25 mt-16">
                    <h1 className="text-3xl font-bold">
                    Sign in to Twitter
                    </h1>
                    </div>


                    <div className="w-[90%] mt-32">
                        <input
                        placeholder="Email"
                        className="h-10 rounded-md bg-transparent border w-full border-gray-700 p-6 mt-5
                        " type={"email"}
                        onChange={e => setEmail(e.target.value)}
                        required/>

                        <input
                        placeholder="Password"
                        className="h-10 rounded-md bg-transparent border w-full border-gray-700 p-6 mt-5
                        " type={"password"}
                        onChange={e => setPassword(e.target.value)}
                        required/>

                        <button className="bg-white text-black w-full rounded-full font-bold 
                        text-lg p-2 mt-8"
                        onClick={handleSignIn}>
                            Sign In
                        </button>

                        <h1 className="text-center mt-4 font-bold text-lg">or</h1>

                        <button className="bg-white text-black w-full rounded-full font-bold 
                        text-lg p-2 mt-4"
                        onClick={handleGuestSignin}>
                            Sign In as Guest
                        </button>

                        
                    </div>


                </div>
            </Modal>
            </>
    )
}