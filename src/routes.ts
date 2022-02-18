import express, { Router } from "express"
import RecipeController from "./controllers/RecipeController"
import ProductController from "./controllers/ProductController"
import cors from 'cors'

const router = express.Router();

router.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send({message: "Welcome to SMG Bistro API"})
})

// CRUD for Recipes
router.post('/recipes', RecipeController.create)

router.get('/recipes', RecipeController.findAll)

router.get('/recipes/:id', RecipeController.findOne)

router.get('/recipes/title/:title', RecipeController.findByTitle)

router.put('/recipes/:id', RecipeController.update)

router.delete('/recipes/:id', RecipeController.destroy)

// CRUD for Products

router.post('/products', ProductController.create)

router.get('/products', ProductController.findAll)

router.get('/products/:id', ProductController.findOne)

router.get('/products/name/:name', ProductController.findByName)

router.get('/products/category/:category', ProductController.filterByCategory)

router.put('/products/:id', ProductController.update)

router.delete('/products/:id', ProductController.destroy)

export default router 