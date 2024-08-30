import { Schema, model } from 'mongoose'
import { averageProps } from '../Types/bdTypes'

const averageSchema = new Schema<averageProps>({
    avg_service: {
        type: Number,
        required: true
    },
    avg_location: {
        type: Number,
        required: true
    },
    avg_amenities: {
        type: Number,
        required: true
    },
    avg_prices: {
        type: Number,
        required: true
    },
    avg_confort: {
        type: Number,
        required: true
    },
    avg_food: {
        type: Number,
        required: true
    },
    avg_average: {
        type: Number,
        required: true
    },
    qtdReviews: {
        type: Number,
        required: true
    },
    tuorID: {
        type: String,
        required: true
    }
})

const schemaAverage = model('Average', averageSchema)

export default schemaAverage