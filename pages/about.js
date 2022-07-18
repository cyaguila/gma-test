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

export default function About({preview}) {
    return (
        <Layout preview={preview}>

            {/* Navbar */}
            <section>
                <div className="bg-gray-900">
                   <Navbar />   
                </div>       
            </section>



            <aside className="flex p-12 bg-gray-900 sm:p-16 lg:p-24 h-full">
                <div className="self-center max-w-xl mx-auto text-center">


                <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text leading-relaxed bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                        We're more than just a car dealer.

                        <span className="sr-only">
                        Contact Us Page
                        </span>
                    </h1>

                    <p className="mt-4 sm:leading-relaxed text-white sm:text-xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                    </p>

                    <Link activeclassName="active" to="aboutUs" spy={true} smooth={true} className="cursor-pointer flex justify-center mt-6">
                            <svg className="w-6 h-6 text-pink-400 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                    </Link>
                </div>
            </aside>

            {/* Who We Are */}
            <section name="aboutUs">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 px-4 py-12 lg:py-20">

                    <div className="col-start-1 row-start-1 justify-self-center">

                        <img src="https://i.imgur.com/xUCPJ9h.png" className="rounded-lg"/>
                    
                    </div>

                    <div className="max-w-screen-xl px-4 py-4 lg:py-16 mx-auto sm:px-6 lg:pr-72 lg:px-8 col-start-1 row-start-2 lg:col-start-2 lg:row-start-1 self-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Who We Are</h2>

                        <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                        atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                        veniam tempora deserunt? Molestiae eius quidem quam repellat.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                        atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                        veniam tempora deserunt? Molestiae eius quidem quam repellat.
                        </p>

                        <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                        atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                        veniam tempora deserunt? Molestiae eius quidem quam repellat.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                        atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                        veniam tempora deserunt? Molestiae eius quidem quam repellat.
                        </p>
                    </div>
                
                </div>            
            </section>

            {/* Who We Are */}
            <section name="aboutUs" className="bg-sky-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 px-4 py-12 lg:py-20">
                    <div className="col-start-1 row-start-1 self-center lg:pl-72 px-4 lg:px-8">
                        <h2 className="text-3xl font-bold sm:text-4xl">Our Goals & Values</h2>

                        <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                        atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                        veniam tempora deserunt? Molestiae eius quidem quam repellat.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                        atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                        veniam tempora deserunt? Molestiae eius quidem quam repellat.
                        </p>

                        <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                        atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                        veniam tempora deserunt? Molestiae eius quidem quam repellat.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                        atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                        veniam tempora deserunt? Molestiae eius quidem quam repellat.
                        </p>
                    </div>

                    <div className="max-w-screen-xl px-4 py-4 lg:py-16 mx-auto sm:px-6 lg:px-8 col-start-1 row-start-2 lg:col-start-2 lg:row-start-1 self-center">

                        <img src="https://i.imgur.com/xUCPJ9h.png" className="rounded-lg"/>
                    
                    </div>


                
                </div>            
            </section>


            <section className="bg-gray-100">
                <div className="max-w-screen-xl px-4 py-20 mx-auto md:py-16 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Trusted by eCommerce Businesses
                    </h2>

                    <p className="mt-4 text-gray-500 sm:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
                        laborum labore provident impedit esse recusandae facere libero harum
                        sequi.
                    </p>
                    </div>

                    <div className="mt-8 sm:mt-12">
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div
                        className="flex flex-col px-4 py-8 text-center border border-gray-800 rounded-lg"
                        >
                        <dt className="order-last text-lg font-medium text-gray-500">
                            Total Sales
                        </dt>

                        <dd className="text-4xl font-extrabold text-pink-500 md:text-5xl">
                            $4.8m
                        </dd>
                        </div>

                        <div
                        className="flex flex-col px-4 py-8 text-center border border-gray-800 rounded-lg"
                        >
                        <dt className="order-last text-lg font-medium text-gray-500">
                            Offical Addons
                        </dt>

                        <dd className="text-4xl font-extrabold text-pink-500 md:text-5xl">24</dd>
                        </div>

                        <div
                        className="flex flex-col px-4 py-8 text-center border border-gray-800 rounded-lg"
                        >
                        <dt className="order-last text-lg font-medium text-gray-500">
                            Total Addons
                        </dt>

                        <dd className="text-4xl font-extrabold text-pink-500 md:text-5xl">86</dd>
                        </div>
                    </dl>
                    </div>
                </div>
                </section>




        </Layout>
    )
}