import React from "react";

const Shimmer = () => {
    return (
        <div className="animate-pulse bg-teal-100 p-6 rounded-xl shadow-md w-full h-48 flex flex-col justify-between">
            <div className="space-y-2">
                <div className="h-6 bg-teal-200 rounded w-3/4"></div>
                <div className="h-4 bg-teal-200 rounded w-full"></div>
                <div className="h-4 bg-teal-200 rounded w-5/6"></div>
            </div>
            <div className="h-10 bg-teal-300 rounded mt-4 w-32"></div>
        </div>
    )
}

export default Shimmer