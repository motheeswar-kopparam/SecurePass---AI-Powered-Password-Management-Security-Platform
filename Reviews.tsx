import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Emma Thompson',
      role: 'Software Developer',
      rating: 5,
      comment: 'This password generator has become an essential tool in my development workflow. The security features are top-notch!',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
      date: '2 days ago'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Security Analyst',
      rating: 5,
      comment: 'As a security professional, I appreciate the attention to detail in generating truly random and secure passwords.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
      date: '1 week ago'
    },
    {
      id: 3,
      name: 'Sarah Williams',
      role: 'IT Manager',
      rating: 4,
      comment: "Great tool for managing our team's password security. The interface is intuitive and user-friendly.",
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
      date: '2 weeks ago'
    },
    {
      id: 4,
      name: 'David Rodriguez',
      role: 'Web Developer',
      rating: 5,
      comment: 'The password strength indicators and copy-to-clipboard feature save me so much time. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
      date: '3 weeks ago'
    },
    {
      id: 5,
      name: 'Lisa Johnson',
      role: 'Product Manager',
      rating: 5,
      comment: 'This app has streamlined our password management process. The dashboard analytics are particularly useful.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
      date: '1 month ago'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'System Administrator',
      rating: 4,
      comment: 'Solid password generator with great customization options. Would love to see more enterprise features.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
      date: '1 month ago'
    },
    {
      id: 7,
      name: 'Emily Davis',
      role: 'UX Designer',
      rating: 5,
      comment: 'The interface is beautifully designed and the user experience is seamless. A perfect example of security meeting design.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
      date: '2 months ago'
    },
    {
      id: 8,
      name: 'Robert Kim',
      role: 'Cybersecurity Consultant',
      rating: 5,
      comment: "I've tested many password generators, and this one stands out for its security features and ease of use.",
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
      date: '2 months ago'
    },
    {
      id: 9,
      name: 'Amanda Martinez',
      role: 'Digital Marketing Manager',
      rating: 4,
      comment: 'Perfect for managing multiple client accounts securely. The password history feature is a lifesaver.',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80',
      date: '3 months ago'
    },
    {
      id: 10,
      name: 'Thomas Anderson',
      role: 'Software Engineer',
      rating: 5,
      comment: 'The API integration options and developer tools make this my go-to password solution for all projects.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
      date: '3 months ago'
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <MessageCircle className="w-6 h-6 text-indigo-600" />
        <h1 className="text-2xl font-bold text-gray-900">Customer Reviews</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start space-x-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.role}</p>
                <div className="flex items-center space-x-1 mt-1">
                  {renderStars(review.rating)}
                </div>
              </div>
              <span className="text-xs text-gray-500">{review.date}</span>
            </div>
            <p className="mt-4 text-sm text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;