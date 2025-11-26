import { useState } from 'react'
import { 
  Keyboard, Copy, Check, Search, MessageSquare, Wand2, 
  Terminal, GitBranch, FolderOpen, FileText, Split, 
  Undo2, Redo2, Save, ZoomIn, ZoomOut, Command,
  ArrowUpDown, MousePointer, Eye, RefreshCw, Bug,
  Bot, Sparkles, Settings, BookOpen, ChevronRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

const CheatSheet = () => {
  const [copiedShortcut, setCopiedShortcut] = useState<string | null>(null)
  const [platform, setPlatform] = useState<'mac' | 'windows'>('mac')

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedShortcut(id)
    setTimeout(() => setCopiedShortcut(null), 2000)
  }

  const getShortcut = (mac: string, windows: string) => {
    return platform === 'mac' ? mac : windows
  }

  const shortcutCategories = [
    {
      title: 'AI Commands',
      description: 'The most important shortcuts for working with AI',
      icon: Sparkles,
      color: 'cyan',
      shortcuts: [
        {
          id: 'chat',
          name: 'Open AI Chat',
          description: 'Start a conversation with AI about your code or design',
          mac: '⌘L',
          windows: 'Ctrl+L',
          icon: MessageSquare
        },
        {
          id: 'agent',
          name: 'AI Agent Panel',
          description: 'Open Agent mode—build features, fix bugs, create files autonomously',
          mac: '⌘I',
          windows: 'Ctrl+I',
          icon: Bot
        },
        {
          id: 'quick-edit',
          name: 'Quick Edit',
          description: 'Edit code right where your cursor is—fast and precise',
          mac: '⌘K',
          windows: 'Ctrl+K',
          icon: Wand2
        },
        {
          id: 'accept',
          name: 'Accept AI Suggestion',
          description: 'Accept the current AI suggestion',
          mac: 'Tab',
          windows: 'Tab',
          icon: Check
        },
        {
          id: 'reject',
          name: 'Reject AI Suggestion',
          description: 'Dismiss and try a different approach',
          mac: 'Esc',
          windows: 'Esc',
          icon: Undo2
        }
      ]
    },
    {
      title: 'Navigation',
      description: 'Move around your project quickly',
      icon: Search,
      color: 'purple',
      shortcuts: [
        {
          id: 'quickopen',
          name: 'Quick Open File',
          description: 'Jump to any file by typing its name',
          mac: '⌘P',
          windows: 'Ctrl+P',
          icon: Search
        },
        {
          id: 'command',
          name: 'Command Palette',
          description: 'Access any Cursor command',
          mac: '⌘⇧P',
          windows: 'Ctrl+Shift+P',
          icon: Command
        },
        {
          id: 'search',
          name: 'Search in Files',
          description: 'Find text across your entire project',
          mac: '⌘⇧F',
          windows: 'Ctrl+Shift+F',
          icon: Search
        },
        {
          id: 'explorer',
          name: 'Toggle File Explorer',
          description: 'Show/hide the sidebar',
          mac: '⌘B',
          windows: 'Ctrl+B',
          icon: FolderOpen
        },
        {
          id: 'terminal-toggle',
          name: 'Toggle Terminal',
          description: 'Show/hide the terminal panel',
          mac: '⌘J',
          windows: 'Ctrl+J',
          icon: Terminal
        }
      ]
    },
    {
      title: 'Editing',
      description: 'Essential code editing shortcuts',
      icon: FileText,
      color: 'pink',
      shortcuts: [
        {
          id: 'save',
          name: 'Save File',
          description: 'Save your current file',
          mac: '⌘S',
          windows: 'Ctrl+S',
          icon: Save
        },
        {
          id: 'undo',
          name: 'Undo',
          description: 'Undo your last change',
          mac: '⌘Z',
          windows: 'Ctrl+Z',
          icon: Undo2
        },
        {
          id: 'redo',
          name: 'Redo',
          description: 'Redo what you undid',
          mac: '⌘⇧Z',
          windows: 'Ctrl+Y',
          icon: Redo2
        },
        {
          id: 'duplicate',
          name: 'Duplicate Line',
          description: 'Copy the current line below',
          mac: '⌥⇧↓',
          windows: 'Alt+Shift+Down',
          icon: Copy
        },
        {
          id: 'move',
          name: 'Move Line Up/Down',
          description: 'Move the current line',
          mac: '⌥↑/↓',
          windows: 'Alt+Up/Down',
          icon: ArrowUpDown
        },
        {
          id: 'multicursor',
          name: 'Add Cursor',
          description: 'Add multiple cursors for simultaneous editing',
          mac: '⌥ Click',
          windows: 'Alt+Click',
          icon: MousePointer
        }
      ]
    },
    {
      title: 'View & Layout',
      description: 'Customize your workspace',
      icon: Eye,
      color: 'amber',
      shortcuts: [
        {
          id: 'split',
          name: 'Split Editor',
          description: 'Open a file side by side',
          mac: '⌘\\',
          windows: 'Ctrl+\\',
          icon: Split
        },
        {
          id: 'zoom-in',
          name: 'Zoom In',
          description: 'Make everything bigger',
          mac: '⌘=',
          windows: 'Ctrl+=',
          icon: ZoomIn
        },
        {
          id: 'zoom-out',
          name: 'Zoom Out',
          description: 'Make everything smaller',
          mac: '⌘-',
          windows: 'Ctrl+-',
          icon: ZoomOut
        },
        {
          id: 'zen',
          name: 'Zen Mode',
          description: 'Distraction-free editing',
          mac: '⌘K Z',
          windows: 'Ctrl+K Z',
          icon: Eye
        }
      ]
    },
    {
      title: 'Terminal & Git',
      description: 'Command line and version control',
      icon: Terminal,
      color: 'emerald',
      shortcuts: [
        {
          id: 'new-terminal',
          name: 'New Terminal',
          description: 'Open a new terminal instance',
          mac: '⌘⇧`',
          windows: 'Ctrl+Shift+`',
          icon: Terminal
        },
        {
          id: 'git-panel',
          name: 'Source Control',
          description: 'Open Git panel',
          mac: '⌃⇧G',
          windows: 'Ctrl+Shift+G',
          icon: GitBranch
        }
      ]
    }
  ]

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    cyan: { bg: 'bg-cyan-500', border: 'border-cyan-500/30', text: 'text-cyan-400' },
    purple: { bg: 'bg-purple-500', border: 'border-purple-500/30', text: 'text-purple-400' },
    pink: { bg: 'bg-pink-500', border: 'border-pink-500/30', text: 'text-pink-400' },
    amber: { bg: 'bg-amber-500', border: 'border-amber-500/30', text: 'text-amber-400' },
    emerald: { bg: 'bg-emerald-500', border: 'border-emerald-500/30', text: 'text-emerald-400' }
  }

  return (
    <div className="space-y-16 animate-fade-in">
      {/* Hero */}
      <section className="relative pt-8 text-center">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="relative max-w-3xl mx-auto">
          <span className="badge-purple mb-6">Reference Guide</span>
          
          <h1 className="heading-section text-white mb-6">
            Keyboard Shortcuts<br />
            <span className="text-gradient-multi">Cheat Sheet</span>
          </h1>
          
          <p className="text-xl text-zinc-400 mb-8">
            Master these shortcuts to fly through Cursor like a pro. 
            Print this page or keep it open while you learn.
          </p>

          {/* Platform Toggle */}
          <div className="inline-flex items-center gap-1 p-1 bg-dark-800 rounded-full border border-white/10">
            <button
              onClick={() => setPlatform('mac')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                platform === 'mac' 
                  ? 'bg-white text-dark-950' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Mac
            </button>
            <button
              onClick={() => setPlatform('windows')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                platform === 'windows' 
                  ? 'bg-white text-dark-950' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Windows / Linux
            </button>
          </div>
        </div>
      </section>

      {/* Most Important - Big Cards */}
      <section>
        <h2 className="text-2xl font-display font-bold text-white text-center mb-8">
          🔑 The Big Three (Memorize These!)
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="card-glow p-8 text-center border-cyan-500/30">
            <kbd className="inline-block px-6 py-4 bg-dark-900 rounded-xl text-3xl font-mono text-cyan-400 mb-4">
              {getShortcut('⌘I', 'Ctrl+I')}
            </kbd>
            <h3 className="font-display font-bold text-white text-xl mb-2">AI Agent</h3>
            <p className="text-zinc-400 text-sm">Agent, Ask, Manual modes—build features autonomously</p>
          </div>

          <div className="card-glow p-8 text-center border-purple-500/30">
            <kbd className="inline-block px-6 py-4 bg-dark-900 rounded-xl text-3xl font-mono text-purple-400 mb-4">
              {getShortcut('⌘L', 'Ctrl+L')}
            </kbd>
            <h3 className="font-display font-bold text-white text-xl mb-2">AI Chat</h3>
            <p className="text-zinc-400 text-sm">Quick questions and conversations</p>
          </div>

          <div className="card-glow p-8 text-center border-pink-500/30">
            <kbd className="inline-block px-6 py-4 bg-dark-900 rounded-xl text-3xl font-mono text-pink-400 mb-4">
              {getShortcut('⌘K', 'Ctrl+K')}
            </kbd>
            <h3 className="font-display font-bold text-white text-xl mb-2">Quick Edit</h3>
            <p className="text-zinc-400 text-sm">Fast inline edits at cursor</p>
          </div>
        </div>
      </section>

      {/* All Shortcuts by Category */}
      <section className="space-y-12">
        {shortcutCategories.map((category) => {
          const Icon = category.icon
          const colors = colorClasses[category.color]
          
          return (
            <div key={category.title} className="card-dark p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-xl">{category.title}</h3>
                  <p className="text-sm text-zinc-500">{category.description}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.shortcuts.map((shortcut) => {
                  const ShortcutIcon = shortcut.icon
                  const shortcutText = getShortcut(shortcut.mac, shortcut.windows)
                  
                  return (
                    <div 
                      key={shortcut.id}
                      className={`bg-dark-800/50 border ${colors.border} rounded-xl p-4 group hover:bg-dark-700/50 transition-all`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <ShortcutIcon className={`w-4 h-4 ${colors.text}`} />
                          <h4 className="font-bold text-white text-sm">{shortcut.name}</h4>
                        </div>
                        <button
                          onClick={() => handleCopy(shortcutText, shortcut.id)}
                          className="opacity-0 group-hover:opacity-100 p-1 text-zinc-500 hover:text-white transition-all"
                        >
                          {copiedShortcut === shortcut.id ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      <p className="text-xs text-zinc-500 mb-3">{shortcut.description}</p>
                      <kbd className={`inline-block px-3 py-1.5 bg-dark-900 rounded-lg font-mono text-sm ${colors.text}`}>
                        {shortcutText}
                      </kbd>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </section>

      {/* Context Mentions */}
      <section className="card-premium p-8 md:p-10">
        <div className="text-center mb-8">
          <h2 className="font-display font-bold text-white text-2xl mb-2">
            @ Mentions - Give AI Context
          </h2>
          <p className="text-zinc-400">
            In Chat or Agent mode, type @ to reference files, docs, and more
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { mention: '@file', description: 'Reference a specific file' },
            { mention: '@folder', description: 'Reference an entire folder' },
            { mention: '@codebase', description: 'Search your whole project' },
            { mention: '@docs', description: 'Reference documentation' },
            { mention: '@web', description: 'Search the web for info' },
            { mention: '@git', description: 'Reference git history' }
          ].map((item) => (
            <div key={item.mention} className="bg-dark-800/50 border border-white/5 rounded-xl p-4">
              <code className="text-cyan-400 font-mono text-lg">{item.mention}</code>
              <p className="text-xs text-zinc-500 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Print / Download Prompt */}
      <section className="text-center">
        <div className="inline-flex items-center gap-4 px-6 py-3 bg-dark-800/50 border border-white/5 rounded-full">
          <span className="text-sm text-zinc-400">
            💡 Press <kbd className="px-2 py-0.5 bg-dark-900 rounded text-cyan-400 font-mono">{getShortcut('⌘P', 'Ctrl+P')}</kbd> to print this page
          </span>
        </div>
      </section>

      {/* Next Steps */}
      <section className="card-dark p-8">
        <h3 className="font-display font-bold text-white text-xl mb-6 text-center">
          Ready to Practice?
        </h3>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <Link to="/quick-start" className="bg-dark-800/50 border border-cyan-500/30 rounded-xl p-5 hover:border-cyan-500/50 transition-all group">
            <Sparkles className="w-6 h-6 text-cyan-400 mb-3" />
            <h4 className="font-bold text-white mb-1">Quick Start</h4>
            <p className="text-sm text-zinc-500">5-minute hands-on intro</p>
          </Link>
          <Link to="/games" className="bg-dark-800/50 border border-purple-500/30 rounded-xl p-5 hover:border-purple-500/50 transition-all group">
            <Keyboard className="w-6 h-6 text-purple-400 mb-3" />
            <h4 className="font-bold text-white mb-1">Practice Games</h4>
            <p className="text-sm text-zinc-500">Build muscle memory</p>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CheatSheet


