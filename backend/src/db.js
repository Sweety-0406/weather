import {Sequelize} from "sequelize"
import dotenv from 'dotenv';
dotenv.config();

const sql = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

const connectDB = async ()=>{
    console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD)
    try {
        await sql.authenticate()
        console.log("db connect")
    } catch (error) {
        console.log(error)
        console.log("db not connect")
    }
}

connectDB();

export default sql