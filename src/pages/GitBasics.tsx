import { useState } from 'react'
import { GitBranch, Save, Upload, History, CheckCircle, ArrowRight } from 'lucide-react'
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
        <h2 className="text-3xl font-bold text-white">What is Git? (Explained Simply)</h2>
        
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
        <h2 className="text-3xl font-bold text-white">Git vs. GitHub - What's the Difference?</h2>
        
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
        <h2 className="text-3xl font-bold text-white">The 3 Core Concepts</h2>

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
        <h2 className="text-3xl font-bold text-white">Using Git in Cursor (The Easy Way)</h2>
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
        <h2 className="text-3xl font-bold text-white">Git Best Practices for Designers</h2>

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

      {/* Collaboration Workflows */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Collaborating with GitHub</h2>
        <p className="text-gray-600">How to work with teammates on the same project</p>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 space-y-6">
          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Step 1: Share Your Project on GitHub</h3>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-lg p-5">
                <h4 className="font-bold text-gray-800 mb-3">Creating a GitHub Repository</h4>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">1.</span>
                    <span>Go to <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">github.com</a> and sign in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">2.</span>
                    <span>Click the "+" button in top right, choose "New repository"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">3.</span>
                    <span>Name it (same as your project folder is good)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">4.</span>
                    <span>Choose Public (anyone can see) or Private (only you and invited people)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">5.</span>
                    <span>Click "Create repository"</span>
                  </li>
                </ol>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-lg p-5">
                <h4 className="font-bold text-gray-800 mb-3">Connecting Your Local Project to GitHub</h4>
                <p className="text-sm text-gray-700 mb-3">GitHub shows you commands after creating a repo. Copy them, or use these:</p>
                <div className="bg-gray-900 text-green-400 rounded p-4 font-mono text-xs space-y-2">
                  <div>git remote add origin https://github.com/yourname/yourproject.git</div>
                  <div>git branch -M main</div>
                  <div>git push -u origin main</div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  💡 Tip: You can also use Cursor's Source Control panel → "..." menu → "Push" after setting up the remote
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Step 2: Invite Teammates</h3>
            <div className="space-y-3">
              <p className="text-gray-700">On your GitHub repository page:</p>
              <ol className="space-y-2 text-sm text-gray-700 pl-5">
                <li>1. Click "Settings" tab</li>
                <li>2. Click "Collaborators" in the sidebar</li>
                <li>3. Click "Add people"</li>
                <li>4. Enter their GitHub username or email</li>
                <li>5. They'll get an invitation email</li>
              </ol>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> For private repos, you need to add collaborators. 
                  Public repos can be seen by anyone, but only collaborators can push changes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Step 3: The Collaboration Workflow</h3>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-5 space-y-4">
              <h4 className="font-bold text-gray-800">The Daily Workflow (Follow This!)</h4>
              
              <div className="space-y-3">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-800 mb-2">🌅 Morning: Pull Latest Changes</p>
                  <p className="text-sm text-gray-700 mb-2">Before you start working, get your teammates' latest changes:</p>
                  <div className="bg-gray-50 border border-gray-300 rounded p-3">
                    <p className="font-mono text-xs text-gray-800">git pull</p>
                    <p className="text-xs text-gray-600 mt-1">Or: Click "Sync" button in Cursor's Source Control</p>
                  </div>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-800 mb-2">💼 During Work: Commit Often</p>
                  <p className="text-sm text-gray-700 mb-2">Make small, frequent commits with clear messages:</p>
                  <ul className="text-xs text-gray-700 space-y-1 ml-4">
                    <li>✅ "Added user profile header"</li>
                    <li>✅ "Fixed navigation button styling"</li>
                    <li>✅ "Updated color scheme in design system"</li>
                  </ul>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-800 mb-2">🌆 End of Day: Push Your Changes</p>
                  <p className="text-sm text-gray-700 mb-2">Share your work with the team:</p>
                  <div className="bg-gray-50 border border-gray-300 rounded p-3">
                    <p className="font-mono text-xs text-gray-800">git push</p>
                    <p className="text-xs text-gray-600 mt-1">Or: Click the "↑" or "Sync" in Cursor</p>
                  </div>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-800 mb-2">🔄 If You Get Conflicts:</p>
                  <p className="text-sm text-gray-700 mb-2">When you and a teammate edited the same file:</p>
                  <ol className="text-xs text-gray-700 space-y-1 ml-4">
                    <li>1. Don't panic! This is normal</li>
                    <li>2. Cursor shows you both versions</li>
                    <li>3. Choose which changes to keep (or keep both!)</li>
                    <li>4. Save, commit, and push</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Step 4: Cloning a Teammate's Project</h3>
            <p className="text-gray-700">Want to work on someone else's project?</p>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-bold text-gray-800 mb-3">Getting a Copy</h4>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">1.</span>
                    <span>Go to the project's GitHub page</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">2.</span>
                    <span>Click the green "Code" button</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">3.</span>
                    <span>Copy the URL (HTTPS link)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">4.</span>
                    <span>In Cursor, open terminal (Cmd+`)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">5.</span>
                    <span>Type: <code className="bg-white px-2 py-1 rounded text-xs">git clone [paste-url-here]</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">6.</span>
                    <span>A new folder appears with all the project files!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">7.</span>
                    <span>Open that folder in Cursor (File → Open Folder)</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {!completed.has('collaboration') && (
            <button
              onClick={() => handleComplete('collaboration')}
              className="btn-primary w-full"
            >
              <CheckCircle className="w-5 h-5" />
              <span>I Understand Git Collaboration!</span>
            </button>
          )}
          {completed.has('collaboration') && (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center justify-center gap-3 text-green-700">
              <CheckCircle className="w-6 h-6" />
              <span className="font-bold">Awesome! You can now work with teams!</span>
            </div>
          )}
        </div>
      </div>

      {/* Branching (Advanced) */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Branches: Working on Features Separately (Advanced)</h2>
        <p className="text-gray-600">For when you want to experiment without affecting the main code</p>

        <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 space-y-4">
          <div className="bg-white rounded-lg p-5">
            <h3 className="text-xl font-bold text-gray-800 mb-3">What are Branches?</h3>
            <p className="text-gray-700 mb-3">
              Think of branches like parallel universes for your code:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>main</strong> branch = the official, working version</li>
              <li>• <strong>feature</strong> branches = where you try new things</li>
              <li>• Work on features without breaking main</li>
              <li>• When ready, merge your feature into main</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-5 space-y-3">
            <h3 className="text-xl font-bold text-gray-800">Common Workflow</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="bg-gray-50 rounded p-3">
                <p className="font-bold mb-1">Create a branch:</p>
                <p className="font-mono text-xs">git checkout -b feature/user-profile</p>
              </div>
              <div className="bg-gray-50 rounded p-3">
                <p className="font-bold mb-1">Work on it, commit changes as normal</p>
              </div>
              <div className="bg-gray-50 rounded p-3">
                <p className="font-bold mb-1">When done, switch back to main:</p>
                <p className="font-mono text-xs">git checkout main</p>
              </div>
              <div className="bg-gray-50 rounded p-3">
                <p className="font-bold mb-1">Merge your feature:</p>
                <p className="font-mono text-xs">git merge feature/user-profile</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="text-sm text-gray-700">
              <strong>💡 For Beginners:</strong> Branches are powerful but not essential when starting out. 
              Focus on the basic workflow first. Come back to branches when your projects get more complex.
            </p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="card bg-gradient-to-r from-orange-500 to-red-500 text-white text-center space-y-4">
        <CheckCircle className="w-16 h-16 mx-auto" />
        <h2 className="text-3xl font-bold">You're Now a Git Collaborator! 🎉</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          You can save your work, track changes, collaborate with teams, and never lose progress.
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

