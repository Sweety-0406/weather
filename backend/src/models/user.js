import { DataTypes } from "sequelize";
import sql from "../db.js";

const User = sql.define('User',{
    username:{
        type:DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false
    },
})


export default User