/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-empty */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

export default function Filter({name, children}) {
    return (
        <details className="flex items-center py-4 hover:cursor-pointer">
            <summary className="text-2xl"> {name} </summary>
            {children}
        </details>
    )
}