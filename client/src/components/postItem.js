import React, { useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from "axios";
//import AOS from "aos";
//import 'aos/dist/aos.css'
function PostItem({post}){

    const history = useHistory()

    // useEffect(()=>{
    //     AOS.init()
    // }, [])

    function deletepost(postid){
        axios.post('/api/post/deletepost' , {postid: postid}).then(res=>{
            alert(res.data)
            history.go(0)
        }).catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className='col-md-8 shadow p-3 mb-5 bg-white rounded'>
            <h1 className='p-1'>{post.title}</h1>
            <img src={post.imageurl} className='img-fluid'/>
            <p className='p-1'>{post.description}</p>
            <Link to = {`/editPost/${post.postid}`}><li className='btn btn-primary'>Edit</li></Link>
            <button className='btn btn-danger' onClick={()=>{deletepost(post.postid)}}>Delete</button>
        </div>
    );
}

export default PostItem;