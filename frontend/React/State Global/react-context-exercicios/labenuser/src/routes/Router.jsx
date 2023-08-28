import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import UserListPage from "../pages/userList/UserListPage";
import UserRegisterPage from "../pages/userRegister/UserRegisterPage";

export default function Router(){

  return(
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route index element={<UserListPage/>}/>
          <Route path='/user-register' element={<UserRegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}