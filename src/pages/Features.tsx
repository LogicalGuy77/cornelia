"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, BarChart, FileText, Bot, MessageSquare, HelpCircle } from "lucide-react"
import HeroButtons from "@/Components/HeroButtons"

const features = [
    {
        title: "Conflict Check",
        description: "Automatically detect potential conflicts of interest across your legal documents. Our AI system analyzes relationships, parties, and terms to identify and flag possible conflicts before they become issues.",
        tag: "Proactive Detection",
        icon: Shield
    },
    {
        title: "Risk Assessment",
        description: "Stay ahead of potential legal challenges with our intelligent risk detection system. Continuously monitor documents and transactions to address compliance concerns proactively.",
        tag: "Continuous Protection",
        icon: BarChart
    },
    {
        title: "Smart Summaries",
        description: "Experience a revolutionary approach to document review with AI-generated insights. Complex legal documents are transformed into clear, actionable summaries for streamlined decision-making.",
        tag: "Enhanced Efficiency",
        icon: FileText
    },
    {
        title: "Draft Assistant",
        description: "Generate and refine legal document drafts with AI assistance. Create professional, context-aware content while maintaining compliance with legal standards and your organization's requirements.",
        tag: "Intelligent Drafting",
        icon: Bot
    },
    {
        title: "AI Document Assistant",
        description: "Engage in real-time conversations about your legal documents. Get instant answers to specific questions, explanations of complex clauses, and expert insights through our interactive AI chat interface.",
        tag: "Interactive Analysis",
        icon: MessageSquare
    },
    {
        title: "Quick Explanations",
        description: "Get instant, contextual explanations for any part of your legal documents. Simply select any text to receive AI-powered insights, definitions, and clarifications of complex legal terms and concepts.",
        tag: "Instant Clarity",
        icon: HelpCircle
    }
]

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
            } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
            } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }))

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full text-slate-950 dark:text-white" viewBox="0 0 696 316" fill="none">
                <title>Cornelia AI Features</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    )
}

function FeatureCard({ feature, index }: { feature: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800">
                    <feature.icon className="w-6 h-6 text-neutral-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#FFD700]">{feature.title}</h3>
            </div>

            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                {feature.description}
            </p>

            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    {feature.tag}
                </span>
                <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
            </div>
        </motion.div>
    )
}

export default function Features({
    title = "Cornelia AI Features",
}: {
    title?: string
}) {
    const words = title.split(" ")

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
            <motion.header
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 py-4 bg-white/80 backdrop-blur-sm z-50 shadow-md"
            >
                <HeroButtons />
            </motion.header>

            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 pt-32"> {/* Increased pt-20 to pt-32 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-6xl mx-auto"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-16 tracking-tighter text-center">
                        {words.map((word, wordIndex) => (
                            <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: wordIndex * 0.1 + letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                                        dark:from-white dark:to-white/80"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} feature={feature} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}