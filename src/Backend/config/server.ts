import express from 'express'

const server = express()

server.get('/', (req, res) => {
    return res.send('Página do back end')
})

export { server }