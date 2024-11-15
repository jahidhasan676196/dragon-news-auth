import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Layout/Route.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Layout/AuthProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
  </StrictMode>,
)
