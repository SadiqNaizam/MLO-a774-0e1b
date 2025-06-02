import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  UserCircle2,
  FileText,
  FileSpreadsheet,
  List,
  Mail,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  Menu,
  LucideIcon
} from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

const mainNavItems: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutGrid },
  { href: '/leads', label: 'Leads', icon: Users },
  { href: '/customers', label: 'Customers', icon: UserCircle2 },
  { href: '/proposals', label: 'Proposals', icon: FileText },
  { href: '/invoices', label: 'Invoices', icon: FileSpreadsheet },
  { href: '/items', label: 'Items', icon: List },
  { href: '/mail', label: 'Mail', icon: Mail },
  { href: '/shoebox', label: 'Shoebox', icon: Archive },
  { href: '/calendar', label: 'Calendar', icon: CalendarDays },
];

const bottomNavItems: NavItem[] = [
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/help', label: 'Help', icon: HelpCircle },
];

interface SidebarNavProps {
  currentPath?: string;
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({
  currentPath = '/dashboard', // Default to Dashboard as active for example
  className,
}) => {
  const renderNavItem = (item: NavItem, index: number) => {
    const isActive = item.href === currentPath;
    return (
      <a
        key={`${item.label}-${index}`}
        href={item.href}
        className={cn(
          'flex items-center space-x-3 rounded-md p-2.5 text-sm font-medium',
          isActive
            ? 'bg-white text-primary shadow-sm'
            : 'text-sidebar-foreground hover:bg-primary/10 hover:text-primary'
        )}
      >
        <item.icon className="h-5 w-5 flex-shrink-0" />
        <span>{item.label}</span>
      </a>
    );
  };

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 h-screen w-64 bg-sidebar text-sidebar-foreground flex flex-col p-4 z-20',
        className
      )}
    >
      <div className="flex items-center space-x-3 px-1 pb-4 mb-2 border-b border-black/10">
        <Menu className="h-6 w-6 text-sidebar-foreground cursor-pointer" />
        <div className="bg-primary text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm">
          DO
        </div>
        {/* <span className="font-semibold text-lg text-sidebar-foreground">LeadsApp</span> */}
      </div>

      <nav className="flex-grow space-y-1.5 overflow-y-auto pr-1">
        {mainNavItems.map(renderNavItem)}
      </nav>

      <div className="mt-auto pt-4 space-y-1.5 border-t border-black/10">
        {bottomNavItems.map(renderNavItem)}
      </div>
    </aside>
  );
};

export default SidebarNav;
