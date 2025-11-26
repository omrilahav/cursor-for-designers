import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, CheckCircle, Copy, Check, ArrowRight, Lightbulb,
  Zap, Target, Code, Layers, ChevronRight, Clock, Star,
  MessageSquare, Sparkles, FileSearch, Globe, Users,
  BarChart3, BookOpen, Compass, Map, FileText, Brain
} from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

const ResearchDiscovery = () => {
  const { completeLesson, completedLessons } = useProgress()
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const handleComplete = (id: string) => {
    completeLesson(`research-${id}`, 'advanced')
  }

  const isComplete = (id: string) => completedLessons.some(l => l.id === `research-${id}`)

  const researchPhases = [
    {
      phase: 'Competitive Analysis',
      icon: Globe,
      color: 'cyan',
      description: 'Understand what exists in the market',
      prompts: [
        {
          title: 'Landscape Overview',
          prompt: `I'm designing a [type of product]. Help me understand the competitive landscape:

1. Who are the top 5-10 competitors in this space?
2. For each, what are their key design patterns and UX approaches?
3. What are the common design conventions users expect?
4. What are the biggest UX complaints users have about existing solutions?
5. What opportunities exist for differentiation?

Focus on design and UX aspects, not business strategy.`
        },
        {
          title: 'Feature Deep-Dive',
          prompt: `I'm designing [specific feature]. Analyze how competitors handle this:

1. Which products have the best implementation of this feature?
2. What UI patterns do they use?
3. What's the typical user flow?
4. What are the edge cases they handle?
5. What design decisions have they made and why?
6. What are users complaining about?

Provide specific, actionable design insights.`
        }
      ]
    },
    {
      phase: 'User Research',
      icon: Users,
      color: 'purple',
      description: 'Understand your users deeply',
      prompts: [
        {
          title: 'User Persona Generation',
          prompt: `Help me create user personas for [product/feature]:

For each persona, include:
- Demographics and context
- Goals and motivations
- Pain points and frustrations
- Technical proficiency level
- How they currently solve this problem
- What would make them switch to a new solution
- Design implications (what they need from the interface)

Create 3 distinct personas representing different user segments.`
        },
        {
          title: 'Jobs-to-be-Done Analysis',
          prompt: `Analyze the jobs-to-be-done for [product/feature]:

1. What functional jobs are users trying to accomplish?
2. What emotional jobs (how they want to feel)?
3. What social jobs (how they want to be perceived)?
4. What are the circumstances that trigger these jobs?
5. What are the current workarounds?
6. What would "done well" look like?

Help me understand the underlying motivations, not just the surface tasks.`
        }
      ]
    },
    {
      phase: 'Design Patterns Research',
      icon: Layers,
      color: 'pink',
      description: 'Find proven solutions to design problems',
      prompts: [
        {
          title: 'Pattern Library',
          prompt: `I need to design [specific UI challenge]. What are the established design patterns for this?

For each pattern:
1. Name and description
2. When to use it
3. Pros and cons
4. Best examples (which products use it well)
5. Accessibility considerations
6. Mobile vs desktop considerations

Give me 3-5 pattern options with clear recommendations.`
        },
        {
          title: 'Interaction Patterns',
          prompt: `What are best practices for [specific interaction]?

Research and provide:
1. Common approaches and their tradeoffs
2. User expectations based on platform conventions
3. Edge cases to consider
4. Error handling patterns
5. Loading and transition states
6. Accessibility requirements
7. Examples from well-designed products

Be specific with implementation guidance.`
        }
      ]
    },
    {
      phase: 'Requirements Definition',
      icon: FileText,
      color: 'amber',
      description: 'Define what you need to build',
      prompts: [
        {
          title: 'Feature Requirements',
          prompt: `Help me define requirements for [feature]:

Based on the research above, create a comprehensive requirements document:

1. User Stories (format: "As a [user], I want to [action] so that [benefit]")
2. Functional requirements (what must it do?)
3. Non-functional requirements (performance, accessibility, security)
4. Design requirements (responsive, animations, states)
5. Edge cases and error states
6. Success metrics (how we know it's working)
7. Out of scope (what we're NOT doing)

Prioritize: Must-have vs Nice-to-have`
        },
        {
          title: 'Design Constraints',
          prompt: `Identify constraints and considerations for [feature]:

1. Technical constraints (browser support, performance limits)
2. Design system constraints (existing patterns to follow)
3. Accessibility requirements (WCAG level, specific needs)
4. Platform considerations (mobile, tablet, desktop)
5. Internationalization needs
6. Content constraints (character limits, image requirements)
7. Timeline/scope constraints

Help me design within realistic boundaries.`
        }
      ]
    }
  ]

  const workflowSteps = [
    {
      step: 1,
      title: 'Define the Challenge',
      description: 'Start by clearly articulating what you\'re trying to solve',
      example: '"I need to design an onboarding flow for a B2B SaaS analytics dashboard. Users are marketing managers who may not be technical."'
    },
    {
      step: 2,
      title: 'Competitive Analysis',
      description: 'Understand the landscape and user expectations',
      example: 'Use the competitive analysis prompts to research how competitors handle onboarding'
    },
    {
      step: 3,
      title: 'User Research',
      description: 'Deep dive into user needs, goals, and pain points',
      example: 'Create personas and analyze jobs-to-be-done for marketing managers using analytics tools'
    },
    {
      step: 4,
      title: 'Pattern Research',
      description: 'Find proven design patterns for your challenges',
      example: 'Research onboarding patterns: progressive disclosure, wizards, tooltips, empty states'
    },
    {
      step: 5,
      title: 'Synthesize Insights',
      description: 'Combine research into actionable design direction',
      example: 'Ask AI to synthesize all research into a design brief with key decisions'
    },
    {
      step: 6,
      title: 'Define Requirements',
      description: 'Create clear specifications for what to build',
      example: 'Generate user stories, functional requirements, and design constraints'
    }
  ]

  const colorClasses = {
    cyan: { bg: 'bg-cyan-500', light: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400' },
    purple: { bg: 'bg-purple-500', light: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
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
          <span className="badge-cyan mb-6">Advanced Technique</span>
          
          <h1 className="heading-display text-white mb-8">
            Research & Discovery<br />
            <span className="text-gradient-multi">with AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Before you design, research. AI can help you understand competitors, users, 
            patterns, and requirements—in hours instead of weeks.
          </p>

          <div className="flex items-center justify-center gap-2 text-zinc-500">
            <Clock className="w-5 h-5" />
            <span>1 hour read + practice</span>
            <span className="mx-2">•</span>
            <Star className="w-5 h-5 text-amber-400" />
            <span>Pro Technique</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY RESEARCH FIRST
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="card-premium p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="badge-purple mb-4">The Foundation</span>
              <h2 className="heading-section text-white mb-4">Why Research Before Design?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h4 className="font-bold text-red-400 mb-3">Without Research:</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Reinventing wheels that already exist</li>
                  <li>• Missing user expectations</li>
                  <li>• Designing based on assumptions</li>
                  <li>• Surprised by edge cases late in the process</li>
                  <li>• Multiple redesigns after user feedback</li>
                </ul>
              </div>
              
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                <h4 className="font-bold text-emerald-400 mb-3">With AI-Powered Research:</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Build on proven patterns</li>
                  <li>• Design for real user needs</li>
                  <li>• Make informed decisions</li>
                  <li>• Handle edge cases from the start</li>
                  <li>• Get it right the first time</li>
                </ul>
              </div>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 text-center">
              <p className="text-cyan-400 text-lg">
                <strong>AI accelerates research from weeks to hours.</strong> You can explore 
                competitors, understand users, and find patterns before lunch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE RESEARCH WORKFLOW
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="text-center mb-12">
          <span className="badge-amber mb-4">The Process</span>
          <h2 className="heading-section text-white mb-4">6-Step Research Workflow</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            A systematic approach to research before you open your design tool
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {workflowSteps.map((item, index) => (
              <div key={index} className="card-dark p-6 group hover:border-cyan-500/30 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-white text-xl mb-2">{item.title}</h3>
                    <p className="text-zinc-400 mb-3">{item.description}</p>
                    <div className="bg-dark-800/50 border border-white/5 rounded-lg p-4">
                      <span className="text-xs text-zinc-500 mb-1 block">Example:</span>
                      <p className="text-sm text-emerald-400 font-mono">{item.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          RESEARCH PHASES
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="text-center mb-12">
          <span className="badge-pink mb-4">Prompt Library</span>
          <h2 className="heading-section text-white mb-4">Research Prompts by Phase</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Copy-paste prompts for comprehensive research
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {researchPhases.map((phase, phaseIndex) => {
            const Icon = phase.icon
            const colors = colorClasses[phase.color as keyof typeof colorClasses]
            
            return (
              <div key={phaseIndex} className={`card-glow p-8 ${colors.border}`}>
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-2xl mb-1">{phase.phase}</h3>
                    <p className={`${colors.text}`}>{phase.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {phase.prompts.map((prompt, promptIndex) => (
                    <div key={promptIndex} className="bg-dark-800/50 border border-white/5 rounded-xl p-5">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-white">{prompt.title}</h4>
                        <button
                          onClick={() => handleCopy(prompt.prompt, `${phaseIndex}-${promptIndex}`)}
                          className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {copiedCode === `${phaseIndex}-${promptIndex}` ? (
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
                      <pre className="text-sm text-zinc-400 whitespace-pre-wrap font-mono bg-dark-900 rounded-lg p-4">
                        {prompt.prompt}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SYNTHESIS
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="card-dark p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-display font-bold text-white text-2xl">Synthesizing Research</h2>
              <p className="text-zinc-400">Turning research into design direction</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-zinc-300">
              After gathering research, ask AI to synthesize it into actionable insights:
            </p>

            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-cyan-400">Synthesis Prompt</h4>
                <button
                  onClick={() => handleCopy(`Based on all the research we've gathered (competitive analysis, user personas, design patterns), create a design brief that includes:

1. KEY INSIGHTS
   - Top 3 user needs we must address
   - Top 3 opportunities for differentiation
   - Top 3 risks/challenges to watch for

2. DESIGN PRINCIPLES
   - 5 guiding principles for this project
   - Rationale for each based on research

3. MUST-HAVE REQUIREMENTS
   - Core features and their priority
   - Key user flows to design

4. DESIGN DIRECTION
   - Recommended visual approach
   - Interaction patterns to use
   - What to avoid based on research

5. SUCCESS CRITERIA
   - How we'll know the design is working
   - Metrics to track

Be specific and actionable. Reference the research to support each point.`, 'synthesis')}
                  className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {copiedCode === 'synthesis' ? (
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
              <pre className="text-sm text-emerald-400 whitespace-pre-wrap font-mono bg-dark-900 rounded-lg p-4 max-h-60 overflow-y-auto">
{`Based on all the research we've gathered (competitive analysis, user personas, design patterns), create a design brief that includes:

1. KEY INSIGHTS
   - Top 3 user needs we must address
   - Top 3 opportunities for differentiation
   - Top 3 risks/challenges to watch for

2. DESIGN PRINCIPLES
   - 5 guiding principles for this project
   - Rationale for each based on research

3. MUST-HAVE REQUIREMENTS
   - Core features and their priority
   - Key user flows to design

4. DESIGN DIRECTION
   - Recommended visual approach
   - Interaction patterns to use
   - What to avoid based on research

5. SUCCESS CRITERIA
   - How we'll know the design is working
   - Metrics to track

Be specific and actionable. Reference the research to support each point.`}
              </pre>
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
            <h2 className="heading-section text-white mb-4">Run a Complete Research Cycle</h2>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-zinc-300 text-center mb-6">
              Choose a feature you want to design, then run through the complete research workflow:
            </p>

            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-white">Pick a feature to research</p>
                <p className="text-sm text-zinc-400">Examples: settings page, onboarding flow, dashboard, search feature</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-white">Run competitive analysis</p>
                <p className="text-sm text-zinc-400">Use the prompts above to understand the landscape</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-white">Create user personas</p>
                <p className="text-sm text-zinc-400">Generate 2-3 detailed personas for your users</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold">4</span>
              </div>
              <div>
                <p className="font-medium text-white">Research design patterns</p>
                <p className="text-sm text-zinc-400">Find proven solutions for your design challenges</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold">5</span>
              </div>
              <div>
                <p className="font-medium text-white">Synthesize into a design brief</p>
                <p className="text-sm text-zinc-400">Create a document you can use to guide your design work</p>
              </div>
            </div>
          </div>

          {!isComplete('full-cycle') && (
            <button
              onClick={() => handleComplete('full-cycle')}
              className="btn-primary w-full"
            >
              <CheckCircle className="w-5 h-5" />
              <span>I Completed a Research Cycle!</span>
            </button>
          )}

          {isComplete('full-cycle') && (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <p className="text-emerald-400 font-medium">Outstanding! You're designing with research-backed confidence!</p>
            </div>
          )}
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
              <Layers className="w-10 h-10 text-white" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                Ready to Build Complex Systems?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Learn how to design enterprise-grade features that work within larger systems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                to="/complex-systems" 
                className="btn bg-white text-dark-950 hover:bg-zinc-100 text-lg shadow-2xl px-10 group"
              >
                <span className="font-bold">Learn System Design</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResearchDiscovery

