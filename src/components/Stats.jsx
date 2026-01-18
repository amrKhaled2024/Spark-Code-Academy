import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, FolderKanban, Calendar } from 'lucide-react';

const AnimatedCounter = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const incrementTime = Math.floor(duration / end);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return <>{count}{suffix}</>;
};

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: 70,
      suffix: '+',
      label: 'طالب تم تدريبهم'
    },
    {
      icon: FolderKanban,
      value: 30,
      suffix: '+',
      label: 'مشروع عملي تم تنفيذه'
    },
    {
      icon: Calendar,
      value: 3,
      suffix: '+',
      label: 'سنوات خبرة في التعليم العملي'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5" />
      <div className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-spark/20 to-spark/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-10 h-10 text-spark" />
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-spark to-spark-light bg-clip-text text-transparent">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xl text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;