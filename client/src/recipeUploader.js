export default function RecipeUploader() {
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
            <img src="close.png"></img>
            <form onSubmit={(e) => handleUpload(e)}>
                <section className="formContainer">
                    <section className="inner">
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
                        <select name="title" className="inner">
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
                <button style={{ width: 80 + "px" }} name="submit">
                    Add
                </button>
            </form>
        </div>
    );
}
