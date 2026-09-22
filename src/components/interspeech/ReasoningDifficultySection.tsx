"use client";

import React from "react";
import { reasoningDifficultyResults } from "@/data/results";
import { Info, BarChart2 } from "lucide-react";

export const ReasoningDifficultySection: React.FC = () => {
  return (
    <section className="py-20 bg-[#070a10] border-t border-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">
            07 / Impact of Reasoning Complexity
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
            Reasoning Difficulty Breakdown
          </h3>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Evaluating performance across Easy, Medium, and Hard inference demands.
          </p>
        </div>

        {/* Chart Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {reasoningDifficultyResults.map((item) => (
            <div
              key={item.level}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded bg-slate-900 text-cyan-400 border border-slate-800 font-mono text-xs font-bold">
                    {item.level.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">Tier Benchmark</span>
                </div>
                <h4 className="text-sm font-bold text-white font-mono mb-2">
                  {item.reasoningRequirement}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-sans">
                  {item.description}
                </p>
              </div>

              <div className="space-y-3 font-mono text-xs pt-4 border-t border-slate-900">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Avg Model Accuracy:</span>
                  <span className="font-bold text-cyan-300">
                    {(item.accuracy * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-cyan-500 h-full rounded-full"
                    style={{ width: `${item.accuracy * 100}%` }}
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-slate-500">Avg Macro F1:</span>
                  <span className="font-bold text-indigo-400">{item.macroF1.toFixed(3)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nuanced Research Interpretation Callout */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex items-start space-x-4">
          <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs text-slate-300 leading-relaxed font-sans">
            <strong className="font-mono text-white block">
              Nuanced Scientific Finding: Modest Monotonic Trend vs Persistent Class Bias
            </strong>
            <p>
              Performance changes modestly across difficulty tiers (Easy: 44.9% &rarr; Hard: 41.7%). The primary bottleneck is not a dramatic collapse on longer context, but rather that systemic class calibration biases (overpredicting entailment) persist uniformly across all difficulty tiers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
