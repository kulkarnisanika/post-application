import React from "react"
import Post from "./Post";
import { addPost, getPost, deletePost, updatePost } from "../api/postApis";
import { useState, useEffect } from "react";
import PostForm from "./PostForm";


const PostList = () => {

    const [postData, setPostData] = useState([]);
    const [formData, setFormData] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        getPostData();
    }, []);


     const getPostData = async () => {
        try {
            const res = await getPost();
            setPostData(res.data);

        }
        catch (error) {
            console.error(error);
        }
    }

    const handleAddPost = async (data) => {
        await addPost(data);
        setPostData(prev => [
            ...prev,
            {
                id: 101,
                userId: 1,
                title: data?.title,
                body: data?.description
            }
        ])
        setFormData({})
    }

    const deletePostApi = async (id) => {
        await deletePost(id);
        const deletedRes = postData?.filter((post) => post.id !== id)
        setPostData(deletedRes);
    }

    const updatePostApi = async (data) => {
        const updatedRes = await updatePost(data);
        const editedResult = postData?.map((post) => {
            if(post?.id === data?.id)
                return updatedRes?.data;
            return post;
        });

        setPostData(editedResult);
        setFormData({});

    }

    const postActionHander = (action, id, title, body) => {
        action === "edit" ? setIsEdit(true) : setIsEdit(false);
        if (action === "edit") {
            setFormData({
                title: title,
                description: body,
                id: id
            });
        } else {
            deletePostApi(id);
        }

        


    }



    const formPrimaryButtonHandler = (data) => {

        if (isEdit === true) {
            updatePostApi({
                title: data.title,
                description: data.description,
                id: data.id
            })
        }
        else {
            handleAddPost({
                title: data.title,
                description: data.description,
                userId: 1

            });
        }
    }


    return (
        <>
            <div>

                <PostForm
                    isEdit={isEdit}
                    formData={formData}
                    primaryButtonClickHandler={(data) => formPrimaryButtonHandler(data)}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {!!(postData) && postData.map(({ id, title, body }) => (
                        <Post key={id}
                            title={title}
                            description={body}
                            actionHandler={(action) => postActionHander(action, id, title, body)}
                        />
                    ))}
                </div>
            </div>


        </>

    )

}
export default PostList;