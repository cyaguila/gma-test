/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'

export default function Card({ name, price, mileage, stockNo, href }) {
    return (
        <>
            <Link href={href}>
                <a className="block overflow-hiddenbg-white border border-gray-100 rounded-lg shadow-sm hover:scale-105 ease-in duration-200">
                    <img
                        className="object-cover w-full h-56"
                        src="https://www.hyperui.dev/photos/team-1.jpeg"
                        alt=""
                    />
                    
                    <div className="p-2 space-y-2">
                        <div className="flex justify-between">
                            <p className="sr-only">Car Year, Make and Model</p>
                            <p className="text-base font-bold">
                                {name}
                            </p>

                            <div>
                            <p className="sr-only">Price</p>
                            <p className="text-base font-bold"> {price}</p>
                            </div>
                            
                        </div>

                        <div className="flex">
                            <p className="text-sm text-slate-600"> <span className="italic">Mileage: {mileage}</span> | <span className="italic">Stock #{stockNo}</span> </p>
                        </div>                
                    </div>                    
                </a>


            </Link>
                    
        </>
    )
}
