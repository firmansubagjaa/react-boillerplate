import {
    FadeIn,
    ScaleIn,
    Stagger,
    StaggerItem,
    HoverCard,
    ScrollReveal,
    AnimatedButton,
    Pulse,
    Bounce
} from "@/components/motion/animated-components"


export default function MotionExamples() {
    return (
        <>
            <title>Motion Utility Components | Tivity</title>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white p-8">
                <div className="max-w-6xl mx-auto space-y-20">
                    {/* Header with Fade In */}
                    <FadeIn direction="down" className="text-center space-y-4">
                        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Motion Utility Components
                        </h1>
                        <p className="text-xl text-gray-300">
                            Reusable animation components untuk aplikasi kamu
                        </p>
                    </FadeIn>

                    {/* FadeIn Examples */}
                    <section className="space-y-6">
                        <h2 className="text-4xl font-semibold">FadeIn Component</h2>
                        <div className="grid grid-cols-4 gap-4">
                            <FadeIn delay={0} className="h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                                No Direction
                            </FadeIn>
                            <FadeIn direction="up" delay={0.1} className="h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                                Up
                            </FadeIn>
                            <FadeIn direction="left" delay={0.2} className="h-32 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                                Left
                            </FadeIn>
                            <FadeIn direction="right" delay={0.3} className="h-32 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                                Right
                            </FadeIn>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                            <code className="text-sm text-green-400">
                                {`<FadeIn direction="up" delay={0.2}>`}<br />
                                &nbsp;&nbsp;Your content<br />
                                {`</FadeIn>`}
                            </code>
                        </div>
                    </section>

                    {/* ScaleIn Example */}
                    <section className="space-y-6">
                        <h2 className="text-4xl font-semibold">ScaleIn Component</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <ScaleIn delay={0} className="h-40 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-lg">
                                Instant
                            </ScaleIn>
                            <ScaleIn delay={0.2} className="h-40 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-lg">
                                Delay 0.2s
                            </ScaleIn>
                            <ScaleIn delay={0.4} className="h-40 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-lg">
                                Delay 0.4s
                            </ScaleIn>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                            <code className="text-sm text-green-400">
                                {`<ScaleIn delay={0.2}>`}<br />
                                &nbsp;&nbsp;Your content<br />
                                {`</ScaleIn>`}
                            </code>
                        </div>
                    </section>

                    {/* Stagger Example */}
                    <section className="space-y-6">
                        <h2 className="text-4xl font-semibold">Stagger Components</h2>
                        <Stagger staggerDelay={0.15} className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <StaggerItem key={i}>
                                    <div className="h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-2xl font-bold">
                                        {i}
                                    </div>
                                </StaggerItem>
                            ))}
                        </Stagger>
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                            <code className="text-sm text-green-400">
                                {`<Stagger staggerDelay={0.15}>`}<br />
                                &nbsp;&nbsp;{`<StaggerItem>Item 1</StaggerItem>`}<br />
                                &nbsp;&nbsp;{`<StaggerItem>Item 2</StaggerItem>`}<br />
                                {`</Stagger>`}
                            </code>
                        </div>
                    </section>

                    {/* HoverCard Example */}
                    <section className="space-y-6">
                        <h2 className="text-4xl font-semibold">HoverCard Component</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <HoverCard className="h-48 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl p-6 cursor-pointer">
                                <h3 className="text-2xl font-bold mb-2">Scale Only</h3>
                                <p className="text-sm">Hover me untuk scale effect</p>
                            </HoverCard>
                            <HoverCard lift className="h-48 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl p-6 cursor-pointer">
                                <h3 className="text-2xl font-bold mb-2">Lift Effect</h3>
                                <p className="text-sm">Hover me untuk lift + scale</p>
                            </HoverCard>
                            <HoverCard scale={1.1} lift className="h-48 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl p-6 cursor-pointer">
                                <h3 className="text-2xl font-bold mb-2">Custom Scale</h3>
                                <p className="text-sm">Scale 1.1 + lift effect</p>
                            </HoverCard>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                            <code className="text-sm text-green-400">
                                {`<HoverCard scale={1.1} lift>`}<br />
                                &nbsp;&nbsp;Your card content<br />
                                {`</HoverCard>`}
                            </code>
                        </div>
                    </section>

                    {/* ScrollReveal Example */}
                    <section className="space-y-6">
                        <h2 className="text-4xl font-semibold">ScrollReveal Component</h2>
                        <p className="text-gray-400">Scroll down untuk melihat animasi</p>
                        <div className="space-y-8">
                            {[
                                { dir: "up", color: "from-blue-500 to-cyan-500" },
                                { dir: "left", color: "from-green-500 to-emerald-500" },
                                { dir: "right", color: "from-orange-500 to-red-500" },
                                { dir: "down", color: "from-purple-500 to-pink-500" }
                            ].map((item, i) => (
                                <ScrollReveal
                                    key={i}
                                    direction={item.dir as any}
                                    once={false}
                                    className={`h-32 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-2xl font-bold`}
                                >
                                    Scroll Reveal - {item.dir.toUpperCase()}
                                </ScrollReveal>
                            ))}
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                            <code className="text-sm text-green-400">
                                {`<ScrollReveal direction="up" once={false}>`}<br />
                                &nbsp;&nbsp;Visible when scrolled into view<br />
                                {`</ScrollReveal>`}
                            </code>
                        </div>
                    </section>

                    {/* AnimatedButton Example */}
                    <section className="space-y-6">
                        <h2 className="text-4xl font-semibold">AnimatedButton Component</h2>
                        <div className="flex gap-4 items-center">
                            <AnimatedButton
                                variant="default"
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
                            >
                                Default
                            </AnimatedButton>
                            <AnimatedButton
                                variant="glow"
                                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold"
                            >
                                Glow Effect
                            </AnimatedButton>
                            <AnimatedButton
                                variant="lift"
                                className="px-8 py-4 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold"
                            >
                                Lift Effect
                            </AnimatedButton>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                            <code className="text-sm text-green-400">
                                {`<AnimatedButton variant="glow">`}<br />
                                &nbsp;&nbsp;Click me!<br />
                                {`</AnimatedButton>`}
                            </code>
                        </div>
                    </section>

                    {/* Continuous Animations */}
                    <section className="space-y-6">
                        <h2 className="text-4xl font-semibold">Continuous Animations</h2>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold">Pulse</h3>
                                <div className="flex justify-center">
                                    <Pulse className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                                        Pulse
                                    </Pulse>
                                </div>
                                <div className="bg-gray-800/50 p-4 rounded-lg">
                                    <code className="text-sm text-green-400">
                                        {`<Pulse scale={1.1}>`}<br />
                                        &nbsp;&nbsp;Content<br />
                                        {`</Pulse>`}
                                    </code>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold">Bounce</h3>
                                <div className="flex justify-center">
                                    <Bounce height={30} className="w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                                        Bounce
                                    </Bounce>
                                </div>
                                <div className="bg-gray-800/50 p-4 rounded-lg">
                                    <code className="text-sm text-green-400">
                                        {`<Bounce height={30}>`}<br />
                                        &nbsp;&nbsp;Content<br />
                                        {`</Bounce>`}
                                    </code>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Real World Example */}
                    <section className="space-y-6">
                        <h2 className="text-4xl font-semibold">Real World Example</h2>
                        <p className="text-gray-400">Kombinasi beberapa components</p>

                        <FadeIn direction="up">
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                                <Stagger staggerDelay={0.1}>
                                    <StaggerItem>
                                        <h3 className="text-3xl font-bold mb-4">Product Features</h3>
                                    </StaggerItem>

                                    <div className="grid grid-cols-3 gap-6 mt-8">
                                        {[
                                            { title: "Fast", icon: "⚡", desc: "Lightning fast performance" },
                                            { title: "Secure", icon: "🔒", desc: "Bank-level security" },
                                            { title: "Reliable", icon: "✅", desc: "99.9% uptime" },
                                        ].map((feature, i) => (
                                            <StaggerItem key={i}>
                                                <HoverCard lift className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 cursor-pointer h-full">
                                                    <div className="text-4xl mb-3">{feature.icon}</div>
                                                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                                    <p className="text-sm text-gray-200">{feature.desc}</p>
                                                </HoverCard>
                                            </StaggerItem>
                                        ))}
                                    </div>

                                    <StaggerItem className="mt-8 text-center">
                                        <AnimatedButton
                                            variant="glow"
                                            className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-lg"
                                        >
                                            Get Started Now
                                        </AnimatedButton>
                                    </StaggerItem>
                                </Stagger>
                            </div>
                        </FadeIn>
                    </section>

                    {/* Footer */}
                    <footer className="text-center py-12 text-gray-500">
                        <p>Motion Utility Components - Siap digunakan di aplikasi kamu! 🚀</p>
                    </footer>
                </div>
            </div>
        </>
    )
}
