import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Root from './Root';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Github from './components/Github/Github';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>

      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        loader: () => fetch('https://api.github.com/users/codewithiftekhar') ,
        path: "/github",
        element: <Github/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
