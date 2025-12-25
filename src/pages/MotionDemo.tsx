import { useState } from "react"
import { motion, AnimatePresence, useScroll } from "motion/react"
import { Button } from "@/components/ui/button"

export default function MotionDemo() {
    const [show, setShow] = useState(true)
    const [items, setItems] = useState([1, 2, 3])
    const [selectedId, setSelectedId] = useState<number | null>(null)
    const { scrollYProgress } = useScroll()

    const addItem = () => {
        setItems([...items, items.length + 1])
    }

    const removeItem = (id: number) => {
        setItems(items.filter(item => item !== id))
    }

    return (
        <>
            <title>Motion Demo & Examples | Tivity</title>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
                <div className="max-w-6xl mx-auto space-y-16">
                    {/* Header with scroll progress */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-4"
                    >
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                            Motion for React Demo
                        </h1>
                        <p className="text-gray-300">Exploring animation capabilities dengan Motion</p>

                        {/* Scroll progress bar */}
                        <motion.div
                            className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full origin-left"
                            style={{ scaleX: scrollYProgress }}
                        />
                    </motion.div>

                    {/* 1. Basic Animation */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-semibold">1. Basic Animation</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"
                            >
                                Rotate
                            </motion.div>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="h-32 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center"
                            >
                                Scale
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
                            >
                                Bounce
                            </motion.div>
                        </div>
                    </section>

                    {/* 2. Enter Animation */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-semibold">2. Enter Animation</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center"
                            >
                                Fade + Scale
                            </motion.div>
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="h-32 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center"
                            >
                                Slide In
                            </motion.div>
                            <motion.div
                                initial={{ rotateY: 90, opacity: 0 }}
                                animate={{ rotateY: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="h-32 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center"
                            >
                                Flip
                            </motion.div>
                        </div>
                    </section>

                    {/* 3. Hover & Tap Animation */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-semibold">3. Hover & Tap Gestures</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg"
                            >
                                Hover Me
                            </motion.button>
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 25px rgb(236, 72, 153)"
                                }}
                                whileTap={{ scale: 0.9 }}
                                className="h-32 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg"
                            >
                                Glow Effect
                            </motion.button>
                            <motion.button
                                whileHover={{ y: -10 }}
                                whileTap={{ y: 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="h-32 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg"
                            >
                                Lift Up
                            </motion.button>
                        </div>
                    </section>

                    {/* 4. Scroll Animation */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-semibold">4. Scroll-Triggered Animation</h2>
                        <div className="space-y-8">
                            {[1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    className="h-40 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-2xl font-bold"
                                >
                                    Scroll Item {i}
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* 5. Layout Animation */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-semibold">5. Layout Animation</h2>
                        <div className="space-y-4">
                            <Button onClick={addItem} className="mb-4">
                                Add Item
                            </Button>
                            <motion.div layout className="grid grid-cols-4 gap-4">
                                {items.map((item) => (
                                    <motion.div
                                        key={item}
                                        layout
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0 }}
                                        whileHover={{ scale: 1.05 }}
                                        onClick={() => removeItem(item)}
                                        className="h-24 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center cursor-pointer"
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </motion.div>
                            <p className="text-sm text-gray-400">Click item to remove</p>
                        </div>
                    </section>

                    {/* 6. Exit Animation with AnimatePresence */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-semibold">6. Exit Animation</h2>
                        <div className="space-y-4">
                            <Button onClick={() => setShow(!show)}>
                                Toggle Box
                            </Button>
                            <div className="h-40 relative">
                                <AnimatePresence>
                                    {show && (
                                        <motion.div
                                            key="box"
                                            initial={{ opacity: 0, y: -50, rotateX: -90 }}
                                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                            exit={{
                                                opacity: 0,
                                                y: 50,
                                                rotateX: 90,
                                                transition: { duration: 0.3 }
                                            }}
                                            className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center text-2xl font-bold"
                                        >
                                            Hello Motion! 👋
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </section>

                    {/* 7. Modal with AnimatePresence */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-semibold">7. Animated Modal</h2>
                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3].map((id) => (
                                <motion.div
                                    key={id}
                                    layoutId={`card-${id}`}
                                    onClick={() => setSelectedId(id)}
                                    whileHover={{ scale: 1.05 }}
                                    className="h-32 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg cursor-pointer flex items-center justify-center"
                                >
                                    Card {id}
                                </motion.div>
                            ))}
                        </div>

                        <AnimatePresence>
                            {selectedId && (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onClick={() => setSelectedId(null)}
                                        className="fixed inset-0 bg-black/50 z-40"
                                    />
                                    <motion.div
                                        layoutId={`card-${selectedId}`}
                                        className="fixed inset-0 m-auto w-96 h-64 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg z-50 flex flex-col items-center justify-center p-8"
                                    >
                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-3xl font-bold mb-4"
                                        >
                                            Card {selectedId}
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-center mb-4"
                                        >
                                            This is an expanded view with smooth layout animation
                                        </motion.p>
                                        <motion.button
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setSelectedId(null)}
                                            className="px-6 py-2 bg-white text-rose-500 rounded-lg font-semibold"
                                        >
                                            Close
                                        </motion.button>
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </section>

                    {/* Footer */}
                    <motion.footer
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center py-8 text-gray-400"
                    >
                        <p>Motion for React Demo - All animations powered by Motion v12</p>
                    </motion.footer>
                </div>
            </motion.div>
        </>
    )
}
