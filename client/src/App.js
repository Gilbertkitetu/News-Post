import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom'
//import bootstrap from '../node_module/bootstrap/dist/css/bootstrap.min.css'

import PostList from "./components/postList";
//import AddPost from "./components/addPost";
import AddPost from "./components/addPost";
import EditPost from "./components/editPost";




function App() {
    return (
        <div className = "App">
        <h1 style = {{backgroundColor: 'black', color:'white', padding:'10px'}}> Happy hacking </h1>
            <BrowserRouter>

                <Route path='/' component={PostList} exact/>
                <Route path='/addpost' component={AddPost} exact/>
                <Route path='/editpost/:postid' component={EditPost}/>

            </BrowserRouter>
           {/* <PostList />*/}
           {/*<AddPost />*/}
           {/* <EditPost />*/}

        </div>
    );
}

export default App;