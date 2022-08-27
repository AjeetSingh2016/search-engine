import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("javascript");

  const getResult = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": "734c98e533mshac21f9ea978fbbfp1b7b89jsnf6b8b2ba7dd1",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    });

    const data = await response.json();

    if(type.includes('/news')){
      setResults(data.entries)
    }
    else if(type.includes('/image')){
      setResults(data.image_results)

    }
    else if(type.includes('/video')) {
      setResults(data.results)
    }
    else{
      setResults(data);
    }
    
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ results, isLoading, getResult, searchTerm, setSearchTerm }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext)
