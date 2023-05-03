import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="text-center"
    >
      <h1 className="text-primary text-5xl font-extrabold mb-6">اوپس....</h1>
      <p className="text-gray-500 mb-5">متاسفانه مسیر شما وجود ندارد</p>
      <Link to="/" className="text-primary">
        برگشت به خانه
      </Link>
    </motion.div>
  );
};

export default NotFound;
