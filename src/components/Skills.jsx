import React, { useState } from 'react';
import { Code2, Cloud, Server, Brain, CheckCircle, Sparkles, Terminal, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-teal-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-teal-400" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Data Science <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Core competencies across machine learning algorithms, time-series forecasting, GenAI prompt orchestration, and high-throughput data pipelines.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-8 p-1.5 rounded-2xl bg-space-900/80 border border-white/10 backdrop-blur-md">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={cat.title}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveTab(idx);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-bold shadow-lg shadow-emerald-500/20 scale-105'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {getCategoryIcon(cat.icon)}
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Display */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 bg-space-900/80">
            <div className="flex items-center gap-3 pb-6 mb-6 border-b border-white/10">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                {getCategoryIcon(SKILL_CATEGORIES[activeTab].icon)}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {SKILL_CATEGORIES[activeTab].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Production modeling rigor, feature engineering, and statistical depth
                </p>
              </div>
            </div>

            {/* Skill Progress Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-space-950/70 border border-white/5 hover:border-emerald-500/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-200 group-hover:text-emerald-300 transition-colors text-sm sm:text-base">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {skill.tag}
                    </span>
                  </div>

                  {/* Progress Meter Bar */}
                  <div className="w-full h-2 bg-space-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Cloud Marquee / Grid */}
        <div className="mt-12 max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-2.5">
          {[
            "Time-Series Forecasting", "Dirichlet-Multinomial Modeling", "Scikit-learn", "TensorFlow", "MAPE Evaluation",
            "PostgreSQL", "Hierarchical Clustering", "AWS Lambda", "Agentic AI", "RAG Patterns", "Oracle DB", "Python", "R"
          ].map((item, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300 hover:border-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 transition-all cursor-default"
            >
              #{item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
