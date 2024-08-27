import schemaTuors from "../Models/Tuors";
import { Request, Response } from "express";
import { tuorsProps } from "../Types/bdTypes";

const tuorsController = {
    postTuors: async (req: Request, res: Response) => {
        try {
            const newTuor: tuorsProps = {
                title: req.body.title,
                overview: req.body.overview,
                categories: req.body.categories,
                location: req.body.location,
                price_person: req.body.price_person,
                time: req.body.time,
                max_person: req.body.max_person,
                min_age: req.body.min_age
            }

            const objTuor = await schemaTuors.create(newTuor)
            
            res.status(201).json({objTuor, msg: 'Tuor created!'})
            
        } catch (err) {
            res.status(400).json({"Error to POST Tuors": err})
        }
    },
    getAllTuors: async (req: Request, res: Response) => {
        try {
            const objTuor = await schemaTuors.find()

            res.status(200).send(objTuor)
        } catch (err) {
            res.status(400).json({"Error to GET Tuors": err})
        }
    },
    deleteTuors: async (req: Request, res: Response) => {
        try {
            const { id } = req.params

            const objTuor = await schemaTuors.findOneAndDelete({_id: id})

            if(!objTuor)
                res.status(404).json({err: "Tuor not found."})

            res.status(201).json({objTuor, msg: 'Tuor deleted!'})
            
        } catch (err) {
            res.status(400).json({"Error to DELETE Tuors": err})
        }
    },
    updateTuors: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const updateTuor: tuorsProps = {
                title: req.body.title,
                overview: req.body.overview,
                categories: req.body.categories,
                location: req.body.location,
                price_person: req.body.price_person,
                time: req.body.time,
                max_person: req.body.max_person,
                min_age: req.body.min_age
            } 

            const objTuor = await schemaTuors.findByIdAndUpdate(id, updateTuor)

            if(!objTuor)
                res.status(404).json({err: "Tuor not found."})
            
            res.status(201).json({objTuor, msg: 'Tuor updated!'})
            
        } catch (err) {
            res.status(400).json({"Error to UPDATE Tuors": err})
        }
    }
}

export default tuorsController