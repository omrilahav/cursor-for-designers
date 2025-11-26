import { useState } from 'react'
import { Users, GitBranch, MessageSquare, Eye, Share2, CheckCircle, ArrowRight, FileCode, Figma, Github, Shield, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useProgress } from '../contexts/ProgressContext'

const Collaboration = () => {
  const { completeLesson } = useProgress()
  const [completed, setCompleted] = useState<Set<string>>(new Set())

  const handleComplete = (id: string) => {
    const newCompleted = new Set(completed)
    newCompleted.add(id)
    setCompleted(newCompleted)
    completeLesson(`collab-${id}`, 'training')
  }

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Hero */}
      <div className="card bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white text-center space-y-4">
        <Users className="w-16 h-16 mx-auto" />
        <h1 className="text-4xl font-bold">Team Collaboration for Designers</h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Work seamlessly with other designers, developers, and stakeholders using Cursor and Git
        </p>
      </div>

      {/* The Modern Design Team */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">The Modern Design Team Workflow</h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 space-y-6">
          <p className="text-lg text-gray-800">
            Gone are the days of emailing Figma links and hoping for the best. With Cursor, your entire team 
            works in the same codebase, seeing changes in real-time, just like Figma collaboration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Figma className="w-8 h-8 text-purple-600" />
                Figma Collaboration
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ Multiple designers work together</li>
                <li>✅ See each other's cursors</li>
                <li>✅ Comment on designs</li>
                <li>✅ Version history</li>
                <li>✅ Share link for feedback</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Github className="w-8 h-8 text-gray-800" />
                Cursor + Git Collaboration
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ Multiple designers work on code</li>
                <li>✅ See each other's changes</li>
                <li>✅ Comment on code (Pull Requests)</li>
                <li>✅ Complete version history</li>
                <li>✅ Share prototypes + code</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <p className="text-gray-700">
              <strong>💡 The Key Insight:</strong> Cursor + GitHub gives you Figma-like collaboration, 
              but for working code. Your design team can iterate together, and developers get real code at the end!
            </p>
          </div>
        </div>
      </div>

      {/* Collaboration Scenarios */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Common Collaboration Scenarios</h2>

        <div className="space-y-4">
          {/* Scenario 1 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Multiple Designers, One Design System</h3>
                <p className="text-sm text-gray-600">Building components together</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-5 space-y-3">
              <p className="text-gray-700"><strong>Situation:</strong> Your team is building a design system with 50+ components.</p>
              
              <div className="bg-blue-50 rounded p-4">
                <p className="font-bold text-gray-800 mb-2">🎯 The Workflow:</p>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li>1. Create GitHub repo for design system</li>
                  <li>2. Each designer works on different components (branches)</li>
                  <li>3. Designer A builds Button, Designer B builds Card</li>
                  <li>4. Both use same design tokens file</li>
                  <li>5. Submit Pull Requests when done</li>
                  <li>6. Team reviews each other's code</li>
                  <li>7. Merge to main branch</li>
                </ol>
              </div>

              <div className="bg-green-50 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>✨ Result:</strong> Everyone contributes without stepping on each other's toes. 
                  The system grows fast, and quality stays high through peer review.
                </p>
              </div>
            </div>
          </div>

          {/* Scenario 2 */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Designer → Designer Handoff</h3>
                <p className="text-sm text-gray-600">Passing work between team members</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-5 space-y-3">
              <p className="text-gray-700"><strong>Situation:</strong> You started a prototype but need a teammate to finish it.</p>
              
              <div className="bg-purple-50 rounded p-4">
                <p className="font-bold text-gray-800 mb-2">🎯 The Workflow:</p>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li>1. Push your work to GitHub with clear commit messages</li>
                  <li>2. Document what's done and what's left (in README or comments)</li>
                  <li>3. Share the branch name with teammate</li>
                  <li>4. They clone the repo or pull your branch</li>
                  <li>5. They continue from where you left off</li>
                  <li>6. All history preserved - they can see your process</li>
                </ol>
              </div>

              <div className="bg-green-50 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>✨ Result:</strong> Seamless handoff. No lost work, no confusion about what's done. 
                  Your teammate can even undo your changes if needed!
                </p>
              </div>
            </div>
          </div>

          {/* Scenario 3 */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Design + Dev Collaboration</h3>
                <p className="text-sm text-gray-600">Working together, not in sequence</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-5 space-y-3">
              <p className="text-gray-700"><strong>Situation:</strong> Developer is building backend, you're designing frontend.</p>
              
              <div className="bg-green-50 rounded p-4">
                <p className="font-bold text-gray-800 mb-2">🎯 The Workflow:</p>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li>1. You work in <code className="bg-white px-2 py-1 rounded">design</code> branch</li>
                  <li>2. Dev works in <code className="bg-white px-2 py-1 rounded">backend</code> branch</li>
                  <li>3. You both push regularly to GitHub</li>
                  <li>4. You can see dev's API structure, they can see your components</li>
                  <li>5. Discuss and adjust together</li>
                  <li>6. When both ready, merge both branches</li>
                </ol>
              </div>

              <div className="bg-green-50 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>✨ Result:</strong> Parallel work instead of waiting. Frontend and backend integrate smoothly 
                  because you both saw each other's progress throughout.
                </p>
              </div>
            </div>
          </div>

          {/* Scenario 4 */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-600 text-white flex items-center justify-center font-bold text-xl">4</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Stakeholder Feedback</h3>
                <p className="text-sm text-gray-600">Getting approval from non-technical people</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-5 space-y-3">
              <p className="text-gray-700"><strong>Situation:</strong> Product manager or client needs to review your work.</p>
              
              <div className="bg-yellow-50 rounded p-4">
                <p className="font-bold text-gray-800 mb-2">🎯 The Workflow:</p>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li>1. Deploy your prototype to Vercel/Netlify (2 clicks)</li>
                  <li>2. Share the live link (e.g., yourapp.vercel.app)</li>
                  <li>3. They view on their phone/laptop - fully interactive</li>
                  <li>4. They leave comments via Slack/email/Loom</li>
                  <li>5. You make changes in Cursor</li>
                  <li>6. Auto-redeploys with changes - they see updates immediately</li>
                </ol>
              </div>

              <div className="bg-green-50 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>✨ Result:</strong> Stakeholders interact with real prototypes, not static screenshots. 
                  Feedback is more accurate, and iterations are fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Setting Up Team Collaboration */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
            <GitBranch className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Setting Up Your Team</h2>
            <p className="text-gray-600">One-time setup for smooth collaboration</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 space-y-6">
          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Step 1: Create Team Repository</h3>
            
            <div className="bg-blue-50 rounded p-5 space-y-3">
              <p className="text-sm text-gray-700 font-bold mb-2">On GitHub:</p>
              <ol className="space-y-2 text-sm text-gray-700">
                <li>1. Go to GitHub.com and click "New Repository"</li>
                <li>2. Name it something clear: <code className="bg-white px-2 py-1 rounded">design-system</code> or <code className="bg-white px-2 py-1 rounded">product-prototypes</code></li>
                <li>3. Add description: "Design team working prototypes"</li>
                <li>4. Choose Private (if not public yet)</li>
                <li>5. Initialize with README</li>
                <li>6. Create repository</li>
              </ol>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Step 2: Invite Team Members</h3>
            
            <div className="bg-indigo-50 rounded p-5 space-y-3">
              <p className="text-sm text-gray-700 font-bold mb-2">Give Access:</p>
              <ol className="space-y-2 text-sm text-gray-700">
                <li>1. Go to repository Settings → Collaborators</li>
                <li>2. Click "Add people"</li>
                <li>3. Enter teammate's GitHub username or email</li>
                <li>4. Choose permission level:
                  <ul className="ml-5 mt-2 space-y-1">
                    <li>• <strong>Write:</strong> For designers who will contribute</li>
                    <li>• <strong>Read:</strong> For stakeholders who just view</li>
                    <li>• <strong>Admin:</strong> For team leads</li>
                  </ul>
                </li>
                <li>5. They receive email invitation</li>
                <li>6. They accept and can now clone the repo</li>
              </ol>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Step 3: Set Up Branch Protection</h3>
            
            <div className="bg-purple-50 rounded p-5 space-y-3">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Why:</strong> Prevents accidental breaking of main branch
              </p>
              <ol className="space-y-2 text-sm text-gray-700">
                <li>1. Settings → Branches → Add rule</li>
                <li>2. Branch name pattern: <code className="bg-white px-2 py-1 rounded">main</code></li>
                <li>3. Check "Require pull request before merging"</li>
                <li>4. Check "Require approvals" (at least 1)</li>
                <li>5. Save</li>
              </ol>
              <div className="bg-green-50 rounded p-3 mt-3">
                <p className="text-xs text-gray-700">
                  <strong>✅ Result:</strong> Nobody can push directly to main. All changes go through Pull Requests and peer review!
                </p>
              </div>
            </div>
          </div>

          {!completed.has('setup') && (
            <button
              onClick={() => handleComplete('setup')}
              className="btn-primary w-full"
            >
              <CheckCircle className="w-5 h-5" />
              <span>I Set Up Our Team Repo!</span>
            </button>
          )}
          {completed.has('setup') && (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center justify-center gap-3 text-green-700">
              <CheckCircle className="w-6 h-6" />
              <span className="font-bold">Great! Your team is ready to collaborate!</span>
            </div>
          )}
        </div>
      </div>

      {/* Daily Workflow */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Daily Collaboration Workflow</h2>
            <p className="text-gray-600">What to do every day</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-4">1</div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">Start of Day</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Pull latest changes:</strong></p>
                <code className="bg-gray-900 text-green-400 px-3 py-2 rounded block">git pull origin main</code>
                <p className="text-xs mt-2">Gets everyone else's updates from last night</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">During Work</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Create feature branch:</strong></p>
                <code className="bg-gray-900 text-green-400 px-3 py-2 rounded block text-xs">git checkout -b new-button</code>
                <p className="text-xs mt-2">Work in your own branch, don't affect others</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-green-600 text-white flex items-center justify-center font-bold text-xl mb-4">3</div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">End of Day</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Push your work:</strong></p>
                <div className="bg-gray-900 text-green-400 px-3 py-2 rounded space-y-1 text-xs">
                  <div>git add .</div>
                  <div>git commit -m "msg"</div>
                  <div>git push</div>
                </div>
                <p className="text-xs mt-2">Save to cloud, team can see progress</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5">
            <p className="text-sm text-gray-700">
              <strong>💡 Pro Tip:</strong> Commit often with clear messages like "Added hover state to Button" 
              instead of "Updated files". Your team (and future you!) will thank you.
            </p>
          </div>
        </div>
      </div>

      {/* Communication Best Practices */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-600 to-rose-600 flex items-center justify-center">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Communication Best Practices</h2>
            <p className="text-gray-600">Keep everyone in sync</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="font-bold text-green-700 text-xl mb-4">✅ Great Communication</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Write clear commit messages explaining <em>why</em></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Add comments to Pull Requests with context</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Share screenshots/videos of what changed</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Tag teammates when you need their input</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Update team in Slack when merging big changes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Document decisions in README or Wiki</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="font-bold text-red-700 text-xl mb-4">❌ Poor Communication</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Generic commit messages: "fixed stuff"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Merging without telling anyone</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>No context in Pull Requests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Working in silence for weeks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Assuming everyone knows what you're working on</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Not responding to review comments</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-800 mb-3 text-xl">📋 Pull Request Template</h3>
          <p className="text-sm text-gray-700 mb-4">Use this format for clear PRs:</p>
          <div className="bg-white rounded p-4 font-mono text-xs text-gray-700">
{`## What Changed
Built new Button component with 4 variants

## Why
Needed consistent buttons across all prototypes

## Screenshots
[attach before/after images]

## Testing
- ✅ Works on mobile
- ✅ All variants tested
- ✅ Hover/active states work
- ✅ Accessible (keyboard nav + ARIA)

## Notes for Reviewers
Used design tokens for colors. Let me know if
spacing feels off!`}
          </div>
        </div>
      </div>

      {/* Handling Conflicts */}
      <div className="card space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Handling Merge Conflicts</h2>
            <p className="text-gray-600">What to do when changes collide</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 space-y-6">
          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">What is a Merge Conflict?</h3>
            <p className="text-gray-700">
              When you and a teammate edit the same lines of code, Git can't decide which version to keep. 
              Don't panic - this is normal and easy to fix!
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-sm text-gray-700">
                <strong>Example:</strong> You changed Button.tsx to use blue, teammate changed it to use green. 
                Git says "Hey, I need a human to decide which color to keep!"
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Resolving Conflicts in Cursor</h3>
            
            <div className="space-y-3">
              <div className="bg-blue-50 rounded p-4">
                <p className="font-bold text-gray-800 mb-2">1. Cursor Shows the Conflict:</p>
                <p className="text-sm text-gray-700">The file will show both versions with markers like:</p>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded mt-2 text-xs">
{`<<<<<<< HEAD (Your changes)
background: blue
=======
background: green
>>>>>>> main (Teammate's changes)`}
                </pre>
              </div>

              <div className="bg-purple-50 rounded p-4">
                <p className="font-bold text-gray-800 mb-2">2. Choose What to Keep:</p>
                <p className="text-sm text-gray-700">Cursor shows buttons above conflicts:</p>
                <ul className="space-y-1 text-sm text-gray-700 mt-2 ml-4">
                  <li>• "Accept Current" - keep your version</li>
                  <li>• "Accept Incoming" - keep teammate's version</li>
                  <li>• "Accept Both" - keep both (if possible)</li>
                  <li>• Or manually edit to combine best of both</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded p-4">
                <p className="font-bold text-gray-800 mb-2">3. Save and Commit:</p>
                <p className="text-sm text-gray-700">After resolving:</p>
                <code className="bg-gray-900 text-green-400 px-3 py-2 rounded block mt-2 text-xs">
                  git add .<br/>
                  git commit -m "Resolved merge conflict in Button"
                </code>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-800 mb-2">💡 Preventing Conflicts</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Pull latest changes before starting work each day</li>
              <li>• Work on different files when possible</li>
              <li>• Communicate who's editing what</li>
              <li>• Merge your work frequently (don't wait weeks)</li>
              <li>• Use feature branches</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Success */}
      <div className="card bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-center space-y-6">
        <Users className="w-16 h-16 mx-auto" />
        <h2 className="text-3xl font-bold">You're Ready for Team Collaboration! 🤝</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          You now have all the knowledge to work seamlessly with designers, developers, and stakeholders using Cursor and Git!
        </p>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto space-y-4">
          <p className="text-lg">
            <strong>Remember:</strong> Great collaboration is about clear communication, regular syncing, and respecting each other's work.
          </p>
          <p>
            You're not just a designer anymore - you're a design engineer who ships production-ready code with your team! 🚀
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/tutorials" className="btn bg-white text-indigo-600 hover:bg-gray-100 text-lg shadow-xl">
            <CheckCircle className="w-6 h-6" />
            <span>View All Tutorials</span>
          </Link>
          <Link to="/progress" className="btn-outline border-white text-white hover:bg-white/20 text-lg">
            <span>Track My Progress</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Collaboration


