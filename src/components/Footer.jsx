import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'البرامج', href: '#programs' },
    { label: 'المعامل', href: '#labs' },
    { label: 'التسجيل', href: '#registration' },
    { label: 'من نحن', href: '#about' },
    { label: 'اتصل بنا', href: '#contact' }
  ];

  return (
    <footer className="pt-20 pb-8 border-t border-white/10">
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-end gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-spark" />
              <h2 className="text-2xl font-bold">Spark Code Academy</h2>
            </div>
            <p className="text-white/70 max-w-md">
              خطوات الأولى في عالم الإلكترونيات والتكنولوجيا
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.05, color: '#FFD700' }}
                className="text-white/70 hover:text-spark transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 mb-4">
            © {new Date().getFullYear()} Spark Code Academy. جميع الحقوق محفوظة.
          </p>
          <p className="text-white/40 text-sm flex items-center justify-center gap-1">
            صنع بـ <Heart className="w-4 h-4 text-red-500 fill-red-500" /> لتطوير التعليم التقني
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;