import useAdminGetUser from "../../../hooks/admin/adminUserDetail";
import UserList from "./userList";



function ListUserSection() {
    
    const {deleteUser, editUser, getUserDetail,getUsers,resetUsers,users} = useAdminGetUser()

    
    return (
            <dir className="grid h-[60%] md:grid-cols-1 xl:grid-cols-2 gap-2  ">
                <UserList users={users}/>
                <div>
                </div>                
            </dir>
    );
}

export default ListUserSection;