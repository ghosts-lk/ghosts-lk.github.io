/**
 * Logger utility for storing submission logs and errors
 * Logs to .log files in the logs/ directory
 */

import fs from 'fs'
import path from 'path'

// Ensure logs directory exists
const logsDir = path.join(process.cwd(), 'logs')
if (!fs.existsSync(logsDir)) {
  try {
    fs.mkdirSync(logsDir, { recursive: true })
  } catch (err) {
    // Silently fail - might not have write permissions
  }
}

interface LogEntry {
  timestamp: string
  level: 'info' | 'error' | 'warn'
  message: string
  data?: any
}

/**
 * Log submission to file
 */
export function logSubmission(data: {
  name: string
  email: string
  company?: string
  message: string
  ip: string
}): void {
  const entry: LogEntry = {
    timestamp: new Date().toISOString(),
    level: 'info',
    message: 'Contact form submission',
    data,
  }

  writeLog(entry)
}

/**
 * Log error to file
 */
export function logError(error: unknown, context?: string): void {
  const errorMessage = error instanceof Error ? error.message : String(error)
  const errorStack = error instanceof Error ? error.stack : undefined

  const entry: LogEntry = {
    timestamp: new Date().toISOString(),
    level: 'error',
    message: context ? `[${context}] ${errorMessage}` : errorMessage,
    data: errorStack,
  }

  writeLog(entry)
}

/**
 * Log warning to file
 */
export function logWarn(message: string, data?: any): void {
  const entry: LogEntry = {
    timestamp: new Date().toISOString(),
    level: 'warn',
    message,
    data,
  }

  writeLog(entry)
}

/**
 * Write log entry to file
 */
function writeLog(entry: LogEntry): void {
  try {
    const logMessage = `[${entry.timestamp}] [${entry.level.toUpperCase()}] ${entry.message}${
      entry.data ? '\n' + JSON.stringify(entry.data, null, 2) : ''
    }\n\n`

    const logFile = path.join(logsDir, `${getDateString()}.log`)
    fs.appendFileSync(logFile, logMessage, 'utf8')

    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(logMessage)
    }
  } catch (err) {
    // Silently fail if we can't write logs
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to write log:', err)
    }
  }
}

/**
 * Get date string for log file naming (YYYY-MM-DD)
 */
function getDateString(): string {
  const now = new Date()
  return now.toISOString().split('T')[0]
}
