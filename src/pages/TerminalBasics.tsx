import { useState } from 'react'
import { Terminal, Folder, Download, Play, Trash2, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useProgress } from '../contexts/ProgressContext'

const TerminalBasics = () => {
  const { completeLesson } = useProgress()
  const [completed, setCompleted] = useState<Set<string>>(new Set())

  const handleComplete = (id: string) => {
    const newCompleted = new Set(completed)
    newCompleted.add(id)
    setCompleted(newCompleted)
    completeLesson(`terminal-${id}`, 'training')
  }

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Hero */}
      <div className="card bg-gradient-to-br from-green-500 to-teal-500 text-white text-center space-y-4">
        <Terminal className="w-16 h-16 mx-auto" />
        <h1 className="text-4xl font-bold">Terminal Basics for Designers</h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Don't be scared of the black screen! Learn the essential commands you actually need.
        </p>
      </div>

      {/* What is Terminal */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">What is the Terminal?</h2>
        
        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <p className="text-lg text-gray-700">
            <strong>Simple answer:</strong> The terminal is a way to control your computer by typing commands instead of clicking.
          </p>
          
          <p className="text-gray-700">
            Think of it like texting with your computer. Instead of opening apps and clicking buttons, 
            you type short messages like "install this" or "run my app" and your computer does it.
          </p>

          <div className="bg-white rounded p-4">
            <p className="font-bold text-gray-800 mb-2">Real-World Analogy:</p>
            <p className="text-gray-700">
              <strong>Graphical Interface:</strong> Like ordering at a restaurant with pictures - you point at what you want.<br/>
              <strong>Terminal:</strong> Like calling the restaurant - you describe what you want in words.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
          <p className="font-bold text-gray-800 mb-2">🎯 Good News for Designers:</p>
          <p className="text-gray-700">
            You don't need to memorize dozens of commands. For most design work, you'll use maybe 5-10 commands total.
            This guide teaches you exactly what you need, nothing more.
          </p>
        </div>
      </div>

      {/* Opening Terminal */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Opening the Terminal in Cursor</h2>
        
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Three Ways to Open It:</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <p className="font-bold text-gray-800">1. Keyboard Shortcut (Fastest)</p>
                <kbd className="inline-block px-3 py-2 bg-gray-800 text-white rounded font-mono text-sm mt-2">
                  Cmd + ` (Mac) or Ctrl + ` (Windows)
                </kbd>
                <p className="text-gray-600 text-sm mt-2">Note: That's the backtick key, usually above Tab</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <p className="font-bold text-gray-800">2. Top Menu</p>
                <p className="text-gray-700">Click: <strong>Terminal → New Terminal</strong></p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <p className="font-bold text-gray-800">3. Command Palette</p>
                <p className="text-gray-700">Press <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Cmd+Shift+P</kbd>, type "terminal", select "Create New Terminal"</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-3">🎯 Try It Now:</h3>
            <ol className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className="font-bold text-green-600">1.</span>
                <span className="text-gray-700">Open Cursor</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold text-green-600">2.</span>
                <span className="text-gray-700">Press Cmd+` (or Ctrl+` on Windows)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold text-green-600">3.</span>
                <span className="text-gray-700">A panel appears at the bottom - that's your terminal!</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold text-green-600">4.</span>
                <span className="text-gray-700">You should see a blinking cursor ready for commands</span>
              </li>
            </ol>
            {!completed.has('open-terminal') && (
              <button
                onClick={() => handleComplete('open-terminal')}
                className="btn-primary mt-4 w-full"
              >
                I Did It! Mark Complete
              </button>
            )}
            {completed.has('open-terminal') && (
              <div className="bg-white rounded p-3 mt-4 flex items-center space-x-2 text-green-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Completed! ✨</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Essential Commands */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">The 10 Commands You Actually Need</h2>
        <p className="text-gray-600">
          These are the only commands most designers ever use. Master these and you're set!
        </p>

        <div className="space-y-4">
          {/* pwd */}
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <Folder className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">1. pwd - "Where am I?"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Stands for:</strong> Print Working Directory<br/>
                  <strong>What it does:</strong> Shows you which folder you're currently in
                </p>
                <div className="bg-gray-900 text-green-400 rounded p-4 font-mono text-sm">
                  $ pwd<br/>
                  /Users/yourname/Desktop/my-project
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  💡 Use this when you're confused about where you are. The terminal always "starts" in some folder.
                </p>
              </div>
            </div>
          </div>

          {/* ls */}
          <div className="bg-purple-50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <Folder className="w-8 h-8 text-purple-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">2. ls - "What's in here?"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Stands for:</strong> List<br/>
                  <strong>What it does:</strong> Shows all files and folders in the current location
                </p>
                <div className="bg-gray-900 text-green-400 rounded p-4 font-mono text-sm">
                  $ ls<br/>
                  index.html  styles.css  images/  components/
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  💡 Like looking at files in Finder/Explorer, but in text form
                </p>
              </div>
            </div>
          </div>

          {/* cd */}
          <div className="bg-green-50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <Folder className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">3. cd - "Go to a folder"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Stands for:</strong> Change Directory<br/>
                  <strong>What it does:</strong> Moves you to a different folder
                </p>
                <div className="bg-gray-900 text-green-400 rounded p-4 font-mono text-sm space-y-2">
                  <div>$ cd my-project    <span className="text-gray-500"># Go into my-project folder</span></div>
                  <div>$ cd ..            <span className="text-gray-500"># Go up one level</span></div>
                  <div>$ cd ~             <span className="text-gray-500"># Go to your home folder</span></div>
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  💡 Most common use: <code className="bg-white px-2 py-1 rounded">cd</code> into your project folder before running commands
                </p>
              </div>
            </div>
          </div>

          {/* npm install */}
          <div className="bg-yellow-50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <Download className="w-8 h-8 text-yellow-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">4. npm install - "Download dependencies"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>What it does:</strong> Downloads all the tools and libraries your project needs<br/>
                  <strong>When to use:</strong> After cloning/downloading a project, before running it
                </p>
                <div className="bg-gray-900 text-green-400 rounded p-4 font-mono text-sm">
                  $ npm install<br/>
                  <span className="text-gray-500"># Downloads packages... this takes a minute</span>
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  💡 Think of it like "Install dependencies" button. Run once per project.
                </p>
              </div>
            </div>
          </div>

          {/* npm run dev */}
          <div className="bg-pink-50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <Play className="w-8 h-8 text-pink-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">5. npm run dev - "Start my app"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>What it does:</strong> Starts your development server so you can preview your app<br/>
                  <strong>When to use:</strong> Every time you want to see your project in the browser
                </p>
                <div className="bg-gray-900 text-green-400 rounded p-4 font-mono text-sm space-y-1">
                  <div>$ npm run dev</div>
                  <div className="text-blue-400">➜ Local: http://localhost:5173/</div>
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  💡 Keep this running while you work. Stop it with Ctrl+C when done.
                </p>
              </div>
            </div>
          </div>

          {/* clear */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <Trash2 className="w-8 h-8 text-indigo-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">6. clear - "Clean up the screen"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>What it does:</strong> Clears all the old output to give you a fresh screen<br/>
                  <strong>When to use:</strong> When terminal gets messy with old text
                </p>
                <div className="bg-gray-900 text-green-400 rounded p-4 font-mono text-sm">
                  $ clear
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  💡 Doesn't delete anything - just clears the view. Shortcut: Cmd+K (Mac) or Ctrl+L (Windows)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-6">
          <h3 className="font-bold text-gray-800 mb-4">🎯 Practice Exercise: Your First Commands</h3>
          <ol className="space-y-3">
            <li className="flex items-start space-x-2">
              <span className="font-bold text-primary-600">1.</span>
              <div className="flex-1">
                <p className="text-gray-700">Open terminal in Cursor (Cmd+`)</p>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-primary-600">2.</span>
              <div className="flex-1">
                <p className="text-gray-700">Type <code className="bg-white px-2 py-1 rounded">pwd</code> and press Enter</p>
                <p className="text-gray-600 text-sm">You'll see your current folder path</p>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-primary-600">3.</span>
              <div className="flex-1">
                <p className="text-gray-700">Type <code className="bg-white px-2 py-1 rounded">ls</code> and press Enter</p>
                <p className="text-gray-600 text-sm">You'll see files in that folder</p>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-primary-600">4.</span>
              <div className="flex-1">
                <p className="text-gray-700">Type <code className="bg-white px-2 py-1 rounded">clear</code> and press Enter</p>
                <p className="text-gray-600 text-sm">Screen clears - you did it!</p>
              </div>
            </li>
          </ol>
          {!completed.has('first-commands') && (
            <button
              onClick={() => handleComplete('first-commands')}
              className="btn-primary mt-4 w-full"
            >
              I Completed the Exercise!
            </button>
          )}
          {completed.has('first-commands') && (
            <div className="bg-white rounded p-3 mt-4 flex items-center space-x-2 text-green-700">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Great job! You're a terminal user now! 🎉</span>
            </div>
          )}
        </div>
      </div>

      {/* Common Pitfalls */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Common Mistakes & How to Fix Them</h2>

        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Error: "command not found"</h3>
                <p className="text-gray-700 mb-2"><strong>What happened:</strong> You misspelled the command or it's not installed</p>
                <p className="text-gray-700"><strong>Fix:</strong> Double-check spelling. For npm commands, make sure Node.js is installed.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Error: "permission denied"</h3>
                <p className="text-gray-700 mb-2"><strong>What happened:</strong> You don't have permission to do that action</p>
                <p className="text-gray-700"><strong>Fix:</strong> Don't use <code className="bg-white px-2 py-1 rounded">sudo</code> unless you know why. Usually means you're in the wrong folder.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Terminal is "frozen" / not responding</h3>
                <p className="text-gray-700 mb-2"><strong>What happened:</strong> A command is running (like your dev server)</p>
                <p className="text-gray-700"><strong>Fix:</strong> Press Ctrl+C to stop the current command. Or open a new terminal tab.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pro Tips */}
      <div className="card bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Pro Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-bold text-gray-800 mb-2">⬆️ Arrow Keys</h3>
            <p className="text-gray-700 text-sm">Press ↑ to see your previous commands. No need to retype!</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-bold text-gray-800 mb-2">⇥ Tab Completion</h3>
            <p className="text-gray-700 text-sm">Start typing a filename and press Tab - it auto-completes!</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-bold text-gray-800 mb-2">⌘C Stop Command</h3>
            <p className="text-gray-700 text-sm">Ctrl+C stops whatever is running. Your emergency stop button!</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-bold text-gray-800 mb-2">📋 Copy/Paste</h3>
            <p className="text-gray-700 text-sm">Cmd+C/V (Mac) or Ctrl+Shift+C/V (Windows) in terminal</p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="card bg-gradient-to-r from-green-500 to-teal-500 text-white text-center space-y-4">
        <CheckCircle className="w-16 h-16 mx-auto" />
        <h2 className="text-3xl font-bold">You're Now a Terminal User! 🎉</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          The terminal isn't scary anymore. You know the essentials!
          Ready to learn Git for saving your work?
        </p>
        <Link 
          to="/git-basics"
          className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
        >
          <span>Learn Git Basics</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  )
}

export default TerminalBasics

