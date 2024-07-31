import React from 'react'

const Manager = () => {
    return (
        <div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-600 opacity-20 blur-[100px]"></div></div>

            <h1 className='text-4xl font-bold text-center'>
            <span className='text-green-700'>&lt;</span>

            My
            <span className='text-green-700'>Pass&gt;</span>
            </h1>

            <p className='text-green-900 text-lg text-center'>Your own Password manager</p>
            <div className="mx-auto bg-slate-50 mycontainer">

                <div className='text-white flex flex-col p-4'>

                    <input className='rounded-full' type="text" />
                    <div className="flex">
                        <input type="text" />
                        <input type="text" />
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Manager
