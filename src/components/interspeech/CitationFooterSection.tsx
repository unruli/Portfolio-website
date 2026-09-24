"use client";

import React, { useState } from "react";
import { Copy, Check, FileText, Code, ExternalLink, ShieldCheck } from "lucide-react";
import { paperMetadata } from "@/data/paperData";

export const CitationFooterSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(paperMetadata.bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="py-20 bg-[#04070d] border-t border-slate-900 text-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left: Paper info & CTAs */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
                ACADEMIC CITATION & LINKS
              </span>
              <h3 className="text-2xl font-bold font-serif text-white mb-2">
                {paperMetadata.title}
              </h3>
              <p className="text-xs font-mono text-slate-400">
                {paperMetadata.institution} &bull; {paperMetadata.conference}
              </p>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <a
                href={paperMetadata.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/60 transition-colors text-slate-200"
              >
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Read Paper on arXiv (2609.07968)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={paperMetadata.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/60 transition-colors text-slate-200"
              >
                <div className="flex items-center space-x-2">
                  <Code className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Benchmark Code & Repository</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            {/* Dataset Acknowledgement */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-850 text-xs font-mono text-slate-400 space-y-2">
              <div className="flex items-center space-x-2 text-cyan-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Dataset Acknowledgement</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Evaluations utilize the <strong>{paperMetadata.corpusName}</strong> corpus, hosted via <strong>{paperMetadata.corpusSource}</strong>.
              </p>
              <a
                href={paperMetadata.links.dataset}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-[10px] text-cyan-400 hover:underline"
              >
                <span>Access TalkBank / FluencyBank</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right: BibTeX Code Block */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 shadow-xl relative">
              <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4 font-mono text-xs">
                <span className="text-slate-400 font-bold">BibTeX Citation</span>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy BibTeX</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-900/90 text-slate-300 font-mono text-xs overflow-x-auto border border-slate-850 leading-relaxed">
                <code>{paperMetadata.bibtex}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            &copy; {paperMetadata.year} {paperMetadata.institution} &bull; Speech & Audio AI Research
          </div>
          <div>
            Design: Senior Research Engineering Specification
          </div>
        </div>
      </div>
    </footer>
  );
};
