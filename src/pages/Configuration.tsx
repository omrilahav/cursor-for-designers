import { useState } from 'react'
import { Settings, FileCode, Palette, Zap, Terminal, Package, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react'

interface ConfigSection {
  id: string
  title: string
  description: string
  icon: any
  items: ConfigItem[]
}

interface ConfigItem {
  title: string
  description: string
  code?: string
  file?: string
  steps?: string[]
}

const Configuration = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('cursor-settings')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const sections: ConfigSection[] = [
    {
      id: 'cursor-settings',
      title: 'Cursor Settings',
      description: 'Configure Cursor for optimal design workflow',
      icon: Settings,
      items: [
        {
          title: 'Enable AI Features',
          description: 'Make sure all AI features are turned on',
          steps: [
            'Open Settings (Cmd/Ctrl + ,)',
            'Search for "Cursor"',
            'Enable "Cursor Tab" for advanced autocomplete',
            'Enable "AI Chat" for conversational assistance',
            'Enable "Inline AI" for quick edits'
          ]
        },
        {
          title: 'Customize AI Behavior',
          description: 'Adjust how aggressive or conservative the AI is',
          steps: [
            'Settings > Cursor > AI Suggestions',
            'Set suggestion delay (default: 200ms)',
            'Choose between "Automatic" or "Manual" mode',
            'Enable/disable multi-line suggestions'
          ]
        },
        {
          title: 'Set Your Preferences',
          description: 'Personalize the editor for your workflow',
          steps: [
            'Theme: Settings > Color Theme (try Dark+ or Light+)',
            'Font Size: Settings > Font Size (14-16px recommended)',
            'Auto Save: Settings > Files > Auto Save (afterDelay)',
            'Format On Save: Settings > Editor > Format On Save (enable)'
          ]
        }
      ]
    },
    {
      id: 'cursor-rules',
      title: 'Cursor Rules (.cursorrules)',
      description: 'Tell Cursor about your project and preferences',
      icon: FileCode,
      items: [
        {
          title: 'What are Cursor Rules?',
          description: 'A .cursorrules file tells the AI about your project context, coding style, and preferences',
          steps: [
            'Create a file named ".cursorrules" in your project root',
            'Write instructions in plain English',
            'The AI reads this file and follows your guidelines',
            'Update it as your project evolves'
          ]
        },
        {
          title: 'Basic .cursorrules Template',
          description: 'A starter template for design projects',
          file: '.cursorrules',
          code: `# Project Context
This is a design prototype project. I'm a product designer learning to code.

# Tech Stack
- React with TypeScript
- Tailwind CSS for styling
- Lucide React for icons

# Design System
- Primary color: #0ea5e9 (blue)
- Secondary color: #d946ef (purple)
- Spacing: 8px base unit (8, 16, 24, 32, 48, 64)
- Border radius: 8px for cards, 6px for buttons
- Shadows: Use subtle shadows for depth

# Code Style
- Use functional components
- Prefer Tailwind classes over custom CSS
- Keep components small and reusable
- Add comments explaining design decisions
- Use descriptive names: "PrimaryButton" not "btn1"

# AI Instructions
- Explain technical concepts in simple terms
- Always consider responsive design
- Follow accessibility best practices
- Suggest improvements when relevant
- Be encouraging and educational`
        },
        {
          title: 'Advanced Rules',
          description: 'Add more specific guidelines as you learn',
          file: '.cursorrules',
          code: `# Component Structure
When creating components:
1. Create a new file in /components
2. Export as default
3. Add TypeScript props interface
4. Include usage example in comments

# Design Patterns
- Cards: white background, rounded-xl, shadow-lg, p-6
- Buttons: Use gradient backgrounds, hover effects
- Forms: Labels above inputs, clear error states
- Spacing: Generous whitespace, never cramped

# Responsive Breakpoints
- Mobile: default (< 768px)
- Tablet: md: (768px - 1024px)  
- Desktop: lg: (> 1024px)

# Don't
- Don't use any external libraries without asking
- Don't create overly complex components
- Don't use inline styles
- Don't skip accessibility attributes`
        }
      ]
    },
    {
      id: 'prettier',
      title: 'Prettier Configuration',
      description: 'Automatic code formatting for consistency',
      icon: Palette,
      items: [
        {
          title: 'Install Prettier',
          description: 'Set up automatic code formatting',
          steps: [
            'Open terminal in Cursor (Cmd/Ctrl + `)',
            'Run: npm install --save-dev prettier',
            'Create .prettierrc file (see config below)',
            'Install Prettier extension from Extensions panel'
          ]
        },
        {
          title: '.prettierrc Configuration',
          description: 'Prettier configuration for modern web projects',
          file: '.prettierrc',
          code: `{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "avoid",
  "endOfLine": "auto"
}`
        },
        {
          title: 'Format on Save',
          description: 'Automatically format when you save files',
          steps: [
            'Open Settings (Cmd/Ctrl + ,)',
            'Search "format on save"',
            'Check "Editor: Format On Save"',
            'Set "Default Formatter" to "Prettier"',
            'Now your code auto-formats on every save!'
          ]
        }
      ]
    },
    {
      id: 'tsconfig',
      title: 'TypeScript Configuration',
      description: 'Type safety for better code quality',
      icon: FileCode,
      items: [
        {
          title: 'Why TypeScript?',
          description: 'TypeScript helps catch errors before they happen',
          steps: [
            'TypeScript adds type checking to JavaScript',
            'Get better autocomplete and IntelliSense',
            'Catch bugs at development time, not runtime',
            'Makes refactoring safer',
            'Don\'t worry - Cursor helps you write TypeScript easily!'
          ]
        },
        {
          title: 'Basic tsconfig.json',
          description: 'TypeScript configuration for React projects',
          file: 'tsconfig.json',
          code: `{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "bundler",
    
    /* Type Checking */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    
    /* Other Options */
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}`
        }
      ]
    },
    {
      id: 'extensions',
      title: 'Recommended Extensions',
      description: 'Enhance Cursor with useful extensions',
      icon: Package,
      items: [
        {
          title: 'Essential Extensions for Designers',
          description: 'Install these to supercharge your workflow',
          steps: [
            'Prettier - Code formatting (already mentioned above)',
            'ESLint - Code quality checker',
            'Tailwind CSS IntelliSense - Autocomplete for Tailwind',
            'Auto Rename Tag - Rename HTML tags in pairs',
            'Color Highlight - Preview colors in code',
            'Live Server - Preview HTML files',
            'Git Graph - Visualize git history',
            'Error Lens - Inline error messages'
          ]
        },
        {
          title: 'How to Install Extensions',
          description: 'Adding extensions is easy',
          steps: [
            'Click Extensions icon in sidebar (or Cmd/Ctrl + Shift + X)',
            'Search for the extension name',
            'Click "Install"',
            'Reload Cursor if prompted',
            'Extensions work immediately!'
          ]
        }
      ]
    },
    {
      id: 'git-setup',
      title: 'Git Configuration',
      description: 'Version control for tracking changes',
      icon: Terminal,
      items: [
        {
          title: 'Initialize Git Repository',
          description: 'Start tracking your project changes',
          steps: [
            'Open terminal (Cmd/Ctrl + `)',
            'Run: git init',
            'Run: git add .',
            'Run: git commit -m "Initial commit"',
            'Your project is now under version control!'
          ]
        },
        {
          title: '.gitignore Configuration',
          description: 'Tell git which files to ignore',
          file: '.gitignore',
          code: `# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production
build/
dist/

# Misc
.DS_Store
.env
.env.local
.env.production

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor
.vscode/
.idea/
*.swp
*.swo

# OS
Thumbs.db`
        },
        {
          title: 'Using Git in Cursor',
          description: 'Visual git interface built-in',
          steps: [
            'Open Source Control panel (Cmd/Ctrl + Shift + G)',
            'See all your changes listed',
            'Click + next to files to stage them',
            'Write a commit message',
            'Click the checkmark to commit',
            'Use the ... menu for more git options'
          ]
        }
      ]
    },
    {
      id: 'workflow',
      title: 'Workspace Settings',
      description: 'Optimize your development environment',
      icon: Zap,
      items: [
        {
          title: 'Multi-Root Workspaces',
          description: 'Work with multiple projects simultaneously',
          steps: [
            'File > Add Folder to Workspace',
            'Add your design system folder',
            'Add your main project folder',
            'Save workspace: File > Save Workspace As',
            'Reopen anytime from File > Open Recent'
          ]
        },
        {
          title: 'Custom Snippets',
          description: 'Create shortcuts for common patterns',
          steps: [
            'File > Preferences > User Snippets',
            'Choose language (e.g., TypeScript React)',
            'Define your snippet (see Cursor docs)',
            'Use your snippet by typing the prefix',
            'Great for common component patterns!'
          ]
        },
        {
          title: 'Keyboard Shortcuts',
          description: 'Customize shortcuts for your workflow',
          steps: [
            'File > Preferences > Keyboard Shortcuts',
            'Search for any command',
            'Click the pencil icon to change',
            'Press your desired shortcut',
            'Hit Enter to save'
          ]
        }
      ]
    }
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2 mb-8">
        <h2 className="section-title">Configuration Guide</h2>
        <p className="text-gray-600 text-lg">
          Set up your perfect development environment
        </p>
      </div>

      {/* Quick Start Card */}
      <div className="card bg-gradient-to-br from-primary-50 to-accent-50 border-2 border-primary-200">
        <div className="flex items-start space-x-4">
          <Zap className="w-10 h-10 text-accent-500 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Quick Start</h3>
            <p className="text-gray-700 mb-3">
              New to configuration? Start with these three steps:
            </p>
            <ol className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="font-bold text-primary-600">1.</span>
                <span>Create a <code className="bg-white px-2 py-1 rounded text-sm">.cursorrules</code> file with your project context</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold text-primary-600">2.</span>
                <span>Install Prettier for automatic code formatting</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold text-primary-600">3.</span>
                <span>Install Tailwind CSS IntelliSense extension</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Configuration Sections */}
      <div className="space-y-4">
        {sections.map((section) => {
          const Icon = section.icon
          const isExpanded = expandedSection === section.id

          return (
            <div key={section.id} className="card">
              {/* Section Header */}
              <button
                onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                className="w-full flex items-center justify-between group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{section.description}</p>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>

              {/* Section Content */}
              {isExpanded && (
                <div className="mt-6 space-y-6 animate-slide-up">
                  {section.items.map((item, index) => (
                    <div key={index} className="border-l-4 border-primary-300 pl-6 space-y-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>

                      {item.steps && (
                        <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                          {item.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-start space-x-3">
                              <div className="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                                {typeof step === 'string' && step.match(/^\d+\./) ? step[0] : stepIndex + 1}
                              </div>
                              <p className="text-gray-700 flex-1">{step.replace(/^\d+\.\s*/, '')}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {item.code && (
                        <div className="relative">
                          {item.file && (
                            <div className="flex items-center justify-between bg-gray-800 text-white px-4 py-2 rounded-t-lg">
                              <code className="text-sm">{item.file}</code>
                              <button
                                onClick={() => handleCopy(item.code!, `${section.id}-${index}`)}
                                className="flex items-center space-x-2 text-sm hover:text-primary-300 transition-colors"
                              >
                                {copiedCode === `${section.id}-${index}` ? (
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
                          )}
                          <pre className={`bg-gray-900 text-gray-100 p-4 overflow-x-auto text-sm ${item.file ? 'rounded-b-lg' : 'rounded-lg'}`}>
                            <code>{item.code}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Help Card */}
      <div className="card bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
        <div className="text-center space-y-3">
          <Settings className="w-10 h-10 text-purple-500 mx-auto" />
          <h3 className="text-xl font-bold text-gray-800">Need Help?</h3>
          <p className="text-gray-600">
            Don't worry if this seems overwhelming! You can always ask Cursor's AI to help you set up configurations.
            Just open the chat (Cmd/Ctrl + L) and ask: "Help me set up Prettier" or "How do I configure TypeScript?"
          </p>
        </div>
      </div>
    </div>
  )
}

export default Configuration

