/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

export default function TabContainer ({children, backgroundColor}) {
    // border-slate-50border-b-2 
    return (
        <div className={`grid grid-cols-4 text-lg lg:text-2xl  ${backgroundColor}`}>
            {children}
        </div>
    )
}