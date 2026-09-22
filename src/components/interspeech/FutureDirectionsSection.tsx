"use client";

import React from "react";
import { Compass, Lightbulb, ShieldCheck, Cpu, ArrowUpRight, Zap } from "lucide-react";

export const FutureDirectionsSection: React.FC = () => {
  const directions = [
    {
      num: "01",
      title: "Disfluency-Aware Audio Pre-training",
      description:
        "Incorporating clinical disfluent child speech acoustics (repetitions, prolongations, blocks) directly into self-supervised audio encoder pre-training loss functions rather than treating them as out-of-distribution noise.",
      icon: Cpu,
      accent: "border-cyan-900/60 bg-cyan-950/20 text-cyan-400",
      tag: "Acoustic Modeling",
    },
    {
      num: "02",
      title: "Calibrated Entailment & Contrastive Alignment",
      description:
        "Mitigating severe entailment overprediction bias through Direct Preference Optimization (DPO) and class-balanced contrastive alignment to ensure robust contradiction classification.",
      icon: Lightbulb,
      accent: "border-rose-900/60 bg-rose-950/20 text-rose-400",
      tag: "Calibration & DPO",
    },
    {
      num: "03",
      title: "Target-Speaker Acoustic Extraction",
      description:
        "Integrating frontend acoustic speaker separation and diarization directly into the audio encoder representations to prevent adult interviewer prompt leakage in mixed-speaker clinical interviews.",
      icon: ShieldCheck,
      accent: "border-indigo-900/60 bg-indigo-950/20 text-indigo-400",
      tag: "Speaker Diarization",
    },
    {
      num: "04",
      title: "Long-Span Temporal Block Retention",
      description:
        "Developing continuous temporal memory representations capable of maintaining narrative state across extended silent stuttering blocks and multi-second disfluent pauses.",
      icon: Zap,
      accent: "border-violet-900/60 bg-violet-950/20 text-violet-400",
      tag: "Context Memory",
    },
  ];

  return (
    <section className="py-20 bg-[#0b0f17] border-t border-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-mono text-cyan-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Research Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
            Next Steps & Future Research Directions
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Addressing current ALM diagnostic vulnerabilities requires joint acoustic modeling, calibration refinement, and speaker-targeted processing.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {directions.map((d) => {
            const IconComponent = d.icon;
            return (
              <div
                key={d.num}
                className={`p-6 sm:p-8 rounded-2xl border bg-slate-950 flex flex-col justify-between hover:border-slate-700 transition-colors ${d.accent}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-[11px] font-bold">
                      {d.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-bold">
                      PILLAR {d.num}
                    </span>
                  </div>

                  <div className="flex items-start space-x-3 mb-3">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white font-serif leading-snug">
                      {d.title}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans pl-11">
                    {d.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Open Benchmark Frontier</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
