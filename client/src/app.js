import { Component } from "react";
import Profile from "./profile";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "./hearder";
import Footer from "./footer";
import Cards from "./cards";
import WriteRecipes from "./writeRecipes";
import Login from "./login";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            first: "",
            last: "",
            findPeopleIsVisibile: false,
            bio: "",
        };
    }

    componentDidMount() {
        console.log("App mounted!");
        fetch("/user")
            .then((resp) => resp.json())
            .then((data) => {
                //console.log("user", data);
                this.setState({
                    first: data.first,
                    last: data.last,
                    imageUrl: data.img_url,
                    bio: data.bio,
                });
            })
            .catch((err) => console.log("err at /user", err));
    }

    setBioInApp(newBio) {
        this.setState({
            bio: newBio,
        });
    }

    render() {
        return (
            <>
                <div className="loggedIn">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/">
                                <Header />
                                <Cards />
                            </Route>
                            <Route path="/profile">
                                <Header backButton="/" />

                                <Profile
                                    first={this.state.first}
                                    last={this.state.last}
                                    bio={this.state.bio}
                                    setBioInApp={(bio) => this.setBioInApp(bio)}
                                />
                            </Route>

                            <Route path="/login">
                                <Header />
                                <Login />
                            </Route>
                            <Route path="/write">
                                <Header />
                                <WriteRecipes />
                            </Route>
                        </Switch>
                        <Footer />
                    </BrowserRouter>
                </div>
            </>
        );
    }
}
