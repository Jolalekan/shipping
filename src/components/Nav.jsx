
export const Nav = () => {
    return (
        <section className="bg-teal-700 text-white sticky">
            <header className="bg-black mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="bg-blue-200 relative flex h-16 items-center justify-between">
                    <div className="bg-red-500 absolute inset-y-0 left-0 flex items-center sm:hidden ">
                        <button className="bg-gray-900 relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-700">
                            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {/* close button */}
                            <hr />
                            <div className="bg-green-500">
                                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </button>
                    </div>

                    <div className="bg-teal-500 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="bg-yellow-400 flex flex-shrink-0 items-center">
                            <img class="h-10 w-auto bg-gray-200 " src="./aloy-logo.png" alt="Your Company" />
                        </div>

                        <div className=" hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="" className="hover:opacity-25">HOME</a>
                                <a href="" className="hover:opacity-25">ABOUT US</a>
                                <a href="" className="hover:opacity-25">TRACK N TRACE</a>
                                <a href="" className="hover:opacity-25">CONTACT</a>
                                <a href="" className="hover:opacity-25">SERVICES</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-200 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button className="bg-blue-700  relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5 "></span>
                            <span className="sr-only">view notification</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>
                        <div>

                            <div className="bg-red-700 relative ml-3">
                                <button className="bg-gray-200 relative flex rounded-full text-sm focus:outline-none focus:ring-offset-gray-800">
                                    <span className="sr-only">open user menu</span>
                                    <img class="h-8 w-8 rounded-full" src="./image1.jpg" alt="" />
                                </button>
                            </div>

                            <div className="bg-green-800 absolute right-0 z-40 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <a href="" className="block px-4 py-2 text-sm ">Settings</a>
                                <a href="" className="block px-4 py-2 text-sm ">MENU</a>
                                <a href="" className="block px-4 py-2 text-sm ">Sign Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="hidden bg-red-300">
                <div className="space-y-2 px-2">
                    <a href=""className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium">HOME</a>
                    <a href="" className="text-gray-300 hover:bg-gray700 hover:text-white block rounded-md px-3 py-2 font-medium">ABOUT US</a>
                    <a href=""  className="text-gray-300 hover:bg-gray700 hover:text-white block rounded-md px-3 py-2 font-medium">TRACK N TRACE</a>
                    <a href=""  className="text-gray-300 hover:bg-gray700 hover:text-white block rounded-md px-3 py-2 font-medium">CONTACT</a>
                </div>
            </div>
        </section>
    )
}


{/* <div>
            <img src="./aloy-logo.png" alt="" width={200} />
            </div>
            <nav className="hidden md:block  space-x-8">
                <a href="" className="hover:opacity-25">HOME</a>
                <a href="" className="hover:opacity-25">ABOUT US</a>
                <a href="" className="hover:opacity-25">TRACK N TRACE</a>
                <a href="" className="hover:opacity-25">CONTACT</a>
                <a href="" className="hover:opacity-25">SERVICES</a>

            </nav>
            <div className="hidden">
                <button>

                </button>
            </div> */}