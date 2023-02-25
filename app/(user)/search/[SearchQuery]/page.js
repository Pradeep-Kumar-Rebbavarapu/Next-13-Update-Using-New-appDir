import React from 'react'

export default async function SearchQuery({params:{SearchQuery}}) {
    const searchResults = await search(SearchQuery)
  return (
    <div>
      {searchResults.organic_results.map((ele)=>{
        return (
            <div key={ele.position} className="list-decimal">
                <p className='font-bold'>{ele.title}</p>
                <p>{ele.snippet}</p>
            </div>
        )
      })}
    </div>
  )
}


const search = async (search) =>{
    let res = await fetch(`https://serpapi.com/search.json?q=${search}&api_key=${process.env.API_KEY}`)
    
    const searchresult = await res.json()
    return searchresult
}