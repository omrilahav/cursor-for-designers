import { useState } from 'react'
import { Sparkles, Play, Zap, MousePointer, Move, Eye, CheckCircle, ArrowRight, Layers, Repeat } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useProgress } from '../contexts/ProgressContext'

const Animations = () => {
  const { completeLesson } = useProgress()
  const [completed, setCompleted] = useState<Set<string>>(new Set())
  const [demoHovered, setDemoHovered] = useState(false)
  const [demoClicked, setDemoClicked] = useState(false)

  const handleComplete = (id: string) => {
    const newCompleted = new Set(completed)
    newCompleted.add(id)
    setCompleted(newCompleted)
    completeLesson(`anim-${id}`, 'training')
  }

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Hero */}
      <div className="card bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 text-white text-center space-y-4">
        <Sparkles className="w-16 h-16 mx-auto animate-pulse" />
        <h1 className="text-4xl font-bold">Prototyping Interactions & Animations</h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Bring your designs to life with smooth, delightful animations that users will love
        </p>
      </div>

      {/* Why Animations Matter */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Why Animations Matter in Design</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
            <Eye className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="font-bold text-gray-800 mb-2">Guides Attention</h3>
            <p className="text-sm text-gray-700">
              Animations tell users where to look and what just changed
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
            <Zap className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="font-bold text-gray-800 mb-2">Provides Feedback</h3>
            <p className="text-sm text-gray-700">
              Confirm actions happened - clicks, hovers, loading states
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
            <Sparkles className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="font-bold text-gray-800 mb-2">Feels Premium</h3>
            <p className="text-sm text-gray-700">
              Smooth animations make your app feel polished and professional
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
          <p className="text-gray-700">
            <strong>🎯 The Design Rule:</strong> Every interaction should have visual feedback. 
            If a user clicks, hovers, or triggers something - they should see it respond. 
            This builds confidence that your product actually works!
          </p>
        </div>
      </div>

      {/* Types of Animations */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Types of Animations You'll Use</h2>

        <div className="space-y-4">
          <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <MousePointer className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">1. Micro-interactions</h3>
            </div>
            <p className="text-gray-700 mb-4">Small, instant feedback for user actions</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="font-bold text-gray-800 mb-2">Button Hover:</p>
                <div 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-center cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  onMouseEnter={() => setDemoHovered(true)}
                  onMouseLeave={() => setDemoHovered(false)}
                >
                  Hover Me!
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  {demoHovered ? '✨ Scales up + shadow' : 'Try hovering'}
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <p className="font-bold text-gray-800 mb-2">Button Click:</p>
                <div 
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold text-center cursor-pointer transition-all duration-100 active:scale-95"
                  onClick={() => {
                    setDemoClicked(true)
                    setTimeout(() => setDemoClicked(false), 300)
                  }}
                >
                  Click Me!
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  {demoClicked ? '⚡ Pressed!' : 'Try clicking'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Move className="w-8 h-8 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-800">2. Transitions</h3>
            </div>
            <p className="text-gray-700 mb-4">Smooth changes between states</p>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="font-bold text-gray-800 mb-2">Common Examples:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Menu opening/closing</li>
                <li>• Modal appearing</li>
                <li>• Tab switching</li>
                <li>• Accordion expanding</li>
                <li>• Toast notifications sliding in</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Repeat className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">3. Loading States</h3>
            </div>
            <p className="text-gray-700 mb-4">Show progress and keep users informed</p>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-gray-800 mb-2">Common Examples:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Spinning loaders</li>
                <li>• Progress bars</li>
                <li>• Skeleton screens</li>
                <li>• Pulsing placeholders</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border-2 border-pink-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-8 h-8 text-pink-600" />
              <h3 className="text-xl font-bold text-gray-800">4. Page Transitions</h3>
            </div>
            <p className="text-gray-700 mb-4">Smooth navigation between pages/views</p>
            <div className="bg-pink-50 rounded-lg p-4">
              <p className="font-bold text-gray-800 mb-2">Common Examples:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Fade in when page loads</li>
                <li>• Slide transitions</li>
                <li>• Staggered content reveal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Building Animations with Cursor */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Building Animations with AI</h2>
            <p className="text-gray-600">Let Cursor do the heavy lifting</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 space-y-6">
          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Method 1: CSS Transitions (Simple & Fast)</h3>
            <p className="text-gray-700">Perfect for hover effects, simple state changes</p>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-5">
              <h4 className="font-bold text-gray-800 mb-3">🎨 Ask AI:</h4>
              <div className="bg-white rounded p-4">
                <div className="bg-gray-900 text-green-400 rounded p-4 font-mono text-xs">
                  Add hover animations to the Button component:<br/>
                  - Scale up slightly (1.05) on hover<br/>
                  - Add shadow that grows on hover<br/>
                  - Smooth 200ms transition<br/>
                  - Scale down (0.98) when clicked for active state<br/>
                  - Use transform for performance
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <p className="font-bold text-gray-800 mb-3">Result:</p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`// In your Button component
<button className="
  bg-blue-600 
  text-white 
  px-6 py-3 
  rounded-lg
  transition-all duration-200 ease-out
  hover:scale-105 hover:shadow-lg
  active:scale-98
">
  Click Me
</button>`}
              </pre>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>💡 Why this works:</strong> CSS transitions are super lightweight and don't require JavaScript. 
                Perfect for 90% of your interactive needs!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Method 2: Framer Motion (Advanced & Beautiful)</h3>
            <p className="text-gray-700">For complex animations, page transitions, and orchestration</p>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-lg p-5">
              <h4 className="font-bold text-gray-800 mb-3">🎨 Ask AI:</h4>
              <div className="bg-white rounded p-4">
                <div className="bg-gray-900 text-green-400 rounded p-4 font-mono text-xs">
                  Install framer-motion and create a Modal component that:<br/>
                  - Fades in with backdrop blur<br/>
                  - Slides up from bottom with spring animation<br/>
                  - Scales from 0.9 to 1.0<br/>
                  - Reverses animation when closing<br/>
                  - Has staggered children animation for content
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <p className="font-bold text-gray-800 mb-3">Result:</p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs max-h-80">
{`import { motion, AnimatePresence } from 'framer-motion'

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}`}
              </pre>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>🎯 When to use:</strong> Complex animations, page transitions, staggered lists, 
                drag-and-drop, or when CSS alone isn't enough. It's more powerful but adds library weight.
              </p>
            </div>
          </div>

          {!completed.has('basics') && (
            <button
              onClick={() => handleComplete('basics')}
              className="btn-primary w-full"
            >
              <CheckCircle className="w-5 h-5" />
              <span>I Understand the Basics!</span>
            </button>
          )}
          {completed.has('basics') && (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center justify-center gap-3 text-green-700">
              <CheckCircle className="w-6 h-6" />
              <span className="font-bold">Great! Let's build real examples!</span>
            </div>
          )}
        </div>
      </div>

      {/* Common Animation Patterns */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Common Animation Patterns to Build</h2>
        <p className="text-gray-600">Copy these prompts to create polished interactions</p>

        <div className="space-y-4">
          {/* Pattern 1 */}
          <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-800">Smooth Page Load</h3>
            </div>
            <p className="text-gray-700 mb-4">Fade in content when page loads</p>
            <div className="bg-blue-50 rounded p-4">
              <p className="text-xs text-gray-700 mb-2 font-bold">Prompt:</p>
              <div className="bg-gray-900 text-green-400 rounded p-3 font-mono text-xs">
                Add a fade-in animation to all page components:<br/>
                - Start with opacity 0<br/>
                - Animate to opacity 1 over 400ms<br/>
                - Use ease-out timing<br/>
                - Optional: slight upward movement (translateY)
              </div>
            </div>
          </div>

          {/* Pattern 2 */}
          <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-800">Card Hover Effect</h3>
            </div>
            <p className="text-gray-700 mb-4">Make cards interactive and inviting</p>
            <div className="bg-purple-50 rounded p-4">
              <p className="text-xs text-gray-700 mb-2 font-bold">Prompt:</p>
              <div className="bg-gray-900 text-green-400 rounded p-3 font-mono text-xs">
                Update Card component with hover animations:<br/>
                - Lift up 4px (translateY: -4px)<br/>
                - Increase shadow from md to xl<br/>
                - Scale border slightly (1.02)<br/>
                - 250ms transition<br/>
                - Cursor pointer
              </div>
            </div>
          </div>

          {/* Pattern 3 */}
          <div className="bg-white border-2 border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-600 text-white flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-800">Loading Spinner</h3>
            </div>
            <p className="text-gray-700 mb-4">Indicate something is happening</p>
            <div className="bg-green-50 rounded p-4">
              <p className="text-xs text-gray-700 mb-2 font-bold">Prompt:</p>
              <div className="bg-gray-900 text-green-400 rounded p-3 font-mono text-xs">
                Create a LoadingSpinner component:<br/>
                - Circular spinner using border trick<br/>
                - Infinite spin animation<br/>
                - Multiple sizes: sm (16px), md (24px), lg (48px)<br/>
                - Use colors from design tokens<br/>
                - Smooth rotation with linear timing
              </div>
            </div>
          </div>

          {/* Pattern 4 */}
          <div className="bg-white border-2 border-pink-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-pink-600 text-white flex items-center justify-center font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-800">Toast Notification</h3>
            </div>
            <p className="text-gray-700 mb-4">Slide in from corner, auto-dismiss</p>
            <div className="bg-pink-50 rounded p-4">
              <p className="text-xs text-gray-700 mb-2 font-bold">Prompt:</p>
              <div className="bg-gray-900 text-green-400 rounded p-3 font-mono text-xs">
                Create a Toast notification component:<br/>
                - Slides in from top-right<br/>
                - Fades in with spring animation<br/>
                - Auto-dismiss after 3 seconds<br/>
                - Slides out and fades on dismiss<br/>
                - Variants: success, error, warning, info<br/>
                - Close button with icon
              </div>
            </div>
          </div>

          {/* Pattern 5 */}
          <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-600 text-white flex items-center justify-center font-bold">5</div>
              <h3 className="text-xl font-bold text-gray-800">Dropdown Menu</h3>
            </div>
            <p className="text-gray-700 mb-4">Smooth open/close with origin animation</p>
            <div className="bg-orange-50 rounded p-4">
              <p className="text-xs text-gray-700 mb-2 font-bold">Prompt:</p>
              <div className="bg-gray-900 text-green-400 rounded p-3 font-mono text-xs">
                Create a Dropdown component:<br/>
                - Opens from top-right corner (transform-origin)<br/>
                - Scales from 0.95 to 1.0<br/>
                - Fades in (opacity 0 to 1)<br/>
                - 150ms duration<br/>
                - Close on outside click<br/>
                - Keyboard navigation support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Best Practices */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Animation Best Practices</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="font-bold text-green-700 text-xl mb-4">✅ Do This</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span className="text-sm">Keep animations <strong>fast</strong> (150-400ms for most things)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span className="text-sm">Use <strong>ease-out</strong> for things appearing, <strong>ease-in</strong> for disappearing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span className="text-sm">Animate <strong>transform</strong> and <strong>opacity</strong> (they're performant)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span className="text-sm">Give feedback for <strong>every interaction</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span className="text-sm">Test on slower devices/browsers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span className="text-sm">Be consistent across your app</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="font-bold text-red-700 text-xl mb-4">❌ Avoid This</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span className="text-sm">Slow animations (>500ms feels laggy)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span className="text-sm">Animating width/height (use scale instead)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span className="text-sm">Too many things moving at once</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span className="text-sm">Animations that block user actions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span className="text-sm">Distracting, unnecessary animations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span className="text-sm">Ignoring prefers-reduced-motion</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-800 mb-3 text-xl">⚡ Performance Tip</h3>
          <p className="text-gray-700 mb-3">
            Always animate these properties (they're GPU-accelerated):
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
            <li>✅ <code className="bg-white px-2 py-1 rounded">transform</code></li>
            <li>✅ <code className="bg-white px-2 py-1 rounded">opacity</code></li>
            <li>✅ <code className="bg-white px-2 py-1 rounded">filter</code></li>
            <li>✅ <code className="bg-white px-2 py-1 rounded">backdrop-filter</code></li>
          </ul>
          <p className="text-gray-700 mt-3">
            Avoid animating: <code className="bg-red-100 px-2 py-1 rounded text-red-700">width</code>, 
            <code className="bg-red-100 px-2 py-1 rounded text-red-700 ml-1">height</code>, 
            <code className="bg-red-100 px-2 py-1 rounded text-red-700 ml-1">top</code>, 
            <code className="bg-red-100 px-2 py-1 rounded text-red-700 ml-1">left</code> (they're slow)
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
          <h3 className="font-bold text-gray-800 mb-2">♿ Accessibility Note</h3>
          <p className="text-gray-700 text-sm">
            Some users have motion sensitivity and enable "reduce motion" in their OS settings. 
            Respect this preference by disabling or simplifying animations when it's enabled. 
            Ask AI to add <code className="bg-white px-2 py-1 rounded">prefers-reduced-motion</code> support!
          </p>
        </div>
      </div>

      {/* Testing Your Animations */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Testing Your Animations</h2>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 space-y-4">
          <h3 className="text-xl font-bold text-gray-800">Before Handing Off, Test:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-5">
              <h4 className="font-bold text-gray-800 mb-3">✅ Visual Checks:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Does it look smooth at 60fps?</li>
                <li>• Are timing/easing consistent?</li>
                <li>• Does it work on mobile?</li>
                <li>• No janky or stuttering movement?</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="font-bold text-gray-800 mb-3">✅ Functional Checks:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Can users still interact during animation?</li>
                <li>• Does it work on slower devices?</li>
                <li>• Handles rapid repeated actions?</li>
                <li>• Works with keyboard navigation?</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="text-sm text-gray-700">
              <strong>💡 Pro Tip:</strong> Open Chrome DevTools, go to Performance settings, and slow down animations 
              to 10% speed. You'll spot issues you'd never see at normal speed!
            </p>
          </div>
        </div>
      </div>

      {/* Success */}
      <div className="card bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white text-center space-y-6">
        <Sparkles className="w-16 h-16 mx-auto" />
        <h2 className="text-3xl font-bold">You're an Animation Pro! ✨</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          You now know how to create smooth, delightful interactions that make your prototypes feel alive!
        </p>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
          <p className="text-lg">
            <strong>Remember:</strong> Great animations are invisible - users don't consciously notice them, 
            they just feel your app is polished and responsive. That's the goal!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/collaboration" className="btn bg-white text-purple-600 hover:bg-gray-100 text-lg shadow-xl">
            <Users className="w-6 h-6" />
            <span>Learn Team Collaboration</span>
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

export default Animations
