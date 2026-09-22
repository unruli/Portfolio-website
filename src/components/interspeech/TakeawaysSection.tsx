"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Sparkles, AlertTriangle } from "lucide-react";

export const TakeawaysSection: React.FC = () => {
  const conclusions = [
    {
      num: "01",
      title: "Useful High-Level Extraction Capabilities",
      text: "Modern Audio Language Models can extract useful high-level semantic meaning directly from disfluent child speech without requiring clean intermediate text transcripts.",
      color: "border-cyan-900/60 bg-cyan-950/20 text-cyan-400",
    },
    {
      num: "02",
      title: "Acoustic & Speaker Interference Bottlenecks",
      text: "Mixed adult-interviewer dialogue and disfluent acoustic inputs (repetitions, blocks) remain primary sources of failure, where cascades with strong ASR still hold an advantage.",
      color: "border-indigo-900/60 bg-indigo-950/20 text-indigo-400",
    },
    {
      num: "03",
      title: "Class-Wise Calibration Bias Hidden by Accuracy",
      text: "Aggregate accuracy obscures severe calibration collapse. Models frequently overpredict entailment (achieving up to 99% entailment accuracy while scoring 0% on contradictions).",
      color: "border-rose-900/60 bg-rose-950/20 text-rose-400",
    },
  ];

  return (
    <section className="py-20 bg-[#070a10] border-t border-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">
            10 / Summary & Conclusions
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
            Key Research Takeaways
          </h3>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Three core conclusions from our diagnostic evaluation on child stuttering speech.
          </p>
        </div>

        {/* 3 Conclusion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {conclusions.map((c) => (
            <div
              key={c.num}
              className={`p-6 sm:p-8 rounded-2xl border bg-slate-950 flex flex-col justify-between ${c.color}`}
            >
              <div>
                <span className="text-xs font-mono font-bold block mb-4 tracking-widest">
                  TAKEAWAY {c.num}
                </span>
                <h4 className="text-lg font-bold text-white font-serif mb-3 leading-snug">
                  {c.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{c.text}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Interspeech Benchmark</span>
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Concluding Hero Banner Statement */}
        <div className="rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-950 to-cyan-950 border border-cyan-500/40 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-cyan-500/5 backdrop-blur-[1px]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-4">
              CENTRAL FINDING
            </span>
            <blockquote className="text-2xl sm:text-4xl font-bold font-serif text-white tracking-tight leading-snug mb-6">
              “Reasoning beyond transcription requires more than hearing the words.”
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-300 font-mono">
              Interspeech 2026 &bull; Audio Language Models on Child Stuttering Speech
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
