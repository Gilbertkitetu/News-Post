import React, { useState } from 'react';
import uniqid from 'uniqid';
import axios from 'axios'

function AddPost(){
//hooks
    const[title , settitle] = useState('');
    const[imageurl , setimageurl] = useState('');
    const[description , setdescription] = useState('');

    function addPost(){
        var post = {
            title: title,
            imageurl: imageurl,
            description: description ,
            postid : uniqid()
        }

        axios.post('/api/post/addnewpost', post).then(res=>{
            alert(res.data)
        }).then(err=>{
            console.log(err)
        })

    }

    return(
        <div className='addpost'>

            <div className='col-md-6'>
                <div>
                    <a href="/">See Posts</a>
                    <input type="text" placeholder='title' className='form-control'
                    value={title} onChange={(e) => {settitle(e.target.value)}}
                    />
                    <input type="text" placeholder='imageURL' className='form-control'
                    value={imageurl} onChange={(e) => {setimageurl(e.target.value)}}
                    />
                    <textarea cols="30" rows="10" placeholder='Description' className='form-control'
                    value={description} onChange={(e)=>{setdescription(e.target.value)}}
                    />
                    
                    <button onClick={addPost} className='btn btn-success float-right'>Add post</button>
                </div>
            </div>
        </div>
    );
}

export default AddPost;