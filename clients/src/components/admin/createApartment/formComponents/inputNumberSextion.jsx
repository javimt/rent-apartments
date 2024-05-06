


function InputNumberSection({ label, name, value, handle}) {
    return (
        <div className="flex flex-col mx-2 my-2 ">
            <label className="text-gray-400 text-[13px] mb-1">{label}</label>
            <input placeholder="Numero"  type="number" onChange={handle} name={name} value={value}  className="placeholder:text-[12px] text-[12px] text-grey-400 px-1 py-1 max-w-[80px] shadow-light border-[1px] rounded-md" />
        </div>
    );
}

export default InputNumberSection;