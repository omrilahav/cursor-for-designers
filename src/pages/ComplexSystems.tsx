import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Network, CheckCircle, Copy, Check, ArrowRight, Lightbulb,
  Zap, Target, Code, Layers, ChevronRight, Clock, Star,
  MessageSquare, Sparkles, GitBranch, Box, Database,
  Workflow, Component, FolderTree, Shield, Scale
} from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

const ComplexSystems = () => {
  const { completeLesson, completedLessons } = useProgress()
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const handleComplete = (id: string) => {
    completeLesson(`systems-${id}`, 'advanced')
  }

  const isComplete = (id: string) => completedLessons.some(l => l.id === `systems-${id}`)

  const systemPrinciples = [
    {
      title: 'Modularity',
      icon: Box,
      description: 'Break complex features into independent, reusable pieces',
      example: 'A dashboard isn\'t one component—it\'s cards, charts, tables, filters, each with their own logic'
    },
    {
      title: 'Hierarchy',
      icon: FolderTree,
      description: 'Organize from atoms to pages in a clear structure',
      example: 'Button → Card → CardList → Dashboard → DashboardPage'
    },
    {
      title: 'Consistency',
      icon: Scale,
      description: 'Same patterns everywhere, no special snowflakes',
      example: 'Every data table uses the same sorting, filtering, pagination components'
    },
    {
      title: 'Flexibility',
      icon: Component,
      description: 'Build components that adapt to different contexts',
      example: 'A Card component that works in grids, lists, modals, and sidebars'
    },
    {
      title: 'State Management',
      icon: Database,
      description: 'Clear data flow through the system',
      example: 'User selects filter → Updates state → All relevant components react'
    },
    {
      title: 'Error Resilience',
      icon: Shield,
      description: 'Systems fail gracefully, not catastrophically',
      example: 'If one chart fails to load, the rest of the dashboard still works'
    }
  ]

  const planningPrompt = `I'm designing [feature name] for [product type]. Help me plan the system architecture:

## CONTEXT
- This feature will: [describe what it does]
- Users: [who uses it]
- Existing system: [what's already built]
- Constraints: [technical, design, or business constraints]

## HELP ME PLAN

1. COMPONENT BREAKDOWN
   - What are all the components needed?
   - How do they relate to each other?
   - Which are new vs existing?

2. DATA FLOW
   - What data does each component need?
   - Where does the data come from?
   - How do components communicate?

3. STATE MANAGEMENT
   - What states exist? (loading, error, empty, success)
   - Where should state live?
   - How do state changes propagate?

4. EDGE CASES
   - What can go wrong?
   - How do we handle errors?
   - What are the boundary conditions?

5. INTEGRATION POINTS
   - How does this connect to existing features?
   - What dependencies exist?
   - What might break?

6. PHASED APPROACH
   - What's the MVP?
   - What can be added later?
   - What's the build order?

Be specific with component names and relationships.`

  const featureExampleSteps = [
    {
      phase: 'Phase 1: Foundation',
      description: 'Build the core infrastructure',
      components: ['UserSettingsLayout', 'SettingsNavigation', 'SettingsSection'],
      prompt: 'Create the foundation: layout component with sidebar navigation showing sections (Profile, Security, Notifications, Privacy), main content area, and a section wrapper component.'
    },
    {
      phase: 'Phase 2: Profile Section',
      description: 'User profile editing',
      components: ['ProfileSettings', 'AvatarUpload', 'ProfileForm'],
      prompt: 'Build ProfileSettings with avatar upload (with crop modal), display name editing, bio text area, and timezone selector. Use existing form components.'
    },
    {
      phase: 'Phase 3: Security Section',
      description: 'Account security features',
      components: ['SecuritySettings', 'PasswordChange', 'TwoFactorSetup', 'SessionList'],
      prompt: 'Create SecuritySettings with password change form, 2FA toggle with setup wizard, and a list of active sessions with ability to revoke.'
    },
    {
      phase: 'Phase 4: Notifications',
      description: 'Notification preferences',
      components: ['NotificationSettings', 'NotificationChannel', 'NotificationToggle'],
      prompt: 'Build notification preferences with toggles for email/push/in-app, grouped by type (Marketing, Updates, Security). Include a master toggle.'
    },
    {
      phase: 'Phase 5: Polish & Integration',
      description: 'Connect everything together',
      components: ['Breadcrumbs', 'UnsavedChangesWarning', 'SuccessToast'],
      prompt: 'Add navigation breadcrumbs, unsaved changes confirmation dialog, success/error toast notifications, and loading states for saves.'
    }
  ]

  const integrationChecklist = [
    'Does this use existing design tokens?',
    'Does it follow established component patterns?',
    'Is the naming consistent with the codebase?',
    'Does it handle all the same states as similar features?',
    'Will it work with the existing navigation?',
    'Does it match the performance expectations?',
    'Is it accessible to the same standards?',
    'Can it be localized/internationalized?'
  ]

  return (
    <div className="space-y-24 animate-fade-in">
      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-8">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="badge-pink mb-6">Master Level</span>
          
          <h1 className="heading-display text-white mb-8">
            Complex System<br />
            <span className="text-gradient-multi">Design Patterns</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Learn to design features that integrate into larger systems. 
            The difference between a prototype and production-ready design.
          </p>

          <div className="flex items-center justify-center gap-2 text-zinc-500">
            <Clock className="w-5 h-5" />
            <span>1 hour read</span>
            <span className="mx-2">•</span>
            <Star className="w-5 h-5 text-amber-400" />
            <span>Advanced</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE CHALLENGE
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="card-premium p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="badge-amber mb-4">The Challenge</span>
              <h2 className="heading-section text-white mb-4">Beyond Single Components</h2>
            </div>
            
            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                Building a button is easy. Building a <span className="text-white font-medium">settings page with 20 interconnected features</span> that 
                integrates with an existing dashboard, respects user permissions, syncs with a backend, and handles every edge case—that's complex system design.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6">
                  <h4 className="font-bold text-cyan-400 mb-3">Simple Design:</h4>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>• One component in isolation</li>
                    <li>• Static content</li>
                    <li>• Happy path only</li>
                    <li>• Works in a vacuum</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                  <h4 className="font-bold text-purple-400 mb-3">System Design:</h4>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>• Multiple interconnected components</li>
                    <li>• Dynamic data from APIs</li>
                    <li>• All states: loading, error, empty, success</li>
                    <li>• Integrates with existing features</li>
                  </ul>
                </div>
              </div>

              <p>
                This is where AI becomes invaluable—it can help you think through the complexity,
                plan the architecture, and build systematically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SYSTEM PRINCIPLES
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="text-center mb-12">
          <span className="badge-cyan mb-4">Foundations</span>
          <h2 className="heading-section text-white mb-4">6 Principles of System Design</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            The mental models that guide complex feature design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {systemPrinciples.map((principle, index) => {
            const Icon = principle.icon
            return (
              <div key={index} className="card-dark p-6 group hover:border-cyan-500/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-2">{principle.title}</h3>
                <p className="text-zinc-400 text-sm mb-3">{principle.description}</p>
                <div className="bg-dark-800/50 border border-white/5 rounded-lg p-3">
                  <p className="text-xs text-emerald-400">
                    <span className="text-zinc-500">Example: </span>
                    {principle.example}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PLANNING PROMPT
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="card-glow p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Workflow className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-display font-bold text-white text-2xl">The System Planning Prompt</h2>
              <p className="text-zinc-400">Use this before building any complex feature</p>
            </div>
          </div>

          <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-zinc-500">Planning Prompt</span>
              <button
                onClick={() => handleCopy(planningPrompt, 'planning')}
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {copiedCode === 'planning' ? (
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
            <pre className="text-sm text-emerald-400 whitespace-pre-wrap font-mono max-h-80 overflow-y-auto">
              {planningPrompt}
            </pre>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          REAL EXAMPLE
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="text-center mb-12">
          <span className="badge-amber mb-4">Real Example</span>
          <h2 className="heading-section text-white mb-4">Building a User Settings System</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            A step-by-step breakdown of designing a complex multi-section settings feature
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {featureExampleSteps.map((step, index) => (
            <div key={index} className="card-dark p-6 md:p-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-dark-950 font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-white text-xl mb-1">{step.phase}</h3>
                  <p className="text-zinc-400 mb-4">{step.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {step.components.map((comp, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400">
                        {comp}
                      </span>
                    ))}
                  </div>

                  <div className="bg-dark-800/50 border border-white/5 rounded-lg p-4">
                    <span className="text-xs text-zinc-500 mb-2 block">AI Prompt:</span>
                    <p className="text-sm text-emerald-400 font-mono">{step.prompt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          INTEGRATION CHECKLIST
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="card-dark p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-display font-bold text-white text-2xl">Integration Checklist</h2>
              <p className="text-zinc-400">Verify before shipping any feature</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {integrationChecklist.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-dark-800/50 border border-white/5 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-300">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mt-8">
            <p className="text-amber-400 text-sm">
              <strong>💡 Pro Tip:</strong> Ask AI to review your feature against this checklist before considering it done.
              "Review @SettingsPage.tsx against the integration checklist and identify any gaps."
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          EXERCISE
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="card-dark p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="badge-emerald mb-4">Capstone Exercise</span>
            <h2 className="heading-section text-white mb-4">Design a Complex Feature</h2>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-zinc-300 text-center mb-6">
              Put everything together by planning and building a multi-component feature:
            </p>

            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-white">Choose a complex feature</p>
                <p className="text-sm text-zinc-400">Examples: Notification center, Team management, Analytics dashboard, User onboarding</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-white">Use the planning prompt</p>
                <p className="text-sm text-zinc-400">Work with AI to break down components, data flow, and states</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-white">Build in phases</p>
                <p className="text-sm text-zinc-400">Start with foundation, add sections, integrate, polish</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold">4</span>
              </div>
              <div>
                <p className="font-medium text-white">Run the integration checklist</p>
                <p className="text-sm text-zinc-400">Verify everything works together and follows conventions</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold">5</span>
              </div>
              <div>
                <p className="font-medium text-white">Get multi-agent review</p>
                <p className="text-sm text-zinc-400">Use design, UX, and developer personas to validate the system</p>
              </div>
            </div>
          </div>

          {!isComplete('capstone') && (
            <button
              onClick={() => handleComplete('capstone')}
              className="btn-primary w-full"
            >
              <CheckCircle className="w-5 h-5" />
              <span>I Built a Complex Feature!</span>
            </button>
          )}

          {isComplete('capstone') && (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <p className="text-emerald-400 font-medium text-xl">🎉 Congratulations! You've mastered complex system design!</p>
              <p className="text-zinc-400 mt-2">You're now equipped to design enterprise-grade features.</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-cyan-600 to-purple-600 opacity-90" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          <div className="relative space-y-8">
            <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur rounded-full flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                You've Completed the Advanced Path!
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                From basic components to complex systems, you now have the skills to design and build 
                enterprise-grade products with AI as your partner.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                to="/progress" 
                className="btn bg-white text-dark-950 hover:bg-zinc-100 text-lg shadow-2xl px-10 group"
              >
                <span className="font-bold">View Your Progress</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/" 
                className="btn-secondary border-white/30 text-white hover:bg-white/10"
              >
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComplexSystems

