import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" />
                </IconButton>
            ) : (
                <Link to="/profile">
                    <IconButton>
                        <img src="./user.png"></img>
                    </IconButton>
                </Link>
            )}

            <Link to="/">
                <IconButton>
                    <img src="./cook.png" className="logo"></img>
                </IconButton>
            </Link>
            <Link to="/write">
                <IconButton>
                    <img src="./pen.png"></img>
                </IconButton>
            </Link>
            <IconButton>
                <img src="./search.png"></img>
            </IconButton>
        </div>
    );
}
