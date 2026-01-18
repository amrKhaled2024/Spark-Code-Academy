import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send, AlertCircle, XCircle, Loader2, Phone, MessageSquare } from 'lucide-react';

const Registration = () => {
  // Google Forms Configuration
  const GOOGLE_FORM_ID = '1FAIpQLSeq1COioNTQ91cBe-zLMzbA9NaeWLD9HXnPMnj_FJmhDjgPVg';
  const GOOGLE_FORM_URL = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;
  
  // Entry IDs mapping
  const FIELD_MAPPING = {
    fullName: 'entry.268892088',
    age: 'entry.672624373',
    grade: 'entry.2008720831',
    studentPhone: 'entry.921090979',
    parentPhone: 'entry.773901722',
    course: 'entry.856694613'
  };

  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    grade: '',
    studentPhone: '',
    parentPhone: '',
    course: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
    warning: null
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const formRef = useRef(null);
  const hiddenIframeRef = useRef(null);

  const courses = [
    { value: 'Physics Lab Experiments', label: 'Physics Lab Experiments' },
  ];

  // Validation functions
  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'الاسم الكامل مطلوب';
        if (value.trim().length < 3) return 'الاسم يجب أن يكون 3 أحرف على الأقل';
        return '';
      
      case 'age':
        if (!value) return 'العمر مطلوب';
        const ageNum = parseInt(value);
        if (isNaN(ageNum)) return 'العمر يجب أن يكون رقماً';
        if (ageNum < 10 || ageNum > 30) return 'العمر يجب أن يكون بين 10 و 30 سنة';
        return '';
      
      case 'grade':
        if (!value.trim()) return 'الصف الدراسي مطلوب';
        return '';
      
      case 'studentPhone':
        if (!value) return 'رقم هاتف الطالب مطلوب';
        if (!/^01[0-9]{9}$/.test(value)) return 'رقم الهاتف يجب أن يبدأ بـ 01 ويتكون من 11 رقم';
        return '';
      
      case 'parentPhone':
        if (!value) return 'رقم هاتف ولي الأمر مطلوب';
        if (!/^01[0-9]{9}$/.test(value)) return 'رقم الهاتف يجب أن يبدأ بـ 01 ويتكون من 11 رقم';
        return '';
      
      case 'course':
        if (!value) return 'الرجاء اختيار البرنامج';
        return '';
      
      default:
        return '';
    }
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        errors[key] = error;
        isValid = false;
      }
    });

    setFieldErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setFormStatus(prev => ({
        ...prev,
        error: 'الرجاء تصحيح الأخطاء في النموذج'
      }));
      
      // Scroll to first error
      const firstErrorField = Object.keys(fieldErrors)[0];
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.focus();
        }
      }
      return;
    }

    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      error: null,
      warning: null
    });

    try {
      // Prepare data for Google Forms
      const googleFormData = new FormData();
      
      // Map our fields to Google Forms entry IDs
      googleFormData.append(FIELD_MAPPING.fullName, formData.fullName);
      googleFormData.append(FIELD_MAPPING.age, formData.age);
      googleFormData.append(FIELD_MAPPING.grade, formData.grade);
      googleFormData.append(FIELD_MAPPING.studentPhone, formData.studentPhone);
      googleFormData.append(FIELD_MAPPING.parentPhone, formData.parentPhone);
      googleFormData.append(FIELD_MAPPING.course, formData.course);

      // Method 1: Using fetch with no-cors (primary method)
      const response = await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: googleFormData
      });

      // Even with no-cors, we can't check response status
      // So we'll assume success and show confirmation
      
      // Success - reset form and show success message
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null,
        warning: null
      });

      // Reset form data
      setFormData({
        fullName: '',
        age: '',
        grade: '',
        studentPhone: '',
        parentPhone: '',
        course: ''
      });

      // Clear field errors
      setFieldErrors({});

      // Log for analytics
      console.log('Form submitted successfully to Google Forms:', {
        formId: GOOGLE_FORM_ID,
        timestamp: new Date().toISOString(),
        course: formData.course
      });

    } catch (error) {
      console.error('Form submission error:', error);
      
      // Fallback method: Traditional form submission
      try {
        // Create a hidden form and submit it
        const hiddenForm = document.createElement('form');
        hiddenForm.method = 'POST';
        hiddenForm.action = GOOGLE_FORM_URL;
        hiddenForm.target = 'hidden_iframe';
        hiddenForm.style.display = 'none';
        
        Object.keys(FIELD_MAPPING).forEach(key => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = FIELD_MAPPING[key];
          input.value = formData[key] || '';
          hiddenForm.appendChild(input);
        });
        
        document.body.appendChild(hiddenForm);
        hiddenForm.submit();
        document.body.removeChild(hiddenForm);
        
        // Show success with fallback warning
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          error: null,
          warning: 'تم إرسال البيانات باستخدام الطريقة البديلة'
        });

      } catch (fallbackError) {
        console.error('Fallback submission failed:', fallbackError);
        
        setFormStatus({
          isSubmitting: false,
          isSubmitted: false,
          error: 'حدث خطأ في إرسال النموذج. الرجاء المحاولة مرة أخرى أو التواصل معنا مباشرة.',
          warning: null
        });
      }
    }
  };

  const renderInput = (name, label, type = 'text', placeholder = '', extraProps = {}) => (
    <div className="relative">
      <label htmlFor={name} className="block text-sm font-medium mb-2 text-white/80">
        {label} *
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className={`w-full px-4 py-3 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
          fieldErrors[name] 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-white/10 focus:ring-spark focus:border-spark'
        }`}
        placeholder={placeholder}
        {...extraProps}
      />
      {fieldErrors[name] && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 -bottom-6 flex items-center gap-1 text-red-400 text-xs"
        >
          <AlertCircle className="w-3 h-3" />
          <span>{fieldErrors[name]}</span>
        </motion.div>
      )}
    </div>
  );

const renderSelect = (name, label, options) => (
  <div className="relative">
    <label htmlFor={name} className="block text-sm font-medium mb-2 text-white/80">
      {label} *
    </label>
    
    {/* Custom styled select */}
    <div className="relative group">
      <select
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className={`w-full px-4 py-3 bg-navy-light/90 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer text-white pr-10 ${
          fieldErrors[name] 
            ? 'border-red-500/50 focus:ring-red-500' 
            : 'border-white/20 hover:border-spark/50 focus:ring-spark focus:border-spark'
        }`}
      >
        <option value="" disabled className="bg-navy-light text-white">
          -- اختر {label} --
        </option>
        {options.map(option => (
          <option 
            key={option.value} 
            value={option.value}
            className="bg-navy-light text-white"
          >
            {option.label}
          </option>
        ))}
      </select>
      
      {/* Custom dropdown arrow with gradient */}
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <div className="w-6 h-6 flex items-center justify-center">
          <svg 
            className="w-4 h-4 text-spark" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
      </div>
    </div>
    
    {/* Selected value preview (optional) */}
    {formData[name] && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-2 px-3 py-1 bg-spark/10 text-spark rounded-lg text-sm inline-block"
      >
        ✓ {formData[name]}
      </motion.div>
    )}
    
    {fieldErrors[name] && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute left-0 -bottom-6 flex items-center gap-1 text-red-400 text-xs"
      >
        <AlertCircle className="w-3 h-3" />
        <span>{fieldErrors[name]}</span>
      </motion.div>
    )}
  </div>
);

  return (
    <section id="registration" className="py-20">
      {/* Hidden iframe for fallback submission */}
      <iframe
        ref={hiddenIframeRef}
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: 'none' }}
        title="Hidden iframe for form submission"
        onLoad={() => {
          // This triggers when fallback submission completes
          if (formStatus.isSubmitting) {
            setFormStatus(prev => ({
              ...prev,
              isSubmitting: false,
              isSubmitted: true
            }));
          }
        }}
      />
      
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title accent-border inline-block">
            تسجيل الطلاب
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            املأ النموذج أدناه للتسجيل في أحد برامجنا التعليمية
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Success State */}
            {formStatus.isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="glass-card p-8 md:p-12 rounded-3xl text-center"
              >
                <div className="w-24 h-24 spark-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-12 h-12 text-navy" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  تم إرسال طلب التسجيل بنجاح! 🎉
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
                    <p className="text-white/80 mb-3 text-lg">
                      شكراً لتسجيلك في <span className="text-spark font-bold">Academy Code Spark</span>
                    </p>
                    
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="bg-green-500/20 p-3 rounded-full">
                        <MessageSquare className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white/90 font-medium">سيتم التواصل معكم عبر الواتساب خلال 24 ساعة</p>
                        <p className="text-spark font-bold text-xl mt-1">01026643026</p>
                      </div>
                    </div>
                    
                    <p className="text-white/60 text-sm">
                      لتأكيد التسجيل وتحديد موعد الاختبار التقييمي
                    </p>
                  </div>

                  {formStatus.warning && (
                    <div className="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-yellow-500" />
                        <span className="text-yellow-500/80 text-sm">{formStatus.warning}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      onClick={() => {
                        setFormStatus({
                          isSubmitting: false,
                          isSubmitted: false,
                          error: null,
                          warning: null
                        });
                        window.scrollTo({ top: document.getElementById('registration').offsetTop, behavior: 'smooth' });
                      }}
                      className="px-8 py-3 spark-gradient text-navy font-bold rounded-xl text-lg hover:shadow-lg transition-shadow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      تسجيل طالب جديد
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Form State */
              <motion.form
                key="form"
                ref={formRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="glass-card p-8 md:p-10 rounded-3xl"
                noValidate
              >
                {/* Global Error Message */}
                {formStatus.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
                  >
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-red-400 font-medium mb-1">خطأ في الإرسال</p>
                        <p className="text-red-400/80 text-sm">{formStatus.error}</p>
                        <p className="text-white/60 text-xs mt-2">
                          يمكنك المحاولة مرة أخرى أو التواصل معنا مباشرة على الواتساب
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Form Fields Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {renderInput(
                    'fullName',
                    'الاسم الكامل للطالب',
                    'text',
                    'أدخل الاسم الكامل باللغة العربية'
                  )}

                  {renderInput(
                    'age',
                    'العمر',
                    'number',
                    'مثال: 15',
                    { min: '10', max: '25' }
                  )}

                  {renderInput(
                    'grade',
                    'الصف الدراسي',
                    'text',
                    'مثال: الصف الأول الثانوي'
                  )}

                  {renderInput(
                    'studentPhone',
                    'رقم هاتف الطالب',
                    'tel',
                    '01012345678',
                    { pattern: '01[0-9]{9}' }
                  )}

                  {renderInput(
                    'parentPhone',
                    'رقم هاتف ولي الأمر',
                    'tel',
                    '01012345678',
                    { pattern: '01[0-9]{9}' }
                  )}

                  {renderSelect(
                    'course',
                    'البرنامج المطلوب',
                    courses
                  )}
                </div>

                {/* Contact Information */}
                <div className="mb-6 p-4 bg-gradient-to-r from-spark/10 to-spark/5 rounded-xl border border-spark/20">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
                      <Phone className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white/90 font-medium mb-1">
                        📞 سيتم التواصل معكم عبر <span className="text-green-400 font-bold">الواتساب</span>
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-white/70">رقم التواصل:</span>
                        <span className="text-spark font-bold text-lg">01026643026</span>
                      </div>
                      <p className="text-white/60 text-sm mt-1">
                        خلال 24 ساعة عمل لتأكيد التسجيل وتحديد التفاصيل
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form Notes */}
                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <div className="w-2 h-2 bg-spark rounded-full"></div>
                    <span>جميع الحقول مطلوبة (*)</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <div className="w-2 h-2 bg-spark rounded-full"></div>
                    <span>الرجاء التأكد من صحة البيانات قبل الإرسال</span>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="w-full py-4 spark-gradient text-navy font-bold rounded-xl text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Loading overlay */}
                  {formStatus.isSubmitting && (
                    <div className="absolute inset-0 bg-spark/50 backdrop-blur-sm rounded-xl" />
                  )}
                  
                  {/* Content */}
                  {formStatus.isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>جاري الإرسال ...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>إرسال طلب التسجيل</span>
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Registration;