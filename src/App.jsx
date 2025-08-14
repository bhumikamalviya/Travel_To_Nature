import { Destinations } from "./pages/destinations";
import { Home } from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { MyFavourites } from "./pages/wishlist";
import { Mountains } from "./componats/mountains";
import { WishProvider } from "./context/WishContext"; // <-- yaha import karo

function App() {
  return (
    <WishProvider> {/* <-- poore Routes ko wrap karo */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/wishlist" element={<MyFavourites />} />
        <Route path="/mountains" element={<Mountains />} />
      </Routes>
    </WishProvider>
  );
}

export default App;
