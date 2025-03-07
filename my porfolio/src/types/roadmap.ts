export interface Resource {
  name: string;
  url: string;
  type: string;
  completed: boolean;
  completionDate?: string;
  progress?: number;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
}

export interface Path {
  id: string;
  title: string;
  description: string;
  progress: number;
  milestones: Milestone[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  progress: number;
  paths: Path[];
}

export interface RoadmapData {
  title: string;
  description: string;
  categories: Category[];
} 