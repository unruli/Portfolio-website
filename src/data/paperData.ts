export interface Author {
  name: string;
  affiliation: string;
  isFirstAuthor?: boolean;
  link?: string;
}

export interface PaperMetadata {
  title: string;
  subtitle: string;
  fullPaperTitle: string;
  authors: Author[];
  institution: string;
  conference: string;
  year: number;
  corpusName: string;
  corpusSource: string;
  abstract: string;
  links: {
    paper: string;
    code: string;
    poster: string;
    dataset: string;
  };
  bibtex: string;
}

export const strokeData: string = "";

export const paperMetadata: PaperMetadata = {
  title: "Reasoning Beyond Transcription",
  subtitle: "Can audio-language models reason over disfluent child speech?",
  fullPaperTitle: "Reasoning Beyond Transcription: Audio Language Models on Child Stuttering Speech",
  authors: [
    {
      name: "Chibuzor Okocha",
      affiliation: "University of Florida",
      isFirstAuthor: true,
      link: "https://chibuzorokocha.com",
    },
    {
      name: "Christan Grant",
      affiliation: "University of Florida",
    },
    {
      name: "Zoey Liu",
      affiliation: "University of Florida",
    },
  ],
  institution: "University of Florida",
  conference: "Interspeech 2026",
  year: 2026,
  corpusName: "Voices of Children Who Stutter",
  corpusSource: "FluencyBank (TalkBank System)",
  abstract:
    "Speech recognition and spoken language understanding systems are predominantly trained and evaluated on fluent adult speech. However, child speech presents distinct acoustic, prosodic, and developmental characteristics, which are further complicated when disfluencies (such as repetitions, prolongations, and blocks) and adult interviewer interference are present. In this work, we present a diagnostic benchmark and stress test evaluating modern Audio Language Models (ALMs) and ASR + LLM cascades directly on child stuttering speech. Rather than assessing simple transcription accuracy, we evaluate end-to-end semantic reasoning through child-focused summarization and child speech entailment tasks.",
  links: {
    paper: "#", // VERIFY_BEFORE_PUBLICATION
    code: "https://github.com/unruli/child-stuttering-alm-benchmark", // VERIFY_BEFORE_PUBLICATION
    poster: "#", // VERIFY_BEFORE_PUBLICATION
    dataset: "https://fluency.talkbank.org/",
  },
  bibtex: `@inproceedings{okocha2026reasoning,
  title={Reasoning Beyond Transcription: Audio Language Models on Child Stuttering Speech},
  author={Okocha, Chibuzor and Grant, Christan and Liu, Zoey},
  booktitle={Proceedings of Interspeech 2026},
  year={2026},
  organization={University of Florida}
}`,
};
