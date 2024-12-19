import Header from "./header";
import Sidemenu from "./sidemenu";
import { Routes ,Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

function Main(){
    return(
        <>
     
        <Header/>
        <div className="d-grid">
            <div className="side-bar">
                  <Sidemenu/>
            </div>
            <div className="content-div">
               <Routes>

               <Route path="dashboard" element={<Dashboard />} ></Route>

               </Routes>
                
                 

         

            </div>
        </div>
      
        </>
    )
}
export default Main;