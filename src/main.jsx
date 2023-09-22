import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './Router/Router'


export const GlobalContext = createContext();
export const GlobalContext2 = createContext();



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext.Provider value={{user: 'true'}}>
      <GlobalContext2.Provider value={{user: 'false'}}>
      <RouterProvider router={myCreatedRoute}></RouterProvider>
      </GlobalContext2.Provider>
    </GlobalContext.Provider>
  </React.StrictMode>,
)
