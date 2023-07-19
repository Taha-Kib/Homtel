import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact";

function ExpandCard({icon, classProp, text}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      transition={{ layout: { duration: 1, type:"spring" } }}
      layout
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.h2 layout="position">
      <FontAwesomeIcon
          className={classProp}
          icon={icon}
      />
      </motion.h2>
      {isOpen && (
        <motion.div>
          <p>{text}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default ExpandCard;
