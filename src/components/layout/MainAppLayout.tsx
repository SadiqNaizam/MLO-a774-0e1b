import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from './SidebarNav'; // CRITICAL: Relative path
import TopHeader from './TopHeader';   // CRITICAL: Relative path

interface MainAppLayoutProps {
  children: React.ReactNode;
  title?: string; // Title for the TopHeader
  className?: string;
  currentPath?: string; // To pass to SidebarNav for active state
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  children,
  title = 'Dashboard',
  className,
  currentPath,
}) => {
  return (
    <div className={cn('min-h-screen bg-background text-foreground', className)}>
      <SidebarNav currentPath={currentPath} />
      <div className="md:ml-64"> {/* Offset for the fixed sidebar on medium screens and up */} 
        <TopHeader title={title} />
        <main className="p-6 mt-[70px]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
