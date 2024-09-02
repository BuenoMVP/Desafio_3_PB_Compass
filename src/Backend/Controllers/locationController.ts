import schemaLocation from "../Models/Location";
import { Request, Response } from "express";
import { locationProps } from "../Types/bdTypes";

const locationController = {
    postLocation: async (req: Request, res: Response) => {
        try {
            const newLocation: locationProps = {
                country: req.body.country,
                city: req.body.city
            }

            const objLocation = await schemaLocation.create(newLocation)
            
            res.status(201).json({objLocation, msg: 'Location created!'})
            
        } catch (err) {
            res.status(400).json({"Error to POST Location": err})
        }
    },
    getAllLocation: async (req: Request, res: Response) => {
        try {
            const objLocation = await schemaLocation.find()

            res.status(200).send(objLocation)
        } catch (err) {
            res.status(400).json({"Error to GET Location": err})
        }
    }
}

export default locationController