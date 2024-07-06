import React from 'react'
import logo from "../assest/images/Logo.jpeg"
const Navbaar = () => {
  return (
    <navbaar className="  bg-violet-300 flex justify-between items-center my-6">
       <div className=' logo flex  '>
        <img
          src={logo}
          width={30}
        />
        <h1 className=' font-bold text-lg text-red-700'>Dayplanner</h1>
       </div>
        <div className=' flex space-x-6 mx-9'>
          <div className=' text-2xl text-red-700 cursor-pointer hover:font-bold transition-all duration-200 relative group '>
           <a href="#">Home</a>
          </div>
          <div className=' text-2xl text-red-700 cursor-pointer hover:font-bold transition-all duration-200 relative group '>
            <a href='Aboutus'>About us</a>
          </div>
        
        </div>
    </navbaar>
  )
}

export default Navbaar