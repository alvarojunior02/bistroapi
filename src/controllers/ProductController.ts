import { Request, Response } from 'express';
import ProductModel from '../models/ProductModel';

class ProductController {
    async findAll(req: Request, res: Response) {
        const recipes = await ProductModel.findAll();

        res.header("Access-Control-Allow-Origin", "*");

        return recipes.length > 0 
            ? res.status(200).json(recipes) 
            : res.status(404).json({error: 'Nada encontrado!'})
    }

    async findOne(req: Request, res: Response) {
        const { id } = req.params

        const recipe = await ProductModel.findOne({
            where: {
                id
            }
        })

        return recipe 
            ? res.status(200).json(recipe)
            : res.status(404).json({error: 'Nada encontrado!'})
    }

    async findByName(req: Request, res: Response) {
        const { name } = req.params

        const recipe = await ProductModel.findOne({
            where: {
                name
            }
        })

        return recipe 
            ? res.status(200).json(recipe)
            : res.status(404).json({error: 'Nada encontrado!'})
    }

    async filterByCategory(req: Request, res: Response) {
        const { category } = req.params

        const recipes = await ProductModel.findAll({
            where: {
                category
            }
        })

        return recipes 
            ? res.status(200).json(recipes)
            : res.status(404).json({error: 'Nada encontrado!'})
    }

    async create(req: Request, res: Response) {
        const { name, price, category, image } = req.body;

        const recipe = await ProductModel.create({
            name,
            price,
            category
        })

        return res.status(201).json(recipe);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params

        const result = await ProductModel.update(req.body, {
            where: {
                id
            }
        })

        return result[0] 
            ? res.status(200).json({retult: result[0], message: 'Alterado com sucesso.'})
            : res.status(404).json({error: 'Nada encontrado!'})
    }

    async destroy(req: Request, res: Response) {
        const { id } = req.params;

        const result = await ProductModel.destroy({
            where: {
                id
            }
        })

        return result 
            ? res.status(200).json({message: "Deletado com sucesso."})
            : res.status(404).json({error: 'Nada encontrado!'})
    }
}

export default new ProductController();
