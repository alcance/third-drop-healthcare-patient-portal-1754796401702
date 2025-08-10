'use client';
import { DashboardHeader } from '@/components/composite/DashboardHeader';
import { StatsGrid } from '@/components/healthcare/ui/StatsCard';
import { QuickActionsGrid } from '@/components/healthcare/ui/QuickActionButton';
import { 
  Users, 
  Calendar, 
  FileText, 
  Pill, 
  Activity, 
  BarChart3,
  Clock,
  Shield,
  Stethoscope,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

export default function ProviderPortal() {
  const statsData = [
    {
      title: "Today's Patients",
      value: "12",
      change: 8,
      changeType: "increase",
      icon: Users,
      variant: "primary",
      description: "3 appointments remaining"
    },
    {
      title: "This Week",
      value: "48",
      change: -5,
      changeType: "decrease", 
      icon: Calendar,
      variant: "success",
      description: "Total appointments"
    },
    {
      title: "Pending Reviews",
      value: "7",
      change: 2,
      changeType: "increase",
      icon: FileText,
      variant: "warning",
      description: "Lab reports to review"
    },
    {
      title: "Patient Satisfaction",
      value: "4.9",
      change: 0.2,
      changeType: "increase",
      icon: Activity,
      variant: "purple",
      description: "Average rating"
    }
  ];

  const quickActions = [
    {
      icon: Users,
      label: "Patient Management",
      description: "View and manage patient roster",
      onClick: () => console.log('Manage patients'),
      variant: "primary"
    },
    {
      icon: Calendar,
      label: "Schedule",
      description: "View appointments & availability",
      onClick: () => console.log('View schedule'),
      variant: "success"
    },
    {
      icon: FileText,
      label: "Clinical Notes",
      description: "Access patient documentation",
      onClick: () => console.log('View notes'),
      variant: "default"
    },
    {
      icon: Pill,
      label: "Prescriptions",
      description: "Write and manage prescriptions",
      onClick: () => console.log('Manage prescriptions'),
      variant: "warning"
    },
    {
      icon: BarChart3,
      label: "Reports",
      description: "Generate clinical reports",
      onClick: () => console.log('Generate reports'),
      variant: "purple"
    },
    {
      icon: Shield,
      label: "Compliance",
      description: "Review safety protocols",
      onClick: () => console.log('View compliance'),
      variant: "ghost",
      badge: "!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-green-50 via-white to-medical-gray-50 dark:from-medical-gray-900 dark:via-medical-gray-800 dark:to-medical-gray-900">
      <DashboardHeader 
        title="Provider Portal"
        user={{
          name: "Dr. Michael Smith",
          email: "dr.smith@clinic.com",
          role: "Healthcare Provider"
        }}
        notifications={5}
      />
      
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Welcome Section */}
        <div className="glass-medical rounded-2xl p-8 border border-medical-green-200 dark:border-medical-gray-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="medical-gradient-success w-16 h-16 rounded-xl flex items-center justify-center">
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="medical-heading-2 text-medical-green-600 dark:text-medical-green-400">
                Good morning, Dr. Smith! 🩺
              </h1>
              <p className="medical-body-lg text-muted-foreground">
                Manage your patients and clinical workflow efficiently.
              </p>
            </div>
          </div>
          
          {/* Quick status bar */}
          <div className="flex items-center gap-6 mt-6 p-4 bg-medical-green-50 dark:bg-medical-green-950/20 rounded-xl">
            <div className="flex items-center gap-2">
              <div className="status-online w-3 h-3 rounded-full"></div>
              <span className="medical-body-sm text-medical-green-700 dark:text-medical-green-300">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-medical-green-600" />
              <span className="medical-body-sm text-muted-foreground">Next: 2:30 PM - Sarah Johnson</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-medical-warning-500" />
              <span className="medical-body-sm text-medical-warning-600">2 urgent reviews</span>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div>
          <h2 className="medical-heading-3 mb-6 text-foreground">Performance Overview</h2>
          <StatsGrid columns={4}>
            {statsData.map((stat, index) => (
              <StatsCard key={stat.title} {...stat} />
            ))}
          </StatsGrid>
        </div>

        {/* Clinical Tools */}
        <div>
          <h2 className="medical-heading-3 mb-6 text-foreground">Clinical Tools</h2>
          <QuickActionsGrid actions={quickActions} columns={3} />
        </div>

        {/* Recent Activity */}
        <div className="glass-medical rounded-2xl p-8 border border-medical-gray-200 dark:border-medical-gray-700">
          <h2 className="medical-heading-3 mb-6 text-foreground">Recent Activity</h2>
          
          <div className="space-y-4">
            {[
              { time: "10:30 AM", action: "Completed consultation with John Doe", type: "success" },
              { time: "9:45 AM", action: "Reviewed lab results for Maria Garcia", type: "info" },
              { time: "9:15 AM", action: "Prescribed medication for David Wilson", type: "warning" },
              { time: "8:30 AM", action: "Updated treatment plan for Lisa Brown", type: "purple" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-medical-gray-50 dark:bg-medical-gray-800/50 rounded-xl">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-medical-green-500' :
                  activity.type === 'warning' ? 'bg-medical-warning-500' :
                  activity.type === 'purple' ? 'bg-medical-purple-500' :
                  'bg-medical-primary-500'
                }`}></div>
                <div className="flex-1">
                  <p className="medical-body text-foreground">{activity.action}</p>
                  <p className="medical-body-sm text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}