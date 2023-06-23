import { auth } from "@/firebase"
import { closeLoginModal, closeSignupModal } from "@/redux/modalSlice"
import { signOutUser } from "@/redux/userSlice"
import {HomeIcon,
    HashtagIcon,
InboxIcon,
BookmarkIcon,
ClipboardListIcon,
BellIcon,
UserIcon,
DotsCircleHorizontalIcon,
SearchIcon

} from "@heroicons/react/outline"
import { DotsHorizontalIcon } from "@heroicons/react/solid"
import { signOut } from "firebase/auth"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"

export default function Sidebar(){
    const dispatch = useDispatch()

    const user = useSelector( state => state.user)

    async function handleSignOut() {

    await signOut(auth)
    dispatch(signOutUser())
    dispatch(closeSignupModal())
    dispatch(closeLoginModal())
    }


    return (
        <div className=" h-full hidden sm:flex flex-col fixed xl:ml-24">
           
            <nav className=" h-full xl:space-y-1.5 relative">
            
                <SidebarLink Icon={HomeIcon} text={"Home"} />
                <SidebarLink Icon={HashtagIcon} text={"Explore"} />
                <SidebarLink Icon={BellIcon} text={"Notifications"} />
                <SidebarLink Icon={BookmarkIcon} text={"Bookmark"} />
                <SidebarLink Icon={InboxIcon} text={"Messages"} />
                <SidebarLink Icon={UserIcon} text={"Profile"} />
                <SidebarLink Icon={SearchIcon} text={"Search"} />
                <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"} />
               <button className="hidden xl:inline bg-[#1d9bf0] rounded-full mt-2 h-[52px] w-[200px] text-lg font-bold ">Tweet</button>
                
                <div 
                 onClick={handleSignOut}
                className=
                " hover:bg-white hover:bg-opacity-10 cursor-pointer rounded-full absolute flex justify-center items-center bottom-0 xl:p-3 space-x-2">
                <img
                
               className="w-11 h-11 rounded-full object-cover sm:ml-2"
                src={ user.photoUrl || "https://i.insider.com/5d922a0d2e22af22cb0c0235?width=700"}/>

                <div className="hidden xl:inline">
                    <h1 className="font-bold whitespace-nowrap">{user.name}</h1>
                    <h1 className="text-gray-500">@{user.username}</h1>
                </div>

                <DotsHorizontalIcon className=" hidden xl:inline h-5"/>
                </div>
            </nav>
            
        </div>

    
    )
}

function SidebarLink({ text, Icon }){
return (
    <li className="hoverAnimations flex mb-3 xl:justify-start justify-center items-center text-xl ml-2 space-x-3 ">
        
        <Icon className="h-7" />
         <span className="hidden xl:inline">{text}</span>
    </li>
)
}