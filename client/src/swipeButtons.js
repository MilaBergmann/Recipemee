import IconButton from "@material-ui/core/IconButton";

export default function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton>
                <img src="./no.png"></img>
            </IconButton>
            <IconButton>
                <img src="./like.png" ></img>
            </IconButton>
        </div>
    );
}
