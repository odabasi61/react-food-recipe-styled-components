import { Routes, Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Searched from "./Searched";

// /:type, burada slash ve iki noktadan sonra ne yazdığımız çok mühim değil. cuisine türü neyse sayfa linkinde o görünecek

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
      </Routes>
    </div>
  );
};

export default Pages;
