"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, FileText, Headphones, ArrowRight, CheckCircle, Search } from "lucide-react";

export const ExperimentalFrameworkSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0b0f17] text-slate-100 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">
            03 / Experimental Methodology
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
            Three Diagnostic Reasoning Paths
          </h3>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            By comparing end-to-end ALMs against cascaded pipelines and human transcript oracle baselines, our benchmark pinpoints whether failures stem from acoustic feature extraction or semantic reasoning.
          </p>
        </div>

        {/* 3 Reasoning Routes Architecture */}
        <div className="space-y-6">
          {/* Path A: Audio Native */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-slate-950 border border-indigo-900/60 shadow-xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="px-2.5 py-1 rounded bg-indigo-950 text-indigo-400 border border-indigo-800 font-mono text-xs font-bold">
                  PATH A — AUDIO NATIVE (END-TO-END ALM)
                </span>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  Zero-shot Audio LM
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800">
                Primary Target
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
              <div className="w-full md:w-1/3 p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-3">
                <Headphones className="w-5 h-5 text-indigo-400" />
                <div>
                  <span className="text-slate-300 block font-bold">Raw Disfluent Audio</span>
                  <span className="text-[10px] text-slate-500">Continuous Waveform</span>
                </div>
              </div>

              <ArrowRight className="w-5 h-5 text-indigo-500 shrink-0 rotate-90 md:rotate-0" />

              <div className="w-full md:w-1/3 p-3.5 rounded-xl bg-indigo-950/80 border border-indigo-700/60 flex items-center space-x-3">
                <Cpu className="w-5 h-5 text-indigo-300" />
                <div>
                  <span className="text-white block font-bold">Audio Language Model</span>
                  <span className="text-[10px] text-indigo-300">Joint Encoder & LLM</span>
                </div>
              </div>

              <ArrowRight className="w-5 h-5 text-indigo-500 shrink-0 rotate-90 md:rotate-0" />

              <div className="w-full md:w-1/3 p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <div>
                  <span className="text-emerald-300 block font-bold">Semantic Prediction</span>
                  <span className="text-[10px] text-slate-500">Summary / NLI Class</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Path B: ASR + LLM Cascade */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-700 font-mono text-xs font-bold">
                  PATH B — ASR + LLM CASCADE
                </span>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  Whisper / Granite + Qwen / Llama
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                Cascaded Baseline
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-xs">
              <div className="w-full md:w-1/4 p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-2">
                <Headphones className="w-4 h-4 text-slate-400" />
                <div>
                  <span className="text-slate-300 block font-bold">Raw Audio</span>
                  <span className="text-[10px] text-slate-500">Child Speech</span>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-slate-600 shrink-0 rotate-90 md:rotate-0" />

              <div className="w-full md:w-1/4 p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-slate-400" />
                <div>
                  <span className="text-slate-300 block font-bold">ASR Model</span>
                  <span className="text-[10px] text-slate-500">Speech-to-Text</span>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-slate-600 shrink-0 rotate-90 md:rotate-0" />

              <div className="w-full md:w-1/4 p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-2">
                <FileText className="w-4 h-4 text-slate-400" />
                <div>
                  <span className="text-slate-300 block font-bold">Text LLM</span>
                  <span className="text-[10px] text-slate-500">Reasoning Engine</span>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-slate-600 shrink-0 rotate-90 md:rotate-0" />

              <div className="w-full md:w-1/4 p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="text-emerald-300 block font-bold">Prediction</span>
                  <span className="text-[10px] text-slate-500">Output Label</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Path C: Transcript Oracle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl bg-slate-950 border border-cyan-900/40 shadow-xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 font-mono text-xs font-bold">
                  PATH C — TRANSCRIPT ORACLE
                </span>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  Human Expert Transcript
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800">
                Upper Bound Ceiling
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
              <div className="w-full md:w-1/3 p-3.5 rounded-xl bg-cyan-950/60 border border-cyan-900/60 flex items-center space-x-3">
                <FileText className="w-5 h-5 text-cyan-400" />
                <div>
                  <span className="text-cyan-200 block font-bold">Human Transcript</span>
                  <span className="text-[10px] text-cyan-400/80">Clean Ground Truth Text</span>
                </div>
              </div>

              <ArrowRight className="w-5 h-5 text-cyan-500 shrink-0 rotate-90 md:rotate-0" />

              <div className="w-full md:w-1/3 p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-3">
                <Cpu className="w-5 h-5 text-slate-300" />
                <div>
                  <span className="text-slate-200 block font-bold">Text LLM</span>
                  <span className="text-[10px] text-slate-500">Pure Language Reasoning</span>
                </div>
              </div>

              <ArrowRight className="w-5 h-5 text-cyan-500 shrink-0 rotate-90 md:rotate-0" />

              <div className="w-full md:w-1/3 p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <div>
                  <span className="text-emerald-300 block font-bold">Oracle Prediction</span>
                  <span className="text-[10px] text-slate-500">Reasoning Capacity</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Diagnostic Localization Highlight Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-800/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-800">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-serif mb-1">
                Diagnostic Error Localization Strategy
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-2xl">
                By comparing Path A (Direct ALM) against Path B (ASR Cascade) and Path C (Oracle Transcript), we decouple whether reasoning failures are driven by <strong className="text-rose-400">Acoustic Processing Disruption</strong> or <strong className="text-violet-400">Semantic Reasoning Bottlenecks</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
