import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

export default function Searchbox({updateinfo}) {
    let [city , setCity] = useState("");
    let [err , setErr] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "31f38ede2c6f1b5db09ac39eb5085d14";

    let getweatherinfo = async() => {
        try{
        let response = await fetch(`${API_URL}?q= ${city}&appid=${API_KEY}&units=metric`);
         let jsonresponse = await response.json();
         
         let result = {
            city:city,
            temp: jsonresponse.main.temp,
            tempmin: jsonresponse.main.temp_min,
            tempmax: jsonresponse.main.temp_max,
            humidity: jsonresponse.main.humidity,
            tempfeel: jsonresponse.main.feels_like,
            weather : jsonresponse.weather[0].description
         };
         console.log(result);
         return result;
        }catch(err){
           throw err;
        }
    };


  

    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handlesubmit = async (event) => {
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newinfo = await getweatherinfo();
        updateinfo(newinfo);
        }catch(err) {
            setErr(true);
        }
    }
    return(
        <div className='searchbox'>
            
            <form onSubmit={handlesubmit}>
            <TextField id="city" 
            label="City Name" 
            variant="outlined" required value={city}
            onChange={handleChange}
            />
            <br/>
            <br/>
            <Button variant="contained" type='submit' endIcon={<SendIcon />}>
        Search
      </Button>
      {err && <p>No such place exists</p>}
            </form>
        </div>
    )
}