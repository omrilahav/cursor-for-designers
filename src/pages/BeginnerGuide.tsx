import { Book, Code, Terminal as TerminalIcon, GitBranch, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const BeginnerGuide = () => {
  const concepts = [
    {
      id: 'what-is-coding',
      icon: Code,
      title: 'What is Coding?',
      simple: 'Coding is writing instructions for computers in a language they understand.',
      detailed: [
        'Think of it like writing a recipe: you give step-by-step instructions, and the computer follows them exactly.',
        'Instead of "add sugar, mix flour," you write things like "show this button" or "change this color."',
        'Computers are very literal - they do exactly what you tell them, nothing more, nothing less.',
        'The good news: with AI tools like Cursor, you can describe what you want in plain English, and the AI writes the computer instructions for you!'
      ],
      example: 'Instead of writing complex code, you can say: "Create a blue button that says Submit"'
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
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="card bg-gradient-to-br from-primary-500 to-accent-500 text-white text-center space-y-4">
        <Lightbulb className="w-16 h-16 mx-auto" />
        <h1 className="text-4xl font-bold">Absolute Beginner's Guide</h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Never touched code? Never used a terminal? No problem!
          This guide explains everything from zero.
        </p>
      </div>

      {/* Why Learn Section */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Should Designers Learn to Code?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-2">🚀 Prototype Faster</h3>
            <p className="text-gray-700">Turn your design ideas into working prototypes in minutes, not days. Test interactions and animations immediately.</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-2">💬 Speak Developer</h3>
            <p className="text-gray-700">Understand technical constraints and communicate more effectively with engineering teams.</p>
          </div>
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-2">🎨 Design Better</h3>
            <p className="text-gray-700">Knowing what's easy vs. hard to build helps you design more feasible, implementable solutions.</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-2">⚡ Be Independent</h3>
            <p className="text-gray-700">Don't wait for developers to bring your ideas to life. Build and iterate on your own.</p>
          </div>
        </div>
      </div>

      {/* Core Concepts */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Core Concepts Explained Simply</h2>
        
        {concepts.map((concept) => {
          const Icon = concept.icon
          return (
            <div key={concept.id} className="card space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{concept.title}</h3>
                  <p className="text-lg text-gray-700 font-medium mb-4">{concept.simple}</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 space-y-3">
                <h4 className="font-bold text-gray-800">The Full Story:</h4>
                {concept.detailed.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <p className="text-gray-700">
                  <strong className="text-green-800">Real Example: </strong>
                  {concept.example}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Addressing Fears */}
      <div className="card bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Let's Address Common Fears</h2>
        <div className="space-y-4">
          {fears.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{item.icon}</div>
                <div className="flex-1">
                  <p className="text-lg font-bold text-red-600 mb-2">{item.fear}</p>
                  <p className="text-gray-700">{item.reality}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Realistic Timeline */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Realistic Learning Timeline</h2>
        <div className="space-y-4">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-24 flex-shrink-0">
                <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-2 rounded-lg text-sm font-bold text-center">
                  {item.time}
                </div>
              </div>
              <div className="flex-1 bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-1">{item.task}</p>
                <p className="text-sm text-gray-600">How you'll feel: <span className="text-accent-600 font-medium">{item.feel}</span></p>
              </div>
              {index < timeline.length - 1 && (
                <ArrowRight className="w-6 h-6 text-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Key Principles */}
      <div className="card bg-gradient-to-r from-primary-500 to-accent-500 text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Key Principles for Success</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h3 className="font-bold text-xl mb-2">1. Start Small</h3>
            <p>Don't try to build Facebook on day one. Start with a button. Then a card. Then a page. Small wins build confidence.</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h3 className="font-bold text-xl mb-2">2. Learn by Doing</h3>
            <p>Reading about code won't teach you to code. You have to actually build things. Even if they're simple at first.</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h3 className="font-bold text-xl mb-2">3. Use AI Fearlessly</h3>
            <p>AI is your coding mentor. Ask questions, request explanations, experiment freely. The AI never judges and is always patient.</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h3 className="font-bold text-xl mb-2">4. Google is Your Friend</h3>
            <p>Every developer (even experts) googles things constantly. Not knowing something is normal. Looking it up is professional.</p>
          </div>
        </div>
      </div>

      {/* Quick Start CTA */}
      <div className="card text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Ready to Start?</h2>
        <p className="text-gray-600 text-lg">
          You've learned the basics. Now it's time to get hands-on!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/tutorials" className="btn-primary inline-flex items-center space-x-2">
            <span>Start First Tutorial</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/ide-basics" className="btn-secondary inline-flex items-center space-x-2">
            <span>Learn the IDE</span>
          </Link>
        </div>
      </div>

      {/* Encouragement */}
      <div className="card bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300">
        <div className="text-center space-y-4">
          <div className="text-6xl">🌟</div>
          <h3 className="text-2xl font-bold text-gray-800">Remember:</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Every expert designer who codes started exactly where you are right now.
            The only difference between them and you is that they started.
            Today is your day one. Let's make it count!
          </p>
        </div>
      </div>
    </div>
  )
}

export default BeginnerGuide

