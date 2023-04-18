import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PostingPage from './pages/posting/PostingPage';
import Admin from './pages/admin/Admin';
import Search from './pages/search/Search';
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
    element: <Admin />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router}/>

);