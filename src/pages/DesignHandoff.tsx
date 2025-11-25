import { useState } from 'react'
import { Share2, FileCode, Users, CheckCircle, Package, GitBranch, MessageSquare, Eye, ArrowRight, Figma, Code } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useProgress } from '../contexts/ProgressContext'

const DesignHandoff = () => {
  const { completeLesson } = useProgress()
  const [completed, setCompleted] = useState<Set<string>>(new Set())

  const handleComplete = (id: string) => {
    const newCompleted = new Set(completed)
    newCompleted.add(id)
    setCompleted(newCompleted)
    completeLesson(`handoff-${id}`, 'training')
  }

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Hero */}
      <div className="card bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white text-center space-y-4">
        <Share2 className="w-16 h-16 mx-auto" />
        <h1 className="text-4xl font-bold">Perfect Design Handoffs to Developers</h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Turn your prototypes into production-ready code that developers will actually love
        </p>
      </div>

      {/* The Problem */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">The Traditional Handoff Problem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-700 mb-4">😫 Old Way (Painful)</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600">❌</span>
                <span className="text-sm">Designer creates static mockups in Figma</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">❌</span>
                <span className="text-sm">Writes specs document manually</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">❌</span>
                <span className="text-sm">Developer tries to interpret visuals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">❌</span>
                <span className="text-sm">Endless questions: "What's this spacing?" "Which blue?"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">❌</span>
                <span className="text-sm">Final product doesn't match design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">❌</span>
                <span className="text-sm">Multiple rounds of feedback and fixes</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-700 mb-4">😍 With Cursor (Magical)</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✅</span>
                <span className="text-sm">Designer creates working prototype</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✅</span>
                <span className="text-sm">Code is already written and tested</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✅</span>
                <span className="text-sm">Developer gets actual working code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✅</span>
                <span className="text-sm">All specs are in the code itself</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✅</span>
                <span className="text-sm">Final product matches design perfectly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✅</span>
                <span className="text-sm">Developers can copy-paste or refine</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
          <p className="text-gray-700 leading-relaxed">
            <strong>💡 The Key Insight:</strong> When you hand off working code instead of static mockups, 
            you eliminate 90% of the back-and-forth. Developers can see exactly how it should behave, 
            and they have a perfect reference implementation.
          </p>
        </div>
      </div>

      {/* Step 1: Prepare Your Code */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
            <Code className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Step 1: Clean Up Your Code</h2>
            <p className="text-gray-600">Make it production-ready</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 space-y-6">
          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Before Handing Off, Check:</h3>
            
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">1. Remove Hardcoded Values</h4>
                    <p className="text-sm text-gray-700 mb-2">Replace magic numbers with design tokens:</p>
                    <div className="bg-red-50 border-l-2 border-red-400 p-3 mb-2">
                      <p className="text-xs font-mono text-gray-700">❌ <span className="text-red-600">color: '#3B82F6'</span></p>
                    </div>
                    <div className="bg-green-50 border-l-2 border-green-400 p-3">
                      <p className="text-xs font-mono text-gray-700">✅ <span className="text-green-600">color: colors.primary[500]</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">2. Add Comments for Design Decisions</h4>
                    <p className="text-sm text-gray-700 mb-2">Explain the "why" behind choices:</p>
                    <div className="bg-white rounded p-3">
                      <code className="text-xs text-gray-700">
                        // Using 24px padding to match our 8px spacing grid<br/>
                        // Shadow-lg provides the "elevated" feel from mockups<br/>
                        // Transition matches our 200ms interaction standard
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">3. Document Interactive States</h4>
                    <p className="text-sm text-gray-700">Show all states: default, hover, active, disabled, loading</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">4. Ensure Responsive Behavior Works</h4>
                    <p className="text-sm text-gray-700">Test on mobile, tablet, and desktop. Add comments about breakpoints.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">5. Add Accessibility Features</h4>
                    <p className="text-sm text-gray-700">ARIA labels, keyboard navigation, focus states - these matter!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Quick Cleanup with AI</h3>
            <p className="text-gray-700">Let AI help you polish:</p>
            <div className="bg-gray-900 text-green-400 rounded p-4 font-mono text-xs">
              Review @ComponentName.tsx and:<br/>
              1. Replace any hardcoded colors/spacing with design tokens<br/>
              2. Add comments explaining design decisions<br/>
              3. Ensure all interactive states are implemented<br/>
              4. Add proper TypeScript types<br/>
              5. Verify accessibility attributes are present
            </div>
          </div>

          {!completed.has('cleanup') && (
            <button
              onClick={() => handleComplete('cleanup')}
              className="btn-primary w-full"
            >
              <CheckCircle className="w-5 h-5" />
              <span>My Code is Ready!</span>
            </button>
          )}
          {completed.has('cleanup') && (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center justify-center gap-3 text-green-700">
              <CheckCircle className="w-6 h-6" />
              <span className="font-bold">Perfect! Let's document it!</span>
            </div>
          )}
        </div>
      </div>

      {/* Step 2: Create Documentation */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
            <FileCode className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Step 2: Document the Component</h2>
            <p className="text-gray-600">Create a clear guide for developers</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 space-y-6">
          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">What to Document</h3>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-lg p-5">
                <h4 className="font-bold text-gray-800 mb-3">📝 Component README Template</h4>
                <div className="bg-white rounded p-4 space-y-3 text-sm">
                  <div>
                    <p className="font-bold text-gray-800">Component Name & Purpose</p>
                    <p className="text-gray-600">What it does and when to use it</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Usage Example</p>
                    <p className="text-gray-600">Code snippet showing how to import and use</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Props / API</p>
                    <p className="text-gray-600">All available properties and their types</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Variants & States</p>
                    <p className="text-gray-600">Different versions and interactive states</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Design Notes</p>
                    <p className="text-gray-600">Spacing, colors, behavior specifics</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Accessibility</p>
                    <p className="text-gray-600">Keyboard navigation, ARIA labels, focus management</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border-2 border-gray-200 p-5">
                <h4 className="font-bold text-gray-800 mb-3">Real Example: Button Component Doc</h4>
                <div className="bg-gray-50 rounded p-4 text-xs font-mono">
{`# Button Component

## Purpose
Primary interactive element for user actions. Use for
CTAs, form submissions, and important actions.

## Usage
\`\`\`tsx
import { Button } from './components/Button'

<Button variant="primary" size="md">
  Click Me
</Button>
\`\`\`

## Props
- variant: 'primary' | 'secondary' | 'outline' | 'ghost'
- size: 'sm' | 'md' | 'lg'
- disabled?: boolean
- loading?: boolean
- onClick?: () => void

## Variants
- primary: Main CTAs (uses colors.primary)
- secondary: Less important actions
- outline: Tertiary actions
- ghost: Subtle actions

## States
- Default: Ready to click
- Hover: Lifts with shadow (2px transform)
- Active: Pressed state
- Disabled: 50% opacity, no interaction
- Loading: Shows spinner, disabled

## Design Notes
- Uses design system tokens for consistency
- 12px border radius for all sizes
- Hover animation: 200ms ease-out
- Min-width: 120px to prevent tiny buttons

## Accessibility
- Keyboard: Space/Enter to activate
- ARIA: aria-disabled when disabled
- Focus: Visible outline (2px colors.primary)
- Screen readers: Loading state announced`}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Generate Documentation with AI</h3>
            <p className="text-gray-700">Have AI create the docs for you:</p>
            <div className="bg-gray-900 text-green-400 rounded p-4 font-mono text-xs">
              Create comprehensive documentation for @Button.tsx including:<br/>
              - Component purpose and use cases<br/>
              - Usage examples with code<br/>
              - All props with TypeScript types<br/>
              - All variants and states<br/>
              - Design specifications (colors, spacing, animations)<br/>
              - Accessibility features<br/>
              <br/>
              Format it in Markdown and save as Button.md in the same folder
            </div>
          </div>

          {!completed.has('documentation') && (
            <button
              onClick={() => handleComplete('documentation')}
              className="btn-primary w-full"
            >
              <CheckCircle className="w-5 h-5" />
              <span>I Created Documentation!</span>
            </button>
          )}
          {completed.has('documentation') && (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center justify-center gap-3 text-green-700">
              <CheckCircle className="w-6 h-6" />
              <span className="font-bold">Excellent docs! Now let's share!</span>
            </div>
          )}
        </div>
      </div>

      {/* Step 3: Share with Developers */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
            <Users className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Step 3: Hand Off to Developers</h2>
            <p className="text-gray-600">Multiple ways to share your work</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-800">Option 1: GitHub</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4">Most professional approach</p>
              <ol className="space-y-2 text-sm text-gray-700">
                <li>1. Push your code to GitHub</li>
                <li>2. Create a Pull Request (PR)</li>
                <li>3. Add description with screenshots</li>
                <li>4. Tag the developer for review</li>
                <li>5. They can see code + demo link</li>
              </ol>
              <div className="bg-blue-50 rounded p-3 mt-4">
                <p className="text-xs text-gray-700">
                  <strong>Pro:</strong> Version controlled, reviewable, professional
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-800">Option 2: Share Files</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4">Quick and simple</p>
              <ol className="space-y-2 text-sm text-gray-700">
                <li>1. Zip your component folder</li>
                <li>2. Include all files + documentation</li>
                <li>3. Share via Slack/email/Dropbox</li>
                <li>4. Include a README with setup</li>
                <li>5. Provide demo link if deployed</li>
              </ol>
              <div className="bg-yellow-50 rounded p-3 mt-4">
                <p className="text-xs text-gray-700">
                  <strong>Pro:</strong> Fast, no GitHub needed, works for quick iterations
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Option 3: Live Demo</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4">Show, don't tell</p>
              <ol className="space-y-2 text-sm text-gray-700">
                <li>1. Deploy to Vercel/Netlify (free!)</li>
                <li>2. Share the live URL</li>
                <li>3. Dev can interact with it</li>
                <li>4. Inspect in browser DevTools</li>
                <li>5. Copy code from GitHub</li>
              </ol>
              <div className="bg-green-50 rounded p-3 mt-4">
                <p className="text-xs text-gray-700">
                  <strong>Pro:</strong> Most impressive, easy for stakeholders to see
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-8 h-8 text-pink-600" />
                <h3 className="text-xl font-bold text-gray-800">Option 4: Pair Session</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4">Best for complex components</p>
              <ol className="space-y-2 text-sm text-gray-700">
                <li>1. Schedule 30min with dev</li>
                <li>2. Walk through the code together</li>
                <li>3. Explain design decisions</li>
                <li>4. Answer questions in real-time</li>
                <li>5. Dev takes notes/screenshots</li>
              </ol>
              <div className="bg-purple-50 rounded p-3 mt-4">
                <p className="text-xs text-gray-700">
                  <strong>Pro:</strong> Builds relationships, ensures understanding
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5">
            <h4 className="font-bold text-gray-800 mb-2">💡 Best Practice: Combine Methods</h4>
            <p className="text-sm text-gray-700">
              Share GitHub link + live demo + schedule a quick sync. This covers all bases and shows you care about quality handoffs.
            </p>
          </div>
        </div>
      </div>

      {/* What Developers Need */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">What Developers Actually Need</h2>
        <p className="text-gray-600">Straight from developers - here's what makes handoffs smooth:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-5">
            <h3 className="font-bold text-green-700 mb-3">😍 Developers Love When You Provide:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✅ Working code they can run immediately</li>
              <li>✅ Clear documentation with examples</li>
              <li>✅ All edge cases handled (empty states, errors)</li>
              <li>✅ Responsive behavior already working</li>
              <li>✅ Accessibility features included</li>
              <li>✅ Design tokens instead of magic numbers</li>
              <li>✅ Comments explaining design choices</li>
              <li>✅ TypeScript types defined</li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-lg p-5">
            <h3 className="font-bold text-red-700 mb-3">😤 Developers Frustrated By:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>❌ Static mockups with no specs</li>
              <li>❌ "Make it look like the design" (what design?)</li>
              <li>❌ Inconsistent spacing/colors</li>
              <li>❌ Missing states (loading, error, empty)</li>
              <li>❌ Desktop-only designs (what about mobile?)</li>
              <li>❌ No accessibility considerations</li>
              <li>❌ Unclear interactions/animations</li>
              <li>❌ Constant design changes during dev</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-800 mb-3">🎯 The Golden Rule</h3>
          <p className="text-gray-700">
            <strong>If a developer can copy your component code, test it in 5 minutes, and it works perfectly - you've nailed it.</strong>
            <br /><br />
            That's the standard we're aiming for. Your Cursor-built prototypes can absolutely achieve this!
          </p>
        </div>
      </div>

      {/* Collaboration Tips */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Ongoing Collaboration Tips</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-5">
            <h3 className="font-bold text-gray-800 mb-3">During Development</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Be available for questions</li>
              <li>• Review PRs from developers</li>
              <li>• Approve when it matches design</li>
              <li>• Provide feedback kindly</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-5">
            <h3 className="font-bold text-gray-800 mb-3">After Launch</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Test on staging environment</li>
              <li>• Check responsive behavior</li>
              <li>• Verify animations work</li>
              <li>• Sign off before production</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-5">
            <h3 className="font-bold text-gray-800 mb-3">Building Trust</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Acknowledge technical constraints</li>
              <li>• Accept when changes needed</li>
              <li>• Celebrate good implementations</li>
              <li>• Learn from feedback</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Success */}
      <div className="card bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white text-center space-y-6">
        <CheckCircle className="w-16 h-16 mx-auto" />
        <h2 className="text-3xl font-bold">You're a Handoff Pro! 🤝</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          You now know how to deliver production-ready code that developers will love. 
          This is how modern design-dev collaboration works!
        </p>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
          <p className="text-lg mb-4">
            <strong>The Impact:</strong> Teams using this workflow report 70% fewer design-dev iterations 
            and ship features 3x faster. You're not just a designer anymore - you're a design engineer!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/animations" className="btn bg-white text-green-600 hover:bg-gray-100 text-lg shadow-xl">
            <span>Learn Animations Next</span>
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

export default DesignHandoff
