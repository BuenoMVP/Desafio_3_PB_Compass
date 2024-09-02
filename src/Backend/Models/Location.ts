import { Schema, model } from 'mongoose'
import { locationProps } from '../Types/bdTypes'

const locationSchema = new Schema<locationProps>({
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

const schemaLocation = model('Location', locationSchema)

export default schemaLocation