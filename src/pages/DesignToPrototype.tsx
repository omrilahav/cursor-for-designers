import { useState } from 'react'
import { Figma, Wand2, Play, Eye, Share2, CheckCircle, ArrowRight, Sparkles, Palette, Layout } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useProgress } from '../contexts/ProgressContext'

const DesignToPrototype = () => {
  const { completeLesson } = useProgress()
  const [completed, setCompleted] = useState<Set<string>>(new Set())

  const handleComplete = (id: string) => {
    const newCompleted = new Set(completed)
    newCompleted.add(id)
    setCompleted(newCompleted)
    completeLesson(`d2p-${id}`, 'training')
  }

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Hero */}
      <div className="card bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white text-center space-y-4">
        <Sparkles className="w-16 h-16 mx-auto" />
        <h1 className="text-4xl font-bold">From Idea to Production Code with AI</h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Learn how designers use Cursor + Claude to generate stunning designs and ship working products
        </p>
      </div>

      {/* The Workflow Overview */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">The AI-First Design Workflow</h2>
        <p className="text-gray-600 text-lg">How to generate world-class designs using only AI and conversation</p>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">1. Describe</h3>
              <p className="text-sm text-gray-600">Tell Claude your design vision</p>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-gray-400" />
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Wand2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">2. Generate</h3>
              <p className="text-sm text-gray-600">AI creates complete design</p>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-gray-400" />
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">3. Review</h3>
              <p className="text-sm text-gray-600">See live, working design</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">4. Refine with AI</h3>
              <p className="text-sm text-gray-600">Iterate through conversation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">5. Ship Code</h3>
              <p className="text-sm text-gray-600">Deploy production-ready design</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6">
          <p className="text-gray-700">
            <strong>💡 The Big Advantage:</strong> Traditional prototyping tools create fake interactions. 
            With Cursor, you're building real, working components that can become production code!
          </p>
        </div>
      </div>

      {/* Step 1: Design Phase */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
            <Figma className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Step 1: Design Your Mockup</h2>
            <p className="text-gray-600">Start with what you know - visual design</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 space-y-6">
          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Design in Your Favorite Tool</h3>
            <p className="text-gray-700">
              Create your mockup in Figma, Sketch, Adobe XD, or even paper! Cursor works with any design source.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-blue-50 rounded-lg p-5">
                <h4 className="font-bold text-gray-800 mb-3">What to Include:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✅ Layout and structure</li>
                  <li>✅ Colors and typography</li>
                  <li>✅ Spacing and sizing</li>
                  <li>✅ Component states (hover, active)</li>
                  <li>✅ Responsive variations</li>
                </ul>
              </div>

              <div className="bg-cyan-50 rounded-lg p-5">
                <h4 className="font-bold text-gray-800 mb-3">Pro Tips:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Use clear labels for everything</li>
                  <li>• Show interactive states</li>
                  <li>• Include micro-interactions</li>
                  <li>• Note animations you want</li>
                  <li>• Keep it organized with frames</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Example: Designing a Product Card</h3>
            <div className="bg-gray-50 rounded-lg p-5 space-y-3">
              <p className="text-sm text-gray-700">Let's say you're designing a product card for an e-commerce site:</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">•</span>
                  <span>Product image at top (16:9 ratio)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">•</span>
                  <span>Product name (bold, 18px)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">•</span>
                  <span>Price (24px, primary color)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">•</span>
                  <span>Rating stars</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">•</span>
                  <span>"Add to Cart" button (rounded, gradient)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">•</span>
                  <span>Hover: card lifts with shadow</span>
                </div>
              </div>
            </div>
          </div>

          {!completed.has('design-phase') && (
            <button
              onClick={() => handleComplete('design-phase')}
              className="btn-primary w-full"
            >
              <CheckCircle className="w-5 h-5" />
              <span>I Have My Design Ready!</span>
            </button>
          )}
          {completed.has('design-phase') && (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center justify-center gap-3 text-green-700">
              <CheckCircle className="w-6 h-6" />
              <span className="font-bold">Great! Let's turn it into code!</span>
            </div>
          )}
        </div>
      </div>

      {/* Step 2: Describing to AI */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
            <Wand2 className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Step 2: Describe Your Design to AI</h2>
            <p className="text-gray-600">Translate visual into words - AI does the rest</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 space-y-6">
          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">How to Describe Designs</h3>
            <p className="text-gray-700 mb-4">The key is being specific but natural. Talk like you're explaining to a colleague.</p>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-6 space-y-4">
              <h4 className="font-bold text-gray-800 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-600" />
                The Perfect Description Formula
              </h4>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-gray-800 mb-2">1. Layout Structure</p>
                  <p className="text-sm text-gray-700">Describe how elements are arranged</p>
                  <div className="bg-gray-50 rounded p-3 mt-2">
                    <code className="text-xs text-gray-800">"Create a card with image at top, title below, then price and button at bottom"</code>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-gray-800 mb-2">2. Visual Style</p>
                  <p className="text-sm text-gray-700">Colors, typography, spacing</p>
                  <div className="bg-gray-50 rounded p-3 mt-2">
                    <code className="text-xs text-gray-800">"Use rounded corners (12px radius), white background, subtle shadow. Title is bold 18px"</code>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-gray-800 mb-2">3. Interactive Elements</p>
                  <p className="text-sm text-gray-700">Buttons, hovers, clicks</p>
                  <div className="bg-gray-50 rounded p-3 mt-2">
                    <code className="text-xs text-gray-800">"Button is gradient blue to purple. On hover, it lifts with a larger shadow"</code>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-gray-800 mb-2">4. Responsive Behavior</p>
                  <p className="text-sm text-gray-700">Mobile, tablet, desktop</p>
                  <div className="bg-gray-50 rounded p-3 mt-2">
                    <code className="text-xs text-gray-800">"On mobile, stack vertically. On desktop, show 3 cards per row"</code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Real Example: Product Card</h3>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-5">
                <p className="text-sm font-bold text-gray-800 mb-2">✅ GOOD Description:</p>
                <p className="text-sm text-gray-700 italic">
                  "Create a product card component. The card should have a 16:9 product image at the top with rounded top corners.
                  Below the image, show the product name in bold 18px dark gray text. Under that, display the price in 24px blue text.
                  Add a row of 5 star icons for rating. At the bottom, place an 'Add to Cart' button with a blue-to-purple gradient, white text, and rounded corners.
                  When the card is hovered, it should lift slightly with a larger shadow. Make it responsive - full width on mobile, max 300px wide on desktop.
                  Use modern spacing with padding around 20px."
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-5">
                <p className="text-sm font-bold text-gray-800 mb-2">❌ BAD Description:</p>
                <p className="text-sm text-gray-700 italic">
                  "Make a card for products with nice styling"
                </p>
                <p className="text-xs text-gray-600 mt-2">Too vague! AI won't know what you want.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-800 mb-3">💡 Pro Tips for Descriptions:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Reference your design system: "Use the primary button style from our design system"</li>
              <li>• Mention similar components: "Like the UserCard but for products"</li>
              <li>• Include exact measurements when precision matters: "24px padding, 8px border radius"</li>
              <li>• Describe states: "Hover, active, disabled, and loading states"</li>
              <li>• Start broad, then refine with follow-ups</li>
            </ul>
          </div>

          {!completed.has('describe-phase') && (
            <button
              onClick={() => handleComplete('describe-phase')}
              className="btn-primary w-full"
            >
              <CheckCircle className="w-5 h-5" />
              <span>I Know How to Describe Designs!</span>
            </button>
          )}
          {completed.has('describe-phase') && (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center justify-center gap-3 text-green-700">
              <CheckCircle className="w-6 h-6" />
              <span className="font-bold">Perfect! Ready to build!</span>
            </div>
          )}
        </div>
      </div>

      {/* Step 3: Building with AI */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
            <Play className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Step 3: Build with Cursor Agent</h2>
            <p className="text-gray-600">Let AI turn your description into working code</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 space-y-6">
          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Using Agent Mode (Recommended for Components)</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-800">Open Cursor Agent</p>
                  <p className="text-sm text-gray-700">Press Cmd+Shift+L (or click Agent in chat dropdown)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-800">Paste Your Description</p>
                  <p className="text-sm text-gray-700 mb-2">Include all the details from step 2</p>
                  <div className="bg-gray-50 rounded p-3">
                    <p className="text-xs text-gray-700 italic">
                      "@components/ create a ProductCard component. [paste your full description here]"
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-800">Review AI's Plan</p>
                  <p className="text-sm text-gray-700">Agent shows what files it will create/modify. Check it makes sense.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-800">Review Code Changes</p>
                  <p className="text-sm text-gray-700">See exactly what code will be generated. You can accept all or individual pieces.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-800">Apply & Preview</p>
                  <p className="text-sm text-gray-700">Click "Apply", then preview in browser to see your component live!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Iterating on the Design</h3>
            <p className="text-gray-700">First version not perfect? That's normal! Here's how to refine:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="font-bold text-gray-800 mb-2">Visual Tweaks:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• "Make the button larger"</li>
                  <li>• "Increase spacing between elements"</li>
                  <li>• "Change the gradient to red-pink"</li>
                  <li>• "Make corners more rounded"</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <p className="font-bold text-gray-800 mb-2">Interaction Updates:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• "Add a loading state to the button"</li>
                  <li>• "Make hover animation smoother"</li>
                  <li>• "Add click feedback"</li>
                  <li>• "Include a disabled state"</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-sm text-gray-700">
                <strong>💡 Designer Tip:</strong> Make one change at a time. It's faster than describing everything at once, 
                and you can see exactly what each change does. Think of it like adjusting layers in Figma!
              </p>
            </div>
          </div>

          {!completed.has('build-phase') && (
            <button
              onClick={() => handleComplete('build-phase')}
              className="btn-primary w-full"
            >
              <CheckCircle className="w-5 h-5" />
              <span>I Built My First Component!</span>
            </button>
          )}
          {completed.has('build-phase') && (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center justify-center gap-3 text-green-700">
              <CheckCircle className="w-6 h-6" />
              <span className="font-bold">Excellent! You're prototyping like a pro!</span>
            </div>
          )}
        </div>
      </div>

      {/* Testing & Iteration */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
            <Eye className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Step 4: Test & Iterate</h2>
            <p className="text-gray-600">The magic of working prototypes</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 space-y-4">
          <div className="bg-white rounded-lg p-5">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Why This is Better Than Traditional Prototyping</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-red-600 mb-2">Traditional Tools:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>❌ Fake, simulated interactions</li>
                  <li>❌ Limited to pre-set animations</li>
                  <li>❌ Can't test real data</li>
                  <li>❌ Doesn't match final product</li>
                  <li>❌ Needs rebuilding in code</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-green-600 mb-2">Cursor Prototypes:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✅ Real, functional code</li>
                  <li>✅ Any interaction possible</li>
                  <li>✅ Test with real APIs/data</li>
                  <li>✅ Exact production experience</li>
                  <li>✅ Code is production-ready</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Testing Checklist</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm text-gray-700">Test on different screen sizes (mobile, tablet, desktop)</label>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm text-gray-700">Check all interactive states (hover, click, focus)</label>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm text-gray-700">Verify animations are smooth</label>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm text-gray-700">Test with real content (long text, missing images)</label>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm text-gray-700">Check accessibility (keyboard navigation, screen readers)</label>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm text-gray-700">Share with stakeholders/users for feedback</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="card bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white text-center space-y-6">
        <CheckCircle className="w-16 h-16 mx-auto" />
        <h2 className="text-3xl font-bold">You're Now Prototyping Like a Pro! 🎉</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          You've learned the complete design-to-prototype workflow. Next, learn how to build entire design systems!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/design-systems" className="btn bg-white text-purple-600 hover:bg-gray-100 text-lg shadow-xl">
            <Palette className="w-6 h-6" />
            <span>Build Design Systems</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
          <Link to="/design-handoff" className="btn-outline border-white text-white hover:bg-white/20 text-lg">
            <Share2 className="w-5 h-5" />
            <span>Learn Dev Handoff</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DesignToPrototype

