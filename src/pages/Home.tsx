import { Link } from 'react-router-dom'
import { BookOpen, GraduationCap, Gamepad2, ArrowRight, Target, Users, Zap, Lightbulb, Trophy, Star, Play, CheckCircle, Code, Sparkles } from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

const Home = () => {
  const { completedLessons, achievements, totalPoints } = useProgress()
  const unlockedAchievements = achievements.filter(a => a.unlocked).length

  const courses = [
      {
        icon: Lightbulb,
        title: 'Designer Quick Start',
        description: 'Go from mockup to prototype in your first session',
        duration: '1 hour',
        lessons: 5,
        level: 'Beginner',
        link: '/beginner-guide',
        featured: true
      },
    {
      icon: BookOpen,
      title: 'Interactive Tutorials',
      description: 'Hands-on lessons from basics to advanced',
      duration: '4 hours',
      lessons: 12,
      level: 'All Levels',
      link: '/tutorials'
    },
    {
      icon: GraduationCap,
      title: 'Complete Training Path',
      description: 'Master every IDE feature and workflow',
      duration: '6 hours',
      lessons: 20,
      level: 'Intermediate',
      link: '/training'
    },
    {
      icon: Gamepad2,
      title: 'Interactive Games',
      description: 'Learn through fun gamified challenges',
      duration: '3 hours',
      lessons: 10,
      level: 'Beginner',
      link: '/games'
    },
  ]

  const features = [
    {
      icon: Zap,
      title: 'Design to Code',
      description: 'Turn mockups into working prototypes instantly'
    },
    {
      icon: Code,
      title: 'No Coding Required',
      description: 'Describe your design, AI builds it'
    },
    {
      icon: Trophy,
      title: 'Build Design Systems',
      description: 'Create reusable component libraries'
    },
    {
      icon: Lightbulb,
      title: 'Perfect Handoffs',
      description: 'Share production-ready code with developers'
    },
  ]

  const stats = [
    { value: completedLessons.length, label: 'Completed', sublabel: 'Lessons' },
    { value: totalPoints, label: 'Total', sublabel: 'Points' },
    { value: unlockedAchievements, label: 'Unlocked', sublabel: 'Achievements' },
  ]

  const benefits = [
    'Turn Figma designs into working prototypes',
    'Build interactive components with animations',
    'Create and maintain design systems',
    'Generate production-ready code for developers',
    'Prototype faster than traditional tools',
    'No coding experience required'
  ]

  return (
    <div className="space-y-20 md:space-y-32 animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="section-title">
              From Design to Prototype.
              <br />
              <span className="gradient-text">In Minutes, Not Days.</span>
            </h1>
            
            <p className="section-subtitle max-w-3xl mx-auto">
              Learn how to turn your designs into high-fidelity, interactive prototypes using Cursor. 
              Build design systems, share with developers, and bring your vision to life—no coding experience needed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/beginner-guide" className="btn-primary text-lg group">
              <Lightbulb className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>Begin Your Journey</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/tutorials" className="btn-outline text-lg group">
              <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Explore Tutorials</span>
            </Link>
          </div>
        </div>

        
        {/* Stats Overview */}
        <div className="mt-20">
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl md:text-7xl font-black gradient-text mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Why Designers Love Cursor</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">The fastest path from design to interactive prototype</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="card-hover glow group text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-black text-gray-900 mb-2 text-lg">{feature.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Learning Paths */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Your Learning Path</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">From complete beginner to confident builder</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <Link
                key={index}
                to={course.link}
                className="card-hover glow group relative overflow-hidden"
              >
                {course.featured && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg transform rotate-12">
                      Start Here
                    </div>
                  </div>
                )}

                <div className="flex gap-6 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:gradient-text transition-all">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                  <span className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    <span className="font-semibold">{course.level}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    <span className="font-semibold">{course.lessons} lessons</span>
                  </span>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200/50">
                  <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">{course.duration}</span>
                  <span className="flex items-center gap-2 font-bold gradient-text group-hover:gap-4 transition-all">
                    <span>Begin</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Why This Works */}
      <section className="card-glass relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              Why This Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to go from zero to building
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/50 backdrop-blur rounded-2xl p-6 hover:bg-white/80 transition-all group">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-900">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-purple-600 via-blue-600 to-purple-600 p-12 md:p-20 text-center text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">
              Ready to Start Building?
            </h2>
            <p className="text-2xl font-medium opacity-90 max-w-2xl mx-auto">
              Everything you need to learn Cursor, all in one place
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link to="/beginner-guide" className="btn bg-white text-gray-900 hover:bg-gray-100 text-lg shadow-2xl">
              <span>Begin Learning</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link to="/tutorials" className="btn-outline border-white text-white hover:bg-white/20 text-lg">
              <span>Explore Content</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

