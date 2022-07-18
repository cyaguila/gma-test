/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-empty */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import s from '../styles/components/multiRangeSlider.module.css'
import { useState, useRef } from "react";



export default function MultiRangeSlider({min, max}){
    // Creating the state variables
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);

    const minValRef = useRef(null);
    const maxValRef = useRef(null);

    return (
        <>
        <div className="grid grid-rows-1 grid-cols-1 my-4">
            <div className="row-start-1 col-start-1">
                <input
                    type="range"
                    min={min}
                    max={max}
                    defaultValue={minVal}
                    ref={minValRef}
                    step="1"
                    className={`${s.thumb} ${s.thumb__zindex3} ${s.thumb__zindex5}`}
                    onChange={(e) => {
                        console.log(e.target.value)
                        setMinVal(e.target.value)
                    }}
                    
                    />                
            </div>

            <div className="row-start-1 col-start-1">
                <input
                    type="range"
                    min={min}
                    max={max}
                    defaultValue={maxVal}
                    ref={maxValRef}
                    step="1"
                    className={`${s.thumb} ${s.thumb__zindex4}`}
                    onChange={(e) => {
                        console.log(e.target.value)
                        setMaxVal(e.target.value)
                    }}
                />                
            </div>

            <div className="bg-slate-300 h-2 row-start-1 col-start-1 rounded-sm"/>
            {/* <div className="bg-teal-300 h-2 row-start-1 col-start-1"/> */}


            <div className="flex flex-row justify-between gap-2 mt-2">
                <div className="flex flex-col">
                    <input type="number" className="w-3/4" min={min} max={max - 1} defaultValue={minVal} onChange={(e) => setMinVal(e.target.value)}/>
                </div>

                <div className="flex flex-col items-end">
                    <input type="number" className="w-3/4" min={min+1} max={max} defaultValue={maxVal} onChange={(e) => setMaxVal(e.target.value)}/>
                </div>
            </div>           
        </div>

        </>
    )
}