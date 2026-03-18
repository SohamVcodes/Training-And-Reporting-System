import React from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  Database, 
  ChevronRight, 
  Edit3, 
  Trash2,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { Question } from '../types';
import { cn } from '../lib/utils';

const questions: Question[] = [
  { id: '1', code: 'QB-001', text: 'What is the primary function of the Java Virtual Machine (JVM)?', subject: 'Java Core', tags: ['JVM', 'Architecture'], difficulty: 'Beginner', marks: 2 },
  { id: '2', code: 'QB-002', text: 'Explain the difference between JDK, JRE, and JVM.', subject: 'Java Core', tags: ['JDK', 'JRE'], difficulty: 'Intermediate', marks: 5 },
  { id: '3', code: 'QB-003', text: 'Which of the following is NOT a primitive data type in Java?', subject: 'Syntax', tags: ['Data Types'], difficulty: 'Beginner', marks: 1 },
  { id: '4', code: 'QB-004', text: 'How does garbage collection work in Java?', subject: 'Memory Management', tags: ['GC', 'Memory'], difficulty: 'Advanced', marks: 10 },
  { id: '5', code: 'QB-005', text: 'What is the purpose of the "static" keyword in Java?', subject: 'Java Core', tags: ['Keywords'], difficulty: 'Intermediate', marks: 3 },
];

export const QuestionBank: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Question Bank</h2>
          <p className="text-slate-500 mt-1">Manage and organize assessment items for your training courses.</p>
        </div>
        <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
          <Plus size={18} />
          Create New Question
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
          <input className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="Search questions by text or code..." type="text"/>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:border-primary transition-colors">
            <Filter size={16} className="text-slate-400" />
            Subject
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:border-primary transition-colors">
            Difficulty
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:border-primary transition-colors">
            Type
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Question List */}
        <div className="xl:col-span-2 space-y-4">
          {questions.map((q) => (
            <div key={q.id} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-md transition-all group">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase tracking-wider">{q.code}</span>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">{q.subject}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 hover:bg-slate-100 rounded text-slate-400 hover:text-primary transition-colors">
                    <Edit3 size={16} />
                  </button>
                  <button className="p-1.5 hover:bg-slate-100 rounded text-slate-400 hover:text-red-500 transition-colors">
                    <Trash2 size={16} />
                  </button>
                  <button className="p-1.5 hover:bg-slate-100 rounded text-slate-400">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </div>
              <h3 className="font-bold text-slate-900 leading-relaxed mb-4">{q.text}</h3>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-50">
                <div className="flex flex-wrap gap-2">
                  {q.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-slate-50 text-slate-500 text-[10px] font-bold rounded border border-slate-100">#{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className={cn(
                      "size-2 rounded-full",
                      q.difficulty === 'Beginner' ? "bg-emerald-500" : q.difficulty === 'Intermediate' ? "bg-amber-500" : "bg-rose-500"
                    )}></div>
                    <span className="text-xs font-medium text-slate-600">{q.difficulty}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">{q.marks} Marks</span>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex justify-center pt-4">
            <button className="px-6 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-500 hover:bg-white transition-colors">Load More Questions</button>
          </div>
        </div>

        {/* Quick Stats / Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Database size={18} className="text-primary" />
              Bank Summary
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Total Questions', value: '842', color: 'text-primary' },
                { label: 'Unused Items', value: '156', color: 'text-amber-500' },
                { label: 'Avg. Difficulty', value: 'Intermediate', color: 'text-slate-700' },
                { label: 'Recent Additions', value: '+24', color: 'text-emerald-500' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                  <span className="text-sm text-slate-500 font-medium">{stat.label}</span>
                  <span className={cn("text-sm font-bold", stat.color)}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
            <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
              <HelpCircle size={18} />
              Training Tip
            </h3>
            <p className="text-xs text-primary/80 leading-relaxed">
              Mix different question types (MCQ, True/False, Scenario-based) to better assess practical application of knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
