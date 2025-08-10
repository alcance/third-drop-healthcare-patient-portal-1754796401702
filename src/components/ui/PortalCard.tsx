'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Shield, Users, Heart, Activity, LucideIcon, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PortalCardProps {
  title: string
  description: string
  buttonText: string
  href: string
  icon?: LucideIcon
  bgColor?: string
  textColor?: string
  buttonColor?: string
  gradient?: 'primary' | 'success' | 'purple' | 'custom'
  features?: string[]
  isComingSoon?: boolean
  className?: string
}

const gradientStyles = {
  primary: {
    container: 'from-medical-primary-50 via-medical-primary-100 to-medical-primary-200 dark:from-medical-primary-950 dark:via-medical-primary-900 dark:to-medical-primary-800',
    icon: 'bg-medical-primary-500 text-white',
    button: 'bg-medical-primary-600 hover:bg-medical-primary-700 text-white',
    accent: 'text-medical-primary-600 dark:text-medical-primary-400',
    border: 'border-medical-primary-200 dark:border-medical-primary-800',
  },
  success: {
    container: 'from-medical-green-50 via-medical-green-100 to-medical-green-200 dark:from-medical-green-950 dark:via-medical-green-900 dark:to-medical-green-800',
    icon: 'bg-medical-green-500 text-white',
    button: 'bg-medical-green-600 hover:bg-medical-green-700 text-white',
    accent: 'text-medical-green-600 dark:text-medical-green-400',
    border: 'border-medical-green-200 dark:border-medical-green-800',
  },
  purple: {
    container: 'from-medical-purple-50 via-medical-purple-100 to-medical-purple-200 dark:from-medical-purple-950 dark:via-medical-purple-900 dark:to-medical-purple-800',
    icon: 'bg-medical-purple-500 text-white',
    button: 'bg-medical-purple-600 hover:bg-medical-purple-700 text-white',
    accent: 'text-medical-purple-600 dark:text-medical-purple-400',
    border: 'border-medical-purple-200 dark:border-medical-purple-800',
  },
  custom: {
    container: 'from-white to-medical-gray-50 dark:from-medical-gray-900 dark:to-medical-gray-800',
    icon: 'bg-medical-gray-600 text-white',
    button: 'bg-medical-gray-800 hover:bg-medical-gray-900 text-white',
    accent: 'text-medical-gray-600 dark:text-medical-gray-400',
    border: 'border-medical-gray-200 dark:border-medical-gray-700',
  },
}

const portalIcons = {
  patient: Users,
  provider: Shield,
  admin: Activity,
  default: Heart,
}

export function PortalCard({
  title,
  description,
  buttonText,
  href,
  icon,
  gradient = 'primary',
  features = [],
  isComingSoon = false,
  className,
  ...props
}: PortalCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const styles = gradientStyles[gradient]
  
  // Auto-select icon based on title if not provided
  const IconComponent = icon || 
    (title.toLowerCase().includes('patient') ? portalIcons.patient :
     title.toLowerCase().includes('provider') ? portalIcons.provider :
     title.toLowerCase().includes('admin') ? portalIcons.admin :
     portalIcons.default)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const cardContent = (
    <motion.div
      className={cn(
        // Base styles
        "relative group overflow-hidden rounded-2xl border backdrop-blur-sm",
        "transition-all duration-500 ease-out cursor-pointer",
        // Glass morphism
        "bg-gradient-to-br glass-medical",
        styles.container,
        styles.border,
        // Hover effects
        "hover:shadow-medical-xl hover:border-opacity-50",
        "hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.4, 0, 0.2, 1],
        delay: Math.random() * 0.2 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5 dark:from-white/5 dark:to-black/20" />
      
      {/* Mouse follow spotlight effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute pointer-events-none"
            style={{
              left: mousePosition.x - 100,
              top: mousePosition.y - 100,
              width: 200,
              height: 200,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full bg-gradient-radial from-white/20 via-white/5 to-transparent rounded-full blur-xl" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative p-8 space-y-6">
        {/* Header with icon */}
        <div className="flex items-start justify-between">
          <motion.div
            className={cn(
              "flex items-center justify-center w-16 h-16 rounded-xl shadow-lg",
              "group-hover:shadow-xl transition-all duration-300",
              styles.icon
            )}
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 10,
              transition: { duration: 0.2 }
            }}
          >
            <IconComponent className="w-8 h-8" />
          </motion.div>

          {/* Coming soon badge */}
          {isComingSoon && (
            <motion.div
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-medical-warning-500/20 border border-medical-warning-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Sparkles className="w-3 h-3 text-medical-warning-500" />
              <span className="text-xs font-medium text-medical-warning-500">
                Coming Soon
              </span>
            </motion.div>
          )}
        </div>

        {/* Title and description */}
        <div className="space-y-3">
          <motion.h3 
            className={cn(
              "text-2xl font-bold tracking-tight",
              styles.accent
            )}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-medical-gray-600 dark:text-medical-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Features list */}
        {features.length > 0 && (
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center gap-2 text-sm text-medical-gray-600 dark:text-medical-gray-400"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className={cn("w-1.5 h-1.5 rounded-full", styles.icon.split(' ')[0])} />
                {feature}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Action button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className={cn(
              "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl",
              "font-semibold text-sm transition-all duration-300",
              "shadow-lg group-hover:shadow-xl",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              styles.button
            )}
            disabled={isComingSoon}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{isComingSoon ? 'Coming Soon' : buttonText}</span>
            {!isComingSoon && (
              <motion.div
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Animated border highlight */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent"
        style={{
          background: `linear-gradient(45deg, transparent, ${isHovered ? 'rgba(255,255,255,0.1)' : 'transparent'}, transparent) border-box`,
        }}
        animate={{
          background: isHovered 
            ? 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent) border-box'
            : 'linear-gradient(45deg, transparent, transparent, transparent) border-box'
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Shimmer effect */}
      <div className={cn(
        "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent",
        "transition-transform duration-1000 ease-out pointer-events-none",
        isHovered && "translate-x-full"
      )} />
    </motion.div>
  )

  if (isComingSoon) {
    return cardContent
  }

  return (
    <Link href={href} className="block">
      {cardContent}
    </Link>
  )
}

// Portal selector grid component
export function PortalSelector({ 
  portals,
  className 
}: { 
  portals?: PortalCardProps[]
  className?: string 
}) {
  const defaultPortals: PortalCardProps[] = [
    {
      title: "Patient Portal",
      description: "Access your medical records, schedule appointments, and manage your healthcare journey with our secure patient platform.",
      buttonText: "Enter Patient Portal",
      href: "/patient",
      gradient: "primary",
      features: [
        "Medical records access",
        "Appointment scheduling", 
        "Prescription management",
        "Lab results viewing"
      ]
    },
    {
      title: "Provider Portal",
      description: "Healthcare professionals can access patient data, manage schedules, and streamline clinical workflows.",
      buttonText: "Enter Provider Portal", 
      href: "/provider",
      gradient: "success",
      features: [
        "Patient management",
        "Clinical workflows",
        "Schedule coordination",
        "Medical documentation"
      ]
    }
  ]

  const portalData = portals || defaultPortals

  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto",
      className
    )}>
      {portalData.map((portal, index) => (
        <motion.div
          key={portal.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <PortalCard {...portal} />
        </motion.div>
      ))}
    </div>
  )
}

// Portal card skeleton for loading states
export function PortalCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn(
      "rounded-2xl border bg-card p-8 animate-pulse",
      className
    )}>
      <div className="flex items-start justify-between mb-6">
        <div className="w-16 h-16 bg-medical-gray-200 dark:bg-medical-gray-700 rounded-xl" />
      </div>
      <div className="space-y-3 mb-6">
        <div className="h-8 bg-medical-gray-200 dark:bg-medical-gray-700 rounded w-3/4" />
        <div className="h-4 bg-medical-gray-200 dark:bg-medical-gray-700 rounded w-full" />
        <div className="h-4 bg-medical-gray-200 dark:bg-medical-gray-700 rounded w-5/6" />
      </div>
      <div className="space-y-2 mb-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-3 bg-medical-gray-200 dark:bg-medical-gray-700 rounded w-2/3" />
        ))}
      </div>
      <div className="h-12 bg-medical-gray-200 dark:bg-medical-gray-700 rounded-xl" />
    </div>
  )
}