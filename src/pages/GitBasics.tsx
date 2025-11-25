import { useState } from 'react'
import { GitBranch, Save, Upload, History, Users, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useProgress } from '../contexts/ProgressContext'

const GitBasics = () => {
  const { completeLesson } = useProgress()
  const [completed, setCompleted] = useState<Set<string>>(new Set())

  const handleComplete = (id: string) => {
    const newCompleted = new Set(completed)
    newCompleted.add(id)
    setCompleted(newCompleted)
    completeLesson(`git-${id}`, 'training')
  }

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Hero */}
      <div className="card bg-gradient-to-br from-orange-500 to-red-500 text-white text-center space-y-4">
        <GitBranch className="w-16 h-16 mx-auto" />
        <h1 className="text-4xl font-bold">Git Basics: Save Your Work Like a Pro</h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Learn to track changes, save progress, and never lose your work again
        </p>
      </div>

      {/* What is Git */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">What is Git? (Explained Simply)</h2>
        
        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <p className="text-lg text-gray-700">
            <strong>Think of Git as "Track Changes" for your entire project.</strong>
          </p>
          
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-bold text-gray-800 mb-3">The Story Analogy:</h3>
            <p className="text-gray-700">
              Imagine you're writing a story. Git is like having checkpoints:
            </p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start space-x-2">
                <span className="text-primary-600">📝</span>
                <span className="text-gray-700"><strong>Chapter 1 done</strong> - Save checkpoint</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-600">📝</span>
                <span className="text-gray-700"><strong>Chapter 2 done</strong> - Save checkpoint</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-600">💭</span>
                <span className="text-gray-700"><strong>Wrote terrible Chapter 3?</strong> Go back to Chapter 2 checkpoint!</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-600">🌟</span>
                <span className="text-gray-700"><strong>Want to try different endings?</strong> Create branches!</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="text-gray-700">
              <strong>For designers:</strong> It's like having unlimited undo, but you choose exactly when to create the "undo points" (called commits).
              You can go back to any point, compare versions, and never fear experimenting!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-2">Without Git:</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>❌ final_design.fig</li>
              <li>❌ final_design_v2.fig</li>
              <li>❌ final_design_ACTUALLY_FINAL.fig</li>
              <li>❌ final_design_v2_use_this_one.fig</li>
              <li>❌ 😫 Which one is the latest?!</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-2">With Git:</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>✅ One file: design.fig</li>
              <li>✅ Clear history of all changes</li>
              <li>✅ Notes on each save: "Added new button"</li>
              <li>✅ Go back to any version instantly</li>
              <li>✅ 😊 Always know what's current!</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Git vs GitHub */}
      <div className="card space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Git vs. GitHub - What's the Difference?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Git</h3>
            <p className="text-gray-700 mb-3">The system on your computer that tracks changes</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Lives on your computer</li>
              <li>• Saves your change history</li>
              <li>• Works offline</li>
              <li>• Free, built into Cursor</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">GitHub</h3>
            <p className="text-gray-700 mb-3">A website that stores your Git projects online</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Lives on the internet</li>
              <li>• Backup of your work</li>
              <li>• Share with teammates</li>
              <li>• Like Dropbox for code</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <p className="text-gray-700">
            <strong>Analogy:</strong> Git is like a camera that takes snapshots of your work. 
            GitHub is like Instagram where you upload and share those snapshots.
          </p>
        </div>
      </div>

      {/* Core Concepts */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">The 3 Core Concepts</h2>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <Save className="w-10 h-10 text-green-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">1. Commit (Save a Checkpoint)</h3>
                <p className="text-gray-700 mb-3">
                  A commit is a saved snapshot of your project at a specific moment.
                </p>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="font-bold text-gray-800 mb-2">What's included in a commit:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• All the files you changed</li>
                    <li>• A message describing what you did (e.g., "Added login button")</li>
                    <li>• Timestamp of when you saved</li>
                    <li>• Who made the changes</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-gray-700">
                    <strong>When to commit:</strong> Whenever you finish a small, working piece of work.
                    Like after adding a button, fixing a bug, or styling a component.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <History className="w-10 h-10 text-blue-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">2. History (Your Timeline)</h3>
                <p className="text-gray-700 mb-3">
                  Git keeps a complete history of every commit you've ever made.
                </p>
                <div className="bg-white rounded p-4 space-y-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">3</div>
                    <div>
                      <p className="font-bold text-gray-800">Added profile page</p>
                      <p className="text-xs text-gray-600">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">2</div>
                    <div>
                      <p className="font-bold text-gray-800">Fixed button styling</p>
                      <p className="text-xs text-gray-600">Yesterday</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">1</div>
                    <div>
                      <p className="font-bold text-gray-800">Initial project setup</p>
                      <p className="text-xs text-gray-600">Last week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <Upload className="w-10 h-10 text-purple-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">3. Push (Upload to GitHub)</h3>
                <p className="text-gray-700 mb-3">
                  Pushing sends your local commits to GitHub (the online backup).
                </p>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-800 mb-2">Why push?</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• <strong>Backup:</strong> Your work is safe even if your computer dies</li>
                    <li>• <strong>Share:</strong> Others can see and download your work</li>
                    <li>• <strong>Collaborate:</strong> Work with teammates on the same project</li>
                    <li>• <strong>Portfolio:</strong> Show your work to potential employers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Using Git in Cursor */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Using Git in Cursor (The Easy Way)</h2>
        <p className="text-gray-600">Cursor has visual Git tools - no need to memorize commands!</p>

        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-6 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Step 1: Make Some Changes</h3>
            <div className="bg-white rounded p-4">
              <p className="text-gray-700">Edit a file, add a new file, or delete something. Just work normally!</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Step 2: Open Source Control</h3>
            <div className="bg-white rounded p-4 space-y-2">
              <p className="text-gray-700 font-semibold">Press <kbd className="px-2 py-1 bg-gray-800 text-white rounded text-sm">Cmd+Shift+G</kbd> (or Ctrl+Shift+G)</p>
              <p className="text-gray-600 text-sm">Or click the branch icon in the left sidebar</p>
              <p className="text-gray-600 text-sm">You'll see all your changed files listed</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Step 3: Stage Your Changes</h3>
            <div className="bg-white rounded p-4">
              <p className="text-gray-700 mb-2">Click the <strong>+</strong> button next to each file you want to save</p>
              <p className="text-gray-600 text-sm">(Staging = saying "I want to include this in my save")</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Step 4: Write a Commit Message</h3>
            <div className="bg-white rounded p-4 space-y-3">
              <p className="text-gray-700">Type a short description of what you did in the message box</p>
              <div className="bg-green-50 border-l-4 border-green-500 p-3">
                <p className="font-bold text-gray-800 mb-1">Good commit messages:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✅ "Added login button to homepage"</li>
                  <li>✅ "Fixed navbar spacing on mobile"</li>
                  <li>✅ "Changed primary color to blue"</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-3">
                <p className="font-bold text-gray-800 mb-1">Bad commit messages:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>❌ "stuff"</li>
                  <li>❌ "changes"</li>
                  <li>❌ "asdf"</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Step 5: Commit!</h3>
            <div className="bg-white rounded p-4">
              <p className="text-gray-700 mb-2">Click the <strong>✓ Commit</strong> button</p>
              <p className="text-gray-600 text-sm">Your changes are now saved in Git history!</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Step 6: Push to GitHub (Optional)</h3>
            <div className="bg-white rounded p-4">
              <p className="text-gray-700 mb-2">Click the <strong>↑</strong> button (or "Sync Changes")</p>
              <p className="text-gray-600 text-sm">Your work is now backed up online!</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
          <h3 className="font-bold text-gray-800 mb-4">🎯 Try It Now: Your First Commit</h3>
          <ol className="space-y-3">
            <li className="flex items-start space-x-2">
              <span className="font-bold text-green-600">1.</span>
              <span className="text-gray-700">Create or edit a file in your project</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-green-600">2.</span>
              <span className="text-gray-700">Press Cmd+Shift+G (Ctrl+Shift+G) to open Source Control</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-green-600">3.</span>
              <span className="text-gray-700">Click + next to your changed file</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-green-600">4.</span>
              <span className="text-gray-700">Type a message like "My first commit!"</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-green-600">5.</span>
              <span className="text-gray-700">Click the checkmark to commit</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-green-600">6.</span>
              <span className="text-gray-700">Celebrate - you just used Git! 🎉</span>
            </li>
          </ol>
          {!completed.has('first-commit') && (
            <button
              onClick={() => handleComplete('first-commit')}
              className="btn-primary mt-4 w-full"
            >
              I Made My First Commit!
            </button>
          )}
          {completed.has('first-commit') && (
            <div className="bg-white rounded p-3 mt-4 flex items-center space-x-2 text-green-700">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Awesome! You're officially using version control! 🚀</span>
            </div>
          )}
        </div>
      </div>

      {/* Best Practices */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Git Best Practices for Designers</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-2">✅ Commit Often</h3>
            <p className="text-gray-700 text-sm">Small, frequent commits are better than huge ones. Commit after each feature or fix.</p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-2">✅ Write Clear Messages</h3>
            <p className="text-gray-700 text-sm">Your future self will thank you. "Fixed button" is better than "changes".</p>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-2">✅ Push Daily</h3>
            <p className="text-gray-700 text-sm">Push to GitHub at least once a day as backup. Better safe than sorry!</p>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-2">✅ Don't Commit Everything</h3>
            <p className="text-gray-700 text-sm">Use .gitignore for things like node_modules, .env files, or personal notes.</p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="card bg-gradient-to-r from-orange-500 to-red-500 text-white text-center space-y-4">
        <CheckCircle className="w-16 h-16 mx-auto" />
        <h2 className="text-3xl font-bold">You're Now a Git User! 🎉</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          You can now save your work, track changes, and never lose progress.
          Ready to start building actual projects?
        </p>
        <Link 
          to="/tutorials"
          className="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
        >
          <span>Start Building Projects</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  )
}

export default GitBasics

