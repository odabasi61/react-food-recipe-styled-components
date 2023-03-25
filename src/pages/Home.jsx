import Veggie from '../components/Veggie';
import Popular from '../components/Popular';
import { motion } from "framer-motion";

const Home = () => {
  // motion sayfa geçişlerinde güzel efekt sağlıyor. burada import ettik ve kullanacağımız dive motion.div şeklinde uyguladık. benzer şekilde cuisine componentinde de uyguladık.
  return <motion.div
  animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{duration: .5}}>
    <Veggie />
    <Popular />
  </motion.div>;
};

export default Home;
