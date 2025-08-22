import { Link } from "react-router-dom";
import { Header } from "../componats/header";
import { Footer } from "../componats/footer";

export const Destinations = ({data}) => {
  const btnStyle =
    "flex items-center justify-center bg-blue-200 hover:bg-white rounded-2xl px-4 py-1 text-center font-medium text-blue-900";

  return (
    <>
      <Header />

      <div className="pt-6 p-4 bg-[#166a72] bg-cover bg-bottom sticky top-0">
        <div className="flex flex-wrap items-center gap-3 pt-20 ml-8 ">
          <p className="font-bold text-white text-2xl">Destinations:</p>

         
          <Link to="/beaches" className={btnStyle}>
            Beaches
          </Link>
          <Link to="/forest" className={btnStyle}>
            Forest
          </Link>
          <Link to="/waterfalls" className={btnStyle}>
            Waterfalls
          </Link>
          <Link to="/deserts" className={btnStyle}>
            Deserts
          </Link>
           <Link to="/mountains" className={btnStyle}>
            Mountains
          </Link>
          <Link to="/nationalParks" className={btnStyle}>
            National Parks
          </Link>
          <Link to="/glaciers" className={btnStyle}>
            Glaciers
          </Link>
        </div>
        
      </div>
     
    </>
  );
};
