import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FileText, CheckCircle, Copy, Check, ArrowRight, Lightbulb,
  Settings, Zap, Target, Code, Layers, ChevronRight, Clock, Star,
  Bot, Sparkles, Shield, GitBranch, FileCode
} from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

const CursorRules = () => {
  const { completeLesson, completedLessons } = useProgress()
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const handleComplete = (id: string) => {
    completeLesson(`rules-${id}`, 'advanced')
  }

  const isComplete = (id: string) => completedLessons.some(l => l.id === `rules-${id}`)

  const exampleRules = `# Cursor Rules for Design System Project

## Project Context
You are helping a product designer build a design system using React, TypeScript, and Tailwind CSS. The designer has experience with Figma but is new to coding.

## Communication Style
- Explain concepts in simple terms, avoiding unnecessary jargon
- Use design terminology when possible (spacing, hierarchy, contrast)
- Provide visual metaphors that connect to design concepts
- Be encouraging and patient

## Code Standards
- Use TypeScript for all files
- Use Tailwind CSS for styling (no inline styles)
- Follow the component structure in /src/components
- Use design tokens from /src/design-tokens.ts for colors, spacing, typography
- All components must be accessible (proper ARIA attributes, keyboard navigation)

## Design System Rules
- Follow 8px spacing grid (4, 8, 16, 24, 32, 48, 64)
- Primary color: #0ea5e9 (cyan-500)
- Border radius: 8px for cards, 6px for buttons, 4px for inputs
- Shadows: Use subtle shadows (shadow-sm, shadow-md)
- Typography: Inter font family

## Component Patterns
- Every component should have TypeScript props interface
- Include all states: default, hover, active, disabled, loading
- Make components responsive by default
- Add JSDoc comments for complex props

## File Structure
\`\`\`
/src
  /components       # All UI components
    /Button         # Component folders
      Button.tsx
      Button.types.ts
      index.ts
  /design-tokens.ts # Central design tokens
  /pages            # Page-level components
\`\`\`

## When Creating Components
1. First check if a similar component exists
2. Import and use design tokens
3. Include hover and focus states
4. Add proper TypeScript types
5. Make it responsive
6. Test accessibility

## Prompting Preferences
- When I say "create a component", generate the full component with all states
- When I say "fix this", explain what was wrong before fixing
- When I say "make it prettier", enhance visual polish while maintaining functionality
- Always show before/after when making changes`

  const projectContextExample = `{
  "name": "design-system",
  "description": "Component library for our product",
  "tech": ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  "designTokens": "./src/design-tokens.ts",
  "components": "./src/components",
  "conventions": {
    "spacing": "8px grid",
    "colors": "Design tokens only",
    "accessibility": "WCAG AA minimum"
  }
}`

  const rulesCategories = [
    {
      title: 'Project Context',
      icon: Target,
      description: 'Tell AI about your project, tech stack, and goals',
      items: [
        'Project type (design system, landing page, dashboard)',
        'Tech stack (React, Vue, plain HTML/CSS)',
        'Design tool you\'re coming from (Figma, Sketch)',
        'Your experience level',
        'Project goals and constraints'
      ]
    },
    {
      title: 'Design Standards',
      icon: Layers,
      description: 'Define your design system rules',
      items: [
        'Spacing system (4px, 8px grid)',
        'Color palette and token names',
        'Typography scale and fonts',
        'Border radius conventions',
        'Shadow and elevation system'
      ]
    },
    {
      title: 'Code Patterns',
      icon: Code,
      description: 'How you want code to be structured',
      items: [
        'File naming conventions',
        'Component structure',
        'Styling approach (Tailwind, CSS-in-JS)',
        'TypeScript strictness level',
        'Import organization'
      ]
    },
    {
      title: 'Communication Style',
      icon: Bot,
      description: 'How AI should talk to you',
      items: [
        'Explanation depth (simple vs technical)',
        'Use of design vs developer terminology',
        'When to ask clarifying questions',
        'How to present options',
        'Error explanation style'
      ]
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
          <span className="badge-amber mb-6">Advanced Topic</span>
          
          <h1 className="heading-display text-white mb-8">
            Cursor Rules &<br />
            <span className="text-gradient-multi">Project Context</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Teach AI to understand your project, your design system, and your preferences. 
            The secret weapon for consistent, high-quality output.
          </p>

          <div className="flex items-center justify-center gap-2 text-zinc-500">
            <Clock className="w-5 h-5" />
            <span>30 minute read</span>
            <span className="mx-2">•</span>
            <Star className="w-5 h-5 text-amber-400" />
            <span>Advanced Technique</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY CURSOR RULES MATTER
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="card-premium p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="badge-cyan mb-4">The Problem</span>
              <h2 className="heading-section text-white mb-4">Why Every Prompt Feels Like Starting Over</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h4 className="font-bold text-red-400 mb-3">Without Cursor Rules:</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• AI forgets your design system each conversation</li>
                  <li>• You repeat the same context over and over</li>
                  <li>• Inconsistent code style and patterns</li>
                  <li>• AI uses random colors, spacing, conventions</li>
                  <li>• Every output needs heavy editing</li>
                </ul>
              </div>
              
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                <h4 className="font-bold text-emerald-400 mb-3">With Cursor Rules:</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• AI always knows your design system</li>
                  <li>• One-time setup, permanent context</li>
                  <li>• Perfectly consistent output every time</li>
                  <li>• Uses YOUR tokens, YOUR conventions</li>
                  <li>• Production-ready code from the start</li>
                </ul>
              </div>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 text-center">
              <p className="text-cyan-400 text-lg">
                <strong>Think of it like this:</strong> Cursor Rules are your design system documentation 
                <em> for the AI</em>. It reads them before every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CREATING YOUR .CURSORRULES FILE
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="text-center mb-12">
          <span className="badge-purple mb-4">The Setup</span>
          <h2 className="heading-section text-white mb-4">Creating Your .cursorrules File</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            One file that transforms how AI works with your project
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="card-glow p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-display font-bold text-white text-xl mb-2">Create the File</h3>
                <p className="text-zinc-400">In your project root folder, create a file named <code className="px-2 py-0.5 bg-dark-700 rounded text-cyan-400">.cursorrules</code></p>
                <p className="text-sm text-zinc-500 mt-2">Note the dot at the beginning—this is a hidden configuration file.</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="card-glow p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-display font-bold text-white text-xl mb-2">Write Your Rules</h3>
                <p className="text-zinc-400 mb-4">Add context, conventions, and instructions in plain English or Markdown</p>
              </div>
            </div>

            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-zinc-500">.cursorrules</span>
                <button
                  onClick={() => handleCopy(exampleRules, 'rules')}
                  className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {copiedCode === 'rules' ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Template</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="text-sm text-zinc-300 overflow-x-auto max-h-80 overflow-y-auto">
                <code>{exampleRules}</code>
              </pre>
            </div>
          </div>

          {/* Step 3 */}
          <div className="card-glow p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-display font-bold text-white text-xl mb-2">Cursor Automatically Reads It</h3>
                <p className="text-zinc-400">Every time you open the project or start a conversation, Cursor reads your rules and applies them.</p>
                <p className="text-sm text-emerald-400 mt-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  No extra setup needed—it just works!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHAT TO INCLUDE
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="text-center mb-12">
          <span className="badge-pink mb-4">Content Guide</span>
          <h2 className="heading-section text-white mb-4">What to Include in Your Rules</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Four categories of information that transform AI output
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {rulesCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div key={index} className="card-dark p-8 group hover:border-cyan-500/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-2">{category.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-500">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PRO TIPS
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="card-dark p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-display font-bold text-white text-2xl">Pro Tips for Cursor Rules</h2>
              <p className="text-zinc-400">Advanced techniques for power users</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <h4 className="font-bold text-cyan-400 mb-2">🎯 Be Specific About Your Skill Level</h4>
              <p className="text-zinc-400 text-sm">
                Include "I'm a designer with no coding experience" or "I understand basic CSS but not JavaScript". 
                AI will adjust its explanations accordingly.
              </p>
            </div>

            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <h4 className="font-bold text-purple-400 mb-2">📁 Reference Your Files</h4>
              <p className="text-zinc-400 text-sm">
                Point to your design tokens file, component examples, and folder structure. 
                AI will use them as references for new code.
              </p>
            </div>

            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <h4 className="font-bold text-pink-400 mb-2">🔄 Define Shorthand Commands</h4>
              <p className="text-zinc-400 text-sm">
                Create your own shortcuts: "When I say 'component', always create with full types, all states, and responsive design."
              </p>
            </div>

            <div className="bg-dark-800/50 border border-white/5 rounded-xl p-6">
              <h4 className="font-bold text-emerald-400 mb-2">✨ Update as You Go</h4>
              <p className="text-zinc-400 text-sm">
                Cursor rules are living documentation. When you discover a new convention or pattern you like, add it to the file.
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
          <div className="text-center mb-8">
            <span className="badge-emerald mb-4">Hands-On Exercise</span>
            <h2 className="heading-section text-white mb-4">Create Your First .cursorrules File</h2>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-white">Create a new project folder</p>
                <p className="text-sm text-zinc-400">Name it "my-design-system" and open it in Cursor</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-white">Create .cursorrules file</p>
                <p className="text-sm text-zinc-400">Use the template above as a starting point</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-white">Customize for your style</p>
                <p className="text-sm text-zinc-400">Add your preferred colors, spacing system, and design conventions</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-dark-800/50 border border-white/5 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-dark-950 font-bold">4</span>
              </div>
              <div>
                <p className="font-medium text-white">Test it!</p>
                <p className="text-sm text-zinc-400">Ask AI to "Create a button component" and see if it follows your rules</p>
              </div>
            </div>
          </div>

          {!isComplete('exercise') && (
            <button
              onClick={() => handleComplete('exercise')}
              className="btn-primary w-full"
            >
              <CheckCircle className="w-5 h-5" />
              <span>I Created My .cursorrules File!</span>
            </button>
          )}

          {isComplete('exercise') && (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <p className="text-emerald-400 font-medium">Excellent! You've unlocked consistent AI output!</p>
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
              <Bot className="w-10 h-10 text-white" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                Ready to Build AI Agent Teams?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Now that you've configured your project, learn how to orchestrate multiple AI agents for complex design workflows.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                to="/agent-teams" 
                className="btn bg-white text-dark-950 hover:bg-zinc-100 text-lg shadow-2xl px-10 group"
              >
                <span className="font-bold">Learn AI Agent Teams</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CursorRules

