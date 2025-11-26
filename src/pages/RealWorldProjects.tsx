import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Rocket, ArrowRight, CheckCircle, Clock, Star, Users, 
  Layers, Palette, Code, Eye, Zap, Target, Award, 
  Briefcase, Globe, ShoppingCart, MessageSquare, BarChart3,
  Calendar, Heart, Play, ChevronRight, Lock, Trophy,
  Lightbulb, GitBranch
} from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

interface Project {
  id: string
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: string
  skills: string[]
  icon: typeof Rocket
  color: string
  preview: {
    type: 'dashboard' | 'landing' | 'ecommerce' | 'app' | 'portfolio'
    features: string[]
  }
  whatYouBuild: string[]
  whatYouLearn: string[]
  portfolioValue: string
}

const RealWorldProjects = () => {
  const { completeLesson, completedLessons, totalPoints } = useProgress()
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const projects: Project[] = [
    {
      id: 'portfolio',
      title: 'Designer Portfolio Site',
      description: 'Build a stunning portfolio that showcases your work with smooth animations and interactive case studies.',
      difficulty: 'beginner',
      duration: '3-4 hours',
      skills: ['React Components', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      icon: Briefcase,
      color: 'cyan',
      preview: {
        type: 'portfolio',
        features: ['Hero section', 'Project grid', 'Case study pages', 'Contact form']
      },
      whatYouBuild: [
        'Animated hero section with your name and title',
        'Filterable project grid with hover effects',
        'Individual case study pages with scroll animations',
        'Contact form with validation',
        'Responsive navigation with mobile menu'
      ],
      whatYouLearn: [
        'How to structure a multi-page React app',
        'Creating reusable component patterns',
        'Adding scroll-based animations',
        'Form handling and validation',
        'SEO basics and meta tags'
      ],
      portfolioValue: 'A live portfolio site you can share with recruiters and clients'
    },
    {
      id: 'dashboard',
      title: 'Analytics Dashboard',
      description: 'Create a data-rich dashboard with interactive charts, filters, and real-time data visualization.',
      difficulty: 'intermediate',
      duration: '5-6 hours',
      skills: ['Data Visualization', 'State Management', 'Component Composition', 'Layout Systems'],
      icon: BarChart3,
      color: 'purple',
      preview: {
        type: 'dashboard',
        features: ['Stat cards', 'Line charts', 'Data tables', 'Filters']
      },
      whatYouBuild: [
        'Metric cards with trend indicators',
        'Interactive line and bar charts',
        'Filterable data table with sorting',
        'Date range picker component',
        'Responsive sidebar navigation'
      ],
      whatYouLearn: [
        'Working with chart libraries (Recharts)',
        'Managing complex UI state',
        'Building filter systems',
        'Creating responsive grid layouts',
        'Designing data-dense interfaces'
      ],
      portfolioValue: 'Demonstrates your ability to design and build complex, data-driven interfaces'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Product Page',
      description: 'Design and build a product detail page with image gallery, variants, and add-to-cart functionality.',
      difficulty: 'intermediate',
      duration: '4-5 hours',
      skills: ['E-commerce Patterns', 'Image Handling', 'Cart State', 'Micro-interactions'],
      icon: ShoppingCart,
      color: 'emerald',
      preview: {
        type: 'ecommerce',
        features: ['Image gallery', 'Variant selector', 'Reviews section', 'Related products']
      },
      whatYouBuild: [
        'Zoomable product image gallery',
        'Size and color variant selectors',
        'Add to cart with quantity controls',
        'Customer reviews with rating display',
        'Related products carousel'
      ],
      whatYouLearn: [
        'Building image galleries and lightboxes',
        'Managing product variant state',
        'Cart functionality patterns',
        'Creating trust-building UI elements',
        'Conversion-focused design implementation'
      ],
      portfolioValue: 'Shows you can design high-conversion interfaces for real business needs'
    },
    {
      id: 'saas-landing',
      title: 'SaaS Landing Page',
      description: 'Build a conversion-optimized landing page with pricing tables, testimonials, and feature showcases.',
      difficulty: 'beginner',
      duration: '3-4 hours',
      skills: ['Landing Page Design', 'Marketing UI', 'Animation', 'Conversion Optimization'],
      icon: Globe,
      color: 'pink',
      preview: {
        type: 'landing',
        features: ['Hero CTA', 'Feature grid', 'Pricing table', 'Testimonials']
      },
      whatYouBuild: [
        'Attention-grabbing hero with video or animation',
        'Feature showcase with icons and descriptions',
        'Pricing table with toggle (monthly/annual)',
        'Social proof section with testimonials',
        'FAQ accordion component'
      ],
      whatYouLearn: [
        'Marketing page best practices',
        'Creating urgency and trust',
        'Pricing table patterns',
        'Testimonial display techniques',
        'Mobile-first responsive design'
      ],
      portfolioValue: 'Proves you can create pages that convert visitors into customers'
    },
    {
      id: 'design-system',
      title: 'Design System Starter Kit',
      description: 'Build a complete design system with tokens, components, and documentation—ready for team use.',
      difficulty: 'advanced',
      duration: '8-10 hours',
      skills: ['Design Systems', 'Component Architecture', 'Documentation', 'Token Management'],
      icon: Layers,
      color: 'amber',
      preview: {
        type: 'app',
        features: ['Token system', 'Component library', 'Storybook-style docs', 'Usage examples']
      },
      whatYouBuild: [
        'Design tokens (colors, spacing, typography)',
        'Core components (Button, Input, Card, Modal)',
        'Compound components (Form, Navigation)',
        'Interactive documentation pages',
        'Component playground for testing variants'
      ],
      whatYouLearn: [
        'Design token architecture',
        'Building flexible, composable components',
        'Creating component documentation',
        'API design for components',
        'Scalable CSS organization'
      ],
      portfolioValue: 'The crown jewel—shows you can think systematically and lead design efforts'
    },
    {
      id: 'booking-app',
      title: 'Appointment Booking Interface',
      description: 'Create a calendar-based booking system with availability, time slots, and confirmation flows.',
      difficulty: 'advanced',
      duration: '6-8 hours',
      skills: ['Calendar UI', 'Date/Time Handling', 'Multi-step Flows', 'Form Validation'],
      icon: Calendar,
      color: 'cyan',
      preview: {
        type: 'app',
        features: ['Calendar view', 'Time slot picker', 'Booking form', 'Confirmation']
      },
      whatYouBuild: [
        'Interactive calendar with available dates',
        'Time slot grid with availability states',
        'Multi-step booking wizard',
        'Booking confirmation and summary',
        'Cancellation and rescheduling UI'
      ],
      whatYouLearn: [
        'Working with dates in JavaScript',
        'Building calendar interfaces',
        'Multi-step form patterns',
        'Error handling and edge cases',
        'Confirmation and success states'
      ],
      portfolioValue: 'Demonstrates ability to handle complex, real-world interaction patterns'
    }
  ]

  const colorClasses: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-500/30', text: 'text-cyan-400', badge: 'badge-cyan' },
    purple: { bg: 'bg-purple-500/20', border: 'border-purple-500/30', text: 'text-purple-400', badge: 'badge-purple' },
    emerald: { bg: 'bg-emerald-500/20', border: 'border-emerald-500/30', text: 'text-emerald-400', badge: 'badge-emerald' },
    pink: { bg: 'bg-pink-500/20', border: 'border-pink-500/30', text: 'text-pink-400', badge: 'badge-pink' },
    amber: { bg: 'bg-amber-500/20', border: 'border-amber-500/30', text: 'text-amber-400', badge: 'badge-amber' }
  }

  const difficultyColors: Record<string, string> = {
    beginner: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    intermediate: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    advanced: 'text-pink-400 bg-pink-500/10 border-pink-500/30'
  }

  const filteredProjects = selectedDifficulty === 'all' 
    ? projects 
    : projects.filter(p => p.difficulty === selectedDifficulty)

  return (
    <div className="space-y-16 py-8">
      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="text-center max-w-4xl mx-auto">
        <span className="badge-purple mb-6">Portfolio Projects</span>
        <h1 className="heading-hero mb-6">
          <span className="text-white">Build Real Projects</span>
          <br />
          <span className="gradient-text">That Impress</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
          Stop building toy projects. Create portfolio-worthy work that demonstrates 
          your ability to design and ship real products.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">{projects.length}</div>
            <div className="text-sm text-zinc-500">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">30+</div>
            <div className="text-sm text-zinc-500">Hours of Content</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">100%</div>
            <div className="text-sm text-zinc-500">Portfolio Ready</div>
          </div>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
            <button
              key={level}
              onClick={() => setSelectedDifficulty(level)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                selectedDifficulty === level
                  ? 'bg-cyan-500 text-white'
                  : 'bg-dark-800 text-zinc-400 hover:bg-dark-700 hover:text-white'
              }`}
            >
              {level === 'all' ? 'All Levels' : level}
            </button>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY BUILD PROJECTS
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card-dark p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Prove Your Skills</h3>
            <p className="text-zinc-400 text-sm">
              Real projects beat certifications. Show you can ship, not just design.
            </p>
          </div>
          <div className="card-dark p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Learn by Doing</h3>
            <p className="text-zinc-400 text-sm">
              Tutorials teach concepts. Projects teach problem-solving.
            </p>
          </div>
          <div className="card-dark p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-7 h-7 text-pink-400" />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Land Opportunities</h3>
            <p className="text-zinc-400 text-sm">
              "I built this" wins interviews. Every time.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PROJECT CARDS
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const Icon = project.icon
            const colors = colorClasses[project.color]
            const isExpanded = expandedProject === project.id
            const isCompleted = completedLessons.some(l => l.id === `project-${project.id}`)

            return (
              <div
                key={project.id}
                className={`${colors.border} border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'bg-dark-800/80' : 'bg-dark-900/50 hover:bg-dark-800/50'
                }`}
              >
                {/* Project Header */}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-bold text-white text-lg">{project.title}</h3>
                        {isCompleted && <CheckCircle className="w-5 h-5 text-emerald-400" />}
                      </div>
                      <p className="text-zinc-400 text-sm">{project.description}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium border capitalize ${difficultyColors[project.difficulty]}`}>
                      {project.difficulty}
                    </span>
                    <div className="flex items-center gap-1 text-zinc-500 text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      {project.duration}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-dark-800 rounded text-xs text-zinc-400">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Preview Box */}
                  <div className="bg-dark-800/50 border border-white/5 rounded-xl p-4 mb-4">
                    <p className="text-xs text-zinc-500 mb-3">What you'll build:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.preview.features.map((feature, i) => (
                        <span key={i} className={`text-xs ${colors.text}`}>
                          {feature}{i < project.preview.features.length - 1 ? ' •' : ''}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                    className={`w-full py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isExpanded 
                        ? 'bg-dark-700 text-zinc-300' 
                        : `${colors.bg} ${colors.text}`
                    }`}
                  >
                    {isExpanded ? 'Show Less' : 'View Details'}
                  </button>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 space-y-6 animate-fade-in border-t border-white/5 pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* What You Build */}
                      <div>
                        <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                          <Code className="w-4 h-4 text-cyan-400" />
                          What You Build
                        </h4>
                        <ul className="space-y-2">
                          {project.whatYouBuild.map((item, i) => (
                            <li key={i} className="text-sm text-zinc-400 flex items-start gap-2">
                              <span className="text-cyan-500 mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What You Learn */}
                      <div>
                        <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-purple-400" />
                          What You Learn
                        </h4>
                        <ul className="space-y-2">
                          {project.whatYouLearn.map((item, i) => (
                            <li key={i} className="text-sm text-zinc-400 flex items-start gap-2">
                              <span className="text-purple-500 mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Portfolio Value */}
                    <div className={`${colors.bg} ${colors.border} border rounded-xl p-4`}>
                      <h4 className={`font-semibold ${colors.text} mb-2 flex items-center gap-2`}>
                        <Briefcase className="w-4 h-4" />
                        Portfolio Value
                      </h4>
                      <p className="text-zinc-300 text-sm">{project.portfolioValue}</p>
                    </div>

                    {/* Start Button */}
                    <button
                      onClick={() => completeLesson(`project-${project.id}`, 'projects')}
                      disabled={isCompleted}
                      className={`w-full py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                        isCompleted
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:brightness-110'
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Project Completed
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5" />
                          Start Project
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SUGGESTED PATH
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto">
        <div className="card-glow p-8">
          <div className="text-center mb-8">
            <span className="badge-cyan mb-4">Recommended Path</span>
            <h2 className="heading-section text-white mb-4">Build in This Order</h2>
            <p className="text-zinc-400">Progress from fundamentals to advanced patterns</p>
          </div>

          <div className="space-y-4">
            {[
              { num: 1, title: 'SaaS Landing Page', desc: 'Master the basics with a marketing page', color: 'cyan' },
              { num: 2, title: 'Designer Portfolio', desc: 'Apply skills to something personal', color: 'purple' },
              { num: 3, title: 'E-commerce Product Page', desc: 'Handle state and interactions', color: 'emerald' },
              { num: 4, title: 'Analytics Dashboard', desc: 'Work with data visualization', color: 'pink' },
              { num: 5, title: 'Design System', desc: 'Think systematically at scale', color: 'amber' },
            ].map((step) => (
              <div key={step.num} className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-xl">
                <div className={`w-10 h-10 rounded-full bg-${step.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                  <span className={`text-${step.color}-400 font-bold`}>{step.num}</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">{step.title}</p>
                  <p className="text-zinc-500 text-sm">{step.desc}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-600" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-2xl mx-auto text-center">
        <div className="card-dark p-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
            <Rocket className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Build?</h3>
          <p className="text-zinc-400 mb-6">
            Pick a project that excites you and start building. Remember: done is better than perfect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quick-start" className="btn-primary btn-lg">
              <Zap className="w-5 h-5" />
              <span>Quick Start Guide</span>
            </Link>
            <Link to="/tutorials" className="btn-secondary btn-lg">
              <span>Browse Tutorials</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RealWorldProjects


