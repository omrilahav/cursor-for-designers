import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Bot, Zap, Brain, Sparkles, Target, Clock, DollarSign,
  CheckCircle, XCircle, ArrowRight, Lightbulb, Code, Palette,
  Layers, FileCode, MessageSquare, Rocket, Star, AlertCircle,
  ChevronDown, ChevronUp, Cpu, Eye, Image, Terminal
} from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

interface Model {
  id: string
  name: string
  provider: string
  version: string
  icon: typeof Bot
  color: string
  tagline: string
  description: string
  strengths: string[]
  weaknesses: string[]
  bestFor: string[]
  speed: 'fast' | 'medium' | 'slow'
  cost: 'free' | 'low' | 'medium' | 'high'
  quality: 'good' | 'great' | 'excellent'
  designerRating: number
  tips: string[]
}

const AIModels = () => {
  const { completeLesson, completedLessons } = useProgress()
  const [expandedModel, setExpandedModel] = useState<string | null>('claude-sonnet')
  const [selectedUseCase, setSelectedUseCase] = useState<string>('all')

  const handleComplete = () => {
    completeLesson('ai-models-guide', 'training')
  }

  const isComplete = completedLessons.some(l => l.id === 'ai-models-guide')

  const models: Model[] = [
    {
      id: 'claude-sonnet',
      name: 'Claude Sonnet 4',
      provider: 'Anthropic',
      version: '4',
      icon: Brain,
      color: 'purple',
      tagline: 'The balanced powerhouse',
      description: 'Excellent balance of speed, quality, and cost. The go-to choice for most design tasks.',
      strengths: [
        'Outstanding at following design specifications',
        'Great at understanding design intent',
        'Excellent code quality and organization',
        'Fast response times',
        'Good at multi-file operations'
      ],
      weaknesses: [
        'May occasionally miss edge cases',
        'Less creative than Opus for novel solutions'
      ],
      bestFor: [
        'Daily design-to-code tasks',
        'Component building',
        'Design system implementation',
        'Code refactoring',
        'Multi-file features'
      ],
      speed: 'fast',
      cost: 'medium',
      quality: 'excellent',
      designerRating: 5,
      tips: [
        'Use @file references to share your design tokens',
        'Be specific about spacing, colors, and typography',
        'Great for iterative refinement - ask for changes confidently'
      ]
    },
    {
      id: 'claude-opus',
      name: 'Claude Opus 4',
      provider: 'Anthropic',
      version: '4',
      icon: Sparkles,
      color: 'pink',
      tagline: 'Maximum intelligence',
      description: 'The most capable model for complex reasoning, creative solutions, and nuanced understanding.',
      strengths: [
        'Superior creative problem-solving',
        'Deep understanding of complex requirements',
        'Excellent at architecture decisions',
        'Best at understanding "vibe" and aesthetic intent',
        'Handles ambiguous requirements well'
      ],
      weaknesses: [
        'Slower response times',
        'Higher cost per request',
        'Sometimes over-engineers simple tasks'
      ],
      bestFor: [
        'Complex system architecture',
        'Creative design challenges',
        'Planning multi-feature builds',
        'Debugging tricky issues',
        'Design system strategy'
      ],
      speed: 'slow',
      cost: 'high',
      quality: 'excellent',
      designerRating: 5,
      tips: [
        'Use for planning sessions before building',
        'Great for "How should I approach..." questions',
        'Worth the wait for complex, multi-step tasks'
      ]
    },
    {
      id: 'gpt-4o',
      name: 'GPT-4o',
      provider: 'OpenAI',
      version: '4o',
      icon: Bot,
      color: 'emerald',
      tagline: 'Fast and versatile',
      description: 'Fast, capable, and great at general coding tasks with strong image understanding.',
      strengths: [
        'Very fast responses',
        'Strong image/screenshot analysis',
        'Good at generating boilerplate',
        'Reliable code formatting',
        'Wide knowledge base'
      ],
      weaknesses: [
        'Less consistent with design details',
        'May need more specific prompts',
        'Can be verbose in explanations'
      ],
      bestFor: [
        'Quick code generation',
        'Screenshot-to-code tasks',
        'Boilerplate and scaffolding',
        'General questions',
        'Rapid prototyping'
      ],
      speed: 'fast',
      cost: 'medium',
      quality: 'great',
      designerRating: 4,
      tips: [
        'Excellent for pasting screenshots and getting code',
        'Be more explicit about design requirements',
        'Good for "quick and dirty" first drafts'
      ]
    },
    {
      id: 'cursor-small',
      name: 'cursor-small',
      provider: 'Cursor',
      version: 'Built-in',
      icon: Zap,
      color: 'cyan',
      tagline: 'Lightning fast for edits',
      description: 'Cursor\'s own fast model, optimized for quick edits and inline changes.',
      strengths: [
        'Extremely fast',
        'Perfect for ⌘K edits',
        'Doesn\'t use API quota',
        'Great for small changes',
        'Low latency'
      ],
      weaknesses: [
        'Limited for complex tasks',
        'Less context awareness',
        'Not ideal for planning'
      ],
      bestFor: [
        'Quick inline edits (⌘K)',
        'Simple code modifications',
        'Tab completions',
        'Small bug fixes',
        'Format adjustments'
      ],
      speed: 'fast',
      cost: 'free',
      quality: 'good',
      designerRating: 4,
      tips: [
        'Use for quick fixes while staying in flow',
        'Perfect for "add a hover effect" type edits',
        'Switch to a larger model for complex tasks'
      ]
    }
  ]

  const useCases = [
    { id: 'all', label: 'All Tasks', icon: Layers },
    { id: 'components', label: 'Components', icon: Code },
    { id: 'design-systems', label: 'Design Systems', icon: Palette },
    { id: 'prototyping', label: 'Prototyping', icon: Rocket },
    { id: 'debugging', label: 'Debugging', icon: Terminal }
  ]

  const useCaseRecommendations: Record<string, { primary: string; secondary: string; reason: string }> = {
    components: {
      primary: 'claude-sonnet',
      secondary: 'gpt-4o',
      reason: 'Sonnet excels at translating design specs into clean, well-organized component code.'
    },
    'design-systems': {
      primary: 'claude-opus',
      secondary: 'claude-sonnet',
      reason: 'Opus understands the strategic thinking needed for design system architecture.'
    },
    prototyping: {
      primary: 'gpt-4o',
      secondary: 'claude-sonnet',
      reason: 'GPT-4o\'s speed and image understanding make it great for rapid prototyping.'
    },
    debugging: {
      primary: 'claude-opus',
      secondary: 'claude-sonnet',
      reason: 'Opus\'s reasoning capabilities help find root causes of complex bugs.'
    }
  }

  const colorClasses: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    purple: { bg: 'bg-purple-500/20', border: 'border-purple-500/30', text: 'text-purple-400', badge: 'badge-purple' },
    pink: { bg: 'bg-pink-500/20', border: 'border-pink-500/30', text: 'text-pink-400', badge: 'badge-pink' },
    emerald: { bg: 'bg-emerald-500/20', border: 'border-emerald-500/30', text: 'text-emerald-400', badge: 'badge-emerald' },
    cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-500/30', text: 'text-cyan-400', badge: 'badge-cyan' }
  }

  const getSpeedIcon = (speed: string) => {
    switch (speed) {
      case 'fast': return <Zap className="w-4 h-4 text-emerald-400" />
      case 'medium': return <Clock className="w-4 h-4 text-amber-400" />
      case 'slow': return <Clock className="w-4 h-4 text-orange-400" />
      default: return null
    }
  }

  const getCostLabel = (cost: string) => {
    switch (cost) {
      case 'free': return { label: 'Free', color: 'text-emerald-400' }
      case 'low': return { label: '$', color: 'text-emerald-400' }
      case 'medium': return { label: '$$', color: 'text-amber-400' }
      case 'high': return { label: '$$$', color: 'text-orange-400' }
      default: return { label: '', color: '' }
    }
  }

  return (
    <div className="space-y-16 py-8">
      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="text-center max-w-4xl mx-auto">
        <span className="badge-purple mb-6">Model Selection Guide</span>
        <h1 className="heading-hero mb-6">
          <span className="text-white">Choose the Right</span>
          <br />
          <span className="gradient-text">AI Model</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
          Different AI models have different strengths. Learn which one to use 
          for each type of design task to get the best results.
        </p>

        {/* Quick selector */}
        <div className="bg-dark-800/50 border border-white/5 rounded-2xl p-6 inline-block">
          <p className="text-sm text-zinc-500 mb-4">What are you working on?</p>
          <div className="flex flex-wrap justify-center gap-2">
            {useCases.map((uc) => {
              const Icon = uc.icon
              return (
                <button
                  key={uc.id}
                  onClick={() => setSelectedUseCase(uc.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedUseCase === uc.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-dark-700 text-zinc-400 hover:bg-dark-600 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {uc.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Use case recommendation */}
        {selectedUseCase !== 'all' && useCaseRecommendations[selectedUseCase] && (
          <div className="mt-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl p-6 max-w-2xl mx-auto animate-fade-in">
            <p className="text-cyan-400 font-medium mb-2">
              Recommended for {useCases.find(u => u.id === selectedUseCase)?.label}:
            </p>
            <p className="text-white text-lg font-bold mb-1">
              {models.find(m => m.id === useCaseRecommendations[selectedUseCase].primary)?.name}
            </p>
            <p className="text-zinc-400 text-sm">
              {useCaseRecommendations[selectedUseCase].reason}
            </p>
          </div>
        )}
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MODEL CARDS
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-section text-white mb-4">Available Models</h2>
          <p className="text-zinc-400">Click any model to see detailed information</p>
        </div>

        <div className="space-y-4">
          {models.map((model) => {
            const Icon = model.icon
            const colors = colorClasses[model.color]
            const isExpanded = expandedModel === model.id
            const costInfo = getCostLabel(model.cost)

            return (
              <div
                key={model.id}
                className={`${colors.border} border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'bg-dark-800/80' : 'bg-dark-900/50 hover:bg-dark-800/50'
                }`}
              >
                {/* Header - Always visible */}
                <button
                  onClick={() => setExpandedModel(isExpanded ? null : model.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-display font-bold text-white text-lg">{model.name}</h3>
                        <span className="text-xs text-zinc-500">{model.provider}</span>
                      </div>
                      <p className={`${colors.text} text-sm`}>{model.tagline}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    {/* Quick stats */}
                    <div className="hidden md:flex items-center gap-4">
                      <div className="flex items-center gap-1.5" title="Speed">
                        {getSpeedIcon(model.speed)}
                        <span className="text-xs text-zinc-500 capitalize">{model.speed}</span>
                      </div>
                      <div className="flex items-center gap-1.5" title="Cost">
                        <DollarSign className="w-4 h-4 text-zinc-500" />
                        <span className={`text-xs ${costInfo.color}`}>{costInfo.label}</span>
                      </div>
                      <div className="flex items-center gap-1" title="Designer Rating">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < model.designerRating ? 'text-amber-400 fill-amber-400' : 'text-zinc-700'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-zinc-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500" />
                    )}
                  </div>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-6 pb-6 space-y-6 animate-fade-in">
                    <p className="text-zinc-400">{model.description}</p>

                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Strengths */}
                      <div className="bg-dark-900/50 rounded-xl p-4">
                        <h4 className="font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Strengths
                        </h4>
                        <ul className="space-y-2">
                          {model.strengths.map((item, i) => (
                            <li key={i} className="text-sm text-zinc-400 flex items-start gap-2">
                              <span className="text-emerald-500 mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Best For */}
                      <div className="bg-dark-900/50 rounded-xl p-4">
                        <h4 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Best For
                        </h4>
                        <ul className="space-y-2">
                          {model.bestFor.map((item, i) => (
                            <li key={i} className="text-sm text-zinc-400 flex items-start gap-2">
                              <span className="text-cyan-500 mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Weaknesses */}
                      <div className="bg-dark-900/50 rounded-xl p-4">
                        <h4 className="font-semibold text-amber-400 mb-3 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          Limitations
                        </h4>
                        <ul className="space-y-2">
                          {model.weaknesses.map((item, i) => (
                            <li key={i} className="text-sm text-zinc-400 flex items-start gap-2">
                              <span className="text-amber-500 mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tips */}
                    <div className={`${colors.bg} ${colors.border} border rounded-xl p-4`}>
                      <h4 className={`font-semibold ${colors.text} mb-3 flex items-center gap-2`}>
                        <Lightbulb className="w-4 h-4" />
                        Designer Tips
                      </h4>
                      <ul className="space-y-2">
                        {model.tips.map((tip, i) => (
                          <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                            <span className={colors.text}>→</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          QUICK REFERENCE
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto">
        <div className="card-glow p-8">
          <div className="text-center mb-8">
            <span className="badge-cyan mb-4">Quick Reference</span>
            <h2 className="heading-section text-white mb-4">Model Selection Cheatsheet</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">"I want to plan my approach"</p>
                <p className="text-sm text-zinc-500">Use Claude Opus for complex planning, Sonnet for quick questions</p>
              </div>
              <span className="badge-purple">Chat</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <Code className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">"I want to build components"</p>
                <p className="text-sm text-zinc-500">Claude Sonnet is your best friend for daily component work</p>
              </div>
              <span className="badge-cyan">Composer</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">"I need a quick edit"</p>
                <p className="text-sm text-zinc-500">cursor-small for speed, or stay with your current model</p>
              </div>
              <span className="badge-emerald">⌘K</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                <Image className="w-5 h-5 text-pink-400" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">"I have a screenshot to recreate"</p>
                <p className="text-sm text-zinc-500">GPT-4o excels at image understanding and screenshot-to-code</p>
              </div>
              <span className="badge-pink">Vision</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HOW TO SWITCH
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-section text-white mb-4">How to Switch Models</h2>
          <p className="text-zinc-400">Changing models in Cursor is simple</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-dark p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-sm">1</div>
              <h3 className="font-semibold text-white">In Chat or Composer</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-4">
              Look for the model dropdown at the bottom of the Chat panel or Composer window.
            </p>
            <div className="bg-dark-800 rounded-lg p-4">
              <code className="text-sm text-cyan-400">Click model name → Select new model</code>
            </div>
          </div>

          <div className="card-dark p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm">2</div>
              <h3 className="font-semibold text-white">Set Default Model</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-4">
              Go to Settings → Models to set your preferred default model.
            </p>
            <div className="bg-dark-800 rounded-lg p-4">
              <code className="text-sm text-purple-400">⌘ + , → Models → Default</code>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-2xl mx-auto text-center">
        <div className="card-dark p-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
            <Cpu className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Try Different Models?</h3>
          <p className="text-zinc-400 mb-6">
            Start with Claude Sonnet for most tasks, and experiment with others as you become more comfortable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleComplete}
              disabled={isComplete}
              className={`btn-lg ${
                isComplete 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:brightness-110'
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

export default AIModels


