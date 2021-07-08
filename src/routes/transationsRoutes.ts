import { Response, Request, Router } from "express";
import Transaction from "../models/Transaction";
import Transactions from "../models/Transactions";

const transactionRoute = Router()

interface post{
    name: string
    value: number
}

transactionRoute.post('/', (request: Request, response: Response) => {
    const {name, value}:  post = request.body
    
    const data = new Transaction(name, value)

    data.viewr()

    return response.json({'🍗message':'A rota de visualização é /transactionViewr' });
})

export default transactionRoute 