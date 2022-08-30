import React, { useState } from "react";

import { Links } from ".";

import { useResultContext } from "../context/ResultContextProvider";

const Search = () => {
  const { setSearchTerm } = useResultContext();

  const [text, setText] = useState(null);

  

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3 ">
      <input
        placeholder="Search"
        value={text}
        type="text"
        className=" w-96 h-10 darK:bg-gray-200 border rounded-lg shadow-sm outline-none p-6 text-black hover:shadow-lg rounded-sm"
        onChange={(e) => setText(e.target.value)}
      />
      <Links />
      {text !== null && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
          onClick={() => setSearchTerm(text)}
        >
          Search
        </button>
      )}
    </div>
  );
};

export default Search;
