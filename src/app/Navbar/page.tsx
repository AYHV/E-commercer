'use client'
import React from 'react'

const Navbar = () => {
  const handleTranslation = (lang: string) => {
    // Add your translation logic here
    console.log(`Switching to language: ${lang}`);
  };

  return (
    <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-bold">
                <img src="/path/to/logo.png" alt="Logo" className="h-8 inline-block mr-2" />
                My Website
            </div>
            <div className="space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">Home</a>
                <a href="#" className="text-gray-300 hover:text-white">About</a>
                <a href="#" className="text-gray-300 hover:text-white">History</a>
            </div>
            <div className="translate-buttons text-white space-x-4">
                {/* <button className="translate-btn" data-lang="ko">한국어</button> */}
                <button 
                    className="hover:text-gray-300" 
                    data-lang="en"
                    onClick={() => handleTranslation('en')}
                >
                    English
                </button>
                <button 
                    className="translate-btn hover:text-gray-300" 
                    data-lang="lo"
                    onClick={() => handleTranslation('lo')}
                >
                    ພາສາລາວ
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar