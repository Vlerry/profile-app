import {useState} from "react";
import "./Profile.scss";
import {profileData} from "./profile-data";
import {FaTrashAlt} from "react-icons/fa"
import {Form} from "../form/Form"


const Profile = () => {
    const [userProfile, setUserProfile] = useState(profileData);
    const [search, setSearch] = useState("");
    const removeProfile = (id) => {
        const newProfileList = userProfile.filter((profile) => profile.id !== id)
        setUserProfile(newProfileList);
    };

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    return (
       <main className="main">
        <section className=" --flex-center">
            <div className="container">
               <h2 className="--text-light">Profile App</h2>
               <div className="--form-control">
                <input type="text" placeholder="Enter search term..." 
                className="--width-100"
                onChange={handleInputChange}
                value={search}/>
                </div> 
               {userProfile.filter((value) => {
                if (search === ""){
                    return value;
                } else if (value.name.toLowerCase().includes(search.toLowerCase()) ) {
                    return value;
                }
               }).map((profile) => (<div className="profile --card --flex-between" key={profile.id}>
                <img src={profile.img} alt="profile"></img>
                <div className="desc">
                    <h4 className="--text-light">Name: {profile.name}</h4>
                    <p className="--text-light ">Job: {profile.job}</p>

                </div>
                <FaTrashAlt size={18} className="icon" onClick={() => removeProfile(profile.id)}/>
               </div>))}

            </div>
        </section>

        
       <section className="container --flex-center">
         <Form userProfile={userProfile} setUserProfile={setUserProfile}/>
       </section>

        </main>
    );
};


export default Profile