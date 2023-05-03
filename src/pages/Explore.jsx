import { motion } from "framer-motion";
import explore from "../assets/explore.svg";

const Explore = () => {
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="text-center flex-col flex justify-center items-center"
      >
        <img src={explore} alt="اکتشاف" className="w-100 h-100 mb-5" />
        <button className="flex w-full justify-center rounded-md bg-primary p-2 font-semibold leading-6 text-white shadow-sm">
          ورود به مسابقه پیش بینی
        </button>
      </motion.div>
    </>
  );
};

export default Explore;
