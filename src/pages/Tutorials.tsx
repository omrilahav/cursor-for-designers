import { useState } from 'react'
import { CheckCircle2, Circle, Lock, Play, ChevronRight, Award } from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

interface TutorialStep {
  id: string
  title: string
  description: string
  content: string[]
  tips: string[]
  exercise?: string
}

interface Tutorial {
  id: string
  title: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  steps: TutorialStep[]
}

const Tutorials = () => {
  const { completedLessons, completeLesson } = useProgress()
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [showCompleteModal, setShowCompleteModal] = useState(false)

  const tutorials: Tutorial[] = [
    {
      id: 'getting-started',
      title: 'Getting Started with Cursor',
      description: 'Your first steps into AI-powered development',
      difficulty: 'Beginner',
      duration: '15 min',
      steps: [
        {
          id: 'step-1',
          title: 'Welcome to Cursor',
          description: 'Understanding what Cursor is and why it\'s revolutionary',
          content: [
            'Cursor is an AI-powered code editor built on VS Code',
            'It combines the familiarity of VS Code with powerful AI assistance',
            'Think of it as having an expert developer pair programming with you',
            'You can write in natural language, and Cursor helps turn it into code'
          ],
          tips: [
            'Cursor works with any programming language',
            'You don\'t need to be a developer to get started',
            'The AI understands context from your entire codebase'
          ]
        },
        {
          id: 'step-2',
          title: 'The Cursor Interface',
          description: 'Getting familiar with the editor layout',
          content: [
            'The left sidebar contains your file explorer, search, and extensions',
            'The main editor area is where you write and view code',
            'The bottom panel shows terminal, problems, and output',
            'The right sidebar can show AI chat and additional tools'
          ],
          tips: [
            'Press Cmd+B (Mac) or Ctrl+B (Windows) to toggle the sidebar',
            'Use Cmd+J or Ctrl+J to toggle the bottom panel',
            'Customize your theme in Settings > Color Theme'
          ],
          exercise: 'Try opening and closing different panels using keyboard shortcuts'
        },
        {
          id: 'step-3',
          title: 'Your First AI Command',
          description: 'Learning to communicate with AI',
          content: [
            'Press Cmd+K (Mac) or Ctrl+K (Windows) to open inline AI',
            'Type your request in natural language',
            'The AI will generate code based on your description',
            'Review the suggestion and press Tab to accept'
          ],
          tips: [
            'Be specific but conversational in your requests',
            'You can ask for changes to existing code by selecting it first',
            'If the result isn\'t perfect, just ask the AI to modify it'
          ],
          exercise: 'Try: "Create a function that calculates the sum of an array"'
        },
        {
          id: 'step-4',
          title: 'Using the AI Chat',
          description: 'Having conversations with your AI assistant',
          content: [
            'Open the chat panel with Cmd+L (Mac) or Ctrl+L (Windows)',
            'Ask questions about your code or request explanations',
            'The AI can see your entire project context',
            'Use @ mentions to reference specific files or code'
          ],
          tips: [
            'Ask "What does this code do?" to understand existing code',
            'Use @filename to make AI focus on specific files',
            'The chat remembers your conversation history'
          ],
          exercise: 'Open chat and ask: "Explain what a React component is"'
        },
        {
          id: 'step-5',
          title: 'Completing Your First Tutorial',
          description: 'Celebrate your achievement!',
          content: [
            'You\'ve learned the basics of Cursor!',
            'You can now navigate the interface confidently',
            'You know how to use AI commands and chat',
            'You\'re ready to build your first project'
          ],
          tips: [
            'Practice makes perfect - try using AI for small tasks',
            'Don\'t be afraid to experiment',
            'The next tutorials will build on these foundations'
          ]
        }
      ]
    },
    {
      id: 'ai-commands',
      title: 'Mastering AI Commands',
      description: 'Learn advanced AI interaction techniques',
      difficulty: 'Intermediate',
      duration: '20 min',
      steps: [
        {
          id: 'step-1',
          title: 'Inline Editing with Cmd+K',
          description: 'Generate and modify code inline',
          content: [
            'Select code you want to change or place cursor where you want new code',
            'Press Cmd+K (or Ctrl+K) to open the inline prompt',
            'Describe what you want in natural language',
            'Review and accept with Tab, or reject with Esc'
          ],
          tips: [
            'Be specific: "Add error handling to this function"',
            'You can chain edits: accept one, then immediately ask for another',
            'Use "refactor this to..." for code improvements'
          ],
          exercise: 'Try refactoring a function to use arrow syntax'
        },
        {
          id: 'step-2',
          title: 'Context-Aware Generation',
          description: 'Leveraging your entire codebase',
          content: [
            'Cursor analyzes your entire project for context',
            'It understands your coding style and patterns',
            'Reference other files: "Create a component like UserCard"',
            'It knows your dependencies and how to use them'
          ],
          tips: [
            'The more context you provide, the better the results',
            'Open related files before making requests',
            'Cursor learns from your project structure'
          ],
          exercise: 'Ask AI to create a new component using patterns from existing ones'
        },
        {
          id: 'step-3',
          title: 'Multi-Line Edits',
          description: 'Making changes across multiple locations',
          content: [
            'Select multiple lines or regions',
            'Ask AI to apply changes uniformly',
            'Use "Replace all instances of X with Y"',
            'Cursor can refactor across entire files'
          ],
          tips: [
            'Great for renaming variables consistently',
            'Perfect for updating deprecated patterns',
            'Review changes carefully before accepting'
          ],
          exercise: 'Rename a variable across a function using AI'
        },
        {
          id: 'step-4',
          title: 'Code Explanations',
          description: 'Understanding complex code',
          content: [
            'Select any code you don\'t understand',
            'Ask "Explain this code" or "What does this do?"',
            'Get line-by-line breakdowns',
            'Ask follow-up questions for clarity'
          ],
          tips: [
            'Great for learning from existing codebases',
            'Helps understand libraries and frameworks',
            'Use it to review your own code'
          ],
          exercise: 'Find a complex function and ask for an explanation'
        }
      ]
    },
    {
      id: 'design-to-code',
      title: 'From Design to Code',
      description: 'Transform your designs into working code',
      difficulty: 'Beginner',
      duration: '25 min',
      steps: [
        {
          id: 'step-1',
          title: 'Describing Your Design',
          description: 'Communicating visual ideas to AI',
          content: [
            'Start with the layout: "Create a card with an image at the top"',
            'Add styling details: "Use rounded corners and a subtle shadow"',
            'Specify colors: "Primary color should be blue, accent pink"',
            'Describe spacing: "Add generous padding and margin"'
          ],
          tips: [
            'Use design terminology you\'re familiar with',
            'Reference common UI patterns: "Like a Twitter card"',
            'Iterate: ask for adjustments after seeing the initial result'
          ],
          exercise: 'Describe a simple profile card design to AI'
        },
        {
          id: 'step-2',
          title: 'Styling and CSS',
          description: 'Getting the look just right',
          content: [
            'Ask for specific CSS properties: "Make the background gradient"',
            'Request animations: "Add a hover effect that lifts the card"',
            'Adjust responsive behavior: "Make this stack on mobile"',
            'Fine-tune spacing: "Increase the gap between items"'
          ],
          tips: [
            'Modern CSS frameworks like Tailwind work great',
            'Ask for "modern" or "trendy" designs',
            'Request accessibility features like proper contrast'
          ],
          exercise: 'Take a basic component and add hover animations'
        },
        {
          id: 'step-3',
          title: 'Layout Patterns',
          description: 'Common design structures',
          content: [
            'Grid layouts: "Create a 3-column grid of cards"',
            'Flexbox patterns: "Center this content vertically and horizontally"',
            'Navigation: "Add a sticky header with navigation links"',
            'Sidebars: "Create a sidebar layout with main content"'
          ],
          tips: [
            'Start with the overall structure first',
            'Mobile-first is a good approach',
            'Use semantic HTML elements'
          ],
          exercise: 'Build a responsive grid gallery layout'
        },
        {
          id: 'step-4',
          title: 'Interactive Elements',
          description: 'Adding user interactions',
          content: [
            'Buttons: "Create a primary button with loading state"',
            'Forms: "Build a signup form with validation"',
            'Modals: "Add a modal that opens on button click"',
            'Dropdowns: "Create a dropdown menu with icons"'
          ],
          tips: [
            'Describe the user flow: "When clicked, show a confirmation"',
            'Think about states: hover, active, disabled',
            'Consider accessibility: keyboard navigation, screen readers'
          ],
          exercise: 'Create an interactive button with multiple states'
        }
      ]
    },
    {
      id: 'project-setup',
      title: 'Setting Up Your Project',
      description: 'Create new projects and configure them properly',
      difficulty: 'Beginner',
      duration: '20 min',
      steps: [
        {
          id: 'step-1',
          title: 'Creating a New Project',
          description: 'Starting from scratch',
          content: [
            'Open Cursor and select "New Project"',
            'Choose your framework: React, Vue, plain HTML, etc.',
            'AI can scaffold the entire project structure',
            'Ask: "Create a React project with TypeScript and Tailwind"'
          ],
          tips: [
            'Let AI handle the boilerplate',
            'Specify your tech stack preferences',
            'Include testing setup if needed'
          ],
          exercise: 'Create a new project with your preferred setup'
        },
        {
          id: 'step-2',
          title: 'Project Structure',
          description: 'Organizing your files',
          content: [
            'Ask AI to create folder structures',
            'Follow common patterns: components, pages, utils',
            'Keep related files together',
            'Use clear, descriptive names'
          ],
          tips: [
            'Ask: "What\'s a good folder structure for a React app?"',
            'Be consistent with naming conventions',
            'Organize by feature, not by file type'
          ],
          exercise: 'Set up a proper folder structure for your project'
        },
        {
          id: 'step-3',
          title: 'Configuration Files',
          description: 'Setting up build tools and configs',
          content: [
            'AI can create config files: package.json, tsconfig.json, etc.',
            'Ask for specific setups: "Configure ESLint for React"',
            'Add scripts for common tasks',
            'Set up environment variables'
          ],
          tips: [
            'Start with sensible defaults',
            'Add tools as you need them',
            'Ask AI to explain any config you don\'t understand'
          ],
          exercise: 'Add linting and formatting to your project'
        }
      ]
    }
  ]

  const isTutorialCompleted = (tutorialId: string) => {
    return completedLessons.some(l => l.id === tutorialId)
  }

  const handleStartTutorial = (tutorial: Tutorial) => {
    setSelectedTutorial(tutorial)
    setCurrentStep(0)
  }

  const handleNextStep = () => {
    if (selectedTutorial && currentStep < selectedTutorial.steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else if (selectedTutorial) {
      // Complete tutorial
      completeLesson(selectedTutorial.id, 'tutorial')
      setShowCompleteModal(true)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleCloseTutorial = () => {
    setSelectedTutorial(null)
    setCurrentStep(0)
    setShowCompleteModal(false)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-700'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-700'
      case 'Advanced':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  if (selectedTutorial) {
    const currentStepData = selectedTutorial.steps[currentStep]
    const progress = ((currentStep + 1) / selectedTutorial.steps.length) * 100

    return (
      <div className="max-w-4xl mx-auto animate-fade-in">
        {/* Tutorial Header */}
        <div className="card mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{selectedTutorial.title}</h2>
              <p className="text-gray-600">{selectedTutorial.description}</p>
            </div>
            <button
              onClick={handleCloseTutorial}
              className="text-gray-500 hover:text-gray-700 font-medium"
            >
              Close
            </button>
          </div>
          
          <div className="progress-bar mb-2">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="text-sm text-gray-600">
            Step {currentStep + 1} of {selectedTutorial.steps.length}
          </div>
        </div>

        {/* Current Step Content */}
        <div className="card space-y-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">
                {currentStep + 1}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{currentStepData.title}</h3>
                <p className="text-gray-600">{currentStepData.description}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-blue-50 rounded-lg p-6 space-y-3">
            <h4 className="font-bold text-gray-800 mb-3">What you'll learn:</h4>
            {currentStepData.content.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <ChevronRight className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>

          {/* Tips */}
          {currentStepData.tips.length > 0 && (
            <div className="bg-accent-50 rounded-lg p-6 space-y-3">
              <h4 className="font-bold text-gray-800 mb-3">💡 Pro Tips:</h4>
              {currentStepData.tips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0 mt-2" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          )}

          {/* Exercise */}
          {currentStepData.exercise && (
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-2">🎯 Try This:</h4>
              <p className="text-gray-700">{currentStepData.exercise}</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={handlePreviousStep}
            disabled={currentStep === 0}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              currentStep === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-primary-600 border-2 border-primary-500 hover:bg-primary-50'
            }`}
          >
            Previous
          </button>
          
          <button
            onClick={handleNextStep}
            className="btn-primary"
          >
            {currentStep === selectedTutorial.steps.length - 1 ? 'Complete Tutorial' : 'Next Step'}
          </button>
        </div>

        {/* Completion Modal */}
        {showCompleteModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="card max-w-md animate-slide-up">
              <div className="text-center space-y-4">
                <Award className="w-16 h-16 text-accent-500 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-800">Tutorial Complete! 🎉</h3>
                <p className="text-gray-600">
                  You've earned 100 points and completed "{selectedTutorial.title}"
                </p>
                <button
                  onClick={handleCloseTutorial}
                  className="btn-primary w-full"
                >
                  Back to Tutorials
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2 mb-8">
        <h2 className="section-title">Interactive Tutorials</h2>
        <p className="text-gray-600 text-lg">
          Step-by-step guides to master Cursor from basics to advanced
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tutorials.map((tutorial) => {
          const isCompleted = isTutorialCompleted(tutorial.id)
          
          return (
            <div key={tutorial.id} className="card group hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{tutorial.title}</h3>
                    {isCompleted && (
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    )}
                  </div>
                  <p className="text-gray-600 mb-3">{tutorial.description}</p>
                  
                  <div className="flex items-center space-x-3 text-sm">
                    <span className={`badge ${getDifficultyColor(tutorial.difficulty)}`}>
                      {tutorial.difficulty}
                    </span>
                    <span className="text-gray-500">⏱️ {tutorial.duration}</span>
                    <span className="text-gray-500">📚 {tutorial.steps.length} steps</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleStartTutorial(tutorial)}
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>{isCompleted ? 'Review' : 'Start'} Tutorial</span>
              </button>
            </div>
          )
        })}
      </div>

      {/* Progress Section */}
      <div className="card bg-gradient-to-r from-primary-50 to-accent-50 border-2 border-primary-200">
        <h3 className="text-xl font-bold text-gray-800 mb-3">Your Progress</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Tutorials Completed</span>
            <span className="font-bold text-gray-800">
              {tutorials.filter(t => isTutorialCompleted(t.id)).length} / {tutorials.length}
            </span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(tutorials.filter(t => isTutorialCompleted(t.id)).length / tutorials.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tutorials

