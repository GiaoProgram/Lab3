import React from "react";
import { StateContext } from "../contexts";

export default function Logout({user, dispatch}){
    const { state, dispatch } = useContext(StateContext);
    const { user } = state;
    return(
        <form onSubmit={(e)=>{e.preventDefault(); dispatch({type:'LOGOUT'})} }>
            User is: <b>{user}</b>

            <input type="submit" value="Logout"/>
        </form>
    );
}