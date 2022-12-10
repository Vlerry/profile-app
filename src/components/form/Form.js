import "./Form.scss";

const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export const Form = ({ setUserProfile, userProfile }) => {
    
    
    const onSubmit = (event) => {
    
            event.preventDefault();
            const newUser = {
                id: uid(),
                name: event.target[0].value,
                job: event.target[1].value,
                img: "",
              }

     
        

    const newUserProfile = [...userProfile, newUser];
    setUserProfile(newUserProfile);

    // clear form after set
    Array.from(event.target).forEach(element => {
        element.value = "";
    })
}
    return (
            <form action="" className="form-content" onSubmit={onSubmit}>

                <div className="form">
                    <label htmlFor="name">Enter your name: </label>
                    <input type="text" name="name" id="name" placeholder="Your name..." required />
                </div>
                <div className="form">
                    <label htmlFor="job">Enter your job: </label>
                    <input type="text" name="job" id="job" placeholder="Your job..." required />
                </div>

                <div className="form">
                    <input type="submit" value="Add" />
                </div>
            </form>
    )
}