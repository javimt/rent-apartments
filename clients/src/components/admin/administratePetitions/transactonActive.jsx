import Transition from "../../complements/transition";
import TransactionCard from "./transactionCard";



function TransactionActive({ transactions }) {
    return (
        <Transition className="overflow-y-scroll flex flex-col items-center h-full shadow-2xl rounded-lg xl:mx-auto p-1 font-quicksand relative ">
            <div>
                <p className="text-gray-400 text-center">Actives Rents</p>
            </div>
            <dir className='pt-5 w-full p-0'>
                {
                     transactions && transactions.map(tr => {
                     
                        return <TransactionCard key={tr.id} transaction={tr} />
                    })
                }
            </dir>


        </Transition>
    );
}

export default TransactionActive;