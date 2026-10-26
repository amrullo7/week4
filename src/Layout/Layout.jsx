import React from 'react'
import  {Link, Outlet}  from 'react-router'
import logo from '/public/Logo.png'

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-black font-sans text-white">
      <header className="flex w-full items-center justify-between px-6 py-5 lg:px-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Catalyst Analytics" className="h-10 w-auto" />
   
        </Link>
 
        <nav className="hidden items-center gap-10 text-sm text-white/90 md:flex">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/career-details">Career Details</Link>
          <Link to="/contact">Contact</Link>
        </nav>
 
        <button className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white">
          Contact Us
        </button>
      </header>
 
      
    
      <Outlet />
       <footer className="w-full border-t border-neutral-700 bg-black px-6 py-8 font-sans text-white lg:px-8">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Catalyst Analytics" className="h-8 w-auto" />

        </Link>
 
        <nav className="flex items-center gap-6 text-xs font-medium">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>
 
        <div className="hidden w-[160px] md:block" />
      </div>
 
      <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <span>contact@catalystanalytics.io</span>
          <span>+1 (469) 712-4672</span>
          <span>5511 Parkcrest Dr, Suite 103, Austin, TX 78731</span>
        </div>
 
        <div className="flex items-center gap-6 text-white/60">
          <p >Privacy Policy</p>
          <p >Terms of Service</p>
        </div>
      </div>
 
      <p className="mt-8 text-center text-xs text-white/60">
        © 2025 Catalyst Analytics. All rights reserved.
      </p>
    </footer>
    </div>
  )
}

export default Layout