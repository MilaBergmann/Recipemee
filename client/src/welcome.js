import Registration from "./registration";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./login";
import ResetPassword from "./resetPassword";
import Header from "./hearder";
import Footer from "./footer";

export default function Welcome() {
    return (
        <div>
            <Header />

            <BrowserRouter>
                <div>
                    <Route exact path="/">
                        <Registration />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/reset">
                        <ResetPassword />
                    </Route>
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    );
}
