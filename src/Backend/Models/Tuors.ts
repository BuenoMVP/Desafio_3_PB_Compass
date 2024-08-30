import { Schema, model } from 'mongoose'
import { tuorsProps } from '../Types/bdTypes'

const tuorsSchema = new Schema<tuorsProps>({
    title: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price_person: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    max_person: {
        type: Number,
        required: true
    },
    min_age: {
        type: Number,
        required: true
    },
    reviews: {
        type: Schema.Types.ObjectId,
        ref: 'Average',
        require: false
    }
})

const schemaTuors = model('Tuors', tuorsSchema)

export default schemaTuors