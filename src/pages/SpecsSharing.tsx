import { 
  Share2, FileCode, MessageSquare, Github, FileText, 
  Users, CheckCircle, Lightbulb, Download, Link as LinkIcon 
} from 'lucide-react'

interface SharingMethod {
  id: string
  title: string
  description: string
  icon: any
  difficulty: 'Easy' | 'Intermediate' | 'Advanced'
  steps: string[]
  tips: string[]
  example?: string
}

const SpecsSharing = () => {
  const methods: SharingMethod[] = [
    {
      id: 'code-comments',
      title: 'Code with Comments',
      description: 'Share well-commented code that explains your design decisions',
      icon: FileCode,
      difficulty: 'Easy',
      steps: [
        'Write your component code in Cursor',
        'Add comments explaining design decisions',
        'Document props and usage',
        'Include responsive behavior notes',
        'Export and share the file'
      ],
      tips: [
        'Explain the "why" behind design choices',
        'Document color codes and spacing values',
        'Note any browser-specific considerations',
        'Include examples of different states (hover, active, disabled)'
      ],
      example: `// Primary Button Component
// Design: Modern, gradient background with hover lift effect
// Used for: Main call-to-action buttons throughout the app

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const PrimaryButton = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      // Gradient from primary blue to darker blue
      // Hover: Lifts up 2px and increases shadow
      className="
        bg-gradient-to-r from-blue-500 to-blue-600
        text-white px-6 py-3 rounded-lg
        font-semibold
        hover:-translate-y-0.5 hover:shadow-lg
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200
      "
    >
      {children}
    </button>
  );
};

// Usage:
// <PrimaryButton onClick={handleSubmit}>Submit Form</PrimaryButton>`
    },
    {
      id: 'design-system-doc',
      title: 'Design System Documentation',
      description: 'Create a comprehensive design system file',
      icon: FileText,
      difficulty: 'Intermediate',
      steps: [
        'Create a design-system.md or design-tokens.ts file',
        'Document all colors with hex codes',
        'List spacing scale and typography',
        'Include component examples',
        'Add screenshots or live previews',
        'Keep it updated as designs evolve'
      ],
      tips: [
        'Use the same naming convention as your design tool (Figma)',
        'Group related tokens (colors, spacing, typography)',
        'Show visual examples, not just code',
        'Make it easy to search and reference'
      ],
      example: `# Design System

## Colors

### Primary Palette
- Primary Blue: #0ea5e9
- Primary Dark: #0284c7
- Primary Light: #38bdf8

### Secondary Palette  
- Accent Purple: #d946ef
- Accent Dark: #c026d3
- Accent Light: #e879f9

### Neutrals
- Text Dark: #1f2937
- Text Medium: #6b7280
- Text Light: #9ca3af
- Background: #ffffff

## Spacing Scale
Based on 8px unit

- xs: 4px (0.5 unit)
- sm: 8px (1 unit)
- md: 16px (2 units)
- lg: 24px (3 units)
- xl: 32px (4 units)
- 2xl: 48px (6 units)

## Typography

### Headings
- H1: 2.5rem (40px), bold, line-height 1.2
- H2: 2rem (32px), bold, line-height 1.3
- H3: 1.5rem (24px), semibold, line-height 1.4

### Body
- Large: 1.125rem (18px), regular
- Base: 1rem (16px), regular
- Small: 0.875rem (14px), regular

## Component Patterns

### Buttons
- Height: 44px (comfortable touch target)
- Padding: 24px horizontal, 12px vertical
- Border radius: 8px
- Font: 16px, semibold

### Cards
- Background: White
- Border radius: 12px
- Padding: 24px
- Shadow: 0 4px 6px rgba(0,0,0,0.1)`
    },
    {
      id: 'interactive-demo',
      title: 'Interactive Prototype',
      description: 'Share a working prototype developers can interact with',
      icon: Share2,
      difficulty: 'Intermediate',
      steps: [
        'Build your designs in Cursor',
        'Deploy to a hosting service (Vercel, Netlify)',
        'Share the live URL with your team',
        'Developers can inspect the live code',
        'Update and redeploy as needed'
      ],
      tips: [
        'Live demos are better than static screenshots',
        'Developers can inspect elements in browser DevTools',
        'Include all interactive states and animations',
        'Add a README with deployment instructions'
      ]
    },
    {
      id: 'github-repo',
      title: 'GitHub Repository',
      description: 'Version-controlled code sharing for teams',
      icon: Github,
      difficulty: 'Advanced',
      steps: [
        'Initialize git in your project (git init)',
        'Create a GitHub repository',
        'Push your code: git push origin main',
        'Add a comprehensive README',
        'Invite developers as collaborators',
        'They can clone and run locally'
      ],
      tips: [
        'Include setup instructions in README',
        'List all dependencies and how to install them',
        'Document the folder structure',
        'Use meaningful commit messages',
        'Create branches for different features'
      ],
      example: `# Project Setup

## Installation
\`\`\`bash
git clone https://github.com/username/project.git
cd project
npm install
npm run dev
\`\`\`

## Project Structure
\`\`\`
/src
  /components  - Reusable UI components
  /pages       - Page-level components
  /styles      - Design system and global styles
\`\`\`

## Design Tokens
See \`src/styles/design-system.ts\` for all colors, spacing, and typography.

## Components
- Button: Primary and secondary variants
- Card: Standard content card with hover effects
- Modal: Overlay dialog component`
    },
    {
      id: 'figma-to-code',
      title: 'Figma to Code Handoff',
      description: 'Bridge the gap between Figma and implementation',
      icon: LinkIcon,
      difficulty: 'Intermediate',
      steps: [
        'Design in Figma with clear naming',
        'Use Figma\'s "Inspect" panel for specs',
        'Build the same design in Cursor',
        'Share both Figma file AND working code',
        'Map Figma components to code components',
        'Document any differences or technical constraints'
      ],
      tips: [
        'Keep component names consistent between Figma and code',
        'Export assets from Figma as needed',
        'Note any animations that can\'t be shown in Figma',
        'Explain responsive behavior not visible in static designs'
      ]
    },
    {
      id: 'storybook',
      title: 'Storybook Documentation',
      description: 'Interactive component showcase',
      icon: FileText,
      difficulty: 'Advanced',
      steps: [
        'Install Storybook in your project',
        'Create stories for each component',
        'Show all component variants and states',
        'Add documentation with props and usage',
        'Deploy Storybook for team access',
        'Keep stories updated with components'
      ],
      tips: [
        'Show every possible state of a component',
        'Include do\'s and don\'ts examples',
        'Add interactive controls for props',
        'Great for component libraries'
      ]
    }
  ]

  const bestPractices = [
    {
      icon: CheckCircle,
      title: 'Be Clear and Specific',
      description: 'Document exact values for colors, spacing, and sizing. Avoid vague terms like "a bit bigger" or "blueish".'
    },
    {
      icon: Users,
      title: 'Think from Developer Perspective',
      description: 'Include technical details like responsive breakpoints, state changes, and edge cases.'
    },
    {
      icon: FileCode,
      title: 'Share Working Code',
      description: 'Don\'t just share designs - share actual working code that developers can use as reference.'
    },
    {
      icon: MessageSquare,
      title: 'Stay Available',
      description: 'Be available to answer questions and clarify design decisions during implementation.'
    },
    {
      icon: Download,
      title: 'Provide All Assets',
      description: 'Include images, icons, fonts, and any other assets needed for implementation.'
    },
    {
      icon: Lightbulb,
      title: 'Explain the Why',
      description: 'Don\'t just show what to build - explain why you made specific design decisions.'
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-700'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-700'
      case 'Advanced':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-2 mb-8">
        <h2 className="section-title">Sharing Specs with Developers</h2>
        <p className="text-gray-600 text-lg">
          Bridge the design-development gap with clear communication
        </p>
      </div>

      {/* Introduction Card */}
      <div className="card bg-gradient-to-br from-primary-50 to-accent-50 border-2 border-primary-200">
        <div className="flex items-start space-x-4">
          <Share2 className="w-10 h-10 text-accent-500 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Why This Matters</h3>
            <p className="text-gray-700 mb-3">
              As a designer who codes, you have a unique advantage: you can share not just what to build, 
              but HOW to build it. Working code is infinitely more valuable than static mockups.
            </p>
            <p className="text-gray-700">
              Below are different methods for sharing your designs and specs with development teams, 
              from simple to advanced.
            </p>
          </div>
        </div>
      </div>

      {/* Sharing Methods */}
      <div className="space-y-6">
        {methods.map((method) => {
          const Icon = method.icon
          
          return (
            <div key={method.id} className="card space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-800">{method.title}</h3>
                      <span className={`badge ${getDifficultyColor(method.difficulty)}`}>
                        {method.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600">{method.description}</p>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">📋 Steps:</h4>
                <div className="space-y-2">
                  {method.steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 flex-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="bg-accent-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">💡 Pro Tips:</h4>
                <div className="space-y-2">
                  {method.tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0 mt-2" />
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Example */}
              {method.example && (
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">📄 Example:</h4>
                  <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
                    <code>{method.example}</code>
                  </pre>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Best Practices Grid */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-800 text-center">
          Best Practices for Designer-Developer Collaboration
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestPractices.map((practice, index) => {
            const Icon = practice.icon
            
            return (
              <div key={index} className="card text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-800">{practice.title}</h4>
                <p className="text-gray-600 text-sm">{practice.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Workflow Example */}
      <div className="card bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
          <Lightbulb className="w-6 h-6 text-purple-500" />
          <span>Real-World Workflow Example</span>
        </h3>
        
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
              1
            </div>
            <div>
              <p className="font-semibold">Design in Figma</p>
              <p className="text-sm text-gray-600">Create your mockups and prototypes in Figma</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
              2
            </div>
            <div>
              <p className="font-semibold">Build in Cursor</p>
              <p className="text-sm text-gray-600">Use Cursor to turn your designs into working code</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
              3
            </div>
            <div>
              <p className="font-semibold">Add Documentation</p>
              <p className="text-sm text-gray-600">Comment your code and create a design system doc</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
              4
            </div>
            <div>
              <p className="font-semibold">Share Both</p>
              <p className="text-sm text-gray-600">Give developers both the Figma file and working code</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
              5
            </div>
            <div>
              <p className="font-semibold">Collaborate</p>
              <p className="text-sm text-gray-600">Stay available for questions and iterate together</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="card text-center space-y-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
        <Users className="w-12 h-12 mx-auto" />
        <h3 className="text-2xl font-bold">Start Building Better Handoffs</h3>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          The best handoff is working code with clear documentation. 
          Use Cursor to bridge the gap between design and development!
        </p>
      </div>
    </div>
  )
}

export default SpecsSharing

