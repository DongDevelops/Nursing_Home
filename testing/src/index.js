import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PostingPage from './pages/PostingPage';
import Search from './pages/Search';
import Admins from './Admins';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "posting",
    element: <PostingPage />,
  },
  {
    path: "search",
    element: <Search />,
  },
  {
    path: "admin",
    element: <Admins />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router}/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
