import Bio from "./bioEditor";
export default function ProfilePic({ first, last, imageUrl, toggleModal, bio, setBioInApp }) {
    // console.log("info being passed down from App: ", imageUrl);
    imageUrl = imageUrl || "/default.jpg";

    return (
        <>
            <div className="profile">
                <img
                    className="profile-pic"
                    src={imageUrl}
                    alt={first + last}
                    onClick={() => toggleModal()}
                />

                <div className="profile-user-settings">
                    <h1 className="profile-user-name">
                        {first} {last}
                    </h1>

                    <button className="btn profile-edit-btn">
                        Edit Profile
                    </button>
                    <button>
                        <a href="/logout" className="links">
                            Log out
                        </a>
                    </button>
                </div>
                <Bio bio={bio} setBioInApp={(bio) => setBioInApp(bio)} />
            </div>
        </>
    );
}
