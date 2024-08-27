import schemaReviews from "../Models/Reviews";
import { Request, Response } from "express";
import { reviewsProps } from "../Types/bdTypes";

const reviewsController = {
    postReviews: async (req: Request, res: Response) => {
        try {
            const newReview: reviewsProps = {
                description: req.body.description,
                email: req.body.email,
                name: req.body.name,
                nota_service: req.body.nota_service,
                nota_location: req.body.nota_location,
                nota_amenities: req.body.nota_amenities,
                nota_prices: req.body.nota_prices,
                nota_confort: req.body.nota_confort,
                nota_food: req.body.nota_food,
                tuorID: req.body.tuorID
            }

            const objReview = await schemaReviews.create(newReview)
            
            res.status(201).json({objReview, msg: 'Review created!'})
            
        } catch (err) {
            res.status(400).json({"Error to POST reviews": err})
        }
    },
    getAllReviews: async (req: Request, res: Response) => {
        try {
            const objReview = await schemaReviews.find()

            res.status(200).send(objReview)
        } catch (err) {
            res.status(400).json({"Error to GET reviews": err})
        }
    },
    deleteReviews: async (req: Request, res: Response) => {
        try {
            const { id } = req.params

            const objReview = await schemaReviews.findOneAndDelete({_id: id})

            if(!objReview)
                res.status(404).json({err: "Review not found."})

            res.status(201).json({objReview, msg: 'Review deleted!'})
            
        } catch (err) {
            res.status(400).json({"Error to DELETE reviews": err})
        }
    },
    updateReviews: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const updateReview: reviewsProps = {
                description: req.body.description,
                email: req.body.email,
                name: req.body.name,
                nota_service: req.body.nota_service,
                nota_location: req.body.nota_location,
                nota_amenities: req.body.nota_amenities,
                nota_prices: req.body.nota_prices,
                nota_confort: req.body.nota_confort,
                nota_food: req.body.nota_food,
                tuorID: req.body.tuorID
            }

            const objReview = await schemaReviews.findByIdAndUpdate(id, updateReview)

            if(!objReview)
                res.status(404).json({err: "Review not found."})
            
            res.status(201).json({objReview, msg: 'Review updated!'})
            
        } catch (err) {
            res.status(400).json({"Error to UPDATE reviews": err})
        }
    }
}

export default reviewsController