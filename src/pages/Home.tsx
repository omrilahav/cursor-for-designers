import { Link } from 'react-router-dom'
import { 
  ArrowRight, CheckCircle, Sparkles, Zap, Target, Users, 
  Lightbulb, Layers, Palette, MousePointer, BookOpen, 
  GraduationCap, Gamepad2, Star, Trophy,
  Bot, Code, Rocket, ChevronRight, ArrowUpRight,
  Wand2, GitBranch, Share2, Eye, Timer, Keyboard, Heart,
  Coffee
} from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

const Home = () => {
  const { completedLessons, achievements, totalPoints } = useProgress()
  const unlockedAchievements = achievements.filter(a => a.unlocked).length

  const learningPath = [
    {
      chapter: 1,
      title: 'Why Cursor Changes Everything',
      description: 'Understand why designers who code with AI have an unfair advantage',
      link: '/beginner-guide',
      icon: Lightbulb,
      color: 'cyan',
      topics: ['The designer-coder gap', 'AI as your coding partner', 'Real examples of what\'s possible']
    },
    {
      chapter: 2,
      title: 'Getting Started with Cursor',
      description: 'Set up your design powerhouse and build something real',
      link: '/installation',
      icon: Zap,
      color: 'purple',
      topics: ['Installation & setup', 'Interface mastery', 'Your first AI-built component']
    },
    {
      chapter: 3,
      title: 'Cursor AI Modes & Multi-Agent',
      description: 'Master Agent, Ask, Manual modes plus multi-agent parallel workflows',
      link: '/cursor-agent',
      icon: Bot,
      color: 'pink',
      topics: ['Agent, Ask & Manual modes', 'Plan Mode & Background Agents', 'Multi-agent parallel work']
    },
    {
      chapter: 4,
      title: 'Design to Code Workflow',
      description: 'Transform mockups into production-ready interactive prototypes',
      link: '/design-to-prototype',
      icon: Palette,
      color: 'amber',
      topics: ['Describing designs to AI', 'Component building', 'Interactions & states']
    },
    {
      chapter: 5,
      title: 'Building Design Systems',
      description: 'Create scalable tokens, components, and documentation',
      link: '/design-systems',
      icon: Layers,
      color: 'emerald',
      topics: ['Design tokens', 'Component libraries', 'Documentation']
    },
    {
      chapter: 6,
      title: 'Team Collaboration & Handoffs',
      description: 'Work seamlessly with developers and ship with confidence',
      link: '/design-handoff',
      icon: Users,
      color: 'blue',
      topics: ['Git basics', 'Code handoffs', 'Review workflows']
    }
  ]

  const advancedPath = [
    {
      chapter: 7,
      title: 'Cursor Rules & Project Context',
      description: 'Configure AI to understand your design system, conventions, and preferences',
      link: '/cursor-rules',
      icon: Target,
      color: 'amber',
      topics: ['.cursorrules file', 'Design system context', 'Custom prompting']
    },
    {
      chapter: 8,
      title: 'Building AI Agent Teams',
      description: 'Orchestrate multiple AI personas for comprehensive design validation',
      link: '/agent-teams',
      icon: Users,
      color: 'purple',
      topics: ['Design review agents', 'UX validation', 'Developer perspective']
    },
    {
      chapter: 9,
      title: 'Research & Discovery with AI',
      description: 'Comprehensive research workflows before you start designing',
      link: '/research-discovery',
      icon: Eye,
      color: 'cyan',
      topics: ['Competitive analysis', 'User research', 'Pattern discovery']
    },
    {
      chapter: 10,
      title: 'Complex System Design',
      description: 'Design enterprise-grade features that integrate with larger systems',
      link: '/complex-systems',
      icon: Layers,
      color: 'pink',
      topics: ['System architecture', 'Multi-component features', 'Integration patterns']
    }
  ]

  const transformations = [
    {
      before: 'Static mockups in Figma',
      after: 'Interactive prototypes that actually work',
      icon: MousePointer
    },
    {
      before: 'Specs documents nobody reads',
      after: 'Production-ready code developers love',
      icon: Code
    },
    {
      before: 'Weeks of back-and-forth',
      after: 'Same-day design to implementation',
      icon: Rocket
    },
    {
      before: 'Design systems in PDFs',
      after: 'Living, testable component libraries',
      icon: Layers
    }
  ]

  const stats = [
    { value: completedLessons.length, label: 'Lessons', icon: BookOpen },
    { value: totalPoints, label: 'Points', icon: Star },
    { value: unlockedAchievements, label: 'Achievements', icon: Trophy },
  ]

  const colorClasses = {
    cyan: { bg: 'from-cyan-500 to-cyan-600', light: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400' },
    purple: { bg: 'from-purple-500 to-purple-600', light: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
    pink: { bg: 'from-pink-500 to-pink-600', light: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400' },
    amber: { bg: 'from-amber-500 to-amber-600', light: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
    emerald: { bg: 'from-emerald-500 to-emerald-600', light: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400' },
    blue: { bg: 'from-blue-500 to-blue-600', light: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  }

  return (
    <div className="space-y-32 md:space-y-40">
      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-8 md:pt-16">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-in animate-delay-1 mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
              <Heart className="w-4 h-4" />
              A Free Community Resource
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-in animate-delay-2 heading-display mb-8">
            <span className="block text-white">From Designer</span>
            <span className="block text-gradient-multi">to Design Engineer</span>
          </h1>
          
          {/* Subtitle */}
          <p className="animate-in animate-delay-3 text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-6 leading-relaxed">
            Everything you need to go from product designer to design engineer. Learn to build production-ready prototypes, design systems, and real applications.
          </p>
          
          <p className="animate-in animate-delay-3 text-lg text-zinc-500 max-w-2xl mx-auto mb-12">
            No coding experience required. Just your design eye and curiosity.
          </p>

          {/* CTA Buttons */}
          <div className="animate-in animate-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/quick-start" className="btn-primary text-lg group">
              <Timer className="w-5 h-5" />
              <span>5-Minute Quick Start</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/beginner-guide" className="btn-secondary text-lg group">
              <BookOpen className="w-5 h-5" />
              <span>Start Full Course</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="animate-in animate-delay-5 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500 mb-16">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              100% free forever
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              No coding experience needed
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Learn at your own pace
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Build real projects
            </span>
          </div>

          {/* Stats Row - Only show if user has progress */}
          {totalPoints > 0 && (
            <div className="animate-in animate-delay-5 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div 
                    key={index} 
                    className="group relative card-dark p-6 md:p-8 text-center hover:border-cyan-500/30 transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                    <div className="relative">
                      <Icon className="w-5 h-5 text-cyan-500 mx-auto mb-3 opacity-60" />
                      <div className="text-4xl md:text-5xl font-display font-bold text-gradient-cyan mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs uppercase tracking-widest text-zinc-500">{stat.label}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          QUICK WIN - WHAT YOU'LL BUILD IN 5 MINUTES
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="card-premium relative overflow-hidden p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 space-y-6">
              <span className="badge-cyan">5-Minute Quick Start</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                Build Your First Component<br />
                <span className="text-gradient-cyan">Before Your Coffee Gets Cold</span>
              </h2>
              <p className="text-lg text-zinc-400">
                No setup guides. No theory. Just follow 6 simple steps and you'll have a working, 
                styled product card—built entirely with AI. Takes less than 5 minutes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/quick-start" className="btn-primary group">
                  <Coffee className="w-5 h-5" />
                  <span>Try the 5-Min Start</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/cheatsheet" className="btn-secondary">
                  <Keyboard className="w-5 h-5" />
                  <span>View Shortcuts</span>
                </Link>
              </div>
            </div>
            
            {/* Visual representation */}
            <div className="lg:w-96 w-full">
              <div className="bg-dark-900/80 rounded-2xl p-6 border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">product-card.html</span>
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <p className="text-purple-400">{"<!-- AI Generated 🤖 -->"}</p>
                  <p className="text-zinc-500">&lt;div class="<span className="text-cyan-400">card shadow-lg</span>"&gt;</p>
                  <p className="text-zinc-500 pl-4">&lt;img src="..." /&gt;</p>
                  <p className="text-zinc-500 pl-4">&lt;h2&gt;<span className="text-white">Product Name</span>&lt;/h2&gt;</p>
                  <p className="text-zinc-500 pl-4">&lt;p&gt;<span className="text-emerald-400">$299</span>&lt;/p&gt;</p>
                  <p className="text-zinc-500 pl-4">&lt;button&gt;<span className="text-pink-400">Add to Cart</span>&lt;/button&gt;</p>
                  <p className="text-zinc-500">&lt;/div&gt;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE TRANSFORMATION
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="text-center mb-16">
          <span className="badge-pink mb-4">The Transformation</span>
          <h2 className="heading-section text-white mb-4">From Designer to Design Engineer</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Here's what changes when you learn to build with AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {transformations.map((item, index) => {
            const Icon = item.icon
            return (
              <div 
                key={index} 
                className="card-dark p-8 group hover:border-cyan-500/30 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-zinc-500 text-sm line-through">{item.before}</span>
                    </div>
                    <p className="text-white font-medium text-lg">{item.after}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE LEARNING PATH
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="absolute -inset-x-4 inset-y-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent -z-10" />
        
        <div className="text-center mb-16">
          <span className="badge-cyan mb-4">The Learning Path</span>
          <h2 className="heading-section text-white mb-4">Your Journey to Design Engineer</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            A structured path from complete beginner to shipping production prototypes
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {learningPath.map((chapter, index) => {
            const Icon = chapter.icon
            const colors = colorClasses[chapter.color as keyof typeof colorClasses]
            const isCompleted = completedLessons.some(l => l.id.includes(chapter.link.replace('/', '')))
            
            return (
              <Link
                key={index}
                to={chapter.link}
                className="group block card-glow p-6 md:p-8 hover:border-white/10 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Chapter Number & Icon */}
                  <div className="flex items-center gap-4 md:flex-shrink-0">
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                      {isCompleted && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="md:hidden">
                      <span className={`text-sm font-bold ${colors.text}`}>Chapter {chapter.chapter}</span>
                      <h3 className="text-xl font-display font-bold text-white">{chapter.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className={`hidden md:block text-sm font-bold ${colors.text} mb-1`}>Chapter {chapter.chapter}</span>
                    <h3 className="hidden md:block text-2xl font-display font-bold text-white mb-2 group-hover:text-gradient-cyan transition-all">
                      {chapter.title}
                    </h3>
                    <p className="text-zinc-400 mb-4">{chapter.description}</p>
                    
                    {/* Topics */}
                    <div className="flex flex-wrap gap-2">
                      {chapter.topics.map((topic, i) => (
                        <span key={i} className={`text-xs px-3 py-1 rounded-full ${colors.light} ${colors.border} border ${colors.text}`}>
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-4 md:flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ADVANCED LEARNING PATH
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="text-center mb-16">
          <span className="badge-purple mb-4">Master Level</span>
          <h2 className="heading-section text-white mb-4">Advanced Techniques</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Go beyond basics with AI agent orchestration, research workflows, and system design
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {advancedPath.map((chapter, index) => {
            const Icon = chapter.icon
            const colors = colorClasses[chapter.color as keyof typeof colorClasses]
            const isCompleted = completedLessons.some(l => l.id.includes(chapter.link.replace('/', '')))
            
            return (
              <Link
                key={index}
                to={chapter.link}
                className="group block card-glow p-6 md:p-8 hover:border-purple-500/30 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Chapter Number & Icon */}
                  <div className="flex items-center gap-4 md:flex-shrink-0">
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                      {isCompleted && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="md:hidden">
                      <span className={`text-sm font-bold ${colors.text}`}>Chapter {chapter.chapter}</span>
                      <h3 className="text-xl font-display font-bold text-white">{chapter.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className={`hidden md:block text-sm font-bold ${colors.text} mb-1`}>Chapter {chapter.chapter}</span>
                    <h3 className="hidden md:block text-2xl font-display font-bold text-white mb-2 group-hover:text-gradient-pink transition-all">
                      {chapter.title}
                    </h3>
                    <p className="text-zinc-400 mb-4">{chapter.description}</p>
                    
                    {/* Topics */}
                    <div className="flex flex-wrap gap-2">
                      {chapter.topics.map((topic, i) => (
                        <span key={i} className={`text-xs px-3 py-1 rounded-full ${colors.light} ${colors.border} border ${colors.text}`}>
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-4 md:flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-purple-400" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHAT MAKES THIS DIFFERENT
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="card-premium relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge-purple mb-4">Why This Guide</span>
              <h2 className="heading-section text-white mb-4">Built by Designers, for Designers</h2>
              <p className="text-xl text-zinc-400">
                This isn't a coding bootcamp. It's a design superpower.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-dark-900/50 border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="font-display font-bold text-white text-lg mb-2">Design-First Approach</h4>
                <p className="text-sm text-zinc-400">Every lesson starts with design thinking. You'll learn to describe your vision to AI the way you'd brief a developer.</p>
              </div>

              <div className="p-6 rounded-2xl bg-dark-900/50 border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                  <Wand2 className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="font-display font-bold text-white text-lg mb-2">AI Does the Heavy Lifting</h4>
                <p className="text-sm text-zinc-400">You won't memorize syntax. You'll learn to direct AI to build exactly what you envision. Focus on design, not debugging.</p>
              </div>

              <div className="p-6 rounded-2xl bg-dark-900/50 border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-4">
                  <Share2 className="w-6 h-6 text-pink-400" />
                </div>
                <h4 className="font-display font-bold text-white text-lg mb-2">Production-Ready Output</h4>
                <p className="text-sm text-zinc-400">Everything you build can go live. No "demo-quality" prototypes—real, shippable code that developers can use.</p>
              </div>

              <div className="p-6 rounded-2xl bg-dark-900/50 border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                  <GitBranch className="w-6 h-6 text-amber-400" />
                </div>
                <h4 className="font-display font-bold text-white text-lg mb-2">Team Collaboration Built-In</h4>
                <p className="text-sm text-zinc-400">Learn Git and handoff workflows that make developers love working with you. Bridge the design-dev gap forever.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MORE RESOURCES
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="text-center mb-12">
          <span className="badge-cyan mb-4">More Ways to Learn</span>
          <h2 className="heading-section text-white mb-4">Dive Deeper</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Link to="/cheatsheet" className="card-dark p-8 group hover:border-cyan-500/30 transition-all duration-500 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Keyboard className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display font-bold text-white text-xl mb-2">Cheat Sheet</h3>
            <p className="text-zinc-400 text-sm mb-4">All keyboard shortcuts in one printable page</p>
            <span className="text-cyan-400 text-sm font-medium flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
              View <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link to="/training" className="card-dark p-8 group hover:border-cyan-500/30 transition-all duration-500 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display font-bold text-white text-xl mb-2">Training Modules</h3>
            <p className="text-zinc-400 text-sm mb-4">Deep-dive into specific features and workflows</p>
            <span className="text-cyan-400 text-sm font-medium flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
              Explore <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link to="/games" className="card-dark p-8 group hover:border-cyan-500/30 transition-all duration-500 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display font-bold text-white text-xl mb-2">Practice Games</h3>
            <p className="text-zinc-400 text-sm mb-4">Build muscle memory with fun challenges</p>
            <span className="text-cyan-400 text-sm font-medium flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
              Play <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link to="/best-practices" className="card-dark p-8 group hover:border-cyan-500/30 transition-all duration-500 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display font-bold text-white text-xl mb-2">Best Practices</h3>
            <p className="text-zinc-400 text-sm mb-4">Pro tips from experienced design engineers</p>
            <span className="text-cyan-400 text-sm font-medium flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
              Learn <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-purple-600 to-pink-600 opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/50" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-400 rounded-full blur-[120px] opacity-30 animate-float" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-400 rounded-full blur-[120px] opacity-30 animate-float-slow" />
          
          <div className="relative space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl md:text-2xl font-medium text-white/80 max-w-2xl mx-auto">
                Join our community of designers learning to build. Everything you need is right here, free and open.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                to="/beginner-guide" 
                className="btn bg-white text-dark-950 hover:bg-zinc-100 text-lg shadow-2xl px-10 group"
              >
                <Rocket className="w-5 h-5" />
                <span className="font-bold">Start Learning</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/tutorials" 
                className="btn-secondary border-white/30 text-white hover:bg-white/10 text-lg"
              >
                <span>Browse Tutorials</span>
              </Link>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-300" />
                100% free forever
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-300" />
                No coding experience needed
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-300" />
                Made for our community
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
