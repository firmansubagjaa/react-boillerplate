# Motion Animation Setup ✨

Motion for React sudah berhasil di-setup dan siap digunakan!

## 🎯 Quick Access

Kunjungi halaman berikut untuk melihat demo dan dokumentasi:

- **Landing Page**: [http://localhost:5173/motion](http://localhost:5173/motion)
- **Full Demo**: [http://localhost:5173/motion-demo](http://localhost:5173/motion-demo)
- **Utility Components**: [http://localhost:5173/motion-examples](http://localhost:5173/motion-examples)

## 📦 Apa yang Sudah Di-Setup?

### 1. Package Motion v12.23.26
Terinstall dan siap digunakan

### 2. Utility Components
Located at: `src/components/motion/`

- ✅ **FadeIn** - Fade animation dengan direction
- ✅ **ScaleIn** - Scale animation
- ✅ **Stagger** & **StaggerItem** - Staggered animations
- ✅ **HoverCard** - Interactive hover effects
- ✅ **ScrollReveal** - Scroll-triggered animations
- ✅ **AnimatedButton** - Button dengan animasi
- ✅ **Pulse** - Continuous pulse animation
- ✅ **Bounce** - Bounce animation
- ✅ **Rotate** - Rotation animation

### 3. Demo Pages
Located at: `src/pages/`

- ✅ **MotionHome.tsx** - Landing page dengan overview
- ✅ **MotionDemo.tsx** - Full demo semua fitur Motion
- ✅ **MotionExamples.tsx** - Contoh penggunaan utility components

### 4. Dokumentasi
- ✅ **MOTION_GUIDE.md** - Comprehensive guide untuk Motion

## 🚀 Usage

### Basic Motion
```tsx
import { motion } from "motion/react"

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Utility Components
```tsx
import { FadeIn, HoverCard } from "@/components/motion"

<FadeIn direction="up" delay={0.2}>
  <HoverCard lift>
    Card Content
  </HoverCard>
</FadeIn>
```

## 📚 Learn More

- Baca [MOTION_GUIDE.md](./MOTION_GUIDE.md) untuk dokumentasi lengkap
- Kunjungi [Motion Official Docs](https://motion.dev/docs/react)
- Explore demo pages untuk contoh-contoh praktis

## 🎨 Features Highlights

- ⚡ 60fps hardware-accelerated animations
- 🎯 Intuitive API dengan simple props
- 🔧 Gesture support (hover, tap, drag)
- 📜 Scroll animations (triggered & linked)
- 🎭 Layout animations dengan shared elements
- 🚪 Exit animations dengan AnimatePresence
- ♿ Accessibility (respects prefers-reduced-motion)

## 💡 Tips

1. Gunakan utility components untuk consistency
2. Prefer `transform` properties untuk performa terbaik
3. Wrap exit animations dengan `<AnimatePresence>`
4. Use `layout` prop untuk smooth layout transitions
5. Check MOTION_GUIDE.md untuk best practices

---

**Ready to animate!** 🎬 Buka `/motion` untuk mulai explore! ✨
