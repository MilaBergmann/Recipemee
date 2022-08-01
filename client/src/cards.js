import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";

export default function Cards() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const respBody = await fetch("/recipes/all");
                const data = await respBody.json();
                console.log("data at items", data);
                setRecipes(data);
            } catch (err) {
                console.log("err at catching", err);
            }
        })();
    }, []);

    return (
        <div className="gallery cards">
            <p className="allRecipes">Swipe To See All Recipes</p>
            {recipes.map((recipe) => (
                <TinderCard key={recipe.id} className="swipe">
                    <div className="gallery-items piece">
                        <section className="gallery-item">
                            <img src={recipe.img_url}></img>
                            <span>{recipe.name}</span>
                        </section>
                        <section key={recipe.id} className="detailContainer">
                            <section className="details">
                                <span> Ingredients:</span>
                                {recipe.ingredients}
                            </section>
                            <section className="details ">
                                <span> Steps:</span>
                                {recipe.steps}
                            </section>
                        </section>
                    </div>
                </TinderCard>
            ))}
        </div>
    );
}
