import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import router from '../Routes/router'
import cors from 'cors'

const server = express()

server.use(bodyParser.json())

server.use(cors())

server.get('/', (req: Request, res: Response) => {
    return res.send('Página inicial do back end')
})

server.use('/api', router)

export { server }