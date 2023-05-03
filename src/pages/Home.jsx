import TabView from "../components/TabView";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <TabView />
    </motion.div>
  );
};

export default Home;
