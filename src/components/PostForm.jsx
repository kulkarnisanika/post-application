import React, { useState, useEffect } from "react"

const PostForm = ({isEdit, formData, primaryButtonClickHandler }) => {

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

    return(
        <>
         <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" onChange={handleInputChange} name="title" value={inputData?.title}>
            </input>
            <input type="text" onChange={handleInputChange} name="description" value={inputData?.description}>
            </input>
            <button onClick={() => primaryButtonClickHandler(inputData)}>{isEdit ? "Edit" : "Add" }</button>
        </form>
        </>
    )
}

export default PostForm;