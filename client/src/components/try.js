import React, { useEffect, useState } from "react";


function Try() {
    const URL = "https://randomuser.me/api/";

    const [users, setUsers] = useState([
        { firstName: "jon", age: 20, gender: "male", img: "none" }
    ]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                const result = data.results[0];
                const newUser = {
                    firstName: result.name.first,
                    age: result.dob.age,
                    gender: result.gender,
                    img: result.picture.large
                };
                setUsers((prevData) => [...prevData, newUser]);
            });
    }, []);

    function renderUser() {
        return users.map((user) => {
            return (
                <div key={user.age}>
                    <h1>{user.firstName}</h1>
                    <h1>{user.age}</h1>
                    <h1>{user.gender}</h1>
                    <img src={user.img} alt="" />
                </div>
            );
        });
    }

    function addUser() {
        setShow(true);
    }

    console.log(show);

    return (
        <div className="App">

            <button onClick={addUser}>Click Here</button>
            {show ? renderUser() : <React.Fragment />}
        </div>
    );
}

export default Try;
