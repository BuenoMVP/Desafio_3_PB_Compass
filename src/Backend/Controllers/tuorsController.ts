import schemaTuors from "../Models/Tuors";
import { Request, Response } from "express";
import { averageProps, categoriesProps, reviewsProps, tuorsProps } from "../Types/bdTypes";
import averageController from "./averageController";
import schemaAverage from "../Models/Average";
import schemaReviews from "../Models/Reviews";
import schemaCategories from "../Models/Categories";

const tuorsController = {
    postTuors: async (req: Request, res: Response) => {
        try {
            const avgID: string = '66d23fe125acb556d11d2045'
            const initialAverage: averageProps | null = await schemaAverage.findById(avgID)

            let newTuor: tuorsProps = {
                title: req.body.title,
                overview: req.body.overview,
                categories: req.body.categories,
                location: req.body.location,
                city: req.body.city,
                price_person: req.body.price_person,
                time: req.body.time,
                max_person: req.body.max_person,
                min_age: req.body.min_age,
                reviews: initialAverage!
            }

            const objTuor = await schemaTuors.create(newTuor)

            const _tuorID = objTuor._id

            const _averageID: averageProps | undefined = await averageController.postAverage(_tuorID.toString())

            newTuor = {
                title: req.body.title,
                overview: req.body.overview,
                categories: req.body.categories,
                location: req.body.location,
                city: req.body.city,
                price_person: req.body.price_person,
                time: req.body.time,
                max_person: req.body.max_person,
                min_age: req.body.min_age,
                reviews: _averageID!
            }

            const newObjTuor = await schemaTuors.findOneAndUpdate({_id: _tuorID}, newTuor)
            
            res.status(201).json({newObjTuor, msg: 'Tuor created!'})
            
        } catch (err) {
            res.status(400).json({"Error to POST Tuors": err})
        }
    },
    getAllTuors: async (req: Request, res: Response) => {
        const limit:number = 9
        const offset:number = Number(req.query.offset) | 0
        
        try {
            const objTuor: tuorsProps[] = await schemaTuors.find().skip(offset).limit(limit).populate('reviews')

            const objReviews: averageProps[] = await schemaAverage.find().skip(offset+1).limit(limit)

            const objCategories: categoriesProps[] = await schemaCategories.find()

            if (!objTuor || objTuor.length == 0) {
                res.status(404).send({Error: 'Tuors not found!'})
            } else {
                
                const total:number = await schemaTuors.countDocuments()
                const url:string = req.baseUrl
    
                const next:number = offset + limit
                const nextURL:string = next < total ? `${url}?limit=${limit}&offset=&${next}` : 'null'
    
                const previous:number = offset - limit < 0 ? -1 : offset - limit
                const previousURL: string = previous != -1 ? `${url}?limit=${limit}&offset=&${previous}` : 'null'
    
                res.status(200).send({
                    nextURL,
                    previousURL,
                    offset,
                    total,
                    objTuor,
                    objReviews,
                    objCategories
                })
            }
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
            const tuorReview: averageProps | null = await schemaAverage.findOne({tuorID: {id}})

            const updateTuor: tuorsProps = {
                title: req.body.title,
                overview: req.body.overview,
                categories: req.body.categories,
                location: req.body.location,
                city: req.body.city,
                price_person: req.body.price_person,
                time: req.body.time,
                max_person: req.body.max_person,
                min_age: req.body.min_age,
                reviews: tuorReview!
            } 

            const objTuor = await schemaTuors.findByIdAndUpdate(id, updateTuor)

            if(!objTuor)
                res.status(404).json({err: "Tuor not found."})
            
            res.status(201).json({objTuor, msg: 'Tuor updated!'})
            
        } catch (err) {
            res.status(400).json({"Error to UPDATE Tuors": err})
        }
    },
    getTuorsById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const objTuor: tuorsProps | null = await schemaTuors.findOne({_id: id})
            const objAverage: averageProps | null = await schemaAverage.findOne({tuorID: id})
            const objReviews: reviewsProps[] | null = await schemaReviews.find({tuorID: id})

            res.status(200).send({
                objTuor,
                objAverage,
                objReviews
            })
        } catch (err) {
            res.status(400).json({"Error to GET Tuor by ID": err})
        }
    },
    getFilterTuors: async (req: Request, res: Response) => {
        const limit:number = 9
        const offset:number = Number(req.query.offset) | 0
        const title: string | undefined = req.query.title?.toString()
        const price: string | undefined = req.query.price?.toString()
        const categorie: string | undefined = req.query.categorie?.toString() 
        const destination: string | undefined = req.query.destination?.toString()
        
        try {
            const query = {}
            
            if (title != undefined && title != 'null' && title != '') {
                query.title = { $regex: `${title || ""}`, $options: "i" }
            }

            if (price != undefined && price != 'null') {
                query.price_person = { $gte: 0, $lte: Number(price) }
            }

            if (categorie != undefined && categorie != 'null') {
                query.categories = categorie
            }

            if (destination != undefined && destination != 'null') {
                query.location = destination.toString()
            }

            const objTuor: tuorsProps[] = await schemaTuors.find(query).skip(offset).limit(limit).populate('reviews')
            
            const totalTuorsFilter: tuorsProps[] = await schemaTuors.find(query)

            const objCategories: categoriesProps[] = await schemaCategories.find()

            const objReviews: averageProps[] = await schemaAverage.find().skip(offset+1).limit(limit)
            
            let total:number = totalTuorsFilter.length
            const url:string = req.baseUrl

            const next:number = offset + limit
            const nextURL:string = next < total ? `${url}?limit=${limit}&offset=&${next}` : 'null'

            const previous:number = offset - limit < 0 ? -1 : offset - limit
            const previousURL: string = previous != -1 ? `${url}?limit=${limit}&offset=&${previous}` : 'null'

            if (total > 0 && objTuor) {
                res.status(200).send({
                    nextURL,
                    previousURL,
                    offset,
                    total,
                    objTuor,
                    objReviews,
                    objCategories
                })
            } else {
                total = 1
                res.status(200).send({
                    nextURL,
                    previousURL,
                    offset,
                    total,
                    objTuor,
                    objReviews,
                    objCategories
                })
            }

        } catch (err) {
            res.status(400).json({"Error to GET Filter": err})
        }
    }
}

export default tuorsController