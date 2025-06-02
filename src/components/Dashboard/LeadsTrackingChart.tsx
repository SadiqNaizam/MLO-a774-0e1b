import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CalendarDays, ChevronDown } from 'lucide-react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

interface LeadsChartDataPoint {
  month: string;
  closedWon: number;
  closedLost: number;
}

const leadsTrackingData: LeadsChartDataPoint[] = [
  { month: 'March', closedWon: 68, closedLost: 72 },
  { month: 'April', closedWon: 55, closedLost: 60 },
  { month: 'May', closedWon: 75, closedLost: 35 },
  { month: 'June', closedWon: 90, closedLost: 15 },
  { month: 'July', closedWon: 70, closedLost: 40 },
  { month: 'August', closedWon: 105, closedLost: 28 },
];

interface LeadsTrackingChartProps {
  className?: string;
}

const LeadsTrackingChart: React.FC<LeadsTrackingChartProps> = ({ className }) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle>Leads tracking</CardTitle>
                <div className="mt-1">
                    <span className="text-3xl font-bold text-foreground">680</span>
                    <span className="ml-2 text-sm text-muted-foreground">total closed</span>
                    <span className="text-3xl font-bold text-foreground ml-4">70</span>
                    <span className="ml-2 text-sm text-muted-foreground">total lost</span>
                </div>
            </div>
            <div className="flex items-center text-sm text-muted-foreground cursor-pointer hover:text-primary">
                <CalendarDays className="h-4 w-4 mr-1" />
                <span>last 6 months</span>
                <ChevronDown className="h-4 w-4 ml-1" />
            </div>
        </div>
      </CardHeader>
      <CardContent className="h-[300px] w-full pr-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={leadsTrackingData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis 
              dataKey="month" 
              tickLine={false} 
              axisLine={false} 
              dy={10}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              tickLine={false} 
              axisLine={false} 
              tickFormatter={(value) => `${value}`}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <RechartsTooltip 
              contentStyle={{ backgroundColor: 'hsl(var(--background))', borderRadius: '0.375rem', border: '1px solid hsl(var(--border))' }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              itemStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Area 
              type="monotone" 
              dataKey="closedWon" 
              strokeWidth={2}
              stroke="hsl(var(--accent))" // Teal
              fill="hsl(var(--accent) / 0.1)" 
              dot={{ r: 4, fill: 'hsl(var(--accent))', strokeWidth: 2, stroke: 'hsl(var(--card))' }}
              activeDot={{ r: 6, fill: 'hsl(var(--accent))', strokeWidth: 2, stroke: 'hsl(var(--card))' }}
            />
            <Line 
              type="monotone" 
              dataKey="closedLost" 
              strokeWidth={2}
              stroke="hsl(var(--destructive))" // Red
              dot={{ r: 4, fill: 'hsl(var(--destructive))', strokeWidth: 2, stroke: 'hsl(var(--card))' }}
              activeDot={{ r: 6, fill: 'hsl(var(--destructive))', strokeWidth: 2, stroke: 'hsl(var(--card))' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
      <div className="flex justify-center items-center space-x-6 p-4 border-t border-border">
        <div className="flex items-center text-sm">
          <span className="w-3 h-3 rounded-sm mr-2 bg-[hsl(var(--accent))]"></span>
          <span className="text-muted-foreground">Closed won</span>
        </div>
        <div className="flex items-center text-sm">
          <span className="w-3 h-3 rounded-sm mr-2 bg-[hsl(var(--destructive))]"></span>
          <span className="text-muted-foreground">Closed lost</span>
        </div>
      </div>
    </Card>
  );
};

export default LeadsTrackingChart;
