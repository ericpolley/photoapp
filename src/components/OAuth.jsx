import React from 'react'

export default function OAuth() {
  return (
    <div className='mt-6 flex flex-col items-center justify-center'>
        <button onSubmit={console.log("submit to google")} className=" bg-sky-300 mb-12 text-teal-800 text-lg font-medium uppercase rounded-2xl border-2 border-sky-800 hover:font-bold hover:bg-sky-400 hover:border-sky-900 w-60 pt-2 pb-2">Sign in with Google</button>
      
    </div>
  )
}
