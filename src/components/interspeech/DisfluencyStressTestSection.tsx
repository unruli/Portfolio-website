"use client";

import React, { useState } from "react";
import { Activity, BarChart2, Layers, AlertCircle } from "lucide-react";
import { disfluencyDensityResults } from "@/data/results";

export const DisfluencyStressTestSection: React.FC = () => {
  const [activePlotTab, setActivePlotTab] = useState<"entailment" | "summarization">("entailment");
  const [hoveredBinIndex, setHoveredBinIndex] = useState<number | null>(null);

  const disfluencyTypes = [
    { name: "Filled Pause", code: "FP", example: "“um... uh...”", color: "text-amber-400 border-amber-800 bg-amber-950/40" },
    { name: "Repetition", code: "REP", example: "“I-I-I want”", color: "text-indigo-400 border-indigo-800 bg-indigo-950/40" },
    { name: "Prolongation", code: "PRO", example: "“s...ssss-sun”", color: "text-rose-400 border-rose-800 bg-rose-950/40" },
    { name: "Silent Block", code: "BLK", example: "“[pause] ...ball”", color: "text-violet-400 border-violet-800 bg-violet-950/40" },
    { name: "Mixed Disfluency", code: "MIX", example: "Compound patterns", color: "text-cyan-400 border-cyan-800 bg-cyan-950/40" },
  ];

  return (
    <section className="py-20 bg-[#0b0f17] border-t border-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">
            08 / Acoustic Stress Testing
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
            Disfluency Stress Test & Density Analysis
          </h3>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Measuring model reasoning stability across disfluency types and acoustic disfluency density bins.
          </p>
        </div>

        {/* Disfluency Taxonomy Chips */}
        <div className="mb-12">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-3 text-center">
            ACOUSTIC DISFLUENCY PHENOMENA IN BENCHMARK
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {disfluencyTypes.map((item) => (
              <div
                key={item.name}
                className={`px-3.5 py-2 rounded-xl border text-xs font-mono flex items-center space-x-2 ${item.color}`}
              >
                <span className="font-bold">{item.code}:</span>
                <span className="text-slate-200">{item.name}</span>
                <span className="text-[10px] text-slate-400">{item.example}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Spectrogram / Density Performance Plot Box */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-900 pb-4 mb-8 gap-4">
            <div>
              <h4 className="text-lg font-bold text-white font-mono">
                Performance Across Disfluency Density Bins
              </h4>
              <p className="text-xs text-slate-400 font-sans">
                Ratio of disfluent events to total word count
              </p>
            </div>

            {/* Plot view toggle */}
            <div className="flex items-center bg-slate-900 p-1.5 rounded-xl border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setActivePlotTab("entailment")}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  activePlotTab === "entailment"
                    ? "bg-cyan-500 text-slate-950"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Entailment Accuracy
              </button>
              <button
                onClick={() => setActivePlotTab("summarization")}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  activePlotTab === "summarization"
                    ? "bg-indigo-500 text-slate-950"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Summarization Faithfulness
              </button>
            </div>
          </div>

          {/* Interactive Bins Bar Visualization */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8 font-mono">
            {disfluencyDensityResults.map((bin, idx) => {
              const isHovered = hoveredBinIndex === idx;
              const val = activePlotTab === "entailment" ? bin.accuracy : bin.faithfulnessScore || 0;
              const heightPercent = val * 100;

              return (
                <div
                  key={bin.densityBin}
                  onMouseEnter={() => setHoveredBinIndex(idx)}
                  onMouseLeave={() => setHoveredBinIndex(null)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isHovered
                      ? "bg-slate-900 border-cyan-500 shadow-xl shadow-cyan-950/40"
                      : "bg-slate-900/60 border-slate-800"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-200">{bin.densityBin}</span>
                    <span className="text-[10px] text-slate-500">{(bin.densityValue * 100).toFixed(1)}%</span>
                  </div>

                  {/* Vertical Bar Graph Visual */}
                  <div className="h-32 bg-slate-950 rounded-lg border border-slate-800 p-2 flex items-end justify-center mb-4 relative">
                    <div
                      className={`w-full rounded transition-all duration-300 ${
                        activePlotTab === "entailment" ? "bg-cyan-500" : "bg-indigo-400"
                      }`}
                      style={{ height: `${heightPercent}%` }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow">
                      {(val * 100).toFixed(1)}%
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-tight font-sans">
                    {bin.sampleCountDescription}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Non-Monotonic Trend Research Note */}
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start space-x-3 text-xs text-slate-300 font-sans">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="font-mono text-amber-300 block mb-1">
                Non-Monotonic Empirical Trend:
              </strong>
              <span>
                Performance does not follow a simple linear decreasing trajectory across disfluency density. Rather, performance remains variable across low-to-moderate disfluency densities, with severe degradation occurring primarily at the highest density bin (17.0% disfluency density).
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
