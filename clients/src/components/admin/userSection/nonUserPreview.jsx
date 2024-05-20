const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4v_QrRQxF3UnlKOYgmqmzMnKS7_CJYuxvNrkdMQOjbL6JPokpHijEb0_lvHnwk9UN3rw&usqp=CAU'


function NonUserPreview() {
    return ( 

        <div className='shadow-2xl flex  items-center font-quicksand w-full p-4 flex-col'>
             <div>
             <p className="text-gray-400 font-semibold text-center pt-2 pb-4">Preview User</p>
            </div>
            <img src={url} className="size-[200px]"  alt="" />
        </div>
     );
}

export default NonUserPreview;