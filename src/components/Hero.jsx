import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronLeft } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-lighter" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-spark/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-spark/5 rounded-full blur-3xl" />

      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-spark" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Spark Code Academy
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-spark-light mb-6">
              خطواتك الأولى في عالم الإلكترونيات والتكنولوجيا
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              في Spark Code Academy بنقدم تعليم عملي حقيقي في البرمجة، الفيزياء، الكهرباء، والإلكترونيات. بنحول المفاهيم الصعبة لتجارب واضحة وممتعة، الطالب فيا بيشتغل بإيده، يفهم، ويطبق بنفسه.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 spark-gradient text-navy font-bold rounded-full text-lg flex items-center gap-2 hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                سجل الآن
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 glass-card font-semibold rounded-full text-lg hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                استعرض البرامج
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl glass-card p-4">
                <div className="w-full h-full bg-gradient-to-br from-spark/20 to-spark/5 rounded-xl flex items-center justify-center img img1">
                </div>
                <p className="text-center mt-2 text-sm">طلاب أثناء تنفيذ تجارب عملية</p>
              </div>
              <div className="aspect-square rounded-2xl glass-card p-4 mt-8">
                <div className="w-full h-full bg-gradient-to-br from-spark/20 to-spark/5 rounded-xl flex items-center justify-center img img2">
                </div>
                <p className="text-center mt-2 text-sm">شهادات موثوقة</p>
              </div>
              <div className="aspect-square rounded-2xl glass-card p-4">
                <div className="w-full h-full bg-gradient-to-br from-spark/20 to-spark/5 rounded-xl flex items-center justify-center img img3">
                </div>
                <p className="text-center mt-2 text-sm">معامل حقيقية</p>
              </div>
              <div className="aspect-square rounded-2xl glass-card p-4 mt-8">
                <div className="w-full h-full bg-gradient-to-br from-spark/20 to-spark/5 rounded-xl flex items-center justify-center img img4">
                </div>
                <p className="text-center mt-2 text-sm">تجارب واقعية</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;