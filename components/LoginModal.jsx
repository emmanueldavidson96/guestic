import React from 'react'

export default function LoginModal({isVisible, onClose}) {
  if (!isVisible) return null;

  return (
    <section className='h-screen fixed inset-0 flex justify-center items-center rounded-md' >
      <div className='w-[616px]  bg-white '>
        <div className='flex flex-row justify-center'>
           <p>Logo</p>
        <button className='font-bold text-xl text-[#000]' onClick={()=>onClose()}>X</button>
        </div>
       
        {/* <form>
          <section className='flex flex-col'>
            <label className='text-[#000]'>Email</label>
            <input className='border border-gray-500 rounded-sm' placeholder='email@gmail.com'/>
            <label className='text-[#000]'>Password</label>
            <input className='border border-gray-500 rounded-sm'  placeholder='********'/>
          </section>
          <section className='flex'>
            <div className='flex flex-row'>
              <input type='checkbox' />
              <p className='text-[#000]'>Keep me signed in</p>
            </div>
            <p className='text-[#000]'>Forgot Password?</p>
          </section>
          <button className='text-[#fff] bg-[#DAA41C] text-center'>Login</button>
          <p className="border-b border-solid border-black text-center"><span className="px-4 bg-white">or</span></p>
          <section className='flex flex-col'>
            <button className='bg-transparent text-[#000] rounded-sm border border-gray-500 m-2'>Login with Google</button>
            <button className='bg-transparent text-[#000] rounded-sm border border-gray-500 m-2'>Login with Facebook</button>
            <button className='bg-transparent text-[#000] rounded-sm border border-gray-500 m-2'>Login with Twitter</button>
            <button className='bg-transparent text-[#000] rounded-sm border border-gray-500 m-2'>Login with LinkedIn</button>
          </section>
        </form>
        <p>Dont have an account?<span>Create a free account</span></p> */}
      </div>
    </section>
  )
}
