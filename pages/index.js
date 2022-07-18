/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-empty */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import { useState } from 'react'

import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import TabContainer from '../components/TabContainer'
import Tab from '../components/tab'
import SectionImage from '../components/section-image'
import CarType from '../components/body-types'
import SocialMedia from '../components/social-media'

import Location from '../icons/location' 
import Phone from '../icons/phone'
import Mail from '../icons/email'
import Facebook from '../icons/facebook'
import Twitter from '../icons/twitter'
import Instagram from '../icons/instagram'

// Data & Functions
import { bodyTypes, tabsArr, tabData, imageVideoUrl, uniformArr, convertToCamel, fillMake, makeModelObj, handleMakeChange } from '../lib/constants'
import { indexQuery, settingsQuery } from '../lib/queries'
import { getClient } from '../lib/sanity.server'

import s from '../styles/home.module.css'


export default function Index({ allCars, preview, webSettings }) {

  const [option, setOption] = useState('Make/Model');

  // makes array with false values, length is number of tabs
  const arr = new Array(tabsArr.length).fill(false)
  const fixedArr = arr.map((i, index) => index == 0 ? i = true : i = false)

  const [activeIndex, setActiveIndex] = useState(0)
  const [checkedIndex, setCheckedIndex] = useState(fixedArr)

// Form Submission
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [fakeEmail, setFakeEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState(false)
  const [submitted, setSubmitted] = useState(false)


  // Company days of operation
  const standardDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const [hoursData, setHoursData] = useState(webSettings[0].hours)
  const [days, setDays] = useState(standardDays)
  const [companyEmail, setCompanyEmail] = useState(webSettings[0].websiteInfo.contact.email)

  // Social Media
  const [socialMedia, setSocialMedia] = useState(Object.keys(webSettings[0].websiteInfo.socialMedia))

  const clear = () => {
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
  }


  const sendEmail = () => {

    let data = {
      name,
      email,
      phone,
      message,
      companyEmail
    }
    
    fetch('/pages/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res)=> {
      if (res.status === 200) {
        // console.log("Response succeeded!")
        setSubmitted(true)
        clear()
      }
    })
  }

  const handleSubmit = (e) => {
    
    e.preventDefault()

    if (name == "" || email == "" || fakeEmail != "" || phone =="" || message == "")
    {
      setError(true)
    }
    else{
      setError(false)
      sendEmail()
      // Send message to email
      
    }
  }



  const handleOnTabChange = (index) => {
    const updatedIndex = checkedIndex.map((item, i) => i == index ? item = true : item = false)
    setActiveIndex(index)
    setCheckedIndex(updatedIndex)
  }

  // styling for active tabs
  const isActive = (index) => {
    var styling = "flex justify-center py-10 hover:bg-teal-800 hover:shadow-lg hover:shadow-slate hover:text-white"
    if (index == activeIndex)
    {
      styling += " bg-teal-600 text-white"
    }
    else
    {
      styling +=" "
    }
    return styling
  }



  // for Body Type
  const [checkedState, setCheckedState] = useState(
    new Array(bodyTypes.length).fill(false)
  )

  // Arrays of unique makes and models --- no repeats
  const uniqueMakes = [...new Set(allCars.map(i => i.make.toLowerCase()))]
  const uniqueModels = [...new Set(allCars.map(i => i.model.toLowerCase()))]

  
  // Makes an array of uniform Makes & Models for front end (to replace)
  const finalMakes = uniformArr(uniqueMakes).sort()
  const finalModels = uniformArr(uniqueModels).sort()


  const handleOnSelect = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
    index === position ? !item : item);

    setCheckedState(updatedCheckedState);
  }

  const onClearAll = () => {
    const updatedState = checkedState.map(i => {
      i = false
    })
    setCheckedState(updatedState)
  }

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const data = makeModelObj(finalMakes, allCars)
  const [makeModelData, setData] = useState(data);
  const [found, setFound] = useState({make: '', model: finalModels})

  const handleMakeChange = (val) => {
    if (val == "make")
    {
      setFound({make: finalMakes, model: finalModels})
    }
    else {
      const found = makeModelData.find(i => i.newMake == val)
      const foundModel = found.newModel
      setFound({make: found.newMake, model: foundModel.sort()})
    }
  }


   {/* Set selected make & model to state variables */}
  const makeModel = () => {
    return(
    <div className={s.makeGrid}>
      <div className={s.leftCol}>
        <div className={s.makeSelect}>
          <label htmlFor="makes">Make</label>
          <select defaultValue="Select Make..." name="makes" id="makes" onChange={(e)=> {handleMakeChange(e.target.value)}}>
            <option value="make">Select Make...</option>
            {
              makeModelData.map((i, index) =>
                <option value={i.newMake} key={index}> {i.newMake}</option>
              )
            }
          </select>
        </div>
        
        <div className={s.makeSelect}>
            <label htmlFor="models">Model</label>
            <select name="models" id="models">
              <option value="select">Select Model...</option>
              {
                found.model.map((j, index) => 
                  <option value={j} key={index}>{convertToCamel(j)}</option>
                )
              }
            </select>
          </div>

          <div className="flex flex-row justify-center">
          <button className="hover:bg-teal-500 hover:shadow-teal-500 rounded-md px-10 py-4 bg-pink-600 text-white font-bold">Search</button>
          </div>
      </div>
    </div>
    )
  }


  // Body Types rendering
  const bodyT = () => {
    return(
      // Turn into component -- card
      <section className="text-white">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">

            {
              bodyTypes.map(({type, url}, index) => {
                return(
                  <div key={index} className="hover:cursor-pointer" onClick={()=>handleOnSelect(index)}>                
                    <CarType 
                    name={type} 
                    url={url}
                    checked={checkedState[index]}
                    onChange={()=>handleOnSelect(index)}
                    /> 
                </div>

                )
              })
            }
          </div>

          <div className="mt-12 text-center space-x-4">
            <button className="hover:bg-white hover:text-black rounded-md px-10 py-4 border-2 border-white text-white font-bold" onClick={()=>onClearAll()}>Clear</button>
            <button className="hover:bg-teal-500 hover:shadow-teal-500 rounded-md px-10 py-4 bg-pink-600 text-white font-bold">Search</button>
          </div>
        </div>
      </section>
    )
  }


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  return (
    <>
      <Layout preview={preview}>
        {/* Hero Section */}
        <section>
          <div className={s.heroGrid}>
            <div className={s.navTop}>
              <Navbar />
            </div>

            {/* Background video or image */}
            <div className={s.heroBackground}>
              {
                imageVideoUrl === "image" ? 
                <img src="/background.png" className="w-full h-full"/>
              :
                <Hero url={[{src: '/car-prev.mp4'}]} 
                controls={false} 
                loop={true}              
                />
              }

            </div>


            <div className={s.heroOverlay}></div>

            <div className={s.blurb}>
              {/* Your blurb title */}
              <h2 className="text-2xl md:text-4xl lg:text-6xl text-white text-center font-bold"> This is my company</h2>

              {/* Your blurb subtitle */}
              <h3 className="text-lg md:text-xl lg:text-2xl xl:text-4xl text-white text-center font-light italic"> The best out there. </h3>

              {/* Text */}
              <p className="text-sm lg:text-base xl:text-lg text-white text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text.</p>

              {/* Your blurb action */}
              <button className={s.heroButton}> Your action here </button>
            </div>
          </div>  
        </section>

        
        {/* Search by Make/Model or Body Type*/}
        <section>
          <div className='flex flex-col py-20 bg-gray-800 text-white'>
            <div className='flex flex-row items-center justify-center space-x-4'>
              <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold'>Search by</h2> 
              <select name="options" className={s.select} onChange={(e)=>{handleChange(e)}}>
                <option value="Make/Model">Make/Model</option>
                <option value="Body Type">Body Type</option>
              </select>

            </div>

            <div>
              {option == "Make/Model" ? makeModel() : bodyT() }
            </div>
          </div>          
        </section>

        

        {/* Tabs */}
        <section>
          <TabContainer>
            {
              tabsArr.map((tab, index) => 
                
                    <div key={index} className={isActive(index)}>
                      <button onClick={()=>{handleOnTabChange(index)}}>{tab}</button>
                    </div>
              )
            }
          </TabContainer>
          
          {
            tabData.map((tab, index) => 
            <SectionImage
              key={index}
              active={checkedIndex[index]}        
              subtitle={tab.subtitle}
              title={tab.title}
              blurb={tab.blurb}
              buttonText={tab.buttonText}
              imageSrc={tab.imageSrc}
              alt={tab.alt}
            />
          )
          }

        </section>

        {/* Contact Us & Location */}
        

        <section className="bg-gray-100">
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:py-12 lg:col-span-2 text-lg space-y-6">
                <h2 className="text-4xl font-bold">Get in Touch</h2>
                
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
                            return <SocialMedia key={index} name={link} url={webSettings[0].websiteInfo.socialMedia[link]}> <Facebook fill='black'/> </SocialMedia>
                          }
                          else if (link == "tweeter")
                          {
                            return <SocialMedia key={index} name={link} url={webSettings[0].websiteInfo.socialMedia[link]}> <Twitter fill='black'/> </SocialMedia>
                          }
                          else if (link == "youtube")
                          {
                            // console.log(link)
                            return <SocialMedia key={index} name={link} url={webSettings[0].websiteInfo.socialMedia[link]}> <span className="text-black font-bold">YouTube</span> </SocialMedia>
                          }
                          else if (link == "instagram")
                          {
                            return <SocialMedia key={index} name={link} url={webSettings[0].websiteInfo.socialMedia[link]}> <Instagram fill='black'/></SocialMedia>
                          }
                        }
                      )
                    }

                  </ul>
                  
                </div>

                {/* Hours */}
                <div>
                  <p className="font-bold">Hours of Operation</p>
                <ul>
                  {
                    days.map((day, index) => hoursData[day.toLowerCase()].from == null && hoursData[day.toLowerCase()].to == null ? <li key={index}> {day}: Closed </li> : <li key={index}> {day}: {hoursData[day.toLowerCase()].from} - {hoursData[day.toLowerCase()].to}</li>)

                  }
                </ul>
                </div>

                

              </div>
              
              {/* Form */}
              <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                <h2 className="text-2xl font-bold"> Send us a message!</h2>
                <form className="space-y-4 pt-6" onSubmit={(e) => handleSubmit(e)}>
                  <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input 
                      className="w-full p-3 text-sm border border-gray-200 rounded-lg" 
                      placeholder="Name" 
                      type="text" 
                      id="name" 
                      value={name}
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
                        value={email}
                      />
                    </div>

                    <div className="hidden">
                      <input
                        onChange = {(e) => setFakeEmail(e.target.value)}
                        className="w-full p-3 text-sm border border-gray-200 rounded-lg"
                        placeholder="Email address"
                        type="email"
                        id="email"
                        value={fakeEmail}
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
                        value={phone}
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
                      value={message}
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

                  <div>
                    {error ? 
                    <p> <span className="text-red-600 text-lg italic">Please fill out the form.</span> </p> : null }

                    {
                      submitted ?
                      <p className="text-green-600 text-lg italic"> Form submitted!</p> : null
                    }
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        

      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  
  const allCars = await getClient(false).fetch(indexQuery)
  const webSettings = await getClient(false).fetch(settingsQuery)

  return {
    props: { allCars, preview, webSettings },
  }
}
