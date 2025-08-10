'use client';
import { DashboardHeader } from '@/components/composite/DashboardHeader';
import { StatsGrid } from '@/components/healthcare/ui/StatsCard';
import { QuickActionsGrid } from '@/components/healthcare/ui/QuickActionButton';
import { HealthcareChatbot } from '@/components/HealthcareChatbot';
import { 
  Calendar, 
  FileText, 
  Pill, 
  TestTube, 
  Plus, 
  MessageSquare,
  Heart,
  Activity,
  Clock,
  TrendingUp
} from 'lucide-react';

export default function PatientPortal() {
  const statsData = [
    {
      title: "Next Appointment",
      value: "Jan 25",
      description: "Dr. Smith - Cardiology",
      icon: Calendar,
      variant: "primary"
    },
    {
      title: "Active Medications",
      value: "3",
      change: 0,
      changeType: "neutral",
      icon: Pill,
      variant: "success"
    },
    {
      title: "Pending Results",
      value: "2",
      description: "Lab reports available",
      icon: TestTube,
      variant: "warning"
    },
    {
      title: "Health Score",
      value: "92",
      change: 5,
      changeType: "increase",
      icon: Heart,
      variant: "purple"
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      label: "Book Appointment",
      description: "Schedule with your provider",
      onClick: () => console.log('Book appointment'),
      variant: "primary"
    },
    {
      icon: FileText,
      label: "Medical Records",
      description: "View your health history",
      onClick: () => console.log('View records'),
      variant: "default"
    },
    {
      icon: Pill,
      label: "Prescriptions",
      description: "Manage medications",
      onClick: () => console.log('Manage prescriptions'),
      variant: "success"
    },
    {
      icon: TestTube,
      label: "Lab Results",
      description: "View test results",
      onClick: () => console.log('View results'),
      variant: "warning",
      badge: "2"
    },
    {
      icon: MessageSquare,
      label: "Messages",
      description: "Contact your care team",
      onClick: () => console.log('View messages'),
      variant: "purple",
      badge: "1"
    },
    {
      icon: Plus,
      label: "Request Refill",
      description: "Prescription refills",
      onClick: () => console.log('Request refill'),
      variant: "ghost"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-primary-50 via-white to-medical-gray-50 dark:from-medical-gray-900 dark:via-medical-gray-800 dark:to-medical-gray-900">
      <DashboardHeader 
        title="Patient Portal"
        user={{
          name: "Sarah Johnson",
          email: "sarah.johnson@email.com",
          role: "Patient"
        }}
        notifications={3}
      />
      
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Welcome Section */}
        <div className="glass-medical rounded-2xl p-8 border border-medical-primary-200 dark:border-medical-gray-700">
          <h1 className="medical-heading-2 text-medical-primary-600 dark:text-medical-primary-400 mb-4">
            Welcome back, Sarah! 👋
          </h1>
          <p className="medical-body-lg text-muted-foreground">
            Access your medical information and manage your healthcare journey.
          </p>
        </div>

        {/* Stats Overview */}
        <div>
          <h2 className="medical-heading-3 mb-6 text-foreground">Health Overview</h2>
          <StatsGrid columns={4}>
            {statsData.map((stat, index) => (
              <StatsCard key={stat.title} {...stat} />
            ))}
          </StatsGrid>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="medical-heading-3 mb-6 text-foreground">Quick Actions</h2>
          <QuickActionsGrid actions={quickActions} columns={3} />
        </div>

        {/* AI Assistant */}
        <div className="glass-medical rounded-2xl p-8 border border-medical-purple-200 dark:border-medical-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="medical-gradient-purple w-12 h-12 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="medical-heading-3 text-foreground">AI Health Assistant</h2>
              <p className="medical-body-sm text-muted-foreground">Ask about symptoms, medications, or health questions</p>
            </div>
          </div>
          
          <HealthcareChatbot 
            placeholder="Ask about symptoms, medications, or general health questions..."
            systemPrompt="You are a healthcare assistant for patients."
          />
        </div>
      </div>
    </div>
  );
}