import axios from "axios"


const post = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getPost = post.get("/posts");