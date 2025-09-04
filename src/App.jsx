import { Destinations } from "./pages/destinations";
import { Home } from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { MyFavourites } from "./pages/wishlist";
import { Mountains } from "./componats/mountains";
import { WishProvider } from "./context/WishContext";
import { Beaches } from "./componats/beaches";
import { Deserts } from "./componats/deserts";
import { Glaciers } from "./componats/glaciers";
import { Forests } from "./componats/forest";
import { Waterfalls } from "./componats/whaterfalls";
import { Parks } from "./componats/nationalParks";
import { Contact } from "./pages/contact";
import { Planner } from "./pages/planner";
import { MountainDetail } from "./Learn-more-pages/mountainDetail";
import { BeachDetail } from "./Learn-more-pages/beachesDetail";
import { ForestDetail } from "./Learn-more-pages/forestDetail";
import { PlaceDetail } from "./Learn-more-pages/PlaceDetail";

function App() {
  return (
    <WishProvider> {/* <-- poore Routes ko wrap karo */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Mountains />} />
        <Route path="/wishlist" element={<MyFavourites />} />
        <Route path="/mountains" element={<Mountains />} />
        <Route path="/beaches" element={<Beaches />} />
        <Route path="/deserts" element={<Deserts />} />
        <Route path="/glaciers" element={<Glaciers />} />
        <Route path="/forest" element={<Forests />} />
        <Route path="/waterfalls" element={<Waterfalls />} />
        <Route path="/nationalParks" element={<Parks />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/planner" element={<Planner/>}/>
         <Route path="/forest/:id" element={<ForestDetail/>} />
         <Route path="/beaches/:id" element={<BeachDetail/>}/>
         <Route path="/mountains/:id" element={<MountainDetail/>}/>
         <Route path="/places/:type/:id" element={<PlaceDetail />} />
      </Routes>
    </WishProvider>
  );
}

export default App;
