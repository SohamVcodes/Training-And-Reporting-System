import React from 'react';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  MapPin, 
  Clock, 
  Users, 
  MoreHorizontal,
  Filter,
  Search
} from 'lucide-react';
import { TrainingSession } from '../types';
import { cn } from '../lib/utils';

const sessions: TrainingSession[] = [
  { id: '1', name: 'Cybersecurity Awareness', site: 'Corporate HQ', venue: 'Room 402', date: 'Oct 24, 2023', time: '10:00 AM', duration: '2h', mode: 'In-Person', trainer: 'Sarah Jenkins', registered: 45, capacity: 50, status: 'Scheduled' },
  { id: '2', name: 'Leadership Essentials', site: 'Remote', venue: 'Zoom Meeting', date: 'Oct 25, 2023', time: '02:00 PM', duration: '3h', mode: 'Online', trainer: 'Michael Chen', registered: 120, capacity: 200, status: 'Scheduled' },
  { id: '3', name: 'Safety Protocols 101', site: 'Manufacturing Hub', venue: 'Main Hall', date: 'Oct 24, 2023', time: '09:00 AM', duration: '4h', mode: 'In-Person', trainer: 'David Miller', registered: 28, capacity: 30, status: 'Running' },
  { id: '4', name: 'Advanced React Patterns', site: 'Tech Center', venue: 'Lab A', date: 'Oct 26, 2023', time: '11:00 AM', duration: '2h', mode: 'Hybrid', trainer: 'Alex Morgan', registered: 15, capacity: 20, status: 'Scheduled' },
];

export const TrainingSchedule: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Training Schedule</h2>
          <p className="text-slate-500 mt-1">Plan and manage upcoming training sessions across all locations.</p>
        </div>
        <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
          <Plus size={18} />
          Schedule Session
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Calendar View (Simplified) */}
        <div className="xl:col-span-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-fit">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900">October 2023</h3>
            <div className="flex gap-1">
              <button className="p-1 hover:bg-slate-100 rounded"><ChevronLeft size={18} /></button>
              <button className="p-1 hover:bg-slate-100 rounded"><ChevronRight size={18} /></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
              <div key={d} className="text-center text-[10px] font-bold text-slate-400 py-2">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 31 }).map((_, i) => {
              const day = i + 1;
              const isToday = day === 24;
              const hasEvents = [24, 25, 26, 28].includes(day);
              return (
                <div 
                  key={i} 
                  className={cn(
                    "aspect-square flex flex-col items-center justify-center text-xs font-medium rounded-lg cursor-pointer transition-all relative",
                    isToday ? "bg-primary text-white" : "hover:bg-slate-50 text-slate-700",
                    hasEvents && !isToday && "after:content-[''] after:absolute after:bottom-1 after:size-1 after:bg-primary after:rounded-full"
                  )}
                >
                  {day}
                </div>
              );
            })}
          </div>
          <div className="mt-8 space-y-4">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Today's Highlights</h4>
            <div className="space-y-3">
              <div className="p-3 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg">
                <p className="text-xs font-bold text-emerald-700">Safety Protocols 101</p>
                <p className="text-[10px] text-emerald-600 mt-0.5">09:00 AM - Running</p>
              </div>
              <div className="p-3 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                <p className="text-xs font-bold text-primary">Cybersecurity Awareness</p>
                <p className="text-[10px] text-primary/70 mt-0.5">10:00 AM - Scheduled</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sessions Table */}
        <div className="xl:col-span-3 space-y-6">
          <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
              <input className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-sm outline-none" placeholder="Search sessions..." type="text"/>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium hover:border-primary transition-colors">
                <Filter size={14} className="text-slate-400" />
                Location
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium hover:border-primary transition-colors">
                Mode
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Session Details</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Location & Mode</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Trainer</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Attendance</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sessions.map((session) => (
                  <tr key={session.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-slate-900">{session.name}</p>
                      <div className="flex items-center gap-3 mt-1 text-[10px] text-slate-500 font-medium">
                        <span className="flex items-center gap-1"><CalendarIcon size={12} /> {session.date}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {session.time} ({session.duration})</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-xs font-medium text-slate-700">{session.site}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{session.venue}</p>
                      <span className={cn(
                        "inline-block mt-2 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider",
                        session.mode === 'In-Person' ? "bg-blue-50 text-blue-600" : session.mode === 'Online' ? "bg-purple-50 text-purple-600" : "bg-orange-50 text-orange-600"
                      )}>
                        {session.mode}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-slate-200 overflow-hidden">
                          <img alt={session.trainer} src={`https://picsum.photos/seed/${session.trainer}/24/24`} referrerPolicy="no-referrer" />
                        </div>
                        <span className="text-xs font-medium text-slate-700">{session.trainer}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Users size={12} className="text-slate-400" />
                        <span className="text-xs font-bold text-slate-700">{session.registered}/{session.capacity}</span>
                      </div>
                      <div className="w-20 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${(session.registered / session.capacity) * 100}%` }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                        session.status === 'Running' ? "bg-emerald-100 text-emerald-700 animate-pulse" : "bg-slate-100 text-slate-600"
                      )}>
                        {session.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
