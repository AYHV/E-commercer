import React from 'react'

const LoginPage = () => {
  return (
    <div className='h-screen bg-gray-300 flex justify-center items-center'>
      <form className="max-w-sm w-4/5 sm:w-2/3 md:w-1/2  h-2/3 flex flex-col justify-center items-center space-y-4 p-4 bg-blue-500 rounded-lg shadow-lg dark:shadow-none">
        {/* Image Upload Section */}
        <div className="mb-5 w-[300px]">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Picture</label>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" accept="image/*" />
            </label>
          </div>
        </div>

        {/* Existing Form Fields */}
        <div className="mb-5 w-[300px]">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text- text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your @exmail" required />
        </div>
        <div className="mb-5 w-[300px]">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 tex text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 !text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Your Passswork' required />
        </div>
        <div className="flex items-start mb-5 w-[300px]">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

      <div className='bg-purple-500 max-w-sm w-4/5 sm:w-2/3 md:w-1/2 h-2/3 flex flex-col justify-center items-center space-y-4 p-4 rounded-lg shadow-lg dark:shadow-none'>
        <h3 className='text-3xl p-[30px] font-bold'>Hello</h3>
        <button type="button" className="text-white bg-gradient-to-br from-blue-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">SIGN UP</button>
      </div>
    </div>
  )
}

export default LoginPage