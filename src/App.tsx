import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { CourseManagement } from './components/CourseManagement';
import { CourseBuilder } from './components/CourseBuilder';
import { LessonManagement } from './components/LessonManagement';
import { TutorialVideoUpload } from './components/TutorialVideoUpload';
import { QuestionBank } from './components/QuestionBank';
import { TrainingSchedule } from './components/TrainingSchedule';
import { OngoingTrainings } from './components/OngoingTrainings';
import { Employees } from './components/Employees';
import { AssessmentManagement } from './components/AssessmentManagement';
import { Settings } from './components/Settings';
import { EmployeePortal } from './components/portals/EmployeePortal';
import { TrainerPortal } from './components/portals/TrainerPortal';
import { Screen, UserRole } from './types';
import { Shield, User as UserIcon, GraduationCap, ChevronDown, BookOpen } from 'lucide-react';
import { cn } from './lib/utils';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>('dashboard');
  const [userRole, setUserRole] = useState<UserRole>('admin');
  const [showRoleSwitcher, setShowRoleSwitcher] = useState(false);

  const renderAdminScreen = () => {
    switch (activeScreen) {
      case 'dashboard':
        return <Dashboard />;
      case 'courses':
        return <CourseManagement onCreateNew={() => setActiveScreen('course-builder')} />;
      case 'course-builder':
        return <CourseBuilder />;
      case 'lessons':
        return <LessonManagement />;
      case 'tutorials':
        return <TutorialVideoUpload />;
      case 'question-bank':
        return <QuestionBank />;
      case 'assessments':
        return <AssessmentManagement />;
      case 'schedule':
        return <TrainingSchedule />;
      case 'ongoing':
        return <OngoingTrainings />;
      case 'reports':
        return (
          <div className="p-8 space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black tracking-tight">Training Reports</h2>
                <p className="text-slate-500 mt-1">Detailed performance and attendance metrics for your training events.</p>
              </div>
            </div>
            <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center">
              <div className="size-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl text-slate-400">bar_chart</span>
              </div>
              <h3 className="text-lg font-bold">Reports Module</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mt-2">
                This module is currently being populated with real-time data from your training sessions.
              </p>
            </div>
          </div>
        );
      case 'tags':
        return (
          <div className="p-8 space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black tracking-tight">Tags Management</h2>
                <p className="text-slate-500 mt-1">Organize and categorize your content using system-wide tags.</p>
              </div>
            </div>
            <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center">
              <div className="size-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl text-slate-400">label</span>
              </div>
              <h3 className="text-lg font-bold">Tags Manager</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mt-2">
                Manage all tags used across courses, lessons, and questions from this central hub.
              </p>
            </div>
          </div>
        );
      case 'employees':
        return <Employees />;
      case 'settings':
        return <Settings />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4">
            <div className="size-20 rounded-full bg-slate-100 flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl">construction</span>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider">Under Construction</h3>
              <p className="text-sm">The {activeScreen} module is currently being developed.</p>
            </div>
            <button 
              onClick={() => setActiveScreen('dashboard')}
              className="px-6 py-2 bg-primary text-white rounded-lg font-bold text-sm shadow-lg shadow-primary/20"
            >
              Back to Dashboard
            </button>
          </div>
        );
    }
  };

  const renderPortal = () => {
    switch (userRole) {
      case 'admin':
        return (
          <div className="flex h-screen bg-background-light overflow-hidden">
            <Sidebar activeScreen={activeScreen} onScreenChange={setActiveScreen} />
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
              <Header />
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                {renderAdminScreen()}
              </div>
            </main>
          </div>
        );
      case 'trainer':
        return <TrainerPortal />;
      case 'employee':
        return <EmployeePortal />;
    }
  };

  return (
    <div className="relative">
      {/* Role Switcher Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <button 
            onClick={() => setShowRoleSwitcher(!showRoleSwitcher)}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full shadow-2xl hover:bg-slate-800 transition-all border border-white/10"
          >
            <div className="size-6 rounded-full bg-primary flex items-center justify-center">
              {userRole === 'admin' && <Shield size={12} />}
              {userRole === 'trainer' && <BookOpen size={12} />}
              {userRole === 'employee' && <GraduationCap size={12} />}
            </div>
            <span className="text-xs font-bold capitalize">{userRole} Portal</span>
            <ChevronDown size={14} className={cn("transition-transform", showRoleSwitcher && "rotate-180")} />
          </button>

          {showRoleSwitcher && (
            <div className="absolute bottom-full right-0 mb-3 w-48 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
              <div className="p-2 space-y-1">
                {(['admin', 'trainer', 'employee'] as UserRole[]).map((role) => (
                  <button
                    key={role}
                    onClick={() => {
                      setUserRole(role);
                      setShowRoleSwitcher(false);
                    }}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold transition-all",
                      userRole === role 
                        ? "bg-primary text-white" 
                        : "text-slate-600 hover:bg-slate-50"
                    )}
                  >
                    <div className={cn(
                      "size-6 rounded-lg flex items-center justify-center",
                      userRole === role ? "bg-white/20" : "bg-slate-100"
                    )}>
                      {role === 'admin' && <Shield size={12} />}
                      {role === 'trainer' && <BookOpen size={12} />}
                      {role === 'employee' && <GraduationCap size={12} />}
                    </div>
                    <span className="capitalize">{role} Portal</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {renderPortal()}
    </div>
  );
};

export default App;
