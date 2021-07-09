import { Router } from 'express'
import { v4 } from 'uuid'
import Transactions from './Transactions'

export const viewrRoute = Router()

export default class Transaction{
    contaCorrente: number
    name: string    
    id: string

    numDeposit: number
    totalDeposit: number

    numWithDraw: number
    totalWithDraw: number

    static quantidade = 0

    constructor(clientName: string, value: number) {
        this.contaCorrente = value
        this.name = clientName
        this.id = v4()

        this.numDeposit = 0
        this.totalDeposit = 0

        this.numWithDraw = 0
        this.totalWithDraw = 0

        Transaction.quantidade += 1

        

        const add = new Transactions()
        add.add(Transaction)
    }

    withdraw(value: number){
        if(this.contaCorrente < value){
            return
        }
        this.contaCorrente -= value
        this.numWithDraw += 1
        this.totalWithDraw += value
    }

    deposit(value: number){
        this.contaCorrente += value
        this.numDeposit += 1
        this.totalDeposit += value
    }

    viewr(){
        viewrRoute.get('/', (request, response)=>{
            return response.json({
                'Nome': `${this.name}`,
                'Conta corrente': `${this.contaCorrente}`,
                
                'Data': `${new Date}`,
                
                'Número de depósito': `R$${this.numDeposit}`,
                'Valor total de depósitos': `R$${this.totalWithDraw}`,
               
                'Número de saques': `${this.numWithDraw}`,
                'Valor total de saques': `R$${this.numDeposit + this.numWithDraw}`,
                
                'Movimentações': `${this.numDeposit }`,
                'Valor movimentado': `R$${this.totalDeposit + this.totalWithDraw}`,    

                'Banco': `$ RichestBank $`
                })
            }
        )
    }
}