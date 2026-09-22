"use client";

import React, { useState } from "react";
import { Filter, Search, ChevronRight, ShieldAlert, CheckCircle2, XCircle, FileText } from "lucide-react";
import { demoItems, DemoItem } from "@/data/demos";

export const FailureExplorerSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedCase, setSelectedCase] = useState<DemoItem | null>(null);

  const filters = [
    "ALL",
    "Speaker Leakage",
    "Contradiction Bias",
    "High Disfluency",
    "Acoustic Failure",
    "Semantic Failure",
    "Easy",
    "Medium",
    "Hard",
  ];

  const filteredItems = demoItems.filter((item) => {
    if (activeFilter === "ALL") return true;
    if (item.categoryTag === activeFilter) return true;
    if (item.difficulty === activeFilter) return true;
    return false;
  });

  return (
    <section className="py-20 bg-[#070a10] border-t border-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400 mb-3">
            <Search className="w-3.5 h-3.5" />
            <span>Qualitative Diagnostic Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
            Diagnostic Failure Explorer
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Filter case studies by error taxonomy to analyze acoustic processing breakdowns, speaker leakage, and contradiction calibration failures.
          </p>
        </div>

        {/* Filter Chips Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 font-mono text-xs">
          <span className="text-slate-500 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                activeFilter === filter
                  ? "bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-md"
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCase(item)}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/60 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800 font-mono text-[11px]">
                    {item.categoryTag}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    Difficulty: {item.difficulty}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white font-mono mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-300 italic bg-slate-900/80 p-3 rounded-lg border border-slate-850 mb-4 font-serif">
                  “{item.hypothesis}”
                </p>
              </div>

              <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">Ground Truth: <strong className="text-cyan-300">{item.groundTruth}</strong></span>
                <span className="text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Inspect Case &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Detail Modal / Drawer */}
        {selectedCase && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-900 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 block uppercase">
                    {selectedCase.categoryTag} &bull; {selectedCase.difficulty} Tier
                  </span>
                  <h3 className="text-xl font-bold text-white font-mono">
                    {selectedCase.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="px-3 py-1 rounded bg-slate-900 text-slate-400 hover:text-white font-mono text-xs border border-slate-800"
                >
                  Close ✕
                </button>
              </div>

              {selectedCase.isPlaceholder && (
                <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-500/40 text-[11px] font-mono text-amber-200 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Placeholder case for qualitative demonstration. Approved asset replacement pending.</span>
                </div>
              )}

              {/* Hypothesis */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs space-y-2">
                <span className="text-slate-500 block">Hypothesis:</span>
                <p className="text-white font-serif text-sm italic">{selectedCase.hypothesis}</p>
                <div className="pt-2 flex justify-between text-[11px]">
                  <span className="text-slate-400">Ground Truth: <strong className="text-cyan-300">{selectedCase.groundTruth}</strong></span>
                  <span className="text-rose-400">Disfluency: {selectedCase.disfluencyType}</span>
                </div>
              </div>

              {/* Model Outputs Comparison */}
              <div className="space-y-2 font-mono text-xs">
                <span className="text-slate-400 text-[11px] uppercase tracking-wider block">
                  MODEL PREDICTIONS COMPARISON:
                </span>
                {selectedCase.predictions.map((p, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-850 flex items-center justify-between">
                    <span className="text-slate-200">{p.modelName}</span>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-700 text-slate-300">
                        {p.prediction}
                      </span>
                      {p.isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Researcher Interpretation */}
              <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-900/60 text-xs text-indigo-200 font-sans">
                <strong className="font-mono text-indigo-300 block mb-1">
                  RESEARCHER DIAGNOSTIC SUMMARY:
                </strong>
                {selectedCase.researcherInterpretation}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
