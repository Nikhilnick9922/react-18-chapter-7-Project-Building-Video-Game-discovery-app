import axios from "axios";


export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params :{
        key : "c5fe87c353b2472cbb277df9a395accd"
    }
})

// with this conifguration , this key is encluded in `query-string`
// of every http request we setn 

// and in documentation there is url that we need to set here.

// we can see the `parameters` on documentation of api -> games  and you can see in bottom full url


