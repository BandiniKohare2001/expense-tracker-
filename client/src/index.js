import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Home from './views/Home/Home';
import Signup from './views/Signup/Signup';
import Login from './views/Login/Login';
import Transactions from './views/Transactions/Transactions';
import AddTransaction from './views/AddTransaction/AddTransaction';
import UpdateTransaction from './views/UpdateTransaction/UpdateTransaction';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/add-transaction",
    element: <AddTransaction />
  },
  {
    path: "/transactions",
    element: <Transactions />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path:'/updateTransaction/:id',
    element:<UpdateTransaction/>
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
