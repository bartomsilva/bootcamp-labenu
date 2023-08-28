import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";

export function Router(props){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage users={props.users}/>} />
            </Routes>
        </BrowserRouter>
    )


}