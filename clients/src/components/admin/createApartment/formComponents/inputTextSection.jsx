

function InputTextSection({ label, name, value, handle}) {
    return (
        <div className="flex flex-col mx-2 my-2">
            <label className="text-gray-400 text-[13px] mb-1">{label}</label>
            <input onChange={handle} placeholder={"inserte texto"} name={name} value={value}  type="text" className=" placeholder:text-[12px] text-[12px] px-1 py-1 shadow-light border-[1px] text-gray-400 border-blue-950 rounded-md" />
        </div>
    );
}

export default InputTextSection;