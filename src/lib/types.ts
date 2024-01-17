export interface User {
  name: string;
  email: string;
  image: string;
  githubUsername: string;
  linkedinUsername: string;
  twitterUsername: string;
}

export interface Challenge {
  id: string;
  title: string;
  image: string;
  description: string;
  author: string;
  features: [];
  guidelines: [];
  date: string;
}

export interface ChallengeSubmission {
  challengerId: String;
  challengeId: String;
  githubRepoSolutione: String;
  previewSolution: String;
}
