import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800  '>

            <div className="mycontainer flex justify-between px-3 py-4 h-14">


                <div className="logo font-bold h-7 text-white text-2xl">
                    <span className='text-green-700'>&lt;</span>

                    My
                    <span className='text-green-700'>Pass&gt;</span>
                </div>
                <ul>
                    {/* <li className='flex gap-4 text-white'>
                        <a className='hover:font-bold' href="/">Home</a>
                        <a className='hover:font-bold' href='#'>

                            MyPass</a>
                    </li> */}

                </ul>
                <div className='text-white bg-green-500 rounded-md flex gap-0 justify-between items-center ring-white ring-1'>
                    <img className='w-8 p-1 ' src="icons/github.svg" alt="Git" />
                    <span className='px-2 font-bold '><a href="https://github.com/shardulkulk297/MyPassword-Manager" target='_blank'>Github</a>
                    
                    </span>
                   

                </div>

            </div>



        </nav>
    )
}

export default Navbar
