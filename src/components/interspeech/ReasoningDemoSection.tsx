"use client";

import React, { useState } from "react";
import { Play, Pause, Volume2, CheckCircle2, XCircle, AlertCircle, Info, HelpCircle, ShieldAlert } from "lucide-react";
import { demoItems, DemoItem } from "@/data/demos";

export const ReasoningDemoSection: React.FC = () => {
  const [selectedDemoIndex, setSelectedDemoIndex] = useState(0);
  const [userGuess, setUserGuess] = useState<"ENTAILMENT" | "NEUTRAL" | "CONTRADICTION" | null>(null);
  const [hasRevealed, setHasRevealed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeDemo: DemoItem = demoItems[selectedDemoIndex];

  const handleSelectChoice = (choice: "ENTAILMENT" | "NEUTRAL" | "CONTRADICTION") => {
    setUserGuess(choice);
    setHasRevealed(true);
  };

  const handleReset = () => {
    setUserGuess(null);
    setHasRevealed(false);
    setIsPlaying(false);
  };

  return (
    <section id="demo" className="py-20 bg-[#070a10] border-t border-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-mono text-cyan-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Interactive Benchmark Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
            Can You Reason About This Audio?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Test your intuition against state-of-the-art Audio Language Models. Listen to the spoken prompt (or inspect the schematic context), evaluate the hypothesis, and see where ALMs succeed or fail.
          </p>
        </div>

        {/* Placeholder Privacy Notice Banner */}
        {activeDemo.isPlaceholder && (
          <div className="mb-8 p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-start space-x-3 text-xs font-mono text-amber-200">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-0.5 text-amber-300">
                RESEARCH PRIVACY & IRB COMPLIANCE NOTICE:
              </span>
              <span>
                To protect child participant privacy, raw clinical audio recordings are restricted. The interactive widget operates in a schematic demonstration mode using placeholder diagnostic profiles. Replace only with authorized public assets.
              </span>
            </div>
          </div>
        )}

        {/* Demo Selection Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800 max-w-full">
          {demoItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedDemoIndex(idx);
                handleReset();
              }}
              className={`px-3 sm:px-4 py-2 rounded-lg font-mono text-xs transition-all whitespace-nowrap border shrink-0 ${
                selectedDemoIndex === idx
                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/60 shadow-lg shadow-cyan-950/50"
                  : "bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Workspace */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Input Audio Waveform & Context */}
            <div className="lg:col-span-6 space-y-6">
              {/* Waveform Player Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Volume2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-xs font-mono text-slate-300 font-bold truncate">
                      {activeDemo.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 shrink-0">
                    Difficulty: {activeDemo.difficulty}
                  </span>
                </div>

                {/* Simulated Audio Waveform Display */}
                <div className="h-20 sm:h-24 bg-slate-950 rounded-lg border border-slate-800 p-3 flex items-center justify-center relative overflow-hidden mb-4">
                  {/* Waveform bars */}
                  <div className="w-full flex items-center justify-between gap-0.5 sm:gap-1 opacity-70">
                    {[20, 40, 60, 80, 40, 30, 90, 100, 70, 50, 20, 80, 60, 40, 90, 70, 30, 50, 80, 40, 20, 60, 90, 30].map(
                      (h, i) => (
                        <div
                          key={i}
                          className={`w-1 rounded-full ${
                            isPlaying ? "bg-cyan-400 animate-pulse" : "bg-slate-700"
                          }`}
                          style={{ height: `${h}%` }}
                        />
                      )
                    )}
                  </div>

                  {/* Play Overlay / State */}
                  <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px] flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="px-4 py-2 rounded-lg bg-slate-800 text-cyan-400 border border-cyan-800/60 hover:bg-slate-700 transition-colors flex items-center space-x-2 text-xs font-mono"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      <span>{isPlaying ? "Pause Audio" : "Play Sample Audio"}</span>
                    </button>
                  </div>
                </div>

                {/* Metadata details */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400">
                  <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-500 block">Disfluency Type:</span>
                    <span className="text-rose-400">{activeDemo.disfluencyType}</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-500 block">Speaker Setup:</span>
                    <span className="text-indigo-300">{activeDemo.speakerType}</span>
                  </div>
                </div>
              </div>

              {/* Hypothesis Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-indigo-950">
                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider block mb-2">
                  EVALUATION HYPOTHESIS STATEMENT
                </span>
                <p className="text-base font-serif text-white italic bg-slate-950 p-4 rounded-lg border border-slate-800">
                  “{activeDemo.hypothesis}”
                </p>
              </div>
            </div>

            {/* Right: Decision Panel & Prediction Breakdown */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-3">
                  YOUR DIAGNOSTIC JUDGMENT:
                </span>

                {/* 3 Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <button
                    onClick={() => handleSelectChoice("ENTAILMENT")}
                    className={`p-3 rounded-xl font-mono text-xs font-bold border transition-all flex flex-col items-center gap-1 ${
                      userGuess === "ENTAILMENT"
                        ? "bg-emerald-950 text-emerald-300 border-emerald-500 shadow-lg shadow-emerald-950/50"
                        : "bg-slate-900 text-slate-300 border-slate-800 hover:border-emerald-800"
                    }`}
                  >
                    <span>ENTAILMENT</span>
                  </button>

                  <button
                    onClick={() => handleSelectChoice("NEUTRAL")}
                    className={`p-3 rounded-xl font-mono text-xs font-bold border transition-all flex flex-col items-center gap-1 ${
                      userGuess === "NEUTRAL"
                        ? "bg-amber-950 text-amber-300 border-amber-500 shadow-lg shadow-amber-950/50"
                        : "bg-slate-900 text-slate-300 border-slate-800 hover:border-amber-800"
                    }`}
                  >
                    <span>NEUTRAL</span>
                  </button>

                  <button
                    onClick={() => handleSelectChoice("CONTRADICTION")}
                    className={`p-3 rounded-xl font-mono text-xs font-bold border transition-all flex flex-col items-center gap-1 ${
                      userGuess === "CONTRADICTION"
                        ? "bg-rose-950 text-rose-300 border-rose-500 shadow-lg shadow-rose-950/50"
                        : "bg-slate-900 text-slate-300 border-slate-800 hover:border-rose-800"
                    }`}
                  >
                    <span>CONTRADICTION</span>
                  </button>
                </div>

                {/* Ground Truth & Model Output Reveal */}
                {hasRevealed ? (
                  <div className="space-y-4 animate-fadeIn">
                    {/* Ground truth result card */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-cyan-800/80 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 block">
                          BENCHMARK GROUND TRUTH:
                        </span>
                        <span className="text-sm font-bold font-mono text-cyan-300">
                          {activeDemo.groundTruth}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-slate-400 block">YOUR RESULT:</span>
                        <span
                          className={`text-xs font-bold font-mono ${
                            userGuess === activeDemo.groundTruth ? "text-emerald-400" : "text-rose-400"
                          }`}
                        >
                          {userGuess === activeDemo.groundTruth ? "✓ CORRECT" : "✕ INCORRECT"}
                        </span>
                      </div>
                    </div>

                    {/* Evaluated ALM Systems Predictions List */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        EVALUATED MODEL PREDICTIONS:
                      </span>

                      {activeDemo.predictions.map((pred, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs font-mono"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-slate-200 font-semibold">{pred.modelName}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                pred.prediction === "ENTAILMENT"
                                  ? "bg-emerald-950 text-emerald-300 border border-emerald-800"
                                  : pred.prediction === "NEUTRAL"
                                  ? "bg-amber-950 text-amber-300 border border-amber-800"
                                  : "bg-rose-950 text-rose-300 border border-rose-800"
                              }`}
                            >
                              {pred.prediction}
                            </span>
                            {pred.isCorrect ? (
                              <span className="text-emerald-400 font-bold flex items-center gap-1 text-[11px]">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                              </span>
                            ) : (
                              <span className="text-rose-400 font-bold flex items-center gap-1 text-[11px]">
                                <XCircle className="w-3.5 h-3.5" /> Failed
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Researcher Interpretation */}
                    <div className="p-3.5 rounded-lg bg-indigo-950/40 border border-indigo-900/60 text-xs text-indigo-200 font-sans">
                      <span className="font-bold font-mono text-indigo-300 block mb-1">
                        RESEARCHER DIAGNOSTIC INTERPRETATION:
                      </span>
                      {activeDemo.researcherInterpretation}
                    </div>
                  </div>
                ) : (
                  <div className="p-8 rounded-xl bg-slate-900/50 border border-slate-800 border-dashed text-center text-slate-400 text-xs font-mono">
                    Select a class above to reveal ground truth and model predictions.
                  </div>
                )}
              </div>

              {hasRevealed && (
                <button
                  onClick={handleReset}
                  className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 font-mono text-xs border border-slate-800 transition-colors"
                >
                  Reset / Try Another Selection
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
