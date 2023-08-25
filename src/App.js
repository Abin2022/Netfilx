import React from "react";
import NavBar from "./Component/Navbar/NavBar";
import { action,orginals} from "./urls";
import './App.css'
import Banner from "./Component/Banner/Banner";
import RowPost from "./Component/RowPost/RowPost";


function App() {
  return (
   <>
   <NavBar/>
   <Banner />
   <RowPost url={orginals} title=" Netfix Orginal" />
   <RowPost url={action} title=" Action " isSmall />
   </>
  );
}

export default App;
