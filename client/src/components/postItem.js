import React, { useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from "axios";
import AOS from "aos";
import 'aos/dist/aos.css';
function PostItem({post}){

    const history = useHistory()

     useEffect(()=>{
         AOS.init()
     }, [])

    function deletepost(postid){
        axios.post('/api/post/deletepost' , {postid: postid}).then(res=>{
            alert(res.data)
            history.go(0)
        }).catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className='post_item'>
            <h1 className='p-1'>{post.title}</h1>
            <img src={post.imageurl} className='img'/>
            <p className='description'>{post.description}</p>
            <Link to = {`/editPost/${post.postid}`}><li className='link'>Edit</li></Link>
            <button className='btn' onClick={()=>{deletepost(post.postid)}}>Delete</button>
        </div>
    );
}

export default PostItem;