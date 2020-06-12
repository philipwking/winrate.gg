import React from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import { useStoreContext } from "../utils/GlobalState";
import { SET_USERNAME, SET_ACCOUNT_ID, SET_GAMES_LIST } from "../utils/actions";
import history from "../utils/history"
import NavBar from "../components/NavBar"

const Search = () => {
    const [state, dispatch] = useStoreContext();

    const setUsername = (value) => {
        dispatch({
            type: SET_USERNAME,
            post: value
        });
    };

    const setAccountId = (value) => {
        dispatch({
            type: SET_ACCOUNT_ID,
            post: value
        })
    }

    const setGamesList = (value) => {
        dispatch({
            type: SET_GAMES_LIST,
            post: value
        });
    };


    function handleInputChange(event) {
        const value = event.target;
        setUsername(value)
    };



    function handleFormSubmit(event) {
        event.preventDefault();
        var user = state.username.value
        API.getSummonerData(user).then((data) => {
            console.log("CHECKING OUR DATABASE...")
            if (data.data == null) { // if no data on our servers ask riot
                console.log("GETTING DATA FROM RIOT...")
                API.riotSummoner(user).then((data) => {
                    console.log("DATA RECIEVED!")
                    API.createSummoner({
                        "accountId": data.data.accountId,
                        "id": data.data.id,
                        "_id": data.data.name,
                        "profileIconId": data.data.profileIconId,
                        "puuid": data.data.puuid,
                        "revisionDate": data.data.revisionDate,
                        "summonerLevel": data.data.summonerLevel
                    })
                    setAccountId(
                        data.data.accountId,
                    )
                    API.riotMatchList(data.data.accountId).then((data) => {
                        setGamesList(data.data.matches)
                        API.createMatchList({
                            "_id": user,
                            "matches": [...data.data.matches]
                        }).then(() => {
                            console.log("REDIRECTING...")
                            history.push("/Games");
                        })
                    })
                })
            } else { // for returning users with already saved data
                console.log("ALREADY HAVE THE DATA!")
                setAccountId(data.data.accountId)
                API.getMatchList(user).then((data) => {
                    setGamesList(data.data.matches)
                    console.log("REDIRECTING...")
                    history.push("/Games");
                })

            }
        })
    };

    return (
        <div>
            <NavBar>
            </NavBar>
            <form>
                <div>
                    <Input
                        onChange={handleInputChange}
                        name="username"
                        placeholder="Username"
                    />
                </div>
                <div>
                    <FormBtn
                        onClick={handleFormSubmit}
                    >
                        Submit
                    </FormBtn>
                </div>
            </form>
        </div>

    )
}


export default Search;
