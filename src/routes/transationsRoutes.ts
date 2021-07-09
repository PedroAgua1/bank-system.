import { Response, Request, Router } from "express";
import { repositoryController } from "../controller/repositoryController";

const transactionRoute = Router()

transactionRoute.post('/', (request: Request, response: Response) => {
    const {name, value} = request.body

    repositoryController(name, value)

    return response.json({'🍗message':'A rota de visualização é /transactionViewr' });
})

export default transactionRoute 
