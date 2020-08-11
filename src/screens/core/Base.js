import React from 'react'
import '../../App.css';
const Base = ({
    children
}) => {
    return (
        <div>
            <header>
                <header className="text-gray-700 body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
                            <img
                                src="https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/78891378_806930206423484_3888794480790208512_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=ZYo19tGLIikAX-c46bZ&oh=f0f6ad02bf254e05638735e95f3e1ff3&oe=5F59B5BD" alt="logo"
                                className="w-10 h-10 text-white p-1 bg-indigo-500 rounded-full"
                                style={{ borderRadius: 100, width: 60, height: 60 }}
                            />
                            <span className="ml-3 text-xl">Trading Brands</span>
                        </a>
                        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                            <a className="mr-5 hover:text-gray-900" href="/">Home</a>
                            <a className="mr-5 hover:text-gray-900" href="/">Dashboard</a>
                            <a className="mr-5 hover:text-gray-900" href="/">Cart</a>
                            <a className="mr-5 hover:text-gray-900" href="/">Login</a>
                            <a className="mr-5 hover:text-gray-900" href="/">Logout</a>
                        </nav>
                    </div>
                </header>
            </header>
            {children}
            <footer className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    {/* 
                 */}
                    <div style={{ textAlign: "center" }}>
                        <div>
                            <div>
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href="/">First Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href="/">Second Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href="/">Third Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href="/">Fourth Link</a>
                                    </li>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bg-gray-200">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="/">
                            <img
                                src="https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/78891378_806930206423484_3888794480790208512_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=ZYo19tGLIikAX-c46bZ&oh=f0f6ad02bf254e05638735e95f3e1ff3&oe=5F59B5BD" alt="logo"
                                className="w-10 h-10 text-white p-1 bg-indigo-500 rounded-full"
                                style={{ borderRadius: 100, width: 60, height: 60 }}
                            />
                            <span className="ml-3 text-xl">Trading Brands</span>
                        </a>
                        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2020 trading_brands
                          <a href="https://twitter.com/tushark39" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@tushark39</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a className="text-gray-500" href="/">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500" href="/">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500" href="/">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500" href="/">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx={4} cy={4} r={2} stroke="none" />
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>

        </div>
    )
}
export default Base;