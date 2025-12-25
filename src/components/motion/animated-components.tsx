import { motion, type HTMLMotionProps } from "motion/react"
import { type ReactNode } from "react"

// Fade In Animation
interface FadeInProps extends HTMLMotionProps<"div"> {
    children: ReactNode
    delay?: number
    duration?: number
    direction?: "up" | "down" | "left" | "right"
}

export function FadeIn({
    children,
    delay = 0,
    duration = 0.5,
    direction,
    ...props
}: FadeInProps) {
    const directions = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 },
    }

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...(direction && directions[direction])
            }}
            animate={{
                opacity: 1,
                x: 0,
                y: 0
            }}
            transition={{
                duration,
                delay,
                ease: "easeOut"
            }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

// Scale In Animation
interface ScaleInProps extends HTMLMotionProps<"div"> {
    children: ReactNode
    delay?: number
    duration?: number
}

export function ScaleIn({
    children,
    delay = 0,
    duration = 0.5,
    ...props
}: ScaleInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration,
                delay,
                ease: "easeOut"
            }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

// Stagger Children Container
interface StaggerProps extends HTMLMotionProps<"div"> {
    children: ReactNode
    staggerDelay?: number
}

export function Stagger({
    children,
    staggerDelay = 0.1,
    ...props
}: StaggerProps) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

// Stagger Child Item
interface StaggerItemProps extends HTMLMotionProps<"div"> {
    children: ReactNode
}

export function StaggerItem({ children, ...props }: StaggerItemProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: "easeOut"
                    }
                },
            }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

// Hover Card
interface HoverCardProps extends HTMLMotionProps<"div"> {
    children: ReactNode
    scale?: number
    lift?: boolean
}

export function HoverCard({
    children,
    scale = 1.05,
    lift = false,
    ...props
}: HoverCardProps) {
    return (
        <motion.div
            whileHover={{
                scale,
                y: lift ? -8 : 0,
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

// Scroll Reveal
interface ScrollRevealProps extends HTMLMotionProps<"div"> {
    children: ReactNode
    direction?: "up" | "down" | "left" | "right"
    once?: boolean
}

export function ScrollReveal({
    children,
    direction = "up",
    once = true,
    ...props
}: ScrollRevealProps) {
    const directions = {
        up: { y: 50 },
        down: { y: -50 },
        left: { x: 50 },
        right: { x: -50 },
    }

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction]
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0
            }}
            viewport={{ once, amount: 0.3 }}
            transition={{
                duration: 0.6,
                ease: "easeOut"
            }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

// Animated Button
interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode
    variant?: "default" | "glow" | "lift"
}

export function AnimatedButton({
    children,
    variant = "default",
    ...props
}: AnimatedButtonProps) {
    const variants = {
        default: {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
        },
        glow: {
            whileHover: {
                scale: 1.05,
                boxShadow: "0 0 25px rgba(139, 92, 246, 0.6)"
            },
            whileTap: { scale: 0.95 },
        },
        lift: {
            whileHover: { y: -5, scale: 1.02 },
            whileTap: { y: 0, scale: 0.98 },
        },
    }

    return (
        <motion.button
            {...variants[variant]}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            {...props}
        >
            {children}
        </motion.button>
    )
}

// Pulse Animation
interface PulseProps extends HTMLMotionProps<"div"> {
    children: ReactNode
    scale?: number
}

export function Pulse({
    children,
    scale = 1.05,
    ...props
}: PulseProps) {
    return (
        <motion.div
            animate={{
                scale: [1, scale, 1]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

// Rotate Animation
interface RotateProps extends HTMLMotionProps<"div"> {
    children: ReactNode
    duration?: number
}

export function Rotate({
    children,
    duration = 2,
    ...props
}: RotateProps) {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "linear"
            }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

// Bounce Animation
interface BounceProps extends HTMLMotionProps<"div"> {
    children: ReactNode
    height?: number
}

export function Bounce({
    children,
    height = 20,
    ...props
}: BounceProps) {
    return (
        <motion.div
            animate={{ y: [0, -height, 0] }}
            transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            {...props}
        >
            {children}
        </motion.div>
    )
}
