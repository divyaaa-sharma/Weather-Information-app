import Searchbox from "./Searchbox";
import Infobox from "./Infobox";
import { useState } from "react";

export default function Weatherapp() {
    const [weatherinfo , setWeatherinfo] = useState({
        city :"Mumbai" ,
        humidity: 79,
       temp: 30.99,
       tempfeel: 37.99,
       tempmax: 30.99,
        tempmin: 30.99,
       weather: "mist",
    })
let updateinfo = (newinfo) => {
    setWeatherinfo(newinfo);
}

    return(
        <div>
            <h2>Weather App</h2>
            <Searchbox updateinfo = {updateinfo}/>
            <Infobox info = {weatherinfo}/>
        </div>
    )
}