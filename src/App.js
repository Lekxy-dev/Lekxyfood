import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Navbar } from './Component/Navbar/Navbar';
import { darkTheme } from './Theme/DrkTheme';
import Home from './Component/Home/Home';
import RestaurantDetails from './Component/Restaurant/RestaurantDetail';
import Cart from './Component/Cart/Cart';
import Profile from './Component/Profile/Profile';
import CustomRouter from './Component/Router/CustomRouter';


function App() {
  return (
       <ThemeProvider theme={darkTheme}> 
       <CssBaseline />
       {/*  <Navbar /> */}
        {/* <Home /> */}
       {/*  <RestaurantDetails /> */}
       {/*  <Cart /> */}
     {/*   <Profile /> */}
      <CustomRouter />
        </ThemeProvider>

  );
}

export default App;
