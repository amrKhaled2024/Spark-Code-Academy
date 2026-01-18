import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "الكورسات عملية أكتر من أي مكان جربته، مش كلام وخلاص كل حصة فيها تطبيق.",
      role: "طالب"
    },
    {
      text: "لاحظت فرق كبير في طريقة تفكير ابني شكرا يا باشمهندس",
      role: "ولي أمر"
    },
    {
      text: "تجربة كويسة فعلًا لحد دلوقتي",
      role: "طالب"
    },
    {
      text: "الشرح عملي ومباشر، مش حشو",
      role: "طالب"
    },
    {
      text: "مشروع التخرج كان أحسن حاجة في الكورس كله",
      role: "طالب"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title accent-border inline-block">
            آراء الطلاب وأولياء الأمور
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-8 md:p-12 rounded-3xl"
              >
                <Quote className="w-12 h-12 text-spark/50 mb-6" />
                
                <p className="text-xl md:text-2xl leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-spark text-spark" />
                      ))}
                    </div>
                    {/* <span className="font-semibold text-spark-light">
                      {testimonials[currentIndex].role}
                    </span> */}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <motion.button
                      onClick={prevTestimonial}
                      className="p-2 glass-card rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      onClick={nextTestimonial}
                      className="p-2 glass-card rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-spark w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;