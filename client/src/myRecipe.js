import { useState, useEffect } from "react";
import Details from "./Details";
export default function MyRecipe() {
    const [myRecipes, setMyRecipes] = useState([]);
    const [detailsIsVisible, setDetailsIsVisible] = useState(false);
    useEffect(() => {
        let abort = false;
        (async () => {
            try {
                const respBody = await fetch("/recipes/my");
                const data = await respBody.json();

                if (!abort) {
                    setMyRecipes(data);
                    console.log("data", data);
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
            <section>
                <p>My Recipe</p>
            </section>
            {myRecipes.length == 0 ? (
                <p>It seems like you don't have your own recipes yet! </p>
            ) : (
                <div className="gallery">
                    {myRecipes.map((myRecipe) => (
                        <section key={myRecipe.id} className="gallery-item">
                            <img src={myRecipe.img_url}></img>
                            <span>{myRecipe.name}</span>
                        </section>
                    ))}
                </div>
            )}
        </div>
    );
}
