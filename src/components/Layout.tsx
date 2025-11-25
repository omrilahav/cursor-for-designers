import { ReactNode, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, BookOpen, GraduationCap, Gamepad2, Lightbulb, Settings, Share2, Trophy, Menu, X, ChevronDown, Search } from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation()
  const { totalPoints, completedLessons } = useProgress()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/beginner-guide', label: 'Start Here', icon: Lightbulb, featured: true },
    { path: '/tutorials', label: 'Tutorials', icon: BookOpen },
    { path: '/training', label: 'Training', icon: GraduationCap },
    { path: '/games', label: 'Games', icon: Gamepad2 },
    { path: '/best-practices', label: 'Best Practices', icon: Lightbulb },
    { path: '/configuration', label: 'Configuration', icon: Settings },
    { path: '/specs-sharing', label: 'Specs Sharing', icon: Share2 },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Bar - Minimal */}
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white text-center py-3 px-4 border-b border-white/10">
        <p className="text-sm font-semibold tracking-wide">
          Master Cursor • Design with AI • Build Beautiful Things
        </p>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-black text-gray-900">Cursor Academy</h1>
                <p className="text-xs text-gray-500 font-medium">Learn AI-Powered Design</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.slice(0, 5).map((item) => {
                const Icon = item.icon
                const active = isActive(item.path)
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                      active
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    } ${item.featured ? 'relative' : ''}`}
                  >
                    {item.featured && !active && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                    )}
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
              
              {/* More Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm text-gray-700 hover:bg-gray-100 transition-all">
                  <span>More</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-hard border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {navItems.slice(5).map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-sm font-medium">{item.label}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Stats - Desktop */}
              <div className="hidden md:flex items-center gap-3">
                <Link to="/progress" className="stat-card hover:shadow-xl transition-all">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-600" />
                    <span className="text-sm font-bold text-gray-900">{totalPoints}</span>
                  </div>
                </Link>
                <div className="stat-card">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-bold text-gray-900">{completedLessons.length}</span>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white animate-slide-down">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {/* Mobile Stats */}
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-200">
                <Link to="/progress" className="stat-card flex-1 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-600" />
                    <span className="text-sm font-bold text-gray-900">{totalPoints} pts</span>
                  </div>
                </Link>
                <div className="stat-card flex-1">
                  <div className="flex items-center justify-center gap-2">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-bold text-gray-900">{completedLessons.length} lessons</span>
                  </div>
                </div>
              </div>

              {/* Mobile Nav Links */}
              {navItems.map((item) => {
                const Icon = item.icon
                const active = isActive(item.path)
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                      active
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                    {item.featured && !active && (
                      <span className="ml-auto badge-purple">New</span>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <h2 className="text-xl font-black text-gray-900">Cursor Academy</h2>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed max-w-md">
                Master the art of building stunning designs with AI assistance. Your complete learning platform for Cursor IDE.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">© 2024 Cursor Academy</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/beginner-guide" className="text-gray-600 hover:text-gray-900 text-sm">Start Here</Link></li>
                <li><Link to="/tutorials" className="text-gray-600 hover:text-gray-900 text-sm">Tutorials</Link></li>
                <li><Link to="/training" className="text-gray-600 hover:text-gray-900 text-sm">Training</Link></li>
                <li><Link to="/progress" className="text-gray-600 hover:text-gray-900 text-sm">Progress</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/best-practices" className="text-gray-600 hover:text-gray-900 text-sm">Best Practices</Link></li>
                <li><Link to="/configuration" className="text-gray-600 hover:text-gray-900 text-sm">Configuration</Link></li>
                <li><Link to="/specs-sharing" className="text-gray-600 hover:text-gray-900 text-sm">Specs Sharing</Link></li>
                <li><Link to="/games" className="text-gray-600 hover:text-gray-900 text-sm">Games</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              Built with passion for product designers learning to code.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

