import express, { Request, Response } from 'express'
import categoriesRouter from './categories'
import tuorsRouter from './tuors'

const router = express.Router()

router.use('/cat', categoriesRouter)
router.use('/tuors', tuorsRouter)
router.use('/', (req: Request, res: Response) => {
    return res.send('Página da api')
})

export default router