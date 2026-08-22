import React from 'react';
import { BarChart3, PieChart, TrendingUp, Activity, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const Hero = ({ onOpenResume }) => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-24 pb-16 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-6 shadow-sm border border-teal-200">
            <Activity className="w-4 h-4"/> Data Science & Analytics
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Turning Data into <br/> <span className="text-teal-600">Actionable Insights</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            {PERSONAL_INFO.bio}
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={onOpenResume} className="flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-1">
              <Download className="w-5 h-5"/> Download Resume
            </button>
          </div>
        </div>

        {/* Bento Box Dashboard Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-10">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200/60 flex flex-col items-center text-center hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6"><TrendingUp className="w-7 h-7"/></div>
            <h3 className="font-black text-3xl mb-2 text-slate-800">+20%</h3>
            <p className="text-slate-500 font-medium">Targeting Efficiency Gain</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200/60 flex flex-col items-center text-center hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><BarChart3 className="w-7 h-7"/></div>
            <h3 className="font-black text-3xl mb-2 text-slate-800">40 hrs/wk</h3>
            <p className="text-slate-500 font-medium">Saved via Automation</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200/60 flex flex-col items-center text-center hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6"><PieChart className="w-7 h-7"/></div>
            <h3 className="font-black text-3xl mb-2 text-slate-800">Scikit-Learn</h3>
            <p className="text-slate-500 font-medium">Predictive Modeling</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
