import React from 'react';
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Mail, 
  MapPin, 
  GraduationCap,
  ChevronRight,
  Download
} from 'lucide-react';
import { Employee } from '../types';
import { cn } from '../lib/utils';

const employees: Employee[] = [
  { id: '1', code: 'EMP-1024', name: 'Alice Thompson', designation: 'Senior Developer', department: 'Engineering', location: 'New York', courses: 12, assessments: 8, avgScore: 92, avatar: 'https://picsum.photos/seed/alice/64/64' },
  { id: '2', code: 'EMP-1025', name: 'Robert Wilson', designation: 'Product Manager', department: 'Product', location: 'London', courses: 8, assessments: 5, avgScore: 85, avatar: 'https://picsum.photos/seed/robert/64/64' },
  { id: '3', code: 'EMP-1026', name: 'Elena Rodriguez', designation: 'UX Designer', department: 'Design', location: 'Madrid', courses: 15, assessments: 12, avgScore: 95, avatar: 'https://picsum.photos/seed/elena/64/64' },
  { id: '4', code: 'EMP-1027', name: 'David Kim', designation: 'QA Engineer', department: 'Engineering', location: 'Seoul', courses: 6, assessments: 4, avgScore: 78, avatar: 'https://picsum.photos/seed/david/64/64' },
  { id: '5', code: 'EMP-1028', name: 'Sophie Martin', designation: 'HR Specialist', department: 'Human Resources', location: 'Paris', courses: 10, assessments: 7, avgScore: 88, avatar: 'https://picsum.photos/seed/sophie/64/64' },
];

export const Employees: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Employee Directory</h2>
          <p className="text-slate-500 mt-1">Manage employee training lifecycle and performance metrics.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-50 transition-all">
            <Download size={18} />
            Export Data
          </button>
          <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
            <UserPlus size={18} />
            Add Employee
          </button>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="relative flex-1 min-w-[280px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
          <input className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="Search by name, code, or department..." type="text"/>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:border-primary transition-colors">
            <Filter size={16} className="text-slate-400" />
            Department
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:border-primary transition-colors">
            Location
          </button>
        </div>
      </div>

      {/* Employee Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Employee</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Department</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Training Stats</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Avg Score</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-slate-200 overflow-hidden shrink-0 ring-2 ring-white shadow-sm">
                      <img alt={emp.name} src={emp.avatar} referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">{emp.name}</p>
                      <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">{emp.code} • {emp.designation}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase tracking-wider">
                    {emp.department}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                    <MapPin size={14} className="text-slate-400" />
                    {emp.location}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-900">{emp.courses}</span>
                      <span className="text-[8px] font-bold text-slate-400 uppercase">Courses</span>
                    </div>
                    <div className="w-px h-6 bg-slate-100"></div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-900">{emp.assessments}</span>
                      <span className="text-[8px] font-bold text-slate-400 uppercase">Tests</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "size-8 rounded-lg flex items-center justify-center text-xs font-bold",
                      emp.avgScore >= 90 ? "bg-emerald-50 text-emerald-600" : emp.avgScore >= 80 ? "bg-primary/5 text-primary" : "bg-amber-50 text-amber-600"
                    )}>
                      {emp.avgScore}%
                    </div>
                    <div className="flex-1 min-w-[60px] h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className={cn(
                        "h-full rounded-full",
                        emp.avgScore >= 90 ? "bg-emerald-500" : emp.avgScore >= 80 ? "bg-primary" : "bg-amber-500"
                      )} style={{ width: `${emp.avgScore}%` }}></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors" title="View Profile">
                      <ChevronRight size={18} />
                    </button>
                    <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between pb-8">
        <p className="text-sm text-slate-500 font-medium">Showing 5 of 1,240 employees</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold hover:bg-white disabled:opacity-50" disabled>Previous</button>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold">1</button>
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold hover:bg-white">2</button>
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold hover:bg-white">3</button>
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold hover:bg-white">Next</button>
        </div>
      </div>
    </div>
  );
};
