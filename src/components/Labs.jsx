import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Cpu, Zap, Settings } from 'lucide-react';

const Labs = () => {
  const labFeatures = [
    { icon: FlaskConical, text: 'تجارب مباشرة' },
    { icon: Cpu, text: 'معامل حقيقية' },
    { icon: Zap, text: 'أدوات إلكترونية حديثة' },
    { icon: Settings, text: 'عدد طلاب محدود' }
  ];

  const labImages = [
    { id: 1, desc: 'طلاب في معمل الإلكترونيات' , img : "8.webp"},
    { id: 2, desc: 'تجارب فيزيائية عملية', img : "12.webp" },
    { id: 3, desc: 'مشاريع برمجة متقدمة' , img : "13.jpeg"},
    { id: 4, desc: 'ورش عمل جماعية' , img : "10.webp"}
  ];

  return (
    <section id="labs" className="py-20">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title accent-border inline-block">
            المعامل والتجارب
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            معامل متخصصة مزودة بأحدث الأدوات للتجارب العملية
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Experiments Lab Physics</h3>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              تجارب عملية في الكهرباء والدوائر الإلكترونية، تعليم مفاهيم AC/DC من خلال التجربة المباشرة، شرح معملي مع عدد طلاب محدود لضمان الاهتمام الفردي.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {labFeatures.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 glass-card rounded-xl"
                >
                  <div className="w-10 h-10 spark-gradient rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-navy" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {labImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`aspect-square glass-card p-4 rounded-2xl ${
                  index % 2 === 0 ? 'mt-8' : ''
                }`}
              >
                <div
                  className="w-full h-full bg-gradient-to-br from-spark/20 to-spark/5 rounded-xl flex items-center justify-center img"
                  style={{ backgroundImage: `url(${image.img})` }}
                >
                </div>
                <p className="text-center mt-3 text-sm text-white/70">{image.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Labs;