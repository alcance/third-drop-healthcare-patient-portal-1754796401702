'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bell, 
  Search, 
  Settings, 
  User, 
  Menu,
  X,
  ChevronDown,
  LogOut,
  Shield,
  Moon,
  Sun
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface DashboardHeaderProps {
  title: string
  user?: {
    name: string
    email: string
    avatar?: string
    role?: string
  }
  notifications?: number
  onSearch?: (query: string) => void
  onNotificationClick?: () => void
  onProfileClick?: () => void
  className?: string
}

export function DashboardHeader({
  title,
  user = { name: 'Dr. Smith', email: 'doctor@clinic.com', role: 'Healthcare Provider' },
  notifications = 3,
  onSearch,
  onNotificationClick,
  onProfileClick,
  className
}: DashboardHeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isDark, setIsDark] = useState(false)

  return (
    <motion.header 
      className={cn(
        "glass-medical sticky top-0 z-40 border-b border-medical-gray-200 dark:border-medical-gray-700",
        className
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left: Title */}
        <div className="flex items-center space-x-4">
          <motion.h1 
            className="medical-heading-3 text-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h1>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <motion.button
              className="medical-interactive p-2 rounded-lg text-medical-gray-600 dark:text-medical-gray-400 hover:bg-medical-gray-100 dark:hover:bg-medical-gray-800"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>

            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  className="absolute right-0 top-12 w-80 glass-medical rounded-xl p-4 shadow-medical-lg border border-medical-gray-200 dark:border-medical-gray-700"
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="text"
                    placeholder="Search patients, appointments..."
                    className="medical-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && onSearch?.(searchQuery)}
                    autoFocus
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Notifications */}
          <motion.button
            className="medical-interactive relative p-2 rounded-lg text-medical-gray-600 dark:text-medical-gray-400 hover:bg-medical-gray-100 dark:hover:bg-medical-gray-800"
            onClick={onNotificationClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="w-5 h-5" />
            {notifications > 0 && (
              <motion.span
                className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                {notifications > 9 ? '9+' : notifications}
              </motion.span>
            )}
          </motion.button>

          {/* Theme Toggle */}
          <motion.button
            className="medical-interactive p-2 rounded-lg text-medical-gray-600 dark:text-medical-gray-400 hover:bg-medical-gray-100 dark:hover:bg-medical-gray-800"
            onClick={() => setIsDark(!isDark)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>

          {/* Profile */}
          <div className="relative">
            <motion.button
              className="medical-interactive flex items-center space-x-3 p-2 rounded-lg hover:bg-medical-gray-100 dark:hover:bg-medical-gray-800"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-8 h-8 bg-medical-gradient-primary rounded-full flex items-center justify-center">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                ) : (
                  <User className="w-4 h-4 text-white" />
                )}
              </div>
              <div className="hidden md:block text-left">
                <p className="medical-body-sm font-medium text-foreground">{user.name}</p>
                <p className="medical-caption text-muted-foreground">{user.role}</p>
              </div>
              <ChevronDown className="w-4 h-4 text-medical-gray-400" />
            </motion.button>

            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  className="absolute right-0 top-12 w-64 glass-medical rounded-xl shadow-medical-lg border border-medical-gray-200 dark:border-medical-gray-700 overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-4 border-b border-medical-gray-200 dark:border-medical-gray-700">
                    <p className="medical-body font-medium text-foreground">{user.name}</p>
                    <p className="medical-body-sm text-muted-foreground">{user.email}</p>
                  </div>
                  
                  <div className="p-2">
                    <button className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-medical-gray-100 dark:hover:bg-medical-gray-800 text-left">
                      <User className="w-4 h-4 text-medical-gray-500" />
                      <span className="medical-body-sm">Profile</span>
                    </button>
                    
                    <button className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-medical-gray-100 dark:hover:bg-medical-gray-800 text-left">
                      <Settings className="w-4 h-4 text-medical-gray-500" />
                      <span className="medical-body-sm">Settings</span>
                    </button>
                    
                    <button className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-medical-gray-100 dark:hover:bg-medical-gray-800 text-left">
                      <Shield className="w-4 h-4 text-medical-gray-500" />
                      <span className="medical-body-sm">Privacy</span>
                    </button>
                    
                    <hr className="my-2 border-medical-gray-200 dark:border-medical-gray-700" />
                    
                    <button className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-left text-red-600 dark:text-red-400">
                      <LogOut className="w-4 h-4" />
                      <span className="medical-body-sm">Sign out</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  )
}