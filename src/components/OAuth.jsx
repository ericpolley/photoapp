
import { useNavigate } from 'react-router-dom'

export default function OAuth() {
    const navigate = useNavigate()

    function onGoogleClick() {
        try {
alert('works')
       
  
          
            

        
        } catch (error) {
    alert('not working')
        }
    }
  return (
    <div className='mt-6 flex flex-col items-center justify-center'>
        <button onClick={onGoogleClick} className=" bg-sky-300 mb-12 text-teal-800 text-lg font-medium uppercase rounded-2xl border-2 border-sky-800 hover:font-bold hover:bg-sky-400 hover:border-sky-900 w-60 pt-2 pb-2">Sign in with Google</button>
      
    </div>
  )
}
