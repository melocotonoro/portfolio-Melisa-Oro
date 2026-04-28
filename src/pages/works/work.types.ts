export interface WorkUrls {
  github?: string;
  video: string;
  behance?: string;
  figma?: string;
  title: string;
  summary: string;
}

export interface DataWork {
  id: string;
  role: string;
  work: string;
  background: string;
  namePage: string;
  url: WorkUrls;
}

export interface InitialPressed {
  github: boolean;
  figma: boolean;
  behance: boolean;
  youtube: boolean;
}

export type ButtonType = "github" | "figma" | "behance" | "youtube";