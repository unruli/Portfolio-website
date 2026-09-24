import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, ExternalLink, Sparkles, FileText, Code } from "lucide-react";
import { paperMetadata } from "@/data/paperData";

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

interface LinkedInShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LinkedInShareModal: React.FC<LinkedInShareModalProps> = ({ isOpen, onClose }) => {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"standard" | "deepdive" | "bullets">("standard");

  const paperUrl = paperMetadata.links.paper;
  const codeUrl = paperMetadata.links.code;
  const projectPageUrl = "https://chibuzorokocha.com/reasoning-beyond-transcription";

  const postTemplates = {
    standard: `🚀 Excited to share our latest research accepted to Interspeech 2026: "Reasoning Beyond Transcription: Audio Language Models on Child Stuttering Speech"!

🎙️ Can modern Audio Language Models (ALMs) directly reason over child speech when the speech is disfluent? 

In this work, we present a diagnostic benchmark evaluating state-of-the-art ALMs (Gemini, Qwen, Ultravox) and ASR + LLM cascades on disfluent child speech from FluencyBank. 

Rather than checking simple transcription accuracy, we measure end-to-end semantic reasoning through child speech summarization and speech entailment.

📄 Paper on arXiv: ${paperUrl}
💻 Code & Benchmark: ${codeUrl}
🌐 Project Page: ${projectPageUrl}

Huge thanks to my co-authors Christan Grant & Zoey Liu, and the UF Data Studio!

#SpeechAI #AudioLM #Interspeech2026 #AI #SpeechProcessing #MachineLearning #UFDataStudio`,

    deepdive: `🧠 "Reasoning Beyond Transcription: Audio Language Models on Child Stuttering Speech" (Interspeech 2026)

Most speech models are built for fluent adult speech. But how do Audio Language Models (ALMs) perform on child speech with stuttering disfluencies (repetitions, prolongations, blocks) and adult interviewer interference?

Key Diagnostic Insights:
1️⃣ Direct ALMs face major performance degradation on complex semantic reasoning tasks under high disfluency density.
2️⃣ ASR + LLM cascades outperform direct ALMs on verbatim recall, but suffer when ASR error propagation distorts disfluent speech.
3️⃣ Diagnostic probes reveal ALMs frequently misattribute speaker turn-taking between the child and adult interviewer.

Check out our full paper and code:
📄 arXiv: ${paperUrl}
💻 GitHub: ${codeUrl}
🌐 Live Benchmark Demo: ${projectPageUrl}

Co-authors: Chibuzor Okocha, Christan Grant, Zoey Liu
University of Florida

#AudioLanguageModels #SpeechAI #Interspeech2026 #Disfluency #DeepLearning #Research`,

    bullets: `📌 NEW PAPER & BENCHMARK: Reasoning Beyond Transcription (Interspeech 2026)

• Focus: Evaluating Audio Language Models on disfluent child speech (FluencyBank corpus).
• Tasks: Child-focused summarization, speech entailment, & disfluency stress-testing.
• Models Evaluated: Gemini 1.5, Qwen2-Audio, LALMs & ASR+LLM cascades.

Links:
🔗 arXiv Paper: ${paperUrl}
🔗 GitHub Code: ${codeUrl}
🔗 Interactive Project Page: ${projectPageUrl}

#SpeechAI #AudioLM #Interspeech2026 #UF`,
  };

  const handleCopy = (formatKey: "standard" | "deepdive" | "bullets") => {
    navigator.clipboard.writeText(postTemplates[formatKey]);
    setCopiedFormat(formatKey);
    setTimeout(() => setCopiedFormat(null), 2500);
  };

  const handleOpenLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(paperUrl)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl rounded-2xl bg-[#0d131f] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl z-10 text-slate-100 overflow-hidden"
        >
          {/* Top accent glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center">
              <LinkedInIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif text-white flex items-center gap-2">
                Share on LinkedIn
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </h3>
              <p className="text-xs font-mono text-slate-400">
                1-Click post snippets & links for paper launch
              </p>
            </div>
          </div>

          {/* Quick Direct Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <button
              onClick={handleOpenLinkedIn}
              className="flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold transition-all shadow-lg shadow-blue-950/50"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>Launch LinkedIn Share</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </button>

            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-mono text-xs font-semibold transition-all"
            >
              <Code className="w-4 h-4 text-cyan-400" />
              <span>View GitHub Code</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Tab Selector */}
          <div className="flex border-b border-slate-800 mb-4">
            <button
              onClick={() => setActiveTab("standard")}
              className={`pb-2.5 px-4 text-xs font-mono font-medium transition-colors border-b-2 ${
                activeTab === "standard"
                  ? "border-cyan-400 text-cyan-400"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              Standard Post
            </button>
            <button
              onClick={() => setActiveTab("deepdive")}
              className={`pb-2.5 px-4 text-xs font-mono font-medium transition-colors border-b-2 ${
                activeTab === "deepdive"
                  ? "border-cyan-400 text-cyan-400"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              Research Deep-Dive
            </button>
            <button
              onClick={() => setActiveTab("bullets")}
              className={`pb-2.5 px-4 text-xs font-mono font-medium transition-colors border-b-2 ${
                activeTab === "bullets"
                  ? "border-cyan-400 text-cyan-400"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              Bullet Highlights
            </button>
          </div>

          {/* Post Preview Content Box */}
          <div className="relative rounded-xl bg-slate-950 border border-slate-800 p-4 mb-4">
            <textarea
              readOnly
              value={postTemplates[activeTab]}
              className="w-full h-44 bg-transparent text-xs text-slate-200 font-sans leading-relaxed resize-none focus:outline-none scrollbar-thin scrollbar-thumb-slate-800"
            />
            <button
              onClick={() => handleCopy(activeTab)}
              className="absolute bottom-3 right-3 inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-800/80 hover:bg-cyan-900 font-mono text-xs transition-colors shadow-md"
            >
              {copiedFormat === activeTab ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Post Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Post Text</span>
                </>
              )}
            </button>
          </div>

          {/* Links Summary Footer */}
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <FileText className="w-3.5 h-3.5 text-cyan-400" /> arXiv ID: <strong className="text-cyan-300">2609.07968</strong>
            </span>
            <a
              href={paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>{paperUrl}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
