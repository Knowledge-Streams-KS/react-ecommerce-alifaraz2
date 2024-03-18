import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
//import "./index.css"

import { UserAuthProvider } from "./context/AuthContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
  <UserAuthProvider>
  <App />
  </UserAuthProvider>
      
    </BrowserRouter>
  </React.StrictMode>
)
