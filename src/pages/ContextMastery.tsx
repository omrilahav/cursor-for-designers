import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  AtSign, ArrowRight, CheckCircle, Lightbulb, Zap, Code, 
  FileText, FolderOpen, Globe, GitBranch, Image, Database,
  Search, Terminal, MessageSquare, Star, Target, Eye,
  Copy, Check, ChevronRight, Layers, Palette, AlertCircle
} from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

interface ContextType {
  symbol: string
  name: string
  description: string
  icon: typeof AtSign
  color: string
  examples: { prompt: string; explanation: string }[]
  tips: string[]
  designerUse: string
}

const ContextMastery = () => {
  const { completeLesson, completedLessons } = useProgress()
  const [copiedExample, setCopiedExample] = useState<string | null>(null)
  const [activeContext, setActiveContext] = useState<string>('file')

  const handleComplete = () => {
    completeLesson('context-mastery', 'training')
  }

  const isComplete = completedLessons.some(l => l.id === 'context-mastery')

  const copyExample = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedExample(id)
    setTimeout(() => setCopiedExample(null), 2000)
  }

  const contextTypes: ContextType[] = [
    {
      symbol: '@file',
      name: 'File Reference',
      description: 'Reference a specific file so AI can read its contents',
      icon: FileText,
      color: 'cyan',
      examples: [
        {
          prompt: '@Button.tsx add a loading state with a spinner',
          explanation: 'AI reads the entire Button component and adds loading functionality'
        },
        {
          prompt: '@design-tokens.ts create a Card component using these tokens',
          explanation: 'AI uses your exact colors, spacing, and typography from your tokens file'
        }
      ],
      tips: [
        'Type @ then start typing the filename—autocomplete helps',
        'AI reads the entire file, so it understands the full context',
        'Great for modifying existing components'
      ],
      designerUse: 'Share your design tokens file when creating any component'
    },
    {
      symbol: '@folder',
      name: 'Folder Reference',
      description: 'Include context from all files in a folder',
      icon: FolderOpen,
      color: 'purple',
      examples: [
        {
          prompt: '@components/ make all buttons use consistent styling',
          explanation: 'AI scans all components and makes styling consistent across them'
        },
        {
          prompt: '@pages/ add the same footer component to all pages',
          explanation: 'AI reads all page files and adds the footer to each one'
        }
      ],
      tips: [
        'Use for project-wide refactoring',
        'Great for ensuring consistency across multiple files',
        'Can slow down responses for large folders'
      ],
      designerUse: 'Audit your entire component library at once'
    },
    {
      symbol: '@codebase',
      name: 'Codebase Search',
      description: 'AI searches your entire project to find relevant code',
      icon: Search,
      color: 'emerald',
      examples: [
        {
          prompt: '@codebase where is the primary color defined?',
          explanation: 'AI searches all files to find where colors are defined'
        },
        {
          prompt: '@codebase show me all components that use the Modal',
          explanation: 'AI finds every file that imports or uses Modal'
        }
      ],
      tips: [
        'Best for finding things when you don\'t know where they are',
        'Ask questions like "where is X used?" or "find all Y"',
        'More powerful than @folder for discovery'
      ],
      designerUse: 'Find where design tokens are actually being used (or not used!)'
    },
    {
      symbol: '@docs',
      name: 'Documentation Search',
      description: 'Search official documentation for frameworks and libraries',
      icon: Globe,
      color: 'pink',
      examples: [
        {
          prompt: '@docs tailwind how do I add a custom animation?',
          explanation: 'AI searches Tailwind docs and gives you the exact syntax'
        },
        {
          prompt: '@docs framer-motion how do I animate on scroll?',
          explanation: 'AI finds the scroll animation examples from Framer Motion docs'
        }
      ],
      tips: [
        'Great for learning new libraries',
        'Always get accurate, up-to-date information',
        'Mention the library name after @docs'
      ],
      designerUse: 'Learn Tailwind classes and animation libraries quickly'
    },
    {
      symbol: '@web',
      name: 'Web Search',
      description: 'Search the internet for current information',
      icon: Globe,
      color: 'amber',
      examples: [
        {
          prompt: '@web what are the latest Tailwind v4 features?',
          explanation: 'AI searches for recent Tailwind updates and summarizes them'
        },
        {
          prompt: '@web best practices for dark mode UI design 2024',
          explanation: 'AI finds current design thinking on dark mode'
        }
      ],
      tips: [
        'Use for current trends and recent updates',
        'Great for research and inspiration',
        'More general than @docs'
      ],
      designerUse: 'Research design trends and find inspiration'
    },
    {
      symbol: '@git',
      name: 'Git History',
      description: 'Reference git commits and history',
      icon: GitBranch,
      color: 'cyan',
      examples: [
        {
          prompt: '@git what changed in the last commit?',
          explanation: 'AI shows you what files were modified and how'
        },
        {
          prompt: '@git show me the changes to Button.tsx this week',
          explanation: 'AI finds all recent changes to a specific file'
        }
      ],
      tips: [
        'Useful for understanding recent changes',
        'Great for reviewing what you or teammates changed',
        'Can help debug "when did this break?"'
      ],
      designerUse: 'Track what changed before something stopped working'
    },
    {
      symbol: 'Images',
      name: 'Image/Screenshot',
      description: 'Paste screenshots and designs directly into chat',
      icon: Image,
      color: 'purple',
      examples: [
        {
          prompt: '[paste screenshot] Recreate this design in React with Tailwind',
          explanation: 'AI analyzes the image and generates matching code'
        },
        {
          prompt: '[paste Figma export] Build this component exactly as shown',
          explanation: 'AI reads your Figma export and creates the component'
        }
      ],
      tips: [
        'Simply Cmd+V to paste any image into Chat',
        'Works with screenshots, Figma exports, even photos',
        'AI can read text in images'
      ],
      designerUse: 'Turn your Figma designs into code instantly'
    }
  ]

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-500/30', text: 'text-cyan-400' },
    purple: { bg: 'bg-purple-500/20', border: 'border-purple-500/30', text: 'text-purple-400' },
    emerald: { bg: 'bg-emerald-500/20', border: 'border-emerald-500/30', text: 'text-emerald-400' },
    pink: { bg: 'bg-pink-500/20', border: 'border-pink-500/30', text: 'text-pink-400' },
    amber: { bg: 'bg-amber-500/20', border: 'border-amber-500/30', text: 'text-amber-400' }
  }

  const activeContextData = contextTypes.find(c => c.symbol.toLowerCase().includes(activeContext))

  const designerWorkflows = [
    {
      title: 'Creating a Component from Scratch',
      steps: [
        '@design-tokens.ts - Share your design system',
        'Describe the component you want',
        'AI creates it using your tokens automatically'
      ],
      icon: Layers,
      color: 'cyan'
    },
    {
      title: 'Recreating a Figma Design',
      steps: [
        'Paste your Figma screenshot (Cmd+V)',
        '@design-tokens.ts - Use my token file',
        '"Recreate this exactly, pixel-perfect"'
      ],
      icon: Image,
      color: 'purple'
    },
    {
      title: 'Auditing Design Consistency',
      steps: [
        '@components/ - Scan my component folder',
        '"List all the different font sizes being used"',
        '"Standardize to only use tokens from @tokens.ts"'
      ],
      icon: Search,
      color: 'emerald'
    },
    {
      title: 'Debugging a Styling Issue',
      steps: [
        '@BrokenComponent.tsx - Reference the file',
        '"The spacing looks wrong on mobile"',
        '@docs tailwind - "How does responsive work?"'
      ],
      icon: AlertCircle,
      color: 'amber'
    }
  ]

  return (
    <div className="space-y-16 py-8">
      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="text-center max-w-4xl mx-auto">
        <span className="badge-cyan mb-6">Context Mastery</span>
        <h1 className="heading-hero mb-6">
          <span className="text-white">Master</span>
          <br />
          <span className="gradient-text">@ Mentions</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
          The secret to great AI results? Better context. Learn how to give AI 
          exactly the information it needs to create what you envision.
        </p>

        {/* Key insight */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl p-6 max-w-xl mx-auto">
          <p className="text-cyan-400 font-medium">
            <strong className="text-white">Pro tip:</strong> AI is only as good as the context you give it. 
            A prompt with the right @mentions beats a detailed prompt without them every time.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CONTEXT TYPE SELECTOR
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-section text-white mb-4">The @ Reference Types</h2>
          <p className="text-zinc-400">Click each type to see examples and tips</p>
        </div>

        {/* Selector Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {contextTypes.map((context) => {
            const Icon = context.icon
            const isActive = activeContext === context.symbol.toLowerCase().replace('@', '').replace('images', 'image')
            const colors = colorClasses[context.color]
            
            return (
              <button
                key={context.symbol}
                onClick={() => setActiveContext(context.symbol.toLowerCase().replace('@', '').replace('images', 'image'))}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive 
                    ? `${colors.bg} ${colors.text} ${colors.border} border`
                    : 'bg-dark-800 text-zinc-400 hover:bg-dark-700 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {context.symbol}
              </button>
            )
          })}
        </div>

        {/* Active Context Details */}
        {activeContextData && (
          <div className={`${colorClasses[activeContextData.color].border} border rounded-2xl p-8 bg-dark-900/50 animate-fade-in`}>
            <div className="flex items-start gap-6 mb-8">
              <div className={`w-16 h-16 rounded-xl ${colorClasses[activeContextData.color].bg} flex items-center justify-center flex-shrink-0`}>
                <activeContextData.icon className={`w-8 h-8 ${colorClasses[activeContextData.color].text}`} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <code className={`text-xl font-mono font-bold ${colorClasses[activeContextData.color].text}`}>
                    {activeContextData.symbol}
                  </code>
                  <span className="text-zinc-500">—</span>
                  <span className="text-white font-medium">{activeContextData.name}</span>
                </div>
                <p className="text-zinc-400">{activeContextData.description}</p>
              </div>
            </div>

            {/* Examples */}
            <div className="space-y-4 mb-8">
              <h4 className="text-white font-semibold flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                Examples
              </h4>
              {activeContextData.examples.map((example, i) => (
                <div key={i} className="bg-dark-800/50 border border-white/5 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <code className="text-emerald-400 text-sm font-mono">{example.prompt}</code>
                    <button
                      onClick={() => copyExample(example.prompt, `${activeContextData.symbol}-${i}`)}
                      className="p-1.5 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0"
                    >
                      {copiedExample === `${activeContextData.symbol}-${i}` ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-zinc-500" />
                      )}
                    </button>
                  </div>
                  <p className="text-zinc-500 text-sm">{example.explanation}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Tips */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  Tips
                </h4>
                <ul className="space-y-2">
                  {activeContextData.tips.map((tip, i) => (
                    <li key={i} className="text-sm text-zinc-400 flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Designer Use */}
              <div className={`${colorClasses[activeContextData.color].bg} ${colorClasses[activeContextData.color].border} border rounded-xl p-4`}>
                <h4 className={`font-semibold ${colorClasses[activeContextData.color].text} mb-2 flex items-center gap-2`}>
                  <Palette className="w-4 h-4" />
                  Designer Power Move
                </h4>
                <p className="text-zinc-300 text-sm">{activeContextData.designerUse}</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DESIGNER WORKFLOWS
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="badge-purple mb-4">Designer Workflows</span>
          <h2 className="heading-section text-white mb-4">Context Recipes</h2>
          <p className="text-zinc-400">Common workflows with the right context combinations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {designerWorkflows.map((workflow, index) => {
            const Icon = workflow.icon
            const colors = colorClasses[workflow.color]
            
            return (
              <div key={index} className="card-dark p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="font-bold text-white">{workflow.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {workflow.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                        <span className={`text-xs font-bold ${colors.text}`}>{i + 1}</span>
                      </div>
                      <code className="text-sm text-zinc-300 font-mono">{step}</code>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          GOLDEN RULE
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto">
        <div className="card-glow p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-6">
            <Star className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4">The Golden Rule of Context</h2>
          
          <p className="text-xl text-zinc-300 mb-6">
            Always include <code className="text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">@design-tokens.ts</code> (or your equivalent) in every component prompt.
          </p>
          
          <div className="bg-dark-800/50 rounded-xl p-6 text-left">
            <p className="text-zinc-400 text-sm mb-4">Instead of:</p>
            <code className="text-pink-400 text-sm block mb-4">"Create a card with blue background and 16px padding"</code>
            
            <p className="text-zinc-400 text-sm mb-4">Say:</p>
            <code className="text-emerald-400 text-sm block">"@design-tokens.ts Create a card using my primary color and standard padding"</code>
          </div>

          <p className="text-zinc-500 text-sm mt-6">
            AI will use YOUR design system, not its own assumptions. This is how you maintain consistency automatically.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-2xl mx-auto text-center">
        <div className="card-dark p-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
            <AtSign className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Level Up?</h3>
          <p className="text-zinc-400 mb-6">
            Context mastery is what separates good prompts from great ones. Practice using @mentions in every interaction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleComplete}
              disabled={isComplete}
              className={`btn-lg ${
                isComplete 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:brightness-110'
              }`}
            >
              {isComplete ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Lesson Complete!</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Mark as Complete</span>
                </>
              )}
            </button>

            <Link to="/cursor-agent" className="btn-secondary btn-lg">
              <span>Learn AI Modes</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContextMastery


