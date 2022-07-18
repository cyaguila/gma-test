/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-empty */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react'


// Components
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import Filter from '../../components/filter'
import Card from '../../components/card'
import HorizontalCard from '../../components/horizontal-card'
import Pagination from '@mui/material/Pagination';
import CarType from '../../components/body-types'
import Slider from '@mui/material/Slider'
import Badge from '../../components/badge'


// Sanity & S3 
import { indexQuery, s3Bucket } from '../../lib/queries'
import { getClient } from '../../lib/sanity.server'

//S3
import { s3Request } from '../../lib/s3.js'

// Constants
import { filters, uniformArr, makeModelObj, convertToCamel} from '../../lib/constants'

// Data
import { transformInventory, transformDealer } from '../../lib/data'

// Icons
import Grid from '../../icons/grid'
import List from '../../icons/list'
import FilterIcon from '../../icons/filter'
import SortIcon from '../../icons/sort'
import Close from '../../icons/close'

// Styling
import s from '../../styles/inventory.module.css'
import axios from 'axios'


export default function Inventory({allCars, preview, res}) {

    // Default display
    const [display, setDisplay] = useState("grid")
    const [filterView, setFilterView] = useState(true)

    // Car data
    const [allData, setAllData] = useState(allCars)

    // Pagination variables
    const [carsPerPage, setCarsPerPage] = useState(18)
    const [totalPages, setTotalPages] = useState(Math.floor(allCars.length/carsPerPage))
    const [activePage, setActivePage] = useState(1)

    const [selectedMake, setSelectedMake] = useState("")
    const [selectedModel, setSelectedModel] = useState("")
    const [selectedTypes, setSelectedTypes] = useState([])

    // Filtering view
    const [filter, setFilter] = useState(false)
    const [badge, setBadge] = useState(false)

    const [badgeList, setBadgeList] = useState([])
    
    // Body Types 
    const types = []
    allCars.forEach(car => types.push(car.bodyType))
    const removeEmptyVals = (arr) => {
        return arr.filter(t => t != null && t != "")
    }
    const filtered = removeEmptyVals(types)


    const [bodyTypes, setBodyTypes] = useState([...new Set(filtered)])

    // YEAR Filter variable
    const sortedByYear = allData.sort((a,b) => a.year > b.year ? 1 : -1)

    const years = []
    sortedByYear.forEach(car => years.push(car.year))

    const minYear = sortedByYear[0].year
    const maxYear = sortedByYear[sortedByYear.length - 1].year

    const [rangeYear, setRangeYear] = useState([minYear, maxYear])
    const [startYear, setStartYear] = useState(minYear)
    const [endYear, setEndYear] = useState(maxYear)

    const minDistance = 1;  

    const makeFirstIndex = (i) => {
        return ((i - 1) * carsPerPage)
    }
    
    const makeLastIndex = (i) => {
        return i * carsPerPage
    }

    const first = makeFirstIndex(activePage)
    const last = makeLastIndex(activePage)
    
    // change current page value
    const handleChange = (event, value) => {

        setActivePage(value)

        const currIdx = (value - 1)*carsPerPage
        const lastIdx = (value * carsPerPage)

        // setData(allData.slice(currIdx, lastIdx))
    };
    
    // handles sorting
    const handleSelect = (val) => {
        if (val == "aZ")
        {
            const aZ = allData.sort((a,b) => a.make > b.make ? 1 : -1)
            setAllData(aZ)
            // setData(allData.slice(first, last))
            
        }
        else if (val == "zA")
        {
            const zA = allData.sort((a,b) => a.make > b.make ? -1 : 1)
            setAllData(zA)
            setData(allData.slice(first, last))
        }
        else if (val == "ltH")
        {
            const lowHigh = allData.sort((a,b) => Number(a.priceInet.replace("$", "")) > Number(b.priceInet.replace("$","")) ? 1 : -1)
            setAllData(lowHigh)
            setData(allData.slice(first,last))
        }
        else if (val== "htL")
        {
            const highLow = allData.sort((a,b) => Number(a.priceInet.replace("$", "")) > Number(b.priceInet.replace("$","")) ? -1 : 1)
            setAllData(highLow)
            setData(allData.slice(first,last))
        }
        else if (val == "ltHM")
        {
            const lHM = allData.sort((a,b) => a.mileage > b.mileage ? 1 : -1)
            setAllData(lHM)
            setData(allData.slice(first, last))
        }
        else if (val == "htLM")
        {
            const hLM = allData.sort((a,b) => a.mileage > b.mileage ? -1 : 1)
            setAllData(hLM)
            setData(allData.slice(first, last))
        }
    }


    // Handles selected makes & models
    const handleCheckedMakes = (val) => {

        if (val == "default")
        {
            // if selected make is default, then reset and show all cars
            setTotalPages(parseInt(allCars.length/carsPerPage))
            setSelectedMake("")
            setBodyTypes(removeEmptyVals([...new Set(filtered)]))
            setSelectedTypes([])

            setBadgeList([])

            setAllData(allCars)
            setModels(finalModels)
            
        }
        else 
        {
            // return a list of all the cars that match that make
            const foundCars = allCars.filter(car => car.make == val)

            // find all models that match to the list of found cars
            const foundModels = []
            foundCars.forEach(car => foundModels.push(car.model))

            // find all 
            const foundTypes = []
            foundCars.forEach(car => foundTypes.push(car.bodyType))
            
            // set pagination to match amount of cars
            setTotalPages(parseInt(Math.ceil(foundCars.length/carsPerPage)))

            setSelectedMake(val)
            setAllData(foundCars)
            setModels([...new Set(foundModels)].sort())
            setBodyTypes(removeEmptyVals([...new Set(foundTypes)]).sort())
        }

    }

    const handleCheckedModels = (val) => {

        if (val == "default" && selectedMake == "")
        {
           
            setTotalPages(parseInt(allCars.length/carsPerPage))

            setSelectedModel("")
            setAllData(allCars)
            setBodyTypes(removeEmptyVals([...new Set(filtered)]))
            setModels(finalModels)
        }
        else if (val == "default" & selectedMake != "")
        {
            // BadgeList
            // const bL = badgeList.concat([val])
            // setBadgeList(bL)

            const foundMakes = allCars.filter(car => car.make == selectedMake)
            const foundTypes = []
            foundMakes.forEach(car => foundTypes.push(car.bodyType))
            setSelectedModel("")
            setBodyTypes(removeEmptyVals([...new Set(foundTypes)]).sort())
            setAllData(foundMakes)
        }

        else
        {
            // BadgeList
            //handle badgeList            
            // const bL = badgeList.concat([val])
            // setBadgeList(bL)

            const foundModels = allCars.filter(car => car.model == val).sort()
            const foundTypes = []
            foundModels.forEach(car => foundTypes.push(car.bodyType))
            setBodyTypes(removeEmptyVals([...new Set(foundTypes)]).sort())
            setSelectedModel(val)
            setTotalPages(parseInt(Math.ceil(foundModels.length/carsPerPage)))
            setAllData(foundModels) 
        }
    }

    // helper function for returning matching cars
    const getFinalResult = (arr, allArr,type) => {

        const final = []
        for (var idx in allArr)
        {
            var car = allArr[idx]
            for (var i in arr)
            {
                var property = arr[i]
                if (car[type] == property)
                {
                    final.push(car)
                }
            }
        }
        return final
    }



    const handleBodyType = (val) => {

        if (selectedTypes.includes(val))
        {
            const removed = selectedTypes.filter(v => v != val)
            console.log(removed)
            const final = getFinalResult(removed, allData, "bodyType")
            // console.log("final: ", final)
            if (final.length == 0 && selectedMake == "")
            {
                setAllData(allCars)
            }
            else if (final.length == 0 && selectedMake != "")
            {
                const foundMakes = allCars.filter(car => car.make == selectedMake)
                
                setAllData(foundMakes)
            }
            else if (final.length != 0 && selectedMake != "")
            {
                const foundMakes = allCars.filter(car => car.make == selectedMake)
                const final = getFinalResult(removed, foundMakes, "bodyType")
                setAllData(final)
            }
            else if (final.length != 0 && selectedMake == "")
            {
                setAllData(final)
            }
            
            setSelectedTypes(removed)

        }
        else
        {
            const concatArr = selectedTypes.concat([val])
            
            if (selectedMake == "" && selectedModel == "")
            {
                const final = getFinalResult(concatArr, allCars, "bodyType")
                setAllData(final)
            }
            else if (selectedMake != "")
            {
                const foundMakes = allCars.filter(car => car.make == selectedMake)
                const final = getFinalResult(concatArr, foundMakes, "bodyType")
                setAllData(final)
            }
            else
            {
                const final = getFinalResult(concatArr, allData, "bodyType")
                setAllData(final)
            }
            
            setSelectedTypes(concatArr)
            
        }


    }

    // Arrays of unique makes and models --- no repeats
    const uniqueMakes = [...new Set(allCars.map(i => i.make))]
    const uniqueModels = [...new Set(allCars.map(i => i.model))]

    
    // Makes an array of uniform Makes & Models for front end (to replace)
    const finalMakes = uniqueMakes.sort()
    const finalModels = uniqueModels.sort()

    const filterData = makeModelObj(finalMakes, allCars)
    const [makeModelData, setMakeModelData] = useState(filterData);

    const [models, setModels] = useState(finalModels)

    // Filter view for Make & Model

    const makeView = () => {

        return (
            <>
            
                <div className="flex flex-col py-4 space-y-2">
                    <label htmlFor='sort' className="font-bold">Select Make</label>
                    <select name="sort" id="sort" className="rounded-lg p-px border border-gray-200 p-px flex-1" onChange={(e) => handleCheckedMakes(e.target.value)}>
                        <option value="default" defaultValue="Select...">Select...</option>
                    {
                        makeModelData.map((i, index) => 
                            <option value={i.newMake} key={index}> {i.newMake} </option>
                        
                        )
                    }   
                    </select>                
                </div>

            
            </>
        )

    }

    const modelView = () => {

        return (
            <>
            
                <div className="flex flex-col py-4 space-y-2">
                    <label htmlFor='sort' className="font-bold">Select Model</label>
                    <select name="sort" id="sort" className="rounded-lg p-px border border-gray-200 flex-1" onChange={(e) => handleCheckedModels(e.target.value)}>
                        <option value="default" defaultValue="Select...">Select...</option>
                    {
                        models.map((i, index) => 
                            <option value={i} key={index}> {i} </option>
                        
                        )
                    }   
                    </select>                
                </div>

            
            </>
        )

    }

    // Filter view for Body Type
    const bodyType = () => {
        return(
            <>
            
            <div className="flex flex-col py-4 space-y-2">
                
                {
                    bodyTypes.length != 0 ?
                        bodyTypes.map((i, index) => 
                        <div key={index}>
                            <input type="checkbox" value={i} onChange={(e) => handleBodyType(e.target.value)}/>
                            <label className="text-lg" htmlFor={i}> {i}</label>
                        </div>
                        )
                    :
                    <p className="italic">No models available</p>
                }   
                             
            </div>
        </>
        )
    }

    // Filter by Year Range
    const yearRange = () => {
        
        const handleSlider = (e,val) => {
            console.log(val)
            
            setRangeYear(val)
        }


        return (
            <>
              <Slider 
                step={1} 
                value={rangeYear}
                defaultValue={rangeYear} 
                min={minYear} 
                max={maxYear} 
                onChange={handleSlider}
                disableSwap />

                <div className="inline-flex justify-between">
                    <div>
                        <input type="number" min={startYear} max={endYear} value={rangeYear[0]} step={1} onChange={(e) => console.log(e.target.value)} />
                    </div>

                    <div className="">
                        <input type="number" min={startYear} max={endYear} value={rangeYear[1]} step={1} onChange={(e) => console.log(e.target.value)}/>
                    </div>

                </div>
            </>

        )
    }

    // Show all Car filters
    const showFilters = (name) => {

        if (name == "Make")
        {
            return (
                makeView()
            )
        }
        else if (name == "Model")
        {
            return (modelView())
        }
        else if (name == "Body Type")
        {
            return (
                bodyType()
            )
        }
        else if (name == "Year")
        {
            return(
                yearRange()
            )

        }
        else if (name == "Price")
        {

        }
        else if (name == "Mileage")
        {

        }
    }


    return(
        <Layout preview={preview}>

            { console.log(allCars[0]._id)}

            {/* Header */}
            <section> 
             <div className="grid grid-rows-1">

               {/* Navbar */}
               <div className="row-span-1 bg-gray-900">
                <Navbar />
               </div>

               {/* Page title */}
               <div className="row-start-2 pt-10 py-12 pb-2 bg-gray-900">
                <h1 className="text-white text-6xl font-bold text-center">Inventory</h1>
               </div>
              </div>
            </section>


            {/* Rest of page */}
            <section>
            
             <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Filters */} 
                {/* Column 1 */}
                <div className={`${filter ? 'top-12 row-start-1 row-end-2 col-start-1 z-50 shadow-lg shadow-gray-300 lg:shadow-none' : 'hidden'} lg:grid sticky top-0 items-start self-start  bg-gray-50 divide-y divide-solid divide-gray-300 px-8 lg:px-16 py-2 transition transform ${filter ? 'lg:translate-x-0': 'lg:translate-x-[-100%]'}`}>
                    <div className="flex flex-row items-center justify-between">
                        <h2 className="text-xl py-4 font-bold">FILTERS </h2>
                        <button onClick={() => setFilter(false)}><Close className="block lg:hidden hover:fill-red-500" height={20} width={20} /></button>
                    </div>

                    <div className="py-4">
                        { 
                            selectedMake == "" && selectedModel == "" ? <p className="italic text-gray-600"> No filters selected.</p> :
                            [selectedMake, selectedModel].map((name, i) => 
                                <Badge name={name} key={i} onClick={() => handleBadgeClose(name)} />)
                        }
                    </div>
                    {
                        filters.map((name, index) => 
                            <Filter name={name} key={index}>
                            {
                                showFilters(name)
                            }
                            </Filter>
                        )
                    }
                </div>                

                {/* Column 2 */}
                <div className={` ${filter ? 'row-start-1 row-end-2 z-10 opacity-25 lg:opacity-100 pointer-events-none lg:pointer-events-auto' : ''} col-span-1 lg:col-span-3 col-start-1 pb-10 transition transform ${!filter ? 'lg:translate-x-[-16rem]' : 'lg:translate-x-0'}`}>
                    {/* Sorting, Alternative card views controls, etc... */}
                    <div className='self-start sticky top-0 bg-white p-4 flex flex-col lg:flex-row justify-between gap-4'>
                        {/* Number of vehicles */}
                        <p className="italic text-gray-700">Displaying {allData.length} {allData.length == 1 ? "vehicle" : "vehicles"}</p>
                        <div className="inline-flex items-center space-x-4 justify-around"> 
                        
                         {/* Sort By */}
                         <div className="flex flex-row items-center space-x-2 text-base lg:text-xl">
                          <label htmlFor='sort' className="font-bold sr-only">SORT BY</label>
                          <SortIcon height={20} width={20} />
                          <select name="sort" id="sort" className="rounded-lg p-px border border-gray-200 w-1/2 lg:w-full" onChange={(e) => handleSelect(e.target.value)}>
                            <option value="default" defaultValue="Select...">Select...</option>
                            <option value='aZ'>A to Z</option>
                            <option value='zA'>Z to A</option>
                            <option value='ltH'>Lowest to Highest Price</option>
                            <option value='htL'>Highest to Lowest Price</option>
                            <option value='ltHM'>Lowest to Highest Mileage</option>
                            <option value='htLM'>Highest to Lowest Mileage</option>
                          </select> 
                          
                         </div>

                        {/* Grid & List Views */}

                         <button onClick={()=>setDisplay('grid')}><Grid height={20} width={20} className={`hidden lg:block ${display == "grid" ? 'fill-pink-600' : 'fill-black'}`}/></button>
                         <button onClick={()=>setDisplay('list')}><List height={20} width={20} className={`hidden lg:block ${display == "list" ? 'fill-pink-600' : 'fill-black'}`} /></button>
                         <button onClick={()=>setFilter(!filter)}> <FilterIcon height={20} width={20} className={filter ? 'fill-pink-600' : 'fill-black'} /> </button>

                        </div>
                        

                    </div>

                    {/* Car Cards */}
                    <div className={`grid ${display === 'grid' ? 'grid-cols-1 lg:grid-cols-3 gap-10': 'grid-cols-1 gap-y-6'} px-4`}>
                     {allData.slice(first, last).map((car,index) =>
                        display == "grid" ?
                        <Card
                        name={car.year +" " +car.make +" "+ car.model}
                        price={"$"+car.priceInet}
                        mileage={car.mileage}
                        stockNo={car.stockNo != null ? car.stockNo : 0} 
                        key={index}
                        href={`/inventory/${car._id}`}
                        /> 

                        :

                        <HorizontalCard
                        name={car.year +" " +car.make +" "+ car.model}
                        price={car.priceInet}
                        mileage={car.mileage}
                        stockNo={car.stockNo != null ? car.stockNo : 0}
                        transmission={car.transmission}
                        extColor={car.colorExterior}
                        intColor={car.colorInterior} 
                        key={index}/> 
                        )}
                    </div>

                     {/* Pagination */}

                     <div className="flex pt-6 justify-center">
                        
                        <Pagination count={totalPages} page={activePage} onChange={handleChange} />
                     </div>
                </div>
                

             </div>
            </section>

        </Layout>   
    )
}

export async function getStaticProps({preview = false}) {
    // Sanity Query
    const allCars = await getClient(false).fetch(indexQuery)

    return {
        props: { allCars, preview}
      }
}