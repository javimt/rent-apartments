


function UserRenderSection({ user }) {
    return (
        <div className='shadow-2xl flex justify-center items-center font-quicksand'>
            <div className="flex flex-col">
                <img src={user.image} alt="" className="size-[100px] rounded-lg" />
                <p className="text-gray-400 ">{user.lastName}</p>
            </div>

        </div>
    );
}

export default UserRenderSection;