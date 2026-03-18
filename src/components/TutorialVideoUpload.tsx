import React from 'react';
import { 
  Play, 
  Upload, 
  FileVideo, 
  Type, 
  Clock, 
  ChevronRight, 
  Save, 
  Eye,
  Settings,
  Image as ImageIcon
} from 'lucide-react';

export const TutorialVideoUpload: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <a className="hover:text-primary transition-colors" href="#">Courses</a>
            <ChevronRight size={14} />
            <a className="hover:text-primary transition-colors" href="#">Java Backend</a>
            <ChevronRight size={14} />
            <a className="hover:text-primary transition-colors" href="#">Lessons</a>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-medium">Tutorials</span>
          </nav>
          <h2 className="text-3xl font-black tracking-tight">Tutorial & Video Content</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 text-sm font-bold border border-slate-200 rounded-lg hover:bg-white transition-all">Cancel</button>
          <button className="px-5 py-2.5 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
            <Save size={18} />
            Save Tutorial
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Column: Form Details */}
        <div className="xl:col-span-2 space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Settings className="text-primary" size={20} />
              Tutorial Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tutorial Title</label>
                <input className="w-full bg-slate-50 border-slate-200 rounded-lg py-2.5 text-sm focus:ring-primary focus:border-primary outline-none border" type="text" defaultValue="Setting up JDK and IDE"/>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tutorial Number</label>
                <input className="w-full bg-slate-50 border-slate-200 rounded-lg py-2.5 text-sm focus:ring-primary focus:border-primary outline-none border" type="text" defaultValue="1.1"/>
              </div>
              <div className="md:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tutorial Description</label>
                <textarea className="w-full bg-slate-50 border-slate-200 rounded-lg py-2.5 text-sm focus:ring-primary focus:border-primary resize-none outline-none border" rows={3} defaultValue="Step-by-step guide to installing the Java Development Kit and configuring IntelliJ IDEA for your first project." />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <FileVideo className="text-primary" size={20} />
              Video Content
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Video Title</label>
                  <input className="w-full bg-slate-50 border-slate-200 rounded-lg py-2.5 text-sm focus:ring-primary focus:border-primary outline-none border" type="text" defaultValue="Installation Walkthrough"/>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Duration</label>
                  <div className="relative">
                    <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input className="w-full bg-slate-50 border-slate-200 rounded-lg py-2.5 text-sm focus:ring-primary focus:border-primary pr-10 outline-none border" type="text" defaultValue="12:45"/>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Video File</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                    <Upload className="text-primary" size={24} />
                    <p className="text-xs font-bold text-slate-600">Upload Video</p>
                    <p className="text-[10px] text-slate-400">MP4, WebM (Max 500MB)</p>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Subtitles (VTT)</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                    <Type className="text-primary" size={24} />
                    <p className="text-xs font-bold text-slate-600">Upload Subtitles</p>
                    <p className="text-[10px] text-slate-400">VTT, SRT (Max 5MB)</p>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Video Thumbnail</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                    <ImageIcon className="text-primary" size={24} />
                    <p className="text-xs font-bold text-slate-600">Upload Image</p>
                    <p className="text-[10px] text-slate-400">JPG, PNG (Max 10MB)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Preview */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
              <h3 className="font-bold text-sm flex items-center gap-2">
                <Eye size={16} className="text-primary" />
                Live Preview
              </h3>
              <span className="text-[10px] font-bold text-emerald-500 uppercase bg-emerald-50 px-2 py-0.5 rounded">Ready</span>
            </div>
            <div className="aspect-video bg-slate-900 relative group">
              <img 
                alt="Video Placeholder" 
                className="w-full h-full object-cover opacity-50" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi4nNj4mE0uztgeiNCjDrOoYzAzxT8shXEjfHO3AWltWuEJ5rGItxW5REzud2mz7oiOuzqYhaqwU7v8if1RbGNh4lFTSQPdqSzYOJOwMqUkYtz8HIVY3cu-ZSkOoluHfqPaGtUjoWOY9EPREU-saK0-V37fxq1oEY27SreIOAazZGvzL3MyYPnYAH0ZFOmX2yY1vZ6tzU4b8gk_2Zu-7vXnbvNly7vFytbzbZJOm3x594UzhUGuftvCC70r0L4G0wKO6Qdxh719M8"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="size-16 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                  <Play size={32} fill="currentColor" />
                </button>
              </div>
              {/* Fake Player Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="h-1 w-full bg-white/20 rounded-full mb-3 overflow-hidden">
                  <div className="h-full bg-primary w-1/3"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Play size={16} className="text-white" fill="currentColor" />
                    <span className="text-[10px] text-white font-medium">04:12 / 12:45</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="size-1.5 rounded-full bg-white/40"></div>
                    <div className="size-1.5 rounded-full bg-white/40"></div>
                    <div className="size-1.5 rounded-full bg-white/40"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-sm mb-2">Installation Walkthrough</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                This video will be displayed to learners as the primary content for Tutorial 1.1. 
                Ensure the audio is clear and the resolution is at least 1080p.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
