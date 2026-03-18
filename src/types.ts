import { LucideIcon } from 'lucide-react';

export type UserRole = 'admin' | 'trainer' | 'employee';

export type Screen = 
  | 'dashboard' 
  | 'courses' 
  | 'course-builder' 
  | 'lessons' 
  | 'tutorials' 
  | 'question-bank' 
  | 'assessments' 
  | 'schedule' 
  | 'ongoing' 
  | 'reports' 
  | 'employees' 
  | 'tags' 
  | 'settings';

export interface NavItem {
  id: Screen;
  label: string;
  icon: LucideIcon;
  section?: 'main' | 'evaluation' | 'management' | 'system';
}

export interface Course {
  id: string;
  title: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'Published' | 'Draft';
  modules: number;
  thumbnail: string;
  updatedAt: string;
  demand?: 'High' | 'Normal';
  trainer?: string;
}

export interface Employee {
  id: string;
  code: string;
  name: string;
  designation: string;
  department: string;
  location: string;
  courses: number;
  assessments: number;
  avgScore: number;
  avatar: string;
}

export interface Question {
  id: string;
  code: string;
  text: string;
  subject: string;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  marks: number;
}

export interface TrainingSession {
  id: string;
  name: string;
  site: string;
  venue: string;
  date: string;
  time: string;
  duration: string;
  mode: 'In-Person' | 'Online' | 'Hybrid';
  trainer: string;
  registered: number;
  capacity: number;
  status: 'Scheduled' | 'Started' | 'Running' | 'Completed';
}

export interface Quiz {
  id: string;
  title: string;
  courseId: string;
  questions: QuizQuestion[];
  duration: number; // in minutes
  passingScore: number;
  createdAt: string;
  status: 'Active' | 'Draft';
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctOption: number;
  marks: number;
}
