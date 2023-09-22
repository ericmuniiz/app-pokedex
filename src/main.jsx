import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx';
import Contatos from "./Contatos";
import App from "./App";
import Monster from './Monster';

// Define as páginas (rotas) do projeto
const router = createBrowserRouter([
  {
    path: "/Pokemon",
    element: <App />
  },
  {
    path: "/Home",
    element: <Home />
  },
  {
    path: "/Monster/:id",
    element: <Monster />
  },
  {
    path: "/Contatos",
    element: <Contatos />
  }
  
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
