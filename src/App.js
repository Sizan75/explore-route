
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router= createBrowserRouter([
 {
  path:'/',
  element:<h1>Hello from root</h1>
 },
 {
  path:'/home',
  element:<h1>Hello from home</h1>
 }
  ])
  return (
    <div className="App">
     <h1>Hello</h1>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
