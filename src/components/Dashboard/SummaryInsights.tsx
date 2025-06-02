import React from 'react';
import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ReasonLost {
  percentage: number;
  reason: string;
}

interface OtherDataPoint {
  value: string;
  label: string;
  icon?: React.ReactNode;
  tooltip?: string;
}

const reasonsLostData: ReasonLost[] = [
  { percentage: 40, reason: 'The proposal is unclear' },
  { percentage: 20, reason: 'However venture pursuit' }, // As per image, consider changing for clarity if this is a real app
  { percentage: 10, reason: 'Other' },
  { percentage: 30, reason: 'The proposal is unclear' }, // As per image, duplicate text. For real app, ensure unique reasons or group them.
  // For better data, let's make them unique:
  // { percentage: 40, reason: 'The proposal is unclear' },
  // { percentage: 30, reason: 'Budget constraints' },
  // { percentage: 20, reason: 'Timing not right' },
  // { percentage: 10, reason: 'Other' },
];

// Using image data for now, including duplicate and vague text
const finalReasonsLostData: ReasonLost[] = [
  { percentage: 40, reason: 'The proposal is unclear' },
  { percentage: 20, reason: 'However venture pursuit' },
  { percentage: 10, reason: 'Other' },
  { percentage: 30, reason: 'The proposal is unclear' }, 
];


const otherDataPoints: OtherDataPoint[] = [
  { value: '900', label: 'total leads count' },
  { value: '12', label: 'days in average to convert lead' },
  {
    value: '30',
    label: 'inactive leads',
    icon: <Info className="h-3 w-3 text-muted-foreground group-hover:text-primary" />,
    tooltip: 'Leads with no activity in the last 30 days.'
  },
];

interface SummaryInsightsProps {
  className?: string;
}

const SummaryInsights: React.FC<SummaryInsightsProps> = ({ className }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", className)}>
      <div className="bg-card p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Reasons of leads lost</h3>
        <div className="space-y-4">
          {finalReasonsLostData.map((item, index) => (
            <div key={index}>
              <p className="text-3xl font-semibold text-foreground">{item.percentage}%</p>
              <p className="text-sm text-muted-foreground">{item.reason}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-card p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">Other data</h3>
        <div className="space-y-4">
          {otherDataPoints.map((item, index) => (
            <div key={index}>
              <div className="flex items-baseline">
                <p className="text-3xl font-semibold text-foreground">{item.value}</p>
                {item.icon && (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="ml-1.5 group cursor-help">{item.icon}</span>
                      </TooltipTrigger>
                      {item.tooltip && 
                        <TooltipContent>
                          <p>{item.tooltip}</p>
                        </TooltipContent>
                      }
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryInsights;
