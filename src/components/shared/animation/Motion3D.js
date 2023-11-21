import React from "react";
import { motion } from "framer-motion-3d";
import { useMotionValue, useTransform, useAnimation } from "framer-motion";

const Motion3D = () => {
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const x = useMotionValue(0);
  const scaleZ = useTransform(x, (v) => v / 100);

  const animateX = async () => {
    await controls.start({ x: 100 });
  };

  return (
    <>
      <h1>Motion 3D animation</h1>
      <motion.group>
        <motion.meshStandardMaterial
          initial="hidden"
          animate="visible"
          variants={variants}
        />
        <motion.mesh
          position-x={x}
          scale={[1, 1, scaleZ]}
          animate={controls}
          onClick={animateX}
        />
      </motion.group>
    </>
  );
};

export default Motion3D;
