import { Trophy, Award, Target, TrendingUp, BookOpen, Gamepad2, GraduationCap, Calendar } from 'lucide-react'
import { useProgress } from '../contexts/ProgressContext'

const Progress = () => {
  const { completedLessons, achievements, totalPoints } = useProgress()

  const categoryStats = {
    tutorial: completedLessons.filter(l => l.category === 'tutorial').length,
    training: completedLessons.filter(l => l.category === 'training').length,
    game: completedLessons.filter(l => l.category === 'game').length,
  }

  const unlockedAchievements = achievements.filter(a => a.unlocked)
  const lockedAchievements = achievements.filter(a => !a.unlocked)

  const totalLessons = 30 // Approximate total lessons available
  const completionPercentage = Math.min((completedLessons.length / totalLessons) * 100, 100)

  const getLevel = (points: number) => {
    if (points < 500) return { level: 1, name: 'Beginner', next: 500 }
    if (points < 1000) return { level: 2, name: 'Learner', next: 1000 }
    if (points < 2000) return { level: 3, name: 'Practitioner', next: 2000 }
    if (points < 3500) return { level: 4, name: 'Expert', next: 3500 }
    if (points < 5000) return { level: 5, name: 'Master', next: 5000 }
    return { level: 6, name: 'Guru', next: null }
  }

  const currentLevel = getLevel(totalPoints)
  const pointsToNextLevel = currentLevel.next ? currentLevel.next - totalPoints : 0
  const levelProgress = currentLevel.next 
    ? ((totalPoints % 1000) / 1000) * 100 
    : 100

  const recentActivity = completedLessons
    .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
    .slice(0, 5)

  const formatDate = (date: Date) => {
    const d = new Date(date)
    const now = new Date()
    const diffMs = now.getTime() - d.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays}d ago`
    return d.toLocaleDateString()
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-2 mb-8">
        <h2 className="section-title">Your Progress</h2>
        <p className="text-gray-600 text-lg">
          Track your learning journey and celebrate achievements
        </p>
      </div>

      {/* Level Card */}
      <div className="card bg-gradient-to-br from-primary-500 via-accent-500 to-purple-500 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-sm opacity-90 mb-1">Current Level</div>
            <div className="flex items-center space-x-3">
              <Trophy className="w-10 h-10" />
              <div>
                <div className="text-4xl font-bold">{currentLevel.level}</div>
                <div className="text-lg font-semibold">{currentLevel.name}</div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-5xl font-bold">{totalPoints}</div>
            <div className="text-sm opacity-90">Total Points</div>
          </div>
        </div>

        {currentLevel.next && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progress to Level {currentLevel.level + 1}</span>
              <span>{pointsToNextLevel} points to go</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: `${levelProgress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card text-center">
          <BookOpen className="w-10 h-10 mx-auto mb-3 text-primary-500" />
          <div className="text-3xl font-bold text-gray-800">{categoryStats.tutorial}</div>
          <div className="text-gray-600">Tutorials</div>
        </div>

        <div className="card text-center">
          <GraduationCap className="w-10 h-10 mx-auto mb-3 text-purple-500" />
          <div className="text-3xl font-bold text-gray-800">{categoryStats.training}</div>
          <div className="text-gray-600">Training Modules</div>
        </div>

        <div className="card text-center">
          <Gamepad2 className="w-10 h-10 mx-auto mb-3 text-accent-500" />
          <div className="text-3xl font-bold text-gray-800">{categoryStats.game}</div>
          <div className="text-gray-600">Games Played</div>
        </div>

        <div className="card text-center">
          <Award className="w-10 h-10 mx-auto mb-3 text-yellow-500" />
          <div className="text-3xl font-bold text-gray-800">{unlockedAchievements.length}</div>
          <div className="text-gray-600">Achievements</div>
        </div>
      </div>

      {/* Overall Progress */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 flex items-center space-x-2">
            <Target className="w-6 h-6 text-primary-500" />
            <span>Overall Completion</span>
          </h3>
          <span className="text-2xl font-bold text-primary-600">
            {Math.round(completionPercentage)}%
          </span>
        </div>
        <div className="progress-bar h-4">
          <div 
            className="progress-fill"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
        <p className="text-gray-600 text-sm mt-3">
          {completedLessons.length} of ~{totalLessons} lessons completed
        </p>
      </div>

      {/* Achievements */}
      <div className="card">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
          <Award className="w-6 h-6 text-accent-500" />
          <span>Achievements</span>
        </h3>

        {/* Unlocked Achievements */}
        {unlockedAchievements.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-700 mb-3">Unlocked ({unlockedAchievements.length})</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {unlockedAchievements.map((achievement) => (
                <div 
                  key={achievement.id}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-4 flex items-start space-x-3"
                >
                  <div className="text-3xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h5 className="font-bold text-gray-800">{achievement.title}</h5>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                    {achievement.unlockedAt && (
                      <p className="text-xs text-gray-500 mt-1">
                        Unlocked {formatDate(achievement.unlockedAt)}
                      </p>
                    )}
                  </div>
                  <Trophy className="w-5 h-5 text-yellow-600" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Locked Achievements */}
        {lockedAchievements.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Locked ({lockedAchievements.length})</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lockedAchievements.map((achievement) => (
                <div 
                  key={achievement.id}
                  className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 flex items-start space-x-3 opacity-60"
                >
                  <div className="text-3xl grayscale">{achievement.icon}</div>
                  <div className="flex-1">
                    <h5 className="font-bold text-gray-800">{achievement.title}</h5>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-gray-400" />
                </div>
              ))}
            </div>
          </div>
        )}

        {unlockedAchievements.length === 0 && (
          <div className="text-center py-12">
            <Award className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 mb-2">No achievements unlocked yet</p>
            <p className="text-gray-400 text-sm">Complete lessons to start earning achievements!</p>
          </div>
        )}
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
          <TrendingUp className="w-6 h-6 text-green-500" />
          <span>Recent Activity</span>
        </h3>

        {recentActivity.length > 0 ? (
          <div className="space-y-3">
            {recentActivity.map((lesson) => (
              <div 
                key={lesson.id}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg"
              >
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  {lesson.category === 'tutorial' && <BookOpen className="w-5 h-5 text-white" />}
                  {lesson.category === 'training' && <GraduationCap className="w-5 h-5 text-white" />}
                  {lesson.category === 'game' && <Gamepad2 className="w-5 h-5 text-white" />}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 capitalize">
                    Completed {lesson.category}
                  </div>
                  <div className="text-sm text-gray-600">{lesson.id}</div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(lesson.completedAt)}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <TrendingUp className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 mb-2">No activity yet</p>
            <p className="text-gray-400 text-sm">Start learning to see your progress here!</p>
          </div>
        )}
      </div>

      {/* Motivational Card */}
      <div className="card bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center space-y-4">
        <Trophy className="w-16 h-16 mx-auto" />
        <h3 className="text-2xl font-bold">Keep Going! 🚀</h3>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          {completedLessons.length === 0 
            ? "Start your learning journey today and watch your skills grow!"
            : completedLessons.length < 5
            ? "Great start! You're building momentum. Keep it up!"
            : completedLessons.length < 15
            ? "You're making excellent progress! You're well on your way to mastery."
            : "Wow! You're a Cursor power user now! Keep pushing your limits!"
          }
        </p>
        {pointsToNextLevel > 0 && (
          <p className="text-sm opacity-90">
            Just {pointsToNextLevel} more points to reach Level {currentLevel.level + 1}!
          </p>
        )}
      </div>
    </div>
  )
}

export default Progress

