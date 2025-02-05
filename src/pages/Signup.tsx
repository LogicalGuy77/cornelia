import { useState } from "react";
import { motion } from "framer-motion";
import HeroButtons from "@/Components/HeroButtons";

const Signup = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 py-4 bg-white/80 backdrop-blur-sm z-50 shadow-md"
            >
                <HeroButtons />
            </motion.header>

            <div className="bg-gradient-to-b from-blue-200 to-blue-300 min-h-screen flex flex-col items-center justify-center pt-10">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white/90 p-8 rounded-xl shadow-lg backdrop-blur-sm w-full max-w-md mt-12"
                >
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </h2>

                    <form className="flex flex-col space-y-4">
                        {isSignUp && (
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        )}
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-800 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-900 transition-all duration-300"
                        >
                            {isSignUp ? "Sign Up" : "Sign In"}
                        </motion.button>
                    </form>

                    <p className="text-center mt-4">
                        {isSignUp ? "Already have an account?" : "Don't have an account?"}
                        <button
                            className="text-blue-600 hover:underline ml-1"
                            onClick={() => setIsSignUp(!isSignUp)}
                        >
                            {isSignUp ? "Sign In" : "Sign Up"}
                        </button>
                    </p>
                </motion.div>
            </div></>

    );
};

export default Signup;