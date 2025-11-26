import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Rocket, Zap, CheckCircle, ArrowRight, Play, Sparkles,
  Download, FolderOpen, MessageSquare, Wand2, Eye, Copy, Check,
  ChevronRight, Clock, Star, Terminal, Keyboard, MousePointer,
  Target, Lightbulb, Heart
} from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

const QuickStart = () => {
  const { completeLesson, completedLessons } = useProgress()
  const [currentStep, setCurrentStep] = useState(0)
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(id)
    setTimeout(() => setCopiedText(null), 2000)
  }

  const handleStepComplete = (stepIndex: number) => {
    if (stepIndex === quickStartSteps.length - 1) {
      completeLesson('quick-start-complete', 'foundation')
    }
    setCurrentStep(Math.min(stepIndex + 1, quickStartSteps.length - 1))
  }

  const isComplete = completedLessons.some(l => l.id === 'quick-start-complete')

  const quickStartSteps = [
    {
      id: 'install',
      title: 'Download Cursor',
      subtitle: '30 seconds',
      icon: Download,
      color: 'cyan',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-zinc-300">
            Cursor is free to download and includes generous AI usage. It works on Mac, Windows, and Linux.
          </p>
          
          <a 
            href="https://cursor.sh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto justify-center text-lg group"
          >
            <Download className="w-5 h-5" />
            <span>Download Cursor</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
            <p className="text-amber-400 text-sm">
              <strong>💡 Tip:</strong> If you have VS Code extensions and settings, Cursor can import them during setup!
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'open',
      title: 'Open a Folder',
      subtitle: '10 seconds',
      icon: FolderOpen,
      color: 'purple',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-zinc-300">
            Create a new folder on your Desktop called <code className="px-2 py-1 bg-dark-700 rounded text-cyan-400">my-first-project</code> and open it in Cursor.
          </p>
          
          <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold text-sm">1</span>
              </div>
              <p className="text-zinc-300">Open Cursor</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold text-sm">2</span>
              </div>
              <p className="text-zinc-300">Click <strong className="text-white">File → Open Folder</strong></p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold text-sm">3</span>
              </div>
              <p className="text-zinc-300">Select your new folder</p>
            </div>
          </div>

          <p className="text-sm text-zinc-500">
            You should now see an empty sidebar on the left. That's your project!
          </p>
        </div>
      )
    },
    {
      id: 'chat',
      title: 'Meet Your AI Partner',
      subtitle: '30 seconds',
      icon: MessageSquare,
      color: 'pink',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-zinc-300">
            Press <kbd className="px-2 py-1 bg-dark-700 rounded text-cyan-400 font-mono">⌘L</kbd> (Mac) or <kbd className="px-2 py-1 bg-dark-700 rounded text-cyan-400 font-mono">Ctrl+L</kbd> (Windows) to open AI Chat.
          </p>
          
          <div className="bg-dark-800/50 border border-cyan-500/30 rounded-xl p-6">
            <p className="text-zinc-400 text-sm mb-3">Try typing:</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 text-emerald-400 font-mono bg-dark-900 rounded-lg p-4">
                Hello! I'm a product designer learning to use Cursor. What can you help me build?
              </code>
              <button
                onClick={() => handleCopy("Hello! I'm a product designer learning to use Cursor. What can you help me build?", 'chat')}
                className="p-2 text-zinc-500 hover:text-cyan-400 transition-colors"
              >
                {copiedText === 'chat' ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <p className="text-sm text-zinc-500">
            AI will respond! This is your design partner. Ask it anything—you can't break it.
          </p>
        </div>
      )
    },
    {
      id: 'create',
      title: 'Build Your First Component',
      subtitle: '2 minutes',
      icon: Wand2,
      color: 'amber',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-zinc-300">
            Let's build something real. In the chat, type this prompt and press Enter:
          </p>
          
          <div className="bg-dark-800/50 border border-emerald-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-emerald-400 font-medium">YOUR FIRST AI PROMPT</span>
              <button
                onClick={() => handleCopy(`Create a beautiful product card component in a new file called product-card.html. Include:
- A placeholder image at the top
- Product name: "Wireless Headphones Pro"
- Price: $299
- A star rating (4.5 stars)
- An "Add to Cart" button with a hover effect
- Use Tailwind CSS from CDN
- Make it centered on the page with a nice shadow`, 'prompt')}
                className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300"
              >
                {copiedText === 'prompt' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>Copy</span>
              </button>
            </div>
            <pre className="text-emerald-400 font-mono text-sm whitespace-pre-wrap bg-dark-900 rounded-lg p-4">
{`Create a beautiful product card component in a new file called product-card.html. Include:
- A placeholder image at the top
- Product name: "Wireless Headphones Pro"
- Price: $299
- A star rating (4.5 stars)
- An "Add to Cart" button with a hover effect
- Use Tailwind CSS from CDN
- Make it centered on the page with a nice shadow`}
            </pre>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
            <p className="text-purple-400 text-sm">
              <strong>🎨 Designer Tip:</strong> Notice how we describe the design visually, not technically. 
              AI translates your design language into code!
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'preview',
      title: 'See Your Creation!',
      subtitle: '30 seconds',
      icon: Eye,
      color: 'emerald',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-zinc-300">
            Find your new <code className="px-2 py-1 bg-dark-700 rounded text-cyan-400">product-card.html</code> file in the sidebar. 
            Right-click it and choose <strong className="text-white">"Open in Browser"</strong> or simply double-click to open it.
          </p>
          
          <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl p-8 text-center">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">🎉 You Just Built Your First Component!</h3>
            <p className="text-zinc-400">
              In under 5 minutes, you went from zero to a working, styled product card. 
              This is the power of AI-assisted design.
            </p>
          </div>

          <div className="bg-dark-800/50 border border-white/5 rounded-xl p-4">
            <p className="text-zinc-400 text-sm">
              <strong className="text-white">What's next?</strong> Try modifying it! In chat, type: 
              <code className="ml-2 text-cyan-400">"Make the button green and add a wishlist heart icon"</code>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'shortcuts',
      title: 'The Only 3 Shortcuts You Need',
      subtitle: '1 minute',
      icon: Keyboard,
      color: 'blue',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-zinc-300">
            Master these three shortcuts and you can do anything:
          </p>
          
          <div className="grid gap-4">
            <div className="bg-dark-800/50 border border-cyan-500/30 rounded-xl p-5">
              <div className="flex items-center gap-4">
                <kbd className="px-4 py-2 bg-dark-900 rounded-lg text-cyan-400 font-mono text-lg">⌘I</kbd>
                <div>
                  <h4 className="font-bold text-white">AI Agent Panel</h4>
                  <p className="text-sm text-zinc-400">Open Agent mode to build features, fix bugs, create files. Choose Agent, Ask, or Manual modes.</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-800/50 border border-purple-500/30 rounded-xl p-5">
              <div className="flex items-center gap-4">
                <kbd className="px-4 py-2 bg-dark-900 rounded-lg text-purple-400 font-mono text-lg">⌘L</kbd>
                <div>
                  <h4 className="font-bold text-white">AI Chat</h4>
                  <p className="text-sm text-zinc-400">Open chat for quick questions and conversations</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-800/50 border border-pink-500/30 rounded-xl p-5">
              <div className="flex items-center gap-4">
                <kbd className="px-4 py-2 bg-dark-900 rounded-lg text-pink-400 font-mono text-lg">⌘K</kbd>
                <div>
                  <h4 className="font-bold text-white">Quick Edit</h4>
                  <p className="text-sm text-zinc-400">Edit code at your cursor position—great for quick inline changes</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-zinc-500">
            On Windows, replace ⌘ with Ctrl. That's it—three shortcuts to design engineering!
          </p>
        </div>
      )
    }
  ]

  const colorClasses: Record<string, string> = {
    cyan: 'from-cyan-500 to-cyan-600',
    purple: 'from-purple-500 to-purple-600',
    pink: 'from-pink-500 to-pink-600',
    amber: 'from-amber-500 to-amber-600',
    emerald: 'from-emerald-500 to-emerald-600',
    blue: 'from-blue-500 to-blue-600'
  }

  return (
    <div className="space-y-16 animate-fade-in max-w-4xl mx-auto">
      {/* Hero */}
      <section className="relative pt-8 text-center">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="relative">
          <span className="badge-cyan mb-6">5-Minute Quick Start</span>
          
          <h1 className="heading-section text-white mb-6">
            Zero to First Component<br />
            <span className="text-gradient-multi">in 5 Minutes</span>
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
            No setup guides. No theory. Just follow along and build something real.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-zinc-500">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              5 minutes
            </span>
            <span className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              6 steps
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400" />
              100 points
            </span>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="sticky top-24 z-40 bg-dark-950/80 backdrop-blur-xl py-4 -mx-4 px-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          {quickStartSteps.map((step, index) => {
            const isCompleted = index < currentStep
            const isCurrent = index === currentStep
            
            return (
              <button
                key={step.id}
                onClick={() => setCurrentStep(index)}
                className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500' 
                    : isCurrent
                      ? 'bg-cyan-500/50'
                      : 'bg-dark-700'
                }`}
              />
            )
          })}
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-zinc-500">
            Step {currentStep + 1} of {quickStartSteps.length}
          </span>
          <span className="text-xs text-cyan-400 font-medium">
            {quickStartSteps[currentStep].subtitle}
          </span>
        </div>
      </section>

      {/* Current Step */}
      <section className="space-y-8">
        {(() => {
          const step = quickStartSteps[currentStep]
          const Icon = step.icon
          
          return (
            <div className="card-glow p-8 md:p-10">
              <div className="flex items-start gap-6 mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[step.color]} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-sm text-zinc-500">Step {currentStep + 1}</span>
                  <h2 className="text-3xl font-display font-bold text-white">{step.title}</h2>
                </div>
              </div>

              {step.content}

              <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/5">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="btn-secondary disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  <span>Back</span>
                </button>

                <button
                  onClick={() => handleStepComplete(currentStep)}
                  className="btn-primary"
                >
                  {currentStep === quickStartSteps.length - 1 ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Complete Quick Start!</span>
                    </>
                  ) : (
                    <>
                      <span>Done, Next Step</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )
        })()}
      </section>

      {/* Completion State */}
      {isComplete && (
        <section className="relative overflow-hidden rounded-[2.5rem] p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-purple-600 to-pink-600 opacity-90" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          <div className="relative space-y-6">
            <div className="w-24 h-24 mx-auto bg-white/10 backdrop-blur rounded-full flex items-center justify-center">
              <Heart className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-3xl font-display font-bold text-white">
              You Did It! 🎉
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              You just built your first component with AI. That's the hardest part—getting started. 
              Now let's go deeper.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                to="/beginner-guide" 
                className="btn bg-white text-dark-950 hover:bg-zinc-100"
              >
                <span>Continue to Chapter 1</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/cheatsheet" 
                className="btn-secondary border-white/30 text-white"
              >
                <Keyboard className="w-5 h-5" />
                <span>View All Shortcuts</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* What's Next */}
      {!isComplete && (
        <section className="card-dark p-8">
          <h3 className="font-display font-bold text-white text-xl mb-4">After Quick Start:</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link to="/beginner-guide" className="bg-dark-800/50 border border-white/5 rounded-xl p-4 hover:border-cyan-500/30 transition-all">
              <Lightbulb className="w-6 h-6 text-cyan-400 mb-2" />
              <h4 className="font-bold text-white text-sm">Chapter 1</h4>
              <p className="text-xs text-zinc-500">Why Cursor Changes Everything</p>
            </Link>
            <Link to="/cheatsheet" className="bg-dark-800/50 border border-white/5 rounded-xl p-4 hover:border-purple-500/30 transition-all">
              <Keyboard className="w-6 h-6 text-purple-400 mb-2" />
              <h4 className="font-bold text-white text-sm">Cheat Sheet</h4>
              <p className="text-xs text-zinc-500">All Keyboard Shortcuts</p>
            </Link>
            <Link to="/tutorials" className="bg-dark-800/50 border border-white/5 rounded-xl p-4 hover:border-pink-500/30 transition-all">
              <Play className="w-6 h-6 text-pink-400 mb-2" />
              <h4 className="font-bold text-white text-sm">Tutorials</h4>
              <p className="text-xs text-zinc-500">Hands-On Projects</p>
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}

export default QuickStart


