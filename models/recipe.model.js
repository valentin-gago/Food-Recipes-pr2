const { Schema, model } = require("mongoose");


const recipeShema = new Schema(
        {
         
            extendedIngredients: [
                {
                    name: { type: String },
                    original: { type: String }
                }],
            readyInMinutes: {
                type: number
            },
            summary: { type: String },
             
            instructions: { type: String }
        
        }
);  

const recipeModel = model("recipe", recipeSchema);
 
module.exports = recipeModel;