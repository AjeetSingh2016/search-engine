import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { Loading } from "../components";

import { useResultContext } from "../context/ResultContextProvider";

const Results = () => {
  const {results, isLoading, getResult, searchTerm, setSearchTerm } =
    useResultContext();
  const location = useLocation();

  
  console.log(results)
  
  console.log(location.pathname);
  
  
  useEffect(() =>{

    if(searchTerm){
        if(location.pathname === '/videosss'){
            getResult(`/search/q=${searchTerm} video`)

        }
        else{
            getResult(`${location.pathname}/q=${searchTerm}&num=40`)
        }
    }
    console.log(location.pathname);

  }, [location.pathname])
  

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
        return (
            <div className="flex flex-col md:w-3/5 justify-between space-y-6 sm:px-56">
                {results?.results?.map(({link, title, description}, index)=>(
                    <div key={index} className="md:w-2/2 w-full">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <p className="text-sm font-semibold">
                                {link.length > 30 ? link.substring(0, 30) : link}
                            </p>
                            <p className="text.lg mt-2 hover:underline dark:text-blue-300 text-blue-700">
                                {title}
                            </p>
                            <p className="text-sm mt-1">
                                {description.length > 140 ? `${description.substring(0, 140)}${"..."}` : description}
                            </p>

                        </a>
  
                    </div>
                ))}
            </div>  
        );

    case "/image":
      return (
          <div className="flex w-full flex-wrap  justify-between items-center space-y-50 sm:px-56">
              {results?.map(({image:{src, alt}, link:{href, title}}, index)=>(
                  <a className="sm:p-3 p-5 " href={href} key={index}  
                     target="_blank" rel="noreferrer">
                         <img src={src} alt={title} loading="lazy"/>
                         <p className="w-36 break-words text-sm mt-2">
                             {title}
                         </p>

                  </a>
              ))}
          </div>  
      );

    case "/news":
        return (
            <div className="flex flex-col md:w-3/5 justify-between space-y-6 sm:px-56">
                {results?.map(({source, link, title_detail:{value}}, index)=>(
                    <div key={index} className="md:w-2/2 w-full">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <p className="text-sm font-normal">
                                {source.title}
                            </p>
                            <p className="text-lg font-semibold dark:text-blue-300 text-blue-700 hover:underline ">
                                {link.length > 50 ? link.substring(0, 50) : link}
                            </p>
                            <p className="text-lg mt-1 font-normal dark:text-slate-500 text-slate-600">
                                {value.length > 200 ? `${value.substring(0, 200)}${"..."}` : value}
                            </p>
                        </a>
  
                    </div>
                ))}
            </div>
        );

    case "/video":
            return (
                <div className="flex flex-wrap">
                    {results?.map(({link,title}, index)=>(
                        <div key={index} className="p-2">
                            <ReactPlayer url={link} controls width="355px" height="200px" />

                        </div>
                    ))}
                </div>

            );


    default:
      return "ERROR";
  }
};

export default Results;
