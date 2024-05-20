import UserCard from "./userCard";

function UserList({ users, findUser }) {
  
  return (
    <div className=" flex flex-col gap-2 shadow-2xl p-3 overflow-y-scroll ">
      <div>
        <p className="text-gray-400 text-center p-2">Users List</p>
      </div>
      {users.length &&
        users.map((us) => {
          return <UserCard key={us.email} user={us} findUser={findUser} />;
        })
      }
    </div>
  );
}

export default UserList;
