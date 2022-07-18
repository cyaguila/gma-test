/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

export default function BlogCard({imageUrl, title, topic, blurb, date, author}){
    return(
        <>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <img
                className="object-cover w-full h-56"
                src={imageUrl}
                alt=""
            />
            <div className="sm:ml-8">
                <h2 className="mt-4 text-lg font-medium sm:text-xl">
                    <a href="" className="hover:underline"> {title} </a>
                </h2>

                <h3 className="text-pink-600 py-1.5 rounded text-[12px] font-medium">
                Topic: {topic}
                </h3>

                <p className="mt-1 text-sm text-gray-700">
                    {blurb}
                </p>

                <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                    <div className="flex items-center text-gray-500">

                    <p className="ml-1 text-xs font-medium"> Published {date}</p>
                    </div>

                    <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                    <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                        Written by {author}
                    </p>
                </div>
            </div>  
        </div>         
        </>
       
    )
}


