import { Card, Chip, IconButton } from "@mui/material";
import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteBorder } from "@mui/icons-material";
const RestaurantCard = () =>{
    return (
       <Card className="w-[18rem]">
             <div className={`${true? 'cursor-pointer':"cursor-not-allowed"}relative`}>
                   <img className="w-full h-[10rem] rounded-t-md object-cover" src="https://cdn.worldota.net/t/828x560/content/f0/45/f045f7762f3ed154497fcb1f74e56406fde8d621.jpeg"
                    alt="" />
                    <Chip 
                      size="small"
                      className="absolute top-2 left-2"
                      color={true?"succes":"error"}
                      label={true?"open":'closed'}
                     />
             </div>
              <div className="p-4 textPart lg:flex w-full justify-between">
                <div className="space-y-1">
                    <p className="font-semibold text-lg">BlackWood Ikeja</p>
                       <p className="text-grey-500 text-sm">
                        Craving it all? Dive into our global fla...
                       </p>
                </div>
                   <div>
                     <IconButton>
                         {true?<FavoriteIcon />:<FavoriteBorder/>}
                     </IconButton>
                   </div>
              </div>
       </Card>
    )
}

export default RestaurantCard