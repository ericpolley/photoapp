import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {
const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
});

const {name, email, password} = useState(false);

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
      <h1 className='text-2xl m-4'>Sign Up</h1>
      <article className='mt-6 flex flex-col items-center justify-center'>
        <form action="" className='flex flex-col items-center text-black'>
          <input type="text" name="name" id="name" value={name} placeholder=" Name " 
          className=' border-2 border-teal-500 rounded-lg text-lg w-64 mb-6'/>
          <input type="email" name="email" id="email" value={email} placeholder=" Email " 
          className=' border-2 border-teal-500 rounded-lg text-lg w-64 mb-6'/>
          <input type="password" name="password" id="password" value={password} placeholder=" Password " 
          className=' border-2 border-teal-500 rounded-lg text-lg w-64 mb-6'/>
          <p className='mb-3'>Have an Account? <Link to="/sign-in" className='text-blue-300 font-semibold ml-3' > Sign In Now</Link></p>
          <p className='mb-3'><Link to="/forgot-password" className='text-red-300 font-semibold ml-3' > Forgot your password?</Link></p>
          <button onSubmit={onSubmit} className=" bg-sky-300 mb-4 text-teal-800 text-lg font-medium uppercase rounded-2xl border-2 border-sky-800 hover:font-bold hover:bg-sky-400 hover:border-sky-900 w-60  pt-2 pb-2">Submit</button>
<p className='text-center font-medium text-white text-xl'>OR</p>
<OAuth />



        </form>

      </article>
    </main>
    </section>
  )
}
