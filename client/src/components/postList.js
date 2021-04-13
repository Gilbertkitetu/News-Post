import React, { useEffect, useState } from 'react';
import  axios from 'axios';

import PostItem from "./postItem";

function PostList(){

    const[postsdata , setpostdata] = useState([])
    
    useEffect(()=> {
        axios.get('/api/post/getposts').then(res=>{
            console.log(res.data)
            setpostdata(res.data)

        }).catch(err => {
            console.log(err);
        })
    }, [])

    const postlist = postsdata.map(post=>{
        return (
            <div>

                <PostItem post = {post}/>
            </div>
        )
    })
    
    return(
        <div>
            <a href="/addpost">Add Post</a>
            {postlist}
        </div>
    );
}

export default PostList