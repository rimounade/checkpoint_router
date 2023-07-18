import { useState } from "react"
import Rating from '@mui/material/Rating';
const FilterMovie =({setSearch,setRate,search,rate,setValidRate})=>{
    const handleReset =()=>{
        setRate(0)
        setSearch('')
        setValidRate(false)
    }
    return(
        <div>
             <input value={search} type="search"  onChange={(e)=>setSearch(e.target.value)}></input>
             
             <Rating value={rate} onChange={(e)=>{setRate(e.target.value);setValidRate(true)}}/>
             <button onClick={handleReset}>Reset</button>
        </div>
    )
}
export default FilterMovie