import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider } from 'react-router-dom'
import { routes } from './src/routes'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <RouterProvider router={routes}>
        <App />
    </RouterProvider>
)