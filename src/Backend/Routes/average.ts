import express, { Request, Response} from "express";
import averageController from "../Controllers/averageController";

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    averageController.getAllAverage(req, res)
})

router.post('/', (req: Request, res: Response) => {
    averageController.postAverage(req, res)
})

router.delete('/:id', (req: Request, res: Response) => {
    averageController.deleteAverage(req, res)
})
    
export default router