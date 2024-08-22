import express, { Request, Response} from "express";
import categoriesController from "../Controllers/categoriesController";

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    categoriesController.getAllCategories(req, res)
})

router.post('/', (req: Request, res: Response) => {
    categoriesController.postCategories(req, res)
})

router.delete('/:id', (req: Request, res: Response) => {
    categoriesController.deleteCategories(req, res)
})

router.put('/:id', (req: Request, res: Response) => {
    categoriesController.updateCategories(req, res)
})
    
export default router