function Details({ myRecipes }) {
    console.log(myRecipes, "in detail");
    return (
        <div>
            <section>
                {myRecipes.map((myRecipe) => (
                    <section key={myRecipe.id}>
                        <h3>Ingredients: {myRecipe.ingredients} </h3>
                        <h3>Steps: {myRecipe.steps} </h3>
                    </section>
                ))}
            </section>
        </div>
    );
}

export default Details;
