"use client";

import React, { useState } from "react";
import { FileText, Check, Award, AlertCircle } from "lucide-react";
import { summarizationResults } from "@/data/results";
import { summarizationDemos } from "@/data/demos";

export const SummarizationSection: React.FC = () => {
  const activeDemo = summarizationDemos[0];

  return (
    <section className="py-20 bg-[#0b0f17] border-t border-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">
            09 / Summarization Benchmark
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
            Child-Focused Summarization Metrics
          </h3>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Evaluating free-form generation quality across Fluency, Faithfulness, and Purity (resisting adult interviewer prompt leakage).
          </p>
        </div>

        {/* Multi-Model Comparison Widget */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl mb-12">
          <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-6 font-mono text-xs">
            <span className="text-cyan-400 font-bold">{activeDemo.title}</span>
            <span className="text-slate-500">{activeDemo.speakerInfo}</span>
          </div>

          {/* Reference Oracle Summary */}
          <div className="p-5 rounded-xl bg-slate-900/90 border border-cyan-900/60 mb-6">
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-2">
              HUMAN REFERENCE / ORACLE SUMMARY
            </span>
            <p className="text-sm text-slate-200 font-serif leading-relaxed italic">
              “{activeDemo.referenceSummary}”
            </p>
          </div>

          {/* Generated Model Summaries */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              EVALUATED MODEL SUMMARIES & METRICS:
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              {activeDemo.modelSummaries.map((m) => (
                <div
                  key={m.modelName}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-white">{m.modelName}</span>
                      {["Audio Flamingo 3", "Kimi-Audio"].includes(m.modelName) && (
                        <span className="px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 text-[9px]">
                          Top Performer
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                      “{m.summaryText}”
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-slate-950 text-[10px]">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Fluency:</span>
                      <span className="text-cyan-400 font-bold">{m.fluencyBadge}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Faithfulness:</span>
                      <span className="text-indigo-400 font-bold">{m.faithfulnessBadge}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Purity:</span>
                      <span className="text-emerald-400 font-bold">{m.purityBadge}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Paper Result Highlight */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-indigo-900/60 flex items-center space-x-4">
          <Award className="w-6 h-6 text-indigo-400 shrink-0" />
          <div className="text-xs text-slate-300 leading-relaxed font-sans">
            <strong className="font-mono text-white block mb-0.5">
              Strongest Reported Summarization Systems:
            </strong>
            <span>
              <strong>Audio Flamingo 3</strong> and <strong>Kimi-Audio</strong> demonstrated the highest overall summarization quality, maintaining high semantic faithfulness while successfully isolating the child's intentions from adult interviewer scaffolding.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
