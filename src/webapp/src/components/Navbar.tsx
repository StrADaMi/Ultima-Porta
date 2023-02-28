import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import View from "./View";
import { Button } from "@mui/material";
import { useContext } from "react";
import { DrawerContext } from "../context/DrawerContext";


const Navbar = () => {
  const {toggleProfileDrawer} = useContext(DrawerContext);
  // const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position='static'>
        <Toolbar sx={{ backgroundColor: "black"}}>
      
          <Box sx={{ display: "flex", flexGrow: 1, color: "inherit"}}>
            <View path={"/"} name={"Home"} />
            <View path={"/about"} name={"O NAS"} />
            <View path={"/offer"} name={"OFERTA"} />
            {/* <View path={"/service"} name={"NASZE USŁUGI"} /> */}
            <View path={"/contact"} name={"KONTAKT"} />
          </Box>
          <Button onClick={toggleProfileDrawer} style={{ cursor: "pointer"}}>
            <View path={"/login"} name={"LOGIN"} 
          /></Button>

           
         
        </Toolbar>
      </AppBar>
      <div className="card">
        <div className="logo-container">
          <span className="logo-text">
            <u>
             <b>ULTIMA PORTA</b>{" "}
            </u>
          </span>
        </div>
       </div> 
    </Box>
    
  );
};

export default Navbar;
