import React from 'react';
import { 
  Activity, 
  Users, 
  Clock, 
  MapPin, 
  Monitor, 
  MoreVertical, 
  Play, 
  Pause, 
  StopCircle,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

export const OngoingTrainings: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight flex items-center gap-3">
            Live Monitoring
            <span className="flex size-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </h2>
          <p className="text-slate-500 mt-1">Real-time oversight of active training sessions across the enterprise.</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-1 rounded-lg border border-slate-200">
          <button className="px-4 py-1.5 bg-primary text-white rounded-md text-xs font-bold shadow-sm">Active Now (3)</button>
          <button className="px-4 py-1.5 text-slate-500 hover:text-slate-700 text-xs font-bold">Upcoming (8)</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {[
          { title: 'Safety Protocols 101', trainer: 'David Miller', location: 'Manufacturing Hub', time: 'Started 45m ago', attendees: 28, capacity: 30, status: 'Running', type: 'In-Person' },
          { title: 'Leadership Essentials', trainer: 'Michael Chen', location: 'Zoom Meeting', time: 'Started 12m ago', attendees: 142, capacity: 200, status: 'Running', type: 'Online' },
          { title: 'Cybersecurity Basics', trainer: 'Sarah Jenkins', location: 'Corporate HQ', time: 'Starting in 5m', attendees: 45, capacity: 50, status: 'Starting', type: 'Hybrid' },
        ].map((session, i) => (
          <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={cn(
                  "px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest",
                  session.status === 'Running' ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                )}>
                  {session.status}
                </div>
                <button className="p-1 text-slate-400 hover:text-slate-600">
                  <MoreVertical size={18} />
                </button>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors mb-4">{session.title}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Users size={16} className="text-slate-400" />
                  <span className="font-medium">{session.trainer}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <MapPin size={16} className="text-slate-400" />
                  <span className="font-medium">{session.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Clock size={16} className="text-slate-400" />
                  <span className="font-medium">{session.time}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-500">ATTENDANCE</span>
                  <span className="text-slate-900">{Math.round((session.attendees / session.capacity) * 100)}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className={cn(
                    "h-full rounded-full transition-all duration-1000",
                    session.status === 'Running' ? "bg-emerald-500" : "bg-amber-500"
                  )} style={{ width: `${(session.attendees / session.capacity) * 100}%` }}></div>
                </div>
                <p className="text-[10px] text-slate-400 text-right font-medium">{session.attendees} of {session.capacity} registered</p>
              </div>
            </div>
            
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <div className="flex gap-2">
                <button className="size-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
                  <MessageSquare size={16} />
                </button>
                <button className="size-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
                  <Monitor size={16} />
                </button>
              </div>
              <div className="flex gap-2">
                {session.status === 'Running' ? (
                  <>
                    <button className="px-3 py-1.5 bg-amber-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 hover:bg-amber-600 transition-colors">
                      <Pause size={14} fill="currentColor" /> Pause
                    </button>
                    <button className="px-3 py-1.5 bg-rose-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 hover:bg-rose-600 transition-colors">
                      <StopCircle size={14} fill="currentColor" /> End
                    </button>
                  </>
                ) : (
                  <button className="px-4 py-1.5 bg-primary text-white rounded-lg text-xs font-bold flex items-center gap-1.5 hover:bg-primary/90 transition-colors">
                    <Play size={14} fill="currentColor" /> Start Session
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Real-time Feed */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <h3 className="font-bold text-slate-900">Live Activity Feed</h3>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Auto-updating</span>
        </div>
        <div className="p-6 space-y-6">
          {[
            { user: 'Sarah Jenkins', action: 'started the session', target: 'Cybersecurity Basics', time: 'Just now', icon: Play, color: 'text-emerald-500 bg-emerald-50' },
            { user: 'System', action: 'marked attendance for 12 employees in', target: 'Leadership Essentials', time: '3 mins ago', icon: Users, color: 'text-primary bg-primary/5' },
            { user: 'David Miller', action: 'paused the session', target: 'Safety Protocols 101', time: '8 mins ago', icon: Pause, color: 'text-amber-500 bg-amber-50' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className={cn("size-8 rounded-lg flex items-center justify-center shrink-0", item.color)}>
                <item.icon size={16} />
              </div>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-bold text-slate-900">{item.user}</span>
                  <span className="text-slate-500 mx-1">{item.action}</span>
                  <span className="font-bold text-primary cursor-pointer hover:underline">{item.target}</span>
                </p>
                <p className="text-[10px] text-slate-400 mt-1 font-medium uppercase tracking-wider">{item.time}</p>
              </div>
              <button className="text-slate-300 hover:text-slate-500">
                <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
