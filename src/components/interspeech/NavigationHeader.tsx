"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Code, FileText } from "lucide-react";
import { paperMetadata } from "@/data/paperData";

export const NavigationHeader: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2">
        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
          <Link
            href="/"
            className="flex items-center space-x-1 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Chibuzor</span>
          </Link>
          <span className="text-slate-700 hidden xs:inline">/</span>
          <div className="flex items-center space-x-1.5 min-w-0">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 shrink-0">
              Interspeech 2026
            </span>
            <span className="text-xs font-medium text-slate-200 hidden lg:inline truncate max-w-xs">
              Reasoning Beyond Transcription
            </span>
          </div>
        </div>

        <nav className="flex items-center space-x-1.5 sm:space-x-2.5 text-xs shrink-0">
          <a
            href="#demo"
            className="hidden md:inline-flex items-center space-x-1 text-slate-300 hover:text-cyan-400 px-2.5 py-1.5 rounded transition-colors"
          >
            <span>Demo</span>
          </a>
          <a
            href="#results"
            className="hidden md:inline-flex items-center space-x-1 text-slate-300 hover:text-cyan-400 px-2.5 py-1.5 rounded transition-colors"
          >
            <span>Results</span>
          </a>
          <a
            href={paperMetadata.links.paper}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 font-mono text-[11px] transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>arXiv</span>
          </a>
          <a
            href={paperMetadata.links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 font-mono text-[11px] transition-all"
          >
            <Code className="w-3.5 h-3.5 text-cyan-400" />
            <span>GitHub</span>
          </a>
        </nav>
      </div>

      {/* Scroll progress bar */}
      <div className="w-full bg-slate-900/50 h-[2px]">
        <div
          className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 h-[2px] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};
