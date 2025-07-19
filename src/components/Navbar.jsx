import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className="text-purple-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-purple-900 mb-4 md:mb-0">
      <img src="logo.webp" alt="logo" width={30} height={30} />
      <span className="ml-3 text-xl">inferto</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href='/' className="mr-5 hover:text-purple-900">Home</a>
      <a href='/about' className="mr-5 hover:text-purple-900">About</a>
      <a href='/contact' className="mr-5 hover:text-purple-900">Contact</a>
  
    </nav>
    <button className="inline-flex items-center bg-purple-100 border-0 py-1 px-3 focus:outline-none hover:bg-purple-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar
