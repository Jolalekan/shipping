import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import OutsideClickHandler from "react-outside-click-handler"

export const NavBar = () => {
    const { auth, signOut } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut()
        navigate("/login")

    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <nav className=" sticky top-0 z-10 bg-teal-700   text-neutral-700 focus:text-neutral-700 lg:py-4">

            <div className=" mx-2 md:mx-20 flex flex-wrap items-center justify-between px-3">
                <Link to="/" className="flex items-center gap-3   text-neutral-900 hover:opacity-50 focus:text-neutral-700 lg:mb-0 lg:mt-0">
                    <img className="h-20 mr-2" src="./image1.jpg" alt=""
                        loading="lazy"
                    />
                    <p className="text-2xl font-medium text-gray-100">ALOY <span className="text-lg"> LOGISTICS </span></p>
                </Link>


                <button
                    className="relative bg-gray-300 block border-0 px-2 text-neutral-500 hover:shadow-none focus:no-underline focus:outline-none focus:ring-0 lg:hidden"
                    onClick={toggleMenu}
                >
                    <span class="[&>svg]:w-7">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="h-7 w-7">
                            <path
                                fillRule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                clipRule="evenodd" />
                        </svg>
                    </span>
                </button>

                {menuOpen ? (
                    <div className="w-64 p-2 lg:hidden absolute top-0 right-0  z-10">
                        <span
                            onClick={closeMenu}
                            className="text-gray-200 text-3xl font-bold ml-2 mt-6 cursor-pointer absolute right-8 "
                        >
                            X
                        </span>
                        <OutsideClickHandler
                            onOutsideClick={() => (
                                setMenuOpen(false)
                            )}
                        >

                            <ul className=" bg-teal-700 mt-5 text-lg list-style-none pt-10 py-3  ">
                                {
                                    auth ? (
                                        <>
                                            <li className=" py-1"><NavLink to="/dashboard" className="rounded text-white font-medium p-1 block  hover:opacity-90 active:bg-gray-500">Dashboard</NavLink></li>
                                            <li ><button onClick={handleSignOut} className="inline-block rounded px-2 pb-2 pt-2.5 font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-lg focus:shadow:lg motion-reduce:none">Log Out</button></li>
                                        </>
                                    ) : (
                                        <>
                                            <li className=" py-1"><NavLink to="/login" className="rounded text-white font-medium p-2 block  hover:opacity-90 active:bg-gray-700">Login</NavLink></li>
                                            <li className="py-1"><NavLink to="/sign-up" className="rounded text-white font-medium p-2 block  hover:opacity-90 active:bg-gray-700">Sign up</NavLink></li>
                                        </>
                                    )
                                }
                                <li className="py-1"><NavLink to="/" className="rounded text-white font-medium p-2 block  hover:opacity-90 active:bg-gray-700">Home</NavLink></li>
                                <li className="py-1"><NavLink to="/tracking" className="rounded text-white font-medium p-2 block  hover:opacity-90 active:bg-gray-700">Tracking</NavLink></li>
                                <li className="py-1"><NavLink to="/service" className="rounded text-white font-medium p-2 block  hover:opacity-90 active:bg-gray-700">Service</NavLink></li>
                                <li className="py-1"><NavLink to="/about" className="rounded text-white p-2 block  hover:opacity-90 active:bg-gray-700">About</NavLink></li>
                                <li className="py-1"> <NavLink to="/contact" className="rounded text-white p-2 block  hover:opacity-90 active:bg-gray-700">Contact</NavLink></li>

                            </ul>
                        </OutsideClickHandler>
                    </div>
                ) : null}



                <div className=" mt-2 hidden lg:!flex basis-[100%] items-center lg:mt-1 md:hidden  lg:basis-auto ">
                    <ul className="flex items-center">
                        {auth ? (

                            <>
                                <li>
                                    <NavLink to="/dashboard" className="hover:opacity-90 bg-teal-600 mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium text-white transition duration-150 ease-in-out hover:bg-gray-800 focus:text-gray-800 focus:outline-none active:text-red-200 motion-reduce:transition-none">
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li>
                                    <button onClick={handleSignOut} className=" mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-x font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-lg focus:shadow:lg motion-reduce:none">
                                        log Out
                                    </button>
                                </li>
                            </>
                        )
                            : (
                                <>
                                    <li>
                                        <NavLink to="/login" className="hover:opacity-80 bg-gray-800 mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-x font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-lg focus:shadow:lg motion-reduce:none">
                                            Login
                                        </NavLink>
                                    </li>

                                    <li >
                                        <NavLink to="/signUp" className="hover:opacity-80 bg-gray-800 mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-x font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-lg focus:shadow:lg motion-reduce:none">
                                            Sign up here
                                        </NavLink>
                                    </li>
                                </>)
                        }
                        <li >
                            <NavLink to="/" className="hover:opacity-80 bg-gray-800 mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-x font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-lg focus:shadow:lg motion-reduce:none">
                                Home
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to="/tracking" className="hover:opacity-80 bg-gray-800 mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-x font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-lg focus:shadow:lg motion-reduce:none">
                                Tracking
                            </NavLink>
                        </li>
                        <>
                            <li>
                                <NavLink to="/about" className="hover:opacity-80 bg-gray-800 mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-x font-medium text-white transition duration-150 ease-in-out hover:bg-red-300 focus:text-red-300 focus:outline-none active:text-red-200 motion-reduce:transition-none">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/service" className="hover:opacity-80 bg-gray-800 mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-x font-medium text-white transition duration-150 ease-in-out hover:bg-red-300 focus:text-red-300 focus:outline-none active:text-red-200 motion-reduce:transition-none">
                                    Service
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="hover:opacity-80 bg-gray-800 mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-x font-medium text-white transition duration-150 ease-in-out hover:bg-red-300 focus:text-red-300 focus:outline-none active:text-red-200 motion-reduce:transition-none">
                                    Contacts
                                </NavLink>
                            </li>

                        </>
                    </ul>
                </div>
            </div>
        </nav>
    )
}