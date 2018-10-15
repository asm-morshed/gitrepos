import axios from 'axios';
const USER_NAME = "USER_NAME";
const GET_DATA = "GET_DATA";

export const getGitList = (userName) => dispatch => {
    // debugger;
    console.log("this is from action", userName.name);
    fetch(`https://api.github.com/users/${userName.name}/repos`)
        .then(res => res.json())
        .then(data => {
            console.log("actions:----", typeof (data));

            dispatch({
                type: GET_DATA,
                payload: data
            })
        })

}