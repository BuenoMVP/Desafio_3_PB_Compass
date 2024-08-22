import express, { Request, Response } from 'express'
import categoriesRouter from './categories'

const router = express.Router()

router.use('/cat', categoriesRouter)
router.use('/', (req: Request, res: Response) => {
    return res.send('Página da api')
})

export default router