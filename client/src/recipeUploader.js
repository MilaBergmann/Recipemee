import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
export default function RecipeUploader({ toggleModal }) {
    const [inputValue, setInputValue] = useState("");
    const [ingredientsValue, setIngredientsValue] = useState("");
    const [stepsValue, setStepsValue] = useState("");
    const handleUpload = (e) => {
        e.preventDefault();
        fetch("/upload/recipes", {
            method: "POST",
            body: new FormData(e.target),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log("data at upload", data);
            })
            .catch((err) => {
                console.log("err at fetching /upload", err);
            });
    };

    const handleChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);

        console.log("state", inputValue);
    };
    const handleIngredientsChange = (e) => {
        console.log(e.target.value);
        setIngredientsValue(e.target.value);

        console.log("this.state", ingredientsValue);
    };
    const handleStepsChange = (e) => {
        console.log(e.target.value);
        setStepsValue(e.target.value);

        console.log("this.state", stepsValue);
    };

    return (
        <div className="formContainer">
            <IconButton onClick={() => toggleModal()}>
                <img src="close.png" className="close"></img>
            </IconButton>
            <form onSubmit={(e) => handleUpload(e)}>
                <section className="innerWrapper">
                    <section className="imgUploader">
                        <label>Upload an image</label>
                        <input
                            className="file"
                            name="image"
                            type="file"
                            accept="image/*"
                        ></input>
                    </section>
                    <section className="recipeName">
                        <label>
                            Name of your recipe
                            <input
                                name="recipeName"
                                onChange={(e) => handleChange(e)}
                            ></input>
                        </label>
                    </section>
                    <section className="inner">
                        <label>Choose your style</label>
                        <select name="title">
                            <option>Asian</option>
                            <option>Italian</option>
                            <option>French</option>
                            <option>Mexican</option>
                            <option>African</option>
                            <option>Middle Eastern</option>
                            <option>Vegan</option>
                            <option>Other</option>
                        </select>
                    </section>
                </section>
                <div className="textField">
                    <section className="ingredients">
                        <label>Ingredients</label>
                        <textarea
                            name="ingredients"
                            onChange={(e) => handleIngredientsChange(e)}
                        ></textarea>
                    </section>
                    <section className="steps">
                        <label>Steps</label>
                        <textarea
                            name="steps"
                            onChange={(e) => handleStepsChange(e)}
                        ></textarea>
                    </section>
                </div>
                <button
                    style={{ width: 80 + "px" }}
                    name="submit"
                    className="add"
                >
                    Add
                </button>
            </form>
        </div>
    );
}
