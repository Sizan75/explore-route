
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Main from './layout/Main';
import Friends from './components/Friends/Friends';
// import Header from './components/Header/Header';

function App() {
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
        }
      ]
    },
    {
      path:'*',
      element:<h3>Not Found</h3>
    }
    
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
