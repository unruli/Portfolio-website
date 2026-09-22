"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Activity, Users, HelpCircle, ArrowRight } from "lucide-react";

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#070a10] border-t border-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">
            01 / Evaluation Challenge
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
            Why Disfluent Child Speech Challenges Audio Models
          </h3>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Existing speech-language models are primarily trained on fluent adult data. Evaluating ALMs on child stuttering speech presents three compound acoustic and semantic obstacles.
          </p>
        </div>

        {/* Integrated Visual Pipeline */}
        <div className="mb-16 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-10 relative overflow-hidden">
          <div className="text-xs font-mono text-slate-400 mb-6 flex items-center justify-between border-b border-slate-900 pb-3">
            <span>COMPOUND ACOUSTIC STREAM INPUT</span>
            <span className="text-slate-500">Voices of Children Who Stutter Benchmark</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Factor 1: Child Speech */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-5 rounded-xl bg-slate-900/80 border border-cyan-900/40 relative group hover:border-cyan-500/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-950/80 text-cyan-400 flex items-center justify-center mb-4 border border-cyan-800/50">
                <User className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-mono">1. Child Speech</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Distinct acoustic pitch, fundamental frequency (F0), unique vocal tract length, and developmental prosodic variations compared to adult benchmarks.
              </p>
            </motion.div>

            {/* Factor 2: Disfluency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5 rounded-xl bg-slate-900/80 border border-rose-900/40 relative group hover:border-rose-500/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-rose-950/80 text-rose-400 flex items-center justify-center mb-4 border border-rose-800/50">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-mono">2. Disfluency</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Repetitions, prolongations, silent blocks, and filled pauses interrupt word temporal bounds and break standard language model context tokens.
              </p>
            </motion.div>

            {/* Factor 3: Speaker Interference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-5 rounded-xl bg-slate-900/80 border border-indigo-900/40 relative group hover:border-indigo-500/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-950/80 text-indigo-400 flex items-center justify-center mb-4 border border-indigo-800/50">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-mono">3. Speaker Interference</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Interviewer prompts, overlapping dialogue, background scaffolding, and mixed turn-taking disrupt child-focused focus.
              </p>
            </motion.div>
          </div>

          {/* Central Flow Vector */}
          <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-3 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">Child</span>
              <span className="text-slate-500">+</span>
              <span className="px-2.5 py-1 rounded bg-rose-950 text-rose-300 border border-rose-800">Disfluency</span>
              <span className="text-slate-500">+</span>
              <span className="px-2.5 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">Interviewer</span>
            </div>

            <div className="flex items-center space-x-2 text-slate-400">
              <ArrowRight className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-300">AUDIO LANGUAGE MODEL</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 animate-pulse" />
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 flex items-center justify-center">
                <HelpCircle className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-semibold text-amber-300">
                Direct Semantic Understanding?
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
