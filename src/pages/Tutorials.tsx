import { useState } from 'react'
import { CheckCircle2, Play, ChevronRight, Award, Clock, BookOpen, Target, ArrowLeft, Star, Lightbulb, ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()

  // Designer-focused tutorials (link to dedicated pages)
  const designerTutorials = [
    {
      id: 'design-to-prototype',
      title: 'Design to Prototype',
      description: 'Turn mockups into working prototypes using AI - the complete designer workflow',
      difficulty: 'Beginner' as const,
      duration: '30 min',
      link: '/design-to-prototype'
    },
    {
      id: 'design-systems',
      title: 'Building Design Systems',
      description: 'Create scalable component libraries and design tokens that your team can use',
      difficulty: 'Intermediate' as const,
      duration: '45 min',
      link: '/design-systems'
    },
    {
      id: 'design-handoff',
      title: 'Design Handoff to Developers',
      description: 'Perfect handoffs with production-ready code that developers will love',
      difficulty: 'Intermediate' as const,
      duration: '30 min',
      link: '/design-handoff'
    },
    {
      id: 'animations',
      title: 'Prototyping Interactions & Animations',
      description: 'Bring designs to life with smooth, delightful animations',
      difficulty: 'Intermediate' as const,
      duration: '35 min',
      link: '/animations'
    },
    {
      id: 'collaboration',
      title: 'Team Collaboration for Designers',
      description: 'Work seamlessly with other designers, developers, and stakeholders',
      difficulty: 'Beginner' as const,
      duration: '25 min',
      link: '/collaboration'
    }
  ]

  const tutorials: Tutorial[] = [
    {
      id: 'build-first-component',
      title: 'Build Your First Component (Hands-On)',
      description: 'Create a working profile card from scratch - perfect for absolute beginners',
      difficulty: 'Beginner',
      duration: '30 min',
      steps: [
        {
          id: 'step-1',
          title: 'Set Up Your Project',
          description: 'Get ready to build - create a place for your component',
          content: [
            'Open Cursor and create a new folder on your Desktop called "my-first-component"',
            'In Cursor, go to File → Open Folder and select your new folder',
            'You should now see an empty folder in the sidebar',
            'We\'re going to build a beautiful profile card component!'
          ],
          tips: [
            'Make sure the folder is empty - fresh start!',
            'If you see a "Trust" dialog, click "Trust" - it\'s your own folder',
            'The sidebar on the left shows all your files'
          ],
          exercise: 'Create the folder and open it in Cursor. You\'re ready when you see an empty sidebar.'
        },
        {
          id: 'step-2',
          title: 'Create Your HTML File',
          description: 'Make the canvas where we\'ll build',
          content: [
            'Click the "New File" icon in the sidebar (or press Cmd+N)',
            'A new file appears - let\'s save it immediately',
            'Press Cmd+S (or Ctrl+S on Windows) to save',
            'Name it "profile-card.html" and press Enter',
            'Perfect! You now have your first file'
          ],
          tips: [
            'Always save files right away so you don\'t lose work',
            'The .html extension tells Cursor this is a web page',
            'You can see the file appear in the sidebar'
          ],
          exercise: 'Create and save profile-card.html. The file should be visible in your sidebar.'
        },
        {
          id: 'step-3',
          title: 'Use AI to Build the Structure',
          description: 'Let AI help you create the basic HTML structure',
          content: [
            'Make sure your cursor is in the empty profile-card.html file',
            'Press Cmd+K (or Ctrl+K on Windows) to open AI inline edit',
            'Type: "create a basic HTML page structure"',
            'Press Enter and watch the AI generate code!',
            'Press Tab to accept the suggestion',
            'Save the file (Cmd+S)'
          ],
          tips: [
            'This is your first AI-generated code - congratulations!',
            'The AI created the skeleton every HTML page needs',
            'Don\'t worry about understanding every detail yet',
            'You can always ask AI to explain: Cmd+L then "explain this code"'
          ],
          exercise: 'Use AI to generate basic HTML structure. You should see <html>, <head>, and <body> tags.'
        },
        {
          id: 'step-4',
          title: 'Build the Profile Card',
          description: 'Create an actual component with AI assistance',
          content: [
            'Place your cursor inside the <body> tag (between <body> and </body>)',
            'Press Cmd+K again',
            'Type this detailed request: "create a centered profile card with a circular avatar image, name Sarah Chen, title UX Designer, short bio, and a follow button. Make it look modern with nice spacing and colors"',
            'Press Enter and watch AI build it!',
            'Press Tab to accept',
            'Save your file'
          ],
          tips: [
            'The more specific your description, the better the result',
            'Notice how AI interpreted "modern" and "nice spacing"',
            'You can always refine: select the code, Cmd+K, "make the button blue"'
          ],
          exercise: 'Generate the profile card. You should see a complete card with avatar, text, and button.'
        },
        {
          id: 'step-5',
          title: 'Preview Your Creation',
          description: 'See your component in a browser!',
          content: [
            'Right-click on profile-card.html in the sidebar',
            'Choose "Open with Live Server" (or just double-click the file)',
            'Your default browser opens showing YOUR profile card!',
            'This is a real, working component you just built!',
            'Try resizing the browser - see how it adapts'
          ],
          tips: [
            'If "Open with Live Server" isn\'t there, just double-click the file and open it in a browser',
            'You can edit the code and refresh to see changes',
            'This is actual web development - you\'re doing it!'
          ],
          exercise: 'Open your profile card in a browser. Celebrate - you built something real! 🎉'
        },
        {
          id: 'step-6',
          title: 'Customize and Iterate',
          description: 'Make it your own with quick AI edits',
          content: [
            'Back in Cursor, select the button code',
            'Press Cmd+K and type: "add a hover effect that changes background to purple"',
            'Accept the change, save, and refresh your browser',
            'See the hover effect? You just added an interaction!',
            'Try more: "make the avatar larger" or "add a shadow to the card"'
          ],
          tips: [
            'This iterative workflow is how professionals work',
            'Make one change at a time so you can track what works',
            'If you don\'t like something, Cmd+Z to undo',
            'The cycle is: edit → save → refresh → repeat'
          ],
          exercise: 'Add at least two customizations using AI. Make the card uniquely yours!'
        },
        {
          id: 'step-7',
          title: 'Understanding What You Built',
          description: 'Learn from your code',
          content: [
            'Select all your code (Cmd+A)',
            'Press Cmd+L to open AI chat',
            'Ask: "Explain this code to me like I\'m new to web development"',
            'Read the explanation - AI will break down each part',
            'Ask follow-up questions: "What does the style section do?" or "How does the button work?"'
          ],
          tips: [
            'Understanding your code makes you a better builder',
            'Don\'t move on until you grasp the basics',
            'There\'s no shame in asking AI to explain things multiple times',
            'This learning process is how you build real skills'
          ],
          exercise: 'Get an explanation of your code. Ask at least one follow-up question.'
        },
        {
          id: 'step-8',
          title: 'Congratulations - You\'re a Builder!',
          description: 'Celebrate your achievement!',
          content: [
            'You just built a real web component from scratch',
            'You used AI assistance - that\'s the modern way to build',
            'You iterated and improved your work',
            'You learned by doing - the best way to learn',
            'This is just the beginning of what you can create!'
          ],
          tips: [
            'Save this project - you\'ll want to reference it',
            'Try building variations: a product card, a testimonial card',
            'Every professional started exactly where you are now',
            'The next tutorial will build on these skills'
          ]
        }
      ]
    },
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
      id: 'file-organization',
      title: 'Project Organization & File Structure',
      description: 'Learn how to organize files like a professional',
      difficulty: 'Beginner',
      duration: '25 min',
      steps: [
        {
          id: 'step-1',
          title: 'Why Organization Matters',
          description: 'Understand the importance of good structure',
          content: [
            'Good file organization makes finding things easy',
            'It helps you and teammates understand the project',
            'Professional projects all follow similar patterns',
            'A clean structure prevents chaos as projects grow',
            'It\'s much easier to organize from the start than to refactor later'
          ],
          tips: [
            'Think of it like organizing your closet - everything has a place',
            'Consistency is more important than perfection',
            'Follow common conventions so others can navigate easily'
          ]
        },
        {
          id: 'step-2',
          title: 'The Basic Folder Structure',
          description: 'Essential folders every project needs',
          content: [
            '/src - Your source code lives here (everything you write)',
            '/public - Static files that don\'t change (images, fonts, icons)',
            '/components - Reusable UI pieces (buttons, cards, headers)',
            '/pages - Full page components (home, about, profile)',
            '/styles or /css - Styling files',
            '/utils or /helpers - Utility functions',
            'package.json - Project dependencies and scripts (auto-generated)'
          ],
          tips: [
            'Ask AI: "Create a folder structure for a portfolio website"',
            'Not every project needs every folder',
            'Add folders as you need them, not all at once'
          ],
          exercise: 'Ask AI in chat: "What folders should I create for a blog website?"'
        },
        {
          id: 'step-3',
          title: 'Naming Conventions',
          description: 'How to name files and folders',
          content: [
            'Components: PascalCase (UserCard.tsx, PrimaryButton.tsx)',
            'Utilities: camelCase (formatDate.ts, validateEmail.ts)',
            'Folders: kebab-case or lowercase (user-profile/, components/)',
            'Be descriptive: "UserProfileCard.tsx" not "card1.tsx"',
            'Match names between design and code for easy reference',
            'Use consistent naming throughout your project'
          ],
          tips: [
            'PascalCase means FirstLetterUppercase',
            'camelCase means firstLetterLowercase',
            'kebab-case means words-separated-by-dashes',
            'Pick one style and stick to it!'
          ],
          exercise: 'Rename any poorly named files in your projects to follow these conventions'
        },
        {
          id: 'step-4',
          title: 'Grouping Related Files',
          description: 'Organize by feature, not file type',
          content: [
            'OLD WAY: All .ts files together, all .css files together → Hard to find related code',
            'NEW WAY: Group by feature → user-profile/ contains JS, CSS, tests for user profile',
            'Example good structure:',
            '  /components/Button/Button.tsx',
            '  /components/Button/Button.css',
            '  /components/Button/Button.test.ts',
            'Everything related to Button is together!'
          ],
          tips: [
            'If you need to change the button, you know exactly where to look',
            'You can copy an entire feature folder to another project',
            'This scales much better as projects grow'
          ],
          exercise: 'Reorganize a component and its related files into one folder'
        },
        {
          id: 'step-5',
          title: 'The Index File Pattern',
          description: 'Make imports cleaner and easier',
          content: [
            'Create an index.ts file in each folder',
            'Use it to export everything from that folder',
            'Then you can import from the folder, not specific files',
            'Example: import { Button, Card } from "./components" instead of "./components/Button/Button.tsx"',
            'This makes refactoring easier - move files around without breaking imports'
          ],
          tips: [
            'This is an advanced pattern - don\'t worry if it\'s confusing at first',
            'You\'ll appreciate it as projects grow',
            'Many professional projects use this pattern'
          ]
        },
        {
          id: 'step-6',
          title: 'What NOT to Commit',
          description: 'Understanding .gitignore',
          content: [
            'Some files should NEVER be committed to Git:',
            'node_modules/ - Contains downloaded packages (huge!)',
            '.env - Contains secrets and API keys',
            '.DS_Store - Mac system files',
            'dist/ or build/ - Generated code',
            'Create a .gitignore file listing these',
            'Git will then ignore them automatically'
          ],
          tips: [
            'node_modules can be re-downloaded with npm install',
            'Never commit passwords or API keys!',
            'Generated code can be regenerated',
            'Ask AI: "Create a .gitignore file for a React project"'
          ],
          exercise: 'Create a .gitignore file with AI\'s help'
        }
      ]
    },
    {
      id: 'multi-file-workflow',
      title: 'Working Across Multiple Files',
      description: 'Navigate and edit multiple files efficiently',
      difficulty: 'Intermediate',
      duration: '20 min',
      steps: [
        {
          id: 'step-1',
          title: 'Quick File Navigation',
          description: 'Jump to any file instantly',
          content: [
            'Press Cmd+P (or Ctrl+P) - this is THE most important shortcut',
            'Start typing any part of a filename',
            'Results appear instantly - no clicking through folders!',
            'Press Enter to open the file',
            'This works even with hundreds of files'
          ],
          tips: [
            'You don\'t need to type the full name - "user" finds "UserProfile.tsx"',
            'You can type parts from anywhere: "prof.tsx" finds "UserProfile.tsx"',
            'Much faster than clicking through folders',
            'Use this constantly - it\'s a game-changer'
          ],
          exercise: 'Close all files, then use Cmd+P to open three different files without clicking'
        },
        {
          id: 'step-2',
          title: 'Split View Editing',
          description: 'View multiple files side-by-side',
          content: [
            'Right-click a file tab and choose "Split Right" (or "Split Down")',
            'You can now see two files at once',
            'Perfect for: copying code, referencing another file, comparing versions',
            'Drag the divider to adjust sizes',
            'Click the X on a split to close it'
          ],
          tips: [
            'Shortcut: Cmd+\\ (Ctrl+\\) to split',
            'You can have many splits open',
            'Especially useful for component + styles',
            'Or for copying patterns from one file to another'
          ],
          exercise: 'Open a component and its style file side-by-side'
        },
        {
          id: 'step-3',
          title: 'Using @ Mentions Across Files',
          description: 'Let AI understand multi-file context',
          content: [
            'When asking AI for help, reference multiple files with @',
            'Example: "@Button.tsx and @Card.tsx should have consistent styling"',
            'AI reads both files and understands the context',
            'You can @ entire folders: "@components/ make all buttons blue"',
            'This is incredibly powerful for large changes'
          ],
          tips: [
            'Always @ the files you\'re talking about',
            'AI can only help with files it can see',
            'Use @folder/ for project-wide changes',
            'The more context you provide, the better AI\'s suggestions'
          ],
          exercise: 'Ask AI to make changes across 2-3 files using @ mentions'
        },
        {
          id: 'step-4',
          title: 'Search Across All Files',
          description: 'Find anything in your entire project',
          content: [
            'Press Cmd+Shift+F (or Ctrl+Shift+F)',
            'Type what you\'re looking for',
            'See results from EVERY file in your project',
            'Click any result to jump to that file and line',
            'Perfect for finding where you used something'
          ],
          tips: [
            'Search for color codes to find all uses: "#0ea5e9"',
            'Find where you called a function',
            'Locate todos: search for "TODO"',
            'Use this instead of manually checking every file'
          ],
          exercise: 'Search for a CSS class or function name across your project'
        },
        {
          id: 'step-5',
          title: 'Multi-Cursor Editing',
          description: 'Edit multiple places at once',
          content: [
            'Hold Alt (or Option on Mac) and click in multiple places',
            'You now have multiple cursors!',
            'Type and it appears in all places at once',
            'Or: Select text, press Cmd+D repeatedly to select next occurrence',
            'Press Escape to go back to one cursor'
          ],
          tips: [
            'Perfect for renaming things consistently',
            'Great for adding the same code in multiple places',
            'Feels like magic the first time!',
            'Takes practice but becomes super useful'
          ],
          exercise: 'Use multi-cursor to change a word in 3 different places at once'
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
        return 'badge-success'
      case 'Intermediate':
        return 'badge-warning'
      case 'Advanced':
        return 'badge-purple'
      default:
        return 'badge-info'
    }
  }

  if (selectedTutorial) {
    const currentStepData = selectedTutorial.steps[currentStep]
    const progress = ((currentStep + 1) / selectedTutorial.steps.length) * 100

    return (
      <div className="max-w-5xl mx-auto animate-fade-in space-y-6">
        {/* Back Button */}
        <button
          onClick={handleCloseTutorial}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Tutorials</span>
        </button>

        {/* Tutorial Header */}
        <div className="card">
          <div className="mb-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h1 className="text-3xl font-black text-gray-900 mb-2">{selectedTutorial.title}</h1>
                <p className="text-gray-600 text-lg">{selectedTutorial.description}</p>
              </div>
              <span className={`${getDifficultyColor(selectedTutorial.difficulty)} whitespace-nowrap`}>
                {selectedTutorial.difficulty}
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {selectedTutorial.duration}
              </span>
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {selectedTutorial.steps.length} steps
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                100 points
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm font-medium">
              <span className="text-gray-700">Step {currentStep + 1} of {selectedTutorial.steps.length}</span>
              <span className="text-purple-600">{Math.round(progress)}% Complete</span>
            </div>
            <div className="progress-bar h-3">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        {/* Current Step Content */}
        <div className="card space-y-8">
          {/* Step Header */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              {currentStep + 1}
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-black text-gray-900 mb-2">{currentStepData.title}</h2>
              <p className="text-lg text-gray-600">{currentStepData.description}</p>
            </div>
          </div>

          {/* Content */}
          <div className="content-box space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-gray-700" />
              <h3 className="font-bold text-gray-900 text-lg">What You'll Learn</h3>
            </div>
            <div className="space-y-3">
              {currentStepData.content.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          {currentStepData.tips.length > 0 && (
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-purple-600" />
                <h3 className="font-bold text-gray-900 text-lg">Pro Tips</h3>
              </div>
              <div className="space-y-3">
                {currentStepData.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Exercise */}
          {currentStepData.exercise && (
            <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-gray-900 text-lg">Try This Exercise</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{currentStepData.exercise}</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 sticky bottom-6 bg-white border border-gray-200 rounded-2xl p-6 shadow-hard">
          <button
            onClick={handlePreviousStep}
            disabled={currentStep === 0}
            className="btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>
          
          <span className="text-sm font-medium text-gray-600">
            Step {currentStep + 1} / {selectedTutorial.steps.length}
          </span>
          
          <button
            onClick={handleNextStep}
            className="btn-primary"
          >
            <span>{currentStep === selectedTutorial.steps.length - 1 ? 'Complete Tutorial' : 'Next Step'}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Completion Modal */}
        {showCompleteModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="card max-w-md w-full animate-scale-in shadow-hard">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Congratulations!</h3>
                  <p className="text-lg text-gray-600">
                    You've completed <strong>"{selectedTutorial.title}"</strong>
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center justify-center gap-2 text-2xl font-bold text-gray-900">
                    <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                    <span>+100 Points</span>
                  </div>
                </div>
                <button
                  onClick={handleCloseTutorial}
                  className="btn-primary w-full"
                >
                  <span>Continue Learning</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-20 left-1/3 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="text-center space-y-6 max-w-4xl mx-auto pt-8">
          <h1 className="section-title">
            Learn by <span className="gradient-text">Doing</span>
          </h1>
          <p className="section-subtitle">
            Step-by-step tutorials that transform you from beginner to builder
          </p>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="card-glass relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 -z-10"></div>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-2">Your Progress</h2>
            <p className="text-gray-600 font-medium">
              {tutorials.filter(t => isTutorialCompleted(t.id)).length} of {tutorials.length} tutorials completed
            </p>
          </div>
          <div className="text-5xl font-black gradient-text">
            {Math.round((tutorials.filter(t => isTutorialCompleted(t.id)).length / tutorials.length) * 100)}%
          </div>
        </div>
        
        <div className="progress-bar h-4">
          <div 
            className="progress-fill" 
            style={{ width: `${(tutorials.filter(t => isTutorialCompleted(t.id)).length / tutorials.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Designer-Focused Tutorials */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          <h2 className="text-2xl font-black text-gray-900">🎨 Designer Workflows</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
        </div>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Complete guides for product and UX/UI designers to build prototypes, design systems, and collaborate with teams
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {designerTutorials.map((tutorial) => {
            const isCompleted = isTutorialCompleted(tutorial.id)
            
            return (
              <div key={tutorial.id} className="card-hover glow group relative">
                {isCompleted && (
                  <div className="absolute -top-4 -right-4 z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                      <CheckCircle2 className="w-7 h-7 text-white" />
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-3xl font-black text-gray-900 group-hover:gradient-text transition-all leading-tight">
                        {tutorial.title}
                      </h3>
                      <span className={`${getDifficultyColor(tutorial.difficulty)} whitespace-nowrap text-xs`}>
                        {tutorial.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {tutorial.description}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-6 text-sm font-semibold text-gray-600">
                    <span className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      {tutorial.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                      150
                    </span>
                  </div>

                  {/* CTA */}
                  <Link
                    to={tutorial.link}
                    className={`w-full ${isCompleted ? 'btn-outline' : 'btn-primary'} group/btn flex items-center justify-center gap-3`}
                  >
                    {isCompleted ? (
                      <>
                        <CheckCircle2 className="w-6 h-6 group-hover/btn:rotate-12 transition-transform" />
                        <span>Review</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                        <span>Start Now</span>
                        <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Interactive Tutorials */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          <h2 className="text-2xl font-black text-gray-900">💻 Interactive Tutorials</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        </div>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Step-by-step hands-on tutorials where you learn by doing
        </p>

        {/* Tutorials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
        {tutorials.map((tutorial) => {
          const isCompleted = isTutorialCompleted(tutorial.id)
          
          return (
            <div key={tutorial.id} className="card-hover glow group relative">
              {isCompleted && (
                <div className="absolute -top-4 -right-4 z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-3xl font-black text-gray-900 group-hover:gradient-text transition-all leading-tight">
                      {tutorial.title}
                    </h3>
                    <span className={`${getDifficultyColor(tutorial.difficulty)} whitespace-nowrap text-xs`}>
                      {tutorial.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {tutorial.description}
                  </p>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-6 text-sm font-semibold text-gray-600">
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {tutorial.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    {tutorial.steps.length} steps
                  </span>
                  <span className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    100
                  </span>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleStartTutorial(tutorial)}
                  className={`w-full ${isCompleted ? 'btn-outline' : 'btn-primary'} group/btn`}
                >
                  {isCompleted ? (
                    <>
                      <CheckCircle2 className="w-6 h-6 group-hover/btn:rotate-12 transition-transform" />
                      <span>Review</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                      <span>Start Now</span>
                      <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )
        })}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-purple-600 via-blue-600 to-purple-600 p-12 md:p-16 text-center text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative space-y-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Complete Your Learning</h2>
          <p className="text-xl font-medium opacity-90 max-w-2xl mx-auto">
            Finish all tutorials to earn {tutorials.length * 100} points
          </p>
          
          <div className="flex items-center justify-center gap-6 pt-4">
            <div className="bg-white/20 backdrop-blur-xl rounded-3xl px-8 py-6 min-w-[140px]">
              <div className="text-5xl font-black mb-2">{tutorials.filter(t => isTutorialCompleted(t.id)).length}</div>
              <div className="text-sm opacity-90 font-bold uppercase tracking-wide">Completed</div>
            </div>
            <div className="text-4xl font-black opacity-50">/</div>
            <div className="bg-white/20 backdrop-blur-xl rounded-3xl px-8 py-6 min-w-[140px]">
              <div className="text-5xl font-black mb-2">{tutorials.length}</div>
              <div className="text-sm opacity-90 font-bold uppercase tracking-wide">Total</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tutorials

