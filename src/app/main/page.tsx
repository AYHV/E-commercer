import Navbar from '@/component/Navbar';
import React from 'react';
import Sidebar from '@/component/Sidebar';

const MainPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex flex-wrap justify-center items-center p-4 flex-1">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="w-50 h-100 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-4">
                            <a href="#">
                                <img className="rounded-t-lg h-1/2" src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/97b6b340-153a-4a9c-acec-1bbf909b3668/dunk-low-shoes-15mQNw.png" alt="" width={250} height={100} />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here .</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainPage;
