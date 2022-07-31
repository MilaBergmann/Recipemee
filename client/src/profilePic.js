import Bio from "./bioEditor";
export default function ProfilePic({
    first,
    last,
    imageUrl,
    toggleModal,
    bio,
    setBioInApp,
}) {
    // console.log("info being passed down from App: ", imageUrl);
    imageUrl = imageUrl || "/default.jpg";

    return (
        <>
            <div className="profile-image">
                <img
                    className="profile-pic"
                    src={imageUrl}
                    alt={first + last}
                    onClick={() => toggleModal()}
                />
            </div>

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
