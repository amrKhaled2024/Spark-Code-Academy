import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Brain } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Cpu,
      title: 'Embedded Systems for Teens',
      age: '10 - 25 سنة',
      level: 'مبتدئ إلى متوسط',
      duration: '8 أسابيع',
      features: [
        'Arduino',
        'STM32',
        'Sensors',
        'Motors',
        'تنفيذ مشاريع حقيقية'
      ],
      project: 'نعم',
      color: 'from-blue-500 to-cyan-400',
      available : false
    },
    {
      icon: Zap,
      title: 'Physics Lab Experiments',
      age: '12 - 20 سنة',
      level: 'جميع المستويات',
      duration:'22/1/2026 - 4/2/2026',
      features: [
        'induction',
        'transformers',
        'Electrical circuits',
        'AC / DC',
        'Lab-based explanation'
      ],
      project: 'ورش عمل وتجارب',
      color: 'from-purple-500 to-pink-400',
      available : true
    },
    {
      icon: Brain,
      title: 'Logic & Problem Solving',
      age: '15 - 25 سنة',
      level: 'متوسط',
      duration: '8 أسابيع',
      features: [
        'Logical thinking',
        'Problem solving',
        '++C'
      ],
      project: 'نعم',
      color: 'from-green-500 to-emerald-400',
      available : false
    }
  ];

  return (
    <section id="programs" className="py-20">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title accent-border inline-block">
            البرامج والكورسات
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            برامج عملية مصممة خصيصًا لفئات عمرية مختلفة ومستويات متنوعة
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl hover:glow-effect transition-all"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-6`}>
                <program.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-white/60">الفئة العمرية:</span>
                  <span className="font-semibold">{program.age}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-white/60">المستوى:</span>
                  <span className="font-semibold">{program.level}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-white/60">المدة:</span>
                  <span className="font-semibold">{program.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">مشروع نهائي:</span>
                  <span className="font-semibold text-spark">{program.project}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-spark-light">المحتوى العملي:</h4>
                <div className="flex flex-wrap gap-2">
                  {program.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              {program.available ? 
              <motion.button
                onClick={() => document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-3 rounded-xl font-semibold hover:from-white/20 hover:to-white/10 transition-all available-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                سجل في هذا البرنامج
              </motion.button> :
              <motion.button
                className="w-full py-3 rounded-xl font-semibold hover:from-white/20 hover:to-white/10 transition-all NotAv"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                غير متاح حاليا
              </motion.button> }
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;