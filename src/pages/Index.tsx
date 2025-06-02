import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import StatsOverview from '../components/Dashboard/StatsOverview';
import FunnelChart from '../components/Dashboard/FunnelChart';
import SourcePieChart from '../components/Dashboard/SourcePieChart';
import LeadsTrackingChart from '../components/Dashboard/LeadsTrackingChart';
import SummaryInsights from '../components/Dashboard/SummaryInsights';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const IndexPage: React.FC = () => {
  return (
    <MainAppLayout title="Dashboard" currentPath="/dashboard">
      <Tabs defaultValue="leads" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
        </TabsList>
        <TabsContent value="sales">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4">Sales Overview</h2>
            <p className="text-muted-foreground">
              Detailed sales analytics, performance metrics, and revenue tracking will be displayed here.
              This section is currently a placeholder.
            </p>
            {/* Placeholder for future Sales components */}
          </div>
        </TabsContent>
        <TabsContent value="leads" className="space-y-6">
          <StatsOverview />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <FunnelChart className="lg:col-span-3" />
            <SourcePieChart className="lg:col-span-2" />
          </div>

          <div>
            <div className="flex justify-end mb-4">
              <Tabs defaultValue="leads-converted" className="w-auto">
                <TabsList className="h-auto p-0.5 border bg-muted">
                  <TabsTrigger value="leads-came" className="text-xs px-3 py-1.5 h-auto data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    Leads came
                  </TabsTrigger>
                  <TabsTrigger value="leads-converted" className="text-xs px-3 py-1.5 h-auto data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    Leads Converted
                  </TabsTrigger>
                  <TabsTrigger value="total-deals-size" className="text-xs px-3 py-1.5 h-auto data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    Total deals size
                  </TabsTrigger>
                </TabsList>
                {/* 
                  These TabsContent would typically show different views or data for LeadsTrackingChart.
                  For this static example, they are omitted as LeadsTrackingChart doesn't dynamically change.
                */}
              </Tabs>
            </div>
            <LeadsTrackingChart />
          </div>
          
          <SummaryInsights />
        </TabsContent>
      </Tabs>
    </MainAppLayout>
  );
};

export default IndexPage;
