

import BlogProfileImage from "../assets/Blog Website Design.jpg"
import CSS from "../assets/css-3.png"
import HTML from "../assets/html.png"
import DB from "../assets/data-server.png"
import JS from "../assets/js.png"
import REACTICON from "../assets/physics.png"
import NODE from "../assets/node-js.png"
import P1 from "../assets/p1.jpg"
import P2 from "../assets/p2.png"
import P3 from "../assets/p3.png"
import BlogImage from "../assets/blogImage.png"
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer'

function Home() {
    const navigate = useNavigate()

    return (
        <div className="bg-[#0B1120] text-white min-h-screen overflow-hidden">

            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 flex flex-col-reverse md:flex-row items-center justify-between gap-14">

                <div className="w-full md:w-3/5">

                    <p className="text-orange-400 font-semibold tracking-[0.3em] uppercase text-sm mb-6">
                        Welcome to my portfolio
                    </p>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Hy! I Am
                    </h2>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-orange-400 py-3">
                        Jacky Thomas
                    </h2>

                    <p className="text-gray-400 text-lg leading-8 max-w-xl mt-5">
                        I can create stunning website for your company,
                        Do check my works. I won't disappoint you.
                        Try me for 7 Days before you decide anything.
                    </p>

                    <button className="mt-9 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold shadow-lg shadow-orange-500/20 hover:scale-105 hover:shadow-orange-500/40 transition duration-300">
                        Hire Me
                    </button>

                </div>

                <div className="w-full md:w-2/5 flex justify-center">

                    <div className="relative">
                        <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full"></div>

                        <img
                            src={BlogProfileImage}
                            className="relative w-64 md:w-96 rounded-3xl border border-white/10 shadow-2xl shadow-orange-500/10"
                            alt="Profile"
                        />
                    </div>

                </div>

            </section>


            {/* TECHNOLOGY SECTION */}
            <section className="border-y border-white/10 bg-white/[0.02] py-10">

                <div className="max-w-5xl mx-auto px-6">

                    <p className="text-center text-gray-500 uppercase tracking-[0.25em] text-xs mb-8">
                        Technologies I work with
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">

                        {[HTML, CSS, JS, REACTICON, DB, NODE].map((tech, index) => (
                            <img
                                key={index}
                                src={tech}
                                className="w-12 h-12 object-contain opacity-70 hover:opacity-100 hover:scale-125 transition duration-300"
                                alt="Technology"
                            />
                        ))}

                    </div>

                </div>

            </section>


            {/* EXPERIENCE / STATS SECTION */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <div className="bg-[#151F32] border border-white/10 rounded-2xl p-8 hover:border-orange-400/50 transition duration-300">
                            <h2 className="text-5xl font-bold text-orange-400">6+</h2>
                            <p className="text-gray-400 mt-3">Projects Completed</p>
                        </div>

                        <div className="bg-[#151F32] border border-white/10 rounded-2xl p-8 hover:border-orange-400/50 transition duration-300">
                            <h2 className="text-5xl font-bold text-orange-400">6+</h2>
                            <p className="text-gray-400 mt-3">Months of Experience</p>
                        </div>

                    </div>

                    <div>

                        <p className="text-orange-400 uppercase tracking-widest text-sm font-semibold mb-4">
                            What I offer
                        </p>

                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                            My Awesome
                            <span className="text-orange-400 block">Services</span>
                        </h2>

                        <p className="text-gray-400 leading-7 mt-6">
                            I have attached my Resume here for your reference.
                            Explore my skills, experience and projects.
                        </p>

                        <button className="mt-8 px-8 py-3 rounded-xl border border-orange-400 text-orange-400 font-semibold hover:bg-orange-400 hover:text-white transition duration-300">
                            Download CV
                        </button>

                    </div>

                </div>

            </section>


            {/* PROJECTS SECTION */}
            <section className="bg-[#101A2C] py-24">

                <div className="max-w-7xl mx-auto px-6 md:px-12">

                    <div className="text-center mb-16">

                        <p className="text-orange-400 uppercase tracking-widest text-sm font-semibold mb-4">
                            My Work
                        </p>

                        <h2 className="text-4xl md:text-6xl font-bold">
                            Checkout My Live
                            <span className="text-orange-400"> Projects</span>
                        </h2>

                        <p className="text-gray-400 mt-5">
                            A collection of my creative work and development projects.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {[P1, P2, P3].map((project, index) => (
                            <div
                                key={index}
                                className="group bg-[#151F32] rounded-2xl overflow-hidden border border-white/10 hover:border-orange-400/50 hover:-translate-y-2 transition duration-300"
                            >

                                <div className="overflow-hidden">
                                    <img
                                        src={project}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                                        alt={`Project ${index + 1}`}
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold">
                                        Project {index + 1}
                                    </h3>

                                    <p className="text-gray-400 text-sm mt-2">
                                        Explore my creative development work.
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* BLOG SECTION */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">

                <div className="flex flex-col md:flex-row items-center justify-between gap-14">

                    <div className="w-full md:w-1/2 flex justify-center">

                        <div className="relative">
                            <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full"></div>

                            <img
                                src={BlogImage}
                                className="relative w-72 md:w-96 rounded-3xl border border-white/10 shadow-2xl"
                                alt="Project preview"
                            />
                        </div>

                    </div>

                    <div className="w-full md:w-1/2">

                        <p className="text-orange-400 uppercase tracking-widest text-sm font-semibold mb-4">
                            Knowledge Sharing
                        </p>

                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                            I Like to Write
                            <span className="block text-orange-400 mt-2">
                                Blogs about Tech
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg leading-8 mt-6">
                            You can know better about me by reading my blogs here.
                            I share my expertise, experiences and technical knowledge.
                        </p>

                        <button
                            className="mt-9 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold hover:scale-105 shadow-lg shadow-orange-500/20 transition duration-300"
                            onClick={() => navigate("/blogs")}
                        >
                            Read My Blogs →
                        </button>

                    </div>

                </div>

            </section>


            <Footer />

        </div>
    )
}

export default Home
