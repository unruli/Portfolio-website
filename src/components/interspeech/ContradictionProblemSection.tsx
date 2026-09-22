"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertOctagon, ArrowDownRight, Layers, Eye } from "lucide-react";
import { modelEvals } from "@/data/results";

export const ContradictionProblemSection: React.FC = () => {
  const [isDecomposed, setIsDecomposed] = useState(true);

  // Filter specific key models highlighted in paper text
  const keyModels = modelEvals.filter((m) =>
    ["Qwen2.5-Omni", "Kimi-Audio", "Audio Flamingo 3", "SALMONN", "LTU"].includes(m.name)
  );

  return (
    <section className="py-20 bg-[#0b0f17] border-t border-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-800 text-xs font-mono text-rose-400 mb-3">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>Critical Calibration Failure Mode</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white mb-4">
            High Accuracy Can Hide a Failure Mode
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Standard aggregate accuracy metrics mask severe class-wise calibration imbalances. Several state-of-the-art ALMs collapse onto entailment predictions, achieving baseline accuracy while failing entirely on contradiction detection.
          </p>
        </div>

        {/* Interactive Decomposition Toggle */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setIsDecomposed(!isDecomposed)}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500 font-mono text-xs text-cyan-300 transition-all shadow-lg"
          >
            <Eye className="w-4 h-4" />
            <span>{isDecomposed ? "View Aggregate Only" : "Decompose Accuracy into Per-Class"}</span>
          </button>
        </div>

        {/* Heatmap & Per-Class Breakdown Grid */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-mono text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-4 px-4 font-normal">Model System</th>
                  <th className="py-4 px-4 font-normal text-center">Overall Acc</th>
                  <th className="py-4 px-4 font-normal text-center">Macro F1</th>
                  {isDecomposed && (
                    <>
                      <th className="py-4 px-4 font-normal text-center text-emerald-400">
                        Entailment Acc
                      </th>
                      <th className="py-4 px-4 font-normal text-center text-rose-400">
                        Contradiction Acc
                      </th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900">
                {keyModels.map((model) => {
                  // Color scale logic for contradiction accuracy
                  const contAcc = model.contradictionAcc;
                  let contBg = "bg-rose-950/80 text-rose-300 border-rose-800";
                  if (contAcc >= 0.8) contBg = "bg-emerald-950/80 text-emerald-300 border-emerald-800";
                  else if (contAcc >= 0.5) contBg = "bg-amber-950/80 text-amber-300 border-amber-800";

                  return (
                    <tr key={model.name} className="hover:bg-slate-900/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-white flex items-center space-x-2">
                        <span>{model.name}</span>
                        {model.notes && (
                          <span className="text-[10px] text-slate-500 font-normal hidden sm:inline">
                            ({model.notes})
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center font-bold text-slate-200">
                        {(model.overallAccuracy * 100).toFixed(1)}%
                      </td>
                      <td className="py-4 px-4 text-center text-slate-400">
                        {model.macroF1.toFixed(3)}
                      </td>
                      {isDecomposed && (
                        <>
                          <td className="py-4 px-4 text-center">
                            <span className="inline-block px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 font-bold">
                              {(model.entailmentAcc * 100).toFixed(1)}%
                            </span>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <span className={`inline-block px-2.5 py-1 rounded border font-bold ${contBg}`}>
                              {(model.contradictionAcc * 100).toFixed(1)}%
                            </span>
                          </td>
                        </>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Visual Callout for Severe Zero Accuracy */}
          <div className="mt-8 p-5 rounded-xl bg-rose-950/30 border border-rose-900/60 flex items-start space-x-3 text-xs text-rose-200 font-sans">
            <AlertOctagon className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <strong className="font-mono text-rose-300 block mb-1">
                Zero-Contradiction Collapse (SALMONN & LTU = 0.000):
              </strong>
              <span>
                Models like SALMONN and LTU exhibit 98-99% entailment accuracy but achieve exactly 0.0% contradiction accuracy, demonstrating that high aggregate accuracy can stem from extreme prediction bias rather than true semantic comprehension.
              </span>
            </div>
          </div>
        </div>

        {/* Takeaway statement */}
        <div className="mt-8 text-center text-sm font-mono text-cyan-400">
          “Aggregate accuracy alone can obscure semantic calibration failures.”
        </div>
      </div>
    </section>
  );
};
