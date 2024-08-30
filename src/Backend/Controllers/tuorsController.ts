import schemaTuors from "../Models/Tuors";
import { Request, Response } from "express";
import { tuorsProps } from "../Types/bdTypes";
import averageController from "./averageController";

const tuorsController = {
    postTuors: async (req: Request, res: Response) => {
        try {
            let newTuor: tuorsProps = {
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

            const _tuorID = objTuor._id

            const _averageID = await averageController.postAverage(_tuorID.toString())

            newTuor = {
                title: req.body.title,
                overview: req.body.overview,
                categories: req.body.categories,
                location: req.body.location,
                price_person: req.body.price_person,
                time: req.body.time,
                max_person: req.body.max_person,
                min_age: req.body.min_age,
                reviews: _averageID
            }

            console.log(newTuor)

            const newObjTuor = await schemaTuors.findOneAndUpdate(_tuorID, newTuor)
            
            res.status(201).json({newObjTuor, msg: 'Tuor created!'})
            
        } catch (err) {
            res.status(400).json({"Error to POST Tuors": err})
        }
    },
    getAllTuors: async (req: Request, res: Response) => {
        const limit:number = Number(req.query.limit) | 9
        const offset:number = Number(req.query.offset) | 0
        
        try {
            const objTuor = await schemaTuors.find().skip(offset).limit(limit).populate('reviews')
            const total:number = await schemaTuors.countDocuments()
            const url:string = req.baseUrl

            const next:number = offset + limit
            const nextURL:string = next < total ? `${url}?limit=${limit}&offset=&${next}` : 'null'

            const previous:number = offset - limit < 0 ? -1 : offset - limit
            const previousURL: string = previous != -1 ? `${url}?limit=${limit}&offset=&${previous}` : 'null'

            res.status(200).send({
                nextURL,
                previousURL,
                limit,
                offset,
                total,
                objTuor
            })
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