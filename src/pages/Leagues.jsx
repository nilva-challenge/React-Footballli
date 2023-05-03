import React from "react";
import NL from "../assets/n-l.png";
import PL from "../assets/p-l.png";
import SA from "../assets/serie-a.png";
import BL from "../assets/b-l.png";
import {motion} from 'framer-motion'

const Leagues = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <h1 className="text-primary text-2xl mb-5 text-center font-bold">
        اخبار لیگ های معتبر
      </h1>
      <div class="grid grid-cols-2 gap-4 place-items-center">
        <div className="bg-white shadow w-full h-full text-center p-5">
          <img src={NL} alt="لیگ هلند" className="w-32 h-32 object-cover" />
        </div>
        <div className="bg-white shadow w-full h-full text-center p-5">
          <img src={SA} alt="سری آ" className="w-32 h-32 object-cover" />
        </div>
        <div className="bg-white shadow w-full h-full text-center p-5">
          <img src={PL} alt="پریمیر لیگ" className="w-32 h-32 object-cover" />
        </div>
        <div className="bg-white shadow w-full h-full text-center p-5">
          <img src={BL} alt="بوندس لیگا" className="w-32 h-32 object-cover" />
        </div>
      </div>
    </motion.div>
  );
};

export default Leagues;
