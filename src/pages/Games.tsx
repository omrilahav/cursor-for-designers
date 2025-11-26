import { useState } from 'react'
import { Trophy, Star, Target, Zap, CheckCircle2, X, RefreshCw } from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

interface Game {
  id: string
  title: string
  description: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  points: number
  type: 'quiz' | 'match' | 'challenge'
}

interface QuizQuestion {
  question: string
  options: string[]
  correct: number
  explanation: string
}

const Games = () => {
  const { addPoints, completeLesson } = useProgress()
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [matchedPairs, setMatchedPairs] = useState<Set<number>>(new Set())
  const [selectedCards, setSelectedCards] = useState<number[]>([])

  const games: Game[] = [
    {
      id: 'shortcut-master',
      title: 'Shortcut Master',
      description: 'Test your knowledge of Cursor keyboard shortcuts',
      difficulty: 'Easy',
      points: 150,
      type: 'quiz'
    },
    {
      id: 'ai-command-quiz',
      title: 'AI Command Quiz',
      description: 'Match AI capabilities with the right commands',
      difficulty: 'Medium',
      points: 200,
      type: 'quiz'
    },
    {
      id: 'feature-match',
      title: 'Feature Matcher',
      description: 'Match Cursor features with their use cases',
      difficulty: 'Medium',
      points: 200,
      type: 'match'
    },
    {
      id: 'workflow-challenge',
      title: 'Workflow Challenge',
      description: 'Complete a design-to-code workflow scenario',
      difficulty: 'Hard',
      points: 300,
      type: 'quiz'
    }
  ]

  const quizQuestions: { [key: string]: QuizQuestion[] } = {
    'shortcut-master': [
      {
        question: 'What is the keyboard shortcut to open the AI inline edit?',
        options: ['Cmd/Ctrl + K', 'Cmd/Ctrl + L', 'Cmd/Ctrl + I', 'Cmd/Ctrl + P'],
        correct: 0,
        explanation: 'Cmd/Ctrl + K opens the inline AI edit, allowing you to generate or modify code directly in the editor.'
      },
      {
        question: 'Which shortcut opens the AI chat panel?',
        options: ['Cmd/Ctrl + K', 'Cmd/Ctrl + L', 'Cmd/Ctrl + Shift + P', 'Cmd/Ctrl + J'],
        correct: 1,
        explanation: 'Cmd/Ctrl + L opens the AI chat panel where you can have longer conversations with the AI.'
      },
      {
        question: 'How do you quickly open any file in your project?',
        options: ['Cmd/Ctrl + O', 'Cmd/Ctrl + P', 'Cmd/Ctrl + F', 'Cmd/Ctrl + E'],
        correct: 1,
        explanation: 'Cmd/Ctrl + P opens the quick file picker, allowing you to search and open any file instantly.'
      },
      {
        question: 'What does Cmd/Ctrl + D do?',
        options: ['Delete line', 'Duplicate line', 'Select next occurrence', 'Debug'],
        correct: 2,
        explanation: 'Cmd/Ctrl + D selects the next occurrence of the current selection, perfect for multi-cursor editing.'
      },
      {
        question: 'How do you toggle the terminal panel?',
        options: ['Cmd/Ctrl + T', 'Cmd/Ctrl + `', 'Cmd/Ctrl + J', 'Cmd/Ctrl + \\'],
        correct: 1,
        explanation: 'Cmd/Ctrl + ` toggles the integrated terminal panel.'
      }
    ],
    'ai-command-quiz': [
      {
        question: 'You want to generate a new React component. What should you do?',
        options: [
          'Use Cmd/Ctrl + K and describe the component',
          'Use Cmd/Ctrl + L and ask for a component',
          'Both would work well',
          'Neither, you must write it manually'
        ],
        correct: 2,
        explanation: 'Both Cmd/Ctrl + K (inline) and Cmd/Ctrl + L (chat) can generate components. Inline is faster for simple components, chat is better for complex ones with discussion.'
      },
      {
        question: 'How do you reference a specific file in AI chat?',
        options: ['Type the filename', 'Use @filename', 'Use #filename', 'Use /filename'],
        correct: 1,
        explanation: 'Use @ followed by the filename to reference specific files in AI chat, giving the AI context about that file.'
      },
      {
        question: 'What\'s the best way to understand unfamiliar code?',
        options: [
          'Google it',
          'Select the code and ask AI "What does this do?"',
          'Read documentation',
          'Ask a colleague'
        ],
        correct: 1,
        explanation: 'While all methods can work, selecting code and asking the AI is the fastest way to get context-specific explanations in Cursor.'
      },
      {
        question: 'You want to refactor a function to be more efficient. What do you do?',
        options: [
          'Rewrite it manually',
          'Select the function, use Cmd/Ctrl + K, ask to "refactor for efficiency"',
          'Delete and start over',
          'Copy from Stack Overflow'
        ],
        correct: 1,
        explanation: 'Select the code, use Cmd/Ctrl + K, and describe the refactoring you want. The AI understands your existing code and can improve it.'
      },
      {
        question: 'How does Cursor\'s AI understand your project structure?',
        options: [
          'You must manually configure it',
          'It only sees the current file',
          'It automatically analyzes your entire codebase',
          'It uses internet search'
        ],
        correct: 2,
        explanation: 'Cursor automatically indexes and analyzes your entire codebase to provide context-aware suggestions and understand your project structure.'
      }
    ],
    'workflow-challenge': [
      {
        question: 'You have a Figma design for a new landing page. What\'s the first step in Cursor?',
        options: [
          'Start coding immediately',
          'Create the folder structure and plan components',
          'Copy code from templates',
          'Ask AI to build everything at once'
        ],
        correct: 1,
        explanation: 'Planning your structure first helps you work more efficiently. Use AI to help plan, then build component by component.'
      },
      {
        question: 'You\'re building a component but it doesn\'t look right. What\'s the best approach?',
        options: [
          'Start over from scratch',
          'Give up and use a library',
          'Iterate with AI: "Make this card more modern" or "Adjust spacing"',
          'Manually adjust every CSS property'
        ],
        correct: 2,
        explanation: 'Iterating with AI is efficient. Make small, specific requests to refine the design until it matches your vision.'
      },
      {
        question: 'Your developer asks for the component specs. What should you share?',
        options: [
          'Just the code file',
          'Screenshots only',
          'Code + comments explaining the design decisions',
          'Nothing, they should figure it out'
        ],
        correct: 2,
        explanation: 'Share the code with clear comments explaining design decisions, spacing choices, and responsive behavior. This helps developers understand the "why" behind the design.'
      },
      {
        question: 'You need to make the design responsive. What\'s the best way?',
        options: [
          'Create separate versions for each screen size',
          'Use AI: "Make this responsive" and then refine for each breakpoint',
          'Only design for desktop',
          'Use fixed pixel values'
        ],
        correct: 1,
        explanation: 'AI can create responsive designs quickly. Start with "Make this responsive", then refine the behavior at different breakpoints as needed.'
      },
      {
        question: 'How do you maintain consistency across multiple components?',
        options: [
          'Copy and paste everything',
          'Remember all values manually',
          'Create a design system/style guide and reference it with AI',
          'Use random values'
        ],
        correct: 2,
        explanation: 'Create a design system file with your colors, spacing, and styles. Reference it when creating new components: "Use colors from @design-system.ts"'
      }
    ]
  }

  const matchingGames: { [key: string]: { items: string[], pairs: string[] } } = {
    'feature-match': {
      items: [
        'Cmd/Ctrl + K',
        'Cmd/Ctrl + L', 
        '@filename',
        'Cmd/Ctrl + P',
        'Cmd/Ctrl + D',
        'Tab key'
      ],
      pairs: [
        'Generate code inline',
        'Open AI chat',
        'Reference specific file in chat',
        'Quick file open',
        'Select next occurrence',
        'Accept AI suggestion'
      ]
    }
  }

  const handleQuizAnswer = (answerIndex: number) => {
    if (selectedGame && selectedGame.type === 'quiz') {
      setSelectedAnswer(answerIndex)
      const questions = quizQuestions[selectedGame.id]
      const isCorrect = questions[currentQuestion].correct === answerIndex

      if (isCorrect) {
        setScore(score + 1)
      }

      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
          setSelectedAnswer(null)
        } else {
          setShowResult(true)
          const points = Math.round((score + (isCorrect ? 1 : 0)) / questions.length * selectedGame.points)
          addPoints(points)
          if ((score + (isCorrect ? 1 : 0)) / questions.length >= 0.8) {
            completeLesson(selectedGame.id, 'game')
          }
        }
      }, 1500)
    }
  }

  const handleMatchCard = (index: number) => {
    if (selectedGame && selectedGame.type === 'match') {
      if (matchedPairs.has(index) || selectedCards.includes(index)) return

      const newSelected = [...selectedCards, index]
      setSelectedCards(newSelected)

      if (newSelected.length === 2) {
        const game = matchingGames[selectedGame.id]
        const [first, second] = newSelected
        
        // Check if it's a correct pair
        const isMatch = (first < game.items.length && second >= game.items.length && 
                        first === second - game.items.length) ||
                       (second < game.items.length && first >= game.items.length && 
                        second === first - game.items.length)

        if (isMatch) {
          setTimeout(() => {
            setMatchedPairs(new Set([...matchedPairs, ...newSelected]))
            setSelectedCards([])
            setScore(score + 1)

            if (matchedPairs.size + 2 === game.items.length * 2) {
              setShowResult(true)
              addPoints(selectedGame.points)
              completeLesson(selectedGame.id, 'game')
            }
          }, 500)
        } else {
          setTimeout(() => {
            setSelectedCards([])
          }, 1000)
        }
      }
    }
  }

  const resetGame = () => {
    setSelectedGame(null)
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
    setMatchedPairs(new Set())
    setSelectedCards([])
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-700'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700'
      case 'Hard':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  if (showResult && selectedGame) {
    const percentage = selectedGame.type === 'quiz' 
      ? (score / quizQuestions[selectedGame.id].length) * 100
      : 100
    const isPerfect = percentage === 100
    const passed = percentage >= 80

    return (
      <div className="max-w-2xl mx-auto animate-fade-in">
        <div className="card text-center space-y-6">
          <div className={`w-24 h-24 mx-auto rounded-full ${passed ? 'bg-gradient-to-br from-green-400 to-emerald-500' : 'bg-gradient-to-br from-yellow-400 to-orange-500'} flex items-center justify-center`}>
            {isPerfect ? (
              <Trophy className="w-12 h-12 text-white" />
            ) : passed ? (
              <Star className="w-12 h-12 text-white" />
            ) : (
              <Target className="w-12 h-12 text-white" />
            )}
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {isPerfect ? 'Perfect Score! 🎉' : passed ? 'Great Job! ⭐' : 'Good Try! 💪'}
            </h2>
            <p className="text-gray-600 text-lg">
              You scored {score} out of {selectedGame.type === 'quiz' ? quizQuestions[selectedGame.id].length : matchingGames[selectedGame.id].items.length}
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-6">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2">
              {Math.round(percentage)}%
            </div>
            <p className="text-gray-600">Accuracy</p>
          </div>

          {passed && (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg">
              🏆 You earned {selectedGame.points} points!
            </div>
          )}

          <div className="flex space-x-4">
            <button onClick={resetGame} className="btn-secondary flex-1 flex items-center justify-center space-x-2">
              <RefreshCw className="w-5 h-5" />
              <span>Try Another Game</span>
            </button>
            <button 
              onClick={() => {
                setShowResult(false)
                setCurrentQuestion(0)
                setScore(0)
                setSelectedAnswer(null)
                setMatchedPairs(new Set())
                setSelectedCards([])
              }}
              className="btn-primary flex-1 flex items-center justify-center space-x-2"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Play Again</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (selectedGame) {
    if (selectedGame.type === 'quiz') {
      const questions = quizQuestions[selectedGame.id]
      const question = questions[currentQuestion]

      return (
        <div className="max-w-2xl mx-auto animate-fade-in">
          <button
            onClick={resetGame}
            className="mb-6 text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Back to Games
          </button>

          <div className="card space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedGame.title}</h2>
                <p className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-600">{score}</div>
                <div className="text-sm text-gray-600">Score</div>
              </div>
            </div>

            {/* Progress */}
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800">{question.question}</h3>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = question.correct === index
                const showFeedback = selectedAnswer !== null

                return (
                  <button
                    key={index}
                    onClick={() => handleQuizAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-lg text-left transition-all duration-200 ${
                      showFeedback && isCorrect
                        ? 'bg-green-100 border-2 border-green-500'
                        : showFeedback && isSelected && !isCorrect
                        ? 'bg-red-100 border-2 border-red-500'
                        : selectedAnswer === null
                        ? 'bg-white border-2 border-gray-200 hover:border-primary-500 hover:shadow-md'
                        : 'bg-white border-2 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        showFeedback && isCorrect
                          ? 'bg-green-500 text-white'
                          : showFeedback && isSelected && !isCorrect
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {showFeedback && isCorrect ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : showFeedback && isSelected && !isCorrect ? (
                          <X className="w-5 h-5" />
                        ) : (
                          String.fromCharCode(65 + index)
                        )}
                      </div>
                      <span className="flex-1 font-medium text-gray-700">{option}</span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Explanation */}
            {selectedAnswer !== null && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 animate-slide-up">
                <p className="text-gray-700">
                  <strong>Explanation:</strong> {question.explanation}
                </p>
              </div>
            )}
          </div>
        </div>
      )
    } else if (selectedGame.type === 'match') {
      const game = matchingGames[selectedGame.id]
      const allCards = [...game.items, ...game.pairs]

      return (
        <div className="max-w-4xl mx-auto animate-fade-in">
          <button
            onClick={resetGame}
            className="mb-6 text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Back to Games
          </button>

          <div className="card space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedGame.title}</h2>
                <p className="text-gray-600">Match shortcuts with their actions</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-600">{score}</div>
                <div className="text-sm text-gray-600">Matched</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {allCards.map((card, index) => {
                const isMatched = matchedPairs.has(index)
                const isSelected = selectedCards.includes(index)

                return (
                  <button
                    key={index}
                    onClick={() => handleMatchCard(index)}
                    disabled={isMatched}
                    className={`p-6 rounded-lg text-center font-medium transition-all duration-200 ${
                      isMatched
                        ? 'bg-green-100 border-2 border-green-500 opacity-50'
                        : isSelected
                        ? 'bg-primary-100 border-2 border-primary-500 shadow-lg scale-105'
                        : 'bg-white border-2 border-gray-200 hover:border-primary-300 hover:shadow-md'
                    }`}
                  >
                    {card}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2 mb-8">
        <h2 className="section-title">Learning Games</h2>
        <p className="text-gray-600 text-lg">
          Test your knowledge and have fun while learning!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {games.map((game) => (
          <div key={game.id} className="card group hover:scale-105 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{game.title}</h3>
                <p className="text-gray-600 mb-3">{game.description}</p>
                
                <div className="flex items-center space-x-3">
                  <span className={`badge ${getDifficultyColor(game.difficulty)}`}>
                    {game.difficulty}
                  </span>
                  <span className="text-sm text-gray-600">🎯 {game.points} pts</span>
                </div>
              </div>
              
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-400 to-purple-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                {game.type === 'quiz' ? (
                  <Target className="w-8 h-8 text-white" />
                ) : (
                  <Zap className="w-8 h-8 text-white" />
                )}
              </div>
            </div>

            <button
              onClick={() => setSelectedGame(game)}
              className="btn-primary w-full"
            >
              Play Now
            </button>
          </div>
        ))}
      </div>

      <div className="card bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
        <div className="text-center space-y-3">
          <Trophy className="w-12 h-12 text-purple-500 mx-auto" />
          <h3 className="text-xl font-bold text-gray-800">Challenge Yourself!</h3>
          <p className="text-gray-600">
            Complete games to earn points and unlock achievements. The more you play, the more you learn!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Games

