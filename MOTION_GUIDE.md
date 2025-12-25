# Motion for React - Setup & Usage Guide

## 📦 Installation

Package Motion sudah terinstall dengan versi `^12.23.26`

```bash
npm install motion@^12.23.26
```

## 🚀 Import

```tsx
import { motion, AnimatePresence, useScroll } from "motion/react"
```

## ✨ Core Features

### 1. **Basic Animation**

Animasi dasar dengan property `animate`:

```tsx
<motion.div animate={{ rotate: 360, scale: 1.2 }}>
  Content
</motion.div>
```

### 2. **Enter Animation**

Animasi saat component muncul:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Fade in dari bawah
</motion.div>
```

### 3. **Hover & Tap Gestures**

Interaksi user dengan animasi:

```tsx
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  Hover & Click me
</motion.button>
```

### 4. **Scroll Animations**

Animasi berdasarkan scroll:

```tsx
// Scroll-triggered
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.5 }}
>
  Visible saat discroll
</motion.div>

// Scroll-linked
const { scrollYProgress } = useScroll()
<motion.div style={{ scaleX: scrollYProgress }} />
```

### 5. **Layout Animation**

Animasi perubahan layout otomatis:

```tsx
<motion.div layout>
  Content yang berubah size/position akan ter-animasi smooth
</motion.div>

// Shared layout animation
<motion.div layoutId="unique-id" />
```

### 6. **Exit Animations**

Animasi saat component dihapus dari DOM:

```tsx
<AnimatePresence>
  {show && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Content
    </motion.div>
  )}
</AnimatePresence>
```

## 🎨 Reusable Components

Kami sudah membuat utility components yang siap pakai:

### FadeIn
```tsx
<FadeIn direction="up" delay={0.2}>
  Content
</FadeIn>
```

### ScaleIn
```tsx
<ScaleIn delay={0.3} duration={0.5}>
  Content
</ScaleIn>
```

### Stagger (untuk list)
```tsx
<Stagger staggerDelay={0.1}>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
  <StaggerItem>Item 3</StaggerItem>
</Stagger>
```

### HoverCard
```tsx
<HoverCard scale={1.05} lift>
  Card content
</HoverCard>
```

### ScrollReveal
```tsx
<ScrollReveal direction="up" once={true}>
  Content yang muncul saat discroll
</ScrollReveal>
```

### AnimatedButton
```tsx
<AnimatedButton variant="glow">
  Click me!
</AnimatedButton>
```

### Continuous Animations
```tsx
<Pulse scale={1.1}>Content</Pulse>
<Bounce height={20}>Content</Bounce>
<Rotate duration={2}>Content</Rotate>
```

## 📍 Demo Pages

Kamu bisa melihat demo lengkap di:

1. **Full Demo** - `/motion-demo`
   - Semua fitur Motion dari dokumentasi official
   - Basic animations, gestures, scroll, layout, exit animations
   - Animated modal dengan shared layout

2. **Utility Components** - `/motion-examples`
   - Contoh penggunaan reusable components
   - Code snippets untuk setiap component
   - Real-world example

## 🎯 Best Practices

### 1. **Performance**

- Gunakan `transform` properties (x, y, scale, rotate) untuk performa terbaik
- Hindari animasi `width`, `height`, gunakan `scale` instead
- Gunakan `layout` untuk animasi layout yang complex

### 2. **Transitions**

```tsx
// Spring animation (default)
<motion.div
  animate={{ x: 100 }}
  transition={{ type: "spring", stiffness: 100 }}
/>

// Duration-based
<motion.div
  animate={{ x: 100 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
/>
```

### 3. **Variants**

Untuk animasi yang complex, gunakan variants:

```tsx
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

<motion.div
  initial="hidden"
  animate="visible"
  variants={variants}
/>
```

### 4. **Stagger Children**

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
</motion.div>
```

## 🔧 Advanced Features

### MotionValues

Untuk nilai yang reactive tanpa re-render:

```tsx
import { useMotionValue, useTransform } from "motion/react"

const x = useMotionValue(0)
const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])

<motion.div drag="x" style={{ x, opacity }} />
```

### Drag

```tsx
<motion.div
  drag
  dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
  dragElastic={0.2}
>
  Drag me!
</motion.div>
```

### useScroll Hook

```tsx
const { scrollYProgress } = useScroll()
const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1])

<motion.div style={{ scale }} />
```

## 📚 Resources

- [Official Documentation](https://motion.dev/docs/react)
- [Examples Gallery](https://motion.dev/docs/react-examples)
- [API Reference](https://motion.dev/docs/react-api)

## 💡 Tips

1. **Reduce Motion**: Respect user preferences
   ```tsx
   const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
   
   <motion.div
     animate={{ x: prefersReducedMotion ? 0 : 100 }}
   />
   ```

2. **Exit Animations**: Selalu wrap dengan `<AnimatePresence>` untuk exit animations

3. **Layout Animations**: Tambahkan `layout` prop untuk smooth layout transitions

4. **Gesture Priority**: Order matters - `whileTap` akan override `whileHover` saat tap

5. **Initial False**: Set `initial={false}` untuk disable enter animation

## 🎨 Common Patterns

### Card dengan Hover Effect
```tsx
<motion.div
  whileHover={{ y: -8, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
  transition={{ duration: 0.2 }}
>
  Card Content
</motion.div>
```

### Modal Animation
```tsx
<AnimatePresence>
  {isOpen && (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="backdrop"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="modal"
      >
        Modal Content
      </motion.div>
    </>
  )}
</AnimatePresence>
```

### Notification Toast
```tsx
<AnimatePresence>
  {notifications.map(notification => (
    <motion.div
      key={notification.id}
      layout
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
    >
      {notification.message}
    </motion.div>
  ))}
</AnimatePresence>
```
