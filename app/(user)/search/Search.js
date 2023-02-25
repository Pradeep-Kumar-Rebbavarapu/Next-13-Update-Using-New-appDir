"use client"
import { useRouter } from 'next/navigation'
import React,{FormEvent,useState} from 'react'
export default function Search() {
  const router = useRouter()
  const [search,setsearch] = useState("")
  const handleSearch = async (e) =>{
    e.preventDefault();
    setsearch("")
    router.push(`/search/${search}`)
  }
  
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={search} placeholder="Enter to Search" onChange={(e)=>{
          setsearch(e.target.value)
        }}/>
        <button  className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg'>Search</button>
      </form>
    </div>
  )
}
