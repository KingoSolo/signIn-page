// eslint-disable-next-line no-unused-vars
import React from 'react'
import logging from '../assets/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg'
function Login() {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={logging} alt =''/>
            </div>

        <div className='bg-gray-200 flex-1 flex flex-col justify-center'> 
            <form className='max-w-md w-full bg-white mx-auto p-4 '>
             <h2 className=' text-4xl text-center py-6 font-bold'>NWLK</h2>

           <div className='flex flex-col'>
                <label>Username: </label>
                <input className='border-2 rounded-lg p-2 hover:border-blue-500' type='text'/>
              </div> 
        
            <div className='flex flex-col'>
                <label className="pass">Password:</label>
                <input className='border-2  rounded-lg p-2 hover:border-blue-500' type='password'/>
            </div>
          <button className='border rounded-md w-full my-3 p-2 bg-indigo-500 hover:bg-indigo-400 text-white'>Sign In</button>
          <div className=' flex justify-between'>
            <p className='flex items-center'><input className='mr-2' type='checkbox'/>Remember Me</p>
            <button className='border rounded-md  p-1 bg-blue-500 hover:bg-blue-600 text-white'>Create Account</button>

          </div>
            </form>
        </div>
      </div>
     
  )
}

export default Login                                                        
