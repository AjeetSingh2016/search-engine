import React from 'react'
import { NavLink } from 'react-router-dom'

import { useResultContext } from "../context/ResultContextProvider";






const links =[
    {url: '/search', text: '🔎 All'},
    {url: '/news', text: ' 🗞️ NEWS'},
    {url: '/image', text: '🖼️ IMAGES'},
    {url: '/video', text: '📺VIDEOS'}

]

const Links = () => {

  const {setResults} = useResultContext();
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
        {links.map(({url, text})=>(
            <NavLink onClick={()=>setResults([])} to={url} key={url} activecallsname="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">
                {text}
            </NavLink>
        ))}
        
    </div>
  )
}

export default Links