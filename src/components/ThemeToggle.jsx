import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full glass-card hover:bg-white/10 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="تبديل الوضع الليلي"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-spark" />
      ) : (
        <Moon className="w-5 h-5 text-navy" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;