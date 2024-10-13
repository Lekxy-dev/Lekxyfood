import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import EventIcon from '@mui/icons-material/Event';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HomeIcon from '@mui/icons-material/Home';
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
const menu =[
    {title:"orders",icon:<ShoppingBagIcon />},
    {title:"Favorites",icon:<FavoriteIcon />},
    {title:"Address",icon:<HomeIcon />},
    {title:"Payments",icon:<AccountBalanceWalletIcon />},
    {title:"Notification",icon:<NotificationsActiveIcon />},
    {title:"Events",icon:<EventIcon />},
    {title:"Logout",icon:<LogoutIcon />}
]
const ProfileNavigation = ({open, handleClose}) =>{
    const isSmallScreen = useMediaQuery("(max-width:900px)");
    const navigate=useNavigate();
    const handleNavigate=(item)=>{
     navigate(`/my-profile/${item.title.toLowerCase()}`)
    }
    return(
        <div>
            <Drawer variant={isSmallScreen?"temporary":"permanent"} onClose={handleClose} open={open} anchor="left" sx={{zIndex: -1, position:"sticky"}}>
                 <div className="w-[50vw] lg:w-[20vw] h-[150vh] flex flex-col justify-center text-xl gap-8 pt-16">
                    {menu.map((item,i) => <>
                     <div onClick={()=>handleNavigate(item)}className="px-5 flex items-center space-x-5 cursor-pointer">
                        {item.icon}
                        <span>{item.title}</span>
                     </div>
                     {i!== menu.lenght-1 && <Divider />}
                    </>)}
                 </div>
            </Drawer>
        </div>
    )
}
export default ProfileNavigation