import { useEffect } from "react";
import useAdminTransaction from "../../../hooks/admin/adminTransacion";
import TransactionPending from "./transactionPending";
import TransactionActive from "./transactonActive";
import TransitionActive from "./transactonActive";
import useAdminGetUser from "../../../hooks/admin/adminUserDetail";
import useAdminApartments from "../../../hooks/admin/adminApartments";

function AdministrateSection() {
  const {getTransactions, transactions, deleteTransaction } = useAdminTransaction()
  
  useEffect(()=>{getTransactions()},[])

  return (
    <div className="grid md:grid-cols-1 xl:grid-cols-2   "> 
      <TransactionPending transactions={transactions.pending} reloadTransactions={getTransactions} deleteTransaction={deleteTransaction}/>
      <TransactionActive transactions={transactions.active} reloadTransactions={getTransactions} deleteTransaction={deleteTransaction}/>
    
    </div>
  );
}

export default AdministrateSection;