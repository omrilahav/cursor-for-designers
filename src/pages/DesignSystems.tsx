import { useState } from 'react'
import { Palette, Layers, Package, Grid, Type, CheckCircle, Copy, Zap, RefreshCw, Share2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useProgress } from '../contexts/ProgressContext'

const DesignSystems = () => {
  const { completeLesson } = useProgress()
  const [completed, setCompleted] = useState<Set<string>>(new Set())
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const handleComplete = (id: string) => {
    const newCompleted = new Set(completed)
    newCompleted.add(id)
    setCompleted(newCompleted)
    completeLesson(`ds-${id}`, 'training')
  }

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Hero */}
      <div className="card bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white text-center space-y-4">
        <Palette className="w-16 h-16 mx-auto" />
        <h1 className="text-4xl font-bold">Building Design Systems with Cursor</h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Create consistent, scalable component libraries and design tokens that your whole team can use
        </p>
      </div>

      {/* What is a Design System */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">What is a Design System?</h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 space-y-4">
          <p className="text-lg text-gray-800">
            <strong>Think of it as your design's single source of truth.</strong>
          </p>
          
          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">A Design System Includes:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-5">
                <Palette className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Design Tokens</h4>
                <p className="text-sm text-gray-700">Colors, typography, spacing, shadows - all the visual building blocks</p>
              </div>

              <div className="bg-purple-50 rounded-lg p-5">
                <Package className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Component Library</h4>
                <p className="text-sm text-gray-700">Reusable buttons, cards, forms, navigation - ready to use</p>
              </div>

              <div className="bg-pink-50 rounded-lg p-5">
                <Grid className="w-8 h-8 text-pink-600 mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Layout Patterns</h4>
                <p className="text-sm text-gray-700">Grids, spacing systems, responsive breakpoints</p>
              </div>

              <div className="bg-indigo-50 rounded-lg p-5">
                <Type className="w-8 h-8 text-indigo-600 mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Guidelines</h4>
                <p className="text-sm text-gray-700">When to use what, accessibility rules, best practices</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 className="font-bold text-gray-800 mb-3">Why Designers Need Design Systems:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>✅ <strong>Consistency:</strong> Same look and feel across your entire product</li>
              <li>✅ <strong>Speed:</strong> Build new screens 10x faster by reusing components</li>
              <li>✅ <strong>Collaboration:</strong> Designers and developers speak the same language</li>
              <li>✅ <strong>Scalability:</strong> Change once, update everywhere</li>
              <li>✅ <strong>Quality:</strong> Pre-tested, accessible components</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Step 1: Design Tokens */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
            <Palette className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Step 1: Create Design Tokens</h2>
            <p className="text-gray-600">Define your design foundation</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 space-y-6">
          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">What are Design Tokens?</h3>
            <p className="text-gray-700">
              Design tokens are variables that store your design decisions. Instead of using "#3B82F6" everywhere, 
              you use "colors.primary" - one place to define, everywhere updated automatically.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5">
              <p className="text-sm text-gray-700">
                <strong>Real Example:</strong> When you rebrand and change your primary color from blue to green, 
                you change ONE variable and your entire app updates instantly. No hunting through files!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Creating Your Design Tokens File</h3>
            <p className="text-gray-700">Let's build a complete token system with AI help:</p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-lg p-5">
                <h4 className="font-bold text-gray-800 mb-3">🎨 Ask AI to Create Your Tokens:</h4>
                <div className="bg-white rounded-lg p-4 mb-3">
                  <p className="text-sm text-gray-700 mb-2">Open Cursor Agent (Cmd+Shift+L) and say:</p>
                  <div className="bg-gray-900 text-green-400 rounded p-4 font-mono text-xs">
                    Create a design-tokens.ts file in /src with:<br/>
                    - Color palette (primary, secondary, neutral, success, warning, error)<br/>
                    - Typography scale (sizes, weights, line heights)<br/>
                    - Spacing scale (4px base unit: 4, 8, 16, 24, 32, 48, 64)<br/>
                    - Border radius values (sm, md, lg, full)<br/>
                    - Shadow definitions (sm, md, lg, xl)<br/>
                    - Breakpoints for responsive design<br/>
                    Use TypeScript for type safety
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border-2 border-gray-200 p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-800">Example: design-tokens.ts</h4>
                  <button
                    onClick={() => handleCopy(`// Color Tokens
export const colors = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',  // Main primary color
    600: '#2563eb',
    900: '#1e3a8a',
  },
  secondary: {
    500: '#8b5cf6',
    600: '#7c3aed',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    500: '#737373',
    900: '#171717',
  },
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
}

// Typography Tokens
export const typography = {
  fontFamily: {
    sans: 'Inter, system-ui, sans-serif',
    mono: 'Monaco, monospace',
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
}

// Spacing Tokens (8px base unit)
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
}

// Border Radius Tokens
export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
}

// Shadow Tokens
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
}

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
}`, 'tokens-example')}
                    className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-2"
                  >
                    {copiedCode === 'tokens-example' ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
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
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs max-h-96">
{`// Color Tokens
export const colors = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',  // Main primary color
    600: '#2563eb',
    900: '#1e3a8a',
  },
  secondary: {
    500: '#8b5cf6',
    600: '#7c3aed',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    500: '#737373',
    900: '#171717',
  },
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
}

// Typography Tokens
export const typography = {
  fontFamily: {
    sans: 'Inter, system-ui, sans-serif',
    mono: 'Monaco, monospace',
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
}

// Spacing Tokens (8px base unit)
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
}

// Border Radius Tokens
export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
}

// Shadow Tokens
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
}

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
}`}
                </pre>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                <h4 className="font-bold text-gray-800 mb-3">💡 Designer Tips:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Match your Figma variables exactly - same names, same values</li>
                  <li>• Use semantic names: "primary" not "blue", "success" not "green"</li>
                  <li>• Include the values from your brand guidelines</li>
                  <li>• Document why you chose each value (add comments)</li>
                  <li>• Keep it simple at first - you can always add more later</li>
                </ul>
              </div>
            </div>
          </div>

          {!completed.has('tokens') && (
            <button
              onClick={() => handleComplete('tokens')}
              className="btn-primary w-full"
            >
              <CheckCircle className="w-5 h-5" />
              <span>I Created My Design Tokens!</span>
            </button>
          )}
          {completed.has('tokens') && (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center justify-center gap-3 text-green-700">
              <CheckCircle className="w-6 h-6" />
              <span className="font-bold">Excellent! Now let's build components!</span>
            </div>
          )}
        </div>
      </div>

      {/* Step 2: Component Library */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
            <Package className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Step 2: Build Your Component Library</h2>
            <p className="text-gray-600">Create reusable, consistent components</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 space-y-6">
          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Building Components with Tokens</h3>
            <p className="text-gray-700">
              Now use your tokens to create components. Every component references the tokens file, 
              ensuring perfect consistency.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-5 space-y-4">
              <h4 className="font-bold text-gray-800">🎯 Example: Building a Button Component</h4>
              
              <div className="bg-white rounded p-4">
                <p className="text-sm text-gray-700 mb-3">Ask Cursor Agent:</p>
                <div className="bg-gray-900 text-green-400 rounded p-4 font-mono text-xs">
                  Create a Button component in /src/components that:<br/>
                  - Uses tokens from @design-tokens.ts for colors, spacing, borderRadius<br/>
                  - Has variants: primary, secondary, outline, ghost<br/>
                  - Has sizes: small, medium, large<br/>
                  - Includes disabled and loading states<br/>
                  - Has hover and active animations<br/>
                  - Is fully accessible with proper ARIA labels<br/>
                  - Exports TypeScript props interface
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-sm text-gray-700">
                  <strong>✨ Magic:</strong> When you later change colors.primary in your tokens file, 
                  ALL your primary buttons update automatically across your entire app!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Essential Components to Build</h3>
            <p className="text-gray-700 mb-4">Start with these foundation pieces:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-lg p-5">
                <h4 className="font-bold text-gray-800 mb-3">Interactive Elements:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Button (primary, secondary, etc.)</li>
                  <li>• Input & Textarea</li>
                  <li>• Select / Dropdown</li>
                  <li>• Checkbox & Radio</li>
                  <li>• Toggle Switch</li>
                </ul>
              </div>

              <div className="bg-pink-50 rounded-lg p-5">
                <h4 className="font-bold text-gray-800 mb-3">Layout Components:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Card</li>
                  <li>• Modal / Dialog</li>
                  <li>• Navigation Bar</li>
                  <li>• Tabs</li>
                  <li>• Accordion</li>
                </ul>
              </div>

              <div className="bg-indigo-50 rounded-lg p-5">
                <h4 className="font-bold text-gray-800 mb-3">Feedback Components:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Alert / Toast</li>
                  <li>• Loading Spinner</li>
                  <li>• Progress Bar</li>
                  <li>• Badge</li>
                  <li>• Tooltip</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-5">
                <h4 className="font-bold text-gray-800 mb-3">Typography:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Heading (h1-h6)</li>
                  <li>• Text / Paragraph</li>
                  <li>• Link</li>
                  <li>• Code Block</li>
                  <li>• Label</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Component Organization</h3>
            <div className="bg-gray-50 rounded p-5">
              <p className="font-mono text-sm text-gray-800">
                /src/<br/>
                &nbsp;&nbsp;design-tokens.ts<br/>
                &nbsp;&nbsp;/components/<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;/Button/<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Button.tsx<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Button.stories.tsx (optional: for documentation)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;/Card/<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Card.tsx<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;/Input/<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Input.tsx<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;index.ts (exports all components)
              </p>
            </div>
          </div>

          {!completed.has('components') && (
            <button
              onClick={() => handleComplete('components')}
              className="btn-primary w-full"
            >
              <CheckCircle className="w-5 h-5" />
              <span>I Built My Component Library!</span>
            </button>
          )}
          {completed.has('components') && (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center justify-center gap-3 text-green-700">
              <CheckCircle className="w-6 h-6" />
              <span className="font-bold">Amazing! You have a design system!</span>
            </div>
          )}
        </div>
      </div>

      {/* Step 3: Documentation */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
            <Layers className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Step 3: Document Your System</h2>
            <p className="text-gray-600">Make it easy for your team to use</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 space-y-6">
          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Create a Design System Page</h3>
            <p className="text-gray-700">Build a visual showcase of all your components and tokens</p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-800 mb-3">Ask AI to Create:</h4>
              <div className="bg-white rounded p-4 mb-3">
                <div className="bg-gray-900 text-green-400 rounded p-4 font-mono text-xs">
                  Create a DesignSystemShowcase.tsx page that displays:<br/>
                  1. Color palette with all tokens (show the colors visually)<br/>
                  2. Typography scale (show all font sizes)<br/>
                  3. Spacing scale (visual representation)<br/>
                  4. All Button variants and states<br/>
                  5. All form components with examples<br/>
                  6. All Card and layout components<br/>
                  <br/>
                  Make it beautiful and interactive - users can see components in action
                </div>
              </div>
              <p className="text-sm text-gray-700">
                This becomes your living style guide that designers and developers can reference!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Usage Guidelines</h3>
            <p className="text-gray-700">For each component, document:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">1.</span>
                <div>
                  <p className="font-bold text-gray-800">When to use it</p>
                  <p className="text-sm text-gray-600">Example: "Use primary buttons for main CTAs, secondary for less important actions"</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">2.</span>
                <div>
                  <p className="font-bold text-gray-800">Code example</p>
                  <p className="text-sm text-gray-600">Show how to import and use: {`<Button variant="primary">Click me</Button>`}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">3.</span>
                <div>
                  <p className="font-bold text-gray-800">Available props</p>
                  <p className="text-sm text-gray-600">List all variants, sizes, and states</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">4.</span>
                <div>
                  <p className="font-bold text-gray-800">Accessibility notes</p>
                  <p className="text-sm text-gray-600">Keyboard navigation, screen reader support, etc.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Maintaining Your System */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Maintaining & Scaling Your System</h2>
            <p className="text-gray-600">Keep it healthy as it grows</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-5">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-600" />
                Do This:
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ Version your changes (Git tags)</li>
                <li>✅ Announce updates to the team</li>
                <li>✅ Add new components as needed</li>
                <li>✅ Deprecate old patterns gracefully</li>
                <li>✅ Gather feedback from users</li>
                <li>✅ Keep documentation updated</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-orange-600" />
                Avoid This:
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>❌ Making breaking changes without notice</li>
                <li>❌ Creating one-off components</li>
                <li>❌ Letting documentation get stale</li>
                <li>❌ Ignoring accessibility</li>
                <li>❌ Building in silos without team input</li>
                <li>❌ Over-engineering too early</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5">
            <h4 className="font-bold text-gray-800 mb-2">💡 Pro Tip: Start Small, Grow Intentionally</h4>
            <p className="text-sm text-gray-700">
              Don't try to build everything at once. Start with the components you actually use most. 
              Add new ones as you need them. A small, well-maintained system beats a huge, messy one every time.
            </p>
          </div>
        </div>
      </div>

      {/* Sharing with Team */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-600 to-amber-600 flex items-center justify-center">
            <Share2 className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Sharing with Your Team</h2>
            <p className="text-gray-600">Get everyone using the system</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 space-y-4">
          <div className="bg-white rounded-lg p-5 space-y-3">
            <h3 className="text-xl font-bold text-gray-800">For Designers:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Share the design system showcase page</li>
              <li>• Create Figma library that matches your tokens exactly</li>
              <li>• Document naming conventions</li>
              <li>• Run workshops to show new components</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-5 space-y-3">
            <h3 className="text-xl font-bold text-gray-800">For Developers:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Push your system to GitHub</li>
              <li>• Share installation instructions</li>
              <li>• Provide code examples for each component</li>
              <li>• Set up npm package (advanced)</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="text-sm text-gray-700">
              <strong>🚀 Next Level:</strong> Once your system is mature, you can publish it as an npm package 
              so developers can install it with one command. But that's advanced - focus on building and using it first!
            </p>
          </div>
        </div>
      </div>

      {/* Success */}
      <div className="card bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center space-y-6">
        <CheckCircle className="w-16 h-16 mx-auto" />
        <h2 className="text-3xl font-bold">You Built a Design System! 🎨</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          You now have a scalable, consistent design system that will save your team countless hours 
          and ensure your product looks professional and cohesive.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/design-handoff" className="btn bg-white text-purple-600 hover:bg-gray-100 text-lg shadow-xl">
            <Share2 className="w-6 h-6" />
            <span>Learn Dev Handoff</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
          <Link to="/tutorials" className="btn-outline border-white text-white hover:bg-white/20 text-lg">
            <span>Back to Tutorials</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DesignSystems
