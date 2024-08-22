import schemaTuors from "../Models/Tuors";
import { Request, Response } from "express";
import { tuorsProps } from "../Types/bdTypes";

const tuorsController = {
    postTuors: async (req: Request, res: Response) => {
        try {
            const newTuor: tuorsProps = {
                title: req.body.title,
                categories: req.body.categories,
                location: req.body.location,
                price_person: req.body.price_person,
                time: req.body.time,
                max_person: req.body.max_person,
                min_age: req.body.min_age
            }

            const obj = await schemaTuors.create(newTuor)
            
            res.status(201).json({obj, msg: 'Tuor created!'})
            
        } catch (err) {
            res.status(400).json({"Error to POST Tuors": err})
        }
    },
    getAllTuors: async (req: Request, res: Response) => {
        try {
            const obj = await schemaTuors.find()

            res.status(200).json({obj})
        } catch (err) {
            res.status(400).json({"Error to GET Tuors": err})
        }
    },
    deleteTuors: async (req: Request, res: Response) => {
        try {
            const { id } = req.params

            const obj = await schemaTuors.findOneAndDelete({_id: id})

            if(!obj)
                res.status(404).json({err: "Tuor not found."})

            res.status(201).json({obj, msg: 'Tuor deleted!'})
            
        } catch (err) {
            res.status(400).json({"Error to DELETE Tuors": err})
        }
    },
    updateTuors: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const updateTuor: tuorsProps = {
                title: req.body.title,
                categories: req.body.categories,
                location: req.body.location,
                price_person: req.body.price_person,
                time: req.body.time,
                max_person: req.body.max_person,
                min_age: req.body.min_age
            } 

            const obj = await schemaTuors.findByIdAndUpdate(id, updateTuor)

            if(!obj)
                res.status(404).json({err: "Tuor not found."})
            
            res.status(201).json({obj, msg: 'Tuor updated!'})
            
        } catch (err) {
            res.status(400).json({"Error to UPDATE Tuors": err})
        }
    }
}

export default tuorsController