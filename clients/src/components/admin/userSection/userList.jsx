import UserCard from "./userCard";



function UserList({users}) {
    return ( 


    <div className="">
        {
            users.length && users.map(us => {
                return <UserCard user={us}/>
            })
        }
    </div>
    );
}

export default UserList;