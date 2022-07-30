export default function likesReducer(likes = null, action) {
    if(action.type == "likes/madeLike") {
        likes = action.payload.likes;
    }
    return likes;
}



export function makeLike(likes){
    return {
        type: "likes/madeLike",
        payload: {likes}
    };
}