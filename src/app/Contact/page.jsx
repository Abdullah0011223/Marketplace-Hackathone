'use client'
import React, { useState } from 'react'
import WebsiteBanner from '../components/WebsiteBanner'
import Input from '../components/Input'
import Gurantees from '../components/Gurantees'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm, ValidationError } from '@formspree/react'

function Guide({ src, title, desc }) {
  return (
    <div className="flex gap-4 px-4 items-start w-full">
      <img src={src} className="mt-[1rem] size-[2em] object-cover" alt="" />
      <div>
        <h1 className="md:text-[1.8rem] font-semibold text-blue-900 tracking-wide text-[1.5em]">
          {title}
        </h1>
        <p className="font-light text-sm w-[16em] text-gray-700" dangerouslySetInnerHTML={{ __html: desc }} />
      </div>
    </div>
  )
}

const page = () => {
  const [state, handleSubmit] = useForm('mjkveovj')
  const [toastShown, setToastShown] = useState(false)

  if (state.succeeded && !toastShown) {
    toast.success('Message sent successfully!')
    setToastShown((prev) => !prev)
    document.getElementById('contact').reset()
  }

  return (
    <div className="bg-gray-100">
      <WebsiteBanner title={'Contact'} />
      <div className="cp py-[2rem] flex-between flex-col md:py-[3rem]">
        <h1 className="capitalize text-[1.8em] tracking-wide font-semibold md:text-[2.4em] text-blue-900">
          Get in Touch With Us
        </h1>
        <p className="text-[.9em] text-gray-700 text-center font-medium md:text-[1em]">
          For more information about our products & services, please feel free to
          drop us an email. Our staff will always be there to help you.
        </p>
        
        {/* Contact Info & Form */}
        <main className="cp w-full justify-between md:flex gap-8 mt-[3em]">
          {/* Guide Section */}
          <section className="md:w-[40%] gap-8 md:cp flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md">
            <Guide src={'/images/Location.png'} title="Address" desc="236 5th SE Avenue, New York NY10000, United States" />
            <Guide src={'/images/Phone.png'} title="Phone" desc="Mobile: +(84) 546-6789 <br/> Hotline: +(84) 456-6789" />
            <Guide src={'/images/clonk.png'} title="Working Time" desc="Monday-Friday: 9:00 - 22:00 <br/> Saturday-Sunday: 9:00 - 21:00" />
          </section>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            id="contact"
            className="md:w-[55%] flex flex-col md:items-center gap-y-6 w-full bg-white p-8 rounded-lg shadow-lg"
          >
            <Input title="Your Name" placeholder="ABC" />
            <ValidationError prefix="Your Name" field="your name" errors={state.errors} />
            
            <Input title="Email Address" placeholder="abc@defgmail.com" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <Input required title="Subject" placeholder="This is an optional" />
            <ValidationError prefix="Subject" field="subject" errors={state.errors} />

            <Input title="Message" placeholder="Hey! I'd like to ask about." />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button 
              type="submit" 
              className="rounded-lg text-lg px-4 py-3 bg-blue-600 text-white font-medium uppercase shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Send Message
            </button>

            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </form>
        </main>
      </div>
      <Gurantees />
    </div>
  )
}

export default page
