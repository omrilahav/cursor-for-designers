import { useState } from 'react'
import { Bot, MessageSquare, Edit3, Wand2, CheckCircle, Lightbulb, Zap, FileCode, ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useProgress } from '../contexts/ProgressContext'

const CursorAgent = () => {
  const { completeLesson } = useProgress()
  const [completed, setCompleted] = useState<Set<string>>(new Set())

  const handleComplete = (id: string) => {
    const newCompleted = new Set(completed)
    newCompleted.add(id)
    setCompleted(newCompleted)
    completeLesson(`agent-${id}`, 'training')
  }

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Hero */}
      <div className="card bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white text-center space-y-4">
        <Bot className="w-16 h-16 mx-auto" />
        <h1 className="text-4xl font-bold">Mastering Cursor's AI Features</h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Learn to use Agent, Chat, and AI superpowers to build anything you can imagine
        </p>
      </div>

      {/* The Three Modes */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">The 3 Ways to Use AI in Cursor</h2>
        <p className="text-gray-600 text-lg">Cursor has three powerful AI modes. Each is perfect for different situations.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Agent Mode */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Agent</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>The powerhouse.</strong> Agent can edit multiple files, create new components, and execute complex tasks across your entire project.
            </p>
            <div className="bg-white rounded-lg p-4 space-y-2">
              <p className="font-bold text-gray-800 text-sm">Use when you need to:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Build an entire feature</li>
                <li>• Create multiple files at once</li>
                <li>• Refactor across files</li>
                <li>• Execute complex workflows</li>
              </ul>
            </div>
            <div className="bg-blue-100 rounded-lg p-3">
              <p className="text-xs text-gray-700">
                <strong>Shortcut:</strong> Access via chat dropdown or Cmd+Shift+L
              </p>
            </div>
          </div>

          {/* Chat Mode */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Chat</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Your AI pair programmer.</strong> Have conversations, ask questions, get explanations, and request code suggestions.
            </p>
            <div className="bg-white rounded-lg p-4 space-y-2">
              <p className="font-bold text-gray-800 text-sm">Use when you want to:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Ask "how does this work?"</li>
                <li>• Get code explanations</li>
                <li>• Plan your approach</li>
                <li>• Debug issues together</li>
              </ul>
            </div>
            <div className="bg-purple-100 rounded-lg p-3">
              <p className="text-xs text-gray-700">
                <strong>Shortcut:</strong> Cmd+L (Ctrl+L on Windows)
              </p>
            </div>
          </div>

          {/* Inline Edit Mode */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                <Edit3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Inline</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Quick and precise.</strong> Generate or modify code exactly where your cursor is. Perfect for focused edits.
            </p>
            <div className="bg-white rounded-lg p-4 space-y-2">
              <p className="font-bold text-gray-800 text-sm">Use when you need to:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Add a single function</li>
                <li>• Modify specific code</li>
                <li>• Quick generate & iterate</li>
                <li>• Stay in flow state</li>
              </ul>
            </div>
            <div className="bg-green-100 rounded-lg p-3">
              <p className="text-xs text-gray-700">
                <strong>Shortcut:</strong> Cmd+K (Ctrl+K on Windows)
              </p>
            </div>
        </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
          <p className="text-gray-700 leading-relaxed">
            <strong>💡 Pro Tip:</strong> Start with Chat to plan and understand, use Agent to build features, 
            and use Inline for quick edits. They work beautifully together!
          </p>
        </div>
      </div>

      {/* Agent Mode Deep Dive */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Agent Mode: The Composer</h2>
            <p className="text-gray-600">Build entire features with AI assistance</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">What Makes Agent Special?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 space-y-2">
                <Zap className="w-6 h-6 text-blue-600" />
                <h4 className="font-bold text-gray-800">Multi-File Editing</h4>
                <p className="text-sm text-gray-700">Agent can create, modify, and delete multiple files in one go</p>
              </div>
              <div className="bg-white rounded-lg p-4 space-y-2">
                <FileCode className="w-6 h-6 text-blue-600" />
                <h4 className="font-bold text-gray-800">Context Awareness</h4>
                <p className="text-sm text-gray-700">Understands your entire codebase and project structure</p>
              </div>
              <div className="bg-white rounded-lg p-4 space-y-2">
                <Wand2 className="w-6 h-6 text-blue-600" />
                <h4 className="font-bold text-gray-800">Planning Mode</h4>
                <p className="text-sm text-gray-700">Can break down complex tasks and show you the plan first</p>
              </div>
              <div className="bg-white rounded-lg p-4 space-y-2">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <h4 className="font-bold text-gray-800">Execution Control</h4>
                <p className="text-sm text-gray-700">Review changes before applying them</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">How to Use Agent Mode</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-800">Open Agent Mode</p>
                  <p className="text-sm text-gray-700">Click the dropdown in chat and select "Agent" (or press Cmd+Shift+L)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-800">Describe Your Feature</p>
                  <p className="text-sm text-gray-700 mb-2">Be clear and detailed about what you want to build</p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 text-xs">
                    <p className="font-bold text-gray-800 mb-1">Good Example:</p>
                    <p className="text-gray-700">"Create a user profile card component with an avatar, name, bio, and a follow button. Make it responsive and add hover effects. Use our design system colors."</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-800">Review the Plan</p>
                  <p className="text-sm text-gray-700">Agent will show you what files it wants to create/modify. Check that it looks good.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-800">Review Changes</p>
                  <p className="text-sm text-gray-700">See exactly what code will be added/changed. You can accept all or pick individual changes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-800">Apply & Iterate</p>
                  <p className="text-sm text-gray-700">Click "Apply" to execute. Then you can ask for refinements: "Make the avatar larger" or "Add a loading state"</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-5">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Real-World Agent Examples
            </h4>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <p className="font-bold">"Build a contact form with name, email, message fields and validation"</p>
                <p className="text-xs text-gray-600">→ Agent creates form component, validation logic, styling, and success state</p>
              </div>
              <div>
                <p className="font-bold">"Add dark mode to my entire app"</p>
                <p className="text-xs text-gray-600">→ Agent updates theme config, modifies components, adds toggle button</p>
              </div>
              <div>
                <p className="font-bold">"Create a navigation menu with dropdown submenus"</p>
                <p className="text-xs text-gray-600">→ Agent builds nav component, dropdown logic, mobile responsive menu</p>
              </div>
            </div>
          </div>

          {!completed.has('agent-mode') && (
            <button
              onClick={() => handleComplete('agent-mode')}
              className="btn-primary w-full"
            >
              <CheckCircle className="w-5 h-5" />
              <span>I Understand Agent Mode!</span>
            </button>
          )}
          {completed.has('agent-mode') && (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center justify-center gap-3 text-green-700">
              <CheckCircle className="w-6 h-6" />
              <span className="font-bold">Great! You're ready to use Agent!</span>
            </div>
          )}
        </div>
      </div>

      {/* Chat Mode Deep Dive */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Chat Mode: Your AI Pair Programmer</h2>
            <p className="text-gray-600">Ask questions, get explanations, plan your code</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 space-y-6">
          <div className="bg-white rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">What You Can Do in Chat</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-lg p-4 space-y-2">
                <h4 className="font-bold text-gray-800">💬 Ask Questions</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• "What does this function do?"</li>
                  <li>• "Why isn't this working?"</li>
                  <li>• "How do I center a div?"</li>
                  <li>• "Explain React hooks to me"</li>
                </ul>
              </div>
              <div className="bg-pink-50 rounded-lg p-4 space-y-2">
                <h4 className="font-bold text-gray-800">📋 Get Suggestions</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• "How can I improve this code?"</li>
                  <li>• "What's wrong with my CSS?"</li>
                  <li>• "Suggest a better approach"</li>
                  <li>• "Make this more performant"</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                <h4 className="font-bold text-gray-800">🎯 Plan Features</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• "How should I structure this?"</li>
                  <li>• "What steps to build a form?"</li>
                  <li>• "Best way to organize files?"</li>
                  <li>• "What libraries should I use?"</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4 space-y-2">
                <h4 className="font-bold text-gray-800">🔧 Debug Together</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• "This error says... help?"</li>
                  <li>• "Why isn't X updating?"</li>
                  <li>• "Find the bug in this code"</li>
                  <li>• "Console shows..."</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Using @ Mentions for Context</h3>
            <p className="text-gray-700">@ mentions help AI understand exactly what you're talking about</p>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-5 space-y-4">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">@file - Reference Specific Files</h4>
                <p className="text-sm text-gray-700 mb-2">Type @ and start typing a filename. AI will read that file for context.</p>
                <div className="bg-white rounded p-3 font-mono text-sm text-gray-800">
                  @components/Button.tsx can you add a loading state?
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-2">@folder - Reference Entire Folders</h4>
                <p className="text-sm text-gray-700 mb-2">Include context from all files in a folder</p>
                <div className="bg-white rounded p-3 font-mono text-sm text-gray-800">
                  @components/ make all buttons consistent
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-2">@code - Reference Selected Code</h4>
                <p className="text-sm text-gray-700 mb-2">Select code in your editor, then @ it in chat</p>
                <div className="bg-white rounded p-3 font-mono text-sm text-gray-800">
                  @code explain what this function does
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-2">@docs - Search Documentation</h4>
                <p className="text-sm text-gray-700 mb-2">Get answers from official framework docs</p>
                <div className="bg-white rounded p-3 font-mono text-sm text-gray-800">
                  @docs react how do I use useEffect?
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-sm text-gray-700">
                <strong>💡 Pro Tip:</strong> The more context you give (with @ mentions), the better the AI's responses. 
                Always @ the files you're working with!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 space-y-3">
            <h3 className="text-xl font-bold text-gray-800">Chat Best Practices</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✅</span>
                <p className="text-sm text-gray-700">Be conversational: "Can you help me..." works great</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✅</span>
                <p className="text-sm text-gray-700">Ask follow-up questions: Chat remembers your conversation</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✅</span>
                <p className="text-sm text-gray-700">Request explanations: "Why did you do it this way?"</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✅</span>
                <p className="text-sm text-gray-700">Use @mentions for precise context</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold">❌</span>
                <p className="text-sm text-gray-700">Don't expect mind reading: Provide context!</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold">❌</span>
                <p className="text-sm text-gray-700">Don't paste huge chunks without explanation</p>
              </div>
            </div>
          </div>

          {!completed.has('chat-mode') && (
            <button
              onClick={() => handleComplete('chat-mode')}
              className="btn-primary w-full"
            >
              <CheckCircle className="w-5 h-5" />
              <span>I Understand Chat Mode!</span>
            </button>
          )}
          {completed.has('chat-mode') && (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center justify-center gap-3 text-green-700">
              <CheckCircle className="w-6 h-6" />
              <span className="font-bold">Awesome! Now you can chat like a pro!</span>
            </div>
          )}
        </div>
      </div>

      {/* Inline Edit Deep Dive */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
            <Edit3 className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Inline Edit: Quick & Focused</h2>
            <p className="text-gray-600">Generate code exactly where you need it</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 space-y-6">
          <div className="bg-white rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">When to Use Inline (Cmd+K)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Perfect For:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✅ Adding a single function</li>
                  <li>✅ Modifying specific lines</li>
                  <li>✅ Quick iterations</li>
                  <li>✅ Staying focused</li>
                  <li>✅ Small, precise changes</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Not Ideal For:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>❌ Creating multiple files</li>
                  <li>❌ Complex multi-step features</li>
                  <li>❌ Questions & explanations</li>
                  <li>❌ Large refactoring</li>
                  <li>❌ Planning & discussion</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">How to Use Inline Edit</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-5 space-y-3">
                <h4 className="font-bold text-gray-800">Method 1: Generate New Code</h4>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li>1. Place cursor where you want code</li>
                  <li>2. Press <kbd className="px-2 py-1 bg-gray-800 text-white rounded text-xs">Cmd+K</kbd></li>
                  <li>3. Describe what you want: "create a function that validates email"</li>
                  <li>4. Press Enter, review the suggestion</li>
                  <li>5. Press Tab to accept, Esc to reject</li>
                </ol>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 space-y-3">
                <h4 className="font-bold text-gray-800">Method 2: Modify Existing Code</h4>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li>1. Select the code you want to change</li>
                  <li>2. Press <kbd className="px-2 py-1 bg-gray-800 text-white rounded text-xs">Cmd+K</kbd></li>
                  <li>3. Describe the change: "add error handling"</li>
                  <li>4. Review the updated code</li>
                  <li>5. Tab to accept, Esc to reject</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Inline Examples</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm font-bold text-gray-800 mb-1">Generate a helper function:</p>
                <p className="text-xs font-mono text-gray-700">"create a function that formats currency"</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm font-bold text-gray-800 mb-1">Add styling:</p>
                <p className="text-xs font-mono text-gray-700">"add hover effect that changes background to blue"</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm font-bold text-gray-800 mb-1">Refactor code:</p>
                <p className="text-xs font-mono text-gray-700">"convert this to use arrow function syntax"</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <p className="text-sm font-bold text-gray-800 mb-1">Add features:</p>
                <p className="text-xs font-mono text-gray-700">"add a loading state to this button"</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5">
            <p className="text-sm text-gray-700">
              <strong>💡 Iteration Tip:</strong> Accept a suggestion, then immediately press Cmd+K again to refine it. 
              This workflow is incredibly powerful: "add button" → accept → Cmd+K → "make it blue" → accept → Cmd+K → "add shadow"
            </p>
          </div>

          {!completed.has('inline-mode') && (
            <button
              onClick={() => handleComplete('inline-mode')}
              className="btn-primary w-full"
            >
              <CheckCircle className="w-5 h-5" />
              <span>I Understand Inline Edit!</span>
            </button>
          )}
          {completed.has('inline-mode') && (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center justify-center gap-3 text-green-700">
              <CheckCircle className="w-6 h-6" />
              <span className="font-bold">Perfect! You're ready to edit inline!</span>
            </div>
          )}
        </div>
      </div>

      {/* Choosing the Right Mode */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Choosing the Right Mode: Quick Guide</h2>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
              <h3 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                <Bot className="w-5 h-5" />
                Use Agent When...
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Building a complete feature</li>
                <li>• Need to edit multiple files</li>
                <li>• Want AI to plan first</li>
                <li>• Complex workflows</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-purple-300">
              <h3 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Use Chat When...
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Have questions</li>
                <li>• Need explanations</li>
                <li>• Planning approach</li>
                <li>• Debugging issues</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-green-300">
              <h3 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                <Edit3 className="w-5 h-5" />
                Use Inline When...
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Quick, focused edits</li>
                <li>• Single file changes</li>
                <li>• In flow state</li>
                <li>• Iterating rapidly</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg p-5">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              Typical Workflow
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span className="font-bold text-purple-600">1. Chat:</span>
                <span>"How should I structure a user dashboard?"</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-blue-600">2. Agent:</span>
                <span>"Build the dashboard component with sidebar and main content"</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-green-600">3. Inline:</span>
                <span>Quick tweaks: "make sidebar collapsible"</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-purple-600">4. Chat:</span>
                <span>"Why isn't the sidebar animation smooth?"</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="card bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white text-center space-y-6">
        <CheckCircle className="w-16 h-16 mx-auto" />
        <h2 className="text-3xl font-bold">You're Now an AI Power User! 🚀</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          You know how to use all three AI modes effectively. Time to put it into practice!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/tutorials" className="btn bg-white text-purple-600 hover:bg-gray-100 text-lg shadow-xl">
            <Play className="w-6 h-6" />
            <span>Build Your First Component</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CursorAgent

