import { useEffect } from "react";
import useAdminGetUser from "../../../hooks/admin/adminUserDetail";
import NonUserPreview from "./nonUserPreview";
import UserRenderSection from "./renderUserSection";
import UserList from "./userList";

function ListUserSection() {
  const {
    deleteUser,
    editUser,
    getUserDetail,
    getUsers,
    resetUsers,
    users,
    findUser,
    user,
    getAllUsers
  } = useAdminGetUser();

  useEffect(()=>{
    getAllUsers()
  },[])

  return (
    <div className="grid h-full xl:grid-cols-[2fr,1fr] md:grid-cols-1  gap-2 p-0  ">
      <UserList users={users} findUser={findUser} />
      {user.email ? <UserRenderSection user={user} /> : <NonUserPreview />}
    </div>
  );
}

export default ListUserSection;
