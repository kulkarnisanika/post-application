import React from "react"
import Post from "./Post";
import { addPost, getPost, deletePost, updatePost } from "../api/postApis";
import { useState, useEffect } from "react";
import PostForm from "./PostForm";
import Shimmer from "./Shimmer";
import Snackbar from "./Snackbar";


const PostList = () => {

    const [postData, setPostData] = useState([]);
    const [formData, setFormData] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [showShimmer, setShowShimmer] = useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false);

    useEffect(() => {
        getPostData();
    }, []);


    const getPostData = async () => {
        try {
            setShowShimmer(true);
            const res = await getPost();
            setPostData(res.data);
            setShowShimmer(false)

        }
        catch (error) {
            console.error(error);
        }
    }

    const handleAddPost = async (data) => {
        setShowShimmer(true);
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
        setShowShimmer(false);
        setShowSnackbar(true)
    }

    const deletePostApi = async (id) => {
        setShowShimmer(true);
        await deletePost(id);
        const deletedRes = postData?.filter((post) => post.id !== id)
        setPostData(deletedRes);
        setShowShimmer(false);
        setShowSnackbar(true);
    }

    const updatePostApi = async (data) => {
        setShowShimmer(true);
        const updatedRes = await updatePost(data);
        const editedResult = postData?.map((post) => {
            if (post?.id === data?.id)
                return updatedRes?.data;
            return post;
        });

        setPostData(editedResult);
        setShowShimmer(false);
        setShowSnackbar(true);

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
            });
            setFormData({ title: "", description: "" });
            setIsEdit(false)
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
                <div className=" hover:bg-teal-800">
                    {
                        !!showSnackbar && 
                        (
                        <Snackbar
                            onClose = {() => setShowSnackbar(false)}
                            message = {"Post Data Refreshed!"}
                        />)
                    }
                </div>
                <div className="m-2">
                    <PostForm
                        isEdit={isEdit}
                        formData={formData}
                        primaryButtonClickHandler={(data) => formPrimaryButtonHandler(data)}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-2">
                    {!showShimmer ? postData.map(({ id, title, body }) => (
                        <Post key={id}
                            title={title}
                            description={body}
                            actionHandler={(action) => postActionHander(action, id, title, body)}
                            id={id}
                        />
                    )) :
                        (
                            Array.from({ length: 12 }).map((_, i) => <Shimmer key={i} />)
                        )}
                </div>
            </div>


        </>

    )

}
export default PostList;