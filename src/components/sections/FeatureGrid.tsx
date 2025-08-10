'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  FileText, 
  Pill, 
  Video, 
  TestTube, 
  Shield,
  LucideIcon 
} from 'lucide-react'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { cn } from '@/lib/utils'

interface Feature {
  title: string
  description: string
  icon: LucideIcon
  variant?: 'default' | 'primary' | 'success' | 'purple'
}

interface FeatureGridProps {
  title?: string
  description?: string
  features?: Feature[]
  columns?: 2 | 3 | 4
  className?: string
}

const defaultFeatures: Feature[] = [
  {
    title: "Appointment Scheduling",
    description: "Book and manage appointments online with real-time availability and smart notifications.",
    icon: Calendar,
    variant: 'primary'
  },
  {
    title: "Medical Records", 
    description: "Secure access to your complete health information with advanced privacy controls.",
    icon: FileText,
    variant: 'success'
  },
  {
    title: "Prescription Management",
    description: "Request refills, view medication history, and receive adherence reminders.",
    icon: Pill,
    variant: 'purple'
  },
  {
    title: "Telehealth Consultations",
    description: "Connect with healthcare providers remotely through secure video calls.",
    icon: Video,
    variant: 'default'
  },
  {
    title: "Lab Results & Reports",
    description: "View test results instantly with interactive charts and trend analysis.",
    icon: TestTube,
    variant: 'primary'
  },
  {
    title: "Insurance & Billing",
    description: "Manage coverage, submit claims, and track payments with full transparency.",
    icon: Shield,
    variant: 'success'
  }
]

export function FeatureGrid({ 
  title = "Healthcare Features",
  description = "Comprehensive tools designed to simplify your healthcare experience",
  features = defaultFeatures,
  columns = 3,
  className 
}: FeatureGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  }

  return (
    <section className={cn("py-20 px-4", className)}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="medical-heading-2 text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className="medical-body-lg text-muted-foreground max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className={cn(
          "grid gap-6",
          gridCols[columns]
        )}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}