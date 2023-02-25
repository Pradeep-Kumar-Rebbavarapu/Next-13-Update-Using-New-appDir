import React from 'react'
import Link from 'next/link'
export default  function Navbar() {
    
  return (
    <div>
      <ul className='flex p-2 bg-rose-600 justify-between text-black'>
        <li className='bg-white rounded-md font-bold my-2 px-2'><Link href="/">Home</Link></li>
        <li className='bg-white rounded-md font-bold my-2 px-2'><Link href="/todos">Todos</Link></li>
        <li className='bg-white rounded-md font-bold my-2 px-2'><Link href="/search">Search</Link></li>
      </ul>
    </div>
  )
}
