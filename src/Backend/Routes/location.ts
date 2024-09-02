import express, { Request, Response} from "express";
import locationController from "../Controllers/locationController";

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    locationController.getAllLocation(req, res)
})

router.post('/', (req: Request, res: Response) => {
    locationController.postLocation(req, res)
})
    
export default router