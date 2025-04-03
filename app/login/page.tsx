import React from 'react'

const page = () => {
  return (
    <div className='w-[100vw] h-[100vh] p-10'>
        <form className="m-auto w-[80%]" action="">
            <input className='border-[1px] border-[black] rounded-2xl outline-none w-[100%] p-5 mt-5' type="text" placeholder="Username or email" /> <br />
            <input className='border-[1px] border-[black] rounded-2xl outline-none w-[100%] p-5 mt-5' type="password" placeholder="Password" name="password" id="password" /> <br />
            <button className='bg-black text-white font-semibold px-6 py-3 rounded-xl mt-5 ' type="submit">
                Login
            </button>    
      </form>
    </div>
  )
}

export default page