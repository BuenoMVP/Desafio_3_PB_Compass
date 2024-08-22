import { Schema, model } from 'mongoose'
import { reviewsProps } from '../Types/bdTypes'

const reviewsSchema = new Schema<reviewsProps>({
    description: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    nota_service: {
        type: Number,
        required: true
    },
    nota_location: {
        type: Number,
        required: true
    },
    nota_amenities: {
        type: Number,
        required: true
    },
    nota_prices: {
        type: Number,
        required: true
    },
    nota_confort: {
        type: Number,
        required: true
    },
    nota_food: {
        type: Number,
        required: true
    },
    tuorID: {
        type: String,
        required: true
    }
})

const schemaReviews = model('Reviews', reviewsSchema)

export default schemaReviews