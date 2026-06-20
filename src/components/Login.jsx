import React from 'react'
import Header from './Header'
import { useState } from 'react'
const Login = () => {

     //sign in form aur sign up form toggle karne ke liye state
     //isSignInForm true hoga to sign in form show hoga aur false hoga to sign up form show hoga
    const HandletoggleSignForm=()=>{
        setisSignInForm(!isSignInForm)
      }
      
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
        console.log({ email, password });
        
      }
    const [isSignInForm, setisSignInForm] = useState(false);
      const [email, setEmail] = React.useState('');
        const [password, setPassword] = React.useState('');
        const [name,setName]=useState("");
  return (
    <div className='relative min-h-screen overflow-hidden bg-black'>
      <Header />

      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8027eb3f-343a-499d-9892-e683c12e3cb1/web/IN-en-20260608-TRIFECTA-perspective_d70af879-e407-4aee-8615-4c82210065d5_large.jpg"
        alt="Netflix background"
        className='absolute inset-0 h-full w-full object-cover'
      />

      <div className='absolute inset-0 bg-black/60' />

      <div className='relative z-10 flex min-h-screen items-center justify-center px-4 text-white'>
        <form className='mt-16 w-full max-w-md rounded bg-black/75 p-8 md:p-12'
          onSubmit={handleSubmit}>

          <h1 className='mb-6 text-3xl font-bold'
          >{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

          {!isSignInForm && (<input
            type='name'
            placeholder='Full name'
            value={name}
            className='mb-4 w-full rounded bg-zinc-800 p-3 text-white placeholder:text-zinc-400 focus:outline-none'
            onChange={(e)=>(setName(e.target.value))}
          />)}

          <input
            type='email'
            placeholder='Email or phone number'
            value={email}
            className='mb-4 w-full rounded bg-zinc-800 p-3 text-white placeholder:text-zinc-400 focus:outline-none'
            onChange={(e)=>(setEmail(e.target.value))}
          />

          <input
            type='password'
            placeholder='Password'
            value={password}
            className='mb-6 w-full rounded bg-zinc-800 p-3 text-white placeholder:text-zinc-400 focus:outline-none'
            onChange={(e)=>(setPassword(e.target.value))}
          />

          <button
            type='submit'
            className='w-full rounded bg-red-600 p-3 font-semibold hover:bg-red-700'
          >
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>
          <p className='cursor-pointer' onClick={HandletoggleSignForm}>{isSignInForm ? 'New to Netflix? Sign up now' : 'Already have an account? Sign in now'}</p>
        </form>
      </div>

    </div>
  )
}

export default Login