'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  title: string
  description: string
  icon?: LucideIcon
  variant?: 'default' | 'primary' | 'success' | 'purple'
  className?: string
}

const variants = {
  default: 'border-medical-gray-200 hover:border-medical-primary-300',
  primary: 'border-medical-primary-200 hover:border-medical-primary-400',
  success: 'border-medical-green-200 hover:border-medical-green-400',
  purple: 'border-medical-purple-200 hover:border-medical-purple-400',
}

export function FeatureCard({ 
  title, 
  description, 
  icon: Icon,
  variant = 'default',
  className 
}: FeatureCardProps) {
  return (
    <motion.div
      className={cn(
        "medical-card medical-card-interactive group",
        variants[variant],
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none rounded-xl" />
      
      {Icon && (
        <motion.div 
          className="medical-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
      )}
      
      <h3 className="medical-heading-4 mb-3 text-foreground">{title}</h3>
      <p className="medical-body text-muted-foreground leading-relaxed">{description}</p>
      
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700 pointer-events-none rounded-xl" />
    </motion.div>
  )
}