import React from 'react';
import { 
  Search, 
  Bell, 
  Plus, 
  ChevronRight, 
  Edit3, 
  Trash2, 
  PlayCircle, 
  Layers,
  Clock
} from 'lucide-react';
import { cn } from '../lib/utils';

export const LessonManagement: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <a className="hover:text-primary transition-colors" href="#">Courses</a>
            <ChevronRight size={14} />
            <a className="hover:text-primary transition-colors" href="#">Java Backend Training</a>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-medium">Lessons</span>
          </nav>
          <h2 className="text-3xl font-black tracking-tight">Lesson Management</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 text-sm font-bold border border-slate-200 rounded-lg hover:bg-white transition-all">Cancel</button>
          <button className="px-5 py-2.5 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">Save Lesson</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Lesson Details Form */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-2 mb-6">
            <Edit3 className="text-primary" size={20} />
            <h3 className="text-lg font-bold">Lesson Details</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Course Selector</label>
              <select className="w-full bg-slate-50 border-slate-200 rounded-lg py-2.5 text-sm focus:ring-primary focus:border-primary outline-none border">
                <option>Java Backend Training</option>
                <option>Frontend Engineering</option>
                <option>DevOps Foundation</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Lesson Number</label>
              <input className="w-full bg-slate-50 border-slate-200 rounded-lg py-2.5 text-sm focus:ring-primary focus:border-primary outline-none border" type="number" defaultValue={1}/>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Estimated Duration</label>
              <div className="relative">
                <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input className="w-full bg-slate-50 border-slate-200 rounded-lg py-2.5 text-sm focus:ring-primary focus:border-primary pr-10 outline-none border" placeholder="e.g., 2 hours" type="text" defaultValue="2 hours"/>
              </div>
            </div>
            <div className="md:col-span-2 lg:col-span-2 flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Lesson Title</label>
              <input className="w-full bg-slate-50 border-slate-200 rounded-lg py-2.5 text-sm focus:ring-primary focus:border-primary outline-none border" type="text" defaultValue="Introduction to Java"/>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Lesson Tags</label>
              <input className="w-full bg-slate-50 border-slate-200 rounded-lg py-2.5 text-sm focus:ring-primary focus:border-primary outline-none border" placeholder="Java, Backend, Basics" type="text" defaultValue="Java, Backend"/>
            </div>
            <div className="md:col-span-2 lg:col-span-3 flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Lesson Description</label>
              <textarea className="w-full bg-slate-50 border-slate-200 rounded-lg py-2.5 text-sm focus:ring-primary focus:border-primary resize-none outline-none border" rows={4} defaultValue="This introductory lesson covers the fundamental concepts of the Java programming language, including the JVM architecture, setup, and first steps into syntax." />
            </div>
          </div>
        </div>

        {/* Tutorials Table Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PlayCircle className="text-primary" size={20} />
              <h3 className="text-lg font-bold">Tutorials</h3>
            </div>
            <button className="text-primary hover:text-primary/80 text-sm font-bold flex items-center gap-1">
              <Plus size={18} />
              Add Tutorial
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Sr No</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Tut. Number</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Tutorial Title</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Video Count</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { sr: '01', num: '1.1', title: 'Setting up JDK and IDE', videos: 1, duration: '15 mins' },
                  { sr: '02', num: '1.2', title: 'Understanding the JVM & JRE', videos: 2, duration: '45 mins' },
                  { sr: '03', num: '1.3', title: 'Your First "Hello World"', videos: 1, duration: '20 mins' },
                ].map((tut, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm">{tut.sr}</td>
                    <td className="px-6 py-4 text-sm">{tut.num}</td>
                    <td className="px-6 py-4 text-sm font-medium">{tut.title}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-slate-100 text-slate-600">
                        <PlayCircle size={14} />
                        {tut.videos} {tut.videos === 1 ? 'Video' : 'Videos'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">{tut.duration}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-1.5 hover:bg-primary/10 hover:text-primary rounded transition-colors">
                          <Edit3 size={18} />
                        </button>
                        <button className="p-1.5 hover:bg-red-50 hover:text-red-500 rounded transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50/50 flex justify-center border-t border-slate-200">
            <button className="text-xs font-bold text-slate-500 hover:text-slate-700 flex items-center gap-1 transition-colors">
              Show More Tutorials
              <ChevronRight size={14} className="rotate-90" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between pt-4 pb-8 border-t border-slate-200">
        <p className="text-xs text-slate-500">Last saved: 12 mins ago</p>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">Discard Draft</button>
          <button className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-lg shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all">Save Lesson</button>
        </div>
      </div>
    </div>
  );
};
