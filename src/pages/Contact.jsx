import React from 'react'
import img1 from "/public/calogo1 2.png"
const Contact = () => {
  return (
    <>
    <div className="w-full bg-black px-6 py-8 font-sans text-white lg:px-16">
      <div className="relative flex w-full flex-col items-center overflow-hidden rounded-[48px] bg-neutral-900 lg:flex-row lg:justify-between">
        <div className="w-full px-8 py-12 w-[62%] px-16 py-20">
          <h2 className="text-3xl font-medium text-neutral-200 lg:text-4xl">
            Our Comprehensive
            <span className="font-bold text-blue-500">Digital Solutions</span>
          </h2>
 
          <p className="mt-12 text-sm text-neutral-300">
            At Catalyst Analytics, we offer a comprehensive suite of digital
            solutions designed to propel your business to new heights in the
            digital realm. With a team of skilled professionals, cutting-edge
            technologies, and a passion for innovation, we are committed to
            delivering exceptional results for every project we undertake. From
            captivating web design that leaves a lasting impression to seamless
            web development that ensures optimal functionality, we cover every
            aspect of your online presence.
          </p>
        </div>
 
        <img
          src={img1}
          alt="Digital solutions"
          className="h-auto w-[280px] lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-auto"
        />
      </div>
    </div>
    <div className="w-full bg-black px-6 py-10 font-sans text-white lg:px-8">
      <div className="grid w-full gap-8 lg:grid-cols-2">
      
        <div className="rounded-[32px] bg-neutral-900 p-10">
          <h2 className="text-xl font-semibold">Send Us a Message</h2>
 
          <form className="mt-10 flex flex-col gap-6">
            <div className="grid gap-4 grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-md bg-neutral-800 px-4 py-4 text-sm outline-none placeholder:text-neutral-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-md bg-neutral-800 px-4 py-4 text-sm outline-none placeholder:text-neutral-400"
              />
            </div>
 
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md bg-neutral-800 px-4 py-4 text-sm outline-none placeholder:text-neutral-400"
            />
 
            <input
              type="text"
              placeholder="Company"
              className="w-full rounded-md bg-neutral-800 px-4 py-4 text-sm outline-none placeholder:text-neutral-400"
            />
 
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-md bg-neutral-800 px-4 py-4 text-sm outline-none placeholder:text-neutral-400"
            />
 
            <textarea
              placeholder="Message"
              className="h-32 w-full resize-none rounded-md bg-neutral-800 px-4 py-4 text-sm outline-none placeholder:text-neutral-400"
            />
 
            <button
              type="submit"
              className="w-full rounded-md bg-blue-500 py-4 text-sm font-semibold text-white"
            >
              Send
            </button>
          </form>
        </div>
 
        {/* Правая колонка */}
        <div className="flex flex-col gap-6">
          <div className="rounded-[32px] bg-neutral-900 p-10">
            <h2 className="text-xl font-semibold">Contact Information</h2>
 
            <div className="mt-6 flex flex-col gap-6">
              <div>
                <h3 className="text-base font-semibold">Email</h3>
                <p className="mt-1 text-sm text-neutral-300">
                  contact@catalystanalytics.io
                </p>
              </div>
 
              <div>
                <h3 className="text-base font-semibold">Phone</h3>
                <p className="mt-1 text-sm text-neutral-300">(469) 712-4672</p>
              </div>
 
              <div>
                <h3 className="text-base font-semibold">Office</h3>
                <p className="mt-1 text-sm text-neutral-300">
                  5511 Parkcrest Dr, Suite 103
                  <br />
                  Austin, TX 78731
                  <br />
                  United States
                </p>
              </div>
            </div>
          </div>
 
          <div className="rounded-[32px] bg-neutral-900 p-10">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <p className="mt-6 text-sm text-neutral-300">
              Want to discuss your project in detail? Schedule a free 30-minute
              consultation with our team of experts. We'll help you understand
              how our solutions can benefit your business.
            </p>
            <button
              type="button"
              className="mt-6 w-full rounded-md bg-blue-500 py-4 text-sm font-semibold text-white"
            >
              Book a Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact