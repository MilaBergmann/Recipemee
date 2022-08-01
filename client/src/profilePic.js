import Uploader from "./uploader";
import { useState } from "react";

import Bio from "./bioEditor";
export default function ProfilePic({
    first,
    last,
    imageUrl,
    bio,
    setBioInApp,
}) {
    const [uploaderIsVisible, setUploaderIsVisible] = useState(false);

    const toggleUploader = () => {
        setUploaderIsVisible(!uploaderIsVisible);
    };
    imageUrl = imageUrl || "/default.jpg";

    return (
        <>
            <div className="profile-image">
                <img
                    className="profile-pic"
                    src={imageUrl}
                    alt={first + last}
                    onClick={() => toggleUploader()}
                />
            </div>
            {uploaderIsVisible && <Uploader />}
            <div className="profile-user-settings">
                <section className="userName">
                    <h1 className="profile-user-name">
                        {first} {last}
                    </h1>
                </section>
                <section className="bioEditor">
                    <Bio bio={bio} setBioInApp={(bio) => setBioInApp(bio)} />
                </section>

                <button className="logOut">
                    <a href="/logout" className="links">
                        Log out
                    </a>
                </button>
            </div>
        </>
    );
}
