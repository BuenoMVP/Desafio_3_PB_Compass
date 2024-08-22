import { server } from './config/server'

import dotenv from 'dotenv'
dotenv.config()

import { connectDB } from './config/connectDB'
connectDB()

const port = process.env.PORT

server.listen(port, () => {
    console.log('Server running on port: '+port)
})