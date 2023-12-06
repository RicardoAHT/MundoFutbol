import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  
    const user = useSelector(store => store.user)
    if(user.length > 2){
        return <Outlet />
    }else {
        return <Navigate to="/"/>
    }
}
export default ProtectedRoutes