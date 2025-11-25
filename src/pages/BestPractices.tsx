import { 
  Lightbulb, CheckCircle, AlertCircle, Sparkles, Code, 
  Layout, Palette, FileText, Users, Rocket 
} from 'lucide-react'

interface Practice {
  id: string
  category: string
  icon: any
  title: string
  description: string
  dos: string[]
  donts: string[]
  examples?: { good: string; bad: string; explanation: string }[]
}

const BestPractices = () => {
  const practices: Practice[] = [
    {
      id: 'ai-prompts',
      category: 'AI Communication',
      icon: Sparkles,
      title: 'Writing Effective AI Prompts',
      description: 'How to communicate clearly with AI for best results',
      dos: [
        'Be specific and descriptive: "Create a blue primary button with rounded corners"',
        'Provide context: "This button will be used in a form submission"',
        'Reference existing patterns: "Similar to the UserCard component"',
        'Iterate: Start simple, then refine with follow-up requests',
        'Use design terminology you know: "Add a subtle drop shadow"'
      ],
      donts: [
        'Don\'t be too vague: "Make it nice" won\'t give good results',
        'Don\'t expect perfection on first try - be ready to iterate',
        'Don\'t forget to specify important details like colors, spacing',
        'Don\'t ask for everything at once - break it into steps',
        'Don\'t use overly technical jargon if you\'re not sure'
      ],
      examples: [
        {
          good: '"Create a card component with an image at the top, title, description, and a call-to-action button at the bottom. Use rounded corners and a subtle shadow."',
          bad: '"Make a card"',
          explanation: 'The good example provides specific details about layout, content, and styling, making it clear what you want.'
        }
      ]
    },
    {
      id: 'code-organization',
      category: 'Project Structure',
      icon: Layout,
      title: 'Organizing Your Design Code',
      description: 'Keep your projects clean and maintainable',
      dos: [
        'Create separate files for each component',
        'Group related components in folders',
        'Use clear, descriptive names: "PrimaryButton.tsx" not "btn1.tsx"',
        'Keep a design-system or styles file with your colors and spacing',
        'Document your component props and usage',
        'Create a components library you can reuse'
      ],
      donts: [
        'Don\'t put everything in one massive file',
        'Don\'t use cryptic abbreviations',
        'Don\'t mix concerns - keep styling separate from logic when possible',
        'Don\'t forget to clean up unused code',
        'Don\'t hardcode colors everywhere - use variables'
      ],
      examples: [
        {
          good: `components/
  Button/
    PrimaryButton.tsx
    SecondaryButton.tsx
  Card/
    UserCard.tsx
    ProductCard.tsx
styles/
  design-system.ts`,
          bad: `AllMyStuff.tsx
component1.tsx
component2.tsx
test.tsx`,
          explanation: 'Good organization makes it easy to find and update components. Group related files and use clear names.'
        }
      ]
    },
    {
      id: 'design-tokens',
      category: 'Design System',
      icon: Palette,
      title: 'Using Design Tokens',
      description: 'Maintain consistency with a design system',
      dos: [
        'Define your colors, spacing, and typography in one place',
        'Use variables instead of hardcoded values',
        'Create a clear naming convention: primary, secondary, accent',
        'Document your design decisions',
        'Share your design system file with developers',
        'Use the same token names as your design tool (Figma, etc.)'
      ],
      donts: [
        'Don\'t use random color codes throughout your code',
        'Don\'t mix different spacing scales (e.g., 8, 10, 12 instead of 8, 16, 24)',
        'Don\'t create too many variations - keep it simple',
        'Don\'t forget to update all instances when changing a token'
      ],
      examples: [
        {
          good: `const colors = {
  primary: '#0ea5e9',
  secondary: '#d946ef',
  text: '#1f2937',
  background: '#ffffff'
}

// Usage: color: colors.primary`,
          bad: `// Random colors everywhere
color: '#0ea5e9'
color: '#0da5e8'  // slightly different!
color: 'blue'
color: 'rgb(14, 165, 233)'`,
          explanation: 'Centralizing design tokens ensures consistency and makes updates easy. One change updates everywhere.'
        }
      ]
    },
    {
      id: 'responsive-design',
      category: 'Layout & Styling',
      icon: Layout,
      title: 'Building Responsive Designs',
      description: 'Create designs that work on all devices',
      dos: [
        'Start with mobile first, then add desktop features',
        'Use relative units (rem, %, vh) instead of fixed pixels',
        'Test on multiple screen sizes',
        'Use CSS Grid and Flexbox for flexible layouts',
        'Ask AI to "make this responsive" and then refine',
        'Consider touch targets on mobile (larger buttons)'
      ],
      donts: [
        'Don\'t design only for your screen size',
        'Don\'t use fixed widths for everything',
        'Don\'t forget about tablet sizes',
        'Don\'t make mobile users scroll horizontally',
        'Don\'t make touch targets too small (<44px)'
      ],
      examples: [
        {
          good: `// Responsive grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"

// Responsive text
className="text-sm md:text-base lg:text-lg"`,
          bad: `// Fixed width
width: "1200px"

// Fixed everywhere
className="grid grid-cols-3"  // breaks on mobile!`,
          explanation: 'Use responsive utilities that adapt to screen size. Mobile users are 50%+ of traffic!'
        }
      ]
    },
    {
      id: 'iteration',
      category: 'Workflow',
      icon: Rocket,
      title: 'Iterating with AI',
      description: 'Build better designs through iteration',
      dos: [
        'Start with a simple version, then enhance it',
        'Make one change at a time so you can track what works',
        'Save versions before major changes',
        'Ask specific questions: "Can we make the spacing more generous?"',
        'Review the generated code to learn patterns',
        'Experiment! Try different approaches'
      ],
      donts: [
        'Don\'t expect perfection on the first attempt',
        'Don\'t make too many changes at once',
        'Don\'t accept code you don\'t understand - ask AI to explain',
        'Don\'t be afraid to start over if it\'s not working',
        'Don\'t skip testing as you build'
      ],
      examples: [
        {
          good: `1. "Create a simple card component"
2. "Add a hover effect that lifts the card"
3. "Make the image have rounded top corners"
4. "Add a subtle gradient to the background"`,
          bad: `"Create a perfect card component with animations, gradients, shadows, hover effects, responsive design, and accessibility features all at once"`,
          explanation: 'Breaking down into steps gives you control and helps you learn. You can adjust each aspect individually.'
        }
      ]
    },
    {
      id: 'accessibility',
      category: 'User Experience',
      icon: Users,
      title: 'Designing for Accessibility',
      description: 'Make your designs usable for everyone',
      dos: [
        'Use sufficient color contrast (check with contrast checkers)',
        'Add alt text to images',
        'Ensure keyboard navigation works',
        'Use semantic HTML elements (button, nav, header)',
        'Test with screen readers',
        'Make interactive elements clearly visible'
      ],
      donts: [
        'Don\'t rely on color alone to convey information',
        'Don\'t use tiny text (minimum 16px for body text)',
        'Don\'t create keyboard traps',
        'Don\'t forget focus indicators',
        'Don\'t use autoplay for videos/audio'
      ],
      examples: [
        {
          good: `<button 
  className="bg-primary-600 text-white ..."
  aria-label="Submit form"
>
  Submit
</button>`,
          bad: `<div 
  onClick={handleClick}
  className="bg-primary-600 text-white ..."
>
  Submit
</div>`,
          explanation: 'Use proper semantic elements. Buttons are keyboard accessible by default, divs are not.'
        }
      ]
    },
    {
      id: 'comments',
      category: 'Documentation',
      icon: FileText,
      title: 'Documenting Your Code',
      description: 'Help others (and future you) understand your work',
      dos: [
        'Add comments explaining design decisions',
        'Document component props and usage',
        'Note any browser-specific considerations',
        'Explain complex logic or calculations',
        'Include examples of how to use components',
        'Keep a README with setup instructions'
      ],
      donts: [
        'Don\'t comment obvious things: "// This is a button"',
        'Don\'t write novels - be concise',
        'Don\'t let comments get outdated',
        'Don\'t forget to comment tricky CSS or animations'
      ],
      examples: [
        {
          good: `// Using 8px base unit for consistent spacing throughout app
const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px'
}`,
          bad: `// spacing
const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px'
}`,
          explanation: 'Good comments explain the "why" behind decisions, helping others understand your design system.'
        }
      ]
    },
    {
      id: 'collaboration',
      category: 'Team Work',
      icon: Users,
      title: 'Sharing with Developers',
      description: 'Bridge the design-developer gap',
      dos: [
        'Share both the design files AND the code',
        'Explain your design decisions and constraints',
        'Provide all assets (images, icons, fonts)',
        'Document responsive behavior at different sizes',
        'Be open to technical feedback',
        'Use consistent naming between design and code'
      ],
      donts: [
        'Don\'t just hand over static mockups',
        'Don\'t use obscure component names',
        'Don\'t forget edge cases (loading, errors, empty states)',
        'Don\'t ignore technical constraints',
        'Don\'t disappear after handoff - be available for questions'
      ],
      examples: [
        {
          good: `Handoff package:
- Code with comments
- Design tokens file
- Component documentation
- Responsive breakpoints
- Interactive state definitions
- Edge case handling`,
          bad: `Here's a PNG of the design. 
Good luck!`,
          explanation: 'Comprehensive handoff with working code and documentation helps developers implement your vision accurately.'
        }
      ]
    }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-2 mb-8">
        <h2 className="section-title">Best Practices</h2>
        <p className="text-gray-600 text-lg">
          Professional tips and patterns for design success
        </p>
      </div>

      {practices.map((practice) => {
        const Icon = practice.icon
        
        return (
          <div key={practice.id} className="card space-y-6">
            {/* Header */}
            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-primary-600 mb-1">
                  {practice.category}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {practice.title}
                </h3>
                <p className="text-gray-600">
                  {practice.description}
                </p>
              </div>
            </div>

            {/* Do's and Don'ts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Do's */}
              <div className="bg-green-50 rounded-xl p-6 space-y-3">
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h4 className="text-lg font-bold text-green-800">Do's</h4>
                </div>
                {practice.dos.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 mt-2" />
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>

              {/* Don'ts */}
              <div className="bg-red-50 rounded-xl p-6 space-y-3">
                <div className="flex items-center space-x-2 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <h4 className="text-lg font-bold text-red-800">Don'ts</h4>
                </div>
                {practice.donts.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-2" />
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Examples */}
            {practice.examples && practice.examples.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 flex items-center space-x-2">
                  <Code className="w-5 h-5 text-primary-500" />
                  <span>Examples</span>
                </h4>
                {practice.examples.map((example, index) => (
                  <div key={index} className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs font-semibold text-green-600 mb-2 flex items-center space-x-1">
                          <CheckCircle className="w-4 h-4" />
                          <span>GOOD</span>
                        </div>
                        <pre className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm overflow-x-auto">
                          <code className="text-gray-800">{example.good}</code>
                        </pre>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-red-600 mb-2 flex items-center space-x-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>BAD</span>
                        </div>
                        <pre className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm overflow-x-auto">
                          <code className="text-gray-800">{example.bad}</code>
                        </pre>
                      </div>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                      <p className="text-gray-700 text-sm">
                        <strong>Why:</strong> {example.explanation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })}

      {/* Key Takeaways */}
      <div className="card bg-gradient-to-br from-primary-50 to-accent-50 border-2 border-primary-200">
        <div className="flex items-start space-x-4">
          <Lightbulb className="w-12 h-12 text-accent-500 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Key Takeaways</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Start simple and iterate - perfection comes through refinement</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Be specific with AI - clear communication yields better results</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Organize your code like a professional from day one</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Design systems keep everything consistent and maintainable</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Always consider accessibility and responsive design</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Document and share your work to collaborate effectively</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestPractices

