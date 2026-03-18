import React from 'react';
import { 
  Book, 
  Video, 
  CheckCircle2, 
  Rocket, 
  Users, 
  Star, 
  ArrowUp, 
  ArrowDown, 
  Minus,
  CalendarDays,
  ChevronRight,
  UploadCloud,
  CheckCircle,
  Shield
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { cn } from '../lib/utils';

const completionData = [
  { name: 'Week 1', completed: 40, enrolled: 60 },
  { name: 'Week 2', completed: 30, enrolled: 55 },
  { name: 'Week 3', completed: 65, enrolled: 80 },
  { name: 'Week 4', completed: 85, enrolled: 90 },
];

const categoryData = [
  { name: 'Technical', value: 35, color: '#137fec' },
  { name: 'Cybersecurity', value: 25, color: '#10b981' },
  { name: 'Leadership', value: 20, color: '#f59e0b' },
  { name: 'Soft Skills', value: 20, color: '#a855f7' },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black tracking-tight">Training Analytics Dashboard</h2>
          <p className="text-slate-500 text-sm mt-1">Performance insights across all enterprise learning modules.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all">
          <CalendarDays size={18} />
          Oct 1, 2023 - Oct 31, 2023
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {[
          { label: 'Total Courses', value: '124', trend: '+12%', icon: Book, color: 'text-blue-500' },
          { label: 'Total Videos', value: '450', trend: 'Steady', icon: Video, color: 'text-purple-500' },
          { label: 'Total Assessments', value: '85', trend: '+5%', icon: CheckCircle2, color: 'text-emerald-500' },
          { label: 'Active Trainings', value: '12', trend: 'Live Now', icon: Rocket, color: 'text-orange-500' },
          { label: 'Enrolled', value: '3,420', trend: '+8.4%', icon: Users, color: 'text-indigo-500' },
          { label: 'Avg Score', value: '82%', trend: '-1.2%', icon: Star, color: 'text-rose-500' },
        ].map((card, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className={cn("mb-2 opacity-60", card.color)}>
              <card.icon size={24} />
            </div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{card.label}</p>
            <h3 className="text-2xl font-bold mt-1">{card.value}</h3>
            <div className={cn(
              "flex items-center gap-1 mt-2 text-xs font-bold",
              card.trend.includes('+') ? "text-emerald-500" : card.trend.includes('-') ? "text-rose-500" : "text-slate-400"
            )}>
              {card.trend.includes('+') ? <ArrowUp size={12} /> : card.trend.includes('-') ? <ArrowDown size={12} /> : <Minus size={12} />}
              {card.trend}
            </div>
          </div>
        ))}
      </div>

      {/* Governance & Compliance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-6">
          <div className="size-14 rounded-2xl bg-violet-50 flex items-center justify-center text-violet-600 shrink-0">
            <CheckCircle size={32} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Enterprise Compliance</p>
            <div className="flex items-end gap-3 mt-1">
              <h3 className="text-3xl font-black">94.2%</h3>
              <span className="text-xs font-bold text-emerald-600 mb-1">+2.4% this month</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">All mandatory safety and policy modules are up to date.</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-6">
          <div className="size-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
            <Shield size={32} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Conflict Detection System</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="size-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <h3 className="text-xl font-bold text-slate-900">System Status: Clear</h3>
            </div>
            <p className="text-xs text-slate-500 mt-1">No scheduling or trainer availability conflicts detected for upcoming sessions.</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-bold text-slate-800">Training Completion Rate</h4>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5"><span className="size-3 rounded-full bg-primary"></span> Completed</div>
              <div className="flex items-center gap-1.5"><span className="size-3 rounded-full bg-primary/30"></span> Enrolled</div>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={completionData}>
                <defs>
                  <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#137fec" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#137fec" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 600, fill: '#94a3b8'}} dy={10} />
                <YAxis hide />
                <Tooltip />
                <Area type="monotone" dataKey="completed" stroke="#137fec" strokeWidth={3} fillOpacity={1} fill="url(#colorCompleted)" />
                <Area type="monotone" dataKey="enrolled" stroke="#137fec" strokeWidth={1} strokeDasharray="5 5" fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h4 className="font-bold text-slate-800 mb-6">Assessment Distribution</h4>
          <div className="space-y-4">
            {[
              { label: 'Excellent (90-100)', value: 42, color: 'bg-emerald-500' },
              { label: 'Good (75-89)', value: 35, color: 'bg-primary' },
              { label: 'Average (60-74)', value: 18, color: 'bg-amber-500' },
              { label: 'Needs Review (<60)', value: 5, color: 'bg-rose-500' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-medium">{item.label}</span>
                  <span className="font-bold">{item.value}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className={cn("h-full rounded-full", item.color)} style={{ width: `${item.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="size-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img alt="Avatar" src={`https://picsum.photos/seed/user${i}/32/32`} referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="size-6 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-500">
                  +12
                </div>
              </div>
              <p className="text-[10px] text-slate-500">Mentorship recommended for 14 employees</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h4 className="font-bold text-slate-800 mb-6">Courses by Category</h4>
          <div className="flex items-center gap-8">
            <div className="size-40 shrink-0 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-black">124</span>
                <span className="text-[10px] text-slate-500 uppercase font-bold">Total</span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 w-full">
              {categoryData.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded" style={{ backgroundColor: item.color }}></div> 
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-bold text-slate-800">Recent Activity</h4>
            <button className="text-primary text-xs font-bold hover:underline">View All</button>
          </div>
          <div className="space-y-6">
            {[
              { text: "New course 'Advanced React Architecture' uploaded by Sarah J.", time: "2 hours ago", icon: UploadCloud, color: "bg-blue-50 text-primary" },
              { text: "Assessment 'Cybersecurity Basics' scheduled for Oct 20th.", time: "5 hours ago", icon: CalendarDays, color: "bg-amber-50 text-amber-500" },
              { text: "John Doe completed 'Leadership Essentials'.", time: "Yesterday at 4:30 PM", icon: CheckCircle, color: "bg-emerald-50 text-emerald-500" },
            ].map((activity, i) => (
              <div key={i} className="flex gap-4">
                <div className={cn("size-10 rounded-lg flex items-center justify-center shrink-0", activity.color)}>
                  <activity.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium leading-normal">{activity.text}</p>
                  <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
