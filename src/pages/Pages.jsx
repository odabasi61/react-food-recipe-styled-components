import { Routes, Route, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Recipe from "./Recipe";
import Searched from "./Searched";
import { AnimatePresence } from "framer-motion";

// /:type, burada slash ve iki noktadan sonra ne yazdığımız çok mühim değil. cuisine türü neyse sayfa linkinde o görünecek

const Pages = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence wait>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
};

export default Pages;
