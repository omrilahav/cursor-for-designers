import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Layout, Folder, File, Search, Play, Terminal as TerminalIcon,
  ChevronRight, CheckCircle, ArrowRight 
} from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

interface ContentBlock {
  heading?: string
  text?: string
  image?: string
  description?: string
  shortcut?: string
  when?: string
  example?: string
  tip?: string
  usage?: string
  details?: any[]
  tips?: string[]
  examples?: string[]
  shortcuts?: string[]
  steps?: any[]
}

interface Section {
  id: string
  title: string
  icon: any
  description: string
  content: ContentBlock[]
  exercise?: {
    title: string
    steps: string[]
  }
}

const IDEBasics = () => {
  const { completeLesson } = useProgress()
  const [completed, setCompleted] = useState<Set<string>>(new Set())

  const sections: Section[] = [
    {
      id: 'interface-overview',
      title: 'The Cursor Interface - Your New Workspace',
      icon: Layout,
      description: 'Understanding what you see when you open Cursor',
      content: [
        {
          heading: '🖥️ The Big Picture',
          text: 'When you first open Cursor, you see several areas. Don\'t panic - each has a simple purpose!',
          image: '/screenshots/cursor-interface.png'
        },
        {
          heading: 'Left Sidebar - Your File Cabinet',
          details: [
            {
              name: 'Explorer (Top Icon)',
              description: 'Shows all your files and folders, like Finder or Windows Explorer',
              shortcut: 'Cmd+Shift+E (Mac) or Ctrl+Shift+E (Windows)',
              usage: 'Click any file to open it in the main area'
            },
            {
              name: 'Search (Magnifying Glass)',
              description: 'Find text across all your files instantly',
              shortcut: 'Cmd+Shift+F or Ctrl+Shift+F',
              usage: 'Type what you\'re looking for, see all matches'
            },
            {
              name: 'Source Control (Branch Icon)',
              description: 'Git integration - save and track your changes',
              shortcut: 'Cmd+Shift+G or Ctrl+Shift+G',
              usage: 'See what you\'ve changed, save progress'
            },
            {
              name: 'Extensions (Blocks Icon)',
              description: 'Add extra features to Cursor',
              shortcut: 'Cmd+Shift+X or Ctrl+Shift+X',
              usage: 'Install tools like Prettier, color highlighters, etc.'
            }
          ]
        },
        {
          heading: 'Center Area - Your Canvas',
          text: 'This is where you view and edit your code. You can have multiple files open in tabs, just like a web browser.',
          tips: [
            'Click a tab to switch between open files',
            'Drag tabs to reorder them',
            'Click the X on a tab to close it',
            'Hold Cmd/Ctrl and click a tab to close it quickly',
            'Split the editor to see two files side-by-side'
          ]
        },
        {
          heading: 'Bottom Panel - The Terminal & Output',
          text: 'This area shows you what\'s happening "behind the scenes"',
          details: [
            {
              name: 'Terminal',
              description: 'Type commands like "npm install" or "npm run dev"',
              usage: 'Most of the time, you\'ll just run 1-2 simple commands here'
            },
            {
              name: 'Problems',
              description: 'Lists errors in your code automatically',
              usage: 'If something\'s wrong, it shows up here with suggestions'
            },
            {
              name: 'Output',
              description: 'Shows messages from tools and extensions',
              usage: 'Usually you don\'t need to look here unless debugging'
            },
            {
              name: 'Debug Console',
              description: 'Advanced: for finding bugs in your code',
              usage: 'You probably won\'t need this when starting out'
            }
          ]
        },
        {
          heading: 'Right Sidebar - AI Chat & More',
          text: 'This is where Cursor\'s AI magic happens!',
          tips: [
            'Press Cmd+L (Ctrl+L) to open AI chat',
            'Ask questions in plain English',
            'Reference files with @filename',
            'Get explanations, suggestions, and help'
          ]
        }
      ],
      exercise: {
        title: 'Try It: Navigate the Interface',
        steps: [
          'Open Cursor',
          'Press Cmd+Shift+E (Ctrl+Shift+E) to make sure the file explorer is visible',
          'Press Cmd+B (Ctrl+B) to hide/show the left sidebar - try it a few times!',
          'Press Cmd+J (Ctrl+J) to toggle the bottom panel',
          'Press Cmd+L (Ctrl+L) to open the AI chat',
          'Congratulations! You just navigated the interface like a pro!'
        ]
      }
    },
    {
      id: 'opening-folders',
      title: 'Opening Your First Project',
      icon: Folder,
      description: 'How to open and organize your project files',
      content: [
        {
          heading: '📂 What is a Project?',
          text: 'A "project" is just a folder on your computer with related files. For example, your portfolio website would be one project with all its files inside one main folder.'
        },
        {
          heading: 'Opening a Folder',
          steps: [
            {
              step: '1. Click File menu (top left)',
              details: 'Or press Cmd+O (Mac) / Ctrl+O (Windows)'
            },
            {
              step: '2. Select "Open Folder..."',
              details: 'NOT "Open File" - you want to open the whole project folder'
            },
            {
              step: '3. Navigate to your project folder',
              details: 'Choose the folder that contains all your project files'
            },
            {
              step: '4. Click "Open"',
              details: 'The folder appears in the left sidebar'
            }
          ]
        },
        {
          heading: '🆕 Creating a New Project',
          steps: [
            {
              step: '1. Create a new folder on your computer',
              details: 'Name it something like "my-first-project"'
            },
            {
              step: '2. Open that folder in Cursor',
              details: 'Use File > Open Folder'
            },
            {
              step: '3. Create a new file',
              details: 'Click the "New File" icon in the sidebar or press Cmd+N'
            },
            {
              step: '4. Save the file',
              details: 'Press Cmd+S (Ctrl+S) and give it a name like "index.html"'
            }
          ]
        },
        {
          heading: '🎨 Best Practices for Organization',
          tips: [
            'Keep one folder per project - don\'t mix different projects together',
            'Use clear names: "portfolio-site" not "stuff" or "asdf"',
            'Create subfolders for organization: /components, /images, /styles',
            'Open Cursor fresh for each project (File > Open Folder)',
            'Close folders you\'re not working on to avoid confusion'
          ]
        }
      ],
      exercise: {
        title: 'Try It: Create Your First Project',
        steps: [
          'Create a new folder on your Desktop called "cursor-practice"',
          'Open Cursor',
          'Go to File > Open Folder and select your new folder',
          'Click the "New File" icon or press Cmd+N (Ctrl+N)',
          'Type "Hello, Cursor!" in the file',
          'Press Cmd+S (Ctrl+S) to save, name it "test.txt"',
          'See your file appear in the left sidebar - you did it!'
        ]
      }
    },
    {
      id: 'editing-files',
      title: 'Editing Files Like a Pro',
      icon: File,
      description: 'Essential editing skills and shortcuts',
      content: [
        {
          heading: '⌨️ Basic Editing',
          text: 'Editing in Cursor works like any text editor, but with superpowers!',
          details: [
            {
              name: 'Basic Typing',
              description: 'Just click in the file and start typing - it\'s that simple!'
            },
            {
              name: 'Save Your Work',
              description: 'Cmd+S (Ctrl+S) - Get in the habit of saving frequently!',
              tip: 'You can enable Auto Save in Settings so it saves automatically'
            },
            {
              name: 'Undo & Redo',
              description: 'Cmd+Z (Ctrl+Z) to undo, Cmd+Shift+Z (Ctrl+Shift+Z) to redo',
              tip: 'Cursor remembers hundreds of steps, so undo fearlessly!'
            },
            {
              name: 'Cut, Copy, Paste',
              description: 'Same as any app: Cmd+X, Cmd+C, Cmd+V (Ctrl on Windows)',
              tip: 'Copy entire lines without selecting them first!'
            }
          ]
        },
        {
          heading: '🔍 Finding & Replacing Text',
          details: [
            {
              name: 'Find in Current File',
              shortcut: 'Cmd+F (Ctrl+F)',
              description: 'Type what you\'re looking for, hit Enter to jump between matches',
              usage: 'Great for finding a specific function or variable name'
            },
            {
              name: 'Replace in Current File',
              shortcut: 'Cmd+H (Ctrl+H)',
              description: 'Find and replace text - be careful with "Replace All"!',
              usage: 'Perfect for renaming things consistently'
            },
            {
              name: 'Find in All Files',
              shortcut: 'Cmd+Shift+F (Ctrl+Shift+F)',
              description: 'Search your entire project at once',
              usage: 'Find where you used a specific color code or component name'
            }
          ]
        },
        {
          heading: '⚡ Power User Moves',
          tips: [
            'Multi-cursor: Hold Alt/Option and click to add cursors in multiple places',
            'Select all instances: Cmd+D (Ctrl+D) repeatedly selects the next occurrence of selected text',
            'Move lines: Alt+Up/Down (Option+Up/Down) moves the current line up or down',
            'Delete line: Cmd+Shift+K (Ctrl+Shift+K) deletes the entire current line',
            'Comment/uncomment: Cmd+/ (Ctrl+/) toggles comments on selected lines',
            'Format code: Shift+Alt+F (Shift+Alt+F) auto-formats your code beautifully'
          ]
        }
      ],
      exercise: {
        title: 'Try It: Master Editing',
        steps: [
          'Create a new file (Cmd+N / Ctrl+N)',
          'Type: "Hello World" three times on separate lines',
          'Press Cmd+D (Ctrl+D) with "Hello" selected - watch it select the next one!',
          'Press Cmd+D again - now all three are selected!',
          'Type "Hi" to replace all three at once',
          'Undo with Cmd+Z (Ctrl+Z)',
          'Hold Alt/Option and click on three different lines - you now have three cursors!',
          'Type anything and watch it appear in all three places',
          'Mind = blown! 🤯'
        ]
      }
    },
    {
      id: 'quick-navigation',
      title: 'Lightning-Fast Navigation',
      icon: Search,
      description: 'Find anything instantly without scrolling',
      content: [
        {
          heading: '🚀 Quick Open - Your New Best Friend',
          shortcut: 'Cmd+P (Ctrl+P)',
          text: 'This is THE most important shortcut. It opens a quick file finder.',
          details: [
            'Press Cmd+P (Ctrl+P)',
            'Start typing any part of a filename',
            'See results instantly - no need to navigate through folders!',
            'Press Enter to open the file',
            'Use arrow keys to select if there are multiple matches'
          ],
          example: 'To open "UserProfile.tsx", just press Cmd+P and type "user" - done!'
        },
        {
          heading: '🎯 Go to Symbol',
          shortcut: 'Cmd+Shift+O (Ctrl+Shift+O)',
          text: 'Jump to functions, classes, or variables in the current file',
          usage: 'Have a huge file? Type the function name and jump right to it!'
        },
        {
          heading: '↩️ Jump Back & Forward',
          shortcuts: [
            'Cmd+- (Ctrl+-): Go back to your previous location',
            'Cmd+Shift+- (Ctrl+Shift+-): Go forward again'
          ],
          text: 'Like back/forward buttons in a browser, but for code!'
        },
        {
          heading: '📋 Go to Line',
          shortcut: 'Ctrl+G',
          text: 'If someone says "check line 42", press Ctrl+G, type 42, hit Enter!',
          tip: 'Also works with ":" in Quick Open: "Cmd+P" then type ":42"'
        }
      ],
      exercise: {
        title: 'Try It: Navigate Like Lightning',
        steps: [
          'Create 3 files: "home.txt", "about.txt", "contact.txt"',
          'Put some text in each file',
          'Press Cmd+P (Ctrl+P)',
          'Type "home" - see it appear instantly!',
          'Press Enter to open it',
          'Press Cmd+P again, type "about", open it',
          'Press Cmd+- (Ctrl+-) to go back to home.txt',
          'Press Cmd+Shift+- to go forward to about.txt',
          'You just navigated without using the mouse at all!'
        ]
      }
    },
    {
      id: 'ai-integration',
      title: 'Using AI in the IDE',
      icon: Play,
      description: 'Leverage Cursor\'s AI superpowers',
      content: [
        {
          heading: '🤖 Three Ways to Use AI',
          text: 'Cursor has three main AI features, each for different situations:'
        },
        {
          heading: '1. Inline Edit (Cmd+K / Ctrl+K)',
          description: 'Generate or modify code directly where your cursor is',
          when: 'Use when you know exactly what you want to create or change',
          examples: [
            'Place cursor in empty space, press Cmd+K, type: "Create a blue button"',
            'Select existing code, press Cmd+K, type: "Add hover effect"',
            'Place cursor in a function, press Cmd+K, type: "Add error handling"'
          ],
          tips: [
            'Be specific: "Create a button" vs "Create a rounded blue button with shadow"',
            'The AI sees your surrounding code for context',
            'Press Tab to accept, Esc to reject',
            'You can accept then immediately Cmd+K again to refine'
          ]
        },
        {
          heading: '2. AI Chat (Cmd+L / Ctrl+L)',
          description: 'Have a conversation with AI about your code',
          when: 'Use for questions, explanations, planning, or complex requests',
          examples: [
            '"How should I structure this component?"',
            '"What does this code do?" (with code selected)',
            '"Why isn\'t my button centering?"',
            '"Explain React hooks in simple terms"'
          ],
          tips: [
            'Chat remembers your conversation - you can ask follow-ups',
            'Use @filename to reference specific files',
            'Great for learning - ask "why" and "how" questions',
            'The AI can see your entire project for context'
          ]
        },
        {
          heading: '3. Tab Autocomplete',
          description: 'AI predicts what you\'re going to type next',
          when: 'Always on - just start typing and press Tab to accept suggestions',
          examples: [
            'Type "const btn" and AI suggests the rest of the variable',
            'Start typing a function name, AI completes it',
            'Write a comment describing what you want, AI writes the code'
          ],
          tips: [
            'Gray text = AI suggestion, press Tab to accept',
            'If you don\'t like a suggestion, just keep typing',
            'Works across multiple lines',
            'Gets smarter as it learns your coding style'
          ]
        },
        {
          heading: '💡 Pro Tips for Working with AI',
          tips: [
            'Be conversational: "Can you help me..." works great',
            'Provide context: "I\'m building a profile card that needs..."',
            'Iterate: Get something basic first, then refine it',
            'Ask for explanations: "Why did you use this approach?"',
            'Reference your design system: "Use colors from @design-system.ts"',
            'Don\'t be afraid to reject and try again with clearer instructions'
          ]
        }
      ],
      exercise: {
        title: 'Try It: AI in Action',
        steps: [
          'Create a new file: "test.html"',
          'Place your cursor inside and press Cmd+K (Ctrl+K)',
          'Type: "Create a button that says Click Me"',
          'Press Enter and watch the AI generate code',
          'Press Tab to accept the suggestion',
          'Now press Cmd+L (Ctrl+L) to open chat',
          'Ask: "How can I make this button blue?"',
          'Read the AI\'s response',
          'Try implementing the suggestion',
          'Congratulations - you just coded with AI!'
        ]
      }
    }
  ]

  const handleCompleteSection = (sectionId: string) => {
    const newCompleted = new Set(completed)
    newCompleted.add(sectionId)
    setCompleted(newCompleted)
    completeLesson(`ide-${sectionId}`, 'training')
  }

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Hero */}
      <div className="card bg-gradient-to-br from-blue-500 to-purple-500 text-white text-center space-y-4">
        <Layout className="w-16 h-16 mx-auto" />
        <h1 className="text-4xl font-bold">IDE Basics: Your Complete Guide</h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Master the Cursor interface from absolute zero to confident navigation
        </p>
      </div>

      {/* Progress Bar */}
      <div className="card">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-gray-700">Your Progress</span>
          <span className="text-sm text-gray-600">{completed.size} / {sections.length} completed</span>
        </div>
        <div className="progress-bar h-3">
          <div 
            className="progress-fill" 
            style={{ width: `${(completed.size / sections.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Sections */}
      {sections.map((section) => {
        const Icon = section.icon
        const isCompleted = completed.has(section.id)

        return (
          <div key={section.id} className="card space-y-6">
            {/* Section Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4 flex-1">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{section.title}</h2>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              </div>
              {isCompleted && (
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
              )}
            </div>

            {/* Content */}
            <div className="space-y-6">
              {section.content.map((block, index) => (
                <div key={index} className="space-y-3">
                  {block.heading && (
                    <h3 className="text-xl font-bold text-gray-800">{block.heading}</h3>
                  )}
                  {block.text && (
                    <p className="text-gray-700 leading-relaxed">{block.text}</p>
                  )}
                  {block.shortcut && (
                    <div className="inline-block">
                      <kbd className="px-3 py-2 bg-gray-800 text-white rounded font-mono text-sm">
                        {block.shortcut}
                      </kbd>
                    </div>
                  )}
                  {block.description && (
                    <p className="text-gray-600 italic">{block.description}</p>
                  )}
                  {block.when && (
                    <p className="text-primary-600"><strong>When to use:</strong> {block.when}</p>
                  )}
                  {block.example && (
                    <div className="bg-green-50 border-l-4 border-green-500 p-4">
                      <p className="text-gray-700"><strong>Example:</strong> {block.example}</p>
                    </div>
                  )}
                  {block.details && (
                    <div className="space-y-3">
                      {block.details.map((detail: any, i: number) => (
                        <div key={i} className="bg-blue-50 rounded-lg p-4">
                          <div className="font-bold text-gray-800 mb-1">{detail.name || detail.step}</div>
                          <p className="text-gray-700 mb-2">{detail.description || detail.details}</p>
                          {detail.shortcut && (
                            <kbd className="px-2 py-1 bg-gray-800 text-white rounded font-mono text-xs">
                              {detail.shortcut}
                            </kbd>
                          )}
                          {detail.usage && (
                            <p className="text-gray-600 text-sm mt-2">💡 {detail.usage}</p>
                          )}
                          {detail.tip && (
                            <p className="text-accent-600 text-sm mt-2">✨ Tip: {detail.tip}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {block.tips && (
                    <div className="bg-yellow-50 rounded-lg p-4 space-y-2">
                      {block.tips.map((tip: string, i: number) => (
                        <div key={i} className="flex items-start space-x-2">
                          <ChevronRight className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700">{tip}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {block.examples && (
                    <div className="bg-purple-50 rounded-lg p-4 space-y-2">
                      <p className="font-bold text-gray-800 mb-2">Examples:</p>
                      {block.examples.map((ex: string, i: number) => (
                        <div key={i} className="flex items-start space-x-2">
                          <span className="text-purple-600 font-bold">{i + 1}.</span>
                          <p className="text-gray-700">{ex}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {block.shortcuts && (
                    <div className="space-y-2">
                      {block.shortcuts.map((sc: string, i: number) => (
                        <div key={i} className="bg-gray-50 rounded p-3">
                          <p className="text-gray-700">{sc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {block.steps && (
                    <div className="space-y-2">
                      {block.steps.map((step: any, i: number) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {i + 1}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{step.step || step}</p>
                            {step.details && <p className="text-gray-600 text-sm">{step.details}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Exercise */}
            {section.exercise && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                  <span>🎯</span>
                  <span>{section.exercise.title}</span>
                </h3>
                <div className="space-y-2">
                  {section.exercise.steps.map((step, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-gray-700 flex-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Complete Button */}
            {!isCompleted && (
              <button
                onClick={() => handleCompleteSection(section.id)}
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Mark as Complete</span>
              </button>
            )}
          </div>
        )
      })}

      {/* Next Steps */}
      <div className="card bg-gradient-to-r from-primary-500 to-accent-500 text-white text-center space-y-4">
        <h2 className="text-2xl font-bold">You're Now an IDE Pro! 🎉</h2>
        <p className="text-lg opacity-90">
          You know how to navigate Cursor like a professional developer.
          Ready to learn the terminal?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/terminal-basics" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
            <TerminalIcon className="w-5 h-5" />
            <span>Learn Terminal Basics</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IDEBasics

