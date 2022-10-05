import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import FriendDetails from "../components/FriendDetails/FriendDetails";
import Friends from "../components/Friends/Friends";
import Home from "../components/Home/Home";
import PostDetails from "../components/PostDetails/PostDetails";
import Posts from "../components/Posts/Posts";
import Main from "../layout/Main";

const router = createBrowserRouter([
    
    {
      path: '/',
      element:<Main></Main>, children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/friends',
          loader: () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
          element: <Friends></Friends>
        },
        {
          path:'/friend/:friendId',
          loader:async({params}) =>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element:<FriendDetails></FriendDetails>
        },
        {
          path:'/posts',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element: <Posts></Posts>
        },
        {
          path:'/post/:postId',
          loader: async ({params}) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails></PostDetails>
        }
      ]
    },
    {
      path:'*',
      element:<h3>Not Found</h3>
    }
    
  ]);

  export default router;