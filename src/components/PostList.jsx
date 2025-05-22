import React from "react"
import Post from "./Post";
import { getPost } from "../api/postApis";
import { useState, useEffect } from "react";
import PostForm from "./PostForm";


const PostList = () => {

    const [postData, setPostData] = useState([]);
    const [formData, setFormData] = useState({})

    const getPostData = async () => {
        try {
            const res = await getPost;
            setPostData(res.data);
            
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getPostData();

    }, [])

    const postActionHander = (action,id,title,body) => {

        if(action === "edit"){
            setFormData({
                title: {title},
                description: {body},
                id: {id}
            })
        }

    }

    const formPrimaryButtonHandler = (formData) => {

        console.log("data", formData);
        if(isEdit === true){

        console.log("edit")
        }
        else{

        console.log("save")
        }


    }

   
    return (
        <>
            <div>

                <PostForm 
                    isEdit={true}  
                    formData={formData} 
                    primaryButtonClickHandler={(data) => formPrimaryButtonHandler(data)}
                    />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {!!(postData) && postData.map(({ id, title, body }) => (
                        <Post key={id}
                            title={title}
                            description={body}
                            actionHandler={(action) => postActionHander(action,id,title, body)}
                        />
                    ))}
                </div>
            </div>


        </>

    )

}
export default PostList;