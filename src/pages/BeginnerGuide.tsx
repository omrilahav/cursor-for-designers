import { Book, Code, Terminal as TerminalIcon, GitBranch, Lightbulb, ArrowRight, CheckCircle, Rocket, Heart, Shield, Zap, Award, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

const BeginnerGuide = () => {
  const concepts = [
    {
      id: 'what-is-cursor',
      icon: Code,
      title: 'What is Cursor (For Designers)?',
      simple: 'Cursor is like Figma, but instead of static mockups, you create interactive, working prototypes using AI.',
      detailed: [
        'Describe your design in plain English: "Create a card with an image, title, and button"',
        'AI generates the actual working component - not just a picture',
        'Edit and refine with more natural language: "Make the button rounder", "Add a hover effect"',
        'Export production-ready code that developers can use directly',
        'No need to learn HTML, CSS, or JavaScript - AI handles all the technical stuff'
      ],
      example: 'Say: "Create a pricing card with 3 tiers, each showing features and a CTA button" - AI builds it!'
    },
    {
      id: 'what-is-ide',
      icon: Book,
      title: 'What is an IDE?',
      simple: 'IDE stands for "Integrated Development Environment" - it\'s where you write and manage code.',
      detailed: [
        'Think of it as Microsoft Word, but for code instead of documents.',
        'It has a file explorer (like Finder on Mac or File Explorer on Windows) on the left',
        'A large area in the middle where you write your code',
        'Tools at the bottom for running commands and seeing output',
        'Cursor is an IDE - specifically, it\'s a super-powered IDE with AI built in'
      ],
      example: 'Just like Word helps you write documents, Cursor helps you write code - but with AI assistance!'
    },
    {
      id: 'what-is-terminal',
      icon: TerminalIcon,
      title: 'What is the Terminal?',
      simple: 'The terminal is a text-based way to give commands to your computer.',
      detailed: [
        'Before graphical interfaces (windows, icons, mouse), people controlled computers by typing commands.',
        'The terminal still exists because it\'s faster for certain tasks.',
        'Think of it as texting with your computer instead of pointing and clicking.',
        'Common commands: "npm install" (download tools), "git commit" (save your work)',
        'Don\'t worry - Cursor has a built-in terminal, and we\'ll teach you the few commands you need'
      ],
      example: 'Instead of downloading an app by clicking, you type: "npm install app-name"'
    },
    {
      id: 'what-is-git',
      icon: GitBranch,
      title: 'What is Git?',
      simple: 'Git is a system for tracking changes to your code (like "Track Changes" in Word, but more powerful).',
      detailed: [
        'Imagine you\'re working on a design and want to try different versions without losing your progress.',
        'Git lets you save "snapshots" of your work at any point.',
        'You can go back to any previous version, try experimental changes, and work with others.',
        'GitHub is like Dropbox for code - it stores your Git projects online.',
        'Cursor has visual Git tools, so you rarely need to type Git commands'
      ],
      example: 'Save your progress: Click the checkmark button in Cursor, write "Added new button", done!'
    }
  ]

  const fears = [
    {
      fear: '"I\'m not technical"',
      reality: 'Neither were most successful designers who code now. You don\'t need a computer science degree - you just need curiosity!',
      icon: '🎨'
    },
    {
      fear: '"I\'ll break something"',
      reality: 'Code is incredibly forgiving. You can always undo, go back, or start over. Nothing you do on your computer can cause permanent damage.',
      icon: '🛡️'
    },
    {
      fear: '"I don\'t understand the jargon"',
      reality: 'Every expert started as a beginner. This academy explains everything in plain English. When you see a technical term, we\'ll explain it.',
      icon: '📚'
    },
    {
      fear: '"I need to memorize syntax"',
      reality: 'With AI tools like Cursor, you describe what you want in natural language. The AI handles the technical syntax.',
      icon: '🤖'
    },
    {
      fear: '"It will take forever to learn"',
      reality: 'You can build your first component in hours, not months. You learn by doing, and every small win builds confidence.',
      icon: '⚡'
    }
  ]

  const timeline = [
    { time: 'Day 1', task: 'Install Cursor, complete first tutorial', feel: 'Excited & curious' },
    { time: 'Day 2-3', task: 'Learn keyboard shortcuts, understand the interface', feel: 'Getting comfortable' },
    { time: 'Week 1', task: 'Create your first button with AI help', feel: 'Proud!' },
    { time: 'Week 2', task: 'Build a complete card component', feel: 'Confident' },
    { time: 'Week 3', task: 'Create a small page with multiple components', feel: 'Empowered' },
    { time: 'Month 2', task: 'Build your first full project', feel: 'Unstoppable!' }
  ]

  return (
    <div className="space-y-20 animate-fade-in">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-300/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="text-center space-y-8 max-w-5xl mx-auto pt-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl">
            <Rocket className="w-5 h-5" />
            <span>Start From Zero</span>
          </div>
          
          <h1 className="section-title">
            You're a Designer.<br />
            <span className="gradient-text">Not a Developer. Perfect.</span>
          </h1>
          
          <p className="section-subtitle max-w-3xl mx-auto">
            Learn how to turn your designs into interactive prototypes, build design systems, 
            and create production-ready components—all with AI assistance. No coding required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link to="/tutorials" className="btn-primary text-lg group">
              <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Start Learning Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Why Learn Section */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Why Designers Use Cursor</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bridge the gap between design and development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-hover glow group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">Prototype 10x Faster</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Stop using static mockup tools. Turn your Figma designs into interactive, high-fidelity prototypes in minutes—not days. Test real interactions, animations, and responsive behavior instantly.
            </p>
          </div>
          
          <div className="card-hover glow group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-400 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">Perfect Dev Handoffs</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Generate production-ready code from your designs. Hand off actual working components to developers, not just static specs. They'll love you for it.
            </p>
          </div>
          
          <div className="card-hover glow group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">Build Design Systems</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Create and maintain living design systems. Build reusable component libraries with design tokens, ensuring consistency across your entire product.
            </p>
          </div>
          
          <div className="card-hover glow group">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-400 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">Design & Validate Faster</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Don't wait weeks for developers to build prototypes. Test your ideas immediately with real users. Iterate based on feedback before development even starts.
            </p>
          </div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Core Concepts</h2>
          <p className="text-xl text-gray-600">
            Everything explained like you're five
          </p>
        </div>
        
        {concepts.map((concept) => {
          const Icon = concept.icon
          return (
            <div key={concept.id} className="card-hover glow space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">{concept.title}</h3>
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-r-2xl">
                    <p className="text-xl text-gray-900 leading-relaxed font-bold">
                      {concept.simple}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-black text-gray-900 text-xl">The Full Story</h4>
                <div className="space-y-4">
                  {concept.detailed.map((point, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white/50 backdrop-blur rounded-2xl p-5">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 leading-relaxed text-lg">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-2xl p-6">
                <p className="text-gray-900 leading-relaxed text-lg">
                  <strong className="font-black text-green-700">💡 Example: </strong>
                  <span className="text-gray-700 font-medium">{concept.example}</span>
                </p>
              </div>
            </div>
          )
        })}
      </section>

      {/* Addressing Fears */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-3xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Let's Address Common Fears</h2>
          <p className="text-lg text-gray-600">
            Every expert started exactly where you are now
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {fears.map((item, index) => {
            const icons = {
              '🎨': Shield,
              '🛡️': Heart,
              '📚': Book,
              '🤖': Code,
              '⚡': Zap
            }
            const IconComponent = icons[item.icon as keyof typeof icons] || Shield
            
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-bold text-red-600 mb-2">{item.fear}</p>
                    <p className="text-gray-700 leading-relaxed">{item.reality}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Realistic Timeline */}
      <section className="card space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Your Realistic Learning Timeline</h2>
          <p className="text-lg text-gray-600">
            See exactly what to expect in your first weeks
          </p>
        </div>
        
        <div className="space-y-4 max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-24 flex-shrink-0">
                <div className="bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-bold text-center">
                  {item.time}
                </div>
              </div>
              <div className="flex-1 content-box">
                <p className="font-bold text-gray-900 mb-1.5">{item.task}</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-600">How you'll feel:</span>
                  <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    {item.feel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Principles */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black mb-3">4 Principles for Success</h2>
          <p className="text-lg text-gray-300">
            Follow these and you'll succeed, guaranteed
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
            <div className="text-3xl font-black text-purple-400 mb-2">1</div>
            <h3 className="font-bold text-xl mb-3">Start Small</h3>
            <p className="text-gray-200 leading-relaxed">
              Don't try to build Facebook on day one. Start with a button. Then a card. Then a page. Small wins build confidence.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
            <div className="text-3xl font-black text-blue-400 mb-2">2</div>
            <h3 className="font-bold text-xl mb-3">Learn by Doing</h3>
            <p className="text-gray-200 leading-relaxed">
              Reading about code won't teach you to code. You have to actually build things. Even if they're simple at first.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
            <div className="text-3xl font-black text-green-400 mb-2">3</div>
            <h3 className="font-bold text-xl mb-3">Use AI Fearlessly</h3>
            <p className="text-gray-200 leading-relaxed">
              AI is your coding mentor. Ask questions, request explanations, experiment freely. The AI never judges and is always patient.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
            <div className="text-3xl font-black text-amber-400 mb-2">4</div>
            <h3 className="font-bold text-xl mb-3">Google is Your Friend</h3>
            <p className="text-gray-200 leading-relaxed">
              Every developer (even experts) googles things constantly. Not knowing something is normal. Looking it up is professional.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start CTA */}
      <section className="card-premium text-center space-y-6 py-12">
        <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto">
          <Rocket className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-4xl font-black text-gray-900">Ready to Start?</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          You've learned the basics. Now it's time to get hands-on and build something real!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/tutorials" className="btn-primary text-lg">
            <Play className="w-5 h-5" />
            <span>Start First Tutorial</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/ide-basics" className="btn-outline text-lg">
            <Book className="w-5 h-5" />
            <span>Learn the IDE</span>
          </Link>
        </div>
      </section>

      {/* Encouragement */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-3xl p-8 md:p-12">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="text-7xl">✨</div>
          <h3 className="text-3xl font-black text-gray-900">You've Got This!</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            Every expert designer who codes started exactly where you are right now.
            The only difference between them and you is that they started.
            <strong className="block mt-4 text-2xl text-gray-900">
              Today is your day one. Let's make it count!
            </strong>
          </p>
        </div>
      </section>
    </div>
  )
}

export default BeginnerGuide

