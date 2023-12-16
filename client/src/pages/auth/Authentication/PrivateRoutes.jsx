import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext';


const PrivateRoutes = () => {
    const { auth } = useAuth();
    console.log(auth.token, "auth token")
  
    return(
        auth.token ? <Outlet/> : <Navigate to="/auth/admin/login"/>
    )
}

export default PrivateRoutes