import React, { useState } from 'react';
import { Shield, Home, Layout, Users, FileText, User, LogOut, Menu, X, Sun, Moon, MessageCircle } from 'lucide-react';
import PasswordGenerator from './components/PasswordGenerator';
import Dashboard from './components/Dashboard';
import Careers from './components/Careers';
import Blog from './components/Blog';
import UserProfile from './components/UserProfile';
import Reviews from './components/Reviews';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
      setCurrentPage('dashboard');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'generator':
        return <PasswordGenerator />;
      case 'careers':
        return <Careers />;
      case 'blog':
        return <Blog />;
      case 'profile':
        return <UserProfile />;
      case 'reviews':
        return <Reviews />;
      default:
        return <Dashboard />;
    }
  };

  if (!isLoggedIn) {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4 ${isDarkMode ? 'dark' : ''}`}>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back</h1>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${isDarkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">SecurePass</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setCurrentPage('dashboard')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'dashboard' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                <Layout className="w-4 h-4" />
                <span>Dashboard</span>
              </button>
              <button
                onClick={() => setCurrentPage('generator')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'generator' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>Generator</span>
              </button>
              <button
                onClick={() => setCurrentPage('careers')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'careers' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Careers</span>
              </button>
              <button
                onClick={() => setCurrentPage('blog')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'blog' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Blog</span>
              </button>
              <button
                onClick={() => setCurrentPage('reviews')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'reviews' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reviews</span>
              </button>
              <button
                onClick={() => setCurrentPage('profile')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'profile' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Profile</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-red-500 hover:text-red-600"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  setCurrentPage('dashboard');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <Layout className="w-4 h-4" />
                <span>Dashboard</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPage('generator');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <Shield className="w-4 h-4" />
                <span>Generator</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPage('careers');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <Users className="w-4 h-4" />
                <span>Careers</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPage('blog');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <FileText className="w-4 h-4" />
                <span>Blog</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPage('reviews');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reviews</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPage('profile');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <User className="w-4 h-4" />
                <span>Profile</span>
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-red-500 hover:text-red-600"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;