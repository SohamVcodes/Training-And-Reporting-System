import React, { useState } from 'react';
import { 
  BookOpen, 
  Award, 
  Clock, 
  CheckCircle2, 
  PlayCircle, 
  Search,
  TrendingUp,
  Calendar,
  ClipboardList,
  Download,
  LayoutDashboard,
  Video,
  UserCircle,
  Bell,
  Moon,
  ChevronRight,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { cn } from '../../lib/utils';

type TabType = 'dashboard' | 'courses' | 'calendar' | 'video_library' | 'assessments' | 'certificates' | 'attendance' | 'profile';

export const EmployeePortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  const enrolledPrograms = [
    {
      id: '1',
      title: 'Advanced React Architecture',
      progress: 65,
      nextSession: 'Today, 10:00 AM',
      thumbnail: 'https://picsum.photos/seed/react/400/250',
      trainer: 'Sarah Drasner',
      status: 'In Progress'
    },
    {
      id: '2',
      title: 'Enterprise Security 101',
      progress: 30,
      nextSession: 'Mar 15, 02:00 PM',
      thumbnail: 'https://picsum.photos/seed/security/400/250',
      trainer: 'Kevin Mitnick',
      status: 'In Progress'
    }
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'calendar', label: 'Training Calendar', icon: Calendar },
    { id: 'video_library', label: 'Video Library', icon: Video },
    { id: 'assessments', label: 'Assessments', icon: ClipboardList },
    { id: 'certificates', label: 'My Certificates', icon: Award },
    { id: 'attendance', label: 'Attendance', icon: CheckCircle2 },
    { id: 'profile', label: 'Profile', icon: UserCircle },
  ];

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-72 border-r border-slate-100 flex flex-col h-full bg-white shrink-0">
        <div className="p-8 flex items-center gap-3">
          <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <BookOpen size={24} />
          </div>
          <div>
            <h2 className="font-black text-xl tracking-tight text-slate-900">EduCorp</h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">LMS Portal</p>
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
              <img src="https://picsum.photos/seed/alex/100/100" alt="Profile" className="size-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-900 truncate">Alex Johnson</p>
              <p className="text-[10px] text-slate-500 font-medium truncate">Senior UX Designer</p>
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
                placeholder="Search courses, skills, or mentors..." 
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
              <span className="absolute -top-1 -right-1 size-4 bg-rose-500 border-2 border-white rounded-full text-[8px] font-bold text-white flex items-center justify-center">2</span>
            </button>
            <div className="h-8 w-px bg-slate-100" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900">Alex Johnson</p>
                <p className="text-[10px] text-slate-500 font-medium">Senior UX Designer</p>
              </div>
              <div className="size-10 rounded-xl bg-slate-100 overflow-hidden border-2 border-white shadow-sm">
                <img src="https://picsum.photos/seed/alex/100/100" alt="Profile" className="size-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {activeTab === 'dashboard' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <h1 className="text-4xl font-black text-slate-900 tracking-tight">Welcome back, Alex!</h1>
                  <p className="text-slate-500 mt-2 text-lg">You have 3 courses to finish this week. Keep up the great work!</p>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Total Assigned', value: '12', sub: '+2 this month', icon: ClipboardList, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Completed', value: '8', sub: '67% Progress', icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                    { label: 'In Progress', value: '3', sub: 'Due Soon', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
                    { label: 'Pending Assessments', value: '1', sub: 'Action Required', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-4">
                      <div className={cn("size-16 rounded-2xl flex items-center justify-center", stat.bg, stat.color)}>
                        <stat.icon size={32} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                        <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                      </div>
                      <p className={cn("text-[10px] font-black uppercase tracking-widest", stat.color)}>{stat.sub}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-black text-xl">My Learning Path</h3>
                      <button className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                        View All <ChevronRight size={16} />
                      </button>
                    </div>
                    <div className="space-y-4">
                      {enrolledPrograms.map((program) => (
                        <div key={program.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                              <div className="size-20 rounded-2xl bg-slate-100 overflow-hidden shrink-0 shadow-inner">
                                <img alt={program.title} src={program.thumbnail} className="size-full object-cover" referrerPolicy="no-referrer" />
                              </div>
                              <div>
                                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{program.title}</h4>
                                <p className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                                  <Calendar size={14} /> Next Session: {program.nextSession}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-6">
                              <div className="text-right">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Completion</p>
                                <div className="flex items-center gap-3">
                                  <div className="w-32 h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                                    <div className="h-full bg-primary rounded-full transition-all duration-1000 shadow-lg shadow-primary/30" style={{ width: `${program.progress}%` }}></div>
                                  </div>
                                  <span className="text-sm font-black text-slate-900">{program.progress}%</span>
                                </div>
                              </div>
                              <button className="px-6 py-3 bg-primary text-white rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                                Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-black text-xl">Upcoming Assessments</h3>
                    <div className="space-y-4">
                      {[
                        { title: 'React Architecture Quiz', due: 'Due in 2 days', score: 'Min 80% required' },
                        { title: 'Security Compliance Test', due: 'Due in 5 days', score: 'Min 70% required' },
                      ].map((quiz, i) => (
                        <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                          <div className="flex items-start justify-between">
                            <div className="size-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-sm">
                              <ClipboardList size={24} />
                            </div>
                            <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider">Pending</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900">{quiz.title}</h4>
                            <p className="text-xs text-slate-500 mt-1 font-medium">{quiz.due}</p>
                          </div>
                          <div className="pt-2 border-t border-slate-50">
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-3">{quiz.score}</p>
                            <button className="w-full py-3 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-2xl text-xs font-bold transition-all">
                              Start Assessment
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-500">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-slate-200/50 transition-all group">
                    <div className="aspect-video bg-slate-100 relative overflow-hidden">
                      <img src={`https://picsum.photos/seed/course${i}/400/250`} alt="Course" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
                          New
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                      <div>
                        <h4 className="font-bold text-xl text-slate-900 leading-tight">Advanced Project Management</h4>
                        <p className="text-sm text-slate-500 mt-2 font-medium">Learn the latest methodologies for enterprise projects.</p>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                        <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          <span className="flex items-center gap-1"><Clock size={14} /> 12h</span>
                          <span className="flex items-center gap-1"><BookOpen size={14} /> 8 Mod</span>
                        </div>
                        <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-primary transition-colors shadow-lg shadow-slate-900/10">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'calendar' && (
              <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm animate-in fade-in duration-500">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-black text-2xl">Training Calendar</h3>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-slate-100 rounded-xl text-sm font-bold">Month</button>
                    <button className="px-4 py-2 text-slate-500 text-sm font-bold">Week</button>
                    <button className="px-4 py-2 text-slate-500 text-sm font-bold">Day</button>
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
                <div className="mt-8 p-6 bg-slate-50 rounded-2xl space-y-4">
                  <h4 className="font-bold text-sm text-slate-900">Upcoming Events</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100">
                      <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">13</div>
                      <div className="flex-1">
                        <p className="text-sm font-bold">React Architecture Workshop</p>
                        <p className="text-xs text-slate-500">10:00 AM - 12:00 PM</p>
                      </div>
                      <button className="text-xs font-bold text-primary">Join</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'attendance' && (
              <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden animate-in fade-in duration-500">
                <div className="p-8 border-b border-slate-50">
                  <h3 className="font-black text-2xl">Attendance History</h3>
                  <p className="text-slate-500 mt-1">Track your presence in training sessions.</p>
                </div>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50">
                      <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Session Name</th>
                      <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
                      <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Duration</th>
                      <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      { name: 'React Basics Intro', date: 'Mar 10, 2024', duration: '2h 00m', status: 'Present' },
                      { name: 'State Management Workshop', date: 'Mar 08, 2024', duration: '1h 30m', status: 'Present' },
                      { name: 'Security Compliance A', date: 'Mar 05, 2024', duration: '1h 00m', status: 'Absent' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/30 transition-colors">
                        <td className="px-8 py-5">
                          <span className="text-sm font-bold text-slate-900">{row.name}</span>
                        </td>
                        <td className="px-8 py-5 text-sm text-slate-500 font-medium">{row.date}</td>
                        <td className="px-8 py-5 text-sm text-slate-500 font-medium">{row.duration}</td>
                        <td className="px-8 py-5">
                          <span className={cn(
                            "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                            row.status === 'Present' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                          )}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'certificates' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-500">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
                    <div className="size-24 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                      <Award size={48} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-slate-900 leading-tight">Full Stack Development Certification</h4>
                      <p className="text-sm text-slate-500 mt-2 font-medium">Issued on Jan 12, 2024</p>
                      <div className="flex items-center gap-4 mt-6">
                        <button className="flex items-center gap-2 text-xs font-bold text-primary hover:underline">
                          <Download size={16} /> Download PDF
                        </button>
                        <div className="size-1 bg-slate-200 rounded-full" />
                        <button className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'video_library' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-black text-2xl">Video Library</h3>
                    <p className="text-slate-500 mt-1">Access recorded sessions and tutorial videos.</p>
                  </div>
                  <div className="flex gap-2">
                    {['All', 'Technical', 'Soft Skills', 'Security'].map((cat) => (
                      <button key={cat} className={cn(
                        "px-4 py-2 rounded-xl text-xs font-bold transition-all",
                        cat === 'All' ? "bg-primary text-white" : "bg-white border border-slate-100 text-slate-600 hover:bg-slate-50"
                      )}>
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: 'React Performance Optimization', duration: '45:20', views: '1.2k', category: 'Technical', thumb: 'https://picsum.photos/seed/video1/400/225' },
                    { title: 'Effective Communication', duration: '28:15', views: '850', category: 'Soft Skills', thumb: 'https://picsum.photos/seed/video2/400/225' },
                    { title: 'Cybersecurity Fundamentals', duration: '52:10', views: '2.1k', category: 'Security', thumb: 'https://picsum.photos/seed/video3/400/225' },
                    { title: 'State Management with Redux', duration: '1:12:05', views: '920', category: 'Technical', thumb: 'https://picsum.photos/seed/video4/400/225' },
                    { title: 'Leadership Essentials', duration: '35:40', views: '1.5k', category: 'Soft Skills', thumb: 'https://picsum.photos/seed/video5/400/225' },
                    { title: 'Advanced CSS Grid', duration: '42:30', views: '1.1k', category: 'Technical', thumb: 'https://picsum.photos/seed/video6/400/225' },
                  ].map((video, i) => (
                    <div key={i} className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden group hover:shadow-2xl hover:shadow-slate-200/50 transition-all">
                      <div className="aspect-video relative overflow-hidden">
                        <img src={video.thumb} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <div className="size-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-primary scale-0 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                            <PlayCircle size={24} fill="currentColor" />
                          </div>
                        </div>
                        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[10px] font-bold text-white">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-1 rounded-lg uppercase tracking-wider">{video.category}</span>
                          <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1"><TrendingUp size={12} /> {video.views} views</span>
                        </div>
                        <h4 className="font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors">{video.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'assessments' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-black text-2xl">My Assessments</h3>
                    <p className="text-slate-500 mt-1">View your results and pending tests.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-50 bg-slate-50/50">
                      <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400">Pending Assessments</h4>
                    </div>
                    <div className="divide-y divide-slate-50">
                      {[
                        { title: 'React Hooks Deep Dive', due: 'Tomorrow', duration: '30 mins' },
                        { title: 'Enterprise Security Quiz', due: 'Mar 20', duration: '15 mins' },
                      ].map((item, i) => (
                        <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="size-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                              <ClipboardList size={24} />
                            </div>
                            <div>
                              <p className="font-bold text-slate-900">{item.title}</p>
                              <p className="text-xs text-slate-500 font-medium">Due: {item.due} • {item.duration}</p>
                            </div>
                          </div>
                          <button className="px-5 py-2 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/20">Start</button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-50 bg-slate-50/50">
                      <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400">Recent Results</h4>
                    </div>
                    <div className="divide-y divide-slate-50">
                      {[
                        { title: 'JavaScript Fundamentals', score: 95, date: 'Mar 10' },
                        { title: 'UI Design Principles', score: 82, date: 'Mar 05' },
                        { title: 'Git Version Control', score: 88, date: 'Feb 28' },
                      ].map((item, i) => (
                        <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="size-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                              <CheckCircle2 size={24} />
                            </div>
                            <div>
                              <p className="font-bold text-slate-900">{item.title}</p>
                              <p className="text-xs text-slate-500 font-medium">Completed on {item.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-black text-emerald-600">{item.score}%</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Passed</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="max-w-4xl mx-auto bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden animate-in fade-in duration-500">
                <div className="h-48 bg-gradient-to-r from-primary to-violet-600 relative">
                  <div className="absolute -bottom-16 left-12 p-2 bg-white rounded-[32px] shadow-xl">
                    <div className="size-32 rounded-[24px] bg-slate-100 overflow-hidden border-4 border-white">
                      <img src="https://picsum.photos/seed/alex/200/200" alt="Profile" className="size-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="pt-24 p-12 space-y-12">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-4xl font-black text-slate-900 tracking-tight">Alex Johnson</h2>
                      <p className="text-lg text-slate-500 font-medium mt-1">Senior UX Designer • Engineering Team</p>
                    </div>
                    <button className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm shadow-xl shadow-slate-900/20 hover:bg-slate-800 transition-all">
                      Edit Profile
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { label: 'Employee ID', value: 'EMP-2024-089' },
                      { label: 'Email Address', value: 'alex.j@educorp.com' },
                      { label: 'Joined Date', value: 'Jan 15, 2022' },
                    ].map((info, i) => (
                      <div key={i} className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{info.label}</p>
                        <p className="text-sm font-bold text-slate-900">{info.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-black text-xl">Skills & Expertise</h3>
                    <div className="flex flex-wrap gap-3">
                      {['UI/UX Design', 'React.js', 'TypeScript', 'Figma', 'System Architecture', 'Product Strategy'].map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold border border-slate-100">
                          {skill}
                        </span>
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
