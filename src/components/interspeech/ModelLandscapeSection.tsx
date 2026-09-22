"use client";

import React from "react";
import { Cpu, Layers, Radio, Sparkles, ExternalLink } from "lucide-react";

export const ModelLandscapeSection: React.FC = () => {
  const endToEndALMs = [
    {
      name: "Audio Flamingo 3",
      provider: "NVIDIA Research",
      focus: "Multimodal Audio-LM",
      hfUrl: "https://huggingface.co/nvidia/audio-flamingo-3",
    },
    {
      name: "Audio Flamingo 2",
      provider: "NVIDIA Research",
      focus: "Multimodal Audio-LM",
      hfUrl: "https://huggingface.co/nvidia/audio-flamingo-2",
    },
    {
      name: "Kimi-Audio",
      provider: "Moonshot AI",
      focus: "Native Audio LM",
      hfUrl: "https://huggingface.co/moonshotai/Kimi-Audio",
    },
    {
      name: "Qwen2.5-Omni",
      provider: "Alibaba Qwen",
      focus: "Omni Speech-Text LM",
      hfUrl: "https://huggingface.co/Qwen/Qwen2.5-Omni",
    },
    {
      name: "Qwen2-Audio",
      provider: "Alibaba Qwen",
      focus: "Speech LM",
      hfUrl: "https://huggingface.co/Qwen/Qwen2-Audio-7B-Instruct",
    },
    {
      name: "SALMONN",
      provider: "Tsinghua / ByteDance",
      focus: "Speech-Audio LM",
      hfUrl: "https://huggingface.co/tsinghua-ee/SALMONN-7B",
    },
    {
      name: "GAMA",
      provider: "UMD / Speech Lab",
      focus: "General Audio LM",
      hfUrl: "https://huggingface.co/sashankg/GAMA",
    },
    {
      name: "LTU",
      provider: "MIT CSAIL",
      focus: "Listen-Think-Understand",
      hfUrl: "https://huggingface.co/YuanGong/ltu-2",
    },
  ];

  const cascadedASR = [
    {
      name: "Whisper Large-v3",
      provider: "OpenAI",
      role: "Speech Recognition",
      hfUrl: "https://huggingface.co/openai/whisper-large-v3",
    },
    {
      name: "Granite Speech",
      provider: "IBM",
      role: "Speech Recognition",
      hfUrl: "https://huggingface.co/ibm-granite/granite-speech-3.1",
    },
  ];

  const cascadedLLMs = [
    {
      name: "Qwen 2.5",
      provider: "Alibaba",
      role: "Text Reasoning LLM",
      hfUrl: "https://huggingface.co/Qwen/Qwen2.5-72B-Instruct",
    },
    {
      name: "Llama 3.2",
      provider: "Meta",
      role: "Text Reasoning LLM",
      hfUrl: "https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct",
    },
    {
      name: "Mistral",
      provider: "Mistral AI",
      role: "Text Reasoning LLM",
      hfUrl: "https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3",
    },
  ];

  return (
    <section className="py-20 bg-[#0b0f17] border-t border-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">
            05 / Evaluated Systems
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
            Model Landscape & Taxonomy
          </h3>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            A comprehensive evaluation of state-of-the-art Audio Language Models alongside established ASR + Text LLM cascades.
          </p>
          <div className="mt-4 inline-flex items-center space-x-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Zero-shot evaluation with fixed task prompts</span>
          </div>
        </div>

        <div className="space-y-10">
          {/* Direct End-to-End ALMs */}
          <div className="rounded-2xl bg-slate-950 border border-indigo-950/80 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-950 text-indigo-400 flex items-center justify-center border border-indigo-800">
                  <Radio className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-mono">
                    Direct End-to-End Audio Language Models (ALMs)
                  </h4>
                  <p className="text-xs text-slate-400 font-sans">
                    Process continuous acoustic features directly without text transcription
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-amber-400/90 hidden sm:inline-flex items-center gap-1">
                🤗 Direct Hugging Face Links
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
              {endToEndALMs.map((model) => (
                <div
                  key={model.name}
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-1 mb-1">
                      <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {model.name}
                      </span>
                      {model.hfUrl && (
                        <a
                          href={model.hfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-400/80 hover:text-amber-300 transition-colors p-1 rounded bg-slate-950/80 border border-slate-800 shrink-0"
                          title={`View ${model.name} on Hugging Face`}
                        >
                          <span className="text-[9px] font-mono flex items-center gap-0.5">
                            🤗 <ExternalLink className="w-2.5 h-2.5" />
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 flex flex-col gap-0.5 mt-2">
                    <span className="text-indigo-400 font-semibold">{model.provider}</span>
                    <span className="text-slate-500">{model.focus}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cascaded Pipelines */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-cyan-400 flex items-center justify-center border border-slate-800">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-mono">
                  Cascaded Pipeline Components (ASR + Text LLM)
                </h4>
                <p className="text-xs text-slate-400 font-sans">
                  Separate acoustic transcription from downstream textual reasoning
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ASR Models */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                  ASR FRONTENDS
                </span>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                  {cascadedASR.map((asr) => (
                    <div
                      key={asr.name}
                      className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <span className="font-bold text-slate-200 block">{asr.name}</span>
                        <span className="text-[10px] text-slate-500">{asr.provider}</span>
                      </div>
                      {asr.hfUrl && (
                        <a
                          href={asr.hfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-400/80 hover:text-amber-300 p-1 rounded bg-slate-900 border border-slate-800"
                          title={`View ${asr.name} on Hugging Face`}
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Text LLMs */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider block">
                  TEXT REASONING BACKENDS
                </span>
                <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                  {cascadedLLMs.map((llm) => (
                    <div
                      key={llm.name}
                      className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <span className="font-bold text-slate-200 block">{llm.name}</span>
                        <span className="text-[10px] text-slate-500">{llm.provider}</span>
                      </div>
                      {llm.hfUrl && (
                        <a
                          href={llm.hfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-400/80 hover:text-amber-300 p-1 rounded bg-slate-900 border border-slate-800"
                          title={`View ${llm.name} on Hugging Face`}
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
