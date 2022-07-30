import { useState, useEffect } from "react";
export default function writeRecipes() {
   
    const handleUpload = (e) => {
        e.preventDefault();
        fetch("/upload/item" , {
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
        <div className="uploader">
            <p>Add your Items</p>
            <form onSubmit={(e) => handleUpload(e)}>
                <input
                    className="file"
                    name="image"
                    type="file"
                    accept="image/*"
                ></input>
                <label>Choose a catagory</label>
                <select name="title">
                    <option>TShirt</option>
                    <option>Skirt</option>
                    <option>Jeans</option>
                    <option>Jacket</option>
                    <option>Sweater</option>
                </select>
                <button style={{ width: 80 + "px" }} name="submit">
                    Add
                </button>
            </form>
        </div>
    );
}
