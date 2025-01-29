import React from 'react';
import { FileText } from 'lucide-react';

function Blog() {
  const posts = [
    {
      title: 'The Importance of Strong Passwords',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      preview: 'Learn why strong passwords are crucial for your online security and how to create them effectively.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Password Security Best Practices in 2024',
      author: 'Michael Chen',
      date: 'March 10, 2024',
      preview: 'Stay up to date with the latest password security recommendations and best practices.',
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Why Password Managers Matter',
      author: 'Emily Rodriguez',
      date: 'March 5, 2024',
      preview: 'Discover how password managers can improve your security and make your digital life easier.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <FileText className="w-6 h-6 text-indigo-600" />
        <h1 className="text-2xl font-bold text-gray-900">Blog</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <article key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h2>
              <div className="text-sm text-gray-500 mb-4">
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
              </div>
              <p className="text-gray-600 mb-4">
                {post.preview}
              </p>
              <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;