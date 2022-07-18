/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-empty */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useState } from 'react'

// Lib data
import {indexQuery, idQuery, fullQuery} from '../../lib/queries'
import {findCar} from '../../lib/data'
import {carTabs} from '../../lib/constants'
import { getClient } from '../../lib/sanity.server'

// Components
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'

// Swiper 
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



// rendering individual car data
export default function Car({ car })
{
    const name = String(car.year) + " "  + car.make + " " + car.model

    // Tab controls
    const arr = new Array(carTabs.length).fill(false)
    const fixedArr = arr.map((bool, index) => index == 0 ? bool = true : bool = false)

    const [activeIndex, setActiveIndex] = useState(0)
    const [checkedIndex, setCheckedIndex] = useState(fixedArr)

    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return(
        <>
            <Layout>
                {/* Header */}

                { console.log(car) }
                <section > 
                    <div className="grid grid-rows-1">
                        {/* Navbar */}
                        <div className="row-span-1 bg-gray-900">
                            <Navbar />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="grid grid-cols-1 lg:grid-cols-6 lg:space-x-4">

                        {/* First Column */}
                        <div className="col-span-4 space-y-4 mt-4 mx-2">
                           
                           
                           <div className="lg:pl-6">

                                {/* Full Image Slider */}
                                <div className="w-full" name="images">
                                    <Swiper
                                        style={{
                                            "--swiper-navigation-color": "#fff",
                                            "--swiper-pagination-color": "#fff",
                                        }}
                                        spaceBetween={6}
                                        navigation={true}
                                        thumbs={{swiper: thumbsSwiper}}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="h-1/2 w-full mb-6"
                                        >
                                            <SwiperSlide
                                                style={{}}
                                            >
                                                
                                                    <img
                                                    alt=""
                                                    src="https://i.imgur.com/Q9KaU7i.png"
                                                    className="w-full rounded-lg h-72 lg:h-full object-cover "
                                                    /> 
                                            

                                            </SwiperSlide>

                                            <SwiperSlide className="">
                                            <img
                                            alt=""
                                            src="https://i.imgur.com/Q9KaU7i.png"
                                            className="w-full rounded-lg h-72 lg:h-full object-cover"
                                            />
                                            </SwiperSlide>

                                            <SwiperSlide className="">
                                            <img
                                            alt=""
                                            src="https://i.imgur.com/Q9KaU7i.png"
                                            className="w-full rounded-lg h-72 lg:h-full object-cover"
                                            />
                                            </SwiperSlide>

                                    </Swiper>                                
                                </div>


                                {/* Thumb slider */}
                                <div className="pb-6">
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="h-1/4"
                                    >
                                        
                                            <SwiperSlide className="">
                                            <img
                                            alt=""
                                            src="https://i.imgur.com/Q9KaU7i.png"
                                            className="w-full rounded-lg h-auto lg:h-full object-cover"
                                            />
                                            </SwiperSlide>

                                            <SwiperSlide className="">
                                            <img
                                            alt=""
                                            src="https://i.imgur.com/Q9KaU7i.png"
                                            className="w-full rounded-lg h-auto lg:h-full object-cover"
                                            />
                                            </SwiperSlide>

                                            <SwiperSlide className="">
                                            <img
                                            alt=""
                                            src="https://i.imgur.com/Q9KaU7i.png"
                                            className="w-full rounded-lg h-auto lg:h-full object-cover"
                                            />
                                            </SwiperSlide>

                                    </Swiper>    
                                </div>  
                           </div>  
                        </div>

                        {/* Second Column */}
                        <div className="col-span-4 lg:col-span-2 bg-gray-100 p-6 space-y-4 lg:sticky top-0 self-start">

                            {/* Car Name & Price */}
                            <div className="space-y-2">
                                <h1 className="text-3xl lg:text-4xl font-bold  "> {name} </h1>
                                <p className="text-xl lg:text-2xl text-gray-800"> ${car.priceInet} </p>
                                <p className="text-lg lg:text-xl text-pink-600"> {car.trim} | {car.transmission} </p>
                            </div>                                
                            

                            {/* Car Description & Basic Details */}
                            <div className="space-y-4">
                                <div>
                                  <h2 className="text-xl lg:text-2xl font-bold"> Description </h2>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Ipsa veniam dicta beatae eos ex error culpa delectus rem tenetur, 
                                    architecto quam nesciunt, dolor veritatis nisi minus inventore, rerum at recusandae?</p>  
                                </div>
                                
                                <div>
                                    <h3 className="lg:text-lg font-medium italic">Disclaimer</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Ipsa veniam dicta beatae eos ex error culpa delectus rem tenetur, 
                                        architecto quam nesciunt, dolor veritatis nisi minus inventore, rerum at recusandae?</p>    
                                </div>
                                                             
                            </div>
                            
                            {/* Divider */}
                            <hr />

                            
                            {/* Basic details */}
                            <div className="space-y-4">
                                <h2 className="text-xl lg:text-2xl font-bold"> Basic Details </h2>
                                <div className="grid grid-cols-2">
                                    <p> <span className="font-bold"> Trim </span>Trim</p>
                                    <p> <span className="font-bold"> Trim </span>Trim</p> 
                                    <p> <span className="font-bold"> Trim </span>Trim</p> 
                                    <p> <span className="font-bold"> Trim </span>Trim</p>                                 
                                </div>
                            </div>  
                            
                            {/* Divider */}
                            <hr />                          
                            
                            {/* Quick links */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 text-center">

                                <div className="space-y-4">
                                    <img src="https://www.svgrepo.com/show/13812/calculator.svg" height={50} width={50} className="m-auto" />
                                    <p className="lg:text-lg font-semibold text-gray-800">Price Calculator</p>
                                </div>

                                <div className="space-y-4">
                                    <img src="https://www.svgrepo.com/show/30347/steering-wheel.svg" height={50} width={50} className="m-auto" />
                                    <p className="lg:text-lg font-semibold text-gray-800">Test Drive </p>
                                </div>

                                <div className="space-y-4">
                                    <img src="https://www.svgrepo.com/show/21383/money.svg" height={50} width={50} className="m-auto" />
                                    <p className="lg:text-lg font-semibold text-gray-800">Value your Trade </p>
                                </div>

                                <div className="space-y-4">
                                    <img src="https://www.svgrepo.com/show/290064/question.svg" height={50} width={50} className="m-auto" />
                                    <p className="lg:text-lg font-semibold text-gray-800">Ask a Question </p>
                                </div>
                            </div>

                            <hr /> 
                            
                            {/* Links to Sections */}
                            <div className="space-y-4">
                                <h2 className="text-xl lg:text-2xl font-bold"> Sections </h2>
                                <div className="grid grid-cols-2">
                                    <Link
                                        className="px-5 py-3 font-medium border rounded-l-md hover:z-10 hover:cursor-pointer focus:outline-none focus:border-indigo-600 focus:z-10 hover:bg-gray-50 active:opacity-75"
                                        to="images" spy={true} smooth={true}
                                    >
                                        Images
                                    </Link>

                                    <Link
                                        className="px-5 py-3 font-medium border hover:z-10 focus:outline-none focus:border-indigo-600 focus:z-10 hover:bg-gray-50 active:opacity-75"
                                        type="button"
                                    >
                                        History
                                    </Link>

                                    <Link
                                        className="px-5 py-3 font-medium border rounded-r-md hover:z-10 focus:outline-none focus:border-indigo-600 focus:z-10 hover:bg-gray-50 active:opacity-75"
                                        type="button"
                                    >
                                        Packages & Options
                                    </Link>

                                    <Link
                                        className="px-5 py-3 font-medium border rounded-r-md hover:z-10 focus:outline-none focus:border-indigo-600 focus:z-10 hover:bg-gray-50 active:opacity-75"
                                        type="button"
                                    >
                                       Specifications
                                    </Link>

                                   
                                </div>
                            </div>
                        </div>

                        {/* Car History  */}
                        <div className="col-span-4">
                            <p>Car History Info</p>
                        </div>

                        {/* Specifications */}
                        <div className="col-span-4">
                            <p>Car History Info</p>
                        </div>

                        {/* Options */}
                        <div className="col-span-4">
                            <p>Car History Info</p>
                        </div>



                    </div>


                </section>
                
            </Layout>        
        </>

      
    )
}

// Getting the paths for each car
export async function getStaticPaths() {
    let cars = await getClient(false).fetch(idQuery)

   let paths = cars.map(car => {
    return {
        params: {
            id: car._id
        }
    }
   });

   return {
    paths, 
    fallback: false
   }
}

// Getting the full car data to pass to rendering
export async function getStaticProps({ params }) {

    let allCars = await getClient(false).fetch(fullQuery)
    let result = findCar(allCars, params.id)
    
    const car = result[0]

    return {
        props: {
            car
        }
    }

}