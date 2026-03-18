import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  BarChart3, 
  Settings, 
  Database, 
  ClipboardCheck, 
  CalendarDays, 
  Activity, 
  Tags, 
  Video,
  GraduationCap,
  LogOut,
  Layers,
  PlayCircle
} from 'lucide-react';
import { Screen, NavItem } from '../types';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, section: 'main' },
  { id: 'courses', label: 'Courses', icon: BookOpen, section: 'main' },
  { id: 'lessons', label: 'Lessons', icon: Layers, section: 'main' },
  { id: 'tutorials', label: 'Tutorials', icon: PlayCircle, section: 'main' },
  { id: 'ongoing', label: 'Live Sessions', icon: Activity, section: 'main' },
  
  { id: 'question-bank', label: 'Question Bank', icon: Database, section: 'evaluation' },
  { id: 'assessments', label: 'Assessments', icon: ClipboardCheck, section: 'evaluation' },
  
  { id: 'schedule', label: 'Training Schedule', icon: CalendarDays, section: 'management' },
  { id: 'reports', label: 'Reports', icon: BarChart3, section: 'management' },
  { id: 'employees', label: 'Employees', icon: Users, section: 'management' },
  { id: 'tags', label: 'Tags Manager', icon: Tags, section: 'management' },
  
  { id: 'settings', label: 'Settings', icon: Settings, section: 'system' },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeScreen, onScreenChange }) => {
  const renderSection = (section: string, label?: string) => {
    const items = navItems.filter(item => item.section === section);
    return (
      <div className="space-y-1">
        {label && (
          <p className="px-3 pt-4 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            {label}
          </p>
        )}
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onScreenChange(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium",
              activeScreen === item.id 
                ? "bg-primary/10 text-primary" 
                : "text-slate-600 hover:bg-slate-100"
            )}
          >
            <item.icon size={20} className={cn(activeScreen === item.id && "fill-primary/20")} />
            {item.label}
          </button>
        ))}
      </div>
    );
  };

  return (
    <aside className="w-64 flex-shrink-0 border-r border-slate-200 bg-white flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
          <GraduationCap size={24} />
        </div>
        <div>
          <h1 className="text-sm font-bold leading-none">EduTrain Pro</h1>
          <p className="text-xs text-slate-500 mt-1">Admin Portal</p>
        </div>
      </div>
      
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar pb-6">
        {renderSection('main')}
        {renderSection('evaluation', 'Evaluation')}
        {renderSection('management', 'Management')}
        {renderSection('system', 'System')}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-xl">
          <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
            AM
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold truncate">Alex Morgan</p>
            <p className="text-[10px] text-slate-500 truncate">Lead Instructor</p>
          </div>
          <button className="text-slate-400 hover:text-slate-600">
            <LogOut size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
};
