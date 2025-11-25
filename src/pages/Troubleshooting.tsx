import { AlertTriangle, CheckCircle, RefreshCw, Terminal, FileX, Wifi, Bug, Search, MessageCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Troubleshooting = () => {
  const commonIssues = [
    {
      category: 'Cursor Issues',
      icon: FileX,
      problems: [
        {
          issue: 'Cursor won\'t open or crashes on startup',
          solutions: [
            'Restart your computer (the classic fix!)',
            'Check if your OS is up to date',
            'Try reinstalling Cursor: uninstall first, then download fresh copy',
            'Check if antivirus is blocking it - add Cursor to whitelist',
            'On Mac: Check Security & Privacy settings, allow Cursor to run'
          ]
        },
        {
          issue: 'AI features aren\'t working',
          solutions: [
            'Make sure you\'re signed in (check top-right corner)',
            'Check your internet connection',
            'Go to Settings → Cursor → make sure AI features are enabled',
            'You might have hit your free tier limit - check usage',
            'Try signing out and back in',
            'Restart Cursor'
          ]
        },
        {
          issue: 'Files not showing in sidebar',
          solutions: [
            'Make sure you opened a folder, not just a file (File → Open Folder)',
            'Try refreshing: right-click sidebar → Refresh',
            'Check if files are hidden: View → Show Hidden Files',
            'Make sure you\'re in the correct workspace'
          ]
        }
      ]
    },
    {
      category: 'Code Issues',
      icon: Bug,
      problems: [
        {
          issue: 'My code has red squiggly lines',
          solutions: [
            'Red lines = errors. Hover over them to see what\'s wrong',
            'Common causes: typos, missing semicolons, wrong syntax',
            'Select the code, press Cmd+L, ask: "What\'s wrong with this?"',
            'Check the Problems panel at bottom (View → Problems)',
            'Sometimes these are false positives - if code works, you can ignore'
          ]
        },
        {
          issue: 'AI generated code that doesn\'t work',
          solutions: [
            'Normal! AI isn\'t perfect',
            'Select the code, Cmd+K: "fix the errors in this code"',
            'Or ask in chat: "This code has errors, please fix"',
            'Be more specific next time: include more context',
            'Try breaking request into smaller pieces',
            'Sometimes you need to iterate: AI → test → refine → repeat'
          ]
        },
        {
          issue: 'Code works in Cursor but not in browser',
          solutions: [
            'Check browser console for errors (F12 or Cmd+Option+I)',
            'Make sure your dev server is running',
            'Try hard refresh: Cmd+Shift+R (Ctrl+Shift+R)',
            'Check if you saved all files',
            'Verify file paths are correct',
            'Look for typos in imports or file names'
          ]
        }
      ]
    },
    {
      category: 'Terminal Issues',
      icon: Terminal,
      problems: [
        {
          issue: 'Terminal says "command not found"',
          solutions: [
            'Double-check spelling of the command',
            'Make sure the tool is installed (e.g., npm, git)',
            'Try closing and reopening terminal',
            'On new terminal, you might need to install command line tools',
            'For npm: make sure Node.js is installed'
          ]
        },
        {
          issue: 'Terminal is frozen / not responding',
          solutions: [
            'A command is probably running (like a dev server)',
            'Press Ctrl+C to stop the current command',
            'If that doesn\'t work, close the terminal and open a new one',
            'Look for a loading indicator - something might be processing',
            'Check if you\'re being asked for input (password, yes/no)'
          ]
        },
        {
          issue: 'npm install is taking forever',
          solutions: [
            'This is normal! It can take 2-5 minutes',
            'Check your internet connection',
            'If truly stuck: Ctrl+C to cancel, then try again',
            'Delete node_modules folder and package-lock.json, then retry',
            'Try: npm cache clean --force, then npm install'
          ]
        },
        {
          issue: 'Permission denied errors',
          solutions: [
            'Never use sudo unless you absolutely know why',
            'Usually means you\'re in the wrong folder',
            'Try: cd to your project folder first',
            'Make sure you own the folder (not a system folder)',
            'On Windows: try running Cursor as administrator'
          ]
        }
      ]
    },
    {
      category: 'Git Issues',
      icon: RefreshCw,
      problems: [
        {
          issue: 'Git push is rejected',
          solutions: [
            'Someone else pushed changes first',
            'Run: git pull first to get their changes',
            'Resolve any conflicts',
            'Then try push again',
            'This is normal in team work!'
          ]
        },
        {
          issue: 'Merge conflicts',
          solutions: [
            'Don\'t panic! This is totally normal',
            'Cursor shows you both versions of the code',
            'Choose which version to keep (or combine both)',
            'Look for markers: <<<<<<, =======, >>>>>>>',
            'Remove the markers after choosing',
            'Save, commit, and push'
          ]
        },
        {
          issue: 'Accidentally committed wrong files',
          solutions: [
            'If you haven\'t pushed: undo last commit: git reset HEAD~1',
            'Files go back to unstaged, fix them, commit again',
            'If you have pushed: better to make a new commit fixing it',
            'Add files you forgot to .gitignore to prevent future accidents'
          ]
        }
      ]
    },
    {
      category: 'Connection Issues',
      icon: Wifi,
      problems: [
        {
          issue: 'Can\'t connect to AI / GitHub',
          solutions: [
            'Check your internet connection',
            'Try loading a website to confirm internet works',
            'Check if GitHub or AI services are down (check status pages)',
            'Firewall or VPN might be blocking - try disabling temporarily',
            'Try disconnecting and reconnecting to wifi'
          ]
        }
      ]
    }
  ]

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Hero */}
      <div className="card bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 text-white text-center space-y-4">
        <AlertTriangle className="w-16 h-16 mx-auto" />
        <h1 className="text-4xl font-bold">Troubleshooting Guide</h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Stuck? Don't worry! Here's how to fix the most common problems.
        </p>
      </div>

      {/* The Debugging Mindset */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">The Debugging Mindset</h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 space-y-4">
          <p className="text-lg text-gray-800">
            <strong>First rule: Everyone encounters problems. Even experts!</strong>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-5">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Do This:
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ Read error messages carefully</li>
                <li>✅ Try one fix at a time</li>
                <li>✅ Google the error message</li>
                <li>✅ Ask AI for help</li>
                <li>✅ Take breaks if frustrated</li>
                <li>✅ Ask for help early</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                Don't Do This:
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>❌ Panic or give up</li>
                <li>❌ Try 10 fixes at once</li>
                <li>❌ Ignore error messages</li>
                <li>❌ Delete everything and start over</li>
                <li>❌ Use random fixes from forums</li>
                <li>❌ Suffer in silence</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5">
            <h4 className="font-bold text-gray-800 mb-2">The Universal Debugging Process:</h4>
            <ol className="space-y-1 text-sm text-gray-700">
              <li>1. <strong>Reproduce:</strong> Make the error happen again</li>
              <li>2. <strong>Read:</strong> What does the error message say?</li>
              <li>3. <strong>Search:</strong> Google the error (exact message in quotes)</li>
              <li>4. <strong>Ask AI:</strong> Cmd+L: "I'm getting this error: [paste error]"</li>
              <li>5. <strong>Test:</strong> Try one solution, see if it works</li>
              <li>6. <strong>Repeat:</strong> If not fixed, try next solution</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Common Issues */}
      {commonIssues.map((category) => {
        const CategoryIcon = category.icon
        return (
          <div key={category.category} className="card space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
                <CategoryIcon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">{category.category}</h2>
            </div>

            <div className="space-y-4">
              {category.problems.map((problem, index) => (
                <details key={index} className="bg-gray-50 rounded-xl p-6 cursor-pointer group">
                  <summary className="font-bold text-gray-800 text-lg list-none flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      {problem.issue}
                    </span>
                    <span className="text-gray-400 group-open:rotate-90 transition-transform">▶</span>
                  </summary>
                  
                  <div className="mt-5 space-y-3 pl-8">
                    <h4 className="font-bold text-gray-800 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Solutions:
                    </h4>
                    <ul className="space-y-3">
                      {problem.solutions.map((solution, sIndex) => (
                        <li key={sIndex} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {sIndex + 1}
                          </div>
                          <p className="text-gray-700 leading-relaxed">{solution}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </div>
        )
      })}

      {/* How to Get Help */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">How to Get Help When Really Stuck</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">Ask AI in Cursor</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Press Cmd+L to open chat</li>
              <li>• Explain the problem clearly</li>
              <li>• Include the error message</li>
              <li>• @ mention the relevant files</li>
              <li>• Ask follow-up questions</li>
            </ul>
            <div className="bg-blue-100 rounded p-3">
              <p className="text-xs text-gray-700">
                <strong>Example:</strong> "I'm getting 'Cannot find module' error in @components/Button.tsx. How do I fix this?"
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Search className="w-8 h-8 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-800">Google It</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Copy exact error message</li>
              <li>• Put it in quotes in Google</li>
              <li>• Add your technology: "React" or "HTML"</li>
              <li>• Look for Stack Overflow results</li>
              <li>• Recent results are usually better</li>
            </ul>
            <div className="bg-purple-100 rounded p-3">
              <p className="text-xs text-gray-700">
                <strong>Example search:</strong> "Cannot find module './components'" React
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">Ask the Community</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Cursor Discord community</li>
              <li>• Stack Overflow</li>
              <li>• Reddit (r/webdev)</li>
              <li>• Designer communities</li>
            </ul>
            <div className="bg-green-100 rounded p-3">
              <p className="text-xs text-gray-700">
                <strong>Tip:</strong> Show code, explain what you tried, be specific about the problem
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <RefreshCw className="w-8 h-8 text-orange-600" />
              <h3 className="text-xl font-bold text-gray-800">Try a Fresh Start</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Close and reopen Cursor</li>
              <li>• Delete node_modules, reinstall</li>
              <li>• Start a new project to test</li>
              <li>• Sometimes a break helps!</li>
            </ul>
            <div className="bg-yellow-100 rounded p-3">
              <p className="text-xs text-gray-700">
                <strong>Nuclear option:</strong> Save your code, delete everything, clone fresh from Git
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Prevention Tips */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Preventing Problems</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-5">
            <h3 className="font-bold text-gray-800 mb-3">💾 Save Often</h3>
            <p className="text-sm text-gray-700">
              Cmd+S is your friend. Save after every meaningful change. Enable Auto Save in settings.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-5">
            <h3 className="font-bold text-gray-800 mb-3">🔄 Commit Frequently</h3>
            <p className="text-sm text-gray-700">
              Small, frequent Git commits mean you can always go back if something breaks.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-5">
            <h3 className="font-bold text-gray-800 mb-3">📋 Backup Your Work</h3>
            <p className="text-sm text-gray-700">
              Push to GitHub daily. Your work is safe even if your computer dies.
            </p>
          </div>

          <div className="bg-pink-50 rounded-lg p-5">
            <h3 className="font-bold text-gray-800 mb-3">🧪 Test as You Go</h3>
            <p className="text-sm text-gray-700">
              Don't write 100 lines before testing. Test after every small change.
            </p>
          </div>

          <div className="bg-yellow-50 rounded-lg p-5">
            <h3 className="font-bold text-gray-800 mb-3">📖 Keep Notes</h3>
            <p className="text-sm text-gray-700">
              Document solutions that worked. Future you will be grateful!
            </p>
          </div>

          <div className="bg-orange-50 rounded-lg p-5">
            <h3 className="font-bold text-gray-800 mb-3">🎯 One Thing at a Time</h3>
            <p className="text-sm text-gray-700">
              Change one thing, test it, then move on. Makes debugging easier.
            </p>
          </div>
        </div>
      </div>

      {/* Encouragement */}
      <div className="card bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white text-center space-y-6">
        <CheckCircle className="w-16 h-16 mx-auto" />
        <h2 className="text-3xl font-bold">You've Got This! 💪</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Every developer spends a huge amount of time debugging. It's not a sign of failure - it's part of the process.
          The difference between beginners and experts? Experts know how to debug systematically.
        </p>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
          <p className="text-lg">
            <strong>Remember:</strong> Every error is a learning opportunity. 
            You're not stuck - you're learning. Keep going! 🚀
          </p>
        </div>
        <Link to="/tutorials" className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
          <span>Back to Tutorials</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  )
}

export default Troubleshooting

