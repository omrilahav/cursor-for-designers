import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Download, CheckCircle, ExternalLink, ArrowRight, Monitor, 
  Key, Settings, Zap, Palette, Bot, Keyboard, ChevronRight,
  Clock, Star, Play, FileCode, Sparkles, Eye, Target,
  MessageSquare, Edit3, Terminal, Rocket
} from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

const Installation = () => {
  const { completeLesson, completedLessons } = useProgress()
  const [activeStep, setActiveStep] = useState(0)

  const handleComplete = (stepId: string) => {
    completeLesson(`install-${stepId}`, 'setup')
  }

  const isStepComplete = (stepId: string) => {
    return completedLessons.some(l => l.id === `install-${stepId}`)
  }

  const steps = [
    {
      id: 'download',
      title: 'Download & Install Cursor',
      subtitle: 'Get the app on your computer',
      icon: Download,
      content: (
        <div className="space-y-6">
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6">
            <h4 className="font-display font-bold text-white text-lg mb-4">Step 1: Download Cursor</h4>
            <p className="text-zinc-400 mb-4">
              Head to the official Cursor website and download the installer for your operating system.
            </p>
            <a 
              href="https://cursor.sh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Download Cursor</span>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <h5 className="font-bold text-white mb-2">🍎 macOS</h5>
              <ol className="text-sm text-zinc-400 space-y-2">
                <li>1. Open the .dmg file</li>
                <li>2. Drag Cursor to Applications</li>
                <li>3. Open from Applications folder</li>
                <li>4. Click "Open" if you see a security warning</li>
              </ol>
            </div>
            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <h5 className="font-bold text-white mb-2">🪟 Windows</h5>
              <ol className="text-sm text-zinc-400 space-y-2">
                <li>1. Run the .exe installer</li>
                <li>2. Follow the setup wizard</li>
                <li>3. Launch from Start menu</li>
              </ol>
            </div>
            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <h5 className="font-bold text-white mb-2">🐧 Linux</h5>
              <ol className="text-sm text-zinc-400 space-y-2">
                <li>1. Download .AppImage or .deb</li>
                <li>2. Make executable (AppImage)</li>
                <li>3. Run the application</li>
              </ol>
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
            <p className="text-amber-400 text-sm">
              <strong>💡 Note:</strong> Cursor is free to start with generous AI usage. You can upgrade later if you need more.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'signup',
      title: 'Create Your Account',
      subtitle: 'Sign in to unlock AI features',
      icon: Key,
      content: (
        <div className="space-y-6">
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
            <h4 className="font-display font-bold text-white text-lg mb-4">Step 2: Sign Up & Sign In</h4>
            <p className="text-zinc-400 mb-4">
              When you first open Cursor, you'll see a welcome screen. Create an account to enable all the AI features.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-dark-950 font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-bold text-white mb-1">Click "Sign In" or "Get Started"</p>
                <p className="text-sm text-zinc-400">You can use Google, GitHub, or email</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-dark-950 font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-bold text-white mb-1">Complete the sign-up in your browser</p>
                <p className="text-sm text-zinc-400">The page will redirect you back to Cursor</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-dark-950 font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-bold text-white mb-1">You're in! 🎉</p>
                <p className="text-sm text-zinc-400">You should see the main Cursor interface</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
            <p className="text-emerald-400 text-sm">
              <strong>Why sign in?</strong> Your account enables AI features, syncs settings across devices, and tracks your usage. It's quick and secure.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'interface',
      title: 'Know Your Interface',
      subtitle: 'The 4 areas you need to know',
      icon: Monitor,
      content: (
        <div className="space-y-6">
          <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-6">
            <h4 className="font-display font-bold text-white text-lg mb-4">Step 3: Learn the Interface</h4>
            <p className="text-zinc-400">
              Cursor's interface has four main areas. Here's what each does:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                <FileCode className="w-5 h-5 text-cyan-400" />
              </div>
              <h5 className="font-bold text-white mb-2">📁 Left Sidebar</h5>
              <p className="text-sm text-zinc-400 mb-3">Your file explorer. Just like Finder on Mac or File Explorer on Windows.</p>
              <p className="text-xs text-zinc-500">Toggle with: <kbd className="px-2 py-0.5 bg-dark-700 rounded text-zinc-300">Cmd+B</kbd></p>
            </div>

            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                <Edit3 className="w-5 h-5 text-purple-400" />
              </div>
              <h5 className="font-bold text-white mb-2">📝 Main Editor</h5>
              <p className="text-sm text-zinc-400 mb-3">Where you view and edit code. This is where you'll spend most of your time.</p>
              <p className="text-xs text-zinc-500">Click any file to open it here</p>
            </div>

            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-4">
                <Terminal className="w-5 h-5 text-pink-400" />
              </div>
              <h5 className="font-bold text-white mb-2">💻 Bottom Panel</h5>
              <p className="text-sm text-zinc-400 mb-3">Terminal and output. Run commands here like "npm run dev".</p>
              <p className="text-xs text-zinc-500">Toggle with: <kbd className="px-2 py-0.5 bg-dark-700 rounded text-zinc-300">Cmd+`</kbd></p>
            </div>

            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5 text-amber-400" />
              </div>
              <h5 className="font-bold text-white mb-2">🤖 Right Sidebar (AI)</h5>
              <p className="text-sm text-zinc-400 mb-3">The AI chat panel. Have conversations, ask questions, get help.</p>
              <p className="text-xs text-zinc-500">Open with: <kbd className="px-2 py-0.5 bg-dark-700 rounded text-zinc-300">Cmd+L</kbd></p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'shortcuts',
      title: 'The 5 Shortcuts That Matter',
      subtitle: 'Memorize these and you\'re set',
      icon: Keyboard,
      content: (
        <div className="space-y-6">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
            <h4 className="font-display font-bold text-white text-lg mb-4">Step 4: Learn 5 Essential Shortcuts</h4>
            <p className="text-zinc-400">
              You don't need to memorize 100 shortcuts. These 5 cover 90% of what you'll do daily.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="font-bold text-white">Open AI Chat</p>
                  <p className="text-sm text-zinc-400">Ask questions, plan, discuss</p>
                </div>
              </div>
              <kbd className="px-4 py-2 bg-dark-700 rounded-lg text-cyan-400 font-mono">Cmd+L</kbd>
            </div>

            <div className="flex items-center justify-between bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Edit3 className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="font-bold text-white">Inline AI Edit</p>
                  <p className="text-sm text-zinc-400">Generate or modify code at your cursor</p>
                </div>
              </div>
              <kbd className="px-4 py-2 bg-dark-700 rounded-lg text-purple-400 font-mono">Cmd+K</kbd>
            </div>

            <div className="flex items-center justify-between bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                  <FileCode className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="font-bold text-white">Quick Open File</p>
                  <p className="text-sm text-zinc-400">Find any file instantly</p>
                </div>
              </div>
              <kbd className="px-4 py-2 bg-dark-700 rounded-lg text-pink-400 font-mono">Cmd+P</kbd>
            </div>

            <div className="flex items-center justify-between bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="font-bold text-white">Toggle Terminal</p>
                  <p className="text-sm text-zinc-400">Open/close the command line</p>
                </div>
              </div>
              <kbd className="px-4 py-2 bg-dark-700 rounded-lg text-amber-400 font-mono">Cmd+`</kbd>
            </div>

            <div className="flex items-center justify-between bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="font-bold text-white">Command Palette</p>
                  <p className="text-sm text-zinc-400">Access any command</p>
                </div>
              </div>
              <kbd className="px-4 py-2 bg-dark-700 rounded-lg text-emerald-400 font-mono">Cmd+Shift+P</kbd>
            </div>
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-5">
            <p className="text-cyan-400 text-sm">
              <strong>💡 Pro Tip:</strong> On Windows/Linux, replace <kbd className="px-1 bg-dark-700 rounded">Cmd</kbd> with <kbd className="px-1 bg-dark-700 rounded">Ctrl</kbd>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'first-build',
      title: 'Build Your First Component',
      subtitle: 'Create something real in 5 minutes',
      icon: Rocket,
      content: (
        <div className="space-y-6">
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
            <h4 className="font-display font-bold text-white text-lg mb-4">Step 5: Your First AI-Built Component 🚀</h4>
            <p className="text-zinc-400">
              Let's prove this works. You're going to build a beautiful component in the next 5 minutes.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-bold text-white mb-2">Create a New Folder</p>
                  <p className="text-sm text-zinc-400 mb-3">On your Desktop, create a folder called <code className="px-2 py-0.5 bg-dark-700 rounded text-cyan-400">my-first-component</code></p>
                  <p className="text-sm text-zinc-400">In Cursor: File → Open Folder → Select your new folder</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-bold text-white mb-2">Create an HTML File</p>
                  <p className="text-sm text-zinc-400 mb-3">Press <kbd className="px-2 py-0.5 bg-dark-700 rounded text-cyan-400">Cmd+N</kbd> for new file, then <kbd className="px-2 py-0.5 bg-dark-700 rounded text-cyan-400">Cmd+S</kbd> to save</p>
                  <p className="text-sm text-zinc-400">Name it: <code className="px-2 py-0.5 bg-dark-700 rounded text-cyan-400">card.html</code></p>
                </div>
              </div>
            </div>

            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-bold text-white mb-2">Ask AI to Build It</p>
                  <p className="text-sm text-zinc-400 mb-3">Press <kbd className="px-2 py-0.5 bg-dark-700 rounded text-cyan-400">Cmd+K</kbd> and type:</p>
                  <div className="bg-dark-900 rounded-lg p-4 mb-3">
                    <p className="text-emerald-400 font-mono text-sm">
                      Create a modern profile card with an avatar image, name, title, bio, and a follow button. Use Tailwind CSS from CDN. Make it dark themed with a gradient background, rounded corners, and smooth hover animations. Center it on the page.
                    </p>
                  </div>
                  <p className="text-sm text-zinc-400">Press Enter, then Tab to accept the generated code</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                <div>
                  <p className="font-bold text-white mb-2">See Your Creation!</p>
                  <p className="text-sm text-zinc-400 mb-3">Save the file (<kbd className="px-2 py-0.5 bg-dark-700 rounded text-cyan-400">Cmd+S</kbd>), then right-click the file and "Open in Browser"</p>
                  <p className="text-sm text-zinc-400">You just built a professional-quality component with AI. 🎉</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl p-6 text-center">
            <Sparkles className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h4 className="font-display font-bold text-white text-xl mb-2">You Did It!</h4>
            <p className="text-zinc-400 mb-4">
              You just went from idea to working component in minutes. This is your new superpower.
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="space-y-24 animate-fade-in">
      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-8">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="badge-purple mb-6">Chapter 2</span>
          
          <h1 className="heading-display text-white mb-8">
            Your First Hour<br />
            <span className="text-gradient-multi">in Cursor</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Let's get you set up and building something real. By the end of this chapter, you'll have created your first AI-generated component.
          </p>

          <div className="flex items-center justify-center gap-2 text-zinc-500">
            <span className="mx-2">•</span>
            <Star className="w-5 h-5 text-amber-400" />
            <span>Hands-On Setup</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PROGRESS TRACKER
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative max-w-4xl mx-auto">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isComplete = isStepComplete(step.id)
            const isActive = activeStep === index
            
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl flex-shrink-0 transition-all duration-300 ${
                  isActive 
                    ? 'bg-cyan-500/20 border-2 border-cyan-500' 
                    : isComplete
                      ? 'bg-emerald-500/10 border border-emerald-500/30'
                      : 'bg-dark-800/50 border border-white/5 hover:border-white/20'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  isComplete 
                    ? 'bg-emerald-500' 
                    : isActive 
                      ? 'bg-cyan-500' 
                      : 'bg-dark-700'
                }`}>
                  {isComplete ? (
                    <CheckCircle className="w-4 h-4 text-dark-950" />
                  ) : (
                    <Icon className={`w-4 h-4 ${isActive ? 'text-dark-950' : 'text-zinc-400'}`} />
                  )}
                </div>
                <span className={`font-medium whitespace-nowrap ${
                  isActive ? 'text-cyan-400' : isComplete ? 'text-emerald-400' : 'text-zinc-400'
                }`}>
                  {step.title}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CURRENT STEP CONTENT
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative max-w-4xl mx-auto">
        <div className="card-glow p-8 md:p-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
              {(() => {
                const Icon = steps[activeStep].icon
                return <Icon className="w-7 h-7 text-white" />
              })()}
            </div>
            <div>
              <p className="text-sm text-cyan-400 font-medium">Step {activeStep + 1} of {steps.length}</p>
              <h2 className="font-display font-bold text-white text-2xl">{steps[activeStep].title}</h2>
              <p className="text-zinc-400">{steps[activeStep].subtitle}</p>
            </div>
          </div>

          {steps[activeStep].content}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/5">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              className={`btn-secondary ${activeStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={activeStep === 0}
            >
              Previous Step
            </button>

            {!isStepComplete(steps[activeStep].id) && (
              <button
                onClick={() => handleComplete(steps[activeStep].id)}
                className="btn bg-emerald-500 text-dark-950 hover:bg-emerald-400"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Mark Complete</span>
              </button>
            )}

            {activeStep < steps.length - 1 ? (
              <button
                onClick={() => setActiveStep(activeStep + 1)}
                className="btn-primary"
              >
                <span>Next Step</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <Link to="/cursor-agent" className="btn-primary">
                <span>Continue to Chapter 3</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHAT'S NEXT
      ═══════════════════════════════════════════════════════════ */}
      {isStepComplete('first-build') && (
        <section className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] p-10 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-purple-600 to-pink-600 opacity-90" />
            <div className="absolute inset-0 grid-pattern opacity-20" />
            
            <div className="relative space-y-6">
              <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur rounded-full flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                Chapter 2 Complete! 🎉
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                You're set up and you've built your first component. Next, let's master the three AI modes.
              </p>

              <Link 
                to="/cursor-agent" 
                className="btn bg-white text-dark-950 hover:bg-zinc-100 text-lg shadow-2xl px-10 inline-flex group"
              >
                <span className="font-bold">Continue to Chapter 3</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Installation
