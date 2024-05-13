import UserCard from "./userCard";



function UserList({users, findUser}) {
    return ( 


    <div className=" flex flex-col gap-2 shadow-2xl p-3 overflow-y-scroll">
        {
            users.length && users.map(us => {
                return <UserCard key={us.email} user={us} findUser={findUser}/>
            })
        }
    </div>
    );
}

export default UserList;