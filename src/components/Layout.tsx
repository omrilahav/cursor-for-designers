import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, BookOpen, GraduationCap, Gamepad2, Lightbulb, Settings, Share2, Trophy } from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation()
  const { totalPoints, completedLessons } = useProgress()

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/beginner-guide', label: 'Start Here', icon: BookOpen },
    { path: '/tutorials', label: 'Tutorials', icon: GraduationCap },
    { path: '/training', label: 'Training', icon: GraduationCap },
    { path: '/games', label: 'Games', icon: Gamepad2 },
    { path: '/best-practices', label: 'Best Practices', icon: Lightbulb },
    { path: '/configuration', label: 'Configuration', icon: Settings },
    { path: '/specs-sharing', label: 'Specs Sharing', icon: Share2 },
    { path: '/progress', label: 'Progress', icon: Trophy },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Cursor Design Academy
                </h1>
                <p className="text-xs text-gray-600">Learn to Build with AI</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-primary-50 to-accent-50 px-4 py-2 rounded-full">
                  <Trophy className="w-4 h-4 text-accent-600" />
                  <span className="font-semibold text-gray-700">{totalPoints} pts</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-accent-50 to-primary-50 px-4 py-2 rounded-full">
                  <GraduationCap className="w-4 h-4 text-primary-600" />
                  <span className="font-semibold text-gray-700">{completedLessons.length} lessons</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-1 overflow-x-auto py-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-600 text-sm">
            <p>Built with ❤️ for Product Designers learning Cursor</p>
            <p className="mt-1 text-xs">Your journey to building amazing designs starts here</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

