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

const sectionVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    backgroundColor: '#03d3fc',
    transition: { duration: 0.75 },
  },
  hidden: { opacity: 0, scale: 0 },
};

const sectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  borderBottom: '1px solid white',
  padding: '1rem',
  height: '100vh',
  scrollSnapAlign: 'start',
  textAlign: 'center',
  position: 'relative',
  // backgroundColor: 'gray',
};

const Section = ({ id, children }) => {
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
    <motion.section
      className="section"
      ref={ref}
      variants={sectionVariant}
      initial="hidden"
      animate={control}
      style={sectionStyle}
      id={id}
    >
      {children}
    </motion.section>
  );
};

export default function AnimatedBox() {
  return (
    <>
      <Section id="section1">
        <Box num={1} />
        <Box num={2} />
        <Box num={3} />
        <a href="#section2">Click Me to Smooth Scroll to Section 2 Below</a>
      </Section>
      <Section id="section2">
        <Box num={1} />
        <Box num={2} />
        <Box num={3} />
        <a href="#section1">Click Me to Smooth Scroll to Section 1 Above</a>
      </Section>
    </>
  );
}
