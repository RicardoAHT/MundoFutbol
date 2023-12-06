import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user.slice"
import league from "./slices/league.slice"
import country from "./slices/country.slice"
import team from "./slices/team.slice"

export default configureStore({
    reducer:{
        user,
        league,
        country,
        team

    }
})

//Esta es mi store