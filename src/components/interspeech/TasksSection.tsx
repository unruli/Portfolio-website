"use client";

import React from "react";
import { FileText, CheckCircle2, AlertTriangle, XCircle, Mic, ArrowRight } from "lucide-react";

export const TasksSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0b0f17] text-slate-100 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">
            02 / Evaluation Tasks
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
            Two Benchmark Tasks for Semantic Evaluation
          </h3>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Instead of standard word error rate (WER), we formulate two end-to-end tasks to probe whether models truly reason over disfluent spoken audio.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Task 1: Child-Focused Summarization */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-900/60 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 font-mono text-xs font-semibold">
                  TASK 1
                </span>
                <span className="text-xs font-mono text-slate-500">Free-Form Generation</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 font-serif">
                Child-Focused Semantic Summarization
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Given a raw audio recording of a child talking (often mixed with an interviewer), generate a concise summary strictly representing the child's intentions while filtering out adult prompt leakage.
              </p>

              {/* Input -> Prompt -> Output Specs */}
              <div className="space-y-3 mb-6 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start space-x-3">
                  <span className="text-slate-500 min-w-[70px]">Input:</span>
                  <span className="text-slate-200">Mixed-speaker raw audio file (no transcript)</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start space-x-3">
                  <span className="text-cyan-400 min-w-[70px]">Prompt:</span>
                  <span className="text-slate-300 italic">
                    “Listen to the audio. Summarize what the child intended to convey, ignoring interviewer questions.”
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-cyan-900/40 flex items-start space-x-3">
                  <span className="text-emerald-400 min-w-[70px]">Output:</span>
                  <span className="text-emerald-300">Child-centered summary string</span>
                </div>
              </div>
            </div>

            {/* Evaluation Concepts */}
            <div className="pt-4 border-t border-slate-900">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                Evaluation Metrics
              </span>
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-cyan-400 block font-bold">Fluency</span>
                  <span className="text-[10px] text-slate-400">Readability</span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-indigo-400 block font-bold">Faithfulness</span>
                  <span className="text-[10px] text-slate-400">Semantic match</span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-violet-400 block font-bold">Purity</span>
                  <span className="text-[10px] text-slate-400">No adult leakage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Task 2: Child Speech Entailment */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-900/60 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-indigo-950 text-indigo-400 border border-indigo-800 font-mono text-xs font-semibold">
                  TASK 2
                </span>
                <span className="text-xs font-mono text-slate-500">Categorical Reasoning</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 font-serif">
                Child Speech Entailment (NLI)
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Given raw child audio (premise) and a textual hypothesis, determine whether the hypothesis is entailed by, neutral to, or contradicted by the child's spoken message.
              </p>

              {/* Input -> Hypothesis -> 3 Class Badges */}
              <div className="space-y-3 mb-6 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start space-x-3">
                  <span className="text-slate-500 min-w-[70px]">Input:</span>
                  <span className="text-slate-200">Raw spoken audio + textual hypothesis</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start space-x-3">
                  <span className="text-indigo-400 min-w-[70px]">Goal:</span>
                  <span className="text-slate-300">Classify relationship into 1 of 3 categories</span>
                </div>
              </div>

              {/* 3 Distinct Entailment Output Labels */}
              <div className="grid grid-cols-3 gap-3 mb-6 font-mono text-xs">
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-5 h-5 mb-1 text-emerald-400" />
                  <span className="font-bold">ENTAILMENT</span>
                  <span className="text-[9px] text-emerald-400/80 mt-1">True premise match</span>
                </div>
                <div className="p-3 rounded-lg bg-amber-950/60 border border-amber-500/50 text-amber-300 text-center flex flex-col items-center">
                  <AlertTriangle className="w-5 h-5 mb-1 text-amber-400" />
                  <span className="font-bold">NEUTRAL</span>
                  <span className="text-[9px] text-amber-400/80 mt-1">Unsubstantiated</span>
                </div>
                <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/50 text-rose-300 text-center flex flex-col items-center">
                  <XCircle className="w-5 h-5 mb-1 text-rose-400" />
                  <span className="font-bold">CONTRADICTION</span>
                  <span className="text-[9px] text-rose-400/80 mt-1">Directly false</span>
                </div>
              </div>
            </div>

            {/* Note on integrity */}
            <div className="pt-4 border-t border-slate-900">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                Benchmark Standard
              </span>
              <p className="text-[11px] text-slate-400 mt-1 font-mono">
                Standardized prompts ensure zero-shot evaluation without task-specific fine-tuning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
