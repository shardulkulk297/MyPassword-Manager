import React, { useEffect, useRef, useState } from 'react'

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem("passwords")

        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
        // else{
        //     passwordArray = [];
        // }

    }, [])

    const showPassword = () => {
        // alert("show ");
        passwordRef.current.type = "text";

        if (ref.current.src.includes("icons/crosseye.png")) {
            ref.current.src = "icons/eye.png";
            passwordRef.current.type = "password";
        }
        else {
            passwordRef.current.type = "text";
            ref.current.src = "icons/crosseye.png";

        }


    }
    const savePassword = () => {
        console.log(form);
        setpasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log(passwordArray)



    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-700 opacity-20 blur-[100px]"></div>
            </div>

            <h1 className='text-4xl font-bold text-center'>
                <span className='text-green-700'>&lt;</span>

                My
                <span className='text-green-600'>Pass&gt;</span>
            </h1>

            <p className='text-green-900 text-lg text-center'>Your own Password manager</p>
            <div className="mx-auto max-w-4xl ">

                <div className=' flex flex-col p-4 text-black items-center'>

                    <input name='site' onChange={handleChange} value={form.site} placeholder="Enter Website URL" className='rounded-full border-green-500 w-full p-4 py-1 m-4' type="text" />
                    <div className="flex w-full justify-between gap-8">
                        <input name='username' onChange={handleChange} value={form.username} placeholder='Enter username' className='rounded-full border-green-500 w-full p-4 py-1 m-4' type="text" />
                        <div className="relative">

                            <input ref={passwordRef} name='password' onChange={handleChange} value={form.password} placeholder="Enter Password" className='rounded-full border-green-500 w-full p-4 py-1 m-4 ' type="password" />
                            <span className='absolute  right-0 top-4'>
                                <img ref={ref} className='p-1 cursor-pointer' onClick={showPassword} width={30} src="/icons/eye.png" alt="eye" />
                            </span>
                        </div>

                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center bg-green-400 px-6 py-2 rounded-full w-fit font-bold hover:bg-green-300 border border-green-900 gap-4'>
                        <lord-icon
                            src="https://cdn.lordicon.com/zrkkrrpl.json"
                            trigger="hover"

                            stroke="bold"
                            colors="primary:#000000,secondary:#000000"
                        >
                        </lord-icon>
                        Add Password</button>

                </div>

                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div className='font-bold '>No passwords to show </div>}
                    {passwordArray.length !== 0 &&
                        <table className="table-auto w-full overflow-hidden rounded-md ">
                            <thead className='bg-green-800 text-white'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className='py-2 border border-white text-center w-32 '><a href={item.site} target='_blank'>{item.site}</a>
                                            <div className='cursor-pointer '>
                                                

                                            </div>


                                        </td>
                                        <td className='py-2 border border-white text-center w-32'>{item.username}</td>
                                        <td className='py-2 border border-white text-center w-32'>{item.password}</td>
                                    </tr>

                                })}


                            </tbody>
                        </table>}


                </div>

            </div>


        </div>
    )
}

export default Manager
