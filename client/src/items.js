import { useState, useEffect } from "react";
import ItemUploader from "./itemUploader";
export default function Items() {
    const [items, setItems] = useState([]);
    const [uploader, setUploader] = useState(false);

    useEffect(() => {
        let abort = false;
        (async () => {
            try {
                const respBody = await fetch("/items");
                const data = await respBody.json();
                console.log("data at items", data);
                if (!abort) {
                    setItems(data);
                    console.log("items", items);
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

    const handleAddItems = () => {
        setUploader(!uploader);
    };

    return (
        <div className="galleryContainer">
            <p>Here are all your items</p>
            <section className="gallery">
                {items
                    ? items.map((item) => {
                          return (
                              <div key={item.id} className="gallery-item">
                                  <img
                                      src={item.item_img}
                                      className="gallery-img"
                                  ></img>
                              </div>
                          );
                      })
                    : "It seems like you haven't uploaded anything"}
            </section>

            {uploader && <ItemUploader />}
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
