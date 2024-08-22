import express, { Request, Response} from "express";
import reviewsController from "../Controllers/reviewsController";

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    reviewsController.getAllReviews(req, res)
})

router.post('/', (req: Request, res: Response) => {
    reviewsController.postReviews(req, res)
})

router.delete('/:id', (req: Request, res: Response) => {
    reviewsController.deleteReviews(req, res)
})

router.put('/:id', (req: Request, res: Response) => {
    reviewsController.updateReviews(req, res)
})
    
export default router