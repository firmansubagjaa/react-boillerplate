import { format, formatDistance, formatRelative, addDays, subDays, isToday, isPast, isFuture, parseISO } from 'date-fns'

/**
 * Format date to readable string
 * @param date - Date to format
 * @param formatString - Format string (default: 'PPP')
 * @returns Formatted date string
 */
export const formatDate = (date: Date | string, formatString: string = 'PPP'): string => {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return format(dateObj, formatString)
}

/**
 * Get relative time string (e.g., "2 days ago")
 * @param date - Date to compare
 * @param baseDate - Base date for comparison (default: now)
 * @returns Relative time string
 */
export const getRelativeTime = (date: Date | string, baseDate: Date = new Date()): string => {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return formatDistance(dateObj, baseDate, { addSuffix: true })
}

/**
 * Get relative date string (e.g., "last Friday at 2:26 PM")
 * @param date - Date to format
 * @param baseDate - Base date for comparison (default: now)
 * @returns Relative date string
 */
export const getRelativeDate = (date: Date | string, baseDate: Date = new Date()): string => {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return formatRelative(dateObj, baseDate)
}

/**
 * Add days to a date
 * @param date - Starting date
 * @param amount - Number of days to add
 * @returns New date
 */
export const addDaysToDate = (date: Date | string, amount: number): Date => {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return addDays(dateObj, amount)
}

/**
 * Subtract days from a date
 * @param date - Starting date
 * @param amount - Number of days to subtract
 * @returns New date
 */
export const subtractDaysFromDate = (date: Date | string, amount: number): Date => {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return subDays(dateObj, amount)
}

/**
 * Check if date is today
 * @param date - Date to check
 * @returns Boolean
 */
export const checkIsToday = (date: Date | string): boolean => {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return isToday(dateObj)
}

/**
 * Check if date is in the past
 * @param date - Date to check
 * @returns Boolean
 */
export const checkIsPast = (date: Date | string): boolean => {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return isPast(dateObj)
}

/**
 * Check if date is in the future
 * @param date - Date to check
 * @returns Boolean
 */
export const checkIsFuture = (date: Date | string): boolean => {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return isFuture(dateObj)
}

/**
 * Common date format strings
 */
export const DATE_FORMATS = {
    SHORT: 'P',           // 04/29/1453
    MEDIUM: 'PP',         // Apr 29, 1453
    LONG: 'PPP',          // April 29th, 1453
    FULL: 'PPPP',         // Friday, April 29th, 1453
    TIME: 'p',            // 12:00 AM
    DATE_TIME: 'Pp',      // 04/29/1453, 12:00 AM
    CUSTOM_SHORT: 'MMM d, yyyy',  // Apr 29, 1453
} as const
