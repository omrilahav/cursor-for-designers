# Cursor Design Academy 🎓

![Cursor Design Academy](https://img.shields.io/badge/Built%20with-Cursor%20AI-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178c6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8?style=for-the-badge&logo=tailwindcss)

**A comprehensive, interactive learning platform for product designers to master Cursor and build amazing designs with AI assistance.**

> **For Complete Beginners:** Never touched code? Never used a terminal? No problem! This academy is specifically designed for designers with ZERO coding experience.

## 🌟 Features

### 🎯 Absolute Beginner Content (NEW!)
- **Complete Beginner Guide** - Explains what coding, IDEs, terminals, and Git actually are
- **IDE Basics Tutorial** - Master the Cursor interface from scratch
- **Terminal Basics** - Learn the 10 commands you actually need
- **Git Basics** - Save your work like a pro
- **All explained in plain English for designers!**

### 📚 Interactive Tutorials
- Step-by-step guided lessons
- Hands-on exercises
- Real-world examples
- Progress tracking

### 🎓 Comprehensive Training
- Keyboard shortcuts mastery
- AI features deep dive
- File and project management
- Terminal and Git integration
- Extensions and customization

### 🎮 Gamified Learning
- Interactive quizzes
- Matching games
- Challenge modes
- Points and achievements
- Leaderboard system

### 💡 Best Practices
- AI prompt writing
- Code organization
- Design systems
- Responsive design
- Accessibility guidelines
- Team collaboration

### ⚙️ Configuration Guides
- Cursor settings optimization
- `.cursorrules` setup
- Prettier configuration
- TypeScript setup
- Git integration
- Recommended extensions

### 🤝 Specs Sharing
- Code documentation
- Design system creation
- Interactive prototypes
- GitHub workflows
- Figma-to-code handoff
- Developer collaboration

### 🏆 Progress Tracking
- Experience points system
- Achievement badges
- Level progression
- Activity history
- Completion statistics

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- A modern web browser
- (Optional) Cursor IDE for the best learning experience

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cursor-design-academy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📖 How to Use

### For Complete Beginners (Zero Coding Experience)

**Start Here → [Beginner Guide](/beginner-guide)**

1. **Beginner Guide** (30 min)
   - What is coding? (explained simply)
   - What is an IDE, Terminal, Git?
   - Address your fears
   - Understand the basics

2. **IDE Basics** (1-2 hours)
   - Navigate Cursor interface
   - Open files, use shortcuts
   - Use AI features
   - Complete hands-on exercises

3. **Terminal Basics** (1 hour)
   - Learn 10 essential commands
   - Run your first project
   - Stop being scared of the black screen!

4. **Git Basics** (1 hour)
   - Track your changes
   - Save "checkpoints"
   - Never lose work again

5. **Then proceed to Tutorials →** Start building!

### Suggested Learning Path

📖 **See [COMPLETE_LEARNING_PATH.md](COMPLETE_LEARNING_PATH.md) for the full 8-week roadmap!**

**Week 1: Understanding Basics**
- Beginner Guide (understand concepts)
- IDE Basics (navigate Cursor)
- Terminal Basics (essential commands)
- Git Basics (save your work)
- First tutorial: "Getting Started"

**Week 2: Building with AI**
- "Mastering AI Commands" tutorial
- "From Design to Code" tutorial
- AI Features training
- Build first component
- Play quiz games

**Week 3: Professional Workflow**
- "Setting Up Projects" tutorial
- All Best Practices guides
- File management training
- Build responsive nav bar

**Week 4: Configuration & Tools**
- Set up Cursor properly
- Install extensions
- Configure Prettier
- Learn all specs sharing methods

**Week 5-8: Real Projects**
- Landing page
- Dashboard
- Portfolio site
- Deploy online!

## 🛠️ Tech Stack

- **React 18.2** - UI library
- **TypeScript 5.2** - Type safety
- **Vite 5.0** - Build tool
- **Tailwind CSS 3.3** - Styling
- **React Router 6.20** - Navigation
- **Lucide React** - Icons
- **Framer Motion** - Animations

## 📁 Project Structure

```
cursor-design-academy/
├── src/
│   ├── components/       # Reusable UI components
│   │   └── Layout.tsx   # Main app layout
│   ├── contexts/        # React contexts
│   │   └── ProgressContext.tsx  # Progress tracking
│   ├── pages/           # Page components
│   │   ├── Home.tsx              # Landing page
│   │   ├── BeginnerGuide.tsx    # 🆕 Absolute beginner concepts
│   │   ├── IDEBasics.tsx        # 🆕 Complete IDE tutorial
│   │   ├── TerminalBasics.tsx   # 🆕 Terminal for designers
│   │   ├── GitBasics.tsx        # 🆕 Git explained simply
│   │   ├── Tutorials.tsx        # Interactive step-by-step
│   │   ├── Training.tsx         # Deep-dive modules
│   │   ├── Games.tsx            # Gamified learning
│   │   ├── BestPractices.tsx    # Professional tips
│   │   ├── Configuration.tsx    # Setup guides
│   │   ├── SpecsSharing.tsx     # Team collaboration
│   │   └── Progress.tsx         # Achievements & stats
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/
│   └── screenshots/     # 🆕 Tutorial images
├── COMPLETE_LEARNING_PATH.md  # 🆕 Full 8-week roadmap
├── GETTING_STARTED.md   # Quick start guide
├── FEATURES.md          # Complete feature list
├── package.json         # Dependencies
└── README.md           # This file
```

## 🎨 Customization

### Colors

The app uses a beautiful gradient color scheme. To customize:

1. Edit `tailwind.config.js` - update the color palette
2. Update colors in `src/index.css` for global styles

### Content

To add or modify learning content:

1. **Tutorials**: Edit `src/pages/Tutorials.tsx`
2. **Training**: Edit `src/pages/Training.tsx`
3. **Games**: Edit `src/pages/Games.tsx`
4. **Best Practices**: Edit `src/pages/BestPractices.tsx`

### Achievements

To add new achievements:

1. Edit `src/contexts/ProgressContext.tsx`
2. Add to `initialAchievements` array
3. Create unlock conditions in the context

## 🤝 Contributing

This is a learning project! Feel free to:

- Add new tutorials
- Create more games
- Improve existing content
- Fix bugs
- Enhance the UI

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📊 Content Overview

This comprehensive academy includes:

- **12 Complete Pages** with full navigation
- **4 Beginner Foundation Guides** - IDE, Terminal, Git basics from zero
- **4 Comprehensive Tutorials** with 16+ interactive steps
- **5 Training Modules** with 20+ detailed lessons
- **4 Interactive Games** - quizzes and matching challenges
- **8 Best Practice Guides** with do's/don'ts and examples
- **7 Configuration Sections** with copy-paste code
- **6 Sharing Methods** for designer-developer collaboration
- **7 Unlockable Achievements** with gamification
- **6 Levels** of progression (Beginner → Guru)
- **~5,000+ lines** of educational content
- **Screenshots & Visual Aids** throughout for clarity

## 🎯 Learning Objectives

By completing this academy, you will:

- ✅ Master Cursor's AI-powered features
- ✅ Learn to communicate effectively with AI
- ✅ Build designs with code confidently
- ✅ Understand professional development workflows
- ✅ Create maintainable, organized code
- ✅ Collaborate effectively with developers
- ✅ Set up an optimized development environment

## 💪 Motivation

**"The best way to learn is by doing."**

This academy is built on the principle that product designers can and should learn to code. With AI-powered tools like Cursor, the barrier to entry has never been lower. You don't need to become a full-stack developer, but understanding code empowers you to:

- Prototype faster
- Communicate better with dev teams
- Understand technical constraints
- Build more feasible designs
- Bring your ideas to life independently

## 🌈 Design Philosophy

- **Simple**: No unnecessary complexity
- **Beautiful**: Aesthetically pleasing and modern
- **Interactive**: Learning by doing, not just reading
- **Encouraging**: Positive reinforcement and gamification
- **Practical**: Real-world applicable knowledge

## 📚 Additional Resources

- [Cursor Documentation](https://docs.cursor.com)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Documentation](https://www.typescriptlang.org)

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process using the port
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check TypeScript errors
npm run build

# Fix common issues
npm run lint --fix
```

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

Built with ❤️ for product designers learning to code with Cursor.

---

**Ready to start your journey?** Run `npm run dev` and open the app! 🚀

*Remember: Every expert was once a beginner. You've got this!* 💪

