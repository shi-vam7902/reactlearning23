// user defined hook
const useAuthentication=()=>{
    var id = localStorage.getItem('id')
    if(id )
    {
        return true
    }
    else{
        return false
    }
}
const protectedRoutes = ()=>{

    useAuthentication ? <Outlet/>:"authentication denined"

}
export default protectedRoutes;
