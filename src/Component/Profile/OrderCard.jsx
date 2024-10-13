import { Button, Card } from "@mui/material";
import React from "react";

const OrderCard = ()=>{
    return(
        <Card className="flex justify-between items-center p-5">
            <div className="flex items-center space-x-5">
                <img className="h-16 w-16" src="https://i.ytimg.com/vi/MZBfVmFtvdk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBjXzvk_s0gvHOkm26gpR8QY-BYYQ" alt="" />
                <div>
                    <p>Noodles</p>
                    <p>₦3500</p>
                </div>
            </div>
            <div>
                <Button  className="cursor-not-allowed">Completed</Button>
            </div>

        </Card>
    )
}
export default OrderCard