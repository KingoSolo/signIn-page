// eslint-disable-next-line no-unused-vars
import React from 'react'
import loginimg from '../assets/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg'
function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <img src={loginimg} alt =''/>
            </div>

        <div> 
            <form className="">
             <h2>NQLO</h2>
              <div>
                <label>Username: </label>
                <input type='text'/>
              </div> 
        
            <div>
                <label className="pass">Password:</label>
                <input type='text'/>
            </div>
          <button>Sign In</button>
          <p><input type='checkbox'/></p>
            </form>
        </div>
      </div>
     
  )
}

export default Login                                                        
