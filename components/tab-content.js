/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

export default function TabContent({children, active, styles}) {
    return(
        <>   
            <div className={`${active ? 'block' : 'hidden'} ${styles}`}>
                {children}
            </div>
        </>
    )
}