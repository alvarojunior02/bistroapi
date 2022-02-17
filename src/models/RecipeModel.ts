import { DataTypes } from 'sequelize'
import db from '../database/db'

const RecipeModel = db.define('recipe', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }, 
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ingredients: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    preparation: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
})

export default RecipeModel
