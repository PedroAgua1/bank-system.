import Transactions from "../models/Transactions";
import Transaction from "../models/Transaction";

const transactionRepository = new Transactions()
transactionRepository.add('olá')

export function repositoryController(nome: string, value: number){
    for(var i=0;i<= Transactions.transactions.length;i++){
        if(nome == Transactions.transactions[i].name || Transactions.transactions.length <= 0){
            return console.log('[ERROR] Pessoa já registrada')
        }
        const data = new Transaction(nome, value)
        return console.log('Registrado com sucesso!')
    }
}
