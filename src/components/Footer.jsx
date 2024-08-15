import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-700 font-bold text-white flex flex-col justify-center items-center bottom-0 w-full '>
             <div className="logo font-bold h-7 text-white text-2xl">
                    <span className='text-green-700'>&lt;</span>

                    My
                    <span className='text-green-700'>Pass&gt;</span>
                </div>
            <div className='flex w-15'>
                Creator-<a href="https://www.linkedin.com/in/shardulkulk297/">Shardul Kulkarni</a>

            </div>

        </div>
    )
}

export default Footer
