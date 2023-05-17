import { AUTH } from "../constants/actionTypes";
import { signIn,signUp } from "../api/index.js";

export const signin = (userObject, navigate) => async (dispatch) => {
    try {

        const { data } = await signIn(userObject);

        dispatch({ type: AUTH, data });

        navigate("/userhome");

        
    } catch (error) {
        console.log(error);
    }
}

export const signup = (userObject, navigate) => async (dispatch) => {
    try {
        
        const { data } = await signUp(userObject);

        dispatch({ type: AUTH, data });

        navigate("/userhome");
        
    } catch (error) {
        console.log(error);
    }
}