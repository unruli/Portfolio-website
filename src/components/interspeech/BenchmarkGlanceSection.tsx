"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Database, Sliders, Layers, FileSpreadsheet, Sparkles } from "lucide-react";
import { benchmarkStats, reasoningDifficultyResults } from "@/data/results";

export const BenchmarkGlanceSection: React.FC = () => {
  const [activeDifficultyIndex, setActiveDifficultyIndex] = useState(0);

  const activeDifficulty = reasoningDifficultyResults[activeDifficultyIndex];

  return (
    <section className="py-20 bg-[#070a10] border-t border-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">
            04 / Corpus & Benchmark
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
            Benchmark at a Glance
          </h3>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Constructed from the clinical Voices of Children Who Stutter corpus (FluencyBank), systematically structured across acoustic density levels and reasoning difficulties.
          </p>
        </div>

        {/* Facts Stat Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 font-mono">
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center">
            <span className="text-3xl sm:text-4xl font-bold text-white block mb-1">
              {benchmarkStats.numChildren}
            </span>
            <span className="text-xs text-slate-400">Child Participants</span>
          </div>

          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center">
            <span className="text-3xl sm:text-4xl font-bold text-cyan-400 block mb-1">
              {benchmarkStats.numRecordings}
            </span>
            <span className="text-xs text-slate-400">Total Audio Sessions</span>
          </div>

          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center">
            <div className="flex justify-center space-x-2 text-indigo-400 mb-1">
              <span className="text-2xl font-bold">22</span>
              <span className="text-slate-600">/</span>
              <span className="text-2xl font-bold">22</span>
            </div>
            <span className="text-[11px] text-slate-400">Single-Spk / Mixed Interview</span>
          </div>

          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center">
            <span className="text-xl sm:text-2xl font-bold text-violet-400 block mb-1 mt-1">
              {benchmarkStats.recordingDurationMinutes}
            </span>
            <span className="text-xs text-slate-400">Per Session Duration</span>
          </div>
        </div>

        {/* Interactive Difficulty Level Slider & Conceptual Animation */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-900 pb-6 mb-8 gap-4">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
                <Sliders className="w-4 h-4" />
                <span>INTERACTIVE REASONING DIFFICULTY CONTROLE</span>
              </div>
              <h4 className="text-xl font-bold text-white font-serif">
                Entailment Reasoning Complexity Granularity
              </h4>
            </div>

            {/* Horizontal Control Tabs */}
            <div className="flex items-center bg-slate-900 p-1.5 rounded-xl border border-slate-800">
              {reasoningDifficultyResults.map((item, idx) => (
                <button
                  key={item.level}
                  onClick={() => setActiveDifficultyIndex(idx)}
                  className={`px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all ${
                    activeDifficultyIndex === idx
                      ? "bg-cyan-500 text-slate-950 shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.level.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Info Card & Conceptual Requirement Animation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Description & Metrics */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-cyan-300">
                <span>Tier Level: {activeDifficulty.level}</span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {activeDifficulty.description}
              </p>

              <div className="pt-2 grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Avg Model Accuracy:</span>
                  <span className="text-cyan-400 text-lg font-bold">
                    {(activeDifficulty.accuracy * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Avg Macro F1:</span>
                  <span className="text-indigo-400 text-lg font-bold">
                    {activeDifficulty.macroF1.toFixed(3)}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Animate Conceptual Requirement */}
            <div className="lg:col-span-7 bg-slate-900/90 rounded-xl border border-slate-800 p-6 flex flex-col justify-between h-full min-h-[220px] relative overflow-hidden">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-4">
                CONCEPTUAL SPATIAL-TEMPORAL REASONING SCOPE
              </span>

              {/* Animated Visualization based on difficulty */}
              <div className="my-auto py-4">
                {activeDifficultyIndex === 0 && (
                  <motion.div
                    key="easy"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center space-y-3"
                  >
                    <div className="p-4 rounded-xl bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-mono text-xs text-center max-w-sm">
                      <span className="font-bold block mb-1">Direct Single Utterance Match</span>
                      <span className="text-[11px] text-slate-300">
                        “I like blue bikes.” &rarr; Direct match with minimal temporal span.
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400">
                      Scope: Single Local Temporal Window
                    </span>
                  </motion.div>
                )}

                {activeDifficultyIndex === 1 && (
                  <motion.div
                    key="medium"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
                        Utterance 1
                      </div>
                      <span className="text-indigo-400 font-mono text-xs">&rarr;</span>
                      <div className="p-3 rounded-lg bg-indigo-950/80 border border-indigo-500/50 text-indigo-200 text-[11px] font-mono font-bold">
                        Paraphrase & Local Context
                      </div>
                      <span className="text-indigo-400 font-mono text-xs">&rarr;</span>
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
                        Utterance 2
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-indigo-400">
                      Scope: Adjacent Turn Paraphrase & Resolution
                    </span>
                  </motion.div>
                )}

                {activeDifficultyIndex === 2 && (
                  <motion.div
                    key="hard"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center space-y-3"
                  >
                    <div className="w-full space-y-2">
                      <div className="p-2.5 rounded bg-rose-950/40 border border-rose-900/60 text-rose-300 text-[11px] font-mono flex items-center justify-between">
                        <span>[Interviewer Prompt]</span>
                        <span className="text-[10px] text-rose-400">Filtered Out</span>
                      </div>
                      <div className="p-2.5 rounded bg-violet-950/80 border border-violet-500/60 text-violet-200 text-[11px] font-mono flex items-center justify-between">
                        <span>[Child Turn 1 + Turn 4 Integration]</span>
                        <span className="text-[10px] text-violet-300 font-bold">Integrated Core</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-violet-400">
                      Scope: Long-Range Cross-Utterance Integration & Speaker Masking
                    </span>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
