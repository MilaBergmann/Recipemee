import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
export default function Cards() {
    const [items, setItems] = useState([]);

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

    return (
        <div>
            <div className="cardsContainer">
                {items.map((item) => (
                    <TinderCard
                        className="swipe"
                        key={item.id}
                        preventSwipe={["up", "down"]}
                    >
                        <div
                            style={{ backgroundImage: `url(${item.item_img})` }}
                            className="card"
                        >
                            <h3>{item.title}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}
