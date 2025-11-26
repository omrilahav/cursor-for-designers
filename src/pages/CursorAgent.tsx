import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Bot, MessageSquare, Edit3, Wand2, CheckCircle, Lightbulb, 
  Zap, FileCode, ArrowRight, Play, Star, Clock, ChevronRight,
  Target, Users, Sparkles, Code, Layers, Eye, Palette,
  Terminal, GitBranch, Rocket, Copy, Check, Bug, Cpu, Image
} from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

const CursorAgent = () => {
  const { completeLesson, completedLessons } = useProgress()
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null)

  const handleComplete = (id: string) => {
    completeLesson(`agent-${id}`, 'training')
  }

  const isComplete = (id: string) => completedLessons.some(l => l.id === `agent-${id}`)

  const copyPrompt = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedPrompt(id)
    setTimeout(() => setCopiedPrompt(null), 2000)
  }

  const aiModes = [
    {
      id: 'chat',
      name: 'Chat',
      shortcut: '⌘L',
      icon: MessageSquare,
      color: 'purple',
      tagline: 'Your AI pair programmer',
      description: 'Have conversations, ask questions, plan your approach, debug issues together.',
      bestFor: [
        'Asking "how do I..." questions',
        'Getting code explanations',
        'Planning before building',
        'Debugging with context',
        'Learning new concepts'
      ],
      notIdeal: [
        'Making actual code changes',
        'Quick edits while coding',
        'Multi-file operations'
      ],
      example: {
        prompt: 'I want to build a dashboard with a sidebar navigation, main content area with data cards, and a header with user info. How should I structure the components?',
        response: 'Great question! Let me help you plan this out...'
      }
    },
    {
      id: 'composer',
      name: 'Composer',
      shortcut: '⌘I',
      icon: Bot,
      color: 'cyan',
      tagline: 'The multi-file powerhouse',
      description: 'Build entire features, create multiple files, run terminal commands. Toggle "Agent" mode for autonomous operation.',
      bestFor: [
        'Building complete features',
        'Creating multiple files at once',
        'Running terminal commands',
        'Complex multi-step tasks',
        'Project-wide changes'
      ],
      notIdeal: [
        'Quick single-line edits',
        'Questions and explanations',
        'Staying in flow state'
      ],
      example: {
        prompt: 'Create a complete user profile page with: 1) ProfileHeader component (avatar, name, bio, edit button) 2) ProfileStats component (followers, following, posts counts) 3) ProfileTabs component (posts, likes, bookmarks tabs) 4) Add them all to a ProfilePage that combines them. Use my design tokens from @design-tokens.ts',
        response: 'I\'ll create these components for you. Here\'s my plan...'
      }
    },
    {
      id: 'inline',
      name: 'Inline Edit',
      shortcut: '⌘K',
      icon: Edit3,
      color: 'emerald',
      tagline: 'Quick and focused',
      description: 'Generate or modify code exactly where your cursor is. Stay in flow, iterate fast.',
      bestFor: [
        'Adding a single function',
        'Modifying specific code',
        'Quick iterations',
        'Staying in flow state',
        'Small, precise changes'
      ],
      notIdeal: [
        'Creating multiple files',
        'Complex multi-step features',
        'Getting explanations'
      ],
      example: {
        prompt: 'add a hover effect that scales up 5% and adds a subtle shadow',
        response: '[Code appears inline, ready to accept with Tab]'
      }
    }
  ]

  const advancedFeatures = [
    {
      id: 'agent-mode',
      name: 'Agent Mode',
      icon: Cpu,
      color: 'pink',
      description: 'Toggle in Composer for autonomous file operations',
      details: 'When enabled, AI can browse your codebase, create/edit files, and run commands without asking permission for each step. Perfect for larger tasks where you want AI to take initiative.',
      howTo: 'In Composer (⌘I), click the toggle at the bottom to enable Agent mode before sending your prompt.'
    },
    {
      id: 'bug-finder',
      name: 'Bug Finder',
      icon: Bug,
      color: 'amber',
      description: 'Automatically detect issues in your code',
      details: 'Ask AI to scan your code for bugs, accessibility issues, or potential problems. It understands your entire project context.',
      howTo: 'In Chat, type: "Review @ComponentName.tsx for bugs, accessibility issues, and potential improvements"'
    },
    {
      id: 'image-context',
      name: 'Image Understanding',
      icon: Image,
      color: 'emerald',
      description: 'Paste screenshots and mockups directly',
      details: 'Paste screenshots, Figma exports, or design mockups directly into Chat. AI analyzes the image and can generate matching code!',
      howTo: 'Simply ⌘V a screenshot in Chat, then say "Recreate this design in React with Tailwind"'
    }
  ]

  const designerPrompts = [
    {
      category: 'Component Building',
      icon: Layers,
      prompts: [
        {
          title: 'Create a Card Component',
          prompt: 'Create a [type] card component with [elements: image, title, description, CTA button]. Make it [style: modern, minimalist, playful]. Include hover effects, responsive design, and use Tailwind CSS.',
          fill: ['product', 'image at top, product name, price, rating stars, add to cart button', 'modern with subtle shadows']
        },
        {
          title: 'Build a Form',
          prompt: 'Create a [type] form with [fields]. Include validation, error states, loading state on submit, and success feedback. Make it accessible with proper labels and ARIA attributes.',
          fill: ['signup', 'email, password, confirm password, terms checkbox', 'clean and minimal']
        },
        {
          title: 'Navigation Component',
          prompt: 'Build a [type] navigation with [items]. Include mobile responsive behavior with hamburger menu, active states, and smooth transitions. Support for [features].',
          fill: ['header', 'logo, Home, Products, About, Contact, CTA button', 'dropdown submenus and search']
        }
      ]
    },
    {
      category: 'Design Systems',
      icon: Palette,
      prompts: [
        {
          title: 'Create Design Tokens',
          prompt: 'Create a design-tokens.ts file with: color palette (primary, secondary, neutral, success, warning, error with shades), typography scale (sizes, weights, line heights), spacing scale (8px base), border radius values, and shadow definitions. Use TypeScript.',
          fill: []
        },
        {
          title: 'Button System',
          prompt: 'Create a Button component with variants (primary, secondary, outline, ghost), sizes (sm, md, lg), states (default, hover, active, disabled, loading). Use design tokens from @design-tokens.ts. Include TypeScript props interface.',
          fill: []
        },
        {
          title: 'Component Documentation',
          prompt: 'Create comprehensive documentation for @[component] including: purpose, usage examples with code, all props with types, all variants and states, design specifications, and accessibility features. Format in Markdown.',
          fill: ['Button.tsx']
        }
      ]
    },
    {
      category: 'Interactions & Animation',
      icon: Zap,
      prompts: [
        {
          title: 'Page Transitions',
          prompt: 'Add smooth page entry animations: header slides down and fades in, main content fades up with stagger delay on children, sidebar slides in from left. Use CSS animations with @keyframes, 300ms duration, ease-out timing.',
          fill: []
        },
        {
          title: 'Micro-interactions',
          prompt: 'Add micro-interactions to this button: scale down slightly on click, ripple effect from click point, icon rotates on hover, smooth color transition. Keep it subtle and professional.',
          fill: []
        },
        {
          title: 'Loading States',
          prompt: 'Create loading states for: 1) skeleton loader for cards (pulsing gray shapes), 2) spinner for buttons, 3) progress bar for uploads, 4) shimmer effect for images. Make them reusable components.',
          fill: []
        }
      ]
    },
    {
      category: 'Responsive & Layout',
      icon: Eye,
      prompts: [
        {
          title: 'Responsive Grid',
          prompt: 'Make this component responsive: single column on mobile (<640px), 2 columns on tablet (640-1024px), 3 columns on desktop (>1024px). Add appropriate gap spacing and ensure touch targets are at least 44px on mobile.',
          fill: []
        },
        {
          title: 'Dashboard Layout',
          prompt: 'Create a dashboard layout with: collapsible sidebar (icons only when collapsed), sticky header with search and user menu, main content area with grid of cards. Sidebar should be hidden on mobile with hamburger toggle.',
          fill: []
        },
        {
          title: 'Hero Section',
          prompt: 'Build a hero section with: large headline, supporting text, primary and secondary CTA buttons, background gradient or image with overlay. Text should resize elegantly across breakpoints. Include subtle floating animation.',
          fill: []
        }
      ]
    }
  ]

  const workflowExample = {
    title: 'Real-World Workflow: Building a Feature',
    steps: [
      {
        mode: 'Chat',
        action: 'Plan the approach',
        prompt: 'I need to build a user settings page with sections for profile, notifications, privacy, and account. How should I structure this? What components do I need?',
        why: 'Start with Chat to think through the architecture before writing code'
      },
      {
        mode: 'Agent',
        action: 'Build the structure',
        prompt: 'Create the user settings feature: 1) SettingsLayout with sidebar navigation showing sections 2) SettingsSection wrapper component 3) ProfileSettings, NotificationSettings, PrivacySettings, AccountSettings components 4) Put them all in a SettingsPage. Use @design-tokens.ts for styling.',
        why: 'Agent creates multiple files at once, following your plan'
      },
      {
        mode: 'Inline',
        action: 'Polish and iterate',
        prompt: 'add a smooth slide transition when switching between sections',
        why: 'Quick refinements without leaving your flow'
      },
      {
        mode: 'Chat',
        action: 'Debug if needed',
        prompt: '@SettingsPage.tsx the sidebar nav isn\'t highlighting the active section. Can you help me fix this?',
        why: 'Back to Chat when you need to understand and debug issues'
      }
    ]
  }

  const colorClasses = {
    cyan: { bg: 'bg-cyan-500', light: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400' },
    purple: { bg: 'bg-purple-500', light: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
    emerald: { bg: 'bg-emerald-500', light: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400' },
    pink: { bg: 'bg-pink-500', light: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400' },
    amber: { bg: 'bg-amber-500', light: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' }
  }

  return (
    <div className="space-y-24 animate-fade-in">
      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-8">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="badge-pink mb-6">Chapter 3</span>
          
          <h1 className="heading-display text-white mb-8">
            Mastering the<br />
            <span className="text-gradient-multi">Three AI Modes</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Chat, Agent, and Inline—three tools, each perfect for different moments. Learn when to use each and watch your productivity multiply.
          </p>

          <div className="flex items-center justify-center gap-2 text-zinc-500">
            <Clock className="w-5 h-5" />
            <span>45 minute read + exercises</span>
            <span className="mx-2">•</span>
            <Star className="w-5 h-5 text-amber-400" />
            <span>Core Skills</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE THREE MODES
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="text-center mb-12">
          <span className="badge-cyan mb-4">The Foundation</span>
          <h2 className="heading-section text-white mb-4">Three Modes, Three Superpowers</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Each mode is designed for specific situations. Master all three to unlock your full potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {aiModes.map((mode) => {
            const Icon = mode.icon
            const colors = colorClasses[mode.color as keyof typeof colorClasses]
            
            return (
              <div key={mode.id} className="card-glow p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-2xl">{mode.name}</h3>
                    <kbd className={`text-xs px-2 py-1 rounded ${colors.light} ${colors.text}`}>{mode.shortcut}</kbd>
                  </div>
                </div>

                <p className={`${colors.text} font-medium mb-3`}>{mode.tagline}</p>
                <p className="text-zinc-400 text-sm mb-6">{mode.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-2">Best For</h4>
                    <div className="space-y-1">
                      {mode.bestFor.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span className="text-sm text-zinc-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-2">Not Ideal For</h4>
                    <div className="space-y-1">
                      {mode.notIdeal.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-4 h-4 flex items-center justify-center text-zinc-500">—</span>
                          <span className="text-sm text-zinc-500">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WORKFLOW EXAMPLE
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="card-premium p-8 md:p-12 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="badge-purple mb-4">Real-World Example</span>
            <h2 className="heading-section text-white mb-4">{workflowExample.title}</h2>
            <p className="text-xl text-zinc-400">
              Watch how the three modes work together in a real design task
            </p>
          </div>

          <div className="space-y-6">
            {workflowExample.steps.map((step, index) => {
              const mode = aiModes.find(m => m.name === step.mode)
              const colors = mode ? colorClasses[mode.color as keyof typeof colorClasses] : colorClasses.cyan
              const Icon = mode?.icon || MessageSquare

              return (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline */}
                  {index < workflowExample.steps.length - 1 && (
                    <div className="absolute left-7 top-16 w-0.5 h-full bg-gradient-to-b from-white/20 to-transparent" />
                  )}

                  {/* Step Number */}
                  <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center flex-shrink-0 z-10`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-dark-800/50 border border-white/5 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-sm font-bold ${colors.text}`}>{step.mode}</span>
                      <span className="text-zinc-500">→</span>
                      <span className="font-medium text-white">{step.action}</span>
                    </div>
                    
                    <div className="bg-dark-900 rounded-lg p-4 mb-3">
                      <p className="text-sm text-emerald-400 font-mono">{step.prompt}</p>
                    </div>
                    
                    <p className="text-sm text-zinc-500">
                      <span className="text-amber-400">Why:</span> {step.why}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DESIGNER PROMPTS LIBRARY
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="text-center mb-12">
          <span className="badge-amber mb-4">Prompt Library</span>
          <h2 className="heading-section text-white mb-4">Designer-Ready Prompts</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Copy these prompts and customize them for your needs. Each is battle-tested for design work.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {designerPrompts.map((category, catIndex) => {
            const Icon = category.icon
            
            return (
              <div key={catIndex} className="card-dark p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-white text-xl">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.prompts.map((prompt, promptIndex) => (
                    <div key={promptIndex} className="bg-dark-800/50 border border-white/5 rounded-xl p-5">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-white">{prompt.title}</h4>
                        <button
                          onClick={() => copyPrompt(prompt.prompt, `${catIndex}-${promptIndex}`)}
                          className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {copiedPrompt === `${catIndex}-${promptIndex}` ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-sm text-zinc-400 font-mono bg-dark-900 rounded-lg p-4">
                        {prompt.prompt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ADVANCED FEATURES
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="text-center mb-12">
          <span className="badge-pink mb-4">Power Features</span>
          <h2 className="heading-section text-white mb-4">Advanced AI Capabilities</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Go beyond basic prompting with these powerful features
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {advancedFeatures.map((feature) => {
            const Icon = feature.icon
            const colors = colorClasses[feature.color as keyof typeof colorClasses]
            
            return (
              <div key={feature.id} className={`card-dark p-6 ${colors.border} border`}>
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`font-display font-bold text-white text-lg mb-2`}>{feature.name}</h3>
                <p className={`${colors.text} text-sm mb-3`}>{feature.description}</p>
                <p className="text-zinc-400 text-sm mb-4">{feature.details}</p>
                <div className="bg-dark-800/50 rounded-lg p-3">
                  <span className="text-xs text-zinc-500 block mb-1">How to use:</span>
                  <p className="text-xs text-emerald-400">{feature.howTo}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          @ MENTIONS
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="card-glow p-8 md:p-12 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="badge-cyan mb-4">Context Mastery</span>
            <h2 className="heading-section text-white mb-4">The Power of @ Mentions</h2>
            <p className="text-xl text-zinc-400">
              Give AI the context it needs for dramatically better results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-dark-800/50 border border-cyan-500/30 rounded-xl p-5">
              <h4 className="font-bold text-cyan-400 mb-2">@file</h4>
              <p className="text-xs text-zinc-500 mb-2">Reference a specific file</p>
              <div className="bg-dark-900 rounded-lg p-2">
                <code className="text-xs text-emerald-400">@Button.tsx add loading</code>
              </div>
            </div>

            <div className="bg-dark-800/50 border border-purple-500/30 rounded-xl p-5">
              <h4 className="font-bold text-purple-400 mb-2">@folder</h4>
              <p className="text-xs text-zinc-500 mb-2">Include folder context</p>
              <div className="bg-dark-900 rounded-lg p-2">
                <code className="text-xs text-emerald-400">@components/ audit styles</code>
              </div>
            </div>

            <div className="bg-dark-800/50 border border-pink-500/30 rounded-xl p-5">
              <h4 className="font-bold text-pink-400 mb-2">@codebase</h4>
              <p className="text-xs text-zinc-500 mb-2">Search entire project</p>
              <div className="bg-dark-900 rounded-lg p-2">
                <code className="text-xs text-emerald-400">@codebase find auth logic</code>
              </div>
            </div>

            <div className="bg-dark-800/50 border border-amber-500/30 rounded-xl p-5">
              <h4 className="font-bold text-amber-400 mb-2">@docs</h4>
              <p className="text-xs text-zinc-500 mb-2">Search documentation</p>
              <div className="bg-dark-900 rounded-lg p-2">
                <code className="text-xs text-emerald-400">@docs react useEffect</code>
              </div>
            </div>

            <div className="bg-dark-800/50 border border-emerald-500/30 rounded-xl p-5">
              <h4 className="font-bold text-emerald-400 mb-2">@web</h4>
              <p className="text-xs text-zinc-500 mb-2">Search the internet</p>
              <div className="bg-dark-900 rounded-lg p-2">
                <code className="text-xs text-emerald-400">@web latest tailwind v4</code>
              </div>
            </div>

            <div className="bg-dark-800/50 border border-blue-500/30 rounded-xl p-5">
              <h4 className="font-bold text-blue-400 mb-2">@git</h4>
              <p className="text-xs text-zinc-500 mb-2">Reference git history</p>
              <div className="bg-dark-900 rounded-lg p-2">
                <code className="text-xs text-emerald-400">@git what changed today</code>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-5">
              <p className="text-cyan-400 text-sm">
                <strong>💡 Designer Pro Tip:</strong> Always @ your design-tokens file when building components. AI will use your colors and spacing automatically!
              </p>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5">
              <p className="text-purple-400 text-sm">
                <strong>🎨 Image Tip:</strong> Paste screenshots directly into Chat! AI can analyze designs and recreate them in code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          EXERCISE
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="card-dark p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="badge-emerald mb-4">Hands-On Exercise</span>
            <h2 className="heading-section text-white mb-4">Try It Yourself</h2>
            <p className="text-xl text-zinc-400">
              Practice using all three modes to build a feature
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <h4 className="font-bold text-white mb-4">Build a Pricing Card Component</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-purple-400 mb-1">1. Start with Chat</p>
                    <p className="text-sm text-zinc-400">Ask: "What should a good pricing card include? What makes them effective?"</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-cyan-400 mb-1">2. Build with Agent</p>
                    <p className="text-sm text-zinc-400">Create the full component with plan name, price, features list, and CTA button</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Edit3 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-emerald-400 mb-1">3. Polish with Inline</p>
                    <p className="text-sm text-zinc-400">Add hover effects, a "popular" badge, and make the featured plan stand out</p>
                  </div>
                </div>
              </div>
            </div>

            {!isComplete('exercise') && (
              <button
                onClick={() => handleComplete('exercise')}
                className="btn-primary w-full"
              >
                <CheckCircle className="w-5 h-5" />
                <span>I Completed the Exercise!</span>
              </button>
            )}

            {isComplete('exercise') && (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 text-center">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <p className="text-emerald-400 font-medium">Excellent! You're mastering the AI modes!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-purple-600 to-pink-600 opacity-90" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          <div className="relative space-y-8">
            <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur rounded-full flex items-center justify-center">
              <Palette className="w-10 h-10 text-white" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                Ready to Design with AI?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Now that you know the AI modes, let's put them to work building real design components and prototypes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                to="/design-to-prototype" 
                className="btn bg-white text-dark-950 hover:bg-zinc-100 text-lg shadow-2xl px-10 group"
              >
                <span className="font-bold">Continue to Chapter 4</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <p className="text-white/50 text-sm">
              Chapter 4: Design to Code Workflow
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CursorAgent
