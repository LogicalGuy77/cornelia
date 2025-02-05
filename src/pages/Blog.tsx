import { motion } from "framer-motion";
import HeroButtons from "@/Components/HeroButtons";

const blogPosts = [
    {
        title: "How AI is Transforming Legal Work",
        image: "/legal.png",
        description:
            "Explore how AI-driven tools are streamlining legal operations, increasing efficiency, and reducing costs for firms worldwide.",
    },
    {
        title: "The Future of Contract Review",
        image: "2.png",
        description:
            "Learn how AI is revolutionizing contract analysis, helping legal professionals draft and review documents faster than ever before.",
    },
    {
        title: "Ensuring Compliance with AI",
        image: "3.png",
        description:
            "Discover how AI tools assist businesses in staying compliant with ever-changing regulations and minimizing risks.",
    },
];

const Blog = () => {
    return (

        <div className="bg-gradient-to-b from-blue-100 to-blue-300 min-h-screen py-16 px-6">
            <motion.header
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 py-4 bg-white/80 backdrop-blur-sm z-50 shadow-md"
            >
                <HeroButtons />
            </motion.header>
            <div className="max-w-6xl mx-auto text-center pt-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-blue-800 mb-8"
                >
                    Featured Blogs
                </motion.h2>
                <p className="text-lg text-gray-700 mb-12">
                    Stay updated with the latest insights on AI-driven legal solutions.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {post.title}
                                </h3>
                                <p className="text-gray-700 mb-4">{post.description}</p>
                                <button className="bg-blue-800 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-900 transition-all duration-300">
                                    Read More
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
