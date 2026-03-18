import React, { useState } from 'react';
import { Plus, Filter, Grid, List, Layers, TrendingUp, Clock, Users, BookOpen, UserPlus, X, Check } from 'lucide-react';
import { Course } from '../types';
import { cn } from '../lib/utils';

const initialCourses: Course[] = [
  {
    id: '1',
    title: 'Cybersecurity Fundamentals for Remote Teams',
    category: 'Technology',
    level: 'Beginner',
    status: 'Published',
    modules: 12,
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHENcEAw1Ock3YXJh1ayY259Bjeq4gkATgwO9tCzcEVH0ccJyo1FwnKav7psmECm_MprFCONBjZjGJ_x14PsTMcnyXS9kp1TWM8s2X2Mv4EWBmdI88MlAJTWxzpE-jNumgNJ-kLjPo7Zzwimv0m-H---bMeCXg_BcMrztGGTdVNvRhKL48kb6DJB7h87XRH0_clM-ywbUw7yfxeSRosF498PTxvDGwV4FMRQJu6wBr9UKojFBQmhVkFYeH5B2qLyNq9GNOzfmEtbc',
    updatedAt: '2d ago',
    trainer: 'Sarah Drasner'
  },
  {
    id: '2',
    title: 'Executive Decision Making: Data-Driven Strategies',
    category: 'Leadership',
    level: 'Advanced',
    status: 'Draft',
    modules: 8,
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCek00f5P4z9TSJhUx-vQyoXVtP2jIR1R7EqDHD-yMME9jnmg1DbmQfrActofPdBETcozGvA9A9yLr4XGQ2f2qrk7VjIBhoGTy2V3x4lAYTFew92kAYd36yeyRz8eIL_EtwrdQq9l4Ic6fdHhbKv-ncVKA1BJYZ5d-zyo27DFGUk4DDaiVPvSk5O4CNXlcpR-qfb9VJQadvjJrrLqeo4cyWmXnp0hAFOGCsGAmQrswqloHwKW49vLiIAaAVfI9Ou62QpWHq-DlV5g',
    updatedAt: '2d ago'
  },
  {
    id: '3',
    title: 'Effective Communication in Hybrid Workplaces',
    category: 'Soft Skills',
    level: 'Intermediate',
    status: 'Published',
    modules: 15,
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYMwb7VrUcXa1CgZ_389CUWDBYjcz4UeHc9GGj7o_j6NCC5ZezSNZP8zA0ECsEBIX9oZXiFDFUGMgykEHnyIwlxFm-Yq3VcUCAw4hlPrdrDXdO_fotps0n47ZT2oqkJ_wboEbm3TLK09OjNDFxn4TuEribILFqPtl1uCE1p_jznL5eSTH_NmbU39Tzt6yLPc_pkv3kwqEliHXQQtFVLlvgIfc8DODnajGIWKZQBmGGE7gnxNnC4JZCSUc7AbU46osT6Xd4-KcXJeA',
    updatedAt: '1w ago'
  },
  {
    id: '4',
    title: 'Advanced Financial Modeling for Analysts',
    category: 'Business',
    level: 'Intermediate',
    status: 'Published',
    modules: 20,
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDS5e94KraqqLN9lJpbNesHAfcmTwgBP7Xodg3x_Jl-KBLoxtfk0qnwH6qnQC0kGxhQQi8YM2cNXcAclZ7ZKx_XE4cCxf1lcWMR4F7xa28ZPL-kjZztrlRPpUrviKhums__tZUDRqsDYawNoCOZ5TdDiYhIayxulnI90JUMfxf_erwbp6Fv1m-EahSlGIOSPWOe435scD4_Ly1tlrhfhVyu3j_zGijJkuzl57HqQVDp48cVx-cnoXRu41fwWRVECXZ1UzFuJTzB1XI',
    updatedAt: '3d ago',
    demand: 'High'
  }
];

const trainers = [
  { id: 't1', name: 'Sarah Drasner', role: 'Lead Technical Trainer', avatar: 'https://picsum.photos/seed/trainer1/100/100' },
  { id: 't2', name: 'Dan Abramov', role: 'Senior React Specialist', avatar: 'https://picsum.photos/seed/trainer2/100/100' },
  { id: 't3', name: 'Kent C. Dodds', role: 'Testing & Architecture Expert', avatar: 'https://picsum.photos/seed/trainer3/100/100' },
  { id: 't4', name: 'Cassidy Williams', role: 'Web Development Trainer', avatar: 'https://picsum.photos/seed/trainer4/100/100' },
];

export const CourseManagement: React.FC<{ onCreateNew: () => void }> = ({ onCreateNew }) => {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleAssignTrainer = (course: Course) => {
    setSelectedCourse(course);
    setIsAssignModalOpen(true);
  };

  const confirmAssignment = (trainerName: string) => {
    if (!selectedCourse) return;
    
    setCourses(prev => prev.map(c => 
      c.id === selectedCourse.id ? { ...c, trainer: trainerName } : c
    ));
    setIsAssignModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="p-8 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black tracking-tight text-slate-900">Course Management</h2>
          <p className="text-slate-500 mt-2 text-lg">Design, publish, and track your organization's learning curriculum.</p>
        </div>
        <button 
          onClick={onCreateNew}
          className="bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-2 hover:bg-primary shadow-2xl shadow-slate-900/20 transition-all active:scale-95"
        >
          <Plus size={20} />
          Create New Course
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Courses', value: courses.length.toString(), icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Active Learners', value: '1.2k', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Avg. Completion', value: '76%', icon: TrendingUp, color: 'text-violet-600', bg: 'bg-violet-50' },
          { label: 'Drafts', value: courses.filter(c => c.status === 'Draft').length.toString(), icon: Layers, color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-4">
            <div className={cn("size-14 rounded-2xl flex items-center justify-center", stat.bg, stat.color)}>
              <stat.icon size={28} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-black text-slate-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters Bar */}
      <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-[24px] border border-slate-100 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          {['Category', 'Level', 'Status'].map((filter) => (
            <button key={filter} className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-transparent rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 hover:border-slate-200 transition-all">
              <Filter size={14} className="text-slate-400" />
              {filter}
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
          ))}
        </div>
        <div className="h-6 w-px bg-slate-100 mx-2 hidden md:block"></div>
        <button className="text-xs font-bold text-primary hover:underline">Clear all filters</button>
        
        <div className="ml-auto flex bg-slate-100 p-1 rounded-xl">
          <button className="p-2 bg-white rounded-lg shadow-sm text-slate-900">
            <Grid size={18} />
          </button>
          <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
            <List size={18} />
          </button>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="group bg-white rounded-[40px] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col">
            <div className="aspect-[16/10] relative overflow-hidden bg-slate-100">
              <img 
                src={course.thumbnail} 
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 gap-2">
                <button className="flex-1 py-3 bg-white text-slate-900 rounded-2xl font-bold text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Edit Course
                </button>
                <button 
                  onClick={() => handleAssignTrainer(course)}
                  className="size-11 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 hover:scale-110 active:scale-95"
                  title="Assign Trainer"
                >
                  <UserPlus size={20} />
                </button>
              </div>
              <div className={cn(
                "absolute top-4 right-4 px-3 py-1.5 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg",
                course.status === 'Published' ? "bg-emerald-500/90 text-white" : "bg-amber-500/90 text-white"
              )}>
                {course.status}
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 bg-primary/5 text-[10px] font-black text-primary uppercase tracking-widest rounded-lg">{course.category}</span>
                <span className="size-1 bg-slate-200 rounded-full"></span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{course.level}</span>
              </div>
              <h3 className="font-black text-xl text-slate-900 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem] leading-tight">
                {course.title}
              </h3>
              
              {course.trainer && (
                <div className="mt-4 flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="size-8 rounded-full bg-slate-200 overflow-hidden border border-white shadow-sm">
                    <img src={`https://picsum.photos/seed/${course.trainer}/100/100`} alt={course.trainer} className="size-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Trainer</p>
                    <p className="text-xs font-bold text-slate-900 truncate">{course.trainer}</p>
                  </div>
                </div>
              )}

              <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-50">
                <div className="flex items-center gap-2 text-slate-500">
                  <div className="size-8 rounded-lg bg-slate-50 flex items-center justify-center">
                    <Layers size={16} />
                  </div>
                  <span className="text-xs font-bold">{course.modules} Modules</span>
                </div>
                {course.demand === 'High' ? (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 text-rose-600 rounded-full">
                    <TrendingUp size={14} className="animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest">High Demand</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Updated {course.updatedAt}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Add New Card Placeholder */}
        <div 
          onClick={onCreateNew}
          className="group border-2 border-dashed border-slate-200 rounded-[40px] flex flex-col items-center justify-center p-12 text-slate-400 hover:border-primary hover:bg-primary/5 cursor-pointer transition-all bg-white/50"
        >
          <div className="size-20 rounded-3xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
            <Plus size={32} />
          </div>
          <p className="font-black text-lg text-slate-900 group-hover:text-primary transition-colors">Add New Course</p>
          <p className="text-sm text-slate-500 mt-2 font-medium">Start building your curriculum</p>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 pb-12">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Showing 1 to 4 of 24 courses</p>
        <div className="flex items-center gap-2">
          <button className="size-12 flex items-center justify-center bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all disabled:opacity-30" disabled>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="size-12 flex items-center justify-center bg-slate-900 text-white rounded-2xl font-black text-sm shadow-xl shadow-slate-900/20">1</button>
          <button className="size-12 flex items-center justify-center bg-white border border-slate-100 rounded-2xl font-bold text-sm text-slate-600 hover:bg-slate-50 transition-all">2</button>
          <button className="size-12 flex items-center justify-center bg-white border border-slate-100 rounded-2xl font-bold text-sm text-slate-600 hover:bg-slate-50 transition-all">3</button>
          <button className="size-12 flex items-center justify-center bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Assign Trainer Modal */}
      {isAssignModalOpen && selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-md rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-8 border-b border-slate-50 flex items-center justify-between">
              <div>
                <h3 className="font-black text-2xl text-slate-900">Assign Trainer</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">{selectedCourse.title}</p>
              </div>
              <button 
                onClick={() => setIsAssignModalOpen(false)}
                className="size-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-8 space-y-4">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Available Trainers</p>
              <div className="space-y-3">
                {trainers.map((trainer) => (
                  <button
                    key={trainer.id}
                    onClick={() => confirmAssignment(trainer.name)}
                    className={cn(
                      "w-full flex items-center gap-4 p-4 rounded-3xl border transition-all text-left group",
                      selectedCourse.trainer === trainer.name 
                        ? "bg-primary/5 border-primary" 
                        : "bg-white border-slate-100 hover:border-primary/30 hover:bg-slate-50"
                    )}
                  >
                    <div className="size-12 rounded-2xl bg-slate-100 overflow-hidden border-2 border-white shadow-sm">
                      <img src={trainer.avatar} alt={trainer.name} className="size-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900">{trainer.name}</p>
                      <p className="text-xs text-slate-500 font-medium">{trainer.role}</p>
                    </div>
                    {selectedCourse.trainer === trainer.name ? (
                      <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                        <Check size={16} />
                      </div>
                    ) : (
                      <div className="size-8 rounded-full bg-slate-50 text-slate-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Plus size={16} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-8 bg-slate-50 flex gap-4">
              <button 
                onClick={() => setIsAssignModalOpen(false)}
                className="flex-1 py-4 bg-white text-slate-600 rounded-2xl font-bold text-sm border border-slate-200 hover:bg-slate-100 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
