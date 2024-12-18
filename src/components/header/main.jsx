import Header from "./header";
import Sidemenu from "./sidemenu";
import Dashboard from "../Pages/dashboard";
import { BrowserRouter ,Routes ,Route } from "react-router-dom";

function Main(){
    return(
        <>
        <BrowserRouter>
        <Header/>
        <div className="d-grid">
            <div className="side-bar">
                  <Sidemenu/>
            </div>
            <div className="content-div">
            <h2>Content</h2>
               <Routes>
                  <Route path="/dashboard" element={<Dashboard/>} ></Route>
               </Routes>

            </div>
        </div>
        </BrowserRouter>
        </>
    )
}
export default Main;