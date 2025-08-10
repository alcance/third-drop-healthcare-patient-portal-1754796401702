'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  title: string
  description: string
  primaryAction?: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
  className?: string
}

export function HeroSection({ 
  title, 
  description, 
  primaryAction,
  secondaryAction,
  className 
}: HeroSectionProps) {
  return (
    <section className={cn("relative py-20 px-4 text-center overflow-hidden", className)}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-medical-primary-50 via-white to-medical-purple-50 dark:from-medical-gray-900 dark:via-medical-gray-800 dark:to-medical-purple-950" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-medical-primary-400 rounded-full animate-medical-float" />
      <div className="absolute top-32 right-1/3 w-1 h-1 bg-medical-purple-400 rounded-full animate-medical-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-medical-green-400 rounded-full animate-medical-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="w-4 h-4 text-medical-primary-600" />
          <span className="medical-caption text-medical-primary-700">Supreme Healthcare Platform</span>
        </motion.div>

        {/* Title */}
        <motion.h1 
          className="medical-display medical-gradient-primary bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="medical-body-lg text-medical-gray-600 dark:text-medical-gray-300 mb-8 max-w-2xl mx-auto text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {description}
        </motion.p>

        {/* Actions */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {primaryAction && (
            <motion.a
              href={primaryAction.href}
              className="medical-btn-primary inline-flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {primaryAction.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          )}
          
          {secondaryAction && (
            <motion.a
              href={secondaryAction.href}
              className="medical-btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {secondaryAction.label}
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  )
}