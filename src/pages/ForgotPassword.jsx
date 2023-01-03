import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function ForgotPassword() {

    const [formData, setFormData] = useState({
 
      email: "",
 
    });
    
    const { email, password} = formData;
    
    function onChange(e) {
      setFormData((prevState)=>({
        ...prevState,
        [e.target.id]: e.target.value,
      }))
    };
    
    async function onSubmit(e) {
      e.preventDefault()
    
      try {
        console('onSubmit()')
      } catch (error) {
        console('FAILURE: onSubmit() did not work')
      }
    }
    
    
      return (
      <section className='flex justify-center'>
        <main className='border-4 border-b-8 border-t-[12px] bg-teal-700 border-teal-500 mt-12 w-[300px] md:w-[600px] p-2 rounded-2xl text-teal-100'>
          <h1 className='text-2xl m-4'>Reset Password</h1>
          <article className='mt-6 flex flex-col items-center justify-center'>
            <form onSubmit={onSubmit} className='flex flex-col items-center text-black'>
              <input type="email" onChange={onChange} name="email" id="email" value={email} placeholder=" Email " 
              className=' border-2 border-teal-500 rounded-lg text-lg w-64 mb-6'/>
              {/* links to other pages */}
              <p className='mb-3'>Don't have an Account? <Link to="/sign-up" className='text-blue-300 font-semibold ml-3' > Sign Up Now</Link></p>
           
              {/*Submit button */}
              <button className="
               bg-sky-300 mb-4 text-teal-800 text-lg font-medium uppercase rounded-2xl border-2
                border-sky-800 hover:font-bold hover:bg-sky-400 hover:border-sky-900 w-60  pt-2 pb-2">Submit
                </button>
 
             
    
    
    
            </form>
    
          </article>
        </main>
        </section>
  )
}
