/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

export default function Tab({
    title,
    active,
    onClick,
}) 
{
    const defaultBg = "flex-1"
    const selectedBg = "flex-1 bg-pink-600"

    const defaultText = "ml-3 text-sm font-medium text-gray-900"
    const selectedText = "ml-3 text-sm font-medium text-white"
    return (
        <>
            <li className={active? selectedBg : defaultBg}>
                <button className="relative block p-10" onClick={onClick}>
                    {/* {active ? <span className="absolute inset-x-0 w-full h-px bg-pink-600 -bottom-px"></span> : null} */}
                
                    <div className="flex items-center justify-center">
                    <span className={active ? selectedText : defaultText}> {title} </span>
                    </div>
                </button>
            </li>
        </>
    )
}