import { LuAlertOctagon } from "react-icons/lu";

function AlertComponent({ errors, property }) {
  const error = errors[property];

  return (
    <>
      {error ? (
        <div className="text-[10px] ml-2 text-red-400 flex gap-1 w-[100px]">
          <LuAlertOctagon className="text-yellow-500" />
          <span>{error && error.message}</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AlertComponent;
