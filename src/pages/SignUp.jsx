import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { doc, serverTimestamp, setDoc } from '@firebase/firestore';
import {db} from '../firebase'

export default function SignUp() {
  const navigate = useNavigate()
const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
});

const {name, email, password} = formData;

function onChange(e) {
  setFormData((prevState)=>({
    ...prevState,
    [e.target.id]: e.target.value,
  }))
};

async function onSubmit(e) {
  e.preventDefault()
  try {
    const auth = getAuth()
    const userCredentials = await createUserWithEmailAndPassword
    (auth, email, password);
    updateProfile(auth.currentUser, {
      displayName: name
    })
    const user = userCredentials.user
    const formDataCopy = {...formData}
    delete formDataCopy.password
    formDataCopy.timestamp = serverTimestamp();

    await setDoc(doc(db, "users", user.uid), formDataCopy)
    navigate("/profile")
    alert("Success!");
  } catch (error) {
    alert("Something went wrong");
  }
  
}


  return (
  <section className='flex justify-center'>
    <main >
      <h1 className='text-2xl m-4'>Sign Up</h1>
      <article className='mt-6 flex flex-col items-center justify-center'>
        <form onSubmit={onSubmit} className='flex flex-col items-center text-black'>
          <input type="text" onChange={onChange} name="name" id="name" value={name} placeholder=" Name " 
          className=' border-2 border-teal-500 rounded-lg text-lg w-64 mb-6'/>
          <input type="email" onChange={onChange} name="email" id="email" value={email} placeholder=" Email " 
          className=' border-2 border-teal-500 rounded-lg text-lg w-64 mb-6'/>
          <input type="password" onChange={onChange} name="password" id="password" value={password} placeholder=" Password " 
          className=' border-2 border-teal-500 rounded-lg text-lg w-64 mb-6'/>
          {/* links to other pages */}
          <p className='mb-3 text-white'>Have an Account? <Link to="/sign-in" className='text-blue-300 font-semibold ml-3' > Sign In Now</Link></p>
         
          {/*Submit button */}
          <button className="
           bg-sky-300 mb-4 text-teal-800 text-lg font-medium uppercase rounded-2xl border-2
            border-sky-800 hover:font-bold hover:bg-sky-400 hover:border-sky-900 w-60  pt-2 pb-2">Submit
            </button>
          <p className='text-center font-medium text-white text-xl'>OR</p>
          {/* google signup */}
          <OAuth />



        </form>

      </article>
    </main>
    </section>
  )
}
