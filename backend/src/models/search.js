import { DataTypes } from "sequelize";
import sql from "../db.js";

const Search = sql.define('Search',{
    userId:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    city:{
        type:DataTypes.STRING,
        allowNull: false
    },
    weatherData:{
        type:DataTypes.TEXT,
        allowNull: false
    },
})


export default Search