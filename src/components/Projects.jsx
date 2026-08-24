import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Sparkles, ChevronRight, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

const Projects = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'GenAI & Analytics', 'Forecasting & ML', 'Computer Vision & IoT', 'Data Engineering'];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Applied Data Science & AI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Data Science Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            A portfolio of GenAI analytics agents, enterprise time-series forecasting pipelines, edge computer vision systems, and relational data platforms.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-space-900/80 border border-white/10 backdrop-blur-md">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveCategory(cat);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-bold shadow-lg shadow-emerald-500/20 scale-105'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid with Heavy 3D Scrolling Effects */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ perspective: 1500 }}>
          <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8, rotateX: 30, rotateY: index % 2 === 0 ? -20 : 20, z: -200 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, z: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateX: -30 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ scale: 1.03, rotateX: -5, rotateY: index % 2 === 0 ? 5 : -5, z: 50 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col group shadow-2xl bg-space-900/90"
            >
              {/* Image & Header Overlay */}
              <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-3xl z-10" style={{ transform: 'translateZ(30px)' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/60 to-transparent" />

                {/* Badges on image */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-space-900/90 text-emerald-300 border border-emerald-500/30 backdrop-blur-md shadow-lg">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md flex items-center gap-1 shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Quick GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    soundFx.playClick();
                  }}
                  className="absolute top-4 right-4 p-2.5 rounded-xl bg-space-900/90 hover:bg-space-800 text-slate-300 hover:text-emerald-400 border border-white/15 backdrop-blur-md transition-all hover:scale-110 shadow-lg"
                  title="View GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                {/* Bottom Overlay Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-200/90 line-clamp-1 mt-0.5 font-medium drop-shadow">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between z-20" style={{ transform: 'translateZ(40px)' }}>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div>
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 text-xs font-mono rounded-lg bg-space-950 border border-white/10 text-slate-300 group-hover:border-emerald-500/30 group-hover:text-emerald-200 transition-colors shadow-inner"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => {
                        soundFx.playClick();
                        onSelectProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors group/btn"
                    >
                      <span>Methodology & Deep Dive</span>
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => soundFx.playClick()}
                      className="text-xs text-slate-400 hover:text-slate-200 font-mono flex items-center gap-1.5"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
