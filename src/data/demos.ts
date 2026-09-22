/**
 * RESEARCH INTEGRITY & PRIVACY WARNING:
 * Replace placeholder content only with examples authorized for public dissemination.
 * DO NOT upload or include actual human subject recordings or unredacted transcripts
 * from FluencyBank / Voices of Children Who Stutter unless explicitly cleared by IRB/authors.
 */

export interface ModelPredictionItem {
  modelName: string;
  prediction: "ENTAILMENT" | "NEUTRAL" | "CONTRADICTION";
  isCorrect: boolean;
  confidenceExplanation?: string;
}

export interface DemoItem {
  id: string;
  title: string;
  audioUrl?: string; // Empty or placeholder audio file path
  hasAudio: boolean;
  transcriptOptional?: string;
  hypothesis: string;
  groundTruth: "ENTAILMENT" | "NEUTRAL" | "CONTRADICTION";
  difficulty: "Easy" | "Medium" | "Hard";
  disfluencyType: "Filled Pause" | "Repetition" | "Prolongation" | "Block" | "Mixed Disfluency";
  disfluencyDensity: "Low" | "Moderate" | "High" | "Severe";
  speakerType: "Single Speaker (Child)" | "Mixed Speaker (Child + Interviewer)";
  categoryTag: "Speaker Leakage" | "Contradiction Bias" | "High Disfluency" | "Acoustic Failure" | "Semantic Failure";
  predictions: ModelPredictionItem[];
  asrTranscriptPlaceholder?: string;
  cascadePrediction?: "ENTAILMENT" | "NEUTRAL" | "CONTRADICTION";
  researcherInterpretation: string;
  isPlaceholder: boolean;
}

export const demoItems: DemoItem[] = [
  {
    id: "demo-001-contradiction-bias",
    title: "Case 01: Contradiction Calibration Failure",
    hasAudio: false,
    audioUrl: "", // PLACEHOLDER: Load local audio when authorized
    transcriptOptional: "[PLACEHOLDER SCHEMATIC: Child describes preferring reading alone, but interviewer asks about group games]",
    hypothesis: "The child enjoys playing sports in large noisy groups.",
    groundTruth: "CONTRADICTION",
    difficulty: "Medium",
    disfluencyType: "Repetition",
    disfluencyDensity: "Moderate",
    speakerType: "Mixed Speaker (Child + Interviewer)",
    categoryTag: "Contradiction Bias",
    predictions: [
      {
        modelName: "Whisper + Qwen 2.5 (Cascade)",
        prediction: "CONTRADICTION",
        isCorrect: true,
        confidenceExplanation: "Transcript explicitly captured 'I like solo reading best'.",
      },
      {
        modelName: "Qwen2.5-Omni",
        prediction: "NEUTRAL",
        isCorrect: false,
        confidenceExplanation: "Failed to resolve negative valence across repetition segments.",
      },
      {
        modelName: "Kimi-Audio",
        prediction: "CONTRADICTION",
        isCorrect: true,
        confidenceExplanation: "Accurately localized child preference clause.",
      },
      {
        modelName: "Audio Flamingo 3",
        prediction: "ENTAILMENT",
        isCorrect: false,
        confidenceExplanation: "Overpredicted entailment due to positive acoustic tone in interviewer prompt.",
      },
      {
        modelName: "SALMONN",
        prediction: "ENTAILMENT",
        isCorrect: false,
        confidenceExplanation: "Strong entailment prior (0% contradiction accuracy on benchmark).",
      },
    ],
    asrTranscriptPlaceholder: "[ASR Output]: I I I like to read read books at home by myself.",
    cascadePrediction: "CONTRADICTION",
    researcherInterpretation:
      "ALMs with strong entailment priors incorrectly assign positive entailment to contradictory hypotheses when disfluencies distort phrase boundary cues.",
    isPlaceholder: true,
  },
  {
    id: "demo-002-speaker-leakage",
    title: "Case 02: Adult Interviewer Interference Leakage",
    hasAudio: false,
    audioUrl: "",
    transcriptOptional: "[PLACEHOLDER SCHEMATIC: Interviewer mentions 'We visited Florida last summer', child repeats 'Florida']",
    hypothesis: "The child travelled to Florida last summer.",
    groundTruth: "NEUTRAL",
    difficulty: "Hard",
    disfluencyType: "Mixed Disfluency",
    disfluencyDensity: "High",
    speakerType: "Mixed Speaker (Child + Interviewer)",
    categoryTag: "Speaker Leakage",
    predictions: [
      {
        modelName: "Whisper + Qwen 2.5 (Cascade)",
        prediction: "NEUTRAL",
        isCorrect: true,
        confidenceExplanation: "Speaker diarization prompt helped isolate interviewer assertion.",
      },
      {
        modelName: "Qwen2.5-Omni",
        prediction: "ENTAILMENT",
        isCorrect: false,
        confidenceExplanation: "Attributed interviewer narrative state to child speaker target.",
      },
      {
        modelName: "Kimi-Audio",
        prediction: "NEUTRAL",
        isCorrect: true,
        confidenceExplanation: "Correctly differentiated background adult utterance.",
      },
      {
        modelName: "Audio Flamingo 3",
        prediction: "ENTAILMENT",
        isCorrect: false,
        confidenceExplanation: "Merged adult statement into child summary state.",
      },
    ],
    asrTranscriptPlaceholder: "[ASR Output]: [Interviewer]: Did you go to Florida? [Child]: Flo-Flo-Florida.",
    cascadePrediction: "NEUTRAL",
    researcherInterpretation:
      "Without explicit acoustic speaker separation, ALMs frequently conflate interviewer statements with the child's own semantic assertions.",
    isPlaceholder: true,
  },
  {
    id: "demo-003-dense-stuttering",
    title: "Case 03: Severe Disfluency Breakdown",
    hasAudio: false,
    audioUrl: "",
    transcriptOptional: "[PLACEHOLDER SCHEMATIC: Child experiencing severe prolongation on keyword 'dinosaur']",
    hypothesis: "The child's favorite toy is a dinosaur.",
    groundTruth: "ENTAILMENT",
    difficulty: "Easy",
    disfluencyType: "Prolongation",
    disfluencyDensity: "Severe",
    speakerType: "Single Speaker (Child)",
    categoryTag: "High Disfluency",
    predictions: [
      {
        modelName: "Whisper + Qwen 2.5 (Cascade)",
        prediction: "CONTRADICTION",
        isCorrect: false,
        confidenceExplanation: "ASR hallucinated distorted tokens ('d-d-d-d') leading text LLM astray.",
      },
      {
        modelName: "Qwen2.5-Omni",
        prediction: "ENTAILMENT",
        isCorrect: true,
        confidenceExplanation: "Direct audio encoder preserved spectral continuation across prolongation.",
      },
      {
        modelName: "Kimi-Audio",
        prediction: "ENTAILMENT",
        isCorrect: true,
      },
      {
        modelName: "Audio Flamingo 3",
        prediction: "ENTAILMENT",
        isCorrect: true,
      },
    ],
    asrTranscriptPlaceholder: "[ASR Output]: My fav-fav-favorite is d-d-d-d-door.",
    cascadePrediction: "CONTRADICTION",
    researcherInterpretation:
      "Cases where direct ALM processing succeeds while cascades fail highlight the advantage of continuous audio features over fragile text transcripts.",
    isPlaceholder: true,
  },
  {
    id: "demo-004-multi-utterance-integration",
    title: "Case 04: Long-Range Narrative Inference",
    hasAudio: false,
    audioUrl: "",
    transcriptOptional: "[PLACEHOLDER SCHEMATIC: Narrative spread across 3 disjointed turns]",
    hypothesis: "The child owns a pet dog named Max.",
    groundTruth: "ENTAILMENT",
    difficulty: "Hard",
    disfluencyType: "Block",
    disfluencyDensity: "Moderate",
    speakerType: "Single Speaker (Child)",
    categoryTag: "Semantic Failure",
    predictions: [
      {
        modelName: "Whisper + Qwen 2.5 (Cascade)",
        prediction: "ENTAILMENT",
        isCorrect: true,
      },
      {
        modelName: "Qwen2.5-Omni",
        prediction: "ENTAILMENT",
        isCorrect: true,
      },
      {
        modelName: "Kimi-Audio",
        prediction: "NEUTRAL",
        isCorrect: false,
        confidenceExplanation: "Failed to bridge turn 1 ('Max') with turn 3 ('he barks a lot').",
      },
      {
        modelName: "Audio Flamingo 3",
        prediction: "ENTAILMENT",
        isCorrect: true,
      },
    ],
    asrTranscriptPlaceholder: "[ASR Output]: We have Max... [pause] ...he is a good dog.",
    cascadePrediction: "ENTAILMENT",
    researcherInterpretation:
      "Longer temporal spans with intervening acoustic blocks test the model's memory attention mechanism across non-fluent intervals.",
    isPlaceholder: true,
  },
];

export interface SummarizationDemo {
  id: string;
  title: string;
  speakerInfo: string;
  disfluencyLevel: string;
  referenceSummary: string;
  modelSummaries: {
    modelName: string;
    summaryText: string;
    fluencyBadge: "High" | "Moderate" | "Low";
    faithfulnessBadge: "High" | "Moderate" | "Low";
    purityBadge: "High (No Leakage)" | "Moderate" | "Low (Interviewer Leakage)";
  }[];
  isPlaceholder: boolean;
}

export const summarizationDemos: SummarizationDemo[] = [
  {
    id: "sum-demo-01",
    title: "Sample 01: School Activity Narrative (Placeholder Schematic)",
    speakerInfo: "Child (Age 8) + Interviewer",
    disfluencyLevel: "Moderate (Repetitions + Part-word repetitions)",
    referenceSummary:
      "The child explains that they enjoy science experiments at school, specifically growing plants in small cups, and want to show their project to their grandmother.",
    modelSummaries: [
      {
        modelName: "Audio Flamingo 3",
        summaryText:
          "The child likes science class experiments involving plant growth and wants to share the result with their grandmother.",
        fluencyBadge: "High",
        faithfulnessBadge: "High",
        purityBadge: "High (No Leakage)",
      },
      {
        modelName: "Kimi-Audio",
        summaryText:
          "The child enjoys science at school with plant cups and hopes to show their family.",
        fluencyBadge: "High",
        faithfulnessBadge: "High",
        purityBadge: "High (No Leakage)",
      },
      {
        modelName: "Qwen2.5-Omni",
        summaryText:
          "The interviewer asks about science class. The child mentions planting seeds in cups and talking to their grandmother.",
        fluencyBadge: "High",
        faithfulnessBadge: "Moderate",
        purityBadge: "Moderate",
      },
    ],
    isPlaceholder: true,
  },
];
