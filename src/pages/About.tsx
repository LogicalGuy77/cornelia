import type React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaBalanceScale, FaLightbulb, FaCogs } from "react-icons/fa";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import HeroButtons from "@/Components/HeroButtons";

const About: React.FC = () => {
    const [missionRef, isMissionVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [offeringsRef, isOfferingsVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [whyChooseRef, isWhyChooseVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div className="bg-gradient-to-b from-blue-200 to-blue-300 min-h-screen text-gray-800">
            <motion.header
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="py-4 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-md"
            >
                <HeroButtons />
            </motion.header>

            <main className="container mx-auto px-6 py-16 max-w-6xl">
                <motion.section
                    ref={missionRef}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: isMissionVisible ? 1 : 0, scale: isMissionVisible ? 1 : 0.95 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-4xl font-bold mb-8 text-blue-800">Our Mission</h2>
                    <p className="text-xl leading-relaxed max-w-3xl mx-auto">
                        At Cornelia Legal AI, we empower law firms, corporate legal teams, and independent practitioners
                        with AI-driven solutions that streamline contract review, conflict checks, risk assessments, and document drafting.
                        By leveraging state-of-the-art machine learning and natural language processing (NLP), we provide
                        intelligent insights that enable faster, more informed legal decisions.
                    </p>
                </motion.section>

                <motion.section
                    ref={offeringsRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOfferingsVisible ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
                    className="mb-24"
                >
                    <h2 className="text-4xl font-bold mb-12 text-blue-800 text-center">What We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[{ icon: FaBalanceScale, title: "Conflict Detection", description: "Identify potential conflicts of interest before they become legal issues." },
                        { icon: FaLightbulb, title: "AI-Powered Risk Assessment", description: "Proactively monitor legal documents for compliance risks." },
                        { icon: FaCogs, title: "Smart Summaries", description: "Convert complex contracts into clear, actionable insights." },
                        { icon: FaRocket, title: "Draft Assistant", description: "Generate and refine legal documents with AI-driven suggestions." }].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: isOfferingsVisible ? 1 : 0, y: isOfferingsVisible ? 0 : 30 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                                className="bg-white/90 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm"
                            >
                                <item.icon className="text-5xl text-blue-800 mb-6" />
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    ref={whyChooseRef}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: isWhyChooseVisible ? 1 : 0, x: isWhyChooseVisible ? 0 : -30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-24"
                >
                    <h2 className="text-4xl font-bold mb-12 text-blue-800 text-center">Why Choose Cornelia AI?</h2>
                    <div className="bg-white/90 rounded-xl p-8 backdrop-blur-sm shadow-lg">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {["Speed & Efficiency – Automate time-consuming legal tasks.",
                                "Accuracy & Compliance – Reduce errors and stay ahead of regulatory changes.",
                                "Intelligent Insights – Gain deeper understanding from AI-generated analysis.",
                                "Seamless Integration – Work alongside your existing legal tools and workflows."].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: isWhyChooseVisible ? 1 : 0, x: isWhyChooseVisible ? 0 : -20 }}
                                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                                        className="flex items-start gap-3 text-lg"
                                    >
                                        <span className="text-blue-800 text-2xl flex-shrink-0 mt-1">✓</span>
                                        {item}
                                    </motion.li>
                                ))}
                        </ul>
                    </div>
                </motion.section>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    className="text-center bg-white/90 rounded-xl p-12 backdrop-blur-sm shadow-lg"
                >
                    <p className="text-2xl mb-8 font-normal">
                        Join us in redefining the future of legal tech. Cornelia Legal AI is your partner in smarter, faster,
                        and more reliable legal operations.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-800 text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-blue-900 transition-all duration-300 shadow-lg"
                    >
                        Experience the power of AI in legal work today!
                    </motion.button>
                </motion.div>
            </main>
        </div>
    );
};

export default About;
