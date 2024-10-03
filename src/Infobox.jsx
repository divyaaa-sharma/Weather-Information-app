import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Infobox({info}) {
    const INIT_URL = "https://media.istockphoto.com/id/2149251336/photo/aerial-view-of-islands-and-clouds-at-sunrise.jpg?s=2048x2048&w=is&k=20&c=fPSwwWlL9jOcdNNI710KLiM1Dt2Panhi3QU4rQSZJ90=";
    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";

   
    

    return(
        <div className="Infobox">
            <h1>Weather Info</h1>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >90 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          &nbsp; &nbsp; 
          {info.humidity >70 ? <ThunderstormIcon/> : info.temp > 20 ? <WbSunnyIcon/> : <SevereColdIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temperature = {info.tempmin}&deg;C</p>
          <p>Max Temperature = {info.tempmax}&deg;C</p>
          <p>Feels Like = {info.tempfeel}&deg;C</p>
          <p>Weather = {info.weather}</p>
        </Typography>
      </CardContent>
   
    </Card>
        </div>
    )
}