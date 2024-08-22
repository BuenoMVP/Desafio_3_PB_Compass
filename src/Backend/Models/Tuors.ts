import { Schema, model } from 'mongoose'
import { tuorsProps } from '../Types/bdTypes'

const tuorsSchema = new Schema<tuorsProps>({
    title: {
        type: String,
        required: true
    },
    categories: [
        {
            categorie: String
        }
    ],
    location: {
        type: String,
        required: true
    },
    price_person: {
        type: Number,
        required: true
    },
    time: {
        type: String,
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
    reviews: [{
        type: String,
        required: false
    }]
})

const schemaTuors = model('Tuors', tuorsSchema)

export default schemaTuors