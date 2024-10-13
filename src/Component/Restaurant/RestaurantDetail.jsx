import { Divider, FormControl, RadioGroup, Typography,FormControlLabel,Radio, Grid} from "@mui/material";
import React, { useState }  from "react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Menu from "./CardMenu";


const categories=[
    "Swallow",
    "Egusi",
    "Beans",
    "chicken",
    "rice"
] 
const foodTypes=[
    {label:"All",value:"all"},
    {label:"Vegetarian only",value:"vegetarian"},
    {label:"Non-Vegetarian",value:"rian"},
    {label:"Seasonal",value:"seasonal"}
]

const menu = [1,1,1,1,1,1]


const RestaurantDetails = () => {
    const [foodType,setFoodType]=useState("all")

    const handleFilter=(e)=>{
        console.log(e.target.value,e.target.name)
    }
    return (
        <div className="px-5 lg:px-20">
            <section>
                <h3 className="text-gray-500 py-2 mt-10">Home/nigeria/nigeria fast food/3</h3>
                <div>
                    <Grid container spacing={2}>
                          <Grid item xs={12}>
                                  <img className="w-full h-[40vh] object-cover" src="https://files.ofadaa.com/uploads/city/cover_image/79678/normal_best-restaurants-port-harcourt-nigeria.jpg" alt="" />
                          </Grid>
                          <Grid item xs={12} lg={6}>
                                  <img className="w-full h-[40vh] object-cover" src="https://fnbreport.ph/wp-content/uploads/2022/07/1120-House-1.jpg" alt="" />
                          </Grid>
                          <Grid item xs={12} lg={6}>
                                  <img className="w-full h-[40vh] object-cover" src="https://media.citybeat.com/citybeat/imager/the-25-best-restaurants-in-greater-cincinnati-right-now-according-to-yelp/u/zoom/14734515/bakerstable_hb-4234.jpg?cb=1724366981" alt="" />
                          </Grid>
                    </Grid>
                </div>
                <div className="pt-3 pb-5">
                    <h1 className="text-4xl font-semibold">Nigeria Fast Food</h1>
                    <p className="text-gray-500 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, deleniti? Fugit voluptatibus totam dignissimos architecto nemo aliquid quo, dolores magnam commodi officia accusantium deserunt eius voluptatum autem illum doloremque consequuntur?</p>
                   <div className="space-y-3 mt-3">
                     <p className="text-gray-500 flex item-center gap-3">
                          <LocationOnIcon />
                        <span>
                         Lagos, Ikeja
                        </span>
                    </p>

                    <p className="text-gray-500 flex item-center gap-3">
                          <CalendarTodayIcon />
                        <span>
                         Mon-Sun: 9:00AM - 9:00 PM (Today)
                        </span>
                    </p>
                     </div>
                    
                </div>
            </section>
                <Divider />
                <section className="pt-[2rem] lg:flex relative">
                       
                       <div className="space-y-10 lg:w-[20%] filter">
                         <div className="box space-y-5 lg:sticky top-28">
                                 <div >
                                    <Typography variant="h5" sx={{paddingBottom:"1rem"}}> Food Type</Typography>
                                    <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                        <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                               {foodTypes.map((item)=><FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />)}
                                        </RadioGroup>
                                    </FormControl>
                                 </div>
                                 <Divider />
                                 <div >
                                    <Typography variant="h5" sx={{paddingBottom:"1rem"}}> Food Category</Typography>
                                    <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                        <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                               {categories.map((item)=><FormControlLabel key={item} value={item} control={<Radio />} label={item} />)}
                                        </RadioGroup>
                                    </FormControl>
                                 </div>
                         </div>
                       </div>
                       <div className="space-y-5 lg:w-[80%] lg:pl-10 filter">{menu.map((item)=><Menu />)}</div>
                </section>
        </div>
    )
}
export default RestaurantDetails