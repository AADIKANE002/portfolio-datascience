import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { BarChart3, PieChart, TrendingUp, Activity, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Hero = ({ onOpenResume }) => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-slate-50 text-slate-900 border-b border-slate-200">
      {/* Background Graphic Elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-teal-100/40 to-emerald-50/20 rounded-full blur-[80px] pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/40 to-slate-100/20 rounded-full blur-[80px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-teal-700 text-sm font-semibold">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
              </span>
              Data Science & Analytics
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Turning Data into <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
              <TypeAnimation
                sequence={[
                  'Actionable Insights', 3000,
                  'Business Value', 3000,
                  'Predictive Models', 3000
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            {PERSONAL_INFO.bio}
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenResume} 
              className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-lg transition-all"
            >
              <Download className="w-5 h-5"/> Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bento Box Dashboard Mockup - Liveable Hover States */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-sm border border-white flex flex-col items-center text-center transition-all cursor-default"
          >
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500">
              <TrendingUp className="w-8 h-8"/>
            </div>
            <h3 className="font-black text-4xl mb-2 text-slate-800 tracking-tight">+20%</h3>
            <p className="text-slate-500 font-medium">Targeting Efficiency Gain</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-sm border border-white flex flex-col items-center text-center transition-all cursor-default"
          >
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:bg-blue-500 group-hover:text-white transition-colors duration-500">
              <BarChart3 className="w-8 h-8"/>
            </div>
            <h3 className="font-black text-4xl mb-2 text-slate-800 tracking-tight">40 hrs</h3>
            <p className="text-slate-500 font-medium">Saved Weekly via Automation</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-sm border border-white flex flex-col items-center text-center transition-all cursor-default"
          >
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:bg-purple-500 group-hover:text-white transition-colors duration-500">
              <PieChart className="w-8 h-8"/>
            </div>
            <h3 className="font-black text-4xl mb-2 text-slate-800 tracking-tight">Model</h3>
            <p className="text-slate-500 font-medium">Scikit-Learn Predictive</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
