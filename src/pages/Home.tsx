import { Link } from 'react-router-dom'
import { BookOpen, GraduationCap, Gamepad2, Sparkles, ArrowRight, Target, Users, Zap, Lightbulb } from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

const Home = () => {
  const { completedLessons, achievements, totalPoints } = useProgress()
  const unlockedAchievements = achievements.filter(a => a.unlocked).length

  const features = [
    {
      icon: Lightbulb,
      title: 'Absolute Beginner Guide',
      description: 'Never coded before? Start here! Learn what IDEs, terminals, and Git are in simple terms',
      color: 'from-yellow-500 to-orange-500',
      link: '/beginner-guide',
      badge: 'START HERE'
    },
    {
      icon: BookOpen,
      title: 'Step-by-Step Tutorials',
      description: 'Learn Cursor from basics to advanced features with interactive guided lessons',
      color: 'from-blue-500 to-cyan-500',
      link: '/tutorials'
    },
    {
      icon: GraduationCap,
      title: 'Comprehensive Training',
      description: 'Master IDE features, AI commands, and workflow optimization techniques',
      color: 'from-purple-500 to-pink-500',
      link: '/training'
    },
    {
      icon: Gamepad2,
      title: 'Interactive Games',
      description: 'Learn by playing! Gamified challenges make learning fun and memorable',
      color: 'from-green-500 to-emerald-500',
      link: '/games'
    },
    {
      icon: Target,
      title: 'Best Practices',
      description: 'Industry-standard patterns and tips for efficient design-to-code workflow',
      color: 'from-orange-500 to-red-500',
      link: '/best-practices'
    },
  ]

  const stats = [
    { label: 'Lessons Completed', value: completedLessons.length, icon: BookOpen },
    { label: 'Total Points', value: totalPoints, icon: Sparkles },
    { label: 'Achievements', value: unlockedAchievements, icon: Target },
  ]

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <div className="inline-block">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-8 h-8 text-accent-500 animate-pulse" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent">
              Welcome to Cursor Design Academy
            </h2>
            <Sparkles className="w-8 h-8 text-accent-500 animate-pulse" />
          </div>
        </div>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Master the art of building stunning designs with AI assistance. 
          Learn Cursor from scratch, even with zero coding experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
          <Link to="/beginner-guide" className="btn-primary inline-flex items-center space-x-2">
            <Lightbulb className="w-5 h-5" />
            <span>Complete Beginner? Start Here</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/tutorials" className="btn-secondary inline-flex items-center space-x-2">
            <span>Jump to Tutorials</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="card text-center transform hover:scale-105 transition-transform duration-300">
              <Icon className="w-12 h-12 mx-auto mb-3 text-primary-500" />
              <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          )
        })}
      </section>

      {/* Features Grid */}
      <section className="space-y-6">
        <h3 className="section-title text-center">What You'll Learn</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Link
                key={index}
                to={feature.link}
                className={`card group cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  feature.badge ? 'ring-4 ring-yellow-300 ring-offset-2' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  {feature.badge && (
                    <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                      {feature.badge}
                    </span>
                  )}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="card bg-gradient-to-br from-primary-50 to-accent-50 border-2 border-primary-200">
        <h3 className="section-title text-center mb-8">Why Learn Cursor?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
              <Zap className="w-8 h-8 text-accent-500" />
            </div>
            <h4 className="font-bold text-lg text-gray-800">Design to Code, Fast</h4>
            <p className="text-gray-600 text-sm">
              Transform your design ideas into working prototypes in minutes, not days
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
              <Users className="w-8 h-8 text-primary-500" />
            </div>
            <h4 className="font-bold text-lg text-gray-800">Better Collaboration</h4>
            <p className="text-gray-600 text-sm">
              Communicate specs and ideas to developers more effectively
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
              <Sparkles className="w-8 h-8 text-purple-500" />
            </div>
            <h4 className="font-bold text-lg text-gray-800">No Coding Required</h4>
            <p className="text-gray-600 text-sm">
              AI assistance helps you build without deep technical knowledge
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12 card bg-gradient-to-r from-primary-500 to-accent-500 text-white">
        <h3 className="text-3xl font-bold">Ready to Start Your Journey?</h3>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Join thousands of designers who are building amazing products with Cursor
        </p>
        <Link to="/tutorials" className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl transform hover:-translate-y-1 duration-200">
          Begin Your First Tutorial
        </Link>
      </section>
    </div>
  )
}

export default Home

