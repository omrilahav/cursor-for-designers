import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Users, Bot, CheckCircle, Copy, Check, ArrowRight, Lightbulb,
  Zap, Target, Code, Layers, ChevronRight, Clock, Star,
  MessageSquare, Sparkles, Shield, GitBranch, Play, Eye,
  UserCheck, Palette, FileSearch, TestTube, Megaphone
} from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

const AgentTeams = () => {
  const { completeLesson, completedLessons } = useProgress()
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [activePersona, setActivePersona] = useState(0)

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const handleComplete = (id: string) => {
    completeLesson(`teams-${id}`, 'advanced')
  }

  const isComplete = (id: string) => completedLessons.some(l => l.id === `teams-${id}`)

  const personas = [
    {
      id: 'designer',
      name: 'Design Lead',
      icon: Palette,
      color: 'pink',
      description: 'Reviews aesthetic decisions, ensures design system compliance',
      prompt: `You are a Senior Product Designer reviewing this work. Analyze it from a pure design perspective:

- Visual hierarchy: Is the most important content emphasized?
- Spacing & rhythm: Does it follow an 8px grid? Is whitespace used effectively?
- Typography: Are font sizes, weights, and line heights appropriate?
- Color usage: Is there good contrast? Do colors convey meaning?
- Consistency: Does it match our design system patterns?
- Polish: Are there any visual inconsistencies or rough edges?

Provide specific, actionable feedback with examples of how to improve.`
    },
    {
      id: 'ux',
      name: 'UX Researcher',
      icon: UserCheck,
      color: 'purple',
      description: 'Evaluates user experience, accessibility, usability',
      prompt: `You are a UX Researcher evaluating this interface. Analyze from a user perspective:

- Usability: Can users accomplish their goals easily?
- Accessibility: WCAG AA compliance? Keyboard navigation? Screen reader support?
- Cognitive load: Is there too much information at once?
- User flow: Is the interaction pattern intuitive?
- Error prevention: Are there safeguards against mistakes?
- Mobile experience: How does it work on touch devices?

Provide feedback with severity levels (critical, major, minor) and specific recommendations.`
    },
    {
      id: 'developer',
      name: 'Senior Developer',
      icon: Code,
      color: 'cyan',
      description: 'Reviews code quality, performance, best practices',
      prompt: `You are a Senior Frontend Developer reviewing this code. Evaluate:

- Code quality: Is it clean, readable, maintainable?
- Performance: Any obvious bottlenecks? Unnecessary re-renders?
- TypeScript: Are types properly defined? Any 'any' types to fix?
- React patterns: Proper use of hooks, components, state management?
- Accessibility: Semantic HTML? ARIA attributes where needed?
- Edge cases: Error handling? Loading states? Empty states?

Provide specific code suggestions with examples.`
    },
    {
      id: 'pm',
      name: 'Product Manager',
      icon: Target,
      color: 'amber',
      description: 'Evaluates feature completeness, user value, business goals',
      prompt: `You are a Product Manager reviewing this feature. Evaluate from a product perspective:

- User value: Does this solve the user's problem effectively?
- Feature completeness: Are there missing edge cases or scenarios?
- Business alignment: Does it support our product goals?
- Scalability: Will this approach work as the product grows?
- MVP scope: Is this the right scope or should we reduce/expand?
- Success metrics: How will we measure if this works?

Provide strategic feedback with priority levels.`
    },
    {
      id: 'user',
      name: 'Test User',
      icon: TestTube,
      color: 'emerald',
      description: 'Simulates real user interaction and feedback',
      prompt: `You are a first-time user encountering this interface. React naturally as a real user would:

- First impressions: What catches your eye? What's confusing?
- Task completion: Try to accomplish the main task. Where do you get stuck?
- Emotional response: How does using this make you feel?
- Expectations: What did you expect to happen vs what actually happened?
- Comparison: How does this compare to similar products you've used?
- Suggestions: What would make this easier or more enjoyable?

Provide authentic user feedback with specific examples of confusion or delight.`
    }
  ]

  const workflowExample = {
    title: 'Multi-Agent Design Review',
    steps: [
      {
        agent: 'Design Lead',
        action: 'Visual Review',
        prompt: '@Dashboard.tsx Acting as a Senior Product Designer, review this dashboard component for visual design quality, spacing consistency, and design system compliance.',
        output: 'The card shadows are inconsistent - use shadow-md uniformly. The heading hierarchy jumps from h2 to h4. Consider adding more whitespace between sections (32px instead of 16px).'
      },
      {
        agent: 'UX Researcher',
        action: 'Usability Audit',
        prompt: '@Dashboard.tsx Acting as a UX Researcher, evaluate this dashboard for usability issues, accessibility problems, and user experience concerns.',
        output: 'Critical: The interactive cards lack focus indicators for keyboard users. Major: No loading states shown. Minor: Consider adding empty state messaging.'
      },
      {
        agent: 'Developer',
        action: 'Code Review',
        prompt: '@Dashboard.tsx Acting as a Senior Developer, review this code for React best practices, performance issues, and TypeScript improvements.',
        output: 'The data fetching should use useMemo to prevent re-computation. Missing error boundary. Add proper TypeScript interfaces instead of inline types.'
      },
      {
        agent: 'Synthesize',
        action: 'Combine Feedback',
        prompt: 'Based on the design, UX, and code reviews above, create a prioritized action plan with the most impactful improvements first.',
        output: 'Priority 1: Add focus indicators (accessibility). Priority 2: Implement loading states. Priority 3: Standardize shadows and spacing...'
      }
    ]
  }

  const colorClasses = {
    pink: { bg: 'bg-pink-500', light: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400' },
    purple: { bg: 'bg-purple-500', light: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
    cyan: { bg: 'bg-cyan-500', light: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400' },
    amber: { bg: 'bg-amber-500', light: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
    emerald: { bg: 'bg-emerald-500', light: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400' }
  }

  return (
    <div className="space-y-24 animate-fade-in">
      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-8">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="badge-purple mb-6">Advanced Technique</span>
          
          <h1 className="heading-display text-white mb-8">
            Building AI<br />
            <span className="text-gradient-multi">Agent Teams</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Orchestrate multiple AI personas—designers, developers, PMs, users—to validate 
            your work from every angle before shipping.
          </p>

          <div className="flex items-center justify-center gap-2 text-zinc-500">
            <Clock className="w-5 h-5" />
            <span>45 minute read + exercises</span>
            <span className="mx-2">•</span>
            <Star className="w-5 h-5 text-amber-400" />
            <span>Pro Technique</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE CONCEPT
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="card-premium p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="badge-cyan mb-4">The Concept</span>
              <h2 className="heading-section text-white mb-4">One AI, Many Perspectives</h2>
            </div>
            
            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                Here's a powerful secret: <span className="text-white font-medium">you can ask AI to roleplay as different team members</span>, 
                each with their own expertise and perspective. This gives you the equivalent of a full design review process—without needing an actual team.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="bg-dark-800/50 border border-white/5 rounded-xl p-5 text-center">
                  <Palette className="w-10 h-10 text-pink-400 mx-auto mb-3" />
                  <h4 className="font-bold text-white mb-1">Design Review</h4>
                  <p className="text-sm text-zinc-500">Visual polish, consistency, aesthetics</p>
                </div>
                <div className="bg-dark-800/50 border border-white/5 rounded-xl p-5 text-center">
                  <UserCheck className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                  <h4 className="font-bold text-white mb-1">UX Audit</h4>
                  <p className="text-sm text-zinc-500">Usability, accessibility, flows</p>
                </div>
                <div className="bg-dark-800/50 border border-white/5 rounded-xl p-5 text-center">
                  <Code className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                  <h4 className="font-bold text-white mb-1">Code Review</h4>
                  <p className="text-sm text-zinc-500">Quality, patterns, performance</p>
                </div>
              </div>

              <p>
                By running your work through multiple "agents," you catch issues from different angles—the same way 
                a real cross-functional team would. Except it takes 5 minutes instead of scheduling 5 meetings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE PERSONAS
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="text-center mb-12">
          <span className="badge-pink mb-4">Your Team</span>
          <h2 className="heading-section text-white mb-4">5 Essential AI Personas</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Click each persona to see their system prompt
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Persona Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {personas.map((persona, index) => {
              const Icon = persona.icon
              const colors = colorClasses[persona.color as keyof typeof colorClasses]
              const isActive = activePersona === index
              
              return (
                <button
                  key={persona.id}
                  onClick={() => setActivePersona(index)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? `${colors.bg} text-dark-950` 
                      : 'bg-dark-800/50 border border-white/5 text-zinc-400 hover:border-white/20'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-dark-950' : ''}`} />
                  <span className="font-medium">{persona.name}</span>
                </button>
              )
            })}
          </div>

          {/* Active Persona Detail */}
          {(() => {
            const persona = personas[activePersona]
            const Icon = persona.icon
            const colors = colorClasses[persona.color as keyof typeof colorClasses]
            
            return (
              <div className={`card-glow p-8 ${colors.border} border-2`}>
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-8 h-8 text-dark-950" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-2xl mb-1">{persona.name}</h3>
                    <p className={`${colors.text}`}>{persona.description}</p>
                  </div>
                </div>

                <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-zinc-500">System Prompt</span>
                    <button
                      onClick={() => handleCopy(persona.prompt, persona.id)}
                      className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {copiedCode === persona.id ? (
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
                  <pre className="text-sm text-zinc-300 whitespace-pre-wrap font-mono">
                    {persona.prompt}
                  </pre>
                </div>
              </div>
            )
          })()}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WORKFLOW EXAMPLE
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="text-center mb-12">
          <span className="badge-amber mb-4">In Practice</span>
          <h2 className="heading-section text-white mb-4">{workflowExample.title}</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            How to run a complete multi-perspective review in 4 steps
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {workflowExample.steps.map((step, index) => (
            <div key={index} className="card-glow p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <span className="text-sm text-cyan-400 font-medium">{step.agent}</span>
                  <h4 className="font-bold text-white">{step.action}</h4>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-dark-800/50 border border-white/5 rounded-lg p-4">
                  <span className="text-xs text-zinc-500 mb-2 block">Prompt:</span>
                  <p className="text-sm text-emerald-400 font-mono">{step.prompt}</p>
                </div>
                
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                  <span className="text-xs text-cyan-500 mb-2 block">Output:</span>
                  <p className="text-sm text-zinc-300">{step.output}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ADVANCED PATTERNS
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="card-dark p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-display font-bold text-white text-2xl">Advanced Patterns</h2>
              <p className="text-zinc-400">Take agent teams to the next level</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <h4 className="font-bold text-pink-400 mb-2">🎭 Debate Pattern</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Have two agents with opposing views debate a design decision. Great for exploring tradeoffs.
              </p>
              <div className="bg-dark-900 rounded-lg p-4 text-sm text-emerald-400 font-mono">
                Agent A (Minimalist): Argues for simpler, cleaner approach<br/>
                Agent B (Feature-Rich): Argues for more comprehensive solution<br/>
                Synthesis: Identify the best elements from both perspectives
              </div>
            </div>

            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <h4 className="font-bold text-cyan-400 mb-2">🔄 Iterative Refinement</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Run the same persona multiple times, each iteration building on the previous feedback.
              </p>
              <div className="bg-dark-900 rounded-lg p-4 text-sm text-emerald-400 font-mono">
                Round 1: Identify all issues<br/>
                Round 2: Fix issues, get re-review<br/>
                Round 3: Polish and final approval
              </div>
            </div>

            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <h4 className="font-bold text-amber-400 mb-2">👥 Stakeholder Simulation</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Create personas representing real stakeholders: CEO, marketing, sales, support.
              </p>
              <div className="bg-dark-900 rounded-lg p-4 text-sm text-emerald-400 font-mono">
                CEO: "Does this align with our strategic vision?"<br/>
                Marketing: "Can we use this in campaigns?"<br/>
                Support: "Will users understand this without help?"
              </div>
            </div>

            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <h4 className="font-bold text-emerald-400 mb-2">🌍 User Persona Simulation</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Create multiple user personas based on your actual user research.
              </p>
              <div className="bg-dark-900 rounded-lg p-4 text-sm text-emerald-400 font-mono">
                Persona: "Senior executive, limited tech knowledge, values efficiency"<br/>
                Persona: "Power user, wants advanced features, dislikes hand-holding"<br/>
                Persona: "First-time user, nervous about making mistakes"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          EXERCISE
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="card-dark p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="badge-emerald mb-4">Hands-On Exercise</span>
            <h2 className="heading-section text-white mb-4">Run Your First Multi-Agent Review</h2>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-white">Pick a component you've built</p>
                <p className="text-sm text-zinc-400">Or use one from this tutorial site</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-white">Run 3 different persona reviews</p>
                <p className="text-sm text-zinc-400">Copy the prompts above, adapt them for your component</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-white">Synthesize the feedback</p>
                <p className="text-sm text-zinc-400">Create a prioritized list of improvements</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold">4</span>
              </div>
              <div>
                <p className="font-medium text-white">Implement the top 3 improvements</p>
                <p className="text-sm text-zinc-400">Then run the reviews again to validate</p>
              </div>
            </div>
          </div>

          {!isComplete('multi-review') && (
            <button
              onClick={() => handleComplete('multi-review')}
              className="btn-primary w-full"
            >
              <CheckCircle className="w-5 h-5" />
              <span>I Completed a Multi-Agent Review!</span>
            </button>
          )}

          {isComplete('multi-review') && (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <p className="text-emerald-400 font-medium">Amazing! You're orchestrating AI like a pro!</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 opacity-90" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          <div className="relative space-y-8">
            <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur rounded-full flex items-center justify-center">
              <FileSearch className="w-10 h-10 text-white" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                Ready for Research & Discovery?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Learn how to use AI agents for comprehensive research before you start designing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                to="/research-discovery" 
                className="btn bg-white text-dark-950 hover:bg-zinc-100 text-lg shadow-2xl px-10 group"
              >
                <span className="font-bold">Learn Research with AI</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AgentTeams

