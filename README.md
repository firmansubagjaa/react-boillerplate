<div align="center">

# ⚛️ React Boilerplate

**A production-ready React boilerplate with modern tooling and best practices**

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Tech Stack](#-tech-stack)

</div>

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [💻 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [📝 Available Scripts](#-available-scripts)
- [🎨 UI Components](#-ui-components)
- [🎬 Motion Components](#-motion-components)
- [🗂️ State Management](#️-state-management)
- [🛣️ Routing](#️-routing)
- [📋 Forms](#-forms)
- [🎨 Styling](#-styling-1)
- [🔌 API Integration](#-api-integration)
- [📦 Path Aliases](#-path-aliases)
- [🧪 Best Practices](#-best-practices)
- [📚 Resources](#-resources)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

<table>
<tr>
<td>

### 🎯 Core Technologies
- **React 19.2.0** - Latest React with improved performance
- **TypeScript 5.9.3** - Type safety & enhanced DX
- **Vite 7.3.0** - Lightning-fast build tool with HMR
- **TailwindCSS 4.1.18** - Utility-first CSS framework

</td>
<td>

### 🔧 State Management
- **React Query 5.90.12** - Async state management
- **Zustand 5.0.9** - Lightweight state solution
- **Axios 1.13.2** - HTTP client with interceptors

</td>
</tr>
<tr>
<td>

### 🎨 UI & Styling
- **Shadcn/UI Components (44+)** - Beautiful, accessible UI components built with Radix UI
- **Motion 12.23.26** - Production-ready animation library
- **Lucide React** - Beautiful & consistent icon set
- **Next Themes** - Dark mode support with toggle
- **Sonner** - Beautiful toast notifications

</td>
<td>

### 🛣️ Routing & Forms
- **React Router 7.11.0** - Declarative routing
- **React Hook Form 7.69.0** - Performant forms
- **Zod 4.2.1** - Schema validation
- **@hookform/resolvers** - Validation resolvers

</td>
</tr>
<tr>
<td>

### 📊 Data Visualization
- **Recharts 2.15.4** - Composable charts
- **TanStack Table 8.21.3** - Powerful tables

</td>
<td>

### 🧰 Developer Experience
- **ESLint 9.39.1** - Code quality
- **React Compiler** - Auto optimization
- **TypeScript ESLint** - TS linting
- **Path Aliases** - Clean imports (`@/`)

</td>
</tr>
</table>

### 🎭 Animation Features

Motion library includes:
- ✅ 10 pre-built utility components
- ✅ Scroll animations (triggered & linked)
- ✅ Gesture support (hover, tap, drag)
- ✅ Layout animations with shared elements
- ✅ Exit animations with AnimatePresence

---

## 🚀 Quick Start

### Prerequisites

```bash
Node.js 18+ installed
npm or yarn or pnpm
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/firmansubagjaa/react-boillerplate.git
cd react-boillerplate

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser at http://localhost:5173
```

### Build for Production

```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

---

## 💻 Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, TypeScript 5.9 |
| **Build Tool** | Vite 7 |
| **Styling** | TailwindCSS 4, Shadcn/UI |
| **State** | React Query, Zustand |
| **Router** | React Router 7 |
| **Forms** | React Hook Form, Zod |
| **Animation** | Motion (Framer Motion) |
| **HTTP Client** | Axios |
| **Icons** | Lucide React |
| **Charts** | Recharts, TanStack Table |
| **Linting** | ESLint, TypeScript ESLint |

</div>

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── motion/         # Animation utility components  
│   │   ├── animated-components.tsx
│   │   └── index.ts
│   └── ui/             # Shadcn UI components
│       ├── button.tsx
│       ├── input.tsx
│       └── ...
├── hooks/              # Custom React hooks
├── lib/                # Library configurations
│   ├── queryClient.ts  # React Query setup
│   └── utils.ts        # Utility functions (cn)
├── pages/              # Application pages/routes
│   ├── Home.tsx
│   ├── Demo.tsx
│   ├── MotionDemo.tsx
│   └── 404.tsx
├── stores/             # Zustand stores
│   ├── authStore.ts
│   └── counterStore.ts
├── utils/              # Utility functions & routes
│   └── routes.tsx      # Router configuration
├── App.tsx             # Root component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (output to `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## 🎨 UI Components

This boilerplate includes **Shadcn/UI** components built with **Radix UI** primitives:

<details>
<summary><b>View all available components (44+)</b></summary>

- Alert ⭐ NEW
- Alert Dialog
- Avatar
- Badge
- Breadcrumb
- Button & Button Group
- Calendar & Date Picker
- Card
- Checkbox
- Command (Command Palette)
- Container
- Dialog
- Dropdown Menu ⭐ NEW
- Empty State
- Field (Forms)
- Hover Card ⭐ NEW
- Input & Input Group
- Kbd (Keyboard Shortcuts) ⭐ NEW
- Label
- Native Select
- Navigation Menu
- Pagination
- Popover
- Radio Group
- Scroll Area
- Separator
- Sheet (Slide-over)
- Sidebar
- Skeleton
- Sonner (Toast)
- Spinner
- Switch ⭐ NEW
- Table
- Tabs ⭐ NEW
- Textarea
- Toggle & Toggle Group ⭐ NEW
- Tooltip
- Typography
- And more...

</details>

### Why Shadcn/UI?
- 💾 **Copy-paste friendly** - Own your code
- 🎨 **Fully customizable** - No black box
- ♿ **Accessible by default** - ARIA compliant
- 🔧 **Built with Radix UI** - Battle-tested primitives

---

## 🎬 Motion Components

Pre-built animation components for common use cases:

```tsx
import { FadeIn, HoverCard, ScrollReveal } from "@/components/motion"

// Fade in animation
<FadeIn direction="up" delay={0.2}>
  <YourComponent />
</FadeIn>

// Hover effects
<HoverCard lift scale={1.05}>
  <Card />
</HoverCard>

// Scroll-triggered animation
<ScrollReveal direction="left" once={false}>
  <Section />
</ScrollReveal>
```

### Available Animation Components

| Component | Description |
|-----------|-------------|
| `FadeIn` | Fade animations with customizable direction |
| `ScaleIn` | Scale animations with delay options |
| `Stagger` & `StaggerItem` | Staggered list animations |
| `HoverCard` | Interactive hover effects (scale & lift) |
| `ScrollReveal` | Scroll-triggered animations |
| `AnimatedButton` | Button animations (default, glow, lift) |
| `Pulse` | Continuous pulse animation |
| `Bounce` | Bounce animation |
| `Rotate` | Rotation animation |

📚 **[View Complete Motion Documentation](./MOTION_GUIDE.md)**

---

## 🗂️ State Management

### React Query (Server State)

For server state management with caching and automatic refetching:

```tsx
import { useQuery, useMutation } from '@tanstack/react-query'

// Fetch data
const { data, isLoading } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos
})

// Mutate data
const mutation = useMutation({
  mutationFn: addTodo,
  onSuccess: () => queryClient.invalidateQueries(['todos'])
})
```

### Zustand (Client State)

For client state management:

```tsx
import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 }))
}))
```

---

## 🛣️ Routing

React Router 7 with nested routes and 404 handling:

```tsx
// src/utils/routes.tsx
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
])

export default router
```

---

## 📋 Forms

React Hook Form with Zod validation for type-safe forms:

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters")
})

type FormData = z.infer<typeof schema>

const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
  resolver: zodResolver(schema)
})
```

---

## 🎨 Styling

### TailwindCSS

Utility-first CSS with TailwindCSS 4:

```tsx
<div className="flex items-center gap-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4">
  <YourComponent />
</div>
```

### Dark Mode

Built-in dark mode support with `next-themes`:

```tsx
import { useTheme } from 'next-themes'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  )
}
```

---

## 🔌 API Integration

Axios instance with pre-configured interceptors:

```tsx
import axios from 'axios'

// Request interceptor for authentication
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor for error handling
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
    }
    return Promise.reject(error)
  }
)
```

---

## 📦 Path Aliases

Clean imports with `@/` prefix:

```tsx
// ❌ Before
import { Button } from '../../../components/ui/button'

// ✅ After
import { Button } from '@/components/ui/button'
```

Configured in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 🧪 Best Practices

### ✅ Code Organization
- Component co-location for better maintainability
- Separation of concerns (logic, UI, styles)
- Reusable custom hooks
- Type safety throughout the codebase

### ⚡ Performance
- React Compiler for automatic optimization
- Code splitting with `React.lazy()`
- Memoization with `useMemo`/`useCallback`
- Optimistic updates with React Query

### ♿ Accessibility
- Semantic HTML elements
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility

### 🛠️ Developer Experience  
- TypeScript for compile-time type safety
- ESLint for code quality and consistency
- Path aliases for clean imports
- Hot Module Replacement (HMR) for instant feedback

---

## 📚 Resources

### Documentation

- [Motion Animation Guide](./MOTION_GUIDE.md) - Comprehensive animation documentation
- [Motion Examples & Demos](./MOTION_README.md) - Interactive animation demos

### External Links

| Resource | Link |
|----------|------|
| React | [react.dev](https://react.dev/) |
| TypeScript | [typescriptlang.org/docs](https://www.typescriptlang.org/docs/) |
| Vite | [vitejs.dev/guide](https://vitejs.dev/guide/) |
| TailwindCSS | [tailwindcss.com/docs](https://tailwindcss.com/docs) |
| TanStack Query | [tanstack.com/query](https://tanstack.com/query/latest) |
| Zustand | [zustand-demo.pmnd.rs](https://zustand-demo.pmnd.rs/) |
| React Router | [reactrouter.com](https://reactrouter.com/) |
| Shadcn/UI | [ui.shadcn.com](https://ui.shadcn.com/) |
| Motion | [motion.dev/docs/react](https://motion.dev/docs/react) |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### How to Contribute

1. **Fork the repository**
2. **Create your feature branch**  
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## 🙏 Acknowledgments

Special thanks to:

- [Shadcn](https://ui.shadcn.com/) for the beautiful UI component system
- [TanStack](https://tanstack.com/) for React Query and Table
- [Motion](https://motion.dev/) for the powerful animation library
- All open source contributors who make projects like this possible

---

<div align="center">

**Built with ❤️ using the modern React ecosystem**

[![GitHub](https://img.shields.io/badge/GitHub-firmansubagjaa-181717?style=flat&logo=github)](https://github.com/firmansubagjaa/react-boillerplate)

[Report Bug](https://github.com/firmansubagjaa/react-boillerplate/issues) · [Request Feature](https://github.com/firmansubagjaa/react-boillerplate/issues)

</div>