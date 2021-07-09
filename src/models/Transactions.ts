export default class Transactions{
    static transactions: any[]

    constructor(){
        Transactions.transactions = []
        
    }

    add(objeto: any){
        Transactions.transactions.push(objeto)
    }
    
}
