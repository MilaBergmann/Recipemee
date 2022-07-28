
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function Uploader() {
    const { profile } = useParams();
    function handleUpload(e) {
        e.preventDefault();
        fetch("/upload/" + profile, {
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

    return (
        <div className="uploader">
            <p>Upload your profile image</p>
            <form onSubmit={(e) => this.handleUpload(e)}>
                <input
                    className="file"
                    name="image"
                    type="file"
                    accept="image/*"
                ></input>
                <button style={{ width: 80 + "px" }} name="submit">
                    Upload
                </button>
            </form>
        </div>
    );
}
