import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Brain, FlaskConical } from 'lucide-react';

const WhyUs = () => {
  const cards = [
    {
      icon: Target,
      title: 'رؤيتا',
      description: 'نؤمن أن التعليم الحقيقي قائم على الفهم والتجربة، وليس الحفظ والتلقين.'
    },
    {
      icon: FlaskConical,
      title: 'التطبيق العملي',
      description: 'معامل حقيقية، تجارب مباشرة، عدد طلاب محدود، اهتمام فردي بكل طالب'
    },
    {
      icon: Brain,
      title: 'بناء عقلية هندسية',
      description: 'بناء عقلية هندسية ومنهج تفكير علمي'
    },
    {
      icon: Users,
      title: 'القيم العميقة',
      description: 'تم إنشاء الأكاديمية لتقديم تجربة تعليمية مختلفة تركز على القيم العميقة'
    }
  ];

  return (
    <section className="py-20">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title accent-border inline-block">
            لماذا Spark Code Academy
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            تجربة تعليمية مختلفة تركز على الفهم والتجربة العملية
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 rounded-2xl hover:glow-effect transition-all"
            >
              <div className="w-14 h-14 spark-gradient rounded-xl flex items-center justify-center mb-6">
                <card.icon className="w-7 h-7 text-navy" />
              </div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-white/70">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;