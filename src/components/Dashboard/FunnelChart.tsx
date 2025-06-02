import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  id: string;
  name: string;
  count: number;
  value: number;
  time: string;
  color: string; 
  isAverageTime?: boolean;
}

const funnelData: FunnelStage[] = [
  { id: 'discovery', name: 'Discovery', count: 200, value: 200, time: '2 days', color: 'bg-rose-500' },
  { id: 'qualified', name: 'Qualified', count: 100, value: 100, time: '2 days', color: 'bg-amber-500', isAverageTime: true },
  { id: 'in-conversation', name: 'In conversation', count: 50, value: 100, time: '5 days', color: 'bg-indigo-600' },
  { id: 'negotiations', name: 'Negotiations', count: 20, value: 50, time: '8 days', color: 'bg-emerald-500' },
  { id: 'closed-won', name: 'Closed won', count: 20, value: 50, time: '10 days', color: 'bg-purple-600' },
];

const totalFunnelCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

interface FunnelChartProps {
  className?: string;
}

const FunnelChart: React.FC<FunnelChartProps> = ({ className }) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">600</span>
          <span className="ml-2 text-sm text-muted-foreground">active leads</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex w-full h-3 rounded-full overflow-hidden">
            {funnelData.map((stage) => (
              <TooltipProvider key={stage.id} delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div 
                      className={cn("h-full", stage.color)}
                      style={{ width: `${(stage.count / totalFunnelCount) * 100}%` }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{stage.name}: {stage.count}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
        
        <ul className="space-y-3">
          {funnelData.map((stage) => (
            <li key={stage.id} className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <span className={cn("w-3 h-3 rounded-sm mr-2", stage.color)}></span>
                <span className="text-foreground">{stage.name}</span>
              </div>
              <div className="flex items-center space-x-4 md:space-x-8">
                <span className="text-muted-foreground w-10 text-right">{stage.count}</span>
                <span className="text-muted-foreground w-16 text-right">${stage.value.toLocaleString()}</span>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-muted-foreground w-16 text-right cursor-default">
                        {stage.time}
                      </span>
                    </TooltipTrigger>
                    {stage.isAverageTime && (
                      <TooltipContent className="bg-slate-800 text-white text-xs p-2 rounded-md">
                        <p>average time on this stage</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FunnelChart;
