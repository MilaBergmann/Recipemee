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
        <div>
            <div className="cardsContainer">
                {recipes.map((recipe) => (
                    <TinderCard
                        className="swipe"
                        key={recipe.id}
                        preventSwipe={["up", "down"]}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${recipe.img_url})`,
                            }}
                            className="card"
                        >
                            <h3>{recipe.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}
