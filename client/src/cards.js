import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { useDispatch, useSelector } from "react-redux";
import { makeLike } from "./redux/likes/slice.js";
export default function Cards() {
    const [recipes, setRecipes] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        let abort = false;
        (async () => {
            try {
                const respBody = await fetch("/recipes");
                const data = await respBody.json();
                console.log("data at items", data);
                if (!abort) {
                    setRecipes(data);
                    console.log("items", recipes);
                } else {
                    console.log("ignore don't run a a state update");
                }
            } catch (err) {
                console.log("err at catching", err);
            }
        })();
        return () => {
            console.log("cleanup running");
            abort = true;
        };
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
