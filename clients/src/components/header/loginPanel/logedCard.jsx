


function LogedCard({icon, title, callback}) {

    return (

        <div onClick={callback} className="flex justify-between items-center  px-3 py-1 cursor-pointer hover:bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNRTRmplFFt2XkaiSfQUlvoArEKUSxFcYaA&s)] ">
            <div className="text-[16px]">
                {icon}
            </div>
            <div>
                <span>{title}</span>
            </div>

        </div>
    );
}

export default LogedCard;