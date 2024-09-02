import express, { Request, Response} from "express";
import tuorsController from "../Controllers/tuorsController";

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    tuorsController.getFilterTuors(req, res)
})
    
export default router