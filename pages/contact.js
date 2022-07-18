/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-empty */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import { useState } from 'react'
import { indexQuery, settingsQuery } from '../lib/queries'
import { getClient } from '../lib/sanity.server'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import SocialMedia from '../components/social-media'

import Location from '../icons/location' 
import Phone from '../icons/phone'
import Mail from '../icons/email'
import Facebook from '../icons/facebook'
import Twitter from '../icons/twitter'
import Instagram from '../icons/instagram'


export default function Contact({webSettings, preview})
{
    // Company days of operation
    const standardDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const [hoursData, setHoursData] = useState(webSettings[0].hours)
    const [days, setDays] = useState(standardDays)
    const [companyEmail, setCompanyEmail] = useState(webSettings[0].websiteInfo.contact.email)

    // Social Media
    const [socialMedia, setSocialMedia] = useState(Object.keys(webSettings[0].websiteInfo.socialMedia))


    return (
        <Layout preview={preview}>

            {/* Navbar */}
            <section>
                <div className="bg-gray-900">
                   <Navbar />   
                </div>
                              
            </section>
        
                        
            {/* Additional Contact Information */}
            <section className="p-12 lg:p-24 text-white bg-gray-900 h-full lg:h-screen">
                <div className="lg:flex mb-4">
                    <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text leading-relaxed bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                        Let's get in touch.

                        <span className="sr-only">
                        Contact Us Page
                        </span>
                    </h1>

                    <p className="mt-4 sm:leading-relaxed sm:text-xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                    </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-center gap-4">
                    <div className="block p-8 bg-gray-900 border border-gray-800 shadow-xl rounded-xl space-y-4 lg:w-1/4">

                        <h3 className="mt-3 text-2xl font-bold text-white text-center lg:text-start">Find us at</h3>
                        <div className="space-y-6">
                            <address id="address" className="mt-2 not-italic"> <Location className="inline-flex" width={20} height={20} fill={'hotpink'}/> 282 Kevin Brook, Imogeneborough, CA 58517</address>
                            <p> <Phone className="inline-flex" width={20} height={20} fill="hotpink" /> (555) 555 - 5555</p>
                            <p> <Mail className="inline-flex" width={20} height={20} fill="hotpink" /><a className="hover:text-teal-700" href={"mailto:"+companyEmail}> {companyEmail}</a></p>
                            
                            {/* Social Media */}
                            <div>
                            <ul className="flex gap-6 md:gap-8">
                                {
                                socialMedia.map((link, index) => 
                                    {
                                    if (link == "facebook")
                                    {
                                        return <SocialMedia key={index} name={link} url={webSettings[0].websiteInfo.socialMedia[link]}> <Facebook fill='white'/> </SocialMedia>
                                    }
                                    else if (link == "tweeter")
                                    {
                                        return <SocialMedia key={index} name={link} url={webSettings[0].websiteInfo.socialMedia[link]}> <Twitter fill='white'/> </SocialMedia>
                                    }
                                    else if (link == "youtube")
                                    {
                                        // console.log(link)
                                        return <SocialMedia key={index} name={link} url={webSettings[0].websiteInfo.socialMedia[link]}> <span className="text-white font-bold">YouTube</span> </SocialMedia>
                                    }
                                    else if (link == "instagram")
                                    {
                                        return <SocialMedia key={index} name={link} url={webSettings[0].websiteInfo.socialMedia[link]}> <Instagram fill='white'/></SocialMedia>
                                    }
                                    }
                                )
                                }

                            </ul>                            
                        </div>

                        
                        </div>
                    </div>

                    <div className="block p-8 bg-gray-900 border border-gray-800 shadow-xl rounded-xl space-y-4 lg:w-1/4">

                        <h3 className="mt-3 text-2xl font-bold text-white text-center lg:text-start">Hours of Operation</h3>

                        <ul className="text-start space-y-6">
                        {
                            days.map((day, index) => hoursData[day.toLowerCase()].from == null && hoursData[day.toLowerCase()].to == null ? <li key={index}> <span className="font-semibold"> {day}: </span> Closed </li> : <li key={index}> <span className="font-bold"> {day}: </span> {hoursData[day.toLowerCase()].from} - {hoursData[day.toLowerCase()].to}</li>)

                        }
                        </ul>
                    </div>

                    <div className="block p-8 bg-gray-900 border border-gray-800 shadow-xl rounded-xl space-y-4 lg:w-1/4">
                        <h3 className="mt-3 text-2xl font-bold text-white text-center lg:text-start">Helpful Links</h3>

                        <ul className="list-disc marker:text-pink-400 space-y-6">
                            <li> <Link href="/"> Read our blog posts to learn more.</Link></li>
                            <li> Financing Calculator </li>
                            <li> Service Scheduling </li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col items-center space-y-4 mt-4">
                    <p className="text-2xl font-semibold text-center">Want to send us a message?</p>
                    <Link activeClass="active" to="contactUs" spy={true} smooth={true} className="cursor-pointer">
                        <svg className="w-6 h-6 text-pink-400 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </Link>

                </div>
            </section>



            {/* Contact Us Section */}
            <section name="contactUs">
                <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 bg-gradient-to-r from-sky-400 to-blue-700">
                    {/* Background Image -- map  */}
                    {/* style={{backgroundColor: 'rgba(105, 133, 172, .9)'}} */}
                    <div className="col-start-1 row-start-1 row-end-2 col-end-3 z-10" >
                        <img src="https://i.imgur.com/2Xk1rmC.png" className="w-full h-full opacity-40" alt="" /> 
                    </div>

                    {/* Contact Us Form */}
                <div className="bg-white lg:rounded-lg shadow-lg lg:m-12 p-12 col-start-1 row-start-1 lg:col-start-2 lg:col-end-3 z-50 self-center">
                    <h2 className="text-4xl font-bold"> Send a Message </h2>
                    <form className="space-y-4 pt-6" onSubmit={(e) => console.log(e.target.value)}>
                    <div>
                        <label className="sr-only" htmlFor="name">Name</label>
                        <input 
                        className="w-full p-3 text-sm border border-gray-200 rounded-lg" 
                        placeholder="Name" 
                        type="text" 
                        id="name" 
                        //   value={name}
                        onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input
                            onChange = {(e) => setEmail(e.target.value)}
                            className="w-full p-3 text-sm border border-gray-200 rounded-lg"
                            placeholder="Email address"
                            type="email"
                            id="email"
                            // value={email}
                        />
                        </div>

                        <div className="hidden">
                        <input
                            onChange = {(e) => setFakeEmail(e.target.value)}
                            className="w-full p-3 text-sm border border-gray-200 rounded-lg"
                            placeholder="Email address"
                            type="email"
                            id="email"
                            // value={fakeEmail}
                        />
                        </div>

                        <div>
                        <label className="sr-only" htmlFor="phone">Phone</label>
                        <input
                            onChange = {(e) => setPhone(e.target.value)}
                            className="w-full p-3 text-sm border border-gray-200 rounded-lg"
                            placeholder="Phone Number"
                            type="tel"
                            id="phone"
                            // value={phone}
                        />
                        </div>
                    </div>

                    <div>
                        <label className="sr-only" htmlFor="message">Message</label>
                        <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 text-sm border border-gray-200 rounded-lg"
                        placeholder="Message"
                        rows="8"
                        id="message"
                        //   value={message}
                        ></textarea>
                    </div>

                    <div className="mt-4">
                        <button
                        className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                        >
                        <span className="font-medium"> Send Message </span> 

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 ml-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        </button>
                    </div>
    {/* 
                    <div>
                        {error ? 
                        <p> <span className="text-red-600 text-lg italic">Please fill out the form.</span> </p> : null }

                        {
                        submitted ?
                        <p className="text-green-600 text-lg italic"> Form submitted!</p> : null
                        }
                    </div> */}
                    </form>
                </div>

                </div>                
            </section>



        </Layout>
    )
}

export async function getStaticProps({ preview = false }) {
  
    const webSettings = await getClient(preview).fetch(settingsQuery)
  
    return {
      props: { preview, webSettings },
    }
  }
