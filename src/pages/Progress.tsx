import { Trophy, Award, Target, TrendingUp, BookOpen, Gamepad2, GraduationCap, Calendar, Star, Lock, CheckCircle } from 'lucide-react'
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
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="section-title">Your Learning Progress</h1>
        <p className="section-subtitle">
          Track your achievements and see how far you've come
        </p>
      </div>

      {/* Level Card */}
      <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-8 md:p-10 text-white shadow-hard">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="text-sm font-semibold opacity-90 mb-2 uppercase tracking-wide">Current Level</div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                <Trophy className="w-8 h-8" />
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-black leading-none mb-1">{currentLevel.level}</div>
                <div className="text-xl md:text-2xl font-bold">{currentLevel.name}</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-black mb-2">{totalPoints}</div>
            <div className="text-sm font-semibold opacity-90 uppercase tracking-wide">Total Points</div>
          </div>
        </div>

        {currentLevel.next && (
          <div className="space-y-3 bg-white/10 backdrop-blur rounded-2xl p-6">
            <div className="flex items-center justify-between text-sm font-semibold">
              <span>Progress to Level {currentLevel.level + 1}</span>
              <span>{pointsToNextLevel} points to go</span>
            </div>
            <div className="h-4 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: `${levelProgress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div className="stat-card hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-4xl font-black text-gray-900 mb-1">{categoryStats.tutorial}</div>
          <div className="text-sm font-semibold text-gray-600">Tutorials</div>
        </div>

        <div className="stat-card hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <GraduationCap className="w-6 h-6 text-purple-600" />
          </div>
          <div className="text-4xl font-black text-gray-900 mb-1">{categoryStats.training}</div>
          <div className="text-sm font-semibold text-gray-600">Training</div>
        </div>

        <div className="stat-card hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Gamepad2 className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-4xl font-black text-gray-900 mb-1">{categoryStats.game}</div>
          <div className="text-sm font-semibold text-gray-600">Games</div>
        </div>

        <div className="stat-card hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Award className="w-6 h-6 text-amber-600" />
          </div>
          <div className="text-4xl font-black text-gray-900 mb-1">{unlockedAchievements.length}</div>
          <div className="text-sm font-semibold text-gray-600">Achievements</div>
        </div>
      </div>

      {/* Overall Progress */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <Target className="w-5 h-5 text-purple-600" />
            </div>
            <span>Overall Completion</span>
          </h3>
          <span className="text-4xl font-black text-purple-600">
            {Math.round(completionPercentage)}%
          </span>
        </div>
        <div className="progress-bar h-4 mb-4">
          <div 
            className="progress-fill"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
        <p className="text-gray-600 font-medium">
          {completedLessons.length} of ~{totalLessons} lessons completed
        </p>
      </div>

      {/* Achievements */}
      <div className="card">
        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Award className="w-5 h-5 text-amber-600" />
          </div>
          <span>Achievements</span>
        </h3>

        <div className="space-y-8">
          {/* Unlocked Achievements */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-lg">Unlocked ({unlockedAchievements.length})</h4>
            {unlockedAchievements.length === 0 ? (
              <p className="text-gray-600">No achievements unlocked yet. Keep learning!</p>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {unlockedAchievements.map((achievement) => (
                  <div 
                    key={achievement.id}
                    className="bg-green-50 border-2 border-green-500 rounded-2xl p-5 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="font-bold text-gray-900">{achievement.title}</h5>
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{achievement.description}</p>
                      {achievement.unlockedAt && (
                        <p className="text-xs text-gray-500 font-medium">
                          Unlocked {formatDate(achievement.unlockedAt)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Locked Achievements */}
          {lockedAchievements.length > 0 && (
            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Locked ({lockedAchievements.length})</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {lockedAchievements.map((achievement) => (
                  <div 
                    key={achievement.id}
                    className="content-box flex items-start gap-4 opacity-60"
                  >
                    <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 grayscale">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="font-bold text-gray-900">{achievement.title}</h5>
                        <Lock className="w-4 h-4 text-gray-500" />
                      </div>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
            <Calendar className="w-5 h-5 text-blue-600" />
          </div>
          <span>Recent Activity</span>
        </h3>

        {recentActivity.length > 0 ? (
          <div className="space-y-3">
            {recentActivity.map((lesson) => (
              <div 
                key={lesson.id}
                className="flex items-center justify-between p-5 content-box hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {lesson.category === 'tutorial' && <BookOpen className="w-6 h-6" />}
                    {lesson.category === 'training' && <GraduationCap className="w-6 h-6" />}
                    {lesson.category === 'game' && <Gamepad2 className="w-6 h-6" />}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 capitalize">
                      Completed {lesson.category}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{lesson.id}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-600">
                    {formatDate(lesson.completedAt)}
                  </span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-600 font-medium mb-1">No activity yet</p>
            <p className="text-gray-500 text-sm">Start learning to see your progress here!</p>
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

