import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800  '>

            <div className="mycontainer flex justify-between px-3 py-4">


                <div className="logo font-bold h-7 text-white text-2xl">
                <span className='text-green-700'>&lt;</span>
             
                    My
                <span className='text-green-700'>Pass&gt;</span>
                </div>
                <ul>
                    <li  className='flex gap-4 text-white'>
                        <a className='hover:font-bold' href="/">Home</a>
                        <a className='hover:font-bold' href='#'>

                            MyPass</a>
                    </li>
                </ul>

            </div>



        </nav>
    )
}

export default Navbar
