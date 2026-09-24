import React from "react";
import toast from "react-hot-toast";

import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "./endpoint.js";

//// on addition of the new page need to update the things into this URL_OBJ
export const URL_OBJ={
    "SPT Home Page":`${BASE_URL}`,
    "Courses":`${BASE_URL}/Courses`,
    "About":`${BASE_URL}/About`,
    "Contact":`${BASE_URL}/Contact`,
    "Library":`${BASE_URL}/Facilities/Library`,
    "Facilities":`${BASE_URL}/Facilities/Library`
}

export default function BreadCrumbs({courseTitle}) {
    const location=useLocation();
    const navigate=useNavigate();
    const pathString=location.pathname;

    const pathArray=pathString.split("/")
    let arrayLength=pathArray.length;

    if(pathArray[arrayLength-1]==="") pathArray.pop();
    pathArray[0]="SPT Home Page";    /// so that initial page can be the landing Page
    arrayLength=pathArray.length;
    if(pathArray[arrayLength-1]==="ParticularCourse") pathArray[arrayLength-1]=courseTitle


    console.log(pathArray)
    
    function handleClick(e,link){
        try{
            e.preventDefault();
            e.stopPropagation();
            console.log("hello"+link)
            navigate(link);

        }catch(error){
            console.log(error)
            toast.error("gone wrong while clicking on bread crumb")
        }
    }
    return (
    <nav className="w-full bg-white px-6 py-4 border-b border-gray-200 shadow-md">
        <ol className="flex items-center flex-wrap gap-2 text-sm">
        {pathArray.map((item, index) => {
            const isLast = index === pathArray.length - 1;

            return (
            <li key={index} className="flex items-center">
                {!isLast ? (
                <div
                    onClick={(e) => handleClick(e, URL_OBJ[item])}
                    className="
                    px-4 py-1.5
                    rounded-full
                    bg-blue-50
                    text-blue-700
                    font-medium
                    cursor-pointer
                    shadow-sm
                    hover:bg-blue-600
                    hover:text-white
                    hover:shadow-md
                    transition-all
                    duration-300
                    "
                >
                    {item}
                </div>
                ) : (
                <span
                    className="
                    px-4 py-1.5
                    rounded-full
                    bg-black
                    text-white
                    font-semibold
                    shadow-md
                    "
                >
                    {item}
                </span>
                )}

                {!isLast && (
                <span className="mx-2 text-gray-400 text-lg">›</span>
                )}
            </li>
            );
        })}
        </ol>
    </nav>
    );
}
