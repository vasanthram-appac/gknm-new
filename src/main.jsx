import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './Admin/App.jsx'
import Appweb from './Web/Appweb.jsx'
import { BrowserRouter ,Routes ,Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>
      <Route path="/*" element={<Appweb/>} ></Route>
      <Route path="/admin/*" element={<App/>} ></Route>
  </Routes>
  
  </BrowserRouter>
  

  </StrictMode>,
)
