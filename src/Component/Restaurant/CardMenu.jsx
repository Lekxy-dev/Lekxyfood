import React from "react";
import { Accordion,AccordionSummary,AccordionDetails,FormGroup,FormControlLabel,Checkbox,Button,} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

/* const ingredient = [
    {
      category:"Nuts & seeds",
      ingredient:"cashews"
    },
    {
       Category:"Protein",
       ingredients:"protein"
    },
    {
      Category:"bread",
      ingredients:"Bacon strips"
    }
] */
const demo =[
  {
    category:"Nuts & seeds",
    ingredients:["cashews"]
  },
  {
    category:"protein",
    ingredients:["Ground Beef","Bacon strips"]
  }
]

const Menu = () =>{
    const handleCheckBoxChange = ()=>{
      console.log("value")
    }
    return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="lg:flex items-center justify-between">
             <div className="lg:flex items-center lg:gap-5">
                <img className="w-[7rem] h-[7rem] object-cover" src="https://marcorianochineserestaurant.com/wp-content/uploads/2022/09/INDOMIE-WITH-MIXED-SPICE-2.jpg" alt="" />
                <div className="space-y-1 lg:space-y-5 lg:max-w-2x1">
                    <p className="font-semibold text-kl">Noodles</p>
                    <p>₦5500</p>
                    <p className="text-gray-400"> Hot, Tasty, Slurpable Noodle Goodness. Indulge in the Taste of Perfection. Nourish Your Body, Savor Life. Tantalizing Noodles in Every Bite.</p>
                </div>
             </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
            <form >
              <div className="flex gap-5 flex-wrap">
                    {
                      demo.map((item) => 
                        <div>
                           <p>{item.category}</p>
                        <FormGroup >
                      {item.ingredients.map((item) => <FormControlLabel control={<Checkbox onChange={()=> handleCheckBoxChange(item)} />} label={item} />)}
                    </FormGroup>
                    </div>
                      )
                    }
              </div>
                <div>
                  <div className="pt-5">
                    <Button variant="contained" disabled={false} type="submit">{true?"Add to Cart":"Out Of Stock"}</Button>
                  </div>
                </div>
            </form>
        </AccordionDetails>
      </Accordion>
    )
}

export default Menu