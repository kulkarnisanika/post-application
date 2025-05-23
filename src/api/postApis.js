import axios from "axios"


const post = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getPost = () => {
    return post.get("/posts");
}

export const addPost = (newPost) => post.post("/posts",{
    title: newPost.title,
    body: newPost.description,
    userId: newPost.userId
})


export const deletePost = (id) => {
    return post.delete(`/posts/${id}`);
}


export const updatePost = (updatedPost) => post.patch(`/posts/${updatedPost.id}`,{
    id: updatedPost.id,
    title: updatedPost.title,
    body: updatedPost.description
})