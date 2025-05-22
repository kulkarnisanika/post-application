import React, { useState, useEffect } from "react"

const PostForm = ({isEdit, formData, primaryButtonClickHandler }) => {

    console.log("from form ", formData)

    const [inputData, setInputData] = useState({});

    useEffect(() => {
    if (formData) {
      setInputData(formData);
    }
  }, [formData]);


    console.log("inputdata",inputData)

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
            <input type="text" onChange={handleInputChange} name="title" value={inputData?.title?.title}>
            </input>
            <input type="text" onChange={handleInputChange} name="description" value={inputData?.description?.body}>
            </input>
            <button onClick={() => primaryButtonClickHandler(inputData)}>{isEdit ? "Edit" : "Add" }</button>
        </form>
        </>
    )
}

export default PostForm;