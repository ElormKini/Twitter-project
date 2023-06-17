import { DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import {BadgeCheckIcon} from "@heroicons/react/solid";

export default function Trending() {
    return(
        <>
        <div className="hidden lg:flex ml-9  flex-col ">
           

        <div className="flex space-x-3 bg-white bg-opacity-10 rounded-3xl p-3  w-[300px] h-[44px] mt-6">
                <SearchIcon className="w-6 text-gray-600" />
                <input
                className="
                bg-transparent
                focus:outline-none
                placeholder:text-gray-600
                "
                placeholder="Search Twitter"
                />
            </div>

            <div className="w-[300px] h-[505px] bg-white bg-opacity-10 mt-3 rounded-3xl">
               <h1 className="p-3 text-xl font-bold ">Trends</h1> 
              <div className="relative">
              <DotsHorizontalIcon className="w-5 text-gray-500 absolute right-4" />
                <p className="ml-3  font-bold text-[15px] text-gray-500">1. Politics Trending</p>
                <h1 className="ml-4 font-bold">Biden</h1>
                <p className="ml-4 text-gray-500 ">Trending with <span className="text-white">Trump</span></p>
              </div>


              <div className="mt-5 relative">
              <DotsHorizontalIcon className="w-5 text-gray-500 absolute right-4" />
              <p className="ml-3  font-bold text-[15px] text-gray-500">2. NBA Trending</p>
                <h1 className="ml-4 font-bold">Lebron James</h1>
                <p className="ml-4 text-gray-500 ">288K Tweets</p>
              </div>

              <div className="mt-5 relative">
              <DotsHorizontalIcon className="w-5 text-gray-500 absolute right-4" />
              <p className="ml-3  font-bold text-[15px] text-gray-500">3. Soccer Trending</p>
                <h1 className="ml-4 font-bold">Messi</h1>
                <p className="ml-4 text-gray-500 ">250K Tweets</p>
              </div>

              <div className="mt-5 relative">
              <DotsHorizontalIcon className="w-5 text-gray-500 absolute right-4" />
              <p className="ml-3  font-bold text-[15px] text-gray-500">4. Holiday Trending</p>
                <h1 className="ml-4 font-bold">ThanksGiving</h1>
                <p className="ml-4 text-gray-500 ">125K Tweets</p>
              </div>

              <div className="mt-5 relative">
              <DotsHorizontalIcon className="w-5 text-gray-500 absolute right-4" />
              <p className="ml-3  font-bold text-[15px] text-gray-500">5. Food Trending</p>
                <h1 className="ml-4 font-bold">Mac and Cheese</h1>
                <p className="ml-4 text-gray-500 ">27.7k Tweets</p>
              </div>


            </div>
          

           
        




        <div className="w-[300px] h-[350px] bg-white bg-opacity-10 mt-3 rounded-3xl">
        <h1 className="p-3 text-xl font-bold ">Who to follow</h1>

         <div className="flex justify-between p-3">
          <div className="flex space-x-3">
        <img 
        className="w-11 h-11 object-cover rounded-full"
        src="https://th.bing.com/th/id/OIP.H9do8fMqhMnunjwzF9lloAHaE8?w=299&h=200&c=7&r=0&o=5&pid=1.7" 
        />

          <div>
            <div className="flex space-x-1">
            <h1 className="font-bold text[12px]">Steph Curry</h1>
            <BadgeCheckIcon className="w-[18px] text-blue-400"/>
            </div>
           <h1 className="text-[12px] text-gray-500 mt-1">@stephencurry</h1>
           </div>
        
         
          <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold">Follow</button>
         

          </div>

         </div>



         <div className="flex justify-between p-3">
          <div className="flex space-x-3">
        <img 
        className="w-11 h-11 object-cover rounded-full"
        src="https://2.bp.blogspot.com/-Ms3RSqjFCLg/UI0bon-UbTI/AAAAAAAAE3s/C2qBgLWil6M/s1600/cristiano+ronaldo+7.jpg" 
        />

          <div>
            <div className="flex space-x-1">
            <h1 className="font-bold text[12px]">Ronaldo</h1>
            <BadgeCheckIcon className="w-[18px] text-blue-400"/>
            </div>
           <h1 className="text-[12px] text-gray-500 mt-1">@ronaldo</h1>
           </div>
        
         
          <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold">Follow</button>
         

          </div>

         </div>



         <div className="flex justify-between p-3">
          <div className="flex space-x-3">
        <img 
        className="w-11 h-11 object-cover rounded-full"
        src="https://www.cheatsheet.com/wp-content/uploads/2021/03/drake.jpg" 
        />

          <div>
            <div className="flex space-x-1">
            <h1 className="font-bold text[12px]">Drake</h1>
            <BadgeCheckIcon className="w-[18px] text-blue-400"/>
            </div>
           <h1 className="text-[12px] text-gray-500 mt-1">@drizzy</h1>
           </div>
        
       
          <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold ">Follow</button>
         

          </div>

         </div>




         <div className="flex justify-between p-3">
          <div className="flex space-x-3">
        <img 
        className="w-11 h-11 object-cover rounded-full"
        src="https://ourculturemag.com/wp-content/uploads/2020/10/ariana-grande-e1603612171929.jpeg" 
        />

          <div>
            <div className="flex space-x-1">
            <h1 className="font-bold text[12px]">Ariana</h1>
            <BadgeCheckIcon className="w-[18px] text-blue-400"/>
            </div>
           <h1 className="text-[12px] text-gray-500 mt-1">@arianagrande</h1>
           </div>
        
         
          <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold">Follow</button>
         

          </div>

         </div>
        
            </div>

            </div>

        
        </>




    )
}