// All metrics extracted directly from Interspeech manuscript tables.
// Any values marked with // VERIFY_BEFORE_PUBLICATION require confirmation prior to public deployment.

export interface BenchmarkStats {
  numChildren: number;
  numRecordings: number;
  singleSpeakerRecordings: number;
  mixedSpeakerRecordings: number;
  recordingDurationMinutes: string;
  tasks: string[];
  corpus: string;
}

export const benchmarkStats: BenchmarkStats = {
  numChildren: 22,
  numRecordings: 44,
  singleSpeakerRecordings: 22,
  mixedSpeakerRecordings: 22,
  recordingDurationMinutes: "5-10 mins",
  tasks: ["Child-Focused Summarization", "Child Speech Entailment"],
  corpus: "Voices of Children Who Stutter (FluencyBank)",
};

export interface HeadlineResult {
  alm: {
    name: string;
    accuracy: number;
    macroF1: number;
  };
  cascade: {
    name: string;
    accuracy: number;
    macroF1: number;
  };
  takeaway: string;
}

export const headlineResult: HeadlineResult = {
  alm: {
    name: "Qwen2.5-Omni",
    accuracy: 0.681,
    macroF1: 0.683,
  },
  cascade: {
    name: "Whisper + Qwen 2.5",
    accuracy: 0.739,
    macroF1: 0.737,
  },
  takeaway:
    "Providing a strong text LLM with a transcript recovers substantial semantic reasoning performance (+5.8% accuracy), indicating that modern ALM failures stem primarily from disfluent acoustic/speaker processing rather than semantic reasoning capabilities.",
};

export interface ModelEval {
  name: string;
  type: "ALM" | "Cascade";
  overallAccuracy: number;
  macroF1: number;
  entailmentAcc: number;
  neutralAcc?: number; // VERIFY_BEFORE_PUBLICATION
  contradictionAcc: number;
  notes?: string;
}

export const modelEvals: ModelEval[] = [
  {
    name: "Whisper + Qwen 2.5 (Cascade)",
    type: "Cascade",
    overallAccuracy: 0.739,
    macroF1: 0.737,
    entailmentAcc: 0.840, // VERIFY_BEFORE_PUBLICATION
    neutralAcc: 0.720,    // VERIFY_BEFORE_PUBLICATION
    contradictionAcc: 0.660,// VERIFY_BEFORE_PUBLICATION
    notes: "Top-performing cascade architecture",
  },
  {
    name: "Qwen2.5-Omni",
    type: "ALM",
    overallAccuracy: 0.681,
    macroF1: 0.683,
    entailmentAcc: 0.812,
    neutralAcc: 0.680,    // VERIFY_BEFORE_PUBLICATION
    contradictionAcc: 0.550,
    notes: "Top-performing direct Audio Language Model",
  },
  {
    name: "Kimi-Audio",
    type: "ALM",
    overallAccuracy: 0.647,
    macroF1: 0.582,
    entailmentAcc: 0.754,
    neutralAcc: 0.375,    // VERIFY_BEFORE_PUBLICATION
    contradictionAcc: 0.811,
    notes: "Strong contradiction calibration",
  },
  {
    name: "Audio Flamingo 3",
    type: "ALM",
    overallAccuracy: 0.386,
    macroF1: 0.280,       // VERIFY_BEFORE_PUBLICATION
    entailmentAcc: 0.971,
    contradictionAcc: 0.119,
    notes: "Extreme entailment bias",
  },
  {
    name: "Audio Flamingo 2",
    type: "ALM",
    overallAccuracy: 0.370, // VERIFY_BEFORE_PUBLICATION
    macroF1: 0.260,       // VERIFY_BEFORE_PUBLICATION
    entailmentAcc: 0.910, // VERIFY_BEFORE_PUBLICATION
    contradictionAcc: 0.080,// VERIFY_BEFORE_PUBLICATION
  },
  {
    name: "Qwen2-Audio",
    type: "ALM",
    overallAccuracy: 0.590, // VERIFY_BEFORE_PUBLICATION
    macroF1: 0.540,       // VERIFY_BEFORE_PUBLICATION
    entailmentAcc: 0.780, // VERIFY_BEFORE_PUBLICATION
    contradictionAcc: 0.410,// VERIFY_BEFORE_PUBLICATION
  },
  {
    name: "SALMONN",
    type: "ALM",
    overallAccuracy: 0.334, // VERIFY_BEFORE_PUBLICATION
    macroF1: 0.180,       // VERIFY_BEFORE_PUBLICATION
    entailmentAcc: 0.990, // VERIFY_BEFORE_PUBLICATION
    contradictionAcc: 0.000,
    notes: "Zero contradiction accuracy",
  },
  {
    name: "GAMA",
    type: "ALM",
    overallAccuracy: 0.340, // VERIFY_BEFORE_PUBLICATION
    macroF1: 0.190,       // VERIFY_BEFORE_PUBLICATION
    entailmentAcc: 0.950, // VERIFY_BEFORE_PUBLICATION
    contradictionAcc: 0.020,// VERIFY_BEFORE_PUBLICATION
  },
  {
    name: "LTU",
    type: "ALM",
    overallAccuracy: 0.330, // VERIFY_BEFORE_PUBLICATION
    macroF1: 0.170,       // VERIFY_BEFORE_PUBLICATION
    entailmentAcc: 0.985, // VERIFY_BEFORE_PUBLICATION
    contradictionAcc: 0.000,
    notes: "Zero contradiction accuracy",
  },
];

export interface DifficultyMetric {
  level: "Easy" | "Medium" | "Hard";
  description: string;
  accuracy: number;
  macroF1: number;
  reasoningRequirement: string;
}

export const reasoningDifficultyResults: DifficultyMetric[] = [
  {
    level: "Easy",
    description: "Evidence can be identified directly from a single distinct utterance.",
    accuracy: 0.449,
    macroF1: 0.343,
    reasoningRequirement: "One Utterance Direct Retrieval",
  },
  {
    level: "Medium",
    description: "Requires paraphrasing and light inference across adjacent utterances.",
    accuracy: 0.439,
    macroF1: 0.357,
    reasoningRequirement: "Local Context Integration",
  },
  {
    level: "Hard",
    description: "Requires integrating multi-utterance narrative while filtering adult interviewer speech.",
    accuracy: 0.417,
    macroF1: 0.327,
    reasoningRequirement: "Long-Range Integration & Speaker Filtering",
  },
];

export interface DisfluencyBin {
  densityBin: string;
  densityValue: number;
  accuracy: number;
  faithfulnessScore?: number; // VERIFY_BEFORE_PUBLICATION
  sampleCountDescription: string;
}

export const disfluencyDensityResults: DisfluencyBin[] = [
  {
    densityBin: "Low (~2.3%)",
    densityValue: 0.023,
    accuracy: 0.542,
    faithfulnessScore: 0.78, // VERIFY_BEFORE_PUBLICATION
    sampleCountDescription: "Minimal disfluencies (isolated pauses)",
  },
  {
    densityBin: "Moderate (~4.7%)",
    densityValue: 0.047,
    accuracy: 0.567,
    faithfulnessScore: 0.81, // VERIFY_BEFORE_PUBLICATION
    sampleCountDescription: "Frequent repetitions / single prolongations",
  },
  {
    densityBin: "High (~8.6%)",
    densityValue: 0.086,
    accuracy: 0.662,
    faithfulnessScore: 0.84, // VERIFY_BEFORE_PUBLICATION
    sampleCountDescription: "Dense repetitions and part-word blocks",
  },
  {
    densityBin: "Severe (~17.0%)",
    densityValue: 0.170,
    accuracy: 0.529,
    faithfulnessScore: 0.69, // VERIFY_BEFORE_PUBLICATION
    sampleCountDescription: "Severe stuttering with multi-factor disfluencies",
  },
];

export interface SummarizationEval {
  modelName: string;
  fluencyScore: number;     // VERIFY_BEFORE_PUBLICATION
  faithfulnessScore: number;// VERIFY_BEFORE_PUBLICATION
  purityScore: number;      // VERIFY_BEFORE_PUBLICATION (Adult leakage check)
  overallRank: number;
}

export const summarizationResults: SummarizationEval[] = [
  {
    modelName: "Audio Flamingo 3",
    fluencyScore: 0.88,     // VERIFY_BEFORE_PUBLICATION
    faithfulnessScore: 0.84,// VERIFY_BEFORE_PUBLICATION
    purityScore: 0.91,      // VERIFY_BEFORE_PUBLICATION
    overallRank: 1,
  },
  {
    modelName: "Kimi-Audio",
    fluencyScore: 0.85,     // VERIFY_BEFORE_PUBLICATION
    faithfulnessScore: 0.82,// VERIFY_BEFORE_PUBLICATION
    purityScore: 0.88,      // VERIFY_BEFORE_PUBLICATION
    overallRank: 2,
  },
  {
    modelName: "Qwen2.5-Omni",
    fluencyScore: 0.84,     // VERIFY_BEFORE_PUBLICATION
    faithfulnessScore: 0.79,// VERIFY_BEFORE_PUBLICATION
    purityScore: 0.85,      // VERIFY_BEFORE_PUBLICATION
    overallRank: 3,
  },
  {
    modelName: "Whisper + Qwen 2.5 (Cascade)",
    fluencyScore: 0.90,     // VERIFY_BEFORE_PUBLICATION
    faithfulnessScore: 0.86,// VERIFY_BEFORE_PUBLICATION
    purityScore: 0.94,      // VERIFY_BEFORE_PUBLICATION
    overallRank: 1, // Cascade reference
  },
];
