import IconButton from "@material-ui/core/IconButton";
export default function RecipeUploader({toggleModal}) {
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

    return (
        <div className="formContainer">
            <IconButton onClick={()=>toggleModal()}>
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
                        <input></input>
                    </section>
                    <section className="steps">
                        <label>Steps</label>
                        <input></input>
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
