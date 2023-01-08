export interface Trivia {
  word: string;
  options: Option[];
}

export interface Option {
  definition: string;
  correct: boolean;
}
