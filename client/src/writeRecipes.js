import { useState, useEffect } from "react";
import RecipeUploader from "./recipeUploader";
export default function writeRecipes() {
    const [addRecipeIsVisible, setAddRecipeIsVisible] = useState(false);
    const [writeRecipesIsVisible, setWriteRecipesIsVisible] = useState(true);

    const toggleModal = () => {
        setAddRecipeIsVisible(!addRecipeIsVisible);
        setWriteRecipesIsVisible(!writeRecipesIsVisible);
    };

    return (
        <>
            {writeRecipesIsVisible && (
                <div className="outerWrapper">
                    <section className="write">
                        <p>Write Your Recipes </p>
                        <button
                            name="add"
                            onClick={() => toggleModal()}
                        >
                            Write Recipes
                        </button>
                    </section>
                </div>
            )}

            {addRecipeIsVisible && <RecipeUploader toggleModal={toggleModal}/>}
        </>
    );
}
