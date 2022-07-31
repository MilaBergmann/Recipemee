import ProfilePic from "./profilePic";

export default function Profile({ first, last, imageUrl, bio, setBioInApp }) {
    return (
        <>
            <section className="profile">
                <ProfilePic
                    first={first}
                    last={last}
                    imageUrl={imageUrl}
                    bio={bio}
                    setBioInApp={setBioInApp}
                />
            </section>
        </>
    );
}
