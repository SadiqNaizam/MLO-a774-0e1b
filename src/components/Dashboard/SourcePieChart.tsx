import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
} from 'recharts';

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const sourceData: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: 'hsl(var(--destructive))' }, // Red
  { name: 'Behance', value: 2400, percentage: 40, color: 'hsl(36, 100%, 50%)' }, // Orange-Yellow for Behance (using approximation as --prd-accent-orange is #FFA700)
  { name: 'Instagram', value: 600, percentage: 10, color: 'hsl(var(--accent))' }, // Teal
  // Dribbble in image has 10% which would make total > 100%. Image data: Clutch 50%, Behance 40%, Instagram 10%, Dribbble 10%. Sums to 110%.
  // Adjusting to make it 100%. Let's assume Instagram is 5% and Dribbble is 5% to make space if needed.
  // For now, sticking to 3 sources that sum to 100% as per adjusted value for Behance.
  // To match image more closely while ensuring 100%:
  // { name: 'Clutch', value: 3000, percentage: 50, color: 'hsl(var(--destructive))' },
  // { name: 'Behance', value: 1500, percentage: 25, color: 'hsl(36, 100%, 50%)' }, 
  // { name: 'Instagram', value: 900, percentage: 15, color: 'hsl(var(--accent))' },
  // { name: 'Dribbble', value: 600, percentage: 10, color: 'hsl(122, 39%, 49%)' }, // Using approximation for --prd-accent-green
];

// Re-evaluating data to match image text more closely, and adjusting percentages to sum to 100%
// Let total be $6000. Clutch $3000 (50%). Behance $1000 (16.67%). Instagram $1000 (16.67%). Dribbble $1000 (16.67%)
// This is quite different from percentages in image. Let's use percentages as primary and derive values if sum is fixed.
// Image: Clutch 50%, Behance 40%, Instagram 10%, Dribbble 10%. Total 110%. This is problematic.
// Assuming the $ values are correct and percentages need adjustment based on a total. If $3000 is 50%, total is $6000.
// Behance $1000 = 16.67%
// Instagram $1000 = 16.67%
// Dribbble $1000 = 16.67%
// This would make the percentages different from the image.
// I'll use the image's percentages and note the total is >100 for this representation.
// Or, adjust one to make it 100. E.g. Instagram 5%, Dribbble 5%.
// For this example, I'll make data that sums to 100% while trying to keep relative proportions.
const finalSourceData: SourceData[] = [
    { name: 'Clutch', value: 5000, percentage: 50, color: 'hsl(0, 70%, 60%)' }, // Custom Red-Orange
    { name: 'Behance', value: 2500, percentage: 25, color: 'hsl(45, 100%, 50%)' }, // Yellow
    { name: 'Instagram', value: 1500, percentage: 15, color: 'hsl(187, 100%, 37.8%)' }, // Teal (accent)
    { name: 'Dribbble', value: 1000, percentage: 10, color: 'hsl(145, 63%, 40%)' }, // Green (prd-accent-green approx)
];

interface SourcePieChartProps {
  className?: string;
}

const SourcePieChart: React.FC<SourcePieChartProps> = ({ className }) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Sources
          <span className="text-xs font-normal text-muted-foreground cursor-pointer hover:text-primary">
            from leads total
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="w-full h-[200px] md:h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <RechartsTooltip
                  contentStyle={{ backgroundColor: 'hsl(var(--background))', borderRadius: '0.375rem', border: '1px solid hsl(var(--border))' }}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                  itemStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Pie
                  data={finalSourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="80%"
                  dataKey="percentage"
                  paddingAngle={1}
                >
                  {finalSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                  ))}
                </Pie>
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
          <ul className="space-y-2">
            {finalSourceData.map((source) => (
              <li key={source.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <span 
                    className="w-3 h-3 rounded-sm mr-2"
                    style={{ backgroundColor: source.color }}
                  ></span>
                  <span className="text-foreground">{source.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-muted-foreground w-16 text-right">${source.value.toLocaleString()}</span>
                  <span className="text-foreground font-medium w-8 text-right">{source.percentage}%</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourcePieChart;
