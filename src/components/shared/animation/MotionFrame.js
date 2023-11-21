import { motion, AnimatePresence } from "framer-motion";

function MotionFrame() {
  return (
    <div>
      <h1 className="text-3xl ">MotionFrame</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
      >
        I have some content in here
      </motion.div>

      <AnimatePresence>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
          exit={{ x: "-100vh", opacity: 0 }}
        >
          Watch me go woosh!
        </motion.h1>
      </AnimatePresence>
      {/* <Selection>
        <option>test1</option>
        <option>test2</option>
        <option>test3</option>
        <option>test4</option>
        
      </Selection> */}
    </div>
  );
}
export default MotionFrame;
