import { useState, useEffect } from "react";
import RecipeUploader from "./recipeUploader";
export default function writeRecipes() {
    const [addRecipeIsVisible, setAddRecipeIsVisible] = useState(false);

    const handleRecipeUploader = () => {
        setAddRecipeIsVisible(true);
    };

    return (
        <>
            <div className="outerWrapper">
                <section className="write">
                    <p>Write Your Recipes </p>
                    <button name="add" onClick={()=>handleRecipeUploader()}>Write Recipes</button>
                    {addRecipeIsVisible && (<RecipeUploader />)}
                </section>
            </div>
        </>
    );
}
