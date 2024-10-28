import myImage from "./images/profile_pic.jpg"

export default function Profile() {
    return (
        <img 
        src= {myImage}
        alt="profile" width= "200px" height= "200px"
        />
    );
}