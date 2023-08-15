import Name from "./name"
import PhoneNumber from "./phone-number"
import Bio from "./bio"
import Avatar from "./avatar"
import "./style.css"

function ProfileCard(props){

    return ( <div className="ProfileCard">

        {//providing the the profile card by the avatar component by passing the specific image path
        }
        <Avatar imagePath={props.imagepath}></Avatar>
        <div className="info">
       {//a lable showith the user's name by passing the name props to the Name component
       }
        <div className="row"><p className="lable">Name: </p><Name name={props.name}></Name></div>
        
        {//a lable showith the user's name by passing the name props to the phone number component
        }
            <div className="row"><p className="lable">Phone Number: </p><PhoneNumber phonenumber={props.phonenumber}></PhoneNumber></div>
        {//conditionally randaring the bio section by cheacking if the user has a bio
        }
            {props.bio ? <div className="row"> <p className="lable">Bio: </p> <Bio bio={props.bio}></Bio></div>: <div></div>}
        </div>
    </div>)
}

export default ProfileCard