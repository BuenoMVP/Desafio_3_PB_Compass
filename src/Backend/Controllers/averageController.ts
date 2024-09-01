/* eslint-disable prefer-const */
import schemaAverage from "../Models/Average";
import schemaReviews from "../Models/Reviews";
import { Request, Response } from "express";
import { averageProps, reviewsProps} from "../Types/bdTypes";

const averageController = {
    postAverage: async (_tuorID: string) => {
        try {
            let SUMservice: number = 0
            let SUMlocation: number = 0
            let SUMamenities: number = 0
            let SUMprices: number = 0
            let SUMconfort: number = 0
            let SUMfood: number = 0 
            let SUMaverage: number = 0
            let reviewsID: reviewsProps[] = []

            const allReviews = await schemaReviews.find({tuorID: _tuorID})

            let newAverage: averageProps

            if (!allReviews || allReviews.length === 0) {
                newAverage = {
                    avg_service: 0,
                    avg_location: 0,
                    avg_amenities: 0,
                    avg_prices: 0,
                    avg_confort: 0,
                    avg_food: 0,
                    avg_average: 0, 
                    qtdReviews: 0,
                    tuorID: _tuorID,
                    allReviews: []
                }
            } else {
                const length: number = allReviews.length

                allReviews.map((review, index) => {
                    SUMservice += review.nota_service
                    SUMlocation += review.nota_location
                    SUMamenities += review.nota_amenities
                    SUMprices += review.nota_prices
                    SUMconfort += review.nota_confort
                    SUMfood += review.nota_food 
                    SUMaverage += review.nota_average!
                    reviewsID[index] = review
                })

                newAverage = {
                    avg_service: SUMservice / length,
                    avg_location: SUMlocation / length,
                    avg_amenities: SUMamenities / length,
                    avg_prices: SUMprices / length,
                    avg_confort: SUMconfort / length,
                    avg_food: SUMfood / length,
                    avg_average: SUMaverage / length,
                    qtdReviews: length,
                    tuorID: _tuorID,
                    allReviews: [...reviewsID!]
                }
            }

            const objAverage = await schemaAverage.create(newAverage)

            return objAverage
            
        } catch (err) {
            console.error({"Error to POST Average": err})
        }
    },
    getAllAverage: async (req: Request, res: Response) => {
        try {
            const objReview = await schemaAverage.find().populate('allReviews')

            if (!objReview)
                res.status(400).json({"Average not found!": 'error'})

            res.status(200).send(objReview)
        } catch (err) {
            res.status(400).json({"Error to GET Average": err})
        }
    },
    deleteAverage: async (req: Request, res: Response) => {
        try {
            const { id } = req.params

            const objReview = await schemaAverage.findOneAndDelete({_id: id})

            if(!objReview)
                res.status(404).json({err: "Review not found."})

            res.status(201).json({objReview, msg: 'Review deleted!'})
            
        } catch (err) {
            res.status(400).json({"Error to DELETE Average": err})
        }
    },
    updateAverage: async (_tuorID:string) => {
        try {
            let SUMservice: number = 0
            let SUMlocation: number = 0
            let SUMamenities: number = 0
            let SUMprices: number = 0
            let SUMconfort: number = 0
            let SUMfood: number = 0
            let SUMaverage: number = 0
            let reviewsID: reviewsProps[] = []

            const allReviews = await schemaReviews.find({tuorID: _tuorID})
       
            const length: number = allReviews.length

            allReviews.map((review, index) => {
                SUMservice += review.nota_service
                SUMlocation += review.nota_location
                SUMamenities += review.nota_amenities
                SUMprices += review.nota_prices
                SUMconfort += review.nota_confort
                SUMfood += review.nota_food 
                SUMaverage += review.nota_average
                reviewsID[index] = review
            })

            const updateAverage: averageProps = {
                avg_service: SUMservice / length,
                avg_location: SUMlocation / length,
                avg_amenities: SUMamenities / length,
                avg_prices: SUMprices / length,
                avg_confort: SUMconfort / length,
                avg_food: SUMfood / length,
                avg_average: SUMaverage / length,
                qtdReviews: length,
                tuorID: _tuorID,
                allReviews: [...reviewsID!]
            }

            const objReview = await schemaAverage.findOneAndUpdate({tuorID: _tuorID}, updateAverage)

            if(!objReview)
                console.error("Average not found.")
            
        } catch (err) {
            console.error("Error to UPDATE Average: "+err)
        }
    }
}

export default averageController