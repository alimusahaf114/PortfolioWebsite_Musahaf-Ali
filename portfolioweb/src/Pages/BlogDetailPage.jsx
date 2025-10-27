import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react';
import { blogPosts } from '../Data/blogData';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the blog post by slug
  const post = blogPosts.find(p => p.slug === slug);

  // If post not found, show 404
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-400 mb-8">Blog post not found</p>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-all"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Featured Image */}
      <div className="relative h-64 md:h-[500px] overflow-hidden mb-12">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-8 left-8">
          <span className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {post.title}
        </h1>
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8 pb-8 border-b border-purple-400/20">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>{post.readTime}</span>
          </div>
          <button className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>

        {/* Blog Content - Full HTML */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.excerpt }} 
          />
        </div>

        {/* Tags */}
        <div className="mb-12 pb-12 border-b border-purple-400/20">
          <h3 className="text-2xl font-bold mb-6">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center space-x-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full hover:bg-purple-500/30 transition-colors cursor-pointer"
              >
                <Tag className="w-4 h-4" />
                <span>#{tag}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Share this post</h3>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center space-x-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <span>Twitter</span>
            </button>

            <button className="flex items-center space-x-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </button>

            <button className="flex items-center space-x-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </button>

            <button className="flex items-center space-x-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>Copy Link</span>
            </button>
          </div>
        </div>

        {/* Related Posts */}
        <div>
          <h3 className="text-2xl font-bold mb-6">More from {post.category}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.category === post.category && p.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <div
                  key={relatedPost.id}
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                  className="group bg-slate-800/50 rounded-xl overflow-hidden border border-purple-400/20 hover:border-purple-400/50 transition-all cursor-pointer"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-purple-400 transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </article>

      {/* Custom Styles for Blog Content */}
      <style>{`
        .blog-content h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #c084fc;
        }
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #e879f9;
        }
        .blog-content p {
          margin-bottom: 1rem;
          line-height: 1.8;
          color: #d1d5db;
        }
        .blog-content pre {
          background: #1e293b;
          padding: 1.5rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
          border: 1px solid #9333ea40;
        }
        .blog-content code {
          color: #a78bfa;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
        }
        .blog-content ul, .blog-content ol {
          margin: 1rem 0 1rem 2rem;
          color: #d1d5db;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
          line-height: 1.8;
        }
        .blog-content strong {
          color: #f9a8d4;
          font-weight: 600;
        }
        .blog-content a {
          color: #c084fc;
          text-decoration: underline;
        }
        .blog-content a:hover {
          color: #e879f9;
        }
        .blog-content blockquote {
          border-left: 4px solid #9333ea;
          padding-left: 1rem;
          margin: 1.5rem 0;
          color: #9ca3af;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}