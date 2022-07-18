/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-empty */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

export default function HorizontalCard({ name, price, mileage, stockNo, extColor, intColor, transmission, trim }){
    return (
        <a className="grid grid-cols-1 overflow-hidden bg-white border border-gray-100 rounded-lg group lg:grid-cols-3"  href="">
        <div className="relative">
            <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://www.hyperui.dev/photos/activity-1.jpeg"
            alt=""
            />
        </div>

        <div className="p-8 lg:col-span-2">
            
            <div className="text-center pb-2">
              <p className="mt-4 font-bold text-xl">{name}</p>  
            </div>

            <div className="grid grid-cols-2 bg-gray-100/25">
                <div className="p-8">
                    <p className="mt-2 text-lg text-gray-700">
                    Price: ${price}
                    </p>
                    <p className="mt-2 text-lg text-gray-700">
                    Mileage: {mileage}
                    </p>
                    <p className="mt-2 text-lg text-gray-700">
                    Transmission: {transmission}
                    </p>
                    <p className="mt-2 text-lg text-gray-700">
                    Stock #{stockNo}
                    </p> 
                </div> 

                <div className="p-8">
                    <p className="mt-2 text-lg text-gray-700">
                    Trim: {trim}
                    </p>

                    <div className="mt-2 flex gap-1 items-center">
                        <p className="text-lg text-gray-700 ">
                        Exterior Color: <span className="sr-only">{extColor}</span></p> {extColor != "" && extColor != null ? <div className='w-4 h-4' style={{backgroundColor: `${extColor.toLowerCase()}`}}></div> : extColor}
                        
                    </div>

                    <div className="mt-2 flex gap-1 items-center">

                        <p className="text-lg text-gray-700">
                        Interior Color: <span className="sr-only">{extColor}</span></p>{intColor != "" && intColor != null ? <div className={`w-4 h-4 bg-${intColor.toLowerCase()}-900`}></div> : intColor}
                        
                    </div>

                </div>               
            </div>

        </div>
        </a>
    )
}