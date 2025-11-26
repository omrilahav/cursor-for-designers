import { Link } from 'react-router-dom'
import { 
  Lightbulb, ArrowRight, CheckCircle, Rocket, Zap, Play, Star,
  Code, Terminal as TerminalIcon, GitBranch, Users, Palette, 
  Layers, MousePointer, Eye, Wand2, MessageSquare, Bot, 
  Target, Clock, ChevronRight, Sparkles, Award, Heart
} from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

const BeginnerGuide = () => {
  const { completeLesson, completedLessons } = useProgress()

  const designerSuperpowers = [
    {
      title: 'Build Interactive Prototypes in Hours',
      description: 'Turn your static mockups into fully functional prototypes that actually work. Click buttons, fill forms, see real interactions.',
      icon: MousePointer,
      example: 'Describe a signup flow → Get working form with validation, animations, and responsive design'
    },
    {
      title: 'Create Living Design Systems',
      description: 'Build component libraries that aren\'t just documentation—they\'re real, testable code that developers can use directly.',
      icon: Layers,
      example: 'Generate a complete button system with variants, states, and accessibility built in'
    },
    {
      title: 'Ship Designs, Not Just Specs',
      description: 'Hand developers working code instead of static mockups. No more "that\'s not what I designed" conversations.',
      icon: Rocket,
      example: 'Your prototype IS the spec—developers see exactly how it should look and behave'
    },
    {
      title: 'Iterate at the Speed of Thought',
      description: 'Make changes in seconds, not hours. "Make it more spacious" or "Add a hover effect" and see it instantly.',
      icon: Zap,
      example: 'Real-time iteration with AI: change colors, spacing, animations with simple prompts'
    }
  ]

  const coreConcepts = [
    {
      id: 'cursor',
      icon: Code,
      title: 'What is Cursor?',
      simple: 'Cursor is your AI design partner. You describe what you want, and AI builds it with you.',
      detailed: [
        'It\'s like VS Code (a code editor), but with AI superpowers built in',
        'You can write in plain English: "Create a blue button with rounded corners"',
        'AI understands your entire project and keeps things consistent',
        'It\'s free to start, with generous AI usage included',
        'Everything runs locally on your computer—your designs stay private'
      ]
    },
    {
      id: 'ai-modes',
      icon: Bot,
      title: 'The Three AI Modes',
      simple: 'Three ways to talk to AI: Chat for questions, Agent for big tasks, Inline for quick edits.',
      detailed: [
        'Chat (Cmd+L): Have conversations, ask questions, plan your approach',
        'Agent: Build entire features, create multiple files, execute complex workflows',
        'Inline (Cmd+K): Quick edits exactly where your cursor is—fastest for iterations',
        'All three work together—use the right tool for each job',
        'Start with Chat to plan, use Agent to build, Inline to polish'
      ]
    },
    {
      id: 'terminal',
      icon: TerminalIcon,
      title: 'The Terminal',
      simple: 'A text-based way to run commands. You\'ll only need 3-4 commands to start.',
      detailed: [
        'Think of it as texting your computer instead of clicking',
        '"npm install" downloads tools you need',
        '"npm run dev" starts a live preview of your work',
        'Cursor has a built-in terminal—no separate app needed',
        'AI can help you with any command you\'re unsure about'
      ]
    },
    {
      id: 'git',
      icon: GitBranch,
      title: 'Git (Version Control)',
      simple: 'Like "undo history" for your entire project. Save snapshots, try experiments, never lose work.',
      detailed: [
        'Save your work at any point with a description of what you did',
        'Go back to any previous version if something breaks',
        'Try risky experiments without fear—you can always revert',
        'Share your work with developers through GitHub',
        'Cursor has visual Git tools—you rarely need to type Git commands'
      ]
    }
  ]

  const mindsetShifts = [
    {
      from: '"I\'m not technical"',
      to: 'AI handles the technical parts—you bring the design vision',
      explanation: 'You don\'t need to memorize code. You need to describe what you want clearly—which is exactly what designers do.',
      icon: Lightbulb
    },
    {
      from: '"I might break something"',
      to: 'Everything is reversible. Git saves your work constantly.',
      explanation: 'Code is the most forgiving medium. Undo exists. Versions exist. You literally cannot cause permanent damage.',
      icon: Heart
    },
    {
      from: '"It will take forever to learn"',
      to: 'You\'ll build your first component in under an hour',
      explanation: 'This isn\'t a CS degree. It\'s learning 5 shortcuts and how to describe your designs to AI. That\'s it.',
      icon: Clock
    },
    {
      from: '"Developers won\'t take my code seriously"',
      to: 'AI generates professional-quality code that developers love',
      explanation: 'The code AI writes follows best practices. Developers will be impressed, not skeptical.',
      icon: Users
    }
  ]

  const timeline = [
    { 
      time: 'Hour 1', 
      title: 'First Component',
      description: 'Install Cursor, build your first card component with AI',
      icon: Rocket
    },
    { 
      time: 'Day 2-3', 
      title: 'Comfortable Flow',
      description: 'Know the shortcuts, understand the interface, iterate confidently',
      icon: Zap
    },
    { 
      time: 'Week 1', 
      title: 'Full Page',
      description: 'Build a complete page with multiple components and interactions',
      icon: Layers
    },
    { 
      time: 'Week 2', 
      title: 'Design System',
      description: 'Create a reusable component library with tokens and documentation',
      icon: Palette
    },
    { 
      time: 'Week 3', 
      title: 'Developer Handoff',
      description: 'Share production-ready code with your dev team via Git',
      icon: GitBranch
    },
    { 
      time: 'Month 1', 
      title: 'Full Applications',
      description: 'Build complete interactive prototypes for any feature',
      icon: Star
    }
  ]

  const handleStartLearning = () => {
    completeLesson('beginner-guide-read', 'foundation')
  }

  return (
    <div className="space-y-24 animate-fade-in">
      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-8">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="badge-cyan mb-6">Chapter 1</span>
          
          <h1 className="heading-display text-white mb-8">
            Why Cursor Changes<br />
            <span className="text-gradient-multi">Everything for Designers</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            You've spent years mastering visual design. Now imagine if you could build 
            <span className="text-white font-medium"> exactly what you design</span>—not just mockups, but real, working products.
          </p>

          <div className="flex items-center justify-center gap-2 text-zinc-500 mb-8">
            <Clock className="w-5 h-5" />
            <span>30 minute read</span>
            <span className="mx-2">•</span>
            <Star className="w-5 h-5 text-amber-400" />
            <span>Foundation Knowledge</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE PROBLEM
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="card-premium p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section text-white text-center mb-8">The Designer's Frustration</h2>
            
            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                You design something beautiful. You spec it out meticulously. You hand it off. And then...
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <p className="text-red-400 font-medium">"The spacing is off"</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <p className="text-red-400 font-medium">"That's not quite the animation I meant"</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <p className="text-red-400 font-medium">"Can you update the spec for this edge case?"</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <p className="text-red-400 font-medium">"We didn't have time for those hover states"</p>
                </div>
              </div>
              
              <p>
                The problem isn't your designs. It's that <span className="text-white font-medium">mockups can never fully capture your vision</span>. 
                They're pictures of an experience, not the experience itself.
              </p>

              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 mt-8">
                <p className="text-cyan-400 font-medium text-xl">
                  What if you could hand developers <span className="text-white">working code</span> instead of static images?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          VISUAL COMPARISON
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="badge-amber mb-4">See The Difference</span>
          <h2 className="heading-section text-white mb-4">From Description to Reality</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Watch how Cursor transforms your words into working UI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Before - Your Prompt */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-purple-400" />
              </div>
              <span className="text-purple-400 font-medium">What You Type</span>
            </div>
            
            <div className="bg-dark-900 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs text-zinc-600 ml-2">Cursor Chat</span>
              </div>
              <p className="text-zinc-300 font-mono text-sm leading-relaxed">
                <span className="text-cyan-400">You:</span> Create a team member card with:
                <br />- A circular avatar placeholder
                <br />- Name and role/title
                <br />- A short bio (2 lines max)
                <br />- Social media links as icons
                <br />- Subtle hover animation
                <br />- Modern, rounded design
              </p>
            </div>

            <div className="bg-dark-800/30 border border-dashed border-zinc-700 rounded-xl p-6 text-center">
              <Eye className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
              <p className="text-zinc-500 text-sm">In Figma, you'd spend 30+ minutes</p>
              <p className="text-zinc-600 text-xs mt-1">Creating layers, frames, components...</p>
            </div>
          </div>

          {/* After - The Result */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Wand2 className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-emerald-400 font-medium">What AI Builds (in seconds)</span>
            </div>
            
            {/* Live Preview Card - Team Member */}
            <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-2xl" />
              
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">SK</span>
              </div>
              
              {/* Name & Role */}
              <h3 className="text-xl font-display font-bold text-white mb-1">Sarah Kim</h3>
              <p className="text-cyan-400 text-sm font-medium mb-4">Lead Product Designer</p>
              
              {/* Bio */}
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                Design systems enthusiast. Turning complexity into clarity through thoughtful interfaces.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center justify-center gap-4">
                {['Twitter', 'LinkedIn', 'Dribbble'].map((social, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/5 hover:bg-cyan-500/20 flex items-center justify-center transition-colors cursor-pointer">
                    <span className="text-zinc-400 text-xs">{social[0]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
              <p className="text-emerald-400 text-sm font-medium">✓ Working React component</p>
              <p className="text-zinc-500 text-xs mt-1">With hover effects, responsive design, and all states</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DESIGNER SUPERPOWERS
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="text-center mb-12">
          <span className="badge-purple mb-4">Your New Superpowers</span>
          <h2 className="heading-section text-white mb-4">What You'll Be Able to Do</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {designerSuperpowers.map((power, index) => {
            const Icon = power.icon
            return (
              <div key={index} className="card-dark p-8 group hover:border-cyan-500/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-3">{power.title}</h3>
                <p className="text-zinc-400 mb-4">{power.description}</p>
                <div className="bg-dark-800/50 border border-white/5 rounded-lg p-4">
                  <p className="text-sm text-zinc-500">
                    <span className="text-cyan-400 font-medium">Example: </span>
                    {power.example}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MINDSET SHIFTS
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="text-center mb-12">
          <span className="badge-pink mb-4">Mindset Shifts</span>
          <h2 className="heading-section text-white mb-4">Reframe Your Thinking</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Let's address the fears that hold designers back
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {mindsetShifts.map((shift, index) => {
            const Icon = shift.icon
            return (
              <div key={index} className="card-dark p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-pink-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                      <span className="text-zinc-500 line-through">{shift.from}</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400 hidden md:block" />
                      <span className="text-cyan-400 font-medium">{shift.to}</span>
                    </div>
                    <p className="text-zinc-400 text-sm">{shift.explanation}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          VISUAL WORKFLOW
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="badge-emerald mb-4">Your New Workflow</span>
          <h2 className="heading-section text-white mb-4">How AI Assists Every Step</h2>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-right hidden md:block">
                <div className="bg-dark-800/50 border border-cyan-500/30 rounded-xl p-5 ml-auto max-w-sm">
                  <p className="text-cyan-400 font-mono text-sm">"Create a signup form with email, password, and validation"</p>
                </div>
              </div>
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-4 border-cyan-500 flex items-center justify-center z-10">
                <span className="text-cyan-400 font-bold text-xl">1</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white text-lg mb-1">Describe What You Want</h4>
                <p className="text-zinc-500 text-sm">Use natural language—like talking to a designer colleague</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-right hidden md:block">
                <h4 className="font-bold text-white text-lg mb-1">AI Generates Code</h4>
                <p className="text-zinc-500 text-sm">Watch as components appear in real-time</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-purple-500/20 border-4 border-purple-500 flex items-center justify-center z-10">
                <span className="text-purple-400 font-bold text-xl">2</span>
              </div>
              <div className="flex-1 hidden md:block">
                <div className="bg-dark-800/50 border border-purple-500/30 rounded-xl p-4 max-w-sm">
                  <div className="flex gap-1 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="font-mono text-xs space-y-1">
                    <p><span className="text-pink-400">const</span> <span className="text-cyan-400">SignupForm</span> = () =&gt; {"{"}</p>
                    <p className="pl-4"><span className="text-pink-400">return</span> (</p>
                    <p className="pl-6 text-zinc-500">// Form components...</p>
                    <p className="pl-4">)</p>
                    <p>{"}"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-right hidden md:block">
                <div className="bg-dark-800/50 border border-emerald-500/30 rounded-xl p-4 ml-auto max-w-sm">
                  <div className="space-y-2">
                    <div className="h-8 bg-dark-700 rounded-lg" />
                    <div className="h-8 bg-dark-700 rounded-lg" />
                    <div className="h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-4 border-emerald-500 flex items-center justify-center z-10">
                <span className="text-emerald-400 font-bold text-xl">3</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white text-lg mb-1">See Live Preview</h4>
                <p className="text-zinc-500 text-sm">Your component appears instantly—real and interactive</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-right hidden md:block">
                <h4 className="font-bold text-white text-lg mb-1">Iterate With Words</h4>
                <p className="text-zinc-500 text-sm">"Make the button larger" or "Add a loading spinner"</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-pink-500/20 border-4 border-pink-500 flex items-center justify-center z-10">
                <span className="text-pink-400 font-bold text-xl">4</span>
              </div>
              <div className="flex-1 hidden md:block">
                <div className="bg-dark-800/50 border border-pink-500/30 rounded-xl p-5 max-w-sm">
                  <p className="text-pink-400 font-mono text-sm">"Add password strength indicator and show/hide password toggle"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CORE CONCEPTS
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="text-center mb-12">
          <span className="badge-cyan mb-4">Core Concepts</span>
          <h2 className="heading-section text-white mb-4">The Only Things You Need to Know</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Four concepts. That's it. Everything else builds on these.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {coreConcepts.map((concept, index) => {
            const Icon = concept.icon
            return (
              <div key={concept.id} className="card-glow p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-white text-2xl mb-2">{concept.title}</h3>
                    <p className="text-lg text-cyan-400">{concept.simple}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3 ml-0 md:ml-22">
                  {concept.detailed.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <p className="text-zinc-400 text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          YOUR TIMELINE
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="text-center mb-12">
          <span className="badge-amber mb-4">Your Journey</span>
          <h2 className="heading-section text-white mb-4">Realistic Timeline to Mastery</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Here's exactly what to expect as you progress
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="relative flex items-start gap-6 pl-16">
                    {/* Timeline Node */}
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-dark-900 border-2 border-cyan-500 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 card-dark p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-cyan-400">{item.time}</span>
                        <span className="text-zinc-500">•</span>
                        <span className="font-display font-bold text-white">{item.title}</span>
                      </div>
                      <p className="text-zinc-400">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SUCCESS PRINCIPLES
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="card-dark p-8 md:p-12">
          <div className="text-center mb-10">
            <span className="badge-purple mb-4">Principles for Success</span>
            <h2 className="heading-section text-white">4 Rules to Learn By</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <span className="text-4xl font-display font-bold text-gradient-cyan">01</span>
              <h3 className="font-display font-bold text-white text-xl mt-2 mb-3">Start Small</h3>
              <p className="text-zinc-400">
                Don't try to build an entire app on day one. Start with a button. Then a card. Then a page. 
                Small wins build confidence and compound quickly.
              </p>
            </div>
            
            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <span className="text-4xl font-display font-bold text-gradient-pink">02</span>
              <h3 className="font-display font-bold text-white text-xl mt-2 mb-3">Learn by Doing</h3>
              <p className="text-zinc-400">
                Reading about Cursor won't teach you Cursor. You have to build things. 
                Every tutorial in this guide has hands-on exercises—do them.
              </p>
            </div>
            
            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <span className="text-4xl font-display font-bold text-gradient-cyan">03</span>
              <h3 className="font-display font-bold text-white text-xl mt-2 mb-3">Use AI Fearlessly</h3>
              <p className="text-zinc-400">
                AI is your patient, judgment-free mentor. Ask it anything. Ask it to explain. 
                Ask it to try again. There are no stupid questions.
              </p>
            </div>
            
            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <span className="text-4xl font-display font-bold text-gradient-pink">04</span>
              <h3 className="font-display font-bold text-white text-xl mt-2 mb-3">Embrace Iteration</h3>
              <p className="text-zinc-400">
                Your first attempt won't be perfect. That's not failure—that's the process. 
                Professional designers iterate 10-20 times on components. So will you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA - NEXT CHAPTER
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-purple-600 to-pink-600 opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/50" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          <div className="relative space-y-8">
            <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur rounded-full flex items-center justify-center">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                You understand why this matters. Now let's get Cursor installed and build your first component.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                to="/installation" 
                onClick={handleStartLearning}
                className="btn bg-white text-dark-950 hover:bg-zinc-100 text-lg shadow-2xl px-10 group"
              >
                <span className="font-bold">Continue to Chapter 2</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <p className="text-white/50 text-sm">
              Chapter 2: Getting Started with Cursor
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BeginnerGuide
