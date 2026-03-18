import React from 'react';
import { Search, Bell, HelpCircle, Calendar } from 'lucide-react';

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 shrink-0 sticky top-0 z-10">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5 group-focus-within:text-primary transition-colors" />
          <input 
            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" 
            placeholder="Search courses, lessons, or tags..." 
            type="text"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 size-2 bg-red-500 border-2 border-white rounded-full"></span>
        </button>
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
          <Calendar size={20} />
        </button>
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
          <HelpCircle size={20} />
        </button>
        
        <div className="h-8 w-px bg-slate-200 mx-2"></div>
        
        <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-1 pr-3 rounded-full transition-colors">
          <div className="size-8 rounded-full bg-slate-200 overflow-hidden ring-2 ring-slate-100">
            <img 
              alt="User Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlmC_WXO9GuCivaKiEKvdBMqlljKHvAr8MxqtL1xMU8EjCoI7FfQI7PubRS5k6L4LTk-qjlrNzgkL9ZfJkI7oivcOC1HO68VkPAdGnO8TjD9f5LflFf8sxbB4JfHYRoT6P906sq5xSdcN0v_Pd6RRjcSxla6aZS8HNb6E3yzpcBQ2m-parnmq0cdkI9vivlwFHIRnUPuXQx138XY8SFKTbUNfTIqMyTrdj-_TaoBrVlsYOdULZlxZ-0PA9OI6Zv-qGifeF1zLB0_k"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden md:block">
            <p className="text-xs font-bold leading-none">Admin User</p>
            <p className="text-[10px] text-slate-500 mt-1">L&D Director</p>
          </div>
        </div>
      </div>
    </header>
  );
};
