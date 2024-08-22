import express, { Request, Response} from "express";
import tuorsController from "../Controllers/tuorsController";

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    tuorsController.getAllTuors(req, res)
})

router.post('/', (req: Request, res: Response) => {
    tuorsController.postTuors(req, res)
})

router.delete('/:id', (req: Request, res: Response) => {
    tuorsController.deleteTuors(req, res)
})

router.put('/:id', (req: Request, res: Response) => {
    tuorsController.updateTuors(req, res)
})
    
export default router