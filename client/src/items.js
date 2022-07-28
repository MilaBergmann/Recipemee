import { useState, useEffect } from "react";
import ItemUploader from "./itemUploader";

export default function Items() {
    const [items, setItems] = useState("");
    const [Uploader, setUploader] = useState(false);

    useEffect(() => {}, []);

    const handleAddItems = () => {
        setUploader(true);
    };

    return (
        <div>
            <h1> Here are the items</h1>
            
            <img
                src="./add.png"
                className="addItems"
                onClick={() => {
                    handleAddItems();
                }}
            />
        </div>
    );
}
