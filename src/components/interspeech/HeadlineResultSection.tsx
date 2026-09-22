"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Cpu, ArrowUpRight, CheckCircle2, Info } from "lucide-react";
import { headlineResult } from "@/data/results";

export const HeadlineResultSection: React.FC = () => {
  return (
    <section id="results" className="py-20 bg-[#070a10] border-t border-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">
            06 / Headline Benchmark Findings
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
            Direct Audio Models vs. Cascaded Pipelines
          </h3>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Evaluating whether end-to-end continuous audio processing matches traditional ASR transcription combined with high-capacity text LLMs.
          </p>
        </div>

        {/* Major Visual Comparison Box */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Strongest ALM */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-slate-900/90 border border-indigo-900/60 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                  STRONGEST END-TO-END ALM
                </span>
                <Cpu className="w-4 h-4 text-indigo-400" />
              </div>
              <h4 className="text-2xl font-bold text-white font-mono mb-6">
                {headlineResult.alm.name}
              </h4>

              <div className="grid grid-cols-2 gap-4 font-mono">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-500 text-[10px] block">Overall Accuracy</span>
                  <span className="text-2xl font-bold text-indigo-300">
                    {headlineResult.alm.accuracy.toFixed(3)}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-500 text-[10px] block">Macro F1 Score</span>
                  <span className="text-2xl font-bold text-indigo-300">
                    {headlineResult.alm.macroF1.toFixed(3)}
                  </span>
                </div>
              </div>
            </div>

            {/* Middle: Delta gap / comparison arrow */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center py-4">
              <div className="px-3 py-1.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono text-xs font-bold mb-2 flex items-center space-x-1">
                <ArrowUpRight className="w-4 h-4" />
                <span>+5.8% Accuracy Gap</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 text-center">
                Cascade Advantage
              </span>
            </div>

            {/* Right: Strongest Cascade */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-slate-900/90 border border-cyan-900/60 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  STRONGEST ASR + LLM CASCADE
                </span>
                <TrendingUp className="w-4 h-4 text-cyan-400" />
              </div>
              <h4 className="text-2xl font-bold text-white font-mono mb-6">
                {headlineResult.cascade.name}
              </h4>

              <div className="grid grid-cols-2 gap-4 font-mono">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-500 text-[10px] block">Overall Accuracy</span>
                  <span className="text-2xl font-bold text-cyan-400">
                    {headlineResult.cascade.accuracy.toFixed(3)}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-500 text-[10px] block">Macro F1 Score</span>
                  <span className="text-2xl font-bold text-cyan-400">
                    {headlineResult.cascade.macroF1.toFixed(3)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Research Takeaway Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-cyan-900/40 flex items-start space-x-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/80 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-800/50 mt-1">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h4 className="text-base font-bold text-white font-serif">
              Primary Scientific Message
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {headlineResult.takeaway}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
