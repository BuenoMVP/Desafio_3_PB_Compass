import schemaCategories from "../Models/Categories";
import { Request, Response } from "express";
import { categoriesProps } from "../Types/bdTypes";

const categoriesController = {
    postCategories: async (req: Request, res: Response) => {
        try {
            const newCategorie: categoriesProps = {
                categorie: req.body.categorie
            }

            const obj = await schemaCategories.create(newCategorie)
            
            res.status(201).json({obj, msg: 'Categorie created!'})
            
        } catch (err) {
            res.status(400).json({"Error to POST Categories": err})
        }
    },
    getAllCategories: async (req: Request, res: Response) => {
        try {
            const obj = await schemaCategories.find()

            res.status(200).json({obj})
        } catch (err) {
            res.status(400).json({"Error to GET Categories": err})
        }
    },
    deleteCategories: async (req: Request, res: Response) => {
        try {
            const { id } = req.params

            const obj = await schemaCategories.findOneAndDelete({_id: id})

            if(!obj)
                res.status(404).json({err: "Categorie not found."})

            res.status(201).json({obj, msg: 'Categorie deleted!'})
            
        } catch (err) {
            res.status(400).json({"Error to DELETE Categories": err})
        }
    },
    updateCategories: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const updateCategorie: categoriesProps = {
                    categorie: req.body.categorie
            } 

            const obj = await schemaCategories.findByIdAndUpdate(id, updateCategorie)

            if(!obj)
                res.status(404).json({err: "Categorie not found."})
            
            res.status(201).json({obj, msg: 'Categorie updated!'})
            
        } catch (err) {
            res.status(400).json({"Error to UPDATE Categories": err})
        }
    }
}

export default categoriesController