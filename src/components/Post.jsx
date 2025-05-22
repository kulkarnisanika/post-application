import React from "react";

const Post = ({ title, description, actionHandler}) => {

    
    return (
        <>
            <div className="bg-teal-900 p-7 rounded grid grid-cols-1">
                <div>
                   
                    <h3 className="text-white text-2xl font-bold">{title}</h3>
                </div>
                <p className="text-white">{description}</p>
                <div>
                </div>
                <div className="space-x-2 pt-4">
                    <button onClick={() => actionHandler("edit")} className="bg-green-600 py-2 px-4 text-white rounded">Edit</button>
                    <button className="bg-red-600 py-2 px-4 text-white rounded">Delete</button>
                </div>
            </div>
        </>
    )
}

export default Post;