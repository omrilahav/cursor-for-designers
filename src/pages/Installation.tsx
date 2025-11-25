import { useState } from 'react'
import { Download, CheckCircle, ExternalLink, ArrowRight, Monitor, Globe, Key, Settings, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useProgress } from '../contexts/ProgressContext'

const Installation = () => {
  const { completeLesson } = useProgress()
  const [completed, setCompleted] = useState<Set<string>>(new Set())

  const handleComplete = (id: string) => {
    const newCompleted = new Set(completed)
    newCompleted.add(id)
    setCompleted(newCompleted)
    completeLesson(`install-${id}`, 'training')
  }

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Hero */}
      <div className="card bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white text-center space-y-4">
        <Download className="w-16 h-16 mx-auto" />
        <h1 className="text-4xl font-bold">Getting Started: Install & Setup</h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Your journey begins here! Let's get Cursor installed and set up perfectly.
        </p>
      </div>

      {/* What is Cursor? */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">What is Cursor?</h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 space-y-4">
          <p className="text-lg text-gray-800 leading-relaxed">
            <strong>Cursor is like VS Code (the world's most popular code editor), but with a superpower: AI built directly into it.</strong>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white rounded-lg p-5 space-y-2">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                What It Does
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Writes code from your descriptions</li>
                <li>• Explains any code you don't understand</li>
                <li>• Fixes bugs automatically</li>
                <li>• Suggests improvements as you type</li>
                <li>• Helps you build without coding experience</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5 space-y-2">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <Monitor className="w-5 h-5 text-purple-600" />
                Who It's For
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Designers who want to code</li>
                <li>• Beginners learning development</li>
                <li>• Anyone building prototypes quickly</li>
                <li>• Teams who want AI assistance</li>
                <li>• You! (Yes, really)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 mt-4">
            <p className="text-gray-700">
              <strong>The Best Part:</strong> You can describe what you want in plain English, and Cursor helps turn it into working code. 
              No more staring at blank screens wondering where to start!
            </p>
          </div>
        </div>
      </div>

      {/* System Requirements */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">System Requirements</h2>
        
        <div className="bg-blue-50 rounded-lg p-6">
          <p className="text-gray-700 mb-4">Cursor works on all major operating systems:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">🍎 macOS</h3>
              <p className="text-sm text-gray-600">macOS 10.15 or later</p>
              <p className="text-xs text-gray-500 mt-1">Intel & Apple Silicon</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">🪟 Windows</h3>
              <p className="text-sm text-gray-600">Windows 10/11</p>
              <p className="text-xs text-gray-500 mt-1">64-bit required</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">🐧 Linux</h3>
              <p className="text-sm text-gray-600">Ubuntu, Debian, Fedora</p>
              <p className="text-xs text-gray-500 mt-1">Most distributions</p>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            💡 You'll also need at least 4GB of RAM and 500MB of disk space
          </p>
        </div>
      </div>

      {/* Installation Steps */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Installation Steps</h2>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 space-y-6">
          {/* Step 1 */}
          <div className="bg-white rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800">Download Cursor</h3>
                <p className="text-gray-600">Get the installer for your operating system</p>
              </div>
            </div>

            <div className="space-y-3 pl-16">
              <div className="flex items-start gap-2">
                <Globe className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-700">Visit the official website:</p>
                  <a 
                    href="https://cursor.sh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 mt-1"
                  >
                    cursor.sh
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="font-bold text-gray-800 mb-2">What to click:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Look for the big "Download for [Your OS]" button</li>
                  <li>• The website detects your operating system automatically</li>
                  <li>• Click it and the installer will download</li>
                  <li>• It's completely free to start!</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-sm text-gray-700">
                  <strong>💡 Pro Tip:</strong> Cursor is free to use! You get a generous amount of AI requests per month for free. 
                  If you need more, there's a Pro plan, but you can start completely free.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800">Install the Application</h3>
                <p className="text-gray-600">Run the installer you just downloaded</p>
              </div>
            </div>

            <div className="space-y-4 pl-16">
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-bold text-gray-800 mb-3">🍎 macOS Instructions:</h4>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">1.</span>
                    <span>Open the downloaded .dmg file</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">2.</span>
                    <span>Drag the Cursor icon to your Applications folder</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">3.</span>
                    <span>Open Applications and double-click Cursor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">4.</span>
                    <span>If you see a security warning, click "Open" - Cursor is safe!</span>
                  </li>
                </ol>
              </div>

              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-bold text-gray-800 mb-3">🪟 Windows Instructions:</h4>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-purple-600">1.</span>
                    <span>Run the downloaded .exe file</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-purple-600">2.</span>
                    <span>Follow the installation wizard (just click "Next")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-purple-600">3.</span>
                    <span>Choose where to install (default location is fine)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-purple-600">4.</span>
                    <span>Wait for installation to complete (about 1-2 minutes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-purple-600">5.</span>
                    <span>Launch Cursor from your Start menu or desktop</span>
                  </li>
                </ol>
              </div>

              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-bold text-gray-800 mb-3">🐧 Linux Instructions:</h4>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-600">1.</span>
                    <span>Download the .AppImage or .deb file</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-600">2.</span>
                    <span>Make it executable: <code className="bg-gray-200 px-2 py-1 rounded text-xs">chmod +x cursor.AppImage</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-600">3.</span>
                    <span>Run it: <code className="bg-gray-200 px-2 py-1 rounded text-xs">./cursor.AppImage</code></span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-600 to-red-600 text-white flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800">First Launch & Sign In</h3>
                <p className="text-gray-600">Create your account and get started</p>
              </div>
            </div>

            <div className="space-y-4 pl-16">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 space-y-3">
                <h4 className="font-bold text-gray-800">When you first open Cursor:</h4>
                <ol className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex-shrink-0">1</span>
                    <div>
                      <p className="font-semibold">You'll see a welcome screen</p>
                      <p className="text-gray-600">Don't worry - it's friendly!</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex-shrink-0">2</span>
                    <div>
                      <p className="font-semibold">Click "Sign In" or "Create Account"</p>
                      <p className="text-gray-600">You can use Google, GitHub, or email</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex-shrink-0">3</span>
                    <div>
                      <p className="font-semibold">Follow the prompts</p>
                      <p className="text-gray-600">It opens in your browser, then brings you back to Cursor</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex-shrink-0">4</span>
                    <div>
                      <p className="font-semibold">You're in! 🎉</p>
                      <p className="text-gray-600">The main Cursor interface will appear</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Why sign in?</strong> Your account syncs settings across devices, tracks your AI usage, 
                  and connects you to the AI features. It's quick and secure!
                </p>
              </div>
            </div>
          </div>

          {!completed.has('installation') && (
            <button
              onClick={() => handleComplete('installation')}
              className="btn-primary w-full text-lg"
            >
              <CheckCircle className="w-6 h-6" />
              <span>I've Installed Cursor!</span>
            </button>
          )}
          {completed.has('installation') && (
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 flex items-center justify-center gap-3 text-green-700">
              <CheckCircle className="w-8 h-8" />
              <span className="text-xl font-bold">Great! You're ready to continue!</span>
            </div>
          )}
        </div>
      </div>

      {/* Initial Setup */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Initial Setup (Optional but Recommended)</h2>
        <p className="text-gray-600">Make Cursor yours with these quick tweaks</p>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div className="flex items-start gap-4">
              <Settings className="w-8 h-8 text-purple-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">1. Choose Your Theme</h3>
                <p className="text-gray-700 mb-3">Make it visually comfortable for long sessions</p>
                <div className="bg-white rounded p-4 space-y-2">
                  <p className="text-sm text-gray-700">Press <kbd className="px-2 py-1 bg-gray-800 text-white rounded text-xs">Cmd+,</kbd> (or <kbd className="px-2 py-1 bg-gray-800 text-white rounded text-xs">Ctrl+,</kbd> on Windows)</p>
                  <p className="text-sm text-gray-700">Search for "Color Theme"</p>
                  <p className="text-sm text-gray-700">Try "Dark+" (dark mode) or "Light+" (light mode)</p>
                  <p className="text-xs text-gray-600 mt-2">💡 You can change this anytime!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">2. Enable AI Features</h3>
                <p className="text-gray-700 mb-3">Make sure all the AI magic is turned on</p>
                <div className="bg-white rounded p-4 space-y-2">
                  <p className="text-sm text-gray-700">Go to Settings → Cursor</p>
                  <p className="text-sm text-gray-700">Make sure these are enabled:</p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4 mt-2">
                    <li>✅ Cursor Tab (AI autocomplete)</li>
                    <li>✅ Inline AI (Cmd+K features)</li>
                    <li>✅ AI Chat (Cmd+L features)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div className="flex items-start gap-4">
              <Key className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">3. Learn the Key Shortcuts</h3>
                <p className="text-gray-700 mb-3">Just three shortcuts to start:</p>
                <div className="bg-white rounded p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700"><strong>Cmd+K</strong> (Ctrl+K)</span>
                    <span className="text-xs text-gray-600">AI inline edit</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700"><strong>Cmd+L</strong> (Ctrl+L)</span>
                    <span className="text-xs text-gray-600">AI chat</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700"><strong>Cmd+`</strong> (Ctrl+`)</span>
                    <span className="text-xs text-gray-600">Toggle terminal</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">💡 These three shortcuts are 80% of what you'll use!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What's Next */}
      <div className="card bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white space-y-6">
        <div className="text-center space-y-4">
          <CheckCircle className="w-16 h-16 mx-auto" />
          <h2 className="text-3xl font-bold">You're All Set! 🎉</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Cursor is installed and ready. Now let's learn how to actually use it!
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Recommended Learning Path:</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">1</div>
              <Link to="/ide-basics" className="text-white hover:text-gray-200 underline">
                Learn the Cursor Interface (20 min)
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">2</div>
              <Link to="/cursor-agent" className="text-white hover:text-gray-200 underline">
                Master the AI Features (30 min)
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">3</div>
              <Link to="/tutorials" className="text-white hover:text-gray-200 underline">
                Build Your First Component (1 hour)
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Link to="/ide-basics" className="btn bg-white text-purple-600 hover:bg-gray-100 text-lg shadow-xl">
            <span>Start Learning Cursor</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="card space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Having Issues?</h2>
        
        <div className="space-y-3">
          <details className="bg-gray-50 rounded-lg p-4">
            <summary className="font-bold text-gray-800 cursor-pointer">Cursor won't open / crashes on startup</summary>
            <div className="mt-3 text-sm text-gray-700 space-y-2">
              <p>Try these fixes:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Restart your computer</li>
                <li>Make sure your OS is up to date</li>
                <li>Reinstall Cursor (uninstall first, then download again)</li>
                <li>Check if your antivirus is blocking it</li>
              </ul>
            </div>
          </details>

          <details className="bg-gray-50 rounded-lg p-4">
            <summary className="font-bold text-gray-800 cursor-pointer">Can't sign in / account issues</summary>
            <div className="mt-3 text-sm text-gray-700 space-y-2">
              <p>Solutions:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Make sure you're connected to the internet</li>
                <li>Try a different sign-in method (Google, GitHub, email)</li>
                <li>Clear your browser cache if sign-in opens in browser</li>
                <li>Contact Cursor support at support@cursor.sh</li>
              </ul>
            </div>
          </details>

          <details className="bg-gray-50 rounded-lg p-4">
            <summary className="font-bold text-gray-800 cursor-pointer">AI features not working</summary>
            <div className="mt-3 text-sm text-gray-700 space-y-2">
              <p>Check these:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Make sure you're signed in to your account</li>
                <li>Check Settings → Cursor to enable AI features</li>
                <li>You might have hit your free tier limit (check usage)</li>
                <li>Try restarting Cursor</li>
              </ul>
            </div>
          </details>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-gray-700">
            <strong>Still stuck?</strong> Visit the <a href="https://cursor.sh/docs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">official Cursor documentation</a> or 
            reach out to their support team. They're friendly and responsive!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Installation

