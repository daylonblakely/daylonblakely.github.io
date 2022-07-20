import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 0 },
};

const boxStyle = {
  backgroundColor: 'red',
};

const Box = ({ num }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      style={boxStyle}
    >
      <h1>Box {num} </h1>
    </motion.div>
  );
};

export default function AnimatedBox() {
  return (
    <>
      <Box num={1} />
      <Box num={2} />
      <Box num={3} />
    </>
  );
}
