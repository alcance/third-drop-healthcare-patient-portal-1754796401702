'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LucideIcon, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface QuickActionButtonProps {
  icon: LucideIcon
  label: string
  description?: string
  onClick?: () => void | Promise<void>
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'destructive' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  className?: string
  showTooltip?: boolean
  badge?: string | number
  glowEffect?: boolean
  magneticHover?: boolean
}

const variantStyles = {
  default: {
    container: 'bg-white dark:bg-medical-gray-800 border-medical-gray-200 dark:border-medical-gray-700 text-medical-gray-900 dark:text-medical-gray-100 hover:bg-medical-gray-50 dark:hover:bg-medical-gray-750',
    icon: 'text-medical-gray-600 dark:text-medical-gray-400',
    glow: 'group-hover:shadow-medical-glow',
  },
  primary: {
    container: 'bg-gradient-to-br from-medical-primary-500 to-medical-primary-600 border-medical-primary-600 text-white hover:from-medical-primary-600 hover:to-medical-primary-700',
    icon: 'text-white',
    glow: 'group-hover:shadow-[0_0_30px_hsl(var(--medical-primary-500)/0.4)]',
  },
  success: {
    container: 'bg-gradient-to-br from-medical-green-500 to-medical-green-600 border-medical-green-600 text-white hover:from-medical-green-600 hover:to-medical-green-700',
    icon: 'text-white',
    glow: 'group-hover:shadow-[0_0_30px_hsl(var(--medical-green-500)/0.4)]',
  },
  warning: {
    container: 'bg-gradient-to-br from-medical-warning-500 to-orange-600 border-orange-600 text-white hover:from-orange-600 hover:to-orange-700',
    icon: 'text-white',
    glow: 'group-hover:shadow-[0_0_30px_hsl(var(--medical-warning-500)/0.4)]',
  },
  destructive: {
    container: 'bg-gradient-to-br from-red-500 to-red-600 border-red-600 text-white hover:from-red-600 hover:to-red-700',
    icon: 'text-white',
    glow: 'group-hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]',
  },
  ghost: {
    container: 'bg-transparent border-transparent text-medical-gray-700 dark:text-medical-gray-300 hover:bg-medical-gray-100 dark:hover:bg-medical-gray-800',
    icon: 'text-medical-gray-600 dark:text-medical-gray-400',
    glow: '',
  },
}

const sizeStyles = {
  sm: {
    container: 'p-3 rounded-lg',
    icon: 'w-4 h-4',
    text: 'text-xs',
    description: 'text-xs',
    badge: 'text-xs px-1.5 py-0.5',
  },
  md: {
    container: 'p-4 rounded-xl',
    icon: 'w-5 h-5',
    text: 'text-sm',
    description: 'text-xs',
    badge: 'text-xs px-2 py-1',
  },
  lg: {
    container: 'p-6 rounded-xl',
    icon: 'w-6 h-6',
    text: 'text-base',
    description: 'text-sm',
    badge: 'text-sm px-2 py-1',
  },
  xl: {
    container: 'p-8 rounded-2xl',
    icon: 'w-8 h-8',
    text: 'text-lg',
    description: 'text-base',
    badge: 'text-sm px-3 py-1.5',
  },
}

export function QuickActionButton({
  icon: Icon,
  label,
  description,
  onClick,
  variant = 'default',
  size = 'md',
  disabled = false,
  loading = false,
  className,
  showTooltip = true,
  badge,
  glowEffect = true,
  magneticHover = true,
  ...props
}: QuickActionButtonProps) {
  const [isClicked, setIsClicked] = useState(false)
  const [actionState, setActionState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  const styles = variantStyles[variant]
  const sizing = sizeStyles[size]

  const handleClick = async () => {
    if (disabled || loading || !onClick) return

    setIsClicked(true)
    setActionState('loading')

    try {
      await onClick()
      setActionState('success')
      setTimeout(() => {
        setActionState('idle')
        setIsClicked(false)
      }, 1500)
    } catch (error) {
      setActionState('error')
      setTimeout(() => {
        setActionState('idle')
        setIsClicked(false)
      }, 2000)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magneticHover || disabled) return

    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    setMousePosition({
      x: (e.clientX - centerX) * 0.1,
      y: (e.clientY - centerY) * 0.1,
    })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  const getDisplayIcon = () => {
    if (actionState === 'loading' || loading) return Loader2
    if (actionState === 'success') return CheckCircle2
    if (actionState === 'error') return AlertCircle
    return Icon
  }

  const DisplayIcon = getDisplayIcon()

  return (
    <div className="relative group">
      <motion.button
        ref={buttonRef}
        className={cn(
          // Base styles
          "relative overflow-hidden border transition-all duration-300 ease-out",
          "focus:outline-none focus:ring-2 focus:ring-medical-primary-500 focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "group cursor-pointer",
          
          // Variant styles
          styles.container,
          sizing.container,
          
          // Glow effect
          glowEffect && styles.glow,
          
          // Active state
          isClicked && "scale-95",
          
          className
        )}
        onClick={handleClick}
        disabled={disabled || loading || actionState === 'loading'}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ 
          opacity: { duration: 0.3 },
          scale: { duration: 0.3 },
          x: { type: "spring", stiffness: 400, damping: 30 },
          y: { type: "spring", stiffness: 400, damping: 30 },
        }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5 pointer-events-none" />
        
        {/* Ripple effect */}
        <AnimatePresence>
          {isClicked && (
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center space-y-2 z-10">
          {/* Icon with state animations */}
          <motion.div className="relative">
            <motion.div
              key={actionState}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <DisplayIcon 
                className={cn(
                  sizing.icon,
                  styles.icon,
                  (actionState === 'loading' || loading) && "animate-spin",
                  actionState === 'success' && "text-medical-green-500",
                  actionState === 'error' && "text-red-500"
                )} 
              />
            </motion.div>

            {/* Badge */}
            {badge && (
              <motion.div
                className={cn(
                  "absolute -top-2 -right-2 bg-red-500 text-white rounded-full font-medium min-w-[1.25rem] h-5 flex items-center justify-center",
                  sizing.badge
                )}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 500,
                  damping: 15,
                  delay: 0.2
                }}
              >
                {typeof badge === 'number' && badge > 99 ? '99+' : badge}
              </motion.div>
            )}
          </motion.div>

          {/* Label */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className={cn("font-medium", sizing.text)}>
              {actionState === 'success' ? 'Success!' : 
               actionState === 'error' ? 'Error' :
               actionState === 'loading' ? 'Loading...' : label}
            </p>
            
            {description && actionState === 'idle' && (
              <motion.p 
                className={cn("text-medical-gray-500 dark:text-medical-gray-400 mt-1", sizing.description)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
        
        {/* Border highlight */}
        <div className="absolute inset-0 rounded-inherit border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && description && actionState === 'idle' && (
          <motion.div
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-medical-gray-900 dark:bg-white text-white dark:text-medical-gray-900 text-sm rounded-lg shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {description}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-medical-gray-900 dark:border-t-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Quick actions grid component
export function QuickActionsGrid({ 
  actions,
  columns = 'auto',
  className 
}: { 
  actions: QuickActionButtonProps[]
  columns?: 'auto' | 2 | 3 | 4 | 5
  className?: string 
}) {
  const gridCols = {
    auto: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
    2: 'grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  }

  return (
    <div className={cn(
      "grid gap-4",
      gridCols[columns],
      className
    )}>
      {actions.map((action, index) => (
        <motion.div
          key={action.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4, 
            delay: index * 0.1,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <QuickActionButton {...action} />
        </motion.div>
      ))}
    </div>
  )
}

// Floating action button variant
export function FloatingActionButton({
  icon: Icon,
  onClick,
  variant = 'primary',
  className,
  ...props
}: Omit<QuickActionButtonProps, 'label' | 'description'> & {
  icon: LucideIcon
}) {
  return (
    <motion.button
      className={cn(
        "fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50",
        "flex items-center justify-center",
        "transition-all duration-300 ease-out",
        variantStyles[variant].container,
        variantStyles[variant].glow,
        className
      )}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 17 
      }}
      {...props}
    >
      <Icon className={cn("w-6 h-6", variantStyles[variant].icon)} />
    </motion.button>
  )
}