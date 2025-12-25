import { Link } from "react-router"
import { FadeIn, Stagger, StaggerItem, HoverCard, Bounce } from "@/components/motion"

export default function MotionHome() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
            {/* Hero Section */}
            <div className="container mx-auto px-8 py-20">
                <FadeIn direction="down" className="text-center mb-16">
                    <Bounce height={10}>
                        <h1 className="text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                            Motion for React
                        </h1>
                    </Bounce>
                    <p className="text-2xl text-gray-200 mb-4">
                        Animation library yang powerful dan mudah digunakan
                    </p>
                    <p className="text-lg text-gray-400">
                        Version 12.23.26 - Sudah setup dan siap digunakan! 🚀
                    </p>
                </FadeIn>

                {/* Quick Links */}
                <Stagger staggerDelay={0.15} className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        <StaggerItem>
                            <Link to="/motion-demo">
                                <HoverCard lift scale={1.03} className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 h-full cursor-pointer border-2 border-blue-400/20 hover:border-blue-400/50 transition-colors">
                                    <div className="text-5xl mb-4">🎬</div>
                                    <h3 className="text-3xl font-bold mb-3">Full Demo</h3>
                                    <p className="text-blue-100 mb-4">
                                        Explore semua fitur Motion dari dokumentasi official
                                    </p>
                                    <ul className="space-y-2 text-sm text-blue-200">
                                        <li>✓ Basic Animations</li>
                                        <li>✓ Gesture Interactions</li>
                                        <li>✓ Scroll Animations</li>
                                        <li>✓ Layout & Exit Animations</li>
                                        <li>✓ Animated Modal</li>
                                    </ul>
                                </HoverCard>
                            </Link>
                        </StaggerItem>

                        <StaggerItem>
                            <Link to="/motion-examples">
                                <HoverCard lift scale={1.03} className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 h-full cursor-pointer border-2 border-purple-400/20 hover:border-purple-400/50 transition-colors">
                                    <div className="text-5xl mb-4">🎨</div>
                                    <h3 className="text-3xl font-bold mb-3">Utility Components</h3>
                                    <p className="text-purple-100 mb-4">
                                        Reusable animation components siap pakai
                                    </p>
                                    <ul className="space-y-2 text-sm text-purple-200">
                                        <li>✓ FadeIn & ScaleIn</li>
                                        <li>✓ Stagger Animations</li>
                                        <li>✓ HoverCard & ScrollReveal</li>
                                        <li>✓ AnimatedButton</li>
                                        <li>✓ Continuous Animations</li>
                                    </ul>
                                </HoverCard>
                            </Link>
                        </StaggerItem>
                    </div>

                    {/* Features Grid */}
                    <StaggerItem>
                        <h2 className="text-4xl font-bold text-center mb-12">
                            ✨ Key Features
                        </h2>
                    </StaggerItem>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {[
                            {
                                icon: "⚡",
                                title: "Performant",
                                desc: "60fps animations menggunakan hardware acceleration",
                                gradient: "from-yellow-500 to-orange-500"
                            },
                            {
                                icon: "🎯",
                                title: "Intuitive API",
                                desc: "Simple props untuk complex animations",
                                gradient: "from-green-500 to-emerald-500"
                            },
                            {
                                icon: "🔧",
                                title: "Fully Featured",
                                desc: "Gestures, scroll, layout animations & more",
                                gradient: "from-blue-500 to-cyan-500"
                            },
                            {
                                icon: "📱",
                                title: "Responsive",
                                desc: "Works perfect di semua devices",
                                gradient: "from-purple-500 to-pink-500"
                            },
                            {
                                icon: "🎨",
                                title: "Customizable",
                                desc: "Full control atas timing & easing",
                                gradient: "from-red-500 to-rose-500"
                            },
                            {
                                icon: "♿",
                                title: "Accessible",
                                desc: "Respects prefers-reduced-motion",
                                gradient: "from-indigo-500 to-violet-500"
                            },
                        ].map((feature, i) => (
                            <StaggerItem key={i}>
                                <HoverCard className={`bg-gradient-to-br ${feature.gradient} rounded-xl p-6 h-full`}>
                                    <div className="text-4xl mb-3">{feature.icon}</div>
                                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                    <p className="text-sm text-white/90">{feature.desc}</p>
                                </HoverCard>
                            </StaggerItem>
                        ))}
                    </div>

                    {/* Quick Start */}
                    <StaggerItem>
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                            <h2 className="text-3xl font-bold mb-6">🚀 Quick Start</h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">1. Import Motion</h3>
                                    <div className="bg-gray-950 rounded-lg p-4 overflow-x-auto">
                                        <code className="text-green-400">
                                            import {'{ motion }'} from "motion/react"
                                        </code>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">2. Add Animation</h3>
                                    <div className="bg-gray-950 rounded-lg p-4 overflow-x-auto">
                                        <code className="text-green-400">
                                            {'<motion.div animate={{ x: 100 }}>'}
                                            <br />
                                            &nbsp;&nbsp;Animated!
                                            <br />
                                            {'</motion.div>'}
                                        </code>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">3. Or Use Utilities</h3>
                                    <div className="bg-gray-950 rounded-lg p-4 overflow-x-auto">
                                        <code className="text-green-400">
                                            import {'{ FadeIn }'} from "@/components/motion"
                                            <br />
                                            <br />
                                            {'<FadeIn direction="up">Content</FadeIn>'}
                                        </code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>

                    {/* Resources */}
                    <StaggerItem>
                        <div className="mt-12 text-center">
                            <h2 className="text-3xl font-bold mb-6">📚 Resources</h2>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://motion.dev/docs/react"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-colors"
                                >
                                    Official Docs
                                </a>
                                <a
                                    href="/MOTION_GUIDE.md"
                                    target="_blank"
                                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors"
                                >
                                    Local Guide
                                </a>
                                <Link
                                    to="/"
                                    className="px-6 py-3 bg-gray-700 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                                >
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    </StaggerItem>
                </Stagger>

                {/* Footer */}
                <FadeIn delay={1} className="text-center mt-20 text-gray-400">
                    <p>Built with Motion v12.23.26 - Ready to animate! ✨</p>
                </FadeIn>
            </div>
        </div>
    )
}
