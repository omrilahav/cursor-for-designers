import { useState } from 'react'
import { 
  Keyboard, FileCode, Terminal as TerminalIcon, 
  Zap, Package, CheckCircle2, Play, BookOpen
} from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

interface TrainingModule {
  id: string
  title: string
  description: string
  icon: any
  category: 'basics' | 'advanced' | 'shortcuts' | 'workflow'
  lessons: Lesson[]
}

interface Lesson {
  id: string
  title: string
  content: string[]
  shortcuts?: { key: string; action: string }[]
  examples?: string[]
}

const Training = () => {
  const { completedLessons, completeLesson } = useProgress()
  const [selectedModule, setSelectedModule] = useState<TrainingModule | null>(null)
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)

  const modules: TrainingModule[] = [
    {
      id: 'keyboard-shortcuts',
      title: 'Keyboard Shortcuts',
      description: 'Master essential shortcuts for blazing-fast workflow',
      icon: Keyboard,
      category: 'shortcuts',
      lessons: [
        {
          id: 'basic-navigation',
          title: 'Basic Navigation',
          content: [
            'Navigate through your code efficiently without touching the mouse',
            'Jump between files, search, and move around quickly',
            'These shortcuts will save you hours of time'
          ],
          shortcuts: [
            { key: 'Cmd+P (Ctrl+P)', action: 'Quick file open - find any file instantly' },
            { key: 'Cmd+Shift+P (Ctrl+Shift+P)', action: 'Command palette - access all commands' },
            { key: 'Cmd+B (Ctrl+B)', action: 'Toggle sidebar' },
            { key: 'Cmd+J (Ctrl+J)', action: 'Toggle panel (terminal, output)' },
            { key: 'Cmd+W (Ctrl+W)', action: 'Close current tab' },
            { key: 'Cmd+Shift+T (Ctrl+Shift+T)', action: 'Reopen closed tab' },
            { key: 'Cmd+1,2,3... (Ctrl+1,2,3...)', action: 'Switch between tabs' }
          ]
        },
        {
          id: 'ai-shortcuts',
          title: 'AI Command Shortcuts',
          content: [
            'These are the most important shortcuts for using Cursor\'s AI features',
            'Memorize these to supercharge your workflow',
            'Use them constantly while coding'
          ],
          shortcuts: [
            { key: 'Cmd+K (Ctrl+K)', action: 'Inline AI edit - generate or modify code' },
            { key: 'Cmd+L (Ctrl+L)', action: 'Open AI chat panel' },
            { key: 'Tab', action: 'Accept AI suggestion' },
            { key: 'Esc', action: 'Reject AI suggestion' },
            { key: 'Cmd+I (Ctrl+I)', action: 'Trigger AI autocomplete' }
          ]
        },
        {
          id: 'editing-shortcuts',
          title: 'Code Editing',
          content: [
            'Edit code faster with these essential shortcuts',
            'Multiple cursors and line manipulation',
            'Professional developer techniques'
          ],
          shortcuts: [
            { key: 'Cmd+D (Ctrl+D)', action: 'Select next occurrence of word' },
            { key: 'Cmd+Shift+L (Ctrl+Shift+L)', action: 'Select all occurrences' },
            { key: 'Alt+Click (Option+Click)', action: 'Add cursor at location' },
            { key: 'Cmd+Alt+Up/Down (Ctrl+Alt+Up/Down)', action: 'Add cursor above/below' },
            { key: 'Cmd+/ (Ctrl+/)', action: 'Toggle line comment' },
            { key: 'Alt+Up/Down (Option+Up/Down)', action: 'Move line up/down' },
            { key: 'Cmd+Shift+K (Ctrl+Shift+K)', action: 'Delete line' }
          ]
        }
      ]
    },
    {
      id: 'ai-features',
      title: 'AI Features Deep Dive',
      description: 'Unlock the full power of AI-assisted development',
      icon: Zap,
      category: 'advanced',
      lessons: [
        {
          id: 'inline-generation',
          title: 'Inline Code Generation',
          content: [
            'The inline AI (Cmd+K) is your primary tool for code generation',
            'Learn to write effective prompts',
            'Understand how to iterate on generated code'
          ],
          examples: [
            '"Create a button component with primary and secondary variants"',
            '"Add error handling to this function"',
            '"Refactor this to use async/await"',
            '"Make this responsive for mobile devices"',
            '"Add TypeScript types to this component"'
          ]
        },
        {
          id: 'chat-features',
          title: 'AI Chat Best Practices',
          content: [
            'The chat panel (Cmd+L) is perfect for longer conversations',
            'Ask questions, get explanations, plan features',
            'The AI remembers context from your conversation'
          ],
          examples: [
            '"How should I structure this React app?"',
            '"Explain the difference between useMemo and useCallback"',
            '"What\'s wrong with this code?" (with code selected)',
            '"Generate tests for this component"',
            '"@filename - What does this file do?"'
          ]
        },
        {
          id: 'codebase-understanding',
          title: 'Codebase Context',
          content: [
            'Cursor analyzes your entire project for context',
            'It understands your file structure and dependencies',
            'Use @ mentions to reference specific files',
            'The AI learns your coding patterns'
          ],
          examples: [
            '"Create a component similar to @UserCard.tsx"',
            '"Update @api.ts to handle this new endpoint"',
            '"Why is @Dashboard.tsx not rendering properly?"',
            '"Add the same error handling as @utils.ts"'
          ]
        },
        {
          id: 'copilot-plus',
          title: 'Cursor Tab (Autocomplete++)',
          content: [
            'Advanced autocomplete that predicts what you\'re going to write',
            'Works across multiple lines',
            'Learns from your codebase',
            'Just start typing and press Tab to accept'
          ],
          examples: [
            'Start typing a function name and it completes the entire function',
            'Write a comment describing what you want, get the implementation',
            'Begin a pattern and it fills in repetitive code',
            'Start an import and it suggests the right one'
          ]
        }
      ]
    },
    {
      id: 'file-management',
      title: 'File & Project Management',
      description: 'Organize and navigate large projects efficiently',
      icon: FileCode,
      category: 'basics',
      lessons: [
        {
          id: 'quick-open',
          title: 'Quick File Navigation',
          content: [
            'Find and open files instantly without browsing',
            'Search by name, path, or fuzzy matching',
            'Switch between recent files'
          ],
          shortcuts: [
            { key: 'Cmd+P (Ctrl+P)', action: 'Quick open - type file name' },
            { key: 'Cmd+E (Ctrl+E)', action: 'Recent files' },
            { key: 'Cmd+Shift+O (Ctrl+Shift+O)', action: 'Go to symbol in file' },
            { key: 'Cmd+T (Ctrl+T)', action: 'Go to symbol in workspace' }
          ]
        },
        {
          id: 'search-replace',
          title: 'Search & Replace',
          content: [
            'Find anything across your entire project',
            'Replace text with precision',
            'Use regex for advanced patterns'
          ],
          shortcuts: [
            { key: 'Cmd+F (Ctrl+F)', action: 'Find in file' },
            { key: 'Cmd+H (Ctrl+H)', action: 'Replace in file' },
            { key: 'Cmd+Shift+F (Ctrl+Shift+F)', action: 'Find in all files' },
            { key: 'Cmd+Shift+H (Ctrl+Shift+H)', action: 'Replace in all files' }
          ]
        },
        {
          id: 'multi-file',
          title: 'Working with Multiple Files',
          content: [
            'Split your editor to view multiple files',
            'Compare files side by side',
            'Organize your workspace'
          ],
          shortcuts: [
            { key: 'Cmd+\\ (Ctrl+\\)', action: 'Split editor' },
            { key: 'Cmd+1,2,3 (Ctrl+1,2,3)', action: 'Focus editor group' },
            { key: 'Cmd+W (Ctrl+W)', action: 'Close active editor' },
            { key: 'Cmd+K W (Ctrl+K W)', action: 'Close all editors' }
          ]
        }
      ]
    },
    {
      id: 'terminal-git',
      title: 'Terminal & Git Integration',
      description: 'Master the integrated terminal and version control',
      icon: TerminalIcon,
      category: 'workflow',
      lessons: [
        {
          id: 'terminal-basics',
          title: 'Integrated Terminal',
          content: [
            'Access a full terminal right inside Cursor',
            'Run commands without leaving the editor',
            'Split terminals for multiple tasks'
          ],
          shortcuts: [
            { key: 'Cmd+` (Ctrl+`)', action: 'Toggle terminal' },
            { key: 'Cmd+Shift+` (Ctrl+Shift+`)', action: 'Create new terminal' },
            { key: 'Cmd+\\ (Ctrl+\\)', action: 'Split terminal' }
          ],
          examples: [
            'npm install - Install dependencies',
            'npm run dev - Start development server',
            'npm test - Run tests',
            'git status - Check git status'
          ]
        },
        {
          id: 'git-integration',
          title: 'Git & Version Control',
          content: [
            'Visual git interface built into Cursor',
            'Stage, commit, and push without commands',
            'View diffs and history inline'
          ],
          shortcuts: [
            { key: 'Cmd+Shift+G (Ctrl+Shift+G)', action: 'Open source control' },
            { key: 'Cmd+Enter (Ctrl+Enter)', action: 'Commit staged changes' }
          ],
          examples: [
            'Stage changes by clicking the + icon',
            'View diffs before committing',
            'Write clear commit messages',
            'Push to remote with one click'
          ]
        }
      ]
    },
    {
      id: 'extensions',
      title: 'Extensions & Customization',
      description: 'Enhance Cursor with extensions and personal settings',
      icon: Package,
      category: 'workflow',
      lessons: [
        {
          id: 'essential-extensions',
          title: 'Essential Extensions',
          content: [
            'Extend Cursor\'s functionality with VS Code extensions',
            'Recommended extensions for designers',
            'How to install and manage extensions'
          ],
          examples: [
            'Prettier - Automatic code formatting',
            'ESLint - Code quality checks',
            'Live Server - Preview HTML in browser',
            'Color Highlight - See colors in code',
            'Auto Rename Tag - Rename paired HTML tags'
          ]
        },
        {
          id: 'customization',
          title: 'Personalize Your Workspace',
          content: [
            'Change themes for better aesthetics',
            'Adjust font size and family',
            'Configure AI behavior',
            'Set up your preferred layout'
          ],
          shortcuts: [
            { key: 'Cmd+, (Ctrl+,)', action: 'Open settings' }
          ],
          examples: [
            'Choose a theme: Dark+, Light+, or download more',
            'Adjust font size: Settings > Font Size',
            'Enable/disable AI features per your needs',
            'Customize keyboard shortcuts'
          ]
        }
      ]
    }
  ]

  const isLessonCompleted = (lessonId: string) => {
    return completedLessons.some(l => l.id === lessonId)
  }

  const handleCompleteLesson = () => {
    if (selectedLesson) {
      completeLesson(selectedLesson.id, 'training')
      setSelectedLesson(null)
    }
  }

  if (selectedLesson && selectedModule) {
    return (
      <div className="max-w-4xl mx-auto animate-fade-in">
        <button
          onClick={() => setSelectedLesson(null)}
          className="mb-6 text-primary-600 hover:text-primary-700 font-medium"
        >
          ← Back to {selectedModule.title}
        </button>

        <div className="card space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedLesson.title}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded"></div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            {selectedLesson.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">{paragraph}</p>
            ))}
          </div>

          {/* Shortcuts */}
          {selectedLesson.shortcuts && selectedLesson.shortcuts.length > 0 && (
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-bold text-gray-800 mb-4">⌨️ Keyboard Shortcuts</h3>
              {selectedLesson.shortcuts.map((shortcut, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white rounded-lg p-4">
                  <kbd className="px-3 py-2 bg-gray-800 text-white rounded font-mono text-sm whitespace-nowrap">
                    {shortcut.key}
                  </kbd>
                  <p className="text-gray-700 flex-1">{shortcut.action}</p>
                </div>
              ))}
            </div>
          )}

          {/* Examples */}
          {selectedLesson.examples && selectedLesson.examples.length > 0 && (
            <div className="bg-green-50 rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💡 Examples</h3>
              {selectedLesson.examples.map((example, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 flex-1">{example}</p>
                </div>
              ))}
            </div>
          )}

          {/* Complete Button */}
          {!isLessonCompleted(selectedLesson.id) && (
            <button
              onClick={handleCompleteLesson}
              className="btn-primary w-full flex items-center justify-center space-x-2"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>Mark as Complete</span>
            </button>
          )}

          {isLessonCompleted(selectedLesson.id) && (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg text-center font-medium">
              ✓ Lesson Completed
            </div>
          )}
        </div>
      </div>
    )
  }

  if (selectedModule) {
    const completedInModule = selectedModule.lessons.filter(l => isLessonCompleted(l.id)).length

    return (
      <div className="max-w-4xl mx-auto animate-fade-in">
        <button
          onClick={() => setSelectedModule(null)}
          className="mb-6 text-primary-600 hover:text-primary-700 font-medium"
        >
          ← Back to All Modules
        </button>

        <div className="card mb-6">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <selectedModule.icon className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedModule.title}</h2>
              <p className="text-gray-600 mb-4">{selectedModule.description}</p>
              
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                  {completedInModule} / {selectedModule.lessons.length} lessons completed
                </div>
                <div className="flex-1 max-w-xs">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${(completedInModule / selectedModule.lessons.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {selectedModule.lessons.map((lesson, index) => {
            const isCompleted = isLessonCompleted(lesson.id)
            
            return (
              <div
                key={lesson.id}
                className="card group hover:scale-102 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedLesson(lesson)}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    ) : (
                      <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 font-bold">
                        {index + 1}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                      {lesson.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{lesson.content[0]}</p>
                  </div>
                  
                  <Play className="w-6 h-6 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const categoryColors = {
    basics: 'from-blue-500 to-cyan-500',
    advanced: 'from-purple-500 to-pink-500',
    shortcuts: 'from-green-500 to-emerald-500',
    workflow: 'from-orange-500 to-red-500'
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2 mb-8">
        <h2 className="section-title">Training Modules</h2>
        <p className="text-gray-600 text-lg">
          Deep dive into Cursor's features and become a power user
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module) => {
          const Icon = module.icon
          const completedInModule = module.lessons.filter(l => isLessonCompleted(l.id)).length
          const progress = (completedInModule / module.lessons.length) * 100

          return (
            <div
              key={module.id}
              className="card group hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedModule(module)}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${categoryColors[module.category]} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-1">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{module.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{module.lessons.length} lessons</span>
                  <span className="font-semibold text-gray-800">
                    {completedInModule} completed
                  </span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${progress}%` }} />
                </div>
              </div>

              <div className="mt-4 flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                <BookOpen className="w-4 h-4 mr-2" />
                <span>Start Learning</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Training

