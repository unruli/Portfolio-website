import { Metadata } from "next";
import { paperMetadata } from "@/data/paperData";
import { NavigationHeader } from "@/components/interspeech/NavigationHeader";
import { HeroSection } from "@/components/interspeech/HeroSection";
import { ProblemSection } from "@/components/interspeech/ProblemSection";
import { TasksSection } from "@/components/interspeech/TasksSection";
import { ReasoningDemoSection } from "@/components/interspeech/ReasoningDemoSection";
import { ExperimentalFrameworkSection } from "@/components/interspeech/ExperimentalFrameworkSection";
import { BenchmarkGlanceSection } from "@/components/interspeech/BenchmarkGlanceSection";
import { ModelLandscapeSection } from "@/components/interspeech/ModelLandscapeSection";
import { HeadlineResultSection } from "@/components/interspeech/HeadlineResultSection";
import { ContradictionProblemSection } from "@/components/interspeech/ContradictionProblemSection";
import { ReasoningDifficultySection } from "@/components/interspeech/ReasoningDifficultySection";
import { DisfluencyStressTestSection } from "@/components/interspeech/DisfluencyStressTestSection";
import { FailureExplorerSection } from "@/components/interspeech/FailureExplorerSection";
import { SummarizationSection } from "@/components/interspeech/SummarizationSection";
import { FutureDirectionsSection } from "@/components/interspeech/FutureDirectionsSection";
import { TakeawaysSection } from "@/components/interspeech/TakeawaysSection";
import { CitationFooterSection } from "@/components/interspeech/CitationFooterSection";

export const metadata: Metadata = {
  title: "Reasoning Beyond Transcription | Audio Language Models on Child Stuttering Speech",
  description:
    "A diagnostic benchmark evaluating modern Audio Language Models (ALMs) and ASR+LLM cascades on disfluent child speech. Interspeech 2026 research project page.",
  keywords: [
    "Audio Language Models",
    "Child Stuttering Speech",
    "Disfluency",
    "Speech Reasoning",
    "Interspeech 2026",
    "Speech AI",
    "FluencyBank",
    "University of Florida",
  ],
  openGraph: {
    title: "Reasoning Beyond Transcription: Audio Language Models on Child Stuttering Speech",
    description:
      "Can modern audio-language models directly understand and reason over child speech when the speech is disfluent?",
    images: [{ url: "/images/hero-waveform.svg", width: 1200, height: 300 }],
    type: "article",
  },
};

export default function ReasoningBeyondTranscriptionPage() {
  return (
    <main className="min-h-screen bg-[#0b0f17] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <NavigationHeader />
      <HeroSection />
      <ProblemSection />
      <TasksSection />
      <ReasoningDemoSection />
      <ExperimentalFrameworkSection />
      <BenchmarkGlanceSection />
      <ModelLandscapeSection />
      <HeadlineResultSection />
      <ContradictionProblemSection />
      <ReasoningDifficultySection />
      <DisfluencyStressTestSection />
      <FailureExplorerSection />
      <SummarizationSection />
      <FutureDirectionsSection />
      <TakeawaysSection />
      <CitationFooterSection />
    </main>
  );
}
