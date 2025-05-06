'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  duration?: number;
  className?: string;
}

const StaggerChildren = ({
  children,
  staggerDelay = 0.1,
  duration = 0.5,
  className = '',
}: StaggerChildrenProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
      },
    },
  };

  // Clone children and apply animation to each
  const animatedChildren = React.Children.map(children, (child) => {
    // Check if child is a valid React element
    if (React.isValidElement(child)) {
      return (
        <motion.div variants={item}>
          {child}
        </motion.div>
      );
    }
    return child;
  });

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {animatedChildren}
    </motion.div>
  );
};

export default StaggerChildren; 