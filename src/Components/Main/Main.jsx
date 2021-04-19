import React, { useState } from "react";
import "./Main.css";
import Usercard from "../UserCard/Usercard";
import SearchBox from "../Search/SearchBox";
import Header from "../Header/Header";

const Main = () => {
    const [username, setusername] = useState("");

    const [user, setuser] = useState();

    const getUsers = async () => {
        // const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const response = await fetch(`https://api.github.com/users/${username}`);
        setuser(await response.json());

    };

    return (
        <>
            <div className="text-center">
                <Header />

                <SearchBox data={getUsers} username={setusername} />

                <Usercard user={user} />
            </div>
        </>
    );
};

export default Main;
