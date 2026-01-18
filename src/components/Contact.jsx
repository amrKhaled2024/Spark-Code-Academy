import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Clock, Mail } from 'lucide-react';
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'هاتف',
      value: '01026643026',
      link: 'tel:01026643026'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '01026643026',
      link: 'https://wa.me/2001026643026'
    },
    {
      icon: Clock,
      title: 'مواعيد العمل',
      value: 'من السبت إلى الخميس\nمن 1:00 مساءً إلى 6:00 مساءً'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'sparkcodeacademy.1@gmail.com',
      link: 'mailto:sparkcodeacademy.1@gmail.com'
    }
  ];
  const Social = [
    {
      platform : 'Facebook',
      url : 'https://www.facebook.com/profile.php?id=61577985013341&ref=1',
      icon : <FaFacebook />
    },
    {
      platform : 'LinkedIn',
      url : 'https://www.linkedin.com/in/spark-code-academy-9b7a7a36b/',
      icon : <FaLinkedin />
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title accent-border inline-block">
            تواصل معنا
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتكم
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 spark-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-spark transition-colors whitespace-pre-line"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white/80 whitespace-pre-line">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">تابعنا على وسائل التواصل الاجتماعي</h3>
            <div className="flex justify-center gap-4">
              {Social.map((plat, index) => (
                <motion.a
                  key={plat.platform}
                  href={plat.url}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-2 glass-card rounded-full hover:bg-white/10 transition-colors social"
                >
                  {plat.platform}
                  {plat.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;