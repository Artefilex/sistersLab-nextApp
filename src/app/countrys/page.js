"use client"
import { useEffect, useState } from "react"
import { fetchCountrys } from "@/app/api/country"
import Image from "next/image"
import Link from "next/link"
export default function Countrys(){
   const [search , setSearch] = useState("")
    const [data , setData] = useState([])

    useEffect(()=>{
        const fetcdata = async () =>{
            const responseData = await fetchCountrys()
           setData(responseData)
        } 
        fetcdata()
    },[]) 


  const dataFilter = search ?  data.filter((item) => item.translations.tur.common.toLowerCase().includes(search.toLowerCase())) : data
  
    return(
            <div className="w-full flex flex-col bg-slate-950 text-white min-h-screen">
             <input className="bg-transparent outline-none border-2 px-4 py-2 my-[2rem] mx-3 " placeholder="Search Country"  value={search} onChange={(e) => setSearch(e.target.value)} />
              <div className="w-full flex gap-2 flex-wrap items-center justify-center "> 
        { dataFilter && dataFilter.map((item) =>( 
           <Link href={`/countrys/${item.ccn3}`} className="w-[15rem] h-[24rem] flex flex-col items-start justify-start gap-3 " key={item.id}>  
            <Image loader={() => item.flags.png} src={item.flags.png}  alt="ssss"   width={200}  height={70}/>    
            <div>{item.translations.tur.common}</div>
       </Link>
  ))   }
        </div>
            </div>
    ) 
}
