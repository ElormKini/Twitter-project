import LoginModal from "./modal/LoginModal";
import SignupModal from "./modal/SignupModal";

export default function BottomBanner() {
 return(
    <div className=" fixed xl:space-x-[200px] flex justify-center items-center bottom-0 w-full h-[80px] bg-[#1d9bf0]">

        <div className="hidden xl:inline text-white">
      <h1 className="font-bold text-2xl"> Don't miss what's happening</h1>
      <span className="font-normal text-[18px]">People on Twitter are the first to know.</span>
        </div>

     <div className="space-x-3">
    
     <LoginModal/>
     <SignupModal />
    </div>
    </div>
 )
}