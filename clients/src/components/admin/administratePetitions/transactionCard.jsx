import { LuAlertCircle } from "react-icons/lu";
import { GrStatusGood } from "react-icons/gr";
import { MdCloudDone, MdDeleteForever } from "react-icons/md";
import useUpdateRentStatus from "../../../hooks/admin/updateRentStatus";

function TransactionCard({deleteTransaction, transaction, reloadTransactions,  }) {
  const { status, User, Apartment, id } = transaction;
  // console.log("🚀 ~ TransactionCard ~ id:", id)
  

  return (
    <div className="flex justify-between w-[500] items-center border p-2 rounded gap-2 font-quicksand md:px-5">
      <div className="flex flex-col items-center ">
        <div
          className={`size-[40px] rounded-full  ${
            status.includes("pending") ? "bg-yellow-500" : "bg-green-500"
          } flex items-center justify-center `}
        >
          {status.includes("pending") ? (
            <LuAlertCircle className="text-[100px] text-yellow-200" />
          ) : (
            <GrStatusGood className="text-[100px] text-green-200" />
          )}
        </div>
        <span className="text-xs text-center  text-gray-400">{status}</span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <img
          className="rounded-full size-[40px]"
          src={User.email && User.image}
          alt=""
        />
        <span className="text-xs text-center text-gray-400">{User.name}</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          className="rounded-full size-[40px]"
          src={Apartment.id && Apartment.images[0]}
          alt=""
        />
        <span className="text-xs text-center text-gray-400">{Apartment.urbanizacion}</span>
      </div>
     {status.includes('pending') && <PendingPanel rentId={transaction.id} transactionId={id} deleteTransaction={deleteTransaction} reloadTransactions={reloadTransactions}/>}
    </div>
  );
}

export default TransactionCard;

function PendingPanel({rentId, reloadTransactions, deleteTransaction, transactionId }) {
  console.log("🚀 ~ PendingPanel ~ deleteTransaction:", deleteTransaction)
  const { updateRentStatus, loading, error } = useUpdateRentStatus(reloadTransactions);

  const handleUpdate = () => {
    updateRentStatus(rentId, "active")
      .then(() => {
        alert("Rent status updated successfully");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to update rent status");
      });
  };

  return (
    <div className="flex gap-3">
      <button onClick={handleUpdate} disabled={loading}>
        {
          <MdCloudDone className="text-[30px] text-black hover:text-green-500 transition-all delay-200 cursor-pointer hover:scale-125" />
        }
      </button>
      <button onClick={()=> {deleteTransaction(transactionId)}}>
        {
          <MdDeleteForever className="text-[30px] text-black hover:text-red-500 transition-all delay-200 cursor-pointer hover:scale-125" />
        }
      </button>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}


