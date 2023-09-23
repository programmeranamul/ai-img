import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import { toast } from "react-toastify";
import { useContext } from 'react';
import { AuthContext } from '../App';

function SingIn() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const { auth, setAuth } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const url = " http://localhost:8000/api/v1/signin"
            const res = await axios.post(url, { email, password })
            localStorage.setItem('x', JSON.stringify(res?.data));
            setAuth(true)
            setLoading(false)
            navigate('/admin/manage-blog');
        } catch (e) {            
            setLoading(false)
            setAuth(false)
            return toast.error("Email or Password invalid");
        }


    }

    return (

        <section className="bg-[#111] pb-[40px] min-h-screen">
            <div className='container'>
                <Header />
                <div className="flex flex-col pt-[50px] items-center justify-center px-6 mx-auto  ">
                    <div className="w-full bg-[#212121] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                    <input type="email" name="email" className="bg-[#111] w-full text-white p-2.5 rounded-lg outline-none" placeholder="Your Email" required={true} value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                    <input type="email" name="password" className="bg-[#111] w-full text-white p-2.5 rounded-lg outline-none" placeholder="••••••••" required={true} onChange={e => setPassword(e.target.value)} />
                                </div>

                                <div className="flex items-center justify-between">

                                    <Link to="/" className="text-sm font-medium text-white hover:underline ">Forgot password?</Link>
                                </div>
                                <button disabled={loading} onClick={(e) => handleSubmit(e)} className="w-full text-white bg-[#111]  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">{loading ? "Loading..." : "Sign in"}</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link to="/admin/singup" className="font-medium hover:underline text-white">Sign in</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingIn