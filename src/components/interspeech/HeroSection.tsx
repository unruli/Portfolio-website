"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Code, Quote, ChevronDown, Check, Sparkles, ExternalLink } from "lucide-react";
import { paperMetadata } from "@/data/paperData";

export const HeroSection: React.FC = () => {
  const [copiedBibTeX, setCopiedBibTeX] = useState(false);

  const handleCopyBibTeX = () => {
    navigator.clipboard.writeText(paperMetadata.bibtex);
    setCopiedBibTeX(true);
    setTimeout(() => setCopiedBibTeX(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#0b0f17] text-slate-100">
      {/* Subtle grid background texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badges: Conference & arXiv */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/60 text-xs font-mono text-cyan-400 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Interspeech 2026 Research Benchmark</span>
          </div>

          <a
            href={paperMetadata.links.paper}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/60 hover:bg-red-900/80 text-xs font-mono text-rose-300 transition-colors shadow-sm"
          >
            <span className="font-bold">arXiv:</span>
            <span>2609.07968</span>
            <ExternalLink className="w-3 h-3 text-rose-400" />
          </a>
        </div>

        {/* Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4 font-serif">
            Reasoning Beyond Transcription
          </h1>
          <p className="text-xl sm:text-2xl text-cyan-400 font-light mb-3">
            Can audio-language models reason over disfluent child speech?
          </p>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-mono">
            {paperMetadata.fullPaperTitle}
          </p>
        </div>

        {/* Authors & Affiliation */}
        <div className="text-center mb-10">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm sm:text-base text-slate-200">
            {paperMetadata.authors.map((author, idx) => (
              <span key={idx} className="font-medium">
                {author.link ? (
                  <a
                    href={author.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 underline decoration-cyan-500/40 underline-offset-4 transition-colors"
                  >
                    {author.name}
                  </a>
                ) : (
                  author.name
                )}
                {author.isFirstAuthor && <sup className="text-cyan-400 ml-0.5">*</sup>}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-2 font-mono">{paperMetadata.institution}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <a
            href={paperMetadata.links.paper}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/20 font-mono text-xs font-semibold transition-all shadow-lg shadow-cyan-950/50"
          >
            <FileText className="w-4 h-4" />
            <span>arXiv Paper (PDF)</span>
          </a>
          <a
            href={paperMetadata.links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700 hover:bg-slate-700/80 font-mono text-xs font-semibold transition-all"
          >
            <Code className="w-4 h-4 text-cyan-400" />
            <span>GitHub Code</span>
          </a>
          <button
            onClick={handleCopyBibTeX}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 font-mono text-xs transition-all"
          >
            {copiedBibTeX ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">BibTeX Copied!</span>
              </>
            ) : (
              <>
                <Quote className="w-4 h-4 text-violet-400" />
                <span>Cite (BibTeX)</span>
              </>
            )}
          </button>
        </div>

        {/* Visual Centerpiece: Scientific Pipeline Diagram */}
        <div className="relative rounded-2xl bg-slate-950/80 border border-slate-800/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl max-w-5xl mx-auto overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-3 mb-6">
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>DIAGNOSTIC PIPELINE ARCHITECTURE</span>
            </div>
            <div className="text-[11px] font-mono text-slate-500">
              Zero-Shot Evaluation
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Input Waveform Stream */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>INPUT AUDIO STREAM</span>
                <span className="text-[10px] text-cyan-400">Mixed Acoustic Features</span>
              </div>

              {/* Stylized Animated Waveform Box */}
              <div className="relative h-32 rounded-xl bg-slate-900/90 border border-slate-800 p-3 overflow-hidden flex flex-col justify-between">
                {/* Waveform track with markers */}
                <div className="relative w-full h-16 flex items-center justify-between gap-1 my-auto">
                  {[40, 20, 75, 90, 30, 85, 45, 95, 20, 60, 100, 30, 70, 40, 85, 20, 50, 90, 30, 75, 20, 60, 40].map(
                    (height, i) => {
                      // Color regions: child speech vs adult speech vs disfluency
                      let barColor = "bg-cyan-500";
                      if (i >= 6 && i <= 10) barColor = "bg-rose-500 animate-pulse"; // Disfluency block
                      if (i >= 14 && i <= 18) barColor = "bg-indigo-400"; // Adult interviewer speech

                      return (
                        <motion.div
                          key={i}
                          className={`w-1.5 rounded-full ${barColor}`}
                          animate={{ height: [`${height * 0.3}%`, `${height}%`, `${height * 0.3}%`] }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            delay: i * 0.08,
                            ease: "easeInOut",
                          }}
                        />
                      );
                    }
                  )}
                </div>

                {/* Region Legend Tags */}
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="inline-flex items-center gap-1 text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Child Speech
                  </span>
                  <span className="inline-flex items-center gap-1 text-rose-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> Disfluency
                  </span>
                  <span className="inline-flex items-center gap-1 text-indigo-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Adult Speech
                  </span>
                </div>
              </div>
            </div>

            {/* Propagating Connector Arrow */}
            <div className="lg:col-span-1 flex lg:flex-col items-center justify-center text-cyan-500/80 py-2">
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="font-mono text-xs hidden lg:block"
              >
                &rarr;
              </motion.div>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="font-mono text-xs lg:hidden"
              >
                &darr;
              </motion.div>
            </div>

            {/* Audio Language Model Core */}
            <div className="lg:col-span-3">
              <div className="rounded-xl bg-gradient-to-b from-indigo-950/80 to-slate-900 border border-indigo-500/40 p-5 text-center shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors" />
                <div className="text-[10px] font-mono text-indigo-300 uppercase tracking-wider mb-1">
                  EVALUATED SYSTEM
                </div>
                <div className="text-base font-bold text-white font-mono mb-2">
                  AUDIO LANGUAGE MODEL
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                  Direct cross-modal audio processing without intermediate human-written transcript
                </p>
              </div>
            </div>

            {/* Propagating Connector Arrow */}
            <div className="lg:col-span-1 flex lg:flex-col items-center justify-center text-cyan-500/80 py-2">
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="font-mono text-xs hidden lg:block"
              >
                &rarr;
              </motion.div>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="font-mono text-xs lg:hidden"
              >
                &darr;
              </motion.div>
            </div>

            {/* Three Diagnostic Questions Branch */}
            <div className="lg:col-span-3 space-y-2">
              <div className="text-[10px] font-mono text-slate-400 mb-1">
                DIAGNOSTIC PROBES
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-cyan-900/50 text-xs flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-slate-200 font-medium">“Who is speaking?”</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-indigo-900/50 text-xs flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span className="text-slate-200 font-medium">“What did the child mean?”</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-violet-900/50 text-xs flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <span className="text-slate-200 font-medium">“Can the model reason?”</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="flex flex-col items-center justify-center mt-14 text-slate-500 text-xs font-mono">
          <span className="mb-2">EXPLORE DIAGNOSTIC FINDINGS</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </div>
      </div>
    </section>
  );
};
