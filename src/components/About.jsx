import React from 'react';
import { motion } from 'framer-motion';
import { Target, GraduationCap, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'رؤيتنا',
      description: 'نؤمن أن التعليم الحقيقي قائم على الفهم والتجربة، وليس الحفظ والتلقين.'
    },
    {
      icon: GraduationCap,
      title: 'رسالتنا',
      description: 'تقديم تجربة تعليمية مختلفة تركز على التطبيق العملي وبناء العقلية الهندسية'
    },
    {
      icon: Users,
      title: 'أسلوب التعليم',
      description: 'معامل حقيقية، تجارب مباشرة، عدد طلاب محدود، اهتمام فردي بكل طالب'
    },
    {
      icon: Lightbulb,
      title: 'القيم',
      description: 'بناء عقلية هندسية ومنهج تفكير علمي من خلال التجارب العملية الحقيقية'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title accent-border inline-block">
            من نحن
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Spark Code Academy
            </h3>
            <p className="text-xl text-white/80 leading-relaxed">
              تم إنشاء الأكاديمية لتقديم تجربة تعليمية مختلفة تركز على القيم العميقة، التطبيق العملي، وبناء عقلية هندسية ومنهج تفكير علمي.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 rounded-2xl hover:glow-effect transition-all"
            >
              <div className="w-14 h-14 spark-gradient rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-navy" />
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-white/70">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 rounded-3xl"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-spark mb-2">100%</div>
              <p className="text-white/70">تعليم عملي</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-spark mb-2">24/7</div>
              <p className="text-white/70">دعم ومتابعة</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-spark mb-2">1:1</div>
              <p className="text-white/70">اهتمام فردي</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;