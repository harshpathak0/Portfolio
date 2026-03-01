import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.div
            className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
            animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
            <div className="w-full h-full bg-white rounded-full opacity-50" />
        </motion.div>
    );
};

export default CustomCursor;
