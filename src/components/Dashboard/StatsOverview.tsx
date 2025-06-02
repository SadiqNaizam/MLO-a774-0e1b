import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp, TrendingDown, Percent, DollarSign } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, description }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

interface StatsOverviewProps {
  className?: string;
}

const StatsOverview: React.FC<StatsOverviewProps> = ({ className }) => {
  const statsData = [
    {
      title: "Active Leads",
      value: "600",
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
      description: "Currently in the sales funnel"
    },
    {
      title: "Total Closed Won",
      value: "680",
      icon: <TrendingUp className="h-4 w-4 text-muted-foreground" />,
      description: "+20.1% from last month"
    },
    {
      title: "Total Lost",
      value: "70",
      icon: <TrendingDown className="h-4 w-4 text-muted-foreground" />,
      description: "-2.5% from last month"
    },
    {
      title: "Conversion Rate",
      value: "23.5%",
      icon: <Percent className="h-4 w-4 text-muted-foreground" />,
      description: "Based on new leads this period"
    },
  ];

  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-4", className)}>
      {statsData.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          description={stat.description}
        />
      ))}
    </div>
  );
};

export default StatsOverview;
