import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
const EventCard = ()=>{
    return(
        <div >
           <Card sx={{width:345}}>
             <CardMedia  sx={{height:345}} image="https://www.restaurant365.com/wp-content/uploads/2023/04/thumbnail-events-rlc2023.jpg"/>
             <CardContent>
                <Typography variant="h5">
                    Blackwood
                </Typography>
                <Typography variant="body2">
                    Globa Restaurant Seminar
                </Typography>
                <div className="py-2 space-y-2">
                    <p><LocationOnIcon />{"Ikeja"}</p>
                    <p className="text-sm text-blue-500">October 14, 2024 12:30PM</p>
                    <p className="text-sm text-red-500">October 16, 2024 10:00AM</p>
                </div>
                </CardContent>

             {false &&   <CardActions>
                    <IconButton>
                   <DeleteIcon />
                    </IconButton>
                </CardActions>}
           </Card>
        </div>
    )
}
export default EventCard