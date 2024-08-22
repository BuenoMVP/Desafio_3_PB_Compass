import { Schema, model } from 'mongoose'
import { categoriesProps } from '../Types/bdTypes'

const categoriesSchema = new Schema<categoriesProps>({
    categorie: {
        type: String,
        required: true
    }
})

const schemaCategories = model('Categories', categoriesSchema)

export default schemaCategories