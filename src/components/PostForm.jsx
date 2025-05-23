import React, { useState, useEffect } from "react"

const PostForm = ({ isEdit, formData, primaryButtonClickHandler }) => {

  const [inputData, setInputData] = useState({});

  useEffect(() => {
    if (formData) {
      setInputData(formData);
    }
  }, [formData]);

  const handleInputChange = (e) => {
    setInputData(prev => (
      {
        ...prev,
        [e.target.name]: e.target.value,

      }
    ))
  }

  return (
    <div className="flex justify-center p-4">
      <form className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4" onSubmit={(e) => e.preventDefault()}>
        <input className="text-gray-700 p-3 bg-teal-100 rounded font-serif" placeholder="Post title" type="text" onChange={handleInputChange} name="title" value={inputData?.title}>
        </input>
        <input className="text-gray-700 p-3 bg-teal-100 rounded font-serif md:col-span-1 col-span-full" placeholder="Post body" type="text" onChange={handleInputChange} name="description" value={inputData?.description}>
        </input>
        <button className=" bg-orange-700 text-white font-bold rounded font-serif" onClick={() => primaryButtonClickHandler(inputData)}>{isEdit ? "Edit" : "Add"}</button>
      </form>
    </div> 
    )
}

export default PostForm;