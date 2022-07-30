import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";


export default function Header({backButton}) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large"/>
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
                    <img src="./tshirt.png" className="logo"></img>
                </IconButton>
            </Link>
            <IconButton>
                <img src="./search.png"></img>
            </IconButton>

            <IconButton>
                <img src="./chat.png"></img>
            </IconButton>
        </div>
    );
}
