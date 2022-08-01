import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
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
                        <Link to="/profile" className="toProfile">
                            Or Click Here To See All Your Recipes
                        </Link>
                    </section>
                </div>
            )}

            {addRecipeIsVisible && <RecipeUploader toggleModal={toggleModal}/>}
        </>
    );
}
