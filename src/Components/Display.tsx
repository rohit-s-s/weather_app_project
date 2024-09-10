import { Grid2 } from "@mui/material";
import Typography from '@mui/material/Typography';

type Display = {
  name?: string;
  temp?: number;
  desc?: string;
  icon?: string;
};

function Display({ name, temp, desc, icon }: Display) {
  return (
    <Grid2 container alignItems={"center"} justifyContent={"center"} style={{minHeight:"100%"}}>
      <div>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
      />
      </div>
      <div>
        <Typography variant="h5" align="left">Today</Typography>
        <Typography variant="h2" align="left">{name}</Typography>
        <Typography variant="h6" align="left">Temperature : {temp} ºC</Typography>
        <Typography variant="h6" align="left">{desc}</Typography>
      </div>
    </Grid2>
  );
}

export default Display;
