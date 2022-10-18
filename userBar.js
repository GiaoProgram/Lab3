import React, {useState} from "react";
import { StateContext } from "../contexts";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";


export default function userBar() {
   const [user,setUser] = useState("");

    if (user) {
        return <Logout user={user} setUser={setUser} />;
    } 
    
    else 
    {
        return (<> <Register setUser={setUser} /> <Login setUser={setUser} /> </> );    
    }
}