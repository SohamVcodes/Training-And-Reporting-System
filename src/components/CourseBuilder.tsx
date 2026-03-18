import React, { useState } from 'react';
import { 
  ChevronRight, 
  School, 
  BookOpen, 
  PlayCircle, 
  FileText, 
  PlusCircle, 
  Plus, 
  X, 
  Upload,
  Save,
  Send
} from 'lucide-react';
import { cn } from '../lib/utils';

export const CourseBuilder: React.FC = () => {
  const [tags, setTags] = useState(['JAVA', 'BACKEND', 'SPRING']);

  return (
    <div className="flex flex-col h-full animate-in slide-in-from-right-4 duration-500">
      {/* Top Header */}
      <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold">Create New Course</h2>
          <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Draft</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
            Save Draft
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2">
            <Send size={16} />
            Publish Course
          </button>
        </div>
      </header>

      {/* Split Panel Workspace */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel: Course Structure */}
        <section className="w-[30%] min-w-[320px] border-r border-slate-200 bg-white overflow-y-auto p-6 custom-scrollbar">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900">Course Structure</h3>
            <button className="p-1.5 hover:bg-slate-100 rounded-lg text-primary transition-colors">
              <PlusCircle size={20} />
            </button>
          </div>
          
          <div className="space-y-2">
            <div className="group">
              <div className="flex items-center gap-2 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                <ChevronRight size={16} className="text-slate-400 rotate-90" />
                <School size={18} className="text-primary" />
                <span className="text-sm font-semibold">Java Backend Training</span>
              </div>
              
              <div className="ml-6 mt-1 space-y-1 border-l-2 border-slate-100 pl-4">
                <div className="flex items-center gap-2 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                  <ChevronRight size={16} className="text-slate-400 rotate-90" />
                  <BookOpen size={18} className="text-slate-500" />
                  <span className="text-sm font-medium">Lesson 1: Introduction</span>
                </div>
                
                <div className="ml-6 mt-1 space-y-1 border-l-2 border-slate-100 pl-4">
                  <div className="flex items-center gap-2 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                    <ChevronRight size={16} className="text-slate-400 rotate-90" />
                    <FileText size={18} className="text-slate-500" />
                    <span className="text-sm">Tutorial 1: Java Basics</span>
                  </div>
                  <div className="ml-6 mt-1 space-y-1">
                    <div className="flex items-center gap-2 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                      <PlayCircle size={18} className="text-slate-400" />
                      <span className="text-sm text-slate-600">Introduction Video</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                    <FileText size={18} className="text-slate-500" />
                    <span className="text-sm">Tutorial 2: JVM Architecture</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                  <BookOpen size={18} className="text-slate-500" />
                  <span className="text-sm font-medium">Lesson 2: Core Syntax</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100">
            <button className="w-full flex items-center justify-center gap-2 p-3 border-2 border-dashed border-slate-200 rounded-xl text-sm text-slate-500 hover:border-primary/50 hover:text-primary transition-all">
              <Plus size={18} />
              Add New Module
            </button>
          </div>
        </section>

        {/* Right Panel: Course Details Form */}
        <section className="flex-1 bg-background-light overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-3xl mx-auto space-y-8 pb-20">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h3 className="font-bold text-lg">General Information</h3>
                <p className="text-sm text-slate-500">Define the core identity of your professional training course.</p>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Course Name</label>
                  <input 
                    className="w-full rounded-lg border-slate-200 bg-white focus:ring-primary focus:border-primary px-4 py-2.5 outline-none border" 
                    placeholder="Enter course title" 
                    type="text" 
                    defaultValue="Java Backend Training"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Course Description</label>
                  <textarea 
                    className="w-full rounded-lg border-slate-200 bg-white focus:ring-primary focus:border-primary px-4 py-2.5 outline-none border" 
                    placeholder="What will learners achieve in this course?" 
                    rows={4}
                    defaultValue="Master the fundamentals of Java backend development including Spring Boot, JPA, and REST API design patterns."
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-700">Category</label>
                    <select className="w-full rounded-lg border-slate-200 bg-white focus:ring-primary focus:border-primary px-4 py-2.5 outline-none border">
                      <option>Software Engineering</option>
                      <option>Data Science</option>
                      <option>Management</option>
                      <option>Design</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-700">Language</label>
                    <select className="w-full rounded-lg border-slate-200 bg-white focus:ring-primary focus:border-primary px-4 py-2.5 outline-none border">
                      <option>English (US)</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Course Tags</label>
                  <div className="flex flex-wrap gap-2 p-2 border border-slate-200 rounded-lg bg-white">
                    {tags.map(tag => (
                      <span key={tag} className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded">
                        {tag} 
                        <X size={12} className="cursor-pointer" onClick={() => setTags(tags.filter(t => t !== tag))} />
                      </span>
                    ))}
                    <input className="border-none bg-transparent focus:ring-0 text-sm flex-1 min-w-[100px] outline-none" placeholder="Add tag..." type="text"/>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-700">Difficulty Level</label>
                    <div className="flex p-1 bg-slate-100 rounded-lg">
                      <button className="flex-1 py-1.5 text-xs font-bold rounded-md bg-white shadow-sm transition-all">Beginner</button>
                      <button className="flex-1 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-700 transition-all">Intermediate</button>
                      <button className="flex-1 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-700 transition-all">Advanced</button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-700">Estimated Duration</label>
                    <div className="relative">
                      <input className="w-full rounded-lg border-slate-200 bg-white focus:ring-primary focus:border-primary px-4 py-2.5 outline-none border" type="text" defaultValue="12"/>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-bold text-lg mb-4">Course Thumbnail</h3>
              <div className="flex items-start gap-6">
                <div className="w-48 h-32 rounded-lg bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200 relative group cursor-pointer">
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Upload className="text-white" size={24} />
                  </div>
                  <img 
                    alt="Course Preview" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi4nNj4mE0uztgeiNCjDrOoYzAzxT8shXEjfHO3AWltWuEJ5rGItxW5REzud2mz7oiOuzqYhaqwU7v8if1RbGNh4lFTSQPdqSzYOJOwMqUkYtz8HIVY3cu-ZSkOoluHfqPaGtUjoWOY9EPREU-saK0-V37fxq1oEY27SreIOAazZGvzL3MyYPnYAH0ZFOmX2yY1vZ6tzU4b8gk_2Zu-7vXnbvNly7vFytbzbZJOm3x594UzhUGuftvCC70r0L4G0wKO6Qdxh719M8"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-700 mb-2 font-medium">Upload high-resolution image</p>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">Accepted formats: .jpg, .png. Recommended size: 1200x800px. Max file size: 5MB.</p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-slate-100 rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors">Replace</button>
                    <button className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-red-500 hover:bg-red-50 transition-colors">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
