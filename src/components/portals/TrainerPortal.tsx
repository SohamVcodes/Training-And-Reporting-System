import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  FileText, 
  CheckSquare, 
  Plus, 
  Video, 
  Monitor, 
  BarChart,
  Clock,
  ChevronRight,
  Play,
  Upload,
  LayoutDashboard,
  UserCircle,
  Bell,
  Moon,
  Search,
  BookOpen,
  ClipboardList,
  Trash2,
  Edit
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Quiz, Course } from '../../types';
import { QuizCreator } from '../QuizCreator';

type TabType = 'dashboard' | 'materials' | 'assessments' | 'calendar' | 'attendance' | 'profile';

const mockCourses: Course[] = [
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
    id: '3',
    title: 'Effective Communication in Hybrid Workplaces',
    category: 'Soft Skills',
    level: 'Intermediate',
    status: 'Published',
    modules: 15,
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYMwb7VrUcXa1CgZ_389CUWDBYjcz4UeHc9GGj7o_j6NCC5ZezSNZP8zA0ECsEBIX9oZXiFDFUGMgykEHnyIwlxFm-Yq3VcUCAw4hlPrdrDXdO_fotps0n47ZT2oqkJ_wboEbm3TLK09OjNDFxn4TuEribILFqPtl1uCE1p_jznL5eSTH_NmbU39Tzt6yLPc_pkv3kwqEliHXQQtFVLlvgIfc8DODnajGIWKZQBmGGE7gnxNnC4JZCSUc7AbU46osT6Xd4-KcXJeA',
    updatedAt: '1w ago',
    trainer: 'Sarah Drasner'
  }
];

export const TrainerPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [isCreatingQuiz, setIsCreatingQuiz] = useState(false);
  const [quizzes, setQuizzes] = useState<Quiz[]>([
    {
      id: 'q1',
      title: 'React Basics Quiz',
      courseId: '1',
      questions: [],
      duration: 20,
      passingScore: 80,
      createdAt: '2024-03-10T10:00:00Z',
      status: 'Active'
    }
  ]);

  const handleSaveQuiz = (newQuiz: Quiz) => {
    setQuizzes([newQuiz, ...quizzes]);
    setIsCreatingQuiz(false);
  };

  const assignedSessions = [
    {
      id: '1',
      title: 'Advanced React Architecture',
      date: 'Today',
      time: '10:00 AM - 12:00 PM',
      trainees: 24,
      status: 'Ready',
      type: 'Online'
    },
    {
      id: '2',
      title: 'UI/UX Design Systems',
      date: 'Tomorrow',
      time: '02:00 PM - 04:00 PM',
      trainees: 18,
      status: 'Scheduled',
      type: 'In-Person'
    }
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'materials', label: 'My Materials', icon: FileText },
    { id: 'assessments', label: 'Assessments', icon: ClipboardList },
    { id: 'calendar', label: 'Training Calendar', icon: Calendar },
    { id: 'attendance', label: 'Attendance', icon: CheckSquare },
    { id: 'profile', label: 'Profile', icon: UserCircle },
  ];

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-72 border-r border-slate-100 flex flex-col h-full bg-white shrink-0">
        <div className="p-8 flex items-center gap-3">
          <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <Monitor size={24} />
          </div>
          <div>
            <h2 className="font-black text-xl tracking-tight text-slate-900">EduCorp</h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Trainer Portal</p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as TabType)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 group",
                activeTab === item.id 
                  ? "bg-primary text-white shadow-xl shadow-primary/25 translate-x-1" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <item.icon size={20} className={cn(
                "transition-colors",
                activeTab === item.id ? "text-white" : "text-slate-400 group-hover:text-slate-900"
              )} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-50">
          <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-3">
            <div className="size-10 rounded-full bg-slate-200 overflow-hidden">
              <img src="https://picsum.photos/seed/trainer/100/100" alt="Profile" className="size-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-900 truncate">Sarah Drasner</p>
              <p className="text-[10px] text-slate-500 font-medium truncate">Lead Technical Trainer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-slate-50/30">
        {/* Top Bar */}
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0">
          <div className="flex-1 max-w-xl">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search trainees, sessions, or materials..." 
                className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 rounded-xl text-sm transition-all outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-6 ml-8">
            <button className="text-slate-400 hover:text-slate-600 transition-colors">
              <Moon size={20} />
            </button>
            <button className="text-slate-400 hover:text-slate-600 transition-colors relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 size-4 bg-rose-500 border-2 border-white rounded-full text-[8px] font-bold text-white flex items-center justify-center">5</span>
            </button>
            <div className="h-8 w-px bg-slate-100" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900">Sarah Drasner</p>
                <p className="text-[10px] text-slate-500 font-medium">Lead Trainer</p>
              </div>
              <div className="size-10 rounded-xl bg-slate-100 overflow-hidden border-2 border-white shadow-sm">
                <img src="https://picsum.photos/seed/trainer/100/100" alt="Profile" className="size-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {activeTab === 'dashboard' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Trainer Dashboard</h1>
                    <p className="text-slate-500 mt-2 text-lg">Manage your sessions and evaluate trainee performance.</p>
                  </div>
                  <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                    <Plus size={18} />
                    New Session
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Assigned Sessions', value: '12', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Total Trainees', value: '450', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                    { label: 'Avg. Pass Rate', value: '88%', icon: CheckSquare, color: 'text-violet-600', bg: 'bg-violet-50' },
                    { label: 'Hours Taught', value: '124', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-4">
                      <div className={cn("size-14 rounded-2xl flex items-center justify-center", stat.bg, stat.color)}>
                        <stat.icon size={28} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                        <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <h3 className="font-black text-xl">Upcoming Sessions</h3>
                  <div className="space-y-4">
                    {assignedSessions.map((session) => (
                      <div key={session.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
                        <div className="flex items-center gap-4">
                          <div className="size-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                            {session.type === 'Online' ? <Video size={32} /> : <Users size={32} />}
                          </div>
                          <div>
                            <h3 className="font-bold text-xl text-slate-900">{session.title}</h3>
                            <div className="flex items-center gap-4 mt-1 text-sm text-slate-500 font-medium">
                              <span className="flex items-center gap-1.5"><Calendar size={16} /> {session.date}</span>
                              <span className="size-1 bg-slate-300 rounded-full" />
                              <span className="flex items-center gap-1.5"><Clock size={16} /> {session.time}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-8">
                          <div className="text-center">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Trainees</p>
                            <p className="font-black text-slate-900">{session.trainees}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors">
                              Prepare
                            </button>
                            <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl font-bold text-xs shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all">
                              <Play size={14} fill="currentColor" />
                              Start
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'materials' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-500">
                <div className="bg-white p-10 rounded-[32px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center group hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
                  <div className="size-16 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors shadow-inner">
                    <Upload size={32} />
                  </div>
                  <h4 className="font-bold text-lg">Upload Material</h4>
                  <p className="text-xs text-slate-500 mt-2 font-medium">PDF, PPTX, or MP4 files</p>
                </div>
                {[1, 2].map((i) => (
                  <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6 hover:shadow-xl transition-all group">
                    <div className="size-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
                      <FileText size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 leading-tight">React Design Patterns.pdf</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">Added 2 days ago • 4.2 MB</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">Used in 3 Sessions</span>
                      <button className="text-primary text-xs font-bold hover:underline">Edit</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'assessments' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                {isCreatingQuiz ? (
                  <QuizCreator 
                    courses={mockCourses} 
                    onSave={handleSaveQuiz} 
                    onCancel={() => setIsCreatingQuiz(false)} 
                  />
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-black text-2xl">Quiz Management</h3>
                        <p className="text-slate-500 mt-1">Create and manage quizzes for your assigned courses.</p>
                      </div>
                      <button 
                        onClick={() => setIsCreatingQuiz(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                      >
                        <Plus size={18} />
                        Create New Quiz
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {quizzes.map((quiz) => (
                        <div key={quiz.id} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6 hover:shadow-xl transition-all group">
                          <div className="flex items-start justify-between">
                            <div className="size-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shadow-sm">
                              <ClipboardList size={28} />
                            </div>
                            <span className={cn(
                              "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                              quiz.status === 'Active' ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                            )}>
                              {quiz.status}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 text-lg leading-tight">{quiz.title}</h4>
                            <p className="text-xs text-slate-500 font-medium mt-1">
                              {mockCourses.find(c => c.id === quiz.courseId)?.title || 'Unknown Course'}
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-50">
                            <div className="space-y-1">
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Questions</p>
                              <p className="text-sm font-bold text-slate-900">{quiz.questions.length || 0}</p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Duration</p>
                              <p className="text-sm font-bold text-slate-900">{quiz.duration} min</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                                <Edit size={16} />
                              </button>
                              <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all">
                                <Trash2 size={16} />
                              </button>
                            </div>
                            <button className="text-primary text-xs font-bold hover:underline">View Results</button>
                          </div>
                        </div>
                      ))}

                      {quizzes.length === 0 && (
                        <div className="md:col-span-3 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[40px] p-12 text-center">
                          <div className="size-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 text-slate-300 shadow-sm">
                            <ClipboardList size={32} />
                          </div>
                          <h4 className="font-bold text-slate-900">No Quizzes Created</h4>
                          <p className="text-sm text-slate-500 mt-2">Start by creating your first quiz for an assigned course.</p>
                        </div>
                      )}
                    </div>

                    <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
                      <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                        <div>
                          <h3 className="font-black text-2xl">Recent Submissions</h3>
                          <p className="text-slate-500 mt-1">Review trainee performance across all quizzes.</p>
                        </div>
                        <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold shadow-lg shadow-slate-900/10">
                          Export Results
                        </button>
                      </div>
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50/50">
                            <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Trainee</th>
                            <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Quiz</th>
                            <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Score</th>
                            <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                            <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                          {[
                            { name: 'John Doe', quiz: 'React Basics Quiz', score: 92, status: 'Passed' },
                            { name: 'Jane Smith', quiz: 'React Basics Quiz', score: 88, status: 'Passed' },
                            { name: 'Mike Ross', quiz: 'React Basics Quiz', score: 65, status: 'Failed' },
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-slate-50/30 transition-colors">
                              <td className="px-8 py-5">
                                <div className="flex items-center gap-3">
                                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xs">
                                    {row.name.split(' ').map(n => n[0]).join('')}
                                  </div>
                                  <span className="text-sm font-bold text-slate-900">{row.name}</span>
                                </div>
                              </td>
                              <td className="px-8 py-5 text-sm text-slate-600 font-medium">{row.quiz}</td>
                              <td className="px-8 py-5">
                                <span className={cn("font-black text-lg", row.score >= 70 ? "text-emerald-600" : "text-rose-600")}>
                                  {row.score}%
                                </span>
                              </td>
                              <td className="px-8 py-5">
                                <span className={cn(
                                  "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                                  row.status === 'Passed' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                                )}>
                                  {row.status}
                                </span>
                              </td>
                              <td className="px-8 py-5 text-right">
                                <button className="text-primary text-xs font-bold hover:underline">Review</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </div>
            )}

            {activeTab === 'calendar' && (
              <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm animate-in fade-in duration-500">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-black text-2xl">Training Calendar</h3>
                    <p className="text-slate-500 mt-1">Manage your upcoming training sessions.</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-6 py-2.5 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/20">Add Session</button>
                    <div className="flex bg-slate-50 p-1 rounded-xl">
                      <button className="px-4 py-1.5 bg-white rounded-lg text-xs font-bold shadow-sm">Month</button>
                      <button className="px-4 py-1.5 text-slate-500 text-xs font-bold">Week</button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <div key={day} className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest pb-4">{day}</div>
                  ))}
                  {Array.from({ length: 31 }).map((_, i) => (
                    <div key={i} className={cn(
                      "aspect-square rounded-2xl border border-slate-50 p-2 flex flex-col justify-between hover:border-primary/20 hover:bg-primary/5 transition-all cursor-pointer group",
                      i === 12 ? "bg-primary/5 border-primary/20" : ""
                    )}>
                      <span className={cn("text-xs font-bold", i === 12 ? "text-primary" : "text-slate-400")}>{i + 1}</span>
                      {i === 12 && (
                        <div className="size-2 bg-primary rounded-full mx-auto shadow-lg shadow-primary/50" />
                      )}
                      {i === 15 && (
                        <div className="size-2 bg-amber-500 rounded-full mx-auto shadow-lg shadow-amber-500/50" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-50 rounded-3xl space-y-4">
                    <h4 className="font-bold text-sm text-slate-900">Today's Schedule</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 group hover:border-primary/30 transition-all">
                        <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black">10:00</div>
                        <div className="flex-1">
                          <p className="text-sm font-bold">Advanced React Architecture</p>
                          <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Online • 24 Trainees</p>
                        </div>
                        <button className="size-8 rounded-lg bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-3xl space-y-4">
                    <h4 className="font-bold text-sm text-slate-900">Upcoming Deadlines</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100">
                        <div className="size-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                          <ClipboardList size={24} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold">Quiz Results Review</p>
                          <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Due in 5 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'attendance' && (
              <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden animate-in fade-in duration-500">
                <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                  <div>
                    <h3 className="font-black text-2xl">Attendance Management</h3>
                    <p className="text-slate-500 mt-1">Mark and review trainee attendance for your sessions.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                      <input type="text" placeholder="Search sessions..." className="pl-9 pr-4 py-2 bg-slate-50 border-transparent rounded-xl text-xs outline-none focus:ring-2 focus:ring-primary/20" />
                    </div>
                  </div>
                </div>
                <div className="divide-y divide-slate-50">
                  {[
                    { title: 'Advanced React Architecture', date: 'Today, 10:00 AM', trainees: 24, status: 'In Progress' },
                    { title: 'UI/UX Design Systems', date: 'Yesterday', trainees: 18, status: 'Completed' },
                    { title: 'State Management Workshop', date: 'Mar 10, 2024', trainees: 22, status: 'Completed' },
                  ].map((session, i) => (
                    <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50/30 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "size-12 rounded-2xl flex items-center justify-center",
                          session.status === 'In Progress' ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-400"
                        )}>
                          <Users size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{session.title}</p>
                          <p className="text-xs text-slate-500 font-medium">{session.date} • {session.trainees} Trainees</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={cn(
                          "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                          session.status === 'In Progress' ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600"
                        )}>
                          {session.status}
                        </span>
                        <button className="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-primary transition-colors">
                          {session.status === 'In Progress' ? 'Mark Attendance' : 'View Report'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="max-w-4xl mx-auto bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden animate-in fade-in duration-500">
                <div className="h-48 bg-gradient-to-r from-violet-600 to-indigo-600 relative">
                  <div className="absolute -bottom-16 left-12 p-2 bg-white rounded-[32px] shadow-xl">
                    <div className="size-32 rounded-[24px] bg-slate-100 overflow-hidden border-4 border-white">
                      <img src="https://picsum.photos/seed/trainer/200/200" alt="Profile" className="size-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="pt-24 p-12 space-y-12">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-4xl font-black text-slate-900 tracking-tight">Sarah Drasner</h2>
                      <p className="text-lg text-slate-500 font-medium mt-1">Lead Technical Trainer • Curriculum Development</p>
                    </div>
                    <button className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm shadow-xl shadow-slate-900/20 hover:bg-slate-800 transition-all">
                      Edit Profile
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { label: 'Trainer ID', value: 'TRN-2024-012' },
                      { label: 'Email Address', value: 'sarah.d@educorp.com' },
                      { label: 'Specialization', value: 'Frontend Architecture' },
                    ].map((info, i) => (
                      <div key={i} className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{info.label}</p>
                        <p className="text-sm font-bold text-slate-900">{info.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-black text-xl">Certifications & Badges</h3>
                    <div className="flex flex-wrap gap-4">
                      {['Google Certified Trainer', 'AWS Solutions Architect', 'React Core Contributor'].map((badge) => (
                        <div key={badge} className="flex items-center gap-3 px-4 py-3 bg-emerald-50 text-emerald-700 rounded-2xl border border-emerald-100">
                          <BookOpen size={18} />
                          <span className="text-xs font-bold">{badge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
};
