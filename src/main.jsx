import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Statistics from './components/Statistics/Statistics';
// import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
// import Error from './components/Error/Error';
import SingleJob from './components/SingleJob/SingleJob';
import Apply from './components/Apply/Apply';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'appliedjobs',
        element: <Apply></Apply>
      },
      {
        path:'blog',
        element: <Blog></Blog>
      },
      {
        path: '/jobs/:id',
        element: <SingleJob></SingleJob>,
        loader: ()=>fetch("/feature.json")
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
