/**
 * Centralized Color Configuration
 * 
 * This file contains all color definitions for the application.
 * Colors are organized by semantic meaning for dark theme.
 * 
 * To change the color scheme, modify the values in this file.
 */

export const colors = {
  // Primary brand colors (green accent for dark theme)
  primary: {
    50: '#dcfce7',
    100: '#bbf7d0',
    200: '#86efac',
    300: '#4ade80',
    400: '#22c55e',
    500: '#16a34a',
    600: '#15803d',
    700: '#166534',
    800: '#14532d',
    900: '#052e16',
  },

  // Background colors for dark theme
  background: {
    primary: '#0a0a0a',      // Main background
    secondary: '#111111',     // Cards and elevated surfaces
    tertiary: '#1a1a1a',      // Hover states and sections
    elevated: '#1f1f1f',      // Elevated components
  },

  // Text colors for dark theme
  text: {
    primary: '#f5f5f5',       // Main text
    secondary: '#a3a3a3',     // Secondary text
    tertiary: '#737373',      // Muted text
    inverse: '#171717',       // Text on light backgrounds
  },

  // Border colors for dark theme
  border: {
    primary: '#262626',       // Main borders
    secondary: '#1f1f1f',     // Subtle borders
    accent: '#404040',        // Emphasized borders
  },

  // Utility colors
  utility: {
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
  },

  // Status colors
  status: {
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },

  // Star rating color
  rating: {
    star: '#fbbf24',
  },
} as const

export type Colors = typeof colors
