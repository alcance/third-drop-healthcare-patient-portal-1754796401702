'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatsCardProps {
  title: string
  value: string | number
  change?: number
  changeType?: 'increase' | 'decrease' | 'neutral'
  icon?: LucideIcon
  description?: string
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'purple'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  isLoading?: boolean
  showTrend?: boolean
  period?: string
}

const variantStyles = {
  default: {
    container: 'bg-card border-border',
    iconBg: 'bg-medical-gray-100 dark:bg-medical-gray-800',
    iconColor: 'text-medical-gray-600 dark:text-medical-gray-400',
    value: 'text-foreground',
    title: 'text-muted-foreground',
  },
  primary: {
    container: 'bg-gradient-to-br from-medical-primary-50 to-medical-primary-100 dark:from-medical-primary-950 dark:to-medical-primary-900 border-medical-primary-200 dark:border-medical-primary-800',
    iconBg: 'bg-medical-primary-500',
    iconColor: 'text-white',
    value: 'text-medical-primary-900 dark:text-medical-primary-100',
    title: 'text-medical-primary-700 dark:text-medical-primary-300',
  },
  success: {
    container: 'bg-gradient-to-br from-medical-green-50 to-medical-green-100 dark:from-medical-green-950 dark:to-medical-green-900 border-medical-green-200 dark:border-medical-green-800',
    iconBg: 'bg-medical-green-500',
    iconColor: 'text-white',
    value: 'text-medical-green-900 dark:text-medical-green-100',
    title: 'text-medical-green-700 dark:text-medical-green-300',
  },
  warning: {
    container: 'bg-gradient-to-br from-medical-warning-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800',
    iconBg: 'bg-medical-warning-500',
    iconColor: 'text-white',
    value: 'text-orange-900 dark:text-orange-100',
    title: 'text-orange-700 dark:text-orange-300',
  },
  purple: {
    container: 'bg-gradient-to-br from-medical-purple-50 to-medical-purple-100 dark:from-medical-purple-950 dark:to-medical-purple-900 border-medical-purple-200 dark:border-medical-purple-800',
    iconBg: 'bg-medical-purple-500',
    iconColor: 'text-white',
    value: 'text-medical-purple-900 dark:text-medical-purple-100',
    title: 'text-medical-purple-700 dark:text-medical-purple-300',
  },
}

const sizeStyles = {
  sm: {
    container: 'p-4',
    iconSize: 'w-8 h-8',
    iconContainer: 'w-10 h-10',
    value: 'text-xl font-bold',
    title: 'text-xs',
    change: 'text-xs',
  },
  md: {
    container: 'p-6',
    iconSize: 'w-5 h-5',
    iconContainer: 'w-12 h-12',
    value: 'text-2xl font-bold',
    title: 'text-sm',
    change: 'text-sm',
  },
  lg: {
    container: 'p-8',
    iconSize: 'w-6 h-6',
    iconContainer: 'w-14 h-14',
    value: 'text-3xl font-bold',
    title: 'text-base',
    change: 'text-base',
  },
}

export function StatsCard({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  description,
  variant = 'default',
  size = 'md',
  className,
  isLoading = false,
  showTrend = true,
  period = 'vs last month',
  ...props
}: StatsCardProps) {
  const styles = variantStyles[variant]
  const sizing = sizeStyles[size]

  const getTrendIcon = () => {
    if (changeType === 'increase') return TrendingUp
    if (changeType === 'decrease') return TrendingDown
    return Minus
  }

  const getTrendColor = () => {
    if (changeType === 'increase') return 'text-medical-green-600 dark:text-medical-green-400'
    if (changeType === 'decrease') return 'text-red-600 dark:text-red-400'
    return 'text-medical-gray-500 dark:text-medical-gray-400'
  }

  const TrendIcon = getTrendIcon()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.4, 0, 0.2, 1],
        delay: Math.random() * 0.1 // Staggered animation
      }}
      whileHover={{ 
        y: -4, 
        scale: 1.02,
        transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
      }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        // Base styles
        "relative overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer group",
        "hover:shadow-medical-lg hover:border-opacity-50",
        "backdrop-blur-sm",
        styles.container,
        sizing.container,
        className
      )}
      {...props}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      {/* Content container */}
      <div className="relative flex items-start justify-between">
        <div className="flex-1 min-w-0">
          {/* Title */}
          <motion.p 
            className={cn(
              "font-medium tracking-wide uppercase truncate",
              styles.title,
              sizing.title
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.p>
          
          {/* Value with loading state */}
          <motion.div 
            className="mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {isLoading ? (
              <div className={cn("bg-medical-gray-200 dark:bg-medical-gray-700 rounded-lg animate-pulse", sizing.value === 'text-xl font-bold' ? 'h-6' : sizing.value === 'text-2xl font-bold' ? 'h-8' : 'h-10')} style={{ width: '80%' }} />
            ) : (
              <motion.p 
                className={cn(
                  "tabular-nums tracking-tight",
                  styles.value,
                  sizing.value
                )}
                key={value} // Re-animate when value changes
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.1
                }}
              >
                {typeof value === 'number' ? value.toLocaleString() : value}
              </motion.p>
            )}
          </motion.div>

          {/* Change indicator */}
          {showTrend && change !== undefined && !isLoading && (
            <motion.div 
              className="flex items-center gap-1 mt-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <TrendIcon className={cn("w-4 h-4", getTrendColor())} />
              <span className={cn("font-medium tabular-nums", getTrendColor(), sizing.change)}>
                {change > 0 ? '+' : ''}{change}%
              </span>
              <span className={cn("text-medical-gray-500 dark:text-medical-gray-400", sizing.change)}>
                {period}
              </span>
            </motion.div>
          )}

          {/* Description */}
          {description && (
            <motion.p 
              className={cn(
                "mt-2 text-medical-gray-600 dark:text-medical-gray-400 leading-relaxed",
                sizing.change
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {description}
            </motion.p>
          )}
        </div>

        {/* Icon */}
        {Icon && (
          <motion.div 
            className={cn(
              "flex items-center justify-center rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300",
              styles.iconBg,
              sizing.iconContainer
            )}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              transition: { duration: 0.2 }
            }}
          >
            <Icon className={cn(styles.iconColor, sizing.iconSize)} />
          </motion.div>
        )}
      </div>

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
      
      {/* Subtle border highlight */}
      <div className="absolute inset-0 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}

// Skeleton component for loading states
export function StatsCardSkeleton({ 
  size = 'md',
  className 
}: { 
  size?: 'sm' | 'md' | 'lg'
  className?: string 
}) {
  const sizing = sizeStyles[size]
  
  return (
    <div className={cn(
      "rounded-xl border bg-card animate-pulse",
      sizing.container,
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="h-4 bg-medical-gray-200 dark:bg-medical-gray-700 rounded w-24 mb-2" />
          <div className={cn(
            "bg-medical-gray-200 dark:bg-medical-gray-700 rounded",
            sizing.value === 'text-xl font-bold' ? 'h-6' : sizing.value === 'text-2xl font-bold' ? 'h-8' : 'h-10'
          )} style={{ width: '60%' }} />
          <div className="h-3 bg-medical-gray-200 dark:bg-medical-gray-700 rounded w-32 mt-2" />
        </div>
        <div className={cn(
          "bg-medical-gray-200 dark:bg-medical-gray-700 rounded-xl",
          sizing.iconContainer
        )} />
      </div>
    </div>
  )
}

// Grid component for consistent layouts
export function StatsGrid({ 
  children,
  columns = 'auto',
  className 
}: { 
  children: React.ReactNode
  columns?: 'auto' | 1 | 2 | 3 | 4
  className?: string 
}) {
  const gridCols = {
    auto: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  }

  return (
    <div className={cn(
      "grid gap-6",
      gridCols[columns],
      className
    )}>
      {children}
    </div>
  )
}