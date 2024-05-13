


function UserCard( {user} ) {

    const {lastName, image} = user
    console.log("🚀 ~ UserCard ~ user:", user)
    
    return (  
        <div>
            <img src={user.image && user.image}/>
            <p>{ lastName}</p>
        </div>
    );
}

export default UserCard;