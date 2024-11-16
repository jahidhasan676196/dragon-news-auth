import { useContext } from "react";
import { AuthContext } from "../Layout/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
 const {user}=useContext(AuthContext)
 console.log(user);
 console.log(children);
 if(user){
    return children
 }
 return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;