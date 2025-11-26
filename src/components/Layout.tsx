import { ReactNode, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, BookOpen, GraduationCap, Gamepad2, Lightbulb, Settings, 
  Share2, Trophy, Menu, X, ChevronDown, Sparkles, Zap, ArrowUpRight,
  Rocket, Bot, Palette, Users, Layers, Code, Keyboard, Timer, Cpu, AtSign
} from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation()
  const { totalPoints, completedLessons } = useProgress()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const learningPath = [
    { path: '/beginner-guide', label: 'Chapter 1: Why Cursor', icon: Lightbulb },
    { path: '/installation', label: 'Chapter 2: Setup', icon: Rocket },
    { path: '/cursor-agent', label: 'Chapter 3: AI Modes', icon: Bot },
    { path: '/design-to-prototype', label: 'Chapter 4: Design to Code', icon: Palette },
    { path: '/design-systems', label: 'Chapter 5: Design Systems', icon: Layers },
    { path: '/design-handoff', label: 'Chapter 6: Collaboration', icon: Users },
    { path: '/cursor-rules', label: 'Chapter 7: Cursor Rules', icon: Code },
    { path: '/agent-teams', label: 'Chapter 8: Agent Teams', icon: Users },
    { path: '/research-discovery', label: 'Chapter 9: Research', icon: Lightbulb },
    { path: '/complex-systems', label: 'Chapter 10: Systems', icon: Layers },
  ]

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/quick-start', label: '5-Min Start', icon: Timer, featured: true },
    { path: '/tutorials', label: 'Tutorials', icon: BookOpen },
    { path: '/training', label: 'Training', icon: GraduationCap },
  ]

  const moreItems = [
    { path: '/cheatsheet', label: 'Keyboard Shortcuts', icon: Keyboard },
    { path: '/context-mastery', label: '@ Mentions Guide', icon: AtSign },
    { path: '/ai-models', label: 'AI Model Guide', icon: Cpu },
    { path: '/projects', label: 'Real-World Projects', icon: Rocket },
    { path: '/games', label: 'Practice Games', icon: Gamepad2 },
    { path: '/best-practices', label: 'Best Practices', icon: Lightbulb },
    { path: '/configuration', label: 'Configuration', icon: Settings },
    { path: '/troubleshooting', label: 'Troubleshooting', icon: Code },
  ]

  const isActive = (path: string) => location.pathname === path

  const getCurrentChapter = () => {
    const index = learningPath.findIndex(item => item.path === location.pathname)
    return index >= 0 ? index + 1 : null
  }

  const currentChapter = getCurrentChapter()

  return (
    <div className="min-h-screen flex flex-col bg-dark-950">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="orb orb-cyan w-[600px] h-[600px] -top-40 -left-40 animate-float" />
        <div className="orb orb-pink w-[500px] h-[500px] -bottom-40 -right-40 animate-float-slow" />
        <div className="orb orb-purple w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      </div>

      {/* Announcement Bar */}
      <div className="relative z-50 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span className="text-sm font-medium text-zinc-300">
              Free & Open Learning
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-sm text-zinc-400">
              From Designer to Design Engineer — Learn at Your Own Pace
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 overflow-hidden">
                  {/* House/Home icon stylized */}
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                    <path d="M12 3L4 9v12h5v-7h6v7h5V9l-8-6z"/>
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-pink-500 blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-display font-bold text-white group-hover:text-gradient-cyan transition-all duration-300">
                  Home-Made Academy
                </h1>
                <p className="text-xs text-zinc-500 font-medium tracking-wide">
                  From Designer to Design Engineer
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const active = isActive(item.path)
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                      active
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    } ${item.featured ? 'overflow-hidden' : ''}`}
                  >
                    {item.featured && !active && (
                      <>
                        <span className="absolute inset-0 rounded-full border border-cyan-500/50 animate-pulse" />
                        <span className="absolute -top-px -right-px w-2 h-2 bg-cyan-500 rounded-full" />
                      </>
                    )}
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
              
              {/* More Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300">
                  <span>More</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute right-0 mt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="card-dark p-2 border border-white/10">
                    {moreItems.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200"
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
            <div className="flex items-center gap-4">
              {/* Stats - Desktop */}
              <div className="hidden md:flex items-center gap-3">
                <Link 
                  to="/progress" 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/80 border border-white/10 hover:border-cyan-500/50 hover:shadow-glow-cyan transition-all duration-300"
                >
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-bold text-white">{totalPoints}</span>
                </Link>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/80 border border-white/10">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-bold text-white">{completedLessons.length}</span>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-3 rounded-xl bg-dark-800/80 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-dark-900/95 backdrop-blur-xl border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
              {/* Mobile Stats */}
              <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                <Link 
                  to="/progress" 
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-dark-800 border border-white/10"
                >
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-bold text-white">{totalPoints} pts</span>
                </Link>
                <div className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-dark-800 border border-white/10">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-bold text-white">{completedLessons.length} lessons</span>
                </div>
              </div>

              {/* Learning Path */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-zinc-500 mb-3 px-2">Learning Path</h3>
                <div className="space-y-1">
                  {learningPath.map((item, index) => {
                    const Icon = item.icon
                    const active = isActive(item.path)
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          active
                            ? 'bg-cyan-500/10 text-cyan-400'
                            : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          active ? 'bg-cyan-500/20' : 'bg-dark-700'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm">{item.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Other Nav Links */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-zinc-500 mb-3 px-2">More</h3>
                <div className="space-y-1">
                  {[...navItems.filter(i => i.path !== '/beginner-guide'), ...moreItems].map((item) => {
                    const Icon = item.icon
                    const active = isActive(item.path)
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          active
                            ? 'bg-cyan-500/10 text-cyan-400'
                            : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter Progress Bar */}
        {currentChapter && (
          <div className="bg-dark-900/50 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 py-2">
              <div className="flex items-center gap-4">
                <span className="text-xs text-zinc-500">Chapter {currentChapter} of {learningPath.length}</span>
                <div className="flex-1 h-1 bg-dark-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-500"
                    style={{ width: `${(currentChapter / learningPath.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 mt-auto">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                    <path d="M12 3L4 9v12h5v-7h6v7h5V9l-8-6z"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-display font-bold text-white">Home-Made Academy</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-6 max-w-md">
                A free community resource for product designers learning to become design engineers. 
                Made with love for our friends, students, and the design community.
              </p>
              <div className="flex items-center gap-4">
                <Link 
                  to="/beginner-guide" 
                  className="btn-primary text-sm py-3 px-6"
                >
                  <span>Start Learning</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Learning Path */}
            <div className="md:col-span-3 md:col-start-7">
              <h3 className="font-display font-bold text-white mb-6 text-sm uppercase tracking-wider">Learning Path</h3>
              <ul className="space-y-3">
                {learningPath.slice(0, 4).map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2 group">
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="md:col-span-2">
              <h3 className="font-display font-bold text-white mb-6 text-sm uppercase tracking-wider">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/tutorials" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2 group">
                    <span>Tutorials</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/training" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2 group">
                    <span>Training</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/best-practices" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2 group">
                    <span>Best Practices</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/progress" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2 group">
                    <span>My Progress</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Progress Card */}
            <div className="md:col-span-2">
              <h3 className="font-display font-bold text-white mb-6 text-sm uppercase tracking-wider">Progress</h3>
              <div className="card-dark p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-zinc-400">Completed</span>
                  <span className="text-sm font-bold text-cyan-400">{completedLessons.length}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${Math.min((completedLessons.length / 20) * 100, 100)}%` }}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Points</span>
                  <span className="text-sm font-bold text-amber-400">{totalPoints}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              © 2024 Home-Made Academy. Made with ❤️ for the design community.
            </p>
            <p className="text-sm text-zinc-600">
              Powered by Cursor + Claude
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
