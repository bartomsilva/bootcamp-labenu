import { goToLogin } from "../routes/coordinator"
export function logout(navigate){
    localStorage.removeItem('token')
    goToLogin(navigate)
}