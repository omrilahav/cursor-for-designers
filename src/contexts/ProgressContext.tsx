import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlocked: boolean
  unlockedAt?: Date
}

interface CompletedLesson {
  id: string
  category: string
  completedAt: Date
}

interface ProgressContextType {
  completedLessons: CompletedLesson[]
  achievements: Achievement[]
  totalPoints: number
  completeLesson: (id: string, category: string) => void
  unlockAchievement: (id: string) => void
  addPoints: (points: number) => void
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

const initialAchievements: Achievement[] = [
  { id: 'first-steps', title: 'First Steps', description: 'Complete your first tutorial', icon: '👣', unlocked: false },
  { id: 'cursor-novice', title: 'Cursor Novice', description: 'Complete 5 lessons', icon: '🎓', unlocked: false },
  { id: 'cursor-expert', title: 'Cursor Expert', description: 'Complete all tutorials', icon: '🏆', unlocked: false },
  { id: 'game-master', title: 'Game Master', description: 'Complete all games with perfect score', icon: '🎮', unlocked: false },
  { id: 'config-wizard', title: 'Config Wizard', description: 'Set up all configurations', icon: '⚙️', unlocked: false },
  { id: 'team-player', title: 'Team Player', description: 'Learn all specs sharing methods', icon: '🤝', unlocked: false },
  { id: 'point-collector', title: 'Point Collector', description: 'Earn 1000 points', icon: '💎', unlocked: false },
]

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [completedLessons, setCompletedLessons] = useState<CompletedLesson[]>(() => {
    const saved = localStorage.getItem('completedLessons')
    return saved ? JSON.parse(saved) : []
  })

  const [achievements, setAchievements] = useState<Achievement[]>(() => {
    const saved = localStorage.getItem('achievements')
    return saved ? JSON.parse(saved) : initialAchievements
  })

  const [totalPoints, setTotalPoints] = useState<number>(() => {
    const saved = localStorage.getItem('totalPoints')
    return saved ? parseInt(saved) : 0
  })

  useEffect(() => {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons))
  }, [completedLessons])

  useEffect(() => {
    localStorage.setItem('achievements', JSON.stringify(achievements))
  }, [achievements])

  useEffect(() => {
    localStorage.setItem('totalPoints', totalPoints.toString())
  }, [totalPoints])

  const completeLesson = (id: string, category: string) => {
    if (!completedLessons.find(l => l.id === id)) {
      const newLesson: CompletedLesson = {
        id,
        category,
        completedAt: new Date()
      }
      setCompletedLessons([...completedLessons, newLesson])
      addPoints(100)

      // Check for achievements
      const newCompletedCount = completedLessons.length + 1
      if (newCompletedCount === 1) {
        unlockAchievement('first-steps')
      } else if (newCompletedCount === 5) {
        unlockAchievement('cursor-novice')
      } else if (newCompletedCount >= 20) {
        unlockAchievement('cursor-expert')
      }
    }
  }

  const unlockAchievement = (id: string) => {
    setAchievements(prev => 
      prev.map(achievement => 
        achievement.id === id && !achievement.unlocked
          ? { ...achievement, unlocked: true, unlockedAt: new Date() }
          : achievement
      )
    )
  }

  const addPoints = (points: number) => {
    const newTotal = totalPoints + points
    setTotalPoints(newTotal)
    
    if (newTotal >= 1000 && !achievements.find(a => a.id === 'point-collector')?.unlocked) {
      unlockAchievement('point-collector')
    }
  }

  return (
    <ProgressContext.Provider value={{
      completedLessons,
      achievements,
      totalPoints,
      completeLesson,
      unlockAchievement,
      addPoints
    }}>
      {children}
    </ProgressContext.Provider>
  )
}

export const useProgress = () => {
  const context = useContext(ProgressContext)
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
}

