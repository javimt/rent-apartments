import Transition from "../../complements/transition"
import TransactionCard from "./transactionCard";


function TransactionPending({ transactions, users, apartments }) {

    return (
        <Transition className="overflow-y-scroll flex flex-col items-center h-[70vh] shadow-2xl rounded-lg xl:mx-auto p-1 font-quicksand relative ">
            <div>
                <p className="text-gray-400 text-center">Rents to Confirm</p>
            </div>
            <dir className='pt-5 flex w-full p-0 flex-col gap-2'>
                {
                    transactions && transactions.map(tr => {
                        const user =  users.length && users.find(e => e.email.includes(tr.userId))
                        
                        const apartment = apartments.rent.length && apartments.rent.concat(apartments.sale)
                        console.log("🚀 ~ TransactionPending ~ apartment:", apartment)
                        
                        return <TransactionCard key={tr.id} transaction={tr} user={user} />
                    })
                }
            </dir>

        </Transition>
    );
}

export default TransactionPending;