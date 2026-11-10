
import { useEffect, useState } from 'react';
import axios from "axios";
import Footer from './common/Footer';
import auth from "../firebase";

function Blogs() {

    const [blogs, setBlogs] = useState([]);
    const [admin, setadmin] = useState(false);

    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);

        // Fetch blogs
        axios.get("https://blog-portfolio-backend-seven.vercel.app/api/blogs")
            .then((res) => {
                setBlogs(res.data);
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
            });

        // Check admin authentication
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user && user.uid === "BCZqYD97OBg8iXr2drAoQsPYK0T2") {
                setadmin(true);
            } else {
                setadmin(false);
            }
        });

        return () => unsubscribe();

    }, []);

    // Like Blog
    const handleLike = async (blog_id) => {
        try {
           const response = await axios.patch(
  `https://blog-portfolio-backend-seven.vercel.app/api/blogs/like/${blog_id}`
);

            if (response.status === 200) {
                const res = await axios.get("https://blog-portfolio-backend-seven.vercel.app/api/blogs");
                setBlogs(res.data);
            }

        } catch (error) {
            console.error('Error liking the blog post:', error);
        }
    };

    // Add New Blog
    const handleNewBlogSubmit = (event) => {
        event.preventDefault();

        const today = new Date();

        const date = today.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const likes = 0;

        axios.post("https://blog-portfolio-backend-seven.vercel.app/api/blogs", {
            newTitle,
            date,
            newContent,
            likes
        }).then((res) => {

            console.log(res.data);

            axios.get("https://blog-portfolio-backend-seven.vercel.app/api/blogs")
                .then((res) => {
                    setBlogs(res.data);
                });

        }).catch((error) => {
            console.error("Error creating blog:", error);
        });

        setNewTitle('');
        setNewContent('');
    };

    return (

        <div className="bg-[#0B1120] text-white min-h-screen">

            {/* BLOG HERO SECTION */}
            <section className="relative overflow-hidden border-b border-white/10">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full"></div>

                <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">

                    <p className="text-orange-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
                        Knowledge & Insights
                    </p>

                    <h1 className="text-4xl md:text-7xl font-extrabold mb-6">
                        Explore My
                        <span className="text-orange-400"> Blogs.</span>
                    </h1>

                    <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-8">
                        Discover my thoughts, technical experiences and
                        knowledge about web development, programming and technology.
                    </p>

                    <div className="flex justify-center mt-9">
                        <div className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-gray-300 text-sm">
                            <span className="text-orange-400 font-bold">
                                {blogs.length}
                            </span>
                            {" "}Articles Published
                        </div>
                    </div>

                </div>

            </section>


            {/* ADMIN CREATE BLOG SECTION */}
            {admin && (

                <section className="max-w-5xl mx-auto px-6 py-14">

                    <div className="bg-[#151F32] border border-orange-400/20 rounded-2xl p-6 md:p-10 shadow-xl shadow-black/20">

                        <div className="mb-8">

                            <p className="text-orange-400 uppercase tracking-widest text-xs font-bold mb-3">
                                Administrator Panel
                            </p>

                            <h2 className="text-3xl font-bold">
                                Create a New Blog
                            </h2>

                            <p className="text-gray-400 mt-2">
                                Share your knowledge and publish a new article.
                            </p>

                        </div>

                        <form
                            onSubmit={handleNewBlogSubmit}
                            className="flex flex-col gap-6"
                        >

                            <div>
                                <label className="block text-gray-300 font-medium mb-2">
                                    Blog Title
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your blog title..."
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    className="w-full bg-[#0B1120] border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 font-medium mb-2">
                                    Blog Content
                                </label>

                                <textarea
                                    placeholder="Write your blog content here..."
                                    value={newContent}
                                    onChange={(e) => setNewContent(e.target.value)}
                                    className="w-full bg-[#0B1120] border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition resize-none"
                                    rows="6"
                                    required
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 transition duration-300"
                                >
                                    + Publish Blog
                                </button>
                            </div>

                        </form>

                    </div>

                </section>

            )}


            {/* BLOG LIST SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="flex items-center justify-between mb-10">

                    <div>
                        <p className="text-orange-400 uppercase tracking-widest text-xs font-semibold mb-2">
                            Latest Articles
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold">
                            Recent Publications
                        </h2>
                    </div>

                </div>


                {blogs.length === 0 ? (

                    <div className="text-center py-20 border border-white/10 rounded-2xl bg-[#151F32]">

                        <div className="text-5xl mb-5">📚</div>

                        <h3 className="text-2xl font-bold mb-3">
                            No Blogs Yet
                        </h3>

                        <p className="text-gray-400">
                            New articles will appear here soon.
                        </p>

                    </div>

                ) : (

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {blogs.map((blog) => (

                            <div
                                key={blog._id}
                                className="group bg-[#151F32] border border-white/10 rounded-2xl p-7 md:p-8 hover:border-orange-400/50 hover:-translate-y-2 transition duration-300 shadow-lg shadow-black/10"
                            >

                                {/* Blog category */}
                                <div className="flex justify-between items-center mb-6">

                                    <span className="px-4 py-2 rounded-full bg-orange-400/10 text-orange-400 text-xs font-semibold uppercase tracking-wider">
                                        Technology
                                    </span>

                                    <span className="text-gray-500 text-sm">
                                        {blog.date}
                                    </span>

                                </div>


                                {/* Blog content */}
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 group-hover:text-orange-400 transition duration-300 break-words">
                                    {blog.newTitle}
                                </h3>

                                <p className="text-gray-400 leading-8 mb-8 whitespace-pre-wrap break-words">
                                    {blog.newContent}
                                </p>


                                {/* Blog footer */}
                                <div className="flex items-center justify-between border-t border-white/10 pt-6">

                                    <span className="text-gray-400 text-sm">
                                        Published Article
                                    </span>

                                    <button
                                        onClick={() => handleLike(blog._id)}
                                        className="flex items-center gap-2 px-5 py-2 rounded-full bg-orange-400/10 text-orange-400 hover:bg-orange-400 hover:text-white transition duration-300 font-medium"
                                    >
                                        ♥ Like
                                        <span>{blog.likes}</span>
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </section>


            <Footer />

        </div>

    );
}

export default Blogs;
