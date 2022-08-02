import { useState, useEffect } from "react";
import  TinderCard from "react-tinder-card";
import { Link } from "react-router-dom";

export default function MyRecipe() {
    const [myRecipes, setMyRecipes] = useState([]);

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
            {myRecipes.length == 0 ? (
                <div className="toWriteRecipes">
                    <p>It seems like you don't have your own recipes yet! </p>
                    <Link to="/write" className="linkToWriteRecipes"> Click Here To Write Your Recipes</Link>
                </div>
            ) : (
                <div>
                    <section>
                        <p>Swipe Cards to See More of Your Recipes</p>
                    </section>
                    <div className="gallery">
                        {myRecipes.map((myRecipe) => (
                            <TinderCard key={myRecipe.id} className="swipe">
                                <div className="gallery-items">
                                    <section className="gallery-item">
                                        <img src={myRecipe.img_url}></img>
                                        <span>{myRecipe.name}</span>
                                    </section>
                                    <section
                                        key={myRecipe.id}
                                        className="detailContainer"
                                    >
                                        <section className="details">
                                            <span> Ingredients:</span>
                                            {myRecipe.ingredients}
                                        </section>
                                        <section className="details ">
                                            <span> Steps:</span>
                                            {myRecipe.steps}
                                        </section>
                                    </section>
                                </div>
                            </TinderCard>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
