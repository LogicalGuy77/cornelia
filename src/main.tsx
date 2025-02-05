import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from './pages/About.tsx';
import Signup from './pages/Signup.tsx';
import Blog from './pages/Blog.tsx';
import Features from './pages/Features.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/blogs",
    element: <Blog />,
  },
  {
    path: "/features",
    element: <Features />,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
