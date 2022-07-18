/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

export default function Badge({name, onClick}) {
    return (
        <strong className="inline-flex items-center border border-teal-900 text-teal-900 border-current uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide">
            {name}

            <button
                className="p-1 bg-teal-100 hover:opacity-75 transition-opacity rounded-full ml-2.5 -mr-2.5 focus:outline-none focus:ring"
                type="button"
                onClick={onClick}
            >
                <span className="sr-only"> Close </span>

                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            </strong>
    )
}

