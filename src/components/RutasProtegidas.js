import {Outlet, Navigate} from 'react-router-dom'

const RutasProtegidas = () => {
    const token = localStorage.getItem('token')

    if(token){
        return <Outlet />
    } else {
        return <Navigate to="/login" />
    }
}

export default RutasProtegidas;