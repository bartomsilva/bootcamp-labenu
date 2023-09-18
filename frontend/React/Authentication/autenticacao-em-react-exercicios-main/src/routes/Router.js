import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from "../pages/errorPage/ErrorPage";
import FeedPage from "../pages/feedPage/FeedPage";
import LoginPage from "../pages/loginPage/LoginPage";
import SignUpPage from "../pages/signUpPage/SignUpPage";
import { CreateRecipe } from "../pages/createRecipe/CreateRecipe";

function Router() {

  function ProtectedRoute({ children, redirectTo }){
    const token = localStorage.getItem('token') !== null
    return token ? children : <Navigate to={redirectTo}/>
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/feed"} element={
        <ProtectedRoute redirectTo={'/'}>
          <FeedPage />
        </ProtectedRoute>}/>
        
        <Route path={"/newrecipe"} element={
        <ProtectedRoute redirectTo={'/'}>
          <CreateRecipe />
        </ProtectedRoute>}/>
        <Route path={"/signup"} element={<SignUpPage />} />
        <Route path={"/"} element={<LoginPage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;