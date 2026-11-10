
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";

function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            setError('Password must contain at least 6 characters.');
            return;
        }

        setLoading(true);

        try {
            await createUserWithEmailAndPassword(auth, email, password);

            navigate('/login');

        } catch (error) {
            console.error("Signup failed:", error);

            if (error.code === "auth/email-already-in-use") {
                setError("This email is already registered.");
            } else if (error.code === "auth/invalid-email") {
                setError("Please enter a valid email address.");
            } else if (error.code === "auth/weak-password") {
                setError("Please choose a stronger password.");
            } else {
                setError("Registration failed. Please try again.");
            }

        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="relative min-h-[85vh] bg-[#0B1120] text-white flex items-center justify-center px-5 py-16 overflow-hidden">

            {/* Background glow */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>


            <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


                {/* LEFT SIDE */}
                <div className="hidden md:block">

                    <p className="text-orange-400 uppercase tracking-[0.3em] text-sm font-semibold mb-6">
                        Join Our Community
                    </p>

                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                        Create Your
                        <span className="block text-orange-400">
                            Own Account.
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg leading-8 mt-7 max-w-md">
                        Become part of our technology community.
                        Create an account to explore articles,
                        share ideas and discover something new.
                    </p>

                    <div className="mt-10 flex items-center gap-3">
                        <div className="w-12 h-1 bg-orange-400 rounded-full"></div>

                        <span className="text-gray-500 text-sm tracking-widest">
                            START YOUR JOURNEY
                        </span>
                    </div>

                </div>


                {/* RIGHT SIDE SIGNUP CARD */}
                <div className="w-full max-w-md mx-auto">

                    <div className="bg-[#151F32] border border-white/10 rounded-3xl p-7 sm:p-10 shadow-2xl shadow-black/30">


                        <div className="mb-8">

                            <div className="w-14 h-14 rounded-2xl bg-orange-400/10 flex items-center justify-center text-orange-400 text-2xl font-bold mb-6">
                                P.
                            </div>

                            <h2 className="text-3xl font-bold">
                                Create Account
                            </h2>

                            <p className="text-gray-400 mt-3">
                                Fill in your details to get started.
                            </p>

                        </div>


                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">


                            {/* EMAIL */}
                            <div>

                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full bg-[#0B1120] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-500 outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition"
                                />

                            </div>


                            {/* PASSWORD */}
                            <div>

                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Create a password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full bg-[#0B1120] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-500 outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition"
                                />

                            </div>


                            {/* CONFIRM PASSWORD */}
                            <div>

                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    Confirm Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    className="w-full bg-[#0B1120] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-500 outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition"
                                />

                            </div>


                            {/* ERROR MESSAGE */}
                            {error && (

                                <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl p-3 text-sm">
                                    {error}
                                </div>

                            )}


                            {/* REGISTER BUTTON */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02] transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? "Creating Account..." : "Create Account →"}
                            </button>

                        </form>


                        {/* LOGIN NAVIGATION */}
                        <div className="mt-8 pt-6 border-t border-white/10 text-center">

                            <p className="text-gray-400 text-sm">
                                Already have an account?

                                <span
                                    className="text-orange-400 font-semibold cursor-pointer ml-2 hover:text-orange-300 transition"
                                    onClick={() => navigate("/login")}
                                >
                                    Sign In
                                </span>

                            </p>

                        </div>

                    </div>


                    <p className="text-center text-gray-600 text-xs mt-7">
                        © 2026 Personal Blog Platform. All rights reserved.
                    </p>

                </div>

            </div>

        </div>

    );
}

export default Signup;
