import React, { Component } from 'react';
import { motion, animate, useMotionValue } from 'framer-motion';

class FullScreenScrollerClass extends Component {
  constructor(props) {
    super(props);
    this.sectionIds = props.children.map((child) => {
      return child.props.id;
    });

    this.state = {
      currentSection: 0,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  scrollToSection(id) {}

  render() {
    return (
      <motion.div
        style={
          {
            //   y,
          }
        }
      >
        {this.props.children}
      </motion.div>
    );
  }
}

export default FullScreenScrollerClass;
