import { Component } from "react";

export default class ItemUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleUpload(e) {
        e.preventDefault();
        fetch("/upload", {
            method: "POST",
            body: new FormData(e.target),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log("data at upload", data);
                this.props.handleSubmitInApp(data.img_url);
            })
            .catch((err) => {
                console.log("err at fetching /upload", err);
            });
    }

    render() {
        return (
            <div className="uploader">
                <p>Add your Items</p>
                <form onSubmit={(e) => this.handleUpload(e)}>
                    <input
                        className="file"
                        name="image"
                        type="file"
                        accept="image/*"
                    ></input>
                    <button style={{ width: 80 + "px" }} name="submit">
                        Add
                    </button>
                </form>
            </div>
        );
    }
}
