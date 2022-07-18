/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */


export default function CarType({name, url, checked, onChange}) {
    {name,
    url,
    checked,
    onChange}

    const defaultBackground = "flex items-center flex-col p-8 transition border border-white shadow-xl rounded-xl hover:shadow-slate-300/10 hover:border-slate-300/10"
    const selectedBackground = "flex items-center flex-col p-8 transition border bg-slate-700 border-slate-300 shadow-xl rounded-xl shadow-slate-300/10"
    
    return (
    <div className={checked ? selectedBackground : defaultBackground}>
        <div className="self-end">
            <input type="checkbox" id="box1" checked={checked} onChange={onChange} style={{height: '25px', width: '25px'}}/>
        {/* <label htmlFor="box1"> I have a bike</label> */}
        </div>
        

        <img src={url} className="w-1/2 h-auto" />
        <h3 className="mt-4 lg:text-2xl text-white">{name}</h3>

        
      </div>
    )
}