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
    <dir className="grid h-full xl:h-[70%] md:grid-cols-1 xl:grid-cols-2 gap-2 p-0  ">
      <UserList users={users} findUser={findUser} />
      {user.email ? <UserRenderSection user={user} /> : <NonUserPreview />}
    </dir>
  );
}

export default ListUserSection;
