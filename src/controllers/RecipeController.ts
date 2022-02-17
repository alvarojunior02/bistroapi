import { Request, Response } from 'express';
import RecipeModel from '../models/RecipeModel';

class RecipeController {
    async findAll(req: Request, res: Response) {
        const recipes = await RecipeModel.findAll();

        return recipes.length > 0 
            ? res.status(200).json(recipes) 
            : res.status(404).json({error: 'Nada encontrado!'})
    }

    async findOne(req: Request, res: Response) {
        const { id } = req.params

        const recipe = await RecipeModel.findOne({
            where: {
                id
            }
        })

        return recipe 
            ? res.status(200).json(recipe)
            : res.status(404).json({error: 'Nada encontrado!'})
    }

    async findByTitle(req: Request, res: Response) {
        const { title } = req.params

        const recipe = await RecipeModel.findOne({
            where: {
                title
            }
        })

        return recipe 
            ? res.status(200).json(recipe)
            : res.status(404).json({error: 'Nada encontrado!'})
    }

    async create(req: Request, res: Response) {
        const { title, ingredients, preparation } = req.body;

        const recipe = await RecipeModel.create({
            title,
            ingredients: JSON.stringify(ingredients),
            preparation: JSON.stringify(preparation)
        })

        return res.status(201).json(recipe);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params
        const { title, ingredients, preparation } = req.body;

        const result = await RecipeModel.update({
            title,
            ingredients: JSON.stringify(ingredients),
            preparation: JSON.stringify(preparation)
        }, {
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

        const result = await RecipeModel.destroy({
            where: {
                id
            }
        })

        return result 
            ? res.status(200).json({message: "Deletado com sucesso."})
            : res.status(404).json({error: 'Nada encontrado!'})
    }
}

export default new RecipeController();
