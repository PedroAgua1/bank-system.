import Transactions from "../models/Transactions";

export default function analyzeId(value: string){
    for(var i=0; i <= Transactions.transactions.length;i++){
        var idsAnalyze = Transactions.transactions[i].id
        var transaction = Transactions.transactions[i]

        if(value = idsAnalyze){
            return transaction
        }
    }
}