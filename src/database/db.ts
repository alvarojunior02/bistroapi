import { Sequelize } from "sequelize";

const database = new Sequelize('heroku_7dbd72ec78c8815', 'bd78c8165c2223', 'ed7987c5', {
    dialect: 'mysql',
    host: 'us-cdbr-east-05.cleardb.net',
    port: 3306
});

export default database