import React, { useState } from 'react';
import { Plus, Trash2, Check, X, Save, AlertCircle, ClipboardList } from 'lucide-react';
import { Quiz, QuizQuestion, Course } from '../types';
import { cn } from '../lib/utils';

interface QuizCreatorProps {
  courses: Course[];
  onSave: (quiz: Quiz) => void;
  onCancel: () => void;
}

export const QuizCreator: React.FC<QuizCreatorProps> = ({ courses, onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [duration, setDuration] = useState(30);
  const [passingScore, setPassingScore] = useState(70);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  const addQuestion = () => {
    const newQuestion: QuizQuestion = {
      id: Math.random().toString(36).substr(2, 9),
      text: '',
      options: ['', '', '', ''],
      correctOption: 0,
      marks: 1,
    };
    setQuestions([...questions, newQuestion]);
  };

  const updateQuestion = (id: string, updates: Partial<QuizQuestion>) => {
    setQuestions(questions.map(q => q.id === id ? { ...q, ...updates } : q));
  };

  const removeQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const handleSave = () => {
    if (!title || !selectedCourseId || questions.length === 0) {
      alert('Please fill in all required fields and add at least one question.');
      return;
    }

    const newQuiz: Quiz = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      courseId: selectedCourseId,
      questions,
      duration,
      passingScore,
      createdAt: new Date().toISOString(),
      status: 'Draft',
    };
    onSave(newQuiz);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Create New Quiz</h2>
          <p className="text-slate-500 mt-1 font-medium">Design a quiz for your assigned course.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={onCancel}
            className="px-6 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl font-bold text-sm shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all"
          >
            <Save size={18} />
            Save Quiz
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quiz Settings */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
            <h3 className="font-black text-xl">Quiz Settings</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Quiz Title</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. React Hooks Mastery"
                  className="w-full px-4 py-3 bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 rounded-xl text-sm transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Select Course</label>
                <select 
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 rounded-xl text-sm transition-all outline-none appearance-none"
                >
                  <option value="">Select a course...</option>
                  {courses.map(course => (
                    <option key={course.id} value={course.id}>{course.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Duration (min)</label>
                  <input 
                    type="number" 
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="w-full px-4 py-3 bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 rounded-xl text-sm transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pass Score (%)</label>
                  <input 
                    type="number" 
                    value={passingScore}
                    onChange={(e) => setPassingScore(parseInt(e.target.value))}
                    className="w-full px-4 py-3 bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 rounded-xl text-sm transition-all outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-[32px] border border-amber-100 flex gap-4">
            <AlertCircle className="text-amber-500 shrink-0" size={24} />
            <p className="text-xs text-amber-700 font-medium leading-relaxed">
              Quizzes are saved as drafts by default. You can publish them once you've added all questions and verified the correct answers.
            </p>
          </div>
        </div>

        {/* Questions List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-black text-xl">Questions ({questions.length})</h3>
            <button 
              onClick={addQuestion}
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl font-bold text-xs hover:bg-primary transition-all"
            >
              <Plus size={16} />
              Add Question
            </button>
          </div>

          <div className="space-y-6">
            {questions.map((question, qIndex) => (
              <div key={question.id} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6 animate-in slide-in-from-right-4 duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-black text-xs">
                      {qIndex + 1}
                    </div>
                    <input 
                      type="text" 
                      value={question.text}
                      onChange={(e) => updateQuestion(question.id, { text: e.target.value })}
                      placeholder="Enter your question here..."
                      className="text-lg font-bold text-slate-900 bg-transparent border-none focus:ring-0 w-full md:w-[400px]"
                    />
                  </div>
                  <button 
                    onClick={() => removeQuestion(question.id)}
                    className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {question.options.map((option, oIndex) => (
                    <div key={oIndex} className="relative group">
                      <input 
                        type="text" 
                        value={option}
                        onChange={(e) => {
                          const newOptions = [...question.options];
                          newOptions[oIndex] = e.target.value;
                          updateQuestion(question.id, { options: newOptions });
                        }}
                        placeholder={`Option ${oIndex + 1}`}
                        className={cn(
                          "w-full pl-12 pr-4 py-3 rounded-2xl text-sm font-medium transition-all outline-none border-2",
                          question.correctOption === oIndex 
                            ? "bg-emerald-50 border-emerald-200 text-emerald-900" 
                            : "bg-slate-50 border-transparent focus:bg-white focus:border-primary/20"
                        )}
                      />
                      <button 
                        onClick={() => updateQuestion(question.id, { correctOption: oIndex })}
                        className={cn(
                          "absolute left-3 top-1/2 -translate-y-1/2 size-6 rounded-lg flex items-center justify-center transition-all",
                          question.correctOption === oIndex 
                            ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" 
                            : "bg-white text-slate-300 border border-slate-200 group-hover:border-primary/30"
                        )}
                      >
                        {question.correctOption === oIndex ? <Check size={14} /> : <div className="size-2 rounded-full bg-slate-200" />}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Marks</label>
                    <input 
                      type="number" 
                      value={question.marks}
                      onChange={(e) => updateQuestion(question.id, { marks: parseInt(e.target.value) })}
                      className="w-16 px-3 py-1.5 bg-slate-50 border-transparent rounded-lg text-xs font-bold transition-all outline-none"
                    />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Select the correct answer using the checkmark
                  </p>
                </div>
              </div>
            ))}

            {questions.length === 0 && (
              <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[40px] p-12 text-center">
                <div className="size-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 text-slate-300 shadow-sm">
                  <ClipboardList size={32} />
                </div>
                <h4 className="font-bold text-slate-900">No Questions Added</h4>
                <p className="text-sm text-slate-500 mt-2">Click the "Add Question" button to start building your quiz.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
