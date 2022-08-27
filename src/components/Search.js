import React, {useEffect, useState} from 'react'
import { useDebounce } from 'use-debounce'
import { Links } from '.'

import { useResultContext } from '../context/ResultContextProvider' 

const Search = () => {

  const [text, setText] = useState('Elon Musk')
  const {results, isLoading, getResult, searchTerm, setSearchTerm } =
  useResultContext();
  const [debouncedValue] = useDebounce(text, 30);

  useEffect(() => {
    if(debouncedValue){
      setSearchTerm(debouncedValue)
    }

  }, [debouncedValue])
  



  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input placeholder='Search' value={text} type="text" className="sm:w-96 w-0 h-10 darK:bg-gray-200 border rounded-fu;; shadow-sm outline-none p-6 text-black hover:shadow-lg" onChange={(e)=>setText(e.target.value)}  />
      <Links />
      {!text &&(
        <button type="button" className='absolute top-1.5 right-4 text-2xl text-gray-500' onClick={()=>setText("")}>

        </button>
      )}
      
    </div>
  )
}

export default Search