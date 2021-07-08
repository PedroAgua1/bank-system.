import express, { json, Response, Request } from 'express'
import router from './routes/routes'
import Transaction from './models/Transaction'

const app = express() 

app.use(express.json())

//router sempre é o ultimo
app.use(router)


app.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Rota conectada'})
})

app.listen(3333, () => {
    console.log('🍕Door open at entrance 3333')
})