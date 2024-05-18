import Transition from "../../complements/transition"
import TransactionCard from "./transactionCard";


function TransactionPending({ transactions,  }) {

    return (
        <Transition className="overflow-y-scroll flex flex-col items-center h-[70vh] shadow-2xl rounded-lg xl:mx-auto p-1 font-quicksand relative ">
            <div>
                <p className="text-gray-400 text-center">Rents to Confirm</p>
            </div>
            <dir className='pt-5 flex w-full p-0 flex-col gap-2'>
                {
                    transactions && transactions.map(tr => {
                        return <TransactionCard key={tr.id} transaction={tr} />
                    })
                }
            </dir>

        </Transition>
    );
}

export default TransactionPending;